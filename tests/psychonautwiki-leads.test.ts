import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { substances } from "../src/lib/content";
import type { Crosswalk, InteractionCapture } from "../scripts/psychonautwiki-data";
import { interactionLeads, validateReviews, type InteractionReviews } from "../scripts/psychonautwiki-interaction-leads";

const crosswalk: Crosswalk = JSON.parse(readFileSync(new URL("../data/imports/psychonautwiki-crosswalk.json", import.meta.url), "utf8"));

test("leads resolve targets and omit curated, reviewed and preparation pairs", () => {
  const corpus = structuredClone(substances);
  const lsd = corpus.find((article) => article.slug === "lsd")!;
  lsd.interactions = [{ id: "fixture", name: "Fixture", otherSlug: "mdma", summary: "Fixture.", sourceId: lsd.references[0].id }];
  const capture: InteractionCapture = { schemaVersion: 1, retrievedAt: "2026-11-06", interactions: [
    { substance: "LSD", category: "dangerous", target: "Lithium" },
    { substance: "LSD", category: "uncertain", target: "Alcohol" },
    { substance: "LSD", category: "unsafe", target: "Stimulants" },
    { substance: "LSD", category: "uncertain", target: "MDMA" },
    { substance: "LSD", category: "dangerous", target: "Tramadol" },
    { substance: "Psilocybin mushrooms", category: "dangerous", target: "Lithium" },
  ] };
  const reviews: InteractionReviews = { schemaVersion: 1, reviews: [{ slug: "lsd", target: "tramadol", outcome: "rejected", note: "Fixture.", reviewedAt: "2026-11-06" }] };
  assert.deepEqual(interactionLeads(corpus, crosswalk, capture, reviews).map((lead) => [lead.slug, lead.category, lead.target, lead.resolved]), [
    ["lsd", "uncertain", "Alcohol", { otherSlug: "ethanol" }],
    ["lsd", "dangerous", "Lithium", null],
    ["lsd", "unsafe", "Stimulants", { targetClassId: "stimulant" }],
  ]);
});

test("the committed review log names real articles and curated interactions", () => {
  validateReviews(JSON.parse(readFileSync(new URL("../data/imports/psychonautwiki-interaction-reviews.json", import.meta.url), "utf8")), substances);
  const added: InteractionReviews = { schemaVersion: 1, reviews: [{ slug: "lsd", target: "Lithium", outcome: "added", interactionId: "missing", note: "Fixture.", reviewedAt: "2026-11-06" }] };
  assert.throws(() => validateReviews(added, substances), /must name an interaction/);
});
