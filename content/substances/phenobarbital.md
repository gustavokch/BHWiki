---
slug: phenobarbital
name: Phenobarbital
subtitle: Long-acting barbiturate antiseizure medicine with marked interaction, dependence, and respiratory-depression liabilities.
aliases: []
formula: C12H12N2O3
molecularWeight: 232.23 g/mol
pubchemCid: 4763
smiles: CCC1(C(=O)NC(=O)NC1=O)C2=CC=CC=C2
category: Depressant
tags:
  - depressant
accent: "#c3b093"
reviewedAt: 2026-10-16
editorialStatus: sourced-draft
halfLife:
  label: 53–118 hours in adults; mean 79 hours
  low: 53
  high: 118
  context: Plasma elimination half-life reported in the current U.S. oral phenobarbital tablet label; neonatal and pediatric elimination is generally longer and more variable.
  sourceId: dailymed-phenobarbital-tablets
  observationId: phenobarbital-pk-adult-label
kinetics:
  onset: Oral onset of action is one hour or longer in the tablet label.
  peak: Not established for oral tablets in the cited current label.
  duration: Label-described pharmacologic duration of action is 10–12 hours; this is not a participant-rated felt duration and is distinct from the much longer plasma elimination half-life.
  bioavailability: Oral absolute bioavailability is not established in the cited current label; a separate seven-person healthy-volunteer study found about 90% relative bioavailability for rectal phenobarbital sodium solution versus intramuscular administration.
  metabolism: Hepatic microsomal metabolism; the neonatal label identifies CYP2C9 as primary with lesser CYP2C19, CYP2E1 and UGT involvement, while the oral label reports substantial unchanged urinary excretion.
  sourceId: dailymed-phenobarbital-tablets
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
x-order: 245
---

## Summary

Phenobarbital is a long-acting barbiturate CNS depressant and antiseizure medicine. Its identity is PubChem CID 4763, C12H12N2O3, 232.23 g/mol. In current U.S. regulatory records, SEZABY phenobarbital sodium injection is an NDA-approved Schedule IV product indicated for neonatal seizures in term and preterm infants, while a current oral phenobarbital tablet SPL lists generalized and partial seizures as anticonvulsant indications but DailyMed identifies that tablet record's approval type as "unapproved drug other." [pubchem][dailymed-sezaby][fda-sezaby-approval][dailymed-phenobarbital-tablets]

Phenobarbital has unusually long elimination relative to its label-described 10–12-hour pharmacologic duration: the oral label reports an adult plasma half-life of 53–118 hours, mean 79 hours, while neonatal elimination can approach a week and varies with maturation and critical-care factors. Its clinically important liabilities include sedation, respiratory depression, accumulation, enzyme induction, multiple drug interactions, tolerance, physical dependence and potentially life-threatening withdrawal after prolonged exposure. [dailymed-phenobarbital-tablets][dailymed-sezaby][thibault2021]

## Description

Phenobarbital is 5-ethyl-5-phenylbarbituric acid and acts as a barbiturate CNS depressant. The current neonatal prescribing information states that its precise antiseizure mechanism is not fully understood but is thought to involve potentiation of synaptic inhibition through GABAA receptors. Phenobarbital also induces hepatic drug-metabolizing enzymes; controlled healthy-volunteer work demonstrates increased metabolic clearance of a probe drug after repeated phenobarbital exposure, supporting clinically meaningful enzyme induction in humans. [dailymed-sezaby][dailymed-phenobarbital-tablets][thompson1996]

The evidence base needs regulatory context. SEZABY received U.S. marketing approval on November 17, 2022 for treatment of neonatal seizures in term and preterm infants. Its current label uses intravenous loading followed by short maintenance treatment and includes a boxed warning for concomitant opioid use as well as warnings about dependence and withdrawal when treatment is extended beyond the recommended neonatal course. Current oral phenobarbital tablet labeling describes anticonvulsant use in generalized and partial seizures, but the particular DailyMed tablet record cited here is not presented as an FDA-approved NDA product. [fda-sezaby-approval][dailymed-sezaby][dailymed-phenobarbital-tablets]

## Evidence note

Patient-treatment evidence, healthy-volunteer measurements, pharmacokinetic measurements, and subjective experience are kept separate here. The strongest contemporary neonatal efficacy result used is the blinded NEOLEV2 randomized trial: among its modified intention-to-treat participants, 24-hour EEG-confirmed seizure freedom occurred in 80% of phenobarbital-assigned neonates versus 28% of levetiracetam-assigned neonates, although the phenobarbital arm was small and the investigators explicitly called for definitive studies with long-term outcomes. The subsequently approved SEZABY indication and dosage are taken from current U.S. prescribing information rather than inferred from that trial alone. [sharpe2020][ctgov-neolev2][dailymed-sezaby]

Healthy-volunteer evidence cited here addresses pharmacokinetics and enzyme induction, not therapeutic efficacy. A seven-person crossover study measured approximately 112–113-hour half-lives after intramuscular and rectal phenobarbital sodium, while a separate controlled volunteer study demonstrated enzyme induction during repeated oral exposure. Neither primary study supplies a validated participant-rated "felt duration" estimate. Accordingly, the oral label's 10–12-hour "duration of action" is not treated as a subjective experiential duration, and the multi-day serum half-life is not treated as the length of consciously perceived drug effects. [graves1989][thompson1996][dailymed-phenobarbital-tablets]

Therapeutic drug monitoring is context-dependent rather than reducible here to one universal concentration target. The current oral label directs clinicians to use clinical-laboratory reference values for therapeutic anticonvulsant levels; a specialized ECMO pharmacokinetic study used 20–40 mg/L as its study target and strongly recommended monitoring during renal replacement therapy. That specialized target is therefore preserved as a study-specific goal rather than generalized to every patient. [dailymed-phenobarbital-tablets][thibault2021]

## Doses

```yaml
- label: Adult oral anticonvulsant dosage
  amount: 60–200 mg/day
  quantity: null
  quantityMax: null
  unit: mg/day
  ingredient: Phenobarbital
  formulation: Tablet
  route: Oral
  frequency: Individualized daily regimen
  duration: Ongoing treatment as clinically indicated
  population: Adults treated for labeled anticonvulsant indications in the cited tablet SPL
  purpose: Seizure treatment
  sourceCategory: approved-label
  note: The current DailyMed tablet SPL lists generalized and partial seizures but identifies this product record's approval type as "unapproved drug other"; dosage must be individualized.
  sourceId: dailymed-phenobarbital-tablets
- label: Pediatric oral anticonvulsant maintenance context
  amount: 3–6 mg/kg/day
  quantity: null
  quantityMax: null
  unit: mg/kg/day
  ingredient: Phenobarbital
  formulation: Tablet-label dosing information
  route: Oral
  frequency: Individualized daily regimen
  duration: Ongoing treatment as clinically indicated
  population: Pediatric patients
  purpose: Seizure treatment
  sourceCategory: reference
  note: The oral label directs individualization by age, weight and clinical condition and use of the clinical laboratory's reference values when interpreting anticonvulsant serum concentrations.
  sourceId: dailymed-phenobarbital-tablets
- label: Infant and child anticonvulsant loading context
  amount: 15–20 mg/kg
  quantity: null
  quantityMax: null
  unit: mg/kg
  ingredient: Phenobarbital
  formulation: Tablet-label anticonvulsant dosing information
  route: Oral
  frequency: Loading-dose context
  duration: Initial loading
  population: Infants and children
  purpose: Seizure treatment
  sourceCategory: reference
  note: The cited oral label reports this loading range as producing a phenobarbital blood concentration of about 20 mcg/mL shortly after administration; it does not establish that concentration as a universal treatment target.
  sourceId: dailymed-phenobarbital-tablets
- label: SEZABY initial neonatal loading dose
  amount: 20 mg/kg
  quantity: null
  quantityMax: null
  unit: mg/kg
  ingredient: Phenobarbital sodium
  formulation: Powder for solution after reconstitution
  route: Intravenous
  frequency: One loading infusion over 15 minutes
  duration: Initial treatment
  population: Term and preterm infants with neonatal seizures
  purpose: FDA-approved neonatal seizure treatment
  sourceCategory: approved-label
  note: Administered by IV infusion over 15 minutes; the label permits a second loading dose only when clinically indicated and at least 15 minutes after completion of the first infusion.
  sourceId: dailymed-sezaby
- label: SEZABY second neonatal loading dose
  amount: 10–20 mg/kg preterm; 20 mg/kg term
  quantity: null
  quantityMax: null
  unit: mg/kg
  ingredient: Phenobarbital sodium
  formulation: Powder for solution after reconstitution
  route: Intravenous
  frequency: Optional second loading infusion over 15 minutes
  duration: Acute seizure treatment
  population: Preterm or term infants with persistent or recurrent neonatal seizures
  purpose: FDA-approved neonatal seizure treatment
  sourceCategory: approved-label
  note: The maximum total loading dose in the current label is 40 mg/kg.
  sourceId: dailymed-sezaby
- label: SEZABY neonatal maintenance dosage
  amount: 4.5 mg/kg/day
  quantity: null
  quantityMax: null
  unit: mg/kg/day
  ingredient: Phenobarbital sodium
  formulation: Reconstituted intravenous injection
  route: Intravenous
  frequency: 1.5 mg/kg every 8 hours or 2.25 mg/kg every 12 hours
  duration: Up to 5 days
  population: Term and preterm infants treated for neonatal seizures
  purpose: FDA-approved neonatal seizure maintenance treatment
  sourceCategory: approved-label
  note: Maintenance starts 8–12 hours after the first loading dose; longer exposure changes the dependence and withdrawal context addressed elsewhere in this article.
  sourceId: dailymed-sezaby
- label: Threshold dose
  amount: 25 mg
  quantity: 25
  quantityMax: null
  unit: mg
  ingredient: Phenobarbital
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
  amount: 50–100 mg
  quantity: 50
  quantityMax: 100
  unit: mg
  ingredient: Phenobarbital
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
  amount: 100–150 mg
  quantity: 100
  quantityMax: 150
  unit: mg
  ingredient: Phenobarbital
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
  amount: 150–300 mg
  quantity: 150
  quantityMax: 300
  unit: mg
  ingredient: Phenobarbital
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
- id: phenobarbital-pk-adult-label
  analyte: Phenobarbital
  route: Oral
  formulation: Tablet
  population: Adults
  endpoint: elimination-half-life
  statistic: reported-range
  value: 79
  low: 53
  high: 118
  unit: hours
  context: The current oral tablet label reports a plasma half-life range of 53–118 hours with a mean of 79 hours. Its separately stated 10–12-hour duration of action should not be substituted for this elimination half-life.
  sourceId: dailymed-phenobarbital-tablets
  modelEligible: true
- id: phenobarbital-pk-pediatric-label
  analyte: Phenobarbital
  route: Systemic
  formulation: Phenobarbital
  population: Children and newborn infants younger than 48 hours as grouped by the cited tablet label
  endpoint: elimination-half-life
  statistic: reported-range
  value: 110
  low: 60
  high: 180
  unit: hours
  context: The tablet label reports 60–180 hours with a mean of 110 hours for its combined children/newborn-infant wording; the grouping limits age-specific interpretation.
  sourceId: dailymed-phenobarbital-tablets
  modelEligible: true
- id: phenobarbital-pk-neonatal-sezaby
  analyte: Phenobarbital
  route: Intravenous
  formulation: Phenobarbital sodium
  population: Neonates
  endpoint: elimination-half-life
  statistic: approximate
  value: 168
  low: null
  high: null
  unit: hours
  context: The current SEZABY label summarizes published literature as reporting an elimination half-life of approximately one week in neonates and notes negligible CYP2C9 expression at birth as a contributor to longer neonatal elimination.
  sourceId: dailymed-sezaby
  modelEligible: true
- id: phenobarbital-pk-healthy-im
  analyte: Phenobarbital
  route: Intramuscular
  formulation: Phenobarbital sodium parenteral solution
  population: Seven healthy adult volunteers
  endpoint: elimination-half-life
  statistic: study-mean
  value: 112
  low: null
  high: null
  unit: hours
  context: Healthy volunteers received 5 mg/kg intramuscular phenobarbital sodium and were sampled over 288 hours in a crossover bioavailability study.
  sourceId: graves1989
  modelEligible: true
- id: phenobarbital-pk-healthy-rectal
  analyte: Phenobarbital
  route: Rectal
  formulation: Phenobarbital sodium parenteral solution administered rectally
  population: Seven healthy adult volunteers
  endpoint: elimination-half-life
  statistic: study-mean
  value: 113
  low: null
  high: null
  unit: hours
  context: The same crossover study reported a 113-hour half-life, Tmax 4.4 hours and approximately 90% relative bioavailability versus intramuscular dosing; these values are route-specific and do not establish oral kinetics.
  sourceId: graves1989
  modelEligible: true
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
    min: 4
    max: 6
    unit: hours
  phases:
    - name: onset
      basis: elapsed-since-exposure
      min: 15
      max: 60
      unit: minutes
    - name: comeup
      basis: phase-duration
      min: 1
      max: 2
      unit: hours
    - name: peak
      basis: phase-duration
      min: 4
      max: 6
      unit: hours
    - name: offset
      basis: phase-duration
      min: 12
      max: 24
      unit: hours
    - name: after-effects
      basis: phase-duration
      min: 1
      max: 48
      unit: hours
```

## Modifiers

```yaml
- label: Neonatal age and maturation
  effect: Elimination is generally slower and more variable early in life than in adults.
  detail: The adult tablet-label mean half-life is 79 hours, whereas its children/newborn grouping has a mean of 110 hours and the current neonatal label summarizes an approximately one-week neonatal half-life. The neonatal label links prolonged elimination partly to negligible CYP2C9 expression at birth.
  sourceId: dailymed-sezaby
  observationId: phenobarbital-pk-neonatal-sezaby
  factorType: other
  direction: slower
- label: Renal impairment
  effect: Dose requirements may change, but the magnitude is not defined by the current cited labels.
  detail: The oral label states that dosage should be reduced in impaired renal function, while the neonatal label says the effect of renal impairment on neonatal phenobarbital pharmacokinetics is unknown. These statements should not be converted into an unsupported numerical adjustment.
  sourceId: dailymed-phenobarbital-tablets
  observationId: phenobarbital-pk-adult-label
  factorType: other
  direction: variable
- label: Continuous venovenous hemodiafiltration during ECMO
  effect: Phenobarbital clearance can increase markedly.
  detail: In a retrospective population-PK study of 35 neonates and infants on ECMO, the five children receiving CVVHDF had model-estimated clearance about 6.2-fold higher than children without renal replacement therapy. The authors emphasized the small RRT sample and recommended therapeutic drug monitoring rather than uncritical extrapolation of the model.
  sourceId: thibault2021
  observationId: phenobarbital-pk-neonatal-sezaby
  factorType: other
  direction: faster
- label: Hepatic disease
  effect: Reduced dosing and greater caution may be required; marked liver impairment is a contraindication in the cited oral label.
  detail: The oral label advises reduced initial doses in hepatic damage and identifies marked liver impairment as a contraindication. The current neonatal label does not quantify how hepatic impairment changes neonatal exposure.
  sourceId: dailymed-phenobarbital-tablets
  observationId: phenobarbital-pk-adult-label
  factorType: other
  direction: variable
- label: Pregnancy
  effect: Pregnancy materially changes the fetal and neonatal risk context, while a quantitative pregnancy-specific phenobarbital clearance change is not established in the current sources used here.
  detail: Phenobarbital crosses the placenta; current labeling warns of fetal harm and neonatal sedation, respiratory depression, hypotonia or withdrawal after maternal exposure. These safety findings are not evidence for a specific pregnancy half-life correction.
  sourceId: dailymed-sezaby
  observationId: phenobarbital-pk-adult-label
  factorType: pregnancy
  direction: variable
- label: Therapeutic hypothermia in neonates
  effect: No clinically significant phenobarbital PK difference is identified by the current neonatal label.
  detail: SEZABY labeling states that there are no clinically significant pharmacokinetic differences in neonates administered therapeutic hypothermia; this is a null modifier finding rather than evidence that every critically ill neonate has identical exposure.
  sourceId: dailymed-sezaby
  observationId: phenobarbital-pk-neonatal-sezaby
  factorType: other
  direction: variable
- label: Metabolic inhibitors and inducers
  effect: Phenobarbital exposure can change in either direction.
  detail: The neonatal label identifies phenobarbital as a substrate of CYP2C9, CYP2C19, CYP2E1 and UGT pathways and expects inhibitors to raise and inducers to lower exposure, while noting that dedicated neonatal interaction studies have not quantified these effects.
  sourceId: dailymed-sezaby
  observationId: phenobarbital-pk-neonatal-sezaby
  factorType: enzyme
  direction: variable
```

## Effects

```yaml
- id: phenobarbital-neonatal-sedation
  name: Sedation
  direction: Increased
  evidence: Human research
  description: In the neonatal clinical-trial safety data summarized in the current SEZABY label, sedation was reported in 16% of phenobarbital-only subjects versus 5% of levetiracetam-only subjects.
  sourceId: dailymed-sezaby
  population: Neonates in the SEZABY clinical-trial program
  exposure: Intravenous antiseizure treatment
  conceptId: drowsiness
  instrument: Adverse-event assessment
  magnitude: 16% phenobarbital-only versus 5% levetiracetam-only
  reportType: measured-assessment
  conflictingSourceIds: []
- id: phenobarbital-neonatal-respiratory-events
  name: Abnormal respiration and respiratory depression risk
  direction: Increased
  evidence: Human research
  description: The current neonatal label reports abnormal respiration in 25% of phenobarbital-only subjects versus 5% of levetiracetam-only subjects and separately warns that phenobarbital can produce respiratory depression or insufficiency.
  sourceId: dailymed-sezaby
  population: Neonates in the SEZABY clinical-trial program
  exposure: Intravenous antiseizure treatment
  conceptId: drowsiness
  instrument: Adverse-event assessment
  magnitude: 25% phenobarbital-only versus 5% levetiracetam-only for abnormal respiration
  reportType: measured-assessment
  conflictingSourceIds: []
- id: phenobarbital-cns-depression
  name: CNS depression
  direction: Increased
  evidence: Human research
  description: Current oral labeling describes dose-dependent progression from drowsiness and sedation toward hypnosis and, at higher exposure, greater CNS and respiratory depression. This is label pharmacology rather than a standardized healthy-volunteer subjective-effects scale.
  sourceId: dailymed-phenobarbital-tablets
  population: Labeled clinical use
  exposure: Systemic phenobarbital
  conceptId: drowsiness
  instrument: null
  magnitude: Dose-dependent; no single effect size established
  reportType: measured-assessment
  conflictingSourceIds: []
```

## Outcomes

```yaml
- id: phenobarbital-neolev2-seizure-freedom
  name: EEG-confirmed neonatal seizure freedom for 24 hours
  direction: Increased
  evidence: Human research
  description: In the blinded phase IIb NEOLEV2 trial, phenobarbital produced substantially more complete 24-hour seizure freedom than levetiracetam in the modified intention-to-treat analysis.
  sourceId: sharpe2020
  population: Neonates with electrographically confirmed seizures
  exposure: First-line intravenous phenobarbital, 20 mg/kg with protocol-permitted escalation to 40 mg/kg total
  conceptId: seizure
  instrument: Continuous EEG independently reviewed by two neurophysiologists
  magnitude: 80% (24/30) phenobarbital versus 28% (15/53) levetiracetam; P < .001; relative risk reported for levetiracetam versus phenobarbital 0.35, 95% CI 0.22–0.56
  reportType: measured-assessment
  conflictingSourceIds: []
- id: phenobarbital-healthy-rectal-bioavailability
  name: Rectal relative bioavailability
  direction: Variable
  evidence: Human research
  description: In seven healthy adults, phenobarbital sodium parenteral solution given rectally was well absorbed relative to intramuscular administration.
  sourceId: graves1989
  population: Seven healthy adult volunteers
  exposure: 5 mg/kg intramuscularly and rectally in a crossover design separated by five weeks
  conceptId: bioavailability
  instrument: Serial serum phenobarbital measurements over 288 hours
  magnitude: Mean relative rectal bioavailability approximately 90%; half-life 112 hours IM and 113 hours rectal
  reportType: measured-assessment
  conflictingSourceIds: []
- id: phenobarbital-healthy-enzyme-induction
  name: Hepatic mixed-function oxidase induction
  direction: Increased
  evidence: Human research
  description: Repeated phenobarbital exposure increased antipyrine clearance and urinary 6-beta-hydroxycortisol in healthy male volunteers, providing direct human evidence of enzyme induction.
  sourceId: thompson1996
  population: Healthy male volunteers
  exposure: Phenobarbital 30 mg orally every 6 hours for 17 days
  conceptId: enzyme-induction
  instrument: Antipyrine pharmacokinetics and urinary 6-beta-hydroxycortisol
  magnitude: Antipyrine total clearance 36 to 45 mL/h/kg; nonrenal clearance 35 to 44 mL/h/kg; 6-beta-hydroxycortisol 338 to 529 micrograms; antipyrine terminal half-life 11 to 9 hours
  reportType: measured-assessment
  conflictingSourceIds: []
- id: phenobarbital-ecmo-rrt-clearance
  name: Phenobarbital clearance during CVVHDF
  direction: Increased
  evidence: Human research
  description: In neonates and infants receiving ECMO, renal replacement therapy was the major modeled covariate associated with higher phenobarbital clearance.
  sourceId: thibault2021
  population: Thirty-five neonates and infants on ECMO; five received CVVHDF
  exposure: Intravenous phenobarbital with therapeutic drug monitoring
  conceptId: drug-clearance
  instrument: Population pharmacokinetic modeling of 194 measured concentrations
  magnitude: Model-estimated clearance approximately 6.2-fold higher with CVVHDF
  reportType: measured-assessment
  conflictingSourceIds: []
```

## Mechanisms

```yaml
- title: GABAA-mediated synaptic inhibition
  conceptId: gaba-a
  description: The current neonatal label states that the precise antiseizure mechanism is not fully understood but is thought to involve potentiation of synaptic inhibition through an action at the GABAA receptor. This should not be presented as a complete explanation of every clinical effect.
  sourceId: dailymed-sezaby
- title: Hepatic enzyme induction
  conceptId: enzyme-induction
  description: Phenobarbital induces drug-metabolizing pathways including CYP3A4, CYP2B6, CYP2C enzymes and UGT activity. Healthy-volunteer probe-drug data independently demonstrate increased metabolic clearance during repeated phenobarbital treatment.
  sourceId: thompson1996
- title: Long persistence and accumulation
  conceptId: elimination-half-life
  description: Multi-day elimination half-lives mean serum phenobarbital can persist and accumulate well beyond the oral label's 10–12-hour duration-of-action statement; dose timing, steady state and withdrawal therefore cannot be inferred from felt sedation alone.
  sourceId: dailymed-phenobarbital-tablets
```

## Cautions

```yaml
- title: Respiratory depression and overdose
  description: Phenobarbital is a dose-dependent respiratory depressant. Severe overdose can progress to marked CNS depression, coma, hypotension, respiratory or circulatory collapse and death; suspected overdose is a medical emergency rather than a situation for self-management.
  sourceId: dailymed-phenobarbital-tablets
- title: Opioid combination risk
  description: The current SEZABY boxed warning states that concomitant phenobarbital and opioid use can cause profound sedation, respiratory depression, coma and death; when such coadministration is clinically necessary, the label calls for limiting exposure and close monitoring.
  sourceId: dailymed-sezaby
- title: Tolerance, physical dependence and withdrawal
  description: Tolerance and physical dependence can develop with repeated phenobarbital exposure. Abrupt discontinuation or rapid dose reduction after dependence has developed can provoke severe and potentially life-threatening withdrawal, including seizures and delirium; prolonged therapy therefore requires clinician-directed tapering rather than abrupt cessation.
  sourceId: dailymed-phenobarbital-tablets
- title: Dependence risk after extending neonatal treatment
  description: SEZABY's recommended neonatal course is short; its boxed warning specifically notes dependence and withdrawal reactions when phenobarbital is used for longer than recommended and warns against abrupt discontinuation after extended exposure.
  sourceId: dailymed-sezaby
- title: Pregnancy and neonatal exposure
  description: Phenobarbital crosses the placenta and current labeling warns that maternal exposure can harm the fetus. Late-pregnancy exposure can also produce neonatal sedation, respiratory depression, hypotonia or withdrawal; pregnancy therefore changes the risk-benefit and monitoring context even though a quantitative pregnancy-specific PK correction is not established here.
  sourceId: dailymed-sezaby
- title: Serious cutaneous and systemic hypersensitivity
  description: Current labeling includes serious dermatologic reactions and multiorgan hypersensitivity including DRESS; clinically significant rash or systemic hypersensitivity requires urgent medical assessment.
  sourceId: dailymed-sezaby
- title: Liver, kidney, respiratory disease and porphyria
  description: The cited oral label contraindicates phenobarbital in marked liver impairment, manifest or latent porphyria and respiratory disease with dyspnea or obstruction, and advises lower dosing in impaired renal function or hepatic disease.
  sourceId: dailymed-phenobarbital-tablets
- title: Therapeutic drug monitoring is contextual
  description: Phenobarbital's long and variable half-life, age effects and interaction burden make serum concentrations useful in selected clinical contexts. The oral label directs interpretation against clinical-laboratory reference values, while specialized ECMO/RRT research strongly recommends TDM; the 20–40 mg/L research target used in that ECMO study is not treated here as a universal therapeutic range.
  sourceId: thibault2021
```

## Claims

```yaml
- id: phenobarbital-claim-neonatal-approval
  assertion: SEZABY phenobarbital sodium is FDA-approved in the United States for treatment of neonatal seizures in term and preterm infants.
  relation: regulatory-status
  participants:
    - entityId: substance:phenobarbital
      role: active-moiety
    - entityId: tag:age-exposure
      role: approved-indication
  context: FDA's orphan-drug approval record gives a marketing approval date of November 17, 2022, and the current NDA-linked DailyMed label carries the same indication.
  sourceIds:
    - fda-sezaby-approval
    - dailymed-sezaby
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: This approval is formulation- and indication-specific and does not make every phenobarbital product FDA-approved for every seizure context.
- id: phenobarbital-claim-oral-label-status
  assertion: A current U.S. oral phenobarbital tablet SPL lists generalized and partial seizures as anticonvulsant indications, but that specific DailyMed product record is classified as "unapproved drug other."
  relation: regulatory-status
  participants:
    - entityId: substance:phenobarbital
      role: active-ingredient
    - entityId: tag:oral-systemic-exposure
      role: labeled-form
  context: This distinction prevents an official DailyMed label from being silently described as an FDA-approved NDA indication.
  sourceIds:
    - dailymed-phenobarbital-tablets
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Other phenobarbital products may have different regulatory histories; this statement is specific to the cited current SPL.
- id: phenobarbital-claim-neolev2
  assertion: Phenobarbital achieved more 24-hour EEG-confirmed neonatal seizure freedom than levetiracetam in the NEOLEV2 phase IIb randomized trial.
  relation: comparative-efficacy
  participants:
    - entityId: substance:phenobarbital
      role: intervention
    - entityId: tag:depressant
      role: comparator
    - entityId: tag:age-exposure
      role: treatment-context
  context: Modified intention-to-treat seizure freedom was 80% versus 28%, respectively.
  sourceIds:
    - sharpe2020
    - ctgov-neolev2
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: The phenobarbital arm was small, the study was phase IIb, and the investigators called for definitive trials with long-term outcomes; the result should not be extrapolated to every neonatal seizure etiology or dosing protocol.
- id: phenobarbital-claim-tdm
  assertion: A single universal phenobarbital serum concentration target should not be inferred from the sources in this article.
  relation: evidence-boundary
  participants:
    - entityId: substance:phenobarbital
      role: analyte
    - entityId: tag:oral-systemic-exposure
      role: monitoring-context
  context: The oral label directs use of laboratory reference values, whereas the ECMO study used 20–40 mg/L as a study-specific goal and recommended TDM particularly during renal replacement therapy.
  sourceIds:
    - dailymed-phenobarbital-tablets
    - thibault2021
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Individual clinical laboratories, indications and specialist protocols may define operational ranges not reproduced as a universal BHWiki threshold here.
- id: phenobarbital-claim-duration
  assertion: Phenobarbital's serum elimination half-life is not the same quantity as its pharmacologic or subjectively felt duration.
  relation: evidence-boundary
  participants:
    - entityId: substance:phenobarbital
      role: exposure
    - entityId: tag:oral-systemic-exposure
      role: pharmacokinetic-measure
    - entityId: tag:drowsiness
      role: experiential-measure
  context: The oral label reports 10–12 hours as duration of action but 53–118 hours as adult plasma half-life; the primary healthy-volunteer PK study used here did not establish a standardized participant-rated felt-duration endpoint.
  sourceIds:
    - dailymed-phenobarbital-tablets
    - graves1989
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Subjective sedation may vary with dose, tolerance, co-medications and individual sensitivity, so no numerical "felt duration" is supplied.
- id: phenobarbital-claim-hypothermia-null
  assertion: Current SEZABY labeling does not identify a clinically significant phenobarbital pharmacokinetic difference attributable to therapeutic hypothermia in neonates.
  relation: null-finding
  participants:
    - entityId: substance:phenobarbital
      role: analyte
    - entityId: tag:age-exposure
      role: modifier
  context: The label explicitly preserves this as a no-clinically-significant-difference finding.
  sourceIds:
    - dailymed-sezaby
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: This does not establish PK equivalence under every combination of organ dysfunction, extracorporeal support or concomitant medication.
```

## Interactions

```yaml
- id: phenobarbital-opioids
  name: Opioids
  otherSlug: null
  summary: Concomitant use can produce profound sedation, respiratory depression, coma and death. SEZABY carries a boxed warning directing clinicians to reserve such combinations for situations in which alternatives are inadequate, minimize exposure and monitor closely.
  sourceId: dailymed-sezaby
  mechanism: Additive CNS and respiratory depression
  context: Current U.S. boxed warning
  severity:
    label: Boxed-warning interaction
    sourceId: dailymed-sezaby
  conflictingSourceIds: []
- id: phenobarbital-alcohol
  name: Alcohol
  otherSlug: null
  summary: Alcohol can add to phenobarbital's CNS-depressant effects; the oral label warns against alcohol and other CNS depressants because additive depression can occur.
  sourceId: dailymed-phenobarbital-tablets
  mechanism: Additive CNS depression
  context: Current U.S. oral labeling
  conflictingSourceIds: []
- id: phenobarbital-valproate
  name: Valproate / valproic acid
  otherSlug: null
  summary: Valproate can increase phenobarbital serum concentrations. Current oral labeling calls for phenobarbital level monitoring and dosage adjustment when needed rather than assuming unchanged exposure.
  sourceId: dailymed-phenobarbital-tablets
  mechanism: Inhibition of phenobarbital elimination
  context: Label-described antiseizure-medication interaction
  conflictingSourceIds: []
- id: phenobarbital-phenytoin
  name: Phenytoin
  otherSlug: null
  summary: "The interaction is explicitly variable in the oral phenobarbital label: some reports describe accelerated phenytoin metabolism while others report no effect. The label therefore recommends more frequent concentration monitoring when the drugs are used together."
  sourceId: dailymed-phenobarbital-tablets
  mechanism: Enzyme induction with reported interindividual or study variability
  context: Conflicting label-described observations are preserved rather than collapsed into a single direction.
  conflictingSourceIds:
    - dailymed-phenobarbital-tablets
- id: phenobarbital-carbamazepine
  name: Carbamazepine
  otherSlug: null
  summary: Current carbamazepine labeling lists phenobarbital among CYP3A4 inducers shown or expected to decrease carbamazepine plasma concentrations by increasing its metabolism.
  sourceId: dailymed-carbamazepine
  mechanism: Enzyme induction increasing carbamazepine metabolism
  context: Current U.S. carbamazepine labeling
  conflictingSourceIds: []
- id: phenobarbital-hormonal-contraceptives
  name: Hormonal contraceptives
  otherSlug: null
  summary: Phenobarbital enzyme induction can reduce the effect of steroidal hormones. The oral label describes reduced estradiol effect and pregnancies reported during oral-contraceptive use and advises consideration of alternative contraceptive measures.
  sourceId: dailymed-phenobarbital-tablets
  mechanism: Induction of hepatic metabolism of steroid hormones
  context: Current U.S. oral labeling
  conflictingSourceIds: []
```

## Experience links

```yaml
- title: Phenobarbital on PsychonautWiki
  url: https://psychonautwiki.org/wiki/Phenobarbital
  publisher: PsychonautWiki
```

## References

```yaml
- id: pubchem
  title: Phenobarbital | C12H12N2O3 | CID 4763 - PubChem
  authors: National Center for Biotechnology Information (NCBI)
  year: 2026
  url: https://pubchem.ncbi.nlm.nih.gov/compound/4763
  kind: Chemical database
  insight: Identifies phenobarbital as PubChem CID 4763 and records molecular formula C12H12N2O3 and computed molecular weight 232.23 g/mol; used here for compound identity rather than clinical claims.
  limitation: PubChem is a dynamic chemical-information record and does not by itself establish clinical dosing, efficacy, pharmacokinetics or safety.
  funding: PubChem is operated by the U.S. National Library of Medicine, National Institutes of Health.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not applicable to a government chemical-database record.
  conflictOfInterestStatus: not-assessed
- id: dailymed-phenobarbital-tablets
  title: PHENOBARBITAL tablet
  authors: Sun Pharmaceutical Industries, Inc.; U.S. National Library of Medicine, DailyMed
  year: 2026
  url: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=fa09b4f2-edb0-4594-a2d2-b16f7b9686b4
  kind: Current U.S. Structured Product Label
  insight: Current oral-product source for seizure indications, oral anticonvulsant dosing, adult and pediatric half-life statements, duration of action, metabolism and urinary elimination, renal/hepatic precautions, tolerance/dependence/withdrawal, overdose risk, Schedule IV status and interactions with alcohol, valproate, phenytoin and steroidal contraceptives.
  limitation: DailyMed identifies this specific product record's approval type as "unapproved drug other"; it must not be represented as an FDA-approved NDA simply because its SPL is hosted by DailyMed. Several pharmacology statements reflect legacy labeling rather than modern randomized evidence.
  funding: Not a research study; prescribing information is submitted under manufacturer/labeler responsibility and hosted by the U.S. National Library of Medicine.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not an investigator-authored publication; manufacturer provenance is intrinsic to the product label.
  conflictOfInterestStatus: not-assessed
- id: dailymed-sezaby
  title: SEZABY- phenobarbital sodium injection
  authors: Sun Pharmaceutical Industries, Inc.; U.S. National Library of Medicine, DailyMed
  year: 2025
  url: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=8c7d0402-4977-4c25-bc4b-11db91339e9a
  kind: FDA-approved U.S. prescribing information
  insight: Current NDA-linked labeling for phenobarbital sodium treatment of neonatal seizures, including IV loading and maintenance regimens, neonatal concentrations and approximately one-week half-life, GABAA mechanism language, metabolic pathways, therapeutic-hypothermia null finding, opioid boxed warning, dependence/withdrawal warnings, neonatal adverse reactions and pregnancy/lactation cautions.
  limitation: The labeled indication and dosing are neonatal and formulation-specific. The label notes that effects of renal and hepatic impairment on neonatal phenobarbital PK are unknown and that dedicated neonatal interaction studies are limited.
  funding: Not a research publication; manufacturer-submitted prescribing information for NDA 215910 hosted by DailyMed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not an investigator-authored publication; manufacturer and regulatory provenance are explicit.
  conflictOfInterestStatus: not-assessed
- id: fda-sezaby-approval
  title: Search Orphan Drug Designations and Approvals
  authors: U.S. Food and Drug Administration, Office of Orphan Products Development
  year: 2026
  url: https://www.accessdata.fda.gov/scripts/opdlisting/oopd/detailedIndex.cfm?cfgridkey=703819
  kind: FDA regulatory database
  insight: Records phenobarbital sodium/SEZABY orphan designation for neonatal seizures and U.S. marketing approval on November 17, 2022 for treatment of neonatal seizures in term and preterm infants.
  limitation: Regulatory-status database entry; it does not independently provide comparative efficacy, complete prescribing information or individualized treatment guidance.
  funding: U.S. Food and Drug Administration government database; not a research study.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not applicable to a regulatory database entry.
  conflictOfInterestStatus: not-assessed
- id: sharpe2020
  title: "Levetiracetam Versus Phenobarbital for Neonatal Seizures: A Randomized Controlled Trial"
  authors: Cynthia Sharpe; Gail E. Reiner; Suzanne L. Davis; Mark Nespeca; Jeffrey J. Gold; Maynard Rasmussen; Rachel Kuperman; Mary Jo Harbert; David Michelson; Priscilla Joe; Sonya Wang; Neggy Rismanchi; Ngoc Minh Le; Andrew Mower; Jae Kim; Malcolm R. Battin; Brian Lane; Jose Honold; Ellen Knodel; Kathy Arnell; Renee Bridge; Lilly Lee; Karin Ernstrom; Rema Raman; Richard H. Haas; NEOLEV2 Investigators
  year: 2020
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC7263056/
  kind: Primary human randomized controlled trial
  pmid: "32385134"
  doi: 10.1542/peds.2019-3182
  insight: Multicenter blinded phase IIb trial comparing first-line levetiracetam and phenobarbital for neonatal seizures; 24-hour EEG-confirmed seizure freedom occurred in 80% of phenobarbital-assigned versus 28% of levetiracetam-assigned participants in the modified intention-to-treat analysis.
  limitation: Phase IIb trial with a small phenobarbital arm and no definitive long-term comparative outcome conclusion; the authors called for larger studies with long-term outcomes.
  funding: The NEOLEV2 study was funded by the U.S. FDA Orphan Products Division grant 1 R01FD004147; REDCap was supported by NIH/NCATS cooperative agreement UL1TR001442. Persyst provided EEG software without charge, and CortiCare worked with the study on a commercial basis but was reported to have no input into article writing.
  sponsorshipStatus: mixed-funding
  conflictsOfInterest: The article states no potential conflicts of interest, while its financial disclosure records educational meals with UCB representatives for Mark Nespeca, David Michelson, Neggy Rismanchi, Andrew Mower and Richard Haas; a Sun Pharma Advanced Research consultancy for Richard Haas after presentation of study results; and Ovid Therapeutics trial participation and DSMB service for Sonya Wang. Remaining authors reported no relevant financial relationships.
  conflictOfInterestStatus: declared
  disclosureUrl: https://pmc.ncbi.nlm.nih.gov/articles/PMC7263056/
- id: ctgov-neolev2
  title: Efficacy of Intravenous Levetiracetam in Neonatal Seizures
  authors: Richard H. Haas; University of California, San Diego and collaborators
  year: 2019
  url: https://clinicaltrials.gov/study/NCT01720667
  kind: ClinicalTrials.gov registry record
  insight: Registry record for NCT01720667, the completed NEOLEV2 study, documenting intravenous levetiracetam and phenobarbital interventions, a phenobarbital 20–40 mg/kg treatment context, EEG-based 24-hour seizure-cessation outcome registration and linked publications.
  limitation: Sponsor-submitted registry information does not itself establish efficacy or safety and should be interpreted alongside the peer-reviewed trial report; the registry's last posted update predates the current SEZABY approval.
  funding: ClinicalTrials.gov lists the study collaborators, including the U.S. Food and Drug Administration; the linked peer-reviewed report identifies FDA Orphan Products Division grant funding.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: ClinicalTrials.gov does not provide an investigator conflict-of-interest disclosure equivalent to the publication's full financial disclosure.
  conflictOfInterestStatus: not-assessed
- id: graves1989
  title: Relative bioavailability of rectally administered phenobarbital sodium parenteral solution
  authors: Nina M. Graves; Gregory B. Holmes; Robert L. Kriel; Carolyn Jones-Saete; Betty Ong; David J. Ehresman
  year: 1989
  url: https://pubmed.ncbi.nlm.nih.gov/2763578/
  kind: Primary healthy-volunteer pharmacokinetic study
  pmid: "2763578"
  doi: 10.1177/1060028089023007-806
  insight: Seven healthy adults received 5 mg/kg phenobarbital sodium intramuscularly and rectally in a crossover design; reported half-lives were 112 and 113 hours, Tmax 2.1 and 4.4 hours, and rectal relative bioavailability approximately 90%.
  limitation: Very small, older study using parenteral solution by IM and rectal routes; it does not establish oral bioavailability, modern therapeutic targets, clinical seizure outcomes or a standardized subjective felt duration.
  funding: PubMed indexes the article as Research Support, Non-U.S. Government; the specific funding body was not identified in the accessible bibliographic record inspected for this draft.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: No dedicated conflict-of-interest statement was reported in the accessible 1989 article metadata inspected for this draft.
  conflictOfInterestStatus: not-assessed
- id: thompson1996
  title: Assessment of doxylamine influence on mixed function oxidase activity upon multiple dose oral administration to normal volunteers
  authors: G. A. Thompson; J. V. St Peter; M. A. Heise; Z. D. Horowitz; G. C. Salyers; T. T. Charles; C. Brezovic; D. A. Russell; J. A. Skare; J. H. Powell
  year: 1996
  url: https://pubmed.ncbi.nlm.nih.gov/8923333/
  kind: Primary healthy-volunteer controlled pharmacology study
  pmid: "8923333"
  doi: 10.1021/js950443e
  insight: In a 48-volunteer parallel study, the phenobarbital group received 30 mg every 6 hours for 17 days and showed increased antipyrine total/nonrenal clearance and 6-beta-hydroxycortisol excretion with a shortened antipyrine half-life, directly demonstrating enzyme induction in humans.
  limitation: The study was designed around mixed-function oxidase probe endpoints rather than seizure treatment, phenobarbital therapeutic efficacy or subjective effects; participants were healthy men and exposure was short-term.
  funding: Specific study funding was not explicitly reported in the accessible article metadata inspected for this draft; author affiliations included Procter & Gamble Pharmaceuticals.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: No dedicated modern conflict-of-interest statement was present in the accessible 1996 record; industry affiliation is explicit but should not be converted into an unstated funding or conflict declaration.
  conflictOfInterestStatus: not-assessed
- id: thibault2021
  title: Population Pharmacokinetics of Phenobarbital in Neonates and Infants on Extracorporeal Membrane Oxygenation and the Influence of Concomitant Renal Replacement Therapy
  authors: Céline Thibault; Shavonne L. Massey; Nicholas S. Abend; Maryam Y. Naim; Alexandra Zoraian; Athena F. Zuppa
  year: 2021
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC8214808/
  kind: Primary human population pharmacokinetic study
  pmid: "32960986"
  doi: 10.1002/jcph.1743
  insight: Retrospective single-center population-PK study of 35 neonates and infants on ECMO with 194 phenobarbital concentrations; CVVHDF was associated with approximately 6.2-fold higher clearance, and the authors strongly recommended therapeutic drug monitoring during renal replacement therapy.
  limitation: Specialized critically ill ECMO population, retrospective design and only five children on CVVHDF; its simulated doses and 20–40 mg/L concentration goal should not be generalized to routine phenobarbital treatment.
  funding: The article states that the authors received no financial support for this research. Its acknowledgments note that Nicholas S. Abend was supported by NIH grant NS-096058 and received funding from the Patient-Centered Outcomes Research Institute and the Epilepsy Foundation.
  sponsorshipStatus: no-external-funding
  conflictsOfInterest: The full-text disclosure states that none of the authors had a conflict of interest to disclose.
  conflictOfInterestStatus: none-declared
  disclosureUrl: https://pmc.ncbi.nlm.nih.gov/articles/PMC8214808/
- id: dailymed-carbamazepine
  title: Carbamazepine Tablets USP, (Chewable), 100 mg and 200 mg Carbamazepine Tablets USP, 200 mg Carbamazepine Extended-Release Tablets USP, 100 mg, 200 mg, and 400 mg Carbamazepine Oral Suspension USP, 100 mg/5 mL
  authors: Sun Pharmaceutical Industries, Inc.; U.S. National Library of Medicine, DailyMed
  year: 2026
  url: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=0526a054-3eda-49b4-b390-7d5d16e30af8
  kind: Current U.S. Structured Product Label
  insight: Current carbamazepine labeling lists phenobarbital among CYP3A4 inducers shown or expected to decrease carbamazepine plasma concentrations.
  limitation: Supports the phenobarbital-to-carbamazepine interaction direction but does not quantify a universal magnitude or establish a dosing correction applicable to every patient.
  funding: Not a research study; manufacturer/labeler prescribing information hosted by the U.S. National Library of Medicine.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not an investigator-authored publication; manufacturer provenance is intrinsic to the product label.
  conflictOfInterestStatus: not-assessed
- id: dea-phenobarbital
  title: Conversion Factors for Controlled Substances
  authors: U.S. Department of Justice, Drug Enforcement Administration, Diversion Control Division
  year: 2021
  url: https://www.deadiversion.usdoj.gov/quotas/conv_factor/
  kind: U.S. federal controlled-substance regulatory source
  insight: DEA's official conversion-factor table identifies phenobarbital and phenobarbital sodium as Schedule IV, DEA drug code 2285.
  limitation: The conversion-factor page is a federal scheduling/quotas reference, not a complete statement of prescribing, possession, dispensing or state-law requirements; legal status can change and must be read with current 21 CFR and subsequent federal rules.
  funding: U.S. Department of Justice government regulatory source; not a research study.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not applicable to a federal regulatory table.
  conflictOfInterestStatus: not-assessed
- id: psychonautwiki
  title: "Phenobarbital: PsychonautWiki dose and duration data"
  authors: PsychonautWiki contributors
  year: 2026
  url: https://psychonautwiki.org/wiki/Phenobarbital
  kind: Community wiki data · CC BY 4.0
  insight: Source of this page's community dose bands and subjective duration ranges, from the PsychonautWiki API snapshot built about 2026-06-23 and retrieved 2026-11-06. The structured data is used under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/); BHWiki normalized unit symbols and route names.
  limitation: "PsychonautWiki states: \"PW's dosage information is gathered from users and resources for educational purposes only. It is not a recommendation and should be verified with other sources for accuracy.\" Its dose and duration values carry no per-value citations."
```

## Legal

```yaml
- jurisdiction: United States — federal
  activity: Controlled-substance scheduling — phenobarbital parent form
  status: Schedule IV; DEA drug code 2285
  sourceUrl: https://www.deadiversion.usdoj.gov/quotas/conv_factor/
  asOf: 2026-10-16
- jurisdiction: United States — federal
  activity: Controlled-substance scheduling — phenobarbital sodium form
  status: Schedule IV; DEA drug code 2285
  sourceUrl: https://www.deadiversion.usdoj.gov/quotas/conv_factor/
  asOf: 2026-10-16
```

