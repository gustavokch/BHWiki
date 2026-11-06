import { existsSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { loadCorpus, parseContentSource, serializeContent } from "../src/lib/content-markdown";
import { validateCanonicalSources } from "../src/lib/publication-metadata";
import { validateContent } from "../src/lib/validate-content";
import {
  CANDIDATES_PATH, CROSSWALK_PATH, PSYCHONAUTWIKI_SOURCE_ID, SNAPSHOT_PATH,
  applyPsychonautWiki, assertDraft, assertSnapshot, canonicalPageUrl, hasDoseBands, hasPsychonautWikiData,
  readJson, unreviewedMatches, validateCrosswalk, withoutPsychonautWiki,
  type Crosswalk, type PwSnapshot,
} from "./psychonautwiki-data";

export function importPsychonautWiki(root: string) {
  const snapshot = readJson<PwSnapshot>(root, SNAPSHOT_PATH);
  const crosswalk = readJson<Crosswalk>(root, CROSSWALK_PATH);
  assertSnapshot(snapshot);
  const content = path.join(root, "content");
  const corpus = loadCorpus(content);
  validateCrosswalk(crosswalk, new Set(corpus.substances.map((article) => article.slug)), snapshot);
  const missing = unreviewedMatches(corpus.substances, snapshot, crosswalk);
  if (missing.length) throw new Error(`Crosswalk needs a decision for: ${missing.map((match) => `${match.slug} → ${match.pwName}`).join(", ")}`);

  const pwByName = new Map(snapshot.substances.map((substance) => [substance.name, substance]));
  const sameSubstance = new Map(crosswalk.entries.filter((entry) => entry.relation === "same-substance").map((entry) => [entry.slug, entry.pwName]));
  const pending: [string, string][] = [];
  const summary = { sameSubstance: sameSubstance.size, enriched: 0, stripped: 0, doseRecords: 0, durationRoutes: 0, candidates: 0 };
  corpus.substances = corpus.substances.map((article) => {
    const pwName = sameSubstance.get(article.slug);
    if (!pwName && !hasPsychonautWikiData(article)) return article;
    assertDraft(article);
    // Articles no longer marked same-substance lose any previously imported records.
    let record;
    if (pwName) {
      try {
        record = applyPsychonautWiki(article, pwByName.get(pwName)!, snapshot);
      } catch (error) {
        throw new Error(`${article.slug} → ${pwName}: ${(error as Error).message}`);
      }
    } else {
      record = withoutPsychonautWiki(article);
      summary.stripped++;
    }
    if (pwName && hasPsychonautWikiData(record)) summary.enriched++;
    summary.doseRecords += record.doses.filter((dose) => dose.sourceId === PSYCHONAUTWIKI_SOURCE_ID).length;
    summary.durationRoutes += (record.kinetics.timeline ?? []).filter((route) => route.sourceId === PSYCHONAUTWIKI_SOURCE_ID).length;
    const file = `substances/${article.slug}.md`;
    const order = parseContentSource(file, readFileSync(path.join(content, file), "utf8")).order;
    pending.push([path.join(content, file), serializeContent(file, { collection: "substances", record, order })]);
    return record;
  });

  validateContent(corpus);
  validateCanonicalSources(corpus.substances.flatMap((article) => article.references));
  for (const [file, source] of pending) if (!existsSync(file) || readFileSync(file, "utf8") !== source) writeFileSync(file, source);

  const covered = new Set(crosswalk.entries.filter((entry) => entry.relation !== "rejected").map((entry) => entry.pwName));
  const candidates = snapshot.substances
    .filter((substance) => !covered.has(substance.name))
    .map((substance) => ({ name: substance.name, url: canonicalPageUrl(substance.url), hasDoseData: hasDoseBands(substance) }));
  writeFileSync(path.join(root, CANDIDATES_PATH), `${JSON.stringify({ schemaVersion: 1, retrievedAt: snapshot.retrievedAt, candidates }, null, 2)}\n`);
  summary.candidates = candidates.length;
  return summary;
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  console.log(importPsychonautWiki(path.resolve(import.meta.dirname, "..")));
}
