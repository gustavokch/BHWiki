---
slug: nitrous-oxide
name: Nitrous oxide
subtitle: Named in an inhaled-anesthetic review.
aliases:
  - Nitrous
  - N2O
formula: N2O
molecularWeight: 44.013 g/mol
pubchemCid: 948
smiles: "[N-]=[N+]=O"
category: Dissociative
tags:
  - dissociative
accent: "#9fbab0"
reviewedAt: 2026-10-03
editorialStatus: sourced-draft
halfLife:
  label: Not established here
  low: null
  high: null
  context: The inspected review of inhalational anesthetics does not state an elimination half-life for nitrous oxide.
  sourceId: miller2023
  observationId: nitrous-unresolved
kinetics:
  onset: Not assessed
  peak: Not assessed
  duration: Not assessed
  bioavailability: Not assessed
  metabolism: Not assessed
  sourceId: miller2023
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
x-order: 411
---

## Summary

Nitrous oxide, PubChem CID 948. A review of inhaled anesthetics includes it among agents used for induction and maintenance of general anesthesia. The inspected record does not give a MAC or an elimination half-life.

## Description

This article is the gas, formula N2O. The clinical source is a general review of inhalational anesthetics, not a nitrous-only study. No dose, interaction, or recreational method is taken from that record.

## Evidence note

The review covers several anesthetic gases. Nothing in the text used here is a nitrous-specific half-life or dose.

## Doses

```yaml
- label: Threshold dose
  amount: 4 g
  quantity: 4
  quantityMax: null
  unit: g
  ingredient: Nitrous oxide
  formulation: Not established
  route: Inhaled
  frequency: Not established
  duration: Not established
  population: Not established
  purpose: PsychonautWiki dosage classification
  sourceCategory: community
  note: Band from the PsychonautWiki API snapshot built about 2026-06-23.
  sourceId: psychonautwiki
- label: Light dose band
  amount: 4–8 g
  quantity: 4
  quantityMax: 8
  unit: g
  ingredient: Nitrous oxide
  formulation: Not established
  route: Inhaled
  frequency: Not established
  duration: Not established
  population: Not established
  purpose: PsychonautWiki dosage classification
  sourceCategory: community
  note: Band from the PsychonautWiki API snapshot built about 2026-06-23.
  sourceId: psychonautwiki
- label: Common dose band
  amount: 8–16 g
  quantity: 8
  quantityMax: 16
  unit: g
  ingredient: Nitrous oxide
  formulation: Not established
  route: Inhaled
  frequency: Not established
  duration: Not established
  population: Not established
  purpose: PsychonautWiki dosage classification
  sourceCategory: community
  note: Band from the PsychonautWiki API snapshot built about 2026-06-23.
  sourceId: psychonautwiki
- label: Strong dose band
  amount: 16–40 g
  quantity: 16
  quantityMax: 40
  unit: g
  ingredient: Nitrous oxide
  formulation: Not established
  route: Inhaled
  frequency: Not established
  duration: Not established
  population: Not established
  purpose: PsychonautWiki dosage classification
  sourceCategory: community
  note: Band from the PsychonautWiki API snapshot built about 2026-06-23.
  sourceId: psychonautwiki
- label: Heavy dose band (40 g and above)
  amount: 40 g and above
  quantity: 40
  quantityMax: null
  unit: g
  ingredient: Nitrous oxide
  formulation: Not established
  route: Inhaled
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
- id: nitrous-unresolved
  analyte: Nitrous oxide
  route: Inhaled
  formulation: Anesthetic gas
  population: Patients receiving general anesthesia, as framed by the review
  endpoint: elimination-half-life
  statistic: not-established
  value: null
  low: null
  high: null
  unit: hours
  context: No elimination half-life or MAC is stated in the text used for this draft.
  sourceId: miller2023
  modelEligible: false
```

## Duration

```yaml
- id: psychonautwiki-inhaled
  measurement: subjective
  route: Inhaled
  population: Ranges compiled by PsychonautWiki contributors
  sourceId: psychonautwiki
  note: PsychonautWiki community duration ranges for this route.
  total:
    min: 1
    max: 5
    unit: minutes
  phases:
    - name: onset
      basis: elapsed-since-exposure
      min: 5
      max: 10
      unit: seconds
    - name: comeup
      basis: phase-duration
      min: 5
      max: 10
      unit: seconds
    - name: peak
      basis: phase-duration
      min: 15
      max: 30
      unit: seconds
    - name: offset
      basis: phase-duration
      min: 1
      max: 5
      unit: minutes
    - name: after-effects
      basis: phase-duration
      min: 15
      max: 30
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
[]
```

## Mechanisms

```yaml
[]
```

## Cautions

```yaml
- title: A multi-agent review
  description: The cited record discusses nitrous oxide together with halothane, isoflurane, desflurane, and sevoflurane for induction and maintenance of general anesthesia. It is not a nitrous-only study.
  sourceId: miller2023
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
- title: Nitrous on PsychonautWiki
  url: https://psychonautwiki.org/wiki/Nitrous
  publisher: PsychonautWiki
```

## References

```yaml
- id: miller2023
  title: Inhalational Anesthetic
  authors: Miller et al.
  year: 2023
  pmid: "32119427"
  url: https://pubmed.ncbi.nlm.nih.gov/32119427/
  kind: Review
  insight: Surveys inhaled anesthetics used for induction and maintenance of general anesthesia, including nitrous oxide.
  limitation: Not a nitrous-only study. No MAC, half-life, or interaction specific to nitrous oxide was extracted.
  funding: Not assessed in this draft.
- id: pubchem
  title: "Nitrous oxide: compound identity and structure"
  authors: NCBI PubChem
  year: 2026
  url: https://pubchem.ncbi.nlm.nih.gov/compound/948
  kind: Chemical database
  insight: Source of the displayed formula, molecular weight, structure, and connectivity SMILES.
  limitation: Connectivity SMILES do not encode every stereochemical distinction. The parent record is distinct from salts, formulations, and commercial product quality.
  funding: US National Library of Medicine.
- id: psychonautwiki
  title: "Nitrous: PsychonautWiki dose and duration data"
  authors: PsychonautWiki contributors
  year: 2026
  url: https://psychonautwiki.org/wiki/Nitrous
  kind: Community wiki data · CC BY 4.0
  insight: Source of this page's community dose bands and subjective duration ranges, from the PsychonautWiki API snapshot built about 2026-06-23 and retrieved 2026-11-06. The structured data is used under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/); BHWiki normalized unit symbols and route names.
  limitation: "PsychonautWiki states: \"PW's dosage information is gathered from users and resources for educational purposes only. It is not a recommendation and should be verified with other sources for accuracy.\" Its dose and duration values carry no per-value citations."
```

## Legal

```yaml
[]
```

