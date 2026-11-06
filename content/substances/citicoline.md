---
slug: citicoline
name: Citicoline
subtitle: A precursor, with outcome-specific evidence.
aliases:
  - CDP-choline
  - Cytidine diphosphate choline
  - Cytidine 5′-diphosphocholine
  - Citicoline sodium
  - Cognizin
formula: C14H26N4O11P2
molecularWeight: 488.32 g/mol
pubchemCid: 13804
smiles: C[N+](C)(C)CCOP(=O)([O-])OP(=O)(O)OCC1C(C(C(O1)N2C=CC(=NC2=O)N)O)O
category: Choline precursor
tags:
  - choline-precursor
  - episodic-memory
  - stroke-recovery
accent: "#a9b993"
reviewedAt: 2026-10-10
editorialStatus: sourced-draft
halfLife:
  label: Not established for unchanged citicoline
  low: null
  high: null
  context: Human radiolabel studies tracked parent-derived radioactivity and metabolites rather than a validated unchanged-citicoline terminal elimination curve.
  sourceId: dinsdale1983
  observationId: citicoline-radiolabel
kinetics:
  onset: Not established as a clinical-effect onset
  peak: Oral radiolabel-derived plasma radioactivity showed peaks near 1 and 24 hours; these are not parent-specific citicoline peaks
  duration: Clinical-effect duration is not established from the pharmacokinetic studies
  bioavailability: Less than 1% of an oral radiolabeled dose was recovered in feces over 5 days, indicating extensive absorption of label-derived material but not unchanged-parent bioavailability
  metabolism: The radiolabel study supports extensive gut-wall and hepatic metabolism, with parent-derived material entering biosynthetic, tissue-metabolic and excretory pathways
  sourceId: dinsdale1983
  markers:
    - id: citicoline-radiolabel-early-peak
      label: Early plasma radioactivity peak
      analyte: Total plasma radiolabel
      population: Six adults
      measurement: plasma
      at: 1
      unit: hours
      note: Oral radiolabel-derived plasma radioactivity showed a peak near 1 hour; this is not a parent-specific citicoline Cmax.
      sourceId: dinsdale1983
    - id: citicoline-radiolabel-late-peak
      label: Later plasma radioactivity peak
      analyte: Total plasma radiolabel
      population: Six adults
      measurement: plasma
      at: 24
      unit: hours
      note: A later radiolabel-derived plasma peak appeared near 24 hours; labeled metabolites and excretion cannot be treated as parent-citicoline elimination.
      sourceId: dinsdale1983
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
  - references
  - legal
  - interactions
  - experienceLinks
  - externalWikiLinks
x-order: 9
---

## Summary

Citicoline (CDP-choline) is a phosphatidylcholine-pathway intermediate studied as a drug and food ingredient. Large stroke and traumatic-brain-injury trials were negative, while limited cognition trials show endpoint-specific, inconsistent signals.

## Description

Citicoline is CDP-choline, not dietary choline itself: it is a nucleotide containing a choline moiety and a cytidine-derived moiety, and exogenous doses are extensively metabolized. Human studies report rises in circulating choline plus pyrimidine metabolites; later work found uridine, rather than reliably detectable cytidine, after oral dosing.

## Evidence note

Citicoline is a precursor whose oral and intravenous doses generate choline and pyrimidine metabolites; an unchanged-parent half-life is not established. Large stroke and traumatic-brain-injury trials were negative on prespecified global outcomes, while small cognition, visual and TBI studies remain endpoint-specific and mixed. Regulatory permissions and labels are not efficacy evidence.

Reddit index corpus import (9 linked source records; 7 PubMed abstracts). Full-text methods, funding, and conflicts remain unassessed where the source record says so.

## Doses

```yaml
- label: Radiolabeled oral disposition study
  amount: 300 mg
  quantity: 300
  quantityMax: null
  unit: mg
  ingredient: Citicoline
  formulation: Oral 14C-CDP-choline
  route: Oral
  frequency: Single dose
  duration: 5-day recovery
  population: Six adults
  purpose: Absorption, metabolism and excretion research
  sourceCategory: research
  note: Less than 1% of radiolabel was recovered in feces; this does not establish intact-parent bioavailability.
  sourceId: dinsdale1983
- label: Age-associated memory trial
  amount: 500 mg/day
  quantity: 500
  quantityMax: null
  unit: mg/day
  ingredient: Citicoline
  formulation: Cognizin capsules
  route: Oral
  frequency: Once daily
  duration: 12 weeks
  population: 100 adults aged 50–85 with age-associated memory impairment
  purpose: Cognitive-task research
  sourceCategory: research
  note: Primary Spatial Span outcome was null; a paired-associate secondary outcome favored citicoline.
  sourceId: nakazaki2021
- label: Acute ischemic stroke trial
  amount: 1,000 mg every 12 hours IV, then oral; 2,000 mg/day
  quantity: 2000
  quantityMax: null
  unit: mg/day
  ingredient: Citicoline
  formulation: Intravenous followed by oral citicoline
  route: Intravenous then oral
  frequency: Twice daily initially
  duration: 6 weeks
  population: 2,298 adults with moderate-to-severe acute ischemic stroke
  purpose: Global stroke-recovery research
  sourceCategory: research
  note: ICTUS stopped for futility on the prespecified global outcome.
  sourceId: davalos2012
- label: COBRIT traumatic-brain-injury trial
  amount: 2,000 mg/day
  quantity: 2000
  quantityMax: null
  unit: mg/day
  ingredient: Citicoline
  formulation: Oral or enteral citicoline
  route: Oral or enteral
  frequency: Daily
  duration: 90 days
  population: 1,213 adults treated at eight US level-1 trauma centers
  purpose: Functional and cognitive recovery research
  sourceCategory: research
  note: Prespecified global outcome was null and the trial stopped for futility.
  sourceId: zafonte2012
- label: Pediatric ADHD pilot
  amount: 250 mg/day
  quantity: 250
  quantityMax: null
  unit: mg/day
  ingredient: Citicoline
  formulation: Oral study product
  route: Oral
  frequency: Daily
  duration: 28 days per crossover period
  population: Children aged 7–12 with ADHD
  purpose: Attention and behavior research
  sourceCategory: research
  note: Registry-matched pilot reported no significant benefit; small numbers limit safety inference.
  sourceId: hubner2024
- label: PubMed study exposure (25681529)
  amount: 500 mg
  quantity: 500
  quantityMax: null
  unit: mg
  ingredient: Citicoline
  formulation: As described in the PubMed abstract
  frequency: Study exposure
  duration: Study exposure
  population: Population described in the PubMed abstract
  purpose: Research exposure
  sourceCategory: research
  note: Dose extracted from the PubMed abstract; verify the full text for formulation and protocol details.
  sourceId: reddit-pmid-25681529
- label: PubMed study exposure (26179181)
  amount: 500 mg
  quantity: 500
  quantityMax: null
  unit: mg
  ingredient: Citicoline
  formulation: As described in the PubMed abstract
  route: Not established from abstract
  frequency: Study exposure
  duration: Study exposure
  population: Population described in the PubMed abstract
  purpose: Research exposure
  sourceCategory: research
  note: Dose extracted from the PubMed abstract; verify the full text for formulation and protocol details.
  sourceId: mcglade2019
- label: PubMed study exposure (1839138)
  amount: 500 mg
  quantity: 500
  quantityMax: null
  unit: mg
  ingredient: Citicoline
  formulation: As described in the PubMed abstract
  frequency: Study exposure
  duration: Study exposure
  population: Population described in the PubMed abstract
  purpose: Research exposure
  sourceCategory: research
  note: Dose extracted from the PubMed abstract; verify the full text for formulation and protocol details.
  sourceId: reddit-pmid-1839138
- label: PubMed study exposure (10974208)
  amount: 4000 mg
  quantity: 4000
  quantityMax: null
  unit: mg
  ingredient: Citicoline
  formulation: As described in the PubMed abstract
  route: Not established from abstract
  frequency: Study exposure
  duration: Study exposure
  population: Population described in the PubMed abstract
  purpose: Research exposure
  sourceCategory: research
  note: Dose extracted from the PubMed abstract; verify the full text for formulation and protocol details.
  sourceId: wurtman2000
- label: PubMed study exposure (25315828)
  amount: 500 mg
  quantity: 500
  quantityMax: null
  unit: mg
  ingredient: Citicoline
  formulation: As described in the PubMed abstract
  frequency: Study exposure
  duration: Study exposure
  population: assessed for auditory gating as indexed by suppression of the P50 event-related potential (ERP) in a paired-stimulus (S1, S2) paradigm, and for executive function as measured by the Groton Maze Learning Task (GMLT) of the CogState Schizophrenia Battery
  purpose: Research exposure
  sourceCategory: research
  note: Dose extracted from the PubMed abstract; verify the full text for formulation and protocol details.
  sourceId: reddit-pmid-25315828
- label: Threshold dose
  amount: 50 mg
  quantity: 50
  quantityMax: null
  unit: mg
  ingredient: Citicoline
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
  amount: 100–250 mg
  quantity: 100
  quantityMax: 250
  unit: mg
  ingredient: Citicoline
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
  amount: 250–1000 mg
  quantity: 250
  quantityMax: 1000
  unit: mg
  ingredient: Citicoline
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
  amount: 1000–2000 mg
  quantity: 1000
  quantityMax: 2000
  unit: mg
  ingredient: Citicoline
  formulation: Not established
  route: Oral
  frequency: Not established
  duration: Not established
  population: Not established
  purpose: PsychonautWiki dosage classification
  sourceCategory: community
  note: Band from the PsychonautWiki API snapshot built about 2026-06-23.
  sourceId: psychonautwiki
- label: Heavy dose band (2000 mg and above)
  amount: 2000 mg and above
  quantity: 2000
  quantityMax: null
  unit: mg
  ingredient: Citicoline
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
- id: citicoline-radiolabel
  analyte: Total plasma radiolabel
  route: Oral
  formulation: 300 mg oral 14C-CDP-choline
  population: Six adults
  endpoint: elimination-half-life
  statistic: not-established
  value: null
  low: null
  high: null
  unit: hours
  context: Radioactivity showed peaks near 1 and 24 hours and less than 1% fecal recovery over five days; labeled metabolites and excretion cannot be treated as parent citicoline Cmax, bioavailability or terminal half-life.
  sourceId: dinsdale1983
  modelEligible: false
- id: citicoline-metabolite-window
  analyte: Plasma choline and uridine/cytidine metabolites
  route: Oral
  formulation: 500–4,000 mg citicoline in human studies
  population: Healthy and mildly hypertensive adults
  endpoint: elimination-half-life
  statistic: not-established
  value: null
  low: null
  high: null
  unit: hours
  context: Metabolite elevations persisted for several hours and uridine was detected more reliably than cytidine in later work; these concentration windows do not establish unchanged-parent kinetics or cognitive duration.
  sourceId: wurtman2000
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
    min: 58
    max: 74
    unit: hours
  phases:
    - name: onset
      basis: elapsed-since-exposure
      min: 1
      max: 2
      unit: hours
    - name: comeup
      basis: phase-duration
      min: 2
      max: 3
      unit: hours
    - name: peak
      basis: phase-duration
      min: 2.5
      max: 3.5
      unit: hours
    - name: offset
      basis: phase-duration
      min: 30
      max: 40
      unit: hours
    - name: after-effects
      basis: phase-duration
      min: 40
      max: 60
      unit: hours
```

## Modifiers

```yaml
[]
```

## Effects

```yaml
- id: citicoline-subjective-boundary
  conceptId: perception
  name: Subjective enhancement
  direction: Variable
  evidence: Limited research
  description: The reviewed trials do not provide a reproducible subjective focus, stimulation, motivation or energy effect. Cognitive task results remain separate measured outcomes.
  sourceId: nakazaki2021
  population: Adults studied in controlled cognition trials
  exposure: 250–1,000 mg/day oral citicoline across studies
  instrument: Subjective measures were not a consistent primary endpoint
  magnitude: Not established
  reportType: measured-assessment
  conflictingSourceIds:
    - efsa2024
```

## Outcomes

```yaml
- id: nakazaki-spatial-span-primary
  study:
    id: nct03369925
    design: Randomized double-blind placebo-controlled parallel trial
    sampleSize: 100
    populationLabels:
      - Adults aged 50–85 with age-associated memory impairment
    comparator: Placebo
    route: Oral
    formulation: Cognizin capsules
    durationDays: 84
    assessmentTime: Week 12
  conflictingSourceIds: []
  conceptId: cognitive-task-performance
  name: Visuospatial working-memory performance
  direction: Variable
  evidence: Human research
  description: The prespecified primary Spatial Span endpoint did not differ significantly from placebo after multiplicity correction.
  sourceId: nakazaki2021
  population: Healthy adults aged 50–85 with age-associated memory impairment
  exposure: 500 mg/day oral Cognizin for 12 weeks
  instrument: Cambridge Brain Sciences Spatial Span
  magnitude: "Primary endpoint: no significant between-group difference; Bonferroni-adjusted alpha 0.00625."
- id: nakazaki-paired-associate-secondary
  study:
    id: nct03369925
    design: Randomized double-blind placebo-controlled parallel trial
    sampleSize: 100
    populationLabels:
      - Adults aged 50–85 with age-associated memory impairment
    comparator: Placebo
    route: Oral
    formulation: Cognizin capsules
    durationDays: 84
    assessmentTime: Week 12
  conflictingSourceIds:
    - spiers1996
  conceptId: episodic-memory
  name: Paired-associate episodic memory
  direction: Increased
  evidence: Human research
  description: A secondary episodic-memory endpoint improved versus placebo, while the trial's primary working-memory endpoint was null.
  sourceId: nakazaki2021
  population: Healthy adults aged 50–85 with age-associated memory impairment
  exposure: 500 mg/day oral Cognizin for 12 weeks
  instrument: Cambridge Brain Sciences Paired Associate task
  magnitude: Mean change 0.15 versus 0.06 with placebo; P=0.0025.
- id: spiers-verbal-memory
  study:
    id: spiers-aging-memory-1996
    design: Randomized double-blind placebo-controlled parallel trial with post hoc subgroup and subsequent crossover study
    sampleSize: 95
    populationLabels:
      - Volunteers aged 50–85 screened for dementia and neurological disorders
    comparator: Placebo
    route: Oral
    formulation: Citicoline
    durationDays: 90
    assessmentTime: Month 3
  conflictingSourceIds:
    - nakazaki2021
  conceptId: episodic-memory
  name: Verbal logical memory
  direction: Variable
  evidence: Human research
  description: In the initial randomized cohort, delayed-recall benefit appeared only in a subgroup identified after analysis; 32 subgroup participants later entered a higher-dose crossover study.
  sourceId: spiers1996
  population: Adults aged 50–85 without diagnosed dementia or major neurological problems
  exposure: 1000 mg/day for 3 months in the randomized phase; 2000 mg/day in the later crossover phase
  instrument: Logical-memory passage immediate and delayed recall
  magnitude: No full-sample general memory benefit established in the initial randomized phase.
- id: mcglade-attention
  study:
    id: mcglade-adolescent-citicoline
    design: Randomized placebo-controlled trial
    sampleSize: 75
    populationLabels:
      - Healthy adolescent males aged 13–18
    comparator: Placebo
    route: Oral
    formulation: Cognizin
    durationDays: 28
    assessmentTime: Day 28
  conflictingSourceIds: []
  conceptId: attention
  name: Selective and sustained attention
  direction: Increased
  evidence: Human research
  description: Citicoline groups showed better attention-related performance than placebo in a small healthy-adolescent study; funding and full COI declarations were not verified from accessible full text.
  sourceId: mcglade2019
  population: 75 healthy adolescent males aged 13–18
  exposure: 250 or 500 mg/day for 28 days
  instrument: Ruff 2&7 Selective Attention Test and CPT-II
  magnitude: Between-group attention result P=0.02; weight-adjusted dose associations also favored several attention measures.
- id: ictus-global-recovery
  study:
    id: nct00331890
    design: International randomized multicenter placebo-controlled sequential trial
    sampleSize: 2298
    populationLabels:
      - Moderate-to-severe acute ischemic stroke
    comparator: Placebo
    route: Intravenous then oral
    formulation: 1000 mg IV every 12 hours for 3 days then 1000 mg oral every 12 hours
    durationDays: 42
    assessmentTime: Day 90
  result:
    measure: odds-ratio
    estimate: 1.03
    unit: odds ratio
    instrument: Global recovery combining NIHSS ≤1, modified Rankin Scale ≤1 and Barthel Index ≥95
    comparator: Placebo
    assessmentTime: Day 90
    population: Adults with moderate-to-severe acute ischemic stroke
    confidenceInterval:
      lower: 0.86
      upper: 1.25
      level: 95
  conflictingSourceIds: []
  conceptId: stroke-recovery
  name: Global recovery after acute ischemic stroke
  direction: Variable
  evidence: Human research
  description: ICTUS was stopped for futility; 90-day global recovery did not differ significantly from placebo.
  sourceId: davalos2012
  population: 2298 adults with moderate-to-severe acute ischemic stroke in Germany, Portugal and Spain
  exposure: 2000 mg/day, IV for 3 days then oral, for 6 weeks
  instrument: Global endpoint combining NIHSS, modified Rankin Scale and Barthel Index
  magnitude: OR 1.03; 95% CI 0.86–1.25; P=0.364.
- id: cochrane-stroke-disability
  study:
    id: cochrane-citicoline-stroke-2020
    design: Systematic review and meta-analysis of randomized controlled trials
    populationLabels:
      - Acute ischemic stroke
    comparator: Placebo or standard care
    route: Oral, intravenous or combined
    formulation: Citicoline across included trials
    assessmentTime: Approximately 90 days
  result:
    measure: risk-ratio
    estimate: 1.11
    unit: risk ratio
    instrument: Modified Rankin Scale disability or dependence outcome
    comparator: Placebo or control
    assessmentTime: Approximately 90 days
    population: People with acute ischemic stroke
    confidenceInterval:
      lower: 0.97
      upper: 1.26
      level: 95
  conflictingSourceIds: []
  conceptId: stroke-recovery
  name: Disability or dependence after acute ischemic stroke
  direction: Variable
  evidence: Human research
  description: The Cochrane review found little or no difference in disability/dependence; evidence was low certainty and included trials were judged at high risk of bias.
  sourceId: cochrane2020
  population: Acute ischemic stroke across 10 RCTs totaling 4281 participants
  exposure: 500–2000 mg/day by oral, intravenous or combined routes across trials
  instrument: Modified Rankin Scale
  magnitude: RR 1.11; 95% CI 0.97–1.26 for disability/dependence in four trials.
- id: cobrit-global-recovery
  study:
    id: nct00545662
    design: Phase 3 double-blind randomized placebo-controlled multicenter trial
    sampleSize: 1213
    populationLabels:
      - Complicated mild traumatic brain injury
      - Moderate traumatic brain injury
      - Severe traumatic brain injury
    comparator: Placebo
    route: Oral or enteral
    formulation: Citicoline
    durationDays: 90
    assessmentTime: Day 90
  result:
    measure: odds-ratio
    estimate: 0.98
    unit: odds ratio
    instrument: TBI Clinical Trials Network Core Battery global statistic
    comparator: Placebo
    assessmentTime: Day 90
    population: Adults with complicated mild, moderate or severe nonpenetrating traumatic brain injury
    confidenceInterval:
      lower: 0.83
      upper: 1.15
      level: 95
  conflictingSourceIds: []
  conceptId: traumatic-brain-injury-recovery
  name: Global functional and cognitive recovery after traumatic brain injury
  direction: Variable
  evidence: Human research
  description: COBRIT found no improvement in the prespecified 90-day global functional/cognitive outcome; the trial was stopped for futility.
  sourceId: zafonte2012
  population: 1213 adults treated at eight US level 1 trauma centers
  exposure: 2000 mg/day oral or enteral citicoline for 90 days
  instrument: TBI Clinical Trials Network Core Battery
  magnitude: Global OR 0.98; 95% CI 0.83–1.15.
- conceptId: episodic-memory
  name: Paired-associate memory
  direction: Increased
  evidence: Human research
  description: A secondary episodic-memory endpoint improved relative to placebo. Clinical importance and generalizability remain uncertain.
  sourceId: nakazaki2021
  population: Older adults with age-associated memory impairment
  exposure: 500 mg/day for 12 weeks
  instrument: Cambridge Brain Sciences Paired Associate test
  magnitude: null
- conceptId: stroke-recovery
  name: Global recovery after stroke
  direction: Variable
  evidence: Human research
  description: ICTUS found no significant recovery advantage over placebo and was stopped for futility.
  sourceId: davalos2012
  population: Adults with moderate-to-severe acute ischemic stroke
  exposure: "Hospital trial: intravenous followed by oral citicoline"
  instrument: Global endpoint combining NIHSS, modified Rankin Scale and Barthel Index at 90 days
  magnitude: Odds ratio 1.03; 95% CI 0.86–1.25
- id: cohen-vascular-dementia
  study:
    id: cohen-vascular-dementia-2003
    design: Double-blind randomized placebo-controlled trial
    sampleSize: 30
    populationLabels:
      - Vascular dementia
    comparator: Placebo
    route: Oral
    formulation: Citicoline
    durationDays: 365
    assessmentTime: 12 months
  conflictingSourceIds: []
  conceptId: cognitive-performance
  name: Neuropsychological performance in vascular dementia
  direction: Variable
  evidence: Human research
  description: A small long-term randomized trial found no advantage over placebo on neuropsychological performance or MRI measures.
  sourceId: cohen2003
  population: 30 patients with vascular dementia
  exposure: 500 mg twice daily for 12 months
  instrument: Neuropsychological battery and MRI measures
  magnitude: No significant between-group advantage reported.
- id: cotroneo-ideale-vascular-cognition
  study:
    id: ideale-citicoline-2013
    design: Open nonrandomized controlled study
    sampleSize: 349
    populationLabels:
      - Mild vascular cognitive impairment
    comparator: Usual care control
    route: Oral
    formulation: Citicoline
    durationDays: 270
    assessmentTime: 9 months
  conflictingSourceIds:
    - cohen2003
  conceptId: cognitive-performance
  name: Screening cognition in mild vascular cognitive impairment
  direction: Increased
  evidence: Human research
  description: MMSE remained more stable in the citicoline group, but the open allocation and absence of an ADL/IADL difference prevent a demonstrated functional benefit claim.
  sourceId: cotroneo2013
  population: 349 older adults with mild vascular cognitive impairment
  exposure: 500 mg twice daily for 9 months
  instrument: MMSE and ADL/IADL measures
  magnitude: Screening-cognition signal; no ADL/IADL difference reported.
- id: alvarez-sabin-poststroke-cognition
  study:
    id: alvarez-sabin-poststroke-2013
    design: Open randomized usual-care comparison
    sampleSize: 347
    populationLabels:
      - Post-stroke vascular cognitive impairment
    comparator: Usual care
    route: Oral
    formulation: Citicoline
    durationDays: 365
    assessmentTime: 12 months
  conflictingSourceIds:
    - davalos2012
  conceptId: stroke-recovery
  name: Cognitive and functional outcomes after stroke
  direction: Variable
  evidence: Human research
  description: Attention/executive and orientation domains favored citicoline in an open follow-up, but attrition was substantial and the modified Rankin Scale result was not significant.
  sourceId: alvarez-sabin2013
  population: 347 participants beginning treatment six weeks after ischemic stroke; 199 had one-year neuropsychological follow-up
  exposure: 1000 mg/day for 12 months
  instrument: Neuropsychological domains and modified Rankin Scale
  magnitude: "mRS ≤2: 57.3% versus 48.7%, P=0.186; domain-level signals remain vulnerable to attrition and open treatment."
- id: shakeri-2026-tbi-pilot
  study:
    id: shakeri-bavali-oleyayi-tbi-2026
    design: Single-center triple-blind randomized placebo-controlled pilot
    sampleSize: 60
    populationLabels:
      - Mild-to-moderate traumatic brain injury
    comparator: Placebo
    route: Oral
    formulation: Citicoline
    durationDays: 90
    assessmentTime: Day 90
  conflictingSourceIds:
    - zafonte2012
  conceptId: traumatic-brain-injury-recovery
  name: Cognitive and functional recovery after mild-to-moderate traumatic brain injury
  direction: Increased
  evidence: Limited research
  description: A small 2026 pilot reported better MMSE and secondary functional outcomes, but it is not a replication of COBRIT and its funding disclosure was not verified.
  sourceId: shakeri2026
  population: 60 adults with mild-to-moderate traumatic brain injury
  exposure: 1000 mg/day for 90 days
  instrument: MMSE, Barthel Index and GOSE
  magnitude: Primary MMSE 25.2 versus 21.5, P<0.001; preliminary single-center result.
- id: hubner-adhd-pilot
  study:
    id: hubner-citicoline-adhd-2024
    design: Double-blind placebo-controlled crossover pilot
    sampleSize: 27
    populationLabels:
      - Children aged 7–12 with ADHD
    comparator: Placebo
    route: Oral
    formulation: Citicoline
    durationDays: 28
    assessmentTime: End of each period
  conflictingSourceIds: []
  conceptId: attention
  name: ADHD attention and behavioral parameters
  direction: Variable
  evidence: Limited research
  description: The small pediatric crossover pilot did not show a significant benefit on assessed parameters; it cannot establish broad pediatric safety.
  sourceId: hubner2024
  population: Children aged 7–12 with ADHD; registry reports 27 recruited and 22 completing
  exposure: 250 mg/day for 28 days per period with a 28-day washout
  instrument: ADHD attention and behavioral assessment battery
  magnitude: No significant between-condition benefit reported.
- id: reddit-citicoline-cognitive-performance-25681529
  conceptId: cognitive-performance
  name: Cognitive Performance
  direction: Increased
  evidence: Human research
  description: Novel pharmacological treatments targeting alpha 7 nicotinic acetylcholine receptor (α7 nAChR) hypofunction in schizophrenia have shown mixed success in ameliorating cognitive impairments associated with this disorder.
  sourceId: reddit-pmid-25681529
  population: Population described in the PubMed abstract
  exposure: Novel pharmacological treatments targeting alpha 7 nicotinic acetylcholine receptor (α7 nAChR) hypofunction in schizophrenia have shown mixed success in ameliorating cognitive impairments associated with this disorder.
  instrument: null
  magnitude: null
  reportType: measured-assessment
- id: reddit-citicoline-episodic-memory-25681529
  conceptId: episodic-memory
  name: Episodic Memory
  direction: Increased
  evidence: Human research
  description: Novel pharmacological treatments targeting alpha 7 nicotinic acetylcholine receptor (α7 nAChR) hypofunction in schizophrenia have shown mixed success in ameliorating cognitive impairments associated with this disorder.
  sourceId: reddit-pmid-25681529
  population: Population described in the PubMed abstract
  exposure: Novel pharmacological treatments targeting alpha 7 nicotinic acetylcholine receptor (α7 nAChR) hypofunction in schizophrenia have shown mixed success in ameliorating cognitive impairments associated with this disorder.
  instrument: null
  magnitude: null
  reportType: measured-assessment
- id: reddit-citicoline-attention-26179181
  conceptId: attention
  name: Attention
  direction: Increased
  evidence: Human research
  description: "OBJECTIVE: This study assessed the effects of citicoline, a nutraceutical, on attention, psychomotor function, and impulsivity in healthy adolescent males."
  sourceId: mcglade2019
  population: Population described in the PubMed abstract
  exposure: "OBJECTIVE: This study assessed the effects of citicoline, a nutraceutical, on attention, psychomotor function, and impulsivity in healthy adolescent males."
  instrument: null
  magnitude: null
  reportType: measured-assessment
- id: reddit-citicoline-cognitive-performance-25315828
  conceptId: cognitive-performance
  name: Cognitive Performance
  direction: Increased
  evidence: Human research
  description: Diminished auditory sensory gating and associated neurocognitive deficits in schizophrenia have been linked to altered expression and function of the alpha-7 nicotinic acetycholinergic receptor (α7 nAChR), the targeting of which may have treatment potential.
  sourceId: reddit-pmid-25315828
  population: assessed for auditory gating as indexed by suppression of the P50 event-related potential (ERP) in a paired-stimulus (S1, S2) paradigm, and for executive function as measured by the Groton Maze Learning Task (GMLT) of the CogState Schizophrenia Battery
  exposure: Diminished auditory sensory gating and associated neurocognitive deficits in schizophrenia have been linked to altered expression and function of the alpha-7 nicotinic acetycholinergic receptor (α7 nAChR), the targeting of which may have treatment potential.
  instrument: null
  magnitude: null
  reportType: measured-assessment
- id: reddit-citicoline-attention-25046515
  conceptId: attention
  name: Attention
  direction: Increased
  evidence: Human research
  description: This study examined the neurocognitive and electrophysiological effects of a citicoline-caffeine-based beverage in 60 healthy adult participants enrolled in a randomized, double-blind, placebo-controlled trial.
  sourceId: reddit-pmid-25046515
  population: Population described in the PubMed abstract
  exposure: This study examined the neurocognitive and electrophysiological effects of a citicoline-caffeine-based beverage in 60 healthy adult participants enrolled in a randomized, double-blind, placebo-controlled trial.
  instrument: null
  magnitude: null
  reportType: measured-assessment
- id: reddit-citicoline-cognitive-performance-25046515
  conceptId: cognitive-performance
  name: Cognitive Performance
  direction: Increased
  evidence: Human research
  description: This study examined the neurocognitive and electrophysiological effects of a citicoline-caffeine-based beverage in 60 healthy adult participants enrolled in a randomized, double-blind, placebo-controlled trial.
  sourceId: reddit-pmid-25046515
  population: Population described in the PubMed abstract
  exposure: This study examined the neurocognitive and electrophysiological effects of a citicoline-caffeine-based beverage in 60 healthy adult participants enrolled in a randomized, double-blind, placebo-controlled trial.
  instrument: null
  magnitude: null
  reportType: measured-assessment
- id: reddit-citicoline-episodic-memory-25046515
  conceptId: episodic-memory
  name: Episodic Memory
  direction: Increased
  evidence: Human research
  description: This study examined the neurocognitive and electrophysiological effects of a citicoline-caffeine-based beverage in 60 healthy adult participants enrolled in a randomized, double-blind, placebo-controlled trial.
  sourceId: reddit-pmid-25046515
  population: Population described in the PubMed abstract
  exposure: This study examined the neurocognitive and electrophysiological effects of a citicoline-caffeine-based beverage in 60 healthy adult participants enrolled in a randomized, double-blind, placebo-controlled trial.
  instrument: null
  magnitude: null
  reportType: measured-assessment
```

## Mechanisms

```yaml
- title: Phosphatidylcholine precursor pathway
  description: Citicoline supplies a choline-containing phospholipid-pathway intermediate and is extensively hydrolyzed to choline and cytidine/uridine-related metabolites. This precursor mechanism does not establish clinical efficacy or intact parent brain entry.
  sourceId: wurtman2000
  conceptId: choline-precursor
- title: Metabolite availability after oral dosing
  description: Human disposition studies show increased circulating choline and pyrimidine metabolites after citicoline; measured metabolites must not be collapsed into a single parent-compound PK curve.
  sourceId: dinsdale1983
  conceptId: choline-precursor
- title: Source-specific finding from PMID 25681529
  description: Novel pharmacological treatments targeting alpha 7 nicotinic acetylcholine receptor (α7 nAChR) hypofunction in schizophrenia have shown mixed success in ameliorating cognitive impairments associated with this disorder.
  sourceId: reddit-pmid-25681529
- title: Source-specific finding from PMID 1839138
  description: "1."
  sourceId: reddit-pmid-1839138
- title: Source-specific finding from PMID 15482372
  description: In the present study, we investigated the effect of intracerebroventricular (i.c.v.) administration of cytidine-5'-diphosphate (CDP) choline on plasma adrenocorticotropin (ACTH), serum growth hormone (GH), thyroid stimulating hormone (TSH), follicle stimulating hormone (FSH) and luteinizing hormone (LH) levels in conscious rats.
  sourceId: reddit-pmid-15482372
- title: Source-specific finding from PMID 25315828
  description: Diminished auditory sensory gating and associated neurocognitive deficits in schizophrenia have been linked to altered expression and function of the alpha-7 nicotinic acetycholinergic receptor (α7 nAChR), the targeting of which may have treatment potential.
  sourceId: reddit-pmid-25315828
```

## Cautions

```yaml
- title: Prespecified stroke outcomes were negative
  description: ICTUS and COBRIT did not improve their prespecified global recovery outcomes, and a Cochrane review judged overall stroke evidence low certainty.
  sourceId: cochrane2020
- title: Label-specific adverse effects
  description: Spanish citicoline labeling lists rare headache, dizziness, blood-pressure changes, gastrointestinal symptoms, rash and hypersensitivity reactions; frequencies are not precise incidence estimates from controlled oral trials.
  sourceId: aemps-somazina-injectable
- title: Pregnancy and organ-impairment gaps
  description: Adequate pregnancy/lactation evidence and dedicated renal/hepatic impairment dose-adjustment studies were not identified. Normal laboratory results in selected trials do not establish safety in organ disease.
  sourceId: hc-cognitive-2025
- title: Formulation and salt basis
  description: Inner-salt citicoline, monosodium citicoline, branded Cognizin, oral products and injectable medicines require separate dose and quality interpretation.
  sourceId: eu-novel-food-2026
- title: Source-specific finding from PMID 25681529
  description: Novel pharmacological treatments targeting alpha 7 nicotinic acetylcholine receptor (α7 nAChR) hypofunction in schizophrenia have shown mixed success in ameliorating cognitive impairments associated with this disorder.
  sourceId: reddit-pmid-25681529
```

## Claims

```yaml
- id: citicoline-precursor-boundary
  assertion: Citicoline is a phosphatidylcholine-pathway precursor that generates choline and pyrimidine metabolites.
  relation: precursor-of
  participants:
    - entityId: substance:citicoline
      role: precursor
    - entityId: tag:choline-precursor
      role: metabolic-product
  context: Human ADME studies support metabolite availability, but not intact parent BBB passage or general cognitive benefit.
  sourceIds:
    - dinsdale1983
    - wurtman2000
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Metabolite exposure is not a clinical outcome.
- id: citicoline-stroke-null
  assertion: Large citicoline stroke and TBI trials did not improve prespecified global recovery outcomes.
  relation: tested-with-null-result
  participants:
    - entityId: substance:citicoline
      role: intervention
    - entityId: tag:stroke-recovery
      role: outcome
  context: ICTUS and COBRIT were stopped for futility on their primary global endpoints.
  sourceIds:
    - davalos2012
    - zafonte2012
  conflictingSourceIds:
    - shakeri2026
  assessment: not-formally-assessed
  limitation: A newer small TBI pilot is preliminary and not a replication of either large trial.
- id: reddit-claim-citicoline-25681529-0
  assertion: Citicoline is associated with the reported episodic memory finding in this publication.
  relation: associated-with
  participants:
    - entityId: substance:citicoline
      role: intervention or exposure
    - entityId: tag:episodic-memory
      role: reported endpoint
  context: Publication abstract; direction and population are retained on the linked observation.
  sourceIds:
    - reddit-pmid-25681529
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Automated corpus import from an abstract; this record is not an independent meta-analysis.
- id: reddit-claim-citicoline-26179181-1
  assertion: Citicoline is associated with the reported attention finding in this publication.
  relation: associated-with
  participants:
    - entityId: substance:citicoline
      role: intervention or exposure
    - entityId: tag:attention
      role: reported endpoint
  context: Publication abstract; direction and population are retained on the linked observation.
  sourceIds:
    - mcglade2019
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Automated corpus import from an abstract; this record is not an independent meta-analysis.
- id: reddit-claim-citicoline-1839138-2
  assertion: Citicoline is associated with the reported attention finding in this publication.
  relation: associated-with
  participants:
    - entityId: substance:citicoline
      role: intervention or exposure
    - entityId: tag:attention
      role: reported endpoint
  context: Publication abstract; direction and population are retained on the linked observation.
  sourceIds:
    - reddit-pmid-1839138
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Automated corpus import from an abstract; this record is not an independent meta-analysis.
- id: reddit-claim-citicoline-15482372-3
  assertion: Citicoline is associated with the reported attention finding in this publication.
  relation: associated-with
  participants:
    - entityId: substance:citicoline
      role: intervention or exposure
    - entityId: tag:attention
      role: reported endpoint
  context: Publication abstract; direction and population are retained on the linked observation.
  sourceIds:
    - reddit-pmid-15482372
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Automated corpus import from an abstract; this record is not an independent meta-analysis.
- id: reddit-claim-citicoline-10974208-4
  assertion: Citicoline is associated with the reported attention finding in this publication.
  relation: associated-with
  participants:
    - entityId: substance:citicoline
      role: intervention or exposure
    - entityId: tag:attention
      role: reported endpoint
  context: Publication abstract; direction and population are retained on the linked observation.
  sourceIds:
    - wurtman2000
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Automated corpus import from an abstract; this record is not an independent meta-analysis.
- id: reddit-claim-citicoline-25315828-5
  assertion: Citicoline is associated with the reported cognitive performance finding in this publication.
  relation: associated-with
  participants:
    - entityId: substance:citicoline
      role: intervention or exposure
    - entityId: tag:cognitive-performance
      role: reported endpoint
  context: Publication abstract; direction and population are retained on the linked observation.
  sourceIds:
    - reddit-pmid-25315828
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Automated corpus import from an abstract; this record is not an independent meta-analysis.
- id: reddit-claim-citicoline-25046515-6
  assertion: Citicoline is associated with the reported episodic memory finding in this publication.
  relation: associated-with
  participants:
    - entityId: substance:citicoline
      role: intervention or exposure
    - entityId: tag:episodic-memory
      role: reported endpoint
  context: Publication abstract; direction and population are retained on the linked observation.
  sourceIds:
    - reddit-pmid-25046515
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Automated corpus import from an abstract; this record is not an independent meta-analysis.
```

## Interactions

```yaml
- id: citicoline-levodopa
  name: Levodopa
  otherSlug: null
  summary: Spanish medicinal labeling describes potentiation with levodopa; magnitude and dose-adjustment requirements are not quantified.
  sourceId: aemps-somazina
  mechanism: Label-described pharmacodynamic potentiation
  context: Regulatory label statement, not a controlled interaction trial.
- id: citicoline-meclofenoxate
  name: Meclofenoxate / centrophenoxine
  otherSlug: null
  summary: Spanish injectable labeling says not to coadminister; the evidence is product-label specific.
  sourceId: aemps-somazina-injectable
  mechanism: Label contraindication/avoidance
  context: Does not quantify risk for every oral supplement product.
```

## Experience links

```yaml
[]
```

## References

```yaml
- id: pubchem
  title: "Citicoline: compound identity and structure"
  authors: NCBI PubChem
  year: 2026
  url: https://pubchem.ncbi.nlm.nih.gov/compound/13804
  kind: Chemical database
  insight: Source for the retained parent-compound formula, molecular weight, PubChem CID and connectivity representation.
  limitation: Parent identity does not establish salt formulation, product quality, pharmacokinetics or clinical efficacy.
  funding: US National Library of Medicine database; not a clinical trial.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed; not a clinical publication.
  conflictOfInterestStatus: not-assessed
- id: dinsdale1983
  title: Pharmacokinetics of 14C CDP-choline
  authors: Dinsdale et al.
  year: 1983
  pmid: "6412727"
  url: https://pubmed.ncbi.nlm.nih.gov/6412727/
  kind: Human radiolabel-disposition study
  insight: Six adults showed near-complete absorption of radiolabel, biphasic plasma radioactivity and elimination through respiratory CO2 and urine.
  limitation: Radioactivity includes metabolites; the study does not establish an unchanged-citicoline elimination half-life.
  funding: Not assessed from an inspected full funding declaration.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed from an inspected full conflict declaration.
  conflictOfInterestStatus: not-assessed
- id: lopez1987
  title: Metabolism of cytidine (5′)-diphosphocholine (CDP-choline) following oral and intravenous administration to the human and the rat
  authors: López-Coviella et al.
  year: 1987
  pmid: "20501174"
  doi: 10.1016/0197-0186(87)90049-0
  url: https://pubmed.ncbi.nlm.nih.gov/20501174/
  kind: Human and animal metabolism study
  insight: Reported rapid disappearance of IV parent compound and increased circulating choline and cytidine after citicoline administration.
  limitation: Small older study; later human oral work found uridine rather than reliably detectable cytidine.
  funding: Not assessed from an inspected full funding declaration.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed from an inspected full conflict declaration.
  conflictOfInterestStatus: not-assessed
- id: wurtman2000
  title: Effect of oral CDP-choline on plasma choline and uridine levels in humans
  authors: Wurtman et al.
  year: 2000
  pmid: "10974208"
  doi: 10.1016/S0006-2952(00)00436-6
  url: https://pubmed.ncbi.nlm.nih.gov/10974208/
  kind: Randomized human pharmacokinetic/metabolism study
  insight: Oral 500–4000 mg citicoline increased plasma choline and uridine; cytidine was not reliably detectable.
  limitation: Twelve mildly hypertensive adults and short sampling; plasma metabolites do not establish parent-citicoline brain exposure or clinical benefit.
  funding: PubMed indexing lists governmental research support, but no inspected full funding declaration was available; classification not assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed from an inspected full conflict declaration.
  conflictOfInterestStatus: not-assessed
- id: nakazaki2021
  title: "Citicoline and Memory Function in Healthy Older Adults: A Randomized, Double-Blind, Placebo-Controlled Clinical Trial"
  authors: Nakazaki et al.
  year: 2021
  pmid: "33978188"
  doi: 10.1093/jn/nxab119
  url: https://pubmed.ncbi.nlm.nih.gov/33978188/
  kind: Randomized placebo-controlled trial
  insight: Secondary episodic and composite memory measures improved, but the prespecified Spatial Span primary endpoint did not.
  limitation: Small 12-week selected-population trial; sponsor involvement and employee authorship limit independence and broader generalizability.
  funding: Kyowa Hakko Bio Co., Ltd funded the study and participated in study design, but not intervention, data collection or statistical analysis.
  sponsorshipStatus: industry-funded
  conflictsOfInterest: EN and FW were Kyowa Hakko Bio employees; DC was a Kyowa Hakko USA employee; EM and KS were Biofortis employees.
  conflictOfInterestStatus: declared
  disclosureUrl: https://jn.nutrition.org/article/S0022-3166%2822%2900267-X/fulltext
- id: spiers1996
  title: Citicoline improves verbal memory in aging
  authors: Spiers et al.
  year: 1996
  pmid: "8624220"
  doi: 10.1001/archneur.1996.00550050071026
  url: https://pubmed.ncbi.nlm.nih.gov/8624220/
  kind: Randomized placebo-controlled trial with subsequent crossover study
  insight: Initial 1000 mg/day trial showed delayed-recall benefit only after identifying a lower-memory subgroup; a later 2000 mg/day crossover favored citicoline.
  limitation: Post hoc subgrouping and self-selected crossover follow-up weaken confirmation of a broad memory effect.
  funding: PubMed indexing lists governmental research support, but no inspected full funding declaration was available; classification not assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed from an inspected full conflict declaration.
  conflictOfInterestStatus: not-assessed
- id: mcglade2019
  title: The Effect of Citicoline Supplementation on Motor Speed and Attention in Adolescent Males
  authors: McGlade et al.
  year: 2019
  pmid: "26179181"
  doi: 10.1177/1087054715593633
  url: https://pubmed.ncbi.nlm.nih.gov/26179181/
  kind: Randomized placebo-controlled trial
  insight: In 75 healthy adolescent males, 250–500 mg/day for 28 days improved attention and psychomotor-speed measures versus placebo.
  limitation: Small male-only enhancement study; accessible metadata showed corporate affiliations but did not expose a verified full funding/COI declaration.
  funding: Not assessed; author affiliation and branded-product use are not treated as proof of sponsorship.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed; corporate author affiliations do not by themselves establish a declared conflict.
  conflictOfInterestStatus: not-assessed
- id: davalos2012
  title: "Citicoline in the treatment of acute ischaemic stroke: an international, randomised, multicentre, placebo-controlled study (ICTUS trial)"
  authors: Dávalos et al.
  year: 2012
  pmid: "22691567"
  doi: 10.1016/S0140-6736(12)60813-7
  url: https://pubmed.ncbi.nlm.nih.gov/22691567/
  kind: Multicentre randomized placebo-controlled trial
  insight: ICTUS stopped for futility and found no 90-day global-recovery advantage with 2000 mg/day citicoline.
  limitation: Moderate-to-severe acute-stroke population; does not resolve other indications, but directly addresses routine acute-stroke neuroprotection.
  funding: PubMed abstract states Ferrer Grupo; full funding/COI declaration was not accessible for inspection in this run.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed from an inspected full conflict declaration.
  conflictOfInterestStatus: not-assessed
- id: zafonte2012
  title: "Effect of citicoline on functional and cognitive status among patients with traumatic brain injury: Citicoline Brain Injury Treatment Trial (COBRIT)"
  authors: Zafonte et al.
  year: 2012
  pmid: "23168823"
  doi: 10.1001/jama.2012.13256
  url: https://pubmed.ncbi.nlm.nih.gov/23168823/
  kind: Phase 3 multicenter randomized placebo-controlled trial
  insight: In 1213 TBI patients, 2000 mg/day for 90 days did not improve the 90-day global functional/cognitive outcome.
  limitation: Medication adherence was low overall, although adherence analyses did not show a treatment benefit.
  funding: NICHD grants supported the trial; Ferrer Grupo supplied citicoline and identical placebo and was named among sponsors, with no stated role in conduct, analysis or manuscript preparation.
  sponsorshipStatus: mixed-funding
  conflictsOfInterest: All authors submitted ICMJE disclosures and none reported conflicts.
  conflictOfInterestStatus: none-declared
  disclosureUrl: https://jamanetwork.com/journals/jama/fullarticle/1392561
- id: cochrane2020
  title: Citicoline for treating people with acute ischemic stroke
  authors: Martí-Carvajal et al.
  year: 2020
  pmid: "32860632"
  doi: 10.1002/14651858.CD013066.pub2
  url: https://pubmed.ncbi.nlm.nih.gov/32860632/
  kind: Cochrane systematic review and meta-analysis
  insight: Ten RCTs with 4281 participants showed little or no difference in mortality, disability, functional or neurological recovery; evidence was low certainty.
  limitation: Included trials had high risk of bias; harms were poorly reported and quality of life was not assessed.
  funding: External sources listed Cochrane Stroke Group and Iberoamerican Cochrane Network; no commercial support was declared for the review.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: All listed review authors declared none known.
  conflictOfInterestStatus: none-declared
  disclosureUrl: https://pmc.ncbi.nlm.nih.gov/articles/PMC8406786/
- id: efsa2024
  title: "‘Citicoline’ and support of the memory function: Evaluation of a health claim pursuant to Article 13(5) of Regulation (EC) No 1924/2006"
  authors: EFSA Panel on Nutrition, Novel Foods and Food Allergens
  year: 2024
  doi: 10.2903/j.efsa.2024.8861
  url: https://efsa.onlinelibrary.wiley.com/doi/full/10.2903/j.efsa.2024.8861
  kind: Official scientific health-claim assessment
  insight: EFSA found one positive episodic-memory RCT but inconsistent corroboration and no convincing mechanism; the proposed memory cause-effect relationship was not established.
  limitation: Addresses a defined food-health claim and target population, not medicinal treatment indications.
  funding: Official EFSA scientific opinion; not a clinical trial.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed here as a clinical-publication COI classification.
  conflictOfInterestStatus: not-assessed
- id: aemps-somazina
  title: Somazina 100 mg/ml and 1000 mg oral solution — Summary of Product Characteristics
  authors: Agencia Española de Medicamentos y Productos Sanitarios
  year: 2026
  url: https://cima.aemps.es/cima/dochtml/ft/53168
  kind: Official medicinal-product label
  insight: Gives Spanish indications, adult/elderly/pediatric dosing context, contraindications, interactions and listed adverse reactions for oral citicoline sodium.
  limitation: Product-specific Spanish label; authorization does not establish efficacy for unlabelled uses or supplement products.
  funding: Official regulatory label; not a clinical trial.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not applicable to a clinical-publication COI assessment; not assessed.
  conflictOfInterestStatus: not-assessed
- id: aemps-somazina-injectable
  title: Somazina 500 mg and 1000 mg injectable solution — Summary of Product Characteristics
  authors: Agencia Española de Medicamentos y Productos Sanitarios
  year: 2026
  url: https://cima.aemps.es/cima/dochtml/ft/54389/FT_54389.html
  kind: Official medicinal-product label
  insight: Gives injectable dosing, slow-IV administration, persistent-intracranial-hemorrhage dose limit, interactions and pregnancy/lactation precautions.
  limitation: Product-specific Spanish label and formulation.
  funding: Official regulatory label; not a clinical trial.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not applicable to a clinical-publication COI assessment; not assessed.
  conflictOfInterestStatus: not-assessed
- id: eu-novel-food-2026
  title: Consolidated Union list of novel foods — Citicoline conditions of use
  authors: European Union
  year: 2026
  url: https://eur-lex.europa.eu/eli/reg_impl/2017/2470/2026-07-02/eng/
  kind: Official EU legal act
  insight: Authorizes citicoline in food supplements at 500 mg/day and FSMPs at 250 mg/serving up to 1000 mg/day, with child-exclusion labeling.
  limitation: Food-law authorization and maximum levels are not evidence of clinical efficacy.
  funding: Official legal act; not a clinical trial.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not applicable to a clinical-publication COI assessment; not assessed.
  conflictOfInterestStatus: not-assessed
- id: aha-stroke-2026
  title: 2026 Guideline for the Early Management of Patients With Acute Ischemic Stroke
  authors: American Heart Association/American Stroke Association
  year: 2026
  doi: 10.1161/STR.0000000000000513
  url: https://www.ahajournals.org/doi/10.1161/STR.0000000000000513
  kind: Major clinical practice guideline
  insight: Its neuroprotection section states that current trials have not supplied sufficient evidence to warrant neuroprotective-agent use in clinical practice.
  limitation: The 2026 neuroprotection section does not provide a citicoline-specific recommendation.
  funding: Guideline development uses AHA/ASA conflict-management policies; individual funding classification not assessed here.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Guideline reports relationships-with-industry disclosure and recusal policies; individual declarations were not classified here.
  conflictOfInterestStatus: not-assessed
- id: nih-choline
  title: Choline — Fact Sheet for Health Professionals
  authors: National Institutes of Health, Office of Dietary Supplements
  year: 2022
  url: https://ods.od.nih.gov/factsheets/Choline-HealthProfessional/
  kind: Authoritative nutrient monograph
  insight: Describes choline as an essential nutrient used in phospholipids, acetylcholine and other physiological pathways.
  limitation: A dietary-choline monograph does not establish citicoline-specific efficacy.
  funding: US National Institutes of Health resource; not a clinical trial.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not applicable to a clinical-publication COI assessment; not assessed.
  conflictOfInterestStatus: not-assessed
- id: fda-warning-2019
  title: Pure Nootropics, LLC — FDA Warning Letter 565425
  authors: US Food and Drug Administration
  year: 2019
  url: https://www.fda.gov/inspections-compliance-enforcement-and-criminal-investigations/warning-letters/pure-nootropics-llc-565425-02052019
  kind: Official regulatory enforcement letter
  insight: FDA cited disease-treatment claims for CDP-choline/citicoline products among claims causing products to be treated as unapproved new drugs.
  limitation: Firm-specific enforcement letter; not an ingredient-wide approval decision.
  funding: Official regulatory document; not a clinical trial.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not applicable to a clinical-publication COI assessment; not assessed.
  conflictOfInterestStatus: not-assessed
- id: cohen2003
  title: "Long-term citicoline (cytidine diphosphate choline) use in patients with vascular dementia: neuroimaging and neuropsychological outcomes"
  authors: Cohen et al.
  year: 2003
  pmid: "12865605"
  doi: 10.1159/000071116
  url: https://pubmed.ncbi.nlm.nih.gov/12865605/
  kind: Double-blind randomized placebo-controlled trial
  insight: In 30 vascular-dementia patients, 500 mg twice daily for 12 months did not improve neuropsychological or MRI outcomes versus placebo.
  limitation: Small older trial; funding and full conflict declaration were not inspected.
  funding: Not assessed from an inspected full funding declaration.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed from an inspected full conflict declaration.
  conflictOfInterestStatus: not-assessed
- id: cotroneo2013
  title: "Effectiveness and safety of citicoline in mild vascular cognitive impairment: the IDEALE study"
  authors: Cotroneo et al.
  year: 2013
  pmid: "23403474"
  doi: 10.2147/CIA.S38420
  url: https://pubmed.ncbi.nlm.nih.gov/23403474/
  kind: Open nonrandomized controlled study
  insight: MMSE was more stable with citicoline in 349 adults with mild vascular cognitive impairment, but ADL/IADL did not differ.
  limitation: Open allocation and nonrandomized design leave substantial confounding and do not establish functional preservation.
  funding: Not assessed from an inspected full funding declaration.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed from an inspected full conflict declaration.
  conflictOfInterestStatus: not-assessed
- id: alvarez-sabin2013
  title: Long-term treatment with citicoline may improve poststroke vascular cognitive impairment
  authors: Alvarez-Sabín et al.
  year: 2013
  pmid: "23406981"
  doi: 10.1159/000346602
  url: https://pubmed.ncbi.nlm.nih.gov/23406981/
  kind: Open randomized usual-care comparison
  insight: Domain-level cognitive signals favored citicoline after stroke, but the mRS result was not significant and only 199 of 347 participants had one-year neuropsychological follow-up.
  limitation: Open treatment and attrition weaken causal and patient-important-outcome inference.
  funding: Not assessed from an inspected full funding declaration.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed from an inspected full conflict declaration.
  conflictOfInterestStatus: not-assessed
- id: shakeri2026
  title: "Effect of citicoline on cognitive function and functional recovery in patients with mild-to-moderate traumatic brain injury: a randomized placebo-controlled trial"
  authors: Shakeri Bavali Oleyayi et al.
  year: 2026
  pmid: "42679920"
  doi: 10.1016/j.neuroscience.2026.08.058
  url: https://pubmed.ncbi.nlm.nih.gov/42679920/
  kind: Single-center triple-blind randomized placebo-controlled pilot
  insight: A 60-person 90-day pilot reported better MMSE and secondary functional outcomes with 1000 mg/day citicoline.
  limitation: Preliminary single-center result; not a replication of COBRIT and full funding/COI disclosure was not inspected.
  funding: Not assessed from an inspected full funding declaration.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed from an inspected full conflict declaration.
  conflictOfInterestStatus: not-assessed
- id: hubner2024
  title: "Use of Citicoline in Attention-Deficit/Hyperactivity Disorder: A Pilot Study"
  authors: Hübner et al.
  year: 2024
  pmid: "38976279"
  doi: 10.1097/WNF.0000000000000602
  url: https://pubmed.ncbi.nlm.nih.gov/38976279/
  kind: Double-blind placebo-controlled crossover pilot
  insight: A small pediatric ADHD pilot did not find a significant benefit on assessed parameters.
  limitation: Registry reports 27 recruited and 22 completing; small short study cannot establish pediatric efficacy or broad safety.
  funding: Registry names Univates as sponsor/supporting institution; article-specific monetary funding was not verified.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed from an inspected full conflict declaration.
  conflictOfInterestStatus: not-assessed
- id: hc-cognitive-2025
  title: Cognitive Function Products
  authors: Health Canada
  year: 2025
  url: https://webprod.hc-sc.gc.ca/nhpid-bdipsn/atReq?atid=fonc.cognitive.func&lang=eng&wbdisable=true
  kind: Official natural-health-product monograph
  insight: Provides product-licensing ranges for citicoline sustained-attention and older-adult cognitive-health claims, including a 500 mg single-dose maximum.
  limitation: A licensing monograph is not evidence for every retail product or for stroke/TBI treatment.
  funding: Official licensing guidance; trial funding not applicable.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Individual drafting conflicts not reported in the inspected monograph.
  conflictOfInterestStatus: not-assessed
- id: eu-memory-claim-2025
  title: Commission Regulation (EU) 2025/2223 refusing to authorise a proposed citicoline memory health claim
  authors: European Commission
  year: 2025
  url: https://eur-lex.europa.eu/eli/reg/2025/2223/oj/eng
  kind: Official EU legal act
  insight: Refused the proposed citicoline memory-function claim effective 25 November 2025.
  limitation: The refusal is not a ban on the authorized novel-food ingredient and does not adjudicate every endpoint-specific study.
  funding: Official legal instrument; application by Edge Pharma Sp. z o.o.; trial funding not applicable.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not applicable to a legal instrument; commercial applicant identified.
  conflictOfInterestStatus: not-assessed
- id: kyowa-patent-2024
  title: Administration of citicoline to improve cognitive performance, attentional performance, and motor function
  authors: Kyowa Hakko Bio Co., Ltd.
  year: 2024
  url: https://patents.google.com/patent/US12115181B2/en
  kind: Patent record
  insight: Method-of-use patent family includes claims involving citicoline or its salts for cognitive, attentional and motor-performance applications.
  limitation: A patent is an intellectual-property instrument, not peer-reviewed efficacy evidence or regulatory approval.
  funding: Not applicable; patent record assigned to Kyowa Hakko Bio Co., Ltd.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Commercial assignee is identified by the patent record; clinical-publication COI status is not applicable.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-33613880
  title: "Citicoline Improves Human Vigilance and Visual Working Memory: The Role of Neuronal Activation and Oxidative Stress"
  authors: Not established
  year: 2026
  url: https://pubmed.ncbi.nlm.nih.gov/33613880/
  kind: Reddit index publication link
  insight: The Reddit index links this publication; bibliographic metadata was not returned by the PubMed batch.
  limitation: Full text, publication metadata, funding, and conflicts were not independently verified in this corpus pass.
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-link-dc6ba861ecff
  title: Improved Attentional Performance Following Citicoline Administration in Healthy Adult Women (2012)
  authors: Not established
  year: 2012
  url: https://www.scirp.org/journal/PaperInformation.aspx?paperID=19921
  kind: Reddit index publication link
  insight: The Reddit index links this publication; bibliographic metadata was not returned by the PubMed batch.
  limitation: Full text, publication metadata, funding, and conflicts were not independently verified in this corpus pass.
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-25681529
  title: Neurocognitive effects of acute choline supplementation in low, medium and high performer healthy volunteers
  authors: Verner Knott, Sara de la Salle, Joelle Choueiry, Danielle Impey, Dylan Smith, Meaghan Smith, Elise Beaudry, Salman Saghir, Vadim Ilivitsky, Alain Labelle
  year: 2015
  url: https://pubmed.ncbi.nlm.nih.gov/25681529/
  kind: Randomized controlled trial of citicoline
  insight: Novel pharmacological treatments targeting alpha 7 nicotinic acetylcholine receptor (α7 nAChR) hypofunction in schizophrenia have shown mixed success in ameliorating cognitive impairments associated with this disorder.
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: "25681529"
  doi: 10.1016/j.pbb.2015.02.004
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-1839138
  title: Changes in brain striatum dopamine and acetylcholine receptors induced by chronic CDP-choline treatment of aging mice.
  authors: R Giménez, J Raïch, J Aguilar
  year: 1991
  url: https://pubmed.ncbi.nlm.nih.gov/1839138/
  kind: PubMed publication
  insight: "1."
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: "1839138"
  doi: 10.1111/j.1476-5381.1991.tb12471.x
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-15482372
  title: "CDP-choline increases plasma ACTH and potentiates the stimulated release of GH, TSH and LH: the cholinergic involvement."
  authors: Sinan Cavun, Vahide Savci
  year: 2004
  url: https://pubmed.ncbi.nlm.nih.gov/15482372/
  kind: PubMed publication
  insight: In the present study, we investigated the effect of intracerebroventricular (i.c.v.) administration of cytidine-5'-diphosphate (CDP) choline on plasma adrenocorticotropin (ACTH), serum growth hormone (GH), thyroid stimulating hormone (TSH), follicle stimulating hormone (FSH) and luteinizing hormone (LH) levels in conscious rats.
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: "15482372"
  doi: 10.1111/j.1472-8206.2004.00272.x
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-25315828
  title: "CDP-choline: effects of the procholine supplement on sensory gating and executive function in healthy volunteers stratified for low, medium and high P50 suppression."
  authors: Verner Knott, Dylan Smith, Sara de la Salle, Danielle Impey, Joelle Choueiry, Elise Beaudry, Meaghan Smith, Salman Saghir, Vadim Ilivitsky, Alain Labelle
  year: 2014
  url: https://pubmed.ncbi.nlm.nih.gov/25315828/
  kind: PubMed publication
  insight: Diminished auditory sensory gating and associated neurocognitive deficits in schizophrenia have been linked to altered expression and function of the alpha-7 nicotinic acetycholinergic receptor (α7 nAChR), the targeting of which may have treatment potential.
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: "25315828"
  doi: 10.1177/0269881114553254
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-25046515
  title: Improvements in concentration, working memory and sustained attention following consumption of a natural citicoline-caffeine beverage.
  authors: Steven E Bruce, Kimberly B Werner, Brittany F Preston, Laurie M Baker
  year: 2014
  url: https://pubmed.ncbi.nlm.nih.gov/25046515/
  kind: PubMed publication
  insight: This study examined the neurocognitive and electrophysiological effects of a citicoline-caffeine-based beverage in 60 healthy adult participants enrolled in a randomized, double-blind, placebo-controlled trial.
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: "25046515"
  doi: 10.3109/09637486.2014.940286
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: psychonautwiki
  title: "Citicoline: PsychonautWiki dose and duration data"
  authors: PsychonautWiki contributors
  year: 2026
  url: https://psychonautwiki.org/wiki/Citicoline
  kind: Community wiki data · CC BY 4.0
  insight: Source of this page's community dose bands and subjective duration ranges, from the PsychonautWiki API snapshot built about 2026-06-23 and retrieved 2026-11-06. The structured data is used under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/); BHWiki normalized unit symbols and route names.
  limitation: "PsychonautWiki states: \"PW's dosage information is gathered from users and resources for educational purposes only. It is not a recommendation and should be verified with other sources for accuracy.\" Its dose and duration values carry no per-value citations."
```

## Legal

```yaml
- jurisdiction: Spain
  activity: Medicinal oral and injectable citicoline
  status: AEMPS lists Somazina sodium-salt medicines with product-specific adult dosing; medicinal authorization is distinct from the mixed stroke and TBI efficacy evidence.
  sourceUrl: https://cima.aemps.es/cima/publico/lista.html
  asOf: 2026-10-10
- jurisdiction: European Union
  activity: Novel-food supplement use
  status: Union-list permission covers specified citicoline food uses and limits; Regulation 2025/2223 refused the proposed memory health claim.
  sourceUrl: https://eur-lex.europa.eu/eli/reg_impl/2025/2223/oj/eng
  asOf: 2026-10-10
- jurisdiction: United States
  activity: Dietary supplements
  status: FDA dietary supplements are not preapproved for effectiveness; a warning letter challenged disease-treatment claims for a citicoline product as unapproved-drug claims.
  sourceUrl: https://www.fda.gov/food/dietary-supplements
  asOf: 2026-10-10
```

## External wiki links

```yaml
- service: Wikipedia
  url: https://en.wikipedia.org/wiki/CDP-Choline
  title: Wikipedia
- service: Examine
  url: https://examine.com/supplements/CDP-choline
  title: Examine
```

