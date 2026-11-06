---
slug: caffeine
name: Caffeine
subtitle: Wakefulness, with a long tail.
aliases:
  - 1,3,7-trimethylxanthine
formula: C8H10N4O2
molecularWeight: 194.19 g/mol
pubchemCid: 2519
smiles: CN1C=NC2=C1C(=O)N(C(=O)N2C)C
category: Stimulant
tags:
  - stimulant
  - methylxanthine
  - adenosine-antagonist
  - adenosine
  - cyp1a2
  - attention
  - sleep
  - adenosine-receptor
  - tobacco-smoke
  - alertness
  - anxiety
accent: "#adbd8e"
reviewedAt: 2026-11-01
halfLife:
  label: Highly variable; 4.1 hours was the study mean in one six-man oral pharmacokinetic study
  low: 4.1
  high: 4.1
  context: This is a study mean, not a universal adult range. Pregnancy, oral-contraceptive use, liver disease, tobacco-smoke exposure or cessation, and CYP1A2-inhibiting medicines can materially alter caffeine elimination.
  sourceId: lelo1986
  observationId: caffeine-elimination-healthy
kinetics:
  onset: No universal subjective-onset value is assigned; perceived onset varies and is not inferred from plasma elimination.
  peak: Oral caffeine is rapidly absorbed, but no single peak-time value is assigned across formulations and study conditions.
  duration: No universal subjective duration is assigned; elimination half-life and measured sleep disruption are represented separately.
  bioavailability: In a six-person dose study, oral caffeine was rapidly absorbed and described as completely available across 50–750 mg study doses.
  metabolism: Most caffeine is eliminated by metabolism rather than unchanged urinary excretion; CYP1A2 and paraxanthine formation are represented in the structured evidence below.
  sourceId: newton1981
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
x-order: 0
---

## Summary

Caffeine is 1,3,7-trimethylxanthine, a methylxanthine stimulant whose acute effects and later sleep effects depend strongly on dose, timing, prior exposure, and clearance. This article treats caffeine itself as the intervention; caffeinated products and other substances are included only when they define an exposure history, comparator, metabolic modifier, or documented interaction. Human caffeine-alone studies support acute increases in subjective alertness and selected attention measures, while sleep, anxiety-like effects, cardiovascular responses, tolerance, and withdrawal are notably context-dependent (owen2008; wilhelmus2017; kaplan1997; drake2013; gardiner2025; silverman1992).

## Description

At concentrations relevant to ordinary human use, caffeine is principally described as an antagonist of adenosine signaling. Oral caffeine is rapidly absorbed, is extensively metabolized, and is converted predominantly toward paraxanthine; CYP1A2 activity is a major determinant of its clearance (newton1981; lelo1986partial; jeppesen1996; temple2017). This creates large exposure differences from the same nominal dose. Tobacco-smoke exposure, smoking cessation, pregnancy, combined oral contraceptives, hepatic dysfunction, and potent CYP1A2 inhibitors all have human evidence for changing caffeine pharmacokinetics (faber2004; knutti1982; patwardhan1980; jodynis2004; jeppesen1996).

## Evidence note

Primary human experiments were preferred for effects, outcomes, pharmacokinetics, withdrawal, tolerance, modifiers, and interactions. The retained `temple2017` broad safety review and `grzegorzewski2022` systematic pharmacokinetic analysis reconcile existing BHWiki source identity and were used as synthesis or source-location context rather than as the sole basis for primary efficacy outcomes. ClinicalTrials.gov was searched for caffeine studies current to 2026-10-16; registry-only records without posted or peer-reviewed results were not treated as proof of efficacy or safety. Full-text funding/conflict disclosures were inspected for `drake2013`, `temple2017`, `grzegorzewski2022`, `weibel2021`, and `hoppe2025`; where a full disclosure statement was not inspected, sponsorship and conflict status remain `not-assessed` rather than being inferred from affiliations or abstract indexing. Some older pharmacokinetic abstracts do not identify the exact dosage form; those records explicitly say so. No subjective-duration estimate is derived from elimination half-life. Medical caffeine-salt treatment regimens, including neonatal caffeine citrate, are not merged into healthy-volunteer enhancement doses here because their formulation-specific dosing and clinical indication require a distinct treatment context.

Reddit index corpus import (11 linked source records; 11 PubMed abstracts after resolving PMC2603066 to PMID 18554731). PubMed MCP abstracts were refreshed for the linked caffeine PMIDs, including PMC2603066 resolved as PMID 18554731; rights-eligible PMC full text was retrieved for PMID 24413697 (PMC5909971), while PMC2603066 (PMID 18554731) and PMC11138593 (PMID 15095008) were not rights-eligible for automated retrieval. Full-text methods, funding, and conflicts remain unassessed where the source record says so.

## Doses

```yaml
- label: Acute alertness and attention study
  amount: 50 mg
  quantity: 50
  quantityMax: null
  unit: mg
  ingredient: Caffeine
  formulation: Study caffeine preparation; exact dosage form was not established from the inspected abstract
  route: Oral
  frequency: Single exposure per crossover condition
  duration: Acute assessments at 60 and 90 minutes
  population: 27 healthy adult volunteers
  purpose: Assess caffeine-alone and comparator-arm effects on mood and cognitive tasks
  sourceCategory: research
  note: The study also contained L-theanine and combination conditions, but only the caffeine-alone versus placebo evidence is used here for caffeine effects.
  sourceId: owen2008
- label: Low-dose sustained-attention study
  amount: 60 mg
  quantity: 60
  quantityMax: null
  unit: mg
  ingredient: Caffeine
  formulation: Study oral caffeine preparation; exact dosage form was not established from the inspected abstract
  route: Oral
  frequency: Single exposure
  duration: Acute testing with sustained-attention tasks lasting up to 45 minutes
  population: 82 healthy low- or non-caffeine-consuming adults aged 40–60 years
  purpose: Assess sustained attention, psychomotor measures, mood, fatigue, and salivary caffeine pharmacokinetics
  sourceCategory: research
  note: A research exposure, not a recommended personal dose.
  sourceId: wilhelmus2017
- label: Low-dose anxiety crossover study
  amount: 150 mg
  quantity: 150
  quantityMax: null
  unit: mg
  ingredient: Caffeine
  formulation: Study caffeine treatment; exact dosage form is not specified in the PubMed abstract
  route: Oral
  frequency: Single exposure in each crossover condition
  duration: Acute assessment
  population: 29 adults with panic disorder and 53 healthy controls with low habitual caffeine intake
  purpose: Assess subjective anxiety, interoception, arousal, attention, emotional reactivity, and avoidance behavior
  sourceCategory: research
  note: 150 mg did not significantly increase the study's primary subjective-anxiety outcome; this clinical/healthy-control experiment should not be generalized to higher doses.
  sourceId: hoppe2025
- label: Sleep-timing study
  amount: 400 mg
  quantity: 400
  quantityMax: null
  unit: mg
  ingredient: Caffeine
  formulation: Study caffeine treatment; exact preparation was not established from the inspected article metadata
  route: Oral
  frequency: Single exposure on each test occasion
  duration: Administered at bedtime or 3 or 6 hours before habitual bedtime
  population: Adults in a randomized placebo-controlled home sleep study
  purpose: Assess timing-dependent effects on subsequent sleep
  sourceCategory: research
  note: Sleep disruption was observed at every tested timing. This experimental dose is not a recommended dose.
  sourceId: drake2013
- label: Dose-and-timing sleep study, lower dose
  amount: 100 mg
  quantity: 100
  quantityMax: null
  unit: mg
  ingredient: Caffeine
  formulation: Study caffeine preparation; exact dosage form was not established from the inspected abstract
  route: Oral
  frequency: Single exposure per crossover condition
  duration: Administered 12, 8, or 4 hours before bedtime
  population: 23 healthy men with moderate habitual caffeine intake below 300 mg/day
  purpose: Assess objective and subjective subsequent sleep
  sourceCategory: research
  note: No significant objective or subjective sleep effect versus placebo was detected for 100 mg at the tested timings.
  sourceId: gardiner2025
- label: Dose-and-timing sleep study, higher dose
  amount: 400 mg
  quantity: 400
  quantityMax: null
  unit: mg
  ingredient: Caffeine
  formulation: Study caffeine preparation; exact dosage form was not established from the inspected abstract
  route: Oral
  frequency: Single exposure per crossover condition
  duration: Administered 12, 8, or 4 hours before bedtime
  population: 23 healthy men with moderate habitual caffeine intake below 300 mg/day
  purpose: Assess objective and subjective subsequent sleep
  sourceCategory: research
  note: The 400 mg conditions produced objectively measured sleep effects, including effects when administered 12 hours before bedtime; effects generally became more disruptive nearer bedtime.
  sourceId: gardiner2025
- label: FDA adult daily-intake reference
  amount: 400 mg/day
  quantity: 400
  quantityMax: null
  unit: mg/day
  ingredient: Caffeine
  formulation: Total ingested caffeine from all sources
  route: Oral intake
  frequency: Daily total
  duration: Ongoing intake context
  population: Most healthy adults
  purpose: Public-health reference, not an individualized dosing target
  sourceCategory: reference
  note: FDA states that 400 mg/day is an amount not generally associated with negative effects for most adults, while emphasizing substantial variation in sensitivity and elimination.
  sourceId: fda2024
- label: Pregnancy guidance context
  amount: Less than 200 mg/day
  quantity: null
  quantityMax: 200
  unit: mg/day
  ingredient: Caffeine
  formulation: Total ingested caffeine from all sources
  route: Oral intake
  frequency: Daily total
  duration: Pregnancy
  population: Pregnant people
  purpose: Clinical-guidance limit, not an enhancement dose
  sourceCategory: reference
  note: ACOG states that moderate consumption below 200 mg/day does not appear to be a major contributor to miscarriage or preterm birth; the relationship with fetal growth restriction remained unresolved in the cited guidance.
  sourceId: acog2010
- label: PubMed study exposure (27649778)
  amount: 75 mg
  quantity: 75
  quantityMax: null
  unit: mg
  ingredient: Caffeine
  formulation: As described in the PubMed abstract
  route: Not established from abstract
  frequency: Study exposure
  duration: Study exposure
  population: Population described in the PubMed abstract
  purpose: Research exposure
  sourceCategory: research
  note: Dose extracted from the PubMed abstract; verify the full text for formulation and protocol details.
  sourceId: wilhelmus2017
- label: PubMed study exposure (22728314)
  amount: 100 mg
  quantity: 100
  quantityMax: null
  unit: mg
  ingredient: Caffeine
  formulation: As described in the PubMed abstract
  frequency: Study exposure
  duration: Study exposure
  population: scanned in a non-withdrawn state following a workday during which caffeinated products were consumed according to individual normal use (range = 145-595 mg)
  purpose: Research exposure
  sourceCategory: research
  note: Dose extracted from the PubMed abstract; verify the full text for formulation and protocol details.
  sourceId: reddit-pmid-22728314
- label: PubMed study exposure (15678363)
  amount: 217 mg
  quantity: 217
  quantityMax: null
  unit: mg
  ingredient: Caffeine
  formulation: As described in the PubMed abstract
  frequency: Study exposure
  duration: Study exposure
  population: Population described in the PubMed abstract
  purpose: Research exposure
  sourceCategory: research
  note: Dose extracted from the PubMed abstract; verify the full text for formulation and protocol details.
  sourceId: reddit-pmid-15678363
- label: PubMed study exposure (11057520)
  amount: 50 mg
  quantity: 50
  quantityMax: null
  unit: mg
  ingredient: Caffeine
  formulation: As described in the PubMed abstract
  frequency: Study exposure
  duration: Study exposure
  population: Population described in the PubMed abstract
  purpose: Research exposure
  sourceCategory: research
  note: Dose extracted from the PubMed abstract; verify the full text for formulation and protocol details.
  sourceId: reddit-pmid-11057520
- label: Caffeine versus nap/placebo memory study (PMID 18554731)
  amount: 200 mg
  quantity: 200
  quantityMax: null
  unit: mg
  ingredient: Caffeine
  formulation: Oral caffeine intervention; dosage form not specified in abstract
  route: Oral
  frequency: Single post-learning intervention
  duration: Memory retention tested after 20 minutes and 7 hours
  population: Healthy adults
  purpose: Verbal, motor and perceptual memory research exposure
  sourceCategory: research
  note: Trial exposure; napping was the active comparator.
  sourceId: reddit-pmid-18554731
- label: Threshold dose
  amount: 2.5 mg
  quantity: 2.5
  quantityMax: null
  unit: mg
  ingredient: Caffeine
  formulation: Not established
  route: Intranasal (insufflated)
  frequency: Not established
  duration: Not established
  population: Not established
  purpose: PsychonautWiki dosage classification
  sourceCategory: community
  note: Band from the PsychonautWiki API snapshot built about 2026-06-23.
  sourceId: psychonautwiki
- label: Light dose band
  amount: 10–25 mg
  quantity: 10
  quantityMax: 25
  unit: mg
  ingredient: Caffeine
  formulation: Not established
  route: Intranasal (insufflated)
  frequency: Not established
  duration: Not established
  population: Not established
  purpose: PsychonautWiki dosage classification
  sourceCategory: community
  note: Band from the PsychonautWiki API snapshot built about 2026-06-23.
  sourceId: psychonautwiki
- label: Common dose band
  amount: 25–40 mg
  quantity: 25
  quantityMax: 40
  unit: mg
  ingredient: Caffeine
  formulation: Not established
  route: Intranasal (insufflated)
  frequency: Not established
  duration: Not established
  population: Not established
  purpose: PsychonautWiki dosage classification
  sourceCategory: community
  note: Band from the PsychonautWiki API snapshot built about 2026-06-23.
  sourceId: psychonautwiki
- label: Strong dose band
  amount: 40–80 mg
  quantity: 40
  quantityMax: 80
  unit: mg
  ingredient: Caffeine
  formulation: Not established
  route: Intranasal (insufflated)
  frequency: Not established
  duration: Not established
  population: Not established
  purpose: PsychonautWiki dosage classification
  sourceCategory: community
  note: Band from the PsychonautWiki API snapshot built about 2026-06-23.
  sourceId: psychonautwiki
- label: Heavy dose band (80 mg and above)
  amount: 80 mg and above
  quantity: 80
  quantityMax: null
  unit: mg
  ingredient: Caffeine
  formulation: Not established
  route: Intranasal (insufflated)
  frequency: Not established
  duration: Not established
  population: Not established
  purpose: PsychonautWiki dosage classification
  sourceCategory: community
  note: Band from the PsychonautWiki API snapshot built about 2026-06-23.
  sourceId: psychonautwiki
- label: Threshold dose
  amount: 10 mg
  quantity: 10
  quantityMax: null
  unit: mg
  ingredient: Caffeine
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
  amount: 20–50 mg
  quantity: 20
  quantityMax: 50
  unit: mg
  ingredient: Caffeine
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
  amount: 50–150 mg
  quantity: 50
  quantityMax: 150
  unit: mg
  ingredient: Caffeine
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
  amount: 150–500 mg
  quantity: 150
  quantityMax: 500
  unit: mg
  ingredient: Caffeine
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
  ingredient: Caffeine
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
  amount: 25 mg
  quantity: 25
  quantityMax: null
  unit: mg
  ingredient: Caffeine
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
  amount: 25–75 mg
  quantity: 25
  quantityMax: 75
  unit: mg
  ingredient: Caffeine
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
  amount: 75–125 mg
  quantity: 75
  quantityMax: 125
  unit: mg
  ingredient: Caffeine
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
  amount: 125–175 mg
  quantity: 125
  quantityMax: 175
  unit: mg
  ingredient: Caffeine
  formulation: Not established
  route: Smoked
  frequency: Not established
  duration: Not established
  population: Not established
  purpose: PsychonautWiki dosage classification
  sourceCategory: community
  note: Band from the PsychonautWiki API snapshot built about 2026-06-23.
  sourceId: psychonautwiki
- label: Heavy dose band (175 mg and above)
  amount: 175 mg and above
  quantity: 175
  quantityMax: null
  unit: mg
  ingredient: Caffeine
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
- id: caffeine-elimination-healthy
  analyte: Caffeine
  route: Oral
  formulation: Caffeine administered as a study compound; exact dosage form not specified in the abstract
  population: Six healthy male volunteers
  endpoint: elimination-half-life
  statistic: study-mean
  value: 4.1
  low: null
  high: null
  unit: hours
  context: Mean caffeine half-life after oral administration in a comparative methylxanthine pharmacokinetic experiment. This small all-male study is not a universal adult reference.
  sourceId: lelo1986
  modelEligible: true
- id: caffeine-elimination-oc-users
  analyte: Caffeine
  route: Oral
  formulation: 250 mg caffeine; exact dosage form not specified in the abstract
  population: Nine healthy women using oral contraceptive steroids
  endpoint: elimination-half-life
  statistic: study-mean
  value: 10.7
  low: null
  high: null
  unit: hours
  context: Mean ± SD was 10.7 ± 3.0 hours in oral-contraceptive users; clearance was also lower than in women not using oral contraceptives.
  sourceId: patwardhan1980
  modelEligible: false
- id: caffeine-elimination-no-oc
  analyte: Caffeine
  route: Oral
  formulation: 250 mg caffeine; exact dosage form not specified in the abstract
  population: Nine healthy women not using oral contraceptive steroids
  endpoint: elimination-half-life
  statistic: study-mean
  value: 6.2
  low: null
  high: null
  unit: hours
  context: Mean ± SD was 6.2 ± 1.6 hours in women not taking oral contraceptive steroids in the same study.
  sourceId: patwardhan1980
  modelEligible: false
- id: caffeine-elimination-late-pregnancy
  analyte: Caffeine
  route: Not specified in the inspected PubMed abstract
  formulation: Caffeine exposure used for salivary HPLC pharmacokinetic measurement; exact preparation not specified in the inspected abstract
  population: Women during the last four weeks of pregnancy
  endpoint: elimination-half-life
  statistic: study-mean
  value: 10.5
  low: null
  high: null
  unit: hours
  context: The reported average increased to 10.5 hours during the final four weeks of pregnancy, versus approximately 3 hours in non-pregnant women; prolongation was reported to begin earlier in pregnancy.
  sourceId: knutti1982
  modelEligible: false
- id: caffeine-elimination-cirrhosis
  analyte: Caffeine
  route: Oral
  formulation: 300 mg caffeine; exact dosage form not specified in the abstract
  population: Adults with liver cirrhosis
  endpoint: elimination-half-life
  statistic: study-mean
  value: 11.4
  low: null
  high: null
  unit: hours
  context: Cirrhotic participants had reduced caffeine elimination; the reported mean half-life was 11.4 hours.
  sourceId: jodynis2004
  modelEligible: false
- id: caffeine-elimination-liver-control
  analyte: Caffeine
  route: Oral
  formulation: 300 mg caffeine; exact dosage form not specified in the abstract
  population: Healthy comparison volunteers in the liver-function study
  endpoint: elimination-half-life
  statistic: study-mean
  value: 4.3
  low: null
  high: null
  unit: hours
  context: Healthy volunteers in the same study had a reported mean caffeine half-life of 4.3 hours.
  sourceId: jodynis2004
  modelEligible: false
- id: caffeine-elimination-fluvoxamine
  analyte: Caffeine
  route: Oral
  formulation: 200 mg caffeine; exact dosage form not specified in the abstract
  population: Eight healthy volunteers during fluvoxamine treatment
  endpoint: elimination-half-life
  statistic: approximate
  value: 31
  low: null
  high: null
  unit: hours
  context: Median caffeine half-life increased from approximately 5 hours without fluvoxamine to 31 hours during fluvoxamine treatment; total clearance fell from 107 to 21 mL/min.
  sourceId: jeppesen1996
  modelEligible: false
- id: caffeine-elimination-smoking-cessation
  analyte: Caffeine
  route: Oral
  formulation: 148 mg caffeine phenotyping test dose; exact dosage form not specified in the abstract
  population: 12 heavy smokers undergoing abrupt smoking cessation
  endpoint: elimination-half-life
  statistic: not-established
  value: null
  low: null
  high: null
  unit: hours
  context: This study quantified a 36.1% decrease in caffeine clearance after smoking cessation rather than reporting a caffeine elimination-half-life result suitable for this field. Its reported 38.6-hour value describes the decay of CYP1A2 activity after cessation and must not be represented as caffeine half-life.
  sourceId: faber2004
  modelEligible: false
```

## Duration

```yaml
- id: psychonautwiki-insufflated
  measurement: subjective
  route: Intranasal (insufflated)
  population: Ranges compiled by PsychonautWiki contributors
  sourceId: psychonautwiki
  note: PsychonautWiki community duration ranges for this route.
  total:
    min: 1
    max: 2.5
    unit: hours
  phases:
    - name: onset
      basis: elapsed-since-exposure
      min: 0.5
      max: 2
      unit: minutes
    - name: comeup
      basis: phase-duration
      min: 0.5
      max: 2
      unit: minutes
    - name: peak
      basis: phase-duration
      min: 0.5
      max: 1
      unit: hours
    - name: offset
      basis: phase-duration
      min: 6
      max: 10
      unit: hours
    - name: after-effects
      basis: phase-duration
      min: 6
      max: 24
      unit: hours
- id: psychonautwiki-oral
  measurement: subjective
  route: Oral
  population: Ranges compiled by PsychonautWiki contributors
  sourceId: psychonautwiki
  note: PsychonautWiki community duration ranges for this route.
  total:
    min: 2
    max: 5
    unit: hours
  phases:
    - name: onset
      basis: elapsed-since-exposure
      min: 5
      max: 10
      unit: minutes
    - name: comeup
      basis: phase-duration
      min: 10
      max: 60
      unit: minutes
    - name: peak
      basis: phase-duration
      min: 1
      max: 2
      unit: hours
    - name: offset
      basis: phase-duration
      min: 6
      max: 10
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
    min: 45
    max: 70
    unit: minutes
  phases:
    - name: onset
      basis: elapsed-since-exposure
      min: 2
      max: 5
      unit: minutes
    - name: peak
      basis: phase-duration
      min: 10
      max: 20
      unit: minutes
    - name: offset
      basis: phase-duration
      min: 30
      max: 45
      unit: minutes
    - name: after-effects
      basis: phase-duration
      min: 2
      max: 4
      unit: hours
```

## Modifiers

```yaml
- label: Tobacco-smoke exposure and smoking cessation
  effect: Smoking is associated with faster CYP1A2-mediated caffeine clearance; stopping smoking can substantially increase caffeine exposure from a previously familiar dose.
  detail: In 12 heavy smokers, estimated geometric-mean caffeine clearance decreased by 36.1% after abrupt smoking cessation, from 2.47 to 1.53 mL/min/kg. The study concerns tobacco-smoke induction and cessation, not nicotine as a caffeine-clearance intervention.
  sourceId: faber2004
  observationId: caffeine-elimination-smoking-cessation
  factorType: smoking
  direction: faster
- label: Pregnancy
  effect: Slower elimination, especially later in pregnancy
  detail: A human salivary pharmacokinetic study reported an average caffeine half-life of 10.5 hours during the last four weeks of pregnancy compared with approximately 3 hours in non-pregnant women.
  sourceId: knutti1982
  observationId: caffeine-elimination-late-pregnancy
  factorType: pregnancy
  direction: slower
- label: Oral contraceptive steroids
  effect: Slower elimination
  detail: After 250 mg oral caffeine, women using oral contraceptive steroids had a reported mean half-life of 10.7 hours versus 6.2 hours in women not using them, with lower total plasma clearance in users.
  sourceId: patwardhan1980
  observationId: caffeine-elimination-oc-users
  factorType: other
  direction: slower
- label: Liver cirrhosis
  effect: Slower elimination
  detail: After 300 mg oral caffeine, the cited study reported a mean half-life of 11.4 hours in cirrhosis versus 4.3 hours in healthy volunteers, alongside lower clearance and reduced metabolite-to-caffeine ratios.
  sourceId: jodynis2004
  observationId: caffeine-elimination-cirrhosis
  factorType: other
  direction: slower
- label: CYP1A2 inhibition
  effect: Potentially much slower elimination
  detail: In an eight-person crossover interaction study, fluvoxamine reduced median total caffeine clearance from 107 to 21 mL/min and increased caffeine half-life from about 5 to 31 hours, demonstrating the importance of CYP1A2 inhibition.
  sourceId: jeppesen1996
  observationId: caffeine-elimination-fluvoxamine
  factorType: enzyme
  direction: slower
```

## Effects

```yaml
- id: caffeine-alertness-owen
  conceptId: alertness
  name: Subjective alertness
  direction: Increased
  evidence: Human research
  description: In the caffeine-alone condition of a randomized crossover study, 50 mg caffeine increased subjective alertness at the 60-minute assessment relative to placebo.
  sourceId: owen2008
  population: 27 healthy adult volunteers
  exposure: 50 mg caffeine, single acute exposure
  instrument: Subjective mood/alertness assessment
  magnitude: null
  reportType: measured-assessment
  study:
    id: owen2008-caffeine-alone
    design: Randomized double-blind placebo-controlled crossover
    sampleSize: 27
    populationLabels:
      - healthy adults
    comparator: Placebo
    route: Oral
    formulation: Study caffeine preparation; exact dosage form not established from inspected abstract
    assessmentTime: 60 minutes after administration
    comparedSubstances:
      - l-theanine
  conflictingSourceIds: []
- id: caffeine-anxiety-jitteriness-dose
  conceptId: anxiety
  name: Anxiety, nervousness, and jittery/restless feelings
  direction: Variable
  evidence: Human research
  description: In a 12-person dose study, 500 mg caffeine produced more unfavorable subjective effects—including tension, nervousness, anxiety, excitement, irritability, palpitations, and restlessness—than 250 mg. In contrast, a 2025 crossover trial found that 150 mg did not significantly increase its primary subjective-anxiety outcome at rest in either low-use healthy controls or participants with panic disorder.
  sourceId: kaplan1997
  population: Healthy adults in the dose-response study; separate low-habitual-use healthy and panic-disorder groups in the conflicting lower-dose study
  exposure: 250 mg and 500 mg oral caffeine in the dose-response study; 150 mg in the lower-dose crossover study
  instrument: Subjective-effects measures; subjective anxiety was the primary outcome in the 150 mg trial
  magnitude: Dose- and population-dependent; no common standardized effect size extracted
  reportType: measured-assessment
  study:
    id: kaplan1997-dose-response
    design: Randomized double-blind single-dose crossover
    sampleSize: 12
    populationLabels:
      - healthy volunteers
    comparator: Placebo and lower caffeine dose
    route: Oral
    formulation: Exact dosage form not established from inspected abstract
    assessmentTime: Acute post-dose
  conflictingSourceIds:
    - hoppe2025
- id: reddit-caffeine-alertness-27649778
  conceptId: alertness
  name: Alertness
  direction: Increased
  evidence: Human research
  description: Caffeine induces positive effects on sustained attention, although studies assessing the acute effects of low caffeine dose (<75 mg) on sustained attention are limited and use short-term tests.
  sourceId: wilhelmus2017
  population: Population described in the PubMed abstract
  exposure: Caffeine induces positive effects on sustained attention, although studies assessing the acute effects of low caffeine dose (<75 mg) on sustained attention are limited and use short-term tests.
  instrument: null
  magnitude: null
  reportType: measured-assessment
- id: reddit-caffeine-alertness-15678363
  conceptId: alertness
  name: Alertness
  direction: Increased
  evidence: Limited research
  description: "RATIONALE: The cognitive and mood effects of caffeine are well documented."
  sourceId: reddit-pmid-15678363
  population: Population described in the PubMed abstract
  exposure: "RATIONALE: The cognitive and mood effects of caffeine are well documented."
  instrument: null
  magnitude: null
  reportType: measured-assessment
```

## Outcomes

```yaml
- id: caffeine-attention-switching-owen
  conceptId: attention
  name: Attention-switching accuracy
  direction: Increased
  evidence: Human research
  description: The caffeine-alone condition improved accuracy on an attention-switching task at 90 minutes. This task-specific result should not be interpreted as a global cognitive-performance effect.
  sourceId: owen2008
  population: 27 healthy adult volunteers
  exposure: 50 mg caffeine, single acute exposure
  instrument: Attention-switching task accuracy
  magnitude: null
  reportType: measured-assessment
  study:
    id: owen2008-attention
    design: Randomized double-blind placebo-controlled crossover
    sampleSize: 27
    populationLabels:
      - healthy adults
    comparator: Placebo
    route: Oral
    formulation: Study caffeine preparation; exact dosage form not established from inspected abstract
    assessmentTime: 90 minutes after administration
    comparedSubstances:
      - l-theanine
  conflictingSourceIds: []
- id: caffeine-sustained-attention-60mg
  conceptId: attention
  name: Sustained attention
  direction: Increased
  evidence: Human research
  description: A single 60 mg oral dose improved sustained-attention performance relative to placebo across a battery that included vigilance and reaction-time measures; the study also reported fewer errors and improved subjective alertness.
  sourceId: wilhelmus2017
  population: 82 healthy low- or non-caffeine-consuming adults aged 40–60 years
  exposure: 60 mg oral caffeine, single dose
  instrument: Mackworth Clock Test, Rapid Visual Information Processing Test, adaptive tracking, saccadic eye movements, and attention-switching testing
  magnitude: null
  reportType: measured-assessment
  study:
    id: wilhelmus2017-attention
    design: Randomized double-blind placebo-controlled crossover
    sampleSize: 82
    populationLabels:
      - healthy adults
      - low or non-caffeine consumers
    comparator: Placebo
    route: Oral
    formulation: Exact dosage form not established from inspected abstract
    assessmentTime: Acute post-dose testing
  conflictingSourceIds: []
- id: caffeine-inhibitory-control-250mg
  conceptId: attention
  name: Acute inhibitory control
  direction: Variable
  evidence: Human research
  description: In a preregistered crossover trial, 250 mg caffeine produced no measurable improvement in active or reactive inhibition in 36 non-clinical young adults; Bayesian analyses supported the null, and ADHD symptom severity did not moderate the result.
  sourceId: pmid-42830444
  population: 36 non-clinical young adults
  exposure: 250 mg caffeine versus placebo, single exposure
  instrument: Go/No-Go and arrow-flanker tasks
  magnitude: Null across preregistered inhibition outcomes
  reportType: measured-assessment
  study:
    id: caffeine-inhibitory-control-250mg-study
    design: Preregistered randomized double-blind placebo-controlled crossover
    sampleSize: 36
    populationLabels:
      - non-clinical young adults
    comparator: Placebo
    route: Oral
    formulation: Study caffeine preparation; exact dosage form not established from inspected abstract
    assessmentTime: 45 minutes after ingestion
  conflictingSourceIds: []
- id: caffeine-sleep-400mg-drake
  conceptId: sleep
  name: Subsequent sleep after 400 mg
  direction: Decreased
  evidence: Human research
  description: A 400 mg dose disrupted subsequent sleep when given at habitual bedtime and when given 3 or 6 hours before bedtime.
  sourceId: drake2013
  population: Adults in a randomized home sleep study
  exposure: 400 mg caffeine at 0, 3, or 6 hours before habitual bedtime
  instrument: Self-reported sleep and validated portable objective sleep monitoring
  magnitude: Statistically significant sleep disturbance versus placebo at all three tested timings
  reportType: measured-assessment
  study:
    id: drake2013-sleep
    design: Randomized double-blind placebo-controlled study
    comparator: Placebo
    route: Oral
    formulation: Study caffeine preparation
    assessmentTime: Subsequent overnight sleep
  conflictingSourceIds: []
- id: caffeine-sleep-dose-timing-gardiner
  conceptId: sleep
  name: Dose- and timing-dependent subsequent sleep
  direction: Variable
  evidence: Human research
  description: In a randomized crossover trial, 100 mg produced no significant objective or subjective sleep effect versus placebo at the tested 12-, 8-, or 4-hour pre-bed timings, whereas 400 mg delayed sleep initiation and altered sleep architecture when consumed within 12 hours of bedtime, with additional fragmentation when consumed within 8 hours.
  sourceId: gardiner2025
  population: 23 healthy men with moderate habitual caffeine intake below 300 mg/day
  exposure: 100 mg or 400 mg caffeine 12, 8, or 4 hours before bedtime
  instrument: In-home partial polysomnography and sleep diaries
  magnitude: Null at 100 mg for tested sleep outcomes; disruptive effects at 400 mg
  reportType: measured-assessment
  study:
    id: gardiner2025-sleep
    design: Placebo-controlled double-blind randomized crossover
    sampleSize: 23
    populationLabels:
      - healthy men
      - moderate habitual caffeine consumers
    comparator: Placebo
    route: Oral
    formulation: Study caffeine preparation; exact dosage form not established from inspected abstract
    assessmentTime: Subsequent overnight sleep
  conflictingSourceIds: []
- id: caffeine-repeated-daytime-sleep
  conceptId: sleep
  name: Conventional nighttime sleep outcomes after repeated daytime caffeine
  direction: Variable
  evidence: Human research
  description: After nine days of a three-times-daily 150 mg regimen in habitual users, total sleep time, sleep latency, sleep architecture, and subjective sleep quality did not significantly differ from placebo when the final caffeine dose was eight hours before the scheduled sleep episode.
  sourceId: weibel2021
  population: 20 healthy young male habitual caffeine consumers
  exposure: 150 mg caffeine three times daily during a 10-day condition; sleep assessed after nine days of dosing
  instrument: Polysomnography-derived sleep measures and subjective sleep-quality assessment
  magnitude: No significant difference in the listed conventional sleep outcomes
  reportType: measured-assessment
  study:
    id: weibel2021-conventional-sleep
    design: Double-blind randomized crossover
    sampleSize: 20
    populationLabels:
      - healthy young men
      - habitual caffeine consumers
    comparator: Placebo and withdrawal conditions
    route: Oral
    formulation: 150 mg study caffeine doses
    durationDays: 10
    assessmentTime: Scheduled 8-hour nighttime sleep after nine days of treatment; final caffeine dose eight hours before sleep
  conflictingSourceIds: []
- id: caffeine-repeated-daytime-sigma
  conceptId: sleep
  name: Sleep EEG sigma-band power
  direction: Decreased
  evidence: Human research
  description: In the same repeated-dose experiment, non-REM EEG power density in the 12–16 Hz sigma range was reduced in both the caffeine and withdrawal conditions versus placebo. This is a physiological sleep marker and is kept separate from the null findings for conventional sleep duration, latency, architecture, and self-rated quality.
  sourceId: weibel2021
  population: 20 healthy young male habitual caffeine consumers
  exposure: 150 mg caffeine three times daily during the repeated-dose condition
  instrument: Sleep EEG power density, 12–16 Hz sigma frequencies
  magnitude: null
  reportType: measured-assessment
  study:
    id: weibel2021-sigma
    design: Double-blind randomized crossover
    sampleSize: 20
    populationLabels:
      - healthy young men
      - habitual caffeine consumers
    comparator: Placebo
    route: Oral
    formulation: 150 mg study caffeine doses
    durationDays: 10
    assessmentTime: Subsequent scheduled nighttime sleep
  conflictingSourceIds: []
- id: caffeine-withdrawal-reaction-time
  conceptId: attention
  name: Reaction time after overnight coffee abstinence
  direction: Decreased
  evidence: Human research
  description: Overnight abstinence selectively slowed reaction time in regular coffee consumers compared with their habitual morning coffee condition; memory, executive-function and accuracy measures were not statistically different.
  sourceId: pmid-42920333
  population: 30 regular coffee consumers and 25 non-regular consumers
  exposure: Habitual morning coffee versus overnight abstinence
  instrument: Reaction-time, processing-speed, working-memory, verbal-memory and Stroop battery
  magnitude: Selective reaction-time slowing; no exact effect size reported in the abstract
  reportType: measured-assessment
  study:
    id: caffeine-withdrawal-reaction-time-study
    design: Within-participant comparison with non-regular-consumer comparator
    sampleSize: 55
    populationLabels:
      - regular coffee consumers
      - non-regular coffee consumers
    comparator: Habitual morning coffee or non-regular-consumer group
    route: Oral
    formulation: Habitual coffee; composition and dose not established from inspected abstract
    assessmentTime: After overnight abstinence or habitual morning coffee
  conflictingSourceIds: []
- id: reddit-caffeine-episodic-memory-27895607
  conceptId: episodic-memory
  name: Episodic Memory
  direction: Variable
  evidence: Human research
  description: Many college students struggle to perform well on exams in the early morning.
  sourceId: reddit-pmid-27895607
  population: Population described in the PubMed abstract
  exposure: Many college students struggle to perform well on exams in the early morning.
  instrument: null
  magnitude: null
  reportType: measured-assessment
- id: reddit-caffeine-attention-23241646
  conceptId: attention
  name: Attention
  direction: Increased
  evidence: Human research
  description: "RATIONALE: Despite the large number of studies on the behavioural effects of caffeine, an unequivocal conclusion had not been reached."
  sourceId: reddit-pmid-23241646
  population: Population described in the PubMed abstract
  exposure: "RATIONALE: Despite the large number of studies on the behavioural effects of caffeine, an unequivocal conclusion had not been reached."
  instrument: null
  magnitude: null
  reportType: measured-assessment
- id: reddit-caffeine-attention-27649778
  conceptId: attention
  name: Attention
  direction: Increased
  evidence: Human research
  description: Caffeine induces positive effects on sustained attention, although studies assessing the acute effects of low caffeine dose (<75 mg) on sustained attention are limited and use short-term tests.
  sourceId: wilhelmus2017
  population: Population described in the PubMed abstract
  exposure: Caffeine induces positive effects on sustained attention, although studies assessing the acute effects of low caffeine dose (<75 mg) on sustained attention are limited and use short-term tests.
  instrument: null
  magnitude: null
  reportType: measured-assessment
- id: reddit-caffeine-fatigue-severity-27649778
  conceptId: fatigue-severity
  name: Fatigue Severity
  direction: Increased
  evidence: Human research
  description: Caffeine induces positive effects on sustained attention, although studies assessing the acute effects of low caffeine dose (<75 mg) on sustained attention are limited and use short-term tests.
  sourceId: wilhelmus2017
  population: Population described in the PubMed abstract
  exposure: Caffeine induces positive effects on sustained attention, although studies assessing the acute effects of low caffeine dose (<75 mg) on sustained attention are limited and use short-term tests.
  instrument: null
  magnitude: null
  reportType: measured-assessment
- id: reddit-caffeine-attention-22728314
  conceptId: attention
  name: Attention
  direction: Increased
  evidence: Human research
  description: Caffeine is commonly consumed in an effort to enhance cognitive performance.
  sourceId: reddit-pmid-22728314
  population: scanned in a non-withdrawn state following a workday during which caffeinated products were consumed according to individual normal use (range = 145-595 mg)
  exposure: Caffeine is commonly consumed in an effort to enhance cognitive performance.
  instrument: null
  magnitude: null
  reportType: measured-assessment
- id: reddit-caffeine-cognitive-performance-22728314
  conceptId: cognitive-performance
  name: Cognitive Performance
  direction: Increased
  evidence: Human research
  description: Caffeine is commonly consumed in an effort to enhance cognitive performance.
  sourceId: reddit-pmid-22728314
  population: scanned in a non-withdrawn state following a workday during which caffeinated products were consumed according to individual normal use (range = 145-595 mg)
  exposure: Caffeine is commonly consumed in an effort to enhance cognitive performance.
  instrument: null
  magnitude: null
  reportType: measured-assessment
- id: reddit-caffeine-episodic-memory-22728314
  conceptId: episodic-memory
  name: Episodic Memory
  direction: Increased
  evidence: Human research
  description: Caffeine is commonly consumed in an effort to enhance cognitive performance.
  sourceId: reddit-pmid-22728314
  population: scanned in a non-withdrawn state following a workday during which caffeinated products were consumed according to individual normal use (range = 145-595 mg)
  exposure: Caffeine is commonly consumed in an effort to enhance cognitive performance.
  instrument: null
  magnitude: null
  reportType: measured-assessment
- id: reddit-caffeine-cognitive-performance-15678363
  conceptId: cognitive-performance
  name: Cognitive Performance
  direction: Increased
  evidence: Limited research
  description: "RATIONALE: The cognitive and mood effects of caffeine are well documented."
  sourceId: reddit-pmid-15678363
  population: Population described in the PubMed abstract
  exposure: "RATIONALE: The cognitive and mood effects of caffeine are well documented."
  instrument: null
  magnitude: null
  reportType: measured-assessment
- id: reddit-caffeine-episodic-memory-15678363
  conceptId: episodic-memory
  name: Episodic Memory
  direction: Increased
  evidence: Limited research
  description: "RATIONALE: The cognitive and mood effects of caffeine are well documented."
  sourceId: reddit-pmid-15678363
  population: Population described in the PubMed abstract
  exposure: "RATIONALE: The cognitive and mood effects of caffeine are well documented."
  instrument: null
  magnitude: null
  reportType: measured-assessment
- id: reddit-caffeine-fatigue-severity-15678363
  conceptId: fatigue-severity
  name: Fatigue Severity
  direction: Increased
  evidence: Limited research
  description: "RATIONALE: The cognitive and mood effects of caffeine are well documented."
  sourceId: reddit-pmid-15678363
  population: Population described in the PubMed abstract
  exposure: "RATIONALE: The cognitive and mood effects of caffeine are well documented."
  instrument: null
  magnitude: null
  reportType: measured-assessment
- id: reddit-caffeine-cognitive-performance-11057520
  conceptId: cognitive-performance
  name: Cognitive Performance
  direction: Increased
  evidence: Human research
  description: "RATIONALE: Caffeine is present in many widely consumed drinks and some foods."
  sourceId: reddit-pmid-11057520
  population: Population described in the PubMed abstract
  exposure: "RATIONALE: Caffeine is present in many widely consumed drinks and some foods."
  instrument: null
  magnitude: null
  reportType: measured-assessment
- id: reddit-caffeine-episodic-memory-24413697
  conceptId: episodic-memory
  name: Episodic Memory
  direction: Increased
  evidence: Human research
  description: It is currently not known whether caffeine has an enhancing effect on long-term memory in humans.
  sourceId: reddit-pmid-24413697
  population: Population described in the PubMed abstract
  exposure: It is currently not known whether caffeine has an enhancing effect on long-term memory in humans.
  instrument: null
  magnitude: null
  reportType: measured-assessment
- id: caffeine-motor-learning-18554731
  conceptId: motor-learning
  name: Motor learning
  direction: Decreased
  evidence: Human research
  description: In a direct comparison with a 60–90 minute nap and placebo, 200 mg caffeine significantly impaired finger-tapping motor learning relative to both comparators.
  sourceId: reddit-pmid-18554731
  population: Healthy adults
  exposure: 200 mg caffeine after learning
  instrument: Finger-tapping task and verbal/perceptual memory tasks
  magnitude: Significant impairment versus placebo and nap; numeric effect not stated in abstract
  reportType: measured-assessment
```

## Mechanisms

```yaml
- title: Adenosine-receptor antagonism
  description: Caffeine antagonizes adenosine signaling, a central pharmacological explanation for its stimulant and wake-promoting effects. This mechanism does not imply that caffeine eliminates accumulated physiological sleep need.
  sourceId: temple2017
  conceptId: adenosine-antagonist
- title: CYP1A2-dependent hepatic metabolism
  description: Human interaction data show that CYP1A2 is a major pathway in caffeine biotransformation. Potent CYP1A2 inhibition by fluvoxamine markedly reduced caffeine clearance and paraxanthine-forming N3-demethylation.
  sourceId: jeppesen1996
  conceptId: cyp1a2
- title: Paraxanthine is the dominant primary demethylated metabolite
  description: In a human steady-state analysis, the mean fractional conversion of caffeine to paraxanthine was 79.6%, substantially exceeding conversion to theobromine or theophylline.
  sourceId: lelo1986partial
- title: Source-specific finding from PMID 15095008
  description: The popularity of caffeine as a psychoactive drug is due to its stimulant properties, which depend on its ability to reduce adenosine transmission in the brain.
  sourceId: reddit-pmid-15095008
```

## Cautions

```yaml
- title: Sleep effects can extend well beyond perceived stimulation
  description: "Do not convert caffeine elimination half-life into a subjective-duration estimate. Direct sleep studies show that dose and timing matter: 400 mg impaired subsequent sleep at timings extending many hours before bed, while 100 mg was null at the tested timings in a newer crossover study."
  sourceId: gardiner2025
- title: Anxiety and jitteriness are dose- and person-dependent
  description: Higher acute exposure can produce tension, nervousness, anxiety, palpitations, and restlessness. The null subjective-anxiety result with 150 mg in a separate 2025 study should not be extrapolated to higher doses or all anxiety phenotypes.
  sourceId: kaplan1997
- title: Withdrawal can follow regular use
  description: Abrupt cessation can produce headache, fatigue, reduced vigor, impaired concentration or performance, and other dysphoric symptoms. In a 62-person double-blind cessation study of low-to-moderate habitual users, moderate or severe headache occurred much more often during placebo substitution than during baseline or caffeine replacement.
  sourceId: silverman1992
- title: Physical dependence can occur at comparatively low repeated exposure
  description: A small double-blind study documented withdrawal after terminating 100 mg/day caffeine; symptoms varied substantially between participants and the sample was only seven people.
  sourceId: griffiths1990
- title: Pregnancy changes both exposure and guidance
  description: Caffeine elimination becomes slower during pregnancy, making a familiar dose capable of producing longer exposure. ACOG separately advises keeping pregnancy intake below 200 mg/day; that guidance is a population-level limit, not a guarantee of zero risk.
  sourceId: acog2010
- title: Children are not small adults for caffeine guidance
  description: The FDA's adult 400 mg/day reference should not be applied to children or adolescents. FDA public-health guidance identifies increased heart rate, palpitations, blood-pressure elevation, anxiety, and sleep problems among potential effects of excessive caffeine in younger people and recommends clinician discussion of child or teen intake.
  sourceId: fda2024
- title: Acute cardiovascular responses vary by context
  description: In nine healthy young participants who had avoided caffeine-containing products for three weeks, 250 mg oral caffeine produced an acute blood-pressure rise and catecholamine changes. Other controlled studies have not reproduced cardiovascular changes under every population and measurement condition.
  sourceId: robertson1978
- title: Stopping smoking can raise caffeine exposure without changing the caffeine dose
  description: Tobacco-smoke induction of CYP1A2 falls after smoking cessation. A caffeine amount tolerated while smoking may therefore produce greater exposure after cessation; the effect should not be attributed to nicotine itself.
  sourceId: faber2004
- title: CYP1A2 inhibitors and liver dysfunction can markedly prolong exposure
  description: Ciprofloxacin and fluvoxamine have human interaction evidence for slowing caffeine elimination, and cirrhosis can substantially reduce caffeine clearance. Medication and liver-disease context therefore matters when interpreting a nominal caffeine dose.
  sourceId: jeppesen1996
- title: Shift-work guidance is conditional and sleep timing still matters
  description: The 2026 American Academy of Sleep Medicine guideline conditionally suggests caffeine before or during a night shift for excessive sleepiness in adults with shift-work disorder, but rates the evidence very low and warns that intake close to bedtime can worsen sleep onset and quality.
  sourceId: pmid-42925456
- title: Source-specific finding from PMID 23241646
  description: "RATIONALE: Despite the large number of studies on the behavioural effects of caffeine, an unequivocal conclusion had not been reached."
  sourceId: reddit-pmid-23241646
- title: Source-specific finding from PMID 27649778
  description: Caffeine induces positive effects on sustained attention, although studies assessing the acute effects of low caffeine dose (<75 mg) on sustained attention are limited and use short-term tests.
  sourceId: wilhelmus2017
- title: Source-specific finding from PMID 22728314
  description: Caffeine is commonly consumed in an effort to enhance cognitive performance.
  sourceId: reddit-pmid-22728314
- title: Source-specific finding from PMID 15678363
  description: "RATIONALE: The cognitive and mood effects of caffeine are well documented."
  sourceId: reddit-pmid-15678363
- title: Source-specific finding from PMID 14687776
  description: Four cases of fatal intoxications with caffeine are described.
  sourceId: reddit-pmid-14687776
- title: Source-specific finding from PMID 2617841
  description: Caffeine has long been recognized as an addictive substance with numerous toxic effects.
  sourceId: reddit-pmid-2617841
```

## Claims

```yaml
- id: adenosine-action
  assertion: Caffeine antagonizes adenosine receptors.
  relation: receptor-antagonism
  participants:
    - entityId: substance:caffeine
      role: agent
    - entityId: tag:adenosine-receptor
      role: target
    - entityId: tag:adenosine
      role: endogenous-ligand
  context: Human-relevant pharmacology; receptor antagonism is a mechanism and does not itself quantify clinical benefit or duration.
  sourceIds:
    - temple2017
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: The retained source is a broad review rather than a receptor-occupancy dose-response trial.
- id: acute-attention-alertness
  assertion: Acute caffeine can increase subjective alertness and improve selected laboratory attention measures in healthy adults.
  relation: acute-performance-effect
  participants:
    - entityId: substance:caffeine
      role: exposure
    - entityId: tag:alertness
      role: subjective-effect
    - entityId: tag:attention
      role: measured-outcome
  context: Supported by separate caffeine-alone studies using 50 mg and 60 mg acute oral exposures.
  sourceIds:
    - owen2008
    - wilhelmus2017
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Task-specific short-term improvements do not establish a generalized productivity, learning, or long-term cognitive benefit.
- id: sleep-dose-timing
  assertion: Caffeine's effect on subsequent sleep depends on dose, timing, and exposure history rather than a single universal bedtime cutoff.
  relation: dose-timing-outcome
  participants:
    - entityId: substance:caffeine
      role: exposure
    - entityId: tag:sleep
      role: measured-outcome
  context: 400 mg disrupted sleep in the Drake trial; a newer crossover found no significant sleep effect from 100 mg at 4–12 hours pre-bed but disruption from 400 mg, while repeated daytime dosing in habitual users produced null conventional sleep outcomes under a different schedule.
  sourceIds:
    - drake2013
    - gardiner2025
    - weibel2021
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: These trials used different populations, exposure histories, schedules, and sleep methods and should not be collapsed into one deterministic cutoff.
- id: smoking-clearance
  assertion: Tobacco-smoke exposure induces caffeine-metabolizing CYP1A2 activity, and caffeine clearance decreases after smoking cessation.
  relation: clearance-modification
  participants:
    - entityId: substance:caffeine
      role: substrate
    - entityId: tag:cyp1a2
      role: metabolizing-enzyme
    - entityId: tag:tobacco-smoke
      role: exposure-context
  context: Twelve heavy smokers undergoing abrupt cessation received a 148 mg caffeine phenotyping dose.
  sourceIds:
    - faber2004
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: The study was small and selected. The reported half-life of the decline in CYP1A2 activity is not caffeine elimination half-life.
- id: withdrawal-dependence
  assertion: Regular caffeine exposure can produce physical dependence expressed as a withdrawal syndrome after abrupt cessation.
  relation: dependence-withdrawal
  participants:
    - entityId: substance:caffeine
      role: repeated-exposure
    - entityId: tag:alertness
      role: withdrawal-related-functional-domain
  context: Controlled substitution studies documented headache, fatigue and dysphoric or performance effects after caffeine replacement with placebo; withdrawal has been demonstrated after repeated exposure as low as 100 mg/day in a very small study.
  sourceIds:
    - silverman1992
    - griffiths1990
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Withdrawal incidence, severity, and duration vary substantially; the 100 mg/day study included only seven participants.
- id: tolerance-is-endpoint-specific
  assertion: Tolerance to repeated caffeine exposure can develop for some physiological responses without becoming complete across all measured responses.
  relation: tolerance
  participants:
    - entityId: substance:caffeine
      role: repeated-exposure
    - entityId: tag:adenosine-antagonist
      role: pharmacological-context
  context: In a nine-person study, six days of chronic caffeine attenuated acute pressor and adrenaline responses, while the caffeine-associated reduction in middle cerebral artery velocity was not similarly lost.
  sourceIds:
    - debrah1995
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Small physiological study; tolerance in one endpoint does not establish tolerance to alertness, anxiety, sleep disruption, or all other caffeine effects.
- id: acute-cardiovascular-response
  assertion: An acute caffeine dose can raise blood pressure, but the magnitude and even detectability of the cardiovascular response varies across controlled studies.
  relation: context-dependent-physiological-effect
  participants:
    - entityId: substance:caffeine
      role: exposure
    - entityId: tag:blood-pressure
      role: measured-outcome
  context: A 250 mg crossover study in nine caffeine-abstinent healthy young participants reported a 14/10 mm Hg blood-pressure rise at one hour; a separate 18-person 250 mg crossover study reported no cardiovascular effect at its approximately 30-minute resting assessment.
  sourceIds:
    - robertson1978
  conflictingSourceIds:
    - barry2005
  assessment: not-formally-assessed
  limitation: The experiments were small and differed in prior caffeine exposure, population, measurement timing, and experimental conditions.
- id: pregnancy-clearance
  assertion: Pregnancy can substantially prolong caffeine elimination.
  relation: population-pk-modification
  participants:
    - entityId: substance:caffeine
      role: analyte
    - entityId: tag:cyp1a2
      role: metabolizing-enzyme
  context: A human salivary pharmacokinetic study reported an average 10.5-hour caffeine half-life during the last four weeks of pregnancy, compared with about 3 hours in non-pregnant women.
  sourceIds:
    - knutti1982
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Older study with formulation and route details not available in the inspected abstract; the result should not be treated as a universal pregnancy half-life.
- id: reddit-claim-caffeine-27895607-0
  assertion: Caffeine is associated with the reported episodic memory finding in this publication.
  relation: associated-with
  participants:
    - entityId: substance:caffeine
      role: intervention or exposure
    - entityId: tag:episodic-memory
      role: reported endpoint
  context: Publication abstract; direction and population are retained on the linked observation.
  sourceIds:
    - reddit-pmid-27895607
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Automated corpus import from an abstract; this record is not an independent meta-analysis.
- id: reddit-claim-caffeine-23241646-1
  assertion: Caffeine is associated with the reported attention finding in this publication.
  relation: associated-with
  participants:
    - entityId: substance:caffeine
      role: intervention or exposure
    - entityId: tag:attention
      role: reported endpoint
  context: Publication abstract; direction and population are retained on the linked observation.
  sourceIds:
    - reddit-pmid-23241646
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Automated corpus import from an abstract; this record is not an independent meta-analysis.
- id: reddit-claim-caffeine-27649778-2
  assertion: Caffeine is associated with the reported alertness finding in this publication.
  relation: associated-with
  participants:
    - entityId: substance:caffeine
      role: intervention or exposure
    - entityId: tag:alertness
      role: reported endpoint
  context: Publication abstract; direction and population are retained on the linked observation.
  sourceIds:
    - wilhelmus2017
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Automated corpus import from an abstract; this record is not an independent meta-analysis.
- id: reddit-claim-caffeine-27649778-3
  assertion: Caffeine is associated with the reported fatigue severity finding in this publication.
  relation: associated-with
  participants:
    - entityId: substance:caffeine
      role: intervention or exposure
    - entityId: tag:fatigue-severity
      role: reported endpoint
  context: Publication abstract; direction and population are retained on the linked observation.
  sourceIds:
    - wilhelmus2017
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Automated corpus import from an abstract; this record is not an independent meta-analysis.
- id: reddit-claim-caffeine-22728314-4
  assertion: Caffeine is associated with the reported alertness finding in this publication.
  relation: associated-with
  participants:
    - entityId: substance:caffeine
      role: intervention or exposure
    - entityId: tag:alertness
      role: reported endpoint
  context: Publication abstract; direction and population are retained on the linked observation.
  sourceIds:
    - reddit-pmid-22728314
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Automated corpus import from an abstract; this record is not an independent meta-analysis.
- id: reddit-claim-caffeine-22728314-5
  assertion: Caffeine is associated with the reported episodic memory finding in this publication.
  relation: associated-with
  participants:
    - entityId: substance:caffeine
      role: intervention or exposure
    - entityId: tag:episodic-memory
      role: reported endpoint
  context: Publication abstract; direction and population are retained on the linked observation.
  sourceIds:
    - reddit-pmid-22728314
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Automated corpus import from an abstract; this record is not an independent meta-analysis.
- id: reddit-claim-caffeine-15678363-6
  assertion: Caffeine is associated with the reported alertness finding in this publication.
  relation: associated-with
  participants:
    - entityId: substance:caffeine
      role: intervention or exposure
    - entityId: tag:alertness
      role: reported endpoint
  context: Publication abstract; direction and population are retained on the linked observation.
  sourceIds:
    - reddit-pmid-15678363
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Automated corpus import from an abstract; this record is not an independent meta-analysis.
- id: reddit-claim-caffeine-15678363-7
  assertion: Caffeine is associated with the reported fatigue severity finding in this publication.
  relation: associated-with
  participants:
    - entityId: substance:caffeine
      role: intervention or exposure
    - entityId: tag:fatigue-severity
      role: reported endpoint
  context: Publication abstract; direction and population are retained on the linked observation.
  sourceIds:
    - reddit-pmid-15678363
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Automated corpus import from an abstract; this record is not an independent meta-analysis.
- id: reddit-claim-caffeine-11057520-8
  assertion: Caffeine is associated with the reported alertness finding in this publication.
  relation: associated-with
  participants:
    - entityId: substance:caffeine
      role: intervention or exposure
    - entityId: tag:alertness
      role: reported endpoint
  context: Publication abstract; direction and population are retained on the linked observation.
  sourceIds:
    - reddit-pmid-11057520
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Automated corpus import from an abstract; this record is not an independent meta-analysis.
- id: reddit-claim-caffeine-11057520-9
  assertion: Caffeine is associated with the reported cognitive performance finding in this publication.
  relation: associated-with
  participants:
    - entityId: substance:caffeine
      role: intervention or exposure
    - entityId: tag:cognitive-performance
      role: reported endpoint
  context: Publication abstract; direction and population are retained on the linked observation.
  sourceIds:
    - reddit-pmid-11057520
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Automated corpus import from an abstract; this record is not an independent meta-analysis.
- id: reddit-claim-caffeine-24413697-10
  assertion: Caffeine is associated with the reported alertness finding in this publication.
  relation: associated-with
  participants:
    - entityId: substance:caffeine
      role: intervention or exposure
    - entityId: tag:alertness
      role: reported endpoint
  context: Publication abstract; direction and population are retained on the linked observation.
  sourceIds:
    - reddit-pmid-24413697
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Automated corpus import from an abstract; this record is not an independent meta-analysis.
- id: reddit-claim-caffeine-24413697-11
  assertion: Caffeine is associated with the reported episodic memory finding in this publication.
  relation: associated-with
  participants:
    - entityId: substance:caffeine
      role: intervention or exposure
    - entityId: tag:episodic-memory
      role: reported endpoint
  context: Publication abstract; direction and population are retained on the linked observation.
  sourceIds:
    - reddit-pmid-24413697
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Automated corpus import from an abstract; this record is not an independent meta-analysis.
- id: reddit-claim-caffeine-14687776-12
  assertion: Caffeine is associated with the reported alertness finding in this publication.
  relation: associated-with
  participants:
    - entityId: substance:caffeine
      role: intervention or exposure
    - entityId: tag:alertness
      role: reported endpoint
  context: Publication abstract; direction and population are retained on the linked observation.
  sourceIds:
    - reddit-pmid-14687776
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Automated corpus import from an abstract; this record is not an independent meta-analysis.
- id: reddit-claim-caffeine-14687776-13
  assertion: Caffeine is associated with the reported episodic memory finding in this publication.
  relation: associated-with
  participants:
    - entityId: substance:caffeine
      role: intervention or exposure
    - entityId: tag:episodic-memory
      role: reported endpoint
  context: Publication abstract; direction and population are retained on the linked observation.
  sourceIds:
    - reddit-pmid-14687776
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Automated corpus import from an abstract; this record is not an independent meta-analysis.
- id: reddit-claim-caffeine-2617841-14
  assertion: Caffeine is associated with the reported alertness finding in this publication.
  relation: associated-with
  participants:
    - entityId: substance:caffeine
      role: intervention or exposure
    - entityId: tag:alertness
      role: reported endpoint
  context: Publication abstract; direction and population are retained on the linked observation.
  sourceIds:
    - reddit-pmid-2617841
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Automated corpus import from an abstract; this record is not an independent meta-analysis.
- id: reddit-claim-caffeine-2617841-15
  assertion: Caffeine is associated with the reported episodic memory finding in this publication.
  relation: associated-with
  participants:
    - entityId: substance:caffeine
      role: intervention or exposure
    - entityId: tag:episodic-memory
      role: reported endpoint
  context: Publication abstract; direction and population are retained on the linked observation.
  sourceIds:
    - reddit-pmid-2617841
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Automated corpus import from an abstract; this record is not an independent meta-analysis.
```

## Interactions

```yaml
- id: caffeine-ciprofloxacin
  name: Ciprofloxacin
  otherSlug: null
  summary: Ciprofloxacin substantially slowed caffeine elimination in a 12-person randomized crossover study. With 183 mg caffeine, caffeine AUC increased from 31.8 to 77.8 mg/L·h and terminal half-life increased from 4.5 to 9.7 hours during ciprofloxacin treatment. Temafloxacin, included as a separate comparator antibiotic, did not materially alter caffeine pharmacokinetics.
  sourceId: mahr1992
  mechanism: Inhibition of methylxanthine clearance, consistent with CYP1A2 inhibition
  context: Healthy young volunteers; caffeine 183 mg with twice-daily ciprofloxacin 750 mg, temafloxacin 600 mg, or placebo in separate crossover phases
  conflictingSourceIds: []
- id: caffeine-fluvoxamine
  name: Fluvoxamine
  otherSlug: null
  summary: "Fluvoxamine markedly increased caffeine exposure in an eight-person crossover study: median total caffeine clearance decreased from 107 to 21 mL/min and half-life increased from about 5 to 31 hours after fluvoxamine treatment."
  sourceId: jeppesen1996
  mechanism: Potent CYP1A2 inhibition, including reduced caffeine N3-demethylation to paraxanthine
  context: Healthy volunteers; 200 mg oral caffeine compared before and during repeated fluvoxamine dosing
  conflictingSourceIds: []
- id: caffeine-oral-contraceptives
  name: Oral contraceptive steroids
  otherSlug: null
  summary: "Oral-contraceptive use was associated with slower caffeine elimination after a 250 mg oral caffeine dose: mean half-life was 10.7 hours in users versus 6.2 hours in women not using oral contraceptive steroids, with lower total plasma clearance in users."
  sourceId: patwardhan1980
  mechanism: Reduced caffeine metabolic clearance; later evidence is consistent with reduced CYP1A2 activity
  context: Healthy women using versus not using oral contraceptive steroids
  conflictingSourceIds: []
```

## Experience links

```yaml
[]
```

## References

```yaml
- id: pubchem
  title: PubChem Compound Summary for CID 2519, Caffeine
  authors: National Center for Biotechnology Information
  year: 2026
  url: https://pubchem.ncbi.nlm.nih.gov/compound/2519
  kind: Chemical database
  insight: Authoritative compound identity record for caffeine, including PubChem CID 2519, molecular formula C8H10N4O2, molecular weight, and structure representation.
  limitation: A chemical database record does not establish clinical effects, safety at a given exposure, or the identity and purity of a particular product.
  funding: NCBI public database; no study-specific funding declaration applies and no separate database funding declaration was assessed for this record.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: No study-specific conflict declaration applies; no separate conflict disclosure was assessed for this database record.
  conflictOfInterestStatus: not-assessed
- id: pmid-42830444
  title: Acute Caffeine Intake Does Not Modulate Active or Reactive Inhibition in Non-Clinical Young Adults, and ADHD Symptoms Do Not Moderate Its Effects.
  authors: Altınok A.
  year: 2026
  pmid: "42830444"
  doi: 10.1002/hup.70067
  url: https://pubmed.ncbi.nlm.nih.gov/42830444/
  kind: Preregistered randomized double-blind placebo-controlled crossover trial
  insight: In 36 non-clinical young adults, 250 mg caffeine produced no acute benefit for active or reactive inhibition; Bayesian factors supported the absence of an effect, and ADHD symptom severity did not moderate the result.
  limitation: Small non-clinical sample; the abstract does not establish whether the null applies to chronic intake or adults with diagnosed ADHD.
  funding: Full funding and conflict disclosures were not assessed from the abstract-only record.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Full conflict disclosures were not assessed from the abstract-only record.
  conflictOfInterestStatus: not-assessed
- id: pmid-42920333
  title: Should Coffee Consumers Not Have Their Habitual Morning Coffee Before Testing Their Cognitive Functions?
  authors: Pitsikas N, Nguyen DT, Blokland A.
  year: 2026
  pmid: "42920333"
  doi: 10.1002/hup.70070
  url: https://pubmed.ncbi.nlm.nih.gov/42920333/
  kind: Human cognitive comparison study
  insight: Among 30 regular and 25 non-regular coffee consumers, overnight abstinence selectively slowed reaction time versus habitual morning coffee while memory, executive-function and accuracy measures were unchanged.
  limitation: The abstract does not report the coffee dose or exact reaction-time effect size; the result is a withdrawal-context finding, not evidence that coffee improves every cognitive domain.
  funding: Full funding and conflict disclosures were not assessed from the abstract-only record.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Full conflict disclosures were not assessed from the abstract-only record.
  conflictOfInterestStatus: not-assessed
- id: pmid-42925456
  title: "Management of shift work disorder: an American Academy of Sleep Medicine clinical practice guideline."
  authors: Wright KP, Abbott SM, Ashbrook L, Drake CL, Flynn-Evans E, Framnes-DeBoer S, Kazmi U, Keeler K, McCall C, Morgan R, Shaffer-Hodgeman T, Trotti LM.
  year: 2026
  pmid: "42925456"
  doi: 10.1007/s44470-026-00084-w
  url: https://pubmed.ncbi.nlm.nih.gov/42925456/
  kind: Clinical practice guideline
  insight: For adults with shift-work disorder and excessive sleepiness, the AASM conditionally suggests caffeine before or during the night shift; evidence certainty is very low and the guideline warns about sleep disruption near bedtime.
  limitation: This is a guideline recommendation for a defined clinical disorder, not a universal performance or dosing recommendation; the abstract-only record does not provide the underlying trial-level estimates.
  funding: Full funding and conflict disclosures were not assessed from the abstract-only record.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Full conflict disclosures were not assessed from the abstract-only record.
  conflictOfInterestStatus: not-assessed
- id: owen2008
  title: The combined effects of L-theanine and caffeine on cognitive performance and mood
  authors: Owen et al.
  year: 2008
  url: https://pubmed.ncbi.nlm.nih.gov/18681988/
  kind: Randomized crossover trial
  insight: Caffeine with L-theanine improved some attention-task outcomes in 27 healthy volunteers.
  limitation: Small, short-term study; selected laboratory tasks do not establish everyday productivity or long-term benefit. Authors were affiliated with Unilever.
  pmid: "18681988"
  doi: 10.1179/147683008X301513
  funding: Funding not assessed; author affiliations include Unilever.
- id: drake2013
  title: Caffeine effects on sleep taken 0, 3, or 6 hours before going to bed.
  authors: Christopher Drake; Timothy Roehrs; John Shambroom; Thomas Roth
  year: 2013
  url: https://pubmed.ncbi.nlm.nih.gov/24235903/
  kind: Randomized controlled sleep trial
  insight: A 400 mg caffeine exposure significantly disrupted subsequent sleep relative to placebo when given at bedtime and 3 or 6 hours before bedtime.
  limitation: One fixed high dose, a small selected sample, and home sleep measurement do not establish a universal bedtime cutoff or the response to lower doses.
  pmid: "24235903"
  doi: 10.5664/jcsm.3170
  funding: The inspected full text reports an investigator-initiated grant from Zeo Inc. to Christopher Drake.
  sponsorshipStatus: industry-funded
  conflictsOfInterest: The inspected disclosure reports multiple author relationships, including Zeo involvement and consulting, speaking, research-support, or other relationships with pharmaceutical companies.
  conflictOfInterestStatus: declared
  disclosureUrl: https://pmc.ncbi.nlm.nih.gov/articles/PMC3805807/
- id: temple2017
  title: "The Safety of Ingested Caffeine: A Comprehensive Review."
  authors: Jennifer L Temple; Christophe Bernard; Steven E Lipshultz; Jason D Czachor; Joslyn A Westphal; Miriam A Mestre
  year: 2017
  url: https://pubmed.ncbi.nlm.nih.gov/28603504/
  kind: Narrative safety review
  insight: Broad synthesis of caffeine pharmacology and safety across adults and potentially vulnerable populations; retained as contextual synthesis and to reconcile the existing BHWiki source record.
  limitation: Narrative review spanning heterogeneous sources; it is not used here as the sole evidence for a primary measured caffeine outcome.
  pmid: "28603504"
  doi: 10.3389/fpsyt.2017.00080
  funding: The inspected article lists non-commercial research support including French National Research Agency and U.S. National Institutes of Health grants.
  sponsorshipStatus: non-industry-funded
  conflictsOfInterest: The inspected disclosure reports that Steven E. Lipshultz had served as an expert in legal cases involving caffeine-containing energy drinks; the article provides the authors' broader disclosure context.
  conflictOfInterestStatus: declared
  disclosureUrl: https://www.frontiersin.org/journals/psychiatry/articles/10.3389/fpsyt.2017.00080/full
- id: faber2004
  title: Time response of cytochrome P450 1A2 activity on cessation of heavy smoking.
  authors: Mirko S Faber; Uwe Fuhr
  year: 2004
  url: https://pubmed.ncbi.nlm.nih.gov/15289794/
  kind: Human pharmacokinetic phenotyping study
  insight: After abrupt smoking cessation in 12 heavy smokers, caffeine clearance decreased by 36.1% (95% CI 30.9%–42.2%), supporting rapid loss of tobacco-smoke-associated CYP1A2 induction.
  limitation: Small, selected sample of heavy smokers. The reported 38.6-hour half-life is the fitted decline of CYP1A2 activity, not caffeine elimination half-life.
  pmid: "15289794"
  doi: 10.1016/j.clpt.2004.04.003
  funding: Full-text funding declaration was not inspected.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Full-text conflict-of-interest declaration was not inspected.
  conflictOfInterestStatus: not-assessed
- id: grzegorzewski2022
  title: "Pharmacokinetics of Caffeine: A Systematic Analysis of Reported Data for Application in Metabolic Phenotyping and Liver Function Testing."
  authors: Jan Grzegorzewski; Florian Bartsch; Adrian Köller; Matthias König
  year: 2022
  url: https://pubmed.ncbi.nlm.nih.gov/35280254/
  kind: Systematic pharmacokinetic analysis
  insight: Integrates human caffeine pharmacokinetic data from 141 publications and maps modifiers including smoking, oral contraceptives, medicines, and disease; used here primarily to locate and contextualize primary studies.
  limitation: Combines heterogeneous historical studies with differing populations, doses, analytes, sampling designs, and methods; it is not a personal pharmacokinetic calculator.
  pmid: "35280254"
  doi: 10.3389/fphar.2021.752826
  funding: The inspected article reports German Federal Ministry of Education and Research and German Research Foundation support, including LiSyM and FOR 5151 funding, plus institutional/open-access support.
  sponsorshipStatus: non-industry-funded
  conflictsOfInterest: The authors declared that the research was conducted in the absence of commercial or financial relationships that could be construed as a potential conflict of interest.
  conflictOfInterestStatus: none-declared
  disclosureUrl: https://www.frontiersin.org/journals/pharmacology/articles/10.3389/fphar.2021.752826/full
- id: wilhelmus2017
  title: Effects of a single, oral 60 mg caffeine dose on attention in healthy adult subjects.
  authors: Micha M M Wilhelmus; Justin L Hay; Rob G J A Zuiker; Pieter Okkerse; Christelle Perdrieu; Julien Sauser; Maurice Beaumont; Jeroen Schmitt; Joop M A van Gerven; Beata Y Silber
  year: 2017
  url: https://pubmed.ncbi.nlm.nih.gov/27649778/
  kind: Randomized controlled crossover trial
  insight: A single 60 mg oral caffeine dose improved sustained-attention measures and subjective alertness in 82 healthy low- or non-caffeine-consuming adults aged 40–60.
  limitation: Acute laboratory endpoints in a selected age and caffeine-use group do not establish long-term cognitive benefit or effects in habitual high users.
  pmid: "27649778"
  doi: 10.1177/0269881116668593
  funding: Full-text funding declaration was not inspected; sponsorship is not inferred from affiliations.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Full-text conflict-of-interest declaration was not inspected.
  conflictOfInterestStatus: not-assessed
- id: kaplan1997
  title: Dose-dependent pharmacokinetics and psychomotor effects of caffeine in humans.
  authors: G B Kaplan; D J Greenblatt; B L Ehrenberg; J E Goddard; M M Cotreau; J S Harmatz; R I Shader
  year: 1997
  url: https://pubmed.ncbi.nlm.nih.gov/9378841/
  kind: Randomized double-blind crossover trial
  insight: In 12 healthy volunteers, 250 mg produced more favorable subjective and performance effects than 500 mg, while 500 mg produced more tension, nervousness, anxiety, irritability, palpitations, and restlessness; pharmacokinetics also differed by dose.
  limitation: Very small study using comparatively large single doses; subjective and psychomotor findings should not be generalized to ordinary low-dose use.
  pmid: "9378841"
  doi: 10.1002/j.1552-4604.1997.tb04356.x
  funding: Full funding statement was not inspected; PubMed indexes U.S. Public Health Service research support, but that indexing was not treated as a full disclosure.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Full-text conflict-of-interest declaration was not inspected.
  conflictOfInterestStatus: not-assessed
- id: hoppe2025
  title: Acute effects of 150 mg caffeine on subjective, physiological, and behavioral components of anxiety in panic disorder and healthy controls - A randomized placebo-controlled crossover trial.
  authors: Johanna M Hoppe; Johannes Björkstrand; Johan Vegelius; Lisa Klevebrant; Malin Gingnell; Andreas Frick
  year: 2025
  url: https://pubmed.ncbi.nlm.nih.gov/40577029/
  kind: Randomized placebo-controlled crossover trial
  insight: Among 29 participants with panic disorder and 53 healthy controls with low habitual caffeine consumption, 150 mg caffeine did not significantly increase the primary subjective-anxiety outcome, although arousal and avoidance-related measures changed.
  limitation: The panic-disorder target sample was not reached, habitual caffeine intake was intentionally low, the groups differed in some characteristics, and only one caffeine dose was tested.
  pmid: "40577029"
  doi: 10.1177/02698811251344692
  funding: The inspected full text reports support from the Swedish Brain Foundation, Swedish Research Council, Åke Wiberg Foundation, and Kjell and Märta Beijer Foundation.
  sponsorshipStatus: non-industry-funded
  conflictsOfInterest: The authors declared no potential conflicts of interest with respect to the research, authorship, or publication.
  conflictOfInterestStatus: none-declared
  disclosureUrl: https://pmc.ncbi.nlm.nih.gov/articles/PMC12287556/
- id: gardiner2025
  title: "Dose and timing effects of caffeine on subsequent sleep: a randomized clinical crossover trial."
  authors: Carissa L Gardiner; Jonathon Weakley; Louise M Burke; Francesca Fernandez; Rich D Johnston; Josh Leota; Suzanna Russell; Gabriella Munteanu; Andrew Townshend; Shona L Halson
  year: 2025
  url: https://pubmed.ncbi.nlm.nih.gov/39377163/
  kind: Randomized double-blind crossover sleep trial
  insight: In 23 healthy men, 100 mg caffeine was null for objective and subjective sleep at the tested 4-, 8-, and 12-hour pre-bed timings, whereas 400 mg disrupted sleep, including objective effects when taken 12 hours before bedtime.
  limitation: Small all-male sample with moderate habitual caffeine intake; only two caffeine doses and three timing intervals were tested.
  pmid: "39377163"
  doi: 10.1093/sleep/zsae230
  funding: The complete funding declaration was not successfully inspected during this review.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: The complete conflict-of-interest declaration was not successfully inspected during this review.
  conflictOfInterestStatus: not-assessed
- id: weibel2021
  title: The impact of daily caffeine intake on nighttime sleep in young adult men.
  authors: Janine Weibel; Yu-Shiuan Lin; Hans-Peter Landolt; Joshua Kistler; Sophia Rehm; Katharina M Rentsch; Helen Slawik; Stefan Borgwardt; Christian Cajochen; Carolin F Reichert
  year: 2021
  url: https://pubmed.ncbi.nlm.nih.gov/33633278/
  kind: Randomized double-blind crossover trial
  insight: After repeated daytime dosing with 150 mg caffeine three times daily, conventional nighttime sleep duration, latency, architecture, and subjective quality did not significantly differ from placebo when the final dose was eight hours before sleep, although sigma-band EEG power was reduced.
  limitation: Only 20 young male habitual caffeine users were studied; the dosing schedule and timing differ from acute evening-use experiments.
  pmid: "33633278"
  doi: 10.1038/s41598-021-84088-x
  funding: The inspected full text reports non-commercial support including the Swiss National Science Foundation and Swiss foundations.
  sponsorshipStatus: non-industry-funded
  conflictsOfInterest: The authors declared no competing interests.
  conflictOfInterestStatus: none-declared
  disclosureUrl: https://www.nature.com/articles/s41598-021-84088-x
- id: silverman1992
  title: Withdrawal syndrome after the double-blind cessation of caffeine consumption.
  authors: K Silverman; S M Evans; E C Strain; R R Griffiths
  year: 1992
  url: https://pubmed.ncbi.nlm.nih.gov/1528206/
  kind: Double-blind caffeine-withdrawal study
  insight: In 62 adults averaging 235 mg/day habitual caffeine intake, placebo substitution during caffeine-free periods produced substantially more headache, fatigue and mood symptoms and slower tapping performance than baseline or caffeine replacement.
  limitation: Short withdrawal periods and a low-to-moderate habitual-use sample do not define symptom severity or duration for every user.
  pmid: "1528206"
  doi: 10.1056/NEJM199210153271601
  funding: Full funding statement was not inspected; PubMed indexes U.S. Public Health Service research support, but that indexing was not treated as a full disclosure.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Full-text conflict-of-interest declaration was not inspected.
  conflictOfInterestStatus: not-assessed
- id: griffiths1990
  title: Low-dose caffeine physical dependence in humans.
  authors: R R Griffiths; S M Evans; S J Heishman; K L Preston; C A Sannerud; B Wolf; P P Woodson
  year: 1990
  url: https://pubmed.ncbi.nlm.nih.gov/2262896/
  kind: Double-blind controlled withdrawal study
  insight: Placebo substitution after repeated 100 mg/day caffeine produced a reproducible withdrawal effect, including headache, fatigue, dysphoric mood, muscle symptoms, nausea, and craving.
  limitation: Only seven participants were studied, with substantial variation in symptom presence and magnitude.
  pmid: "2262896"
  funding: Full funding statement was not inspected; PubMed indexes U.S. Public Health Service research support, but that indexing was not treated as a full disclosure.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Full-text conflict-of-interest declaration was not inspected.
  conflictOfInterestStatus: not-assessed
- id: newton1981
  title: Plasma and salivary pharmacokinetics of caffeine in man.
  authors: R Newton; L J Broughton; M J Lind; P J Morrison; H J Rogers; I D Bradbrook
  year: 1981
  url: https://pubmed.ncbi.nlm.nih.gov/7333346/
  kind: Human pharmacokinetic study
  insight: Six healthy caffeine-free volunteers received oral caffeine doses from 50 to 750 mg; caffeine was rapidly absorbed and described as completely available, and only 1.83% of the dose was eliminated unchanged in urine.
  limitation: Very small study; one participant supplied the intravenous comparison data, and historical analytical and study methods limit generalization.
  pmid: "7333346"
  doi: 10.1007/BF00609587
  funding: Full-text funding declaration was not inspected.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Full-text conflict-of-interest declaration was not inspected.
  conflictOfInterestStatus: not-assessed
- id: lelo1986
  title: Comparative pharmacokinetics of caffeine and its primary demethylated metabolites paraxanthine, theobromine and theophylline in man.
  authors: A Lelo; D J Birkett; R A Robson; J O Miners
  year: 1986
  url: https://pubmed.ncbi.nlm.nih.gov/3756065/
  kind: Human comparative pharmacokinetic study
  insight: In six healthy men, the reported mean caffeine elimination half-life was 4.1 hours; the study separately characterized paraxanthine, theobromine, and theophylline kinetics.
  limitation: Six male volunteers are insufficient to represent population variability in caffeine clearance.
  pmid: "3756065"
  doi: 10.1111/j.1365-2125.1986.tb05246.x
  funding: Full-text funding declaration was not inspected.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Full-text conflict-of-interest declaration was not inspected.
  conflictOfInterestStatus: not-assessed
- id: lelo1986partial
  title: Quantitative assessment of caffeine partial clearances in man.
  authors: A Lelo; J O Miners; R A Robson; D J Birkett
  year: 1986
  url: https://pubmed.ncbi.nlm.nih.gov/3756066/
  kind: Human metabolic pharmacokinetic study
  insight: In five subjects studied at caffeine steady state, mean fractional conversion to paraxanthine was 79.6%, confirming paraxanthine as the quantitatively dominant primary demethylated metabolite.
  limitation: Only five subjects contributed to the steady-state analysis, and the historical study does not capture modern population-level variability.
  pmid: "3756066"
  doi: 10.1111/j.1365-2125.1986.tb05247.x
  funding: Full-text funding declaration was not inspected.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Full-text conflict-of-interest declaration was not inspected.
  conflictOfInterestStatus: not-assessed
- id: knutti1982
  title: The effect of pregnancy on the pharmacokinetics of caffeine.
  authors: R Knutti; H Rothweiler; C Schlatter
  year: 1982
  url: https://pubmed.ncbi.nlm.nih.gov/6954898/
  kind: Human pregnancy pharmacokinetic study
  insight: Salivary caffeine measurements showed progressive prolongation of elimination during pregnancy, reaching an average half-life of 10.5 hours in the last four weeks versus about 3 hours in non-pregnant women.
  limitation: Older study; the inspected abstract does not provide all exposure, route, formulation, sample-size, or modern confounder-control details.
  pmid: "6954898"
  doi: 10.1007/978-3-642-68511-8_33
  funding: Full-text funding declaration was not inspected.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Full-text conflict-of-interest declaration was not inspected.
  conflictOfInterestStatus: not-assessed
- id: patwardhan1980
  title: Impaired elimination of caffeine by oral contraceptive steroids.
  authors: R V Patwardhan; P V Desmond; R F Johnson; S Schenker
  year: 1980
  url: https://pubmed.ncbi.nlm.nih.gov/7359014/
  kind: Human pharmacokinetic comparison study
  insight: After 250 mg oral caffeine, women using oral contraceptive steroids had a reported mean half-life of 10.7 hours versus 6.2 hours in non-users and had lower plasma clearance.
  limitation: Small historical parallel-group comparison; contraceptive formulations and doses may not represent all current products.
  pmid: "7359014"
  funding: Full funding statement was not inspected; PubMed indexes U.S. Public Health Service research support, but that indexing was not treated as a full disclosure.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Full-text conflict-of-interest declaration was not inspected.
  conflictOfInterestStatus: not-assessed
- id: jodynis2004
  title: Serum metabolite/caffeine ratios as a test for liver function.
  authors: Jadwiga Jodynis-Liebert; Jan Flieger; Arleta Matuszewska; Jacek Juszczyk
  year: 2004
  url: https://pubmed.ncbi.nlm.nih.gov/15051740/
  kind: Human liver-disease pharmacokinetic study
  insight: After 300 mg oral caffeine, participants with cirrhosis had lower clearance and a reported 11.4-hour mean caffeine half-life versus 4.3 hours in healthy volunteers; metabolite-to-caffeine ratios were also reduced.
  limitation: Disease-severity and cohort-specific results should not be extrapolated to every form or degree of liver dysfunction.
  pmid: "15051740"
  doi: 10.1177/0091270004263468
  funding: Full-text funding declaration was not inspected.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Full-text conflict-of-interest declaration was not inspected.
  conflictOfInterestStatus: not-assessed
- id: mahr1992
  title: Effects of temafloxacin and ciprofloxacin on the pharmacokinetics of caffeine.
  authors: G Mahr; F Sörgel; G R Granneman; M Kinzig; P Muth; K Patterson; U Fuhr; P Nickel; U Stephan
  year: 1992
  url: https://pubmed.ncbi.nlm.nih.gov/1319876/
  kind: Randomized pharmacokinetic crossover interaction study
  insight: In 12 healthy volunteers, ciprofloxacin increased caffeine AUC from 31.8 to 77.8 mg/L·h and terminal half-life from 4.5 to 9.7 hours; temafloxacin did not alter caffeine pharmacokinetics.
  limitation: Small historical study using high ciprofloxacin dosing; interaction magnitude can depend on dose, patient characteristics, and treatment schedule.
  pmid: "1319876"
  doi: 10.2165/00003088-199200221-00015
  funding: Full-text funding declaration was not inspected.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Full-text conflict-of-interest declaration was not inspected.
  conflictOfInterestStatus: not-assessed
- id: jeppesen1996
  title: A fluvoxamine-caffeine interaction study.
  authors: U Jeppesen; S Loft; H E Poulsen; K Brøsen
  year: 1996
  url: https://pubmed.ncbi.nlm.nih.gov/8807660/
  kind: Randomized human pharmacokinetic crossover interaction study
  insight: Fluvoxamine reduced median caffeine clearance from 107 to 21 mL/min, increased half-life from about 5 to 31 hours, and strongly reduced paraxanthine-forming N3-demethylation, supporting CYP1A2 as a major caffeine-metabolism pathway.
  limitation: Only eight healthy volunteers were studied, and the interaction magnitude should not be assumed for every CYP1A2 inhibitor or dosing regimen.
  pmid: "8807660"
  doi: 10.1097/00008571-199606000-00003
  funding: Full-text funding declaration was not inspected.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Full-text conflict-of-interest declaration was not inspected.
  conflictOfInterestStatus: not-assessed
- id: robertson1978
  title: Effects of caffeine on plasma renin activity, catecholamines and blood pressure.
  authors: D Robertson; J C Frölich; R K Carr; J T Watson; J W Hollifield; D G Shand; J A Oates
  year: 1978
  url: https://pubmed.ncbi.nlm.nih.gov/339084/
  kind: Randomized double-blind crossover physiological study
  insight: In nine healthy young participants with a three-week caffeine-source abstinence period, 250 mg oral caffeine increased mean blood pressure by 14/10 mm Hg at one hour and increased circulating renin and catecholamine measures.
  limitation: Very small, unusually caffeine-abstinent sample; acute results are not equivalent to long-term cardiovascular outcomes or responses in habitual users.
  pmid: "339084"
  doi: 10.1056/NEJM197801262980403
  funding: Full funding statement was not inspected; PubMed indexes U.S. Public Health Service research support, but that indexing was not treated as a full disclosure.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Full-text conflict-of-interest declaration was not inspected.
  conflictOfInterestStatus: not-assessed
- id: barry2005
  title: Caffeine effects on resting-state arousal.
  authors: Robert J Barry; Jacqueline A Rushby; Mark J Wallace; Adam R Clarke; Stuart J Johnstone; Ilinka Zlojutro
  year: 2005
  url: https://pubmed.ncbi.nlm.nih.gov/16221568/
  kind: Randomized double-blind placebo-controlled crossover study
  insight: In 18 healthy university students, 250 mg oral caffeine altered electrodermal and EEG arousal markers but did not produce a detectable cardiovascular effect at the study's resting assessment.
  limitation: Small young sample with cardiovascular measurement approximately 30 minutes after dosing; the null result does not exclude pressor effects at other times or in other populations.
  pmid: "16221568"
  doi: 10.1016/j.clinph.2005.08.008
  funding: Full-text funding declaration was not inspected.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Full-text conflict-of-interest declaration was not inspected.
  conflictOfInterestStatus: not-assessed
- id: debrah1995
  title: Effect of acute and chronic caffeine use on the cerebrovascular, cardiovascular and hormonal responses to orthostasis in healthy volunteers.
  authors: K Debrah; R Haigh; R Sherwin; J Murphy; D Kerr
  year: 1995
  url: https://pubmed.ncbi.nlm.nih.gov/8549061/
  kind: Controlled acute and repeated-exposure human study
  insight: After six days of repeated caffeine use, acute pressor and adrenaline responses were attenuated while the caffeine-associated reduction in middle cerebral artery velocity persisted, showing that tolerance can be endpoint-specific.
  limitation: Only nine healthy volunteers were studied; the experiment does not establish tolerance patterns for subjective alertness, anxiety, sleep, or all other outcomes.
  pmid: "8549061"
  doi: 10.1042/cs0890475
  funding: Full funding statement was not inspected; PubMed indexes non-U.S. and U.S. government research support, but those indexing terms were not treated as a complete disclosure.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Full-text conflict-of-interest declaration was not inspected.
  conflictOfInterestStatus: not-assessed
- id: fda2024
  title: "Spilling the Beans: How Much Caffeine is Too Much?"
  authors: U.S. Food and Drug Administration
  year: 2024
  url: https://www.fda.gov/consumers/consumer-updates/spilling-beans-how-much-caffeine-too-much
  kind: U.S. regulator public-health guidance
  insight: FDA cites 400 mg/day as an amount not generally associated with negative effects for most adults, emphasizes interindividual variability, describes symptoms of excessive intake including anxiety and jitters, and treats children and teens as a separate safety context.
  limitation: Public-health guidance rather than a controlled experiment; 400 mg/day is not an individualized safety guarantee or performance target.
  funding: Agency publication; no study-specific funding declaration applies and no separate funding declaration was assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Agency publication; no study-specific conflict declaration applies and no separate conflict disclosure was assessed.
  conflictOfInterestStatus: not-assessed
- id: acog2010
  title: Moderate Caffeine Consumption During Pregnancy
  authors: American College of Obstetricians and Gynecologists
  year: 2010
  url: https://www.acog.org/clinical/clinical-guidance/committee-opinion/articles/2010/08/moderate-caffeine-consumption-during-pregnancy
  kind: Clinical guidance
  insight: ACOG states that caffeine consumption below 200 mg/day does not appear to be a major contributor to miscarriage or preterm birth and notes uncertainty regarding growth restriction.
  limitation: Population-level clinical guidance based on the evidence available to the committee; it is not a pharmacokinetic study and does not establish zero risk below a threshold.
  funding: Professional-society guidance; no study-specific funding declaration applies and no separate funding declaration was assessed for this page.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: No page-specific conflict declaration was assessed for this guidance record.
  conflictOfInterestStatus: not-assessed
- id: eu1169
  title: Regulation (EU) No 1169/2011 of the European Parliament and of the Council of 25 October 2011 on the provision of food information to consumers, amending Regulations (EC) No 1924/2006 and (EC) No 1925/2006 of the European Parliament and of the Council, and repealing Commission Directive 87/250/EEC, Council Directive 90/496/EEC, Commission Directive 1999/10/EC, Directive 2000/13/EC of the European Parliament and of the Council, Commission Directives 2002/67/EC and 2008/5/EC and Commission Regulation (EC) No 608/2004
  authors: European Parliament and Council of the European Union
  year: 2011
  url: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX%3A02011R1169-20250401
  kind: European Union regulation
  insight: Annex III establishes additional caffeine labeling requirements for specified high-caffeine beverages and foods with added caffeine, including warning language concerning children and pregnancy; the consolidated text was used for scoped EU labeling context.
  limitation: This is food-labeling law, not a clinical safety threshold, and product-specific classification can depend on category and formulation.
  funding: Legislative source; research-funding metadata are not applicable and were not assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Legislative source; research conflict-of-interest metadata are not applicable and were not assessed.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-15095008
  title: "Caffeine as a psychomotor stimulant: mechanism of action."
  authors: G Fisone, A Borgkvist, A Usiello
  year: 2004
  url: https://pubmed.ncbi.nlm.nih.gov/15095008/
  kind: PubMed publication
  insight: The popularity of caffeine as a psychoactive drug is due to its stimulant properties, which depend on its ability to reduce adenosine transmission in the brain.
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: "15095008"
  doi: 10.1007/s00018-003-3269-3
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-27895607
  title: Caffeine Enhances Memory Performance in Young Adults during Their Non-optimal Time of Day.
  authors: Stephanie M Sherman, Timothy P Buckley, Elsa Baena, Lee Ryan
  year: 2016
  url: https://pubmed.ncbi.nlm.nih.gov/27895607/
  kind: PubMed publication
  insight: Many college students struggle to perform well on exams in the early morning.
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: "27895607"
  doi: 10.3389/fpsyg.2016.01764
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-23241646
  title: "Caffeine as an attention enhancer: reviewing existing assumptions."
  authors: Suzanne J L Einöther, Timo Giesbrecht
  year: 2013
  url: https://pubmed.ncbi.nlm.nih.gov/23241646/
  kind: PubMed publication
  insight: "RATIONALE: Despite the large number of studies on the behavioural effects of caffeine, an unequivocal conclusion had not been reached."
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: "23241646"
  doi: 10.1007/s00213-012-2917-4
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-link-2e517049afa1
  title: Comparing the benefits of caffeine, naps and placebo on verbal, motor and perceptual memory.
  authors: Publication authors from PMID 18554731
  year: 2008
  url: https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2603066/
  kind: PubMed Central publication link
  insight: A 200 mg caffeine intervention impaired motor learning relative to placebo and a 60–90 minute nap; naps improved verbal recall and perceptual learning.
  limitation: PMC2603066 was not rights-eligible for automated full-text retrieval; abstract evidence remains source-bounded.
  pmid: "18554731"
  pmcid: PMC2603066
  doi: 10.1016/j.bbr.2008.04.028
  funding: Full funding and conflict disclosures were not independently assessed here.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Full conflict disclosures were not independently assessed here.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-22728314
  title: The effect of caffeine on working memory load-related brain activation in middle-aged males.
  authors: Elissa B Klaassen, Renate H M de Groot, Elisabeth A T Evers, Jan Snel, Enno C I Veerman, Antoon J M Ligtenberg, Jelle Jolles, Dick J Veltman
  year: 2013
  url: https://pubmed.ncbi.nlm.nih.gov/22728314/
  kind: PubMed publication
  insight: Caffeine is commonly consumed in an effort to enhance cognitive performance.
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: "22728314"
  doi: 10.1016/j.neuropharm.2012.06.026
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-15678363
  title: Cognitive and mood improvements of caffeine in habitual consumers and habitual non-consumers of caffeine.
  authors: Crystal F Haskell, David O Kennedy, Keith A Wesnes, Andrew B Scholey
  year: 2005
  url: https://pubmed.ncbi.nlm.nih.gov/15678363/
  kind: PubMed publication
  insight: "RATIONALE: The cognitive and mood effects of caffeine are well documented."
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: "15678363"
  doi: 10.1007/s00213-004-2104-3
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-11057520
  title: Effects of low doses of caffeine on cognitive performance, mood and thirst in low and higher caffeine consumers.
  authors: H J Smit, P J Rogers
  year: 2000
  url: https://pubmed.ncbi.nlm.nih.gov/11057520/
  kind: PubMed publication
  insight: "RATIONALE: Caffeine is present in many widely consumed drinks and some foods."
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: "11057520"
  doi: 10.1007/s002130000506
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-24413697
  title: Post-study caffeine administration enhances memory consolidation in humans.
  authors: Daniel Borota, Elizabeth Murray, Gizem Keceli, Allen Chang, Joseph M Watabe, Maria Ly, John P Toscano, Michael A Yassa
  year: 2014
  url: https://pubmed.ncbi.nlm.nih.gov/24413697/
  kind: PubMed publication
  insight: It is currently not known whether caffeine has an enhancing effect on long-term memory in humans.
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: "24413697"
  doi: 10.1038/nn.3623
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-14687776
  title: Caffeine fatalities--four case reports.
  authors: Per Holmgren, Lotta Nordén-Pettersson, Johan Ahlner
  year: 2004
  url: https://pubmed.ncbi.nlm.nih.gov/14687776/
  kind: PubMed publication
  insight: Four cases of fatal intoxications with caffeine are described.
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: "14687776"
  doi: 10.1016/j.forsciint.2003.09.019
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-2617841
  title: Massive caffeine ingestion resulting in death.
  authors: R M Mrvos, P E Reilly, B S Dean, E P Krenzelok
  year: 1989
  url: https://pubmed.ncbi.nlm.nih.gov/2617841/
  kind: PubMed publication
  insight: Caffeine has long been recognized as an addictive substance with numerous toxic effects.
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: "2617841"
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-18554731
  title: Comparing the benefits of caffeine, naps and placebo on verbal, motor and perceptual memory.
  authors: Publication authors from PMID 18554731
  year: 2008
  url: https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2603066/
  kind: PubMed Central publication link
  insight: A 200 mg caffeine intervention impaired motor learning relative to placebo and a 60–90 minute nap; naps improved verbal recall and perceptual learning.
  limitation: PMC2603066 was not rights-eligible for automated full-text retrieval; abstract evidence remains source-bounded.
  pmid: "18554731"
  pmcid: PMC2603066
  doi: 10.1016/j.bbr.2008.04.028
- id: psychonautwiki
  title: "Caffeine: PsychonautWiki dose and duration data"
  authors: PsychonautWiki contributors
  year: 2026
  url: https://psychonautwiki.org/wiki/Caffeine
  kind: Community wiki data · CC BY 4.0
  insight: Source of this page's community dose bands and subjective duration ranges, from the PsychonautWiki API snapshot built about 2026-06-23 and retrieved 2026-11-06. The structured data is used under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/); BHWiki normalized unit symbols and route names.
  limitation: "PsychonautWiki states: \"PW's dosage information is gathered from users and resources for educational purposes only. It is not a recommendation and should be verified with other sources for accuracy.\" Its dose and duration values carry no per-value citations."
```

## Legal

```yaml
- jurisdiction: United States
  activity: Added caffeine in foods and consumer labeling/market oversight
  status: FDA states that companies adding caffeine to foods are responsible for ensuring that the use is safe under its expected conditions of use. FDA also states that stand-alone added caffeine must appear in a packaged food's ingredient list. The agency's 400 mg/day figure is public-health guidance for most adults, not a legal personal-consumption limit.
  sourceUrl: https://www.fda.gov/consumers/consumer-updates/spilling-beans-how-much-caffeine-too-much
  asOf: 2026-10-16
- jurisdiction: European Union
  activity: Labeling of specified high-caffeine beverages and foods with added caffeine
  status: Regulation (EU) No 1169/2011 Annex III requires additional caffeine warnings for specified product categories. Covered beverages above the regulatory caffeine-content threshold and certain foods with caffeine added for a physiological purpose carry prescribed caffeine-content and child/pregnancy warning information. These are labeling rules, not a universal clinical dose limit.
  sourceUrl: https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX%3A02011R1169-20250401
  asOf: 2026-10-16
```

## External wiki links

```yaml
- service: Wikipedia
  url: https://en.wikipedia.org/wiki/Caffeine
  title: Wikipedia
- service: Examine
  url: https://examine.com/supplements/Caffeine
  title: Examine
```

