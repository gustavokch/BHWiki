---
slug: mescaline
name: Mescaline
subtitle: A modeled oral half-life.
aliases:
  - Mescaline hydrochloride
formula: C11H17NO3
molecularWeight: 211.26 g/mol
pubchemCid: 4076
smiles: COC1=CC(=CC(=C1OC)OC)CCN
category: Psychedelic
tags:
  - psychedelic
  - phenethylamine
accent: "#c8a18f"
reviewedAt: 2026-10-03
editorialStatus: sourced-draft
halfLife:
  label: Model estimate 3.5 hours
  low: 3.5
  high: 3.5
  context: Population-model half-life of 3.5 hours across oral mescaline hydrochloride doses of 100 to 800 mg. The model used one compartment and first-order elimination.
  sourceId: mueller2025
  observationId: mescaline-model
kinetics:
  onset: Model-predicted onset of any drug effect around 1 hour.
  peak: Peak concentration within 2.0 hours (geometric mean).
  duration: Model-predicted duration of effect ran from 2.8 hours at 100 mg to 15 hours at 800 mg.
  bioavailability: Not assessed
  metabolism: Over 24 to 30 hours, 53% of the dose was excreted unchanged in urine and 31% as 3,4,5-trimethoxyphenylacetic acid.
  sourceId: mueller2025
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
x-order: 405
---

## Summary

Mescaline, PubChem CID 4076. Across oral mescaline hydrochloride doses of 100 to 800 mg, a population model estimated a 3.5-hour half-life.

## Description

Two phase I trials contributed 105 single-dose administrations in 49 participants. The model was one-compartment, with first-order absorption and elimination and a lag time. Total exposure and Cmax were dose-proportional. Effect intensity and duration figures below are model predictions, not a community dose ladder.

## Evidence note

The 3.5-hour value is a model half-life across the studied doses. Predicted subjective intensity is not an observed score for every participant.

## Doses

```yaml
- label: Phase I oral range
  amount: 100–800 mg
  quantity: 100
  quantityMax: 800
  unit: mg
  ingredient: Mescaline hydrochloride
  formulation: Oral study compound
  route: Oral
  frequency: Single doses
  duration: Acute observation across two phase I trials
  population: 49 participants; 105 single-dose administrations
  purpose: Population pharmacokinetic and pharmacodynamic model
  sourceCategory: research
  note: Model-predicted maximum effect intensity ran from 13% at 100 mg to 89% at 800 mg. Those percentages are model outputs.
  sourceId: mueller2025
- label: Threshold dose
  amount: 50 mg
  quantity: 50
  quantityMax: null
  unit: mg
  ingredient: Mescaline
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
  amount: 50–200 mg
  quantity: 50
  quantityMax: 200
  unit: mg
  ingredient: Mescaline
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
  amount: 200–400 mg
  quantity: 200
  quantityMax: 400
  unit: mg
  ingredient: Mescaline
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
  amount: 400–800 mg
  quantity: 400
  quantityMax: 800
  unit: mg
  ingredient: Mescaline
  formulation: Not established
  route: Oral
  frequency: Not established
  duration: Not established
  population: Not established
  purpose: PsychonautWiki dosage classification
  sourceCategory: community
  note: Band from the PsychonautWiki API snapshot built about 2026-06-23.
  sourceId: psychonautwiki
- label: Heavy dose band (800 mg and above)
  amount: 800 mg and above
  quantity: 800
  quantityMax: null
  unit: mg
  ingredient: Mescaline
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
- id: mescaline-model
  analyte: Mescaline
  route: Oral
  formulation: Mescaline hydrochloride
  population: 49 participants in two phase I trials; 105 single-dose administrations
  endpoint: elimination-half-life
  statistic: approximate
  value: 3.5
  low: null
  high: null
  unit: hours
  context: Model half-life across all studied doses. Peak concentration occurred within 2.0 hours (geometric mean).
  sourceId: mueller2025
  modelEligible: true
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
    max: 14
    unit: hours
  phases:
    - name: onset
      basis: elapsed-since-exposure
      min: 45
      max: 90
      unit: minutes
    - name: comeup
      basis: phase-duration
      min: 60
      max: 120
      unit: minutes
    - name: peak
      basis: phase-duration
      min: 4
      max: 6
      unit: hours
    - name: offset
      basis: phase-duration
      min: 2
      max: 3
      unit: hours
    - name: after-effects
      basis: phase-duration
      min: 6
      max: 36
      unit: hours
```

## Modifiers

```yaml
[]
```

## Effects

```yaml
- conceptId: perception
  name: Model-predicted drug effect
  direction: Increased
  evidence: Human research
  description: The model predicted onset of any drug effect around 1 hour. Maximum predicted intensity ran from 13% at 100 mg to 89% at 800 mg, with predicted duration from 2.8 to 15 hours.
  sourceId: mueller2025
  population: 49 participants in two phase I trials
  exposure: Oral mescaline hydrochloride 100–800 mg
  instrument: Population pharmacodynamic model
  magnitude: Predicted intensity 13% to 89%
```

## Outcomes

```yaml
[]
```

## Mechanisms

```yaml
[]
```

## Cautions

```yaml
- title: Predictions are model outputs
  description: Intensity and duration figures are predictions from a population model fitted to the two trials. They are not a personal dose guide.
  sourceId: mueller2025
```

## Claims

```yaml
[]
```

## Interactions

```yaml
[]
```

## Experience links

```yaml
- title: Mescaline on PsychonautWiki
  url: https://psychonautwiki.org/wiki/Mescaline
  publisher: PsychonautWiki
```

## References

```yaml
- id: mueller2025
  title: Pharmacokinetics, Pharmacodynamics, and Urinary Recovery of Oral Mescaline Hydrochloride in Healthy Participants
  authors: Mueller, Klaiber, and Liechti
  year: 2025
  pmid: "40658345"
  url: https://pubmed.ncbi.nlm.nih.gov/40658345/
  kind: Population pharmacokinetic study
  insight: Estimates a 3.5-hour half-life, dose-proportional exposure, urinary recovery, and model-predicted effect timing across 100–800 mg.
  limitation: Pooled phase I data and a model. Predicted subjective intensity is not a measured score for each person. The abstract available here was cut off after the pharmacokinetic results.
  funding: Not assessed in this draft.
- id: pubchem
  title: "Mescaline: compound identity and structure"
  authors: NCBI PubChem
  year: 2026
  url: https://pubchem.ncbi.nlm.nih.gov/compound/4076
  kind: Chemical database
  insight: Source of the displayed formula, molecular weight, structure, and connectivity SMILES.
  limitation: Connectivity SMILES do not encode every stereochemical distinction. The parent record is distinct from salts, formulations, and commercial product quality.
  funding: US National Library of Medicine.
- id: psychonautwiki
  title: "Mescaline: PsychonautWiki dose and duration data"
  authors: PsychonautWiki contributors
  year: 2026
  url: https://psychonautwiki.org/wiki/Mescaline
  kind: Community wiki data · CC BY 4.0
  insight: Source of this page's community dose bands and subjective duration ranges, from the PsychonautWiki API snapshot built about 2026-06-23 and retrieved 2026-11-06. The structured data is used under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/); BHWiki normalized unit symbols and route names.
  limitation: "PsychonautWiki states: \"PW's dosage information is gathered from users and resources for educational purposes only. It is not a recommendation and should be verified with other sources for accuracy.\" Its dose and duration values carry no per-value citations."
```

## Legal

```yaml
[]
```

