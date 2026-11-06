# Content provenance and editorial conventions

Curated on 2026-09-29, with catalog fills through 2026-10-13. The published collection contains 158 sourced drafts. Identity-only PubChem stubs are kept out of the wiki; published records retain a non-identity source trail or source-linked research, safety, legal, interaction, or identification record. None has passed independent editorial review. `reviewedAt` records the source-curation date, not approval by a clinician or review board.

The editable source is one Markdown file per substance, concept, and relationship under `content/`. Those files compile into the same article, concept, and relationship records the pages and the publisher use. `content/editorial.json` remains the separate review attestation and is empty for this collection.

## How evidence is represented

- Publications have local reference IDs and canonical PMID/DOI identifiers where available. Insights, limitations and funding disclosures stay attached to the publication. An unassessed disclosure is labeled as such.
- Reference-level sponsorship and conflict labels use explicit `sponsorshipStatus` and `conflictOfInterestStatus`, never guesses from prose or affiliations. Industry, mixed or non-industry funding and declared/no-declared conflicts require disclosure text and an inspected HTTPS `disclosureUrl`. `not-reported` means an inspected source lacks a declaration; inaccessible or uninspected material remains `not-assessed`. These labels describe declarations, not evidence certainty or proof of bias. Full article JSON preserves them in bundled and published database projections.
- Claims identify participants and roles, exposure/population context, sources and limitations. There is no substance-wide evidence grade. Selected studies are not a systematic review of all published findings.
- Study exposures distinguish ingredient, formulation, route, numeric quantity, units, frequency, duration, population and purpose. Label exposures are distinguished from research protocols. Preparation details absent from an inspected source remain not assessed. Nicotine has no curated dose protocol.
- Subjective experiences and measured outcomes use separate concept kinds and article sections. No invented radar scores, effect intensities, survey counts or personal outcome records are supplied. A laboratory task, biochemical outcome and clinical rating scale are different measurements.
- Elimination observations identify the measured analyte, statistic and population. A reported range across studies is not a confidence interval; an approximate value or study mean is stored as a point value. The mathematical curve illustrates a source-linked observation, not a personal prediction or duration of felt effects.
- Caffeine's adult range is 3–7 hours in Temple et al. The Faber smoking-cessation paper reports a change in CYP1A2 activity, which must not become a caffeine half-life. Tobacco smoke is an exposure context distinct from nicotine and from caffeine's administration route. PsychonautWiki's community dose bands for smoking caffeine itself are labeled community records on their own route; tobacco smoke remains a metabolic modifier and never becomes a caffeine route.
- The psilocybin article models **psilocin**, its active metabolite, using Brown et al.'s study mean. Parent psilocybin, psilocin and later metabolites are not interchangeable.
- Missing elimination estimates, legal conclusions, outcomes or subjective observations remain explicitly unknown or unassessed. Absence of an observation does not mean absence of an effect.
- The federal psilocybin classification is scoped by jurisdiction, activity, authority and date. It does not establish state, local or international law. Other legal arrays remain empty unless a scoped official source has been curated.

## Source manifest

Phenibut was enriched from its separate [Chrome Deep Research](https://chatgpt.com/c/6ac17f4c-1594-83ed-9253-94f1afee392d) on 2026-10-04. The research widget's claimed sandbox MD/ZIP links had empty destinations; the actual article was reconciled locally from the visible report and primary PubMed/PMC/FDA records. This is not represented as a successfully downloaded generated article. [Acquisition notes](../data/research/reconciled/phenibut.json) retain that distinction. The four measured outcomes include uncontrolled ADNM-20 change, a small randomized fatigue/task study and selected poison-centre airway-support cases. SD is not converted to a confidence interval, and poison-centre fractions do not become individual risks. A nonnumeric human PK record replaces the identity placeholder. Funding and conflicts stay attached to their actual references; older abstract-only disclosures remain unassessed.

Primary publication records and abstracts were rechecked through NCBI PubMed/E-utilities. Public PMC full text was used for the caffeine and nicotine kinetic summaries; official labels support the specified medication contexts. Summaries are original and selected, rather than complete reproductions of abstracts or source prose.

| Article | Source records | Coverage |
| --- | --- | --- |
| Caffeine | [Owen 2008](https://pubmed.ncbi.nlm.nih.gov/18681988/), [Temple 2017](https://pubmed.ncbi.nlm.nih.gov/28603504/), [Grzegorzewski 2022](https://pubmed.ncbi.nlm.nih.gov/35280254/), [Faber 2004](https://pubmed.ncbi.nlm.nih.gov/15289794/), [Drake 2013](https://pubmed.ncbi.nlm.nih.gov/24235903/) | Attention, kinetic context, metabolic modifiers and sleep disruption. Grzegorzewski belongs to the 2021 journal volume but was published in 2022. |
| L-theanine | [Owen 2008](https://pubmed.ncbi.nlm.nih.gov/18681988/), [Scheid 2012](https://pubmed.ncbi.nlm.nih.gov/23096008/) | Combination-specific attention findings and human uptake. |
| Creatine | [Hultman 1996](https://pubmed.ncbi.nlm.nih.gov/8828669/), [Kreider 2017](https://pubmed.ncbi.nlm.nih.gov/28615996/) | Muscle stores, research exposure and exercise context. |
| Melatonin | [Harpsøe 2015](https://pubmed.ncbi.nlm.nih.gov/26008214/), [Sletten 2018](https://pubmed.ncbi.nlm.nih.gov/29912983/), [NCCIH](https://www.nccih.nih.gov/health/melatonin-what-you-need-to-know) | Formulation-dependent kinetics, circadian-disorder trial and hormone context. |
| Nicotine | [Benowitz 2009](https://pubmed.ncbi.nlm.nih.gov/19184645/), [Benowitz 2010](https://pubmed.ncbi.nlm.nih.gov/20554984/) | Route-dependent kinetics, nicotinic receptors and dependence. |
| Psilocybin | [Brown 2017](https://pubmed.ncbi.nlm.nih.gov/28353056/), [Goodwin 2022](https://pubmed.ncbi.nlm.nih.gov/36322843/), [Vollenweider 1998](https://pubmed.ncbi.nlm.nih.gov/9875725/), [DEA resource guide](https://www.dea.gov/sites/default/files/2025-01/Psilocybin-Drug-Fact-Sheet.pdf) | Active-metabolite kinetics, supported depression trial, acute receptor evidence and federal classification. |
| Modafinil | [Czeisler 2005](https://pubmed.ncbi.nlm.nih.gov/16079371/), [Volkow 2009](https://pubmed.ncbi.nlm.nih.gov/19293415/), [PROVIGIL label](https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=3b8d1c32-dac9-50e6-e063-6394a90aa5a5) | Shift-work sleep-disorder trial, dopamine transporter imaging and formulation-specific kinetics/warnings. |
| Methylphenidate | [Turner 2005](https://pubmed.ncbi.nlm.nih.gov/15338103/), [Volkow 1998](https://pubmed.ncbi.nlm.nih.gov/9766762/), [RITALIN label](https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=c0bf0835-6a2f-4067-a158-8b86c4b0668a), [RITALIN LA kinetic comparison](https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=effd952d-ac94-47bb-b107-589a4934dcca) | ADHD task outcomes, transporter imaging, adult immediate-release elimination and label safety information. |
| Diphenhydramine | [Simons 1990](https://pubmed.ncbi.nlm.nih.gov/2391399/), [Scavone 1998](https://pubmed.ncbi.nlm.nih.gov/9702844/), [Liu 2005](https://pubmed.ncbi.nlm.nih.gov/15790419/), [prescribing label](https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=75f0cde5-c419-416d-9c13-bfc03bd83b1d) | Contrasting age/kinetic studies, sedation measurement, preclinical muscarinic evidence and label warnings. |
| Citicoline | [Nakazaki 2021](https://pubmed.ncbi.nlm.nih.gov/33978188/), [Dávalos 2012](https://pubmed.ncbi.nlm.nih.gov/22691567/), [Dinsdale 1983](https://pubmed.ncbi.nlm.nih.gov/6412727/), [López-Coviella 1987](https://pubmed.ncbi.nlm.nih.gov/20501174/) | Selected older-adult memory endpoints, the negative ICTUS stroke trial, tracer disposition and metabolism. |

Source titles and canonical identifiers in the content files are authoritative for validation. NCCIH, labels and PubChem reference years indicate access when no publication year is asserted.

## Molecular identity and assets

The local `public/molecules/<slug>.png` files are real 2D chemical diagrams from NCBI PubChem PUG REST, not generated illustrations. Only published substances retain an image. Formula, molecular weight and connectivity refer to the cited compound record; salts, hydrates, stereoisomers and commercial preparations may differ. Connectivity SMILES alone do not encode every stereochemical distinction; the PubChem CID identifies the depicted compound.

| Slug | PubChem record |
| --- | --- |
| caffeine | [2519](https://pubchem.ncbi.nlm.nih.gov/compound/2519) |
| l-theanine | [439378](https://pubchem.ncbi.nlm.nih.gov/compound/439378) |
| creatine | [586](https://pubchem.ncbi.nlm.nih.gov/compound/586) |
| melatonin | [896](https://pubchem.ncbi.nlm.nih.gov/compound/896) |
| nicotine | [89594](https://pubchem.ncbi.nlm.nih.gov/compound/89594) |
| psilocybin | [10624](https://pubchem.ncbi.nlm.nih.gov/compound/10624) |
| modafinil | [4236](https://pubchem.ncbi.nlm.nih.gov/compound/4236) |
| methylphenidate | [4158](https://pubchem.ncbi.nlm.nih.gov/compound/4158) |
| diphenhydramine | [3100](https://pubchem.ncbi.nlm.nih.gov/compound/3100) |
| citicoline | [13804](https://pubchem.ncbi.nlm.nih.gov/compound/13804) |

Download endpoint: `https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/<CID>/PNG`. The core six use `image_size=large`; the four additions use `image_size=600x400`. Property records are retrieved through the corresponding PUG REST property endpoint. These generated compound diagrams have separate source attribution from the project's editorial text. Consult PubChem's current attribution and contributor-specific terms before adding other contributed images or records.

## Shared concepts and graph

Each concept has an original definition, type, aliases, source URLs and optional related concepts. Receptors are targets; acetylcholine and histamine are endogenous transmitters. `hystamine` is a search alias for histamine. Attention, sleep and exercise performance are measured-outcome concepts, while alertness, craving and perceptual alteration describe subjective experiences.

Hyperedges persist all participating entities and their roles. IDs use `substance:<slug>` and `tag:<id>`. A contextual relationship remains complete when filtering: for example, the caffeine–CYP1A2–tobacco-smoke relation must retain the smoke exposure member. Co-study does not mean synergy or a recommendation to combine substances, and an outcome relationship can describe an adverse result.

## Catalog fill and evidence cleanup — 2026-10-03 to 2026-10-13

The bundled catalog formerly included identity-only PubChem stubs. Those pages and their unused structure assets were removed on 2026-10-13. The current catalog retains the sourced articles, research-atlas profiles, and enriched records whose source trails or evidence sections support publication.

[Molekul](https://molekul.io/) and PsychonautWiki supplied names to look up. Their prose was not copied. Molekul is a peptide and actoprotector atlas without a reuse license used here. No vendor, donation, wearable, diary, extraction, cultivation, conversion, or trip-report text was imported. An experience link, when present, is one PsychonautWiki substance URL. The report itself is not hosted.

These names did not resolve to a single PubChem compound and were skipped: delta-10-THC, THCB, THCH, THCP-O-acetate, O-PCE, and N-(2C)-fentanyl. Peptides, organisms, brews, and preparation pages were not added.

| Article | Source records | Coverage |
| --- | --- | --- |
| LSD | [Dolder 2017](https://pubmed.ncbi.nlm.nih.gov/28197931/), [Holze 2021](https://pubmed.ncbi.nlm.nih.gov/33059356/), [Nichols 2016](https://pubmed.ncbi.nlm.nih.gov/26841800/), [PubChem 5761](https://pubchem.ncbi.nlm.nih.gov/compound/5761) | Plasma half-life after 100 and 200 µg, dose-effect description, and a class 5-HT2A statement. Legal status was not retrieved. |
| MDMA | [Mitchell 2021](https://pubmed.ncbi.nlm.nih.gov/33972795/), [PubChem 1615](https://pubchem.ncbi.nlm.nih.gov/compound/1615) | CAPS-5 result in one supervised severe-PTSD trial. The inspected abstract states neither the milligram dose nor a half-life. |
| Ketamine | [Eugia injection label](https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=f8b01c77-620d-4734-a771-b8524b65bcca), [Pelletier 2022](https://pubmed.ncbi.nlm.nih.gov/36555217/), [PubChem 3821](https://pubchem.ncbi.nlm.nih.gov/compound/3821) | Induction instructions, redistribution rather than elimination, and the CNS-depressant warning. |
| Delta-9-THC | [Dronabinol capsule label](https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=fd8c5d57-0173-4f62-8ff0-d8147986a976), [PubChem 16078](https://pubchem.ncbi.nlm.nih.gov/compound/16078) | Labeled capsule kinetics. The terminal half-life is a reported range and is not modeled. Flower doses are out of scope. |
| Ethanol | [Holford 1987](https://pubmed.ncbi.nlm.nih.gov/3319346/), [PubChem 702](https://pubchem.ncbi.nlm.nih.gov/compound/702) | Michaelis–Menten parameters. No first-order half-life is assigned. |
| Mescaline | [Mueller 2025](https://pubmed.ncbi.nlm.nih.gov/40658345/), [PubChem 4076](https://pubchem.ncbi.nlm.nih.gov/compound/4076) | Dose-proportional exposure and a 3.5-hour half-life across the studied doses. |
| DMT | [van der Heijden 2026](https://pubmed.ncbi.nlm.nih.gov/42671902/), [PubChem 6089](https://pubchem.ncbi.nlm.nih.gov/compound/6089) | Intravenous infusion concentrations and a smoking difference described as probable. Industry affiliation is disclosed by the paper. |
| Dextromethorphan | [Polistirex label](https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=7a6b68eb-8fe0-447d-aed7-28432c45b58c), [PubChem 5360696](https://pubchem.ncbi.nlm.nih.gov/compound/5360696) | MAOI warning for that extended-release suspension. No half-life was extracted. |
| Salvinorin A | [MacLean 2013](https://pubmed.ncbi.nlm.nih.gov/23135605/), [Johnson 2011](https://pubmed.ncbi.nlm.nih.gov/21131142/), [PubChem 128563](https://pubchem.ncbi.nlm.nih.gov/compound/128563) | Inhaled timing and kappa-opioid agonism for the pure compound, distinct from the plant. |
| Mitragynine | [Huestis 2026](https://pubmed.ncbi.nlm.nih.gov/42266029/), [FDA kratom page](https://www.fda.gov/news-events/public-health-focus/fda-and-kratom), [PubChem 3034396](https://pubchem.ncbi.nlm.nih.gov/compound/3034396) | Extract pharmacokinetics and the FDA product warning. The article is the alkaloid, not the leaf. |
| Alprazolam | [Actavis tablet label](https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=a23063c0-099a-4256-b95f-3a857bbf704b), [PubChem 2118](https://pubchem.ncbi.nlm.nih.gov/compound/2118) | Healthy-adult mean half-life, labeled starting doses, and the boxed opioid warning. |
| Nitrous oxide | [Miller 2023](https://pubmed.ncbi.nlm.nih.gov/32119427/), [PubChem 948](https://pubchem.ncbi.nlm.nih.gov/compound/948) | Named in a multi-gas anesthetic review. No MAC, dose, or half-life was extracted. |

Class tags are a browse index. Their descriptions do not claim that every member shares a mechanism. Opioid cites Pathan and Williams, PMID 26516461. Benzodiazepine cites Griffin 2013, PMID 23789008, and does not state a GABA-A mechanism. Dissociative and arylcyclohexylamine cite Pelletier 2022, PMID 36555217. Cannabinoid cites the dronabinol label. Deliriant cites the diphenhydramine label as one anticholinergic example. PMIDs 27982573, 26516546, 24781744, and 28861491 are not concept sources.

New structure files use `https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/<CID>/PNG?image_size=600x400`. `scripts/generate-portal.ts` skips identity-only records by default; `--include-identity-stubs` is an explicit opt-in for acquisition work. The Markdown under `content/` is what the pages load.

## Molekul profile import — 2026-10-04

Chrome extraction covered all **95** compound profiles in the [Molekul index](https://molekul.io/compounds). This adds **87** records and enriches **8** existing identity articles; the current bundled catalog contains **158** sourced drafts. The eight existing records are Bemitil, Bromantane, Chlodantane, Kemantane, Noopept, phenylpiracetam (Molekul's Phenotropil), Picamilon and Piracetam. Previously curated clinical articles remain unchanged.

Each profile contains an original identity-lead note, aliases, a working browse classification, and the collected research-document links. Molecular identity, dose protocols, efficacy observations, half-lives and safety conclusions are not inferred from the source atlas. Existing PubChem identities are preserved. Newly imported preparations and unresolved candidates have `pubchemCid: null`; the interface explicitly displays the missing structure rather than assigning a surrogate molecule.

Of **274** distinct extracted URLs, **271** are included as eligible document leads. Three product/catalogue URLs are excluded from public references. Nine profiles contain no external URLs; two additional profiles contain only excluded product URLs. Research report reproductions on commercial hosts remain document leads, with appraisal pending. No reports or third-party PDFs are republished.

Source links with unverified bibliographic metadata explicitly use the capture year, **2026**, rather than asserting a publication date. Their titles and limitations describe them as source-discovery links. Existing canonical bibliography is reused when an already-curated URL matches. Neither the automated importer nor its tests confer independent scientific review.

See [the acquisition manifest and import method](../data/imports/README.md). `bun run content:molekul` rebuilds the Markdown offline and supports repeat imports. It refuses to overwrite independently reviewed articles. Molekul prose, diagrams, study-result narratives, vendor pages, donation information, wearable records and personal diaries are not imported.

## PsychonautWiki community data — 2026-11-06

`bun run content:psychonautwiki-fetch` saved one response from the [PsychonautWiki API](https://api.psychonautwiki.org/) to `data/imports/psychonautwiki.json`. The API's `/health` endpoint dates its snapshot to about 2026-06-23. The API had stopped refreshing, so later wiki edits are absent. `bun run content:psychonautwiki` reads that file offline together with the reviewed `data/imports/psychonautwiki-crosswalk.json`.

- Only `same-substance` crosswalk entries receive data: 47 articles, 46 of which have PsychonautWiki values. Each decision was checked against the page's dose unit, not only its name. PsychonautWiki's Cannabis bands are milligrams of THC and its Psilocybin mushrooms bands milligrams of psilocybin, so `cannabis`, `delta-9-thc`, `psilocybin` and `mitragynine` (Kratom) receive none. Name collisions such as 1,3-butanediol listed as "DMT" are rejected. Every exact name or alias match needs a recorded decision.
- Each route's threshold, light, common, strong and heavy bands become 311 `community` dose records. Heavy is open-ended. Formulation, frequency, duration and population are not established by the source.
- Each route's onset, come-up, peak, offset, after-effects and total become one of 64 subjective duration records. Onset is time since dosing; the other phases are phase lengths and are never summed.
- Records cite the article's `psychonautwiki` reference: PsychonautWiki contributors, the canonical page, [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/), snapshot and retrieval dates, and BHWiki's changes (unit symbols, route names). PsychonautWiki states that its dosage information "is gathered from users and resources for educational purposes only" and "should be verified with other sources for accuracy". The values carry no per-value citations.
- Not imported: prose, summaries, effects, tolerance, addiction or toxicity text, bioavailability, images and interactions. Some PsychonautWiki interactions were "sourced from TripSit", whose chart is "All Rights Reserved". `bun run content:psychonautwiki-leads` lists them from a gitignored local capture as leads for primary-source review. Only BHWiki-authored interactions citing primary sources are published; outcomes are logged in `data/imports/psychonautwiki-interaction-reviews.json`.
- `data/imports/psychonautwiki-candidates.json` lists PsychonautWiki pages without a BHWiki article. No article is created from PsychonautWiki data.

API behavior, license wording and open questions: [PsychonautWiki as a structured data source](psychonautwiki-source-research.md).

## Original text and reuse

The 2026-10-04 individual Deep Research collection adds or enriches 21 topics. Each research covers one substance, supplement form, food or protocol. Nineteen literal Markdown reports were preserved; Phenibut and Tadalafil required local conversion from saved reports with checked primary records. [The acquisition record](../data/research/README.md) documents originals, repairs, hashes and remaining work. These records remain sourced drafts, even after format, corpus and rendering checks. Commercial funding and declared interests are source-level metadata; missing declarations do not establish independence. Later research replaces discovery placeholders with actual publication metadata while preserving the original Molekul acquisition trail.

No definitions, descriptions or illustrations were copied from Wikipedia, PsychonautWiki, Effect Index or Examine. These references informed information architecture. In particular, Effect Index's noncommercial license does not authorize incorporating its prose into this project's independently licensed content. Original editorial material is CC BY-SA 4.0; code and third-party assets have their own licensing and attribution. Contributions arrive through repository pull requests with source changes reviewable before publication.
