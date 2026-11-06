---
slug: creatine
name: Creatine
subtitle: An energy reserve, studied over time.
aliases:
  - Creatine monohydrate (supplement form)
formula: C4H9N3O2
molecularWeight: 131.13 g/mol
pubchemCid: 586
smiles: CN(CC(=O)O)C(=N)N
category: Amino acid derivative
tags:
  - amino-acid
  - energy-buffer
  - exercise
  - muscle-stores
accent: "#c3b093"
reviewedAt: 2026-10-08
halfLife:
  label: Tissue stores matter
  low: null
  high: null
  context: A single plasma half-life would not describe the time course of muscle creatine accumulation and decline.
  sourceId: hultman1996
  observationId: creatine-elimination
kinetics:
  onset: Tissue accumulation with repeated intake
  peak: Not summarized as a single acute peak
  duration: Muscle stores change gradually after supplementation stops
  bioavailability: No absolute estimate curated here
  metabolism: The creatine–phosphocreatine system supports energy buffering; creatinine is a breakdown product
  sourceId: hultman1996
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
x-order: 2
---

## Summary

An endogenous compound used in muscle energy metabolism. Supplementation reliably raises muscle creatine stores, while evidence for cognitive enhancement is context-dependent and not established for healthy, well-rested young adults. [2018 systematic review](https://pubmed.ncbi.nlm.nih.gov/29704637/) [2024 EFSA assessment](https://efsa.onlinelibrary.wiley.com/doi/full/10.2903/j.efsa.2024.9100)

## Description

Creatine is better understood through tissue stores and repeated supplementation than through an immediate subjective effect. Research on training outcomes and research on cognition ask different questions and should not share a single benefit score. A 2023 memory meta-analysis reported a small overall effect concentrated in older adults, while controlled trials in young rested adults were mostly null. [2023 memory meta-analysis](https://pubmed.ncbi.nlm.nih.gov/35984306/) [young-adult trial](https://pubmed.ncbi.nlm.nih.gov/18579168/)

## Evidence note

This article covers muscle stores, exercise, and the tested cognitive contexts of normal rest, older age, and acute sleep deprivation. The cognitive findings are heterogeneous, and the meta-analytic estimates are sensitive to correlated-test counting; they do not establish creatine as a general nootropic. A 2026 review likewise argues that physiological plausibility has not translated into convincing or consistently interpretable clinical cognitive evidence. [2026 methodological commentary](https://www.frontiersin.org/journals/nutrition/articles/10.3389/fnut.2026.1716285/full) [Machado 2026](https://pubmed.ncbi.nlm.nih.gov/42912797/)

Reddit index corpus import (18 linked source records; 10 PubMed abstracts including PMC-only links resolved to PMIDs 17185404 and 14561278). Full-text methods, funding, and conflicts remain unassessed where the source record says so.

## Doses

```yaml
- label: Brain energetics protocol (PMID 17185404)
  amount: Oral creatine supplementation; dose not stated in abstract
  quantity: null
  quantityMax: null
  unit: study-specific
  ingredient: Creatine
  formulation: Oral creatine supplement
  route: Oral
  frequency: Daily
  duration: 7 days
  population: Healthy adults undergoing brain MRS
  purpose: Cerebral energetics research
  sourceCategory: research
  note: Abstract reports a 7-day protocol but not the administered dose.
  sourceId: reddit-pmid-17185404
- label: Vegetarian young-adult crossover trial (PMID 14561278)
  amount: 5 g/day
  quantity: 5
  quantityMax: null
  unit: g/day
  ingredient: Creatine monohydrate
  formulation: Oral creatine monohydrate
  route: Oral
  frequency: Daily
  duration: 6 weeks
  population: 45 young adult vegetarian participants
  purpose: Intelligence and working-memory research
  sourceCategory: research
  note: Double-blind placebo-controlled crossover exposure; not a general dosing recommendation.
  sourceId: reddit-pmid-14561278
- label: Gradual muscle-loading study
  amount: 3 g daily for 28 days
  route: Oral
  population: Male participants in a muscle-biopsy study
  note: This exposure increased muscle creatine stores. The compound diagram shows creatine, not the monohydrate formulation.
  sourceId: hultman1996
  quantity: 3
  quantityMax: null
  unit: g
  ingredient: Creatine
  formulation: Supplement preparation; hydrate form not assessed from the abstract
  frequency: Daily total; divided schedule not assessed
  duration: 28 days
  purpose: Measure change in muscle creatine concentration
  sourceCategory: research
- label: Cognitive trial in older adults
  amount: 10 g daily for 12 weeks
  route: Oral
  population: Middle-aged and older adults in a 2026 intervention
  note: Cognitive measures were exploratory outcomes, not an established cognitive dose.
  sourceId: creatine-aging-2026
  quantity: 10
  quantityMax: null
  unit: g
  ingredient: Creatine
  formulation: Supplement formulation; exact salt not specified in the research report
  frequency: Daily
  duration: 12 weeks
  purpose: Study body composition, health markers and exploratory cognitive outcomes
  sourceCategory: research
- label: Single-dose sleep-deprivation trial
  amount: 0.2–0.35 g/kg once
  route: Oral
  population: Healthy adults undergoing acute sleep deprivation
  note: Small crossover studies reported less cognitive deterioration; this does not establish routine use during normal sleep.
  sourceId: sleep-deprivation-2024
  quantity: 0.2
  quantityMax: 0.35
  unit: g/kg
  ingredient: Creatine
  formulation: Single-dose creatine; exact salt not specified in the cited report
  frequency: Once
  duration: Acute test session
  purpose: Assess cognitive performance during sleep deprivation
  sourceCategory: research
- label: PubMed study exposure (18579168)
  amount: 0.03 g/kg
  quantity: 0.03
  quantityMax: null
  unit: g/kg
  ingredient: Creatine
  formulation: As described in the PubMed abstract
  route: Not established from abstract
  frequency: Study exposure
  duration: Study exposure
  population: Population described in the PubMed abstract
  purpose: Research exposure
  sourceCategory: research
  note: Dose extracted from the PubMed abstract; verify the full text for formulation and protocol details.
  sourceId: young-adults-2008
- label: PubMed study exposure (27497517)
  amount: 36 mg/kg
  quantity: 36
  quantityMax: null
  unit: mg/kg
  ingredient: Creatine
  formulation: As described in the PubMed abstract
  frequency: Study exposure
  duration: Study exposure
  population: supplemented daily with 36 mg/kg body weight (BW) of GAA for the first 4 wk of the intervention
  purpose: Research exposure
  sourceCategory: research
  note: Dose extracted from the PubMed abstract; verify the full text for formulation and protocol details.
  sourceId: reddit-pmid-27497517
- label: PubMed study exposure (10484486)
  amount: 4 x 5 g/day
  quantity: 5
  quantityMax: null
  unit: g per dose
  ingredient: Creatine monohydrate
  formulation: Creatine monohydrate
  route: Oral
  frequency: Four times daily
  duration: 4 weeks
  population: 6 healthy young volunteers
  purpose: Measure brain total-creatine concentration by proton MRS
  sourceCategory: research
  note: Mean brain total creatine increased 8.7% (0.6 mM); regional changes were reversible by at least 3 months.
  sourceId: reddit-pmid-10484486
- label: PubMed study exposure (12850248)
  amount: 0.3 g/kg/day for 7 days, then 0.03 g/kg/day for 7 days
  quantity: 0.3
  quantityMax: 0.3
  unit: g/kg/day
  ingredient: Creatine monohydrate
  formulation: Creatine monohydrate
  route: Oral
  frequency: Daily
  duration: 14 days
  population: 10 healthy men (5 placebo controls)
  purpose: Brain creatine and high-energy phosphate MRS
  sourceCategory: research
  note: Brain creatine ratios increased 8.1% and 9.3% versus placebo; beta-NTP decreased 7.8% and PCr increased 3.4%.
  sourceId: reddit-pmid-12850248
- label: PubMed study exposure (16416332)
  amount: 5 g four times daily
  quantity: 5
  quantityMax: null
  unit: g per dose
  ingredient: Creatine monohydrate
  formulation: Creatine monohydrate
  route: Oral
  frequency: Four times daily
  duration: 7 days before sleep-deprivation test
  population: 10 creatine and 9 placebo participants
  purpose: Cognitive, psychomotor, mood, and endocrine outcomes during 24-hour sleep deprivation
  sourceCategory: research
  note: At 24 hours, the creatine group showed less change in random-movement generation, choice reaction time, balance, and mood.
  sourceId: reddit-pmid-16416332
- label: PubMed study exposure (19741313)
  amount: 25 g/day loading for 7 days, then 5 g/day for 14 days
  quantity: 25
  quantityMax: 25
  unit: g/day
  ingredient: Creatine monohydrate
  formulation: Creatine monohydrate with glucose
  route: Oral
  frequency: Daily
  duration: 21 days
  population: 20 college-aged male rugby players
  purpose: Serum testosterone and dihydrotestosterone ratios
  sourceCategory: research
  note: DHT increased 56% after loading and remained 40% above baseline after maintenance; T did not change.
  sourceId: reddit-pmid-19741313
- label: Threshold dose
  amount: 0.25 g
  quantity: 0.25
  quantityMax: null
  unit: g
  ingredient: Creatine
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
  amount: 1–5 g
  quantity: 1
  quantityMax: 5
  unit: g
  ingredient: Creatine
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
  amount: 5–10 g
  quantity: 5
  quantityMax: 10
  unit: g
  ingredient: Creatine
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
  amount: 10–20 g
  quantity: 10
  quantityMax: 20
  unit: g
  ingredient: Creatine
  formulation: Not established
  route: Oral
  frequency: Not established
  duration: Not established
  population: Not established
  purpose: PsychonautWiki dosage classification
  sourceCategory: community
  note: Band from the PsychonautWiki API snapshot built about 2026-06-23.
  sourceId: psychonautwiki
- label: Heavy dose band (20 g and above)
  amount: 20 g and above
  quantity: 20
  quantityMax: null
  unit: g
  ingredient: Creatine
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
- id: creatine-elimination
  endpoint: elimination-half-life
  unit: hours
  context: A single plasma half-life would not describe the time course of muscle creatine accumulation and decline.
  sourceId: hultman1996
  analyte: Creatine
  route: Oral
  formulation: Creatine supplementation; tissue stores are the reported endpoint
  population: Men in the cited muscle-loading study
  statistic: not-established
  value: null
  low: null
  high: null
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
    min: 30
    max: 36
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
- label: Starting muscle stores
  effect: Response is not uniform
  detail: Baseline stores and supplementation history are part of the interpretation of muscle-loading studies.
  sourceId: hultman1996
  observationId: creatine-elimination
  factorType: other
  direction: variable
```

## Effects

```yaml
[]
```

## Outcomes

```yaml
- name: Brain energetics
  direction: Increased
  evidence: Human research
  description: Seven days of oral creatine supplementation changed brain high-energy phosphate and metabolite ratios on 31P/1H MRS; PCr/ATP increased while NAA/Cr decreased, with larger effects in regions with lower baseline PCr/ATP.
  sourceId: reddit-pmid-17185404
  conceptId: brain-energy-metabolism
  population: Healthy adults
  exposure: Oral creatine for 7 days; dose not stated in abstract
  instrument: 31P and 1H spectroscopic imaging
  magnitude: PCr/ATP 0.80 to 0.85; NAA/Cr 1.32 to 1.18
  reportType: measured-assessment
- name: Intelligence and working memory in vegetarian adults
  direction: Increased
  evidence: Human research
  description: In 45 young adult vegetarians, 5 g/day creatine monohydrate for six weeks improved backward digit span and Raven's Advanced Progressive Matrices in a double-blind crossover trial.
  sourceId: reddit-pmid-14561278
  conceptId: cognitive-performance
  population: 45 young adult vegetarian participants
  exposure: 5 g/day creatine monohydrate for 6 weeks
  instrument: Backward digit span and Raven's Advanced Progressive Matrices
  magnitude: Significant improvement for both tasks; exact effect size not reported in abstract
  reportType: measured-assessment
- name: Muscle creatine stores
  direction: Increased
  evidence: Human research
  description: Repeated oral supplementation increased measured muscle total creatine stores; tissue accumulation is the relevant time course rather than a single plasma half-life.
  sourceId: hultman1996
  conceptId: muscle-stores
  population: Men in the cited muscle-loading study
  exposure: 3 g daily over 28 days
  instrument: Muscle total creatine concentration
  magnitude: Increased muscle total creatine; exact effect size not reported in the cited record
  reportType: measured-assessment
- name: Brain total creatine
  direction: Increased
  evidence: Human research
  description: Four weeks of 4 x 5 g/day creatine monohydrate increased mean brain total creatine 8.7% (0.6 mM) in six healthy young volunteers; regional changes were reversible by at least three months.
  sourceId: reddit-pmid-10484486
  conceptId: brain-creatine
  population: 6 healthy young volunteers
  exposure: 4 x 5 g/day creatine monohydrate for 4 weeks
  instrument: Localized proton MRS
  magnitude: 8.7% mean increase; thalamus 14.6%
  reportType: measured-assessment
- name: Brain high-energy phosphate metabolism
  direction: Increased
  evidence: Human research
  description: In 15 healthy men, 0.3 g/kg/day for 7 days followed by 0.03 g/kg/day for 7 days increased brain creatine ratios and modestly increased phosphocreatine.
  sourceId: reddit-pmid-12850248
  conceptId: brain-energy-metabolism
  population: 10 creatine and 5 placebo healthy men
  exposure: 0.3 g/kg/day for 7 days then 0.03 g/kg/day for 7 days
  instrument: 1H- and 31P-MRS
  magnitude: Creatine/NAA +8.1%; creatine/choline +9.3%; beta-NTP -7.8%; PCr +3.4%
  reportType: measured-assessment
- name: Cognitive performance in rested young adults
  direction: Variable
  evidence: Human research
  description: Six weeks of 0.03 g/kg/day creatine did not improve any of seven cognitive or psychomotor tests in 22 non-sleep-deprived young adults.
  sourceId: young-adults-2008
  conceptId: cognitive-performance
  population: 22 healthy young adults
  exposure: 0.03 g/kg/day for 6 weeks
  instrument: Reaction time, code substitution, reasoning, mathematical processing, running memory, and Sternberg memory tests
  magnitude: No significant improvement across seven cognitive or psychomotor tests
  reportType: measured-assessment
- name: Sleep-deprivation cognition and mood
  direction: Variable
  evidence: Human research
  description: After 24 hours of sleep deprivation, participants preloaded with 5 g creatine four times daily for 7 days showed less change in random-movement generation, choice reaction time, static balance, and mood than placebo.
  sourceId: reddit-pmid-16416332
  conceptId: attention
  population: 10 creatine and 9 placebo participants
  exposure: 5 g creatine monohydrate four times daily for 7 days
  instrument: Random movement generation, choice RT, balance, and mood tests
  magnitude: Less change than placebo across the reported sleep-deprivation measures; exact effect sizes not reported in the abstract
  reportType: measured-assessment
- name: Attention during oxygen deprivation
  direction: Variable
  evidence: Human research
  description: In 15 healthy adults, seven days of creatine supplementation increased brain creatine by 9.2% and restored attention during 90 minutes of 10% oxygen exposure; corticomotor excitability also increased.
  sourceId: reddit-pmid-25632150
  conceptId: attention
  population: 15 healthy adults
  exposure: Creatine and placebo treatments for 7 days
  instrument: Neuropsychological battery under hypoxia
  magnitude: Brain creatine +9.2%
  reportType: measured-assessment
- name: Dihydrotestosterone ratio
  direction: Increased
  evidence: Human research
  description: In 20 college-aged male rugby players, 25 g/day loading for 7 days then 5 g/day for 14 days increased DHT 56% after loading and 40% above baseline after maintenance; testosterone did not change.
  sourceId: reddit-pmid-19741313
  conceptId: androgen-metabolism
  population: 20 male rugby players
  exposure: 25 g/day for 7 days then 5 g/day for 14 days
  instrument: Serum testosterone and DHT
  magnitude: DHT +56% loading; +40% maintenance; DHT:T +36% then +22%
  reportType: measured-assessment
```

## Mechanisms

```yaml
- title: Energy buffering
  description: Creatine availability supports the phosphocreatine system, which helps regenerate ATP during demanding activity.
  sourceId: kreider2017
  conceptId: energy-buffer
- title: Source-specific finding from PMID 21448658
  description: The pleiotropic effects of creatine (Cr) are based mostly on the functions of the enzyme creatine kinase (CK) and its high-energy product phosphocreatine (PCr).
  sourceId: reddit-pmid-21448658
- title: Source-specific finding from PMID 25632150
  description: In 15 healthy adults, seven days of creatine increased brain creatine by 9.2%; during 10% oxygen exposure, attention decrements were restored and corticomotor excitability increased.
  sourceId: reddit-pmid-25632150
- title: Source-specific finding from PMID 16416332
  description: After 24-hour sleep deprivation, 5 g creatine four times daily for 7 days reduced changes in random-movement generation, choice reaction time, balance, and mood versus placebo.
  sourceId: reddit-pmid-16416332
- title: Source-specific finding from PMID 19741313
  description: In 20 male rugby players, DHT increased 56% after 7 days of 25 g/day loading and remained 40% above baseline after 14 days of 5 g/day maintenance; testosterone did not change.
  sourceId: reddit-pmid-19741313
```

## Cautions

```yaml
- title: Evidence is specific to the outcome
  description: Exercise evidence should not be treated as proof of a broad cognitive or anti-aging effect. Clinical populations require separate evidence.
  sourceId: kreider2017
- title: General cognitive enhancement is not established
  description: The strongest direct evidence does not support a reliable everyday nootropic effect in healthy, well-rested young adults. Older-adult and sleep-deprivation signals remain context-specific and uncertain.
  sourceId: efsa-creatine-2024
- title: Meta-analytic estimates require caution
  description: Correlated cognitive tests and heterogeneous instruments can make pooled effects look more precise than the underlying evidence supports.
  sourceId: commentary-2026
- title: Source-specific finding from PMID 18579168
  description: In this trial, six weeks of 0.03 g/kg/day creatine produced no significant group, time, or group-by-time effects on seven cognitive and psychomotor tests in non-sleep-deprived young adults.
  sourceId: young-adults-2008
- title: Source-specific finding from PMID 27497517
  description: In five healthy men, oral GAA at 36 mg/kg/day for four weeks (titrated up to 60 mg/kg/day) increased creatine in cerebellum and white/gray matter; no neurologic adverse events were reported.
  sourceId: reddit-pmid-27497517
- title: Source-specific finding from PMID 12850248
  description: In 15 healthy men, oral creatine increased brain creatine ratios 8.1–9.3% over 14 days and changed beta-NTP, phosphocreatine, and inorganic phosphate signals.
  sourceId: reddit-pmid-12850248
- title: Source-specific finding from PMID 19741313
  description: In 20 male rugby players, DHT increased 56% after 7 days of 25 g/day loading and remained 40% above baseline after 14 days of 5 g/day maintenance; testosterone did not change.
  sourceId: reddit-pmid-19741313
```

## Claims

```yaml
- id: muscle-stores
  assertion: Repeated supplementation raised muscle total creatine concentration.
  relation: measured-outcome
  participants:
    - entityId: substance:creatine
      role: exposure
    - entityId: tag:muscle-stores
      role: measured-outcome
  context: Men receiving the studied supplementation protocols.
  sourceIds:
    - hultman1996
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Muscle concentration is not itself a subjective or cognitive outcome.
- id: energy-buffer
  assertion: Creatine participates in phosphocreatine energy buffering.
  relation: metabolic-pathway
  participants:
    - entityId: substance:creatine
      role: substrate
    - entityId: tag:energy-buffer
      role: mechanism
    - entityId: tag:exercise
      role: related-outcome
  context: Exercise physiology reviewed in a professional-society position stand.
  sourceIds:
    - kreider2017
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Individual exercise outcomes depend on task and training context.
- id: cognitive-context
  assertion: Creatine's cognitive effects, if present, depend on population and metabolic context rather than constituting a general nootropic effect.
  relation: evidence-scope
  participants:
    - entityId: substance:creatine
      role: exposure
    - entityId: tag:memory
      role: cognitive-outcome
    - entityId: tag:attention
      role: cognitive-outcome
  context: Healthy adults studied during normal rest, older age, or acute sleep deprivation.
  sourceIds:
    - efsa-creatine-2024
    - creatine-memory-2023
    - sleep-deprivation-2024
  conflictingSourceIds:
    - creatine-cognition-2024
  assessment: not-formally-assessed
  limitation: Small samples, heterogeneous tests and methodological criticism prevent a general efficacy claim.
- id: cognitive-evidence-gap-2026
  assertion: Physiological plausibility for cerebral creatine effects has not yet translated into convincing, consistently interpretable clinical cognitive benefit.
  relation: evidence-boundary
  participants:
    - entityId: substance:creatine
      role: exposure
    - entityId: tag:memory
      role: cognitive-outcome
    - entityId: tag:attention
      role: cognitive-outcome
  context: A 2026 review separates cerebral bioenergetic mechanisms from the still-inconsistent clinical supplementation literature.
  sourceIds:
    - pmid-42912797
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Narrative review; it does not replace new randomized outcome data or establish that no subgroup can benefit.
- id: creatine-rested-young-null
  assertion: Six weeks of creatine did not improve the tested cognitive or psychomotor measures in non-sleep-deprived young adults.
  relation: measured-outcome
  participants:
    - entityId: substance:creatine
      role: intervention
    - entityId: tag:cognitive-performance
      role: endpoint
  context: 22 healthy adults receiving 0.03 g/kg/day for 6 weeks.
  sourceIds:
    - young-adults-2008
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Small study in healthy young adults.
- id: creatine-sleep-deprivation
  assertion: Seven-day creatine loading preserved selected cognitive, balance, and mood measures after 24 hours of sleep deprivation.
  relation: measured-outcome
  participants:
    - entityId: substance:creatine
      role: intervention
    - entityId: tag:attention
      role: endpoint
  context: 10 creatine and 9 placebo participants; 5 g four times daily for 7 days.
  sourceIds:
    - reddit-pmid-16416332
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Small sleep-deprivation study.
- id: creatine-hypoxia-attention
  assertion: Seven-day creatine supplementation restored attention during acute 10% oxygen exposure in healthy adults.
  relation: measured-outcome
  participants:
    - entityId: substance:creatine
      role: intervention
    - entityId: tag:attention
      role: endpoint
  context: 15 healthy adults; brain creatine increased 9.2% and corticomotor excitability increased.
  sourceIds:
    - reddit-pmid-25632150
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Acute hypoxia model; does not establish everyday cognitive enhancement.
- id: creatine-brain-metabolites
  assertion: Oral creatine changed brain creatine and high-energy phosphate MRS signals in healthy men.
  relation: measured-outcome
  participants:
    - entityId: substance:creatine
      role: intervention
    - entityId: tag:brain-energy-metabolism
      role: endpoint
  context: 0.3 g/kg/day for 7 days followed by 0.03 g/kg/day for 7 days.
  sourceIds:
    - reddit-pmid-12850248
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Metabolic signal changes are not clinical cognitive outcomes.
- id: creatine-dht-signal
  assertion: Creatine loading and maintenance increased serum DHT but not testosterone in male rugby players.
  relation: measured-outcome
  participants:
    - entityId: substance:creatine
      role: intervention
    - entityId: tag:androgen-metabolism
      role: endpoint
  context: 25 g/day for 7 days followed by 5 g/day for 14 days in 20 college-aged men.
  sourceIds:
    - reddit-pmid-19741313
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Small sports cohort; long-term clinical significance is unknown.
- id: guanidinoacetic-acid-brain-creatine
  assertion: Experimental GAA supplementation increased creatine in several brain regions in five healthy men.
  relation: measured-outcome
  participants:
    - entityId: substance:creatine
      role: related-exposure
    - entityId: tag:brain-creatine
      role: endpoint
  context: 36 mg/kg/day GAA for 4 weeks titrated to ≤60 mg/kg/day over 8 weeks.
  sourceIds:
    - reddit-pmid-27497517
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: GAA is an experimental precursor, not the creatine intervention itself.
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
- id: pmid-42912797
  title: "Creatine and cognitive function: Why has physiological plausibility not translated into convincing clinical evidence?"
  authors: Machado M.
  year: 2026
  pmid: "42912797"
  doi: 10.1113/ep094109
  url: https://pubmed.ncbi.nlm.nih.gov/42912797/
  kind: Narrative review
  insight: The review argues that cerebral bioenergetic plausibility has not translated into convincing, consistently interpretable clinical cognitive benefit and attributes the gap to biological constraints and methodological weaknesses.
  limitation: Narrative review; its conclusions do not establish that no subgroup can benefit and do not replace randomized outcome data.
  funding: Full funding and conflict disclosures were not assessed from the abstract-only record.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Full conflict disclosures were not assessed from the abstract-only record.
  conflictOfInterestStatus: not-assessed
- id: hultman1996
  title: Muscle creatine loading in men
  authors: Hultman et al.
  year: 1996
  url: https://pubmed.ncbi.nlm.nih.gov/8828669/
  kind: Human supplementation study
  insight: Compared muscle accumulation with different supplementation patterns in 31 men.
  limitation: Male-only sample; muscle concentration is not itself an exercise or cognitive outcome.
  funding: Not assessed; consult the original disclosure.
  pmid: "8828669"
  doi: 10.1152/jappl.1996.81.1.232
- id: kreider2017
  title: "International Society of Sports Nutrition position stand: safety and efficacy of creatine supplementation in exercise, sport, and medicine"
  authors: Kreider et al.
  year: 2017
  url: https://pubmed.ncbi.nlm.nih.gov/28615996/
  kind: Position stand / review
  insight: Summarizes muscle energy metabolism and exercise supplementation research.
  limitation: A professional-society position stand, not an independent trial; proposed clinical uses vary in evidence strength.
  funding: Not assessed; consult the original disclosure.
  pmid: "28615996"
  doi: 10.1186/s12970-017-0173-z
- id: creatine-cognition-2018
  title: "Effects of creatine supplementation on cognitive function of healthy individuals: A systematic review of randomized controlled trials"
  authors: Kyriakos I. Avgerinos, Nikolaos Spyrou, Konstantinos I. Bougioukas, Dimitrios Kapogiannis
  year: 2018
  url: https://pubmed.ncbi.nlm.nih.gov/29704637/
  kind: Systematic review of randomized controlled trials
  insight: Found possible short-term memory and reasoning signals, with generally null findings in young participants.
  limitation: Only six trials and 281 participants were included; cognitive domains and populations were heterogeneous.
  funding: Not assessed in the Deep Research report.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in the Deep Research report.
  conflictOfInterestStatus: not-assessed
  pmid: "29704637"
  doi: 10.1016/j.exger.2018.04.013
- id: creatine-memory-2023
  title: "Effects of creatine supplementation on memory in healthy individuals: a systematic review and meta-analysis of randomized controlled trials"
  authors: Konstantinos Prokopidis, Petros Giannos, Konstantinos K. Triantafyllidis, Konstantinos S. Kechagias, Scott C. Forbes, Darren G. Candow
  year: 2023
  url: https://pubmed.ncbi.nlm.nih.gov/35984306/
  kind: Systematic review and meta-analysis of randomized controlled trials
  insight: Reported an overall memory SMD of 0.29, with a larger older-adult estimate and near-null younger-adult subgroup estimate.
  limitation: Multiple correlated cognitive tests and heterogeneous protocols limit certainty about the pooled estimate.
  funding: Not assessed in the Deep Research report.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in the Deep Research report.
  conflictOfInterestStatus: not-assessed
  pmid: "35984306"
  doi: 10.1093/nutrit/nuac064
- id: creatine-cognition-2024
  title: "The effects of creatine supplementation on cognitive function in adults: a systematic review and meta-analysis"
  authors: Chen Xu, Siyuan Bi, Wenxin Zhang, Lin Luo
  year: 2024
  url: https://pubmed.ncbi.nlm.nih.gov/39070254/
  kind: Systematic review and meta-analysis
  insight: Reported favorable pooled estimates for memory, timed attention and processing speed, but not overall cognition or executive function.
  limitation: Mixed healthy and clinical populations and correlated outcomes make the domain-specific estimates difficult to interpret.
  funding: Not assessed in the Deep Research report.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in the Deep Research report.
  conflictOfInterestStatus: not-assessed
  pmid: "39070254"
  doi: 10.3389/fnut.2024.1424972
- id: efsa-creatine-2024
  title: "Creatine and improvement in cognitive function: Evaluation of a health claim pursuant to Article 13(5) of Regulation (EC) No 1924/2006"
  authors: EFSA Panel on Nutrition, Novel Foods and Food Allergens
  year: 2024
  url: https://efsa.onlinelibrary.wiley.com/doi/full/10.2903/j.efsa.2024.9100
  kind: Regulatory scientific opinion
  insight: Concluded that a cause-and-effect relationship between creatine supplementation and improved cognitive function had not been established.
  limitation: A health-claim assessment rather than a new randomized trial.
  funding: Not assessed in the Deep Research report.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in the Deep Research report.
  conflictOfInterestStatus: not-assessed
- id: young-adults-2008
  title: Creatine supplementation does not improve cognitive function in young adults
  authors: Rae et al.
  year: 2008
  url: https://pubmed.ncbi.nlm.nih.gov/18579168/
  kind: Randomized controlled trial
  insight: Found no significant cognitive benefit after supplementation in young adults.
  limitation: Small sample and restricted young-adult population.
  funding: Not assessed in the Deep Research report.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in the Deep Research report.
  conflictOfInterestStatus: not-assessed
  pmid: "18579168"
- id: commentary-2026
  title: "Commentary: The effects of creatine supplementation on cognitive function in adults: a systematic review and meta-analysis"
  authors: Thomas Citherlet
  year: 2026
  url: https://www.frontiersin.org/journals/nutrition/articles/10.3389/fnut.2026.1716285/full
  kind: Methodological commentary
  insight: Reported that non-independent cognitive tests had been double-counted and that reanalysis weakened the overall effect except possibly in older adults.
  limitation: Commentary and reanalysis, not an independent randomized trial.
  funding: Not assessed in the Deep Research report.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in the Deep Research report.
  conflictOfInterestStatus: not-assessed
  pmid: "42039906"
  doi: 10.3389/fnut.2026.1716285
- id: creatine-aging-2025
  title: "Creatine and Cognition in Aging: A Systematic Review of Evidence in Older Adults"
  authors: Samantha Marshall, Alexandra Kitzan, Jasmine Wright, Laura Bocicariu, Lindsay S. Nagamatsu
  year: 2025
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC12793482/
  kind: Systematic review
  insight: Found positive associations in most included studies, but much of the evidence was observational and the intervention evidence was sparse.
  limitation: Observational associations cannot establish supplementation efficacy; only a small number of interventions were available.
  funding: Not assessed in the Deep Research report.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in the Deep Research report.
  conflictOfInterestStatus: not-assessed
  pmid: "40971619"
  doi: 10.1093/nutrit/nuaf135
- id: creatine-aging-2026
  title: Effects of creatine supplementation with and without exercise and diet intervention on body composition, cognitive function, and markers of health in middle-aged and older adults
  authors: Jisun Chun, Yuhang Liu, Giuliet L. Kibler, Hudson Lee, Khatereh Babakhani, Nathaniel Rhoades, Ian Bivins, Joungbo Ko, Broderick Dickerson, Drew E. Gonzalez, Ryan J. Sowinski
  year: 2026
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC13463452/
  kind: Randomized intervention
  insight: Reported selected memory and processing improvements after 10 g/day for 12 weeks, with cognitive outcomes treated as exploratory.
  limitation: Exploratory cognitive endpoints and limited generalizability prevent a general cognitive-enhancement claim.
  funding: Not assessed in the Deep Research report.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in the Deep Research report.
  conflictOfInterestStatus: not-assessed
- id: sleep-deprivation-2024
  title: Single dose creatine improves cognitive performance and induces changes in cerebral high energy phosphates during sleep deprivation
  authors: Ali Gordji-Nejad, Andreas Matusch, Sophie Kleedörfer, Harshal Jayeshkumar Patel, Alexander Drzezga, David Elmenhorst, Ferdinand Binkofski, Andreas Bauer
  year: 2024
  url: https://www.nature.com/articles/s41598-024-54249-9.pdf
  kind: Randomized crossover sleep-deprivation study
  insight: Reported less deterioration on several cognitive tasks after a single high dose during acute sleep deprivation.
  limitation: Small, acute, context-specific studies do not establish benefit during normal sleep or justify routine high-dose use.
  funding: Not assessed in the Deep Research report.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in the Deep Research report.
  conflictOfInterestStatus: not-assessed
  doi: 10.1038/s41598-024-54249-9
- id: pubchem
  title: "Creatine: compound record and molecular structure"
  authors: NCBI PubChem
  year: 2026
  url: https://pubchem.ncbi.nlm.nih.gov/compound/586
  kind: Chemical database
  insight: Source for molecular identity, formula, molecular weight and the structure diagram.
  limitation: A compound record does not establish a product's purity, identity or clinical benefit.
  funding: Public database maintained by NCBI.
- id: reddit-link-e3a75cb29d01
  title: Cerebral energetic effects of creatine supplementation in humans.
  authors: J W Pan; K Takahashi
  year: 2007
  url: https://pubmed.ncbi.nlm.nih.gov/17185404/
  kind: PubMed publication
  insight: The Reddit index links this publication; bibliographic metadata was not returned by the PubMed batch.
  limitation: Full text, publication metadata, funding, and conflicts were not independently verified in this corpus pass.
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
  pmid: "17185404"
  doi: 10.1152/ajpregu.00717.2006
- id: reddit-pmid-21448658
  title: The creatine kinase system and pleiotropic effects of creatine.
  authors: Theo Wallimann, Malgorzata Tokarska-Schlattner, Uwe Schlattner
  year: 2011
  url: https://pubmed.ncbi.nlm.nih.gov/21448658/
  kind: PubMed publication
  insight: The pleiotropic effects of creatine (Cr) are based mostly on the functions of the enzyme creatine kinase (CK) and its high-energy product phosphocreatine (PCr).
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: "21448658"
  doi: 10.1007/s00726-011-0877-3
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-link-4eb60436497c
  title: Does brain creatine content rely on exogenous creatine in healthy youth? A proof-of-principle study(2016)
  authors: Not established
  year: 2016
  url: https://www.nrcresearchpress.com/doi/abs/10.1139/apnm-2016-0406#.V_0yCe1Otps
  kind: Reddit index publication link
  insight: The Reddit index links this publication; bibliographic metadata was not returned by the PubMed batch.
  limitation: Full text, publication metadata, funding, and conflicts were not independently verified in this corpus pass.
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-link-5635dcfd7c41
  title: Cognitive effects of creatine ethyl ester supplementation
  authors: Not established
  year: 2026
  url: https://jtoomim.org/files/Ling_2009-Cognitive_effects_of_creatine_ethyl_ester_supplementation.pdf
  kind: Reddit index publication link
  insight: The Reddit index links this publication; bibliographic metadata was not returned by the PubMed batch.
  limitation: Full text, publication metadata, funding, and conflicts were not independently verified in this corpus pass.
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-link-4a303028b0ed
  title: "Creatine Supplementation Associated or Not with Strength Training upon Emotional and Cognitive Measures in Older Women: A Randomized Double-Blind Study "
  authors: Not established
  year: 2026
  url: https://www.plosone.org/article/info%3Adoi%2F10.1371%2Fjournal.pone.0076301
  kind: Reddit index publication link
  insight: The Reddit index links this publication; bibliographic metadata was not returned by the PubMed batch.
  limitation: Full text, publication metadata, funding, and conflicts were not independently verified in this corpus pass.
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-link-c413e7dfdbeb
  title: |-
    The influence of creatine supplementation on the cognitive functioning
    of vegetarians and omnivores
  authors: Not established
  year: 2026
  url: https://img2.timg.co.il/forums/1_161120651.pdf
  kind: Reddit index publication link
  insight: The Reddit index links this publication; bibliographic metadata was not returned by the PubMed batch.
  limitation: Full text, publication metadata, funding, and conflicts were not independently verified in this corpus pass.
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-link-6850d86dc36e
  title: |-
    Effects of creatine on mental fatigue and cerebral hemoglobin
    oxygenation
  authors: Not established
  year: 2026
  url: https://jtoomim.org/brain-training/watanabe2001-creatine-reduces-mentalfatigue.pdf
  kind: Reddit index publication link
  insight: The Reddit index links this publication; bibliographic metadata was not returned by the PubMed batch.
  limitation: Full text, publication metadata, funding, and conflicts were not independently verified in this corpus pass.
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-link-c1a7e998496e
  title: "Oral creatine monohydrate supplementation improves brain performance: a double-blind, placebo-controlled, cross-over trial."
  authors: Caroline Rae; Alison L Digney; Sally R McEwan; Tim Bates
  year: 2003
  url: https://pubmed.ncbi.nlm.nih.gov/14561278/
  kind: PubMed publication
  insight: The Reddit index links this publication; bibliographic metadata was not returned by the PubMed batch.
  limitation: Full text, publication metadata, funding, and conflicts were not independently verified in this corpus pass.
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
  pmid: "14561278"
  doi: 10.1098/rspb.2003.2492
- id: reddit-link-3c2bf8e16c45
  title: Dietary supplementation of creatine monohydrate reduces the human fMRI BOLD signal
  authors: Not established
  year: 2026
  url: https://www.researchgate.net/publication/44694983_Dietary_supplementation_of_creatine_monohydrate_reduces_the_human_fMRI_BOLD_signal/file/9fcfd50bb2b9e2fba1.pdf
  kind: Reddit index publication link
  insight: The Reddit index links this publication; bibliographic metadata was not returned by the PubMed batch.
  limitation: Full text, publication metadata, funding, and conflicts were not independently verified in this corpus pass.
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-25632150
  title: Creatine supplementation enhances corticomotor excitability and cognitive performance during oxygen deprivation.
  authors: Clare E Turner, Winston D Byblow, Nicholas Gant
  year: 2015
  url: https://pubmed.ncbi.nlm.nih.gov/25632150/
  kind: PubMed publication
  insight: Seven-day creatine supplementation increased brain creatine 9.2% and restored attention during 10% oxygen exposure in 15 healthy adults.
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: "25632150"
  pmcid: PMC6795258
  doi: 10.1523/JNEUROSCI.3113-14.2015
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-27497517
  title: Dietary guanidinoacetic acid increases brain creatine levels in healthy men.
  authors: Sergej M Ostojic, Jelena Ostojic, Patrik Drid, Milan Vranes, Pavle Jovanov
  year: 2017
  url: https://pubmed.ncbi.nlm.nih.gov/27497517/
  kind: PubMed publication
  insight: Five healthy men received 36 mg/kg/day GAA for four weeks, titrated up to 60 mg/kg/day; brain creatine increased in several regions and no neurologic adverse events were reported.
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: "27497517"
  doi: 10.1016/j.nut.2016.06.001
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-link-ab5bf80c0ba9
  title: "Biomarkers and Long-term Labour Market Outcomes: The Case of Creatine"
  authors: Not established
  year: 2026
  url: https://ftp.iza.org/dp8029.pdf
  kind: Reddit index publication link
  insight: The Reddit index links this publication; bibliographic metadata was not returned by the PubMed batch.
  limitation: Full text, publication metadata, funding, and conflicts were not independently verified in this corpus pass.
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-10484486
  title: Increase of total creatine in human brain after oral supplementation of creatine-monohydrate.
  authors: P Dechent, P J Pouwels, B Wilken, F Hanefeld, J Frahm
  year: 1999
  url: https://pubmed.ncbi.nlm.nih.gov/10484486/
  kind: PubMed publication
  insight: The effect of oral creatine supplementation on brain metabolite concentrations was investigated in gray matter, white matter, cerebellum, and thalamus of healthy young volunteers by means of quantitative localized proton magnetic resonance spectroscopy in vivo (2.0 T, stimulated echo acquisition mode sequence; repetition time = 6,000 ms, echo time = 20 ms, middle interval = 10 ms, automated spectral evaluation).
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: "10484486"
  doi: 10.1152/ajpregu.1999.277.3.R698
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-12850248
  title: Multinuclear magnetic resonance spectroscopy of high-energy phosphate metabolites in human brain following oral supplementation of creatine-monohydrate.
  authors: In Kyoon Lyoo, Sek Won Kong, Seung Mo Sung, Fuyuki Hirashima, Aimee Parow, John Hennen, Bruce M Cohen, Perry F Renshaw
  year: 2003
  url: https://pubmed.ncbi.nlm.nih.gov/12850248/
  kind: PubMed publication
  insight: Fifteen healthy men received 0.3 g/kg/day creatine for 7 days then 0.03 g/kg/day for 7 days; brain creatine ratios increased and beta-NTP decreased.
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: "12850248"
  doi: 10.1016/s0925-4927(03)00046-5
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-16416332
  title: Effect of creatine supplementation and sleep deprivation, with mild exercise, on cognitive and psychomotor performance, mood state, and plasma concentrations of catecholamines and cortisol.
  authors: T McMorris, R C Harris, J Swain, J Corbett, K Collard, R J Dyson, L Dye, C Hodgson, N Draper
  year: 2006
  url: https://pubmed.ncbi.nlm.nih.gov/16416332/
  kind: PubMed publication
  insight: Ten creatine and nine placebo participants took 5 g creatine four times daily for 7 days; after 24-hour sleep deprivation, creatine preserved several cognitive, balance, and mood measures.
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: "16416332"
  doi: 10.1007/s00213-005-0269-z
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-19741313
  title: Three weeks of creatine monohydrate supplementation affects dihydrotestosterone to testosterone ratio in college-aged rugby players.
  authors: Johann van der Merwe, Naomi E Brooks, Kathryn H Myburgh
  year: 2009
  url: https://pubmed.ncbi.nlm.nih.gov/19741313/
  kind: PubMed publication
  insight: Twenty male rugby players received 25 g/day creatine loading for 7 days then 5 g/day for 14 days; DHT rose while testosterone did not change.
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: "19741313"
  doi: 10.1097/JSM.0b013e3181b8b52f
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-link-237b30b664e6
  title: Inhibition of the Mitochondrial Permeability Transition by Creatine Kinase Substrates
  authors: Not established
  year: 2026
  url: https://www.jbc.org/content/278/20/17760.short
  kind: Reddit index publication link
  insight: The Reddit index links this publication; bibliographic metadata was not returned by the PubMed batch.
  limitation: Full text, publication metadata, funding, and conflicts were not independently verified in this corpus pass.
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-17185404
  title: Cerebral energetic effects of creatine supplementation in humans.
  authors: J W Pan; K Takahashi
  year: 2007
  url: https://pubmed.ncbi.nlm.nih.gov/17185404/
  kind: PubMed publication
  insight: Seven-day oral creatine supplementation shifted brain PCr/ATP and NAA/Cr ratios on high-field MRS in healthy adults.
  limitation: Abstract does not state dose; biochemical changes are not direct proof of cognitive benefit.
  pmid: "17185404"
  pmcid: PMC3570026
  doi: 10.1152/ajpregu.00717.2006
- id: reddit-pmid-14561278
  title: "Oral creatine monohydrate supplementation improves brain performance: a double-blind, placebo-controlled, cross-over trial."
  authors: Caroline Rae; Alison L Digney; Sally R McEwan; Tim Bates
  year: 2003
  url: https://pubmed.ncbi.nlm.nih.gov/14561278/
  kind: PubMed publication
  insight: Five grams/day creatine for six weeks improved backward digit span and Raven matrices in 45 young vegetarian adults.
  limitation: Selected vegetarian sample and single trial; generalizability and long-term safety remain uncertain.
  pmid: "14561278"
  pmcid: PMC1691485
  doi: 10.1098/rspb.2003.2492
- id: psychonautwiki
  title: "Creatine: PsychonautWiki dose and duration data"
  authors: PsychonautWiki contributors
  year: 2026
  url: https://psychonautwiki.org/wiki/Creatine
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
  url: https://en.wikipedia.org/wiki/Creatine
  title: Wikipedia
- service: Examine
  url: https://examine.com/supplements/Creatine
  title: Examine
```

