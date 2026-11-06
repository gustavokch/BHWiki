# PsychonautWiki Community Data Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Import PsychonautWiki's structured dose bands and duration ranges as attributed community records on reviewed same-substance BHWiki articles, and give curators a local, unpublished queue of PsychonautWiki interaction leads.

**Architecture:** A fetch script saves one GraphQL response as a committed snapshot (no interactions) plus a gitignored interaction capture. An offline importer reads the snapshot and a reviewed crosswalk and rewrites only `psychonautwiki`-sourced records in `content/substances/*.md`, following the Molekul importer. Two small model/UI changes make the data display correctly: a `seconds` time unit and a duration card that no longer hides curated research timing.

**Tech Stack:** TypeScript (strict, `tsc` covers `scripts/` and `tests/`), tsx, `node:test`, Next.js 16 / React 19, Bun 1.3.14, Playwright.

**Spec:** `docs/superpowers/specs/2026-11-06-psychonautwiki-community-data-design.md`. Source research: `docs/psychonautwiki-source-research.md`.

## Global Constraints

- Acquisition uses only `https://api.psychonautwiki.org/` (GraphQL POST and `/health`). Never request `psychonautwiki.org/w/` or crawl wiki pages; `robots.txt` disallows `/w/`.
- Links and reference URLs use `https://psychonautwiki.org/wiki/<Title>` with underscores. Never `psy.is`.
- PsychonautWiki interaction data is never committed, published, or cited. It lives only in `data/imports/local/` (gitignored).
- Never import PsychonautWiki prose, summaries, effects, tolerance/addiction/toxicity text, bioavailability, images, or interactions.
- The import touches only dose records and duration routes with `sourceId: psychonautwiki` and the reference with `id: psychonautwiki`. It must not change prose, links, `reviewedAt`, or `editorialStatus`, and must refuse `editorially-reviewed` articles.
- Dose records use `sourceCategory: community`. Microgram symbol is `µg` (U+00B5).
- Attribution: authors "PsychonautWiki contributors", license [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/), snapshot and retrieval dates, BHWiki's normalization noted.
- No database migration. No new articles.
- The working tree contains unrelated uncommitted user changes (`.gitignore`, `AGENTS.md`, `.claude/settings.json`, `.ignore`, `.trail/`, `opencode.json`). Stage files by explicit path; never `git add -A`, `git add .`, or `git commit -a`.
- Tests run with `bun run test` (`tsx --test tests/*.test.ts`). A single file: `bunx tsx --test tests/<file>.test.ts`.

## File map

| File | Status | Responsibility |
| --- | --- | --- |
| `src/lib/types.ts` | Modify | `TimeUnit` gains `seconds` |
| `src/lib/duration.ts` | Modify | `toMinutes`, seconds label in `formatSpan` |
| `src/components/timing-marker-chart.tsx` | Modify | Use shared `toMinutes` |
| `src/lib/validate-content.ts` | Modify | Accept `seconds` |
| `src/components/duration-timeline.tsx` | Modify | Curated timing card renders beside timeline routes |
| `tests/duration.test.ts` | Modify | Seconds and curated-card behavior |
| `scripts/psychonautwiki-data.ts` | Create | Types, normalization, mapping, crosswalk, apply/strip |
| `tests/psychonautwiki-mapping.test.ts` | Create | Fixture tests for mapping |
| `scripts/fetch-psychonautwiki.ts` | Create | API → snapshot + local capture |
| `data/imports/local/.gitignore` | Create | Keep capture out of Git |
| `data/imports/psychonautwiki.json` | Generated, committed | Snapshot |
| `data/imports/psychonautwiki-crosswalk.json` | Create | Reviewed identity decisions |
| `scripts/import-psychonautwiki.ts` | Create | Offline import |
| `data/imports/psychonautwiki-candidates.json` | Generated, committed | Unmatched PsychonautWiki pages |
| `content/substances/*.md` | Generated, committed | Imported records |
| `tests/psychonautwiki-import.test.ts` | Create | Corpus invariants |
| `tests/content-markdown.test.ts` | Modify | Launch hashes compare the record without PsychonautWiki data |
| `scripts/psychonautwiki-interaction-leads.ts` | Create | Lead report, review-log validation |
| `data/imports/psychonautwiki-interaction-reviews.json` | Create | Review outcomes |
| `tests/psychonautwiki-leads.test.ts` | Create | Lead filtering and resolution |
| `package.json` | Modify | Three scripts |
| `CONTENT-LICENSE.md`, `README.md`, `docs/content-sources.md`, `docs/reference-research.md`, `data/imports/README.md`, `content/templates/README.md` | Modify | Licensing and provenance |

---

### Task 1: `seconds` time unit

**Files:**
- Modify: `src/lib/types.ts:22`
- Modify: `src/lib/duration.ts` (whole file)
- Modify: `src/components/timing-marker-chart.tsx:1-11`
- Modify: `src/lib/validate-content.ts:17` and `:34`
- Test: `tests/duration.test.ts`

**Interfaces:**
- Produces: `type TimeUnit = "seconds" | "minutes" | "hours"`; `toMinutes(value: number, unit: TimeUnit): number` exported from `src/lib/duration.ts`; `formatSpan` renders seconds as `s`.

- [ ] **Step 1: Write the failing test**

In `tests/duration.test.ts`, change the type import on line 9 to:

```ts
import type { DurationPhase, DurationRoute, Substance } from "../src/lib/types";
```

Append:

```ts
test("sub-minute phases keep seconds and convert only for elapsed positions", () => {
  assert.equal(formatSpan({ min: 5, max: 20, unit: "seconds" }), "5–20 s");
  const route: DurationRoute = {
    route: "Smoked",
    population: "Fixture",
    sourceId: "source",
    note: "Fixture",
    total: null,
    phases: [
      { name: "onset", basis: "elapsed-since-exposure", min: 30, max: 90, unit: "seconds" },
      { name: "peak", basis: "elapsed-since-exposure", min: 5, max: 10, unit: "minutes" },
    ],
  };
  assert.deepEqual(elapsedPhases(route), [
    { name: "onset", min: 0.5, max: 1.5 },
    { name: "peak", min: 5, max: 10 },
  ]);
  const article = structuredClone(substances[0]) as Substance;
  article.kinetics.timeline = [{ ...route, sourceId: article.references[0].id }];
  validateSubstance(article);
  article.kinetics.timeline![0].phases[0].unit = "days" as never;
  assert.throws(() => validateSubstance(article), /unit: invalid category/);
});
```

- [ ] **Step 2: Run it to verify it fails**

Run: `bunx tsx --test tests/duration.test.ts`
Expected: FAIL. `formatSpan` returns `"5–20 min"`.

- [ ] **Step 3: Implement**

`src/lib/types.ts` line 22:

```ts
export type TimeUnit = "seconds" | "minutes" | "hours";
```

Replace `src/lib/duration.ts` with:

```ts
import type { DurationPhaseName, TimeSpan, TimeUnit } from "./types";

export const durationPhaseOrder = ["onset", "comeup", "peak", "offset", "after-effects"] as const satisfies readonly DurationPhaseName[];

export const durationPhaseLabels: Record<DurationPhaseName, string> = {
  onset: "Onset",
  comeup: "Come up",
  peak: "Peak",
  offset: "Offset",
  "after-effects": "After effects",
};

const unitLabels: Record<TimeUnit, string> = { seconds: "s", minutes: "min", hours: "h" };

export function toMinutes(value: number, unit: TimeUnit): number {
  return unit === "seconds" ? value / 60 : unit === "hours" ? value * 60 : value;
}

export function formatSpan(span: TimeSpan | null | undefined): string | null {
  if (!span) return null;
  const unit = unitLabels[span.unit];
  const quantity = new Intl.NumberFormat("en", { maximumFractionDigits: 2 });
  if (span.min !== null && span.max !== null) {
    return span.min === span.max ? `${quantity.format(span.min)} ${unit}` : `${quantity.format(span.min)}–${quantity.format(span.max)} ${unit}`;
  }
  if (span.min !== null) return `${quantity.format(span.min)} ${unit}`;
  if (span.max !== null) return `${quantity.format(span.max)} ${unit}`;
  return null;
}

/** Only explicitly elapsed, complete bounds have an absolute position. Never sum phase durations. */
export function elapsedPhases(route: import("./types").DurationRoute) {
  if (!route.phases.length || route.phases.some(p=>p.basis!=="elapsed-since-exposure" || p.min===null || p.max===null)) return [];
  return route.phases.map(p=>({name:p.name,min:toMinutes(p.min!,p.unit),max:toMinutes(p.max!,p.unit)}));
}
```

`src/components/timing-marker-chart.tsx`: add the import after line 5 and replace lines 9–11:

```ts
import { toMinutes as unitMinutes } from "@/lib/duration";
```

```ts
function toMinutes(marker: TimingMarker) {
  return unitMinutes(marker.at, marker.unit);
}
```

`src/lib/validate-content.ts` line 17: replace `choice(span.unit,['minutes','hours'],path+'.unit')` with `choice(span.unit,['seconds','minutes','hours'],path+'.unit')`.
Line 34: replace `choice(marker.unit,['minutes','hours'],k+'.unit')` with `choice(marker.unit,['seconds','minutes','hours'],k+'.unit')`.

- [ ] **Step 4: Run tests and typecheck**

Run: `bunx tsx --test tests/duration.test.ts && bun run typecheck`
Expected: PASS; no type errors.

- [ ] **Step 5: Commit**

```bash
git add src/lib/types.ts src/lib/duration.ts src/components/timing-marker-chart.tsx src/lib/validate-content.ts tests/duration.test.ts
git commit -m "feat(duration): support second-resolution timing phases"
```

---

### Task 2: Curated timing stays visible beside timeline routes

`DurationTimeline` currently shows either timeline routes or the curated card (onset/peak/duration text, or the marker chart). After the import, 20 articles would lose displayed research timing, including citicoline's marker chart, which `tests/e2e/research.spec.ts:157-165` checks.

**Files:**
- Modify: `src/components/duration-timeline.tsx:74-117`
- Test: `tests/duration.test.ts:20-55` ("the timeline retains cited prose and requires elapsed semantics for a chart")

**Interfaces:**
- Produces: `DurationTimeline` renders the curated card whenever it has markers or curated text, then every route. With no routes and no curated content it renders the existing fallback card unchanged.

- [ ] **Step 1: Update the test**

In "the timeline retains cited prose and requires elapsed semantics for a chart":

1. In the `fallback` render, replace `kinetics: caffeine.kinetics,` with `kinetics: { ...caffeine.kinetics, timeline: undefined },` so the fallback stays independent of imported data.
2. After `assert.match(timed, /3–6 h/);` add:

```ts
  assert.match(timed, /Oral caffeine is rapidly absorbed/);
  assert.doesNotMatch(timed, /Not established as a numeric timeline/);
```

- [ ] **Step 2: Run it to verify it fails**

Run: `bunx tsx --test tests/duration.test.ts`
Expected: FAIL on `/Oral caffeine is rapidly absorbed/` for `timed`.

- [ ] **Step 3: Implement**

Replace lines 74–117 of `src/components/duration-timeline.tsx` with:

```tsx
function PublishedTiming({
  kinetics,
  citationFor,
  besideRoutes,
}: {
  kinetics: Substance["kinetics"];
  citationFor: (id: string) => ReactNode;
  besideRoutes: boolean;
}) {
  const markers = kinetics.markers ?? [];
  return (
    <Card>
      <CardHeader>
        <CardTitle>{markers.length ? "Published timing chart" : "Published timing evidence"}</CardTitle>
        <CardDescription>{markers.length ? "Hover a marker to inspect the source wording; horizontal position is elapsed time since exposure." : "The source reports timing terms but does not provide numeric elapsed intervals."}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        {markers.length ? (
          <TimingMarkerChart markers={markers} />
        ) : (
          <TimingSourceSummary values={[
            { label: "Onset", value: curatedTiming(kinetics.onset) },
            { label: "Peak", value: curatedTiming(kinetics.peak) },
            { label: "Duration", value: curatedTiming(kinetics.duration) },
          ]} />
        )}
        <p className="text-sm text-muted-foreground">
          {markers.length
            ? "Markers are explicit source observations; they do not establish felt-effect timing or a parent-compound elimination curve."
            : besideRoutes
              ? "Plasma timing and felt effects are distinct measurements."
              : "Not established as a numeric timeline. Plasma timing and felt effects are distinct measurements."} {citationFor(kinetics.sourceId)}
        </p>
      </CardContent>
    </Card>
  );
}

export function DurationTimeline({
  kinetics,
  citationFor,
}: {
  accent?: string;
  kinetics: Substance["kinetics"];
  citationFor: (id: string) => ReactNode;
}) {
  const routes = kinetics.timeline ?? [];
  if (!routes.length) return <PublishedTiming kinetics={kinetics} citationFor={citationFor} besideRoutes={false} />;
  const hasPublishedTiming = Boolean(kinetics.markers?.length)
    || [kinetics.onset, kinetics.peak, kinetics.duration].some((value) => curatedTiming(value) !== null);
  return (
    <div className="flex flex-col gap-4">
      {hasPublishedTiming && <PublishedTiming kinetics={kinetics} citationFor={citationFor} besideRoutes />}
      {routes.map((route) => (
        <RouteTiming
          key={`${route.route}-${route.sourceId}-${route.id ?? route.formulation ?? ""}`}
          route={route}
          citation={citationFor(route.sourceId)}
        />
      ))}
    </div>
  );
}
```

- [ ] **Step 4: Run tests and typecheck**

Run: `bunx tsx --test tests/duration.test.ts && bun run typecheck`
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add src/components/duration-timeline.tsx tests/duration.test.ts
git commit -m "fix(duration): keep curated timing visible beside timeline routes"
```

---

### Task 3: PsychonautWiki mapping module

**Files:**
- Create: `scripts/psychonautwiki-data.ts`
- Test: `tests/psychonautwiki-mapping.test.ts`

**Interfaces:**
- Consumes: `TimeUnit` with `seconds` (Task 1).
- Produces (all exported from `scripts/psychonautwiki-data.ts`):
  - Constants `PSYCHONAUTWIKI_SOURCE_ID = "psychonautwiki"`, `SNAPSHOT_PATH`, `CROSSWALK_PATH`, `CANDIDATES_PATH`, `INTERACTION_CAPTURE_PATH`, `INTERACTION_REVIEWS_PATH`.
  - Types `PwRange`, `PwSpan`, `PwDose`, `PwDuration`, `PwRoa`, `PwSubstance`, `PwSnapshot`, `CrosswalkRelation`, `CrosswalkEntry`, `Crosswalk`, `InteractionCategory`, `InteractionCapture`.
  - `readJson<T>(root: string, relative: string): T`
  - `nameKey(value: string): string`
  - `canonicalPageUrl(apiUrl: string): string`
  - `doseUnit(units: string | null): string`, `timeUnit(units: string | null): TimeUnit`, `routeLabel(name: string): string`
  - `doseRecords(roa: PwRoa, ingredient: string, snapshotBuiltOn: string): DoseContext[]`
  - `durationRoute(roa: PwRoa): DurationRoute | null`
  - `psychonautwikiReference(pw: PwSubstance, snapshot: Pick<PwSnapshot, "retrievedAt" | "snapshotBuiltOn">): Reference`
  - `hasPsychonautWikiData(article: Substance): boolean`, `hasDoseBands(pw: PwSubstance): boolean`
  - `withoutPsychonautWiki(article: Substance): Substance`
  - `assertDraft(article: Substance): void`
  - `applyPsychonautWiki(article: Substance, pw: PwSubstance, snapshot: PwSnapshot): Substance`
  - `assertSnapshot(snapshot: PwSnapshot): void`, `formatSnapshot(snapshot: PwSnapshot): string`
  - `validateCrosswalk(crosswalk: Crosswalk, slugs: ReadonlySet<string>, snapshot: Pick<PwSnapshot, "substances">): void`
  - `exactNameMatches(substances: Pick<Substance, "slug" | "name" | "aliases">[], snapshot: Pick<PwSnapshot, "substances">): { slug: string; pwName: string }[]`
  - `unreviewedMatches(substances: Pick<Substance, "slug" | "name" | "aliases">[], snapshot: Pick<PwSnapshot, "substances">, crosswalk: Crosswalk): { slug: string; pwName: string }[]`

- [ ] **Step 1: Write the failing tests**

Create `tests/psychonautwiki-mapping.test.ts`:

```ts
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
```

- [ ] **Step 2: Run it to verify it fails**

Run: `bunx tsx --test tests/psychonautwiki-mapping.test.ts`
Expected: FAIL with a module-not-found error for `../scripts/psychonautwiki-data`.

- [ ] **Step 3: Implement**

Create `scripts/psychonautwiki-data.ts`:

```ts
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
```

- [ ] **Step 4: Run tests and typecheck**

Run: `bunx tsx --test tests/psychonautwiki-mapping.test.ts && bun run typecheck`
Expected: PASS (5 tests); no type errors.

- [ ] **Step 5: Commit**

```bash
git add scripts/psychonautwiki-data.ts tests/psychonautwiki-mapping.test.ts
git commit -m "feat(import): map PsychonautWiki dose bands and durations to community records"
```

---

### Task 4: Fetch script and snapshot

**Files:**
- Create: `scripts/fetch-psychonautwiki.ts`
- Create: `data/imports/local/.gitignore`
- Modify: `package.json` (`scripts`)
- Generated: `data/imports/psychonautwiki.json` (committed), `data/imports/local/psychonautwiki-interactions.json` (ignored)

**Interfaces:**
- Consumes: `PwSnapshot`, `PwSubstance`, `InteractionCapture`, `InteractionCategory`, `formatSnapshot`, `SNAPSHOT_PATH`, `INTERACTION_CAPTURE_PATH` (Task 3).
- Produces: `bun run content:psychonautwiki-fetch`, the snapshot, and the local capture `{ schemaVersion: 1, retrievedAt, interactions: [{ substance, category, target }] }`.

This task needs network access and makes exactly two requests. It adds no permanent test: the output is verified by inspection here and by Task 5's tests.

- [ ] **Step 1: Create the ignore rule**

Create `data/imports/local/.gitignore` (this avoids the root `.gitignore`, which has an uncommitted user change):

```gitignore
*
!.gitignore
```

- [ ] **Step 2: Create the fetch script**

Create `scripts/fetch-psychonautwiki.ts`:

```ts
import { mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  INTERACTION_CAPTURE_PATH, SNAPSHOT_PATH, formatSnapshot,
  type InteractionCapture, type InteractionCategory, type PwSnapshot, type PwSubstance,
} from "./psychonautwiki-data";

const ENDPOINT = "https://api.psychonautwiki.org/";
const USER_AGENT = "BHWiki/0.1 (+https://github.com/AntonIXO/BHWiki; PsychonautWiki snapshot import)";
const LICENSE = "PsychonautWiki semantic data, CC BY 4.0 (https://creativecommons.org/licenses/by/4.0/) per https://psychonautwiki.org/wiki/Copyrights. Attribution: PsychonautWiki contributors.";
const span = "{ min max units }";
const QUERY = `{
  substances(limit: 1000) {
    name url commonNames systematicName
    roas {
      name
      dose { units threshold heavy light { min max } common { min max } strong { min max } }
      duration { onset ${span} comeup ${span} peak ${span} offset ${span} afterglow ${span} total ${span} }
    }
    dangerousInteractions { name }
    unsafeInteractions { name }
    uncertainInteractions { name }
  }
}`;
const categories: InteractionCategory[] = ["dangerous", "unsafe", "uncertain"];
type ApiSubstance = PwSubstance & { [K in `${InteractionCategory}Interactions`]: { name: string }[] | null };
type Health = { status: string; ready: boolean; substances: number; aliases: number; snapshot_age_seconds: number; version: string };

async function fetchPsychonautWiki(root: string) {
  const healthResponse = await fetch(new URL("health", ENDPOINT), { headers: { "user-agent": USER_AGENT } });
  if (!healthResponse.ok) throw new Error(`PsychonautWiki API /health HTTP ${healthResponse.status}`);
  const health = (await healthResponse.json()) as Health;
  if (!health.ready) throw new Error("PsychonautWiki API is not ready");
  // /health is CDN-cached: the origin produced it `age` seconds before the response date.
  const observedAt = Date.parse(healthResponse.headers.get("date") ?? "") - Number(healthResponse.headers.get("age") ?? 0) * 1000;
  if (Number.isNaN(observedAt)) throw new Error("PsychonautWiki API /health response has no date");

  const response = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "content-type": "application/json", "user-agent": USER_AGENT },
    body: JSON.stringify({ query: QUERY }),
  });
  if (!response.ok) throw new Error(`PsychonautWiki API HTTP ${response.status}`);
  const body = (await response.json()) as { data?: { substances: ApiSubstance[] }; errors?: { message: string }[] };
  if (body.errors?.length || !body.data) throw new Error(`PsychonautWiki API error: ${body.errors?.map((error) => error.message).join("; ")}`);
  const listed = body.data.substances;
  if (listed.length !== health.substances) throw new Error(`API listed ${listed.length} substances; /health reports ${health.substances}`);

  const retrievedAt = new Date().toISOString().slice(0, 10);
  const substances: PwSubstance[] = listed
    .map(({ name, url, commonNames, systematicName, roas }) => ({
      name, url, commonNames, systematicName,
      roas: roas ? [...roas].sort((a, b) => a.name.localeCompare(b.name)) : null,
    }))
    .sort((a, b) => a.name.localeCompare(b.name));
  const snapshot: PwSnapshot = {
    schemaVersion: 1,
    source: ENDPOINT,
    license: LICENSE,
    retrievedAt,
    snapshotBuiltOn: new Date(observedAt - health.snapshot_age_seconds * 1000).toISOString().slice(0, 10),
    health: { substances: health.substances, aliases: health.aliases, snapshotAgeSeconds: health.snapshot_age_seconds, version: health.version },
    substances,
  };
  const capture: InteractionCapture = {
    schemaVersion: 1,
    retrievedAt,
    interactions: listed
      .flatMap((substance) => categories.flatMap((category) => (substance[`${category}Interactions`] ?? []).map(({ name }) => ({ substance: substance.name, category, target: name }))))
      .sort((a, b) => a.substance.localeCompare(b.substance) || a.category.localeCompare(b.category) || a.target.localeCompare(b.target)),
  };
  writeFileSync(path.join(root, SNAPSHOT_PATH), formatSnapshot(snapshot));
  const capturePath = path.join(root, INTERACTION_CAPTURE_PATH);
  mkdirSync(path.dirname(capturePath), { recursive: true });
  writeFileSync(capturePath, `${JSON.stringify(capture, null, 2)}\n`);
  return { retrievedAt, snapshotBuiltOn: snapshot.snapshotBuiltOn, substances: substances.length, interactions: capture.interactions.length };
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  console.log(await fetchPsychonautWiki(path.resolve(import.meta.dirname, "..")));
}
```

- [ ] **Step 3: Register scripts**

In `package.json` `scripts`, after `"content:molekul": "tsx scripts/import-molekul.ts",` add:

```json
    "content:psychonautwiki-fetch": "tsx scripts/fetch-psychonautwiki.ts",
    "content:psychonautwiki": "tsx scripts/import-psychonautwiki.ts",
    "content:psychonautwiki-leads": "tsx scripts/psychonautwiki-interaction-leads.ts",
```

- [ ] **Step 4: Run the fetch**

Run: `bun run content:psychonautwiki-fetch`
Expected output resembles `{ retrievedAt: '<today>', snapshotBuiltOn: '2026-06-23', substances: 373, interactions: 1957 }`. If the API has resumed refreshing, `snapshotBuiltOn` and the counts may differ; that is expected. A thrown error stops the task: report it rather than editing the snapshot by hand.

Then confirm:
- `git check-ignore data/imports/local/psychonautwiki-interactions.json` prints the path.
- `grep -c Interactions data/imports/psychonautwiki.json` prints `0`.
- `bun run typecheck` passes.

- [ ] **Step 5: Commit**

```bash
git add scripts/fetch-psychonautwiki.ts data/imports/local/.gitignore data/imports/psychonautwiki.json package.json
git commit -m "feat(import): snapshot PsychonautWiki dose and duration data"
```

---

### Task 5: Crosswalk, importer, and imported content

**Files:**
- Create: `data/imports/psychonautwiki-crosswalk.json`
- Create: `scripts/import-psychonautwiki.ts`
- Create: `tests/psychonautwiki-import.test.ts`
- Modify: `tests/content-markdown.test.ts:5-8,25`
- Generated: `content/substances/*.md` (enriched articles), `data/imports/psychonautwiki-candidates.json`

**Interfaces:**
- Consumes: everything exported by Task 3; the snapshot from Task 4; `TimeUnit` (Task 1); `DurationTimeline` (Task 2) for rendering.
- Produces: `importPsychonautWiki(root: string): { sameSubstance: number; enriched: number; stripped: number; doseRecords: number; durationRoutes: number; candidates: number }`; `bun run content:psychonautwiki`.

- [ ] **Step 1: Keep the launch-collection guard meaningful**

`tests/content-markdown.test.ts` pins content hashes and record counts for the ten launch articles. The import only adds `psychonautwiki` records, so compare the launch records with those removed. Add to the imports (after line 7):

```ts
import { withoutPsychonautWiki } from "../scripts/psychonautwiki-data";
```

Replace line 25:

```ts
  // PsychonautWiki community records are additive; the launch curation underneath must stay unchanged.
  const curated = curatedSlugs.map((slug) => {
    const substance = substances.find((candidate) => candidate.slug === slug);
    return substance && withoutPsychonautWiki(substance);
  });
```

Run: `bunx tsx --test tests/content-markdown.test.ts`
Expected: PASS (no article has PsychonautWiki data yet).

- [ ] **Step 2: Write the failing corpus tests**

Create `tests/psychonautwiki-import.test.ts`:

```ts
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
```

Run: `bunx tsx --test tests/psychonautwiki-import.test.ts`
Expected: FAIL with `ENOENT` for `psychonautwiki-crosswalk.json`.

- [ ] **Step 3: Create the crosswalk**

Create `data/imports/psychonautwiki-crosswalk.json`. Each `same-substance` decision was checked against the snapshot's dose units and common band (spec, "Crosswalk").

```json
{
  "schemaVersion": 1,
  "reviewedAt": "2026-11-06",
  "entries": [
    { "slug": "5-htp", "pwName": "5-Hydroxytryptophan", "relation": "same-substance" },
    { "slug": "alpha-gpc", "pwName": "Alpha-GPC", "relation": "same-substance" },
    { "slug": "alprazolam", "pwName": "Alprazolam", "relation": "same-substance" },
    { "slug": "amphetamine", "pwName": "Amphetamine", "relation": "same-substance" },
    { "slug": "aniracetam", "pwName": "Aniracetam", "relation": "same-substance" },
    { "slug": "armodafinil", "pwName": "Armodafinil", "relation": "same-substance" },
    { "slug": "bromantane", "pwName": "Bromantane", "relation": "same-substance" },
    { "slug": "caffeine", "pwName": "Caffeine", "relation": "same-substance" },
    { "slug": "cannabis", "pwName": "Cannabis", "relation": "preparation", "reason": "PsychonautWiki's Cannabis dose bands are milligrams of THC, not amounts of the plant material this article covers." },
    { "slug": "choline", "pwName": "Choline bitartrate", "relation": "rejected", "reason": "PsychonautWiki's page covers the bitartrate salt, which has its own BHWiki article (choline-bitartrate)." },
    { "slug": "choline-bitartrate", "pwName": "Choline bitartrate", "relation": "same-substance" },
    { "slug": "citicoline", "pwName": "Citicoline", "relation": "same-substance" },
    { "slug": "cocaine", "pwName": "Cocaine", "relation": "same-substance" },
    { "slug": "coluracetam-019fe218", "pwName": "Coluracetam", "relation": "same-substance" },
    { "slug": "creatine", "pwName": "Creatine", "relation": "same-substance" },
    { "slug": "delta-9-thc", "pwName": "Cannabis", "relation": "preparation", "reason": "PsychonautWiki's page covers the cannabis plant; its bands are milligrams of THC taken as plant material or edibles, not exposures to the isolated compound this article covers." },
    { "slug": "dextroamphetamine", "pwName": "Dextroamphetamine", "relation": "same-substance" },
    { "slug": "dextromethorphan", "pwName": "Dextromethorphan", "relation": "same-substance" },
    { "slug": "diphenhydramine", "pwName": "Diphenhydramine", "relation": "same-substance" },
    { "slug": "dmt", "pwName": "1,3-Butanediol", "relation": "rejected", "reason": "PsychonautWiki lists \"DMT\", \"Dimethyltryptamine\" and \"Dmitri\" as common names of 1,3-butanediol; it is not N,N-dimethyltryptamine." },
    { "slug": "dmt", "pwName": "DMT", "relation": "same-substance" },
    { "slug": "ethanol", "pwName": "Alcohol", "relation": "same-substance" },
    { "slug": "gabapentin", "pwName": "Gabapentin", "relation": "same-substance" },
    { "slug": "galantamine", "pwName": "Galantamine", "relation": "same-substance" },
    { "slug": "haloperidol", "pwName": "Haloperidol", "relation": "same-substance" },
    { "slug": "kava", "pwName": "Kava", "relation": "same-substance" },
    { "slug": "ketamine", "pwName": "Ketamine", "relation": "same-substance" },
    { "slug": "l-theanine", "pwName": "Theanine", "relation": "same-substance" },
    { "slug": "lisdexamfetamine", "pwName": "Lisdexamfetamine", "relation": "same-substance" },
    { "slug": "lsd", "pwName": "LSD", "relation": "same-substance" },
    { "slug": "mdma", "pwName": "MDMA", "relation": "same-substance" },
    { "slug": "melatonin", "pwName": "Melatonin", "relation": "same-substance" },
    { "slug": "memantine-019fe218", "pwName": "Memantine", "relation": "same-substance" },
    { "slug": "mescaline", "pwName": "Mescaline", "relation": "same-substance" },
    { "slug": "methylphenidate", "pwName": "Methylphenidate", "relation": "same-substance" },
    { "slug": "mitragynine", "pwName": "Kratom", "relation": "preparation", "reason": "PsychonautWiki's page covers kratom leaf preparations dosed in grams of leaf; this article is the isolated alkaloid." },
    { "slug": "modafinil", "pwName": "Modafinil", "relation": "same-substance" },
    { "slug": "morphine-01a08b04", "pwName": "Morphine", "relation": "same-substance" },
    { "slug": "n-acetylcysteine-019fe218", "pwName": "N-Acetylcysteine", "relation": "same-substance" },
    { "slug": "nicotine", "pwName": "Nicotine", "relation": "same-substance" },
    { "slug": "nitrous-oxide", "pwName": "Nitrous", "relation": "same-substance" },
    { "slug": "noopept", "pwName": "Omberacetam", "relation": "same-substance" },
    { "slug": "oxiracetam-019fe218", "pwName": "Oxiracetam", "relation": "same-substance" },
    { "slug": "phenibut", "pwName": "Phenibut", "relation": "same-substance" },
    { "slug": "phenobarbital", "pwName": "Phenobarbital", "relation": "same-substance" },
    { "slug": "phenylpiracetam", "pwName": "Phenylpiracetam", "relation": "same-substance" },
    { "slug": "piracetam", "pwName": "Piracetam", "relation": "same-substance" },
    { "slug": "pramiracetam-019fe218", "pwName": "Pramiracetam", "relation": "same-substance" },
    { "slug": "psilocybin", "pwName": "Psilocybin mushrooms", "relation": "preparation", "reason": "PsychonautWiki's page covers psilocybin-containing mushrooms; its bands are psilocybin amounts consumed in mushroom material, which also contains psilocin and other tryptamines." },
    { "slug": "psychedelic-01a08b04", "pwName": "Psychedelic", "relation": "rejected", "reason": "PsychonautWiki's page is a drug-class article, not a substance." },
    { "slug": "salvinorin-a", "pwName": "Salvinorin A", "relation": "same-substance" },
    { "slug": "theacrine", "pwName": "Theacrine", "relation": "same-substance" },
    { "slug": "tyrosine", "pwName": "Tyrosine", "relation": "same-substance" },
    { "slug": "zolpidem-01a08b04", "pwName": "Zolpidem", "relation": "same-substance" }
  ]
}
```

Run: `bunx tsx --test tests/psychonautwiki-import.test.ts`
Expected: tests 1 and 2 PASS; test 3 FAILS (articles lack imported data). If test 1 lists unreviewed pairs because the fetched snapshot differs from 2026-11-06, decide each one before continuing: `same-substance` only when the PsychonautWiki page is the same compound or preparation *and* its dose unit measures that same thing; otherwise `preparation` or `rejected` with a reason.

- [ ] **Step 4: Create the importer**

Create `scripts/import-psychonautwiki.ts`:

```ts
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
    const record = pwName ? applyPsychonautWiki(article, pwByName.get(pwName)!, snapshot) : withoutPsychonautWiki(article);
    if (!pwName) summary.stripped++;
    else if (hasPsychonautWikiData(record)) summary.enriched++;
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
```

- [ ] **Step 5: Run the import**

Run: `bun run content:psychonautwiki`
Expected for the 2026-11-06 snapshot: `{ sameSubstance: 47, enriched: 46, stripped: 0, doseRecords: 311, durationRoutes: 64, candidates: 323 }`. `candidates` is the 373 snapshot pages minus the 50 distinct pages named by `same-substance` or `preparation` entries. Kava has no PsychonautWiki values and is not enriched. A newer snapshot may print other numbers; use the printed ones in Task 7. If the import throws for an unsupported unit, route, or band in a `same-substance` article, change that crosswalk entry to `rejected` with the error as the reason, and rerun.

Prove the import is idempotent: `git add content/substances data/imports/psychonautwiki-candidates.json && bun run content:psychonautwiki && git diff --stat -- content data/imports` prints nothing.

- [ ] **Step 6: Inspect one article**

Run: `git diff -- content/substances/lsd.md`
Expected: five `community` dose records on route `Sublingual`, one `## Duration` section with route id `psychonautwiki-sublingual`, and one reference `id: psychonautwiki` with `url: https://psychonautwiki.org/wiki/LSD`. No other lines change.

- [ ] **Step 7: Run tests and validation**

Run: `bunx tsx --test tests/psychonautwiki-import.test.ts tests/content-markdown.test.ts && bun run content:validate && bun run test && bun run typecheck`
Expected: all PASS.

- [ ] **Step 8: Commit**

```bash
git add data/imports/psychonautwiki-crosswalk.json data/imports/psychonautwiki-candidates.json scripts/import-psychonautwiki.ts tests/psychonautwiki-import.test.ts tests/content-markdown.test.ts content/substances
git commit -m "feat(content): import PsychonautWiki community dose and duration ranges"
```

---

### Task 6: Interaction leads

**Files:**
- Create: `scripts/psychonautwiki-interaction-leads.ts`
- Create: `data/imports/psychonautwiki-interaction-reviews.json`
- Test: `tests/psychonautwiki-leads.test.ts`

**Interfaces:**
- Consumes: `Crosswalk`, `InteractionCapture`, `InteractionCategory`, `PwSnapshot`, `nameKey`, `canonicalPageUrl`, `readJson`, path constants (Task 3); the committed crosswalk (Task 5).
- Produces: `InteractionReview`, `InteractionReviews`, `LeadTarget`, `InteractionLead` types; `resolveTarget(target, crosswalk, substances): LeadTarget`; `interactionLeads(substances, crosswalk, capture, reviews): InteractionLead[]`; `validateReviews(reviews, substances): void`; `bun run content:psychonautwiki-leads [--slug <slug>]`.

- [ ] **Step 1: Write the failing tests**

Create `tests/psychonautwiki-leads.test.ts`:

```ts
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
```

Run: `bunx tsx --test tests/psychonautwiki-leads.test.ts`
Expected: FAIL with a module-not-found error.

- [ ] **Step 2: Create the review log**

Create `data/imports/psychonautwiki-interaction-reviews.json`:

```json
{
  "schemaVersion": 1,
  "reviews": []
}
```

- [ ] **Step 3: Implement**

Create `scripts/psychonautwiki-interaction-leads.ts`:

```ts
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { loadCorpus } from "../src/lib/content-markdown";
import type { Substance } from "../src/lib/types";
import {
  CROSSWALK_PATH, INTERACTION_CAPTURE_PATH, INTERACTION_REVIEWS_PATH, SNAPSHOT_PATH,
  canonicalPageUrl, nameKey, readJson,
  type Crosswalk, type InteractionCapture, type InteractionCategory, type PwSnapshot,
} from "./psychonautwiki-data";

export type InteractionReview = { slug: string; target: string; outcome: "added" | "rejected"; interactionId?: string; note: string; reviewedAt: string };
export type InteractionReviews = { schemaVersion: 1; reviews: InteractionReview[] };
export type LeadTarget = { otherSlug: string } | { targetClassId: string } | null;
export type InteractionLead = { slug: string; pwSubstance: string; category: InteractionCategory; target: string; resolved: LeadTarget };

// PsychonautWiki class targets with an exact BHWiki class concept (content/concepts/class).
const classTargets = new Map([
  ["antihistamines", "antihistamine"], ["benzodiazepines", "benzodiazepine"], ["deliriants", "deliriant"], ["depressants", "depressant"],
  ["dissociatives", "dissociative"], ["opioids", "opioid"], ["psychedelics", "psychedelic"], ["stimulants", "stimulant"],
]);

export function resolveTarget(target: string, crosswalk: Crosswalk, substances: Pick<Substance, "slug" | "name" | "aliases">[]): LeadTarget {
  const key = nameKey(target);
  const crosswalked = crosswalk.entries.find((entry) => entry.relation === "same-substance" && nameKey(entry.pwName) === key);
  if (crosswalked) return { otherSlug: crosswalked.slug };
  const articles = substances.filter((article) => [article.slug, article.name, ...article.aliases].some((name) => nameKey(name) === key));
  if (articles.length === 1) return { otherSlug: articles[0].slug };
  const classId = classTargets.get(key);
  return classId ? { targetClassId: classId } : null;
}

const reviewKey = (slug: string, target: string) => `${slug}\u0000${nameKey(target)}`;

export function interactionLeads(substances: Substance[], crosswalk: Crosswalk, capture: InteractionCapture, reviews: InteractionReviews): InteractionLead[] {
  const slugByPwName = new Map(crosswalk.entries.filter((entry) => entry.relation === "same-substance").map((entry) => [entry.pwName, entry.slug]));
  const reviewed = new Set(reviews.reviews.map((review) => reviewKey(review.slug, review.target)));
  const leads: InteractionLead[] = [];
  for (const item of capture.interactions) {
    const slug = slugByPwName.get(item.substance);
    if (!slug || reviewed.has(reviewKey(slug, item.target))) continue;
    const article = substances.find((candidate) => candidate.slug === slug)!;
    const resolved = resolveTarget(item.target, crosswalk, substances);
    const curated = resolved !== null && article.interactions.some((interaction) => "otherSlug" in resolved
      ? interaction.otherSlug === resolved.otherSlug
      : interaction.targetClassId === resolved.targetClassId);
    if (!curated) leads.push({ slug, pwSubstance: item.substance, category: item.category, target: item.target, resolved });
  }
  return leads.sort((a, b) => a.slug.localeCompare(b.slug) || a.target.localeCompare(b.target) || a.category.localeCompare(b.category));
}

export function validateReviews(reviews: InteractionReviews, substances: Substance[]): void {
  if (reviews.schemaVersion !== 1 || !Array.isArray(reviews.reviews)) throw new Error("Unexpected interaction review log format");
  const seen = new Set<string>();
  for (const review of reviews.reviews) {
    const label = `${review.slug} × ${review.target}`;
    const article = substances.find((candidate) => candidate.slug === review.slug);
    if (!article) throw new Error(`Review names an unknown article: ${label}`);
    if (seen.has(reviewKey(review.slug, review.target))) throw new Error(`Duplicate interaction review: ${label}`);
    seen.add(reviewKey(review.slug, review.target));
    if (review.outcome !== "added" && review.outcome !== "rejected") throw new Error(`Unknown review outcome: ${label}`);
    if (!review.note?.trim() || !/^\d{4}-\d{2}-\d{2}$/.test(review.reviewedAt)) throw new Error(`Review needs a note and an ISO date: ${label}`);
    if (review.outcome === "added" && !article.interactions.some((interaction) => interaction.id === review.interactionId)) {
      throw new Error(`An added review must name an interaction on the article: ${label}`);
    }
  }
}

function printLeads(root: string, slug: string | undefined) {
  if (!existsSync(path.join(root, INTERACTION_CAPTURE_PATH))) throw new Error("No local interaction capture. Run `bun run content:psychonautwiki-fetch` first.");
  const capture = readJson<InteractionCapture>(root, INTERACTION_CAPTURE_PATH);
  const crosswalk = readJson<Crosswalk>(root, CROSSWALK_PATH);
  const reviews = readJson<InteractionReviews>(root, INTERACTION_REVIEWS_PATH);
  const snapshot = readJson<PwSnapshot>(root, SNAPSHOT_PATH);
  const { substances } = loadCorpus(path.join(root, "content"));
  validateReviews(reviews, substances);
  const leads = interactionLeads(substances, crosswalk, capture, reviews).filter((lead) => !slug || lead.slug === slug);
  const urls = new Map(snapshot.substances.map((substance) => [substance.name, canonicalPageUrl(substance.url)]));
  const lines = [
    "# PsychonautWiki interaction leads",
    "",
    `Capture retrieved ${capture.retrievedAt}. Leads are unverified and must not be cited or published. Add an interaction only from primary sources, then log the outcome in ${INTERACTION_REVIEWS_PATH}.`,
  ];
  let current = "";
  for (const lead of leads) {
    if (lead.slug !== current) {
      current = lead.slug;
      lines.push("", `## ${lead.slug} (${lead.pwSubstance}, ${urls.get(lead.pwSubstance)})`);
    }
    const target = lead.resolved === null ? "unresolved" : "otherSlug" in lead.resolved ? `substance:${lead.resolved.otherSlug}` : `tag:${lead.resolved.targetClassId}`;
    lines.push(`- ${lead.category} · ${lead.target} → ${target}`);
  }
  lines.push("", `${leads.length} lead(s).`);
  console.log(lines.join("\n"));
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const at = process.argv.indexOf("--slug");
  printLeads(path.resolve(import.meta.dirname, ".."), at > 0 ? process.argv[at + 1] : undefined);
}
```

- [ ] **Step 4: Run tests, typecheck, and the command**

Run: `bunx tsx --test tests/psychonautwiki-leads.test.ts && bun run typecheck`
Expected: PASS.

Run: `bun run content:psychonautwiki-leads --slug lsd`
Expected: a Markdown list under `## lsd (LSD, https://psychonautwiki.org/wiki/LSD)` with lines such as `- dangerous · Lithium → unresolved` and `- … · Stimulants → tag:stimulant`, then a lead count. The output is local only; do not paste it into tracked files.

- [ ] **Step 5: Commit**

```bash
git add scripts/psychonautwiki-interaction-leads.ts data/imports/psychonautwiki-interaction-reviews.json tests/psychonautwiki-leads.test.ts
git commit -m "feat(import): list PsychonautWiki interaction leads for primary-source review"
```

---

### Task 7: Documentation and licensing

**Files:**
- Modify: `CONTENT-LICENSE.md:9`
- Modify: `README.md:67`
- Modify: `docs/content-sources.md` (new section before `## Original text and reuse`)
- Modify: `docs/reference-research.md:44`
- Modify: `data/imports/README.md` (title, heading levels, new section)
- Modify: `content/templates/README.md:15`
- Add: `docs/psychonautwiki-source-research.md` (already written; commit it here if not yet committed)

Use the `retrievedAt` and `snapshotBuiltOn` values from `data/imports/psychonautwiki.json` and the counts printed by Task 5 wherever the text below says 2026-11-06, about 2026-06-23, 47, 46, 311 or 64, if they differ.

- [ ] **Step 1: `CONTENT-LICENSE.md` line 9**

Replace with:

```markdown
Wikipedia, PsychonautWiki, Effect Index and Examine were consulted for information architecture. Their prose, effect definitions, images and proprietary datasets are not redistributed, with one exception: PsychonautWiki's structured dose and duration ranges, which [its copyright page](https://psychonautwiki.org/wiki/Copyrights) licenses as semantic data under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). BHWiki stores those values as community records. Each enriched article's `psychonautwiki` reference credits PsychonautWiki contributors, links the source page and license, gives the snapshot and retrieval dates, and states that BHWiki normalized unit symbols and route names. PsychonautWiki prose, interaction lists, effect descriptions and files are not redistributed. Effect Index's noncommercial terms are not incorporated into BHWiki's content license; descriptions and definitions here are original.
```

- [ ] **Step 2: `README.md` line 67**

Replace with:

```markdown
Wikipedia, PsychonautWiki, Effect Index and Examine informed the information architecture. BHWiki's prose is original. PsychonautWiki's CC BY 4.0 dose and duration ranges appear as attributed community records on matched articles; see [content provenance](docs/content-sources.md#psychonautwiki-community-data--2026-11-06). Linked papers and proprietary or noncommercial source definitions are not licensed for redistribution by this project's code license.
```

- [ ] **Step 3: `docs/content-sources.md`**

Insert before the line `## Original text and reuse`:

```markdown
## PsychonautWiki community data — 2026-11-06

`bun run content:psychonautwiki-fetch` saved one response from the [PsychonautWiki API](https://api.psychonautwiki.org/) to `data/imports/psychonautwiki.json`. The API's `/health` endpoint dates its snapshot to about 2026-06-23. The API had stopped refreshing, so later wiki edits are absent. `bun run content:psychonautwiki` reads that file offline together with the reviewed `data/imports/psychonautwiki-crosswalk.json`.

- Only `same-substance` crosswalk entries receive data: 47 articles, 46 of which have PsychonautWiki values. Each decision was checked against the page's dose unit, not only its name. PsychonautWiki's Cannabis bands are milligrams of THC and its Psilocybin mushrooms bands milligrams of psilocybin, so `cannabis`, `delta-9-thc`, `psilocybin` and `mitragynine` (Kratom) receive none. Name collisions such as 1,3-butanediol listed as "DMT" are rejected. Every exact name or alias match needs a recorded decision.
- Each route's threshold, light, common, strong and heavy bands become 311 `community` dose records. Heavy is open-ended. Formulation, frequency, duration and population are not established by the source.
- Each route's onset, come-up, peak, offset, after-effects and total become one of 64 subjective duration records. Onset is time since dosing; the other phases are phase lengths and are never summed.
- Records cite the article's `psychonautwiki` reference: PsychonautWiki contributors, the canonical page, [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/), snapshot and retrieval dates, and BHWiki's changes (unit symbols, route names). PsychonautWiki states that its dosage information "is gathered from users and resources for educational purposes only" and "should be verified with other sources for accuracy". The values carry no per-value citations.
- Not imported: prose, summaries, effects, tolerance, addiction or toxicity text, bioavailability, images and interactions. Some PsychonautWiki interactions were "sourced from TripSit", whose chart is "All Rights Reserved". `bun run content:psychonautwiki-leads` lists them from a gitignored local capture as leads for primary-source review. Only BHWiki-authored interactions citing primary sources are published; outcomes are logged in `data/imports/psychonautwiki-interaction-reviews.json`.
- `data/imports/psychonautwiki-candidates.json` lists PsychonautWiki pages without a BHWiki article. No article is created from PsychonautWiki data.

API behavior, license wording and open questions: [PsychonautWiki as a structured data source](psychonautwiki-source-research.md).

```

- [ ] **Step 4: `docs/reference-research.md` line 44**

Replace with:

```markdown
- [PsychonautWiki's copyright page](https://psychonautwiki.org/wiki/Copyrights) licenses text under CC BY-SA 4.0 and semantic data under CC BY 4.0, with exceptions for files, experience reports and some third-party articles. Its API's MIT software license does not cover returned content. BHWiki authors its own descriptions and imports only attributed dose and duration ranges; see [content provenance](content-sources.md#psychonautwiki-community-data--2026-11-06).
```

- [ ] **Step 5: `data/imports/README.md`**

1. Replace line 1 `# Molekul acquisition snapshot` with:

```markdown
# Acquisition snapshots

## Molekul
```

2. Change `## Rebuild the imported content` to `### Rebuild the imported content` and `## Browser extraction` to `### Browser extraction`.
3. Append:

```markdown

## PsychonautWiki

`psychonautwiki.json` is one response from the [PsychonautWiki GraphQL API](https://api.psychonautwiki.org/), written by `bun run content:psychonautwiki-fetch`, one substance per line. It keeps names, page URLs, common and systematic names, and per-route dose bands and duration ranges. `retrievedAt` is the fetch date. `snapshotBuiltOn` comes from the API's `/health` snapshot age; that endpoint is CDN-cached, so the date is accurate to about an hour. The values are PsychonautWiki semantic data under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/), credited to PsychonautWiki contributors. The fetch only sorts substances and routes.

`psychonautwiki-crosswalk.json` is the reviewed identity map. `same-substance` entries receive data. `preparation` and `rejected` entries need a reason and receive none. Decide `same-substance` only when the page is the same compound or preparation and its dose unit measures that same thing. `bun run content:psychonautwiki` refuses to run while an exact name or alias match lacks an entry. It rewrites only records whose `sourceId` is `psychonautwiki`, refuses editorially reviewed articles, and writes `psychonautwiki-candidates.json`, the pages with no BHWiki article.

Interaction lists go only to the gitignored `local/psychonautwiki-interactions.json`. `bun run content:psychonautwiki-leads [--slug <slug>]` prints unreviewed pairs. After checking a pair against primary sources, add a normal interaction citing those sources (never PsychonautWiki) and record `added` with its id in `psychonautwiki-interaction-reviews.json`; record `rejected` pairs there too.

To refresh: run the fetch, review the snapshot diff and any crosswalk demands, run the import, then `bun run content:validate` and `bun run test`.
```

- [ ] **Step 6: `content/templates/README.md` line 15**

Replace with:

```markdown
Keep `editorialStatus` as `sourced-draft` until a reviewer records the review. Link claims to reference ids. Use original wording. Do not copy Effect Index, PsychonautWiki, or Wikipedia prose. Records with `sourceId: psychonautwiki` come from `bun run content:psychonautwiki`; change the snapshot or crosswalk instead of editing them by hand.
```

- [ ] **Step 7: Verify links and commit**

Run: `bun run content:validate && bun run test`
Expected: PASS. Open `docs/content-sources.md` and confirm the README anchor `#psychonautwiki-community-data--2026-11-06` matches the new heading (GitHub drops `—` and keeps both hyphens).

```bash
git add CONTENT-LICENSE.md README.md docs/content-sources.md docs/reference-research.md data/imports/README.md content/templates/README.md docs/psychonautwiki-source-research.md
git commit -m "docs: record PsychonautWiki community data provenance and licensing"
```

---

### Task 8: Full verification and browser smoke

**Files:** none modified unless a check fails.

- [ ] **Step 1: Repository checks**

Run, in order:

```bash
bun run typecheck
bun run content:validate
bun run test
BHWIKI_DATA_MODE=bundled bun run build
BHWIKI_DATA_MODE=bundled bun run test:e2e
```

Expected: all pass. `tests/e2e/research.spec.ts` "figures and pharmacokinetics render only from committed data" proves citicoline's marker chart survived its new PsychonautWiki timeline.

- [ ] **Step 2: Browser smoke**

Start `bun run dev` (port 3086) and check, desktop and a 390 px-wide viewport:

| Page | Expected |
| --- | --- |
| `/substances/lsd` | Dose tab "Sublingual": the two research cards plus Threshold, Light, Common, Strong and "Heavy dose band (300 µg and above)", each badged "Community description" and citing the PsychonautWiki reference. Duration: the curated "Published timing evidence" card (Dolder peak/duration text) and a "Reported subjective timing · Sublingual" card with onset "15–30 min" and no timeline bar. References list "LSD: PsychonautWiki dose and duration data" with the CC BY 4.0 link rendered as a link. |
| `/substances/nicotine` | A smoked duration card showing onset "5–20 s". Existing nicotine timeline cards remain. |
| `/substances/citicoline` | Marker chart still visible above the PsychonautWiki oral duration card. |
| `/substances/psilocybin`, `/substances/delta-9-thc`, `/substances/cannabis` | No "Community description" cards; no PsychonautWiki reference. |
| `/substances/dmt` | Curated timing card now appears above the existing research timelines and the new PsychonautWiki routes; nothing duplicated or missing. |

Record anything unexpected as a failure, fix it in the owning task's files, and rerun Step 1.

- [ ] **Step 3: Final commit (only if Step 1–2 required fixes)**

```bash
git add <fixed files by path>
git commit -m "fix: address PsychonautWiki import verification findings"
```

## Follow-ups outside this plan

- Ask PsychonautWiki (team@psy.is or bifrost issues) for permission to read Semantic MediaWiki through `api.php`. That gives fresher data with `_MDAT` timestamps. Until then, the GraphQL snapshot is the only channel.
- Re-run the fetch when bifrost resumes refreshing (its `/metrics` shows `bifrost_shaping_circuit_breaker_open 1` today).
