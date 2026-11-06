import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { substances } from "../src/lib/content";
import { applyPsychonautWiki, hasPsychonautWikiData, unreviewedMatches, validateCrosswalk, type Crosswalk, type PwSnapshot } from "../scripts/psychonautwiki-data";

const snapshot: PwSnapshot = JSON.parse(readFileSync(new URL("../data/imports/psychonautwiki.json", import.meta.url), "utf8"));
const crosswalk: Crosswalk = JSON.parse(readFileSync(new URL("../data/imports/psychonautwiki-crosswalk.json", import.meta.url), "utf8"));
const sameSubstance = new Map(crosswalk.entries.filter((entry) => entry.relation === "same-substance").map((entry) => [entry.slug, entry.pwName]));

test("every exact BHWiki–PsychonautWiki name match has a reviewed crosswalk decision", () => {
  validateCrosswalk(crosswalk, new Set(substances.map((substance) => substance.slug)), snapshot);
  assert.deepEqual(unreviewedMatches(substances, snapshot, crosswalk), []);
});

test("preparation pages never supply compound data", () => {
  // PsychonautWiki's Cannabis bands are milligrams of THC and its mushroom bands milligrams of psilocybin.
  for (const slug of ["cannabis", "delta-9-thc", "mitragynine", "psilocybin"]) {
    assert.deepEqual(crosswalk.entries.filter((entry) => entry.slug === slug).map((entry) => entry.relation), ["preparation"], slug);
  }
  for (const article of substances) {
    if (!sameSubstance.has(article.slug)) assert.equal(hasPsychonautWikiData(article), false, article.slug);
  }
});

test("committed articles equal a fresh import of the committed snapshot", () => {
  const byName = new Map(snapshot.substances.map((substance) => [substance.name, substance]));
  for (const [slug, pwName] of sameSubstance) {
    const article = substances.find((substance) => substance.slug === slug)!;
    assert.deepEqual(applyPsychonautWiki(article, byName.get(pwName)!, snapshot), article, slug);
  }
});
