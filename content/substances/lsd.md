---
slug: lsd
name: LSD
subtitle: A measured plasma half-life.
aliases:
  - Lysergic acid diethylamide
  - (+)-LSD
formula: C20H25N3O
molecularWeight: 323.4 g/mol
pubchemCid: 5761
smiles: CCN(CC)C(=O)C1CN(C2CC3=CNC4=CC=CC(=C34)C2=C1)C
category: Psychedelic
tags:
  - psychedelic
  - lysergamide
  - serotonin-2a
  - serotonin
accent: "#b1abcf"
reviewedAt: 2026-10-03
editorialStatus: sourced-draft
halfLife:
  label: Geometric mean 2.6 hours
  low: 2.6
  high: 2.6
  context: Geometric mean plasma half-life 2.6 hours (95% CI 2.2–3.4) after oral 100 and 200 µg in the cited pharmacokinetic study. The interval is a confidence interval for that mean.
  sourceId: dolder2017
  observationId: lsd-plasma
kinetics:
  onset: Not assessed
  peak: Subjective peaks at 2.8 hours after 100 µg and 2.5 hours after 200 µg. Geometric mean plasma Cmax was 1.3 ng/mL (95% CI 1.2–1.9) at 1.4 hours after 100 µg, and 3.1 ng/mL (95% CI 2.6–4.0) at 1.5 hours after 200 µg.
  duration: Subjective duration was 8.2±2.1 hours after 100 µg and 11.6±1.7 hours after 200 µg.
  bioavailability: Not assessed
  metabolism: Not assessed
  sourceId: dolder2017
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
x-order: 400
---

## Summary

Lysergic acid diethylamide, recorded here as the (+)-isomer, PubChem CID 5761. A human pharmacokinetic study reports a geometric mean plasma half-life of 2.6 hours after 100 and 200 µg orally.

## Description

This article is the parent compound PubChem titles (+)-lysergic acid diethylamide. A pharmacokinetic study measured plasma concentrations and subjective timing after 100 and 200 µg. A separate study in 16 healthy adults described dose-dependent subjective effects from 25 to 200 µg. A review describes psychedelics as agonists or partial agonists at brain 5-HT2A receptors and names LSD in that class history. Legal status was not assessed: a DEA fact sheet for LSD was not retrieved.

## Evidence note

The half-life is a study geometric mean. Subjective duration in that study is not the plasma half-life. The receptor statement is a class review, not an LSD binding constant.

## Doses

```yaml
- label: Pharmacokinetic oral exposures
  amount: 100–200 µg
  quantity: 100
  quantityMax: 200
  unit: µg
  ingredient: LSD
  formulation: Oral study LSD
  route: Oral
  frequency: Single doses compared in the study
  duration: Acute pharmacokinetic observation
  population: Healthy subjects in the cited pharmacokinetic study
  purpose: Measure plasma concentrations and subjective timing
  sourceCategory: research
  note: Study exposures. Subjective duration from this study is reported under pharmacokinetics.
  sourceId: dolder2017
- label: Dose-effect study
  amount: 25–200 µg
  quantity: 25
  quantityMax: 200
  unit: µg
  ingredient: LSD
  formulation: Oral study LSD
  route: Oral
  frequency: Doses of 25, 50, 100, and 200 µg
  duration: Acute double-blind placebo-controlled study
  population: 16 healthy adults
  purpose: Describe acute dose-dependent subjective effects
  sourceCategory: research
  note: A ketanserin condition was also administered. Its outcome was not in the text used for this draft, so it is omitted.
  sourceId: holze2021
- label: Threshold dose
  amount: 15 µg
  quantity: 15
  quantityMax: null
  unit: µg
  ingredient: LSD
  formulation: Not established
  route: Sublingual
  frequency: Not established
  duration: Not established
  population: Not established
  purpose: PsychonautWiki dosage classification
  sourceCategory: community
  note: Band from the PsychonautWiki API snapshot built about 2026-06-23.
  sourceId: psychonautwiki
- label: Light dose band
  amount: 15–75 µg
  quantity: 15
  quantityMax: 75
  unit: µg
  ingredient: LSD
  formulation: Not established
  route: Sublingual
  frequency: Not established
  duration: Not established
  population: Not established
  purpose: PsychonautWiki dosage classification
  sourceCategory: community
  note: Band from the PsychonautWiki API snapshot built about 2026-06-23.
  sourceId: psychonautwiki
- label: Common dose band
  amount: 75–150 µg
  quantity: 75
  quantityMax: 150
  unit: µg
  ingredient: LSD
  formulation: Not established
  route: Sublingual
  frequency: Not established
  duration: Not established
  population: Not established
  purpose: PsychonautWiki dosage classification
  sourceCategory: community
  note: Band from the PsychonautWiki API snapshot built about 2026-06-23.
  sourceId: psychonautwiki
- label: Strong dose band
  amount: 150–300 µg
  quantity: 150
  quantityMax: 300
  unit: µg
  ingredient: LSD
  formulation: Not established
  route: Sublingual
  frequency: Not established
  duration: Not established
  population: Not established
  purpose: PsychonautWiki dosage classification
  sourceCategory: community
  note: Band from the PsychonautWiki API snapshot built about 2026-06-23.
  sourceId: psychonautwiki
- label: Heavy dose band (300 µg and above)
  amount: 300 µg and above
  quantity: 300
  quantityMax: null
  unit: µg
  ingredient: LSD
  formulation: Not established
  route: Sublingual
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
- id: lsd-plasma
  analyte: LSD
  route: Oral
  formulation: Oral study LSD
  population: Healthy subjects in the cited pharmacokinetic study
  endpoint: elimination-half-life
  statistic: study-mean
  value: 2.6
  low: null
  high: null
  unit: hours
  context: Geometric mean 2.6 hours, with a reported 95% CI of 2.2–3.4 hours. The sample size was not restated in the text used for this draft.
  sourceId: dolder2017
  modelEligible: true
```

## Duration

```yaml
- id: psychonautwiki-sublingual
  measurement: subjective
  route: Sublingual
  population: Ranges compiled by PsychonautWiki contributors
  sourceId: psychonautwiki
  note: PsychonautWiki community duration ranges for this route.
  total:
    min: 8
    max: 12
    unit: hours
  phases:
    - name: onset
      basis: elapsed-since-exposure
      min: 15
      max: 30
      unit: minutes
    - name: comeup
      basis: phase-duration
      min: 45
      max: 90
      unit: minutes
    - name: peak
      basis: phase-duration
      min: 3
      max: 5
      unit: hours
    - name: offset
      basis: phase-duration
      min: 3
      max: 5
      unit: hours
    - name: after-effects
      basis: phase-duration
      min: 12
      max: 48
      unit: hours
```

## Modifiers

```yaml
[]
```

## Effects

```yaml
- conceptId: perception
  name: Dose-dependent subjective effects
  direction: Increased
  evidence: Human research
  description: Subjective effects were dose-dependent from 25 µg. Good effects reached a ceiling at 100 µg. Across the 25–200 µg range, duration ran from 6.7 to 11 hours.
  sourceId: holze2021
  population: 16 healthy adults
  exposure: Oral LSD 25, 50, 100, and 200 µg
  instrument: null
  magnitude: null
- conceptId: anxiety
  name: Anxiety at the highest studied dose
  direction: Increased
  evidence: Human research
  description: The 200 µg dose produced more ego dissolution and significant anxiety than the lower doses in that study.
  sourceId: holze2021
  population: 16 healthy adults
  exposure: Oral LSD 200 µg, compared with 25–100 µg in the same study
  instrument: null
  magnitude: null
```

## Outcomes

```yaml
[]
```

## Mechanisms

```yaml
- title: 5-HT2A agonism in a class review
  description: Nichols describes psychedelics as agonists or partial agonists at brain 5-HT2A receptors. LSD is named in that historical class framing.
  sourceId: nichols2016
  conceptId: serotonin-2a
```

## Cautions

```yaml
- title: Higher dose, more anxiety
  description: In the 16-person dose-effect study, 200 µg produced more ego dissolution and significant anxiety than the lower doses.
  sourceId: holze2021
```

## Claims

```yaml
- id: lsd-serotonin-2a
  assertion: A review describes psychedelics as agonists or partial agonists at brain 5-HT2A receptors and names LSD in the history of that class.
  relation: receptor-agonism
  participants:
    - entityId: substance:lsd
      role: substance
    - entityId: tag:serotonin-2a
      role: target
    - entityId: tag:serotonin
      role: transmitter
  context: Class review, not an LSD receptor-binding experiment
  sourceIds:
    - nichols2016
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: The statement is class consensus in a review. It is not an LSD binding constant, and a ketanserin outcome from a separate study was not included here.
```

## Interactions

```yaml
[]
```

## Experience links

```yaml
- title: LSD on PsychonautWiki
  url: https://psychonautwiki.org/wiki/LSD
  publisher: PsychonautWiki
```

## References

```yaml
- id: dolder2017
  title: Pharmacokinetics and Pharmacodynamics of Lysergic Acid Diethylamide in Healthy Subjects
  authors: Dolder et al.
  year: 2017
  pmid: "28197931"
  url: https://pubmed.ncbi.nlm.nih.gov/28197931/
  kind: Human pharmacokinetic study
  insight: Reports plasma Cmax, a 2.6-hour geometric mean half-life, and subjective peak and duration after 100 and 200 µg.
  limitation: Sample size was not restated in the text used here. Subjective duration is not the plasma half-life.
  funding: Not assessed in this draft.
- id: holze2021
  title: Acute dose-dependent effects of lysergic acid diethylamide in a double-blind placebo-controlled study in healthy subjects
  authors: Holze et al.
  year: 2021
  pmid: "33059356"
  url: https://pubmed.ncbi.nlm.nih.gov/33059356/
  kind: Double-blind placebo-controlled study
  insight: Describes dose-dependent subjective effects from 25 µg, a ceiling of good effects at 100 µg, and more anxiety at 200 µg.
  limitation: Sixteen healthy adults. A ketanserin condition was administered, and its outcome is not summarized here.
  funding: Not assessed in this draft.
- id: nichols2016
  title: Psychedelics
  authors: Nichols
  year: 2016
  pmid: "26841800"
  url: https://pubmed.ncbi.nlm.nih.gov/26841800/
  kind: Review
  insight: Describes psychedelics as agonists or partial agonists at brain 5-HT2A receptors.
  limitation: A class review. It does not supply an LSD binding constant, and this article does not repeat broader safety claims from the review.
  funding: Not assessed in this draft.
- id: pubchem
  title: "LSD: compound identity and structure"
  authors: NCBI PubChem
  year: 2026
  url: https://pubchem.ncbi.nlm.nih.gov/compound/5761
  kind: Chemical database
  insight: Source of the displayed formula, molecular weight, structure, and connectivity SMILES.
  limitation: Connectivity SMILES do not encode every stereochemical distinction. The parent record is distinct from salts, formulations, and commercial product quality.
  funding: US National Library of Medicine.
- id: psychonautwiki
  title: "LSD: PsychonautWiki dose and duration data"
  authors: PsychonautWiki contributors
  year: 2026
  url: https://psychonautwiki.org/wiki/LSD
  kind: Community wiki data · CC BY 4.0
  insight: Source of this page's community dose bands and subjective duration ranges, from the PsychonautWiki API snapshot built about 2026-06-23 and retrieved 2026-11-06. The structured data is used under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/); BHWiki normalized unit symbols and route names.
  limitation: "PsychonautWiki states: \"PW's dosage information is gathered from users and resources for educational purposes only. It is not a recommendation and should be verified with other sources for accuracy.\" Its dose and duration values carry no per-value citations."
```

## Legal

```yaml
[]
```

