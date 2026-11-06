---
slug: dmt
name: DMT
subtitle: Short-acting tryptamine psychedelic with rapid intravenous pharmacokinetics.
aliases:
  - N,N-Dimethyltryptamine
  - Dimethyltryptamine
formula: C12H16N2
molecularWeight: 188.27 g/mol
pubchemCid: 6089
smiles: CN(C)CCC1=CNC2=CC=CC=C21
category: Psychedelic
tags:
  - psychedelic
  - tryptamine
accent: "#a89bc4"
reviewedAt: 2026-10-16
editorialStatus: sourced-draft
halfLife:
  label: 9–12 min after a 10-min IV infusion
  low: 0.15
  high: 0.2
  context: Mean elimination half-life in psychedelic-naïve healthy adults receiving 9–21.5 mg DMT free-base equivalent as two-phase 10-min intravenous infusions. A separate 2026 bolus study reported an approximately 6–7 min elimination half-life, indicating protocol-dependent estimates rather than one universal value.
  sourceId: good2023-pk
  observationId: dmt-pk-good2023
kinetics:
  onset: IV bolus effects begin within seconds and peak within about 2 min; slower infusions produce a more gradual rise.
  peak: With IV bolus dosing, subjective effects peak within the first 2 min. With the 10-min SPL026 infusion, plasma Tmax was near the end of infusion, approximately 10–12 min.
  duration: Felt effects after IV bolus are much longer than the plasma half-life but still brief, generally subsiding within about 12–30 min in a modern controlled bolus study. Continuous infusion can sustain effects while drug delivery continues.
  bioavailability: The human evidence emphasized here uses intravenous DMT. DMT without monoamine-oxidase inhibition has poor oral availability because of rapid metabolism; ayahuasca or pharmaceutical DMT-plus-MAO-inhibitor regimens are pharmacologically different interventions.
  metabolism: DMT is rapidly cleared, with human in-vitro and clinical evidence supporting a major role for MAO-A and rapid formation of indole-3-acetic acid. CYP2D6 and, to a lesser extent, CYP2C19 metabolized DMT in vitro where MAO-A activity was sparse.
  sourceId: good2023-pk
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
x-order: 406
---

## Summary

N,N-Dimethyltryptamine (DMT) is a tryptamine psychedelic whose human intravenous pharmacology is characterized by extremely rapid onset, intense dose-dependent alterations of perception and consciousness, and rapid plasma clearance. Modern fixed-dose, bolus, and continuous-infusion studies show that the administration pattern strongly changes both the time course and tolerability of the experience: an IV bolus can peak within about 2 min and resolve within roughly 12–30 min, whereas controlled infusion can sustain a chosen intensity for hours while drug delivery continues. Plasma half-life estimates are correspondingly short, approximately 9–12 min after a 10-min infusion and about 6–7 min in a recent bolus study. Sources: `strassman1994-subjective`, `good2023-pk`, `erne2025-continuous`, `erne2026-bolus`.

Human evidence is strongest for acute pharmacology and safety under intensive research supervision, not for established clinical treatment. A 2026 phase IIa trial in 34 adults with moderate-to-severe major depressive disorder found a greater 2-week reduction in MADRS depression scores after one 21.5 mg, 10-min IV DMT session with psychotherapeutic support than after placebo, but the study was small, industry-sponsored, and incorporated substantial psychological support; longer follow-up after the blinded comparison included open-label treatment and therefore cannot by itself establish durable placebo-controlled efficacy. Source: `erritzoe2026-mdd`.

DMT should not be conflated with ayahuasca, 5-MeO-DMT, psilocybin, or isolated harmala alkaloids. In particular, ayahuasca changes DMT pharmacokinetics by combining DMT with monoamine-oxidase-A inhibition and is therefore not evidence for DMT monotherapy. Source: `good2023-pk`.

## Description

DMT is N,N-dimethyltryptamine, PubChem CID 6089, molecular formula C12H16N2 and molecular weight 188.27 g/mol. This article concerns DMT itself and prioritizes controlled human IV bolus and infusion data. Source: `pubchem6089`.

Classic human dose-response work found an almost immediate subjective response after IV administration, with higher doses producing vivid visual phenomena, profound changes in bodily awareness and sense of self, euphoria in some sessions, and anxiety or loss of control in others. Contemporary studies reproduce the steep, rapid dose-response while showing that slower or participant-adjustable infusion can soften the transition into the psychedelic state. Sources: `strassman1994-subjective`, `james2024-phase1`, `erne2025-continuous`, `erne2026-bolus`.

The acute physiological state is not purely subjective. Human studies have measured transient increases in blood pressure, autonomic changes, pupil dilation, altered sustained attention and postural stability, and suppression of occipital alpha EEG power at sufficient exposure. These outcomes need to be distinguished from subjective intensity and from pharmacokinetics: plasma DMT can have a single-digit-minute elimination half-life even though conscious effects persist longer, while continuous drug delivery can maintain effects despite rapid clearance. Sources: `strassman1994-autonomic`, `james2024-phase1`, `vanderheijden2025-sixhour`, `erne2026-bolus`.

## Evidence note

The evidence base contains several small controlled human studies with unusually detailed pharmacokinetic and pharmacodynamic sampling, but sample sizes remain modest and study populations are heavily screened. Psychedelic-naïve and psychedelic-experienced volunteers have both been studied; protocols differ in blinding, preparation, room environment, psychological support, infusion rate, bolus use, and expectancy, all of which complicate cross-study dose comparisons. Sources: `good2023-pk`, `james2024-phase1`, `erne2025-continuous`, `erne2026-bolus`.

The most direct DMT-only randomized clinical efficacy evidence located for major depression is the 2026 SPL026 phase IIa study. A recruiting Swiss study is separately examining antidepressant response to DMT with versus without propofol masking; its registry entry has no efficacy results and is not evidence that the intervention works. Sources: `erritzoe2026-mdd`, `nct06927076`.

Human receptor evidence should be described conservatively. The reviewed literature includes analyses that relate DMT-induced fMRI reorganization to independently acquired PET maps of neurotransmitter receptors and transporters, including the serotonin system, but this is not the same as directly measuring DMT receptor occupancy with PET in the dosed participants. No direct human DMT 5-HT2A occupancy study was identified in the evidence set reviewed for this article; that is a search-limited evidence gap, not proof that none exists. Sources: `luppi2023-pet-atlas`, `piccinini2025-dynamics`.

## Doses

```yaml
- label: Classic IV dose-response study
  amount: 0.05–0.4 mg/kg
  quantity: 0.05
  quantityMax: 0.4
  unit: mg/kg
  ingredient: N,N-dimethyltryptamine
  formulation: DMT
  route: intravenous
  frequency: Single administration at each study session
  duration: Bolus/injection protocol; exact administration duration is not relied on here
  population: Healthy volunteers experienced with hallucinogens
  purpose: Acute human dose-response, subjective, autonomic, cardiovascular, and neuroendocrine characterization
  sourceCategory: research
  note: Doses studied were 0.05, 0.1, 0.2, and 0.4 mg/kg with placebo control. The hallucinogenic threshold in the accompanying physiological report was approximately 0.2 mg/kg and above.
  sourceId: strassman1994-autonomic
- label: SPL026 phase I fixed-dose infusions
  amount: 9, 12, 17, or 21.5 mg DMT free-base equivalent over 10 min
  quantity: 9
  quantityMax: 21.5
  unit: mg
  ingredient: N,N-dimethyltryptamine
  formulation: DMT fumarate (SPL026), expressed as DMT free-base equivalent
  route: intravenous infusion
  frequency: Single dose
  duration: 10 min
  population: Psychedelic-naïve healthy adults
  purpose: Phase I safety, tolerability, pharmacokinetics, and pharmacodynamics
  sourceCategory: research
  note: Each regimen used two 5-min phases. The first phase was 6 mg; the second supplied 3, 6, 11, or 15.5 mg, respectively. The 21.5 mg regimen was 6 mg over 5 min followed by 15.5 mg over 5 min.
  sourceId: good2023-pk
- label: Phase IIa MDD regimen
  amount: 21.5 mg over 10 min
  quantity: 21.5
  quantityMax: 21.5
  unit: mg
  ingredient: N,N-dimethyltryptamine
  formulation: DMT fumarate (SPL026), DMT free-base equivalent
  route: intravenous infusion
  frequency: One randomized dose; an open-label phase subsequently allowed another active session
  duration: 10 min
  population: Adults with moderate-to-severe major depressive disorder
  purpose: Antidepressant efficacy and safety with psychotherapeutic support
  sourceCategory: research
  note: The blinded primary comparison assessed MADRS change 2 weeks after the first randomized DMT or placebo session.
  sourceId: erritzoe2026-mdd
- label: Two-hour continuous-infusion dose-response
  amount: 0.6–2.4 mg/min
  quantity: 0.6
  quantityMax: 2.4
  unit: mg/min
  ingredient: N,N-dimethyltryptamine
  formulation: DMT
  route: intravenous infusion
  frequency: Placebo and four active sessions in a randomized crossover design
  duration: 120 min
  population: 22 healthy adults
  purpose: Continuous-infusion pharmacokinetics, acute effects, autonomic effects, and self-guided titration
  sourceCategory: research
  note: Fixed rates were 0.6, 1.2, 1.8, and 2.4 mg/min. A separate session permitted prespecified rate adjustments to target a desired subjective intensity.
  sourceId: erne2025-continuous
- label: Six-hour bolus-plus-infusion regimens
  amount: 1.5 mg + 0.105 mg/min; 7.5 mg + 0.525 mg/min; or 5.0 mg + 0.7875 mg/min
  quantity: null
  quantityMax: null
  unit: regimen
  ingredient: N,N-dimethyltryptamine
  formulation: DMT
  route: intravenous bolus followed by infusion
  frequency: Single ascending-dose protocol
  duration: 30-sec loading bolus followed by 6-h infusion
  population: 29 healthy psychedelic-experienced and psychedelic-naïve adults
  purpose: Prolonged-exposure safety, pharmacokinetics, pharmacodynamics, neurophysiology, and exploratory neurotrophic biomarkers
  sourceCategory: research
  note: Total administered amounts were approximately 39.3, 196.5, and 288.5 mg. The highest regimen produced mean peak plasma exposure of about 36 ng/mL and predominantly mild psychedelic effects.
  sourceId: vanderheijden2025-sixhour
- label: Randomized IV bolus dose-response
  amount: 5–20 mg
  quantity: 5
  quantityMax: 20
  unit: mg
  ingredient: N,N-dimethyltryptamine
  formulation: DMT
  route: intravenous bolus
  frequency: Placebo and four active boluses within a controlled test session
  duration: Bolus administration
  population: 20 healthy adults
  purpose: Bolus dose-response pharmacokinetics, subjective effects, autonomic effects, and tolerability
  sourceCategory: research
  note: Active doses were 5, 10, 15, and 20 mg. A separate open-label cohort of 16 participants increased doses in 5-mg steps up to a maximum of 25 mg to determine individual tolerability.
  sourceId: erne2026-bolus
- label: Ninety-minute smoker infusion study
  amount: 0.10–0.81 mg/min
  quantity: 0.1
  quantityMax: 0.81
  unit: mg/min
  ingredient: N,N-dimethyltryptamine
  formulation: DMT
  route: intravenous infusion
  frequency: Single ascending-dose study
  duration: 90 min
  population: Healthy cigarette smokers
  purpose: Pharmacokinetics, pharmacodynamics, safety, and pharmacokinetic variability
  sourceCategory: research
  note: Randomized double-blind placebo-controlled infusion rates were 0.10, 0.20, 0.40, and 0.81 mg/min.
  sourceId: vanderheijden2026-smoking
- label: Loading-dose plus 55-min infusion in non-smokers
  amount: 3.64 mg/min loading rate for 5 min followed by 0.81 or 1.29 mg/min
  quantity: null
  quantityMax: null
  unit: regimen
  ingredient: N,N-dimethyltryptamine
  formulation: DMT
  route: intravenous infusion
  frequency: Open-label escalating regimen
  duration: 60 min total
  population: Healthy non-smokers
  purpose: Pharmacokinetic and pharmacodynamic characterization of loading-plus-maintenance delivery
  sourceCategory: research
  note: Two participants requested discontinuation after the loading dose because of anxiety and intense effects.
  sourceId: vanderheijden2026-smoking
- label: Threshold dose
  amount: 4 mg
  quantity: 4
  quantityMax: null
  unit: mg
  ingredient: DMT
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
  amount: 4–10 mg
  quantity: 4
  quantityMax: 10
  unit: mg
  ingredient: DMT
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
  amount: 10–15 mg
  quantity: 10
  quantityMax: 15
  unit: mg
  ingredient: DMT
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
  amount: 15–20 mg
  quantity: 15
  quantityMax: 20
  unit: mg
  ingredient: DMT
  formulation: Not established
  route: Intravenous
  frequency: Not established
  duration: Not established
  population: Not established
  purpose: PsychonautWiki dosage classification
  sourceCategory: community
  note: Band from the PsychonautWiki API snapshot built about 2026-06-23.
  sourceId: psychonautwiki
- label: Heavy dose band (20 mg and above)
  amount: 20 mg and above
  quantity: 20
  quantityMax: null
  unit: mg
  ingredient: DMT
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
  amount: 2 mg
  quantity: 2
  quantityMax: null
  unit: mg
  ingredient: DMT
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
  amount: 10–20 mg
  quantity: 10
  quantityMax: 20
  unit: mg
  ingredient: DMT
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
  amount: 20–40 mg
  quantity: 20
  quantityMax: 40
  unit: mg
  ingredient: DMT
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
  amount: 40–60 mg
  quantity: 40
  quantityMax: 60
  unit: mg
  ingredient: DMT
  formulation: Not established
  route: Smoked
  frequency: Not established
  duration: Not established
  population: Not established
  purpose: PsychonautWiki dosage classification
  sourceCategory: community
  note: Band from the PsychonautWiki API snapshot built about 2026-06-23.
  sourceId: psychonautwiki
- label: Heavy dose band (60 mg and above)
  amount: 60 mg and above
  quantity: 60
  quantityMax: null
  unit: mg
  ingredient: DMT
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
- id: dmt-pk-good2023
  analyte: N,N-dimethyltryptamine
  route: intravenous infusion
  formulation: DMT fumarate (SPL026), reported as DMT free-base equivalent
  population: Psychedelic-naïve healthy adults receiving 9–21.5 mg over 10 min
  endpoint: elimination-half-life
  statistic: reported-range
  value: null
  low: 0.15
  high: 0.2
  unit: hours
  context: Mean elimination half-life was 9–12 min across the studied fixed-dose infusion cohorts. Peak concentrations were reached rapidly, with median Tmax approximately 10–12 min because dosing itself continued for 10 min. Interindividual exposure variability was substantial.
  sourceId: good2023-pk
  modelEligible: true
- id: dmt-pk-bolus2026
  analyte: N,N-dimethyltryptamine
  route: intravenous bolus
  formulation: DMT
  population: Healthy adults receiving 5–20 mg in the randomized crossover arm
  endpoint: elimination-half-life
  statistic: reported-range
  value: null
  low: 0.1
  high: 0.117
  unit: hours
  context: The bolus study reported an approximately 6–7 min elimination half-life. The estimate is shorter than the 9–12 min mean range reported with a 10-min infusion, illustrating that sampling and administration protocol matter when comparing DMT half-life estimates.
  sourceId: erne2026-bolus
  modelEligible: true
- id: dmt-pk-smoking2026
  analyte: N,N-dimethyltryptamine
  route: intravenous infusion
  formulation: DMT
  population: Healthy cigarette smokers and healthy non-smokers in separate study parts
  endpoint: elimination-half-life
  statistic: not-established
  value: null
  low: null
  high: null
  unit: hours
  context: The study reported approximately twofold higher plasma concentrations in smokers at similar infusion rates and a proposed MAO-A-related explanation, but no numeric elimination half-life was reported in the inspected record.
  sourceId: vanderheijden2026-smoking
  modelEligible: false
- id: dmt-pk-expectancy2026
  analyte: N,N-dimethyltryptamine
  route: intravenous bolus
  formulation: DMT
  population: Healthy adults in randomized and open-label bolus study arms
  endpoint: elimination-half-life
  statistic: not-established
  value: null
  low: null
  high: null
  unit: hours
  context: The study compared blinded randomized and open-label dose-escalation contexts for subjective intensity and tolerability; this modifier does not provide a separate half-life estimate.
  sourceId: erne2026-bolus
  modelEligible: false
- id: dmt-pk-continuous-tolerance2025
  analyte: N,N-dimethyltryptamine
  route: continuous intravenous infusion
  formulation: DMT
  population: Healthy adults receiving 0.6–2.4 mg/min for 120 min
  endpoint: elimination-half-life
  statistic: not-established
  value: null
  low: null
  high: null
  unit: hours
  context: The study examined acute tolerance during prolonged exposure; the modifier does not provide a transferable single half-life estimate.
  sourceId: erne2025-continuous
  modelEligible: false
- id: dmt-pk-body-size2023
  analyte: N,N-dimethyltryptamine
  route: intravenous infusion
  formulation: DMT fumarate (SPL026)
  population: Psychedelic-naïve healthy adults receiving 9–21.5 mg over 10 min
  endpoint: elimination-half-life
  statistic: not-established
  value: null
  low: null
  high: null
  unit: hours
  context: The study examined body weight and BMI as predictors of exposure; it did not establish a separate body-size-specific half-life.
  sourceId: good2023-pk
  modelEligible: false
- id: dmt-pk-setting2023
  analyte: N,N-dimethyltryptamine
  route: intravenous infusion
  formulation: DMT fumarate (SPL026)
  population: Psychedelic-naïve healthy adults receiving 9–21.5 mg over 10 min
  endpoint: elimination-half-life
  statistic: not-established
  value: null
  low: null
  high: null
  unit: hours
  context: The study describes preparation and dosing context that may influence subjective effects; it does not establish a setting-specific half-life.
  sourceId: good2023-pk
  modelEligible: false
- id: dmt-pk-prolonged-variability
  analyte: N,N-dimethyltryptamine
  route: intravenous bolus plus prolonged infusion
  formulation: DMT
  population: Healthy adults in a 6-h infusion study
  endpoint: elimination-half-life
  statistic: not-established
  value: null
  low: null
  high: null
  unit: hours
  context: The prolonged-infusion study observed moderate pharmacokinetic variability and noted that its half-life calculation spanned elimination behavior that may include more than one phase; it therefore does not provide a simple universally transferable single half-life for all IV regimens.
  sourceId: vanderheijden2025-sixhour
  modelEligible: false
```

## Duration

```yaml
- id: dmt-duration-bolus2026
  formulation: DMT
  measurement: subjective
  analyte: N,N-dimethyltryptamine
  route: intravenous bolus
  population: Healthy adults receiving 5–20 mg
  sourceId: erne2026-bolus
  note: Subjective effects started extremely rapidly, reached peak intensity within the first 2 min, then fell quickly. Complete subjective resolution occurred within approximately 12–30 min depending on dose.
  total:
    min: 12
    max: 30
    unit: minutes
  phases:
    - name: onset
      basis: elapsed-since-exposure
      min: 0
      max: 2
      unit: minutes
    - name: peak
      basis: elapsed-since-exposure
      min: 0
      max: 2
      unit: minutes
    - name: offset
      basis: elapsed-since-exposure
      min: 12
      max: 30
      unit: minutes
- id: dmt-duration-classic1994
  formulation: DMT
  measurement: subjective
  analyte: N,N-dimethyltryptamine
  route: intravenous
  population: Healthy volunteers experienced with hallucinogens
  sourceId: strassman1994-subjective
  note: The classic dose-response study described almost immediate onset, peak effects around 90–120 sec, and near-complete resolution by approximately 30 min.
  total:
    min: null
    max: 30
    unit: minutes
  phases:
    - name: onset
      basis: elapsed-since-exposure
      min: 0
      max: 2
      unit: minutes
    - name: peak
      basis: elapsed-since-exposure
      min: 1.5
      max: 2
      unit: minutes
    - name: offset
      basis: elapsed-since-exposure
      min: null
      max: 30
      unit: minutes
- id: dmt-duration-continuous2025
  formulation: DMT
  measurement: subjective
  analyte: N,N-dimethyltryptamine
  route: continuous intravenous infusion
  population: 22 healthy adults receiving 0.6–2.4 mg/min for 120 min
  sourceId: erne2025-continuous
  note: Dose-dependent subjective effects rose rapidly and generally plateaued by approximately 30 min while infusion continued. After the 120-min infusion ended, acute effects subsided completely within about 20 min. This infusion-maintained state should not be confused with the duration of a single bolus.
  total: null
  phases:
    - name: peak
      basis: elapsed-since-exposure
      min: 30
      max: null
      unit: minutes
    - name: offset
      basis: phase-duration
      min: 0
      max: 20
      unit: minutes
- id: psychonautwiki-intravenous
  measurement: subjective
  route: Intravenous
  population: Ranges compiled by PsychonautWiki contributors
  sourceId: psychonautwiki
  note: PsychonautWiki community duration ranges for this route.
  total:
    min: 15
    max: 30
    unit: minutes
  phases:
    - name: onset
      basis: elapsed-since-exposure
      min: 2
      max: 10
      unit: seconds
    - name: comeup
      basis: phase-duration
      min: 70
      max: 100
      unit: seconds
    - name: peak
      basis: phase-duration
      min: 2
      max: 5
      unit: minutes
    - name: offset
      basis: phase-duration
      min: 10
      max: 20
      unit: minutes
- id: psychonautwiki-smoked
  measurement: subjective
  route: Smoked
  population: Ranges compiled by PsychonautWiki contributors
  sourceId: psychonautwiki
  note: PsychonautWiki community duration ranges for this route.
  total:
    min: 5
    max: 20
    unit: minutes
  phases:
    - name: onset
      basis: elapsed-since-exposure
      min: 20
      max: 40
      unit: seconds
    - name: comeup
      basis: phase-duration
      min: 1
      max: 3
      unit: minutes
    - name: peak
      basis: phase-duration
      min: 2
      max: 8
      unit: minutes
    - name: offset
      basis: phase-duration
      min: 1
      max: 6
      unit: minutes
    - name: after-effects
      basis: phase-duration
      min: 10
      max: 60
      unit: minutes
```

## Modifiers

```yaml
- label: Cigarette smoking
  effect: Higher DMT plasma concentrations at similar infusion rates
  detail: In a 2026 IV study, plasma concentrations in healthy smokers were roughly twice those in non-smokers at similar infusion rates. The authors proposed exposure to MAO-A-inhibiting compounds in cigarette smoke as a likely explanation; this was an interpretation rather than a randomized smoking intervention.
  sourceId: vanderheijden2026-smoking
  observationId: dmt-pk-smoking2026
  factorType: smoking
  direction: slower
- label: Blinding, expectancy, and dose-escalation context
  effect: Subjective intensity and tolerability varied with administration context
  detail: In the 2026 bolus program, participants in a separate open-label stepwise dose-escalation arm rated equivalent dose levels as less intense and tolerated them better than participants in the blinded randomized arm. Because assignment to these study arms was not itself randomized, expectancy and selection effects cannot be separated cleanly.
  sourceId: erne2026-bolus
  observationId: dmt-pk-expectancy2026
  factorType: other
  direction: variable
- label: Continuous exposure
  effect: Moderate acute tolerance to some subjective effects
  detail: During 120-min continuous infusions, some acute subjective responses diminished despite ongoing exposure, consistent with moderate acute tolerance. A separate repeated-bolus study did not detect acute tolerance, so the phenomenon appears protocol-dependent rather than universal.
  sourceId: erne2025-continuous
  observationId: dmt-pk-continuous-tolerance2025
  factorType: other
  direction: variable
- label: Body weight and BMI
  effect: No detected relationship with peak exposure in the inspected fixed-dose infusion study
  detail: Post-hoc analyses in the SPL026 phase I study did not find body weight or BMI to predict dose-normalized peak DMT exposure. The study was small and does not establish that body composition can never contribute to variability.
  sourceId: good2023-pk
  observationId: dmt-pk-body-size2023
  factorType: other
  direction: variable
- label: Research setting
  effect: Psychedelic experience may depend on environmental and interpersonal context
  detail: SPL026 phase I participants underwent preparation and were dosed in a purpose-designed room with soft lighting, furnishings, music, nature imagery, an eye mask, and therapist/psychiatrist presence. The 6-h study explicitly noted that its researcher interaction and computerized testing environment differed from eyes-closed psychedelic protocols and could have influenced subjective effects.
  sourceId: good2023-pk
  observationId: dmt-pk-setting2023
  factorType: other
  direction: variable
```

## Effects

```yaml
- id: dmt-effect-perceptual
  study:
    id: strassman1994-dose-response
    design: Randomized double-blind placebo-controlled dose-response study
    sampleSize: 12
    populationLabels:
      - healthy volunteers
      - experienced hallucinogen users
    comparator: placebo
    route: intravenous
    formulation: DMT
    assessmentTime: Acute, beginning immediately after administration
  reportType: measured-assessment
  conceptId: perception
  name: Visual and perceptual alteration
  direction: Increased
  evidence: Human research
  description: Higher IV doses produced intense visual phenomena and marked alterations in perception. Auditory phenomena were reported less consistently. Lower doses produced less complete psychedelic states.
  sourceId: strassman1994-subjective
  population: Healthy volunteers experienced with hallucinogens
  exposure: 0.05, 0.1, 0.2, or 0.4 mg/kg IV DMT
  instrument: Hallucinogen Rating Scale and structured subjective ratings
  magnitude: Hallucinatory psychedelic effects were most prominent at 0.2 and 0.4 mg/kg.
- id: dmt-effect-ego-mystical
  study:
    id: spl026-phase1
    design: Randomized double-blind placebo-controlled parallel-group phase I dose-escalation trial
    sampleSize: 32
    populationLabels:
      - healthy adults
      - psychedelic-naïve
    comparator: placebo
    route: intravenous infusion
    formulation: DMT fumarate (SPL026)
    assessmentTime: Acute dosing experience
  reportType: measured-assessment
  conceptId: perception
  name: Ego dissolution and mystical-type experience
  direction: Increased
  evidence: Human research
  description: SPL026 increased measures of mystical-type experience, ego dissolution, oceanic boundlessness, and visionary restructuralization relative to placebo. Active-dose separation was not a simple monotonic dose-response, and exploratory concentration-response findings were sensitive to a few high-Cmax observations.
  sourceId: james2024-phase1
  population: Psychedelic-naïve healthy adults
  exposure: 9, 12, 17, or 21.5 mg DMT free-base equivalent over 10 min
  instrument: MEQ, EDI, 5D-ASC, IRVAS
  magnitude: Mean combined IRVAS was 90.9 at 21.5 mg versus 6.2 with placebo; active-dose comparisons were heterogeneous.
- id: dmt-effect-anxiety
  study:
    id: erne2025-continuous
    design: Double-blind randomized placebo-controlled crossover trial
    sampleSize: 22
    populationLabels:
      - healthy adults
    comparator: placebo and lower infusion rates
    route: intravenous infusion
    formulation: DMT
    assessmentTime: During 120-min infusion
  reportType: measured-assessment
  conceptId: anxiety
  name: Acute anxiety and anxious ego dissolution
  direction: Variable
  evidence: Human research
  description: Anxiety was not a universal DMT response, but the highest continuous infusion rate, 2.4 mg/min, produced significantly more anxiety than placebo and more anxious ego dissolution than 1.8 mg/min. Bolus studies likewise found more negative subjective effects at higher doses.
  sourceId: erne2025-continuous
  population: Healthy adults
  exposure: Continuous DMT infusion up to 2.4 mg/min for 120 min
  instrument: Acute subjective-effect scales including altered-states measures
  magnitude: Significant anxiety versus placebo at 2.4 mg/min; exact effect estimate is not encoded here.
- id: dmt-effect-intensity
  study:
    id: erne2026-bolus
    design: Double-blind randomized placebo-controlled crossover bolus study
    sampleSize: 20
    populationLabels:
      - healthy adults
    comparator: placebo and lower DMT doses
    route: intravenous bolus
    formulation: DMT
    assessmentTime: First minutes after bolus
  reportType: measured-assessment
  conceptId: perception
  name: Overall psychedelic intensity
  direction: Increased
  evidence: Human research
  description: Subjective intensity rose steeply with bolus dose and peaked within about 2 min. Peak effects reached an apparent ceiling around 15 mg, while higher doses added more adverse or challenging qualities rather than proportionately greater peak intensity.
  sourceId: erne2026-bolus
  population: Healthy adults
  exposure: 5, 10, 15, or 20 mg IV bolus
  instrument: Repeated subjective-effect ratings
  magnitude: Peak subjective-effect ceiling was reported at approximately 15 mg.
```

## Outcomes

```yaml
- id: dmt-outcome-blood-pressure
  study:
    id: spl026-phase1
    design: Randomized double-blind placebo-controlled phase I trial
    sampleSize: 32
    populationLabels:
      - healthy adults
      - psychedelic-naïve
    comparator: placebo
    route: intravenous infusion
    formulation: DMT fumarate (SPL026)
    assessmentTime: 12 min after dosing start
  conceptId: blood-pressure
  name: Blood pressure
  direction: Increased
  evidence: Human research
  description: Systolic and diastolic blood pressure increased transiently after active SPL026. At 21.5 mg, mean systolic pressure rose from 120.33 to 149.67 mmHg and mean diastolic pressure from 71.00 to 86.00 mmHg at the 12-min assessment; the elevations were not sustained at 1 h.
  sourceId: james2024-phase1
  population: Psychedelic-naïve healthy adults
  exposure: 21.5 mg DMT free-base equivalent over 10 min
  instrument: Clinical vital-sign measurement
  magnitude: Mean change at 12 min was +29.33 mmHg systolic and +15.00 mmHg diastolic.
- id: dmt-outcome-attention
  study:
    id: dmt-sixhour-2025
    design: Randomized double-blind placebo-controlled single-ascending-dose trial
    sampleSize: 29
    populationLabels:
      - healthy adults
      - psychedelic-experienced and psychedelic-naïve
    comparator: placebo
    route: intravenous bolus plus infusion
    formulation: DMT
    assessmentTime: During the 6-h infusion
  conceptId: attention
  name: Sustained attention
  direction: Decreased
  evidence: Human research
  description: At the higher prolonged DMT exposures, adaptive-tracking performance decreased, indicating impaired sustained attention while drug exposure was maintained.
  sourceId: vanderheijden2025-sixhour
  population: Healthy adults
  exposure: Bolus plus 6-h infusion, with the highest regimen reaching mean peak plasma concentrations of about 36 ng/mL
  instrument: NeuroCart adaptive tracking
  magnitude: Statistically significant impairment was reported at higher doses; a single standardized effect size is not encoded here.
- id: dmt-outcome-postural
  study:
    id: dmt-sixhour-2025
    design: Randomized double-blind placebo-controlled single-ascending-dose trial
    sampleSize: 29
    populationLabels:
      - healthy adults
    comparator: placebo
    route: intravenous bolus plus infusion
    formulation: DMT
    assessmentTime: During the 6-h infusion
  conceptId: postural-stability
  name: Postural stability
  direction: Decreased
  evidence: Human research
  description: Higher prolonged DMT exposure increased body sway, consistent with reduced postural stability during the infusion.
  sourceId: vanderheijden2025-sixhour
  population: Healthy adults
  exposure: Bolus plus 6-h IV DMT infusion
  instrument: NeuroCart body-sway assessment
  magnitude: Significant body-sway change was reported at higher exposure; exact standardized effect estimate is not encoded here.
- id: dmt-outcome-depression
  study:
    id: spl026-phase2a-mdd
    design: Phase IIa randomized double-blind placebo-controlled trial followed by an open-label phase
    sampleSize: 34
    populationLabels:
      - adults with moderate-to-severe major depressive disorder
    comparator: placebo
    route: intravenous infusion
    formulation: DMT fumarate (SPL026)
    assessmentTime: 2 weeks
  result:
    measure: mean-difference
    estimate: -7.35
    unit: MADRS points
    instrument: Montgomery-Åsberg Depression Rating Scale
    comparator: placebo
    assessmentTime: 2 weeks after the first randomized session
    population: Adults with moderate-to-severe major depressive disorder
    confidenceInterval:
      lower: -13.62
      upper: -1.08
      level: 95
  conceptId: depression-severity
  name: Depressive symptom severity
  direction: Decreased
  evidence: Human research
  description: A single 21.5 mg IV DMT session delivered with psychotherapeutic support produced a larger 2-week reduction in MADRS score than placebo. Longer-term observations extending to 3 months included open-label treatment and therefore provide weaker causal evidence than the blinded 2-week comparison.
  sourceId: erritzoe2026-mdd
  population: 34 adults with moderate-to-severe major depressive disorder
  exposure: 21.5 mg IV DMT over 10 min with psychotherapeutic support
  instrument: MADRS
  magnitude: Mean difference versus placebo -7.35 points; 95% CI -13.62 to -1.08; p=0.023.
- id: dmt-outcome-healthy-anxiety-null
  study:
    id: spl026-phase1
    design: Randomized double-blind placebo-controlled phase I trial
    sampleSize: 32
    populationLabels:
      - healthy adults
      - psychedelic-naïve
    comparator: placebo
    route: intravenous infusion
    formulation: DMT fumarate (SPL026)
    assessmentTime: Follow-up through day 90
  conceptId: anxiety-symptom-severity
  name: Longer-term trait anxiety in healthy participants
  direction: Variable
  evidence: Human research
  description: The healthy-volunteer phase I study found no evidence of an SPL026-related improvement or worsening in trait-anxiety scores versus placebo across follow-up. This null finding occurred in a small, psychologically screened sample with high baseline wellbeing.
  sourceId: james2024-phase1
  population: Psychedelic-naïve healthy adults
  exposure: Single 9–21.5 mg IV SPL026 session
  instrument: Spielberger State-Trait Anxiety Inventory, trait scale
  magnitude: No significant treatment-related difference detected.
- id: dmt-outcome-bdnf-null
  study:
    id: dmt-sixhour-2025
    design: Randomized double-blind placebo-controlled single-ascending-dose trial
    sampleSize: 29
    populationLabels:
      - healthy adults
    comparator: placebo
    route: intravenous bolus plus infusion
    formulation: DMT
    assessmentTime: During prolonged exposure
  conceptId: bdnf
  name: Peripheral BDNF
  direction: Variable
  evidence: Human research
  description: Serum and plasma BDNF did not significantly change relative to placebo across the studied prolonged DMT exposures. The investigators cautioned that peripheral BDNF is an uncertain proxy for central neuroplasticity, so this null result does not establish absence of neural plasticity.
  sourceId: vanderheijden2025-sixhour
  population: Healthy adults
  exposure: Bolus plus 6-h DMT infusion
  instrument: Serum and plasma BDNF assays
  magnitude: No statistically significant DMT effect detected.
```

## Mechanisms

```yaml
- title: Rapid MAO-A-mediated metabolism
  description: Human pharmacokinetic and in-vitro experiments support rapid oxidative metabolism of DMT through MAO-A, with indole-3-acetic acid as an important downstream metabolite. Inhibition of MAO-A markedly reduced DMT clearance in experimental systems; CYP2D6 and CYP2C19 also metabolized DMT in vitro but are unlikely to explain the exceptionally high systemic clearance of IV DMT by themselves.
  sourceId: good2023-pk
- title: Serotonergic receptor-system association
  description: Human neuroimaging analyses have related regional DMT-induced functional-connectivity changes to independently acquired PET maps of neurotransmitter receptors and transporters, including serotonin-receptor distributions. This provides spatial association evidence, not direct measurement of DMT receptor occupancy in the participants receiving DMT.
  sourceId: luppi2023-pet-atlas
  conceptId: serotonin-2a
- title: 5-HT2A-linked large-scale brain dynamics
  description: A time-dependent whole-brain model fitted to fMRI data from 15 volunteers given 20 mg IV DMT found transient increases in modeled brain reactivity concentrated in frontoparietal and visual regions and correlated with 5-HT2A receptor-density maps. The receptor link is correlational/model-based and should not be read as a direct PET occupancy result.
  sourceId: piccinini2025-dynamics
  conceptId: serotonin-2a
- title: 5-HT1A modulation of the DMT experience
  description: In 12 experienced participants, pretreatment with 30 mg oral pindolol before 0.1 mg/kg IV DMT increased Hallucinogen Rating Scale effects and increased blood pressure and mean arterial pressure at 2 min without significantly changing heart rate. This suggests that 5-HT1A signaling modulates, rather than simply generates, the human DMT subjective response.
  sourceId: zahid2026-pindolol
  conceptId: 5-ht1a
```

## Cautions

```yaml
- title: Acute cardiovascular load
  description: Controlled IV DMT can transiently increase blood pressure, and classic bolus work also found dose-related autonomic and cardiovascular activation. Modern trials generally screened out clinically important baseline cardiovascular abnormalities. The available healthy-volunteer safety findings therefore should not be generalized to uncontrolled use or to people with significant cardiovascular disease.
  sourceId: james2024-phase1
- title: Anxiety, panic, and prolonged psychological reactions
  description: Most adverse events in modern supervised studies were mild or moderate, but clinically important anxiety can occur. In the 6-h study one participant required counseling after a moderate anxiety event and the report described a prolonged anxiety course; the 2026 bolus program also described a participant who developed post-session anxiety/panic requiring subsequent care. Small screened trials cannot quantify the population incidence of rare or persistent psychiatric adverse reactions.
  sourceId: vanderheijden2025-sixhour
- title: Psychiatric screening limits generalizability
  description: Several healthy-volunteer programs excluded current or past psychiatric disorders, suicidality, or close family history of psychotic or bipolar disorders. These exclusions reduce direct evidence for safety in people at elevated risk of mania or psychosis. The separate MDD trial establishes that depression itself is not universally excluded, but it used clinical screening and supervised psychological support.
  sourceId: good2023-pk
- title: Pregnancy and lactation evidence gap
  description: Pregnancy and lactation were exclusion criteria in the SPL026 clinical program. The trial therefore does not establish pregnancy safety, and absence of pregnancy participants must not be interpreted as evidence of safety or evidence of teratogenic harm.
  sourceId: nct04673383
- title: Monoamine-oxidase inhibition can fundamentally alter DMT exposure
  description: DMT is rapidly metabolized by MAO-A. Combining DMT with MAO-A inhibition, as occurs pharmacologically in ayahuasca-type preparations or synthetic DMT-plus-MAO-inhibitor regimens, changes bioavailability and duration and should not be treated as equivalent to DMT monotherapy. The IV DMT studies summarized here generally do not establish the safety of combining their regimens with MAO inhibitors.
  sourceId: good2023-pk
- title: Evidence comes from controlled settings
  description: Preparation, close observation, trained staff, controlled rooms, and in some protocols continuous cardiovascular or neurophysiological assessment were integral to the research context. Safety findings from those environments do not establish equivalent risk under unsupervised conditions.
  sourceId: good2023-pk
```

## Claims

```yaml
- id: dmt-claim-mdd
  assertion: A single 21.5 mg IV DMT session with psychotherapeutic support can reduce depressive symptom severity more than placebo at 2 weeks in adults with moderate-to-severe major depressive disorder.
  relation: may-reduce
  participants:
    - entityId: substance:dmt
      role: intervention
    - entityId: tag:depression-severity
      role: measured-outcome
  context: One phase IIa randomized placebo-controlled trial with 34 participants; the sponsor was Small Pharma and the intervention included psychotherapeutic support.
  sourceIds:
    - erritzoe2026-mdd
    - nct04673383
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Small phase IIa sample, substantial contextual support, and difficult psychedelic blinding limit precision and attribution. The longer 3-month observations followed an open-label treatment phase and are weaker evidence for sustained placebo-controlled efficacy.
- id: dmt-claim-direct-pet-gap
  assertion: Direct human PET measurement of DMT 5-HT2A receptor occupancy is not established by the human evidence reviewed for this article.
  relation: evidence-gap
  participants:
    - entityId: substance:dmt
      role: intervention
    - entityId: tag:serotonin-2a
      role: receptor-target
  context: Available reviewed human neuroimaging evidence related DMT-induced fMRI changes to receptor-density PET atlases obtained independently rather than performing a DMT occupancy PET experiment in the dosed participants.
  sourceIds:
    - luppi2023-pet-atlas
    - piccinini2025-dynamics
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: This is a literature-search conclusion, not proof of absence; a study outside the reviewed evidence set could exist.
- id: dmt-claim-acute-tolerance
  assertion: Acute tolerance to DMT depends on administration pattern rather than being a uniform property of the drug.
  relation: protocol-dependent
  participants:
    - entityId: substance:dmt
      role: intervention
    - entityId: tag:acute-tolerance
      role: pharmacodynamic-phenomenon
  context: Continuous 120-min infusion produced moderate attenuation of some acute effects, whereas the 2026 repeated-bolus study reported no acute tolerance.
  sourceIds:
    - erne2025-continuous
  conflictingSourceIds:
    - erne2026-bolus
  assessment: not-formally-assessed
  limitation: The studies used different designs, exposure patterns, timing, and participants, so the contrast is cross-study and does not isolate infusion pattern experimentally.
- id: dmt-claim-smoking-pk
  assertion: Cigarette-smoking status may be an important source of DMT pharmacokinetic variability during IV infusion.
  relation: may-modify-exposure
  participants:
    - entityId: substance:dmt
      role: analyte
    - entityId: tag:tobacco-smoke
      role: exposure-modifier
  context: A 2026 study reported approximately twofold higher DMT plasma concentrations in smokers than non-smokers at similar infusion rates.
  sourceIds:
    - vanderheijden2026-smoking
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Smoking was not randomly assigned; the proposed role of MAO-A-inhibiting smoke constituents is mechanistic interpretation rather than a directly isolated causal test.
```

## Interactions

```yaml
- id: dmt-maoi
  name: Monoamine oxidase-A inhibitors
  otherSlug: null
  summary: MAO-A is a major route of DMT metabolism. Inhibiting MAO-A can substantially change DMT exposure and can make oral DMT pharmacologically active in combination preparations. Ayahuasca is therefore an MAOI-containing comparator/context and must not be treated as DMT monotherapy.
  sourceId: good2023-pk
  mechanism: Reduced MAO-A-mediated oxidative deamination of DMT.
  context: Pharmacokinetic interaction; direct safety and dose equivalence cannot be extrapolated from IV DMT monotherapy studies to DMT-plus-MAOI combinations.
  conflictingSourceIds: []
- id: dmt-pindolol
  name: Pindolol / 5-HT1A receptor blockade
  otherSlug: null
  summary: In a randomized double-blind within-subject study, 30 mg oral racemic pindolol given before 0.1 mg/kg IV DMT increased global subjective DMT effects and increased blood pressure and mean arterial pressure at 2 min; heart rate was not significantly changed.
  sourceId: zahid2026-pindolol
  mechanism: Functional 5-HT1A receptor blockade altered the acute response to DMT.
  context: Small experimental interaction study in 12 experienced hallucinogen users; this does not establish routine clinical coadministration safety.
  conflictingSourceIds: []
```

## Experience links

```yaml
- title: DMT
  url: https://psychonautwiki.org/wiki/DMT
  publisher: PsychonautWiki
```

## References

```yaml
- id: pubchem6089
  title: PubChem Compound Summary for CID 6089, Dimethyltryptamine
  authors: National Center for Biotechnology Information
  year: 2026
  url: https://pubchem.ncbi.nlm.nih.gov/compound/6089
  kind: Government chemical database
  insight: Identifies DMT as PubChem CID 6089 and provides the chemical identity used for this article.
  limitation: Database identity source; it does not establish clinical efficacy, safety, dose, or pharmacokinetics.
  funding: Not applicable to this government database record.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not applicable to the database record.
  conflictOfInterestStatus: not-assessed
- id: strassman1994-autonomic
  title: Dose-response study of N,N-dimethyltryptamine in humans. I. Neuroendocrine, autonomic, and cardiovascular effects
  authors: Rick J. Strassman; Clifford R. Qualls
  year: 1994
  url: https://pubmed.ncbi.nlm.nih.gov/8297216/
  kind: Primary randomized double-blind placebo-controlled human dose-response study
  insight: Characterized dose-related cardiovascular, autonomic, neuroendocrine, plasma, and acute psychedelic responses to 0.05–0.4 mg/kg IV DMT.
  limitation: Small sample of experienced hallucinogen users and an older experimental protocol; funding and conflict disclosures were not verified from inspected full text.
  funding: Not assessed from an inspected full-text funding disclosure.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed from an inspected full-text conflict disclosure.
  conflictOfInterestStatus: not-assessed
  pmid: "8297216"
  doi: 10.1001/archpsyc.1994.03950020009001
- id: strassman1994-subjective
  title: Dose-response study of N,N-dimethyltryptamine in humans. II. Subjective effects and preliminary results of a new rating scale
  authors: Rick J. Strassman; Clifford R. Qualls; E. H. Uhlenhuth; R. Kellner
  year: 1994
  url: https://pubmed.ncbi.nlm.nih.gov/8297217/
  kind: Primary randomized double-blind placebo-controlled human dose-response study
  insight: Described the near-immediate onset, roughly 90–120 sec peak, approximately 30-min resolution, and dose-dependent visual, somatic, affective, dissociative, euphoric, and anxious effects of IV DMT.
  limitation: Small sample of experienced hallucinogen users; subjective-scale development and drug-effect characterization were conducted in the same research program; funding and conflicts were not verified from inspected full text.
  funding: Not assessed from an inspected full-text funding disclosure.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed from an inspected full-text conflict disclosure.
  conflictOfInterestStatus: not-assessed
  pmid: "8297217"
  doi: 10.1001/archpsyc.1994.03950020022002
- id: good2023-pk
  title: Pharmacokinetics of N,N-dimethyltryptamine in Humans
  authors: Meghan Good; Zelah Joel; Tiffanie Benway; Carol Routledge; Chris Timmermann; David Erritzoe; Richard Weaver; Graham Allen; Charlotte Hughes; Helen Topping; Amy Bowman; Ellen James
  year: 2023
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC10122081/
  kind: Primary phase I pharmacokinetic study with in-vitro metabolism experiments
  insight: In 24 healthy participants receiving 9–21.5 mg DMT free-base equivalent over 10 min, mean elimination half-life was 9–12 min. The paper also characterized two-phase infusion schedules, high systemic clearance, MAO-A metabolism, rapid IAA formation, pharmacokinetic variability, and lack of a detected weight/BMI relationship with peak exposure.
  limitation: Small dose-escalation phase I sample; several metabolism conclusions combine clinical observations with in-vitro experiments and mechanistic inference. Some PK samples were missing in individual cohorts.
  funding: A standalone funding declaration was not relied upon during this review; the associated SPL026 clinical program was sponsored by Small Pharma, and the article disclosed multiple Small Pharma relationships.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: The inspected article disclosure reported conflicts involving multiple authors and Small Pharma, including company employment or related financial relationships; no inference of independence was made.
  conflictOfInterestStatus: declared
  disclosureUrl: https://pmc.ncbi.nlm.nih.gov/articles/PMC10122081/
  pmid: "37086340"
  doi: 10.1007/s13318-023-00822-y
- id: james2024-phase1
  title: "Safety, tolerability, pharmacodynamic and wellbeing effects of SPL026 (dimethyltryptamine fumarate) in healthy participants: a randomized, placebo-controlled phase 1 trial"
  authors: Ellen James; David Erritzoe; Tiffanie Benway; Zelah Joel; Christopher Timmermann; Meghan Good; Claudio Agnorelli; Brandon M. Weiss; Tommaso Barba; Graham Campbell; Michelle Baker Jones; Charlotte Hughes; Helen Topping; Malcolm Boyce; Carol Routledge
  year: 2024
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC10810248/
  kind: Primary randomized double-blind placebo-controlled phase I trial
  insight: Tested 9, 12, 17, and 21.5 mg IV SPL026 in psychedelic-naïve healthy adults, documenting intense acute psychedelic effects, transient blood-pressure increases, exploratory concentration-response relationships, no serious adverse events, and no clear longer-term anxiety or wellbeing effect versus placebo.
  limitation: Small phase I cohorts were not powered for many pharmacodynamic comparisons. Concentration-response analyses were exploratory and some apparent relationships were sensitive to a few high-exposure observations.
  funding: The article states that the clinical trial was funded by Small Pharma Ltd; editorial assistance was also funded by Small Pharma.
  sponsorshipStatus: industry-funded
  conflictsOfInterest: EJ, TBe, ZJ, MG, and CR were or had been Small Pharma employees; DE, CT, CA, BW, and TBa received a Small Pharma research grant for the trial; GC, MJ, CH, HT, and MB were employees or contractors of Hammersmith Medicines Research, which Small Pharma contracted to conduct the trial.
  conflictOfInterestStatus: declared
  disclosureUrl: https://www.frontiersin.org/journals/psychiatry/articles/10.3389/fpsyt.2023.1305796/full
  pmid: "38274414"
  doi: 10.3389/fpsyt.2023.1305796
- id: erritzoe2026-mdd
  title: "A short-acting psychedelic intervention for major depressive disorder: a phase IIa randomized placebo-controlled trial"
  authors: David Erritzoe; Tommaso Barba; Tiffanie Benway; Zelah Joel; Meghan Good; Marie Layzell; Michelle Baker Jones; Graham Campbell; Ashleigh Murphy-Beiner; Peter Rands; Malcolm Boyce; Helen Topping; Brandon Weiss; Christopher Timmermann; David Nutt; Robin Carhart-Harris; Carol Routledge; Ellen James
  year: 2026
  url: https://www.nature.com/articles/s41591-025-04154-z
  kind: Primary phase IIa randomized double-blind placebo-controlled clinical trial
  insight: In 34 adults with moderate-to-severe MDD, one 21.5 mg IV DMT session with psychotherapeutic support produced a 2-week MADRS mean difference of -7.35 points versus placebo, with a 95% CI of -13.62 to -1.08. No serious adverse events were reported.
  limitation: Small phase IIa study with difficult psychedelic blinding, an integrated psychological-support intervention, and sponsor involvement. Follow-up after the blinded comparison incorporated open-label dosing and cannot establish long-term placebo-controlled efficacy.
  funding: Small Pharma was the clinical-trial sponsor, supplied the proprietary SPL026 intervention, and had full trial oversight; Hammersmith Medicines Research conducted trial operations and analyses that were reviewed by the sponsor, with sponsor post-hoc analyses also reported.
  sponsorshipStatus: industry-funded
  conflictsOfInterest: The inspected disclosure reports multiple commercial relationships. Small Pharma employment/shareholding or later Cybin employment/options were declared by several authors; other authors reported advisory roles with psychedelic-development companies. The article states that the remaining authors declared no competing interests.
  conflictOfInterestStatus: declared
  disclosureUrl: https://www.nature.com/articles/s41591-025-04154-z
  pmid: "41699126"
  doi: 10.1038/s41591-025-04154-z
- id: vanderheijden2025-sixhour
  title: "Safety, Pharmacokinetics, and Pharmacodynamics of a 6-h N,N-Dimethyltryptamine (DMT) Infusion in Healthy Volunteers: A Randomized, Double-Blind, Placebo-Controlled Trial"
  authors: Katelijne V. van der Heijden; Rob G. J. A. Zuiker; Marije E. Otto; Christopher S. Bryan; Nancy Stewart; Christopher Stillwell; Marieke L. De Kam; Marloes B. van Leuken; Joop M. A. van Gerven; Gabriel E. Jacobs
  year: 2025
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC12070030/
  kind: Primary randomized double-blind placebo-controlled prolonged-infusion trial
  insight: Evaluated 30-sec loading boluses followed by 6-h DMT infusions. At mean peak exposure near 36 ng/mL, effects were generally mild but included altered perception, blood-pressure elevation, impaired sustained attention, increased body sway, mydriasis, and occipital alpha suppression; peripheral BDNF, cortisol, and prolactin were not significantly altered.
  limitation: Small healthy-volunteer study designed around relatively low psychedelic exposure; results do not establish safety in stroke or other medically vulnerable patients. One participant had a notable prolonged anxiety reaction.
  funding: The study was funded by Algernon Pharmaceuticals.
  sponsorshipStatus: industry-funded
  conflictsOfInterest: Christopher S. Bryan and Christopher Stillwell were employees of Algernon Pharmaceuticals; the other authors declared no competing interests for the work.
  conflictOfInterestStatus: declared
  disclosureUrl: https://pmc.ncbi.nlm.nih.gov/articles/PMC12070030/
  pmid: "40356576"
  doi: 10.1111/cts.70234
- id: erne2025-continuous
  title: Acute dose-dependent effects and self-guided titration of continuous N,N-dimethyltryptamine infusions in a double-blind placebo-controlled study in healthy participants
  authors: Livio Erne; Severin B. Vogt; Lorenz Müller; Albiona Nuraj; Anna Becker; Aaron Klaiber; Melani Zuparic; Nimmy Varghese; Anne Eckert; Deborah Rudin; Dino Luethi; Matthias E. Liechti
  year: 2025
  url: https://www.nature.com/articles/s41386-024-02041-8
  kind: Primary randomized double-blind placebo-controlled crossover infusion trial
  insight: Twenty-two healthy participants received 0.6–2.4 mg/min DMT for 120 min. Effects were dose dependent, plateaued by about 30 min, could be adjusted by infusion-rate titration, and showed moderate acute tolerance; 2.4 mg/min produced more anxiety and anxious ego dissolution.
  limitation: Small healthy-volunteer study; self-guided titration was a specialized research procedure and does not establish safety of unsupervised titration. A tinnitus serious adverse event was considered possibly related.
  funding: Swiss National Science Foundation grant 32003B_185111 to Matthias E. Liechti; open-access funding was provided by the University of Basel.
  sponsorshipStatus: non-industry-funded
  conflictsOfInterest: Matthias E. Liechti declared consultancy for Mind Medicine, Inc.; other authors declared no conflicts. University Hospital Basel know-how and data associated with the work were licensed to Mind Medicine, which the disclosure states had no role in financing, planning, conducting, or publishing the study.
  conflictOfInterestStatus: declared
  disclosureUrl: https://www.nature.com/articles/s41386-024-02041-8
  pmid: "39702577"
  doi: 10.1038/s41386-024-02041-8
- id: erne2026-bolus
  title: "Dose-dependent pharmacokinetics and acute effects of intravenous bolus N,N-dimethyltryptamine: double-blind, randomized versus open-label dose-escalation administration study in healthy participants"
  authors: Livio Erne; Lorenz Mueller; Isabelle Straumann; Bislim Ademaj; Anne Eckert; Ina Vukalovic; Jan Valenta; Dino Luethi; Matthias E. Liechti; Severin B. Vogt
  year: 2026
  url: https://www.nature.com/articles/s41398-026-03987-7
  kind: Primary randomized placebo-controlled crossover bolus study with separate open-label dose-escalation arm
  insight: Bolus doses of 5–20 mg produced a peak within about 2 min and complete subjective resolution within roughly 12–30 min, with approximately 6–7 min elimination half-life. Peak subjective intensity plateaued around 15 mg, and the open-label escalation context was better tolerated than randomized blinded dosing.
  limitation: The randomized and open-label arms were separate and their contextual comparison was not itself randomized. The study was small and conducted in screened healthy adults.
  funding: Swiss National Science Foundation grant 32003B_185111 to Matthias E. Liechti.
  sponsorshipStatus: non-industry-funded
  conflictsOfInterest: Matthias E. Liechti declared consultancy for Mind Medicine, Inc. and Lykos Therapeutics; the other authors declared no conflicts of interest.
  conflictOfInterestStatus: declared
  disclosureUrl: https://www.nature.com/articles/s41398-026-03987-7
  pmid: "41896202"
  doi: 10.1038/s41398-026-03987-7
- id: vanderheijden2026-smoking
  title: Pharmacokinetics, pharmacodynamics and safety of N,N-dimethyltryptamine administered intravenously in healthy smoking and non-smoking volunteers
  authors: Katelijne V. van der Heijden; Soma Makai-Bölöni; Amir Inamdar; Marije E. Otto; Andrew P. Hegle; Liam van der Aa; Rob G. J. A. Zuiker; Roman Bohoslavsky; Marieke L. de Kam; Ellen H. James; Joop M. A. van Gerven; Gabriel E. Jacobs
  year: 2026
  url: https://pubmed.ncbi.nlm.nih.gov/42671902/
  kind: Primary randomized and open-label human intravenous pharmacokinetic study
  insight: Compared several 90-min infusion rates in healthy smokers with loading-plus-maintenance regimens in non-smokers and reported approximately twofold higher plasma DMT concentrations in smokers at similar infusion rates, moderate PK variability, and detectable mild-to-moderate psychedelic effects around 35 ng/mL.
  limitation: Smoking status was not randomized, study parts used different designs, and the proposed MAO-A explanation for the smoking difference is mechanistic interpretation. Full-text funding and conflict declarations were not inspected for this review.
  funding: Not assessed from an inspected full-text funding declaration.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed from an inspected full-text conflict declaration.
  conflictOfInterestStatus: not-assessed
  pmid: "42671902"
  doi: 10.1177/02698811261473451
- id: zahid2026-pindolol
  title: 5-HT1A receptor blockade potentiates the subjective effects of DMT
  authors: Zarmeen Zahid; Rick J. Strassman; Clifford R. Qualls; Sandeep M. Nayak
  year: 2026
  url: https://pubmed.ncbi.nlm.nih.gov/42068196/
  kind: Primary randomized double-blind placebo-controlled human interaction study
  insight: In 12 experienced participants, 30 mg oral pindolol pretreatment increased the subjective response to 0.1 mg/kg IV DMT and increased blood pressure and mean arterial pressure at 2 min without a significant heart-rate effect.
  limitation: Very small sample, sub-hallucinogenic DMT dose, and a pharmacological interaction design that does not directly quantify receptor occupancy. Full-text funding and conflict declarations were not inspected for this review.
  funding: Not assessed from an inspected full-text funding declaration.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed from an inspected full-text conflict declaration.
  conflictOfInterestStatus: not-assessed
  pmid: "42068196"
  doi: 10.1177/02698811261443696
- id: luppi2023-pet-atlas
  title: In vivo mapping of pharmacologically induced functional reorganization onto the human brain's neurotransmitter landscape
  authors: Andrea I. Luppi; Justine Y. Hansen; Ram Adapa; Robin L. Carhart-Harris; Leor Roseman; Christopher Timmermann; Daniel Golkowski; Andreas Ranft; Rüdiger Ilg; Denis Jordan; Vincent Bonhomme; Audrey Vanhaudenhuyse; Athena Demertzi; Oceane Jaquet; Mohamed Ali Bahri; Naji L. N. Alnagger; Paolo Cardone; Alexander R. D. Peattie; Anne E. Manktelow; Draulio B. de Araujo; Stefano L. Sensi; Adrian M. Owen; Lorina Naci; David K. Menon; Bratislav Misic; Emmanuel A. Stamatakis
  year: 2023
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC10266734/
  kind: Human multimodal neuroimaging analysis using independent PET receptor/transporter maps
  insight: Related fMRI functional reorganization produced by DMT and other psychoactive drugs to regional PET-derived maps of 19 neurotransmitter receptors and transporters.
  limitation: It did not directly measure DMT receptor occupancy; PET maps and drug-induced functional-imaging data were linked analytically across datasets.
  funding: Not assessed from an inspected full-text funding disclosure for this review.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed from an inspected full-text conflict disclosure for this review.
  conflictOfInterestStatus: not-assessed
  pmid: "37315149"
  doi: 10.1126/sciadv.adf8332
- id: piccinini2025-dynamics
  title: Transient destabilization of whole brain dynamics induced by N,N-Dimethyltryptamine (DMT)
  authors: Juan Ignacio Piccinini; Yonatan Sanz Perl; Carla Pallavicini; Gustavo Deco; Morten Kringelbach; David Nutt; Robin Carhart-Harris; Christopher Timmermann; Enzo Tagliazucchi
  year: 2025
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC11897362/
  kind: Human fMRI computational-modeling study
  insight: Modeled transient brain dynamics in 15 volunteers after 20 mg IV DMT and found modeled reactivity patterns correlated with 5-HT2A receptor-density maps.
  limitation: Secondary computational modeling of a small neuroimaging dataset; receptor-density correlation is indirect and not a receptor-occupancy measurement.
  funding: Not assessed from an inspected full-text funding disclosure for this review.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed from an inspected full-text conflict disclosure for this review.
  conflictOfInterestStatus: not-assessed
  pmid: "40069397"
  doi: 10.1038/s42003-025-07576-0
- id: nct04673383
  title: SPL026 (DMT Fumarate) in Healthy Subjects and MDD Patients
  authors: Small Pharma Ltd; ClinicalTrials.gov
  year: 2024
  url: https://clinicaltrials.gov/study/NCT04673383
  kind: ClinicalTrials.gov registry record
  insight: Registry record for the completed phase I/II study of IV SPL026 in healthy volunteers and MDD, including design, eligibility criteria, pregnancy/lactation exclusion, medication washouts, and sponsor information.
  limitation: Sponsor-submitted registry information does not itself establish efficacy, safety, or study quality; no results were posted in the inspected registry record.
  funding: Funding was not separately established from the registry record; Small Pharma Ltd is listed as lead sponsor.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: ClinicalTrials.gov registry records do not provide a journal-style author conflict-of-interest declaration.
  conflictOfInterestStatus: not-reported
  disclosureUrl: https://clinicaltrials.gov/study/NCT04673383
- id: nct06927076
  title: Antidepressant Response of DMT Masked With Propofol
  authors: University Hospital Basel; ClinicalTrials.gov
  year: 2026
  url: https://clinicaltrials.gov/study/NCT06927076
  kind: ClinicalTrials.gov registry record
  insight: Recruiting study designed to test DMT in major depressive disorder with a propofol/no-sedation manipulation intended to help distinguish subjective psychedelic experience from other candidate mechanisms; the registry lists MADRS as the primary outcome.
  limitation: Ongoing recruiting study with anticipated completion in 2029 and no posted efficacy results; it cannot support a treatment-effect claim.
  funding: Funding source was not established from the inspected registry fields.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: ClinicalTrials.gov registry records do not provide a journal-style investigator conflict-of-interest declaration.
  conflictOfInterestStatus: not-reported
  disclosureUrl: https://clinicaltrials.gov/study/NCT06927076
- id: legal-us-ecfr
  title: 21 CFR § 1308.11 — Schedule I
  authors: U.S. Drug Enforcement Administration; Electronic Code of Federal Regulations
  year: 2026
  url: https://www.ecfr.gov/current/title-21/chapter-II/part-1308/subject-group-ECFRf62f8e189108c4d/section-1308.11
  kind: Federal regulation
  insight: Lists Dimethyltryptamine, DMT, DEA controlled-substance code 7435, in federal Schedule I.
  limitation: Federal scheduling record only; state law, exemptions, registrations, religious litigation, and case-specific legal questions can differ.
  funding: Not applicable to an official legal source.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not applicable to an official legal source.
  conflictOfInterestStatus: not-assessed
- id: legal-uk-mda
  title: Misuse of Drugs Act 1971, Schedule 2
  authors: Parliament of the United Kingdom; legislation.gov.uk
  year: 2026
  url: https://www.legislation.gov.uk/ukpga/1971/38/schedule/2
  kind: Official United Kingdom legislation
  insight: Lists N,N-Dimethyltryptamine in Part I, Class A drugs.
  limitation: Classification source; specific licensing, possession, supply, production, medicine, and sentencing questions require the operative Act, regulations, and current amendments.
  funding: Not applicable to an official legal source.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not applicable to an official legal source.
  conflictOfInterestStatus: not-assessed
- id: legal-canada-cdsa
  title: Controlled Drugs and Substances Act, Schedule III
  authors: Government of Canada; Justice Laws Website
  year: 2026
  url: https://laws-lois.justice.gc.ca/eng/acts/c-38.8/page-11.html
  kind: Official Canadian federal legislation
  insight: Lists N,N-Dimethyltryptamine (DMT) and any salt thereof in Schedule III.
  limitation: Scheduling alone does not summarize all authorizations, exemptions, offences, penalties, or provincial rules.
  funding: Not applicable to an official legal source.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not applicable to an official legal source.
  conflictOfInterestStatus: not-assessed
- id: legal-france-arrete
  title: Arrêté du 22 février 1990 fixant la liste des substances classées comme stupéfiants
  authors: République française; Légifrance
  year: 2026
  url: https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000533085
  kind: Official French legal instrument
  insight: The French narcotics list includes DMT, N,N-diméthyltryptamine, among substances classified as stupéfiants.
  limitation: Classification record only; specific authorization, research, medical, possession, import/export, and criminal-law consequences require the applicable current French legal provisions.
  funding: Not applicable to an official legal source.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not applicable to an official legal source.
  conflictOfInterestStatus: not-assessed
- id: psychonautwiki
  title: "DMT: PsychonautWiki dose and duration data"
  authors: PsychonautWiki contributors
  year: 2026
  url: https://psychonautwiki.org/wiki/DMT
  kind: Community wiki data · CC BY 4.0
  insight: Source of this page's community dose bands and subjective duration ranges, from the PsychonautWiki API snapshot built about 2026-06-23 and retrieved 2026-11-06. The structured data is used under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/); BHWiki normalized unit symbols and route names.
  limitation: "PsychonautWiki states: \"PW's dosage information is gathered from users and resources for educational purposes only. It is not a recommendation and should be verified with other sources for accuracy.\" Its dose and duration values carry no per-value citations."
```

## Legal

```yaml
- jurisdiction: United States — federal
  activity: Controlled-substance scheduling of N,N-dimethyltryptamine
  status: Dimethyltryptamine (DMT), DEA code 7435, is listed in Schedule I under 21 CFR § 1308.11. This record states federal classification and does not substitute for analysis of registrations, exemptions, state law, or case-specific activity.
  sourceUrl: https://www.ecfr.gov/current/title-21/chapter-II/part-1308/subject-group-ECFRf62f8e189108c4d/section-1308.11
  asOf: 2026-10-16
- jurisdiction: United Kingdom
  activity: Controlled-drug classification of N,N-dimethyltryptamine
  status: N,N-Dimethyltryptamine is listed in Part I of Schedule 2 to the Misuse of Drugs Act 1971 and is therefore a Class A controlled drug. Specific possession, supply, production, and licensing consequences depend on the operative Act and regulations.
  sourceUrl: https://www.legislation.gov.uk/ukpga/1971/38/schedule/2
  asOf: 2026-10-16
- jurisdiction: Canada — federal
  activity: Controlled-substance scheduling of N,N-dimethyltryptamine and its salts
  status: N,N-Dimethyltryptamine (DMT), including any salt thereof, is listed in Schedule III of the Controlled Drugs and Substances Act. Specific activities may be permitted only where authorized under applicable federal law or exemption.
  sourceUrl: https://laws-lois.justice.gc.ca/eng/acts/c-38.8/page-11.html
  asOf: 2026-10-16
- jurisdiction: France
  activity: National narcotics classification of DMT / N,N-diméthyltryptamine
  status: DMT, N,N-diméthyltryptamine, is included in the official list of substances classified as stupéfiants. The classification record does not by itself summarize every authorization, research exception, possession rule, or penalty.
  sourceUrl: https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000533085
  asOf: 2026-10-16
```

