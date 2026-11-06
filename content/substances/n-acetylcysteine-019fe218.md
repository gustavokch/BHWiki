---
slug: n-acetylcysteine-019fe218
name: N-Acetylcysteine
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
  sourceId: optihealth-substance-019fe218-440f-7dbe-966f-f15487c57ac6
  observationId: n-acetylcysteine-019fe218-identity-unassessed
kinetics:
  onset: Not established
  peak: Not established
  duration: Not established
  bioavailability: Not established
  metabolism: Not established
  sourceId: optihealth-substance-019fe218-440f-7dbe-966f-f15487c57ac6
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
x-order: 1120
---

## Summary

N-Acetylcysteine is recorded as a canonical identity from a source-backed OptiHealth candidate. This draft does not assert effects, dosing, safety, or efficacy.

## Description

This page records the source-backed identity label N-Acetylcysteine. The import preserves the candidate's aliases and source trail only; molecular structure, pharmacokinetics, effects, dosing, safety, and efficacy remain unestablished here.

## Evidence note

PubMed abstracts retrieved for all six linked PMIDs. PMC full text was retrieved for PMIDs 23372680 (PMC3553161), 24740427 (PMC3989181), 24224042 (PMC3818243), and 25581647 (PMC4293075); the remaining two PMIDs had no PMC match. Existing dose, outcome, mechanism, and caution records are retained as source-specific; full-text continuation and disclosures remain incomplete where retrieval was truncated.

## Doses

```yaml
- label: PubMed study exposure (15628716)
  amount: 15 mg
  quantity: 15
  quantityMax: null
  unit: mg
  ingredient: N-Acetylcysteine
  formulation: As described in the PubMed abstract
  frequency: Study exposure
  duration: Study exposure
  population: Population described in the PubMed abstract
  purpose: Research exposure
  sourceCategory: research
  note: Dose extracted from the PubMed abstract; verify the full text for formulation and protocol details.
  sourceId: reddit-pmid-15628716
- label: PubMed study exposure (25581647)
  amount: 1.7 g/kg
  quantity: 1.7
  quantityMax: null
  unit: g/kg
  ingredient: N-Acetylcysteine
  formulation: As described in the PubMed abstract
  frequency: Study exposure
  duration: Study exposure
  population: Population described in the PubMed abstract
  purpose: Research exposure
  sourceCategory: research
  note: Dose extracted from the PubMed abstract; verify the full text for formulation and protocol details.
  sourceId: reddit-pmid-25581647
- label: Threshold dose
  amount: 100 mg
  quantity: 100
  quantityMax: null
  unit: mg
  ingredient: N-Acetylcysteine
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
  amount: 400–600 mg
  quantity: 400
  quantityMax: 600
  unit: mg
  ingredient: N-Acetylcysteine
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
  amount: 600–1000 mg
  quantity: 600
  quantityMax: 1000
  unit: mg
  ingredient: N-Acetylcysteine
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
  amount: 1000–1500 mg
  quantity: 1000
  quantityMax: 1500
  unit: mg
  ingredient: N-Acetylcysteine
  formulation: Not established
  route: Oral
  frequency: Not established
  duration: Not established
  population: Not established
  purpose: PsychonautWiki dosage classification
  sourceCategory: community
  note: Band from the PsychonautWiki API snapshot built about 2026-06-23.
  sourceId: psychonautwiki
- label: Heavy dose band (1500 mg and above)
  amount: 1500 mg and above
  quantity: 1500
  quantityMax: null
  unit: mg
  ingredient: N-Acetylcysteine
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
- id: n-acetylcysteine-019fe218-identity-unassessed
  analyte: N-Acetylcysteine
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
  sourceId: optihealth-substance-019fe218-440f-7dbe-966f-f15487c57ac6
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
    min: 3
    max: 6
    unit: hours
  phases:
    - name: onset
      basis: elapsed-since-exposure
      min: 20
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
- id: reddit-n-acetylcysteine-019fe218-cognitive-performance-23372680
  conceptId: cognitive-performance
  name: Cognitive Performance
  direction: Variable
  evidence: Limited research
  description: "BACKGROUND: Mild traumatic brain injury (mTBI) secondary to blast exposure is the most common battlefield injury in Southwest Asia."
  sourceId: reddit-pmid-23372680
  population: Population described in the PubMed abstract
  exposure: "BACKGROUND: Mild traumatic brain injury (mTBI) secondary to blast exposure is the most common battlefield injury in Southwest Asia."
  instrument: null
  magnitude: null
  reportType: measured-assessment
- id: reddit-n-acetylcysteine-019fe218-episodic-memory-23372680
  conceptId: episodic-memory
  name: Episodic Memory
  direction: Variable
  evidence: Limited research
  description: "BACKGROUND: Mild traumatic brain injury (mTBI) secondary to blast exposure is the most common battlefield injury in Southwest Asia."
  sourceId: reddit-pmid-23372680
  population: Population described in the PubMed abstract
  exposure: "BACKGROUND: Mild traumatic brain injury (mTBI) secondary to blast exposure is the most common battlefield injury in Southwest Asia."
  instrument: null
  magnitude: null
  reportType: measured-assessment
- id: reddit-n-acetylcysteine-019fe218-sleep-23372680
  conceptId: sleep
  name: Sleep
  direction: Variable
  evidence: Limited research
  description: "BACKGROUND: Mild traumatic brain injury (mTBI) secondary to blast exposure is the most common battlefield injury in Southwest Asia."
  sourceId: reddit-pmid-23372680
  population: Population described in the PubMed abstract
  exposure: "BACKGROUND: Mild traumatic brain injury (mTBI) secondary to blast exposure is the most common battlefield injury in Southwest Asia."
  instrument: null
  magnitude: null
  reportType: measured-assessment
```

## Mechanisms

```yaml
- title: Source-specific finding from PMID 24740427
  description: In this study, using two different injury models in two different species, we found that early post-injury treatment with N-Acetyl Cysteine (NAC) reversed the behavioral deficits associated with the TBI.
  sourceId: reddit-pmid-24740427
- title: Source-specific finding from PMID 25581647
  description: "BACKGROUND: Chronic ethanol (EtOH) administration to experimental animals induces hepatic oxidative stress and up-regulates mitochondrial biogenesis."
  sourceId: reddit-pmid-25581647
```

## Cautions

```yaml
- title: Source-specific finding from PMID 23372680
  description: "BACKGROUND: Mild traumatic brain injury (mTBI) secondary to blast exposure is the most common battlefield injury in Southwest Asia."
  sourceId: reddit-pmid-23372680
```

## Claims

```yaml
- id: reddit-claim-n-acetylcysteine-019fe218-23372680-0
  assertion: N-Acetylcysteine is associated with the reported sleep finding in this publication.
  relation: associated-with
  participants:
    - entityId: substance:n-acetylcysteine-019fe218
      role: intervention or exposure
    - entityId: tag:sleep
      role: reported endpoint
  context: Publication abstract; direction and population are retained on the linked observation.
  sourceIds:
    - reddit-pmid-23372680
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Automated corpus import from an abstract; this record is not an independent meta-analysis.
- id: reddit-claim-n-acetylcysteine-019fe218-24740427-1
  assertion: N-Acetylcysteine is associated with the reported sleep finding in this publication.
  relation: associated-with
  participants:
    - entityId: substance:n-acetylcysteine-019fe218
      role: intervention or exposure
    - entityId: tag:sleep
      role: reported endpoint
  context: Publication abstract; direction and population are retained on the linked observation.
  sourceIds:
    - reddit-pmid-24740427
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Automated corpus import from an abstract; this record is not an independent meta-analysis.
- id: reddit-claim-n-acetylcysteine-019fe218-24224042-2
  assertion: N-Acetylcysteine is associated with the reported sleep finding in this publication.
  relation: associated-with
  participants:
    - entityId: substance:n-acetylcysteine-019fe218
      role: intervention or exposure
    - entityId: tag:sleep
      role: reported endpoint
  context: Publication abstract; direction and population are retained on the linked observation.
  sourceIds:
    - reddit-pmid-24224042
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Automated corpus import from an abstract; this record is not an independent meta-analysis.
- id: reddit-claim-n-acetylcysteine-019fe218-25499330-3
  assertion: N-Acetylcysteine is associated with the reported sleep finding in this publication.
  relation: associated-with
  participants:
    - entityId: substance:n-acetylcysteine-019fe218
      role: intervention or exposure
    - entityId: tag:sleep
      role: reported endpoint
  context: Publication abstract; direction and population are retained on the linked observation.
  sourceIds:
    - reddit-pmid-25499330
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Automated corpus import from an abstract; this record is not an independent meta-analysis.
- id: reddit-claim-n-acetylcysteine-019fe218-25581647-4
  assertion: N-Acetylcysteine is associated with the reported sleep finding in this publication.
  relation: associated-with
  participants:
    - entityId: substance:n-acetylcysteine-019fe218
      role: intervention or exposure
    - entityId: tag:sleep
      role: reported endpoint
  context: Publication abstract; direction and population are retained on the linked observation.
  sourceIds:
    - reddit-pmid-25581647
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
- id: optihealth-substance-019fe218-440f-7dbe-966f-f15487c57ac6
  title: OptiHealth canonical substance identity snapshot
  authors: OptiHealth catalog
  year: 2026
  url: https://optihealth.devpins.org/substance-identity/019fe218-440f-7dbe-966f-f15487c57ac6
  kind: catalog-identity
  insight: The OptiHealth canonical catalog records this substance identity label.
  limitation: This catalog snapshot is not an independent evidence review and does not establish structure, dose, safety, or efficacy.
- id: reddit-pmid-15628716
  title: N-acetylcysteine, a novel treatment for Helicobacter pylori infection.
  authors: Hien Quoc Huynh, Richard T L Couper, Cuong D Tran, Lynette Moore, Richard Kelso, Ross N Butler
  year: 2004
  url: https://pubmed.ncbi.nlm.nih.gov/15628716/
  kind: PubMed publication
  insight: N-Acetylcysteine (NAC), being both a mucolytic agent and a thiol-containing antioxidant, may affect the establishment and maintenance of H.
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: "15628716"
  doi: 10.1007/s10620-004-9583-2
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-link-a3cf12d82beb
  title: "N-Acetylcysteine: Multiple Clinical Applications (2009)"
  authors: Not established
  year: 2009
  url: https://www.aafp.org/afp/2009/0801/p265.html
  kind: Reddit index publication link
  insight: The Reddit index links this publication; bibliographic metadata was not returned by the PubMed batch.
  limitation: Full text, publication metadata, funding, and conflicts were not independently verified in this corpus pass.
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-23372680
  title: "Amelioration of acute sequelae of blast induced mild traumatic brain injury by N-acetyl cysteine: a double-blind, placebo controlled study."
  authors: Michael E Hoffer, Carey Balaban, Martin D Slade, Jack W Tsao, Barry Hoffer
  year: 2013
  url: https://pubmed.ncbi.nlm.nih.gov/23372680/
  kind: PubMed publication
  insight: "BACKGROUND: Mild traumatic brain injury (mTBI) secondary to blast exposure is the most common battlefield injury in Southwest Asia."
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: "23372680"
  pmcid: PMC3553161
  doi: 10.1371/journal.pone.0054163
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-24740427
  title: Efficacy of N-acetyl cysteine in traumatic brain injury.
  authors: Katharine Eakin, Renana Baratz-Goldstein, Chiam G Pick, Ofra Zindel, Carey D Balaban, Michael E Hoffer, Megan Lockwood, Jonathan Miller, Barry J Hoffer
  year: 2014
  url: https://pubmed.ncbi.nlm.nih.gov/24740427/
  kind: PubMed publication
  insight: In this study, using two different injury models in two different species, we found that early post-injury treatment with N-Acetyl Cysteine (NAC) reversed the behavioral deficits associated with the TBI.
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: "24740427"
  pmcid: PMC3989181
  doi: 10.1371/journal.pone.0090617
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-24224042
  title: Effects of antioxidant treatment on blast-induced brain injury.
  authors: Xiaoping Du, Donald L Ewert, Weihua Cheng, Matthew B West, Jianzhong Lu, Wei Li, Robert A Floyd, Richard D Kopke
  year: 2013
  url: https://pubmed.ncbi.nlm.nih.gov/24224042/
  kind: PubMed publication
  insight: Blast-induced traumatic brain injury has dramatically increased in combat troops in today's military operations.
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: "24224042"
  pmcid: PMC3818243
  doi: 10.1371/journal.pone.0080138
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-25499330
  title: "N-Acetylcysteine (NAC) inhibits renal nitrite and nitrate reabsorption in healthy subjects and in patients undergoing cardiac surgery: risk of nitric oxide (NO) bioavailability loss by NAC?"
  authors: Dimitrios Tsikas, Jonas Niemann, Markus Flentje, Alexandra Schwarz, Paschalis Tossios
  year: 2014
  url: https://pubmed.ncbi.nlm.nih.gov/25499330/
  kind: PubMed publication
  insight: PubMed publication linked from the Reddit index.
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: "25499330"
  doi: 10.1016/j.ijcard.2014.09.109
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-link-4a2453575376
  title: reddit discussion
  authors: Not established
  year: 2026
  url: https://www.reddit.com/r/Nootropics/comments/2rh3xq/nacetylcysteine_nac_inhibits_renal_nitrite_and/
  kind: Reddit index publication link
  insight: The Reddit index links this publication; bibliographic metadata was not returned by the PubMed batch.
  limitation: Full text, publication metadata, funding, and conflicts were not independently verified in this corpus pass.
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-link-8f73810b62eb
  title: N-Acetylcysteine increases histamine levels and can cause increased histamine release over time from mast cells by interfering with DAO activity. See table 2.
  authors: Not established
  year: 2026
  url: https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8308327/
  kind: PubMed Central publication link
  insight: The Reddit index links this publication; bibliographic metadata was not returned by the PubMed batch.
  limitation: Full text, publication metadata, funding, and conflicts were not independently verified in this corpus pass.
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-33198336
  title: N-Acetylcysteine as Modulator of the Essential Trace Elements Copper and Zinc
  authors: Not established
  year: 2026
  url: https://pubmed.ncbi.nlm.nih.gov/33198336/
  pmid: "33198336"
  kind: Reddit index publication link
  insight: The Reddit index links this publication; bibliographic metadata was not returned by the PubMed batch.
  limitation: Full text, publication metadata, funding, and conflicts were not independently verified in this corpus pass.
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-link-2a9a3b306f7e
  title: S-Nitrosothiols signal hypoxia-mimetic vascular pathology (2007)
  authors: Not established
  year: 2007
  url: https://www.ncbi.nlm.nih.gov/pmc/articles/PMC1952618/
  kind: PubMed Central publication link
  insight: The Reddit index links this publication; bibliographic metadata was not returned by the PubMed batch.
  limitation: Full text, publication metadata, funding, and conflicts were not independently verified in this corpus pass.
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-25581647
  title: N-acetylcysteine inhibits the up-regulation of mitochondrial biogenesis genes in livers from rats fed ethanol chronically.
  authors: Andres A Caro, Matthew Bell, Shannon Ejiofor, Grant Zurcher, Dennis R Petersen, Martin J J Ronis
  year: 2014
  url: https://pubmed.ncbi.nlm.nih.gov/25581647/
  kind: PubMed publication
  insight: "BACKGROUND: Chronic ethanol (EtOH) administration to experimental animals induces hepatic oxidative stress and up-regulates mitochondrial biogenesis."
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: "25581647"
  pmcid: PMC4293075
  doi: 10.1111/acer.12576
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-link-6c73954464c7
  title: reddit discussion
  authors: Not established
  year: 2026
  url: https://www.reddit.com/r/Nootropics/comments/2sfy7l/nacetylcysteine_inhibits_the_upregulation_of/
  kind: Reddit index publication link
  insight: The Reddit index links this publication; bibliographic metadata was not returned by the PubMed batch.
  limitation: Full text, publication metadata, funding, and conflicts were not independently verified in this corpus pass.
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: psychonautwiki
  title: "N-Acetylcysteine: PsychonautWiki dose and duration data"
  authors: PsychonautWiki contributors
  year: 2026
  url: https://psychonautwiki.org/wiki/N-Acetylcysteine
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
  url: https://en.wikipedia.org/wiki/Acetylcysteine
  title: Wikipedia
- service: Examine
  url: https://examine.com/supplements/N-Acetylcysteine
  title: Examine
```

