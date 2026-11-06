---
slug: haloperidol
name: Haloperidol
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
  sourceId: optihealth-substance-01a08b04-2f44-7ddd-b846-639067824d62
  observationId: haloperidol-identity-unassessed
kinetics:
  onset: Not established
  peak: Not established
  duration: Not established
  bioavailability: Not established
  metabolism: Not established
  sourceId: optihealth-substance-01a08b04-2f44-7ddd-b846-639067824d62
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
x-order: 1528
---

## Summary

Haloperidol is recorded as a canonical identity from a source-backed OptiHealth candidate. This draft does not assert effects, dosing, safety, or efficacy.

## Description

This page records the source-backed identity label Haloperidol. The import preserves the candidate's aliases and source trail only; molecular structure, pharmacokinetics, effects, dosing, safety, and efficacy remain unestablished here.

## Evidence note

Identity only import: the cited sources support candidate identity provenance, not an evidence review. No biological relationship or clinical claim is asserted.

Reddit index corpus import (2 linked source records; 2 PubMed abstracts). Full-text methods, funding, and conflicts remain unassessed where the source record says so.

PubMed MCP abstract review: 2 linked PubMed identifiers were retrieved for this Reddit-index entry; structured fields below are limited to abstract-supported findings. PMC full text was used where rights-eligible and available; remaining methods, funding, and conflicts are unassessed.

PubMed MCP abstract review covered 2 PMID-linked records for this Reddit-index entry. Structured fields are limited to abstract-supported findings; PMC full text was retrieved where rights-eligible and available, with remaining methods, funding, and conflicts unassessed.

## Doses

```yaml
- label: PubMed study exposure (23131890)
  amount: 400 mg
  quantity: 400
  quantityMax: null
  unit: mg
  ingredient: Haloperidol
  formulation: As described in the PubMed abstract
  frequency: Study exposure
  duration: Study exposure
  population: this study were healthy volunteers who had no confounding variables typically found in patients with schizophrenia
  purpose: Research exposure
  sourceCategory: research
  note: Dose extracted from the PubMed abstract; verify the full text for formulation and protocol details.
  sourceId: reddit-pmid-23131890
- label: Threshold dose
  amount: 0.25 mg
  quantity: 0.25
  quantityMax: null
  unit: mg
  ingredient: Haloperidol
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
  amount: 0.25–1 mg
  quantity: 0.25
  quantityMax: 1
  unit: mg
  ingredient: Haloperidol
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
  amount: 1–5 mg
  quantity: 1
  quantityMax: 5
  unit: mg
  ingredient: Haloperidol
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
  amount: 5–10 mg
  quantity: 5
  quantityMax: 10
  unit: mg
  ingredient: Haloperidol
  formulation: Not established
  route: Oral
  frequency: Not established
  duration: Not established
  population: Not established
  purpose: PsychonautWiki dosage classification
  sourceCategory: community
  note: Band from the PsychonautWiki API snapshot built about 2026-06-23.
  sourceId: psychonautwiki
- label: Heavy dose band (10 mg and above)
  amount: 10 mg and above
  quantity: 10
  quantityMax: null
  unit: mg
  ingredient: Haloperidol
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
- id: haloperidol-identity-unassessed
  analyte: Haloperidol
  route: Not assessed
  formulation: Identity-only record
  population: Not assessed
  endpoint: elimination-half-life
  statistic: not-established
  value: null
  low: null
  high: null
  unit: hours
  context: This identity import does not establish a pharmacokinetic observation.
  sourceId: optihealth-substance-01a08b04-2f44-7ddd-b846-639067824d62
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
    min: 12
    max: 36
    unit: hours
  phases:
    - name: onset
      basis: elapsed-since-exposure
      min: 30
      max: 60
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
- id: reddit-haloperidol-attention-16768602
  conceptId: attention
  name: Attention
  direction: Increased
  evidence: Human research
  description: The authors test a neurocomputational model of dopamine function in cognition by administering to healthy participants low doses of D2 agents cabergoline and haloperidol. The model suggests that DA dynamically modulates the balance of Go and No-Go basal ganglia pathways during cognitive learning and performance.
  sourceId: reddit-pmid-16768602
  population: The authors test a neurocomputational model of dopamine function in cognition by administering to healthy participants low doses of D2 agents cabergoline and haloperidol.
  exposure: The authors test a neurocomputational model of dopamine function in cognition by administering to healthy participants low doses of D2 agents cabergoline and haloperidol. The model suggests that DA dynamically modulates the balance of Go and No-Go basal ganglia pathways during cognitive learning and performance.
  instrument: null
  magnitude: null
  reportType: measured-assessment
- id: reddit-haloperidol-cognitive-performance-16768602
  conceptId: cognitive-performance
  name: Cognitive Performance
  direction: Increased
  evidence: Human research
  description: The authors test a neurocomputational model of dopamine function in cognition by administering to healthy participants low doses of D2 agents cabergoline and haloperidol. The model suggests that DA dynamically modulates the balance of Go and No-Go basal ganglia pathways during cognitive learning and performance.
  sourceId: reddit-pmid-16768602
  population: The authors test a neurocomputational model of dopamine function in cognition by administering to healthy participants low doses of D2 agents cabergoline and haloperidol.
  exposure: The authors test a neurocomputational model of dopamine function in cognition by administering to healthy participants low doses of D2 agents cabergoline and haloperidol. The model suggests that DA dynamically modulates the balance of Go and No-Go basal ganglia pathways during cognitive learning and performance.
  instrument: null
  magnitude: null
  reportType: measured-assessment
- id: reddit-haloperidol-episodic-memory-16768602
  conceptId: episodic-memory
  name: Episodic Memory
  direction: Increased
  evidence: Human research
  description: The authors test a neurocomputational model of dopamine function in cognition by administering to healthy participants low doses of D2 agents cabergoline and haloperidol. The model suggests that DA dynamically modulates the balance of Go and No-Go basal ganglia pathways during cognitive learning and performance.
  sourceId: reddit-pmid-16768602
  population: The authors test a neurocomputational model of dopamine function in cognition by administering to healthy participants low doses of D2 agents cabergoline and haloperidol.
  exposure: The authors test a neurocomputational model of dopamine function in cognition by administering to healthy participants low doses of D2 agents cabergoline and haloperidol. The model suggests that DA dynamically modulates the balance of Go and No-Go basal ganglia pathways during cognitive learning and performance.
  instrument: null
  magnitude: null
  reportType: measured-assessment
- id: reddit-haloperidol-cognitive-performance-23131890
  conceptId: cognitive-performance
  name: Cognitive Performance
  direction: Increased
  evidence: Human research
  description: Cognitive dysfunction in patients with schizophrenia is a strong correlate of poor outcome than any other symptom domain. To have greater knowledge about the effects of antipsychotics on cognitive function, subjects of this study were healthy volunteers who had no confounding variables typically found in patients with schizophrenia.
  sourceId: reddit-pmid-23131890
  population: this study were healthy volunteers who had no confounding variables typically found in patients with schizophrenia
  exposure: Cognitive dysfunction in patients with schizophrenia is a strong correlate of poor outcome than any other symptom domain. To have greater knowledge about the effects of antipsychotics on cognitive function, subjects of this study were healthy volunteers who had no confounding variables typically found in patients with schizophrenia.
  instrument: null
  magnitude: null
  reportType: measured-assessment
```

## Mechanisms

```yaml
- title: Source-specific finding from PMID 16768602
  description: The authors test a neurocomputational model of dopamine function in cognition by administering to healthy participants low doses of D2 agents cabergoline and haloperidol. The model suggests that DA dynamically modulates the balance of Go and No-Go basal ganglia pathways during cognitive learning and performance.
  sourceId: reddit-pmid-16768602
```

## Cautions

```yaml
- title: Source-specific finding from PMID 16768602
  description: The authors test a neurocomputational model of dopamine function in cognition by administering to healthy participants low doses of D2 agents cabergoline and haloperidol. The model suggests that DA dynamically modulates the balance of Go and No-Go basal ganglia pathways during cognitive learning and performance.
  sourceId: reddit-pmid-16768602
```

## Claims

```yaml
- id: reddit-claim-haloperidol-16768602-0
  assertion: "PMID 16768602 reports: The authors test a neurocomputational model of dopamine function in cognition by administering to healthy participants low doses of D2 agents cabergoline and haloperidol. The model suggests that DA dynamically modulates the balance of Go and No-Go basal ganglia pathways during cognitive learning and performance."
  relation: associated-with
  participants:
    - entityId: substance:haloperidol
      role: intervention or exposure
    - entityId: tag:episodic-memory
      role: reported endpoint
  context: Publication abstract; direction and population are retained on the linked observation.
  sourceIds:
    - reddit-pmid-16768602
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Automated corpus import from an abstract; this record is not an independent meta-analysis.
- id: reddit-claim-haloperidol-23131890-1
  assertion: "PMID 23131890 reports: Cognitive dysfunction in patients with schizophrenia is a strong correlate of poor outcome than any other symptom domain. To have greater knowledge about the effects of antipsychotics on cognitive function, subjects of this study were healthy volunteers who had no confounding variables typically found in patients with schizophrenia."
  relation: associated-with
  participants:
    - entityId: substance:haloperidol
      role: intervention or exposure
    - entityId: tag:cognitive-performance
      role: reported endpoint
  context: Publication abstract; direction and population are retained on the linked observation.
  sourceIds:
    - reddit-pmid-23131890
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Automated corpus import from an abstract; this record is not an independent meta-analysis.
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
- id: optihealth-substance-01a08b04-2f44-7ddd-b846-639067824d62
  title: OptiHealth canonical substance identity snapshot
  authors: OptiHealth catalog
  year: 2026
  url: https://optihealth.devpins.org/substance-identity/01a08b04-2f44-7ddd-b846-639067824d62
  kind: catalog-identity
  insight: The OptiHealth canonical catalog records this substance identity label.
  limitation: This catalog snapshot is not an independent evidence review and does not establish structure, dose, safety, or efficacy.
- id: reddit-pmid-16768602
  title: "A mechanistic account of striatal dopamine function in human cognition: psychopharmacological studies with cabergoline and haloperidol."
  authors: Michael J Frank, Randall C O'Reilly
  year: 2006
  url: https://pubmed.ncbi.nlm.nih.gov/16768602/
  kind: PubMed publication
  insight: The authors test a neurocomputational model of dopamine function in cognition by administering to healthy participants low doses of D2 agents cabergoline and haloperidol. The model suggests that DA dynamically modulates the balance of Go and No-Go basal ganglia pathways during cognitive learning and performance.
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: "16768602"
  doi: 10.1037/0735-7044.120.3.497
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-23131890
  title: Cognitive effects of a single dose of atypical antipsychotics in healthy volunteers compared with placebo or haloperidol.
  authors: Young-Chul Chung, Tae-Won Park, Jong-Chul Yang, Guang-Biao Huang, Tong Zhao, Keun-Young Oh, Min-Gul Kim
  year: 2012
  url: https://pubmed.ncbi.nlm.nih.gov/23131890/
  kind: PubMed publication
  insight: Cognitive dysfunction in patients with schizophrenia is a strong correlate of poor outcome than any other symptom domain. To have greater knowledge about the effects of antipsychotics on cognitive function, subjects of this study were healthy volunteers who had no confounding variables typically found in patients with schizophrenia.
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: "23131890"
  doi: 10.1097/JCP.0b013e318272d10c
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: psychonautwiki
  title: "Haloperidol: PsychonautWiki dose and duration data"
  authors: PsychonautWiki contributors
  year: 2026
  url: https://psychonautwiki.org/wiki/Haloperidol
  kind: Community wiki data · CC BY 4.0
  insight: Source of this page's community dose bands and subjective duration ranges, from the PsychonautWiki API snapshot built about 2026-06-23 and retrieved 2026-11-06. The structured data is used under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/); BHWiki normalized unit symbols and route names.
  limitation: "PsychonautWiki states: \"PW's dosage information is gathered from users and resources for educational purposes only. It is not a recommendation and should be verified with other sources for accuracy.\" Its dose and duration values carry no per-value citations."
```

## Legal

```yaml
[]
```

