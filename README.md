# BHWiki

An independent, English-language reference wiki connecting substances, subjective experiences, biological mechanisms and research findings. Articles link claims to sources and distinguish selected evidence from editorial review.

The launch collection covers caffeine, L-theanine, creatine, melatonin, nicotine, psilocybin, modafinil, methylphenidate, diphenhydramine and citicoline. Shared concept pages and a Cytoscape.js knowledge graph provide additional ways into the same records. The initial articles are **sourced drafts**, not independently reviewed medical guidance.

The current catalog contains 158 records, including 95 profiles linked to the Molekul research atlas. Identity-only PubChem stubs are not published; each catalog record has a non-identity source trail or a source-linked research, safety, legal, interaction, or identification record. Preparations without a curated molecular identity show an explicit missing-structure state. See [the Molekul import record](data/imports/README.md).

Separate ChatGPT Deep Research runs have added or enriched 21 topics with structured outcomes, exposure context, pharmacokinetics, mechanisms and source disclosures. Nineteen supplied literal Markdown; Phenibut and Tadalafil were locally reconciled from their saved reports and checked primary records because generated file links were unavailable. All remain sourced drafts. [The acquisition record](data/research/README.md) distinguishes originals, format repairs and local reconciliation; 38 further topics remain queued.

## Run locally

Use **Bun 1.3.14** (pinned in `package.json`) and **Node.js 22**. Install dependencies from the lockfile:

```sh
bun install --frozen-lockfile
cp .env.example .env.local
bun run dev
```

Open [localhost:3086](http://localhost:3086). The example selects `BHWIKI_DATA_MODE=bundled` explicitly; UI and content development needs no database account. Do not overwrite an existing local environment file containing host credentials.

```sh
bun run typecheck
bun run content:validate
bun run test
BHWIKI_DATA_MODE=bundled bun run build
bunx playwright install chromium
BHWIKI_DATA_MODE=bundled bun run test:e2e
```

On Linux, install Chromium system dependencies with `bunx playwright install --with-deps chromium` when needed. The browser suite starts the built application itself; use `PLAYWRIGHT_BASE_URL` only to target an intentionally running instance.

See [CONTRIBUTING.md](CONTRIBUTING.md) for content changes and review requirements, and [deployment instructions](deploy/README.md) for a standalone production package. Next.js API guidance for this installed release is bundled in `node_modules/next/dist/docs/`.

## Architecture

- Next.js 16 App Router, React 19, strict TypeScript and Bun; server-rendered public articles with focused client interactions.
- One content model for articles, concept pages, publications and role-bearing hyperedges. The editable source is a Markdown file per record under `content/`; pages, search, the graph, and publication read the compiled records. Cytoscape handles layout and interaction; an adjacent list provides accessible navigation.
- Explicit `bundled` and `database` data modes. A configured database failure returns an error instead of switching to bundled records.
- Existing Supabase PostgreSQL 18 infrastructure with a separate `bhwiki` schema. Every BHWiki application table explicitly uses **OrioleDB**; migrations fail when the engine is unavailable.
- Server-side SQL through a dedicated read-only role and a small connection pool. No browser database credentials, public editing API, authentication dependency or shared PostgREST configuration change.
- Git pull requests are the contribution workflow. Publishing validates content, writes normalized facts and immutable revision snapshots, then updates publication pointers in one transaction.

Substance pages include identity and molecule provenance, effects, measured study outcomes, exposure contexts, pharmacokinetics, safety, research, connections, dated legal context and revision history. Missing information stays “not assessed” or “not established.” Quantitative observations retain analyte, population, units, statistic type and source. The elimination chart is an educational first-order model, not an effect-intensity or personal-clearance prediction.

Measured outcomes are literature findings. The release contains no OptiHealth integration, promotion, personal health outcomes, vendors or purchasing features.

## Database and publishing

Canonical shared-host provisioning and ordered, checksummed migrations belong to `/opt/optihealth_db`; portable copies ship in this repository. Use [docs/database.md](docs/database.md) for exact migration, publishing and isolation-verification commands. Do not reset or recreate the shared cluster to install BHWiki.

At runtime, select `BHWIKI_DATA_MODE=database` and supply `DATABASE_URL` for the dedicated `bhwiki_reader` account. Administrator credentials are used only by migration/publishing commands and must never enter the web process or image. The reader cannot write content, read unpublished drafts or access another tenant's application data.

Public “sourced draft” is an editorial review status, distinct from an unpublished revision's visibility. A published article must retain its actual review status. Restoring content A after A → B records a new publication; reimporting unchanged current content does not.

## Validation and release

The repository checks content references, graph integrity, article behavior and publication semantics. CI installs the pinned dependencies, checks types and content, runs unit tests, builds in explicit bundled mode and runs the desktop/mobile Chromium suite. Browser checks exercise desktop/mobile navigation, search, filters, source links, graph controls and empty states. Real OrioleDB isolation and publication checks are a separate database verification step; a successful bundled build does not establish database correctness.

The workload benchmark measures article lookup, catalog filtering and bounded graph queries on the target database. Its results describe that dataset and host; choosing OrioleDB alone is not evidence of a speedup. The verified release passes 32 unit tests and 14 desktop/mobile browser tests, including automated accessibility checks; actual OrioleDB publication/isolation checks and the standalone container build also pass. See [the verification record](docs/verification.md) for scope, measurements and limitations.

## Licensing and sources

Code is [MIT](LICENSE). Original editorial content and explanatory documentation are [CC BY-SA 4.0](CONTENT-LICENSE.md); external publications and assets retain their own terms. See [content provenance](docs/content-sources.md) and [reference research](docs/reference-research.md).

Wikipedia, PsychonautWiki, Effect Index and Examine informed the information architecture. BHWiki's prose is original. PsychonautWiki's CC BY 4.0 dose and duration ranges appear as attributed community records on matched articles; see [content provenance](docs/content-sources.md#psychonautwiki-community-data--2026-11-06). Linked papers and proprietary or noncommercial source definitions are not licensed for redistribution by this project's code license.

## Interactive research

Articles now include inspectable evidence, timing selection, mechanism diagrams and study-result plots. Outcome/effect pages search the complete set of observations; Compare and Interactions are available from Browse. See [the feature guide](docs/research-features.md) and [Markdown enrichment format](content/templates/research-enrichment.md). Richer data can activate these interfaces without further UI changes.
