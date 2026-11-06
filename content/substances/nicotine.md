---
slug: nicotine
name: Nicotine
subtitle: Cholinergic signaling with dependence risk.
aliases:
  - (S)-nicotine
formula: C10H14N2
molecularWeight: 162.23 g/mol
pubchemCid: 89594
smiles: CN1CCCC1C2=CN=CC=C2
category: Stimulant
tags:
  - stimulant
  - nicotinic-agonist
  - acetylcholine
  - cyp2a6
  - nicotinic-receptor
  - craving
accent: "#c8a18f"
reviewedAt: 2026-10-22
halfLife:
  label: Approximately 2 hours for plasma nicotine
  low: 2
  high: 2
  context: The cited pharmacology review describes approximately 2 hours for plasma nicotine elimination, with route, pregnancy, renal function and metabolic phenotype affecting exposure. This is not a subjective duration estimate.
  sourceId: benowitz2009
  observationId: nicotine-elimination
kinetics:
  onset: Minutes after pulmonary or fast mucosal delivery; slower with gum, lozenges and patches
  peak: Approximately 3–8 minutes for cigarette exposure, about 30–66 minutes for gum/lozenge, and 3–7 hours for patches in cited studies
  duration: Plasma elimination half-life is approximately 2 hours; repeated dosing and cotinine persistence extend exposure
  bioavailability: Route- and product-dependent; values from different products are not interchangeable
  metabolism: Primarily CYP2A6-mediated oxidation to cotinine, with additional glucuronidation and nicotine N-oxide formation
  sourceId: benowitz2009
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
x-order: 4
---

## Summary

Nicotine is the dependence-producing pharmacological agent in tobacco. It activates nicotinic acetylcholine receptors and can produce small, task-dependent acute attention effects, but evidence does not establish reliable enhancement of memory, athletic performance, mood, sleep, longevity or dementia outcomes in healthy nonusers. Combustible tobacco adds toxicants and disease risks that should not be assigned to nicotine alone; medicinal nicotine-replacement products are safer than continued smoking but remain physiologically active and dependence-forming (benowitz2009; benowitz2010; majdi2021; pasetes2020; fda-nicotine).

## Description

The naturally occurring active enantiomer is (S)-nicotine. Pulmonary delivery produces rapid arterial exposure, while gum, lozenges and patches produce slower peaks. Nicotine is metabolized mainly by CYP2A6 to cotinine; pregnancy, age, genotype, renal or hepatic impairment, meals, menthol and some co-exposures can alter clearance (pubchem; benowitz2009). Cigarette smoke contains carbon monoxide, particulates, oxidants, aldehydes and tobacco-specific nitrosamines in addition to nicotine. NRT delivers nicotine without combustion toxicants and is used to reduce withdrawal during smoking cessation (fda-nicotine; fda-cessation).

## Evidence note

PubMed abstracts retrieved for all 49 linked PMIDs. Full-text retrieval was attempted for every PMCID-resolved record; successful responses and connector errors are identified in the individual reference limitations. No-PMC articles remain abstract-only. Existing source-specific records are retained. Evidence spans reviews, human trials, animal studies, and mechanistic papers; nicotine cognitive effects are heterogeneous and dependence/safety risks remain material.

## Doses

```yaml
- label: Single cigarette systemic exposure
  amount: Approximately 1 to 1.5 mg absorbed nicotine
  quantity: null
  quantityMax: null
  unit: mg absorbed
  ingredient: Nicotine
  formulation: Combustible cigarette smoke
  route: pulmonary inhalation
  frequency: Per cigarette
  duration: Acute
  population: Adult smokers in pharmacokinetic studies
  purpose: Exposure characterization
  sourceCategory: research
  note: Absorption varies with puffing, cigarette design and smoking topography; labeled nicotine content is higher than absorbed dose.
  sourceId: benowitz2009
- label: Nicotine transdermal patch label
  amount: 7, 14 or 21 mg delivered over 24 hours
  quantity: 7
  quantityMax: 21
  unit: mg/24 h
  ingredient: Nicotine
  formulation: Transdermal nicotine patch
  route: transdermal
  frequency: Once daily
  duration: Label taper over 8–12 weeks for smoking cessation
  population: Adults who smoke, according to the OTC label
  purpose: Smoking cessation
  sourceCategory: approved-label
  note: A product label, not a cognitive-enhancement dose and not a recommendation for nicotine-naive people.
  sourceId: dailymed-patch
- label: Nicotine polacrilex gum label
  amount: 2 or 4 mg per piece
  quantity: 2
  quantityMax: 4
  unit: mg/piece
  ingredient: Nicotine
  formulation: Nicotine polacrilex gum
  route: buccal
  frequency: Every 1–2 hours initially; maximum 24 pieces/day on the cited label
  duration: Up to 12 weeks on the cited label
  population: Adults who smoke, according to the OTC label
  purpose: Smoking cessation
  sourceCategory: approved-label
  note: The label selects 4 mg when the first cigarette is within 30 minutes of waking and 2 mg otherwise.
  sourceId: dailymed-gum
- label: Healthy-nonsmoker patch meta-analysis exposures
  amount: Various patch doses across 31 publications
  quantity: null
  quantityMax: null
  unit: mg/day
  ingredient: Nicotine
  formulation: Transdermal patch
  route: transdermal
  frequency: Single or short repeated exposure
  duration: Acute laboratory studies
  population: 978 healthy nonsmoking adults
  purpose: Cognitive outcomes
  sourceCategory: research
  note: The evidence does not establish a safe or effective enhancement dose.
  sourceId: majdi2021
- label: MCI pilot trial
  amount: 15 mg/day
  quantity: 15
  quantityMax: null
  unit: mg/day
  ingredient: Nicotine
  formulation: Transdermal patch
  route: transdermal
  frequency: Daily
  duration: 6 months
  population: 74 nonsmoking adults with amnestic mild cognitive impairment
  purpose: Cognitive-test outcomes
  sourceCategory: research
  note: Pilot trial with multiple outcomes; not evidence for dementia prevention or lifespan extension.
  sourceId: newhouse2012
- label: PubMed study exposure (28150023)
  amount: 7 mg
  quantity: 7
  quantityMax: null
  unit: mg
  ingredient: Nicotine
  formulation: As described in the PubMed abstract
  frequency: Study exposure
  duration: Study exposure
  population: N = 44 healthy adult non-smokers performed antisaccade, stop signal, Stroop, go/no-go, flanker, shape matching and Simon tasks, as well as the attentional network test (ANT) and a continuous performance task (CPT)
  purpose: Research exposure
  sourceCategory: research
  note: Dose extracted from the PubMed abstract; verify the full text for formulation and protocol details.
  sourceId: reddit-pmid-28150023
- label: PubMed study exposure (25304866)
  amount: 7 mg
  quantity: 7
  quantityMax: null
  unit: mg
  ingredient: Nicotine
  formulation: As described in the PubMed abstract
  frequency: Study exposure
  duration: Study exposure
  population: Population described in the PubMed abstract
  purpose: Research exposure
  sourceCategory: research
  note: Dose extracted from the PubMed abstract; verify the full text for formulation and protocol details.
  sourceId: reddit-pmid-25304866
- label: PubMed study exposure (9860103)
  amount: 7 mg
  quantity: 7
  quantityMax: null
  unit: mg
  ingredient: Nicotine
  formulation: As described in the PubMed abstract
  frequency: Study exposure
  duration: Study exposure
  population: administered a 7 mg/day nicotine transdermal patch for 4
  purpose: Research exposure
  sourceCategory: research
  note: Dose extracted from the PubMed abstract; verify the full text for formulation and protocol details.
  sourceId: reddit-pmid-9860103
- label: PubMed study exposure (25925411)
  amount: 4.5 mg/kg
  quantity: 4.5
  quantityMax: null
  unit: mg/kg
  ingredient: Nicotine
  formulation: As described in the PubMed abstract
  frequency: Study exposure
  duration: Study exposure
  population: Population described in the PubMed abstract
  purpose: Research exposure
  sourceCategory: research
  note: Dose extracted from the PubMed abstract; verify the full text for formulation and protocol details.
  sourceId: reddit-pmid-25925411
- label: PubMed study exposure (26239821)
  amount: 5 mg
  quantity: 5
  quantityMax: null
  unit: mg
  ingredient: Nicotine
  formulation: As described in the PubMed abstract
  frequency: Study exposure
  duration: Study exposure
  population: Population described in the PubMed abstract
  purpose: Research exposure
  sourceCategory: research
  note: Dose extracted from the PubMed abstract; verify the full text for formulation and protocol details.
  sourceId: reddit-pmid-26239821
- label: PubMed study exposure (25929709)
  amount: 1.89 mg
  quantity: 1.89
  quantityMax: null
  unit: mg
  ingredient: Nicotine
  formulation: As described in the PubMed abstract
  frequency: Study exposure
  duration: Study exposure
  population: Population described in the PubMed abstract
  purpose: Research exposure
  sourceCategory: research
  note: Dose extracted from the PubMed abstract; verify the full text for formulation and protocol details.
  sourceId: reddit-pmid-25929709
- label: PubMed study exposure (26345343)
  amount: 4.0 mg
  quantity: 4
  quantityMax: null
  unit: mg
  ingredient: Nicotine
  formulation: As described in the PubMed abstract
  frequency: Study exposure
  duration: Study exposure
  population: Population described in the PubMed abstract
  purpose: Research exposure
  sourceCategory: research
  note: Dose extracted from the PubMed abstract; verify the full text for formulation and protocol details.
  sourceId: reddit-pmid-26345343
- label: Threshold dose
  amount: 0.2 mg
  quantity: 0.2
  quantityMax: null
  unit: mg
  ingredient: Nicotine
  formulation: Not established
  route: Buccal
  frequency: Not established
  duration: Not established
  population: Not established
  purpose: PsychonautWiki dosage classification
  sourceCategory: community
  note: Band from the PsychonautWiki API snapshot built about 2026-06-23.
  sourceId: psychonautwiki
- label: Light dose band
  amount: 0.5–2 mg
  quantity: 0.5
  quantityMax: 2
  unit: mg
  ingredient: Nicotine
  formulation: Not established
  route: Buccal
  frequency: Not established
  duration: Not established
  population: Not established
  purpose: PsychonautWiki dosage classification
  sourceCategory: community
  note: Band from the PsychonautWiki API snapshot built about 2026-06-23.
  sourceId: psychonautwiki
- label: Common dose band
  amount: 2–4 mg
  quantity: 2
  quantityMax: 4
  unit: mg
  ingredient: Nicotine
  formulation: Not established
  route: Buccal
  frequency: Not established
  duration: Not established
  population: Not established
  purpose: PsychonautWiki dosage classification
  sourceCategory: community
  note: Band from the PsychonautWiki API snapshot built about 2026-06-23.
  sourceId: psychonautwiki
- label: Strong dose band
  amount: 4–6 mg
  quantity: 4
  quantityMax: 6
  unit: mg
  ingredient: Nicotine
  formulation: Not established
  route: Buccal
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
  ingredient: Nicotine
  formulation: Not established
  route: Buccal
  frequency: Not established
  duration: Not established
  population: Not established
  purpose: PsychonautWiki dosage classification
  sourceCategory: community
  note: Band from the PsychonautWiki API snapshot built about 2026-06-23.
  sourceId: psychonautwiki
- label: Threshold dose
  amount: 0.2 mg
  quantity: 0.2
  quantityMax: null
  unit: mg
  ingredient: Nicotine
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
  amount: 1–3 mg
  quantity: 1
  quantityMax: 3
  unit: mg
  ingredient: Nicotine
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
  amount: 3–5 mg
  quantity: 3
  quantityMax: 5
  unit: mg
  ingredient: Nicotine
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
  amount: 5–7 mg
  quantity: 5
  quantityMax: 7
  unit: mg
  ingredient: Nicotine
  formulation: Not established
  route: Oral
  frequency: Not established
  duration: Not established
  population: Not established
  purpose: PsychonautWiki dosage classification
  sourceCategory: community
  note: Band from the PsychonautWiki API snapshot built about 2026-06-23.
  sourceId: psychonautwiki
- label: Heavy dose band (7 mg and above)
  amount: 7 mg and above
  quantity: 7
  quantityMax: null
  unit: mg
  ingredient: Nicotine
  formulation: Not established
  route: Oral
  frequency: Not established
  duration: Not established
  population: Not established
  purpose: PsychonautWiki dosage classification
  sourceCategory: community
  note: Band from the PsychonautWiki API snapshot built about 2026-06-23.
  sourceId: psychonautwiki
- label: Threshold dose
  amount: 0.2 mg
  quantity: 0.2
  quantityMax: null
  unit: mg
  ingredient: Nicotine
  formulation: Not established
  route: Smoked
  frequency: Not established
  duration: Not established
  population: Not established
  purpose: PsychonautWiki dosage classification
  sourceCategory: community
  note: Band from the PsychonautWiki API snapshot built about 2026-06-23.
  sourceId: psychonautwiki
- label: Light dose band
  amount: 0.3–0.8 mg
  quantity: 0.3
  quantityMax: 0.8
  unit: mg
  ingredient: Nicotine
  formulation: Not established
  route: Smoked
  frequency: Not established
  duration: Not established
  population: Not established
  purpose: PsychonautWiki dosage classification
  sourceCategory: community
  note: Band from the PsychonautWiki API snapshot built about 2026-06-23.
  sourceId: psychonautwiki
- label: Common dose band
  amount: 0.8–1.5 mg
  quantity: 0.8
  quantityMax: 1.5
  unit: mg
  ingredient: Nicotine
  formulation: Not established
  route: Smoked
  frequency: Not established
  duration: Not established
  population: Not established
  purpose: PsychonautWiki dosage classification
  sourceCategory: community
  note: Band from the PsychonautWiki API snapshot built about 2026-06-23.
  sourceId: psychonautwiki
- label: Strong dose band
  amount: 1.5–3.5 mg
  quantity: 1.5
  quantityMax: 3.5
  unit: mg
  ingredient: Nicotine
  formulation: Not established
  route: Smoked
  frequency: Not established
  duration: Not established
  population: Not established
  purpose: PsychonautWiki dosage classification
  sourceCategory: community
  note: Band from the PsychonautWiki API snapshot built about 2026-06-23.
  sourceId: psychonautwiki
- label: Heavy dose band (3.5 mg and above)
  amount: 3.5 mg and above
  quantity: 3.5
  quantityMax: null
  unit: mg
  ingredient: Nicotine
  formulation: Not established
  route: Smoked
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
- id: nicotine-elimination
  analyte: Nicotine
  route: inhalation or intravenous
  formulation: Cigarette smoke or intravenous nicotine in reviewed kinetic studies
  population: Adults represented in the pharmacology review
  endpoint: elimination-half-life
  statistic: approximate
  value: 2
  low: null
  high: null
  unit: hours
  context: Approximate plasma elimination half-life; route, pregnancy, renal function and metabolic phenotype alter exposure.
  sourceId: benowitz2009
  modelEligible: true
- id: cotinine-elimination
  analyte: Cotinine
  route: systemic nicotine exposure
  formulation: Nicotine exposure with cotinine as metabolite
  population: Adults represented in the pharmacology review
  endpoint: elimination-half-life
  statistic: reported-range
  value: null
  low: 8
  high: 30
  unit: hours
  context: Cotinine persists longer than nicotine; the cited review gives an approximate 16-hour value with a reported range of about 8–30 hours.
  sourceId: benowitz2009
  modelEligible: false
```

## Duration

```yaml
- route: pulmonary inhalation
  population: Adult smokers in pharmacokinetic studies
  sourceId: benowitz2009
  measurement: plasma
  analyte: Nicotine
  note: Venous peak is usually about 5–8 minutes and arterial peak about 3–5 minutes after smoking; subjective duration is not inferred from these values.
  total: null
  phases: []
- route: transdermal
  formulation: Nicotine patch
  population: Adults in cited pharmacokinetic studies
  sourceId: benowitz2009
  measurement: plasma
  analyte: Nicotine
  note: Patch peaks were approximately 3–7 hours in the cited product studies and provide a flatter exposure profile.
  total: null
  phases: []
- route: systemic nicotine exposure
  population: People with established nicotine dependence after cessation
  sourceId: nci-withdrawal
  measurement: subjective
  note: Withdrawal commonly begins within 4–24 hours, is often worst during the first week with a peak around the first three days, and declines over about three to four weeks; craving and cue reactivity may persist longer.
  total: null
  phases: []
- id: psychonautwiki-buccal
  measurement: subjective
  route: Buccal
  population: Ranges compiled by PsychonautWiki contributors
  sourceId: psychonautwiki
  note: PsychonautWiki community duration ranges for this route.
  total:
    min: 45
    max: 90
    unit: minutes
  phases:
    - name: onset
      basis: elapsed-since-exposure
      min: 3
      max: 15
      unit: minutes
    - name: comeup
      basis: phase-duration
      min: 3
      max: 15
      unit: minutes
    - name: peak
      basis: phase-duration
      min: 5
      max: 20
      unit: minutes
    - name: offset
      basis: phase-duration
      min: 1
      max: 2
      unit: hours
    - name: after-effects
      basis: phase-duration
      min: 2
      max: 6
      unit: hours
- id: psychonautwiki-oral
  measurement: subjective
  route: Oral
  population: Ranges compiled by PsychonautWiki contributors
  sourceId: psychonautwiki
  note: PsychonautWiki community duration ranges for this route.
  total:
    min: 5
    max: 7
    unit: hours
  phases:
    - name: onset
      basis: elapsed-since-exposure
      min: 20
      max: 40
      unit: minutes
    - name: comeup
      basis: phase-duration
      min: 60
      max: 90
      unit: minutes
    - name: peak
      basis: phase-duration
      min: 60
      max: 90
      unit: minutes
    - name: offset
      basis: phase-duration
      min: 2.5
      max: 3.5
      unit: hours
    - name: after-effects
      basis: phase-duration
      min: 2
      max: 4
      unit: hours
- id: psychonautwiki-smoked
  measurement: subjective
  route: Smoked
  population: Ranges compiled by PsychonautWiki contributors
  sourceId: psychonautwiki
  note: PsychonautWiki community duration ranges for this route.
  total:
    min: 1
    max: 3
    unit: hours
  phases:
    - name: onset
      basis: elapsed-since-exposure
      min: 5
      max: 20
      unit: seconds
    - name: comeup
      basis: phase-duration
      min: 5
      max: 10
      unit: seconds
    - name: peak
      basis: phase-duration
      min: 2
      max: 5
      unit: minutes
    - name: offset
      basis: phase-duration
      min: 1
      max: 2
      unit: hours
    - name: after-effects
      basis: phase-duration
      min: 1
      max: 3
      unit: hours
```

## Modifiers

```yaml
- label: CYP2A6 genotype and phenotype
  effect: Changes nicotine clearance and cotinine formation
  detail: Faster metabolism is associated in some studies with greater dependence and poorer cessation response; relationships are not uniform.
  sourceId: benowitz2009
  observationId: nicotine-elimination
  factorType: genotype
  direction: variable
- label: Pregnancy
  effect: Faster nicotine and cotinine clearance
  detail: The cited review reports approximately 60% higher nicotine clearance and approximately 140% higher cotinine clearance during pregnancy than postpartum; fetal exposure and developmental concern remain.
  sourceId: benowitz2009
  observationId: nicotine-elimination
  factorType: pregnancy
  direction: faster
- label: Renal or hepatic impairment
  effect: Reduced clearance can increase exposure
  detail: Severe renal impairment and reduced hepatic function alter nicotine disposition; label warnings call for clinician supervision in relevant conditions.
  sourceId: benowitz2009
  observationId: nicotine-elimination
  factorType: other
  direction: slower
- label: Prior dependence and abstinence
  effect: Modifies apparent cognitive and mood effects
  detail: Improvement after nicotine in dependent users may be reversal of withdrawal rather than enhancement above a nicotine-free baseline.
  sourceId: pasetes2020
  observationId: nicotine-elimination
  factorType: other
  direction: variable
```

## Effects

```yaml
- id: effect-attention
  name: Acute attention performance
  direction: Increased
  evidence: Human research
  description: A 2021 meta-analysis of 31 patch publications in 978 healthy nonsmokers found a small attention benefit, while another systematic review found positive, mixed and null attention studies without a consistent overall effect.
  sourceId: majdi2021
  conflictingSourceIds:
    - pasetes2020
  reportType: measured-assessment
  conceptId: alertness
  population: Healthy nonsmoking adults in short randomized laboratory studies
  exposure: Transdermal nicotine, varied study doses
  instrument: Heterogeneous attention tasks
  magnitude: SMD 0.231 (95% CI 0.106 to 0.356) in the meta-analysis; memory was not significant.
  study:
    id: majdi2021-meta
    design: Meta-analysis of randomized clinical-trial publications
    sampleSize: 978
    populationLabels:
      - healthy nonsmokers
    comparator: Placebo
    route: transdermal
    formulation: nicotine patch
    assessmentTime: Acute laboratory assessments
  result:
    measure: standardized-mean-difference
    estimate: 0.231
    unit: SMD
    instrument: attention tasks
    comparator: placebo
    assessmentTime: acute assessment
    population: healthy nonsmoking adults
    confidenceInterval:
      lower: 0.106
      upper: 0.356
      level: 95
- id: effect-craving
  name: Craving during abstinence
  direction: Variable
  evidence: Human research
  description: Dependence can produce craving during abstinence; renewed nicotine can relieve withdrawal without demonstrating enhancement above baseline.
  sourceId: benowitz2010
  conceptId: craving
  population: People with established tobacco dependence
  exposure: Repeated nicotine exposure followed by abstinence
  instrument: null
  magnitude: null
- id: effect-sleep-disruption
  name: Sleep disruption after overnight nicotine
  direction: Increased
  evidence: Human research
  description: Overnight nicotine patches in healthy nonsmokers increased sleep latency and wake after sleep onset and reduced total sleep time, sleep efficiency and REM sleep; in abstinent smokers, a 24-hour patch can instead reduce withdrawal-related sleep disruption.
  sourceId: choi2017
  conflictingSourceIds:
    - staner2006
  conceptId: alertness
  population: Healthy nonsmoking men in one crossover study; dependent smokers in a separate cessation study
  exposure: 14 mg overnight patch or 24-hour patch during cessation
  instrument: Polysomnography
  magnitude: Direction differs by dependence and abstinence context.
- id: effect-cardiovascular-stimulation
  name: Acute cardiovascular stimulation
  direction: Increased
  evidence: Human research
  description: Sublingual nicotine increased heart rate, mean blood pressure and muscle sympathetic nerve activity in healthy smokers; nicotine-containing aerosol also produces acute sympathoexcitatory effects.
  sourceId: najem2006
  conceptId: alertness
  population: Healthy smokers and human e-cigarette studies
  exposure: 4 mg sublingual nicotine or nicotine-containing aerosol
  instrument: Heart rate, blood pressure and muscle sympathetic nerve activity
  magnitude: Quantitative pooled estimate not established in the reviewed sources.
- id: effect-metabolic
  name: Insulin sensitivity
  direction: Variable
  evidence: Human research
  description: A small older study found reduced insulin sensitivity during six weeks of NRT, while a randomized crossover study found no significant acute glucose or insulin change with a 14 mg patch.
  sourceId: assali2009
  conflictingSourceIds: []
  conceptId: anxiety
  population: Adult smokers in small NRT studies
  exposure: Nicotine replacement, including 14 mg patch
  instrument: Insulin-sensitivity indices
  magnitude: Conflicting small-study findings; no durable clinical metabolic effect established.
- id: reddit-nicotine-alertness-12028851
  conceptId: alertness
  name: Alertness
  direction: Increased
  evidence: Limited research
  description: Nicotine reportedly improves covert orienting of spatial attention, but enhanced alertness may also play a role.
  sourceId: reddit-pmid-12028851
  population: analyzed) by a 7-mg transdermal patch (one patch in a low-nicotine condition
  exposure: Nicotine reportedly improves covert orienting of spatial attention, but enhanced alertness may also play a role.
  instrument: null
  magnitude: null
  reportType: measured-assessment
```

## Outcomes

```yaml
- id: outcome-cessation
  name: Smoking cessation abstinence
  direction: Increased
  evidence: Human research
  description: Cochrane evidence found any NRT increased long-term abstinence versus control; this supports NRT as a cessation medicine in people who smoke, not nicotine use by nonusers.
  sourceId: hartmann-boyce2018
  conceptId: attention
  population: Motivated adult smokers in cessation trials
  exposure: Nicotine replacement therapy
  instrument: Long-term abstinence
  magnitude: RR 1.55 (95% CI 1.49 to 1.61; 133 studies, 64,640 participants).
  study:
    id: hartmann-boyce2018
    design: Cochrane systematic review
    sampleSize: 64640
    populationLabels:
      - adult smokers
    comparator: placebo or control
    route: multiple NRT routes
    formulation: patch, gum, lozenge, inhaler or nasal spray
    assessmentTime: long-term follow-up
  result:
    measure: risk-ratio
    estimate: 1.55
    unit: RR
    instrument: biochemically or self-reported abstinence as defined by included trials
    comparator: control
    assessmentTime: long-term follow-up
    population: adult smokers
    confidenceInterval:
      lower: 1.49
      upper: 1.61
      level: 95
- id: outcome-cardiovascular-events
  name: Major cardiovascular events in randomized nicotine studies
  direction: Variable
  evidence: Human research
  description: A systematic review of 42 randomized studies found no statistically significant differences in arrhythmia, nonfatal myocardial infarction, nonfatal stroke or cardiovascular death, but events were rare and follow-up short.
  sourceId: kim2023
  conceptId: cardiovascular
  population: Participants in randomized nicotine or NRT studies
  exposure: Nicotine products compared with non-nicotine controls
  instrument: Clinical cardiovascular events
  magnitude: No significant pooled difference; precision and long-term generalizability were limited.
- id: outcome-mci
  name: Cognitive tests in amnestic mild cognitive impairment
  direction: Increased
  evidence: Human research
  description: A six-month pilot trial in 74 nonsmoking adults with amnestic MCI improved several cognitive-test outcomes but not clinician-rated global impression; the two-year MIND trial top-line report found no significant cognitive or functional benefit.
  sourceId: newhouse2012
  conflictingSourceIds:
    - andrews2026
  conceptId: attention
  population: Older nonsmoking adults with amnestic MCI
  exposure: 15 mg/day transdermal nicotine for six months
  instrument: Continuous Performance Test and secondary cognitive measures
  magnitude: Pilot positive signal; no dementia or mortality endpoint.
- id: outcome-pregnancy-cessation
  name: NRT-assisted cessation during pregnancy
  direction: Variable
  evidence: Human research
  description: |
    Pregnancy evidence is low certainty: overall NRT abstinence was higher, but the placebo-controlled subgroup crossed the null and adherence was low.
  sourceId: claire2020
  conceptId: cardiovascular
  population: Pregnant smokers in 11 trials
  exposure: Nicotine replacement therapy
  instrument: Abstinence and birth outcomes
  magnitude: Overall RR 1.37 (95% CI 1.08 to 1.74); placebo-controlled subgroup RR 1.21 (95% CI 0.95 to 1.55).
- id: reddit-nicotine-attention-28150023
  conceptId: attention
  name: Attention
  direction: Variable
  evidence: Human research
  description: Nicotine is a cholinergic agonist with known pro-cognitive effects in the domains of alerting and orienting attention.
  sourceId: reddit-pmid-28150023
  population: N = 44 healthy adult non-smokers performed antisaccade, stop signal, Stroop, go/no-go, flanker, shape matching and Simon tasks, as well as the attentional network test (ANT) and a continuous performance task (CPT)
  exposure: Nicotine is a cholinergic agonist with known pro-cognitive effects in the domains of alerting and orienting attention.
  instrument: null
  magnitude: null
  reportType: measured-assessment
- id: reddit-nicotine-cognitive-performance-28150023
  conceptId: cognitive-performance
  name: Cognitive Performance
  direction: Variable
  evidence: Human research
  description: Nicotine is a cholinergic agonist with known pro-cognitive effects in the domains of alerting and orienting attention.
  sourceId: reddit-pmid-28150023
  population: N = 44 healthy adult non-smokers performed antisaccade, stop signal, Stroop, go/no-go, flanker, shape matching and Simon tasks, as well as the attentional network test (ANT) and a continuous performance task (CPT)
  exposure: Nicotine is a cholinergic agonist with known pro-cognitive effects in the domains of alerting and orienting attention.
  instrument: null
  magnitude: null
  reportType: measured-assessment
- id: reddit-nicotine-attention-25304866
  conceptId: attention
  name: Attention
  direction: Increased
  evidence: Limited research
  description: "RATIONALE: Several studies provide evidence that nicotine alleviates the detrimental effects of distracting sensory stimuli."
  sourceId: reddit-pmid-25304866
  population: Population described in the PubMed abstract
  exposure: "RATIONALE: Several studies provide evidence that nicotine alleviates the detrimental effects of distracting sensory stimuli."
  instrument: null
  magnitude: null
  reportType: measured-assessment
- id: reddit-nicotine-attention-9860103
  conceptId: attention
  name: Attention
  direction: Increased
  evidence: Human research
  description: Nicotine has been shown to improve attentiveness in smokers and attenuate attentional deficits in Alzheimer's disease patients, schizophrenics and adults with attention-deficit/hyperactivity disorder (ADHD).
  sourceId: reddit-pmid-9860103
  population: administered a 7 mg/day nicotine transdermal patch for 4
  exposure: Nicotine has been shown to improve attentiveness in smokers and attenuate attentional deficits in Alzheimer's disease patients, schizophrenics and adults with attention-deficit/hyperactivity disorder (ADHD).
  instrument: null
  magnitude: null
  reportType: measured-assessment
- id: reddit-nicotine-attention-12028851
  conceptId: attention
  name: Attention
  direction: Increased
  evidence: Limited research
  description: Nicotine reportedly improves covert orienting of spatial attention, but enhanced alertness may also play a role.
  sourceId: reddit-pmid-12028851
  population: analyzed) by a 7-mg transdermal patch (one patch in a low-nicotine condition
  exposure: Nicotine reportedly improves covert orienting of spatial attention, but enhanced alertness may also play a role.
  instrument: null
  magnitude: null
  reportType: measured-assessment
- id: reddit-nicotine-cognitive-performance-7675966
  conceptId: cognitive-performance
  name: Cognitive Performance
  direction: Increased
  evidence: Limited research
  description: Two experiments investigating the effects of nicotine on performance in the inspection time (IT) procedure are reported.
  sourceId: reddit-pmid-7675966
  population: Population described in the PubMed abstract
  exposure: Two experiments investigating the effects of nicotine on performance in the inspection time (IT) procedure are reported.
  instrument: null
  magnitude: null
  reportType: measured-assessment
- id: reddit-nicotine-cognitive-performance-23133419
  conceptId: cognitive-performance
  name: Cognitive Performance
  direction: Increased
  evidence: Human research
  description: In various studies nicotine has shown to alter cognitive functions in non-smoking subjects.
  sourceId: reddit-pmid-23133419
  population: Population described in the PubMed abstract
  exposure: In various studies nicotine has shown to alter cognitive functions in non-smoking subjects.
  instrument: null
  magnitude: null
  reportType: measured-assessment
- id: reddit-nicotine-attention-25353339
  conceptId: attention
  name: Attention
  direction: Variable
  evidence: Limited research
  description: Successful decision making in our daily lives requires weighing an option's costs against its associated benefits.
  sourceId: reddit-pmid-25353339
  population: Population described in the PubMed abstract
  exposure: Successful decision making in our daily lives requires weighing an option's costs against its associated benefits.
  instrument: null
  magnitude: null
  reportType: measured-assessment
- id: reddit-nicotine-cognitive-performance-25353339
  conceptId: cognitive-performance
  name: Cognitive Performance
  direction: Variable
  evidence: Limited research
  description: Successful decision making in our daily lives requires weighing an option's costs against its associated benefits.
  sourceId: reddit-pmid-25353339
  population: Population described in the PubMed abstract
  exposure: Successful decision making in our daily lives requires weighing an option's costs against its associated benefits.
  instrument: null
  magnitude: null
  reportType: measured-assessment
```

## Mechanisms

```yaml
- title: Nicotinic receptor agonism and reward
  description: Nicotine activates neuronal and peripheral nicotinic acetylcholine receptors, including alpha4beta2-containing receptors central to reward and dependence, and increases mesolimbic dopamine signaling.
  sourceId: benowitz2010
  conceptId: nicotinic-receptor
- title: Neuroadaptation and withdrawal
  description: Repeated exposure causes receptor desensitization, compensatory upregulation and altered reward thresholds; falling nicotine concentrations contribute to craving, irritability, dysphoria, poor concentration and insomnia.
  sourceId: nci-withdrawal
  conceptId: craving
- title: Sympathetic stimulation
  description: Peripheral receptor activation stimulates catecholamine release and increases heart rate, vascular tone and usually blood pressure. Combustible smoke adds oxidative, inflammatory and endothelial injury not reproduced by medicinal nicotine alone.
  sourceId: najem2006
  conceptId: cardiovascular
- title: CYP2A6 metabolism
  description: CYP2A6-mediated oxidation forms nicotine-iminium intermediates and cotinine; glucuronidation and nicotine N-oxide formation are additional pathways.
  sourceId: benowitz2009
  conceptId: cyp2a6
- title: Source-specific finding from PMID 22701817
  description: Long-term smoking is major risk factor for a variety of cancers, including those of the gastrointestinal (GI) tract.
  sourceId: reddit-pmid-22701817
- title: Source-specific finding from PMID 25799226
  description: Cigarette smoking promotes body weight reduction in humans while paradoxically also promoting insulin resistance (IR) and hyperinsulinemia.
  sourceId: reddit-pmid-25799226
- title: Source-specific finding from PMID 24323338
  description: Oral contraceptives (OC) and smoking-derived nicotine (N) are known to synergistically increase the risk and severity of cerebral ischemia in women.
  sourceId: reddit-pmid-24323338
- title: Source-specific finding from PMID 22451324
  description: Accumulating evidence suggests that mitochondria are important targets for the actions of estrogens and studies indicated that localization of estrogen receptor β (ERβ) in neuronal mitochondrial (mtERβ) might directly affect neuronal mitochondrial function in vitro.
  sourceId: reddit-pmid-22451324
- title: Source-specific finding from PMID 23892062
  description: The deleterious health effects of cigarette smoking are far reaching, and it remains the most important modifiable risk factor for improving overall morbidity and mortality.
  sourceId: reddit-pmid-23892062
- title: Source-specific finding from PMID 26205096
  description: Cigarette smoking is the most important risk factor in the development of human lung cancer.
  sourceId: reddit-pmid-26205096
- title: Source-specific finding from PMID 26184482
  description: Continued smoking is highly associated with not only a higher incidence but also greater risk of tumor recurrence, progression, and acquired chemoresistance of urothelial carcinoma.
  sourceId: reddit-pmid-26184482
- title: Source-specific finding from PMID 31214115
  description: The prevalence of electronic cigarette (e-cigarettes) use has rapidly increased worldwide.
  sourceId: reddit-pmid-31214115
- title: Source-specific finding from PMID 31092012
  description: Objective- Inhibition of SIRT (sirtuin)-1, a nicotinamide adenine dinucleotide-dependent protein deacetylase, is linked to cigarette smoking-induced arterial stiffness, but the underlying mechanisms remain largely unknown.
  sourceId: reddit-pmid-31092012
- title: Source-specific finding from PMID 25316032
  description: It is widely accepted that fibrosis is frequently observed in the gingiva of smokers.
  sourceId: reddit-pmid-25316032
- title: Source-specific finding from PMID 26239821
  description: "OBJECTIVES: Electronic cigarettes (e-cigarettes) are generally acknowledged as a safer alternative to the use of combusted tobacco products."
  sourceId: reddit-pmid-26239821
- title: Source-specific finding from PMID 25929709
  description: "OBJECTIVES: Nicotine is considered an etiologic factor for chronic inflammatory phenomena within the periodontal ligament that may result in loss of periodontal attachment."
  sourceId: reddit-pmid-25929709
- title: Source-specific finding from PMID 23748423
  description: Cigarette smoking is a major risk factor for atherosclerosis and cardiovascular disease.
  sourceId: reddit-pmid-23748423
- title: Source-specific finding from PMID 25914226
  description: "PURPOSE: Osteoarthritis (OA) is a degenerative joint pathology characterized by articular cartilage degradation that lacks from efficient therapy."
  sourceId: reddit-pmid-25914226
- title: Source-specific finding from PMID 26633299
  description: Thiamin (vitamin B1), a member of the water-soluble family of vitamins, is essential for normal cellular functions; its deficiency results in oxidative stress and mitochondrial dysfunction.
  sourceId: reddit-pmid-26633299
- title: Source-specific finding from PMID 23133419
  description: In various studies nicotine has shown to alter cognitive functions in non-smoking subjects.
  sourceId: reddit-pmid-23133419
```

## Cautions

```yaml
- title: Dependence and loss of control
  description: Nicotine can produce tolerance, craving, cue-reactivity, compulsive use and withdrawal even without tobacco smoke; faster delivery and higher peaks generally increase reinforcement.
  sourceId: benowitz2010
- title: Acute toxicity
  description: Excess exposure can cause nausea, vomiting, dizziness, weakness, sweating, palpitations, tachycardia, confusion and hypotension at severe toxicity.
  sourceId: dailymed-patch
- title: Cardiovascular disease
  description: Nicotine raises heart rate and blood pressure. OTC labels advise clinician review for recent myocardial infarction, serious arrhythmia, worsening angina and uncontrolled hypertension.
  sourceId: dailymed-patch
- title: Pregnancy and adolescence
  description: Nicotine crosses the placenta and enters breast milk; developmental exposure is a public-health concern. NRT decisions during pregnancy are formulation-, adherence- and patient-specific when the alternative is continued smoking.
  sourceId: claire2020
- title: Sleep and product confusion
  description: Overnight patches can cause vivid dreams and insomnia. Evidence for medicinal NRT cannot be transferred directly to cigarettes, high-delivery e-cigarettes, pouches or smokeless tobacco.
  sourceId: choi2017
- title: Source-specific finding from PMID 31214115
  description: The prevalence of electronic cigarette (e-cigarettes) use has rapidly increased worldwide.
  sourceId: reddit-pmid-31214115
- title: Source-specific finding from PMID 26239821
  description: "OBJECTIVES: Electronic cigarettes (e-cigarettes) are generally acknowledged as a safer alternative to the use of combusted tobacco products."
  sourceId: reddit-pmid-26239821
- title: Source-specific finding from PMID 23748423
  description: Cigarette smoking is a major risk factor for atherosclerosis and cardiovascular disease.
  sourceId: reddit-pmid-23748423
```

## Claims

```yaml
- id: nicotine-reliable-attention
  assertion: Nicotine reliably improves attention
  relation: cognitive-enhancement
  participants:
    - entityId: substance:nicotine
      role: agent
    - entityId: tag:attention
      role: outcome
  context: Acute patch meta-analysis versus heterogeneous acute randomized review.
  sourceIds:
    - majdi2021
  conflictingSourceIds:
    - pasetes2020
  assessment: not-formally-assessed
  limitation: Small task-dependent effects do not establish general enhancement or benefit in dependent users beyond withdrawal reversal.
- id: nicotine-antidepressant
  assertion: Nicotine is an antidepressant
  relation: mood-treatment
  participants:
    - entityId: substance:nicotine
      role: agent
    - entityId: tag:anxiety
      role: affective-outcome
  context: Small pilot studies and smoking-cessation mental-health evidence.
  sourceIds:
    - mcclernon2006
    - taylor2021
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Cessation improvements do not isolate chronic nicotine effects and pilot mood findings are preliminary.
- id: nrt-safer-than-smoking
  assertion: Medicinal NRT is safer than continued cigarette smoking
  relation: harm-reduction
  participants:
    - entityId: substance:nicotine
      role: active-ingredient
    - entityId: tag:stimulant
      role: comparator-exposure
  context: FDA distinction between nicotine addiction and combustion toxicants.
  sourceIds:
    - fda-nicotine
    - fda-cessation
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Safer than smoking does not mean risk-free or appropriate for nicotine-naive people.
- id: nicotine-longevity
  assertion: Nicotine extends lifespan or prevents dementia
  relation: longevity
  participants:
    - entityId: substance:nicotine
      role: agent
    - entityId: tag:attention
      role: proposed-benefit
  context: No qualifying human longevity trial located.
  sourceIds:
    - newhouse2012
    - andrews2026
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Short cognitive studies and a conference top-line report do not establish dementia prevention, biological-age slowing or lifespan extension.
- id: reddit-claim-nicotine-28150023-0
  assertion: Nicotine is associated with the reported cognitive performance finding in this publication.
  relation: associated-with
  participants:
    - entityId: substance:nicotine
      role: intervention or exposure
    - entityId: tag:cognitive-performance
      role: reported endpoint
  context: Publication abstract; direction and population are retained on the linked observation.
  sourceIds:
    - reddit-pmid-28150023
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Automated corpus import from an abstract; this record is not an independent meta-analysis.
- id: reddit-claim-nicotine-25304866-1
  assertion: Nicotine is associated with the reported attention finding in this publication.
  relation: associated-with
  participants:
    - entityId: substance:nicotine
      role: intervention or exposure
    - entityId: tag:attention
      role: reported endpoint
  context: Publication abstract; direction and population are retained on the linked observation.
  sourceIds:
    - reddit-pmid-25304866
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Automated corpus import from an abstract; this record is not an independent meta-analysis.
- id: reddit-claim-nicotine-9860103-2
  assertion: Nicotine is associated with the reported attention finding in this publication.
  relation: associated-with
  participants:
    - entityId: substance:nicotine
      role: intervention or exposure
    - entityId: tag:attention
      role: reported endpoint
  context: Publication abstract; direction and population are retained on the linked observation.
  sourceIds:
    - reddit-pmid-9860103
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Automated corpus import from an abstract; this record is not an independent meta-analysis.
- id: reddit-claim-nicotine-12028851-3
  assertion: Nicotine is associated with the reported alertness finding in this publication.
  relation: associated-with
  participants:
    - entityId: substance:nicotine
      role: intervention or exposure
    - entityId: tag:alertness
      role: reported endpoint
  context: Publication abstract; direction and population are retained on the linked observation.
  sourceIds:
    - reddit-pmid-12028851
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Automated corpus import from an abstract; this record is not an independent meta-analysis.
- id: reddit-claim-nicotine-12028851-4
  assertion: Nicotine is associated with the reported attention finding in this publication.
  relation: associated-with
  participants:
    - entityId: substance:nicotine
      role: intervention or exposure
    - entityId: tag:attention
      role: reported endpoint
  context: Publication abstract; direction and population are retained on the linked observation.
  sourceIds:
    - reddit-pmid-12028851
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Automated corpus import from an abstract; this record is not an independent meta-analysis.
- id: reddit-claim-nicotine-7675966-5
  assertion: Nicotine is associated with the reported alertness finding in this publication.
  relation: associated-with
  participants:
    - entityId: substance:nicotine
      role: intervention or exposure
    - entityId: tag:alertness
      role: reported endpoint
  context: Publication abstract; direction and population are retained on the linked observation.
  sourceIds:
    - reddit-pmid-7675966
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Automated corpus import from an abstract; this record is not an independent meta-analysis.
- id: reddit-claim-nicotine-7675966-6
  assertion: Nicotine is associated with the reported cognitive performance finding in this publication.
  relation: associated-with
  participants:
    - entityId: substance:nicotine
      role: intervention or exposure
    - entityId: tag:cognitive-performance
      role: reported endpoint
  context: Publication abstract; direction and population are retained on the linked observation.
  sourceIds:
    - reddit-pmid-7675966
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Automated corpus import from an abstract; this record is not an independent meta-analysis.
- id: reddit-claim-nicotine-22701817-7
  assertion: Nicotine is associated with the reported alertness finding in this publication.
  relation: associated-with
  participants:
    - entityId: substance:nicotine
      role: intervention or exposure
    - entityId: tag:alertness
      role: reported endpoint
  context: Publication abstract; direction and population are retained on the linked observation.
  sourceIds:
    - reddit-pmid-22701817
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Automated corpus import from an abstract; this record is not an independent meta-analysis.
- id: reddit-claim-nicotine-22701817-8
  assertion: Nicotine is associated with the reported cognitive performance finding in this publication.
  relation: associated-with
  participants:
    - entityId: substance:nicotine
      role: intervention or exposure
    - entityId: tag:cognitive-performance
      role: reported endpoint
  context: Publication abstract; direction and population are retained on the linked observation.
  sourceIds:
    - reddit-pmid-22701817
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Automated corpus import from an abstract; this record is not an independent meta-analysis.
- id: reddit-claim-nicotine-8790020-9
  assertion: Nicotine is associated with the reported alertness finding in this publication.
  relation: associated-with
  participants:
    - entityId: substance:nicotine
      role: intervention or exposure
    - entityId: tag:alertness
      role: reported endpoint
  context: Publication abstract; direction and population are retained on the linked observation.
  sourceIds:
    - reddit-pmid-8790020
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Automated corpus import from an abstract; this record is not an independent meta-analysis.
- id: reddit-claim-nicotine-8790020-10
  assertion: Nicotine is associated with the reported cognitive performance finding in this publication.
  relation: associated-with
  participants:
    - entityId: substance:nicotine
      role: intervention or exposure
    - entityId: tag:cognitive-performance
      role: reported endpoint
  context: Publication abstract; direction and population are retained on the linked observation.
  sourceIds:
    - reddit-pmid-8790020
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Automated corpus import from an abstract; this record is not an independent meta-analysis.
- id: reddit-claim-nicotine-25799226-11
  assertion: Nicotine is associated with the reported alertness finding in this publication.
  relation: associated-with
  participants:
    - entityId: substance:nicotine
      role: intervention or exposure
    - entityId: tag:alertness
      role: reported endpoint
  context: Publication abstract; direction and population are retained on the linked observation.
  sourceIds:
    - reddit-pmid-25799226
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Automated corpus import from an abstract; this record is not an independent meta-analysis.
- id: reddit-claim-nicotine-25799226-12
  assertion: Nicotine is associated with the reported cognitive performance finding in this publication.
  relation: associated-with
  participants:
    - entityId: substance:nicotine
      role: intervention or exposure
    - entityId: tag:cognitive-performance
      role: reported endpoint
  context: Publication abstract; direction and population are retained on the linked observation.
  sourceIds:
    - reddit-pmid-25799226
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Automated corpus import from an abstract; this record is not an independent meta-analysis.
- id: reddit-claim-nicotine-24323338-13
  assertion: Nicotine is associated with the reported alertness finding in this publication.
  relation: associated-with
  participants:
    - entityId: substance:nicotine
      role: intervention or exposure
    - entityId: tag:alertness
      role: reported endpoint
  context: Publication abstract; direction and population are retained on the linked observation.
  sourceIds:
    - reddit-pmid-24323338
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Automated corpus import from an abstract; this record is not an independent meta-analysis.
- id: reddit-claim-nicotine-24323338-14
  assertion: Nicotine is associated with the reported cognitive performance finding in this publication.
  relation: associated-with
  participants:
    - entityId: substance:nicotine
      role: intervention or exposure
    - entityId: tag:cognitive-performance
      role: reported endpoint
  context: Publication abstract; direction and population are retained on the linked observation.
  sourceIds:
    - reddit-pmid-24323338
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Automated corpus import from an abstract; this record is not an independent meta-analysis.
- id: reddit-claim-nicotine-22451324-15
  assertion: Nicotine is associated with the reported alertness finding in this publication.
  relation: associated-with
  participants:
    - entityId: substance:nicotine
      role: intervention or exposure
    - entityId: tag:alertness
      role: reported endpoint
  context: Publication abstract; direction and population are retained on the linked observation.
  sourceIds:
    - reddit-pmid-22451324
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Automated corpus import from an abstract; this record is not an independent meta-analysis.
- id: reddit-claim-nicotine-22451324-16
  assertion: Nicotine is associated with the reported cognitive performance finding in this publication.
  relation: associated-with
  participants:
    - entityId: substance:nicotine
      role: intervention or exposure
    - entityId: tag:cognitive-performance
      role: reported endpoint
  context: Publication abstract; direction and population are retained on the linked observation.
  sourceIds:
    - reddit-pmid-22451324
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Automated corpus import from an abstract; this record is not an independent meta-analysis.
- id: reddit-claim-nicotine-25925411-17
  assertion: Nicotine is associated with the reported alertness finding in this publication.
  relation: associated-with
  participants:
    - entityId: substance:nicotine
      role: intervention or exposure
    - entityId: tag:alertness
      role: reported endpoint
  context: Publication abstract; direction and population are retained on the linked observation.
  sourceIds:
    - reddit-pmid-25925411
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Automated corpus import from an abstract; this record is not an independent meta-analysis.
- id: reddit-claim-nicotine-25925411-18
  assertion: Nicotine is associated with the reported cognitive performance finding in this publication.
  relation: associated-with
  participants:
    - entityId: substance:nicotine
      role: intervention or exposure
    - entityId: tag:cognitive-performance
      role: reported endpoint
  context: Publication abstract; direction and population are retained on the linked observation.
  sourceIds:
    - reddit-pmid-25925411
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Automated corpus import from an abstract; this record is not an independent meta-analysis.
- id: reddit-claim-nicotine-23892062-19
  assertion: Nicotine is associated with the reported alertness finding in this publication.
  relation: associated-with
  participants:
    - entityId: substance:nicotine
      role: intervention or exposure
    - entityId: tag:alertness
      role: reported endpoint
  context: Publication abstract; direction and population are retained on the linked observation.
  sourceIds:
    - reddit-pmid-23892062
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Automated corpus import from an abstract; this record is not an independent meta-analysis.
- id: reddit-claim-nicotine-23892062-20
  assertion: Nicotine is associated with the reported cognitive performance finding in this publication.
  relation: associated-with
  participants:
    - entityId: substance:nicotine
      role: intervention or exposure
    - entityId: tag:cognitive-performance
      role: reported endpoint
  context: Publication abstract; direction and population are retained on the linked observation.
  sourceIds:
    - reddit-pmid-23892062
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Automated corpus import from an abstract; this record is not an independent meta-analysis.
- id: reddit-claim-nicotine-19246447-21
  assertion: Nicotine is associated with the reported alertness finding in this publication.
  relation: associated-with
  participants:
    - entityId: substance:nicotine
      role: intervention or exposure
    - entityId: tag:alertness
      role: reported endpoint
  context: Publication abstract; direction and population are retained on the linked observation.
  sourceIds:
    - reddit-pmid-19246447
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Automated corpus import from an abstract; this record is not an independent meta-analysis.
- id: reddit-claim-nicotine-19246447-22
  assertion: Nicotine is associated with the reported cognitive performance finding in this publication.
  relation: associated-with
  participants:
    - entityId: substance:nicotine
      role: intervention or exposure
    - entityId: tag:cognitive-performance
      role: reported endpoint
  context: Publication abstract; direction and population are retained on the linked observation.
  sourceIds:
    - reddit-pmid-19246447
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Automated corpus import from an abstract; this record is not an independent meta-analysis.
- id: reddit-claim-nicotine-22923602-23
  assertion: Nicotine is associated with the reported alertness finding in this publication.
  relation: associated-with
  participants:
    - entityId: substance:nicotine
      role: intervention or exposure
    - entityId: tag:alertness
      role: reported endpoint
  context: Publication abstract; direction and population are retained on the linked observation.
  sourceIds:
    - reddit-pmid-22923602
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Automated corpus import from an abstract; this record is not an independent meta-analysis.
- id: reddit-claim-nicotine-22923602-24
  assertion: Nicotine is associated with the reported cognitive performance finding in this publication.
  relation: associated-with
  participants:
    - entityId: substance:nicotine
      role: intervention or exposure
    - entityId: tag:cognitive-performance
      role: reported endpoint
  context: Publication abstract; direction and population are retained on the linked observation.
  sourceIds:
    - reddit-pmid-22923602
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Automated corpus import from an abstract; this record is not an independent meta-analysis.
- id: reddit-claim-nicotine-26205096-25
  assertion: Nicotine is associated with the reported alertness finding in this publication.
  relation: associated-with
  participants:
    - entityId: substance:nicotine
      role: intervention or exposure
    - entityId: tag:alertness
      role: reported endpoint
  context: Publication abstract; direction and population are retained on the linked observation.
  sourceIds:
    - reddit-pmid-26205096
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Automated corpus import from an abstract; this record is not an independent meta-analysis.
- id: reddit-claim-nicotine-26205096-26
  assertion: Nicotine is associated with the reported cognitive performance finding in this publication.
  relation: associated-with
  participants:
    - entityId: substance:nicotine
      role: intervention or exposure
    - entityId: tag:cognitive-performance
      role: reported endpoint
  context: Publication abstract; direction and population are retained on the linked observation.
  sourceIds:
    - reddit-pmid-26205096
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Automated corpus import from an abstract; this record is not an independent meta-analysis.
- id: reddit-claim-nicotine-24756761-27
  assertion: Nicotine is associated with the reported alertness finding in this publication.
  relation: associated-with
  participants:
    - entityId: substance:nicotine
      role: intervention or exposure
    - entityId: tag:alertness
      role: reported endpoint
  context: Publication abstract; direction and population are retained on the linked observation.
  sourceIds:
    - reddit-pmid-24756761
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Automated corpus import from an abstract; this record is not an independent meta-analysis.
- id: reddit-claim-nicotine-24756761-28
  assertion: Nicotine is associated with the reported cognitive performance finding in this publication.
  relation: associated-with
  participants:
    - entityId: substance:nicotine
      role: intervention or exposure
    - entityId: tag:cognitive-performance
      role: reported endpoint
  context: Publication abstract; direction and population are retained on the linked observation.
  sourceIds:
    - reddit-pmid-24756761
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Automated corpus import from an abstract; this record is not an independent meta-analysis.
- id: reddit-claim-nicotine-26184482-29
  assertion: Nicotine is associated with the reported alertness finding in this publication.
  relation: associated-with
  participants:
    - entityId: substance:nicotine
      role: intervention or exposure
    - entityId: tag:alertness
      role: reported endpoint
  context: Publication abstract; direction and population are retained on the linked observation.
  sourceIds:
    - reddit-pmid-26184482
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Automated corpus import from an abstract; this record is not an independent meta-analysis.
- id: reddit-claim-nicotine-26184482-30
  assertion: Nicotine is associated with the reported cognitive performance finding in this publication.
  relation: associated-with
  participants:
    - entityId: substance:nicotine
      role: intervention or exposure
    - entityId: tag:cognitive-performance
      role: reported endpoint
  context: Publication abstract; direction and population are retained on the linked observation.
  sourceIds:
    - reddit-pmid-26184482
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Automated corpus import from an abstract; this record is not an independent meta-analysis.
- id: reddit-claim-nicotine-25128927-31
  assertion: Nicotine is associated with the reported alertness finding in this publication.
  relation: associated-with
  participants:
    - entityId: substance:nicotine
      role: intervention or exposure
    - entityId: tag:alertness
      role: reported endpoint
  context: Publication abstract; direction and population are retained on the linked observation.
  sourceIds:
    - reddit-pmid-25128927
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Automated corpus import from an abstract; this record is not an independent meta-analysis.
- id: reddit-claim-nicotine-25128927-32
  assertion: Nicotine is associated with the reported cognitive performance finding in this publication.
  relation: associated-with
  participants:
    - entityId: substance:nicotine
      role: intervention or exposure
    - entityId: tag:cognitive-performance
      role: reported endpoint
  context: Publication abstract; direction and population are retained on the linked observation.
  sourceIds:
    - reddit-pmid-25128927
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Automated corpus import from an abstract; this record is not an independent meta-analysis.
- id: reddit-claim-nicotine-31214115-33
  assertion: Nicotine is associated with the reported alertness finding in this publication.
  relation: associated-with
  participants:
    - entityId: substance:nicotine
      role: intervention or exposure
    - entityId: tag:alertness
      role: reported endpoint
  context: Publication abstract; direction and population are retained on the linked observation.
  sourceIds:
    - reddit-pmid-31214115
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Automated corpus import from an abstract; this record is not an independent meta-analysis.
- id: reddit-claim-nicotine-31214115-34
  assertion: Nicotine is associated with the reported cognitive performance finding in this publication.
  relation: associated-with
  participants:
    - entityId: substance:nicotine
      role: intervention or exposure
    - entityId: tag:cognitive-performance
      role: reported endpoint
  context: Publication abstract; direction and population are retained on the linked observation.
  sourceIds:
    - reddit-pmid-31214115
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Automated corpus import from an abstract; this record is not an independent meta-analysis.
- id: reddit-claim-nicotine-31092012-35
  assertion: Nicotine is associated with the reported alertness finding in this publication.
  relation: associated-with
  participants:
    - entityId: substance:nicotine
      role: intervention or exposure
    - entityId: tag:alertness
      role: reported endpoint
  context: Publication abstract; direction and population are retained on the linked observation.
  sourceIds:
    - reddit-pmid-31092012
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Automated corpus import from an abstract; this record is not an independent meta-analysis.
- id: reddit-claim-nicotine-31092012-36
  assertion: Nicotine is associated with the reported cognitive performance finding in this publication.
  relation: associated-with
  participants:
    - entityId: substance:nicotine
      role: intervention or exposure
    - entityId: tag:cognitive-performance
      role: reported endpoint
  context: Publication abstract; direction and population are retained on the linked observation.
  sourceIds:
    - reddit-pmid-31092012
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Automated corpus import from an abstract; this record is not an independent meta-analysis.
- id: reddit-claim-nicotine-25316032-37
  assertion: Nicotine is associated with the reported alertness finding in this publication.
  relation: associated-with
  participants:
    - entityId: substance:nicotine
      role: intervention or exposure
    - entityId: tag:alertness
      role: reported endpoint
  context: Publication abstract; direction and population are retained on the linked observation.
  sourceIds:
    - reddit-pmid-25316032
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Automated corpus import from an abstract; this record is not an independent meta-analysis.
- id: reddit-claim-nicotine-25316032-38
  assertion: Nicotine is associated with the reported cognitive performance finding in this publication.
  relation: associated-with
  participants:
    - entityId: substance:nicotine
      role: intervention or exposure
    - entityId: tag:cognitive-performance
      role: reported endpoint
  context: Publication abstract; direction and population are retained on the linked observation.
  sourceIds:
    - reddit-pmid-25316032
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Automated corpus import from an abstract; this record is not an independent meta-analysis.
- id: reddit-claim-nicotine-26239821-39
  assertion: Nicotine is associated with the reported alertness finding in this publication.
  relation: associated-with
  participants:
    - entityId: substance:nicotine
      role: intervention or exposure
    - entityId: tag:alertness
      role: reported endpoint
  context: Publication abstract; direction and population are retained on the linked observation.
  sourceIds:
    - reddit-pmid-26239821
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Automated corpus import from an abstract; this record is not an independent meta-analysis.
- id: reddit-claim-nicotine-26239821-40
  assertion: Nicotine is associated with the reported cognitive performance finding in this publication.
  relation: associated-with
  participants:
    - entityId: substance:nicotine
      role: intervention or exposure
    - entityId: tag:cognitive-performance
      role: reported endpoint
  context: Publication abstract; direction and population are retained on the linked observation.
  sourceIds:
    - reddit-pmid-26239821
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Automated corpus import from an abstract; this record is not an independent meta-analysis.
- id: reddit-claim-nicotine-25929709-41
  assertion: Nicotine is associated with the reported alertness finding in this publication.
  relation: associated-with
  participants:
    - entityId: substance:nicotine
      role: intervention or exposure
    - entityId: tag:alertness
      role: reported endpoint
  context: Publication abstract; direction and population are retained on the linked observation.
  sourceIds:
    - reddit-pmid-25929709
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Automated corpus import from an abstract; this record is not an independent meta-analysis.
- id: reddit-claim-nicotine-25929709-42
  assertion: Nicotine is associated with the reported cognitive performance finding in this publication.
  relation: associated-with
  participants:
    - entityId: substance:nicotine
      role: intervention or exposure
    - entityId: tag:cognitive-performance
      role: reported endpoint
  context: Publication abstract; direction and population are retained on the linked observation.
  sourceIds:
    - reddit-pmid-25929709
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Automated corpus import from an abstract; this record is not an independent meta-analysis.
- id: reddit-claim-nicotine-23748423-43
  assertion: Nicotine is associated with the reported alertness finding in this publication.
  relation: associated-with
  participants:
    - entityId: substance:nicotine
      role: intervention or exposure
    - entityId: tag:alertness
      role: reported endpoint
  context: Publication abstract; direction and population are retained on the linked observation.
  sourceIds:
    - reddit-pmid-23748423
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Automated corpus import from an abstract; this record is not an independent meta-analysis.
- id: reddit-claim-nicotine-23748423-44
  assertion: Nicotine is associated with the reported cognitive performance finding in this publication.
  relation: associated-with
  participants:
    - entityId: substance:nicotine
      role: intervention or exposure
    - entityId: tag:cognitive-performance
      role: reported endpoint
  context: Publication abstract; direction and population are retained on the linked observation.
  sourceIds:
    - reddit-pmid-23748423
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Automated corpus import from an abstract; this record is not an independent meta-analysis.
- id: reddit-claim-nicotine-25914226-45
  assertion: Nicotine is associated with the reported alertness finding in this publication.
  relation: associated-with
  participants:
    - entityId: substance:nicotine
      role: intervention or exposure
    - entityId: tag:alertness
      role: reported endpoint
  context: Publication abstract; direction and population are retained on the linked observation.
  sourceIds:
    - reddit-pmid-25914226
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Automated corpus import from an abstract; this record is not an independent meta-analysis.
- id: reddit-claim-nicotine-25914226-46
  assertion: Nicotine is associated with the reported cognitive performance finding in this publication.
  relation: associated-with
  participants:
    - entityId: substance:nicotine
      role: intervention or exposure
    - entityId: tag:cognitive-performance
      role: reported endpoint
  context: Publication abstract; direction and population are retained on the linked observation.
  sourceIds:
    - reddit-pmid-25914226
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Automated corpus import from an abstract; this record is not an independent meta-analysis.
- id: reddit-claim-nicotine-26633299-47
  assertion: Nicotine is associated with the reported alertness finding in this publication.
  relation: associated-with
  participants:
    - entityId: substance:nicotine
      role: intervention or exposure
    - entityId: tag:alertness
      role: reported endpoint
  context: Publication abstract; direction and population are retained on the linked observation.
  sourceIds:
    - reddit-pmid-26633299
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Automated corpus import from an abstract; this record is not an independent meta-analysis.
- id: reddit-claim-nicotine-26633299-48
  assertion: Nicotine is associated with the reported cognitive performance finding in this publication.
  relation: associated-with
  participants:
    - entityId: substance:nicotine
      role: intervention or exposure
    - entityId: tag:cognitive-performance
      role: reported endpoint
  context: Publication abstract; direction and population are retained on the linked observation.
  sourceIds:
    - reddit-pmid-26633299
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Automated corpus import from an abstract; this record is not an independent meta-analysis.
- id: reddit-claim-nicotine-25353061-49
  assertion: Nicotine is associated with the reported alertness finding in this publication.
  relation: associated-with
  participants:
    - entityId: substance:nicotine
      role: intervention or exposure
    - entityId: tag:alertness
      role: reported endpoint
  context: Publication abstract; direction and population are retained on the linked observation.
  sourceIds:
    - reddit-pmid-25353061
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Automated corpus import from an abstract; this record is not an independent meta-analysis.
- id: reddit-claim-nicotine-25353061-50
  assertion: Nicotine is associated with the reported cognitive performance finding in this publication.
  relation: associated-with
  participants:
    - entityId: substance:nicotine
      role: intervention or exposure
    - entityId: tag:cognitive-performance
      role: reported endpoint
  context: Publication abstract; direction and population are retained on the linked observation.
  sourceIds:
    - reddit-pmid-25353061
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Automated corpus import from an abstract; this record is not an independent meta-analysis.
- id: reddit-claim-nicotine-24832759-51
  assertion: Nicotine is associated with the reported alertness finding in this publication.
  relation: associated-with
  participants:
    - entityId: substance:nicotine
      role: intervention or exposure
    - entityId: tag:alertness
      role: reported endpoint
  context: Publication abstract; direction and population are retained on the linked observation.
  sourceIds:
    - reddit-pmid-24832759
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Automated corpus import from an abstract; this record is not an independent meta-analysis.
- id: reddit-claim-nicotine-24832759-52
  assertion: Nicotine is associated with the reported cognitive performance finding in this publication.
  relation: associated-with
  participants:
    - entityId: substance:nicotine
      role: intervention or exposure
    - entityId: tag:cognitive-performance
      role: reported endpoint
  context: Publication abstract; direction and population are retained on the linked observation.
  sourceIds:
    - reddit-pmid-24832759
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Automated corpus import from an abstract; this record is not an independent meta-analysis.
- id: reddit-claim-nicotine-26345343-53
  assertion: Nicotine is associated with the reported alertness finding in this publication.
  relation: associated-with
  participants:
    - entityId: substance:nicotine
      role: intervention or exposure
    - entityId: tag:alertness
      role: reported endpoint
  context: Publication abstract; direction and population are retained on the linked observation.
  sourceIds:
    - reddit-pmid-26345343
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Automated corpus import from an abstract; this record is not an independent meta-analysis.
- id: reddit-claim-nicotine-26345343-54
  assertion: Nicotine is associated with the reported cognitive performance finding in this publication.
  relation: associated-with
  participants:
    - entityId: substance:nicotine
      role: intervention or exposure
    - entityId: tag:cognitive-performance
      role: reported endpoint
  context: Publication abstract; direction and population are retained on the linked observation.
  sourceIds:
    - reddit-pmid-26345343
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Automated corpus import from an abstract; this record is not an independent meta-analysis.
- id: reddit-claim-nicotine-23133419-55
  assertion: Nicotine is associated with the reported alertness finding in this publication.
  relation: associated-with
  participants:
    - entityId: substance:nicotine
      role: intervention or exposure
    - entityId: tag:alertness
      role: reported endpoint
  context: Publication abstract; direction and population are retained on the linked observation.
  sourceIds:
    - reddit-pmid-23133419
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Automated corpus import from an abstract; this record is not an independent meta-analysis.
- id: reddit-claim-nicotine-23133419-56
  assertion: Nicotine is associated with the reported cognitive performance finding in this publication.
  relation: associated-with
  participants:
    - entityId: substance:nicotine
      role: intervention or exposure
    - entityId: tag:cognitive-performance
      role: reported endpoint
  context: Publication abstract; direction and population are retained on the linked observation.
  sourceIds:
    - reddit-pmid-23133419
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Automated corpus import from an abstract; this record is not an independent meta-analysis.
- id: reddit-claim-nicotine-7892431-57
  assertion: Nicotine is associated with the reported alertness finding in this publication.
  relation: associated-with
  participants:
    - entityId: substance:nicotine
      role: intervention or exposure
    - entityId: tag:alertness
      role: reported endpoint
  context: Publication abstract; direction and population are retained on the linked observation.
  sourceIds:
    - reddit-pmid-7892431
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Automated corpus import from an abstract; this record is not an independent meta-analysis.
- id: reddit-claim-nicotine-7892431-58
  assertion: Nicotine is associated with the reported cognitive performance finding in this publication.
  relation: associated-with
  participants:
    - entityId: substance:nicotine
      role: intervention or exposure
    - entityId: tag:cognitive-performance
      role: reported endpoint
  context: Publication abstract; direction and population are retained on the linked observation.
  sourceIds:
    - reddit-pmid-7892431
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Automated corpus import from an abstract; this record is not an independent meta-analysis.
- id: reddit-claim-nicotine-25353339-59
  assertion: Nicotine is associated with the reported alertness finding in this publication.
  relation: associated-with
  participants:
    - entityId: substance:nicotine
      role: intervention or exposure
    - entityId: tag:alertness
      role: reported endpoint
  context: Publication abstract; direction and population are retained on the linked observation.
  sourceIds:
    - reddit-pmid-25353339
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Automated corpus import from an abstract; this record is not an independent meta-analysis.
- id: reddit-claim-nicotine-25353339-60
  assertion: Nicotine is associated with the reported cognitive performance finding in this publication.
  relation: associated-with
  participants:
    - entityId: substance:nicotine
      role: intervention or exposure
    - entityId: tag:cognitive-performance
      role: reported endpoint
  context: Publication abstract; direction and population are retained on the linked observation.
  sourceIds:
    - reddit-pmid-25353339
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Automated corpus import from an abstract; this record is not an independent meta-analysis.
- id: reddit-claim-nicotine-25546366-61
  assertion: Nicotine is associated with the reported alertness finding in this publication.
  relation: associated-with
  participants:
    - entityId: substance:nicotine
      role: intervention or exposure
    - entityId: tag:alertness
      role: reported endpoint
  context: Publication abstract; direction and population are retained on the linked observation.
  sourceIds:
    - reddit-pmid-25546366
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Automated corpus import from an abstract; this record is not an independent meta-analysis.
- id: reddit-claim-nicotine-25546366-62
  assertion: Nicotine is associated with the reported cognitive performance finding in this publication.
  relation: associated-with
  participants:
    - entityId: substance:nicotine
      role: intervention or exposure
    - entityId: tag:cognitive-performance
      role: reported endpoint
  context: Publication abstract; direction and population are retained on the linked observation.
  sourceIds:
    - reddit-pmid-25546366
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Automated corpus import from an abstract; this record is not an independent meta-analysis.
- id: reddit-claim-nicotine-25826680-63
  assertion: Nicotine is associated with the reported alertness finding in this publication.
  relation: associated-with
  participants:
    - entityId: substance:nicotine
      role: intervention or exposure
    - entityId: tag:alertness
      role: reported endpoint
  context: Publication abstract; direction and population are retained on the linked observation.
  sourceIds:
    - reddit-pmid-25826680
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Automated corpus import from an abstract; this record is not an independent meta-analysis.
- id: reddit-claim-nicotine-25826680-64
  assertion: Nicotine is associated with the reported cognitive performance finding in this publication.
  relation: associated-with
  participants:
    - entityId: substance:nicotine
      role: intervention or exposure
    - entityId: tag:cognitive-performance
      role: reported endpoint
  context: Publication abstract; direction and population are retained on the linked observation.
  sourceIds:
    - reddit-pmid-25826680
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Automated corpus import from an abstract; this record is not an independent meta-analysis.
```

## Interactions

```yaml
- id: smoke-cyp1a2
  name: Smoking cessation and CYP1A2 substrates
  otherSlug: null
  targetClassId: stimulant
  summary: Combustible smoke induces CYP1A2; stopping smoking can raise concentrations of clozapine, olanzapine, theophylline, caffeine and some other medicines. This interaction is caused primarily by smoke, not nicotine replacement.
  sourceId: schaffer2009
  mechanism: Reversal of smoke-induced hepatic CYP1A2 induction
  context: Transition from combustible smoking to abstinence or NRT
- id: additive-sympathomimetic
  name: Nicotine with other stimulants or sympathomimetics
  otherSlug: null
  targetClassId: stimulant
  summary: Additive increases in heart rate, blood pressure, tremor, palpitations or anxiety are pharmacologically plausible; direct quantitative interaction data are limited.
  sourceId: najem2006
  mechanism: Pharmacodynamic sympathetic stimulation
  context: Product- and dose-specific
- id: multiple-nicotine-products
  name: Concurrent nicotine products
  otherSlug: null
  summary: Simultaneous cigarette, vape, pouch and NRT use can increase total nicotine exposure and make nausea, dizziness and palpitations more likely; no universal combined safe exposure is established.
  sourceId: dailymed-patch
```

## Experience links

```yaml
[]
```

## References

```yaml
- id: benowitz2009
  title: Nicotine chemistry, metabolism, kinetics and biomarkers
  authors: Benowitz NL, Hukkanen J, Jacob P
  year: 2009
  url: https://pubmed.ncbi.nlm.nih.gov/19184645/
  kind: Pharmacology review
  insight: Route-specific pharmacokinetics, CYP2A6, cotinine, half-life and modifiers.
  limitation: Older underlying studies use different products and protocols.
  pmid: "19184645"
  pmcid: PMC2953858
  doi: 10.1007/978-3-540-69248-5_2
  funding: NIH support is listed in PubMed; complete disclosure was not inspected.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed from the inspected abstract.
  conflictOfInterestStatus: not-assessed
- id: benowitz2010
  title: Nicotine addiction
  authors: Benowitz NL
  year: 2010
  url: https://pubmed.ncbi.nlm.nih.gov/20554984/
  kind: Clinical review
  insight: Receptor signaling, reinforcement, dependence, withdrawal, cardiovascular effects and NRT context.
  limitation: Narrative review, not a trial of enhancement in nonusers.
  pmid: "20554984"
  pmcid: PMC2928221
  doi: 10.1056/NEJMra0809890
  funding: NIH and government support are listed; complete conflict statement was not inspected.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed from the inspected abstract.
  conflictOfInterestStatus: not-assessed
- id: pubchem
  title: Nicotine compound record and molecular structure
  authors: NCBI PubChem
  year: 2026
  url: https://pubchem.ncbi.nlm.nih.gov/compound/89594
  kind: Chemical database
  insight: Molecular identity, formula, molecular weight and structure.
  limitation: Does not establish product purity, safety or clinical benefit.
  funding: Public database maintained by NCBI.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
- id: pasetes2020
  title: "Cognitive performance effects of nicotine and industry affiliation: a systematic review"
  authors: Pasetes SV, Ling PM, Apollonio DE
  year: 2020
  url: https://pubmed.ncbi.nlm.nih.gov/32547048/
  kind: Systematic review
  insight: 32 acute randomized studies showed positive, mixed and null attention findings without a consistent overall cognitive effect.
  limitation: Short heterogeneous studies; included literature had substantial tobacco or pharmaceutical affiliation.
  pmid: "32547048"
  pmcid: PMC7271274
  doi: 10.1177/1178221820926545
  funding: NIH and UCSF School of Pharmacy grants; included-study funding varied.
  sponsorshipStatus: mixed-funding
  conflictsOfInterest: Authors declared no conflicts; included-study affiliations were heterogeneous.
  conflictOfInterestStatus: declared
  disclosureUrl: https://pmc.ncbi.nlm.nih.gov/articles/PMC7271274/
- id: majdi2021
  title: "Effects of transdermal nicotine delivery on cognitive outcomes: A meta-analysis"
  authors: Majdi A, Sadigh-Eteghad S, Gjedde A
  year: 2021
  url: https://pubmed.ncbi.nlm.nih.gov/33899218/
  kind: Meta-analysis
  insight: 31 publications and 978 healthy nonsmokers; small attention benefit and nonsignificant memory estimate.
  limitation: Patch-only, short trials and heterogeneous measures.
  pmid: "33899218"
  doi: 10.1111/ane.13436
  funding: Tabriz University Neurosciences Research Center, Danish Alzheimer Research Foundation and Aarhus Translational Neuropsychiatry Unit.
  sponsorshipStatus: non-industry-funded
  conflictsOfInterest: Authors declared no conflicts.
  conflictOfInterestStatus: none-declared
  disclosureUrl: https://pubmed.ncbi.nlm.nih.gov/33899218/
- id: mcclernon2006
  title: "Transdermal nicotine attenuates depression symptoms in nonsmokers: a double-blind, placebo-controlled trial"
  authors: McClernon FJ, Hiott FB, Westman EC, Rose JE, Levin ED
  year: 2006
  url: https://pubmed.ncbi.nlm.nih.gov/16977477/
  kind: Randomized trial
  insight: Very small nonsmoker study with transient CES-D change and no acute mood change.
  limitation: 11 participants and short duration.
  pmid: "16977477"
  doi: 10.1007/s00213-006-0516-y
  funding: Not available in the inspected abstract.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
- id: taylor2021
  title: Smoking cessation for improving mental health
  authors: Taylor GMJ, Lindson N, Farley A, et al.
  year: 2021
  url: https://pubmed.ncbi.nlm.nih.gov/33687070/
  kind: Cochrane systematic review
  insight: Smoking cessation was associated with improved anxiety, depression and stress in 102 studies.
  limitation: Serious potential time-varying confounding; depression evidence very low certainty.
  pmid: "33687070"
  pmcid: PMC8121093
  doi: 10.1002/14651858.CD013522.pub2
  funding: Cancer Research UK and NIHR support reported.
  sponsorshipStatus: non-industry-funded
  conflictsOfInterest: No tobacco-industry funding was disclosed in the inspected PubMed record.
  conflictOfInterestStatus: not-assessed
  disclosureUrl: https://pubmed.ncbi.nlm.nih.gov/33687070/
- id: choi2017
  title: Transdermal nicotine patch effects on EEG power spectra and heart rate variability during sleep of healthy male adults
  authors: Choi JB, Lee YJG, Jeong DU
  year: 2017
  url: https://pubmed.ncbi.nlm.nih.gov/28845178/
  kind: Randomized crossover study
  insight: Overnight 14 mg patch disrupted sleep architecture in healthy nonsmoking men.
  limitation: Small acute male-only study.
  pmid: "28845178"
  pmcid: PMC5561409
  doi: 10.4306/pi.2017.14.4.499
  funding: Patch supplied by Sam Yang Pharmaceutical.
  sponsorshipStatus: industry-funded
  conflictsOfInterest: Complete disclosure requires the full article.
  conflictOfInterestStatus: not-assessed
  disclosureUrl: https://pmc.ncbi.nlm.nih.gov/articles/PMC5561409/
- id: staner2006
  title: Sleep effects of a 24-h versus a 16-h nicotine patch during smoking cessation
  authors: Staner L, Luthringer R, Dupont C, Aubin HJ, Lagrue G
  year: 2006
  url: https://pubmed.ncbi.nlm.nih.gov/16458598/
  kind: Crossover cessation study
  insight: A 24-hour patch reduced withdrawal-related sleep disruption in abstinent heavy smokers.
  limitation: Small dependent-smoker study; cannot isolate nicotine from withdrawal relief.
  pmid: "16458598"
  doi: 10.1016/j.sleep.2005.09.008
  funding: Non-U.S. government support listed in PubMed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed from the abstract.
  conflictOfInterestStatus: not-assessed
- id: najem2006
  title: Acute cardiovascular and sympathetic effects of nicotine replacement therapy
  authors: Najem B, Chanudet X, Dallel R, et al.
  year: 2006
  url: https://pubmed.ncbi.nlm.nih.gov/16651463/
  kind: Human physiological study
  insight: 4 mg sublingual nicotine increased heart rate, mean blood pressure and muscle sympathetic nerve activity.
  limitation: 16 healthy smokers and one dose.
  pmid: "16651463"
  doi: 10.1161/01.HYP.0000219284.47970.34
  funding: Non-U.S. government support listed in PubMed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed from the abstract.
  conflictOfInterestStatus: not-assessed
- id: assali2009
  title: Weight gain and insulin resistance during nicotine replacement therapy
  authors: Assali AR, et al.
  year: 2009
  url: https://pubmed.ncbi.nlm.nih.gov/10326169/
  kind: Small human metabolic study
  insight: Insulin sensitivity decreased during six weeks of NRT and increased after nicotine-free follow-up.
  limitation: 11 heavy smokers; old and small study.
  pmid: "10326169"
  pmcid: PMC6656158
  doi: 10.1002/clc.4960220512
  funding: Full disclosure was not retrievable through the inspected abstract.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
- id: hartmann-boyce2018
  title: Nicotine replacement therapy versus control for smoking cessation
  authors: Hartmann-Boyce J, Chepkin SC, Ye W, et al.
  year: 2018
  url: https://pubmed.ncbi.nlm.nih.gov/29852054/
  kind: Cochrane systematic review
  insight: Any NRT increased long-term abstinence; product-specific relative risks were reported.
  limitation: Cessation context, heterogeneous products and variable adverse-event reporting.
  pmid: "29852054"
  pmcid: PMC6353172
  doi: 10.1002/14651858.CD000146.pub5
  funding: Cochrane review; study-level disclosures were not fully inspected.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed from the inspected abstract.
  conflictOfInterestStatus: not-assessed
- id: kim2023
  title: A systematic review of RCTs to examine the risk of adverse cardiovascular events with nicotine use
  authors: Kim MM, Steffensen I, Miguel RTD, et al.
  year: 2023
  url: https://pubmed.ncbi.nlm.nih.gov/37025687/
  kind: Systematic review of randomized trials
  insight: 42 randomized studies found no statistically significant difference in major cardiovascular events between nicotine and non-nicotine groups.
  limitation: Rare events, short follow-up and heterogeneous products; review externally performed for Reynolds American with industry authors.
  pmid: "37025687"
  pmcid: PMC10071010
  doi: 10.3389/fcvm.2023.1111673
  funding: Externally performed for Reynolds American.
  sponsorshipStatus: industry-funded
  conflictsOfInterest: Authors included Reynolds American and BAT employees.
  conflictOfInterestStatus: declared
  disclosureUrl: https://pmc.ncbi.nlm.nih.gov/articles/PMC10071010/
- id: newhouse2012
  title: "Nicotine treatment of mild cognitive impairment: A 6-month double-blind pilot clinical trial"
  authors: Newhouse P, Kellar K, Aisen P, et al.
  year: 2012
  url: https://pubmed.ncbi.nlm.nih.gov/22232050/
  kind: Randomized pilot trial
  insight: 15 mg/day patch improved several cognitive tests in 74 nonsmoking adults with amnestic MCI but not clinician-rated global impression.
  limitation: Pilot, six months, multiple outcomes and no dementia or mortality endpoint.
  pmid: "22232050"
  pmcid: PMC3466669
  doi: 10.1212/WNL.0b013e31823efcbb
  funding: NIH and public support; Pfizer supplied patches.
  sponsorshipStatus: mixed-funding
  conflictsOfInterest: Patch supply and public support were reported.
  conflictOfInterestStatus: declared
  disclosureUrl: https://pmc.ncbi.nlm.nih.gov/articles/PMC3466669/
- id: andrews2026
  title: "Long-term nicotine treatment of mild cognitive impairment: The MIND Trial"
  authors: Andrews P, Reman R, Armenta B, et al.
  year: 2026
  url: https://www.ajgponline.org/article/S1064-7481(26)00126-0/fulltext
  kind: Conference supplement randomized trial report
  insight: Top-line two-year data in 348 adults with MCI did not show significant cognitive or functional benefit.
  limitation: Conference supplement, high discontinuation and incomplete full disclosure.
  doi: 10.1016/j.jagp.2026.03.032
  funding: NIH, Alzheimer’s Drug Discovery Foundation and university support reported; no tobacco-company involvement reported in the available abstract.
  sponsorshipStatus: non-industry-funded
  conflictsOfInterest: Incomplete full publication and disclosure.
  conflictOfInterestStatus: not-assessed
  disclosureUrl: https://www.ajgponline.org/article/S1064-7481(26)00126-0/fulltext
- id: claire2020
  title: Pharmacological interventions for promoting smoking cessation during pregnancy
  authors: Claire R, Chamberlain C, Davey MA, et al.
  year: 2020
  url: https://pubmed.ncbi.nlm.nih.gov/32129504/
  kind: Cochrane systematic review
  insight: Eleven trials in 2,412 pregnant smokers found low-certainty overall NRT abstinence benefit and no clear birth-outcome differences.
  limitation: Low adherence, risk of bias, imprecision and sparse child follow-up.
  pmid: "32129504"
  pmcid: PMC7059898
  doi: 10.1002/14651858.CD010078.pub3
  funding: Cochrane review; full disclosures were not visible in the abstract.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed from the inspected abstract.
  conflictOfInterestStatus: not-assessed
- id: dailymed-patch
  title: Nicotine Transdermal System Patch U.S. Drug Facts label
  authors: Strategic Sourcing Services LLC
  year: 2024
  url: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=6c0b5b5c-cc76-6e48-c364-4db0e081557d
  kind: Official drug label
  insight: Patch strengths, schedules and warnings for cardiovascular disease, pregnancy, dreams, overdose, children and pets.
  limitation: One U.S. OTC product label, not a comparative clinical trial.
  funding: Manufacturer label.
  sponsorshipStatus: industry-funded
  conflictsOfInterest: Manufacturer labeler; no independent comparative estimate.
  conflictOfInterestStatus: declared
  disclosureUrl: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=6c0b5b5c-cc76-6e48-c364-4db0e081557d
- id: dailymed-gum
  title: Perrigo Nicotine Gum Drug Facts label
  authors: L. Perrigo Company
  year: 2026
  url: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=fac52e0d-7a02-451e-a36b-30d49e929d3e
  kind: Official drug label
  insight: 2 mg and 4 mg strengths, schedule, maximum use and warnings.
  limitation: Product label; no independent comparative safety estimate.
  funding: Manufacturer label.
  sponsorshipStatus: industry-funded
  conflictsOfInterest: Manufacturer labeler.
  conflictOfInterestStatus: declared
  disclosureUrl: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=fac52e0d-7a02-451e-a36b-30d49e929d3e
- id: fda-nicotine
  title: Nicotine Is Why Tobacco Products Are Addictive
  authors: U.S. Food and Drug Administration
  year: 2026
  url: https://www.fda.gov/tobacco-products/health-effects-tobacco-use/nicotine-why-tobacco-products-are-addictive
  kind: Official public-health source
  insight: Distinguishes nicotine addiction from tobacco-smoke toxicants and identifies approved NRT as the least harmful cessation category.
  limitation: Regulatory communication, not a systematic review.
  funding: Official FDA page.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
- id: fda-cessation
  title: Want to Quit Smoking? FDA-Approved and FDA-Cleared Cessation Products Can Help
  authors: U.S. Food and Drug Administration
  year: 2022
  url: https://www.fda.gov/consumers/consumer-updates/want-quit-smoking-fda-approved-and-fda-cleared-cessation-products-can-help
  kind: Official public-health source
  insight: Lists FDA-approved and cleared cessation products and explains NRT avoids cigarette-smoke toxicants.
  limitation: Consumer regulatory guidance, not a new clinical trial.
  funding: Official FDA page.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
- id: nci-withdrawal
  title: Tobacco Withdrawal
  authors: National Cancer Institute
  year: 2026
  url: https://www.cancer.gov/about-cancer/causes-prevention/risk/tobacco/withdrawal-fact-sheet
  kind: Official educational source
  insight: Withdrawal is usually worst during the first week, peaks during the first three days and declines during the first month.
  limitation: Educational summary, not a new clinical trial.
  funding: Official NIH resource.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
- id: schaffer2009
  title: "A review of smoking cessation: potentially risky effects on prescribed medications"
  authors: Schaffer SD, Yoon S, Zadezensky I
  year: 2009
  url: https://pubmed.ncbi.nlm.nih.gov/19490292/
  kind: Clinical pharmacology review
  insight: Stopping smoke exposure reverses CYP1A2 induction and can raise concentrations of several medicines; NRT does not reproduce this induction.
  limitation: Older literature including case reports.
  pmid: "19490292"
  doi: 10.1111/j.1365-2702.2008.02724.x
  funding: Not assessed from the inspected abstract.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
- id: tobacco21
  title: Tobacco 21
  authors: U.S. Food and Drug Administration
  year: 2026
  url: https://www.fda.gov/tobacco-products/retail-sales-tobacco-products/tobacco-21
  kind: Official legal source
  insight: U.S. federal tobacco-product sale age is 21, including e-cigarettes, liquid nicotine and non-tobacco nicotine products; medicinal NRT is separate.
  limitation: U.S.-specific rule.
  funding: Official FDA page.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
- id: eu-tpd
  title: Directive 2014/40/EU consolidated text, Article 20
  authors: European Union
  year: 2023
  url: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX%3A02014L0040-20231023
  kind: Official legal source
  insight: Consumer nicotine e-liquids are regulated under Article 20 with a 20 mg/mL concentration limit and packaging requirements.
  limitation: Member-state implementation and medicinal classification can differ.
  funding: Official EUR-Lex text.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-28150023
  title: Effects of nicotine on response inhibition and interference control.
  authors: Ulrich Ettinger, Eliana Faiola, Anna-Maria Kasparbauer, Nadine Petrovsky, Raymond C K Chan, Roman Liepelt, Veena Kumari
  year: 2017
  url: https://pubmed.ncbi.nlm.nih.gov/28150023/
  kind: PubMed publication
  insight: Nicotine is a cholinergic agonist with known pro-cognitive effects in the domains of alerting and orienting attention.
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: "28150023"
  doi: 10.1007/s00213-017-4542-8
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-25304866
  title: Nicotine reduces distraction under low perceptual load.
  authors: Oliver Behler, Thomas P K Breckel, Christiane M Thiel
  year: 2015
  url: https://pubmed.ncbi.nlm.nih.gov/25304866/
  kind: PubMed publication
  insight: "RATIONALE: Several studies provide evidence that nicotine alleviates the detrimental effects of distracting sensory stimuli."
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: "25304866"
  doi: 10.1007/s00213-014-3761-5
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-link-90060ace9625
  title: "Cognitive effects of nicotine in humans: an fMRI study (2003)"
  authors: Not established
  year: 2003
  url: https://www.sciencedirect.com/science/article/pii/S1053811903001101
  kind: Reddit index publication link
  insight: The Reddit index links this publication; bibliographic metadata was not returned by the PubMed batch.
  limitation: Full text, publication metadata, funding, and conflicts were not independently verified in this corpus pass.
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-9860103
  title: Transdermal nicotine effects on attention.
  authors: E D Levin, C K Conners, D Silva, S C Hinton, W H Meck, J March, J E Rose
  year: 1998
  url: https://pubmed.ncbi.nlm.nih.gov/9860103/
  kind: PubMed publication
  insight: Nicotine has been shown to improve attentiveness in smokers and attenuate attentional deficits in Alzheimer's disease patients, schizophrenics and adults with attention-deficit/hyperactivity disorder (ADHD).
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: "9860103"
  doi: 10.1007/s002130050750
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-12028851
  title: Nicotine effects on alertness and spatial attention in non-smokers.
  authors: William S Griesar, Daniel P Zajdel, Barry S Oken
  year: 2002
  url: https://pubmed.ncbi.nlm.nih.gov/12028851/
  kind: PubMed publication
  insight: Nicotine reportedly improves covert orienting of spatial attention, but enhanced alertness may also play a role.
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: "12028851"
  doi: 10.1080/14622200210123617
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-7675966
  title: Effects of nicotine on perceptual speed.
  authors: C Stough, G Mangan, T Bates, N Frank, B Kerkin, O Pellett
  year: 1995
  url: https://pubmed.ncbi.nlm.nih.gov/7675966/
  kind: PubMed publication
  insight: Two experiments investigating the effects of nicotine on performance in the inspection time (IT) procedure are reported.
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: "7675966"
  doi: 10.1007/BF02246296
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-link-9aa4a4ca70a3
  title: Effects of Nicotine Gum on Short-Term Memory (1991)
  authors: Not established
  year: 1991
  url: https://link.springer.com/chapter/10.1007%2F978-3-0348-7457-1_69
  kind: Reddit index publication link
  insight: The Reddit index links this publication; bibliographic metadata was not returned by the PubMed batch.
  limitation: Full text, publication metadata, funding, and conflicts were not independently verified in this corpus pass.
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-link-6aecda488d60
  title: Effects of nicotine gum on psychomotor performance in smokers and non-smokers (1990)
  authors: Not established
  year: 1990
  url: https://link.springer.com/article/10.1007/BF02244008
  kind: Reddit index publication link
  insight: The Reddit index links this publication; bibliographic metadata was not returned by the PubMed batch.
  limitation: Full text, publication metadata, funding, and conflicts were not independently verified in this corpus pass.
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-22701817
  title: Mechanisms for nicotine in the development and progression of gastrointestinal cancers.
  authors: Kendal Jensen, Syeda Afroze, Md Kamruzzaman Munshi, Micheleine Guerrier, Shannon S Glaser
  year: 2012
  url: https://pubmed.ncbi.nlm.nih.gov/22701817/
  kind: PubMed publication
  insight: Long-term smoking is major risk factor for a variety of cancers, including those of the gastrointestinal (GI) tract.
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: "22701817"
  pmcid: PMC3371638
  doi: 10.3978/j.issn.2224-4778.2011.12.01
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-8790020
  title: Long-term use of nicotine gum is associated with hyperinsulinemia and insulin resistance.
  authors: B Eliasson, M R Taskinen, U Smith
  year: 1996
  url: https://pubmed.ncbi.nlm.nih.gov/8790020/
  kind: PubMed publication
  insight: "BACKGROUND: Insulin sensitivity and cardiovascular risk profile were examined in 20 healthy, nonobese, middle-aged men who were long-term users of nicotine-containing chewing gum and in 20 matched control subjects who did not use nicotine."
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: "8790020"
  doi: 10.1161/01.cir.94.5.878
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-25799226
  title: Activation of AMPKα2 in adipocytes is essential for nicotine-induced insulin resistance in vivo.
  authors: Yue Wu, Ping Song, Wencheng Zhang, Junhui Liu, Xiaoyan Dai, Zhaoyu Liu, Qiulun Lu, Changhan Ouyang, Zhonglin Xie, Zhengxing Zhao, Xiaozhen Zhuo, Benoit Viollet, Marc Foretz, Jiliang Wu, Zuyi Yuan, Ming-Hui Zou
  year: 2015
  url: https://pubmed.ncbi.nlm.nih.gov/25799226/
  kind: PubMed publication
  insight: Cigarette smoking promotes body weight reduction in humans while paradoxically also promoting insulin resistance (IR) and hyperinsulinemia.
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: "25799226"
  pmcid: PMC4390501
  doi: 10.1038/nm.3826
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-24323338
  title: Oral contraceptives and nicotine synergistically exacerbate cerebral ischemic injury in the female brain.
  authors: Ami P Raval, Raquel Borges-Garcia, Francisca Diaz, Thomas J Sick, Helen Bramlett
  year: 2013
  url: https://pubmed.ncbi.nlm.nih.gov/24323338/
  kind: PubMed publication
  insight: Oral contraceptives (OC) and smoking-derived nicotine (N) are known to synergistically increase the risk and severity of cerebral ischemia in women.
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: "24323338"
  doi: 10.1007/s12975-013-0253-6
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-22451324
  title: "New evidence of mitochondria dysfunction in the female Alzheimer's disease brain: deficiency of estrogen receptor-β."
  authors: Jiangang Long, Ping He, Yong Shen, Rena Li
  year: 2012
  url: https://pubmed.ncbi.nlm.nih.gov/22451324/
  kind: PubMed publication
  insight: Accumulating evidence suggests that mitochondria are important targets for the actions of estrogens and studies indicated that localization of estrogen receptor β (ERβ) in neuronal mitochondrial (mtERβ) might directly affect neuronal mitochondrial function in vitro.
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: "22451324"
  pmcid: PMC3506431
  doi: 10.3233/JAD-2012-120283
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-25925411
  title: Nicotine pre-exposure reduces stroke-induced glucose transporter-1 activity at the blood-brain barrier in mice.
  authors: Kaushik K Shah, Purushotham Reddy Boreddy, Thomas J Abbruscato
  year: 2015
  url: https://pubmed.ncbi.nlm.nih.gov/25925411/
  kind: PubMed publication
  insight: "BACKGROUND: With growing electronic cigarette usage in both the smoking and nonsmoking population, rigorous studies are needed to investigate the effects of nicotine on biological systems to determine long-term health consequences."
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: "25925411"
  pmcid: PMC4425877
  doi: 10.1186/s12987-015-0005-y
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-23892062
  title: Nicotine signaling and progression of chronic kidney disease in smokers.
  authors: Gaurav Jain, Edgar A Jaimes
  year: 2013
  url: https://pubmed.ncbi.nlm.nih.gov/23892062/
  kind: PubMed publication
  insight: The deleterious health effects of cigarette smoking are far reaching, and it remains the most important modifiable risk factor for improving overall morbidity and mortality.
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: "23892062"
  pmcid: PMC3838879
  doi: 10.1016/j.bcp.2013.07.014
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-19246447
  title: Evidence for endogenous formation of N'-nitrosonornicotine in some long-term nicotine patch users.
  authors: Irina Stepanov, Steven G Carmella, Shaomei Han, Angela Pinto, Andrew A Strasser, Caryn Lerman, Stephen S Hecht
  year: 2009
  url: https://pubmed.ncbi.nlm.nih.gov/19246447/
  kind: PubMed publication
  insight: "INTRODUCTION: Nitrosation of nicotine or its metabolites in the human body could lead to formation of the 2 carcinogenic tobacco-specific nitrosamines-N'-nitrosonornicotine (NNN) and 4-(methylnitrosamino)-1-(3-pyridyl)-1-butanone (NNK)."
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: "19246447"
  pmcid: PMC2734288
  doi: 10.1093/ntr/ntn004
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-22923602
  title: Nornicotine nitrosation in saliva and its relation to endogenous synthesis of N'-nitrosonornicotine in humans.
  authors: Aleksandar Knezevich, John Muzic, Dorothy K Hatsukami, Stephen S Hecht, Irina Stepanov
  year: 2013
  url: https://pubmed.ncbi.nlm.nih.gov/22923602/
  kind: PubMed publication
  insight: "INTRODUCTION: We recently reported that certain amounts of the carcinogen N'-nitrosonornicotine (NNN) can be formed endogenously from nicotine and/or nornicotine in some users of oral nicotine replacement therapy products."
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: "22923602"
  pmcid: PMC3611998
  doi: 10.1093/ntr/nts172
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-26205096
  title: α5-nAChR modulates nicotine-induced cell migration and invasion in A549 lung cancer cells.
  authors: Haiji Sun, Xiaoli Ma
  year: 2015
  url: https://pubmed.ncbi.nlm.nih.gov/26205096/
  kind: PubMed publication
  insight: Cigarette smoking is the most important risk factor in the development of human lung cancer.
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: "26205096"
  doi: 10.1016/j.etp.2015.07.001
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-24756761
  title: Nicotine upregulates microRNA-21 and promotes TGF-β-dependent epithelial-mesenchymal transition of esophageal cancer cells.
  authors: Yi Zhang, Tiecheng Pan, Xiaoxuan Zhong, Cai Cheng
  year: 2014
  url: https://pubmed.ncbi.nlm.nih.gov/24756761/
  kind: PubMed publication
  insight: A consistent positive association between cigarette smoking and the human esophageal cancer has been confirmed all over the world.
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: "24756761"
  doi: 10.1007/s13277-014-1968-z
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-26184482
  title: Nicotine Induces Tumor Growth and Chemoresistance through Activation of the PI3K/Akt/mTOR Pathway in Bladder Cancer.
  authors: Kazuyuki Yuge, Eiji Kikuchi, Masayuki Hagiwara, Yota Yasumizu, Nobuyuki Tanaka, Takeo Kosaka, Akira Miyajima, Mototsugu Oya
  year: 2015
  url: https://pubmed.ncbi.nlm.nih.gov/26184482/
  kind: PubMed publication
  insight: Continued smoking is highly associated with not only a higher incidence but also greater risk of tumor recurrence, progression, and acquired chemoresistance of urothelial carcinoma.
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: "26184482"
  doi: 10.1158/1535-7163.MCT-15-0140
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-25128927
  title: Role of vitamin C and selenium in attenuation of nicotine induced oxidative stress, P53 and Bcl2 expression in adult rat spleen.
  authors: Marwa A Ahmed, K H Hassan, Khaled M A Hassanein, H Waly
  year: 2014
  url: https://pubmed.ncbi.nlm.nih.gov/25128927/
  kind: PubMed publication
  insight: "UNLABELLED: Forty adult female rats were randomly divided into four groups: control, nicotine, nicotine+vitamin C and nicotine+selenium group."
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: "25128927"
  doi: 10.1016/j.pathophys.2014.07.003
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-32373212
  title: Endothelial to Mesenchymal Transition Contributes to Nicotine-Induced Atherosclerosis (2020)
  authors: Not established
  year: 2020
  url: https://pubmed.ncbi.nlm.nih.gov/32373212/
  pmid: "32373212"
  kind: Reddit index publication link
  insight: The Reddit index links this publication; bibliographic metadata was not returned by the PubMed batch.
  limitation: Full text, publication metadata, funding, and conflicts were not independently verified in this corpus pass.
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-31214115
  title: Hepatic DNA Damage Induced by Electronic Cigarette Exposure Is Associated With the Modulation of NAD+/PARP1/SIRT1 Axis.
  authors: Jorge Espinoza-Derout, Xuesi M Shao, Emmanuel Bankole, Kamrul M Hasan, Norma Mtume, Yanjun Liu, Amiya P Sinha-Hikim, Theodore C Friedman
  year: 2019
  url: https://pubmed.ncbi.nlm.nih.gov/31214115/
  kind: PubMed publication
  insight: The prevalence of electronic cigarette (e-cigarettes) use has rapidly increased worldwide.
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: "31214115"
  pmcid: PMC6558099
  doi: 10.3389/fendo.2019.00320
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-31092012
  title: Peroxynitrite-Mediated SIRT (Sirtuin)-1 Inactivation Contributes to Nicotine-Induced Arterial Stiffness in Mice.
  authors: Ye Ding, Yi Han, Qiulun Lu, Junqing An, Huaiping Zhu, Zhonglin Xie, Ping Song, Ming-Hui Zou
  year: 2019
  url: https://pubmed.ncbi.nlm.nih.gov/31092012/
  kind: PubMed publication
  insight: Objective- Inhibition of SIRT (sirtuin)-1, a nicotinamide adenine dinucleotide-dependent protein deacetylase, is linked to cigarette smoking-induced arterial stiffness, but the underlying mechanisms remain largely unknown.
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: "31092012"
  pmcid: PMC6613385
  doi: 10.1161/ATVBAHA.118.312346
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-25316032
  title: Matrix remodeling response of human periodontal tissue cells toward fibrosis upon nicotine exposure.
  authors: Hiroko Takeuchi-Igarashi, Satoshi Kubota, Toshiaki Tachibana, Etsuko Murakashi, Masaharu Takigawa, Masataka Okabe, Yukihiro Numabe
  year: 2016
  url: https://pubmed.ncbi.nlm.nih.gov/25316032/
  kind: PubMed publication
  insight: It is widely accepted that fibrosis is frequently observed in the gingiva of smokers.
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: "25316032"
  doi: 10.1007/s10266-014-0177-y
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-26239821
  title: Cytotoxicity and apoptosis induction by e-cigarette fluids in human gingival fibroblasts.
  authors: Silvia Sancilio, Marialucia Gallorini, Amelia Cataldi, Viviana di Giacomo
  year: 2016
  url: https://pubmed.ncbi.nlm.nih.gov/26239821/
  kind: PubMed publication
  insight: "OBJECTIVES: Electronic cigarettes (e-cigarettes) are generally acknowledged as a safer alternative to the use of combusted tobacco products."
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: "26239821"
  doi: 10.1007/s00784-015-1537-x
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-25929709
  title: "Orthodontic forces add to nicotine-induced loss of periodontal bone : An in vivo and in vitro study."
  authors: Christian Kirschneck, Peter Proff, Michael Maurer, Claudia Reicheneder, Piero Römer
  year: 2015
  url: https://pubmed.ncbi.nlm.nih.gov/25929709/
  kind: PubMed publication
  insight: "OBJECTIVES: Nicotine is considered an etiologic factor for chronic inflammatory phenomena within the periodontal ligament that may result in loss of periodontal attachment."
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: "25929709"
  doi: 10.1007/s00056-015-0283-7
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-23748423
  title: Nicotine potentiates proatherogenic effects of oxLDL by stimulating and upregulating macrophage CD36 signaling.
  authors: Ming-Sheng Zhou, Kiranmai Chadipiralla, Armando J Mendez, Edgar A Jaimes, Roy L Silverstein, Keith Webster, Leopoldo Raij
  year: 2013
  url: https://pubmed.ncbi.nlm.nih.gov/23748423/
  kind: PubMed publication
  insight: Cigarette smoking is a major risk factor for atherosclerosis and cardiovascular disease.
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: "23748423"
  pmcid: PMC3891251
  doi: 10.1152/ajpheart.00042.2013
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-25914226
  title: Secretome analysis of human articular chondrocytes unravels catabolic effects of nicotine on the joint.
  authors: Lucía Lourido, Valentina Calamia, Patricia Fernández-Puente, Jesús Mateos, Natividad Oreiro, Francisco J Blanco, Cristina Ruiz-Romero
  year: 2016
  url: https://pubmed.ncbi.nlm.nih.gov/25914226/
  kind: PubMed publication
  insight: "PURPOSE: Osteoarthritis (OA) is a degenerative joint pathology characterized by articular cartilage degradation that lacks from efficient therapy."
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: "25914226"
  doi: 10.1002/prca.201400186
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-26633299
  title: Chronic Nicotine Exposure In Vivo and In Vitro Inhibits Vitamin B1 (Thiamin) Uptake by Pancreatic Acinar Cells.
  authors: Padmanabhan Srinivasan, Edwin C Thrower, Gopalakrishnan Loganathan, A N Balamurugan, Veedamali S Subramanian, Fred S Gorelick, Hamid M Said
  year: 2015
  url: https://pubmed.ncbi.nlm.nih.gov/26633299/
  kind: PubMed publication
  insight: Thiamin (vitamin B1), a member of the water-soluble family of vitamins, is essential for normal cellular functions; its deficiency results in oxidative stress and mitochondrial dysfunction.
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: "26633299"
  pmcid: PMC4669105
  doi: 10.1371/journal.pone.0143575
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-25353061
  title: Carbonyl compounds generated from electronic cigarettes.
  authors: Kanae Bekki, Shigehisa Uchiyama, Kazushi Ohta, Yohei Inaba, Hideki Nakagome, Naoki Kunugita
  year: 2014
  url: https://pubmed.ncbi.nlm.nih.gov/25353061/
  kind: PubMed publication
  insight: Electronic cigarettes (e-cigarettes) are advertised as being safer than tobacco cigarettes products as the chemical compounds inhaled from e-cigarettes are believed to be fewer and less toxic than those from tobacco cigarettes.
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: "25353061"
  pmcid: PMC4245608
  doi: 10.3390/ijerph111111192
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-24832759
  title: "Carbonyl compounds in electronic cigarette vapors: effects of nicotine solvent and battery output voltage."
  authors: Leon Kosmider, Andrzej Sobczak, Maciej Fik, Jakub Knysak, Marzena Zaciera, Jolanta Kurek, Maciej Lukasz Goniewicz
  year: 2014
  url: https://pubmed.ncbi.nlm.nih.gov/24832759/
  kind: PubMed publication
  insight: "INTRODUCTION: Glycerin (VG) and propylene glycol (PG) are the most common nicotine solvents used in e-cigarettes (ECs)."
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: "24832759"
  doi: 10.1093/ntr/ntu078
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-26345343
  title: Nicotine reinforcement in never-smokers.
  authors: Angela N Duke, Matthew W Johnson, Chad J Reissig, Roland R Griffiths
  year: 2015
  url: https://pubmed.ncbi.nlm.nih.gov/26345343/
  kind: PubMed publication
  insight: "RATIONALE: Global tobacco-related mortality dwarfs that of all other drugs."
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: "26345343"
  pmcid: PMC5366981
  doi: 10.1007/s00213-015-4053-4
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-23133419
  title: Rapid effect of nicotine intake on neuroplasticity in non-smoking humans.
  authors: Jessica Grundey, Nivethida Thirugnanasambandam, Kim Kaminsky, Anne Drees, Angela C Skwirba, Nicolas Lang, Walter Paulus, Michael A Nitsche
  year: 2012
  url: https://pubmed.ncbi.nlm.nih.gov/23133419/
  kind: PubMed publication
  insight: In various studies nicotine has shown to alter cognitive functions in non-smoking subjects.
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: "23133419"
  pmcid: PMC3490442
  doi: 10.3389/fphar.2012.00186
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-7892431
  title: Smoking and Raven IQ.
  authors: C Stough, G Mangan, T Bates, O Pellett
  year: 1994
  url: https://pubmed.ncbi.nlm.nih.gov/7892431/
  kind: PubMed publication
  insight: Nicotine has recently been shown to enhance measures of information processing speed including the decision time (DT) component of simple and choice reaction time and the string length measure of evoked potential waveform complexity.
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: "7892431"
  doi: 10.1007/BF02245346
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-25353339
  title: 'Nicotine increases impulsivity and decreases willingness to exert cognitive effort despite improving attention in "slacker" rats: insights into cholinergic regulation of cost/benefit decision making.'
  authors: Jay G Hosking, Fred C W Lam, Catharine A Winstanley
  year: 2014
  url: https://pubmed.ncbi.nlm.nih.gov/25353339/
  kind: PubMed publication
  insight: Successful decision making in our daily lives requires weighing an option's costs against its associated benefits.
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: "25353339"
  pmcid: PMC4213040
  doi: 10.1371/journal.pone.0111580
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-25546366
  title: Strain-dependent performance in nicotine-induced conditioned place preference.
  authors: Munir G Kutlu, Leonardo A Ortega, Thomas J Gould
  year: 2015
  url: https://pubmed.ncbi.nlm.nih.gov/25546366/
  kind: PubMed publication
  insight: Nicotine addiction is most likely a result of a combination of factors including the rewarding effects of the drug; these effects, however, might be influenced by genetic background.
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: "25546366"
  pmcid: PMC4459496
  doi: 10.1037/bne0000029
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-25826680
  title: Genetic risks to nicotine dependence predict negative mood and affect in current non-smokers.
  authors: Xiangning Chen, Steven H Aggen, Jingchun Chen, Lingxi Li, Kenneth S Kendler, Melissa Blank, Thomas Eissenberg
  year: 2015
  url: https://pubmed.ncbi.nlm.nih.gov/25826680/
  kind: PubMed publication
  insight: Nicotine is the psychoactive agent involved in nicotine dependence.
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: "25826680"
  pmcid: PMC4894432
  doi: 10.1038/srep09521
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-link-e8de02694c54
  title: Agmatine
  authors: Not established
  year: 2026
  url: https://www.reddit.com/r/Nootropics/wiki/agmatine
  kind: Reddit index publication link
  insight: The Reddit index links this publication; bibliographic metadata was not returned by the PubMed batch.
  limitation: Full text, publication metadata, funding, and conflicts were not independently verified in this corpus pass.
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-link-98c955aad0c1
  title: Bacopa
  authors: Not established
  year: 2026
  url: https://www.reddit.com/r/Nootropics/wiki/bacopamonniera
  kind: Reddit index publication link
  insight: The Reddit index links this publication; bibliographic metadata was not returned by the PubMed batch.
  limitation: Full text, publication metadata, funding, and conflicts were not independently verified in this corpus pass.
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-link-bb4db929073e
  title: Cytisine
  authors: Not established
  year: 2026
  url: https://www.reddit.com/r/Nootropics/wiki/cytisine
  kind: Reddit index publication link
  insight: The Reddit index links this publication; bibliographic metadata was not returned by the PubMed batch.
  limitation: Full text, publication metadata, funding, and conflicts were not independently verified in this corpus pass.
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-link-5de1242d0f45
  title: ABT-089
  authors: Not established
  year: 2026
  url: https://www.reddit.com/r/Nootropics/wiki/abt089
  kind: Reddit index publication link
  insight: The Reddit index links this publication; bibliographic metadata was not returned by the PubMed batch.
  limitation: Full text, publication metadata, funding, and conflicts were not independently verified in this corpus pass.
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-link-26f3cf7420ee
  title: ABT-894
  authors: Not established
  year: 2026
  url: https://www.reddit.com/r/Nootropics/wiki/abt894
  kind: Reddit index publication link
  insight: The Reddit index links this publication; bibliographic metadata was not returned by the PubMed batch.
  limitation: Full text, publication metadata, funding, and conflicts were not independently verified in this corpus pass.
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-link-1a34d61bc6cf
  title: Panax Ginseng
  authors: Not established
  year: 2026
  url: https://www.reddit.com/r/Nootropics/wiki/panaxginseng
  kind: Reddit index publication link
  insight: The Reddit index links this publication; bibliographic metadata was not returned by the PubMed batch.
  limitation: Full text, publication metadata, funding, and conflicts were not independently verified in this corpus pass.
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-link-469c30468aa3
  title: Rhodiola Rosea
  authors: Not established
  year: 2026
  url: https://www.reddit.com/r/Nootropics/wiki/rhodiolarosea
  kind: Reddit index publication link
  insight: The Reddit index links this publication; bibliographic metadata was not returned by the PubMed batch.
  limitation: Full text, publication metadata, funding, and conflicts were not independently verified in this corpus pass.
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-link-e22a7b4a4e32
  title: /u/gwern's write-up on Nicotine at gwern.net
  authors: Not established
  year: 2026
  url: https://www.gwern.net/Nicotine
  kind: Reddit index publication link
  insight: The Reddit index links this publication; bibliographic metadata was not returned by the PubMed batch.
  limitation: Full text, publication metadata, funding, and conflicts were not independently verified in this corpus pass.
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: psychonautwiki
  title: "Nicotine: PsychonautWiki dose and duration data"
  authors: PsychonautWiki contributors
  year: 2026
  url: https://psychonautwiki.org/wiki/Nicotine
  kind: Community wiki data · CC BY 4.0
  insight: Source of this page's community dose bands and subjective duration ranges, from the PsychonautWiki API snapshot built about 2026-06-23 and retrieved 2026-11-06. The structured data is used under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/); BHWiki normalized unit symbols and route names.
  limitation: "PsychonautWiki states: \"PW's dosage information is gathered from users and resources for educational purposes only. It is not a recommendation and should be verified with other sources for accuracy.\" Its dose and duration values carry no per-value citations."
```

## Legal

```yaml
- jurisdiction: United States
  activity: Sale and marketing of tobacco, e-cigarette, liquid and non-tobacco nicotine products
  status: Federal sale age is 21; medicinal NRT is regulated separately as a drug. Non-tobacco nicotine products require applicable FDA tobacco-product authorization to be lawfully marketed.
  sourceUrl: https://www.fda.gov/tobacco-products/retail-sales-tobacco-products/tobacco-21
  asOf: 2026-10-22
- jurisdiction: European Union
  activity: Consumer nicotine e-liquids
  status: Directive 2014/40/EU Article 20 sets a 20 mg/mL nicotine limit and packaging, notification and warning requirements; national implementation varies.
  sourceUrl: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX%3A02014L0040-20231023
  asOf: 2026-10-22
```

## External wiki links

```yaml
- service: Wikipedia
  url: https://en.wikipedia.org/wiki/Nicotine
  title: Wikipedia
- service: Examine
  url: https://examine.com/supplements/Nicotine
  title: Examine
```

