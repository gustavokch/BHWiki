import test from "node:test";
import assert from "node:assert/strict";
import { researchFixture } from "./fixtures/research";
import { substances, hyperedges, tags } from "../src/lib/content";
import {
  articleEvidence,
  evidenceKey,
  filterObservations,
  matchInteractions,
  matchInteractionOverlaps,
  observationRows,
  observationMagnitude,
  plotGroups,
  recordId,
  selectionSlugs,
} from "../src/lib/research";
import {
  parseContentSource,
  serializeContent,
} from "../src/lib/content-markdown";
import {
  validateContent,
  validateSubstance,
} from "../src/lib/validate-content";
import { elapsedPhases } from "../src/lib/duration";
import { buildMechanismModel } from "../src/lib/mechanism";
import { toCatalogSubstance } from "../src/lib/types";
import type { ObservationRow } from "../src/lib/research-types";

test("enrichment round-trips without changing legacy records or hashes", () => {
  const { corpus, caffeine, effect } = researchFixture();
  validateContent(corpus);
  for (const [file, parsed] of [
    [
      "substances/caffeine.md",
      { collection: "substances", record: caffeine, order: 0 },
    ],
    ["effects/alertness.md", { collection: "tags", record: effect, order: 0 }],
    [
      "relationships/caffeine-adenosine.md",
      {
        collection: "relationships",
        record: corpus.hyperedges.find((e) => e.id === "caffeine-adenosine")!,
        order: 0,
      },
    ],
  ] as const) {
    assert.deepEqual(
      parseContentSource(file, serializeContent(file, parsed)).record,
      parsed.record,
    );
  }
});
test("optional identification tests and dose intake context round-trip", () => {
  const { caffeine } = researchFixture();
  caffeine.doses[0].foodRelation = "with-food";
  caffeine.doses[0].solubility = "fat-soluble";
  caffeine.doses[0].absorptionNote = "Fixture note.";
  caffeine.identificationTests = [{
    name: "Ehrlich",
    kind: "presumptive-reagent",
    target: caffeine.name,
    expectedResult: "Fixture color change",
    interpretation: "Presumptive only.",
    limitations: "Does not establish purity.",
    sourceId: caffeine.references[0].id,
  }];
  const parsed = parseContentSource("substances/caffeine.md", serializeContent("substances/caffeine.md", { collection: "substances", record: caffeine, order: 0 }));
  assert.deepEqual(parsed.record, caffeine);
});
test("evidence keys are independent of order and explicit IDs survive corrections", () => {
  const s = substances[0],
    o = s.outcomes[0];
  assert.equal(recordId(o), recordId({ ...o }));
  assert.equal(
    recordId({ id: "stable", name: "before" }),
    recordId({ id: "stable", name: "after" }),
  );
  const key = evidenceKey(s.slug, "outcome", o);
  assert.equal(
    articleEvidence({ ...s, outcomes: [...s.outcomes].reverse() }).find(
      (r) => r.key === key,
    )?.title,
    o.name,
  );
  const { caffeine, observation } = researchFixture();
  const evidence = articleEvidence(caffeine).find(
    (r) => r.key === evidenceKey(caffeine.slug, "outcome", observation),
  )!;
  assert.equal(evidence.conflictingSources.length, 1);
  assert.equal(evidence.result?.estimate, -2);
  assert.equal(evidence.context.find(c => c.label === "Reported magnitude")?.value, "-2 points (mean difference); 95% CI -3–-1");
  const lsd = substances.find((substance) => substance.slug === "lsd")!;
  const lsdDoseEvidence = articleEvidence(lsd).filter((record) => record.kind === "dose");
  assert.ok(lsdDoseEvidence.length > 0);
  assert.equal(
    lsdDoseEvidence.some((record) => record.context.some((item) => /^not established\.?$/i.test(item.value))),
    false,
  );
});
test("filters apply before pagination and expose unassessed metadata", () => {
  const { caffeine, observation } = researchFixture();
  const first = observationRows(caffeine, "outcome")[0];
  const base = {
    ...first,
    observation: {
      ...first.observation,
      study: first.observation.study
        ? { ...first.observation.study, populationLabels: [], durationDays: undefined }
        : undefined,
    },
  };
  const rows: ObservationRow[] = Array.from({ length: 45 }, (_, i) => ({
    ...base,
    key: String(i),
    articleSlug: `test-${i}`,
    articleName: `Test ${String(i).padStart(2, "0")}`,
    observation: i === 44 ? observation : base.observation,
  }));
  assert.equal(filterObservations(rows, {}, 2).rows.length, 20);
  assert.equal(filterObservations(rows, {}, 3).rows.length, 5);
  const found = filterObservations(rows, {
    population: "Fixture adults",
    duration: "8–30 days",
    route: "Oral",
  });
  assert.equal(found.total, 1);
  assert.equal(found.rows[0].articleSlug, "test-44");
  assert.equal(
    filterObservations(rows, { population: "__unassessed" }).total,
    44,
  );
  assert.equal(filterObservations(rows, { substance: "missing" }).total, 0);
});
test("pair lookup is symmetric and only uses explicit exact/class targets", () => {
  const thc = substances.find((s) => s.slug === "delta-9-thc")!,
    ethanol = substances.find((s) => s.slug === "ethanol")!;
  assert.equal(matchInteractions(thc, ethanol).matches.length, 1);
  assert.deepEqual(
    matchInteractions(thc, ethanol),
    matchInteractions(ethanol, thc),
  );
  const a = structuredClone(substances[0]),
    b = structuredClone(substances[1]);
  a.interactions = [
    {
      id: "explicit",
      name: "Target class",
      otherSlug: null,
      targetClassId: "stimulant",
      summary: "Fixture",
      sourceId: a.references[0].id,
    },
  ];
  assert.equal(matchInteractions(a, b).matches.length, 0);
  b.tags.push("stimulant");
  assert.equal(matchInteractions(a, b).matches.length, 1);
  a.interactions[0].targetClassId = undefined;
  assert.equal(matchInteractions(a, b).matches.length, 0);
  assert.ok(matchInteractions(a, b).general.length);
  assert.equal(matchInteractions(a, a).matches.length, 0);
});
test("shared authored mechanisms are context, never an inferred interaction", () => {
  const a = structuredClone(substances.find((s) => s.slug === "phenylpiracetam")!);
  const b = structuredClone(substances.find((s) => s.slug === "modafinil")!);
  a.interactions = [];
  b.interactions = [];
  const overlaps = matchInteractionOverlaps(a, b, tags);
  assert.ok(overlaps.some((overlap) => overlap.kind === "mechanism" && overlap.conceptId === "dopamine-transporter"));
  assert.equal(matchInteractions(a, b).matches.length, 0);
  a.mechanisms = [];
  b.mechanisms = [];
  a.tags.push("dopamine");
  b.tags.push("dopamine");
  assert.ok(matchInteractionOverlaps(a, b, tags).some((overlap) => overlap.conceptId === "dopamine"));
});
test("invalid numerical estimates, intervals, classes, and sources are rejected", () => {
  const mutate = (
    f: (s: ReturnType<typeof researchFixture>["caffeine"]) => void,
  ) => {
    const { caffeine } = researchFixture();
    f(caffeine);
    assert.throws(() => validateSubstance(caffeine));
  };
  mutate((s) => {
    s.outcomes.at(-1)!.result!.estimate = NaN;
  });
  mutate((s) => {
    s.outcomes.at(-1)!.result!.measure = "odds-ratio";
  });
  mutate((s) => {
    s.outcomes.at(-1)!.result!.confidenceInterval!.level = 100;
  });
  mutate((s) => {
    s.outcomes.at(-1)!.result!.confidenceInterval!.upper = -4;
  });
  mutate((s) => {
    s.outcomes.at(-1)!.conflictingSourceIds = ["missing"];
  });
  const { corpus } = researchFixture();
  corpus.substances[0].interactions = [
    {
      id: "bad",
      name: "bad",
      summary: "bad",
      otherSlug: null,
      targetClassId: "adenosine",
      sourceId: corpus.substances[0].references[0].id,
    },
  ];
  assert.throws(() => validateContent(corpus), /class/);
});
test("plots retain compatible groups without parsing free-text magnitudes", () => {
  const { caffeine } = researchFixture();
  const rows = observationRows(caffeine, "outcome");
  assert.equal(plotGroups(rows).length, 1);
  assert.equal(plotGroups(rows)[0].rows.length, 1);
  const other = structuredClone(rows.at(-1)!);
  other.key = "second";
  other.observation.result!.assessmentTime = "Day 30";
  assert.equal(plotGroups([...rows, other]).length, 2);
  other.observation.result!.assessmentTime = "Day 14";
  assert.equal(plotGroups([...rows, other])[0].rows.length, 2);
});
test("absolute timing requires explicit elapsed semantics and complete ranges", () => {
  const { caffeine } = researchFixture();
  const [elapsed, duration] = caffeine.kinetics.timeline!;
  assert.equal(elapsedPhases(elapsed)[1].min, 60);
  assert.equal(elapsedPhases(duration).length, 0);
  elapsed.phases[0].basis = undefined;
  assert.equal(elapsedPhases(elapsed).length, 0);
});
test("mechanism diagrams keep qualifiers and draw arrows only for authored steps", () => {
  const data = {
    substances: substances.map(toCatalogSubstance),
    tags,
    hyperedges: hyperedges.filter((edge) => edge.members.includes("substance:caffeine")),
  };
  const base = buildMechanismModel(data);
  assert.equal(base.elements.filter((e) => e.data.directed).length, 0);
  const { corpus } = researchFixture();
  const model = buildMechanismModel({
    ...corpus,
    substances: corpus.substances.map(toCatalogSubstance),
    hyperedges: corpus.hyperedges.filter((edge) => edge.members.includes("substance:caffeine")),
  });
  assert.equal(model.elements.filter((e) => e.data.directed).length, 1);
  const smoke = model.relationships.find((e) => e.id === "caffeine-clearance")!;
  assert.ok(smoke.members.includes("tag:tobacco-smoke"));
});
test("comparison selections deduplicate, bound, and validate slugs", () => {
  assert.deepEqual(selectionSlugs("caffeine,caffeine,l-theanine").slugs, [
    "caffeine",
    "l-theanine",
  ]);
  assert.equal(selectionSlugs("a,b,c,d").slugs.length, 3);
  assert.ok(selectionSlugs("a,b,c,d").issues.length);
  assert.ok(selectionSlugs("../secret").issues.length);
});

test("duplicate pair assertions retain both origins with stable reversed ordering", () => {
  const a = structuredClone(substances[0]),
    b = structuredClone(substances[1]);
  const shared = { ...a.references[0], id: "shared-fixture-source" };
  a.references.push(shared);
  b.references.push(shared);
  a.interactions = [
    {
      id: "from-a",
      name: b.name,
      otherSlug: b.slug,
      summary: "Same sourced concern",
      sourceId: "shared-fixture-source",
    },
  ];
  b.interactions = [
    {
      id: "from-b",
      name: a.name,
      otherSlug: a.slug,
      summary: "Same sourced concern",
      sourceId: "shared-fixture-source",
    },
  ];
  const result = matchInteractions(a, b);
  assert.equal(result.matches.length, 1);
  assert.equal(result.matches[0].records.length, 2);
  assert.deepEqual(result, matchInteractions(b, a));
});

test("structured magnitudes remain readable when the legacy prose magnitude is absent", () => {
  const { observation } = researchFixture();
  observation.magnitude = null;
  assert.equal(
    observationMagnitude(observation),
    "-2 points (mean difference); 95% CI -3–-1",
  );
  delete observation.result;
  assert.equal(
    observationMagnitude(observation),
    "Not quantified in this summary",
  );
});
