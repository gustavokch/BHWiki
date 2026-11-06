---
slug: gabapentin
name: Gabapentin
subtitle: Anticonvulsant and neuropathic-pain medicine.
aliases: []
formula: C9H17NO2
molecularWeight: 171.24 g/mol
pubchemCid: 3446
smiles: C1CCC(CC1)(CC(=O)O)CN
category: Depressant
tags:
  - depressant
  - alpha2delta-vgcc
accent: "#c3b093"
reviewedAt: 2026-10-16
editorialStatus: sourced-draft
halfLife:
  label: 5–7 hours in normal renal function for immediate-release gabapentin
  low: 5
  high: 7
  context: The current Neurontin label reports an elimination half-life of 5–7 hours for immediate-release gabapentin in people with normal renal function; renal impairment can prolong elimination markedly, so this is not a universal half-life.
  sourceId: neurontin-label-2026
  observationId: gabapentin-ir-normal-renal
kinetics:
  onset: No formulation-independent subjective onset is established here.
  peak: No universal peak time is assigned because absorption is formulation- and meal-dependent.
  duration: No formulation-independent subjective-effect duration is established here.
  bioavailability: Immediate-release oral bioavailability is dose-dependent and decreases as dose rises; the Neurontin label reports approximately 60%, 47%, 34%, 33%, and 27% at 900, 1200, 2400, 3600, and 4800 mg/day, respectively, when given in three divided doses.
  metabolism: Gabapentin is not appreciably metabolized in humans and is eliminated by renal excretion as unchanged drug.
  sourceId: neurontin-label-2026
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
x-order: 195
---

## Summary

Gabapentin is the parent compound represented by PubChem CID 3446. Current U.S. Neurontin labeling covers postherpetic neuralgia in adults and adjunctive treatment of partial-onset seizures, with or without secondary generalization, in adults and children aged 3 years and older; the gastroretentive Gralise formulation is labeled for postherpetic neuralgia and is not substitutable with other gabapentin products because its pharmacokinetics differ. Parent gabapentin is not a current U.S.-labeled restless-legs-syndrome treatment, although small randomized trials have studied it in RLS. This record does not merge evidence for gabapentin enacarbil or pregabalin into parent-gabapentin outcomes. Sources: pubchem; neurontin-label-2026; gralise-label-2026; garcia-borreguero-2002; thorp-2001.

## Description

The clinically used active ingredient in the cited Neurontin and Gralise products is gabapentin itself rather than a gabapentin hydrochloride salt. Neurontin is available as immediate-release capsules, tablets, and oral solution, whereas Gralise is a once-daily gastroretentive tablet whose food-dependent absorption and delayed peak distinguish it from immediate-release products. Gabapentin absorption is capacity-limited: oral bioavailability falls as dose increases, and the Gralise label describes absorption from the proximal small bowel through a saturable L-amino transport system. Gabapentin is essentially unmetabolized and is excreted unchanged through the kidneys. The EMA Neurontin referral documents nationally authorized European uses and harmonization across Member States rather than a single centralized EU authorization. Sources: pubchem; neurontin-label-2026; gralise-label-2026; ema-neurontin-referral.

## Evidence note

Evidence is indication-, population-, dose-, and formulation-specific. Established postherpetic-neuralgia trials of immediate-release gabapentin found analgesic benefit, while one 1800 mg/day extended-release trial missed its prespecified primary endpoint; a separate randomized trial found no benefit when gabapentin was started during acute herpes zoster to prevent later PHN. Adjunctive focal-seizure trials show active treatment effects but include dose- and endpoint-specific null results. Parent-gabapentin RLS evidence comes mainly from small crossover trials, including a hemodialysis study; the later DISCO-RLS registry record is complete but has no posted results. Patient anxiety studies are conflicting—a social-phobia trial was positive while the overall panic-disorder analysis was null—and they do not establish healthy-person anxiolysis. A healthy-volunteer 250 mg study found little next-day cognitive/driving impairment on most measures but failed noninferiority on lane excursions, which is evidence against a broad cognitive-enhancement claim rather than evidence for one. The Wiffen systematic review was used as an evidence locator, but its pooled literature includes gabapentin enacarbil in addition to parent gabapentin, so its pooled estimates are not imported here as parent-only effects. Sources: rowbotham-1998; rice-maton-2001; wallace-2010; bulilete-2019; neurontin-label-2026; garcia-borreguero-2002; thorp-2001; disco-rls; pande-social-1999; pande-panic-2000; kay-2016; wiffen-2017.

## Doses

```yaml
- label: U.S. labeled postherpetic-neuralgia titration
  amount: 300 mg on day 1; 600 mg/day on day 2; 900 mg/day on day 3; titrate as needed to 1800 mg/day
  quantity: 300
  quantityMax: 1800
  unit: mg/day
  ingredient: Gabapentin
  formulation: Neurontin immediate-release capsule, tablet, or oral solution
  route: Oral
  frequency: Titrated from once daily to three divided doses
  duration: Not fixed by the label
  population: Adults with postherpetic neuralgia
  purpose: Management of established postherpetic neuralgia
  sourceCategory: approved-label
  foodRelation: with-or-without-food
  note: Clinical studies evaluated 1800–3600 mg/day; the label states that additional benefit above 1800 mg/day was not demonstrated.
  sourceId: neurontin-label-2026
- label: U.S. labeled adjunctive focal-seizure dose, age 12 years and older
  amount: 300–600 mg three times daily
  quantity: 300
  quantityMax: 600
  unit: mg
  ingredient: Gabapentin
  formulation: Neurontin immediate-release capsule, tablet, or oral solution
  route: Oral
  frequency: Three times daily, with no more than 12 hours between doses
  duration: Ongoing adjunctive therapy
  population: Adults and adolescents aged 12 years and older with partial-onset seizures
  purpose: Adjunctive treatment of partial-onset seizures with or without secondary generalization
  sourceCategory: approved-label
  foodRelation: with-or-without-food
  note: Starting dose is 300 mg three times daily; doses up to 2400 mg/day were tolerated in long-term studies and 3600 mg/day in a small number of patients for a relatively short duration.
  sourceId: neurontin-label-2026
- label: U.S. labeled adjunctive focal-seizure dose, ages 3–11 years
  amount: 40 mg/kg/day at age 3–4 years; 25–35 mg/kg/day at age 5–11 years
  quantity: 25
  quantityMax: 40
  unit: mg/kg/day
  ingredient: Gabapentin
  formulation: Neurontin immediate-release
  route: Oral
  frequency: Three divided doses
  duration: Ongoing adjunctive therapy
  population: Children aged 3–11 years with partial-onset seizures
  purpose: Adjunctive treatment of partial-onset seizures
  sourceCategory: approved-label
  foodRelation: with-or-without-food
  note: Label starting dose is 10–15 mg/kg/day; the listed values are recommended maintenance doses by age.
  sourceId: neurontin-label-2026
- label: Renal adjustment, creatinine clearance 30–59 mL/min
  amount: 400–1400 mg/day
  quantity: 400
  quantityMax: 1400
  unit: mg/day
  ingredient: Gabapentin
  formulation: Neurontin immediate-release
  route: Oral
  frequency: Two divided doses
  duration: While renal function remains in this range
  population: Patients with creatinine clearance greater than 30 through 59 mL/min
  purpose: Renal dose adjustment
  sourceCategory: approved-label
  note: Total daily dose and schedule are reduced relative to patients with creatinine clearance at least 60 mL/min.
  sourceId: neurontin-label-2026
- label: Renal adjustment, creatinine clearance 15–29 mL/min
  amount: 200–700 mg/day
  quantity: 200
  quantityMax: 700
  unit: mg/day
  ingredient: Gabapentin
  formulation: Neurontin immediate-release
  route: Oral
  frequency: Once daily
  duration: While renal function remains in this range
  population: Patients with creatinine clearance greater than 15 through 29 mL/min
  purpose: Renal dose adjustment
  sourceCategory: approved-label
  note: At creatinine clearance 15 mL/min the label gives 100–300 mg once daily; below 15 mL/min the daily dose should be reduced proportionally.
  sourceId: neurontin-label-2026
- label: Hemodialysis supplemental dose
  amount: 125–350 mg after each 4-hour hemodialysis session
  quantity: 125
  quantityMax: 350
  unit: mg
  ingredient: Gabapentin
  formulation: Neurontin immediate-release
  route: Oral
  frequency: After each 4-hour hemodialysis session, in addition to renal-function-based maintenance dosing
  duration: During hemodialysis treatment
  population: Patients receiving hemodialysis
  purpose: Replacement of gabapentin removed by hemodialysis
  sourceCategory: approved-label
  note: Exact post-dialysis supplement depends on the maintenance-dose column in the label table.
  sourceId: neurontin-label-2026
- label: Gralise postherpetic-neuralgia titration
  amount: 300 mg on day 1, titrated to 1800 mg once daily by day 15
  quantity: 300
  quantityMax: 1800
  unit: mg/day
  ingredient: Gabapentin
  formulation: Gralise gastroretentive tablet
  route: Oral
  frequency: Once daily with the evening meal
  duration: Not fixed by the label
  population: Adults with postherpetic neuralgia
  purpose: Management of postherpetic neuralgia
  sourceCategory: approved-label
  foodRelation: with-food
  absorptionNote: Food substantially increases Gralise exposure; the label reports food-dependent increases in Cmax of 33–84% and AUC of 33–118%.
  note: Gralise should be swallowed whole and is not substitutable with other gabapentin products.
  sourceId: gralise-label-2026
- label: Immediate-release PHN randomized trial
  amount: Up to 3600 mg/day
  quantity: null
  quantityMax: 3600
  unit: mg/day
  ingredient: Gabapentin
  formulation: Immediate-release gabapentin capsules
  route: Oral
  frequency: Titrated over 4 weeks, then maintained at maximum tolerated dose
  duration: 8 weeks
  population: 229 adults randomized with postherpetic neuralgia persisting more than 3 months after rash healing
  purpose: Placebo-controlled treatment of established PHN
  sourceCategory: research
  note: Four-week titration followed by four weeks at the maximum tolerated dose.
  sourceId: rowbotham-1998
- label: Fixed-dose PHN randomized trial
  amount: 1800 or 2400 mg/day
  quantity: 1800
  quantityMax: 2400
  unit: mg/day
  ingredient: Gabapentin
  formulation: Immediate-release gabapentin
  route: Oral
  frequency: Three divided doses
  duration: 7 weeks
  population: 334 adults with postherpetic neuralgia
  purpose: Placebo-controlled PHN treatment
  sourceCategory: research
  note: Forced titration to one of two target daily doses.
  sourceId: rice-maton-2001
- label: Extended-release PHN randomized trial
  amount: 1800 mg/day
  quantity: 1800
  quantityMax: 1800
  unit: mg/day
  ingredient: Gabapentin
  formulation: Extended-release gabapentin tablet
  route: Oral
  frequency: Once daily or asymmetrically divided
  duration: 10 weeks
  population: 407 randomized patients with post-zoster pain for at least 3 months; 400 in the intent-to-treat population
  purpose: Placebo-controlled PHN treatment
  sourceCategory: research
  note: The prespecified primary average-daily-pain endpoint was not statistically significant for either administration schedule.
  sourceId: wallace-2010
- label: Gastroretentive PHN phase-3 exposure
  amount: 1800 mg/day
  quantity: 1800
  quantityMax: 1800
  unit: mg/day
  ingredient: Gabapentin
  formulation: Gastroretentive gabapentin
  route: Oral
  frequency: Once daily with the evening meal
  duration: 2-week titration, 8-week stable treatment, then 1-week taper
  population: Integrated analysis of 357 gabapentin-treated and 364 placebo-treated patients with postherpetic neuralgia
  purpose: Phase-3 PHN efficacy and safety
  sourceCategory: research
  foodRelation: with-food
  note: Integrated analysis of two phase-3 studies; it should not be counted as a wholly independent cohort beyond its component trials.
  sourceId: rauck-2013
- label: Acute-zoster PHN-prevention trial
  amount: 300 mg/day titrated to a maximum of 1800 mg/day
  quantity: 300
  quantityMax: 1800
  unit: mg/day
  ingredient: Gabapentin
  formulation: 300 mg oral gabapentin capsules
  route: Oral
  frequency: Dose increased by 300 mg/day during titration
  duration: 5 weeks of treatment with follow-up through week 12
  population: 98 randomized adults older than 50 years with herpes zoster within 72 hours and baseline pain at least 4/10
  purpose: Prevention of postherpetic neuralgia during acute herpes zoster
  sourceCategory: research
  note: All participants also received valaciclovir for 7 days and analgesia as needed; only 9 of 33 gabapentin completers reached 1800 mg/day.
  sourceId: bulilete-2019
- label: Refractory focal-seizure cognition crossover study
  amount: 1200, 1800, and 2400 mg/day
  quantity: 1200
  quantityMax: 2400
  unit: mg/day
  ingredient: Gabapentin
  formulation: Oral gabapentin; exact marketed formulation not established from the accessible report
  route: Oral
  frequency: Three divided doses
  duration: Three-month treatment phase with dose steps every 4 weeks
  population: 27 patients with refractory partial seizures entered; 21 completed
  purpose: Adjunctive seizure treatment and cognitive assessment
  sourceCategory: research
  note: Psychomotor, memory, subjective cognition, fatigue, mood, and drowsiness were assessed at each dose step.
  sourceId: leach-1997
- label: Idiopathic or iron-deficiency-associated RLS crossover study
  amount: Mean effective dose 1855 mg/day at week 6
  quantity: 1855
  quantityMax: 1855
  unit: mg/day
  ingredient: Gabapentin
  formulation: Oral gabapentin; exact marketed formulation not stated in the accessible abstract
  route: Oral
  frequency: Individualized oral dosing
  duration: 6 weeks per treatment period with a 1-week washout before crossover
  population: 24 patients with restless legs syndrome
  purpose: Off-label randomized RLS treatment research
  sourceCategory: research
  note: Therapeutic effects were reported by week 4, when mean dose was 1391 mg/day.
  sourceId: garcia-borreguero-2002
- label: Hemodialysis RLS crossover study
  amount: 200–300 mg after each hemodialysis session
  quantity: 200
  quantityMax: 300
  unit: mg
  ingredient: Gabapentin
  formulation: Oral gabapentin; exact marketed formulation not stated in the accessible abstract
  route: Oral
  frequency: After each hemodialysis session
  duration: 6 weeks per treatment period with a 1-week washout
  population: 16 randomized hemodialysis patients with RLS; 13 completed
  purpose: Off-label RLS treatment research in hemodialysis
  sourceCategory: research
  note: Two participants withdrew because of lethargy considered related to gabapentin.
  sourceId: thorp-2001
- label: Healthy-volunteer next-day cognition and driving exposure
  amount: 250 mg
  quantity: 250
  quantityMax: 250
  unit: mg
  ingredient: Gabapentin
  formulation: Oral gabapentin; exact formulation not stated in the accessible abstract
  route: Oral
  frequency: Single nighttime dose at approximately 23:30
  duration: Single dose with testing after 6.5 hours
  population: 59 healthy volunteers
  purpose: Next-day simulated-driving, sleepiness, and cognitive assessment
  sourceCategory: research
  note: Comparator conditions included placebo, diphenhydramine citrate 76 mg, and triazolam 0.5 mg.
  sourceId: kay-2016
- label: Social-phobia randomized trial
  amount: 900–3600 mg/day
  quantity: 900
  quantityMax: 3600
  unit: mg/day
  ingredient: Gabapentin
  formulation: Oral gabapentin; exact marketed formulation not stated in the accessible abstract
  route: Oral
  frequency: Three divided doses with flexible dosing
  duration: 14 weeks
  population: 69 patients with social phobia
  purpose: Off-label anxiety-disorder efficacy research
  sourceCategory: research
  note: Clinician- and patient-rated social-phobia symptoms favored gabapentin; the accessible abstract does not report an effect estimate or confidence interval.
  sourceId: pande-social-1999
- label: Panic-disorder randomized trial
  amount: 600–3600 mg/day
  quantity: 600
  quantityMax: 3600
  unit: mg/day
  ingredient: Gabapentin
  formulation: Oral gabapentin; exact marketed formulation not stated in the accessible abstract
  route: Oral
  frequency: Flexible daily dosing
  duration: 8 weeks
  population: 103 patients with panic disorder
  purpose: Off-label anxiety-disorder efficacy research
  sourceCategory: research
  note: The overall Panic and Agoraphobia Scale analysis was null; a positive severe-subgroup finding was post hoc.
  sourceId: pande-panic-2000
- label: Threshold dose
  amount: 200 mg
  quantity: 200
  quantityMax: null
  unit: mg
  ingredient: Gabapentin
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
  amount: 200–900 mg
  quantity: 200
  quantityMax: 900
  unit: mg
  ingredient: Gabapentin
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
  amount: 900–1500 mg
  quantity: 900
  quantityMax: 1500
  unit: mg
  ingredient: Gabapentin
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
  amount: 1500–2400 mg
  quantity: 1500
  quantityMax: 2400
  unit: mg
  ingredient: Gabapentin
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
  ingredient: Gabapentin
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
- id: gabapentin-ir-normal-renal
  analyte: Gabapentin
  route: Oral
  formulation: Immediate-release gabapentin
  population: Patients with normal renal function receiving 1200–3000 mg/day
  endpoint: elimination-half-life
  statistic: reported-range
  value: null
  low: 5
  high: 7
  unit: hours
  context: The label reports 5–7 hours in normal renal function. This range is formulation- and renal-context-specific and is not assigned as a universal gabapentin half-life.
  sourceId: neurontin-label-2026
  modelEligible: true
- id: gabapentin-severe-renal-impairment
  analyte: Gabapentin
  route: Oral
  formulation: Immediate-release gabapentin, single 400 mg dose
  population: Adults with impaired renal function in the label pharmacokinetic study; severe group had creatinine clearance below 30 mL/min
  endpoint: elimination-half-life
  statistic: approximate
  value: 52
  low: null
  high: null
  unit: hours
  context: Across the renal-function study, mean half-life increased from about 6.5 hours at creatinine clearance above 60 mL/min to about 52 hours below 30 mL/min as oral and renal clearance declined.
  sourceId: neurontin-label-2026
  modelEligible: true
- id: gabapentin-anuric-off-dialysis
  analyte: Gabapentin
  route: Oral
  formulation: Immediate-release gabapentin
  population: 11 anuric adults studied during a nondialysis period
  endpoint: elimination-half-life
  statistic: approximate
  value: 132
  low: null
  high: null
  unit: hours
  context: The label reports an apparent half-life of about 132 hours during the nondialysis period in anuric subjects.
  sourceId: neurontin-label-2026
  modelEligible: true
- id: gabapentin-anuric-during-dialysis
  analyte: Gabapentin
  route: Oral
  formulation: Immediate-release gabapentin
  population: Anuric adults undergoing hemodialysis
  endpoint: elimination-half-life
  statistic: approximate
  value: 3.8
  low: null
  high: null
  unit: hours
  context: During hemodialysis the apparent gabapentin half-life was reduced to about 3.8 hours, demonstrating substantial extracorporeal removal.
  sourceId: neurontin-label-2026
  modelEligible: true
- id: gabapentin-age-related-clearance
  analyte: Gabapentin
  route: Oral
  formulation: Immediate-release gabapentin
  population: Adults spanning approximately 20–80 years in label pharmacokinetic analyses
  endpoint: elimination-half-life
  statistic: not-established
  value: null
  low: null
  high: null
  unit: hours
  context: A standalone age-specific half-life is not assigned. The label reports apparent oral clearance declining from about 225 mL/min in people younger than 30 years to about 125 mL/min in people older than 70 years, largely reflecting age-related renal decline.
  sourceId: neurontin-label-2026
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
    max: 10
    unit: hours
  phases:
    - name: onset
      basis: elapsed-since-exposure
      min: 30
      max: 120
      unit: minutes
    - name: peak
      basis: phase-duration
      min: 120
      max: 180
      unit: minutes
```

## Modifiers

```yaml
- label: Renal impairment
  effect: Elimination slows substantially as creatinine clearance declines
  detail: Gabapentin is excreted unchanged by the kidney; in the label single-dose renal study, mean half-life increased to about 52 hours when creatinine clearance was below 30 mL/min.
  sourceId: neurontin-label-2026
  observationId: gabapentin-severe-renal-impairment
  factorType: other
  direction: slower
- label: Hemodialysis
  effect: Hemodialysis substantially accelerates gabapentin removal in anuric patients
  detail: Apparent half-life was about 132 hours during a nondialysis period and about 3.8 hours during dialysis in the label study, which is why post-dialysis supplementation is specified for immediate-release gabapentin.
  sourceId: neurontin-label-2026
  observationId: gabapentin-anuric-during-dialysis
  factorType: other
  direction: faster
- label: Age
  effect: Apparent clearance decreases with increasing age, predominantly through declining renal function
  detail: The label reports apparent oral clearance falling from about 225 mL/min below age 30 to about 125 mL/min above age 70; elderly dosing therefore follows creatinine clearance rather than age alone.
  sourceId: neurontin-label-2026
  observationId: gabapentin-age-related-clearance
  factorType: other
  direction: slower
```

## Effects

```yaml
- id: gabapentin-drowsiness-epilepsy
  conceptId: drowsiness
  name: Somnolence during adjunctive epilepsy trials
  direction: Increased
  evidence: Human research
  description: In controlled epilepsy trials in patients older than 12 years receiving doses up to 1800 mg/day, somnolence was reported in 19% of gabapentin-treated participants versus 9% with placebo.
  sourceId: neurontin-label-2026
  population: Patients older than 12 years with epilepsy in controlled adjunctive-treatment trials
  exposure: Gabapentin up to 1800 mg/day
  instrument: null
  magnitude: 19% with gabapentin versus 9% with placebo
  reportType: measured-assessment
  conflictingSourceIds: []
- id: gabapentin-drowsiness-phn
  conceptId: drowsiness
  name: Somnolence during postherpetic-neuralgia trials
  direction: Increased
  evidence: Human research
  description: In controlled PHN trials using doses up to 3600 mg/day, somnolence was reported in 21% of gabapentin-treated participants versus 5% with placebo.
  sourceId: neurontin-label-2026
  population: Adults with postherpetic neuralgia in controlled trials
  exposure: Gabapentin up to 3600 mg/day
  instrument: null
  magnitude: 21% with gabapentin versus 5% with placebo
  reportType: measured-assessment
  conflictingSourceIds: []
- id: gabapentin-drowsiness-dose-study
  study:
    id: leach-1997-crossover
    design: Double-blind dose-ranging placebo-controlled crossover study
    sampleSize: 27
    populationLabels:
      - refractory partial seizures
    comparator: Matched placebo
    route: Oral
    formulation: Gabapentin, exact marketed formulation not established
    durationDays: 90
    assessmentTime: End of each 4-week dose step
  conceptId: drowsiness
  name: Dose-related drowsiness at 2400 mg/day
  direction: Increased
  evidence: Human research
  description: Visual-analogue drowsiness was significantly higher at 2400 mg/day than during matched placebo, while lower-dose steps were not reported as producing the same finding.
  sourceId: leach-1997
  population: Patients with refractory partial seizures; 21 completed the crossover study
  exposure: 2400 mg/day in three divided doses
  instrument: Visual analogue scale for drowsiness
  magnitude: Higher than matched placebo; p=0.03
  reportType: measured-assessment
  conflictingSourceIds: []
```

## Outcomes

```yaml
- id: gabapentin-phn-rowbotham
  study:
    id: rowbotham-1998-phn
    design: Multicenter randomized double-blind placebo-controlled parallel-group trial
    sampleSize: 229
    populationLabels:
      - postherpetic neuralgia
      - pain persisting more than 3 months after rash healing
    comparator: Placebo
    route: Oral
    formulation: Immediate-release gabapentin
    durationDays: 56
    assessmentTime: Final treatment week
  conceptId: postherpetic-neuralgia-pain
  name: Average daily pain in established postherpetic neuralgia
  direction: Decreased
  evidence: Human research
  description: Average daily pain fell from 6.3 to 4.2 in the gabapentin efficacy group and from 6.5 to 6.0 with placebo after titration to a maximum tolerated dose up to 3600 mg/day.
  sourceId: rowbotham-1998
  population: Adults with established postherpetic neuralgia; primary efficacy data reported for 109 gabapentin and 116 placebo participants
  exposure: Up to 3600 mg/day for 8 weeks
  instrument: 0–10 average daily pain diary
  magnitude: Mean change −2.1 with gabapentin versus −0.5 with placebo; p<0.001; confidence interval not reported in the accessible article result
  reportType: measured-assessment
  conflictingSourceIds: []
- id: gabapentin-phn-rice
  study:
    id: rice-maton-2001-phn
    design: Multicenter randomized double-blind placebo-controlled trial
    sampleSize: 334
    populationLabels:
      - postherpetic neuralgia
    comparator: Placebo
    route: Oral
    formulation: Immediate-release gabapentin
    durationDays: 49
    assessmentTime: Final week
  conceptId: postherpetic-neuralgia-pain
  name: Average daily pain at 1800 and 2400 mg/day
  direction: Decreased
  evidence: Human research
  description: Both fixed-dose groups showed larger percentage reductions in average daily pain than placebo.
  sourceId: rice-maton-2001
  population: 334 adults with postherpetic neuralgia
  exposure: 1800 or 2400 mg/day in three divided doses for 7 weeks
  instrument: Average daily pain diary
  magnitude: Reduction from baseline was 34.5% at 1800 mg/day and 34.4% at 2400 mg/day versus 15.7% with placebo; treatment differences were 18.8 percentage points (95% CI 10.9–26.8) and 18.7 percentage points (95% CI 10.7–26.7), respectively; both p<0.01
  reportType: measured-assessment
  conflictingSourceIds: []
- id: gabapentin-phn-er-primary-null
  study:
    id: wallace-2010-phn
    design: Randomized double-blind placebo-controlled multicenter parallel-group trial
    sampleSize: 407
    populationLabels:
      - postherpetic neuralgia
      - post-zoster pain at least 3 months
    comparator: Placebo
    route: Oral
    formulation: Extended-release gabapentin
    durationDays: 70
    assessmentTime: Week 10
  conceptId: postherpetic-neuralgia-pain
  name: Extended-release gabapentin primary PHN endpoint
  direction: Variable
  evidence: Human research
  description: The prespecified baseline-observation-carried-forward primary average-daily-pain endpoint did not significantly differ from placebo for either once-daily or asymmetrically divided 1800 mg/day dosing. A secondary LOCF analysis favored once-daily dosing but not divided dosing.
  sourceId: wallace-2010
  population: 407 randomized patients; 400 in the intent-to-treat analysis
  exposure: Extended-release gabapentin 1800 mg/day once daily or asymmetrically divided
  instrument: 0–10 average daily pain numerical rating scale
  magnitude: Primary LS mean changes were −1.85 once daily, −1.72 divided dose, and −1.42 placebo; p=0.110 and p=0.255 versus placebo, respectively
  reportType: measured-assessment
  conflictingSourceIds:
    - rowbotham-1998
    - rice-maton-2001
- id: gabapentin-phn-gastroretentive
  study:
    id: rauck-2013-integrated-phn
    design: Integrated analysis of two phase-3 randomized double-blind placebo-controlled multicenter studies
    sampleSize: 721
    populationLabels:
      - postherpetic neuralgia
    comparator: Placebo
    route: Oral
    formulation: Gastroretentive gabapentin
    durationDays: 70
    assessmentTime: Week 10
  conceptId: postherpetic-neuralgia-pain
  name: Gastroretentive gabapentin average daily pain
  direction: Decreased
  evidence: Human research
  description: Once-daily gastroretentive gabapentin produced a larger percentage reduction in average daily pain than placebo in an integrated analysis of two phase-3 trials.
  sourceId: rauck-2013
  population: 357 gabapentin-treated and 364 placebo-treated patients
  exposure: Gastroretentive gabapentin 1800 mg once daily with the evening meal
  instrument: Average daily pain score
  magnitude: −37.0% versus −29.1% at week 10; p=0.0025; 30%-or-greater responders 54% versus 41%, p=0.001
  reportType: measured-assessment
  conflictingSourceIds:
    - wallace-2010
- id: gabapentin-phn-prevention-null
  study:
    id: bulilete-2019-acute-zoster
    design: Multicenter randomized double-blind placebo-controlled trial
    sampleSize: 98
    populationLabels:
      - acute herpes zoster
      - age older than 50 years
      - baseline pain at least 4 of 10
    comparator: Placebo plus the same background valaciclovir and as-needed analgesia
    route: Oral
    formulation: 300 mg gabapentin capsules
    durationDays: 35
    assessmentTime: Week 12
  result:
    measure: odds-ratio
    estimate: 2.59
    unit: ratio
    instrument: 10-point visual analogue scale; any pain greater than 0
    comparator: Placebo
    assessmentTime: Week 12
    population: Completers with week-12 pain data
    confidenceInterval:
      lower: 0.59
      upper: 11.28
      level: 95
  conceptId: postherpetic-neuralgia-pain
  name: Prevention of postherpetic neuralgia after acute shingles
  direction: Variable
  evidence: Human research
  description: Starting gabapentin within 72 hours of acute herpes-zoster rash did not reduce pain at 12 weeks and did not prevent PHN.
  sourceId: bulilete-2019
  population: 98 randomized; week-12 completer analysis included 33 gabapentin and 42 placebo participants
  exposure: 300 mg/day titrated toward 1800 mg/day for 5 weeks
  instrument: 10-point visual analogue scale
  magnitude: Any pain at week 12 occurred in 6/33 (18.2%) gabapentin versus 4/42 (9.5%) placebo; OR 2.59, 95% CI 0.59–11.28, p=0.144
  reportType: measured-assessment
  conflictingSourceIds: []
- id: gabapentin-focal-seizure-study-1
  study:
    id: neurontin-seizure-study-1
    design: Multicenter placebo-controlled double-blind parallel-group adjunctive trial
    sampleSize: 127
    populationLabels:
      - refractory partial-onset seizures
      - age 12 years and older
    comparator: Placebo added to established antiepileptic therapy
    route: Oral
    formulation: Neurontin immediate-release gabapentin
    durationDays: 84
    assessmentTime: 12-week treatment period
  conceptId: focal-seizure-frequency
  name: Focal-seizure responder rate at 1200 mg/day
  direction: Decreased
  evidence: Human research
  description: The label's first adult/adolescent adjunctive trial found a significantly higher proportion achieving at least a 50% reduction in seizure frequency with gabapentin.
  sourceId: neurontin-label-2026
  population: Patients with refractory partial seizures despite therapeutic antiepileptic-drug treatment
  exposure: 1200 mg/day in three divided doses
  instrument: Seizure-frequency diary; responder defined as at least 50% reduction from baseline
  magnitude: 23% (14/61) responders with gabapentin versus 9% (6/66) with placebo; response ratio −0.199 versus −0.044; both comparisons reported as statistically significant
  reportType: measured-assessment
  conflictingSourceIds: []
- id: gabapentin-focal-seizure-study-2
  study:
    id: neurontin-seizure-study-2
    design: Multicenter placebo-controlled double-blind parallel-group adjunctive dose-ranging trial
    sampleSize: 306
    populationLabels:
      - refractory partial-onset seizures
      - age 12 years and older
    comparator: Placebo added to established antiepileptic therapy
    route: Oral
    formulation: Neurontin immediate-release gabapentin
    durationDays: 84
    assessmentTime: 12-week treatment period
  conceptId: focal-seizure-frequency
  name: Dose-specific responder rates in adjunctive focal-seizure treatment
  direction: Variable
  evidence: Human research
  description: The 1200 mg/day and 600 mg/day responder-rate comparisons were not statistically significant, whereas 1800 mg/day was significantly superior to placebo, preserving an important dose-specific null result.
  sourceId: neurontin-label-2026
  population: Patients with refractory partial seizures
  exposure: 600, 1200, or 1800 mg/day
  instrument: Seizure-frequency diary; responder defined as at least 50% reduction from baseline
  magnitude: Responder rates were 17% at 600 mg/day, 16% at 1200 mg/day, 26% at 1800 mg/day, and 8% with placebo; 1200 mg/day response ratio −0.103 versus −0.022 placebo, p=0.224; the 1800 mg/day comparison was statistically significant
  reportType: measured-assessment
  conflictingSourceIds: []
- id: gabapentin-pediatric-focal-seizures
  study:
    id: neurontin-pediatric-seizure-study
    design: Placebo-controlled double-blind adjunctive trial
    sampleSize: 245
    populationLabels:
      - partial-onset seizures
      - age 3 to 12 years
    comparator: Placebo added to established antiepileptic therapy
    route: Oral
    formulation: Neurontin immediate-release gabapentin
    durationDays: 84
    assessmentTime: Treatment period
  conceptId: focal-seizure-frequency
  name: Pediatric focal-seizure response
  direction: Variable
  evidence: Human research
  description: Response ratio favored gabapentin significantly, but the conventional 50%-responder-rate endpoint did not significantly differ from placebo.
  sourceId: neurontin-label-2026
  population: Children aged 3–12 years with partial seizures
  exposure: 25–35 mg/kg/day
  instrument: Seizure-frequency assessment
  magnitude: Response ratio −0.146 with gabapentin versus −0.079 with placebo, statistically significant; responder rate 21% versus 18%, not statistically significant
  reportType: measured-assessment
  conflictingSourceIds: []
- id: gabapentin-cognition-epilepsy
  study:
    id: leach-1997-crossover
    design: Double-blind dose-ranging placebo-controlled crossover study
    sampleSize: 27
    populationLabels:
      - refractory partial seizures
    comparator: Matched placebo
    route: Oral
    formulation: Gabapentin, exact marketed formulation not established
    durationDays: 90
    assessmentTime: End of each 4-week dose step
  conceptId: cognitive-task-performance
  name: Psychomotor and memory performance in refractory epilepsy
  direction: Variable
  evidence: Human research
  description: Gabapentin did not measurably alter composite psychomotor or memory scores across the studied dose range, despite reducing seizure frequency and increasing drowsiness at the highest dose.
  sourceId: leach-1997
  population: 27 patients entered and 21 completed the crossover study
  exposure: 1200, 1800, and 2400 mg/day in three divided doses
  instrument: Composite psychomotor and memory testing
  magnitude: No significant gabapentin effect on composite psychomotor or memory scores; exact treatment-effect estimate and confidence interval not reported in the accessible abstract
  reportType: measured-assessment
  conflictingSourceIds: []
- id: gabapentin-cognition-healthy
  study:
    id: kay-2016-driving
    design: Phase-3 randomized double-blind placebo- and active-controlled four-period crossover study
    sampleSize: 59
    populationLabels:
      - healthy volunteers
    comparator: Placebo, with diphenhydramine and triazolam active-control conditions
    route: Oral
    formulation: Gabapentin, exact formulation not stated in the accessible abstract
    durationDays: 1
    assessmentTime: 6.5 hours after nighttime dosing
  conceptId: cognitive-task-performance
  name: Next-day cognition and simulated driving after low-dose gabapentin
  direction: Variable
  evidence: Human research
  description: Gabapentin was noninferior to placebo for standard deviation of lateral position and speed deviation but did not meet noninferiority for lane excursions; secondary sleepiness and cognitive endpoints generally supported little appreciable next-day impairment at this dose.
  sourceId: kay-2016
  population: 59 healthy volunteers
  exposure: Single 250 mg nighttime dose
  instrument: 100-km simulated driving scenario plus secondary cognition and sleepiness assessments
  magnitude: Noninferior to placebo for the primary lateral-position measure and speed deviation, but not for lane excursions; exact effect estimates and confidence intervals were not reported in the accessible abstract
  reportType: measured-assessment
  conflictingSourceIds: []
- id: gabapentin-rls-idiopathic
  study:
    id: garcia-borreguero-2002-rls
    design: Randomized double-blind placebo-controlled crossover study
    sampleSize: 24
    populationLabels:
      - restless legs syndrome
      - predominantly idiopathic RLS
    comparator: Placebo
    route: Oral
    formulation: Gabapentin, exact marketed formulation not stated in the accessible abstract
    durationDays: 42
    assessmentTime: End of each 6-week treatment period
  conceptId: restless-legs-symptoms
  name: Restless-legs symptoms and sleep measures
  direction: Decreased
  evidence: Human research
  description: Gabapentin reduced RLS symptoms across the reported clinical scales and reduced the periodic-leg-movement index while improving several polysomnographic sleep measures.
  sourceId: garcia-borreguero-2002
  population: 22 patients with idiopathic RLS and 2 with RLS secondary to iron deficiency
  exposure: Individualized oral gabapentin; mean effective dose 1855 mg/day at week 6
  instrument: RLS Rating Scale, Clinical Global Impression, pain analogue scale, Pittsburgh Sleep Quality Index, and overnight polysomnography
  magnitude: Significant improvement versus placebo was reported, but the accessible abstract does not provide a numerical treatment effect or confidence interval
  reportType: measured-assessment
  conflictingSourceIds: []
- id: gabapentin-rls-hemodialysis
  study:
    id: thorp-2001-rls
    design: Randomized double-blind placebo-controlled crossover study
    sampleSize: 16
    populationLabels:
      - hemodialysis
      - restless legs syndrome
    comparator: Placebo
    route: Oral
    formulation: Gabapentin, exact marketed formulation not stated in the accessible abstract
    durationDays: 42
    assessmentTime: End of each 6-week treatment period
  conceptId: restless-legs-symptoms
  name: RLS response in hemodialysis
  direction: Decreased
  evidence: Human research
  description: Among 13 completers, most responded during gabapentin but not placebo treatment.
  sourceId: thorp-2001
  population: 16 randomized hemodialysis patients with RLS; 13 completed
  exposure: 200–300 mg after each hemodialysis session
  instrument: null
  magnitude: 11 patients responded to gabapentin but not placebo, 1 responded to both, and 1 responded to placebo but not gabapentin; p<0.01
  reportType: measured-assessment
  conflictingSourceIds: []
- id: gabapentin-social-phobia
  study:
    id: pande-social-1999
    design: Randomized double-blind placebo-controlled parallel-group study
    sampleSize: 69
    populationLabels:
      - social phobia
    comparator: Placebo
    route: Oral
    formulation: Gabapentin, exact marketed formulation not stated in the accessible abstract
    durationDays: 98
    assessmentTime: End of 14-week treatment
  conceptId: anxiety-symptom-severity
  name: Social-phobia symptoms
  direction: Decreased
  evidence: Human research
  description: Clinician- and patient-rated social-phobia symptoms favored gabapentin over placebo in this patient-treatment trial.
  sourceId: pande-social-1999
  population: 69 patients with social phobia
  exposure: Flexible 900–3600 mg/day in three divided doses
  instrument: Clinician- and patient-rated social-phobia scales; exact scale names not specified in the accessible abstract
  magnitude: Significant benefit versus placebo, p<0.05; effect estimate and confidence interval not reported in the accessible abstract
  reportType: measured-assessment
  conflictingSourceIds:
    - pande-panic-2000
- id: gabapentin-panic-disorder
  study:
    id: pande-panic-2000
    design: Randomized double-blind placebo-controlled parallel-group study
    sampleSize: 103
    populationLabels:
      - panic disorder
    comparator: Placebo
    route: Oral
    formulation: Gabapentin, exact marketed formulation not stated in the accessible abstract
    durationDays: 56
    assessmentTime: End of 8-week treatment
  conceptId: anxiety-symptom-severity
  name: Panic-disorder symptoms
  direction: Variable
  evidence: Human research
  description: The prespecified overall analysis found no gabapentin-placebo difference; a favorable finding in patients with baseline PAS scores of at least 20 was post hoc.
  sourceId: pande-panic-2000
  population: 103 patients with panic disorder
  exposure: Flexible 600–3600 mg/day
  instrument: Panic and Agoraphobia Scale
  magnitude: Overall comparison p=0.606; post hoc severe-subgroup comparison p=0.04; effect estimates and confidence intervals not reported in the accessible abstract
  reportType: measured-assessment
  conflictingSourceIds:
    - pande-social-1999
```

## Mechanisms

```yaml
- title: α2δ calcium-channel-subunit binding
  description: Gabapentin binds with high affinity to the α2δ subunit of voltage-activated calcium channels in vitro. The current Neurontin label explicitly states that the relationship between this binding and gabapentin's antiepileptic or analgesic clinical effects is unknown; the binding observation therefore is not treated as proof of a clinical efficacy mechanism.
  sourceId: neurontin-label-2026
  conceptId: alpha2delta-vgcc
```

## Cautions

```yaml
- title: Somnolence, dizziness, ataxia, and impaired driving
  description: Controlled trials found increased somnolence and dizziness with gabapentin; in adjunctive epilepsy trials at doses up to 1800 mg/day, ataxia was reported in 13% versus 6% with placebo. The label warns that a patient's ability to drive or operate complex machinery should not be presumed unimpaired solely from self-assessment.
  sourceId: neurontin-label-2026
- title: Suicidal thoughts and behavior warning
  description: The antiepileptic-drug class warning is based on pooled placebo-controlled trials of 11 antiepileptic drugs, not a gabapentin-only estimate. The label reports an adjusted relative risk of 1.8 (95% CI 1.2–2.7), with suicidal behavior or ideation in 0.43% of antiepileptic-drug recipients versus 0.24% of placebo recipients, approximately one additional case per 530 treated patients.
  sourceId: neurontin-label-2026
- title: Respiratory depression
  description: Serious, life-threatening, and fatal respiratory depression has been reported when gabapentin is used with CNS depressants including opioids and in patients with underlying respiratory impairment. The label advises low-dose initiation where appropriate and monitoring for sedation and respiratory depression.
  sourceId: neurontin-label-2026
- title: Abrupt discontinuation and withdrawal
  description: Abrupt or rapid discontinuation can increase seizure risk and can produce withdrawal reactions. The Neurontin label recommends tapering over at least one week unless safety considerations require faster withdrawal; postmarketing withdrawal symptoms have often appeared within 48 hours after discontinuation.
  sourceId: neurontin-label-2026
- title: Misuse, abuse, dependence, and tolerance
  description: Postmarketing reports and published literature describe gabapentin misuse and abuse, particularly in people with polysubstance-use histories and sometimes at supratherapeutic or off-label doses. Dependence and withdrawal have also been reported. The MHRA strengthened gabapentinoid warnings in 2026 to emphasize addiction, dependence, withdrawal reactions, and tolerance.
  sourceId: mhra-2026
- title: Renal accumulation
  description: Because gabapentin is eliminated unchanged through the kidneys, impaired renal function can markedly prolong exposure. Dose adjustment is required for reduced creatinine clearance, and immediate-release Neurontin has specific post-hemodialysis supplemental dosing.
  sourceId: neurontin-label-2026
- title: Serious hypersensitivity reactions
  description: The Neurontin label warns about DRESS or multiorgan hypersensitivity as well as anaphylaxis and angioedema; these reactions can occur without the full classic constellation of rash, fever, or lymphadenopathy.
  sourceId: neurontin-label-2026
```

## Claims

```yaml
- id: gabapentin-alpha2delta-binding
  assertion: Gabapentin binds the α2δ subunit of voltage-activated calcium channels, but the current label does not establish that this binding alone explains clinical antiepileptic or analgesic efficacy.
  relation: target-binding-with-clinical-uncertainty
  participants:
    - entityId: substance:gabapentin
      role: substance
    - entityId: tag:alpha2delta-vgcc
      role: target
  context: Current U.S. prescribing information
  sourceIds:
    - neurontin-label-2026
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: The binding observation is mechanistic pharmacology and should not be converted into a clinical-effect magnitude.
- id: gabapentin-anxiolysis-boundary
  assertion: Patient anxiety-disorder trials do not support a universal anxiolysis claim for gabapentin and do not establish anxiolytic effects in healthy people.
  relation: evidence-boundary
  participants:
    - entityId: substance:gabapentin
      role: substance
    - entityId: tag:anxiety
      role: outcome-context
  context: A social-phobia randomized trial favored gabapentin, whereas the overall panic-disorder randomized analysis was null and its positive severe-subgroup result was post hoc.
  sourceIds:
    - pande-social-1999
    - pande-panic-2000
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: The trials enrolled patients with specific anxiety disorders; neither was a healthy-volunteer anxiolysis trial.
- id: gabapentin-gralise-noninterchangeability
  assertion: Gralise should not be substituted dose-for-dose for other gabapentin products because its pharmacokinetic profile and dosing frequency differ.
  relation: formulation-specific-pharmacokinetics
  participants:
    - entityId: substance:gabapentin
      role: active-ingredient
    - entityId: tag:gastroretentive-formulation
      role: formulation
  context: U.S. Gralise prescribing information
  sourceIds:
    - gralise-label-2026
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: This is a product-specific labeling statement, not evidence that the active parent molecule differs chemically.
- id: gabapentin-rls-regulatory-boundary
  assertion: The parent-gabapentin RLS trials in this record are research or off-label treatment evidence rather than a current U.S. Neurontin or Gralise RLS indication.
  relation: regulatory-evidence-boundary
  participants:
    - entityId: substance:gabapentin
      role: substance
    - entityId: tag:restless-legs-symptoms
      role: outcome-context
  context: Current U.S. parent-gabapentin labels compared with parent-gabapentin RLS trials
  sourceIds:
    - neurontin-label-2026
    - gralise-label-2026
    - garcia-borreguero-2002
    - thorp-2001
    - disco-rls
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Regulatory indications are jurisdiction- and formulation-specific; this claim addresses the cited current U.S. parent-gabapentin labels only.
```

## Interactions

```yaml
- id: gabapentin-antacid
  name: Aluminum- and magnesium-containing antacids
  otherSlug: null
  summary: Co-administration with an aluminum hydroxide/magnesium hydroxide antacid reduced mean gabapentin bioavailability by about 20%. The Neurontin label recommends taking gabapentin at least 2 hours after such an antacid.
  sourceId: neurontin-label-2026
  mechanism: Reduced oral gabapentin absorption
  context: Maalox containing aluminum hydroxide and magnesium hydroxide
  conflictingSourceIds: []
- id: gabapentin-opioids
  name: Opioids
  otherSlug: null
  targetClassId: opioid
  summary: Opioid co-use can increase CNS and respiratory depression risk. In a 12-subject interaction study, controlled-release morphine 60 mg given 2 hours before gabapentin 600 mg increased mean gabapentin AUC by 44%; the label recommends monitoring for somnolence, sedation, and respiratory depression.
  sourceId: neurontin-label-2026
  mechanism: Pharmacodynamic CNS/respiratory depression plus a documented morphine-associated increase in gabapentin exposure
  context: Concomitant opioid treatment; morphine pharmacokinetic study
  conflictingSourceIds: []
- id: gabapentin-other-cns-depressants
  name: Other CNS depressants
  otherSlug: null
  summary: Concomitant CNS depressants can add to sedation and respiratory-depression risk, particularly in patients with additional respiratory risk factors.
  sourceId: neurontin-label-2026
  mechanism: Additive CNS and respiratory depression
  context: Concomitant CNS-depressant therapy
  conflictingSourceIds: []
```

## Experience links

```yaml
- title: Gabapentin on PsychonautWiki
  url: https://psychonautwiki.org/wiki/Gabapentin
  publisher: PsychonautWiki
```

## References

```yaml
- id: pubchem
  title: Gabapentin | C9H17NO2 | CID 3446 - PubChem
  authors: National Center for Biotechnology Information, PubChem
  year: 2026
  url: https://pubchem.ncbi.nlm.nih.gov/compound/3446
  kind: Chemical database
  insight: Source for parent-compound identity, molecular formula, molecular weight, PubChem CID, and connectivity structure.
  limitation: Dynamic database record; the year is the retrieval year. Chemical identity does not establish clinical formulation, efficacy, safety, or product quality.
  funding: U.S. National Library of Medicine database; study funding is not applicable.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not applicable to a chemical database record; not formally assessed.
  conflictOfInterestStatus: not-assessed
- id: neurontin-label-2026
  title: "These highlights do not include all the information needed to use NEURONTIN safely and effectively. See full prescribing information for NEURONTIN. NEURONTIN® (gabapentin) capsules, for oral use; NEURONTIN® (gabapentin) tablets, for oral use; NEURONTIN® (gabapentin) oral solution. Initial U.S. Approval: 1993"
  authors: Viatris Specialty LLC
  year: 2026
  url: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=97935fd9-1d4a-43b6-a5d9-de994591187b
  kind: Official U.S. prescribing label
  insight: Current labeled indications, dosing, renal adjustment, pivotal seizure and PHN evidence, adverse reactions, suicidality warning, respiratory depression, withdrawal, abuse/dependence, interactions, mechanism, and pharmacokinetics.
  limitation: Product labeling summarizes evidence selected for regulatory purposes and does not replace primary-study appraisal. Half-life values are population-specific rather than universal.
  funding: Manufacturer prescribing information hosted by U.S. National Library of Medicine DailyMed; individual-study funding is not assessed by this reference.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not applicable as an author conflict-of-interest disclosure; not assessed.
  conflictOfInterestStatus: not-assessed
- id: gralise-label-2026
  title: "These highlights do not include all the information needed to use GRALISE safely and effectively. See full prescribing information for GRALISE. GRALISE® (gabapentin) tablets, for oral use. Initial U.S. Approval: 1993"
  authors: Almatica Pharma LLC
  year: 2026
  url: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=466273b1-c9fc-3930-c94b-aa11394d5140
  kind: Official U.S. prescribing label
  insight: Gralise PHN indication, 1800 mg once-daily titration, renal restrictions, food dependence, gastroretentive pharmacokinetics, saturable proximal-small-bowel absorption, and non-substitutability with other gabapentin products.
  limitation: Formulation-specific label; Gralise results cannot be assumed to apply dose-for-dose to immediate-release gabapentin.
  funding: Manufacturer prescribing information hosted by U.S. National Library of Medicine DailyMed; individual-study funding is not assessed by this reference.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not applicable as an author conflict-of-interest disclosure; not assessed.
  conflictOfInterestStatus: not-assessed
- id: rowbotham-1998
  title: "Gabapentin for the Treatment of Postherpetic Neuralgia: A Randomized Controlled Trial"
  authors: Michael Rowbotham; Norman Harden; Brett Stacey; Paula Bernstein; Leslie Magnus-Miller; Gabapentin Postherpetic Neuralgia Study Group
  year: 1998
  pmid: "9846778"
  doi: 10.1001/jama.280.21.1837
  url: https://pubmed.ncbi.nlm.nih.gov/9846778/
  kind: Randomized double-blind placebo-controlled clinical trial
  insight: Eight-week PHN trial with 229 randomized participants; average daily pain fell more with gabapentin titrated to a maximum of 3600 mg/day than with placebo.
  limitation: The trial predates modern reporting standards; no confidence interval for the primary treatment difference was located in the accessible result. The efficacy table used 109 gabapentin and 116 placebo participants rather than all 229 randomized participants.
  funding: Funding was not established from the inspected accessible article page.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Author affiliations explicitly identify Paula Bernstein and Leslie Magnus-Miller with Parke-Davis departments.
  conflictOfInterestStatus: declared
  disclosureUrl: https://jamanetwork.com/journals/jama/fullarticle/188226
- id: rice-maton-2001
  title: "Gabapentin in postherpetic neuralgia: a randomised, double blind, placebo controlled study."
  authors: A. S. C. Rice; S. Maton; Postherpetic Neuralgia Study Group
  year: 2001
  pmid: "11690735"
  doi: 10.1016/S0304-3959(01)00407-9
  url: https://pubmed.ncbi.nlm.nih.gov/11690735/
  kind: Randomized double-blind placebo-controlled clinical trial
  insight: Seven-week, 334-participant PHN trial reporting dose-specific pain reductions and 95% confidence intervals at 1800 and 2400 mg/day.
  limitation: Accessible PubMed material did not provide full funding or conflict disclosures or the randomized count within each active-dose arm.
  funding: Not assessed from an accessible full disclosure.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed from an accessible full disclosure.
  conflictOfInterestStatus: not-assessed
- id: wallace-2010
  title: "Gabapentin extended-release tablets for the treatment of patients with postherpetic neuralgia: a randomized, double-blind, placebo-controlled, multicentre study."
  authors: Mark S. Wallace; Gordon Irving; Verne E. Cowles
  year: 2010
  pmid: "20818838"
  doi: 10.2165/11539520-000000000-00000
  url: https://pubmed.ncbi.nlm.nih.gov/20818838/
  kind: Randomized double-blind placebo-controlled multicenter trial
  insight: A 407-participant trial of 1800 mg/day extended-release gabapentin whose prespecified BOCF primary pain endpoint was null for both once-daily and divided dosing.
  limitation: Some secondary LOCF endpoints favored once-daily treatment despite the primary null result; those secondary analyses should not replace the prespecified primary conclusion.
  funding: Depomed, Inc. funded the study, designed it, directed data analysis, and participated with investigators and Solvay in data collection, interpretation, manuscript preparation, and publication decisions.
  sponsorshipStatus: industry-funded
  conflictsOfInterest: Wallace reported research support from Depomed; Irving reported Depomed advisory-board and speakers-bureau relationships among other industry relationships; Cowles was a Depomed employee who owned stock and options.
  conflictOfInterestStatus: declared
  disclosureUrl: https://doi.org/10.2165/11539520-000000000-00000
- id: rauck-2013
  title: "Once-daily gastroretentive gabapentin for postherpetic neuralgia: integrated efficacy, time to onset of pain relief and safety analyses of data from two phase 3, multicenter, randomized, double-blind, placebo-controlled studies."
  authors: Richard L. Rauck; Gordon A. Irving; Mark S. Wallace; Geertrui F. Vanhove; Michael Sweeney
  year: 2013
  pmid: "23149085"
  doi: 10.1016/j.jpainsymman.2012.07.011
  url: https://pubmed.ncbi.nlm.nih.gov/23149085/
  kind: Integrated analysis of two randomized phase-3 trials
  insight: Integrated 721-participant analysis found greater week-10 pain reduction and responder rates with gastroretentive gabapentin 1800 mg once daily than placebo.
  limitation: This is an integrated analysis of two component trials rather than an entirely independent cohort; cross-publication cohort overlap must not be double-counted.
  funding: The study was supported by Depomed, Inc.
  sponsorshipStatus: industry-funded
  conflictsOfInterest: Sweeney was a Depomed employee with stock and options; Vanhove was a former Depomed employee; Rauck and Wallace served as Depomed consultants, Rauck as a speaker, and Irving reported Depomed advisory-board and speakers-bureau compensation as well as other industry relationships.
  conflictOfInterestStatus: declared
  disclosureUrl: https://www.jpsmjournal.com/article/S0885-3924(12)00397-1/fulltext
- id: bulilete-2019
  title: "Efficacy of gabapentin for the prevention of postherpetic neuralgia in patients with acute herpes zoster: A double blind, randomized controlled trial."
  authors: Oana Bulilete; Alfonso Leiva; Manuel Rullán; Antonia Roca; Joan Llobera; PHN Group
  year: 2019
  pmid: "31166976"
  doi: 10.1371/journal.pone.0217335
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC6550400/
  kind: Randomized double-blind placebo-controlled multicenter trial
  insight: Gabapentin begun within 72 hours of acute shingles did not prevent pain at week 12; the reported completer OR for any pain was 2.59 with a wide 95% CI of 0.59–11.28.
  limitation: Recruitment fell below the initially estimated sample size; attrition was greater with gabapentin, only a minority reached 1800 mg/day, and the prevention question is distinct from treatment of established PHN.
  funding: Funding disclosure was not fully assessed in this extraction.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: The authors declared that no competing interests existed.
  conflictOfInterestStatus: none-declared
  disclosureUrl: https://pmc.ncbi.nlm.nih.gov/articles/PMC6550400/
- id: leach-1997
  title: "Gabapentin and cognition: a double blind, dose ranging, placebo controlled study in refractory epilepsy."
  authors: J. P. Leach; J. Girvan; A. Paul; M. J. Brodie
  year: 1997
  pmid: "9120451"
  doi: 10.1136/jnnp.62.4.372
  url: https://pubmed.ncbi.nlm.nih.gov/9120451/
  kind: Double-blind placebo-controlled dose-ranging crossover trial
  insight: In refractory partial epilepsy, gabapentin reduced seizure frequency without measurable composite psychomotor or memory impairment, while drowsiness increased at 2400 mg/day.
  limitation: Only 27 patients entered and 21 completed; cognition was tested in epilepsy patients receiving adjunctive treatment rather than healthy people.
  funding: Not assessed from an accessible full disclosure.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed from an accessible full disclosure.
  conflictOfInterestStatus: not-assessed
- id: garcia-borreguero-2002
  title: "Treatment of restless legs syndrome with gabapentin: a double-blind, cross-over study."
  authors: D. Garcia-Borreguero; O. Larrosa; Y. de la Llave; K. Verger; X. Masramon; G. Hernandez
  year: 2002
  pmid: "12451200"
  doi: 10.1212/wnl.59.10.1573
  url: https://pubmed.ncbi.nlm.nih.gov/12451200/
  kind: Randomized double-blind placebo-controlled crossover trial
  insight: Twenty-four RLS patients underwent gabapentin and placebo periods; clinical scales, periodic leg movements, and sleep architecture favored gabapentin, with a mean effective dose of 1855 mg/day at week 6.
  limitation: Small crossover trial; the accessible abstract does not provide numerical between-group treatment effects or confidence intervals.
  funding: Not assessed from an accessible full disclosure.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed from an accessible full disclosure.
  conflictOfInterestStatus: not-assessed
- id: thorp-2001
  title: A crossover study of gabapentin in treatment of restless legs syndrome among hemodialysis patients.
  authors: M. L. Thorp; C. D. Morris; S. P. Bagby
  year: 2001
  pmid: "11431189"
  doi: 10.1053/ajkd.2001.25202
  url: https://pubmed.ncbi.nlm.nih.gov/11431189/
  kind: Randomized double-blind placebo-controlled crossover trial
  insight: In hemodialysis-associated RLS, 11 of 13 completers responded to gabapentin but not placebo after 200–300 mg following dialysis sessions.
  limitation: Very small study with only 13 completers; two participants withdrew because of lethargy and one died from myocardial infarction. Exact response-scale details are not reported in the accessible abstract.
  funding: Not assessed from an accessible full disclosure.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed from an accessible full disclosure.
  conflictOfInterestStatus: not-assessed
- id: disco-rls
  title: DIalysis Symptom COntrol-Restless Legs Syndrome Trial
  authors: Population Health Research Institute
  year: 2022
  url: https://clinicaltrials.gov/study/NCT03806530
  kind: ClinicalTrials.gov registry record
  insight: Completed phase-3 crossover trial in hemodialysis-associated RLS comparing gabapentin, ropinirole, their combination, and matched placebos; registry enrollment is 52 and the primary endpoint is the IRLS.
  limitation: The registry record reports no posted results; registry presence and completion do not establish efficacy. A 2020 protocol planned 72 participants, whereas the later registry record reports 52 enrolled.
  funding: Lead sponsor is Population Health Research Institute; funding source was not independently assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Registry record does not provide a complete publication-style conflict disclosure.
  conflictOfInterestStatus: not-assessed
- id: kay-2016
  title: "Next-day residual effects of gabapentin, diphenhydramine, and triazolam on simulated driving performance in healthy volunteers: a phase 3, randomized, double-blind, placebo-controlled, crossover trial."
  authors: Gary G. Kay; Howard I. Schwartz; Mark A. Wingertzahn; Shyamalie Jayawardena; Russell P. Rosenberg
  year: 2016
  pmid: "27018419"
  doi: 10.1002/hup.2530
  url: https://pubmed.ncbi.nlm.nih.gov/27018419/
  kind: Randomized double-blind placebo- and active-controlled crossover trial
  insight: In 59 healthy volunteers, 250 mg gabapentin showed little appreciable next-day impairment on most driving and cognitive measures but failed noninferiority on lane excursions.
  limitation: Single low dose with testing 6.5 hours later; this cannot establish cognitive enhancement, absence of impairment at higher doses, chronic effects, or anxiolysis.
  funding: Not assessed from an accessible full disclosure.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed from an accessible full disclosure.
  conflictOfInterestStatus: not-assessed
- id: pande-social-1999
  title: "Treatment of social phobia with gabapentin: a placebo-controlled study."
  authors: A. C. Pande; J. R. Davidson; J. W. Jefferson; C. A. Janney; D. J. Katzelnick; R. H. Weisler; J. H. Greist; S. M. Sutherland
  year: 1999
  pmid: "10440462"
  doi: 10.1097/00004714-199908000-00010
  url: https://pubmed.ncbi.nlm.nih.gov/10440462/
  kind: Randomized double-blind placebo-controlled clinical trial
  insight: Sixty-nine social-phobia patients received flexible gabapentin 900–3600 mg/day or placebo for 14 weeks; clinician- and patient-rated symptoms favored gabapentin.
  limitation: Accessible abstract reports p<0.05 but no effect estimate or confidence interval; the patient population does not support a healthy-person anxiolysis claim.
  funding: Not assessed from an accessible full disclosure.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed from an accessible full disclosure.
  conflictOfInterestStatus: not-assessed
- id: pande-panic-2000
  title: Placebo-controlled study of gabapentin treatment of panic disorder.
  authors: A. C. Pande; M. H. Pollack; J. Crockatt; M. Greiner; G. Chouinard; R. B. Lydiard; C. B. Taylor; S. R. Dager; T. Shiovitz
  year: 2000
  pmid: "10917408"
  doi: 10.1097/00004714-200008000-00011
  url: https://pubmed.ncbi.nlm.nih.gov/10917408/
  kind: Randomized double-blind placebo-controlled clinical trial
  insight: In 103 panic-disorder patients, the overall Panic and Agoraphobia Scale comparison was null at p=0.606; a positive PAS-at-least-20 subgroup analysis was post hoc.
  limitation: The favorable subgroup was post hoc and should not replace the null overall result; no effect estimate or confidence interval is reported in the accessible abstract.
  funding: Not assessed from an accessible full disclosure.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed from an accessible full disclosure.
  conflictOfInterestStatus: not-assessed
- id: wiffen-2017
  title: Gabapentin for chronic neuropathic pain in adults.
  authors: Philip J. Wiffen; Sheena Derry; Rae F. Bell; Andrew S. C. Rice; Thomas Rudolf Tölle; Tudor Phillips; R. Andrew Moore
  year: 2017
  pmid: "28597471"
  doi: 10.1002/14651858.CD007938.pub4
  url: https://pubmed.ncbi.nlm.nih.gov/28597471/
  kind: Cochrane systematic review
  insight: Systematic review used to locate randomized gabapentin neuropathic-pain trials and characterize evidence quality and common adverse events.
  limitation: The review's pooled literature includes both parent gabapentin and gabapentin enacarbil in parts of its evidence base; pooled estimates are therefore not imported here as parent-only effects.
  funding: Not assessed from the disclosure in this extraction.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed from the disclosure in this extraction.
  conflictOfInterestStatus: not-assessed
- id: ema-neurontin-referral
  title: Neurontin - referral
  authors: European Medicines Agency
  year: 2006
  url: https://www.ema.europa.eu/en/medicines/human/referrals/neurontin
  kind: Official regulatory referral
  insight: Documents European harmonization of nationally authorized Neurontin/gabapentin indications involving epilepsy and pain.
  limitation: Historical Article 30 harmonization referral rather than a current centralized EU marketing authorization; current country-specific product information should be checked before assigning jurisdiction-specific indications.
  funding: Official regulatory source; study funding is not applicable.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not applicable to an official regulatory record; not formally assessed.
  conflictOfInterestStatus: not-assessed
- id: mhra-2026
  title: Improving Information Supplied with Gabapentinoids (Pregabalin/Gabapentin), Benzodiazepines and Z-Drugs
  authors: Medicines and Healthcare products Regulatory Agency
  year: 2026
  url: https://www.gov.uk/drug-safety-update/improving-information-supplied-with-gabapentinoids-pregabalin-slash-gabapentin-benzodiazepines-and-z-drugs
  kind: Official drug-safety communication
  insight: January 2026 MHRA review strengthened warnings about addiction, dependence, withdrawal, and tolerance for gabapentinoids and advised planned reduction or discontinuation strategies.
  limitation: Class-level safety communication covering several medicines; only statements explicitly applicable to gabapentin are used here.
  funding: UK government regulatory source; study funding is not applicable.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not applicable to an official regulatory communication; not formally assessed.
  conflictOfInterestStatus: not-assessed
- id: home-office-2019
  title: Control of pregabalin and gabapentin under the Misuse of Drugs Act 1971
  authors: UK Home Office
  year: 2019
  url: https://www.gov.uk/government/publications/circular-0192018-control-of-pregabalin-and-gabapentin-under-the-misuse-of-drugs-act-1971/control-of-pregabalin-and-gabapentin-under-the-misuse-of-drugs-act-1971
  kind: Official legal and regulatory notice
  insight: Documents the 1 April 2019 classification of gabapentin as a Class C drug and placement in Schedule 3 of the Misuse of Drugs Regulations 2001 in Great Britain.
  limitation: Jurisdiction-specific legal source; it does not establish legal status outside the covered UK framework.
  funding: UK government source; study funding is not applicable.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not applicable to an official legal notice; not formally assessed.
  conflictOfInterestStatus: not-assessed
- id: psychonautwiki
  title: "Gabapentin: PsychonautWiki dose and duration data"
  authors: PsychonautWiki contributors
  year: 2026
  url: https://psychonautwiki.org/wiki/Gabapentin
  kind: Community wiki data · CC BY 4.0
  insight: Source of this page's community dose bands and subjective duration ranges, from the PsychonautWiki API snapshot built about 2026-06-23 and retrieved 2026-11-06. The structured data is used under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/); BHWiki normalized unit symbols and route names.
  limitation: "PsychonautWiki states: \"PW's dosage information is gathered from users and resources for educational purposes only. It is not a recommendation and should be verified with other sources for accuracy.\" Its dose and duration values carry no per-value citations."
```

## Legal

```yaml
- jurisdiction: United States
  activity: Federal controlled-substance scheduling
  status: The current Neurontin prescribing information states that gabapentin is not a controlled substance.
  sourceUrl: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=97935fd9-1d4a-43b6-a5d9-de994591187b
  asOf: 2026-10-16
- jurisdiction: Great Britain
  activity: Controlled-drug classification, prescribing, possession, and supply
  status: Gabapentin has been a Class C controlled drug under the Misuse of Drugs Act 1971 and a Schedule 3 drug under the Misuse of Drugs Regulations 2001 since 1 April 2019; the cited Home Office circular specifies the associated regulatory controls.
  sourceUrl: https://www.gov.uk/government/publications/circular-0192018-control-of-pregabalin-and-gabapentin-under-the-misuse-of-drugs-act-1971/control-of-pregabalin-and-gabapentin-under-the-misuse-of-drugs-act-1971
  asOf: 2026-10-16
```

