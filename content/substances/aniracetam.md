---
slug: aniracetam
name: Aniracetam
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
  sourceId: optihealth-substance-019fe218-43e3-7c72-bd49-37f334347502
  observationId: aniracetam-identity-unassessed
kinetics:
  onset: Not established
  peak: Not established
  duration: Not established
  bioavailability: Not established
  metabolism: Not established
  sourceId: optihealth-substance-019fe218-43e3-7c72-bd49-37f334347502
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
x-order: 1105
---

## Summary

Aniracetam is recorded as a canonical identity from a source-backed OptiHealth candidate. This draft does not assert effects, dosing, safety, or efficacy.

Reddit index evidence: Aniracetam evidence in the index is preclinical: 10–100 mg/kg reduced anxiety-like behavior in mice through cholinergic, serotonergic and dopaminergic interactions; 100 mg/kg reversed sleep-deprivation passive-avoidance deficits in rats; metabolites potentiated AMPA receptors in vitro.

## Description

This page records the source-backed identity label Aniracetam. The import preserves the candidate's aliases and source trail only; molecular structure, pharmacokinetics, effects, dosing, safety, and efficacy remain unestablished here.

Reddit index evidence: No human efficacy or safety study is linked here. Oral human exposure is complicated by rapid first-pass metabolism; the cited animal and in-vitro findings should not be extrapolated directly to supplement use.

## Evidence note

Identity only import: the cited sources support candidate identity provenance, not an evidence review. No biological relationship or clinical claim is asserted.

Reddit index source review: Four PubMed abstracts were retrieved; PMC4123976 was identified for the healthy-mouse study, but rights-eligible full text was not returned in this pass. All structured biological findings are from mice, rats or Xenopus oocytes. Full-text retrieval status is recorded per reference; 1 of 4 PubMed records had a PMC identifier in this set.

## Doses

```yaml
- label: Mouse anxiety models
  amount: 10–100 mg/kg
  quantity: 10
  quantityMax: 100
  unit: mg/kg
  ingredient: Aniracetam
  formulation: Study formulation
  frequency: Acute
  duration: Acute behavioral tests
  population: Mice
  purpose: Anxiety-model research
  sourceCategory: research
  note: Dose range in social-interaction testing.
  sourceId: reddit-pmid-11412837
- label: Rat sleep-deprivation model
  amount: 25, 50 or 100 mg/kg
  quantity: 25
  quantityMax: 100
  unit: mg/kg
  ingredient: Aniracetam
  formulation: Study formulation
  frequency: Acute before training
  duration: After 96 h sleep deprivation
  population: Male Wistar rats
  purpose: Passive-avoidance learning research
  sourceCategory: research
  note: Only 100 mg/kg reversed impairment.
  sourceId: reddit-pmid-24079994
- label: Threshold dose
  amount: 350 mg
  quantity: 350
  quantityMax: null
  unit: mg
  ingredient: Aniracetam
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
  ingredient: Aniracetam
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
  ingredient: Aniracetam
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
  ingredient: Aniracetam
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
  ingredient: Aniracetam
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
- id: aniracetam-identity-unassessed
  analyte: Aniracetam
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
  sourceId: optihealth-substance-019fe218-43e3-7c72-bd49-37f334347502
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
    max: 5
    unit: hours
  phases:
    - name: onset
      basis: elapsed-since-exposure
      min: 45
      max: 90
      unit: minutes
```

## Modifiers

```yaml
[]
```

## Effects

```yaml
- id: reddit-aniracetam-anxiety-11412837
  conceptId: anxiety
  name: Anxiety-like behavior
  direction: Decreased
  evidence: Limited research
  description: Aniracetam increased social interaction and showed anxiolytic effects in social-interaction, elevated-plus-maze and conditioned-fear tests in mice.
  sourceId: reddit-pmid-11412837
  population: Mice
  exposure: 10–100 mg/kg
  instrument: Social interaction, elevated plus maze and conditioned fear
  magnitude: Model-dependent anxiolysis
  reportType: measured-assessment
```

## Outcomes

```yaml
- id: aniracetam-normal-mice-25099639
  conceptId: cognitive-performance
  name: Cognitive and affective behavior in healthy mice
  direction: Variable
  evidence: Limited research
  description: Daily oral aniracetam 50 mg/kg for 50 days did not significantly alter spatial learning, associative learning, motor learning, odor discrimination, locomotion, anxiety or repetitive behavior in naïve adult C57BL/6J mice.
  sourceId: reddit-pmid-25099639
  population: Adult C57BL/6J mice
  exposure: 50 mg/kg oral aniracetam daily
  instrument: Morris water maze, fear conditioning, rotarod, odor discrimination and affective-behavior assays
  magnitude: No significant differences across measured behaviors
  reportType: measured-assessment
- id: reddit-aniracetam-memory-24079994
  conceptId: episodic-memory
  name: Passive-avoidance retention
  direction: Increased
  evidence: Limited research
  description: Aniracetam 100 mg/kg reversed passive-avoidance impairment after 96 hours of sleep deprivation at 2- and 24-hour retention tests.
  sourceId: reddit-pmid-24079994
  population: Male Wistar rats
  exposure: 25–100 mg/kg; 100 mg/kg effective
  instrument: Passive-avoidance retention
  magnitude: Reversal at highest dose
  reportType: measured-assessment
- id: reddit-aniracetam-amp-ar-11834304
  conceptId: cognitive-performance
  name: AMPA-receptor current potentiation
  direction: Increased
  evidence: Limited research
  description: 2-Pyrrolidinone potentiated GluR1,3 and GluR1,2,3 AMPA currents, with maximal effect around 100 μM and persistence after washout; effects were CaMKII-sensitive.
  sourceId: reddit-pmid-11834304
  population: Xenopus oocytes expressing AMPA receptors
  exposure: 1 nM–300 μM metabolite concentrations
  instrument: Kainate-evoked AMPA currents
  magnitude: ~180% of baseline at 60 min after 100 μM 2-pyrrolidinone
  reportType: measured-assessment
```

## Mechanisms

```yaml
- title: Metabolite AMPA potentiation
  description: Aniracetam metabolites, especially 2-pyrrolidinone, potentiated AMPA receptor currents; KN-93 inhibition implicates CaMKII in the long-lasting effect.
  sourceId: reddit-pmid-11834304
- title: Cholinergic, serotonergic and dopaminergic interaction
  description: Haloperidol, mecamylamine and ketanserin blocked or attenuated mouse anxiolytic effects, implicating D2, nicotinic acetylcholine and 5-HT2A receptors.
  sourceId: reddit-pmid-11412837
```

## Cautions

```yaml
- title: No human evidence in linked papers
  description: All cited biological findings are from animal models or in-vitro receptor systems; human efficacy and safety are not established.
  sourceId: reddit-pmid-11412837
- title: Model and metabolite limits
  description: The effective 100 mg/kg rat dose and micromolar metabolite concentrations cannot be converted to a safe human dose.
  sourceId: reddit-pmid-24079994
```

## Claims

```yaml
- id: reddit-claim-aniracetam-11412837-0
  assertion: Aniracetam reduced anxiety-like behavior in several mouse models through interacting cholinergic, serotonergic and dopaminergic systems.
  relation: associated-with
  participants:
    - entityId: substance:aniracetam
      role: intervention or exposure
    - entityId: tag:anxiety
      role: reported endpoint
  context: Publication abstract and/or retrieved PMC text; this is not a pooled efficacy estimate.
  sourceIds:
    - reddit-pmid-11412837
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Publication-level association; direction and generalizability depend on the cited study.
- id: reddit-claim-aniracetam-24079994-1
  assertion: Aniracetam 100 mg/kg reversed sleep-deprivation passive-avoidance deficits in rats.
  relation: associated-with
  participants:
    - entityId: substance:aniracetam
      role: intervention or exposure
    - entityId: tag:episodic-memory
      role: reported endpoint
  context: Publication abstract and/or retrieved PMC text; this is not a pooled efficacy estimate.
  sourceIds:
    - reddit-pmid-24079994
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Publication-level association; direction and generalizability depend on the cited study.
- id: reddit-claim-aniracetam-11834304-2
  assertion: The 2-pyrrolidinone metabolite potentiated AMPA receptor currents through a CaMKII-sensitive mechanism in vitro.
  relation: associated-with
  participants:
    - entityId: substance:aniracetam
      role: intervention or exposure
    - entityId: tag:cognitive-performance
      role: reported endpoint
  context: Publication abstract and/or retrieved PMC text; this is not a pooled efficacy estimate.
  sourceIds:
    - reddit-pmid-11834304
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Publication-level association; direction and generalizability depend on the cited study.
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
- id: optihealth-substance-019fe218-43e3-7c72-bd49-37f334347502
  title: OptiHealth canonical substance identity snapshot
  authors: OptiHealth catalog
  year: 2026
  url: https://optihealth.devpins.org/substance-identity/019fe218-43e3-7c72-bd49-37f334347502
  kind: catalog-identity
  insight: The OptiHealth canonical catalog records this substance identity label.
  limitation: This catalog snapshot is not an independent evidence review and does not establish structure, dose, safety, or efficacy.
- id: reddit-pmid-24079994
  title: AMPA receptors mediate passive avoidance deficits induced by sleep deprivation.
  authors: Francisco Paulino Dubiela, Claudio Marcos Queiroz, Karin Di Monteiro Moreira, Jose N Nobrega, Luciane Valéria Sita, Sergio Tufik, Debora Cristina Hipolide
  year: 2013
  url: https://pubmed.ncbi.nlm.nih.gov/24079994/
  kind: PubMed publication
  insight: Aniracetam 100 mg/kg reversed passive-avoidance deficits after 96 h sleep deprivation in rats.
  limitation: Abstract reviewed; rights-eligible PMC full text was unavailable for this publication.
  pmid: "24079994"
  doi: 10.1016/j.bbr.2013.09.037
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-link-1795e054e2fc
  title: "Aniracetam: Its Novel Therapeutic Potential in Cerebral Dysfunctional Disorders Based on Recent Pharmacological Discoveries (2002)"
  authors: Not established
  year: 2002
  url: https://onlinelibrary.wiley.com/doi/10.1111/j.1527-3458.2002.tb00216.x/pdf
  kind: Reddit index publication link
  insight: The Reddit index links this publication; bibliographic metadata was not returned by the PubMed batch.
  limitation: Full text, publication metadata, funding, and conflicts were not independently verified in this corpus pass.
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-11412837
  title: Anxiolytic effects of aniracetam in three different mouse models of anxiety and the underlying mechanism.
  authors: K Nakamura, M Kurasawa
  year: 2001
  url: https://pubmed.ncbi.nlm.nih.gov/11412837/
  kind: PubMed publication
  insight: Aniracetam 10–100 mg/kg was anxiolytic across three mouse models; receptor antagonists implicated nicotinic, 5-HT2A and D2 mechanisms.
  limitation: Abstract reviewed; rights-eligible PMC full text was unavailable for this publication.
  pmid: "11412837"
  doi: 10.1016/s0014-2999(01)01005-6
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-11834304
  title: The aniracetam metabolite 2-pyrrolidinone induces a long-term enhancement in AMPA receptor responses via a CaMKII pathway.
  authors: Tomoyuki Nishizaki, Takuro Matsumura
  year: 2002
  url: https://pubmed.ncbi.nlm.nih.gov/11834304/
  kind: PubMed publication
  insight: 2-Pyrrolidinone potentiated AMPA currents (maximal around 100 μM) with CaMKII-sensitive persistence in Xenopus oocytes.
  limitation: Abstract reviewed; rights-eligible PMC full text was unavailable for this publication.
  pmid: "11834304"
  doi: 10.1016/s0169-328x(01)00331-x
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-link-8c08810ac4e2
  title: Aniracetam does not alter cognitive and affective behavior in adult C57BL/6J mice.
  authors: Thomas W Elston; Ashvini Pandian; Gregory D Smith; et al.
  year: 2014
  url: https://pubmed.ncbi.nlm.nih.gov/25099639/
  kind: PubMed publication
  insight: The Reddit index links this publication; bibliographic metadata was not returned by the PubMed batch.
  limitation: Full text, publication metadata, funding, and conflicts were not independently verified in this corpus pass.
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
  pmid: "25099639"
  doi: 10.1371/journal.pone.0104443
- id: reddit-index-aniracetam
  title: Reddit r/Nootropics community index
  authors: Reddit r/Nootropics community index
  year: 2026
  url: https://www.reddit.com/r/nootropics/wiki/index
  kind: Community index
  insight: Reddit index discovery link; it does not establish efficacy, dose or safety.
  limitation: Community index used as a discovery aid; publication evidence is evaluated in the linked records.
- id: reddit-pmid-25099639
  title: Aniracetam does not alter cognitive and affective behavior in adult C57BL/6J mice.
  authors: Thomas W Elston; Ashvini Pandian; Gregory D Smith; et al.
  year: 2014
  url: https://pubmed.ncbi.nlm.nih.gov/25099639/
  kind: PubMed publication
  insight: Daily oral 50 mg/kg aniracetam did not alter cognitive or affective behavior across multiple assays in healthy adult mice; PMC full text is available.
  limitation: Healthy-animal null finding; it does not establish human efficacy or safety.
  pmid: "25099639"
  pmcid: PMC4123976
  doi: 10.1371/journal.pone.0104443
- id: psychonautwiki
  title: "Aniracetam: PsychonautWiki dose and duration data"
  authors: PsychonautWiki contributors
  year: 2026
  url: https://psychonautwiki.org/wiki/Aniracetam
  kind: Community wiki data · CC BY 4.0
  insight: Source of this page's community dose bands and subjective duration ranges, from the PsychonautWiki API snapshot built about 2026-06-23 and retrieved 2026-11-06. The structured data is used under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/); BHWiki normalized unit symbols and route names.
  limitation: "PsychonautWiki states: \"PW's dosage information is gathered from users and resources for educational purposes only. It is not a recommendation and should be verified with other sources for accuracy.\" Its dose and duration values carry no per-value citations."
```

## Legal

```yaml
[]
```

