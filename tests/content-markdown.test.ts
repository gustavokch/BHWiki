import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import path from "node:path";
import test from "node:test";
import { hyperedges, substances, tags } from "../src/lib/content";
import { ContentFormatError, contentDirectory, parseContentSource, serializeContent } from "../src/lib/content-markdown";
import { contentHash } from "../src/lib/publication-metadata";
import { withoutPsychonautWiki } from "../scripts/psychonautwiki-data";
import type { Substance, TagKind } from "../src/lib/types";

const curatedSlugs = ["caffeine", "l-theanine", "creatine", "melatonin", "nicotine", "psilocybin", "modafinil", "methylphenidate", "diphenhydramine", "citicoline"];
const curatedHashes = [
  "a68f5c29584d5303ea355813c6033590f29f144115dd6acf5adb937a30a41017",
  "89d4e24b9f4441ad36e6e98cad937b05da40d4bbaeeb73fa4eeeec88b0710cad",
  "3c7f625f039d7bb12eb9c3d0a4a288e98cf2ae9e136baa24055ce2d2db5a9e4e",
  "1b2b542eb4f6133c213b352f4a7a61841f267e102a2d7a6f768bba3d50c88aee",
  "11fc97da3bb572d54d11e96b8d6a569a84d289163a7770fd4358a8334d0b52c5",
  "f8c8258e89ff47240104fd22602ac94ef98f991b2fe1bbea7b3b2f5f6d734fe6",
  "b71d5b488aab7523168792bd996eb11cf508b412ca464cc0695db2747409680c",
  "a8275baaff59fc792278f8dc08809a566ba8aa5d6d2af4390491dcd425b5d64b",
  "2af40220f322b71b7ac9db93b605a1dea2327a12c1f95a70eb200fe8c55f30de",
  "414f2427a558db923108e90fdfea485ab9f210f32a83245bcd8cc9b40a64cbc3",
];

test("markdown files preserve the curated records", () => {
  // PsychonautWiki community records are additive; the launch curation underneath must stay unchanged.
  const curated = curatedSlugs.map((slug) => {
    const substance = substances.find((candidate) => candidate.slug === slug);
    return substance && withoutPsychonautWiki(substance);
  });
  assert.deepEqual(curated.map((substance) => substance?.slug), curatedSlugs);
  assert.deepEqual(curated.map((substance) => substance && contentHash(substance)), curatedHashes);
  assert.ok(substances.length >= curatedSlugs.length);
  assert.equal(tags.length, 356);
  assert.equal(substances.filter((substance) => substance.subtitle === "Identity record.").length, 0);
  assert.equal(substances.filter((substance) => substance.subtitle === "Source-backed identity stub.").length, 0);
  const kinds: Record<TagKind, number> = { class: 0, "chemical-family": 0, mechanism: 0, target: 0, neurotransmitter: 0, enzyme: 0, effect: 0, outcome: 0, exposure: 0, legal: 0 };
  for (const tag of tags) kinds[tag.kind] += 1;
  assert.deepEqual(kinds, { class: 19, "chemical-family": 8, mechanism: 30, target: 20, neurotransmitter: 6, enzyme: 12, effect: 54, outcome: 201, exposure: 5, legal: 1 });
  assert.equal(hyperedges.length, 63);
  const total = (count: (substance: Substance) => number) => curated.reduce((sum, substance) => sum + count(substance!), 0);
  assert.equal(total((substance) => substance.references.length), 337);
  assert.equal(total((substance) => substance.pkObservations.length), 25);
  assert.equal(total((substance) => substance.doses.length), 83);
  assert.equal(total((substance) => substance.mechanisms.length), 45);
  assert.equal(total((substance) => substance.cautions.length), 68);
  assert.equal(total((substance) => substance.effects.length), 25);
  assert.equal(total((substance) => substance.outcomes.length), 113);
  assert.equal(total((substance) => substance.claims.length), 152);
  assert.equal(total((substance) => substance.modifiers.length), 20);
  assert.equal(total((substance) => substance.legal.length), 17);
  assert.equal(total((substance) => substance.interactions.length + substance.experienceLinks.length + (substance.kinetics.timeline?.length ?? 0)), 26);
  const caffeine = curated[0];
  assert.equal(caffeine?.halfLife.sourceId, "lelo1986");
  assert.deepEqual([caffeine?.halfLife.low, caffeine?.halfLife.high], [4.1, 4.1]);
  const psilocybin = substances.find((substance) => substance.slug === "psilocybin");
  assert.equal(psilocybin?.pkObservations.find((observation) => observation.modelEligible)?.analyte.toLowerCase().includes("psilocin"), true);
  const clearance = hyperedges.find((edge) => edge.id === "caffeine-clearance");
  assert.deepEqual(clearance?.members, ["substance:caffeine", "tag:cyp1a2", "tag:tobacco-smoke"]);
});

test("markdown files round-trip without changing the record or its hash", { timeout: 30_000 }, () => {
  substances.forEach((record, order) => {
    const relative = `substances/${record.slug}.md`;
    const parsed = parseContentSource(relative, serializeContent(relative, { collection: "substances", record, order }));
    if (parsed.collection !== "substances") throw new Error(`expected a substance record for ${record.slug}`);
    assert.equal(JSON.stringify(parsed.record), JSON.stringify(record));
    assert.equal(contentHash(parsed.record), contentHash(record));
  });
  tags.forEach((record, order) => {
    const relative = record.kind === "effect" ? `effects/${record.id}.md` : record.kind === "outcome" ? `outcomes/${record.id}.md` : `concepts/${record.kind}/${record.id}.md`;
    const again = parseContentSource(relative, serializeContent(relative, { collection: "tags", record, order })).record;
    assert.equal(JSON.stringify(again), JSON.stringify(record));
  });
  hyperedges.forEach((record, order) => {
    const relative = `relationships/${record.id}.md`;
    const again = parseContentSource(relative, serializeContent(relative, { collection: "relationships", record, order })).record;
    assert.equal(JSON.stringify(again), JSON.stringify(record));
  });
});

test("a misplaced concept and dropped prose fail before publication", () => {
  const stimulant = readFileSync(path.join(contentDirectory(), "concepts/class/stimulant.md"), "utf8");
  assert.throws(() => parseContentSource("effects/stimulant.md", stimulant), ContentFormatError);
  assert.throws(() => parseContentSource("substances/caffeine.md", "---\nslug: caffeine\nx-shape:\n  - slug\n---\n\nA paragraph before the headings.\n"), /text before the first heading/);
  assert.throws(() => parseContentSource("substances/caffeine.md", "---\nslug: caffeine\nx-shape:\n  - slug\n---\n\n## Notes\n\nMissing required sections.\n"), /unknown heading/);
});
