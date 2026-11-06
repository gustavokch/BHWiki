import test from "node:test";
import assert from "node:assert/strict";
import { substances } from "../src/lib/content";
import { validateSubstance } from "../src/lib/validate-content";
import { applyPsychonautWiki, canonicalPageUrl, doseRecords, durationRoute, formatSnapshot, withoutPsychonautWiki, type PwRoa, type PwSnapshot } from "../scripts/psychonautwiki-data";

const roa: PwRoa = {
  name: "smoked",
  dose: { units: "\u03bcg", threshold: 15, heavy: 300, light: { min: 15, max: 75 }, common: { min: 75, max: 150 }, strong: null },
  duration: {
    onset: { min: 5, max: 20, units: "seconds" },
    comeup: { min: 1, max: 2, units: "Hours" },
    peak: { min: null, max: null, units: "hour" },
    offset: null,
    afterglow: { min: 1, max: 3, units: "hours" },
    total: { min: 2, max: 4, units: "hours" },
  },
};
const snapshot: PwSnapshot = {
  schemaVersion: 1,
  source: "https://api.psychonautwiki.org/",
  license: "Fixture license",
  retrievedAt: "2026-11-06",
  snapshotBuiltOn: "2026-06-23",
  health: { substances: 1, aliases: 1, snapshotAgeSeconds: 1, version: "4.0.0" },
  substances: [{ name: "Fixture A", url: "https://psychonautwiki.org/wiki/Fixture%20A", commonNames: null, systematicName: null, roas: [roa] }],
};

test("dose bands keep PsychonautWiki boundaries, normalize the micro sign and leave heavy open-ended", () => {
  assert.deepEqual(doseRecords(roa, "Fixture", "2026-06-23").map((d) => [d.label, d.quantity, d.quantityMax, d.unit, d.route, d.sourceCategory]), [
    ["Threshold dose", 15, null, "\u00b5g", "Smoked", "community"],
    ["Light dose band", 15, 75, "\u00b5g", "Smoked", "community"],
    ["Common dose band", 75, 150, "\u00b5g", "Smoked", "community"],
    ["Heavy dose band (300 \u00b5g and above)", 300, null, "\u00b5g", "Smoked", "community"],
  ]);
  assert.throws(() => doseRecords({ ...roa, dose: { ...roa.dose!, light: { min: 40, max: 20 } } }, "Fixture", "2026-06-23"), /reversed/);
  assert.throws(() => doseRecords({ ...roa, dose: { ...roa.dose!, light: { min: 15, max: null } } }, "Fixture", "2026-06-23"), /incomplete/);
  assert.throws(() => doseRecords({ ...roa, dose: { ...roa.dose!, units: "seeds" } }, "Fixture", "2026-06-23"), /dose unit/);
});

test("durations keep seconds, time onset from dosing and treat later phases as lengths", () => {
  const route = durationRoute(roa)!;
  assert.equal(route.measurement, "subjective");
  assert.deepEqual(route.phases, [
    { name: "onset", basis: "elapsed-since-exposure", min: 5, max: 20, unit: "seconds" },
    { name: "comeup", basis: "phase-duration", min: 1, max: 2, unit: "hours" },
    { name: "after-effects", basis: "phase-duration", min: 1, max: 3, unit: "hours" },
  ]);
  assert.deepEqual(route.total, { min: 2, max: 4, unit: "hours" });
  assert.throws(() => durationRoute({ ...roa, duration: { ...roa.duration!, total: { min: 1, max: 2, units: "days" } } }), /time unit/);
});

test("page URLs use the canonical underscore form", () => {
  assert.equal(canonicalPageUrl("https://psychonautwiki.org/wiki/Salvinorin%20A"), "https://psychonautwiki.org/wiki/Salvinorin_A");
  assert.equal(canonicalPageUrl("https://psychonautwiki.org/wiki/1%2C3-Butanediol"), "https://psychonautwiki.org/wiki/1,3-Butanediol");
  assert.throws(() => canonicalPageUrl("https://psy.is/LSD"), /Not a PsychonautWiki page/);
});

test("applying adds only psychonautwiki-sourced records, validates, and strips back to the original", () => {
  const original = withoutPsychonautWiki(substances.find((s) => s.slug === "creatine")!);
  const enriched = applyPsychonautWiki(original, snapshot.substances[0], snapshot);
  validateSubstance(enriched);
  assert.equal(enriched.references.at(-1)?.url, "https://psychonautwiki.org/wiki/Fixture_A");
  assert.equal(enriched.doses.filter((d) => d.sourceId === "psychonautwiki").length, 4);
  assert.deepEqual(withoutPsychonautWiki(enriched), original);
  assert.deepEqual(applyPsychonautWiki(enriched, snapshot.substances[0], snapshot), enriched);
  assert.throws(() => applyPsychonautWiki({ ...original, editorialStatus: "editorially-reviewed" }, snapshot.substances[0], snapshot), /Manual reconciliation/);
});

test("the snapshot file format round-trips", () => {
  assert.deepEqual(JSON.parse(formatSnapshot(snapshot)), snapshot);
});
