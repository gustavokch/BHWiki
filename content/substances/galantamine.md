---
slug: galantamine
name: Galantamine
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
  sourceId: optihealth-substance-019fe218-440a-78f6-a3a7-64c3dd0a2a9f
  observationId: galantamine-identity-unassessed
kinetics:
  onset: Not established
  peak: Not established
  duration: Not established
  bioavailability: Not established
  metabolism: Not established
  sourceId: optihealth-substance-019fe218-440a-78f6-a3a7-64c3dd0a2a9f
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
x-order: 1118
---

## Summary

Galantamine is an acetylcholinesterase inhibitor with acute human studies showing task-specific changes in memory and attention and measurable AChE inhibition, but no general cognitive enhancement in healthy adults.

## Description

Galantamine is an acetylcholinesterase inhibitor. The Reddit-linked studies used acute 4–8 mg doses or a galantamine challenge in healthy adults; findings include slower working-memory retrieval, altered Bayesian attention updating, and AChE inhibition without neurobehavioral improvement.

## Evidence note

The three Reddit-linked PubMed abstracts were reviewed. They support acute, task-specific human findings and AChE inhibition but do not establish clinical efficacy or long-term safety. PMCID PMC4236403 full text was reviewed for the spatial-attention study; the other two had no PMC full text returned.

## Doses

```yaml
- label: PubMed study exposure (27222217)
  amount: 8 mg
  quantity: 8
  quantityMax: null
  unit: mg
  ingredient: Galantamine
  formulation: As described in the PubMed abstract
  frequency: Study exposure
  duration: Study exposure
  purpose: Research exposure
  sourceCategory: research
  note: Dose extracted from the PubMed abstract; verify the full text for formulation and protocol details.
  sourceId: reddit-pmid-27222217
  population: Population description was not available in the retrieved abstract.
- label: PubMed study exposure (25455867)
  amount: 200 μg
  quantity: 200
  quantityMax: null
  unit: μg
  ingredient: Galantamine
  formulation: As described in the PubMed abstract
  frequency: Study exposure
  duration: Study exposure
  purpose: Research exposure
  sourceCategory: research
  note: Dose extracted from the PubMed abstract; verify the full text for formulation and protocol details.
  sourceId: reddit-pmid-25455867
  population: Population description was not available in the retrieved abstract.
- label: Threshold dose
  amount: 1 mg
  quantity: 1
  quantityMax: null
  unit: mg
  ingredient: Galantamine
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
  amount: 4–8 mg
  quantity: 4
  quantityMax: 8
  unit: mg
  ingredient: Galantamine
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
  amount: 8–16 mg
  quantity: 8
  quantityMax: 16
  unit: mg
  ingredient: Galantamine
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
  amount: 16–24 mg
  quantity: 16
  quantityMax: 24
  unit: mg
  ingredient: Galantamine
  formulation: Not established
  route: Oral
  frequency: Not established
  duration: Not established
  population: Not established
  purpose: PsychonautWiki dosage classification
  sourceCategory: community
  note: Band from the PsychonautWiki API snapshot built about 2026-06-23.
  sourceId: psychonautwiki
- label: Heavy dose band (24 mg and above)
  amount: 24 mg and above
  quantity: 24
  quantityMax: null
  unit: mg
  ingredient: Galantamine
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
- id: galantamine-identity-unassessed
  analyte: Galantamine
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
  sourceId: optihealth-substance-019fe218-440a-78f6-a3a7-64c3dd0a2a9f
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
    min: 6
    max: 12
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
- id: galantamine-working-memory
  conceptId: working-memory-state
  name: Working-memory retrieval speed
  direction: Decreased
  evidence: Human research
  description: In healthy adults, 8 mg galantamine slowed retrieval during a Sternberg working-memory task and reduced associated alpha power.
  sourceId: reddit-pmid-27222217
  population: Healthy adults in a within-subject design
  exposure: Single 8 mg oral galantamine dose
  instrument: EEG Sternberg working-memory paradigm
  magnitude: Direction reported in abstract; numeric estimate not provided
  reportType: measured-assessment
- id: galantamine-ache-inhibition
  conceptId: cholinesterase-activity
  name: Circulating acetylcholinesterase activity
  direction: Decreased
  evidence: Human research
  description: Single 4 or 8 mg galantamine inhibited circulating red-blood-cell acetylcholinesterase but not butyrylcholinesterase in healthy adults.
  sourceId: reddit-pmid-25455867
  population: Healthy adults, n=12 per galantamine dose group
  exposure: Single 4 or 8 mg oral dose
  instrument: Hourly red-blood-cell cholinesterase sampling
  magnitude: Significant AChE inhibition versus placebo; numeric estimate not provided in abstract
  reportType: measured-assessment
```

## Outcomes

```yaml
- id: galantamine-wm-27222217
  study:
    id: galantamine-27222217-trial
    design: Within-subject placebo-controlled psychopharmacology study
    populationLabels:
      - Healthy adults
    comparator: Placebo
    route: Oral
    formulation: Galantamine
    assessmentTime: Working-memory session and next-day recognition test
  reportType: measured-assessment
  conceptId: working-memory
  name: Working-memory and familiarity recognition
  direction: Decreased
  evidence: Human research
  description: After 8 mg galantamine, retrieval speed during working memory slowed, alpha power decreased, and familiarity-based long-term recognition was impaired.
  sourceId: reddit-pmid-27222217
  population: Healthy adults
  exposure: Single 8 mg galantamine dose
  instrument: Sternberg working-memory paradigm, EEG, remember/know recognition
  magnitude: Numeric effect estimates not provided in abstract
- id: galantamine-attention-25411501
  study:
    id: galantamine-25411501-trial
    design: Placebo-controlled within-subject crossover study
    sampleSize: 16
    populationLabels:
      - Healthy human subjects
    comparator: Placebo
    route: Oral
    formulation: Galantamine (dose not stated in abstract)
    assessmentTime: Spatial attention task
  reportType: measured-assessment
  conceptId: attention
  name: Bayesian updating of cue validity
  direction: Increased
  evidence: Human research
  description: Galantamine increased the influence of probabilistic cue context on saccadic response speed; modeling attributed this to a higher rate of belief updating rather than altered response mapping.
  sourceId: reddit-pmid-25411501
  population: 16 healthy human subjects
  exposure: Galantamine challenge
  instrument: Posner cueing task and hierarchical Bayesian model
  magnitude: Parameter-level estimate not provided in abstract
- id: galantamine-ache-25455867
  study:
    id: galantamine-25455867-trial
    design: Single-dose placebo-controlled healthy-adult pharmacology study
    sampleSize: 12
    populationLabels:
      - Healthy adults
    comparator: Placebo
    route: Oral
    formulation: Galantamine
    assessmentTime: Hourly blood sampling and pre/post neurobehavioral testing
  reportType: measured-assessment
  conceptId: acetylcholinesterase-inhibition-outcome
  name: AChE inhibition without neurobehavioral enhancement
  direction: Decreased
  evidence: Human research
  description: Galantamine 4 or 8 mg inhibited circulating AChE but not BChE; neither dose improved neurobehavioral performance in young healthy adults, likely because of ceiling effects.
  sourceId: reddit-pmid-25455867
  population: Healthy adults, n=12 per drug/dose group
  exposure: Single 4 or 8 mg oral galantamine dose
  instrument: Red-blood-cell cholinesterase assays and neurobehavioral tests
  magnitude: Significant AChE inhibition; no neurobehavioral improvement reported
- id: galantamine-belief-updating
  conceptId: attention
  name: Bayesian belief updating about cue validity
  direction: Increased
  evidence: Human research
  description: In 16 healthy subjects, galantamine increased the rate of trial-wise belief updating about spatial-cue validity during a Posner task.
  sourceId: reddit-pmid-25411501
  population: 16 healthy human subjects
  exposure: Galantamine challenge (dose not stated in PubMed abstract)
  instrument: Saccadic response speed with hierarchical Bayesian model
  magnitude: Greater context influence on response speed; parameter-level estimate not provided in abstract
  reportType: measured-assessment
```

## Mechanisms

```yaml
- title: Acetylcholinesterase inhibition
  description: Galantamine is an acetylcholinesterase inhibitor. In healthy adults, single 4 or 8 mg doses inhibited circulating AChE but not BChE; the investigators inferred that central acetylcholine levels were likely increased.
  sourceId: reddit-pmid-25455867
- title: Cholinergic modulation of attention and memory
  description: Galantamine challenge altered alpha oscillations during working memory and increased the modeled rate of Bayesian belief updating about spatial-cue validity, linking cholinergic stimulation to task-specific network effects.
  sourceId: reddit-pmid-27222217
```

## Cautions

```yaml
- title: No general cognitive-enhancement signal in healthy adults
  description: Galantamine slowed working-memory retrieval and impaired familiarity recognition in one study; another found no neurobehavioral improvement despite AChE inhibition, so these findings do not support use as a general enhancer in healthy people.
  sourceId: reddit-pmid-27222217
- title: Cholinesterase inhibition without established benefit
  description: Single 4 or 8 mg doses inhibited circulating AChE but not BChE in healthy adults; the abstract reports no neurobehavioral improvement for galantamine and notes possible ceiling effects.
  sourceId: reddit-pmid-25455867
- title: Dose and population limitations
  description: The Reddit-linked studies were acute experiments in healthy adults; dose, formulation, and longer-term tolerability cannot be generalized beyond the tested protocols.
  sourceId: reddit-pmid-25411501
```

## Claims

```yaml
- id: galantamine-wm-claim
  assertion: An acute 8 mg galantamine challenge impaired working-memory retrieval speed and familiarity-based recognition in healthy adults.
  relation: associated-with
  participants:
    - entityId: substance:galantamine
      role: intervention
    - entityId: tag:working-memory
      role: reported endpoint
  context: Within-subject EEG and memory study; not evidence of clinical impairment outside the tested task.
  sourceIds:
    - reddit-pmid-27222217
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Abstract does not provide sample size or numeric effect estimates.
- id: galantamine-attention-claim
  assertion: Galantamine increased modeled belief-updating rate about spatial-cue validity in a 16-person healthy-subject crossover study.
  relation: associated-with
  participants:
    - entityId: substance:galantamine
      role: intervention
    - entityId: tag:attention
      role: reported endpoint
  context: Posner spatial-attention task with hierarchical Bayesian modeling.
  sourceIds:
    - reddit-pmid-25411501
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Dose was not stated in the PubMed abstract and the finding is task-specific.
- id: galantamine-ache-claim
  assertion: Single 4 or 8 mg galantamine doses inhibited circulating AChE without improving neurobehavioral performance in healthy adults.
  relation: produces
  participants:
    - entityId: substance:galantamine
      role: intervention
    - entityId: tag:acetylcholinesterase-inhibition
      role: biochemical endpoint
  context: Healthy-adult single-dose pharmacology study.
  sourceIds:
    - reddit-pmid-25455867
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Acute small sample; clinical populations and longer-term outcomes were not studied.
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
- id: optihealth-substance-019fe218-440a-78f6-a3a7-64c3dd0a2a9f
  title: OptiHealth canonical substance identity snapshot
  authors: OptiHealth catalog
  year: 2026
  url: https://optihealth.devpins.org/substance-identity/019fe218-440a-78f6-a3a7-64c3dd0a2a9f
  kind: catalog-identity
  insight: The OptiHealth canonical catalog records this substance identity label.
  limitation: This catalog snapshot is not an independent evidence review and does not establish structure, dose, safety, or efficacy.
- id: reddit-pmid-27222217
  title: Acetylcholine modulates human working memory and subsequent familiarity based recognition via alpha oscillations.
  authors: Cindy Eckart, Agata Woźniak-Kwaśniewska, Nora A Herweg, Lluis Fuentemilla, Nico Bunzeck
  year: 2016
  url: https://pubmed.ncbi.nlm.nih.gov/27222217/
  kind: PubMed publication
  insight: In healthy adults given 8 mg galantamine, working-memory retrieval slowed, alpha power decreased, and familiarity-based recognition was impaired.
  limitation: Acute task study; numeric effect estimates and full-text disclosures were not assessed in this pass.
  pmid: "27222217"
  doi: 10.1016/j.neuroimage.2016.05.049
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-25411501
  title: Cholinergic stimulation enhances Bayesian belief updating in the deployment of spatial attention.
  authors: Simone Vossel, Markus Bauer, Christoph Mathys, Rick A Adams, Raymond J Dolan, Klaas E Stephan, Karl J Friston
  year: 2014
  url: https://pubmed.ncbi.nlm.nih.gov/25411501/
  kind: PubMed publication
  insight: In 16 healthy subjects, galantamine increased the modeled rate of Bayesian belief updating about cue validity during spatial attention.
  limitation: Acute task-specific crossover study; PMCID PMC4236403 full text was reviewed, but dose and complete disclosures were not established from the abstract.
  pmid: "25411501"
  pmcid: PMC4236403
  doi: 10.1523/JNEUROSCI.0091-14.2014
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-25455867
  title: Physiological and neurobehavioral effects of cholinesterase inhibition in healthy adults.
  authors: Katherine C Morasch, Christopher L Aaron, James E Moon, Richard K Gordon
  year: 2015
  url: https://pubmed.ncbi.nlm.nih.gov/25455867/
  kind: PubMed publication
  insight: In healthy adults, single 4 or 8 mg galantamine doses inhibited circulating AChE but not BChE and did not improve neurobehavioral performance.
  limitation: Small acute study; no PMC full text was returned and long-term clinical effects were not assessed.
  pmid: "25455867"
  doi: 10.1016/j.physbeh.2014.09.010
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: psychonautwiki
  title: "Galantamine: PsychonautWiki dose and duration data"
  authors: PsychonautWiki contributors
  year: 2026
  url: https://psychonautwiki.org/wiki/Galantamine
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
  url: https://en.wikipedia.org/wiki/Galantamine
  title: Wikipedia
```

