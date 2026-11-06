---
slug: modafinil
name: Modafinil
subtitle: Wakefulness and its limits.
aliases:
  - Provigil
formula: C15H15NO2S
molecularWeight: 273.4 g/mol
pubchemCid: 4236
smiles: C1=CC=C(C=C1)C(C2=CC=CC=C2)S(=O)CC(=O)N
category: Wake-promoting medicine
tags:
  - stimulant
  - dopamine-transporter
  - dopamine
  - wakefulness
  - wake-maintenance
accent: "#bea17c"
reviewedAt: 2026-10-11
editorialStatus: sourced-draft
halfLife:
  label: About 15 hours
  low: 15
  high: 15
  context: Label and human PK evidence; racemate contains a shorter-lived S-enantiomer.
  sourceId: dr-modafinil-link-1
  observationId: modafinil-pk-1
kinetics:
  onset: Tmax about 2–4 hours
  peak: Food can delay Tmax by about one hour
  duration: Effective half-life about 15 hours
  bioavailability: Overall exposure is not materially altered by food
  metabolism: About 90% eliminated metabolically; CYP3A4/5 induction and CYP2C19 inhibition
  sourceId: dr-modafinil-link-1
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
x-order: 6
---

## Summary

Modafinil is a prescription wakefulness-promoting racemate indicated in the U.S. for narcolepsy, residual OSA sleepiness and diagnosed shift-work disorder. Patient evidence is stronger than healthy-user cognition evidence; severe sleep-loss studies show acute restoration, while rested healthy effects are small and domain-specific. [dr-modafinil-link-1][dr-modafinil-s2]

## Description

The U.S. label uses 200 mg once daily for narcolepsy and OSA or about one hour before a diagnosed night shift; it treats residual sleepiness, not airway obstruction or ordinary fatigue. [dr-modafinil-link-1]

## Evidence note

PubMed abstracts for all 36 linked PMIDs were retrieved; heuristic Reddit-derived records were replaced with source-specific records while curated label, guideline, and established-treatment records were retained. Full text was not available for the Reddit-linked modafinil publications in this pass.

## Doses

```yaml
- label: Narcolepsy label
  amount: 200 mg
  quantity: null
  quantityMax: null
  unit: study-specific
  ingredient: Modafinil
  formulation: Immediate-release tablet
  route: Oral
  frequency: Once each morning
  duration: Ongoing clinical use
  population: Adults with narcolepsy
  purpose: Approved-label wakefulness
  sourceCategory: approved-label
  note: 400 mg/day tolerated in trials but no consistent extra benefit over 200 mg.
  sourceId: dr-modafinil-link-1
- label: OSA residual sleepiness label
  amount: 200 mg
  quantity: null
  quantityMax: null
  unit: study-specific
  ingredient: Modafinil
  formulation: Immediate-release tablet
  route: Oral
  frequency: Once each morning
  duration: Ongoing clinical use with primary OSA treatment
  population: Adults with residual sleepiness despite CPAP or other treatment
  purpose: Approved-label wakefulness
  sourceCategory: approved-label
  note: Does not treat airway obstruction; adequate primary therapy remains necessary.
  sourceId: dr-modafinil-link-1
- label: Shift-work disorder label
  amount: 200 mg
  quantity: null
  quantityMax: null
  unit: study-specific
  ingredient: Modafinil
  formulation: Immediate-release tablet
  route: Oral
  frequency: About one hour before the work shift
  duration: 12-week pivotal trial
  population: Adults with diagnosed SWD
  purpose: Wakefulness research
  sourceCategory: research
  note: Applies to diagnosed SWD rather than ordinary shift-work fatigue.
  sourceId: dr-modafinil-link-1
- label: Severe sleep-loss experiment
  amount: 200 or 400 mg single dose
  quantity: null
  quantityMax: null
  unit: study-specific
  ingredient: Modafinil
  formulation: Study tablet
  route: Oral
  frequency: Single exposure after prolonged wakefulness
  duration: Acute sleep-deprivation paradigm
  population: Healthy adults awake about 41.5 hours
  purpose: Countermeasure research
  sourceCategory: research
  note: Comparable overall with 600 mg caffeine; not evidence for replacing sleep.
  sourceId: dr-modafinil-s8
- label: Healthy volunteer cognition study
  amount: 100 or 200 mg once
  quantity: 100
  quantityMax: 200
  unit: mg
  ingredient: Modafinil
  formulation: Oral modafinil
  route: oral
  frequency: single dose
  duration: acute; testing 2 hours post-dose
  population: 60 healthy young men
  purpose: Memory, attention, planning, and response inhibition
  sourceCategory: research
  note: Single-dose laboratory exposure; not a cognitive-enhancement recommendation.
  sourceId: dr-modafinil-s4
- label: Sustained-work sleep-deprivation study
  amount: 300 mg given on three occasions during 64 h wakefulness
  quantity: 300
  quantityMax: 300
  unit: mg per dose
  ingredient: Modafinil
  formulation: Oral modafinil
  route: oral
  frequency: three doses over 64 h
  duration: 64 h sustained work and sleep loss
  population: 41 military subjects
  purpose: Alertness and cognitive performance during sleep deprivation
  sourceCategory: research
  note: Operational research exposure with recovery-sleep assessment.
  sourceId: reddit-pmid-10607161
- label: Military pilot study
  amount: 100 mg every 4 h for three doses
  quantity: 100
  quantityMax: 100
  unit: mg per dose
  ingredient: Modafinil
  formulation: Oral modafinil
  route: oral
  frequency: every 4 hours ×3
  duration: 40 h sustained wakefulness
  population: 18 helicopter pilots
  purpose: Alertness and flight performance
  sourceCategory: research
  note: Controlled operational study; not general prescribing guidance.
  sourceId: reddit-pmid-22764609
- label: Adult ADHD dose-finding trial
  amount: 255–510 mg/day
  quantity: 255
  quantityMax: 510
  unit: mg/day
  ingredient: Modafinil
  formulation: Oral modafinil
  route: oral
  frequency: daily
  duration: 9 weeks
  population: 338 adults with ADHD enrolled
  purpose: ADHD symptom efficacy and tolerability
  sourceCategory: research
  note: No significant AISRS benefit versus placebo.
  sourceId: reddit-pmid-22617860
- label: Threshold dose
  amount: 25 mg
  quantity: 25
  quantityMax: null
  unit: mg
  ingredient: Modafinil
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
  ingredient: Modafinil
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
  amount: 100–200 mg
  quantity: 100
  quantityMax: 200
  unit: mg
  ingredient: Modafinil
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
  amount: 200–300 mg
  quantity: 200
  quantityMax: 300
  unit: mg
  ingredient: Modafinil
  formulation: Not established
  route: Oral
  frequency: Not established
  duration: Not established
  population: Not established
  purpose: PsychonautWiki dosage classification
  sourceCategory: community
  note: Band from the PsychonautWiki API snapshot built about 2026-06-23.
  sourceId: psychonautwiki
- label: Heavy dose band (300 mg and above)
  amount: 300 mg and above
  quantity: 300
  quantityMax: null
  unit: mg
  ingredient: Modafinil
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
- id: modafinil-pk-1
  analyte: Modafinil (R/S racemate)
  route: Oral
  formulation: Immediate-release tablet
  population: Healthy adults and labeled patient populations
  endpoint: elimination-half-life
  statistic: approximate
  value: 15
  low: null
  high: null
  unit: hours
  context: Effective multiple-dose half-life is approximately 15 hours; R-modafinil persists about three times longer than S-modafinil. Food delays Tmax by about one hour without materially changing overall exposure.
  sourceId: dr-modafinil-link-1
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
    min: 5
    max: 10
    unit: hours
  phases:
    - name: onset
      basis: elapsed-since-exposure
      min: 20
      max: 60
      unit: minutes
    - name: comeup
      basis: phase-duration
      min: 20
      max: 60
      unit: minutes
    - name: peak
      basis: phase-duration
      min: 3.5
      max: 5
      unit: hours
    - name: offset
      basis: phase-duration
      min: 1
      max: 3
      unit: hours
    - name: after-effects
      basis: phase-duration
      min: 2
      max: 6
      unit: hours
```

## Modifiers

```yaml
- label: Hepatic impairment
  effect: Exposure increases
  detail: Advanced cirrhosis lowers clearance by about 60% and approximately doubles steady-state concentration; the label recommends half dosing in severe hepatic impairment.
  sourceId: dr-modafinil-link-1
  observationId: modafinil-pk-1
  factorType: other
  direction: slower
- label: CYP3A4/5 induction
  effect: Co-medication exposure can fall
  detail: The label documents lower exposure to steroidal contraceptives, cyclosporine, midazolam and triazolam.
  sourceId: dr-modafinil-link-1
  observationId: modafinil-pk-1
  factorType: enzyme
  direction: variable
```

## Effects

```yaml
- id: modafinil-wakefulness
  name: Wakefulness
  direction: Increased
  evidence: Human research
  description: Modafinil improves objective and subjective wakefulness in narcolepsy, OSA residual sleepiness and diagnosed SWD; it does not normalize all performance under sleep loss.
  sourceId: dr-modafinil-link-1
  population: Patients with excessive sleepiness
  exposure: 200–400 mg/day
  conceptId: alertness
  instrument: null
  magnitude: null
  reportType: measured-assessment
  conflictingSourceIds: []
- id: modafinil-rested-healthy-cognition
  name: Rested healthy cognition
  direction: Variable
  evidence: Human research
  description: Healthy-volunteer trials show selective small benefits mixed with many null outcomes and occasional slowing; this is not a general cognitive-enhancement result.
  sourceId: dr-modafinil-s2
  population: Healthy rested adults
  exposure: Acute 100–200 mg studies
  conceptId: alertness
  instrument: null
  magnitude: null
  reportType: measured-assessment
  conflictingSourceIds: []
- id: modafinil-sleep-loss-10607161
  conceptId: wakefulness
  name: Wakefulness during sleep deprivation
  direction: Increased
  evidence: Human research
  description: Three 300 mg doses during 64 hours of sustained work improved mood, fatigue, sleepiness, reaction time, logical reasoning, and short-term memory versus placebo in military subjects.
  sourceId: reddit-pmid-10607161
  population: 41 military subjects
  exposure: 300 mg three times during 64 h wakefulness
  instrument: Mood, fatigue, reaction time, reasoning, and memory tests
  magnitude: Better than placebo; more side effects than placebo but fewer than amphetamine
  reportType: measured-assessment
```

## Outcomes

```yaml
- id: modafinil-narcolepsy-maintenance-of-wakefulness
  name: Narcolepsy maintenance of wakefulness
  direction: Increased
  evidence: Human research
  description: Pivotal trials improved MWT and clinician global ratings; 400 mg did not consistently outperform 200 mg.
  sourceId: dr-modafinil-link-1
  population: Adults with narcolepsy
  exposure: 200 or 400 mg/day for 9 weeks
  conceptId: wake-maintenance
  instrument: MWT and CGI-C
  magnitude: MWT about +2.3 minutes versus placebo
  reportType: measured-assessment
  conflictingSourceIds: []
- id: modafinil-osa-residual-sleepiness
  name: OSA residual sleepiness
  direction: Increased
  evidence: Human research
  description: Pooled RCTs improved MWT and ESS in patients already receiving primary OSA treatment; meta-analysis estimates are class-pooled.
  sourceId: dr-modafinil-s11
  population: Adults with OSA and residual sleepiness
  exposure: 200–400 mg/day
  conceptId: cognitive-task-performance
  instrument: MWT and ESS
  magnitude: MWT about +3 minutes pooled
  reportType: measured-assessment
  conflictingSourceIds: []
- id: modafinil-swd-sleepiness-and-lapses
  name: SWD sleepiness and lapses
  direction: Increased
  evidence: Human research
  description: A diagnosed-SWD trial improved MSLT, PVT lapses and CGI-C, but residual sleepiness and impaired performance remained.
  sourceId: czeisler2005
  population: Night workers with diagnosed SWD
  exposure: 200 mg before shift for 12 weeks
  conceptId: cognitive-task-performance
  instrument: MSLT, PVT and CGI-C
  magnitude: CGI-C 74% vs 36%
  reportType: measured-assessment
  conflictingSourceIds: []
- id: modafinil-healthy-severe-sleep-loss-performance
  name: Healthy severe sleep-loss performance
  direction: Increased
  evidence: Human research
  description: After 41.5 hours awake, 200 and 400 mg improved alertness/performance versus placebo; doses did not differ significantly and were broadly comparable with caffeine.
  sourceId: dr-modafinil-s8
  population: Healthy adults under enforced sleep deprivation
  exposure: Single 200–400 mg dose
  conceptId: cognitive-task-performance
  instrument: Performance battery
  magnitude: Acute paradigm only
  reportType: measured-assessment
  conflictingSourceIds: []
- id: modafinil-healthy-cognition-12417966
  conceptId: cognitive-performance
  name: Selective task performance
  direction: Increased
  evidence: Human research
  description: In 60 healthy young men, single 100 or 200 mg modafinil improved selected digit-span, visual-pattern, spatial-planning and stop-signal tasks but slowed some other tasks.
  sourceId: dr-modafinil-s4
  population: 60 healthy young men
  exposure: 100 or 200 mg once
  instrument: Neuropsychological test battery
  magnitude: Selective, not global, enhancement
  reportType: measured-assessment
  conflictingSourceIds: []
- id: modafinil-healthy-students-26135067
  conceptId: cognitive-performance
  name: Global cognition in rested students
  direction: Variable
  evidence: Human research
  description: In 160 healthy students, modafinil did not improve global cognitive performance, digit span or block design; a small Stroop improvement was observed.
  sourceId: reddit-pmid-26135067
  population: 160 healthy university students
  exposure: Single randomized crossover dose; amount not stated in abstract
  instrument: Stroop, block design and digit-span tasks
  magnitude: No global enhancement
  reportType: measured-assessment
  conflictingSourceIds: []
```

## Mechanisms

```yaml
- title: Wake-promoting pharmacology
  conceptId: dopamine-transporter
  description: The exact clinical mechanism remains incompletely established; dopamine-transporter binding and in-vitro/animal findings should not be treated as a complete human cognitive mechanism.
  sourceId: dr-modafinil-link-1
```

## Cautions

```yaml
- title: Serious rash and hypersensitivity
  description: The label reports hospitalization-requiring rash, SJS/TEN and DRESS; discontinue at the first sign of clinically significant rash unless clearly unrelated.
  sourceId: dr-modafinil-link-1
- title: Psychiatric and cardiovascular effects
  description: Anxiety, agitation, insomnia, mania, hallucinations, suicidal ideation, BP/heart-rate effects and rare serious events require clinical monitoring.
  sourceId: dr-modafinil-link-1
- title: Pregnancy uncertainty
  description: Pregnancy registry and observational findings are incomplete and mixed; the label retains caution and does not establish fetal safety.
  sourceId: dr-modafinil-s10
```

## Claims

```yaml
- id: modafinil-claim-1
  assertion: Modafinil is a general-purpose cognitive enhancer in healthy rested adults.
  relation: evidence-boundary
  participants:
    - entityId: substance:modafinil
      role: intervention
    - entityId: tag:cognitive-task-performance
      role: reported-context
  context: Healthy meta-analysis found a very small domain-specific effect and real-world generalization is uncertain.
  sourceIds:
    - dr-modafinil-s2
    - dr-modafinil-s4
    - dr-modafinil-s6
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Patient wakefulness evidence cannot be silently relabeled as enhancement above baseline.
- id: modafinil-claim-2
  assertion: Modafinil replaces sleep.
  relation: evidence-boundary
  participants:
    - entityId: substance:modafinil
      role: intervention
    - entityId: tag:wakefulness
      role: reported-context
  context: Severe sleep-loss studies show partial acute restoration, not normalization or a substitute for adequate sleep.
  sourceIds:
    - dr-modafinil-s8
    - czeisler2005
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Residual impairment remains and long-term sleep restriction is untested.
- id: modafinil-claim-sleep-loss-10607161
  assertion: Modafinil improved alertness and selected cognitive measures during 64 hours of sleep deprivation in a military study.
  relation: supported-by
  participants:
    - entityId: substance:modafinil
      role: intervention
    - entityId: tag:wakefulness
      role: outcome
  context: 300 mg doses given three times during sustained work.
  sourceIds:
    - reddit-pmid-10607161
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Operational sleep-loss context; side effects exceeded placebo.
- id: modafinil-claim-adhd-22617860
  assertion: A 9-week randomized dose-finding trial did not show significant modafinil benefit for adult ADHD symptoms.
  relation: contradicted-by
  participants:
    - entityId: substance:modafinil
      role: intervention
    - entityId: tag:attention
      role: outcome
  context: 255–510 mg/day versus placebo in 338 enrolled adults.
  sourceIds:
    - reddit-pmid-22617860
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Trial was adult ADHD-specific and reasonably tolerated.
```

## Interactions

```yaml
- id: modafinil-contraceptives
  name: Steroidal contraceptives
  otherSlug: null
  summary: CYP3A4/5 induction lowers steroidal contraceptive exposure; alternative or concomitant contraception is advised during treatment and for one month after stopping in the U.S. label.
  sourceId: dr-modafinil-link-1
  context: Label-described interaction
  conflictingSourceIds: []
- id: modafinil-warfarin
  name: Warfarin
  otherSlug: null
  summary: The label recommends additional PT/INR monitoring.
  sourceId: dr-modafinil-link-1
  context: Label-described monitoring
  conflictingSourceIds: []
- id: modafinil-cyp2c19
  name: CYP2C19 substrates
  otherSlug: null
  summary: Inhibition can increase exposure to phenytoin, diazepam, propranolol, omeprazole and clomipramine.
  sourceId: dr-modafinil-link-1
  context: Label-described enzyme interaction
  conflictingSourceIds: []
```

## Experience links

```yaml
[]
```

## References

```yaml
- id: dr-modafinil-link-1
  title: Full Prescribing Information
  authors: use, C-IV — Full Prescribing Information. Apotex Corp.; DailyMed/National Library of Medicine. 2026; SPL v21, effective July 21, 2026. [Direct regulator URL](
  year: 2026
  url: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=944daf47-49a6-93ca-e348-4a0f1b6d937e
  kind: Regulatory or registry source
  insight: Source R1 supports the section-specific finding cited in this article.
  limitation: Study-specific population, formulation, design and disclosure limits remain as described in the report.
  funding: "not applicable to a research study. Sponsorship/status: product labeler Apotex; official US SPL hosted by DailyMed. Conflicts: not an investigator-authored publication. Conflict status: official regulatory source with manufacturer provenance."
  sponsorshipStatus: not-assessed
  conflictsOfInterest: "not an investigator-authored publication. Conflict status: official regulatory source with manufacturer provenance."
  conflictOfInterestStatus: not-assessed
- id: dr-modafinil-s2
  title: How effective are pharmaceuticals for cognitive enhancement in healthy adults? Carl A
  authors: Roberts, Andrew Jones, Harry Sumnall, Suzanne H. Gage, Catharine Montgomery. 2020. [PubMed](
  year: 2020
  url: https://pubmed.ncbi.nlm.nih.gov/32709551/
  pmid: "32709551"
  kind: PubMed-indexed study
  insight: Source R2 supports the section-specific finding cited in this article.
  limitation: Study-specific population, formulation, design and disclosure limits remain as described in the report.
  funding: "not identified in accessible manuscript/record; unknown. Sponsorship: unknown/not identified. Conflicts: authors declared no conflicts. Conflict status: no declared author COI; funding incompletely identified."
  sponsorshipStatus: not-assessed
  conflictsOfInterest: "authors declared no conflicts. Conflict status: no declared author COI; funding incompletely identified."
  conflictOfInterestStatus: not-assessed
- id: dr-modafinil-s4
  title: Cognitive enhancing effects of modafinil in healthy volunteers
  authors: Danielle C. Turner, Trevor W. Robbins, Luke Clark, Adam R. Aron, Jonathan Dowson, Barbara J. Sahakian. 2003. [PubMed](
  year: 2003
  url: https://pubmed.ncbi.nlm.nih.gov/12417966/
  pmid: "12417966"
  kind: PubMed-indexed study
  insight: Source R3 supports the section-specific finding cited in this article.
  limitation: Study-specific population, formulation, design and disclosure limits remain as described in the report.
  funding: "PubMed indexes non-US-government research support; exact funder not specified in accessible record. Sponsorship: unknown. Conflicts: unknown/not stated. Conflict status: incomplete disclosure metadata."
  sponsorshipStatus: not-assessed
  conflictsOfInterest: "unknown/not stated. Conflict status: incomplete disclosure metadata."
  conflictOfInterestStatus: not-assessed
- id: dr-modafinil-s6
  title: Does modafinil enhance cognitive performance in young volunteers who are not sleep-deprived? Delia C
  authors: Randall, Aparna Viswanath, Punam Bharania, Sarah M. Elsabagh, David E. Hartley, John M. Shneerson, Sandra E. File. 2005. [PubMed](
  year: 2005
  url: https://pubmed.ncbi.nlm.nih.gov/15738750/
  pmid: "15738750"
  kind: PubMed-indexed study
  insight: Source R4 supports the section-specific finding cited in this article.
  limitation: Study-specific population, formulation, design and disclosure limits remain as described in the report.
  funding: "non-US-government research support indexed; exact funder unavailable. Sponsorship: unknown. Conflicts: unknown. Conflict status: incomplete disclosure metadata."
  sponsorshipStatus: not-assessed
  conflictsOfInterest: "unknown. Conflict status: incomplete disclosure metadata."
  conflictOfInterestStatus: not-assessed
- id: dr-modafinil-s8
  title: "Maintaining alertness and performance during sleep deprivation: modafinil versus caffeine"
  authors: Nancy Jo Wesensten, Gregory Belenky, Mary A. Kautz, David R. Thorne, Rebecca M. Reichardt, Thomas J. Balkin. 2002. [PubMed](
  year: 2002
  url: https://pubmed.ncbi.nlm.nih.gov/11862356/
  pmid: "11862356"
  kind: PubMed-indexed study
  insight: Source R5 supports the section-specific finding cited in this article.
  limitation: Study-specific population, formulation, design and disclosure limits remain as described in the report.
  funding: "exact funding not stated; unknown. Sponsorship: unknown. Conflicts: unknown. Conflict status: incomplete disclosure metadata."
  sponsorshipStatus: not-assessed
  conflictsOfInterest: "unknown. Conflict status: incomplete disclosure metadata."
  conflictOfInterestStatus: not-assessed
- id: dr-modafinil-s10
  title: "Modafinil (Provigil): increased risk of congenital malformations if used during pregnancy"
  authors: UK Medicines and Healthcare products Regulatory Agency. 2020. [Direct regulator URL](
  year: 2020
  url: https://www.gov.uk/drug-safety-update/modafinil-provigil-increased-risk-of-congenital-malformations-if-used-during-pregnancy
  kind: Regulatory or registry source
  insight: Source R6 supports the section-specific finding cited in this article.
  limitation: Study-specific population, formulation, design and disclosure limits remain as described in the report.
  funding: "public regulatory activity. Sponsorship/status: MHRA pharmacovigilance communication; not industry-sponsored research. Conflicts: none stated/applicable. Conflict status: official pharmacovigilance source."
  sponsorshipStatus: not-assessed
  conflictsOfInterest: "none stated/applicable. Conflict status: official pharmacovigilance source."
  conflictOfInterestStatus: not-assessed
- id: dr-modafinil-s11
  title: "Modafinil/armodafinil in obstructive sleep apnoea: a systematic review and meta-analysis"
  authors: Julia L. Chapman, Andrew Vakulin, Jan Hedner, Brendon J. Yee, Nathaniel S. Marshall. 2016. [PubMed](
  year: 2016
  url: https://pubmed.ncbi.nlm.nih.gov/26846828/
  pmid: "26846828"
  kind: PubMed-indexed study
  insight: Source R7 supports the section-specific finding cited in this article.
  limitation: Study-specific population, formulation, design and disclosure limits remain as described in the report.
  funding: "Australian NHMRC support, grant 1004528, Chapman scholarship 1038709 and University of Sydney bridging support. Sponsorship: public/academic based on retrieved funding. Conflicts: complete author disclosure not recovered; unknown/partial. Conflict status: predominantly public funding, incomplete COI verification."
  sponsorshipStatus: not-assessed
  conflictsOfInterest: "complete author disclosure not recovered; unknown/partial. Conflict status: predominantly public funding, incomplete COI verification."
  conflictOfInterestStatus: not-assessed
- id: dr-modafinil-s13
  title: Randomized trial of modafinil for the treatment of pathological somnolence in narcolepsy
  authors: US Modafinil in Narcolepsy Multicenter Study Group. 1998. [PubMed](
  year: 1998
  url: https://pubmed.ncbi.nlm.nih.gov/9450772/
  pmid: "9450772"
  kind: PubMed-indexed study
  insight: Source R8 supports the section-specific finding cited in this article.
  limitation: Study-specific population, formulation, design and disclosure limits remain as described in the report.
  funding: "non-US-government research support indexed; exact source unavailable. Sponsorship: unknown from retrieved record. Conflicts: unknown. Conflict status: incomplete disclosure metadata."
  sponsorshipStatus: not-assessed
  conflictsOfInterest: "unknown. Conflict status: incomplete disclosure metadata."
  conflictOfInterestStatus: not-assessed
- id: czeisler2005
  title: Modafinil for excessive sleepiness associated with shift-work sleep disorder
  authors: Charles A. Czeisler, James K. Walsh, Thomas Roth, Rod J. Hughes, Kenneth P. Wright Jr, Lilliam Kingsbury, Sanjay Arora, Jonathan R. L. Schwartz, Gwendolyn E. Niebler, David F. Dinges; US Modafinil in SWSD Study Group. 2005. [PubMed](
  year: 2005
  url: https://pubmed.ncbi.nlm.nih.gov/16079371/
  pmid: "16079371"
  kind: PubMed-indexed study
  insight: Source R9 supports the section-specific finding cited in this article.
  limitation: Study-specific population, formulation, design and disclosure limits remain as described in the report.
  funding: "Cephalon Inc. Sponsorship: industry-sponsored. Conflicts: multiple investigators reported Cephalon consulting, speaking and/or research relationships; several authors were Cephalon employees/equity holders, and Cephalon supported an endowed professorship associated with an investigator. Conflict status: industry/material."
  sponsorshipStatus: not-assessed
  conflictsOfInterest: "multiple investigators reported Cephalon consulting, speaking and/or research relationships; several authors were Cephalon employees/equity holders, and Cephalon supported an endowed professorship associated with an investigator. Conflict status: industry/material."
  conflictOfInterestStatus: not-assessed
- id: dr-modafinil-s17
  title: "Modafinil in idiopathic hypersomnia without long sleep time: randomized, double-blind, placebo-controlled study"
  authors: Geert Mayer, Heike Benes, Peter Young, Marion Bitterlich, Andrea Rodenbeck. 2015. [PubMed](
  year: 2015
  url: https://pubmed.ncbi.nlm.nih.gov/25196321/
  pmid: "25196321"
  kind: PubMed-indexed study
  insight: Source R10 supports the section-specific finding cited in this article.
  limitation: Study-specific population, formulation, design and disclosure limits remain as described in the report.
  funding: "unknown/not stated. Sponsorship: unknown. Conflicts: unknown. Conflict status: incomplete disclosure metadata."
  sponsorshipStatus: not-assessed
  conflictsOfInterest: "unknown. Conflict status: incomplete disclosure metadata."
  conflictOfInterestStatus: not-assessed
- id: dr-modafinil-s19
  title: "Modafinil for daytime somnolence in Parkinson’s disease: double-blind placebo-controlled parallel trial"
  authors: William G. Ondo, R. Fayle, F. Atassi, Joseph Jankovic. 2005. [PubMed](
  year: 2005
  url: https://pubmed.ncbi.nlm.nih.gov/16291885/
  pmid: "16291885"
  kind: PubMed-indexed study
  insight: Source R11 supports the section-specific finding cited in this article.
  limitation: Study-specific population, formulation, design and disclosure limits remain as described in the report.
  funding: "unrestricted educational grant from Cephalon Pharmaceuticals. Sponsorship: industry-supported. Conflicts: at least W. Ondo reported a Cephalon speaking relationship; disclosure partial. Conflict status: industry/material."
  sponsorshipStatus: not-assessed
  conflictsOfInterest: "at least W. Ondo reported a Cephalon speaking relationship; disclosure partial. Conflict status: industry/material."
  conflictOfInterestStatus: not-assessed
- id: dr-modafinil-s21
  title: Effect of modafinil on pharmacokinetics of ethinyl estradiol and triazolam in healthy volunteers
  authors: Philmore Robertson Jr, Edward T. Hellriegel, Sanjay Arora, Michael Nelson. 2002. [PubMed](
  year: 2002
  url: https://pubmed.ncbi.nlm.nih.gov/11823757/
  pmid: "11823757"
  kind: PubMed-indexed study
  insight: Source R12 supports the section-specific finding cited in this article.
  limitation: Study-specific population, formulation, design and disclosure limits remain as described in the report.
  funding: "unknown/not stated. Sponsorship: unknown. Conflicts: unknown; no relationship inferred from names. Conflict status: incomplete disclosure metadata."
  sponsorshipStatus: not-assessed
  conflictsOfInterest: "unknown; no relationship inferred from names. Conflict status: incomplete disclosure metadata."
  conflictOfInterestStatus: not-assessed
- id: dr-modafinil-s23
  title: The Nuvigil/Provigil Pregnancy Registry
  authors: Cephalon Inc.; later Teva Branded Pharmaceutical Products R&D. 2009–2024 registry record. [ClinicalTrials.gov
  year: 2009
  url: https://clinicaltrials.gov/study/NCT01792583
  kind: Regulatory or registry source
  insight: Source R13 supports the section-specific finding cited in this article.
  limitation: Registry or search evidence does not establish efficacy without posted results.
  funding: "industry. Sponsorship/status: Cephalon/Teva-sponsored observational registry; terminated as no longer feasible; no posted results. Conflicts: sponsor-submitted registry record. Conflict status: industry/material."
  sponsorshipStatus: not-assessed
  conflictsOfInterest: "sponsor-submitted registry record. Conflict status: industry/material."
  conflictOfInterestStatus: not-assessed
- id: dr-modafinil-s24
  title: "Assessing the Risk of Adverse Maternal and Infant Outcomes Following Prenatal Modafinil Exposure: French Nationwide Cohort Study"
  authors: Sigal Kaplan, Julie de Nascimento, Andrea Contini. 2026. [PubMed](
  year: 2026
  url: https://pubmed.ncbi.nlm.nih.gov/42274903/
  pmid: "42274903"
  kind: PubMed-indexed study
  insight: Source R14 supports the section-specific finding cited in this article.
  limitation: Study-specific population, formulation, design and disclosure limits remain as described in the report.
  funding: "unknown/not stated. Sponsorship: unknown. Conflicts: unknown/not stated. Conflict status: incomplete disclosure metadata."
  sponsorshipStatus: not-assessed
  conflictsOfInterest: "unknown/not stated. Conflict status: incomplete disclosure metadata."
  conflictOfInterestStatus: not-assessed
- id: dr-modafinil-s26
  title: An evaluation of the abuse potential of modafinil using methylphenidate as a reference
  authors: Donald R. Jasinski. 2000. [PubMed](
  year: 2000
  url: https://pubmed.ncbi.nlm.nih.gov/10757254/
  pmid: "10757254"
  kind: PubMed-indexed study
  insight: Source R15 supports the section-specific finding cited in this article.
  limitation: Study-specific population, formulation, design and disclosure limits remain as described in the report.
  funding: "entirely supported by a Cephalon grant; study drug supplied by Cephalon. Sponsorship: industry-sponsored. Conflicts: paid consultants/contractual relationships involved. Conflict status: industry/material."
  sponsorshipStatus: not-assessed
  conflictsOfInterest: "paid consultants/contractual relationships involved. Conflict status: industry/material."
  conflictOfInterestStatus: not-assessed
- id: dr-modafinil-s28
  title: Long-term efficacy and safety of modafinil (PROVIGIL) for excessive daytime sleepiness associated with narcolepsy
  authors: Merrill M. Mitler, J. Harsh, M. Hirshkowitz, C. Guilleminault. 2000. [PubMed](
  year: 2000
  url: https://pubmed.ncbi.nlm.nih.gov/10828434/
  pmid: "10828434"
  kind: PubMed-indexed study
  insight: Source R16 supports the section-specific finding cited in this article.
  limitation: Study-specific population, formulation, design and disclosure limits remain as described in the report.
  funding: "Cephalon Inc. Sponsorship: industry-sponsored. Conflicts: complete author-disclosure detail not recovered. Conflict status: industry/material, with incomplete individual COI metadata."
  sponsorshipStatus: not-assessed
  conflictsOfInterest: "complete author-disclosure detail not recovered. Conflict status: industry/material, with incomplete individual COI metadata."
  conflictOfInterestStatus: not-assessed
- id: dr-modafinil-r17
  title: Additional linked sleep/OSA evidence source
  authors: The report’s OSA synthesis also cites the systematic-review record above and its registry-linked clinical evidence; where a separate disclosure was not recoverable, status remains unknown rather than inferred.
  year: 2026
  url: https://pubmed.ncbi.nlm.nih.gov/?term=modafinil
  kind: PubMed-indexed study
  insight: Source R17 supports the section-specific finding cited in this article.
  limitation: Registry or search evidence does not establish efficacy without posted results.
  funding: Not assessed in the returned source metadata.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in the returned source metadata.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-27981901
  title: Molecular Insights of CREB and MAP-K Phosphorylation by Modafinil in Wake-Related Brain Areas.
  authors: Ramses Jimenez-Moreno, Adrian A Farret-Ramos, Adriana Valle-Ayala, Niurka Trujillo-Paredes, Eric Murillo-Rodriguez
  year: 2018
  url: https://pubmed.ncbi.nlm.nih.gov/27981901/
  kind: PubMed publication
  insight: "BACKGROUND: Modafinil (MOD) is a waking-promoting compound that is used for the treatment of sleep disorders such as sleepiness and narcolepsy."
  limitation: PubMed abstract retrieved with the PubMed connector on 2026-11-01; full text was not available for this citation.
  pmid: "27981901"
  doi: 10.2174/1874467209666161214152006
  funding: Not reported in the retrieved PubMed record.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not reported in the retrieved PubMed record.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-19031073
  title: Modafinil improves rapid shifts of attention.
  authors: Natalie L Marchant, Faddy Kamel, Kezia Echlin, John Grice, Mark Lewis, Jennifer M Rusted
  year: 2009
  url: https://pubmed.ncbi.nlm.nih.gov/19031073/
  kind: PubMed publication
  insight: "RATIONALE: The majority of studies investigating the cognitive effects of modafinil, a wake-promoting compound, demonstrate some improvements in attention."
  limitation: PubMed abstract retrieved with the PubMed connector on 2026-11-01; full text was not available for this citation.
  pmid: "19031073"
  doi: 10.1007/s00213-008-1395-1
  funding: Not reported in the retrieved PubMed record.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not reported in the retrieved PubMed record.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-17712350
  title: "Modafinil: a review of neurochemical actions and effects on cognition."
  authors: Michael J Minzenberg, Cameron S Carter
  year: 2008
  url: https://pubmed.ncbi.nlm.nih.gov/17712350/
  kind: PubMed publication
  insight: Modafinil (2-[(Diphenylmethyl) sulfinyl] acetamide, Provigil) is an FDA-approved medication with wake-promoting properties.
  limitation: PubMed abstract retrieved with the PubMed connector on 2026-11-01; full text was not available for this citation.
  pmid: "17712350"
  doi: 10.1038/sj.npp.1301534
  funding: Not reported in the retrieved PubMed record.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not reported in the retrieved PubMed record.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-22537794
  title: "R-modafinil (armodafinil): a unique dopamine uptake inhibitor and potential medication for psychostimulant abuse."
  authors: Claus J Loland, Maddalena Mereu, Oluyomi M Okunola, Jianjing Cao, Thomas E Prisinzano, Sonia Mazier, Theresa Kopajtic, Lei Shi, Jonathan L Katz, Gianluigi Tanda, Amy Hauck Newman
  year: 2012
  url: https://pubmed.ncbi.nlm.nih.gov/22537794/
  kind: PubMed publication
  insight: "BACKGROUND: (±)-Modafinil has piqued interest as a treatment for attention-deficit/hyperactivity disorder and stimulant dependence."
  limitation: PubMed abstract retrieved with the PubMed connector on 2026-11-01; full text was not available for this citation.
  pmid: "22537794"
  doi: 10.1016/j.biopsych.2012.03.022
  funding: Not reported in the retrieved PubMed record.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not reported in the retrieved PubMed record.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-19493958
  title: Effects of modafinil and prazosin on cognitive and physiological functions in healthy volunteers.
  authors: S E Winder-Rhodes, S R Chamberlain, M I Idris, T W Robbins, B J Sahakian, U Müller
  year: 2010
  url: https://pubmed.ncbi.nlm.nih.gov/19493958/
  kind: PubMed publication
  insight: Previous research has demonstrated cognitive-enhancing effects of modafinil in humans and generated evidence for its therapeutic potential in psychiatric disorders.
  limitation: PubMed abstract retrieved with the PubMed connector on 2026-11-01; full text was not available for this citation.
  pmid: "19493958"
  doi: 10.1177/0269881109105899
  funding: Not reported in the retrieved PubMed record.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not reported in the retrieved PubMed record.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-26520004
  title: Structured cues or modafinil for fatigue amelioration in clinicians? A double-blind, randomized controlled trial of critical clinical information recall in fatigued clinicians.
  authors: Ian Flindall, Daniel Richard Leff, Jonathan Goodship, Colin Sugden, Ara Darzi
  year: 2016
  url: https://pubmed.ncbi.nlm.nih.gov/26520004/
  kind: PubMed publication
  insight: 'OBJECTIVES: To evaluate the impact of modafinil on "free" and "cued" recall of clinical information in fatigued but nonsleep-deprived clinicians.'
  limitation: PubMed abstract retrieved with the PubMed connector on 2026-11-01; full text was not available for this citation.
  pmid: "26520004"
  doi: 10.1016/j.surg.2015.09.017
  funding: Not reported in the retrieved PubMed record.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not reported in the retrieved PubMed record.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-22779312
  title: "Cognition enhancement by modafinil: a meta-analysis."
  authors: Amanda M Kelley, Catherine M Webb, Jeremy R Athy, Sanita Ley, Steven Gaydos
  year: 2012
  url: https://pubmed.ncbi.nlm.nih.gov/22779312/
  kind: PubMed publication
  insight: "INTRODUCTION: Currently, there are a number of pharmaceuticals available that have potential to enhance cognitive functioning, some of which may ultimately be considered for such use in military operations."
  limitation: PubMed abstract retrieved with the PubMed connector on 2026-11-01; full text was not available for this citation.
  pmid: "22779312"
  doi: 10.3357/asem.3212.2012
  funding: Not reported in the retrieved PubMed record.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not reported in the retrieved PubMed record.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-26135067
  title: "Effects of modafinil on attention performance, short-term memory and executive function in university students: a randomized trial."
  authors: Alejandro Fernández, Franco Mascayano, Walter Lips, Andrés Painel, Jonathan Norambuena, Eva Madrid
  year: 2015
  url: https://pubmed.ncbi.nlm.nih.gov/26135067/
  kind: PubMed publication
  insight: "BACKGROUND: Modafinil is a drug developed and used for the treatment of excessive lethargy."
  limitation: PubMed abstract retrieved with the PubMed connector on 2026-11-01; full text was not available for this citation.
  pmid: "26135067"
  doi: 10.5867/medwave.2015.05.6166
  funding: Not reported in the retrieved PubMed record.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not reported in the retrieved PubMed record.
  conflictOfInterestStatus: not-assessed
- id: reddit-link-91fb22fe2dab
  title: Acute Effects of Modafinil on Brain Resting State Networks in Young Healthy Subjects
  authors: Not established
  year: 2026
  url: https://www.plosone.org/article/info%3Adoi%2F10.1371%2Fjournal.pone.0069224
  kind: Reddit index publication link
  insight: The Reddit index links this non-PubMed source; it is retained as a discovery lead.
  limitation: No PubMed abstract was retrieved for this non-PubMed link; full-text methods, funding, and conflicts remain unassessed.
  funding: Not reported in the retrieved PubMed record.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not reported in the retrieved PubMed record.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-22820554
  title: Effects of modafinil on non-verbal cognition, task enjoyment and creative thinking in healthy volunteers.
  authors: U Müller, J B Rowe, T Rittman, C Lewis, T W Robbins, B J Sahakian
  year: 2013
  url: https://pubmed.ncbi.nlm.nih.gov/22820554/
  kind: PubMed publication
  insight: "BACKGROUND: Modafinil, a putative cognitive enhancing drug, has previously been shown to improve performance of healthy volunteers as well as patients with attention deficit disorder and schizophrenia, mainly in tests of executive functions."
  limitation: PubMed abstract retrieved with the PubMed connector on 2026-11-01; full text was not available for this citation.
  pmid: "22820554"
  doi: 10.1016/j.neuropharm.2012.07.009
  funding: Not reported in the retrieved PubMed record.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not reported in the retrieved PubMed record.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-15252824
  title: Effects of modafinil on cognitive and meta-cognitive performance.
  authors: Joseph V Baranski, Ross Pigeau, Peter Dinich, Ira Jacobs
  year: 2004
  url: https://pubmed.ncbi.nlm.nih.gov/15252824/
  kind: PubMed publication
  insight: The stimulant modafinil has proved to be an effective treatment modality for narcolepsy and related sleep disorders and is also being studied for use during sustained military operations to ameliorate the effects of fatigue due to sleep loss.
  limitation: PubMed abstract retrieved with the PubMed connector on 2026-11-01; full text was not available for this citation.
  pmid: "15252824"
  doi: 10.1002/hup.596
  funding: Not reported in the retrieved PubMed record.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not reported in the retrieved PubMed record.
  conflictOfInterestStatus: not-assessed
- id: reddit-link-a150933bf0ed
  title: Effects of modafinil on working memory processes in humans
  authors: Not established
  year: 2026
  url: https://www.gwern.net/docs/2004-mueller.pdf
  kind: Reddit index publication link
  insight: The Reddit index links this non-PubMed source; it is retained as a discovery lead.
  limitation: No PubMed abstract was retrieved for this non-PubMed link; full-text methods, funding, and conflicts remain unassessed.
  funding: Not reported in the retrieved PubMed record.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not reported in the retrieved PubMed record.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-12672167
  title: Modafinil affects mood, but not cognitive function, in healthy young volunteers
  authors: Randall DC, Shneerson JM, Plaha KK, File SE. 2003; racemic modafinil. [PubMed](
  year: 2003
  url: https://pubmed.ncbi.nlm.nih.gov/12672167/
  kind: PubMed-indexed study
  insight: Modafinil is a selective wakefulness-promoting agent with beneficial effects in narcolepsy and conditions of sleep deprivation.
  limitation: PubMed abstract retrieved with the PubMed connector on 2026-11-01; full text was not available for this citation.
  pmid: "12672167"
  doi: 10.1002/hup.456
  funding: Not reported in the retrieved PubMed record.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not reported in the retrieved PubMed record.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-10607161
  title: Modafinil, d-amphetamine and placebo during 64 hours of sustained mental work. I. Effects on mood, fatigue, cognitive performance and body temperature.
  authors: R Pigeau, P Naitoh, A Buguet, C McCann, J Baranski, M Taylor, M Thompson, I MacK
  year: 1995
  url: https://pubmed.ncbi.nlm.nih.gov/10607161/
  kind: PubMed publication
  insight: Modafinil is an alerting substance that is considered safer than amphetamine with fewer side effects.
  limitation: PubMed abstract retrieved with the PubMed connector on 2026-11-01; full text was not available for this citation.
  pmid: "10607161"
  doi: 10.1111/j.1365-2869.1995.tb00172.x
  funding: Not reported in the retrieved PubMed record.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not reported in the retrieved PubMed record.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-22764609
  title: Modafinil as a replacement for dextroamphetamine for sustaining alertness in military helicopter pilots.
  authors: Arthur Estrada, Amanda M Kelley, Catherine M Webb, Jeremy R Athy, John S Crowley
  year: 2012
  url: https://pubmed.ncbi.nlm.nih.gov/22764609/
  kind: PubMed publication
  insight: "INTRODUCTION: Successful military aviation operations depend on maintaining continuous day-night operations."
  limitation: PubMed abstract retrieved with the PubMed connector on 2026-11-01; full text was not available for this citation.
  pmid: "22764609"
  doi: 10.3357/asem.3129.2012
  funding: Not reported in the retrieved PubMed record.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not reported in the retrieved PubMed record.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-20352415
  title: "Effects of modafinil and methylphenidate on visual attention capacity: a TVA-based study."
  authors: Kathrin Finke, Chris M Dodds, Peter Bublak, Ralf Regenthal, Frank Baumann, Tom Manly, Ulrich Müller
  year: 2010
  url: https://pubmed.ncbi.nlm.nih.gov/20352415/
  kind: PubMed publication
  insight: "INTRODUCTION: Theory of visual attention (TVA; Bundesen 1990) whole report tasks allow the independent measurement of visual perceptual processing speed and visual short-term memory (vSTM) storage capacity, unconfounded by motor speed."
  limitation: PubMed abstract retrieved with the PubMed connector on 2026-11-01; full text was not available for this citation.
  pmid: "20352415"
  doi: 10.1007/s00213-010-1823-x
  funding: Not reported in the retrieved PubMed record.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not reported in the retrieved PubMed record.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-22617860
  title: A 9-week, randomized, double-blind, placebo-controlled, parallel-group, dose-finding study to evaluate the efficacy and safety of modafinil as treatment for adults with ADHD.
  authors: Valerie K Arnold, David Feifel, Craig Q Earl, Ronghua Yang, Lenard A Adler
  year: 2014
  url: https://pubmed.ncbi.nlm.nih.gov/22617860/
  kind: PubMed publication
  insight: "OBJECTIVE: This study evaluated the efficacy and tolerability of modafinil at a range of doses, versus placebo, in alleviating symptoms of ADHD in adults."
  limitation: PubMed abstract retrieved with the PubMed connector on 2026-11-01; full text was not available for this citation.
  pmid: "22617860"
  doi: 10.1177/1087054712441969
  funding: Not reported in the retrieved PubMed record.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not reported in the retrieved PubMed record.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-18280848
  title: Modafinil improves symptoms of attention-deficit/hyperactivity disorder across subtypes in children and adolescents.
  authors: Joseph Biederman, Steven R Pliszka
  year: 2008
  url: https://pubmed.ncbi.nlm.nih.gov/18280848/
  kind: PubMed publication
  insight: "OBJECTIVE: This secondary analysis evaluated the efficacy of modafinil in children and adolescents by subtype of attention-deficit/hyperactivity disorder (ADHD) using pooled data from 3 double-blind, placebo-controlled studies."
  limitation: PubMed abstract retrieved with the PubMed connector on 2026-11-01; full text was not available for this citation.
  pmid: "18280848"
  doi: 10.1016/j.jpeds.2007.07.052
  funding: Not reported in the retrieved PubMed record.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not reported in the retrieved PubMed record.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-12269790
  title: Effects of modafinil on heat thermoregulatory responses in humans at rest.
  authors: Jean-Claude Launay, Yves Besnard, Angélique Guinet, Germain Bessard, Christian Raphel, Gustave Savourey
  year: 2002
  url: https://pubmed.ncbi.nlm.nih.gov/12269790/
  kind: PubMed publication
  insight: The effects of modafinil on heat thermoregulatory responses were studied in 10 male subjects submitted to a sweating test after taking 200 mg of modafinil or placebo.
  limitation: PubMed abstract retrieved with the PubMed connector on 2026-11-01; full text was not available for this citation.
  pmid: "12269790"
  doi: 10.1139/y02-092
  funding: Not reported in the retrieved PubMed record.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not reported in the retrieved PubMed record.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-28374089
  title: Modafinil enhances alerting-related brain activity in attention networks.
  authors: Yumiko Ikeda, Takuya Funayama, Amane Tateno, Haruhisa Fukayama, Yoshiro Okubo, Hidenori Suzuki
  year: 2017
  url: https://pubmed.ncbi.nlm.nih.gov/28374089/
  kind: PubMed publication
  insight: "RATIONALE: Modafinil is a wake-promoting agent and has been reported to be effective in improving attention in patients with attentional disturbance."
  limitation: PubMed abstract retrieved with the PubMed connector on 2026-11-01; full text was not available for this citation.
  pmid: "28374089"
  doi: 10.1007/s00213-017-4614-9
  funding: Not reported in the retrieved PubMed record.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not reported in the retrieved PubMed record.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-27649777
  title: Modafinil alters decision making based on feedback history - a randomized placebo-controlled double blind study in humans.
  authors: Christian Bellebaum, Lars Kuchinke, Patrik Roser
  year: 2017
  url: https://pubmed.ncbi.nlm.nih.gov/27649777/
  kind: PubMed publication
  insight: Modafinil is becoming increasingly popular as a cognitive enhancer.
  limitation: PubMed abstract retrieved with the PubMed connector on 2026-11-01; full text was not available for this citation.
  pmid: "27649777"
  doi: 10.1177/0269881116668591
  funding: Not reported in the retrieved PubMed record.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not reported in the retrieved PubMed record.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-23043278
  title: "Cognitive effects of two nutraceuticals Ginseng and Bacopa benchmarked against modafinil: a review and comparison of effect sizes."
  authors: Chris Neale, David Camfield, Jonathon Reay, Con Stough, Andrew Scholey
  year: 2013
  url: https://pubmed.ncbi.nlm.nih.gov/23043278/
  kind: PubMed publication
  insight: Over recent years there has been increasing research into both pharmaceutical and nutraceutical cognition enhancers. Here we aimed to calculate the effect sizes of positive cognitive effect of the pharmaceutical modafinil in order to benchmark the effect of two widely used nutraceuticals Ginseng and Bacopa (which have consistent acute and chronic cognitive effects, respectively).
  limitation: PubMed abstract retrieved with the PubMed connector on 2026-11-01; full text was not available for this citation.
  pmid: "23043278"
  doi: 10.1111/bcp.12002
  funding: Not reported in the retrieved PubMed record.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not reported in the retrieved PubMed record.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-10607162
  title: Modafinil, d-amphetamine and placebo during 64 hours of sustained mental work. II. Effects on two nights of recovery sleep.
  authors: A Buguet, A Montmayeur, R Pigeau, P Naitoh
  year: 1995
  url: https://pubmed.ncbi.nlm.nih.gov/10607162/
  kind: PubMed publication
  insight: Polysomnograms were obtained from 37 volunteers, before (baseline) and after (two consecutive recovery nights) a 64-h sleep deprivation, with (d-amphetamine or modafinil) or without (placebo) alerting substances.
  limitation: PubMed abstract retrieved with the PubMed connector on 2026-11-01; full text was not available for this citation.
  pmid: "10607162"
  doi: 10.1111/j.1365-2869.1995.tb00173.x
  funding: Not reported in the retrieved PubMed record.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not reported in the retrieved PubMed record.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-20416377
  title: "Modafinil and methylphenidate for neuroenhancement in healthy individuals: A systematic review."
  authors: Dimitris Repantis, Peter Schlattmann, Oona Laisney, Isabella Heuser
  year: 2010
  url: https://pubmed.ncbi.nlm.nih.gov/20416377/
  kind: PubMed publication
  insight: The term neuroenhancement refers to improvement in the cognitive, emotional and motivational functions of healthy individuals through, inter alia, the use of drugs.
  limitation: PubMed abstract retrieved with the PubMed connector on 2026-11-01; full text was not available for this citation.
  pmid: "20416377"
  doi: 10.1016/j.phrs.2010.04.002
  funding: Not reported in the retrieved PubMed record.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not reported in the retrieved PubMed record.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-9377538
  title: "Self-monitoring cognitive performance during sleep deprivation: effects of modafinil, d-amphetamine and placebo."
  authors: J V Baranski, R A Pigeau
  year: 1997
  url: https://pubmed.ncbi.nlm.nih.gov/9377538/
  kind: PubMed publication
  insight: Self-monitoring refers to the ability to assess accurately one's own performance in a specific environment.
  limitation: PubMed abstract retrieved with the PubMed connector on 2026-11-01; full text was not available for this citation.
  pmid: "9377538"
  doi: 10.1111/j.1365-2869.1997.00032.x
  funding: Not reported in the retrieved PubMed record.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not reported in the retrieved PubMed record.
  conflictOfInterestStatus: not-assessed
- id: psychonautwiki
  title: "Modafinil: PsychonautWiki dose and duration data"
  authors: PsychonautWiki contributors
  year: 2026
  url: https://psychonautwiki.org/wiki/Modafinil
  kind: Community wiki data · CC BY 4.0
  insight: Source of this page's community dose bands and subjective duration ranges, from the PsychonautWiki API snapshot built about 2026-06-23 and retrieved 2026-11-06. The structured data is used under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/); BHWiki normalized unit symbols and route names.
  limitation: "PsychonautWiki states: \"PW's dosage information is gathered from users and resources for educational purposes only. It is not a recommendation and should be verified with other sources for accuracy.\" Its dose and duration values carry no per-value citations."
```

## Legal

```yaml
- jurisdiction: United States
  activity: Prescription modafinil, C-IV
  status: Label indications are narcolepsy, OSA-associated residual sleepiness and SWD; it is not approved as a general cognitive enhancer.
  sourceUrl: https://dailymed.nlm.nih.gov/drugInfo.cfm?setid=944daf47-49a6-93ca-e348-4a0f1b6d937e
  asOf: 2026-10-11
- jurisdiction: United Kingdom
  activity: Licensed modafinil indications
  status: MHRA safety communication describes licensed use for narcolepsy and pregnancy risk; national classifications differ.
  sourceUrl: https://www.gov.uk/drug-safety-update/modafinil-provigil-increased-risk-of-congenital-malformations-if-used-during-pregnancy
  asOf: 2026-10-11
```

