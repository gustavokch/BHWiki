# Reference research and design rationale

Research date: 2026-09-29. Reference sites informed information architecture; BHWiki authors original prose and definitions. The approved independent-wiki plan supersedes the prototype's promotional roadmap.

## Complementary reference structures

| Reference | Observed structure | Adopted behavior |
| --- | --- | --- |
| [Wikipedia: Caffeine](https://en.wikipedia.org/wiki/Caffeine) | Chemical identity, explanatory sections, citations and revision history | Stable identity, explanatory articles, claim-adjacent sources and editorial history |
| [PsychonautWiki: Caffeine](https://psychonautwiki.org/wiki/Caffeine) | Routes, dose/duration context, physical and cognitive experiences, tolerance and safety | Distinguish routes, formulations and source categories; retain subjective provenance. Direct retrieval failed during the initial research; search results supplied the indexed page structure. |
| [Effect Index: Focus enhancement](https://effectindex.com/effects/focus-enhancement) | Shared effect definition, related experiences, associated substances and sources | First-class effect pages with original definitions and bidirectional navigation |
| [Examine's official guide](https://help.examine.com/help/how-to-use-examine) | Intervention, measurable outcome and condition/goal hierarchy; study context | Separate measured outcomes, source-specific findings, limitations and study design |

Examine's caffeine page could not be retrieved. Its official guide informed the research; no claim is made that its inaccessible caffeine database was inspected.

The resulting navigation connects **substances → reported experiences → measured outcomes → mechanisms and sources**. Subjective focus, task accuracy and a goal such as productivity remain different concepts.

## Evidence and article design

A substance article presents identity and the verified molecular form, an overview, subjective effects, measured outcomes, exposure contexts, pharmacokinetics, safety, original research summaries, connected concepts, dated legal context and revision history. Unknown information is marked not assessed or not established. Measured outcomes are findings from publications, not personal or product-derived health data.

Source certainty, effect direction, magnitude and applicability are separate. A study card preserves design, population, formulation/route, comparator, finding, limitations and funding where assessed. Formal certainty labels require a documented rubric and review; selected-source summaries do not constitute a systematic review or a universal evidence score. The [GRADE Working Group](https://www.gradeworkinggroup.org/) distinguishes evidence certainty from recommendation strength.

Subjective effects initially use a qualitative matrix. Numerical charts require a defined instrument, assessment time, scale and actual dataset. The [Drug Effects Questionnaire study](https://pmc.ncbi.nlm.nih.gov/articles/PMC3624068/) illustrates that strength, liking, disliking and wanting more are distinct constructs and that questionnaire variants complicate comparisons. BHWiki does not invent survey counts or numeric intensities to complete a visual.

Exposure records distinguish research descriptions, approved labels and community reports. Amount, unit, frequency, duration, ingredient/form, route and population travel with the record. Legal status always includes jurisdiction, relevant activity/form, date and source; there is no universal “illegal” boolean.

## Kinetics regression cases

[Faber and Fuhr](https://pubmed.ncbi.nlm.nih.gov/15289794/) studied changes in CYP1A2 activity around smoking cessation. Its approximately 38.6-hour figure describes decline in enzyme activity, **not caffeine elimination**. Tobacco-smoke exposure is a metabolic context, not a caffeine administration route or a substitute for nicotine exposure. The study's context must not become a universal smoking multiplier.

An observation records the measured analyte and distinguishes means, confidence intervals and ranges across studies. Psilocin observations on a psilocybin article must explicitly name the active metabolite. Suitably sourced elimination observations can support the educational first-order curve `fraction_remaining(t) = 2^(-t / half_life)` with assumptions visible. A curve does not establish onset, intensity, individual clearance or a safe activity time.

## Graph representation

[Cytoscape.js](https://js.cytoscape.org/) supplies graph layout, rendering, selection, zoom and interaction. BHWiki persists true hyperedges with role-bearing participants; its incidence projection renders each relationship as a node connected to every participant. This is a modeling choice using a standard graph library, not a custom force simulation or a claim that arbitrary hyperedges are native Cytoscape edges.

A relationship such as **caffeine + CYP1A2 + tobacco-smoke exposure → clearance modification** preserves its qualifying context. Filters select complete relationships; they do not silently remove contextual members. A co-study relationship does not imply synergy. Search, typed filters, focused shareable neighborhoods, source details and a keyboard-accessible adjacent list serve the same records as article/concept navigation.

## Attribution and licensing

- BHWiki code is MIT; original editorial prose is CC BY-SA 4.0. See [content licensing](../CONTENT-LICENSE.md) and [source/asset provenance](content-sources.md).
- [Wikipedia reuse guidance](https://www.mediawiki.org/wiki/Wikimedia_APIs/Content_reuse) requires attention to attribution, modifications and applicable licenses; images may differ. BHWiki does not copy its prose.
- [PsychonautWiki's copyright page](https://psychonautwiki.org/wiki/Copyrights) licenses text under CC BY-SA 4.0 and semantic data under CC BY 4.0, with exceptions for files, experience reports and some third-party articles. Its API's MIT software license does not cover returned content. BHWiki authors its own descriptions and imports only attributed dose and duration ranges; see [content provenance](content-sources.md#psychonautwiki-community-data--2026-11-06).
- [Effect Index](https://effectindex.com/effects) identifies noncommercial share-alike terms. Those terms are not permission to incorporate its expressive definitions or illustrations into BHWiki's separately licensed content. Its ontology is a structural reference.
- The accessible Examine pages did not establish an open redistribution license for its database. Link to the source and author original summaries from accessible publications.

No promotional referral, OptiHealth integration, vendor/purchasing interface or personal-outcome ingestion is part of the release. Contributions use Git pull requests and reviewed publication; browser editing and accounts are deferred.
