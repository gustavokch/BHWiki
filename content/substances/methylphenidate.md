---
slug: methylphenidate
name: Methylphenidate
subtitle: A transporter target, a clinical context.
aliases:
  - Ritalin
  - Concerta
  - MPH
formula: C14H19NO2
molecularWeight: 233.31 g/mol
pubchemCid: 4158
smiles: COC(=O)C(C1CCCCN1)C2=CC=CC=C2
category: Stimulant medicine
tags:
  - stimulant
  - dopamine-transporter
  - dopamine
  - attention
accent: "#b4a0c3"
reviewedAt: 2026-09-29
editorialStatus: sourced-draft
halfLife:
  label: Mean about 3.5 hours
  low: 3.5
  high: 3.5
  context: Adult immediate-release tablet estimate reported in the Ritalin LA label; formulation controls delivery separately.
  sourceId: methylphenidate-pk-label
  observationId: methylphenidate-ir-mean
kinetics:
  onset: Not established here
  peak: About 2 hours after the label's 10 mg immediate-release tablet exposure
  duration: Depends on formulation; not assigned from plasma half-life
  bioavailability: Enantiomer-specific and affected by first-pass metabolism; no single value assigned here
  metabolism: Primarily de-esterification to ritalinic acid
  sourceId: methylphenidate-label
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
x-order: 7
---

## Summary

A stimulant medicine with formulation-dependent delivery. ADHD treatment findings and attention-task results should retain their population and exposure context.

## Description

Methylphenidate is used in clinical treatment of ADHD and narcolepsy. It inhibits catecholamine reuptake, including dopamine transporters. The displayed structure is the parent compound; study and labeled products commonly contain its hydrochloride salt.

## Evidence note

PubMed abstracts for all 22 linked PMIDs were retrieved; heuristic Reddit-derived records were replaced with source-specific summaries while curated label, DAT-occupancy, and TBI records were retained. Full text was unavailable for the Reddit-linked PMC records in this pass.

## Doses

```yaml
- label: Adult ADHD cognitive-task experiment
  amount: 30 mg once
  quantity: 30
  quantityMax: null
  unit: mg
  ingredient: Methylphenidate
  formulation: Oral study medication; salt not specified in abstract
  route: Oral
  frequency: Single study exposure
  duration: Acute crossover experiment
  population: 24 adults recruited from an ADHD clinic; 18 met DSM-IV ADHD criteria
  purpose: Assess attention and spatial working memory
  sourceCategory: research
  note: A monitored experimental exposure, not a dosing recommendation or a formulation conversion.
  sourceId: turner2005
- label: Visual-attention crossover
  amount: 40 mg once
  quantity: 40
  quantityMax: null
  unit: mg
  ingredient: Methylphenidate
  formulation: Oral study medication
  route: oral
  frequency: single dose
  duration: acute; task 2.5–3.5 hours post-dose
  population: 18 healthy volunteers aged 20–35 years
  purpose: Visual attention capacity
  sourceCategory: research
  note: Single-dose research exposure; baseline-dependent effects.
  sourceId: reddit-pmid-20352415
- label: Implicit-learning study
  amount: 10 mg once
  quantity: 10
  quantityMax: null
  unit: mg
  ingredient: Methylphenidate
  formulation: Oral study medication
  route: oral
  frequency: single dose
  duration: acute
  population: Healthy adults
  purpose: Implicit learning
  sourceCategory: research
  note: Abstract reports enhanced implicit learning; formulation details should be checked in full text.
  sourceId: reddit-pmid-28946787
- label: Threshold dose
  amount: 1 mg
  quantity: 1
  quantityMax: null
  unit: mg
  ingredient: Methylphenidate
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
  amount: 2–10 mg
  quantity: 2
  quantityMax: 10
  unit: mg
  ingredient: Methylphenidate
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
  amount: 10–30 mg
  quantity: 10
  quantityMax: 30
  unit: mg
  ingredient: Methylphenidate
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
  amount: 30–60 mg
  quantity: 30
  quantityMax: 60
  unit: mg
  ingredient: Methylphenidate
  formulation: Not established
  route: Intranasal (insufflated)
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
  ingredient: Methylphenidate
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
  amount: 5 mg
  quantity: 5
  quantityMax: null
  unit: mg
  ingredient: Methylphenidate
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
  amount: 10–20 mg
  quantity: 10
  quantityMax: 20
  unit: mg
  ingredient: Methylphenidate
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
  amount: 20–40 mg
  quantity: 20
  quantityMax: 40
  unit: mg
  ingredient: Methylphenidate
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
  amount: 40–60 mg
  quantity: 40
  quantityMax: 60
  unit: mg
  ingredient: Methylphenidate
  formulation: Not established
  route: Oral
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
  ingredient: Methylphenidate
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
- id: methylphenidate-ir-mean
  analyte: Methylphenidate
  route: Oral
  formulation: Immediate-release Ritalin tablet
  population: Adults in label pharmacokinetic studies
  endpoint: elimination-half-life
  statistic: study-mean
  value: 3.5
  low: null
  high: null
  unit: hours
  context: Approximate adult mean; distinct from the reported range and from extended-release delivery duration.
  sourceId: methylphenidate-pk-label
  modelEligible: true
- id: methylphenidate-ir-range
  analyte: Methylphenidate
  route: Oral
  formulation: Immediate-release Ritalin tablet
  population: Adults in label pharmacokinetic studies
  endpoint: elimination-half-life
  statistic: reported-range
  value: null
  low: 1.3
  high: 7.7
  unit: hours
  context: Reported adult range, not a confidence interval or a personal prediction.
  sourceId: methylphenidate-pk-label
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
    min: 2
    max: 4
    unit: hours
  phases:
    - name: onset
      basis: elapsed-since-exposure
      min: 5
      max: 20
      unit: minutes
    - name: comeup
      basis: phase-duration
      min: 15
      max: 40
      unit: minutes
    - name: peak
      basis: phase-duration
      min: 30
      max: 45
      unit: minutes
    - name: offset
      basis: phase-duration
      min: 2
      max: 4
      unit: hours
    - name: after-effects
      basis: phase-duration
      min: 1
      max: 4
      unit: hours
- id: psychonautwiki-oral
  measurement: subjective
  route: Oral
  population: Ranges compiled by PsychonautWiki contributors
  sourceId: psychonautwiki
  note: PsychonautWiki community duration ranges for this route.
  total:
    min: 2.5
    max: 4
    unit: hours
  phases:
    - name: onset
      basis: elapsed-since-exposure
      min: 30
      max: 60
      unit: minutes
    - name: comeup
      basis: phase-duration
      min: 20
      max: 45
      unit: minutes
    - name: peak
      basis: phase-duration
      min: 60
      max: 90
      unit: minutes
    - name: offset
      basis: phase-duration
      min: 45
      max: 60
      unit: minutes
    - name: after-effects
      basis: phase-duration
      min: 2
      max: 6
      unit: hours
```

## Modifiers

```yaml
[]
```

## Effects

```yaml
[]
```

## Outcomes

```yaml
- conceptId: attention
  name: Sustained attention
  direction: Increased
  evidence: Human research
  description: Attention-task performance improved in the subgroup meeting ADHD diagnostic criteria. Participants without that diagnosis showed a different response pattern.
  sourceId: turner2005
  population: Adults meeting DSM-IV ADHD criteria within a clinic-recruited study
  exposure: Single 30 mg oral study exposure
  instrument: Sustained-attention task; instrument details not assessed in this draft
  magnitude: null
- conceptId: attention
  name: Selected cognitive outcomes after traumatic brain injury
  direction: Variable
  evidence: Limited research
  description: A 2026 review describes methylphenidate as having the most consistent evidence among reviewed pharmacological approaches for selected attention and processing-speed outcomes after traumatic brain injury, while emphasizing limited TBI-specific evidence and heterogeneous findings.
  sourceId: pmid-42929311
  population: People undergoing neurorehabilitation after traumatic brain injury in the reviewed literature
  exposure: Methylphenidate in symptom-targeted pharmacotherapy studies
  instrument: Attention and processing-speed outcomes
  magnitude: No pooled estimate in the abstract
  reportType: measured-assessment
  conflictingSourceIds: []
- id: methylphenidate-memory-20416377
  conceptId: episodic-memory
  name: Healthy-person neuroenhancement
  direction: Variable
  evidence: Human research
  description: A systematic review found memory improvement for methylphenidate but no consistent enhancement across other cognitive domains in healthy individuals.
  sourceId: reddit-pmid-20416377
  population: Healthy individuals across randomized trials
  exposure: Single or repeated methylphenidate doses
  instrument: Meta-analysis of cognitive outcomes
  magnitude: Memory signal; other domains inconsistent
  reportType: measured-assessment
- id: methylphenidate-renal-26407472
  conceptId: kidney-function
  name: Renal function markers
  direction: Variable
  evidence: Limited research
  description: Experimental methylphenidate exposure did not change urea or creatinine in vivo but reduced urinary flow, glomerular filtration, and tubular sodium transport in isolated perfused kidneys.
  sourceId: reddit-pmid-26407472
  population: Experimental in-vivo and isolated-kidney models
  exposure: Methylphenidate experimental administration
  instrument: Renal perfusion and cell assays
  magnitude: Model-dependent renal changes
  reportType: measured-assessment
- id: methylphenidate-memory-22169884
  conceptId: episodic-memory
  name: Declarative memory consolidation
  direction: Increased
  evidence: Human research
  description: In 19 healthy young men, single 20 or 40 mg methylphenidate improved declarative-memory consolidation and also improved set shifting and stop-signal performance; spatial working memory and planning were null.
  sourceId: reddit-link-472a75d6ba45
  population: 19 healthy young men
  exposure: 10, 20, or 40 mg once
  instrument: Word learning, set shifting, stop-signal, working-memory, and planning tasks
  magnitude: Declarative-memory benefit at 20 and 40 mg
  reportType: measured-assessment
- id: methylphenidate-baseline-attention-20352415
  conceptId: attention
  name: Visual processing speed
  direction: Increased
  evidence: Human research
  description: Single-dose methylphenidate and modafinil improved perceptual processing speed in low-baseline performers; methylphenidate effects followed an inverted-U relation to plasma level.
  sourceId: reddit-pmid-20352415
  population: 18 healthy volunteers aged 20–35
  exposure: 40 mg methylphenidate once
  instrument: Theory of Visual Attention whole-report task
  magnitude: Improvement concentrated in low baseline performers
  reportType: measured-assessment
- id: methylphenidate-poor-baseline-24525641
  conceptId: cognitive-performance
  name: Attention and working memory
  direction: Increased
  evidence: Human research
  description: In 20 adults with ADHD and 19 controls, methylphenidate improved sustained attention and working-memory performance similarly in both groups; benefits were greatest among poor baseline performers.
  sourceId: reddit-pmid-24525641
  population: 20 ADHD adults and 19 controls
  exposure: Within-subject placebo-controlled methylphenidate
  instrument: Sustained attention and working-memory tasks
  magnitude: Baseline-dependent; no decision-making main effect
  reportType: measured-assessment
```

## Mechanisms

```yaml
- title: Dopamine transporter blockade
  description: Human PET detected dose-dependent transporter occupancy after oral administration.
  sourceId: volkow1998
  conceptId: dopamine-transporter
- title: Baseline- and plasma-level-dependent dose response
  description: The visual-attention study found benefits in low performers and decreasing benefit at higher plasma levels in high performers, consistent with an inverted-U response.
  sourceId: reddit-pmid-20352415
- title: Prefrontal alpha2A and dopamine D1 mechanisms in rats
  description: In rats, moderate oral methylphenidate doses improved delayed alternation in an inverted-U pattern; alpha2-adrenoceptor and D1 antagonists blocked the benefit.
  sourceId: reddit-link-3db23a416d39
```

## Cautions

```yaml
- title: Misuse, dependence and withdrawal
  description: Prescribing information carries a boxed warning for abuse, misuse and addiction and describes physical dependence and withdrawal.
  sourceId: methylphenidate-label
- title: Cardiovascular and psychiatric context
  description: The label describes cardiovascular and psychiatric risks and monitoring requirements.
  sourceId: methylphenidate-label
- title: Formulations differ
  description: Immediate-release elimination data do not describe the release profile of every extended-release product.
  sourceId: methylphenidate-pk-label
- title: TBI evidence is symptom-targeted, not disease-modifying
  description: The 2026 neurorehabilitation review reports the most consistent evidence for selected attention and processing-speed outcomes but states that no pharmacological treatment is established as disease-modifying after traumatic brain injury.
  sourceId: pmid-42929311
- title: Renal-safety signal is preclinical
  description: An isolated-kidney model showed reduced urinary flow and glomerular filtration despite no in-vivo urea/creatinine change; clinical nephrotoxicity remains unestablished.
  sourceId: reddit-pmid-26407472
```

## Claims

```yaml
- id: methylphenidate-dat
  assertion: Oral methylphenidate occupied dopamine transporters in a PET study.
  relation: transporter-occupancy
  participants:
    - entityId: substance:methylphenidate
      role: substance
    - entityId: tag:dopamine-transporter
      role: target
    - entityId: tag:dopamine
      role: transmitter
  context: Acute exposure in healthy volunteers
  sourceIds:
    - volkow1998
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Mechanistic imaging does not measure clinical response.
- id: methylphenidate-claim-baseline-20352415
  assertion: Methylphenidate improved visual processing speed mainly in healthy volunteers with low baseline performance, with plasma-level-dependent attenuation in high performers.
  relation: supported-by
  participants:
    - entityId: substance:methylphenidate
      role: intervention
    - entityId: tag:attention
      role: outcome
  context: 40 mg single-dose randomized crossover study.
  sourceIds:
    - reddit-pmid-20352415
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Small acute study; performance-dependent response.
- id: methylphenidate-claim-review-20416377
  assertion: Across randomized studies in healthy individuals, methylphenidate showed a memory signal but no consistent enhancement across other cognitive domains.
  relation: supported-by
  participants:
    - entityId: substance:methylphenidate
      role: intervention
    - entityId: tag:episodic-memory
      role: outcome
  context: Systematic review and meta-analysis.
  sourceIds:
    - reddit-pmid-20416377
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Heterogeneous tasks, doses, and populations.
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
- id: pmid-42929311
  title: Psychopharmacological advances in neurorehabilitation after traumatic brain injury.
  authors: Arcani V, Iruthayanathar C, Rauen K.
  year: 2026
  pmid: "42929311"
  doi: 10.1097/wco.0000000000001528
  url: https://pubmed.ncbi.nlm.nih.gov/42929311/
  kind: Clinical evidence review
  insight: The review identifies methylphenidate as having the most consistent evidence for selected attention and processing-speed outcomes after traumatic brain injury, while recommending individualized symptom-targeted treatment.
  limitation: Review-level, heterogeneous and limited TBI-specific evidence; it does not establish disease modification, universal benefit, or a dosing regimen.
  funding: Full funding and conflict disclosures were not assessed from the abstract-only record.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Full conflict disclosures were not assessed from the abstract-only record.
  conflictOfInterestStatus: not-assessed
- id: methylphenidate-label
  title: "RITALIN immediate-release tablets: prescribing information"
  authors: Novartis Pharmaceuticals
  year: 2026
  url: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=c0bf0835-6a2f-4067-a158-8b86c4b0668a
  kind: Official prescribing label
  insight: Describes immediate-release absorption, metabolism, clinical use and safety.
  limitation: Formulation-specific labeling; date denotes retrieval, not original approval. It does not establish benefit outside the labeled context.
  funding: Manufacturer prescribing information hosted by the US National Library of Medicine.
- id: methylphenidate-pk-label
  title: "RITALIN LA: pharmacokinetic comparison with Ritalin tablets"
  authors: Novartis Pharmaceuticals
  year: 2026
  url: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=effd952d-ac94-47bb-b107-589a4934dcca
  kind: Official prescribing label
  insight: Separately reports adult mean and range for immediate-release methylphenidate elimination.
  limitation: Formulation-specific labeling; date denotes retrieval, not original approval. It does not establish benefit outside the labeled context.
  funding: Manufacturer prescribing information hosted by the US National Library of Medicine.
- id: turner2005
  title: Neurocognitive effects of methylphenidate in adult attention-deficit/hyperactivity disorder
  authors: Turner et al.
  year: 2005
  pmid: "15338103"
  doi: 10.1007/s00213-004-1993-5
  url: https://pubmed.ncbi.nlm.nih.gov/15338103/
  kind: Randomized placebo-controlled crossover study
  insight: Observed changes in sustained attention and spatial working memory in the diagnosed subgroup.
  limitation: Small acute study, with differing diagnostic subgroups; not evidence for universal enhancement.
  funding: Not assessed in this draft.
- id: volkow1998
  title: Dopamine transporter occupancies in the human brain induced by therapeutic doses of oral methylphenidate
  authors: Volkow et al.
  year: 1998
  pmid: "9766762"
  doi: 10.1176/ajp.155.10.1325
  url: https://pubmed.ncbi.nlm.nih.gov/9766762/
  kind: Human PET study
  insight: Directly measured dopamine transporter occupancy after oral methylphenidate.
  limitation: Small selected sample and a mechanistic endpoint.
  funding: Not assessed in this draft.
- id: pubchem
  title: "Methylphenidate: compound identity and structure"
  authors: NCBI PubChem
  year: 2026
  url: https://pubchem.ncbi.nlm.nih.gov/compound/4158
  kind: Chemical database
  insight: Source of the displayed formula, molecular weight, structure and connectivity SMILES.
  limitation: The parent compound identity is distinct from salts, formulations and commercial product quality.
  funding: US National Library of Medicine.
- id: reddit-pmid-32193325
  title: Dopamine promotes cognitive effort by biasing the benefits versus costs of cognitive work.
  authors: A Westbrook, R van den Bosch, J I Määttä, L Hofmans, D Papadopetraki, R Cools, M J Frank
  year: 2020
  url: https://pubmed.ncbi.nlm.nih.gov/32193325/
  kind: PubMed publication
  insight: Stimulants such as methylphenidate are increasingly used for cognitive enhancement but precise mechanisms are unknown.
  limitation: PubMed abstract retrieved with the PubMed connector on 2026-11-01; full text was not available for this citation.
  pmid: "32193325"
  doi: 10.1126/science.aaz5891
  funding: Not reported in the retrieved PubMed record.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not reported in the retrieved PubMed record.
  conflictOfInterestStatus: not-assessed
- id: reddit-link-3db23a416d39
  title: "Methylphenidate improves prefrontal cortical cognitive function through α2 adrenoceptor and dopamine D1 receptor actions: Relevance to therapeutic effects in Attention Deficit Hyperactivity Disorder (2005)"
  authors: Not established
  year: 2005
  url: https://www.ncbi.nlm.nih.gov/pmc/articles/PMC1143775/
  kind: PubMed Central publication link
  insight: The Reddit index links this non-PubMed source; it is retained as a discovery lead.
  limitation: No PubMed abstract was retrieved for this non-PubMed link; full-text methods, funding, and conflicts remain unassessed.
  funding: Not reported in the retrieved PubMed record.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not reported in the retrieved PubMed record.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-28864865
  title: "The effect of single-dose methylphenidate on the rate of error-driven learning in healthy males: a randomized controlled trial."
  authors: Jonathon R Howlett, He Huang, Cédric M Hysek, Martin P Paulus
  year: 2017
  url: https://pubmed.ncbi.nlm.nih.gov/28864865/
  kind: PubMed publication
  insight: "RATIONALE AND OBJECTIVES: Norepinephrine mediates the adjustment of error-driven learning to match the rate of change of the environment, while phasic dopamine signals prediction errors."
  limitation: PubMed abstract retrieved with the PubMed connector on 2026-11-01; full text was not available for this citation.
  pmid: "28864865"
  doi: 10.1007/s00213-017-4723-5
  funding: Not reported in the retrieved PubMed record.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not reported in the retrieved PubMed record.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-28946787
  title: Methylphenidate enhances implicit learning in healthy adults.
  authors: Corinna Klinge, Claire Shuttleworth, Pierandrea Muglia, Anna C Nobre, Catherine J Harmer, Susannah E Murphy
  year: 2018
  url: https://pubmed.ncbi.nlm.nih.gov/28946787/
  kind: PubMed publication
  insight: "BACKGROUND AND PURPOSE: One limiting factor in the development of pharmacological interventions to enhance cognition is the absence of biomarkers that can be used in healthy volunteers to screen novel compounds."
  limitation: PubMed abstract retrieved with the PubMed connector on 2026-11-01; full text was not available for this citation.
  pmid: "28946787"
  doi: 10.1177/0269881117731472
  funding: Not reported in the retrieved PubMed record.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not reported in the retrieved PubMed record.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-24756766
  title: Methylphenidate blocks effort-induced depletion of regulatory control in healthy volunteers.
  authors: Chandra Sripada, Daniel Kessler, John Jonides
  year: 2014
  url: https://pubmed.ncbi.nlm.nih.gov/24756766/
  kind: PubMed publication
  insight: A recent wave of studies--more than 100 conducted over the last decade--has shown that exerting effort at controlling impulses or behavioral tendencies leaves a person depleted and less able to engage in subsequent rounds of regulation.
  limitation: PubMed abstract retrieved with the PubMed connector on 2026-11-01; full text was not available for this citation.
  pmid: "24756766"
  doi: 10.1177/0956797614526415
  funding: Not reported in the retrieved PubMed record.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not reported in the retrieved PubMed record.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-26349753
  title: Methylphenidate alters selective attention by amplifying salience.
  authors: Niels ter Huurne, Sean James Fallon, Martine van Schouwenburg, Marieke van der Schaaf, Jan Buitelaar, Ole Jensen, Roshan Cools
  year: 2015
  url: https://pubmed.ncbi.nlm.nih.gov/26349753/
  kind: PubMed publication
  insight: 'RATIONALE: Methylphenidate, the most common treatment of attention deficit hyperactivity disorder (ADHD), is increasingly used by healthy individuals as a "smart drug" to enhance cognitive abilities like attention.'
  limitation: PubMed abstract retrieved with the PubMed connector on 2026-11-01; full text was not available for this citation.
  pmid: "26349753"
  doi: 10.1007/s00213-015-4059-y
  funding: Not reported in the retrieved PubMed record.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not reported in the retrieved PubMed record.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-26309606
  title: "Effect of methylphenidate on mismatched visual information processing in young healthy volunteers: an event-related potential study."
  authors: Chunyu Han, Yuping Wang, Mian Shi, Wei Mao, Wei Sun
  year: 2015
  url: https://pubmed.ncbi.nlm.nih.gov/26309606/
  kind: PubMed publication
  insight: This study was to investigate whether a single dose of methylphenidate (MPH), a dopamine and noradrenaline enhancing drug for the treatment of attentional deficits, influences mismatch visual information processing in young healthy volunteers determined with N270.
  limitation: PubMed abstract retrieved with the PubMed connector on 2026-11-01; full text was not available for this citation.
  pmid: "26309606"
  funding: Not reported in the retrieved PubMed record.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not reported in the retrieved PubMed record.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-24119823
  title: Cognitive effects of methylphenidate and levodopa in healthy volunteers.
  authors: A M W Linssen, A Sambeth, E F P M Vuurman, W J Riedel
  year: 2014
  url: https://pubmed.ncbi.nlm.nih.gov/24119823/
  kind: PubMed publication
  insight: Our previous study showed enhanced declarative memory consolidation after acute methylphenidate (MPH) administration.
  limitation: PubMed abstract retrieved with the PubMed connector on 2026-11-01; full text was not available for this citation.
  pmid: "24119823"
  doi: 10.1016/j.euroneuro.2013.09.009
  funding: Not reported in the retrieved PubMed record.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not reported in the retrieved PubMed record.
  conflictOfInterestStatus: not-assessed
- id: reddit-link-97644076f03c
  title: Single Dose Methylphenidate Does Not Impact on Attention and Decision Making in Healthy Medical Students (2012)
  authors: Not established
  year: 2012
  url: https://www.neurores.org/index.php/neurores/article/viewArticle/143/168
  kind: Reddit index publication link
  insight: The Reddit index links this non-PubMed source; it is retained as a discovery lead.
  limitation: No PubMed abstract was retrieved for this non-PubMed link; full-text methods, funding, and conflicts remain unassessed.
  funding: Not reported in the retrieved PubMed record.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not reported in the retrieved PubMed record.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-9386961
  title: Alerting effects of methylphenidate under basal and sleep-deprived conditions.
  authors: C Bishop, T Roehrs, L Rosenthal, T Roth
  year: 1997
  url: https://pubmed.ncbi.nlm.nih.gov/9386961/
  kind: PubMed publication
  insight: Six men and 3 women on each of 4 days received 10 mg of methylphenidate or placebo (2 times a day) at 0800 and 1200 after 8 hr or 0 hr of sleep.
  limitation: PubMed abstract retrieved with the PubMed connector on 2026-11-01; full text was not available for this citation.
  pmid: "9386961"
  doi: 10.1037//1064-1297.5.4.344
  funding: Not reported in the retrieved PubMed record.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not reported in the retrieved PubMed record.
  conflictOfInterestStatus: not-assessed
- id: reddit-link-9024e2b100b8
  title: Methylphenidate does not improve Cognitive function in healthy sleep-deprived young adults (2004)
  authors: Not established
  year: 2004
  url: https://cat.inist.fr/?aModele=afficheN&cpsidt=15895580
  kind: Reddit index publication link
  insight: The Reddit index links this non-PubMed source; it is retained as a discovery lead.
  limitation: No PubMed abstract was retrieved for this non-PubMed link; full-text methods, funding, and conflicts remain unassessed.
  funding: Not reported in the retrieved PubMed record.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not reported in the retrieved PubMed record.
  conflictOfInterestStatus: not-assessed
- id: reddit-link-472a75d6ba45
  title: Methylphenidate produces selective enhancement of declarative memory consolidation in healthy volunteers.
  authors: Linssen AMW, Vuurman EFPM, Sambeth A, Riedel WJ
  year: 2012
  url: https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3360847/
  kind: PubMed Central full text
  insight: Randomized crossover study of 19 healthy men; 20 and 40 mg improved declarative-memory consolidation and selected executive tasks.
  limitation: Full text and PubMed abstract retrieved; single-dose healthy-volunteer study.
  pmid: "22169884"
  pmcid: PMC3360847
  doi: 10.1007/s00213-011-2468-8
- id: reddit-link-9442205bb80e
  title: Effects of methylphenidate on spatial working memory and planning in healthy young adults
  authors: Not established
  year: 2026
  url: https://faculty-web.at.northwestern.edu/speech/booth/james/neuropsychology/RitalinBehavior/ElliotSahakian.1997.pdf
  kind: Reddit index publication link
  insight: The Reddit index links this non-PubMed source; it is retained as a discovery lead.
  limitation: No PubMed abstract was retrieved for this non-PubMed link; full-text methods, funding, and conflicts remain unassessed.
  funding: Not reported in the retrieved PubMed record.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not reported in the retrieved PubMed record.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-3927371
  title: The effect of methylphenidate on information processing.
  authors: H Naylor, R Halliday, E Callaway
  year: 1985
  url: https://pubmed.ncbi.nlm.nih.gov/3927371/
  kind: PubMed publication
  insight: Models of information processing currently popular in cognitive psychology divide the reaction process into a series of discrete separable stages.
  limitation: PubMed abstract retrieved with the PubMed connector on 2026-11-01; full text was not available for this citation.
  pmid: "3927371"
  doi: 10.1007/BF00431690
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
- id: reddit-pmid-20424828
  title: Non-specific effects of methylphenidate (Ritalin) on cognitive ability and decision-making of ADHD and healthy adults.
  authors: Nirit Agay, Eldad Yechiam, Ziv Carmel, Yechiel Levkovitz
  year: 2010
  url: https://pubmed.ncbi.nlm.nih.gov/20424828/
  kind: PubMed publication
  insight: "INTRODUCTION: The effect of a single dose of methylphenidate (MPH) on cognitive measures and decision-making processes was assessed in a sample of adults with ADHD and in a control sample."
  limitation: PubMed abstract retrieved with the PubMed connector on 2026-11-01; full text was not available for this citation.
  pmid: "20424828"
  doi: 10.1007/s00213-010-1853-4
  funding: Not reported in the retrieved PubMed record.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not reported in the retrieved PubMed record.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-24525641
  title: Methylphenidate enhances cognitive performance in adults with poor baseline capacities regardless of attention-deficit/hyperactivity disorder diagnosis.
  authors: Nirit Agay, Eldad Yechiam, Ziv Carmel, Yechiel Levkovitz
  year: 2014
  url: https://pubmed.ncbi.nlm.nih.gov/24525641/
  kind: PubMed publication
  insight: We compare the view that the effect of methylphenidate (MPH) is selective to individuals with attention-deficit/hyperactivity disorder (ADHD) with an alternative approach suggesting that its effect is more prominent for individuals with weak baseline capacities in relevant cognitive tasks.
  limitation: PubMed abstract retrieved with the PubMed connector on 2026-11-01; full text was not available for this citation.
  pmid: "24525641"
  doi: 10.1097/JCP.0000000000000076
  funding: Not reported in the retrieved PubMed record.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not reported in the retrieved PubMed record.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-7862911
  title: Cognitive effects of milacemide and methylphenidate in healthy young adults.
  authors: J A Camp-Bruno, R L Herting
  year: 1994
  url: https://pubmed.ncbi.nlm.nih.gov/7862911/
  kind: PubMed publication
  insight: Cognitive effects of the novel glycine prodrug milacemide (400 mg), the catecholaminergic agonist methylphenidate (20 mg), and placebo were evaluated in 48 healthy young adults.
  limitation: PubMed abstract retrieved with the PubMed connector on 2026-11-01; full text was not available for this citation.
  pmid: "7862911"
  doi: 10.1007/BF02244750
  funding: Not reported in the retrieved PubMed record.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not reported in the retrieved PubMed record.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-26407472
  title: "Study of the safety of methylphenidate: Focus on nephrotoxicity aspects."
  authors: Luiza Herbene Macedo Soares Salviano, Maria Isabel Linhares, Klistenes Alves de Lima, Alana Gomes de Souza, Dânya Bandeira Lima, Antônio Rafael Coelho Jorge, Marcus Felipe Bezerra da Costa, Adriano José Maia Chaves Filho, Alice Maria Costa Martins, Helena Serra Azul Monteiro, Teresa Maria de Jesus Ponte Carvalho, Marta Maria de França Fonteles
  year: 2015
  url: https://pubmed.ncbi.nlm.nih.gov/26407472/
  kind: PubMed publication
  insight: "AIMS: Methylphenidate (MPD) is increasingly prescribed for the treatment of Attention Deficit Hyperactivity Disorder and there are concerns about its appropriate use."
  limitation: PubMed abstract retrieved with the PubMed connector on 2026-11-01; full text was not available for this citation.
  pmid: "26407472"
  doi: 10.1016/j.lfs.2015.09.014
  funding: Not reported in the retrieved PubMed record.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not reported in the retrieved PubMed record.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-19587858
  title: Neuropharmacological mechanisms underlying the neuroprotective effects of methylphenidate.
  authors: T J Volz
  year: 2008
  url: https://pubmed.ncbi.nlm.nih.gov/19587858/
  kind: PubMed publication
  insight: Methylphenidate is a psychostimulant that inhibits the neuronal dopamine transporter.
  limitation: PubMed abstract retrieved with the PubMed connector on 2026-11-01; full text was not available for this citation.
  pmid: "19587858"
  doi: 10.2174/157015908787386041
  funding: Not reported in the retrieved PubMed record.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not reported in the retrieved PubMed record.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-16736241
  title: Methylphenidate exerts no neurotoxic, but neuroprotective effects in vitro.
  authors: A G Ludolph, U Schaz, A Storch, S Liebau, J M Fegert, T M Boeckers
  year: 2006
  url: https://pubmed.ncbi.nlm.nih.gov/16736241/
  kind: PubMed publication
  insight: Methylphenidate (MPH) is the most common used drug in child and adolescent psychiatry.
  limitation: PubMed abstract retrieved with the PubMed connector on 2026-11-01; full text was not available for this citation.
  pmid: "16736241"
  doi: 10.1007/s00702-006-0487-5
  funding: Not reported in the retrieved PubMed record.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not reported in the retrieved PubMed record.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-25408898
  title: Methylphenidate enhances neural stem cell differentiation.
  authors: Jasmin Bartl, Takatoshi Mori, Peter Riederer, Hiroki Ozawa, Edna Grünblatt
  year: 2013
  url: https://pubmed.ncbi.nlm.nih.gov/25408898/
  kind: PubMed publication
  insight: "BACKGROUND: The psychostimulant methylphenidate (MPH) is the first choice of drug treatment in Attention-Deficit/Hyperactivity Disorder (ADHD)."
  limitation: PubMed abstract retrieved with the PubMed connector on 2026-11-01; full text was not available for this citation.
  pmid: "25408898"
  doi: 10.1186/2049-9256-1-5
  funding: Not reported in the retrieved PubMed record.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not reported in the retrieved PubMed record.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-22470460
  title: Methylphenidate exposure induces dopamine neuron loss and activation of microglia in the basal ganglia of mice.
  authors: Shankar Sadasivan, Brooks B Pond, Amar K Pani, Chunxu Qu, Yun Jiao, Richard J Smeyne
  year: 2012
  url: https://pubmed.ncbi.nlm.nih.gov/22470460/
  kind: PubMed publication
  insight: "BACKGROUND: Methylphenidate (MPH) is a psychostimulant that exerts its pharmacological effects via preferential blockade of the dopamine transporter (DAT) and the norepinephrine transporter (NET), resulting in increased monoamine levels in the synapse."
  limitation: PubMed abstract retrieved with the PubMed connector on 2026-11-01; full text was not available for this citation.
  pmid: "22470460"
  doi: 10.1371/journal.pone.0033693
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
- id: reddit-link-add8e8ebf176
  title: Use of Methylphenidate in Traumatic Brain Injury
  authors: Not established
  year: 2026
  url: https://www.theannals.com/content/39/7/1309.short
  kind: Reddit index publication link
  insight: The Reddit index links this non-PubMed source; it is retained as a discovery lead.
  limitation: No PubMed abstract was retrieved for this non-PubMed link; full-text methods, funding, and conflicts remain unassessed.
  funding: Not reported in the retrieved PubMed record.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not reported in the retrieved PubMed record.
  conflictOfInterestStatus: not-assessed
- id: psychonautwiki
  title: "Methylphenidate: PsychonautWiki dose and duration data"
  authors: PsychonautWiki contributors
  year: 2026
  url: https://psychonautwiki.org/wiki/Methylphenidate
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
  url: https://en.wikipedia.org/wiki/Methylphenidate
  title: Wikipedia
```

