---
slug: oxiracetam-019fe218
name: Oxiracetam
subtitle: Reddit index evidence trail.
aliases: []
formula: Not established
molecularWeight: Not established
pubchemCid: null
smiles: Not established
category: Identity record
tags: []
accent: "#a9b993"
reviewedAt: 2026-10-27
editorialStatus: sourced-draft
halfLife:
  label: Not established
  low: null
  high: null
  context: No pharmacokinetic observation was supplied by this identity import.
  sourceId: optihealth-substance-019fe218-43ee-739a-a7f5-85a6321108c6
  observationId: oxiracetam-019fe218-pk-unestablished
kinetics:
  onset: Not established
  peak: Not established
  duration: Not established
  bioavailability: Not established
  metabolism: Not established
  sourceId: optihealth-substance-019fe218-43ee-739a-a7f5-85a6321108c6
x-shape:
  - slug
  - name
  - subtitle
  - summary
  - description
  - aliases
  - formula
  - molecularWeight
  - pubchemCid
  - smiles
  - category
  - tags
  - accent
  - evidenceNote
  - reviewedAt
  - editorialStatus
  - halfLife
  - pkObservations
  - kinetics
  - modifiers
  - doses
  - effects
  - outcomes
  - claims
  - mechanisms
  - cautions
  - interactions
  - experienceLinks
  - references
  - legal
  - externalWikiLinks
x-order: 1109
---

## Summary

Oxiracetam evidence in the linked publications is preclinical. In cultured neurons, micromolar oxiracetam potentiated AMPA-receptor-mediated calcium influx; in rats, 100–300 mg/kg intraperitoneally increased hippocampal/cortical acetylcholine utilization and improved an active-avoidance deficit. A linked commercial page remains an unverified lead. [reddit-pmid-1372342][reddit-pmid-3594455]

## Description

This page records the source-backed identity label Oxiracetam. The import preserves the candidate's aliases and source trail only; molecular structure, pharmacokinetics, effects, dosing, safety, and efficacy remain unestablished here.

## Evidence note

PubMed abstracts retrieved for PMIDs 1372342 and 3594455; no PMC full text was available. The Reddit-linked commercial EEG page could not be resolved to a PubMed record and remains an explicit unverified lead. The evidence is cell and rat research, not human efficacy or safety evidence.

## Doses

```yaml
- label: Rat cholinergic study
  amount: 100 or 300 mg/kg
  quantity: 100
  quantityMax: 300
  unit: mg/kg
  ingredient: Oxiracetam
  formulation: Experimental oxiracetam
  route: intraperitoneal
  frequency: Single or repeated daily administration
  duration: Acute and repeated exposure; abstract reports repeated daily 100 mg/kg
  population: Rats
  purpose: Preclinical exposure; not a human dosing recommendation.
  sourceCategory: research
  note: Oxiracetam 100 mg/kg i.p. antagonized an active-avoidance impairment; 300 mg/kg also increased acetylcholine utilization.
  sourceId: reddit-pmid-3594455
- label: Neuronal culture study
  amount: Micromolar concentrations
  quantity: null
  quantityMax: null
  unit: micromolar
  ingredient: Oxiracetam
  formulation: In vitro cell exposure
  route: cell culture
  frequency: Acute
  duration: Not reported in abstract
  population: Primary cerebellar granule-cell cultures
  purpose: Mechanistic preclinical exposure; not a human dosing recommendation.
  sourceCategory: research
  note: Exact concentration not stated in abstract.
  sourceId: reddit-pmid-1372342
- label: Threshold dose
  amount: 250 mg
  quantity: 250
  quantityMax: null
  unit: mg
  ingredient: Oxiracetam
  formulation: Not established
  route: Oral
  frequency: Not established
  duration: Not established
  population: Not established
  purpose: PsychonautWiki dosage classification
  sourceCategory: community
  note: Band from the PsychonautWiki API snapshot built about 2026-06-23.
  sourceId: psychonautwiki
- label: Light dose band
  amount: 500–1200 mg
  quantity: 500
  quantityMax: 1200
  unit: mg
  ingredient: Oxiracetam
  formulation: Not established
  route: Oral
  frequency: Not established
  duration: Not established
  population: Not established
  purpose: PsychonautWiki dosage classification
  sourceCategory: community
  note: Band from the PsychonautWiki API snapshot built about 2026-06-23.
  sourceId: psychonautwiki
- label: Common dose band
  amount: 1200–1800 mg
  quantity: 1200
  quantityMax: 1800
  unit: mg
  ingredient: Oxiracetam
  formulation: Not established
  route: Oral
  frequency: Not established
  duration: Not established
  population: Not established
  purpose: PsychonautWiki dosage classification
  sourceCategory: community
  note: Band from the PsychonautWiki API snapshot built about 2026-06-23.
  sourceId: psychonautwiki
- label: Strong dose band
  amount: 1800–2400 mg
  quantity: 1800
  quantityMax: 2400
  unit: mg
  ingredient: Oxiracetam
  formulation: Not established
  route: Oral
  frequency: Not established
  duration: Not established
  population: Not established
  purpose: PsychonautWiki dosage classification
  sourceCategory: community
  note: Band from the PsychonautWiki API snapshot built about 2026-06-23.
  sourceId: psychonautwiki
- label: Heavy dose band (2400 mg and above)
  amount: 2400 mg and above
  quantity: 2400
  quantityMax: null
  unit: mg
  ingredient: Oxiracetam
  formulation: Not established
  route: Oral
  frequency: Not established
  duration: Not established
  population: Not established
  purpose: PsychonautWiki dosage classification
  sourceCategory: community
  note: Band from the PsychonautWiki API snapshot built about 2026-06-23.
  sourceId: psychonautwiki
```

## Pharmacokinetics

```yaml
- id: oxiracetam-019fe218-pk-unestablished
  analyte: Oxiracetam
  route: intraperitoneal or cell culture
  formulation: Experimental oxiracetam
  population: Rats and cultured neurons
  endpoint: elimination-half-life
  statistic: not-established
  value: null
  low: null
  high: null
  unit: hours
  context: Linked abstracts report pharmacodynamic outcomes but no concentration-time or elimination measurements.
  sourceId: reddit-pmid-3594455
  modelEligible: false
```

## Duration

```yaml
- id: psychonautwiki-oral
  measurement: subjective
  route: Oral
  population: Ranges compiled by PsychonautWiki contributors
  sourceId: psychonautwiki
  note: PsychonautWiki community duration ranges for this route.
  total:
    min: 8
    max: 10
    unit: hours
  phases:
    - name: onset
      basis: elapsed-since-exposure
      min: 30
      max: 90
      unit: minutes
```

## Modifiers

```yaml
[]
```

## Effects

```yaml
[]
```

## Outcomes

```yaml
- id: reddit-oxiracetam-avoidance-learning-3594455
  conceptId: cognitive-performance
  name: Active-avoidance learning
  direction: Increased
  evidence: Limited research
  description: Oxiracetam 100 mg/kg i.p. antagonized impairment of active-avoidance acquisition caused by inhibition of acetylcholine synthesis.
  sourceId: reddit-pmid-3594455
  population: Rats
  exposure: Oxiracetam 100 mg/kg i.p.
  instrument: Pole-climbing active-avoidance acquisition
  magnitude: Quantitative effect not reported in abstract.
  reportType: measured-assessment
```

## Mechanisms

```yaml
- title: Positive AMPA modulation
  description: Oxiracetam increased AMPA-mediated calcium influx efficacy and AMPA binding-site density in neuronal preparations; the study did not establish in vivo human mechanism.
  sourceId: reddit-pmid-1372342
- title: Septohippocampal cholinergic enhancement
  description: Rat data indicate increased acetylcholine utilization and high-affinity choline uptake in hippocampus, consistent with enhanced cholinergic pathway activity.
  sourceId: reddit-pmid-3594455
```

## Cautions

```yaml
- title: Preclinical evidence only
  description: The linked PubMed studies used cultured neurons or rats; they do not establish human efficacy, dose, pharmacokinetics, or safety.
  sourceId: reddit-pmid-1372342
- title: Unverified commercial EEG link
  description: The Reddit index includes a commercial page about oxiracetam EEG effects, but no PubMed record was identified in this pass; it remains an unverified lead.
  sourceId: reddit-link-921e1e009393
```

## Claims

```yaml
- id: reddit-claim-oxiracetam-3594455-0
  assertion: In rats, oxiracetam 100 mg/kg i.p. increased cholinergic utilization and antagonized an active-avoidance learning deficit.
  relation: preclinical-support
  participants:
    - entityId: substance:oxiracetam-019fe218
      role: intervention
    - entityId: tag:cognitive-performance
      role: reported endpoint
  context: Experimental rat study; no human translation established.
  sourceIds:
    - reddit-pmid-3594455
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Preclinical evidence and limited abstract detail.
```

## Interactions

```yaml
[]
```

## Experience links

```yaml
[]
```

## References

```yaml
- id: optihealth-substance-019fe218-43ee-739a-a7f5-85a6321108c6
  title: OptiHealth canonical substance identity snapshot
  authors: OptiHealth catalog
  year: 2026
  url: https://optihealth.devpins.org/substance-identity/019fe218-43ee-739a-a7f5-85a6321108c6
  kind: catalog-identity
  insight: The OptiHealth canonical catalog records this substance identity label.
  limitation: This catalog snapshot is not an independent evidence review and does not establish structure, dose, safety, or efficacy.
- id: reddit-pmid-1372342
  title: Nootropic drugs positively modulate alpha-amino-3-hydroxy-5-methyl-4-isoxazolepropionic acid-sensitive glutamate receptors in neuronal cultures.
  authors: A Copani, A A Genazzani, G Aleppo, G Casabona, P L Canonico, U Scapagnini, F Nicoletti
  year: 1992
  url: https://pubmed.ncbi.nlm.nih.gov/1372342/
  kind: PubMed publication
  insight: Micromolar concentrations of piracetam, aniracetam, and oxiracetam enhanced alpha-amino-3-hydroxy-5-methyl-4-isoxazolepropionic acid (AMPA)-stimulated 45Ca2+ influx in primary cultures of cerebellar granule cells.
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: "1372342"
  doi: 10.1111/j.1471-4159.1992.tb11329.x
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-3594455
  title: Effect of oxiracetam and piracetam on central cholinergic mechanisms and active-avoidance acquisition.
  authors: G Spignoli, F Pedata, L Giovannelli, S Banfi, F Moroni, G Pepeu
  year: 1986
  url: https://pubmed.ncbi.nlm.nih.gov/3594455/
  kind: PubMed publication
  insight: Oxiracetam at 100 and 300 mg/kg i.p.
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: "3594455"
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-link-921e1e009393
  title: Effects of oxiracetam on electroencephalogram at rest in healthy young subjects single and repeated dose investigation
  authors: Not established
  year: 2026
  url: https://triscience.com/General/effects-of-oxiracetam-on-electroencephalogram-at-rest-in-healthy-young-subjects-single-and-repeated-dose-investigation/doculite_view
  kind: Reddit index publication link
  insight: The Reddit index links this publication; bibliographic metadata was not returned by the PubMed batch.
  limitation: Full text, publication metadata, funding, and conflicts were not independently verified in this corpus pass.
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: psychonautwiki
  title: "Oxiracetam: PsychonautWiki dose and duration data"
  authors: PsychonautWiki contributors
  year: 2026
  url: https://psychonautwiki.org/wiki/Oxiracetam
  kind: Community wiki data · CC BY 4.0
  insight: Source of this page's community dose bands and subjective duration ranges, from the PsychonautWiki API snapshot built about 2026-06-23 and retrieved 2026-11-06. The structured data is used under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/); BHWiki normalized unit symbols and route names.
  limitation: "PsychonautWiki states: \"PW's dosage information is gathered from users and resources for educational purposes only. It is not a recommendation and should be verified with other sources for accuracy.\" Its dose and duration values carry no per-value citations."
```

## Legal

```yaml
[]
```

## External wiki links

```yaml
- service: Wikipedia
  url: https://en.wikipedia.org/wiki/Oxiracetam
  title: Wikipedia
```

