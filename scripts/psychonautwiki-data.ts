import { readFileSync } from "node:fs";
import path from "node:path";
import type { DoseContext, DurationPhase, DurationPhaseName, DurationRoute, Reference, Substance, TimeSpan, TimeUnit } from "../src/lib/types";

export const PSYCHONAUTWIKI_SOURCE_ID = "psychonautwiki";
export const SNAPSHOT_PATH = "data/imports/psychonautwiki.json";
export const CROSSWALK_PATH = "data/imports/psychonautwiki-crosswalk.json";
export const CANDIDATES_PATH = "data/imports/psychonautwiki-candidates.json";
export const INTERACTION_CAPTURE_PATH = "data/imports/local/psychonautwiki-interactions.json";
export const INTERACTION_REVIEWS_PATH = "data/imports/psychonautwiki-interaction-reviews.json";

export type PwRange = { min: number | null; max: number | null };
export type PwSpan = PwRange & { units: string | null };
export type PwDose = { units: string | null; threshold: number | null; heavy: number | null; light: PwRange | null; common: PwRange | null; strong: PwRange | null };
export type PwDuration = { onset: PwSpan | null; comeup: PwSpan | null; peak: PwSpan | null; offset: PwSpan | null; afterglow: PwSpan | null; total: PwSpan | null };
export type PwRoa = { name: string; dose: PwDose | null; duration: PwDuration | null };
export type PwSubstance = { name: string; url: string; commonNames: string[] | null; systematicName: string | null; roas: PwRoa[] | null };
export type PwSnapshot = {
  schemaVersion: 1;
  source: string;
  license: string;
  retrievedAt: string;
  snapshotBuiltOn: string;
  health: { substances: number; aliases: number; snapshotAgeSeconds: number; version: string };
  substances: PwSubstance[];
};
export type CrosswalkRelation = "same-substance" | "preparation" | "rejected";
export type CrosswalkEntry = { slug: string; pwName: string; relation: CrosswalkRelation; reason?: string };
export type Crosswalk = { schemaVersion: 1; reviewedAt: string; entries: CrosswalkEntry[] };
export type InteractionCategory = "dangerous" | "unsafe" | "uncertain";
export type InteractionCapture = { schemaVersion: 1; retrievedAt: string; interactions: { substance: string; category: InteractionCategory; target: string }[] };

const isoDate = /^\d{4}-\d{2}-\d{2}$/;

export function readJson<T>(root: string, relative: string): T {
  return JSON.parse(readFileSync(path.join(root, relative), "utf8")) as T;
}

export function nameKey(value: string): string {
  return value.normalize("NFKD").toLowerCase().replace(/[^\p{L}\p{N}]/gu, "");
}

export function canonicalPageUrl(apiUrl: string): string {
  const url = new URL(apiUrl);
  const title = url.pathname.startsWith("/wiki/") ? decodeURIComponent(url.pathname.slice("/wiki/".length)).replace(/ /g, "_") : "";
  if (url.hostname !== "psychonautwiki.org" || !title || title.includes("/")) throw new Error(`Not a PsychonautWiki page URL: ${apiUrl}`);
  return new URL(`/wiki/${title}`, "https://psychonautwiki.org").href;
}

const doseUnits = new Map([["mg", "mg"], ["g", "g"], ["mL", "mL"], ["\u00b5g", "\u00b5g"], ["\u03bcg", "\u00b5g"]]);
export function doseUnit(units: string | null): string {
  const unit = units === null ? undefined : doseUnits.get(units);
  if (!unit) throw new Error(`Unsupported PsychonautWiki dose unit: ${units}`);
  return unit;
}

const timeUnits = new Map<string, TimeUnit>([["second", "seconds"], ["seconds", "seconds"], ["minute", "minutes"], ["minutes", "minutes"], ["hour", "hours"], ["hours", "hours"]]);
export function timeUnit(units: string | null): TimeUnit {
  const unit = units === null ? undefined : timeUnits.get(units.trim().toLowerCase());
  if (!unit) throw new Error(`Unsupported PsychonautWiki time unit: ${units}`);
  return unit;
}

// Labels match the route tabs in src/components/route-dose-tabs.tsx (routeId).
const routeLabels = new Map([
  ["oral", "Oral"], ["sublingual", "Sublingual"], ["buccal", "Buccal"], ["insufflated", "Intranasal (insufflated)"],
  ["smoked", "Smoked"], ["inhaled", "Inhaled"], ["vaporized", "Vaporized"], ["intravenous", "Intravenous"],
  ["intramuscular", "Intramuscular"], ["rectal", "Rectal"], ["transdermal", "Transdermal"],
]);
export function routeLabel(name: string): string {
  const label = routeLabels.get(name.trim().toLowerCase());
  if (!label) throw new Error(`Unsupported PsychonautWiki route: ${name}`);
  return label;
}

const numberText = new Intl.NumberFormat("en", { maximumFractionDigits: 6, useGrouping: false });
function amountText(min: number, max: number | null, unit: string): string {
  return max === null || max === min ? `${numberText.format(min)} ${unit}` : `${numberText.format(min)}–${numberText.format(max)} ${unit}`;
}

const doseLabels = { threshold: "Threshold dose", light: "Light dose band", common: "Common dose band", strong: "Strong dose band" } as const;
type DoseBand = { name: "threshold" | "light" | "common" | "strong" | "heavy"; min: number; max: number | null };

export function doseRecords(roa: PwRoa, ingredient: string, snapshotBuiltOn: string): DoseContext[] {
  const dose = roa.dose;
  if (!dose) return [];
  const bands: DoseBand[] = [];
  if (dose.threshold !== null) bands.push({ name: "threshold", min: dose.threshold, max: null });
  for (const name of ["light", "common", "strong"] as const) {
    const range = dose[name];
    if (range === null || (range.min === null && range.max === null)) continue;
    if (range.min === null || range.max === null) throw new Error(`${roa.name} ${name} dose band is incomplete`);
    if (range.max < range.min) throw new Error(`${roa.name} ${name} dose band is reversed`);
    bands.push({ name, min: range.min, max: range.max });
  }
  if (dose.heavy !== null) bands.push({ name: "heavy", min: dose.heavy, max: null });
  if (!bands.length) return [];
  const unit = doseUnit(dose.units);
  const route = routeLabel(roa.name);
  return bands.map(({ name, min, max }): DoseContext => {
    const amount = name === "heavy" ? `${amountText(min, null, unit)} and above` : amountText(min, max, unit);
    return {
      label: name === "heavy" ? `Heavy dose band (${amount})` : doseLabels[name],
      amount,
      quantity: min,
      quantityMax: max === null || max === min ? null : max,
      unit,
      ingredient,
      formulation: "Not established",
      route,
      frequency: "Not established",
      duration: "Not established",
      population: "Not established",
      purpose: "PsychonautWiki dosage classification",
      sourceCategory: "community",
      note: `Band from the PsychonautWiki API snapshot built about ${snapshotBuiltOn}.`,
      sourceId: PSYCHONAUTWIKI_SOURCE_ID,
    };
  });
}

const phaseFields: [Exclude<keyof PwDuration, "total">, DurationPhaseName][] = [
  ["onset", "onset"], ["comeup", "comeup"], ["peak", "peak"], ["offset", "offset"], ["afterglow", "after-effects"],
];

function timeSpan(value: PwSpan | null, where: string): TimeSpan | null {
  if (value === null || (value.min === null && value.max === null)) return null;
  if (value.min !== null && value.max !== null && value.max < value.min) throw new Error(`${where} duration range is reversed`);
  return { min: value.min, max: value.max, unit: timeUnit(value.units) };
}

export function durationRoute(roa: PwRoa): DurationRoute | null {
  const duration = roa.duration;
  if (!duration) return null;
  const phases: DurationPhase[] = [];
  for (const [field, name] of phaseFields) {
    const span = timeSpan(duration[field], `${roa.name} ${field}`);
    // PsychonautWiki's onset is time to first effects; come-up, peak, offset and afterglow are phase lengths.
    if (span) phases.push({ name, basis: name === "onset" ? "elapsed-since-exposure" : "phase-duration", ...span });
  }
  const total = timeSpan(duration.total, `${roa.name} total`);
  if (!phases.length && !total) return null;
  return {
    id: `${PSYCHONAUTWIKI_SOURCE_ID}-${roa.name.trim().toLowerCase()}`,
    measurement: "subjective",
    route: routeLabel(roa.name),
    population: "Ranges compiled by PsychonautWiki contributors",
    sourceId: PSYCHONAUTWIKI_SOURCE_ID,
    note: "PsychonautWiki community duration ranges for this route.",
    total,
    phases,
  };
}

export function psychonautwikiReference(pw: PwSubstance, snapshot: Pick<PwSnapshot, "retrievedAt" | "snapshotBuiltOn">): Reference {
  return {
    id: PSYCHONAUTWIKI_SOURCE_ID,
    title: `${pw.name}: PsychonautWiki dose and duration data`,
    authors: "PsychonautWiki contributors",
    year: Number(snapshot.retrievedAt.slice(0, 4)),
    url: canonicalPageUrl(pw.url),
    kind: "Community wiki data · CC BY 4.0",
    insight: `Source of this page's community dose bands and subjective duration ranges, from the PsychonautWiki API snapshot built about ${snapshot.snapshotBuiltOn} and retrieved ${snapshot.retrievedAt}. The structured data is used under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/); BHWiki normalized unit symbols and route names.`,
    limitation: `PsychonautWiki states: "PW's dosage information is gathered from users and resources for educational purposes only. It is not a recommendation and should be verified with other sources for accuracy." Its dose and duration values carry no per-value citations.`,
  };
}

export function hasPsychonautWikiData(article: Substance): boolean {
  return article.references.some((reference) => reference.id === PSYCHONAUTWIKI_SOURCE_ID)
    || article.doses.some((dose) => dose.sourceId === PSYCHONAUTWIKI_SOURCE_ID)
    || (article.kinetics.timeline ?? []).some((route) => route.sourceId === PSYCHONAUTWIKI_SOURCE_ID);
}

export function hasDoseBands(pw: PwSubstance): boolean {
  return (pw.roas ?? []).some(({ dose }) => dose !== null && (
    dose.threshold !== null || dose.heavy !== null
    || [dose.light, dose.common, dose.strong].some((range) => range !== null && (range.min !== null || range.max !== null))
  ));
}

/** The article exactly as it was before any PsychonautWiki import. */
export function withoutPsychonautWiki(article: Substance): Substance {
  const result = structuredClone(article);
  result.doses = result.doses.filter((dose) => dose.sourceId !== PSYCHONAUTWIKI_SOURCE_ID);
  result.references = result.references.filter((reference) => reference.id !== PSYCHONAUTWIKI_SOURCE_ID);
  if (result.kinetics.timeline) {
    const timeline = result.kinetics.timeline.filter((route) => route.sourceId !== PSYCHONAUTWIKI_SOURCE_ID);
    if (timeline.length) result.kinetics.timeline = timeline;
    else delete result.kinetics.timeline;
  }
  return result;
}

export function assertDraft(article: Substance): void {
  // A reviewed article must be deliberately reconciled, never silently changed by an acquisition script.
  if (article.editorialStatus === "editorially-reviewed") throw new Error(`Manual reconciliation required for reviewed article: ${article.slug}`);
}

export function applyPsychonautWiki(article: Substance, pw: PwSubstance, snapshot: PwSnapshot): Substance {
  assertDraft(article);
  const result = withoutPsychonautWiki(article);
  const roas = pw.roas ?? [];
  const doses = roas.flatMap((roa) => doseRecords(roa, article.name, snapshot.snapshotBuiltOn));
  const routes = roas.map(durationRoute).filter((route): route is DurationRoute => route !== null);
  if (!doses.length && !routes.length) return result;
  result.doses.push(...doses);
  if (routes.length) result.kinetics.timeline = [...(result.kinetics.timeline ?? []), ...routes];
  result.references.push(psychonautwikiReference(pw, snapshot));
  return result;
}

export function assertSnapshot(snapshot: PwSnapshot): void {
  if (snapshot.schemaVersion !== 1 || !isoDate.test(snapshot.retrievedAt) || !isoDate.test(snapshot.snapshotBuiltOn) || !Array.isArray(snapshot.substances) || !snapshot.substances.length) {
    throw new Error("Unexpected PsychonautWiki snapshot format");
  }
}

/** One substance per line keeps refresh diffs reviewable. */
export function formatSnapshot(snapshot: PwSnapshot): string {
  const { substances, ...header } = snapshot;
  const head = JSON.stringify(header, null, 2).slice(0, -2);
  return `${head},\n  "substances": [\n${substances.map((substance) => `    ${JSON.stringify(substance)}`).join(",\n")}\n  ]\n}\n`;
}

const pairKey = (slug: string, pwName: string) => `${slug}\u0000${pwName}`;
const relations: CrosswalkRelation[] = ["same-substance", "preparation", "rejected"];

export function validateCrosswalk(crosswalk: Crosswalk, slugs: ReadonlySet<string>, snapshot: Pick<PwSnapshot, "substances">): void {
  if (crosswalk.schemaVersion !== 1 || !isoDate.test(crosswalk.reviewedAt) || !Array.isArray(crosswalk.entries)) throw new Error("Unexpected PsychonautWiki crosswalk format");
  const names = new Set(snapshot.substances.map((substance) => substance.name));
  const seen = new Set<string>();
  const withData = new Set<string>();
  for (const entry of crosswalk.entries) {
    const label = `${entry.slug} → ${entry.pwName}`;
    if (seen.has(pairKey(entry.slug, entry.pwName))) throw new Error(`Duplicate crosswalk entry: ${label}`);
    seen.add(pairKey(entry.slug, entry.pwName));
    if (!slugs.has(entry.slug)) throw new Error(`Crosswalk names an unknown BHWiki article: ${label}`);
    if (!names.has(entry.pwName)) throw new Error(`Crosswalk names a PsychonautWiki page missing from the snapshot: ${label}`);
    if (!relations.includes(entry.relation)) throw new Error(`Unknown crosswalk relation: ${label}`);
    if (entry.relation !== "same-substance" && !entry.reason?.trim()) throw new Error(`A ${entry.relation} decision needs a reason: ${label}`);
    if (entry.relation === "same-substance") {
      if (withData.has(entry.slug)) throw new Error(`An article can take data from only one PsychonautWiki page: ${entry.slug}`);
      withData.add(entry.slug);
    }
  }
}

export function exactNameMatches(substances: Pick<Substance, "slug" | "name" | "aliases">[], snapshot: Pick<PwSnapshot, "substances">): { slug: string; pwName: string }[] {
  const index = new Map<string, Set<string>>();
  for (const pw of snapshot.substances) {
    for (const name of [pw.name, ...(pw.commonNames ?? []), pw.systematicName ?? ""]) {
      const key = nameKey(name);
      if (!key) continue;
      const names = index.get(key) ?? new Set<string>();
      names.add(pw.name);
      index.set(key, names);
    }
  }
  const pairs = new Map<string, { slug: string; pwName: string }>();
  for (const article of substances) {
    for (const name of [article.slug, article.name, ...article.aliases]) {
      for (const pwName of index.get(nameKey(name)) ?? []) pairs.set(pairKey(article.slug, pwName), { slug: article.slug, pwName });
    }
  }
  return [...pairs.values()].sort((a, b) => a.slug.localeCompare(b.slug) || a.pwName.localeCompare(b.pwName));
}

export function unreviewedMatches(substances: Pick<Substance, "slug" | "name" | "aliases">[], snapshot: Pick<PwSnapshot, "substances">, crosswalk: Crosswalk): { slug: string; pwName: string }[] {
  const decided = new Set(crosswalk.entries.map((entry) => pairKey(entry.slug, entry.pwName)));
  return exactNameMatches(substances, snapshot).filter((match) => !decided.has(pairKey(match.slug, match.pwName)));
}
