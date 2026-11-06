---
slug: melatonin
name: Melatonin
subtitle: A timing signal, not a universal sleep switch.
aliases:
  - N-acetyl-5-methoxytryptamine
formula: C13H16N2O2
molecularWeight: 232.28 g/mol
pubchemCid: 896
smiles: CC(=O)NCCC1=CNC2=C1C=C(C=C2)OC
category: Hormone
tags:
  - hormone
  - circadian
  - sleep
  - daytime-sleepiness
  - behavioral-scheduling
accent: "#b1abcf"
reviewedAt: 2026-10-11
halfLife:
  label: About 36–54 minutes for immediate-release exposure
  low: 0.6
  high: 0.9
  context: Approximate human range; formulation and population matter.
  sourceId: harpsoe2015
  observationId: melatonin-elimination
kinetics:
  onset: Formulation- and timing-dependent
  peak: Often about 30–60 minutes for immediate-release oral exposure
  duration: Plasma exposure and circadian phase effects are distinct
  bioavailability: Low and highly variable; not a universal percentage
  metabolism: CYP1A-mediated metabolism; smoking, caffeine, contraceptives and inhibitors alter exposure
  sourceId: harpsoe2015
editorialStatus: sourced-draft
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
  - halfLife
  - kinetics
  - modifiers
  - doses
  - effects
  - mechanisms
  - cautions
  - references
  - legal
  - editorialStatus
  - pkObservations
  - outcomes
  - claims
  - interactions
  - experienceLinks
  - externalWikiLinks
x-order: 3
---

## Summary

Melatonin is a circadian timing signal. Strategically timed low-dose immediate-release melatonin can help selected delayed sleep-wake phase disorder and jet-lag patients, while prolonged-release products have formulation-specific evidence in older adults and neurodevelopmental populations. It is not a universal insomnia or cognitive-enhancement drug. [sletten2018]

## Description

Human evidence depends on formulation, clock time, light exposure, population and endpoint. Biomarker phase shifts and plasma exposure are distinct from sleep, daytime function and patient-important outcomes. [harpsoe2015]

## Evidence note

PubMed abstracts for all 31 linked PMIDs were retrieved; generic Reddit-derived records were replaced while curated guideline, PK, and trial records were retained. Full text was unavailable for the two Reddit-linked PMIDs; melatonin PK and guideline records remain source-specific.

## Doses

```yaml
- label: DSWPD randomized trial
  amount: 0.5 mg
  quantity: null
  quantityMax: null
  unit: study-specific
  ingredient: Melatonin
  formulation: Fast-release oral
  route: Oral
  frequency: At least 5 nights/week
  duration: 4 weeks
  population: 116 adults with delayed sleep-wake phase disorder
  purpose: Circadian sleep-timing research
  sourceCategory: research
  note: Study exposure with behavioral sleep-wake scheduling; not a universal dose recommendation.
  sourceId: sletten2018
- label: Jet-lag review range
  amount: 0.5–5 mg
  quantity: null
  quantityMax: null
  unit: study-specific
  ingredient: Melatonin
  formulation: Immediate- or prolonged-release products varied
  route: Oral
  frequency: Near destination bedtime
  duration: Travel studies varied
  population: Adults crossing multiple time zones
  purpose: Jet-lag symptom and sleep research
  sourceCategory: research
  note: Dose and clock time were heterogeneous; incorrect timing can worsen sleepiness or phase direction.
  sourceId: dr-melatonin-s22
- label: Shift-work review range
  amount: 1–10 mg
  quantity: null
  quantityMax: null
  unit: study-specific
  ingredient: Melatonin
  formulation: Formulations varied
  route: Oral
  frequency: After a night shift
  duration: Single or repeated post-shift exposure
  population: Night-shift workers
  purpose: Daytime sleep research
  sourceCategory: research
  note: Low-certainty review; it does not establish improved alertness or safety during the next shift.
  sourceId: dr-melatonin-s24
- label: Circadin label
  amount: 2 mg
  quantity: null
  quantityMax: null
  unit: study-specific
  ingredient: Melatonin
  formulation: Prolonged-release prescription tablet
  route: Oral
  frequency: Once daily after food
  duration: Up to 13 weeks
  population: Adults aged 55 years or older with primary insomnia
  purpose: Approved-label context
  sourceCategory: approved-label
  note: Prescription formulation and indication; do not copy to unregulated immediate-release supplements.
  sourceId: dr-melatonin-s30
- label: Pediatric prolonged-release trial
  amount: 2 mg, escalated to 5 mg if needed
  quantity: null
  quantityMax: null
  unit: study-specific
  ingredient: Melatonin
  formulation: Pediatric prolonged-release product
  route: Oral
  frequency: Once nightly
  duration: 13-week randomized phase
  population: Children/adolescents aged 2–17.5 years, mostly with autism
  purpose: Sleep efficacy research
  sourceCategory: research
  note: Manufacturer-sponsored trial; extension evidence is predominantly open-label.
  sourceId: dr-melatonin-s34
- label: Slenyto label
  amount: 1–10 mg depending on indication
  quantity: null
  quantityMax: null
  unit: study-specific
  ingredient: Melatonin
  formulation: Prolonged-release prescription tablet
  route: Oral
  frequency: 30–60 minutes before bedtime after evening meal
  duration: Reassess regularly
  population: Children/adolescents with ASD/neurogenetic disorders or ADHD-associated insomnia
  purpose: Approved-label context
  sourceCategory: approved-label
  note: Product-specific instructions; not evidence for arbitrary supplement products.
  sourceId: dr-melatonin-s59
- label: Memory-under-stress study
  amount: 3 mg once
  quantity: 3
  quantityMax: null
  unit: mg
  ingredient: Melatonin
  formulation: Oral immediate-release
  route: oral
  frequency: single dose
  duration: acute; stress test 1 hour later
  population: 50 healthy young men
  purpose: Memory encoding under psychosocial stress
  sourceCategory: research
  note: Single laboratory exposure; not a sleep-treatment recommendation.
  sourceId: reddit-pmid-18853147
- label: Prolonged-release cognitive-safety study
  amount: 2 mg at bedtime
  quantity: 2
  quantityMax: null
  unit: mg
  ingredient: Melatonin
  formulation: Prolonged-release melatonin
  route: oral
  frequency: bedtime
  duration: acute crossover; assessments at 1 and 4 hours and next morning
  population: 16 healthy adults aged about 59 years
  purpose: Psychomotor, memory, and driving-skill safety
  sourceCategory: research
  note: Compared with zolpidem and placebo; prolonged-release melatonin alone did not impair tested tasks.
  sourceId: reddit-pmid-18763235
- label: Threshold dose
  amount: 0.25 mg
  quantity: 0.25
  quantityMax: null
  unit: mg
  ingredient: Melatonin
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
  amount: 0.5–1 mg
  quantity: 0.5
  quantityMax: 1
  unit: mg
  ingredient: Melatonin
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
  amount: 1–3 mg
  quantity: 1
  quantityMax: 3
  unit: mg
  ingredient: Melatonin
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
  amount: 3–6 mg
  quantity: 3
  quantityMax: 6
  unit: mg
  ingredient: Melatonin
  formulation: Not established
  route: Oral
  frequency: Not established
  duration: Not established
  population: Not established
  purpose: PsychonautWiki dosage classification
  sourceCategory: community
  note: Band from the PsychonautWiki API snapshot built about 2026-06-23.
  sourceId: psychonautwiki
- label: Heavy dose band (6 mg and above)
  amount: 6 mg and above
  quantity: 6
  quantityMax: null
  unit: mg
  ingredient: Melatonin
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
- id: melatonin-elimination
  analyte: Immediate-release melatonin
  route: Oral
  formulation: Immediate-release; formulation-dependent
  population: Healthy human volunteers and sleep-disorder studies
  endpoint: elimination-half-life
  statistic: reported-range
  value: null
  low: 0.6
  high: 0.9
  unit: hours
  context: Reported human half-lives are approximately 36–54 minutes for conventional oral exposure; bioavailability and persistence vary substantially by formulation and person.
  sourceId: harpsoe2015
  modelEligible: false
- id: melatonin-prolonged-release
  analyte: Prolonged-release melatonin
  route: Oral
  formulation: 1.9 mg prolonged-release tablet
  population: Healthy male volunteers
  endpoint: elimination-half-life
  statistic: study-mean
  value: 2.22
  low: null
  high: null
  unit: hours
  context: A 2023 crossover PK study reported approximately 133 minutes after prolonged-release dosing; this was a PK comparison, not a sleep-efficacy trial.
  sourceId: dr-melatonin-s10
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
      min: 5
      max: 20
      unit: minutes
    - name: comeup
      basis: phase-duration
      min: 20
      max: 70
      unit: minutes
    - name: peak
      basis: phase-duration
      min: 1
      max: 2
      unit: hours
    - name: offset
      basis: phase-duration
      min: 2
      max: 3
      unit: hours
```

## Modifiers

```yaml
- label: Clock time and light
  effect: Timing changes the effect
  detail: Phase-response studies and DSWPD trials show that clock time, desired bedtime and light/dark scheduling are part of the intervention.
  sourceId: dr-melatonin-s15
  observationId: melatonin-elimination
  factorType: other
  direction: variable
- label: Smoking, caffeine and oestrogens
  effect: Exposure can increase or decrease
  detail: Caffeine and oral contraceptives increase exposure in human PK studies; smoking can increase clearance.
  sourceId: dr-melatonin-s57
  observationId: melatonin-elimination
  factorType: other
  direction: variable
```

## Effects

```yaml
- id: melatonin-sleepiness
  name: Sleepiness
  direction: Variable
  evidence: Human research
  description: Daytime sleepiness, headache and dizziness are among reported adverse effects; next-day impairment depends on dose, timing and formulation.
  sourceId: dr-melatonin-s39
  population: Adults and children in sleep-disorder trials
  exposure: 0.15–12 mg/day across trials
  conceptId: daytime-sleepiness
  instrument: null
  magnitude: null
  reportType: measured-assessment
  conflictingSourceIds: []
- id: melatonin-circadian-phase-shift
  name: Circadian phase shift
  direction: Variable
  evidence: Human research
  description: Timed melatonin can shift DLMO or sleep timing, but biomarker change does not guarantee better patient-important sleep outcomes.
  sourceId: dr-melatonin-s15
  population: Adults in circadian studies
  exposure: 0.5–3 mg at phase-specific clock times
  conceptId: wakefulness
  instrument: null
  magnitude: null
  reportType: measured-assessment
  conflictingSourceIds: []
```

## Outcomes

```yaml
- id: melatonin-dswpd-sleep-onset
  name: DSWPD sleep onset
  direction: Increased
  evidence: Human research
  description: In the 116-person randomized trial, actigraphic sleep onset advanced by 34 minutes versus placebo and more participants met a minimal clinically important improvement threshold; DLMO did not significantly differ in the measured subset.
  sourceId: sletten2018
  population: Adults with DSWPD
  exposure: 0.5 mg fast-release one hour before desired bedtime plus schedule
  conceptId: sleep
  instrument: Actigraphy and patient scales
  magnitude: 34 minutes earlier
  reportType: measured-assessment
  conflictingSourceIds: []
- id: melatonin-shift-work-daytime-sleep
  name: Shift-work daytime sleep
  direction: Increased
  evidence: Human research
  description: A Cochrane review found small increases in subsequent daytime and night-time sleep, with low-certainty evidence and no clear sleep-latency benefit.
  sourceId: dr-melatonin-s24
  population: Shift workers
  exposure: 1–10 mg after night shift
  conceptId: sleep
  instrument: Sleep measures
  magnitude: About +24 minutes daytime sleep
  reportType: measured-assessment
  conflictingSourceIds: []
- id: melatonin-chronic-adult-insomnia
  name: Chronic adult insomnia
  direction: Variable
  evidence: Human research
  description: Guidelines do not recommend fast-release melatonin as routine chronic-insomnia pharmacotherapy; prolonged-release products have modest, population-specific effects.
  sourceId: dr-melatonin-s26
  population: Adults with chronic insomnia
  exposure: Formulation-specific
  conceptId: sleep
  instrument: Guideline and meta-analysis
  magnitude: Small average effects
  reportType: measured-assessment
  conflictingSourceIds: []
- id: melatonin-memory-stress-18853147
  conceptId: episodic-memory
  name: Recognition memory under stress
  direction: Increased
  evidence: Human research
  description: A single 3 mg dose improved recognition accuracy for objects encoded during psychosocial stress but did not alter stress-hormone release or retrieval of previously learned words.
  sourceId: reddit-pmid-18853147
  population: 50 healthy young men
  exposure: 3 mg melatonin once
  instrument: Object-recognition memory after Trier Social Stress Test
  magnitude: p<0.001 for stress-encoded recognition accuracy
  reportType: measured-assessment
  conflictingSourceIds: []
```

## Mechanisms

```yaml
- title: Circadian signal
  description: Melatonin acts as a darkness-associated timing signal; receptor pharmacology does not substitute for appropriately timed light and sleep scheduling.
  sourceId: harpsoe2015
```

## Cautions

```yaml
- title: Next-day impairment
  description: Drowsiness, headache and dizziness occur in short trials; higher-dose studies found increased overall adverse effects, and product labels warn against driving until recovered.
  sourceId: dr-melatonin-s41
- title: Pregnancy and lactation
  description: Human safety evidence is inadequate; current product information advises avoidance or individualized decisions rather than a universal safety claim.
  sourceId: dr-melatonin-s59
- title: Product-content variability
  description: Analyses of commercial supplements found substantial label discordance and occasional serotonin contamination; pharmaceutical trial doses should not be assumed equivalent to arbitrary gummies or powders.
  sourceId: nccih-melatonin
- title: Shift-work recommendations are conditional and safety-sensitive
  description: The 2026 American Academy of Sleep Medicine guideline conditionally suggests melatonin for daytime sleep disturbance or naps after night shifts, while warning that temporary sleepiness and reduced cognitive performance can increase driving or workplace risk until resolved.
  sourceId: pmid-42925456
```

## Claims

```yaml
- id: melatonin-claim-1
  assertion: Strategically timed low-dose immediate-release melatonin can help selected DSWPD patients.
  relation: evidence-boundary
  participants:
    - entityId: substance:melatonin
      role: intervention
    - entityId: tag:sleep
      role: reported-context
  context: Direct randomized evidence exists but the recommendation is weak and context-specific.
  sourceIds:
    - dr-melatonin-s17
    - sletten2018
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Do not generalize one 0.5 mg regimen to all users or insomnia diagnoses.
- id: melatonin-claim-2
  assertion: Melatonin is a universal chronic-insomnia or cognitive-enhancement drug.
  relation: evidence-boundary
  participants:
    - entityId: substance:melatonin
      role: intervention
    - entityId: tag:sleep
      role: reported-context
  context: The eligible evidence does not support this broad claim.
  sourceIds:
    - dr-melatonin-s26
    - dr-melatonin-s28
    - dr-melatonin-s43
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Formulation, population and endpoint heterogeneity remain substantial.
- id: melatonin-claim-memory-stress-18853147
  assertion: A single 3 mg melatonin dose improved recognition memory for material encoded during acute psychosocial stress in healthy men.
  relation: supported-by
  participants:
    - entityId: substance:melatonin
      role: intervention
    - entityId: tag:episodic-memory
      role: outcome
  context: Randomized placebo-controlled laboratory stress study.
  sourceIds:
    - reddit-pmid-18853147
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Acute stress paradigm; no stress-hormone suppression was observed.
- id: melatonin-claim-pr-safety-18763235
  assertion: Two milligrams of prolonged-release melatonin did not impair psychomotor or driving performance in healthy older adults, but amplified zolpidem impairment when combined.
  relation: supported-by
  participants:
    - entityId: substance:melatonin
      role: intervention
    - entityId: tag:cognitive-performance
      role: outcome
  context: Randomized four-way crossover study.
  sourceIds:
    - reddit-pmid-18763235
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Small healthy-subject crossover; not a clinical interaction trial.
```

## Interactions

```yaml
- id: melatonin-fluvoxamine
  name: Fluvoxamine
  otherSlug: null
  summary: The EU label reports a large exposure increase and advises avoiding coadministration.
  sourceId: dr-melatonin-s59
  context: Label-described interaction
  conflictingSourceIds: []
- id: melatonin-caffeine
  name: Caffeine
  otherSlug: caffeine
  summary: A human interaction study found increased melatonin exposure with repeated caffeine dosing; this is a PK finding, not proof of a universal clinical effect.
  sourceId: dr-melatonin-s57
  context: Human PK interaction
  conflictingSourceIds: []
- id: melatonin-smoking
  name: Tobacco smoke
  otherSlug: null
  summary: Smoking altered exogenous melatonin exposure in a small human study.
  sourceId: dr-melatonin-s61
  context: Human PK context
  conflictingSourceIds: []
```

## Experience links

```yaml
[]
```

## References

```yaml
- id: pmid-42925456
  title: "Management of shift work disorder: an American Academy of Sleep Medicine clinical practice guideline."
  authors: Wright KP, Abbott SM, Ashbrook L, Drake CL, Flynn-Evans E, Framnes-DeBoer S, Kazmi U, Keeler K, McCall C, Morgan R, Shaffer-Hodgeman T, Trotti LM.
  year: 2026
  pmid: "42925456"
  doi: 10.1007/s44470-026-00084-w
  url: https://pubmed.ncbi.nlm.nih.gov/42925456/
  kind: Clinical practice guideline
  insight: For adults with shift-work disorder and daytime sleep disturbance or insomnia after night work, the AASM conditionally suggests melatonin; evidence certainty ranges from very low to low and the guideline warns about temporary sleepiness and reduced cognitive performance.
  limitation: This is a guideline recommendation for a defined clinical disorder, not a universal sleep recommendation; the abstract-only record does not provide the underlying trial-level estimates.
  funding: Full funding and conflict disclosures were not assessed from the abstract-only record.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Full conflict disclosures were not assessed from the abstract-only record.
  conflictOfInterestStatus: not-assessed
- id: harpsoe2015
  title: "Clinical pharmacokinetics of melatonin: a systematic review."
  authors: Harpsøe NG, Andersen LPH, Gögenur I, Rosenberg J. 2015.
  year: 2015
  url: https://pubmed.ncbi.nlm.nih.gov/26008214/
  pmid: "26008214"
  kind: PubMed-indexed study
  insight: Source R1 supports the section-specific finding cited in this article.
  limitation: Study-specific population, formulation, design and disclosure limits remain as described in the report.
  funding: "exact funding not established from retrieved record. Sponsor: no commercial study sponsor identified from retrieved metadata. COI: unknown from accessible record. Conflict status: unknown disclosure."
  sponsorshipStatus: not-assessed
  conflictsOfInterest: "unknown from accessible record. Conflict status: unknown disclosure."
  conflictOfInterestStatus: not-assessed
- id: dr-melatonin-s3
  title: Pharmacokinetics of oral and intravenous melatonin in healthy volunteers.
  authors: Andersen LPH, Werner MU, Rosenkilde MM, et al. 2016.
  year: 2016
  url: https://pubmed.ncbi.nlm.nih.gov/26893170/
  pmid: "26893170"
  kind: PubMed-indexed study
  insight: Source R2 supports the section-specific finding cited in this article.
  limitation: Study-specific population, formulation, design and disclosure limits remain as described in the report.
  funding: "exact funding not established in retrieved material. Sponsor: academic/noncommercial status not fully verified. COI: unknown. Conflict status: unknown disclosure."
  sponsorshipStatus: not-assessed
  conflictsOfInterest: "unknown. Conflict status: unknown disclosure."
  conflictOfInterestStatus: not-assessed
- id: dr-melatonin-s6
  title: The absolute bioavailability of oral melatonin.
  authors: DeMuro RL, Nafziger AN, Blask DE, Menhinick AM, Bertino JS Jr. 2000.
  year: 2000
  url: https://pubmed.ncbi.nlm.nih.gov/10883420/
  pmid: "10883420"
  kind: PubMed-indexed study
  insight: Source R3 supports the section-specific finding cited in this article.
  limitation: Study-specific population, formulation, design and disclosure limits remain as described in the report.
  funding: "PubMed indexes non-U.S. governmental research support; exact award/sponsor not recovered. Sponsor: no melatonin-product sponsor established. COI: unknown. Conflict status: unknown disclosure."
  sponsorshipStatus: not-assessed
  conflictsOfInterest: "unknown. Conflict status: unknown disclosure."
  conflictOfInterestStatus: not-assessed
- id: dr-melatonin-s8
  title: Bioavailability of melatonin in humans after day-time administration of D7 melatonin.
  authors: Fourtillan JB, Brisson AM, Fourtillan M, Ingrand I, Decourt JP, Girault J. 2000.
  year: 2000
  url: https://pubmed.ncbi.nlm.nih.gov/11038434/
  pmid: "11038434"
  kind: PubMed-indexed study
  insight: Source R4 supports the section-specific finding cited in this article.
  limitation: Study-specific population, formulation, design and disclosure limits remain as described in the report.
  funding: "unknown. Sponsor: unknown. COI: unknown. Conflict status: unknown disclosure."
  sponsorshipStatus: not-assessed
  conflictsOfInterest: "unknown. Conflict status: unknown disclosure."
  conflictOfInterestStatus: not-assessed
- id: dr-melatonin-s10
  title: Bioavailability of Melatonin after Administration of an Oral Prolonged-Release Tablet and an Immediate-Release Sublingual Spray in Healthy Male Volunteers.
  authors: Ait Abdellah S, Raverot V, Gal C, Guinobert I, Bardot V, Blondeau C, Claustrat B. 2023.
  year: 2023
  url: https://pubmed.ncbi.nlm.nih.gov/37438493/
  pmid: "37438493"
  kind: PubMed-indexed study
  insight: Source R5 supports the section-specific finding cited in this article.
  limitation: Study-specific population, formulation, design and disclosure limits remain as described in the report.
  funding: "PiLeJe Laboratoire. Sponsor status: direct commercial/product sponsor; tested Chronobiane products. COI: individual-author disclosure not fully recovered. Conflict status: industry-sponsored; author-level disclosure incomplete."
  sponsorshipStatus: not-assessed
  conflictsOfInterest: "individual-author disclosure not fully recovered. Conflict status: industry-sponsored; author-level disclosure incomplete."
  conflictOfInterestStatus: not-assessed
- id: dr-melatonin-s13
  title: "Pharmacokinetics of exogenous melatonin in relation to formulation, and effects on sleep: A systematic review."
  authors: Moroni I, Garcia-Bennett A, Chapman J, et al. 2021.
  year: 2021
  url: https://pubmed.ncbi.nlm.nih.gov/33549911/
  pmid: "33549911"
  kind: PubMed-indexed study
  insight: Source R6 supports the section-specific finding cited in this article.
  limitation: Study-specific population, formulation, design and disclosure limits remain as described in the report.
  funding: "unknown. Sponsor: no commercial review sponsor established. COI: unknown. Conflict status: unknown disclosure."
  sponsorshipStatus: not-assessed
  conflictsOfInterest: "unknown. Conflict status: unknown disclosure."
  conflictOfInterestStatus: not-assessed
- id: dr-melatonin-s15
  title: "Human phase response curves to three days of daily melatonin: 0.5 mg versus 3.0 mg."
  authors: Burgess HJ, Revell VL, Molina TA, Eastman CI. 2010.
  year: 2010
  url: https://pubmed.ncbi.nlm.nih.gov/20410229/
  pmid: "20410229"
  kind: PubMed-indexed study
  insight: Source R7 supports the section-specific finding cited in this article.
  limitation: Study-specific population, formulation, design and disclosure limits remain as described in the report.
  funding: "NIH and non-U.S. governmental support indexed; exact awards not recovered. Sponsor: no melatonin manufacturer identified. COI: not established. Conflict status: public/academic funding indicated; COI disclosure unknown."
  sponsorshipStatus: not-assessed
  conflictsOfInterest: "not established. Conflict status: public/academic funding indicated; COI disclosure unknown."
  conflictOfInterestStatus: not-assessed
- id: dr-melatonin-s17
  title: Clinical Practice Guideline for the Treatment of Intrinsic Circadian Rhythm Sleep-Wake Disorders.
  authors: Auger RR, Burgess HJ, Emens JS, Deriy LV, Thomas SM, Sharkey KM. 2015.
  year: 2015
  url: https://pubmed.ncbi.nlm.nih.gov/26414986/
  pmid: "26414986"
  kind: PubMed-indexed study
  insight: Source R8 supports the section-specific finding cited in this article.
  limitation: Study-specific population, formulation, design and disclosure limits remain as described in the report.
  funding: "sponsor: American Academy of Sleep Medicine guideline program; PubMed indexes non-U.S. governmental support. COI: complete panel disclosure not extracted. Conflict status: guideline; author-level disclosure incomplete."
  sponsorshipStatus: not-assessed
  conflictsOfInterest: "complete panel disclosure not extracted. Conflict status: guideline; author-level disclosure incomplete."
  conflictOfInterestStatus: not-assessed
- id: sletten2018
  title: "Efficacy of melatonin with behavioural sleep-wake scheduling for delayed sleep-wake phase disorder: A double-blind, randomised clinical trial."
  authors: Sletten TL, Magee M, Murray JM, et al. 2018.
  year: 2018
  url: https://pubmed.ncbi.nlm.nih.gov/29912983/
  pmid: "29912983"
  kind: PubMed-indexed study
  insight: Source R9 supports the section-specific finding cited in this article.
  limitation: Study-specific population, formulation, design and disclosure limits remain as described in the report.
  funding: "NHMRC grant 1031513 and Australasian Sleep Trials Network; Philips Respironics provided recruitment-related support. Funders reported no role in design/analysis/reporting. Sponsor status: principally public/academic. COI: disclosed Philips support/equipment, assay royalties, a Re-Time shareholding and advisory/medico-legal activities. Conflict status: mixed disclosed non-melatonin commercial ties; no direct melatonin-manufacturer sponsorship identified."
  sponsorshipStatus: not-assessed
  conflictsOfInterest: "disclosed Philips support/equipment, assay royalties, a Re-Time shareholding and advisory/medico-legal activities. Conflict status: mixed disclosed non-melatonin commercial ties; no direct melatonin-manufacturer sponsorship identified."
  conflictOfInterestStatus: not-assessed
- id: dr-melatonin-s22
  title: Melatonin for preventing and treating jet lag.
  authors: Herxheimer A, Petrie KJ. 2001/2002.
  year: 2001
  url: https://pubmed.ncbi.nlm.nih.gov/12076414/
  pmid: "12076414"
  kind: PubMed-indexed study
  insight: Source R10 supports the section-specific finding cited in this article.
  limitation: Study-specific population, formulation, design and disclosure limits remain as described in the report.
  funding: "unknown. Sponsor: no commercial sponsor identified. COI: unknown. Conflict status: unknown disclosure; old evidence base."
  sponsorshipStatus: not-assessed
  conflictsOfInterest: "unknown. Conflict status: unknown disclosure; old evidence base."
  conflictOfInterestStatus: not-assessed
- id: dr-melatonin-s24
  title: Pharmacological interventions for sleepiness and sleep disturbances caused by shift work.
  authors: Liira J, Verbeek JH, Costa G, et al. 2014.
  year: 2014
  url: https://pubmed.ncbi.nlm.nih.gov/25113164/
  pmid: "25113164"
  kind: PubMed-indexed study
  insight: Source R11 supports the section-specific finding cited in this article.
  limitation: Study-specific population, formulation, design and disclosure limits remain as described in the report.
  funding: "non-U.S. governmental support indexed. Sponsor: no commercial review sponsor identified. COI: exact disclosure not extracted. Conflict status: noncommercial funding indicated; COI disclosure incomplete."
  sponsorshipStatus: not-assessed
  conflictsOfInterest: "exact disclosure not extracted. Conflict status: noncommercial funding indicated; COI disclosure incomplete."
  conflictOfInterestStatus: not-assessed
- id: dr-melatonin-s26
  title: Clinical Practice Guideline for the Pharmacologic Treatment of Chronic Insomnia in Adults.
  authors: Sateia MJ, Buysse DJ, Krystal AD, Neubauer DN, Heald JL. 2017.
  year: 2017
  url: https://pubmed.ncbi.nlm.nih.gov/27998379/
  pmid: "27998379"
  kind: PubMed-indexed study
  insight: Source R12 supports the section-specific finding cited in this article.
  limitation: Study-specific population, formulation, design and disclosure limits remain as described in the report.
  funding: "sponsor: American Academy of Sleep Medicine. COI: guideline disclosures exist but were not completely extracted. Conflict status: guideline; disclosure incomplete in this compact extraction."
  sponsorshipStatus: not-assessed
  conflictsOfInterest: "guideline disclosures exist but were not completely extracted. Conflict status: guideline; disclosure incomplete in this compact extraction."
  conflictOfInterestStatus: not-assessed
- id: dr-melatonin-s28
  title: "The European Insomnia Guideline: An update on the diagnosis and treatment of insomnia 2023."
  authors: Riemann D, Espie CA, Altena E, et al. 2023.
  year: 2023
  url: https://pubmed.ncbi.nlm.nih.gov/38016484/
  pmid: "38016484"
  kind: PubMed-indexed study
  insight: Source R13 supports the section-specific finding cited in this article.
  limitation: Study-specific population, formulation, design and disclosure limits remain as described in the report.
  funding: "non-U.S. government support indexed. Sponsor: European sleep-medicine guideline effort; no commercial sponsor established. COI: full multi-author disclosure not extracted. Conflict status: disclosure incomplete."
  sponsorshipStatus: not-assessed
  conflictsOfInterest: "full multi-author disclosure not extracted. Conflict status: disclosure incomplete."
  conflictOfInterestStatus: not-assessed
- id: dr-melatonin-s30
  title: EPAR / Product information.
  authors: European Medicines Agency. Current.
  year: 2026
  url: https://www.ema.europa.eu/en/medicines/human/EPAR/circadin
  kind: Regulatory or registry source
  insight: Source R14 supports the section-specific finding cited in this article.
  limitation: Study-specific population, formulation, design and disclosure limits remain as described in the report.
  funding: "regulator document, not a research grant. Product sponsor/MAH: RAD Neurim Pharmaceuticals EEC SARL. COI: agency regulatory process; individual COI not applicable as trial disclosure. Conflict status: official regulator source; underlying dossier manufacturer-submitted."
  sponsorshipStatus: not-assessed
  conflictsOfInterest: "agency regulatory process; individual COI not applicable as trial disclosure. Conflict status: official regulator source; underlying dossier manufacturer-submitted."
  conflictOfInterestStatus: not-assessed
- id: dr-melatonin-s32
  title: "Efficacy of melatonin and ramelteon for the acute and long-term management of insomnia disorder in adults: A systematic review and meta-analysis."
  authors: Maruani J, Reynaud E, Chambe J, Palagini L, Bourgin P, Geoffroy PA. 2023.
  year: 2023
  url: https://pubmed.ncbi.nlm.nih.gov/37434463/
  pmid: "37434463"
  kind: PubMed-indexed study
  insight: Source R15 supports the section-specific finding cited in this article.
  limitation: Study-specific population, formulation, design and disclosure limits remain as described in the report.
  funding: "not recovered. Sponsor: no commercial meta-analysis sponsor established. COI: unknown. Conflict status: unknown disclosure."
  sponsorshipStatus: not-assessed
  conflictsOfInterest: "unknown. Conflict status: unknown disclosure."
  conflictOfInterestStatus: not-assessed
- id: dr-melatonin-s34
  title: Efficacy and Safety of Pediatric Prolonged-Release Melatonin for Insomnia in Children With Autism Spectrum Disorder.
  authors: Gringras P, Nir T, Breddy J, Frydman-Marom A, Findling RL. 2017.
  year: 2017
  url: https://pubmed.ncbi.nlm.nih.gov/29096777/
  pmid: "29096777"
  kind: PubMed-indexed study
  insight: Source R16 supports the section-specific finding cited in this article.
  limitation: Study-specific population, formulation, design and disclosure limits remain as described in the report.
  funding: "sponsor: Neurim Pharmaceuticals Ltd., direct product manufacturer/developer sponsor. COI: individual publication disclosures not completely retrieved; several authors closely associated with product development. Conflict status: direct industry sponsorship."
  sponsorshipStatus: not-assessed
  conflictsOfInterest: "individual publication disclosures not completely retrieved; several authors closely associated with product development. Conflict status: direct industry sponsorship."
  conflictOfInterestStatus: not-assessed
- id: dr-melatonin-s37
  title: Sleep, Growth, and Puberty After 2 Years of Prolonged-Release Melatonin in Children With Autism Spectrum Disorder.
  authors: Malow BA, Findling RL, Schroder CM, et al. 2021.
  year: 2021
  url: https://pubmed.ncbi.nlm.nih.gov/31982581/
  pmid: "31982581"
  kind: PubMed-indexed study
  insight: Source R17 supports the section-specific finding cited in this article.
  limitation: Study-specific population, formulation, design and disclosure limits remain as described in the report.
  funding: "same Neurim-sponsored development program; PubMed also indexes NIH support. Sponsor status: direct industry-sponsored extension. COI: full author-level disclosure not extracted. Conflict status: industry-associated; long-term phase predominantly open-label."
  sponsorshipStatus: not-assessed
  conflictsOfInterest: "full author-level disclosure not extracted. Conflict status: industry-associated; long-term phase predominantly open-label."
  conflictOfInterestStatus: not-assessed
- id: dr-melatonin-s39
  title: "Adverse Events Associated with Melatonin for the Treatment of Primary or Secondary Sleep Disorders: A Systematic Review."
  authors: Besag FMC, Vasey MJ, Lao KSJ, Wong ICK. 2019.
  year: 2019
  url: https://pubmed.ncbi.nlm.nih.gov/31722088/
  pmid: "31722088"
  kind: PubMed-indexed study
  insight: Source R18 supports the section-specific finding cited in this article.
  limitation: Study-specific population, formulation, design and disclosure limits remain as described in the report.
  funding: "unknown. Sponsor: no commercial review sponsor established. COI: unknown. Conflict status: unknown disclosure."
  sponsorshipStatus: not-assessed
  conflictsOfInterest: "unknown. Conflict status: unknown disclosure."
  conflictOfInterestStatus: not-assessed
- id: dr-melatonin-s41
  title: "Safety of higher doses of melatonin in adults: A systematic review and meta-analysis."
  authors: Menczel Schrire Z, Phillips CL, Chapman JL, et al. 2022.
  year: 2022
  url: https://pubmed.ncbi.nlm.nih.gov/34923676/
  pmid: "34923676"
  kind: PubMed-indexed study
  insight: Source R19 supports the section-specific finding cited in this article.
  limitation: Study-specific population, formulation, design and disclosure limits remain as described in the report.
  funding: "unknown. Sponsor: no commercial meta-analysis sponsor established. COI: unknown. Conflict status: unknown disclosure; AE reporting frequently incomplete."
  sponsorshipStatus: not-assessed
  conflictsOfInterest: "unknown. Conflict status: unknown disclosure; AE reporting frequently incomplete."
  conflictOfInterestStatus: not-assessed
- id: dr-melatonin-s43
  title: Neurocognitive effects of melatonin treatment in healthy adults and individuals with Alzheimer's disease and insomnia.
  authors: Sumsuzzman DM, Choi J, Jin Y, Hong Y. 2021.
  year: 2021
  url: https://pubmed.ncbi.nlm.nih.gov/33957167/
  pmid: "33957167"
  kind: PubMed-indexed study
  insight: Source R20 supports the section-specific finding cited in this article.
  limitation: Study-specific population, formulation, design and disclosure limits remain as described in the report.
  funding: "non-U.S. government support indexed. Sponsor: no commercial sponsor identified. COI: unknown. Conflict status: disclosure incomplete."
  sponsorshipStatus: not-assessed
  conflictsOfInterest: "unknown. Conflict status: disclosure incomplete."
  conflictOfInterestStatus: not-assessed
- id: dr-melatonin-s45
  title: "The Therapeutic Effect of Exogenous Melatonin on Depressive Symptoms: A Systematic Review and Meta-Analysis."
  authors: Li C, Ma D, Li M, et al. 2022.
  year: 2022
  url: https://pubmed.ncbi.nlm.nih.gov/35370838/
  pmid: "35370838"
  kind: PubMed-indexed study
  insight: Source R21 supports the section-specific finding cited in this article.
  limitation: Study-specific population, formulation, design and disclosure limits remain as described in the report.
  funding: "exact funding not extracted. Sponsor: no commercial sponsor identified. COI: authors declared no commercial/financial relationships constituting a potential conflict. Conflict status: declared no commercial/financial COI."
  sponsorshipStatus: not-assessed
  conflictsOfInterest: "authors declared no commercial/financial relationships constituting a potential conflict. Conflict status: declared no commercial/financial COI."
  conflictOfInterestStatus: not-assessed
- id: dr-melatonin-s47
  title: Melatonin for preoperative and postoperative anxiety in adults.
  authors: Hansen/Madsen and colleagues.
  year: 2026
  url: https://doi.org/10.1002/14651858.CD009861.pub3
  kind: Research source
  insight: Source R22 supports the section-specific finding cited in this article.
  limitation: Study-specific population, formulation, design and disclosure limits remain as described in the report.
  funding: "unknown. Sponsor: no commercial review sponsor established. COI: unknown. Conflict status: unknown disclosure."
  sponsorshipStatus: not-assessed
  conflictsOfInterest: "unknown. Conflict status: unknown disclosure."
  conflictOfInterestStatus: not-assessed
- id: dr-melatonin-s48
  title: Efficacy and effectiveness of melatonin for the management of musculoskeletal pain.
  authors: Wu K, Ho TH, Beckenkamp PR, et al. 2026.
  year: 2026
  url: https://pubmed.ncbi.nlm.nih.gov/42378431/
  pmid: "42378431"
  kind: PubMed-indexed study
  insight: Source R23 supports the section-specific finding cited in this article.
  limitation: Study-specific population, formulation, design and disclosure limits remain as described in the report.
  funding: "not recovered. Sponsor: no commercial review sponsor established. COI: not recovered. Conflict status: unknown disclosure."
  sponsorshipStatus: not-assessed
  conflictsOfInterest: "not recovered. Conflict status: unknown disclosure."
  conflictOfInterestStatus: not-assessed
- id: dr-melatonin-s50
  title: "Anti-inflammatory effects of melatonin: A systematic review and meta-analysis of clinical trials."
  authors: Cho JH, Bhutani S, Kim CH, Irwin MR. 2021.
  year: 2021
  url: https://pubmed.ncbi.nlm.nih.gov/33581247/
  pmid: "33581247"
  kind: PubMed-indexed study
  insight: Source R24 supports the section-specific finding cited in this article.
  limitation: Study-specific population, formulation, design and disclosure limits remain as described in the report.
  funding: "NIH extramural support indexed. Sponsor: no commercial meta-analysis sponsor identified. COI: exact disclosure not retrieved. Conflict status: public funding indicated; disclosure incomplete."
  sponsorshipStatus: not-assessed
  conflictsOfInterest: "exact disclosure not retrieved. Conflict status: public funding indicated; disclosure incomplete."
  conflictOfInterestStatus: not-assessed
- id: dr-melatonin-s52
  title: "Effects of melatonin supplementation on oxidative stress: a systematic review and meta-analysis."
  authors: Ghorbaninejad P, et al. 2020.
  year: 2020
  url: https://pubmed.ncbi.nlm.nih.gov/33185572/
  pmid: "33185572"
  kind: PubMed-indexed study
  insight: Source R25 supports the section-specific finding cited in this article.
  limitation: Study-specific population, formulation, design and disclosure limits remain as described in the report.
  funding: "unknown. Sponsor: unknown. COI: unknown. Conflict status: unknown disclosure."
  sponsorshipStatus: not-assessed
  conflictsOfInterest: "unknown. Conflict status: unknown disclosure."
  conflictOfInterestStatus: not-assessed
- id: dr-melatonin-s53
  title: Acute melatonin administration in humans impairs glucose tolerance in both the morning and evening.
  authors: Rubio-Sastre P, Scheer FAJL, Gómez-Abellán P, Madrid JA, Garaulet M. 2014.
  year: 2014
  url: https://pubmed.ncbi.nlm.nih.gov/25197811/
  pmid: "25197811"
  kind: PubMed-indexed study
  insight: Source R26 supports the section-specific finding cited in this article.
  limitation: Study-specific population, formulation, design and disclosure limits remain as described in the report.
  funding: "NIH and non-U.S. government support indexed. Sponsor: no commercial sponsor identified. COI: unknown. Conflict status: public/academic funding indicated; disclosure incomplete."
  sponsorshipStatus: not-assessed
  conflictsOfInterest: "unknown. Conflict status: public/academic funding indicated; disclosure incomplete."
  conflictOfInterestStatus: not-assessed
- id: dr-melatonin-s55
  title: Controlled-release oral melatonin supplementation for hypertension and nocturnal hypertension.
  authors: Lee EKP, Poon P, Yu CP, Lee VWY, Chung VCH, Wong SYS. 2022.
  year: 2022
  url: https://pubmed.ncbi.nlm.nih.gov/35388609/
  pmid: "35388609"
  kind: PubMed-indexed study
  insight: Source R27 supports the section-specific finding cited in this article.
  limitation: Study-specific population, formulation, design and disclosure limits remain as described in the report.
  funding: "exact funding not extracted. Sponsor: no commercial sponsor identified. COI: authors stated no conflicts. Conflict status: declared no COI."
  sponsorshipStatus: not-assessed
  conflictsOfInterest: "authors stated no conflicts. Conflict status: declared no COI."
  conflictOfInterestStatus: not-assessed
- id: dr-melatonin-s57
  title: Effects of caffeine intake on the pharmacokinetics of melatonin.
  authors: Härtter S, Nordmark A, Rose DM, et al. 2003.
  year: 2003
  url: https://pubmed.ncbi.nlm.nih.gov/14616429/
  pmid: "14616429"
  kind: PubMed-indexed study
  insight: Source R28 supports the section-specific finding cited in this article.
  limitation: Study-specific population, formulation, design and disclosure limits remain as described in the report.
  funding: "unknown. Sponsor: unknown. COI: unknown. Conflict status: unknown disclosure."
  sponsorshipStatus: not-assessed
  conflictsOfInterest: "unknown. Conflict status: unknown disclosure."
  conflictOfInterestStatus: not-assessed
- id: dr-melatonin-s59
  title: EPAR Product Information.
  authors: European Medicines Agency. Current product information.
  year: 2026
  url: https://www.ema.europa.eu/en/medicines/human/EPAR/slenyto
  kind: Regulatory or registry source
  insight: Source R29 supports the section-specific finding cited in this article.
  limitation: Study-specific population, formulation, design and disclosure limits remain as described in the report.
  funding: "regulatory document. Product sponsor/MAH: RAD Neurim Pharmaceuticals EEC SARL/Neurim program. COI: agency process, not study-author disclosure. Conflict status: official regulatory source; underlying product data manufacturer-submitted."
  sponsorshipStatus: not-assessed
  conflictsOfInterest: "agency process, not study-author disclosure. Conflict status: official regulatory source; underlying product data manufacturer-submitted."
  conflictOfInterestStatus: not-assessed
- id: dr-melatonin-r35-35
  title: Effects of caffeine intake on the pharmacokinetics of melatonin.
  authors: Härtter S, Nordmark A, Rose DM, et al. 2003.
  year: 2003
  url: https://pubmed.ncbi.nlm.nih.gov/14616429/
  pmid: "14616429"
  kind: PubMed-indexed study
  insight: Source R30 supports the section-specific finding cited in this article.
  limitation: Study-specific population, formulation, design and disclosure limits remain as described in the report.
  funding: "COI: unknown. Conflict status: unknown disclosure."
  sponsorshipStatus: not-assessed
  conflictsOfInterest: "unknown. Conflict status: unknown disclosure."
  conflictOfInterestStatus: not-assessed
- id: dr-melatonin-s61
  title: Influence of cigarette smoking on melatonin levels in man.
  authors: Ursing C, Wikner J, Brismar K, Röjdmark S. 2005.
  year: 2005
  url: https://pubmed.ncbi.nlm.nih.gov/15824912/
  pmid: "15824912"
  kind: PubMed-indexed study
  insight: Source R31 supports the section-specific finding cited in this article.
  limitation: Study-specific population, formulation, design and disclosure limits remain as described in the report.
  funding: "non-U.S. governmental support indexed. Sponsor: no commercial sponsor identified. COI: unknown. Conflict status: public/noncommercial support indicated; disclosure incomplete."
  sponsorshipStatus: not-assessed
  conflictsOfInterest: "unknown. Conflict status: public/noncommercial support indicated; disclosure incomplete."
  conflictOfInterestStatus: not-assessed
- id: dr-melatonin-s63
  title: The effect of oral contraceptives on the pharmacokinetics of melatonin.
  authors: Hilli J, Korhonen T, Turpeinen M, Hokkanen J, Mattila S, Laine K. 2008.
  year: 2008
  url: https://pubmed.ncbi.nlm.nih.gov/18490497/
  pmid: "18490497"
  kind: PubMed-indexed study
  insight: Source R32 supports the section-specific finding cited in this article.
  limitation: Study-specific population, formulation, design and disclosure limits remain as described in the report.
  funding: "unknown. Sponsor: unknown. COI: unknown. Conflict status: unknown disclosure."
  sponsorshipStatus: not-assessed
  conflictsOfInterest: "unknown. Conflict status: unknown disclosure."
  conflictOfInterestStatus: not-assessed
- id: dr-melatonin-s36
  title: Efficacy and Safety of Circadin in the Treatment of Sleep Disturbances in Children With Neurodevelopment Disabilities.
  authors: Neurim Pharmaceuticals Ltd. NCT01906866.
  year: 2026
  url: https://clinicaltrials.gov/study/NCT01906866
  kind: Regulatory or registry source
  insight: Source R33 supports the section-specific finding cited in this article.
  limitation: Registry or search evidence does not establish efficacy without posted results.
  funding: "sponsor: Neurim Pharmaceuticals Ltd. COI: registry sponsorship explicit; investigator financial disclosures not comprehensively provided. Conflict status: direct manufacturer sponsorship."
  sponsorshipStatus: not-assessed
  conflictsOfInterest: "registry sponsorship explicit; investigator financial disclosures not comprehensively provided. Conflict status: direct manufacturer sponsorship."
  conflictOfInterestStatus: not-assessed
- id: nccih-melatonin
  title: "Melatonin: What You Need To Know."
  authors: National Center for Complementary and Integrative Health, NIH. Updated 2024.
  year: 2024
  url: https://www.nccih.nih.gov/health/melatonin-what-you-need-to-know
  kind: Research source
  insight: Source R34 supports the section-specific finding cited in this article.
  limitation: Study-specific population, formulation, design and disclosure limits remain as described in the report.
  funding: "sponsor: U.S. federal government. COI: not applicable as NIH evidence/safety fact sheet; product mention is not endorsement. Conflict status: official noncommercial public-health source."
  sponsorshipStatus: not-assessed
  conflictsOfInterest: "not applicable as NIH evidence/safety fact sheet; product mention is not endorsement. Conflict status: official noncommercial public-health source."
  conflictOfInterestStatus: not-assessed
- id: dr-melatonin-r35
  title: Efficacy and Safety of Circadin in the Treatment of Sleep Disturbances in Children With Neurodevelopment Disabilities.
  authors: Neurim Pharmaceuticals Ltd. NCT01906866.
  year: 2026
  url: https://clinicaltrials.gov/study/NCT01906866
  kind: Regulatory or registry source
  insight: Source R35 supports the section-specific finding cited in this article.
  limitation: Registry or search evidence does not establish efficacy without posted results.
  funding: Not assessed in the returned source metadata.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in the returned source metadata.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-18853147
  title: Melatonin improves memory acquisition under stress independent of stress hormone release.
  authors: Ulrike Rimmele, Maria Spillmann, Carmen Bärtschi, Oliver T Wolf, Cora S Weber, Ulrike Ehlert, Petra H Wirtz
  year: 2009
  url: https://pubmed.ncbi.nlm.nih.gov/18853147/
  kind: PubMed publication
  insight: "RATIONALE: Animal studies suggest that the pineal hormone melatonin influences basal stress hormone levels and dampens hormone reactivity to stress."
  limitation: PubMed abstract retrieved with the PubMed connector on 2026-11-01; full text was not available for this citation.
  pmid: "18853147"
  doi: 10.1007/s00213-008-1344-z
  funding: Not reported in the retrieved PubMed record.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not reported in the retrieved PubMed record.
  conflictOfInterestStatus: not-assessed
- id: reddit-link-2859927d8d1d
  title: Effects of melatonin on human mood and performance
  authors: Not established
  year: 2026
  url: https://www.sciencedirect.com/science/article/pii/0006899384902907
  kind: Reddit index publication link
  insight: The Reddit index links this non-PubMed source; it is retained as a discovery lead.
  limitation: No PubMed abstract was retrieved for this non-PubMed link; full-text methods, funding, and conflicts remain unassessed.
  funding: Not reported in the retrieved PubMed record.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not reported in the retrieved PubMed record.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-18763235
  title: Effects of prolonged-release melatonin, zolpidem, and their combination on psychomotor functions, memory recall, and driving skills in healthy middle aged and elderly volunteers.
  authors: S Otmani, A Demazières, C Staner, N Jacob, T Nir, N Zisapel, L Staner
  year: 2008
  url: https://pubmed.ncbi.nlm.nih.gov/18763235/
  kind: PubMed publication
  insight: "BACKGROUND: Melatonin is an important regulator of the sleep-wake cycle."
  limitation: PubMed abstract retrieved with the PubMed connector on 2026-11-01; full text was not available for this citation.
  pmid: "18763235"
  doi: 10.1002/hup.980
  funding: Not reported in the retrieved PubMed record.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not reported in the retrieved PubMed record.
  conflictOfInterestStatus: not-assessed
- id: psychonautwiki
  title: "Melatonin: PsychonautWiki dose and duration data"
  authors: PsychonautWiki contributors
  year: 2026
  url: https://psychonautwiki.org/wiki/Melatonin
  kind: Community wiki data · CC BY 4.0
  insight: Source of this page's community dose bands and subjective duration ranges, from the PsychonautWiki API snapshot built about 2026-06-23 and retrieved 2026-11-06. The structured data is used under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/); BHWiki normalized unit symbols and route names.
  limitation: "PsychonautWiki states: \"PW's dosage information is gathered from users and resources for educational purposes only. It is not a recommendation and should be verified with other sources for accuracy.\" Its dose and duration values carry no per-value citations."
```

## Legal

```yaml
- jurisdiction: United States
  activity: Dietary-supplement marketing
  status: Melatonin is marketed as a dietary supplement with less stringent premarket regulation than prescription medicines; product quality is variable.
  sourceUrl: https://www.nccih.nih.gov/health/melatonin-what-you-need-to-know
  asOf: 2026-10-11
- jurisdiction: European Union
  activity: Circadin and Slenyto prescription products
  status: Regulated medicinal products with formulation-specific indications and instructions.
  sourceUrl: https://www.ema.europa.eu/en/medicines/human/EPAR/slenyto
  asOf: 2026-10-11
```

