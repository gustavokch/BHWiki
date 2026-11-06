---
slug: memantine-019fe218
name: Memantine
subtitle: Reddit index evidence trail.
aliases: []
formula: Not established
molecularWeight: Not established
pubchemCid: null
smiles: Not established
category: Identity record
tags: []
accent: "#a9b993"
reviewedAt: 2026-10-27
editorialStatus: sourced-draft
halfLife:
  label: Not established
  low: null
  high: null
  context: No pharmacokinetic observation was supplied by this identity import.
  sourceId: optihealth-substance-019fe218-440d-7c5d-8a4d-f4ed477f1098
  observationId: memantine-pk-unestablished
kinetics:
  onset: Not established
  peak: Not established
  duration: Not established
  bioavailability: Not established
  metabolism: Not established
  sourceId: optihealth-substance-019fe218-440d-7c5d-8a4d-f4ed477f1098
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
  - externalWikiLinks
x-order: 1119
---

## Summary

Memantine is recorded as a canonical identity from a source-backed OptiHealth candidate. This draft does not assert effects, dosing, safety, or efficacy.

## Description

This page records the source-backed identity label Memantine. The import preserves the candidate's aliases and source trail only; molecular structure, pharmacokinetics, effects, dosing, safety, and efficacy remain unestablished here.

## Evidence note

PubMed abstracts for the 10 linked PMIDs were retrieved. Full text was not linked for these citations; records retain human, animal, and in-vitro populations separately and avoid treating the uncontrolled bipolar study as a randomized efficacy result.

## Doses

```yaml
- label: Single-dose temporal processing study
  amount: 30 mg once
  quantity: 30
  quantityMax: null
  unit: mg
  ingredient: Memantine
  formulation: Oral memantine
  route: oral
  frequency: single dose
  duration: acute crossover
  population: 32 healthy male volunteers
  purpose: Timing and sensorimotor performance experiment
  sourceCategory: research
  note: Research exposure, not a neuroenhancement recommendation.
  sourceId: reddit-pmid-16423331
- label: Single-dose eyeblink conditioning study
  amount: 30 mg once
  quantity: 30
  quantityMax: null
  unit: mg
  ingredient: Memantine
  formulation: Oral memantine
  route: oral
  frequency: single dose
  duration: acute placebo-controlled study
  population: 16 healthy male volunteers
  purpose: Classical eyeblink conditioning
  sourceCategory: research
  note: Memory-system-specific effect; verbal and visuospatial memory were otherwise null.
  sourceId: reddit-pmid-9132691
- label: Memantine-methamphetamine interaction study
  amount: 40 mg memantine with 0–20 mg methamphetamine
  quantity: 40
  quantityMax: 40
  unit: mg memantine
  ingredient: Memantine
  formulation: Oral pretreatment
  route: oral
  frequency: single pretreatment
  duration: acute discrimination study
  population: Trained human participants
  purpose: Methamphetamine discrimination and subjective effects
  sourceCategory: research
  note: Memantine alone produced stimulant-like subjective effects in this laboratory design.
  sourceId: reddit-pmid-12457267
- label: Adjunctive bipolar trial
  amount: 10–30 mg/day
  quantity: 10
  quantityMax: 30
  unit: mg/day
  ingredient: Memantine
  formulation: Adjunct to existing treatment
  route: oral
  frequency: daily
  duration: 12 months
  population: 40 treatment-resistant bipolar disorder patients
  purpose: Naturalistic mood-stabilization follow-up
  sourceCategory: research
  note: Open, uncontrolled study; cannot establish efficacy.
  sourceId: reddit-pmid-22030128
- label: Threshold dose
  amount: 10 mg
  quantity: 10
  quantityMax: null
  unit: mg
  ingredient: Memantine
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
  amount: 30–70 mg
  quantity: 30
  quantityMax: 70
  unit: mg
  ingredient: Memantine
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
  amount: 70–110 mg
  quantity: 70
  quantityMax: 110
  unit: mg
  ingredient: Memantine
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
  amount: 110–170 mg
  quantity: 110
  quantityMax: 170
  unit: mg
  ingredient: Memantine
  formulation: Not established
  route: Oral
  frequency: Not established
  duration: Not established
  population: Not established
  purpose: PsychonautWiki dosage classification
  sourceCategory: community
  note: Band from the PsychonautWiki API snapshot built about 2026-06-23.
  sourceId: psychonautwiki
- label: Heavy dose band (170 mg and above)
  amount: 170 mg and above
  quantity: 170
  quantityMax: null
  unit: mg
  ingredient: Memantine
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
- id: memantine-pk-unestablished
  analyte: Memantine
  route: oral
  formulation: Immediate-release oral doses in linked studies
  population: Human laboratory studies
  endpoint: elimination-half-life
  statistic: not-established
  value: null
  low: null
  high: null
  unit: hours
  context: The linked abstracts report acute dosing but do not provide a validated human half-life estimate for these exposures.
  sourceId: reddit-pmid-16423331
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
    min: 18
    max: 36
    unit: hours
  phases:
    - name: onset
      basis: elapsed-since-exposure
      min: 30
      max: 180
      unit: minutes
    - name: comeup
      basis: phase-duration
      min: 2
      max: 3
      unit: hours
    - name: peak
      basis: phase-duration
      min: 3
      max: 12
      unit: hours
    - name: offset
      basis: phase-duration
      min: 5
      max: 24
      unit: hours
    - name: after-effects
      basis: phase-duration
      min: 8
      max: 24
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
- id: memantine-eyeblink-9132691
  conceptId: episodic-memory
  name: Eyeblink conditioning
  direction: Decreased
  evidence: Human research
  description: Thirty milligrams of memantine delayed acquisition and reduced conditioned responses in 16 healthy men; mood, attention, and verbal/visuospatial memory were not significantly changed.
  sourceId: reddit-pmid-9132691
  population: 16 healthy male volunteers
  exposure: 30 mg single oral dose
  instrument: Classical eyeblink conditioning
  magnitude: Delayed acquisition; lower conditioned-response frequency
  reportType: measured-assessment
- id: memantine-bipolar-22030128
  conceptId: mood
  name: Bipolar symptoms
  direction: Increased
  evidence: Limited research
  description: In a 12-month open naturalistic adjunctive study, 72.5% of 40 treatment-resistant bipolar patients were rated much or very much improved at 6 and 12 months.
  sourceId: reddit-pmid-22030128
  population: 40 treatment-resistant bipolar patients
  exposure: 10–30 mg/day adjunctive memantine
  instrument: CGI-BP Overall Bipolar Illness Scale
  magnitude: 72.5% rated much/very much improved; uncontrolled
  reportType: measured-assessment
- id: memantine-methamphetamine-12457267
  conceptId: cognitive-performance
  name: Drug discrimination
  direction: Variable
  evidence: Human research
  description: Forty milligrams of memantine changed methamphetamine discrimination to a novel-compound response and produced some stimulant-like subjective effects.
  sourceId: reddit-pmid-12457267
  population: Human laboratory participants trained to discriminate 10 mg methamphetamine
  exposure: 0 or 40 mg memantine with 0–20 mg methamphetamine
  instrument: Drug-discrimination and subjective-effect ratings
  magnitude: Novel discriminative stimulus; most subjective ratings unchanged
  reportType: measured-assessment
- id: memantine-temporal-16423331
  conceptId: cognitive-performance
  name: Temporal processing
  direction: Decreased
  evidence: Human research
  description: A 30 mg dose impaired processing of intervals in the seconds range but did not affect millisecond timing; motor response execution was faster.
  sourceId: reddit-pmid-16423331
  population: 32 healthy men
  exposure: 30 mg single oral dose
  instrument: Temporal processing and motor-response tasks
  magnitude: Marked impairment for seconds-range intervals
  reportType: measured-assessment
- id: memantine-mmn-17452287
  conceptId: attention
  name: Involuntary auditory attention
  direction: Variable
  evidence: Human research
  description: A single 30 mg dose lowered subjective arousal and increased EEG mismatch-negativity amplitude without changing MEG mismatch-negativity latency or source measures.
  sourceId: reddit-pmid-17452287
  population: 13 healthy subjects
  exposure: 30 mg single oral dose
  instrument: EEG/MEG mismatch negativity
  magnitude: EEG amplitude increased; other components null
  reportType: measured-assessment
```

## Mechanisms

```yaml
- title: NMDA receptor antagonism
  description: Human experiments used memantine as a noncompetitive NMDA antagonist and observed memory-system- and timing-specific effects.
  sourceId: reddit-pmid-16423331
- title: Hippocampal theta modulation in mice
  description: A low memantine dose potentiated elicited hippocampal theta oscillations in anesthetized mice, whereas a high dose was disruptive.
  sourceId: reddit-pmid-22300835
- title: BDNF and corticosterone changes in stressed rats
  description: In a chronic mild-stress rat model, 20 mg/kg memantine reversed anhedonia, normalized corticosterone, and increased prefrontal BDNF.
  sourceId: reddit-pmid-22327556
```

## Cautions

```yaml
- title: Acute cognitive and arousal effects
  description: Single-dose human studies reported impaired seconds-range timing, delayed eyeblink conditioning, lowered arousal, and stimulant-like subjective effects in combination studies.
  sourceId: reddit-pmid-16423331
- title: Evidence quality for bipolar use
  description: The 12-month bipolar study was open and naturalistic; apparent improvement is not a controlled efficacy estimate.
  sourceId: reddit-pmid-22030128
```

## Claims

```yaml
- id: memantine-claim-timing-16423331
  assertion: A single 30 mg memantine dose impaired seconds-range temporal processing while sparing millisecond timing in healthy men.
  relation: supported-by
  participants:
    - entityId: substance:memantine-019fe218
      role: intervention
    - entityId: tag:cognitive-performance
      role: outcome
  context: Double-blind crossover study of 32 healthy men.
  sourceIds:
    - reddit-pmid-16423331
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Acute laboratory outcome; not a general cognitive effect.
- id: memantine-claim-bipolar-22030128
  assertion: Adjunctive memantine was associated with improvement ratings in an uncontrolled 12-month bipolar study.
  relation: associated-with
  participants:
    - entityId: substance:memantine-019fe218
      role: intervention
    - entityId: tag:mood
      role: outcome
  context: 40 treatment-resistant bipolar patients received 10–30 mg/day in naturalistic follow-up.
  sourceIds:
    - reddit-pmid-22030128
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: No randomized placebo control; concomitant treatment was unchanged.
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
- id: optihealth-substance-019fe218-440d-7c5d-8a4d-f4ed477f1098
  title: OptiHealth canonical substance identity snapshot
  authors: OptiHealth catalog
  year: 2026
  url: https://optihealth.devpins.org/substance-identity/019fe218-440d-7c5d-8a4d-f4ed477f1098
  kind: catalog-identity
  insight: The OptiHealth canonical catalog records this substance identity label.
  limitation: This catalog snapshot is not an independent evidence review and does not establish structure, dose, safety, or efficacy.
- id: reddit-pmid-20193764
  title: "Acetylcholinesterase inhibitors and memantine for neuroenhancement in healthy individuals: a systematic review."
  authors: Dimitris Repantis, Oona Laisney, Isabella Heuser
  year: 2010
  url: https://pubmed.ncbi.nlm.nih.gov/20193764/
  kind: PubMed publication
  insight: The term neuroenhancement refers to improvement in the cognitive, emotional and motivational functions of healthy individuals through, inter alia, the use of drugs.
  limitation: PubMed abstract retrieved with the PubMed connector on 2026-11-01; full text was not available for this citation.
  pmid: "20193764"
  doi: 10.1016/j.phrs.2010.02.009
  funding: Not reported in the retrieved PubMed record.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not reported in the retrieved PubMed record.
  conflictOfInterestStatus: not-assessed
- id: reddit-link-fec6f183cea9
  title: Effects of Pharmacologically Induced Changes in NMDA-Receptor Activity on Long-Term Memory in Humans
  authors: Not established
  year: 2026
  url: https://learnmem.cshlp.org/content/8/1/20.full
  kind: Reddit index publication link
  insight: The Reddit index links this non-PubMed source; it is retained as a discovery lead.
  limitation: Publication link retained as a lead; no PubMed abstract was returned for this URL.
  funding: Not reported in the retrieved PubMed record.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not reported in the retrieved PubMed record.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-16423331
  title: Effects of pharmacologically induced changes in NMDA receptor activity on human timing and sensorimotor performance.
  authors: Thomas H Rammsayer
  year: 2006
  url: https://pubmed.ncbi.nlm.nih.gov/16423331/
  kind: PubMed publication
  insight: Unlike processing of time intervals in the range of seconds or more, processing of brief durations in the subsecond range appears to be beyond cognitive control and based on subcortical mechanisms located in the basal ganglia.
  limitation: PubMed abstract retrieved with the PubMed connector on 2026-11-01; full text was not available for this citation.
  pmid: "16423331"
  doi: 10.1016/j.brainres.2005.12.019
  funding: Not reported in the retrieved PubMed record.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not reported in the retrieved PubMed record.
  conflictOfInterestStatus: not-assessed
- id: reddit-link-b7a9e945ea33
  title: NMDA receptor activity and the transmission of sensory input into motor output in introverts and extraverts
  authors: Not established
  year: 2026
  url: https://www.tandfonline.com/doi/abs/10.1080/02724990244000098#.UgaxIH_emp0
  kind: Reddit index publication link
  insight: The Reddit index links this non-PubMed source; it is retained as a discovery lead.
  limitation: Publication link retained as a lead; no PubMed abstract was returned for this URL.
  funding: Not reported in the retrieved PubMed record.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not reported in the retrieved PubMed record.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-17452287
  title: Effects of NMDA receptor antagonist memantine on mismatch negativity.
  authors: Milena Korostenskaja, Vadim V Nikulin, Dubravko Kicić, Anna V Nikulina, Seppo Kähkönen
  year: 2007
  url: https://pubmed.ncbi.nlm.nih.gov/17452287/
  kind: PubMed publication
  insight: Mismatch negativity (MMN) and its magnetic counterpart (MMNm) have been shown to be altered in patients with various psychiatric and neurological disorders, e.g.
  limitation: PubMed abstract retrieved with the PubMed connector on 2026-11-01; full text was not available for this citation.
  pmid: "17452287"
  doi: 10.1016/j.brainresbull.2007.01.007
  funding: Not reported in the retrieved PubMed record.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not reported in the retrieved PubMed record.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-9132691
  title: The NMDA antagonist memantine impairs classical eyeblink conditioning in humans.
  authors: M M Schugens, R Egerter, I Daum, K Schepelmann, T Klockgether, P A Löschmann
  year: 1997
  url: https://pubmed.ncbi.nlm.nih.gov/9132691/
  kind: PubMed publication
  insight: The present study investigated the effects of a single oral dose (30 mg) of the non-competitive N-methyl-D-aspartate (NMDA) receptor antagonist memantine on memory and learning in human subjects.
  limitation: PubMed abstract retrieved with the PubMed connector on 2026-11-01; full text was not available for this citation.
  pmid: "9132691"
  doi: 10.1016/s0304-3940(97)13452-8
  funding: Not reported in the retrieved PubMed record.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not reported in the retrieved PubMed record.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-22030128
  title: "The sustained mood-stabilizing effect of memantine in the management of treatment resistant bipolar disorders: findings from a 12-month naturalistic trial."
  authors: Athanasios Koukopoulos, Giulia Serra, Alexia E Koukopoulos, Daniela Reginaldi, Gino Serra
  year: 2012
  url: https://pubmed.ncbi.nlm.nih.gov/22030128/
  kind: PubMed publication
  insight: "BACKGROUND: We have recently provided preliminary clinical observations indicating that memantine, as augmenting agent, was associated with a meaningful antimanic and mood-stabilizing effect in treatment-resistant bipolar disorders."
  limitation: PubMed abstract retrieved with the PubMed connector on 2026-11-01; full text was not available for this citation.
  pmid: "22030128"
  doi: 10.1016/j.jad.2011.09.040
  funding: Not reported in the retrieved PubMed record.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not reported in the retrieved PubMed record.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-10763858
  title: Clinically available NMDA receptor antagonists memantine and dextromethorphan reverse existing tolerance to the antinociceptive effects of morphine in mice.
  authors: P Popik, E Kozela, W Danysz
  year: 2000
  url: https://pubmed.ncbi.nlm.nih.gov/10763858/
  kind: PubMed publication
  insight: The tail-flick test was used to investigate the effects of chronic administration of the N-methyl-D-aspartate (NMDA) receptor antagonists, dextromethorphan, memantine and MRZ 2/579, on the development and reversal of morphine tolerance in mice in three separate experiments.
  limitation: PubMed abstract retrieved with the PubMed connector on 2026-11-01; full text was not available for this citation.
  pmid: "10763858"
  doi: 10.1007/s002109900205
  funding: Not reported in the retrieved PubMed record.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not reported in the retrieved PubMed record.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-16914955
  title: Attenuation of cocaine-induced reinstatement of cocaine conditioned place preference by acamprosate.
  authors: Andrew J Mcgeehan, Michael Foster Olive
  year: 2006
  url: https://pubmed.ncbi.nlm.nih.gov/16914955/
  kind: PubMed publication
  insight: Acamprosate (calcium acetylhomotaurinate) is a glutamatergic neuromodulator efficacious at reducing relapse in alcoholic patients.
  limitation: PubMed abstract retrieved with the PubMed connector on 2026-11-01; full text was not available for this citation.
  pmid: "16914955"
  doi: 10.1097/01.fbp.0000224384.01863.5f
  funding: Not reported in the retrieved PubMed record.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not reported in the retrieved PubMed record.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-12457267
  title: Effects of the NMDA antagonist memantine on human methamphetamine discrimination.
  authors: Carl L Hart, Margaret Haney, Richard W Foltin, Marian W Fischman
  year: 2002
  url: https://pubmed.ncbi.nlm.nih.gov/12457267/
  kind: PubMed publication
  insight: "RATIONALE: The discriminative stimulus effects of N-methyl- D-aspartate (NMDA) antagonists have been assessed in laboratory animals."
  limitation: PubMed abstract retrieved with the PubMed connector on 2026-11-01; full text was not available for this citation.
  pmid: "12457267"
  doi: 10.1007/s00213-002-1225-9
  funding: Not reported in the retrieved PubMed record.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not reported in the retrieved PubMed record.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-22300835
  title: "Memantine potentiates hippocampal θ oscillations at a therapeutic dose in anesthetized mice: a mechanistic link to its cognitive-enhancing properties."
  authors: Simone Guadagna, Christoffer Bundgaard, Nanna Hovelsø, Christiane Volbracht, Paul T Francis, Jan Egebjerg, Florence Sotty
  year: 2012
  url: https://pubmed.ncbi.nlm.nih.gov/22300835/
  kind: PubMed publication
  insight: Memantine is an uncompetitive, low-affinity NMDA receptor antagonist clinically used for the treatment of cognitive deficits in moderate to severe Alzheimer's disease.
  limitation: PubMed abstract retrieved with the PubMed connector on 2026-11-01; full text was not available for this citation.
  pmid: "22300835"
  doi: 10.1016/j.neuropharm.2012.01.014
  funding: Not reported in the retrieved PubMed record.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not reported in the retrieved PubMed record.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-22327556
  title: Memantine treatment reverses anhedonia, normalizes corticosterone levels and increases BDNF levels in the prefrontal cortex induced by chronic mild stress in rats.
  authors: Gislaine Z Réus, Helena M Abelaira, Roberto B Stringari, Gabriel R Fries, Flávio Kapczinski, João Quevedo
  year: 2012
  url: https://pubmed.ncbi.nlm.nih.gov/22327556/
  kind: PubMed publication
  insight: Memantine is a N-methyl-D-aspartate (NMDA) receptor antagonist and several studies have pointed to the NMDA receptor antagonists as a potential therapeutic target for the treatment of depression.
  limitation: PubMed abstract retrieved with the PubMed connector on 2026-11-01; full text was not available for this citation.
  pmid: "22327556"
  doi: 10.1007/s11011-012-9281-2
  funding: Not reported in the retrieved PubMed record.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not reported in the retrieved PubMed record.
  conflictOfInterestStatus: not-assessed
- id: psychonautwiki
  title: "Memantine: PsychonautWiki dose and duration data"
  authors: PsychonautWiki contributors
  year: 2026
  url: https://psychonautwiki.org/wiki/Memantine
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
  url: https://en.wikipedia.org/wiki/Memantine
  title: Wikipedia
```

