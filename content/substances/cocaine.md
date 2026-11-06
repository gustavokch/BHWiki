---
slug: cocaine
name: Cocaine
subtitle: Rapidly delivered stimulant and local anesthetic with route-dependent pharmacokinetics.
aliases:
  - Benzoylmethylecgonine
  - Cocaine free base
  - Cocaine hydrochloride
formula: C17H21NO4
molecularWeight: 303.35 g/mol
pubchemCid: 446220
smiles: CN1C2CCC1C(C(C2)OC(=O)C3=CC=CC=C3)C(=O)OC
category: Stimulant
tags:
  - stimulant
  - dopamine-transporter
  - dopamine
accent: "#bea17c"
reviewedAt: 2026-10-16
editorialStatus: sourced-draft
halfLife:
  label: About 1.15 hours in a pooled IV/intranasal/smoked study
  low: 1.15
  high: 1.15
  context: In 16 subjects divided by intravenous, intranasal, or smoked administration, the elimination half-life calculated from the average rate constant was 69 minutes; IV elimination half-life was 78 minutes. Route- and formulation-specific estimates are retained below.
  sourceId: jeffcoat1989
  observationId: cocaine-multiroute
kinetics:
  onset: Route-dependent. In a radiolabeled disposition study, the absorption half-time was 1.1 minutes after smoking and 11.7 minutes after intranasal administration.
  peak: Route-dependent; no single peak-time value represents intravenous, smoked, intranasal, oral, and topical nasal exposure.
  duration: Not established as a single route-independent value.
  bioavailability: Intranasal bioavailability was about 80% in the radiolabeled disposition study; observed smoked bioavailability was reduced by thermal degradation. In a later within-subject study, mean oral bioavailability was 32% after 100 mg and 45% after 200 mg.
  metabolism: Hydrolysis produces benzoylecgonine and ecgonine methyl ester as major metabolites; the U.S. label also describes minor CYP3A4 formation of active norcocaine.
  sourceId: jeffcoat1989
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
x-order: 165
---

## Summary

Cocaine is the parent tropane alkaloid represented here by PubChem CID 446220. Cocaine free base is the unprotonated parent compound; cocaine hydrochloride is its hydrochloride salt. The current U.S. NUMBRINO label uses an aqueous cocaine-hydrochloride solution and states that 40 mg cocaine hydrochloride is equivalent to 35.7 mg cocaine free base. Cocaine hydrochloride has a legitimate clinical role as a topical local anesthetic for procedures involving accessible nasal mucosa, while cocaine's rapid central stimulant effects, cardiovascular stress, and reinforcing properties underlie substantial nonmedical-use risk. These statements resolve to `pubchem`, `numbrino-label`, `volkow1997`, and `mittleman1999`.

Human laboratory evidence shows strong route dependence: smoking produces much faster absorption than intranasal administration, oral exposure is slower and less bioavailable than intravenous exposure, and faster delivery is associated with prominent reinforcing subjective effects. Acute epidemiologic studies associate recent cocaine exposure with myocardial infarction and ischemic stroke, whereas the cited stroke study found no association for lifetime-ever use considered without acute timing. (`jeffcoat1989`, `coe2018`, `smith2001`, `mittleman1999`, `cheng2016`)

## Description

Cocaine has two clinically important chemical presentations. The free base is the neutral parent molecule; cocaine hydrochloride is a water-soluble salt used in the cited prescription nasal solution. The salt and free-base masses are therefore not interchangeable milligram-for-milligram. (`pubchem`, `numbrino-label`)

Its pharmacology combines monoamine-transporter inhibition with local-anesthetic sodium-channel blockade. Human PET work directly links striatal dopamine-transporter occupancy to the subjective cocaine “high,” while the prescription label attributes local anesthesia to reversible blockade of voltage-gated sodium channels. (`volkow1997`, `numbrino-label`)

## Evidence note

Evidence is heterogeneous and route-specific. Controlled human studies are generally small and frequently enrolled experienced cocaine users rather than cocaine-naive populations; observational cardiovascular, neurologic, psychiatric, pregnancy, and withdrawal findings cannot eliminate all confounding. The current prescription label provides the strongest evidence for approved topical nasal use but does not establish safety for nonmedical routes or repeated exposure.

For `jeffcoat1989`, `smith2001`, `foltin2004`, `mittleman1999`, `majlesi2010`, `coffey2000`, `farre1997`, and `bandstra2001`, the evidence summarized here is limited to the retrieved PubMed abstract/indexing record where full publication text was not available in the retrieved primary-source record. Funding and conflicts are therefore reported only when directly available or indexed, and otherwise remain not reported. Study exposures below describe research or approved-label conditions, not a general safe-dose range.

## Doses

```yaml
- label: FDA-labeled topical nasal dose
  amount: 40–160 mg cocaine hydrochloride
  quantity: 40
  quantityMax: 160
  unit: mg
  ingredient: Cocaine hydrochloride
  formulation: NUMBRINO 4% nasal solution
  route: Topical intranasal via pledgets
  frequency: Single procedure
  duration: Pledgets applied for 20 minutes
  population: Adults undergoing diagnostic procedures or surgery on or through accessible nasal mucosa
  purpose: Local anesthesia
  sourceCategory: approved-label
  absorptionNote: The label limits total dosing to 3 mg/kg per procedure.
  note: Each mL contains 40 mg cocaine hydrochloride, equivalent to 35.7 mg cocaine free base.
  sourceId: numbrino-label
- label: Intranasal dose-response exposures
  amount: 0.06–1.37 mg/kg
  quantity: 0.06
  quantityMax: 1.37
  unit: mg/kg
  ingredient: Cocaine
  formulation: Intranasal research cocaine
  route: Intranasal
  frequency: Two same-dose administrations 40 minutes apart per session
  duration: Acute laboratory sessions
  population: 10 experienced male cocaine users
  purpose: Measure subjective, cardiovascular, plasma, and acute-tolerance responses
  sourceCategory: research
  note: Studied doses were 0.06, 0.34, 0.69, and 1.37 mg/kg.
  sourceId: foltin2004
- label: Oral comparative exposures
  amount: 62.5–250 mg/70 kg
  quantity: null
  quantityMax: null
  unit: mg
  ingredient: Cocaine
  formulation: Controlled human laboratory cocaine
  route: Oral
  frequency: Single experimental doses
  duration: Acute within-subject study
  population: Volunteers with histories of cocaine abuse
  purpose: Compare physiological, subjective, and reinforcing effects after oral exposure
  sourceCategory: research
  note: Oral doses were 62.5, 125, and 250 mg/70 kg.
  sourceId: smith2001
- label: Intravenous comparative exposures
  amount: 12.5–50 mg/70 kg
  quantity: null
  quantityMax: null
  unit: mg
  ingredient: Cocaine
  formulation: Controlled human laboratory cocaine
  route: Intravenous
  frequency: Single experimental doses
  duration: Acute within-subject study
  population: Volunteers with histories of cocaine abuse
  purpose: Compare physiological, subjective, and reinforcing effects after IV exposure
  sourceCategory: research
  note: IV doses were 12.5, 25, and 50 mg/70 kg.
  sourceId: smith2001
- label: Oral pharmacokinetic exposure
  amount: 100 or 200 mg
  quantity: null
  quantityMax: null
  unit: mg
  ingredient: Cocaine
  formulation: Oral capsules
  route: Oral
  frequency: Single dose per session, sessions separated by at least 48 hours
  duration: Plasma sampling through 24 hours
  population: 14 inpatient participants with current cocaine-use histories
  purpose: Determine oral bioavailability and pharmacokinetics
  sourceCategory: research
  note: Oral doses were 100 and 200 mg. No adverse effects were observed among the 14 study completers under the protocol's screened and monitored conditions.
  sourceId: coe2018
- label: Intravenous pharmacokinetic exposure
  amount: 40 mg
  quantity: 40
  quantityMax: null
  unit: mg
  ingredient: Cocaine
  formulation: IV solution
  route: Intravenous
  frequency: Single dose per session, sessions separated by at least 48 hours
  duration: Plasma sampling through 24 hours
  population: 14 inpatient participants with current cocaine-use histories
  purpose: Determine intravenous pharmacokinetics
  sourceCategory: research
  note: No adverse effects were observed among the 14 study completers under the protocol's screened and monitored conditions.
  sourceId: coe2018
- label: Smoked disposition exposure
  amount: Dose not stated in the retrieved PubMed abstract
  quantity: null
  quantityMax: null
  unit: mg
  ingredient: Cocaine
  formulation: Smoked research cocaine
  route: Smoking
  frequency: Acute administration
  duration: Disposition study
  population: Human subjects assigned by administration route
  purpose: Measure absorption, disposition, metabolism, and excretion
  sourceCategory: research
  note: The abstract reports a 1.1-minute absorption half-time but does not provide the smoked dose; that missing detail is preserved rather than inferred.
  sourceId: jeffcoat1989
- label: Threshold dose
  amount: 5 mg
  quantity: 5
  quantityMax: null
  unit: mg
  ingredient: Cocaine
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
  amount: 10–30 mg
  quantity: 10
  quantityMax: 30
  unit: mg
  ingredient: Cocaine
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
  amount: 30–60 mg
  quantity: 30
  quantityMax: 60
  unit: mg
  ingredient: Cocaine
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
  amount: 60–90 mg
  quantity: 60
  quantityMax: 90
  unit: mg
  ingredient: Cocaine
  formulation: Not established
  route: Intranasal (insufflated)
  frequency: Not established
  duration: Not established
  population: Not established
  purpose: PsychonautWiki dosage classification
  sourceCategory: community
  note: Band from the PsychonautWiki API snapshot built about 2026-06-23.
  sourceId: psychonautwiki
- label: Heavy dose band (90 mg and above)
  amount: 90 mg and above
  quantity: 90
  quantityMax: null
  unit: mg
  ingredient: Cocaine
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
  amount: 2 mg
  quantity: 2
  quantityMax: null
  unit: mg
  ingredient: Cocaine
  formulation: Not established
  route: Intravenous
  frequency: Not established
  duration: Not established
  population: Not established
  purpose: PsychonautWiki dosage classification
  sourceCategory: community
  note: Band from the PsychonautWiki API snapshot built about 2026-06-23.
  sourceId: psychonautwiki
- label: Light dose band
  amount: 2–5 mg
  quantity: 2
  quantityMax: 5
  unit: mg
  ingredient: Cocaine
  formulation: Not established
  route: Intravenous
  frequency: Not established
  duration: Not established
  population: Not established
  purpose: PsychonautWiki dosage classification
  sourceCategory: community
  note: Band from the PsychonautWiki API snapshot built about 2026-06-23.
  sourceId: psychonautwiki
- label: Common dose band
  amount: 5–10 mg
  quantity: 5
  quantityMax: 10
  unit: mg
  ingredient: Cocaine
  formulation: Not established
  route: Intravenous
  frequency: Not established
  duration: Not established
  population: Not established
  purpose: PsychonautWiki dosage classification
  sourceCategory: community
  note: Band from the PsychonautWiki API snapshot built about 2026-06-23.
  sourceId: psychonautwiki
- label: Strong dose band
  amount: 10–15 mg
  quantity: 10
  quantityMax: 15
  unit: mg
  ingredient: Cocaine
  formulation: Not established
  route: Intravenous
  frequency: Not established
  duration: Not established
  population: Not established
  purpose: PsychonautWiki dosage classification
  sourceCategory: community
  note: Band from the PsychonautWiki API snapshot built about 2026-06-23.
  sourceId: psychonautwiki
- label: Heavy dose band (15 mg and above)
  amount: 15 mg and above
  quantity: 15
  quantityMax: null
  unit: mg
  ingredient: Cocaine
  formulation: Not established
  route: Intravenous
  frequency: Not established
  duration: Not established
  population: Not established
  purpose: PsychonautWiki dosage classification
  sourceCategory: community
  note: Band from the PsychonautWiki API snapshot built about 2026-06-23.
  sourceId: psychonautwiki
- label: Threshold dose
  amount: 13 mg
  quantity: 13
  quantityMax: null
  unit: mg
  ingredient: Cocaine
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
  amount: 13–75 mg
  quantity: 13
  quantityMax: 75
  unit: mg
  ingredient: Cocaine
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
  amount: 75–150 mg
  quantity: 75
  quantityMax: 150
  unit: mg
  ingredient: Cocaine
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
  amount: 150–225 mg
  quantity: 150
  quantityMax: 225
  unit: mg
  ingredient: Cocaine
  formulation: Not established
  route: Oral
  frequency: Not established
  duration: Not established
  population: Not established
  purpose: PsychonautWiki dosage classification
  sourceCategory: community
  note: Band from the PsychonautWiki API snapshot built about 2026-06-23.
  sourceId: psychonautwiki
- label: Heavy dose band (225 mg and above)
  amount: 225 mg and above
  quantity: 225
  quantityMax: null
  unit: mg
  ingredient: Cocaine
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
  amount: 2.5 mg
  quantity: 2.5
  quantityMax: null
  unit: mg
  ingredient: Cocaine
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
  amount: 5–15 mg
  quantity: 5
  quantityMax: 15
  unit: mg
  ingredient: Cocaine
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
  amount: 15–30 mg
  quantity: 15
  quantityMax: 30
  unit: mg
  ingredient: Cocaine
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
  amount: 30–45 mg
  quantity: 30
  quantityMax: 45
  unit: mg
  ingredient: Cocaine
  formulation: Not established
  route: Smoked
  frequency: Not established
  duration: Not established
  population: Not established
  purpose: PsychonautWiki dosage classification
  sourceCategory: community
  note: Band from the PsychonautWiki API snapshot built about 2026-06-23.
  sourceId: psychonautwiki
- label: Heavy dose band (45 mg and above)
  amount: 45 mg and above
  quantity: 45
  quantityMax: null
  unit: mg
  ingredient: Cocaine
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
- id: cocaine-multiroute
  analyte: Cocaine
  route: Intravenous, intranasal, and smoked
  formulation: Radiolabeled cocaine
  population: 16 subjects divided among three administration-route groups
  endpoint: elimination-half-life
  statistic: study-mean
  value: 1.15
  low: null
  high: null
  unit: hours
  context: Half-life calculated from the average elimination-rate constant was 69 minutes. IV elimination half-life was 78 minutes; smoked absorption half-time was 1.1 minutes and intranasal absorption half-time 11.7 minutes. Intranasal bioavailability was 80%.
  sourceId: jeffcoat1989
  modelEligible: false
- id: cocaine-iv-coe
  analyte: Cocaine
  route: Intravenous
  formulation: 40 mg IV cocaine
  population: 14 inpatient participants with current cocaine-use histories
  endpoint: elimination-half-life
  statistic: study-mean
  value: 1.1
  low: null
  high: null
  unit: hours
  context: Mean half-life 1.1 hours; individual range 0.8–1.5 hours. Mean Cmax was 301 ng/mL.
  sourceId: coe2018
  modelEligible: true
- id: cocaine-oral-coe
  analyte: Cocaine
  route: Oral
  formulation: 100 mg and 200 mg oral cocaine
  population: 14 inpatient participants with current cocaine-use histories
  endpoint: elimination-half-life
  statistic: reported-range
  value: null
  low: 1.2
  high: 1.3
  unit: hours
  context: Mean half-life was 1.2 hours after 100 mg and 1.3 hours after 200 mg; mean Tmax was 1.3 hours for both. Mean bioavailability was 32% and 45%, respectively.
  sourceId: coe2018
  modelEligible: false
- id: cocaine-numbrino-topical
  analyte: Cocaine
  route: Topical intranasal
  formulation: NUMBRINO 4% cocaine hydrochloride solution via pledgets
  population: Healthy adults
  endpoint: elimination-half-life
  statistic: study-mean
  value: 1.54
  low: null
  high: null
  unit: hours
  context: After 160 mg cocaine hydrochloride applied for 20 minutes, estimated systemic absorption was 23.44%, mean Cmax 142.68 ng/mL, median Tmax 30 minutes from pledget insertion, and apparent elimination half-life 1.54 hours.
  sourceId: numbrino-label
  modelEligible: true
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
    min: 10
    max: 90
    unit: minutes
  phases:
    - name: onset
      basis: elapsed-since-exposure
      min: 3
      max: 10
      unit: minutes
    - name: comeup
      basis: phase-duration
      min: 5
      max: 12
      unit: minutes
    - name: peak
      basis: phase-duration
      min: 7.5
      max: 16
      unit: minutes
    - name: offset
      basis: phase-duration
      min: 10
      max: 25
      unit: minutes
- id: psychonautwiki-intravenous
  measurement: subjective
  route: Intravenous
  population: Ranges compiled by PsychonautWiki contributors
  sourceId: psychonautwiki
  note: PsychonautWiki community duration ranges for this route.
  total:
    min: 5
    max: 15
    unit: minutes
  phases:
    - name: onset
      basis: elapsed-since-exposure
      min: 3
      max: 5
      unit: seconds
    - name: comeup
      basis: phase-duration
      min: 1
      max: 2
      unit: minutes
    - name: peak
      basis: phase-duration
      min: 2
      max: 10
      unit: minutes
    - name: offset
      basis: phase-duration
      min: 1
      max: 5
      unit: minutes
- id: psychonautwiki-oral
  measurement: subjective
  route: Oral
  population: Ranges compiled by PsychonautWiki contributors
  sourceId: psychonautwiki
  note: PsychonautWiki community duration ranges for this route.
  total:
    min: 120
    max: 240
    unit: minutes
  phases:
    - name: onset
      basis: elapsed-since-exposure
      min: 30
      max: 40
      unit: minutes
    - name: comeup
      basis: phase-duration
      min: 40
      max: 50
      unit: minutes
    - name: peak
      basis: phase-duration
      min: 60
      max: 180
      unit: minutes
    - name: offset
      basis: phase-duration
      min: 10
      max: 25
      unit: minutes
- id: psychonautwiki-smoked
  measurement: subjective
  route: Smoked
  population: Ranges compiled by PsychonautWiki contributors
  sourceId: psychonautwiki
  note: PsychonautWiki community duration ranges for this route.
  total:
    min: 5
    max: 15
    unit: minutes
  phases:
    - name: onset
      basis: elapsed-since-exposure
      min: 3
      max: 5
      unit: seconds
    - name: comeup
      basis: phase-duration
      min: 1
      max: 2
      unit: minutes
    - name: peak
      basis: phase-duration
      min: 2
      max: 10
      unit: minutes
    - name: offset
      basis: phase-duration
      min: 1
      max: 5
      unit: minutes
```

## Modifiers

```yaml
- label: Route of administration
  effect: Systemic delivery rate varies markedly by route.
  detail: In the radiolabeled study, smoked cocaine had a 1.1-minute absorption half-time versus 11.7 minutes intranasally; intranasal bioavailability was about 80%, while thermal degradation reduced observed smoked bioavailability.
  sourceId: jeffcoat1989
  observationId: cocaine-multiroute
  factorType: other
  direction: variable
- label: Oral dose
  effect: Oral bioavailability differed between the two studied doses.
  detail: Mean oral bioavailability was 32% after 100 mg and 45% after 200 mg in the same 14 participants.
  sourceId: coe2018
  observationId: cocaine-oral-coe
  factorType: other
  direction: variable
```

## Effects

```yaml
- conceptId: euphoria
  name: Rush, drug effect, and liking
  direction: Increased
  evidence: Human research
  description: Oral and IV cocaine produced qualitatively similar, dose-dependent increases in ratings including rush, drug effect, and liking; IV cocaine was approximately tenfold more potent across the study's measures.
  sourceId: smith2001
  population: Volunteers with histories of cocaine abuse
  exposure: Oral 62.5–250 mg/70 kg or IV 12.5–50 mg/70 kg
  instrument: Participant subjective ratings and money-versus-drug choice procedure
  magnitude: Dose-dependent; exact scale values are not available in the retrieved abstract.
- conceptId: euphoria
  name: Positive subjective effects with repeated intranasal cocaine
  direction: Increased
  evidence: Human research
  description: Intranasal cocaine increased positive subjective-effect ratings with dose, but the second same-dose administration did not further increase positive ratings even though plasma cocaine approximately doubled.
  sourceId: foltin2004
  population: 10 experienced male cocaine users
  exposure: Two intranasal administrations of 0.06–1.37 mg/kg, 40 minutes apart
  instrument: Subjective-effect ratings
  magnitude: Dose-related increase with evidence of acute within-session tolerance.
```

## Outcomes

```yaml
- conceptId: local-anesthesia
  name: Nasal anesthetic success
  direction: Increased
  evidence: Human research
  description: In the pivotal randomized trial, anesthetic success occurred in 183/258 participants receiving 4% cocaine hydrochloride versus 25/127 receiving placebo; the 10% arm achieved 210/254.
  sourceId: numbrino-label
  population: 639 adults requiring diagnostic or surgical procedures involving accessible nasal mucosa
  exposure: Single 20-minute pledget application of 4% or 10% cocaine hydrochloride or placebo
  instrument: NPRS pain score of 0 at 20 minutes plus no additional anesthesia or analgesia during the procedure
  magnitude: 71% with 4%, 83% with 10%, 20% with placebo.
- conceptId: cardiovascular
  name: Heart rate and blood pressure
  direction: Increased
  evidence: Human research
  description: Controlled oral/IV and intranasal studies found dose-related increases in heart rate and blood pressure; repeated intranasal dosing showed little additional cardiovascular response after the second dose despite approximately doubled plasma cocaine.
  sourceId: foltin2004
  population: 10 experienced male cocaine users
  exposure: Repeated intranasal cocaine
  instrument: Heart rate and blood pressure
  magnitude: Dose-related initial increase; no further increase after the second same-dose administration.
- conceptId: myocardial-infarction
  name: Acute myocardial infarction onset
  direction: Increased
  evidence: Human research
  description: In a case-crossover analysis of 3,946 myocardial-infarction patients, nine reported cocaine use during the preceding hour; estimated MI-onset risk was 23.7 times baseline during that hour.
  sourceId: mittleman1999
  population: 3,946 patients interviewed after acute myocardial infarction
  exposure: Self-reported cocaine use within 60 minutes before symptom onset
  instrument: Case-crossover comparison with each participant's expected exposure frequency
  magnitude: Relative risk 23.7; 95% CI 8.5–66.3.
- conceptId: stroke
  name: Acute ischemic stroke association
  direction: Increased
  evidence: Human research
  description: Cocaine use within the preceding 24 hours was associated with early-onset ischemic stroke after adjustment for alcohol, smoking, and hypertension.
  sourceId: cheng2016
  population: 1,090 ischemic-stroke cases and 1,154 controls aged 15–49 years
  exposure: Cocaine use within 24 hours
  instrument: Population-based case-control interview and logistic regression
  magnitude: Adjusted OR 5.7; 95% CI 1.7–19.7.
- conceptId: stroke
  name: Lifetime-ever cocaine use and ischemic stroke
  direction: Variable
  evidence: Human research
  description: The same case-control study found no association for ever having used cocaine when acute timing was not considered; 28% of cases and 26% of controls reported ever use.
  sourceId: cheng2016
  population: 1,090 ischemic-stroke cases and 1,154 controls aged 15–49 years
  exposure: Ever use of cocaine
  instrument: Population-based case-control interview
  magnitude: Null association reported.
- conceptId: seizure
  name: Cocaine-associated seizures
  direction: Increased
  evidence: Limited research
  description: Among 43 emergency-department patients identified retrospectively with cocaine-associated seizures, 42 had a single tonic-clonic seizure and one developed status epilepticus.
  sourceId: majlesi2010
  population: 43 patients across 15 hospitals
  exposure: Suspected cocaine-associated seizure with cocaine-use history or positive urine testing
  instrument: Retrospective chart review
  magnitude: 42/43 single seizures; 1/43 status epilepticus.
- conceptId: withdrawal
  name: Symptoms during 28-day abstinence
  direction: Decreased
  evidence: Human research
  description: Negative affect improved linearly and cocaine craving remained low over monitored abstinence; the investigators did not observe a phasic withdrawal syndrome or sleep disturbance in this outpatient sample.
  sourceId: coffey2000
  population: 24 male and female cocaine-dependent outpatients
  exposure: Monitored cocaine abstinence for 28 days
  instrument: Serial mood, craving, cognitive, sleep, and withdrawal assessments
  magnitude: Directional improvements reported; no phasic syndrome detected.
- conceptId: fetal-growth
  name: Fetal growth
  direction: Decreased
  evidence: Human research
  description: In a prospective cohort restricted to full-term infants, models controlling for alcohol, tobacco, marijuana, and other covariates supported cocaine-associated fetal-growth deficits; there was no evidence of a disproportionate head-circumference effect after overall growth was accounted for.
  sourceId: bandstra2001
  population: 476 full-term neonates; 253 prenatally cocaine-exposed and 223 non-cocaine-exposed
  exposure: Prenatal cocaine exposure
  instrument: Structural-equation and multiple-regression models
  magnitude: Fetal-growth deficit 0.63 SD; gestational-age effect 0.33 SD.
```

## Mechanisms

```yaml
- title: Dopamine-transporter blockade
  description: PET imaging in regular cocaine users found that IV cocaine 0.3–0.6 mg/kg occupied about 60–77% of dopamine-transporter sites; self-reported high correlated with transporter occupancy, linking DAT blockade to acute subjective effects in humans.
  sourceId: volkow1997
  conceptId: dopamine-transporter
- title: Voltage-gated sodium-channel blockade
  description: The U.S. cocaine-hydrochloride label describes reversible blockade of voltage-gated sodium channels, preventing transient sodium conductance and action-potential propagation; this accounts for topical local anesthesia.
  sourceId: numbrino-label
```

## Cautions

```yaml
- title: Cardiovascular toxicity
  description: Cocaine raises heart rate and blood pressure and can produce myocardial ischemia, infarction, and arrhythmias. The label warns that serious cardiovascular reactions have occurred, while the case-crossover study found a large but imprecise transient increase in MI-onset risk after recent use.
  sourceId: mittleman1999
- title: Neurologic toxicity
  description: Seizures are a recognized cocaine complication. A 43-patient multicenter retrospective series found most identified cocaine-associated seizures were single self-limited tonic-clonic events, but status epilepticus occurred in one patient.
  sourceId: majlesi2010
- title: Psychiatric and dependence risk
  description: The current prescription label carries a boxed warning for abuse and dependence and describes euphoria, excitation, anxiety, irritability, paranoia, confusion, and psychosis among effects associated with abuse; repeated misuse can produce physical dependence.
  sourceId: numbrino-label
- title: Abstinence and withdrawal uncertainty
  description: Prospective 28-day monitoring of 24 cocaine-dependent outpatients found improving negative affect and low craving without a clear phasic withdrawal syndrome or sleep disturbance, showing that withdrawal trajectories are not uniformly stereotyped.
  sourceId: coffey2000
- title: Pregnancy
  description: The prescription label states that data from a single medically applied topical dose are insufficient to determine pregnancy risk. Observational chronic-exposure literature is confounded by coexposures; a prospective cohort nevertheless found an adjusted fetal-growth association, while finding no disproportionate head-circumference deficit after overall growth was modeled.
  sourceId: bandstra2001
- title: Evidence does not define a nonmedical safe dose
  description: Human laboratory studies used screened participants, controlled formulations, monitoring, and predefined cardiovascular stopping criteria; their administered doses do not establish safety for unregulated formulations, repeated binges, or polysubstance exposure.
  sourceId: coe2018
```

## Claims

```yaml
- id: cocaine-dat-occupancy
  assertion: Intravenous cocaine occupies the human dopamine transporter, and occupancy is associated with the magnitude of the subjective high.
  relation: transporter-occupancy
  participants:
    - entityId: substance:cocaine
      role: substance
    - entityId: tag:dopamine-transporter
      role: target
    - entityId: tag:dopamine
      role: transmitter
  context: PET study in regular cocaine users receiving IV cocaine 0.3–0.6 mg/kg.
  sourceIds:
    - volkow1997
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Small laboratory imaging study; it establishes an acute exposure-response relationship, not a complete mechanism of dependence or toxicity.
- id: cocaine-local-anesthesia
  assertion: Topical cocaine hydrochloride can produce local nasal anesthesia through sodium-channel blockade.
  relation: local-anesthetic-action
  participants:
    - entityId: substance:cocaine
      role: substance
    - entityId: tag:voltage-gated-sodium-channel
      role: target
  context: FDA-labeled topical nasal use in adults.
  sourceIds:
    - numbrino-label
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Approved topical use does not establish benefit for systemic or nonmedical routes.
- id: cocaine-acute-stroke
  assertion: Recent cocaine exposure is associated with higher odds of early-onset ischemic stroke, whereas ever-use alone was not associated in the same study.
  relation: acute-exposure-association
  participants:
    - entityId: substance:cocaine
      role: exposure
    - entityId: tag:stroke
      role: outcome
  context: Population-based case-control study of people aged 15–49 years.
  sourceIds:
    - cheng2016
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Cocaine exposure was self-reported and acute-exposure counts were small, producing wide confidence intervals; association does not by itself prove individual-event causation.
- id: cocaine-nasal-anesthesia
  assertion: In the pivotal labeled trial, 4% cocaine hydrochloride produced more protocol-defined nasal anesthetic success than placebo.
  relation: clinical-benefit
  participants:
    - entityId: substance:cocaine
      role: intervention
    - entityId: tag:local-anesthesia
      role: outcome
  context: Single topical pledget application before nasal diagnostic or surgical procedures.
  sourceIds:
    - numbrino-label
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Patients with important cardiovascular disease or uncontrolled hypertension were excluded, and placebo participants did not proceed to the procedure after unblinding.
```

## Interactions

```yaml
- id: cocaine-ethanol
  name: Ethanol (alcohol)
  otherSlug: null
  summary: In eight experienced nondependent volunteers, 100 mg intranasal cocaine plus 0.8 g/kg ethanol produced greater heart-rate, rate-pressure-product, euphoria, and well-being responses than cocaine alone and generated cocaethylene and norcocaethylene.
  sourceId: farre1997
  mechanism: Ethanol alters cocaine metabolism and permits formation of cocaethylene; pharmacodynamic interaction may also contribute.
  context: Double-blind, double-dummy randomized crossover study; sample size was eight.
  severity:
    label: Increased cardiovascular exposure and effect in controlled human study
    sourceId: farre1997
  conflictingSourceIds: []
- id: cocaine-disulfiram
  name: Disulfiram
  otherSlug: null
  summary: The current label reports that disulfiram increased cocaine AUC and Cmax several-fold after acute intranasal exposure and increased AUC after IV exposure.
  sourceId: numbrino-label
  mechanism: Reduced cocaine metabolism and increased systemic exposure are described in the label.
  context: Label interaction based on published human literature.
  severity:
    label: Substantial pharmacokinetic interaction
    sourceId: numbrino-label
  conflictingSourceIds: []
- id: cocaine-sympathomimetics
  name: Epinephrine and phenylephrine
  otherSlug: null
  summary: The label reports myocardial ischemia, myocardial infarction, and ventricular arrhythmias with concomitant vasoconstrictor use and cocaine during nasal or sinus surgery.
  sourceId: numbrino-label
  mechanism: Additive sympathomimetic and vasoconstrictor effects.
  context: Label warning based on reported clinical events; incidence is not established.
  severity:
    label: Serious cardiovascular interaction
    sourceId: numbrino-label
  conflictingSourceIds: []
- id: cocaine-monoaminergic-drugs
  name: Other CNS stimulants, tricyclic antidepressants, and monoamine-oxidase inhibitors
  otherSlug: null
  summary: The label describes potential amplification of sympathetic or CNS-stimulant effects, including hypertension, arrhythmias, nervousness, irritability, or convulsions depending on the interacting class.
  sourceId: numbrino-label
  mechanism: Additive or potentiated monoaminergic and sympathomimetic activity.
  context: Regulatory interaction warning; quantitative interaction magnitudes are not established in the label.
  severity:
    label: Potentially clinically significant
    sourceId: numbrino-label
  conflictingSourceIds: []
```

## Experience links

```yaml
[]
```

## References

```yaml
- id: pubchem
  title: Cocaine | C17H21NO4 | CID 446220
  authors: NCBI PubChem
  year: 2026
  url: https://pubchem.ncbi.nlm.nih.gov/compound/446220
  kind: Chemical database
  insight: Source for the parent-compound identity, formula, molecular weight, PubChem CID, and structure record.
  limitation: Database identity does not characterize purity, formulation, salt form, dose, clinical effects, or safety.
  funding: U.S. National Library of Medicine; source-level external funding was not assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed for this government database record.
  conflictOfInterestStatus: not-assessed
  disclosureUrl: https://pubchem.ncbi.nlm.nih.gov/compound/446220
- id: numbrino-label
  title: "These highlights do not include all the information needed to use NUMBRINO safely and effectively. See full prescribing information for NUMBRINO. NUMBRINO (cocaine hydrochloride) nasal solution, CII Initial U.S. Approval: 2017"
  authors: Omnivium Pharmaceuticals LLC.
  year: 2026
  url: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=d724b5b4-6654-4bf5-9eed-e2c7943084ed
  kind: Current U.S. prescribing information
  insight: Provides identity of cocaine hydrochloride versus free-base equivalent, approved indication and dosing, pivotal anesthetic trial, pharmacodynamics, pharmacokinetics, abuse/dependence, pregnancy, warnings, and drug interactions.
  limitation: Product labeling concerns controlled topical nasal use and cannot be generalized to unregulated cocaine, other routes, chronic exposure, or polysubstance use.
  funding: Product labeling submitted by the labeler; clinical-program funding was not separately stated in the SPL sections reviewed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: The document is manufacturer product labeling; no separate academic-author conflict statement applies.
  conflictOfInterestStatus: not-assessed
  disclosureUrl: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=d724b5b4-6654-4bf5-9eed-e2c7943084ed
- id: jeffcoat1989
  title: Cocaine disposition in humans after intravenous injection, nasal insufflation (snorting), or smoking.
  authors: A R Jeffcoat; M Perez-Reyes; J M Hill; B M Sadler; C E Cook
  year: 1989
  pmid: "2565204"
  url: https://pubmed.ncbi.nlm.nih.gov/2565204/
  kind: Human comparative pharmacokinetic study
  insight: Reports smoked and intranasal absorption rates, intranasal bioavailability, IV distribution and elimination, pooled elimination half-life, and major urinary metabolites.
  limitation: Sixteen subjects were divided among route groups; the retrieved abstract does not state administered route-specific doses or full protocol details.
  funding: PubMed indexes Research Support, U.S. Gov't, P.H.S.; exact grant details were not recovered.
  sponsorshipStatus: non-industry-funded
  conflictsOfInterest: Not reported in the retrieved PubMed record.
  conflictOfInterestStatus: not-reported
  disclosureUrl: https://pubmed.ncbi.nlm.nih.gov/2565204/
- id: coe2018
  title: Bioavailability and Pharmacokinetics of Oral Cocaine in Humans.
  authors: Marion A Coe; Rebecca A Jufer Phipps; Edward J Cone; Sharon L Walsh
  year: 2018
  pmid: "29462364"
  doi: 10.1093/jat/bky007
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC5952935/
  kind: Within-subject human pharmacokinetic study
  insight: Provides oral 100/200 mg and IV 40 mg half-lives, Cmax, Tmax, oral bioavailability, clearance, and metabolite profiles.
  limitation: Fourteen screened inpatient participants with current cocaine-use histories; findings do not define uncontrolled-use safety.
  funding: National Institute on Drug Abuse grant DA10029 to Sharon L Walsh; PubMed also lists NIDA support.
  sponsorshipStatus: non-industry-funded
  conflictsOfInterest: A conflict statement was not recovered from the retrieved source text.
  conflictOfInterestStatus: not-reported
  disclosureUrl: https://pmc.ncbi.nlm.nih.gov/articles/PMC5952935/
- id: smith2001
  title: Physiological, subjective and reinforcing effects of oral and intravenous cocaine in humans.
  authors: B J Smith; H E Jones; R R Griffiths
  year: 2001
  pmid: "11498721"
  doi: 10.1007/s002130100740
  url: https://pubmed.ncbi.nlm.nih.gov/11498721/
  kind: Double-blind within-subject human laboratory study
  insight: Shows dose-dependent cardiovascular, subjective, and reinforcing effects after oral and IV cocaine and approximately tenfold greater IV potency across measured outcomes.
  limitation: Volunteers had histories of cocaine abuse; the retrieved abstract does not provide the sample size or complete adverse-event data.
  funding: PubMed indexes Research Support, U.S. Gov't, P.H.S.; exact grant details were not recovered.
  sponsorshipStatus: non-industry-funded
  conflictsOfInterest: Not reported in the retrieved PubMed record.
  conflictOfInterestStatus: not-reported
  disclosureUrl: https://pubmed.ncbi.nlm.nih.gov/11498721/
- id: foltin2004
  title: "Intranasal cocaine in humans: acute tolerance, cardiovascular and subjective effects."
  authors: Richard W Foltin; Margaret Haney
  year: 2004
  pmid: "15159138"
  doi: 10.1016/j.pbb.2004.02.018
  url: https://pubmed.ncbi.nlm.nih.gov/15159138/
  kind: Human repeated-dose laboratory study
  insight: Demonstrates dose-related positive subjective and cardiovascular effects and acute within-session tolerance despite approximately doubled plasma cocaine after the second dose.
  limitation: Ten experienced male users; short monitored sessions cannot characterize longer-term tolerance or heterogeneous populations.
  funding: PubMed indexes Research Support, U.S. Gov't, P.H.S.; exact grant details were not recovered.
  sponsorshipStatus: non-industry-funded
  conflictsOfInterest: Not reported in the retrieved PubMed record.
  conflictOfInterestStatus: not-reported
  disclosureUrl: https://pubmed.ncbi.nlm.nih.gov/15159138/
- id: volkow1997
  title: Relationship between subjective effects of cocaine and dopamine transporter occupancy.
  authors: N D Volkow; G J Wang; M W Fischman; R W Foltin; J S Fowler; N N Abumrad; S Vitkun; J Logan; S J Gatley; N Pappas; R Hitzemann; C E Shea
  year: 1997
  pmid: "9126740"
  doi: 10.1038/386827a0
  url: https://pubmed.ncbi.nlm.nih.gov/9126740/
  kind: Human PET pharmacology study
  insight: Links IV cocaine dose, dopamine-transporter occupancy, striatal cocaine kinetics, and self-reported high.
  limitation: Controlled acute imaging study in regular cocaine users; it does not establish all molecular pathways responsible for reinforcement or dependence.
  funding: PubMed indexes U.S. government P.H.S. and non-P.H.S. research support; exact grants were not recovered.
  sponsorshipStatus: non-industry-funded
  conflictsOfInterest: Not reported in the retrieved PubMed record.
  conflictOfInterestStatus: not-reported
  disclosureUrl: https://pubmed.ncbi.nlm.nih.gov/9126740/
- id: mittleman1999
  title: Triggering of myocardial infarction by cocaine.
  authors: M A Mittleman; D Mintzer; M Maclure; G H Tofler; J B Sherwood; J E Muller
  year: 1999
  pmid: "10351966"
  doi: 10.1161/01.CIR.99.21.2737
  url: https://pubmed.ncbi.nlm.nih.gov/10351966/
  kind: Case-crossover observational study
  insight: Estimates a sharp transient rise in myocardial-infarction onset during the hour after cocaine exposure.
  limitation: Only nine participants reported cocaine use in the hour before MI, yielding a wide confidence interval; exposure was retrospectively self-reported.
  funding: PubMed indexes U.S. P.H.S. and non-U.S. government research support; exact grants were not recovered.
  sponsorshipStatus: non-industry-funded
  conflictsOfInterest: Not reported in the retrieved PubMed record.
  conflictOfInterestStatus: not-reported
  disclosureUrl: https://pubmed.ncbi.nlm.nih.gov/10351966/
- id: cheng2016
  title: Cocaine Use and Risk of Ischemic Stroke in Young Adults.
  authors: Yu-Ching Cheng; Kathleen A Ryan; Saad A Qadwai; Jay Shah; Mary J Sparks; Marcella A Wozniak; Barney J Stern; Michael S Phipps; Carolyn A Cronin; Laurence S Magder; John W Cole; Steven J Kittner
  year: 2016
  pmid: "26965853"
  doi: 10.1161/STROKEAHA.115.011417
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC6128285/
  kind: Population-based case-control study
  insight: Finds a strong association for use within 24 hours but no association for ever use; route-specific estimates have wide confidence intervals.
  limitation: Acute exposure was uncommon, self-reported, and observational; smoking- and inhalation-route estimates were imprecise.
  funding: Department of Veterans Affairs, Centers for Disease Control and Prevention, and National Institutes of Health/NINDS support are reported in the full-text funding statement.
  sponsorshipStatus: non-industry-funded
  conflictsOfInterest: None reported.
  conflictOfInterestStatus: none-declared
  disclosureUrl: https://pmc.ncbi.nlm.nih.gov/articles/PMC6128285/
- id: majlesi2010
  title: Cocaine-associated seizures and incidence of status epilepticus.
  authors: Nima Majlesi; Richard Shih; Frederick W Fiesseler; Oliver Hung; Renato Debellonio
  year: 2010
  pmid: "20823966"
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC2908651/
  kind: Multicenter retrospective observational study
  insight: Describes 43 cocaine-associated seizure presentations, most of which were single tonic-clonic seizures.
  limitation: Retrospective attribution based on use history or urine testing; no denominator of all cocaine exposures, so absolute seizure incidence cannot be estimated.
  funding: Not reported in the retrieved PubMed record.
  sponsorshipStatus: not-reported
  conflictsOfInterest: Not reported in the retrieved record.
  conflictOfInterestStatus: not-reported
  disclosureUrl: https://pmc.ncbi.nlm.nih.gov/articles/PMC2908651/
- id: coffey2000
  title: "Acute and protracted cocaine abstinence in an outpatient population: a prospective study of mood, sleep and withdrawal symptoms."
  authors: S F Coffey; B S Dansky; M H Carrigan; K T Brady
  year: 2000
  pmid: "10812287"
  doi: 10.1016/S0376-8716(99)00126-X
  url: https://pubmed.ncbi.nlm.nih.gov/10812287/
  kind: Prospective abstinence study
  insight: Reports improving negative affect and cognition over 28 days, low craving, and no observed phasic withdrawal syndrome or sleep disturbance.
  limitation: Twenty-four outpatients; abstinence was inferred from urine testing and self-report, and the small sample may miss less common or heterogeneous withdrawal patterns.
  funding: PubMed indexes Research Support, U.S. Gov't, P.H.S.; exact grant details were not recovered.
  sponsorshipStatus: non-industry-funded
  conflictsOfInterest: Not reported in the retrieved PubMed record.
  conflictOfInterestStatus: not-reported
  disclosureUrl: https://pubmed.ncbi.nlm.nih.gov/10812287/
- id: bandstra2001
  title: "Intrauterine growth of full-term infants: impact of prenatal cocaine exposure."
  authors: E S Bandstra; C E Morrow; J C Anthony; S S Churchill; D C Chitwood; B W Steele; A Y Ofir; L Xue
  year: 2001
  pmid: "11731653"
  doi: 10.1542/peds.108.6.1309
  url: https://pubmed.ncbi.nlm.nih.gov/11731653/
  kind: Prospective pregnancy cohort
  insight: Reports adjusted cocaine-associated fetal-growth and gestational-age effects while finding no disproportionate head-circumference effect after overall growth was modeled.
  limitation: Restricted to full-term infants of African-American inner-city mothers; residual confounding and coexposures remain possible, and findings concern prenatal exposure patterns rather than a single medical topical dose.
  funding: PubMed indexes Research Support, U.S. Gov't, P.H.S.; exact grant details were not recovered.
  sponsorshipStatus: non-industry-funded
  conflictsOfInterest: Not reported in the retrieved PubMed record.
  conflictOfInterestStatus: not-reported
  disclosureUrl: https://pubmed.ncbi.nlm.nih.gov/11731653/
- id: farre1997
  title: "Cocaine and alcohol interactions in humans: neuroendocrine effects and cocaethylene metabolism."
  authors: M Farré; R de la Torre; M L González; M T Terán; P N Roset; E Menoyo; J Camí
  year: 1997
  pmid: "9336321"
  url: https://pubmed.ncbi.nlm.nih.gov/9336321/
  kind: Randomized crossover human interaction study
  insight: Shows greater cardiovascular and pleasurable subjective effects with alcohol plus intranasal cocaine and documents cocaethylene formation.
  limitation: Eight experienced nondependent volunteers; acute controlled exposure cannot quantify population-level morbidity from combined use.
  funding: PubMed indexes Research Support, Non-U.S. Gov't; exact sponsor was not recovered.
  sponsorshipStatus: non-industry-funded
  conflictsOfInterest: Not reported in the retrieved PubMed record.
  conflictOfInterestStatus: not-reported
  disclosureUrl: https://pubmed.ncbi.nlm.nih.gov/9336321/
- id: ecfr-schedule-ii
  title: 21 CFR § 1308.12 — Schedule II.
  authors: U.S. Drug Enforcement Administration, Office of the Federal Register
  year: 2026
  url: https://www.ecfr.gov/current/title-21/chapter-II/part-1308/subject-group-ECFRf62f8e189108c4d/section-1308.12
  kind: regulation
  insight: Lists coca leaves and their derivatives, including cocaine (DEA code 9041), in Schedule II subject to specified exceptions.
  limitation: Federal scheduling does not describe every state law, professional rule, prescription requirement, or non-U.S. jurisdiction.
  funding: U.S. government regulatory publication; external research funding is not applicable.
  sponsorshipStatus: no-external-funding
  conflictsOfInterest: Not applicable to a codified federal regulation.
  conflictOfInterestStatus: not-assessed
  disclosureUrl: https://www.ecfr.gov/current/title-21/chapter-II/part-1308/subject-group-ECFRf62f8e189108c4d/section-1308.12
- id: psychonautwiki
  title: "Cocaine: PsychonautWiki dose and duration data"
  authors: PsychonautWiki contributors
  year: 2026
  url: https://psychonautwiki.org/wiki/Cocaine
  kind: Community wiki data · CC BY 4.0
  insight: Source of this page's community dose bands and subjective duration ranges, from the PsychonautWiki API snapshot built about 2026-06-23 and retrieved 2026-11-06. The structured data is used under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/); BHWiki normalized unit symbols and route names.
  limitation: "PsychonautWiki states: \"PW's dosage information is gathered from users and resources for educational purposes only. It is not a recommendation and should be verified with other sources for accuracy.\" Its dose and duration values carry no per-value citations."
```

## Legal

```yaml
- jurisdiction: United States — federal
  activity: Possession, prescribing, dispensing, manufacture, and other controlled-substance activities
  status: Coca leaves and derivatives including cocaine (DEA controlled-substance code 9041) are listed in Schedule II under 21 CFR § 1308.12, subject to the regulation's stated exceptions.
  sourceUrl: https://www.ecfr.gov/current/title-21/chapter-II/part-1308/subject-group-ECFRf62f8e189108c4d/section-1308.12
  asOf: 2026-10-16
- jurisdiction: United States — FDA-labeled medical use
  activity: Topical nasal local anesthesia in adults
  status: NUMBRINO is prescription cocaine hydrochloride nasal solution labeled for induction of local anesthesia of accessible nasal mucous membranes when performing diagnostic procedures and surgeries on or through the nasal cavities.
  sourceUrl: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=d724b5b4-6654-4bf5-9eed-e2c7943084ed
  asOf: 2026-10-16
```

