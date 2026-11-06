# Article templates

Copy a template into the matching folder and rename it to the slug or id. The filename and the `slug` or `id` in the header must match. `content/templates/` is not published.

Each article is one Markdown file:

- The header holds singular facts: identity, half-life, kinetics summary, tags, and review status.
- Headings hold the prose contributors rewrite: summary, description, evidence note, concept definition, or relationship description.
- A section that repeats — doses, pharmacokinetic observations, effects, claims, references — contains one `yaml` fence. `null` means the source did not report that number. Do not leave a value out to mean zero.
- `x-shape` lists every field of the record in the order the publisher fingerprints. Add a field to `x-shape` when you add it to the article. Leave `x-order` unchanged; omit it on a new file and it sorts after the current articles.
- An unrecognized heading, a second fence in one section, or a paragraph before the first heading fails the check. The failure names the file. `bun run content:validate` runs the same checks as CI.

Effects go in `content/effects/`. Measured outcomes go in `content/outcomes/`. Other concepts go in `content/concepts/<kind>/`, and the folder must match `kind`. Relationships go in `content/relationships/`. Substances go in `content/substances/`.

Keep `editorialStatus` as `sourced-draft` until a reviewer records the review. Link claims to reference ids. Use original wording. Do not copy Effect Index, PsychonautWiki, or Wikipedia prose. Records with `sourceId: psychonautwiki` come from `bun run content:psychonautwiki`; change the snapshot or crosswalk instead of editing them by hand.

A published substance needs at least one non-identity source reference or a source-linked research, safety, legal, interaction, or identification record. A PubChem identity record alone is not published as an article.

For optional study metadata, numerical results, interactions, timing semantics, effect details, directed mechanism steps, intake context and identification tests, see [research enrichment](research-enrichment.md) and the substance template.

Dose intake fields are route/formulation-specific: use `foodRelation`, `solubility`, and `absorptionNote` only when the cited source supports them. Identification tests are presumptive or instrumental evidence records, not guarantees of identity, purity, concentration, or safety.

## Unresolved identities and preparations

A mixture, tissue extract or unresolved research code may use `pubchemCid: null`. In that case, `formula`, `molecularWeight` and `smiles` must all be `Not established`. Do not assign a surrogate compound identifier or draw a structure for a mixture. The profile still needs a source reference; imported Molekul profiles use `molekul-profile`. Existing molecular identities retain their PubChem attribution.
