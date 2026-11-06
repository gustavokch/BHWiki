---
slug: mdma
name: MDMA
subtitle: One supervised therapy trial.
aliases:
  - 3,4-Methylenedioxymethamphetamine
formula: C11H15NO2
molecularWeight: 193.24 g/mol
pubchemCid: 1615
smiles: CC(CC1=CC2=C(C=C1)OCO2)NC
category: Stimulant
tags:
  - stimulant
  - phenethylamine
  - ptsd-severity
  - psychological-support
accent: "#c8a18f"
reviewedAt: 2026-10-03
editorialStatus: sourced-draft
halfLife:
  label: Not established here
  low: null
  high: null
  context: The inspected trial abstract does not report an elimination half-life.
  sourceId: mitchell2021
  observationId: mdma-unresolved
kinetics:
  onset: Not assessed
  peak: Not assessed
  duration: Not assessed
  bioavailability: Not assessed
  metabolism: Not assessed
  sourceId: mitchell2021
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
x-order: 401
---

## Summary

3,4-Methylenedioxymethamphetamine, PubChem CID 1615. In a phase 3 trial of severe PTSD, CAPS-5 scores fell further with MDMA plus therapy than with placebo plus the same therapy. The inspected abstract does not state the milligram dose or an elimination half-life.

## Description

This record is the parent compound. The clinical result below comes from one randomized, double-blind, placebo-controlled phase 3 trial in severe PTSD, with manualized therapy and a psychiatric-medication washout. It does not describe unsupervised use. No elimination half-life was in the inspected abstract.

## Evidence note

The severity result belongs to a supervised therapy protocol. The milligram exposure and the elimination half-life were not in the inspected abstract.

## Doses

```yaml
- label: Phase 3 severe-PTSD trial
  amount: Milligram exposure not stated in the inspected abstract
  quantity: null
  quantityMax: null
  unit: mg
  ingredient: MDMA
  formulation: Not stated in the inspected abstract
  route: Not stated in the inspected abstract
  frequency: Not stated in the inspected abstract
  duration: Protocol with 3 preparatory and 9 integrative therapy sessions. The number of MDMA administrations was not in the inspected abstract.
  population: 90 adults with severe PTSD, randomized 1:1 after psychiatric medication washout
  purpose: Compare MDMA-assisted therapy with placebo plus the same manualized therapy (NCT03537014)
  sourceCategory: research
  note: Supervised trial exposure. The abstract does not state a milligram amount.
  sourceId: mitchell2021
- label: Threshold dose
  amount: 20 mg
  quantity: 20
  quantityMax: null
  unit: mg
  ingredient: MDMA
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
  amount: 20–80 mg
  quantity: 20
  quantityMax: 80
  unit: mg
  ingredient: MDMA
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
  amount: 80–120 mg
  quantity: 80
  quantityMax: 120
  unit: mg
  ingredient: MDMA
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
  amount: 120–150 mg
  quantity: 120
  quantityMax: 150
  unit: mg
  ingredient: MDMA
  formulation: Not established
  route: Oral
  frequency: Not established
  duration: Not established
  population: Not established
  purpose: PsychonautWiki dosage classification
  sourceCategory: community
  note: Band from the PsychonautWiki API snapshot built about 2026-06-23.
  sourceId: psychonautwiki
- label: Heavy dose band (150 mg and above)
  amount: 150 mg and above
  quantity: 150
  quantityMax: null
  unit: mg
  ingredient: MDMA
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
- id: mdma-unresolved
  analyte: MDMA
  route: Not stated in the inspected abstract
  formulation: Not stated in the inspected abstract
  population: 90 adults with severe PTSD
  endpoint: elimination-half-life
  statistic: not-established
  value: null
  low: null
  high: null
  unit: hours
  context: No elimination half-life was reported in the inspected abstract.
  sourceId: mitchell2021
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
    max: 6
    unit: hours
  phases:
    - name: onset
      basis: elapsed-since-exposure
      min: 30
      max: 45
      unit: minutes
    - name: comeup
      basis: phase-duration
      min: 15
      max: 30
      unit: minutes
    - name: peak
      basis: phase-duration
      min: 1.5
      max: 2.5
      unit: hours
    - name: offset
      basis: phase-duration
      min: 1
      max: 1.5
      unit: hours
    - name: after-effects
      basis: phase-duration
      min: 12
      max: 48
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
- conceptId: ptsd-severity
  name: CAPS-5 total severity
  direction: Decreased
  evidence: Human research
  description: Mean CAPS-5 change was -24.4 (SD 11.6) with MDMA plus therapy and -13.9 (SD 11.5) with placebo plus therapy (P<0.0001, d=0.91). The secondary Sheehan Disability Scale also differed (P=0.0116, d=0.43). The abstract reported no adverse events of abuse potential, suicidality, or QT prolongation in that protocol, and described treatment as safe and well tolerated there.
  sourceId: mitchell2021
  population: 90 adults with severe PTSD
  exposure: MDMA or placebo plus manualized therapy after medication washout
  instrument: CAPS-5 primary endpoint
  magnitude: Mean change -24.4 versus -13.9; P<0.0001; d=0.91
```

## Mechanisms

```yaml
[]
```

## Cautions

```yaml
- title: Trial safety is protocol-specific
  description: The abstract describes the regimen as safe and well tolerated in that supervised protocol and says MDMA did not induce adverse events of abuse potential, suicidality, or QT prolongation there. That wording does not transfer to unsupervised exposure.
  sourceId: mitchell2021
```

## Claims

```yaml
- id: mdma-ptsd
  assertion: In a supervised phase 3 trial, MDMA plus manualized therapy reduced CAPS-5 PTSD severity more than placebo plus the same therapy.
  relation: trial-outcome
  participants:
    - entityId: substance:mdma
      role: substance
    - entityId: tag:ptsd-severity
      role: measured-outcome
    - entityId: tag:psychological-support
      role: exposure-context
  context: Severe PTSD, medication washout, and a manualized therapy protocol
  sourceIds:
    - mitchell2021
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Sponsor employment is disclosed. The result is not a finding about unsupervised use, and the milligram dose was not in the inspected abstract.
```

## Interactions

```yaml
[]
```

## Experience links

```yaml
- title: MDMA on PsychonautWiki
  url: https://psychonautwiki.org/wiki/MDMA
  publisher: PsychonautWiki
```

## References

```yaml
- id: mitchell2021
  title: "MDMA-assisted therapy for severe PTSD: a randomized, double-blind, placebo-controlled phase 3 study"
  authors: Mitchell et al.
  year: 2021
  pmid: "33972795"
  url: https://pubmed.ncbi.nlm.nih.gov/33972795/
  kind: Randomized double-blind placebo-controlled trial
  insight: Reports the CAPS-5 primary result and the Sheehan Disability Scale secondary result in severe PTSD.
  limitation: The inspected abstract omits the milligram dose. Sponsor employment, medication washout, and supervised therapy limit generalization. A later moderate-to-severe trial was not re-extracted.
  funding: The inspected abstract discloses sponsor employment. Full funding details were not re-extracted.
- id: pubchem
  title: "MDMA: compound identity and structure"
  authors: NCBI PubChem
  year: 2026
  url: https://pubchem.ncbi.nlm.nih.gov/compound/1615
  kind: Chemical database
  insight: Source of the displayed formula, molecular weight, structure, and connectivity SMILES.
  limitation: Connectivity SMILES do not encode every stereochemical distinction. The parent record is distinct from salts, formulations, and commercial product quality.
  funding: US National Library of Medicine.
- id: psychonautwiki
  title: "MDMA: PsychonautWiki dose and duration data"
  authors: PsychonautWiki contributors
  year: 2026
  url: https://psychonautwiki.org/wiki/MDMA
  kind: Community wiki data · CC BY 4.0
  insight: Source of this page's community dose bands and subjective duration ranges, from the PsychonautWiki API snapshot built about 2026-06-23 and retrieved 2026-11-06. The structured data is used under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/); BHWiki normalized unit symbols and route names.
  limitation: "PsychonautWiki states: \"PW's dosage information is gathered from users and resources for educational purposes only. It is not a recommendation and should be verified with other sources for accuracy.\" Its dose and duration values carry no per-value citations."
```

## Legal

```yaml
[]
```

