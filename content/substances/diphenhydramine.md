---
slug: diphenhydramine
name: Diphenhydramine
subtitle: Histamine and acetylcholine pathways.
aliases:
  - DPH
  - Benadryl
  - Dimedrol
formula: C17H21NO
molecularWeight: 255.35 g/mol
pubchemCid: 3100
smiles: CN(C)CCOC(C1=CC=CC=C1)C2=CC=CC=C2
category: Antihistamine
tags:
  - antihistamine
  - histamine
  - histamine-h1
  - muscarinic-receptor
  - acetylcholine
  - drowsiness
  - age-exposure
accent: "#c4978c"
reviewedAt: 2026-10-16
editorialStatus: sourced-draft
halfLife:
  label: Study mean 9.2 hours
  low: 9.2
  high: 9.2
  context: Young-adult group after a single 1.25 mg/kg oral syrup exposure; the reported plus-or-minus variability is not encoded as a range or confidence interval.
  sourceId: simons1990
  observationId: diphenhydramine-young-adult
kinetics:
  onset: Injectable U.S. labeling describes a rapid onset but does not supply a numeric onset estimate suitable for cross-formulation modeling.
  peak: Not generalized across oral formulations from the selected evidence.
  duration: Serum elimination half-life is not a felt-duration estimate; controlled studies document acute impairment and, in one bedtime study, measurable next-morning impairment.
  bioavailability: Not established from the selected primary sources.
  metabolism: Current injection labeling states that part of a dose is excreted unchanged in urine and the remainder is metabolized via the liver; human interaction data also show that diphenhydramine can inhibit CYP2D6-mediated metabolism of a probe substrate.
  sourceId: diphenhydramine-injection-label
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
x-order: 8
---

## Summary

Diphenhydramine is a first-generation H1 antihistamine with clinically important central sedative effects and additional antimuscarinic activity. Current U.S. oral Drug Facts products reviewed here separately label it for allergy symptoms and for occasional sleeplessness, while a current prescription injection label includes allergic indications and active treatment of motion sickness when oral therapy is impractical. Sedation is therefore both a pharmacologic effect and, in sleep-aid products, part of the intended use; it does not imply preserved cognition, safe driving, or restorative sleep. (`diphenhydramine-allergy-label`, `diphenhydramine-sleep-label`, `diphenhydramine-injection-label`, `tashiro2008`, `liu2005`)

## Description

Diphenhydramine crosses into the central nervous system and occupies brain H1 receptors; in a small PET crossover experiment, 30 mg orally produced mean cortical H1-receptor occupancy of 56.4%. Separate preclinical receptor-function work demonstrates muscarinic antagonism, providing a mechanistic basis for its drying and other anticholinergic effects, although that assay cannot quantify human cognitive toxicity. (`tashiro2008`, `liu2005`)

The reviewed U.S. allergy product contains 25 mg diphenhydramine hydrochloride per capsule and labels temporary relief of specified allergy and common-cold symptoms. The reviewed U.S. sleep product contains 25 mg diphenhydramine hydrochloride per LiquiCap and labels occasional sleeplessness, with two LiquiCaps at bedtime as its labeled dose for people aged 12 years and older. These indications should not be collapsed into a generic “sedative” indication. (`diphenhydramine-allergy-label`, `diphenhydramine-sleep-label`)

Motion-sickness status is formulation-specific. The two reviewed oral OTC Drug Facts labels do not list motion sickness among their uses, so using those products for motion sickness is outside those reviewed labeled indications. In contrast, the current U.S. prescription injection label specifically includes active treatment of motion sickness when oral therapy is impractical. A small randomized ambulance-transport trial of 50 mg IV diphenhydramine found no significant symptom advantage over placebo at 15 minutes. (`diphenhydramine-allergy-label`, `diphenhydramine-sleep-label`, `diphenhydramine-injection-label`, `rubio2011`)

The displayed molecular identity is the parent diphenhydramine base, PubChem CID 3100, formula C17H21NO and molecular weight 255.35 g/mol. Clinical products and experiments cited below may instead administer a salt, most commonly diphenhydramine hydrochloride and, in one next-day driving study, diphenhydramine citrate. (`pubchem`)

## Evidence note

Healthy-volunteer performance findings are kept separate from findings in people with seasonal allergic rhinitis or insomnia. Subjective sleepiness or sedation is kept separate from measured driving, psychomotor, memory and polysomnographic outcomes. A serum elimination half-life is not treated as the duration of felt sedation.

The evidence is heterogeneous rather than uniformly positive or negative. A 25 mg placebo-controlled crossover experiment found no significant diphenhydramine-placebo difference in self-rated sedation, psychomotor performance or memory, whereas 50 mg experiments found acute driving or psychometric impairment. Repeated 50 mg twice-daily exposure produced rapid tolerance to measured daytime sedation and performance impairment in one small study, but that tolerance finding does not establish preserved safety, sustained insomnia benefit or absence of anticholinergic effects. (`scavone1998`, `vuurman2004`, `richardson2002`)

Insomnia evidence is also mixed. In adults with mild insomnia, 50 mg nightly produced some subjective improvement, including sleep efficiency, but no significant between-group differences in polysomnographic sleep-continuity variables. In an elderly-insomnia crossover study, 50 mg improved the reported number of awakenings versus placebo but not the broader set of sleep outcomes summarized in the abstract. (`morin2005`, `glass2008`)

A completed ClinicalTrials.gov driving study, NCT01411124, used diphenhydramine as an active control in healthy volunteers but had no posted results in the registry record retrieved for this review; it is therefore retained only as registry context, not as efficacy or safety evidence. (`ctg-nct01411124`)

Class-level antihistamine findings were not substituted for diphenhydramine-specific findings. Comparator substances appearing in trials below are not treated as interventions for this topic, and separate comparator arms are not misrepresented as coadministration interactions.

## Doses

```yaml
- label: U.S. OTC allergy Drug Facts dose
  amount: 25–50 mg per dose
  quantity: 25
  quantityMax: 50
  unit: mg
  ingredient: Diphenhydramine hydrochloride
  formulation: Liqui-Gels capsule
  route: Oral
  frequency: Every 4–6 hours; no more than 6 doses in 24 hours
  duration: As needed within the product's labeled temporary-relief context
  population: Adults and children 12 years and older
  purpose: Temporary relief of specified hay-fever, upper-respiratory allergy and common-cold symptoms
  sourceCategory: approved-label
  note: The label lists 1–2 capsules per dose. This record describes the reviewed U.S. product label and is not a personalized dosing recommendation.
  sourceId: diphenhydramine-allergy-label
- label: U.S. OTC occasional-sleeplessness Drug Facts dose
  amount: 50 mg at bedtime
  quantity: 50
  quantityMax: null
  unit: mg
  ingredient: Diphenhydramine hydrochloride
  formulation: Nighttime Sleep-Aid LiquiCaps
  route: Oral
  frequency: One bedtime dose only in 24 hours
  duration: Occasional sleeplessness; the label directs medical evaluation if sleeplessness persists continuously for more than 2 weeks
  population: Adults and children 12 years and older
  purpose: Relief of occasional sleeplessness and reduction of time to fall asleep when difficulty falling asleep is present
  sourceCategory: approved-label
  note: Two 25 mg LiquiCaps constitute the labeled 50 mg bedtime dose.
  sourceId: diphenhydramine-sleep-label
- label: U.S. prescription injection adult label context
  amount: 10–50 mg per administration
  quantity: 10
  quantityMax: 50
  unit: mg
  ingredient: Diphenhydramine hydrochloride
  formulation: 50 mg/mL injection
  route: IV or deep IM
  frequency: According to the prescription label and clinical indication
  duration: Acute clinician-administered use
  population: Adults in settings where parenteral diphenhydramine is indicated
  purpose: Prescription parenteral indications when oral therapy is impractical
  sourceCategory: approved-label
  note: The label states that 100 mg may be used if required and gives a 400 mg/day maximum; this is prescription labeling context, not a self-administration regimen.
  sourceId: diphenhydramine-injection-label
- label: Mild-insomnia randomized trial
  amount: 50 mg nightly
  quantity: 50
  quantityMax: null
  unit: mg
  ingredient: Diphenhydramine
  formulation: Two 25 mg study tablets
  route: Oral
  frequency: Nightly
  duration: 14 days, followed by placebo in that study arm
  population: Adults with mild insomnia
  purpose: Assess subjective, polysomnographic and clinical insomnia outcomes
  sourceCategory: research
  note: This was a research exposure, not an endorsement of repeated self-treatment.
  sourceId: morin2005
- label: Acute on-road driving experiment
  amount: 50 mg once
  quantity: 50
  quantityMax: null
  unit: mg
  ingredient: Diphenhydramine
  formulation: Oral study medication
  route: Oral
  frequency: Single exposure
  duration: Acute assessment beginning 2 hours after dosing
  population: 18 healthy adult volunteers
  purpose: Assess real-world driving and psychomotor performance
  sourceCategory: research
  note: Diphenhydramine was an active comparator to placebo and another antihistamine; other substances are not treated as interventions on this page.
  sourceId: vuurman2004
- label: Daytime tolerance experiment
  amount: 50 mg twice daily
  quantity: 50
  quantityMax: null
  unit: mg
  ingredient: Diphenhydramine
  formulation: Oral study medication
  route: Oral
  frequency: Twice daily
  duration: 4 days
  population: 15 healthy men aged 18–50 years
  purpose: Measure development of tolerance to subjective and objective sedative effects
  sourceCategory: research
  note: This repeated research exposure should not be interpreted as a recommended insomnia or allergy regimen.
  sourceId: richardson2002
- label: Motion-sickness ambulance trial
  amount: 50 mg once
  quantity: 50
  quantityMax: null
  unit: mg
  ingredient: Diphenhydramine
  formulation: Intravenous study medication
  route: IV
  frequency: Single randomized treatment after motion sickness developed
  duration: Acute assessments through 25 minutes, with rescue treatment available after 15 minutes
  population: Seven randomized diphenhydramine recipients among 22 patients who developed motion sickness during mountainous ambulance transport
  purpose: Treatment of established motion-sickness symptoms
  sourceCategory: research
  note: Diphenhydramine was not significantly better than placebo at the 15-minute comparison in this small study.
  sourceId: rubio2011
- label: Threshold dose
  amount: 25 mg
  quantity: 25
  quantityMax: null
  unit: mg
  ingredient: Diphenhydramine
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
  amount: 100–200 mg
  quantity: 100
  quantityMax: 200
  unit: mg
  ingredient: Diphenhydramine
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
  amount: 200–400 mg
  quantity: 200
  quantityMax: 400
  unit: mg
  ingredient: Diphenhydramine
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
  amount: 400–700 mg
  quantity: 400
  quantityMax: 700
  unit: mg
  ingredient: Diphenhydramine
  formulation: Not established
  route: Oral
  frequency: Not established
  duration: Not established
  population: Not established
  purpose: PsychonautWiki dosage classification
  sourceCategory: community
  note: Band from the PsychonautWiki API snapshot built about 2026-06-23.
  sourceId: psychonautwiki
- label: Heavy dose band (700 mg and above)
  amount: 700 mg and above
  quantity: 700
  quantityMax: null
  unit: mg
  ingredient: Diphenhydramine
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
- id: diphenhydramine-young-adult
  analyte: Diphenhydramine
  route: Oral
  formulation: Syrup
  population: Young-adult group in a 21-participant age-comparison study
  endpoint: elimination-half-life
  statistic: study-mean
  value: 9.2
  low: null
  high: null
  unit: hours
  context: Mean after a single 1.25 mg/kg exposure. The publication reported variability around the mean, but it is not converted here into a range or confidence interval.
  sourceId: simons1990
  modelEligible: true
- id: diphenhydramine-older-adult
  analyte: Diphenhydramine
  route: Oral
  formulation: Syrup
  population: Older-adult group in the same age-comparison study
  endpoint: elimination-half-life
  statistic: study-mean
  value: 13.5
  low: null
  high: null
  unit: hours
  context: Mean after a single 1.25 mg/kg exposure; a separate 25 mg crossover experiment did not reproduce a statistically significant age effect.
  sourceId: simons1990
  modelEligible: true
- id: diphenhydramine-child
  analyte: Diphenhydramine
  route: Oral
  formulation: Syrup
  population: Child group in the same age-comparison study
  endpoint: elimination-half-life
  statistic: study-mean
  value: 5.4
  low: null
  high: null
  unit: hours
  context: Mean after a single 1.25 mg/kg research exposure; this pharmacokinetic observation is not a pediatric dosing recommendation.
  sourceId: simons1990
  modelEligible: true
- id: diphenhydramine-age-null-25mg
  analyte: Diphenhydramine
  route: Oral
  formulation: Oral study medication
  population: 37 younger and older healthy volunteers aged 21–76 years
  endpoint: elimination-half-life
  statistic: not-established
  value: null
  low: null
  high: null
  unit: hours
  context: After a single 25 mg exposure, age and sex did not significantly influence Cmax, Tmax, half-life, AUC or clearance in this experiment; the abstract does not provide an alternative universal half-life estimate suitable for encoding here.
  sourceId: scavone1998
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
    max: 10
    unit: hours
  phases:
    - name: onset
      basis: elapsed-since-exposure
      min: 30
      max: 90
      unit: minutes
    - name: comeup
      basis: phase-duration
      min: 45
      max: 90
      unit: minutes
    - name: peak
      basis: phase-duration
      min: 1
      max: 4
      unit: hours
    - name: offset
      basis: phase-duration
      min: 2
      max: 6
      unit: hours
    - name: after-effects
      basis: phase-duration
      min: null
      max: 24
      unit: hours
```

## Modifiers

```yaml
- label: Age-defined study group
  effect: Age effects were detected in one PK experiment but not another
  detail: A 1.25 mg/kg syrup study reported mean half-lives of 5.4 hours in children, 9.2 hours in young adults and 13.5 hours in older adults. A separate single-25 mg crossover study found no statistically significant influence of age or sex on the principal PK parameters. A fixed age multiplier is therefore not justified.
  sourceId: simons1990
  observationId: diphenhydramine-older-adult
  factorType: other
  direction: variable
- label: Hepatic function
  effect: Dedicated hepatic-impairment PK effect was not quantified in the reviewed evidence
  detail: Current U.S. injection labeling states that the portion not excreted unchanged in urine is metabolized via the liver, but it does not provide a hepatic-impairment exposure ratio or a validated impairment-specific half-life. Slower clearance should not be numerically inferred from this statement alone.
  sourceId: diphenhydramine-injection-label
  observationId: diphenhydramine-young-adult
  factorType: other
  direction: variable
- label: Renal function
  effect: Dedicated renal-impairment PK effect was not quantified in the reviewed evidence
  detail: Current injection labeling states that a portion of diphenhydramine is excreted unchanged in urine, but supplies no renal-impairment exposure estimate or validated renal adjustment. The available label statement is insufficient to derive a renal half-life multiplier.
  sourceId: diphenhydramine-injection-label
  observationId: diphenhydramine-young-adult
  factorType: other
  direction: variable
- label: Pregnancy
  effect: Pregnancy-specific human pharmacokinetics are not established in the reviewed sources
  detail: The current injection label reports animal reproduction findings and states that adequate and well-controlled studies in pregnant women are lacking. The reviewed OTC labels direct pregnant or breastfeeding users to a health professional. These statements do not quantify pregnancy-related changes in diphenhydramine exposure.
  sourceId: diphenhydramine-injection-label
  observationId: diphenhydramine-young-adult
  factorType: pregnancy
  direction: variable
```

## Effects

```yaml
- id: seasonal-allergy-somnolence
  conceptId: drowsiness
  name: Somnolence during seasonal-allergic-rhinitis treatment
  direction: Increased
  evidence: Human research
  description: In a randomized one-week trial in patients with moderate-to-severe seasonal allergic rhinitis, somnolence was reported by 22.1% of participants assigned to diphenhydramine hydrochloride 50 mg three times daily, versus 3.4% with placebo and 4.5% with the active comparator.
  sourceId: raphael2006
  population: Patients with moderate-to-severe seasonal allergic rhinitis
  exposure: Diphenhydramine hydrochloride 50 mg orally three times daily for one week
  instrument: Adverse-event reporting
  magnitude: 22.1% with diphenhydramine versus 3.4% with placebo
  reportType: measured-assessment
- id: sedation-null-25mg
  conceptId: drowsiness
  name: Self-rated sedation after 25 mg
  direction: Variable
  evidence: Human research
  description: A randomized placebo-controlled crossover experiment did not detect a significant diphenhydramine-placebo difference in self-rated sedation after the single 25 mg exposure.
  sourceId: scavone1998
  population: 37 younger and older healthy volunteers aged 21–76 years
  exposure: Single 25 mg oral exposure
  instrument: Self-ratings of sedation
  magnitude: No statistically significant difference from placebo reported
  reportType: measured-assessment
- id: daytime-sedation-tolerance
  conceptId: drowsiness
  name: Daytime sleepiness and tolerance
  direction: Variable
  evidence: Human research
  description: Diphenhydramine produced significantly greater objective and subjective sleepiness than placebo on the first treatment day; by day 4, sleepiness measures were indistinguishable from placebo under the tested twice-daily regimen.
  sourceId: richardson2002
  population: 15 healthy men aged 18–50 years
  exposure: 50 mg orally twice daily for 4 days
  instrument: Objective and subjective sleepiness assessments
  magnitude: Significant excess sleepiness on day 1; no detectable difference from placebo by day 4
  reportType: measured-assessment
- id: drowsiness-does-not-track-driving
  conceptId: drowsiness
  name: Subjective drowsiness versus measured driving impairment
  direction: Variable
  evidence: Human research
  description: In licensed drivers with seasonal allergic rhinitis, self-reported drowsiness was a poor predictor of the measured driving-performance deficits observed after a separate 50 mg diphenhydramine treatment condition.
  sourceId: weiler2000
  population: 40 licensed drivers aged 25–44 years with seasonal allergic rhinitis
  exposure: Single 50 mg oral diphenhydramine condition in a four-period crossover trial
  instrument: Self-reported drowsiness alongside Iowa Driving Simulator measures
  magnitude: Drowsiness ratings did not reliably predict the principal driving-performance impairment
  reportType: measured-assessment
```

## Outcomes

```yaml
- id: driving-vuurman-50mg
  study:
    id: vuurman-driving
    design: Randomized double-blind three-way crossover study
    sampleSize: 18
    populationLabels:
      - healthy adults
    comparator: Placebo and an active antihistamine comparator in separate treatment periods
    route: Oral
    formulation: Study medication
    assessmentTime: On-road driving began 2 hours after dosing
    comparedSubstances:
      - diphenhydramine
  reportType: measured-assessment
  conceptId: cognitive-task-performance
  name: On-road lane-position control
  direction: Decreased
  evidence: Human research
  description: A single 50 mg dose significantly increased standard deviation of lateral position compared with placebo. The majority of the accompanying conventional performance tests did not show significant treatment differences, preserving an important partial-null finding.
  sourceId: vuurman2004
  population: 18 healthy men and women
  exposure: Single 50 mg oral diphenhydramine dose
  instrument: Standardized 90-minute on-road driving test and psychomotor test battery
  magnitude: SDLP increased versus placebo, P < 0.001; most other performance tests were not significantly different
- id: cognition-scavone-25mg-null
  study:
    id: scavone-age-crossover
    design: Randomized double-blind placebo-controlled two-way crossover
    sampleSize: 37
    populationLabels:
      - healthy younger adults
      - healthy older adults
    comparator: Placebo
    route: Oral
    formulation: Study medication
    assessmentTime: Assessments included 2.5 and 24 hours after dosing
    comparedSubstances:
      - diphenhydramine
  reportType: measured-assessment
  conceptId: cognitive-task-performance
  name: Psychomotor performance and memory after 25 mg
  direction: Variable
  evidence: Human research
  description: This lower-dose experiment did not detect significant diphenhydramine-placebo differences in psychomotor performance, sedation, mood or memory, despite positive impairment findings in other studies using different exposures and tasks.
  sourceId: scavone1998
  population: 37 healthy volunteers aged 21–76 years
  exposure: Single 25 mg oral dose
  instrument: Digit Symbol Substitution Test, information acquisition and recall, and related assessments
  magnitude: No statistically significant diphenhydramine-placebo difference reported
- id: next-day-driving-kay-2016
  study:
    id: kay-next-day-driving
    design: Randomized double-blind placebo-controlled four-period crossover
    sampleSize: 59
    populationLabels:
      - healthy adults
    comparator: Placebo and active comparators in separate periods
    route: Oral
    formulation: Diphenhydramine citrate
    assessmentTime: Approximately 6.5 hours after nighttime dosing
    comparedSubstances:
      - diphenhydramine
  reportType: measured-assessment
  conceptId: cognitive-task-performance
  name: Next-morning simulated driving
  direction: Decreased
  evidence: Human research
  description: After nighttime dosing, diphenhydramine citrate significantly impaired speed deviation relative to placebo and the study's gabapentin comparator. Other driving comparisons were nonsignificant or statistically ineligible under the prespecified sequential analysis, so a global impairment effect is not assigned to every endpoint.
  sourceId: kay2016
  population: 59 healthy participants
  exposure: Diphenhydramine citrate 76 mg at approximately 23:30
  instrument: 100-km simulated driving scenario with additional sleepiness and cognitive assessments
  magnitude: Speed-deviation impairment versus placebo, P < 0.05, at approximately 6.5 hours postdose
- id: driving-weiler-seasonal-allergy
  study:
    id: weiler-iowa-driving
    design: Randomized double-blind double-dummy four-period crossover
    sampleSize: 40
    populationLabels:
      - seasonal allergic rhinitis
      - licensed drivers
    comparator: Placebo, fexofenadine and alcohol in separate treatment periods
    route: Oral
    formulation: Study medication
    assessmentTime: One-hour Iowa Driving Simulator session after treatment
    comparedSubstances:
      - diphenhydramine
  reportType: measured-assessment
  conceptId: cognitive-task-performance
  name: Simulated driving with seasonal allergic rhinitis
  direction: Decreased
  evidence: Human research
  description: Driving performance on the primary car-following task was worse after diphenhydramine than after the separate alcohol or fexofenadine conditions, and lane keeping was impaired after diphenhydramine compared with fexofenadine. The alcohol and diphenhydramine exposures were separate comparator periods, not a coadministration experiment.
  sourceId: weiler2000
  population: 40 licensed drivers aged 25–44 years with seasonal allergic rhinitis
  exposure: Single 50 mg oral diphenhydramine condition
  instrument: Iowa Driving Simulator
  magnitude: Diphenhydramine produced the poorest primary driving performance among the tested conditions; no combination effect with alcohol was tested
- id: insomnia-morin-2005
  study:
    id: morin-mild-insomnia
    design: Multicenter randomized placebo-controlled parallel-group study
    sampleSize: 184
    populationLabels:
      - adults with mild insomnia
    comparator: Placebo; a valerian-hops arm was also present but is not treated as an intervention on this page
    route: Oral
    formulation: Two 25 mg diphenhydramine tablets
    durationDays: 14
    assessmentTime: During the first 14 treatment days and at study follow-up
    comparedSubstances:
      - diphenhydramine
  reportType: measured-assessment
  conceptId: sleep
  name: Sleep efficiency, insomnia severity and polysomnographic sleep continuity
  direction: Variable
  evidence: Human research
  description: Diphenhydramine produced a significantly greater increase in sleep efficiency than placebo and patients rated insomnia severity lower after 14 days. Total sleep time showed only a trend, and no significant between-group differences were found in polysomnographic sleep-continuity variables or sleep stages 3–4 and REM.
  sourceId: morin2005
  population: Adults with mild insomnia
  exposure: 50 mg orally each night for 14 days
  instrument: Daily sleep diaries, clinical ratings and polysomnography
  magnitude: Significant subjective sleep-efficiency improvement; no significant polysomnographic sleep-continuity difference
- id: insomnia-glass-elderly
  study:
    id: glass-elderly-insomnia
    design: Randomized placebo-controlled crossover clinical study
    populationLabels:
      - older adults with insomnia
    comparator: Placebo; an active hypnotic comparator was also studied but is not treated as an intervention on this page
    route: Oral
    formulation: Study medication
    durationDays: 14
    assessmentTime: Nightly sleep diaries with morning-after performance and memory testing
    comparedSubstances:
      - diphenhydramine
  reportType: measured-assessment
  conceptId: sleep
  name: Sleep in older adults with insomnia
  direction: Variable
  evidence: Human research
  description: Diphenhydramine significantly reduced the reported number of awakenings versus placebo, but the abstract did not report significant diphenhydramine-placebo improvements for the other principal sleep measures.
  sourceId: glass2008
  population: Adults aged 70–89 years with insomnia; mean age 73.9 years
  exposure: 50 mg orally nightly for 14 nights
  instrument: Sleep diaries; secondary morning psychomotor and free-recall testing
  magnitude: Mean awakenings 1.7 ± 1.1 with diphenhydramine versus 2.0 ± 1.2 with placebo, P < 0.05
```

## Mechanisms

```yaml
- title: Central histamine H1 receptor occupancy
  description: In eight healthy men studied with 11C-doxepin PET after crossover treatment, a single 30 mg oral diphenhydramine dose produced mean cortical H1-receptor occupancy of 56.4%. This directly demonstrates substantial central H1 engagement under the tested conditions but does not establish a universal occupancy value for other doses, ages or formulations.
  sourceId: tashiro2008
  conceptId: histamine-h1
- title: Antimuscarinic activity
  description: In cultured swine airway mucus-gland cells, diphenhydramine antagonized acetylcholine-driven muscarinic signaling, with a reported pA2 of 6.2 against the M3-mediated response. This supports intrinsic antimuscarinic pharmacology but cannot by itself quantify human cognitive, urinary, ocular or delirium risk.
  sourceId: liu2005
  conceptId: muscarinic-receptor
```

## Cautions

```yaml
- title: Drowsiness, driving and machinery
  description: Current U.S. oral and injectable labeling warns that marked drowsiness can occur and cautions about driving or operating machinery. Controlled driving studies show that subjective drowsiness is not a reliable personal gauge of measured impairment.
  sourceId: diphenhydramine-allergy-label
- title: Next-day impairment can outlast the intended bedtime effect
  description: In a healthy-volunteer crossover trial, nighttime diphenhydramine citrate impaired a simulated-driving speed measure approximately 6.5 hours after dosing. Serum half-life and the duration of consciously felt sleepiness should therefore not be treated as interchangeable.
  sourceId: kay2016
- title: Anticholinergic susceptibility
  description: Prescription injection labeling describes diphenhydramine as having atropine-like activity and calls for caution in conditions including narrow-angle glaucoma, urinary obstruction or prostatic enlargement and certain respiratory or cardiovascular conditions. Older adults are described as more likely to experience dizziness, sedation and hypotension.
  sourceId: diphenhydramine-injection-label
- title: Toxic delirium-like effects, hallucinations and seizures
  description: Overdose labeling describes central nervous system depression or stimulation, hallucinations, convulsions and potentially fatal toxicity, with stimulation especially prominent in children. These toxic manifestations can include a delirium-like anticholinergic syndrome; the label does not provide an incidence estimate for delirium at therapeutic exposures.
  sourceId: diphenhydramine-injection-label
- title: Misuse and fatal-overdose context
  description: A forensic case series from two U.S. jurisdictions documented diphenhydramine in selected toxic and lethal investigations, including a rare fatal case involving intravenous abuse. The series is highly selected and cannot estimate population prevalence or a threshold that predicts death in an individual.
  sourceId: botch-jones2014
- title: Rapid tolerance to daytime sedation does not establish safety
  description: In 15 healthy men given 50 mg twice daily, excess sleepiness and performance impairment present on day 1 were no longer distinguishable from placebo by day 4. This finding is regimen-specific and does not demonstrate sustained insomnia efficacy, absence of antimuscarinic effects, or safe performance under other conditions.
  sourceId: richardson2002
- title: Persistent sleeplessness requires evaluation
  description: The reviewed U.S. OTC sleep-aid label states that sleeplessness persisting continuously for more than 2 weeks may indicate an underlying illness and directs the user to seek medical advice rather than continuing indefinite self-treatment.
  sourceId: diphenhydramine-sleep-label
- title: Children
  description: The reviewed U.S. allergy label states not to use diphenhydramine to make a child sleepy. Prescription labeling also warns that overdose in pediatric patients may cause hallucinations, convulsions or death and that excitation can occur.
  sourceId: diphenhydramine-allergy-label
- title: Pregnancy and breastfeeding are formulation-specific label contexts
  description: Reviewed OTC labels direct pregnant or breastfeeding users to consult a health professional. The reviewed prescription injection label states that adequate controlled pregnancy studies are lacking and lists nursing mothers among its contraindications. These statements should not be converted into a universal pregnancy or lactation safety estimate.
  sourceId: diphenhydramine-injection-label
```

## Claims

```yaml
- id: diphenhydramine-muscarinic
  assertion: Diphenhydramine inhibited muscarinic signaling in an airway-cell experiment.
  relation: receptor-antagonism
  participants:
    - entityId: substance:diphenhydramine
      role: substance
    - entityId: tag:muscarinic-receptor
      role: target
    - entityId: tag:acetylcholine
      role: transmitter
  context: Cultured swine airway mucus-gland cells
  sourceIds:
    - liu2005
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Preclinical tissue assay; it does not quantify human clinical benefit, cognitive impairment or delirium risk.
- id: diphenhydramine-age
  assertion: One experiment found age-group differences in diphenhydramine elimination, while another did not detect a significant age effect.
  relation: clearance-context
  participants:
    - entityId: substance:diphenhydramine
      role: substance
    - entityId: tag:age-exposure
      role: population-context
  context: Oral human pharmacokinetic studies using different exposures
  sourceIds:
    - simons1990
  conflictingSourceIds:
    - scavone1998
  assessment: not-formally-assessed
  limitation: Small studies, different doses and formulations, and group means that cannot predict an individual's clearance.
- id: diphenhydramine-allergy-efficacy
  assertion: Diphenhydramine reduced seasonal-allergic-rhinitis symptom scores versus placebo in a randomized patient trial, while causing substantially more somnolence.
  relation: therapeutic-effect
  participants:
    - entityId: substance:diphenhydramine
      role: substance
    - entityId: tag:histamine-h1
      role: mechanism-context
    - entityId: tag:drowsiness
      role: adverse-effect-context
  context: 610 patients with moderate-to-severe seasonal allergic rhinitis; diphenhydramine hydrochloride 50 mg three times daily for one week
  sourceIds:
    - raphael2006
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: One short comparative trial at a relatively frequent study regimen; results do not establish comparative benefit-risk for every allergy formulation or patient.
- id: diphenhydramine-insomnia
  assertion: Diphenhydramine showed modest and outcome-dependent insomnia benefit rather than uniform improvement across subjective and objective sleep measures.
  relation: sleep-outcome
  participants:
    - entityId: substance:diphenhydramine
      role: substance
    - entityId: tag:sleep
      role: outcome
  context: Randomized trials using 50 mg nightly in adults with mild insomnia and in older adults with insomnia
  sourceIds:
    - morin2005
    - glass2008
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Morin et al. found subjective improvements but no significant polysomnographic sleep-continuity advantage; Glass et al. found improvement in awakenings only among the summarized diphenhydramine sleep outcomes.
- id: diphenhydramine-performance-impairment
  assertion: Acute diphenhydramine can impair measured driving or psychomotor performance even when subjective sleepiness is an imperfect indicator.
  relation: performance-impairment
  participants:
    - entityId: substance:diphenhydramine
      role: substance
    - entityId: tag:cognitive-task-performance
      role: outcome
    - entityId: tag:drowsiness
      role: subjective-effect-context
  context: Healthy-volunteer on-road testing, next-morning simulated driving and a seasonal-allergy driving-simulator study
  sourceIds:
    - vuurman2004
    - kay2016
    - weiler2000
  conflictingSourceIds:
    - scavone1998
  assessment: not-formally-assessed
  limitation: Impairment varies with dose, formulation, timing, task and study population; a 25 mg crossover study did not detect significant performance impairment.
- id: diphenhydramine-tolerance
  assertion: Tolerance to measured daytime sedative and psychomotor effects developed rapidly under one repeated 50 mg twice-daily regimen.
  relation: tolerance
  participants:
    - entityId: substance:diphenhydramine
      role: substance
    - entityId: tag:drowsiness
      role: effect
  context: 15 healthy men treated for four days
  sourceIds:
    - richardson2002
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Small all-male healthy-volunteer study; loss of measured sedation does not establish loss of every anticholinergic effect or sustained therapeutic benefit.
- id: diphenhydramine-motion-sickness
  assertion: A small randomized trial of IV diphenhydramine for established motion sickness found no significant advantage over placebo at the prespecified 15-minute comparison.
  relation: therapeutic-effect
  participants:
    - entityId: substance:diphenhydramine
      role: substance
    - entityId: tag:histamine-h1
      role: pharmacologic-context
  context: Patients developing motion sickness during mountainous ambulance transport; seven received 50 mg IV diphenhydramine
  sourceIds:
    - rubio2011
  conflictingSourceIds:
    - diphenhydramine-injection-label
  assessment: not-formally-assessed
  limitation: Very small acute-treatment trial. The current U.S. injection label nevertheless includes active treatment of motion sickness when oral therapy is impractical; label status and trial efficacy are distinct questions.
- id: diphenhydramine-cyp2d6
  assertion: Diphenhydramine inhibited CYP2D6-mediated metoprolol metabolism in humans with extensive CYP2D6 activity.
  relation: metabolic-interaction
  participants:
    - entityId: substance:diphenhydramine
      role: inhibitor
    - entityId: tag:antihistamine
      role: pharmacologic-context
  context: Healthy men stratified by CYP2D6 phenotype and given metoprolol during steady-state diphenhydramine or placebo conditions
  sourceIds:
    - hamelin2000
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: The human probe-drug result is strong for metoprolol under the tested conditions but does not quantify the interaction magnitude for every CYP2D6 substrate.
```

## Interactions

```yaml
- id: diphenhydramine-alcohol
  name: Alcohol
  otherSlug: null
  summary: Current U.S. oral labeling directs users to avoid alcoholic drinks, and prescription injection labeling states that alcohol can have an additive effect with diphenhydramine. A driving-simulator study compared diphenhydramine and alcohol in separate treatment periods; it did not test their coadministration and therefore is not evidence for a numeric combination effect.
  sourceId: diphenhydramine-allergy-label
  mechanism: Additive central sedation and impairment warning
  context: Regulatory labeling; comparator-only alcohol exposure in the driving literature must not be mistaken for combination exposure
  severity:
    label: Avoid according to the reviewed OTC Drug Facts warning
    sourceId: diphenhydramine-allergy-label
  conflictingSourceIds: []
- id: diphenhydramine-other-cns-depressants
  name: Other CNS depressants
  otherSlug: null
  summary: Prescription labeling states that diphenhydramine has additive effects with other CNS depressants and specifically names hypnotics, sedatives and tranquilizers; OTC labeling likewise warns that sedatives or tranquilizers may increase drowsiness.
  sourceId: diphenhydramine-injection-label
  mechanism: Additive CNS depression and impairment
  context: U.S. product labeling; no universal quantitative interaction multiplier is supplied
  severity:
    label: Clinically important caution
    sourceId: diphenhydramine-injection-label
  conflictingSourceIds: []
- id: diphenhydramine-opioid-context
  name: Opioids
  otherSlug: null
  summary: U.S. overdose surveillance documents opioid co-involvement in antihistamine-involved overdose deaths in which diphenhydramine was commonly identified. This observational co-involvement does not prove a specific pharmacodynamic effect size for diphenhydramine plus an opioid and should be interpreted alongside the diphenhydramine label's broader warning about CNS depressants.
  sourceId: cdc-antihistamine-overdose-2022
  mechanism: Overdose co-involvement and potential additive CNS-depressant context
  context: Population-level overdose surveillance rather than a controlled coadministration trial
  severity:
    label: High-consequence overdose context; no combination risk ratio established
    sourceId: cdc-antihistamine-overdose-2022
  conflictingSourceIds: []
- id: diphenhydramine-anticholinergic-burden
  name: Other anticholinergic medicines
  otherSlug: null
  summary: Diphenhydramine itself has atropine-like and experimentally demonstrated antimuscarinic activity. The reviewed evidence does not provide a controlled human interaction estimate for arbitrary combinations with other anticholinergic medicines, so additive anticholinergic burden is retained as a mechanistic caution rather than assigned a numeric effect.
  sourceId: diphenhydramine-injection-label
  mechanism: Potential additive antimuscarinic effects
  context: Mechanistic and labeling context; direct combination magnitude not established in the selected evidence
  severity:
    label: Context-dependent, especially where ocular, urinary, cognitive or delirium susceptibility is present
    sourceId: diphenhydramine-injection-label
  conflictingSourceIds: []
- id: diphenhydramine-mao-inhibitors
  name: Monoamine oxidase inhibitors
  otherSlug: null
  summary: Current U.S. prescription injection labeling states that MAO inhibitors prolong and intensify diphenhydramine's anticholinergic or drying effects.
  sourceId: diphenhydramine-injection-label
  mechanism: Intensification and prolongation of anticholinergic effects
  context: Regulatory drug-interaction warning
  severity:
    label: Clinically important caution
    sourceId: diphenhydramine-injection-label
  conflictingSourceIds: []
- id: diphenhydramine-cyp2d6-substrates
  name: CYP2D6 substrates
  otherSlug: null
  summary: In a randomized human interaction study, diphenhydramine reduced metoprolol oral and nonrenal clearance approximately twofold and partial metabolic clearance approximately 2.5-fold in CYP2D6 extensive metabolizers, with no corresponding significant effect in poor metabolizers. Metoprolol cardiovascular effects were more pronounced and prolonged in the extensive-metabolizer diphenhydramine condition. The magnitude should not be generalized unchanged to every CYP2D6 substrate.
  sourceId: hamelin2000
  mechanism: CYP2D6 inhibition
  context: Healthy-subject metoprolol probe study with genotype-defined CYP2D6 activity
  severity:
    label: Substrate- and phenotype-dependent
    sourceId: hamelin2000
  conflictingSourceIds: []
```

## Experience links

```yaml
[]
```

## References

```yaml
- id: diphenhydramine-allergy-label
  title: Benadryl ® Allergy Liqui-Gels ®
  authors: Kenvue Brands LLC; U.S. National Library of Medicine DailyMed
  year: 2026
  url: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=bfeae100-e2d1-4607-be3b-2d9b15cd4f7f
  kind: Current U.S. OTC Drug Facts label
  insight: Defines the reviewed 25 mg oral allergy product's indications, adult/adolescent dose, marked-drowsiness and driving warnings, alcohol and sedative/tranquilizer warnings, pediatric warning and pregnancy/breastfeeding advice.
  limitation: Product- and formulation-specific OTC labeling; it is not a comparative efficacy trial and cannot be generalized to every diphenhydramine product worldwide.
  funding: Manufacturer/labeler-submitted regulatory product labeling hosted by DailyMed.
  sponsorshipStatus: industry-funded
  conflictsOfInterest: Academic author conflict-of-interest declarations are not applicable to this manufacturer/labeler product record; no separate COI declaration was assessed.
  conflictOfInterestStatus: not-assessed
  disclosureUrl: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=bfeae100-e2d1-4607-be3b-2d9b15cd4f7f
- id: diphenhydramine-sleep-label
  title: ZzzQuil™NIGHTTIME SLEEP-AID LIQUICAPS
  authors: The Procter & Gamble Company; U.S. National Library of Medicine DailyMed
  year: 2026
  url: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=ad4babdb-d98d-420e-b8b0-9a5368c89a44
  kind: Current U.S. OTC Drug Facts label
  insight: Separately establishes the reviewed product's occasional-sleeplessness indication, 50 mg bedtime label dose for ages 12 years and older, one-dose-per-24-hours instruction, alcohol warning and advice to seek evaluation when sleeplessness persists beyond 2 weeks.
  limitation: Product-specific regulatory labeling does not establish long-term insomnia efficacy or comparative effectiveness.
  funding: Manufacturer/labeler-submitted regulatory product labeling hosted by DailyMed.
  sponsorshipStatus: industry-funded
  conflictsOfInterest: Academic author conflict-of-interest declarations are not applicable to this manufacturer product record; no separate COI declaration was assessed.
  conflictOfInterestStatus: not-assessed
  disclosureUrl: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=ad4babdb-d98d-420e-b8b0-9a5368c89a44
- id: diphenhydramine-injection-label
  title: Diphenhydramine Hydrochloride Injection, USP Rx only
  authors: Medical Purchasing Solutions LLC; U.S. National Library of Medicine DailyMed
  year: 2026
  url: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=51bb483f-3fe6-8a94-e063-6394a90acf7d
  kind: Current U.S. prescription drug label
  insight: Describes antihistamine, anticholinergic and sedative pharmacology; rapid parenteral onset; hepatic metabolism and partial unchanged urinary excretion; motion-sickness indication; adult parenteral dosing; CNS-depressant and MAOI interactions; pregnancy, nursing, geriatric, anticholinergic and overdose warnings.
  limitation: Prescription injection labeling is formulation-specific, provides little quantitative PK information and should not be used to infer oral bioavailability or a universal half-life.
  funding: Manufacturer/labeler-submitted prescription labeling hosted by DailyMed.
  sponsorshipStatus: industry-funded
  conflictsOfInterest: Academic author conflict-of-interest declarations are not applicable to this manufacturer/labeler product record; no separate COI declaration was assessed.
  conflictOfInterestStatus: not-assessed
  disclosureUrl: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=51bb483f-3fe6-8a94-e063-6394a90acf7d
- id: pubchem
  title: Diphenhydramine
  authors: National Center for Biotechnology Information, U.S. National Library of Medicine
  year: 2026
  url: https://pubchem.ncbi.nlm.nih.gov/compound/3100
  kind: Government chemical database
  insight: Provides parent-compound identity for PubChem CID 3100, including formula C17H21NO, molecular weight 255.35 g/mol and structural connectivity.
  limitation: Chemical identity does not establish formulation quality, salt-equivalent dose, clinical efficacy, safety or product legal status.
  funding: U.S. National Library of Medicine database resource.
  sponsorshipStatus: non-industry-funded
  conflictsOfInterest: No academic study conflict-of-interest declaration applies to this database record.
  conflictOfInterestStatus: not-assessed
  disclosureUrl: https://pubchem.ncbi.nlm.nih.gov/compound/3100
- id: simons1990
  title: "Diphenhydramine: pharmacokinetics and pharmacodynamics in elderly adults, young adults, and children"
  authors: K J Simons; W T Watson; T J Martin; X Y Chen; F E Simons
  year: 1990
  pmid: "2391399"
  doi: 10.1002/j.1552-4604.1990.tb01871.x
  url: https://pubmed.ncbi.nlm.nih.gov/2391399/
  kind: Human pharmacokinetic and pharmacodynamic study
  insight: Reports age-group pharmacokinetics after a single 1.25 mg/kg oral syrup exposure, including mean elimination half-lives of 5.4 hours in children, 9.2 hours in young adults and 13.5 hours in older adults.
  limitation: Only 21 participants across three age groups; weight-based syrup exposure and group means should not be converted into individual half-life predictions.
  funding: PubMed indexes research support, but a complete full-text funding declaration was not inspected for this review.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Full-text conflict-of-interest disclosure was not inspected.
  conflictOfInterestStatus: not-assessed
- id: scavone1998
  title: Pharmacokinetics and pharmacodynamics of diphenhydramine 25 mg in young and elderly volunteers
  authors: J M Scavone; D J Greenblatt; J S Harmatz; N Engelhardt; R I Shader
  year: 1998
  pmid: "9702844"
  doi: 10.1002/j.1552-4604.1998.tb04466.x
  url: https://pubmed.ncbi.nlm.nih.gov/9702844/
  kind: Randomized placebo-controlled crossover study
  insight: In 37 healthy volunteers aged 21–76 years, a single 25 mg dose showed no significant age or sex effect on major PK parameters and no significant diphenhydramine-placebo difference in sedation, psychomotor performance, mood or memory.
  limitation: A null finding at 25 mg in one acute experiment does not establish absence of impairment at other doses, timings, formulations or tasks.
  funding: PubMed records research support, but the full funding declaration was not inspected.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Full-text conflict-of-interest disclosure was not inspected.
  conflictOfInterestStatus: not-assessed
- id: raphael2006
  title: Efficacy of diphenhydramine vs desloratadine and placebo in patients with moderate-to-severe seasonal allergic rhinitis
  authors: Gordon D Raphael; James T Angello; Mei-Miau Wu; Howard M Druce
  year: 2006
  pmid: "16680933"
  doi: 10.1016/S1081-1206(10)63557-0
  url: https://pubmed.ncbi.nlm.nih.gov/16680933/
  kind: Randomized double-blind double-dummy placebo-controlled patient trial
  insight: In 610 seasonal-allergic-rhinitis patients, diphenhydramine hydrochloride 50 mg three times daily improved symptom scores versus placebo while somnolence occurred in 22.1% of diphenhydramine recipients versus 3.4% with placebo.
  limitation: One-week comparative study using a specific high-frequency regimen; the retrieved abstract does not provide confidence intervals for the cited comparisons.
  funding: A complete full-text funding declaration was not inspected; independence is therefore not inferred from the abstract.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Full-text conflict-of-interest declaration was not inspected.
  conflictOfInterestStatus: not-assessed
- id: morin2005
  title: "Valerian-hops combination and diphenhydramine for treating insomnia: a randomized placebo-controlled clinical trial"
  authors: Charles M Morin; Uwe Koetter; Célyne Bastien; J Catesby Ware; Virgil Wooten
  year: 2005
  pmid: "16335333"
  doi: 10.1093/sleep/28.11.1465
  url: https://pubmed.ncbi.nlm.nih.gov/16335333/
  kind: Multicenter randomized placebo-controlled insomnia trial
  insight: In adults with mild insomnia, 50 mg diphenhydramine nightly for 14 days produced some subjective benefit, including sleep efficiency and insomnia-severity ratings, but no significant between-group advantage on polysomnographic sleep-continuity variables.
  limitation: Diphenhydramine was one of several randomized arms; benefit was modest and not consistent across subjective and objective measures.
  funding: The inspected disclosure states that the study was industry-sponsored and supported by SmithKline Beecham; the company analyzed the data.
  sponsorshipStatus: industry-funded
  conflictsOfInterest: The inspected disclosure reports multiple authors' pharmaceutical research, consulting, speaking or advisory relationships; Uwe Koetter was an employee of Zeller AG, while Célyne Bastien reported no financial conflict.
  conflictOfInterestStatus: declared
  disclosureUrl: https://www.researchgate.net/publication/7434996_Valerian-Hops_Combination_and_Diphenhydramine_for_Treating_Insomnia_A_Randomized_Placebo-Controlled_Clinical_Trial
- id: glass2008
  title: "Effects of 2-week treatment with temazepam and diphenhydramine in elderly insomniacs: a randomized, placebo-controlled trial"
  authors: Jennifer R Glass; Beth A Sproule; Nathan Herrmann; Usoa E Busto
  year: 2008
  pmid: "18344728"
  doi: 10.1097/JCP.0b013e31816a9e4f
  url: https://pubmed.ncbi.nlm.nih.gov/18344728/
  kind: Randomized placebo-controlled crossover insomnia trial
  insight: In older adults with insomnia, 50 mg diphenhydramine nightly reduced the mean reported number of awakenings versus placebo, while the abstract identifies no other significant diphenhydramine sleep improvement.
  limitation: Older, relatively small clinical sample; the abstract does not provide complete numerical reporting for the morning-after psychomotor and memory outcomes.
  funding: PubMed indexes non-U.S.-government research support, but a complete full-text funding declaration was not inspected.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Full-text conflict-of-interest declaration was not inspected.
  conflictOfInterestStatus: not-assessed
- id: richardson2002
  title: Tolerance to daytime sedative effects of H1 antihistamines
  authors: Gary S Richardson; Timothy A Roehrs; Leon Rosenthal; Gail Koshorek; Thomas Roth
  year: 2002
  pmid: "12352276"
  doi: 10.1097/00004714-200210000-00012
  url: https://pubmed.ncbi.nlm.nih.gov/12352276/
  kind: Randomized double-blind placebo-controlled crossover study
  insight: Fifteen healthy men receiving diphenhydramine 50 mg twice daily showed excess objective and subjective sleepiness and psychomotor impairment initially, with measures becoming indistinguishable from placebo by day 4.
  limitation: Small all-male healthy-volunteer study lasting only four days; rapid tolerance to measured sedation cannot establish chronic safety or sustained hypnotic efficacy.
  funding: PubMed indexes non-U.S.-government research support, but the complete funding declaration was not inspected.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Full-text conflict-of-interest declaration was not inspected.
  conflictOfInterestStatus: not-assessed
- id: vuurman2004
  title: Effects of desloratadine, diphenhydramine, and placebo on driving performance and psychomotor performance measurements
  authors: E F P M Vuurman; G H Rikken; N D Muntjewerff; F de Halleux; J G Ramaekers
  year: 2004
  pmid: "15168099"
  doi: 10.1007/s00228-004-0757-9
  url: https://pubmed.ncbi.nlm.nih.gov/15168099/
  kind: Randomized double-blind crossover driving study
  insight: In 18 healthy adults, a single 50 mg diphenhydramine dose significantly increased standard deviation of lateral position versus placebo during an on-road driving test, while most accompanying performance tests were null.
  limitation: Small healthy-volunteer sample and single acute exposure; one impaired driving endpoint should not be generalized to every cognitive domain or time point.
  funding: PubMed indexes non-U.S.-government research support, but a complete full-text funding declaration was not inspected.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Full-text conflict-of-interest declaration was not inspected.
  conflictOfInterestStatus: not-assessed
- id: kay2016
  title: "Next-day residual effects of gabapentin, diphenhydramine, and triazolam on simulated driving performance in healthy volunteers: a phase 3, randomized, double-blind, placebo-controlled, crossover trial."
  authors: Gary G. Kay; Howard I. Schwartz; Mark A. Wingertzahn; Shyamalie Jayawardena; Russell P. Rosenberg
  year: 2016
  pmid: "27018419"
  doi: 10.1002/hup.2530
  url: https://pubmed.ncbi.nlm.nih.gov/27018419/
  kind: Randomized double-blind placebo- and active-controlled crossover trial
  insight: In 59 healthy participants tested approximately 6.5 hours after nighttime dosing, diphenhydramine citrate 76 mg significantly impaired simulated-driving speed deviation versus placebo; other comparisons were nonsignificant or ineligible under the planned sequential analysis.
  limitation: Diphenhydramine served as an active comparator in a trial primarily evaluating gabapentin; the salt was diphenhydramine citrate and findings should not be automatically converted to a different salt or every next-day performance endpoint.
  funding: The inspected publisher record explicitly states that Pfizer Consumer Healthcare sponsored the clinical study.
  sponsorshipStatus: industry-funded
  conflictsOfInterest: The publisher record identifies Mark A Wingertzahn and Shyamalie Jayawardena with Pfizer Consumer Healthcare affiliations, and the publisher's displayed conflict text identifies Jayawardena as a Pfizer employee with a financial interest; the complete declaration was not fully reproduced in the accessible page.
  conflictOfInterestStatus: declared
  disclosureUrl: https://onlinelibrary.wiley.com/doi/10.1002/hup.2530
- id: weiler2000
  title: Effects of fexofenadine, diphenhydramine, and alcohol on driving performance. A randomized, placebo-controlled trial in the Iowa driving simulator
  authors: J M Weiler; J R Bloomfield; G G Woodworth; A R Grant; T A Layton; T L Brown; D R McKenzie; T W Baker; G S Watson
  year: 2000
  pmid: "10691585"
  doi: 10.7326/0003-4819-132-5-200003070-00004
  url: https://pubmed.ncbi.nlm.nih.gov/10691585/
  kind: Randomized double-blind double-dummy crossover driving study
  insight: Among 40 drivers with seasonal allergic rhinitis, the 50 mg diphenhydramine condition produced the poorest primary simulated-driving performance, and self-reported drowsiness was not a reliable predictor of impairment.
  limitation: Diphenhydramine and alcohol were administered in separate treatment periods, so the study does not quantify their combined interaction.
  funding: PubMed indexes both non-U.S.-government and U.S. Public Health Service research support; the complete full-text funding allocation was not inspected.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Full-text conflict-of-interest declaration was not inspected.
  conflictOfInterestStatus: not-assessed
- id: tashiro2008
  title: Brain histamine H1 receptor occupancy of orally administered antihistamines, bepotastine and diphenhydramine, measured by PET with 11C-doxepin
  authors: Manabu Tashiro; Xudong Duan; Motohisa Kato; Masayasu Miyake; Shoichi Watanuki; Yoichi Ishikawa; Yoshihito Funaki; Ren Iwata; Masatoshi Itoh; Kazuhiko Yanai
  year: 2008
  pmid: "18410464"
  doi: 10.1111/j.1365-2125.2008.03143.x
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC2485223/
  kind: Placebo-controlled crossover PET receptor-occupancy study
  insight: In eight healthy men, 30 mg oral diphenhydramine produced mean cortical H1-receptor occupancy of 56.4%, directly supporting substantial central H1 engagement.
  limitation: Very small male-only study with a single dose; receptor occupancy is not itself a direct measure of clinical sleep quality, driving safety or antimuscarinic toxicity.
  funding: The inspected full text reports Japanese public research grants and technical support from TANABE R&D SERVICE Co., Ltd. for plasma drug measurements.
  sponsorshipStatus: mixed-funding
  conflictsOfInterest: No separate conflict-of-interest declaration was identified in the inspected full text; industry technical support was disclosed in the acknowledgments.
  conflictOfInterestStatus: not-reported
  disclosureUrl: https://pmc.ncbi.nlm.nih.gov/articles/PMC2485223/
- id: liu2005
  title: Effects of first and second generation antihistamines on muscarinic induced mucus gland cell ion transport
  authors: Huiling Liu; Jerry M Farley
  year: 2005
  pmid: "15790419"
  doi: 10.1186/1471-2210-5-8
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC1079883/
  kind: Preclinical receptor-function experiment
  insight: Demonstrates diphenhydramine antagonism of acetylcholine-driven M3 muscarinic signaling in cultured swine airway mucus-gland cells, with a reported pA2 of 6.2.
  limitation: Nonhuman cultured-cell preparation; it supports receptor pharmacology but cannot quantify human delirium, cognitive impairment, urinary retention or clinical efficacy.
  funding: The inspected declaration states that the project was supported by a research grant from Aventis.
  sponsorshipStatus: industry-funded
  conflictsOfInterest: The article's conflict declaration explicitly identifies Aventis, the maker of the comparator fexofenadine, as the project funder.
  conflictOfInterestStatus: declared
  disclosureUrl: https://pmc.ncbi.nlm.nih.gov/articles/PMC1079883/
- id: hamelin2000
  title: Significant interaction between the nonprescription antihistamine diphenhydramine and the CYP2D6 substrate metoprolol in healthy men with high or low CYP2D6 activity
  authors: B A Hamelin; A Bouayad; J Méthot; J Jobin; P Desgagnés; P Poirier; J Allaire; J Dumesnil; J Turgeon
  year: 2000
  pmid: "10824625"
  doi: 10.1067/mcp.2000.106464
  url: https://pubmed.ncbi.nlm.nih.gov/10824625/
  kind: Randomized human drug-interaction study with in-vitro CYP2D6 experiments
  insight: Diphenhydramine competitively inhibited CYP2D6-mediated metoprolol metabolism; in extensive metabolizers it reduced oral and nonrenal metoprolol clearance approximately twofold and partial metabolic clearance approximately 2.5-fold, with no corresponding significant effect in poor metabolizers.
  limitation: Metoprolol-specific probe study in a small genotype-stratified healthy sample; interaction magnitude cannot be transferred unchanged to every CYP2D6 substrate.
  funding: PubMed indexes non-U.S.-government research support, but a complete full-text funding declaration was not inspected.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Full-text conflict-of-interest declaration was not inspected.
  conflictOfInterestStatus: not-assessed
- id: rubio2011
  title: "Motion sickness: comparison of metoclopramide and diphenhydramine to placebo"
  authors: Stephanie Rubio; Lori Weichenthal; Jim Andrews
  year: 2011
  pmid: "22008228"
  doi: 10.1017/S1049023X11006431
  url: https://pubmed.ncbi.nlm.nih.gov/22008228/
  kind: Prospective randomized double-blind placebo-controlled patient trial
  insight: Among 22 ambulance patients randomized after motion sickness developed, seven received 50 mg IV diphenhydramine; diphenhydramine was not significantly better than placebo at 15 minutes.
  limitation: Extremely small treatment groups, rescue medication after 15 minutes and a distinctive mountainous ambulance setting limit precision and generalizability.
  funding: Complete full-text funding disclosure was not inspected.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Complete full-text conflict-of-interest disclosure was not inspected.
  conflictOfInterestStatus: not-assessed
- id: botch-jones2014
  title: "Diphenhydramine's role in death investigations: an examination of diphenhydramine prevalence in 2 US geographical areas"
  authors: Sabra Ruvera Botch-Jones; Robert Johnson; Kurt Kleinschmidt; Samantha Bashaw; Jhonny Ordonez
  year: 2014
  pmid: "25051196"
  doi: 10.1097/PAF.0000000000000106
  url: https://pubmed.ncbi.nlm.nih.gov/25051196/
  kind: Forensic case series
  insight: Describes selected toxic and lethal death investigations involving diphenhydramine in two U.S. jurisdictions and includes a documented fatal intravenous-abuse case.
  limitation: Case selection was restricted to toxic or lethal investigations where diphenhydramine was causal or contributory; it cannot estimate population misuse prevalence or define a universally lethal blood concentration.
  funding: Full-text funding declaration was not inspected.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Full-text conflict-of-interest declaration was not inspected.
  conflictOfInterestStatus: not-assessed
- id: cdc-antihistamine-overdose-2022
  title: Antihistamine Positivity and Involvement in Drug Overdose Deaths — 44 Jurisdictions, United States, 2019–2020
  authors: Centers for Disease Control and Prevention
  year: 2022
  url: https://www.cdc.gov/mmwr/volumes/71/wr/mm7141a4.htm
  kind: U.S. public-health overdose surveillance report
  insight: Documents diphenhydramine as a prominent antihistamine in overdose-death toxicology and describes frequent co-involvement of other drugs, including opioids, providing real-world interaction context without establishing causality.
  limitation: Postmortem surveillance is observational, subject to jurisdictional testing and coding practices, and cannot quantify a causal pharmacodynamic interaction between diphenhydramine and an opioid.
  funding: U.S. federal public-health surveillance publication; no study-specific external funding declaration was assessed for this article.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: A separate study-level conflict declaration was not assessed for this review.
  conflictOfInterestStatus: not-assessed
- id: ctg-nct01411124
  title: Study to Assess the Effect of Gabapentin Enacarbil on Simulated Driving in Healthy Subjects
  authors: XenoPort, Inc.; ClinicalTrials.gov
  year: 2011
  url: https://clinicaltrials.gov/study/NCT01411124
  kind: ClinicalTrials.gov registry record
  insight: Registers a completed double-blind placebo- and active-controlled crossover driving study in 36 healthy volunteers in which diphenhydramine was an active control; the retrieved registry record had no posted results.
  limitation: Sponsor-submitted registry information is not a peer-reviewed outcome report, and absence of posted registry results is not evidence of no effect.
  funding: XenoPort, Inc. is listed as the lead sponsor.
  sponsorshipStatus: industry-funded
  conflictsOfInterest: ClinicalTrials.gov does not provide a publication-style author conflict-of-interest declaration for this record.
  conflictOfInterestStatus: not-assessed
  disclosureUrl: https://clinicaltrials.gov/study/NCT01411124
- id: psychonautwiki
  title: "Diphenhydramine: PsychonautWiki dose and duration data"
  authors: PsychonautWiki contributors
  year: 2026
  url: https://psychonautwiki.org/wiki/Diphenhydramine
  kind: Community wiki data · CC BY 4.0
  insight: Source of this page's community dose bands and subjective duration ranges, from the PsychonautWiki API snapshot built about 2026-06-23 and retrieved 2026-11-06. The structured data is used under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/); BHWiki normalized unit symbols and route names.
  limitation: "PsychonautWiki states: \"PW's dosage information is gathered from users and resources for educational purposes only. It is not a recommendation and should be verified with other sources for accuracy.\" Its dose and duration values carry no per-value citations."
```

## Legal

```yaml
- jurisdiction: United States
  activity: Retail sale and labeled self-use for allergy/common-cold symptom relief
  status: The reviewed Benadryl Allergy Liqui-Gels product is marketed under an OTC Drug Facts label; each capsule contains 25 mg diphenhydramine hydrochloride and the reviewed label version is effective 2026-05-07.
  sourceUrl: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=bfeae100-e2d1-4607-be3b-2d9b15cd4f7f
  asOf: 2026-10-16
- jurisdiction: United States
  activity: Retail sale and labeled self-use as a nighttime sleep aid
  status: The reviewed ZzzQuil Nighttime Sleep-Aid LiquiCaps product is marketed under an OTC Drug Facts label for occasional sleeplessness; each LiquiCap contains 25 mg diphenhydramine hydrochloride and the reviewed label version is effective 2026-10-02.
  sourceUrl: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=ad4babdb-d98d-420e-b8b0-9a5368c89a44
  asOf: 2026-10-16
- jurisdiction: United States
  activity: Dispensing and clinician-administered parenteral use
  status: The reviewed diphenhydramine hydrochloride 50 mg/mL injection is labeled Rx only. Its current labeling includes specified allergic indications, active treatment of motion sickness when oral therapy is impractical, and other prescription indications; the reviewed label is effective 2026-05-13.
  sourceUrl: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=51bb483f-3fe6-8a94-e063-6394a90acf7d
  asOf: 2026-10-16
- jurisdiction: United States
  activity: Motion-sickness use of the two reviewed oral OTC allergy and sleep-aid products
  status: Motion sickness is not listed among the uses in either reviewed oral OTC Drug Facts label. This formulation-specific absence should not be generalized to parenteral diphenhydramine, whose current Rx injection label expressly includes active treatment of motion sickness when oral therapy is impractical.
  sourceUrl: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=51bb483f-3fe6-8a94-e063-6394a90acf7d
  asOf: 2026-10-16
```

