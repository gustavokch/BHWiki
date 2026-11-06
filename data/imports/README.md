# Acquisition snapshots

## Molekul

`molekul-2026-10-04.json` records names, aliases, working classifications and external source URLs extracted from the rendered DOM of all 95 compound profiles at https://molekul.io/ using the connected Chrome browser. It does not contain Molekul article prose, study-result summaries, images, PDFs, field notes, donations, sourcing pages or personal records.

`profiles` uses the column order recorded in `profileColumns`. Class and URL indices refer to the corresponding arrays. A decimal URL token expands to `https://pubmed.ncbi.nlm.nih.gov/<token>/`; a `PMC` token expands to `https://pmc.ncbi.nlm.nih.gov/articles/<token>/`. Other tokens are full URLs, including source-document page fragments.

The reconstructed `{classes, urls, profiles}` JSON has 22,032 UTF-16 code units and FNV-1a fingerprint **3078886368**. These values were checked both in Chrome and against the saved manifest to detect transcription errors. They verify extraction fidelity, not scientific accuracy or continued source access.

`molekul-identity-notes.json` contains original BHWiki wording of identity leads read from the index. They are explicitly attributed to the secondary resource and need original chemistry or preparation verification. They do not report clinical efficacy, doses or elimination estimates.

### Rebuild the imported content

Run `bun run content:molekul`, then `bun run content:validate`. The importer is offline: it reads this snapshot and writes the ordinary Markdown articles. It validates the entire proposed corpus and canonical source metadata before writing. Repeated execution preserves order and existing records without duplicating references or adding repeated prose. Independently reviewed articles require manual reconciliation.

The first import added **87** records and enriched **8** existing records. Phenotropil maps to the existing `phenylpiracetam` article. Existing PubChem identities and curated clinical fields are retained. The 87 additions use `pubchemCid: null` and `Not established` for molecular fields; this means uncurated identity, not that no structure can ever be established.

There are **274** distinct external URLs. Three product/catalogue links (Armavir's catalogue and two Zdravushka product pages) remain only in this acquisition trail and are excluded from public references, leaving **271** eligible document links. Commercially hosted report reproductions remain source-document leads; they are not vendor listings or independent replications. Nine profiles had no external URLs; two more have only excluded catalogue/product URLs.

Source links whose bibliographic metadata has not been independently verified say so in their title, authors, kind and limitation. Their `year: 2026` is explicitly the **link capture year**, not a claimed publication year. References already curated elsewhere in BHWiki retain their canonical metadata. Link counts must never be presented as trial or participant counts.

### Browser extraction

The homepage's observed `/compounds/<slug>` links supplied the profile URL list. Each URL was opened in Chrome and inspected using read-only DOM evaluation. For each profile, extraction read the `h1` name/alias, the `Working classification` definition-list entry, and `main a[href]` links labeled `Read the source` or `Identity / background`. URLs were deduplicated within a profile and then globally. The bibliography and homepage identity descriptions were also inspected; external documents were not independently appraised.

No re-use license for Molekul's prose was established. Its prose and assets are therefore not republished. The factual acquisition manifest and original identity notes have a separate scope from the linked third-party documents, whose terms remain their own.

## PsychonautWiki

`psychonautwiki.json` is one response from the [PsychonautWiki GraphQL API](https://api.psychonautwiki.org/), written by `bun run content:psychonautwiki-fetch`, one substance per line. It keeps names, page URLs, common and systematic names, and per-route dose bands and duration ranges. `retrievedAt` is the fetch date. `snapshotBuiltOn` comes from the API's `/health` snapshot age; that endpoint is CDN-cached, so the date is accurate to about an hour. The values are PsychonautWiki semantic data under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/), credited to PsychonautWiki contributors. The fetch only sorts substances and routes.

`psychonautwiki-crosswalk.json` is the reviewed identity map. `same-substance` entries receive data. `preparation` and `rejected` entries need a reason and receive none. Decide `same-substance` only when the page is the same compound or preparation and its dose unit measures that same thing. `bun run content:psychonautwiki` refuses to run while an exact name or alias match lacks an entry. It rewrites only records whose `sourceId` is `psychonautwiki`, refuses editorially reviewed articles, and writes `psychonautwiki-candidates.json`, the pages with no BHWiki article.

Interaction lists go only to the gitignored `local/psychonautwiki-interactions.json`. `bun run content:psychonautwiki-leads [--slug <slug>]` prints unreviewed pairs. After checking a pair against primary sources, add a normal interaction citing those sources (never PsychonautWiki) and record `added` with its id in `psychonautwiki-interaction-reviews.json`; record `rejected` pairs there too.

To refresh: run the fetch, review the snapshot diff and any crosswalk demands, run the import, then `bun run content:validate` and `bun run test`.
