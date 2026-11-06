---
slug: 5-htp
name: 5-HTP
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
  sourceId: optihealth-substance-019fe218-4402-73f8-9046-c4ccae708f4f
  observationId: 5-htp-identity-unassessed
kinetics:
  onset: Not established
  peak: Not established
  duration: Not established
  bioavailability: Not established
  metabolism: Not established
  sourceId: optihealth-substance-019fe218-4402-73f8-9046-c4ccae708f4f
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
x-order: 1115
---

## Summary

5-HTP is recorded as a canonical identity from a source-backed OptiHealth candidate. This draft does not assert effects, dosing, safety, or efficacy.

## Description

This page records the source-backed identity label 5-HTP. The import preserves the candidate's aliases and source trail only; molecular structure, pharmacokinetics, effects, dosing, safety, and efficacy remain unestablished here.

## Evidence note

Identity only import: the cited sources support candidate identity provenance, not an evidence review. No biological relationship or clinical claim is asserted.

Reddit index corpus import (6 linked source records; 5 PubMed abstracts). Full-text methods, funding, and conflicts remain unassessed where the source record says so.

## Doses

```yaml
- label: PubMed study exposure (20737522)
  amount: 50 mg
  quantity: 50
  quantityMax: null
  unit: mg
  ingredient: 5-HTP
  formulation: As described in the PubMed abstract
  frequency: Study exposure
  duration: Study exposure
  population: 46 undergraduates participated, and each received either two 50 mg 5-HTP capsules or placebos, and completed the IGT and POMS following an absorption period
  purpose: Research exposure
  sourceCategory: research
  note: Dose extracted from the PubMed abstract; verify the full text for formulation and protocol details.
  sourceId: reddit-pmid-20737522
- label: PubMed study exposure (12073163)
  amount: 200 mg
  quantity: 200
  quantityMax: null
  unit: mg
  ingredient: 5-HTP
  formulation: As described in the PubMed abstract
  frequency: Study exposure
  duration: Study exposure
  population: Population described in the PubMed abstract
  purpose: Research exposure
  sourceCategory: research
  note: Dose extracted from the PubMed abstract; verify the full text for formulation and protocol details.
  sourceId: reddit-pmid-12073163
- label: PubMed study exposure (15146330)
  amount: 2 mg/kg
  quantity: 2
  quantityMax: null
  unit: mg/kg
  ingredient: 5-HTP
  formulation: As described in the PubMed abstract
  frequency: Study exposure
  duration: Study exposure
  population: examined again from the clinical and EEG points of view and (5) after 6 months, a structured interview in order to evaluate the clinical outcome
  purpose: Research exposure
  sourceCategory: research
  note: Dose extracted from the PubMed abstract; verify the full text for formulation and protocol details.
  sourceId: reddit-pmid-15146330
- label: Threshold dose
  amount: 25 mg
  quantity: 25
  quantityMax: null
  unit: mg
  ingredient: 5-HTP
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
  amount: 50–100 mg
  quantity: 50
  quantityMax: 100
  unit: mg
  ingredient: 5-HTP
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
  amount: 100–300 mg
  quantity: 100
  quantityMax: 300
  unit: mg
  ingredient: 5-HTP
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
  amount: 300–500 mg
  quantity: 300
  quantityMax: 500
  unit: mg
  ingredient: 5-HTP
  formulation: Not established
  route: Oral
  frequency: Not established
  duration: Not established
  population: Not established
  purpose: PsychonautWiki dosage classification
  sourceCategory: community
  note: Band from the PsychonautWiki API snapshot built about 2026-06-23.
  sourceId: psychonautwiki
- label: Heavy dose band (500 mg and above)
  amount: 500 mg and above
  quantity: 500
  quantityMax: null
  unit: mg
  ingredient: 5-HTP
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
- id: 5-htp-identity-unassessed
  analyte: 5-HTP
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
  sourceId: optihealth-substance-019fe218-4402-73f8-9046-c4ccae708f4f
  modelEligible: false
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
- id: reddit-5-htp-sleep-15146330
  conceptId: sleep
  name: Sleep
  direction: Increased
  evidence: Human research
  description: "UNLABELLED: To test the hypothesis that the administration of L -5-hydroxytryptophan (L -5-HTP) might exert beneficial effects on sleep terrors, we carried out an open pharmacological trial in a group of children with sleep terrors compared to a group of children with the same disorder but without L -5-HTP treatment."
  sourceId: reddit-pmid-15146330
  population: examined again from the clinical and EEG points of view and (5) after 6 months, a structured interview in order to evaluate the clinical outcome
  exposure: "UNLABELLED: To test the hypothesis that the administration of L -5-hydroxytryptophan (L -5-HTP) might exert beneficial effects on sleep terrors, we carried out an open pharmacological trial in a group of children with sleep terrors compared to a group of children with the same disorder but without L -5-HTP treatment."
  instrument: null
  magnitude: null
  reportType: measured-assessment
```

## Mechanisms

```yaml
- title: Source-specific finding from PMID 23609610
  description: "OBJECTIVE: Several studies have suggested that exogenous administration of the serotonin precursor 5-hydroxytryptophan (5-HTP) can result in the ectopic production of serotonin in dopaminergic neurons and a concomitant reduction in dopamine release."
  sourceId: reddit-pmid-23609610
- title: Source-specific finding from PMID 20737522
  description: "OBJECTIVE: Although the serotonin precursor 5-hydroxytryptophan (5-HTP) is marketed as a psychoactive nutritional supplement, knowledge is limited regarding the effects of exogenous 5-HTP on brain activity."
  sourceId: reddit-pmid-20737522
- title: Source-specific finding from PMID 21440001
  description: Carcinoid heart disease was one of the first valvular pathologies studied in molecular detail, and early research identified serotonin produced by oncogenic enterochromaffin cells as the likely culprit in causing changes in heart valve tissue.
  sourceId: reddit-pmid-21440001
- title: Source-specific finding from PMID 12073163
  description: "BACKGROUND: Hypersensitivity of brain serotonin receptors has been proposed as a causal mechanism in the pathophysiology of panic disorder."
  sourceId: reddit-pmid-12073163
```

## Cautions

```yaml
- title: Source-specific finding from PMID 23609610
  description: "OBJECTIVE: Several studies have suggested that exogenous administration of the serotonin precursor 5-hydroxytryptophan (5-HTP) can result in the ectopic production of serotonin in dopaminergic neurons and a concomitant reduction in dopamine release."
  sourceId: reddit-pmid-23609610
- title: Source-specific finding from PMID 15146330
  description: "UNLABELLED: To test the hypothesis that the administration of L -5-hydroxytryptophan (L -5-HTP) might exert beneficial effects on sleep terrors, we carried out an open pharmacological trial in a group of children with sleep terrors compared to a group of children with the same disorder but without L -5-HTP treatment."
  sourceId: reddit-pmid-15146330
```

## Claims

```yaml
- id: reddit-claim-5-htp-15146330-0
  assertion: 5-HTP is associated with the reported sleep finding in this publication.
  relation: associated-with
  participants:
    - entityId: substance:5-htp
      role: intervention or exposure
    - entityId: tag:sleep
      role: reported endpoint
  context: Publication abstract; direction and population are retained on the linked observation.
  sourceIds:
    - reddit-pmid-15146330
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
- id: optihealth-substance-019fe218-4402-73f8-9046-c4ccae708f4f
  title: OptiHealth canonical substance identity snapshot
  authors: OptiHealth catalog
  year: 2026
  url: https://optihealth.devpins.org/substance-identity/019fe218-4402-73f8-9046-c4ccae708f4f
  kind: catalog-identity
  insight: The OptiHealth canonical catalog records this substance identity label.
  limitation: This catalog snapshot is not an independent evidence review and does not establish structure, dose, safety, or efficacy.
- id: reddit-pmid-23609610
  title: "Effects of oral 5-hydroxytryptophan on a standardized planning task: insight into possible dopamine/serotonin interactions in the forebrain."
  authors: Mathew H Gendle, Erica L Young, Alexandra C Romano
  year: 2013
  url: https://pubmed.ncbi.nlm.nih.gov/23609610/
  kind: PubMed publication
  insight: "OBJECTIVE: Several studies have suggested that exogenous administration of the serotonin precursor 5-hydroxytryptophan (5-HTP) can result in the ectopic production of serotonin in dopaminergic neurons and a concomitant reduction in dopamine release."
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: "23609610"
  doi: 10.1002/hup.2314
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-20737522
  title: "Oral administration of 5-hydroxytryptophan (5-HTP) impairs decision making under ambiguity but not under risk: evidence from the Iowa Gambling Task."
  authors: Mathew H Gendle, Abbe C Golding
  year: 2010
  url: https://pubmed.ncbi.nlm.nih.gov/20737522/
  kind: PubMed publication
  insight: "OBJECTIVE: Although the serotonin precursor 5-hydroxytryptophan (5-HTP) is marketed as a psychoactive nutritional supplement, knowledge is limited regarding the effects of exogenous 5-HTP on brain activity."
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: "20737522"
  doi: 10.1002/hup.1139
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-21440001
  title: Serotonin receptors and heart valve disease--it was meant 2B.
  authors: Joshua D Hutcheson, Vincent Setola, Bryan L Roth, W David Merryman
  year: 2011
  url: https://pubmed.ncbi.nlm.nih.gov/21440001/
  kind: PubMed publication
  insight: Carcinoid heart disease was one of the first valvular pathologies studied in molecular detail, and early research identified serotonin produced by oncogenic enterochromaffin cells as the likely culprit in causing changes in heart valve tissue.
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: "21440001"
  doi: 10.1016/j.pharmthera.2011.03.008
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-link-ddad3cabbfc2
  title: 5-HTP efficacy and contraindications (2012)
  authors: Not established
  year: 2012
  url: https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3415362/
  kind: PubMed Central publication link
  insight: The Reddit index links this publication; bibliographic metadata was not returned by the PubMed batch.
  limitation: Full text, publication metadata, funding, and conflicts were not independently verified in this corpus pass.
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-12073163
  title: L-5-hydroxytryptophan induced increase in salivary cortisol in panic disorder patients and healthy volunteers.
  authors: Koen Schruers, Rob van Diest, Nancy Nicolson, Eric Griez
  year: 2002
  url: https://pubmed.ncbi.nlm.nih.gov/12073163/
  kind: PubMed publication
  insight: "BACKGROUND: Hypersensitivity of brain serotonin receptors has been proposed as a causal mechanism in the pathophysiology of panic disorder."
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: "12073163"
  doi: 10.1007/s00213-002-1072-8
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-15146330
  title: L -5-Hydroxytryptophan treatment of sleep terrors in children.
  authors: Oliviero Bruni, Raffaele Ferri, Silvia Miano, Elisabetta Verrillo
  year: 2004
  url: https://pubmed.ncbi.nlm.nih.gov/15146330/
  kind: PubMed publication
  insight: "UNLABELLED: To test the hypothesis that the administration of L -5-hydroxytryptophan (L -5-HTP) might exert beneficial effects on sleep terrors, we carried out an open pharmacological trial in a group of children with sleep terrors compared to a group of children with the same disorder but without L -5-HTP treatment."
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: "15146330"
  doi: 10.1007/s00431-004-1444-7
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: psychonautwiki
  title: "5-Hydroxytryptophan: PsychonautWiki dose and duration data"
  authors: PsychonautWiki contributors
  year: 2026
  url: https://psychonautwiki.org/wiki/5-Hydroxytryptophan
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
  url: https://en.wikipedia.org/wiki/5htp
  title: Wikipedia
- service: Examine
  url: https://examine.com/supplements/5-HTP
  title: Examine
```

