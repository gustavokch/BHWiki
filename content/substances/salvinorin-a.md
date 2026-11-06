---
slug: salvinorin-a
name: Salvinorin A
subtitle: The compound, not the leaf.
aliases:
  - Salvinorin
formula: C23H28O8
molecularWeight: 432.5 g/mol
pubchemCid: 128563
smiles: CC(=O)OC1CC(C2(CCC3C(=O)OC(CC3(C2C1=O)C)C4=COC=C4)C)C(=O)OC
category: Dissociative
tags:
  - dissociative
  - kappa-opioid-receptor
  - dissociation
accent: "#9fbab0"
reviewedAt: 2026-10-03
editorialStatus: sourced-draft
halfLife:
  label: Not established here
  low: null
  high: null
  context: Neither inspected abstract reports an elimination half-life for salvinorin A.
  sourceId: johnson2011
  observationId: salvinorin-unresolved
kinetics:
  onset: Not assessed as a separate phase.
  peak: Drug strength peaked at 2 minutes, the first measured time point.
  duration: Definite subjective effects were no longer present at about 20 minutes.
  bioavailability: Not assessed
  metabolism: Not assessed
  sourceId: johnson2011
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
x-order: 408
---

## Summary

Salvinorin A, PubChem CID 128563, is described as a selective nonnitrogenous kappa-opioid agonist and the principal constituent of Salvia divinorum. Inhaled microgram-per-kilogram doses in two small studies produced effects that peaked within about 2 minutes.

## Description

This article is the pure compound. It is not a page about the plant or about smoking leaf. Neither inspected abstract reports an elimination half-life. Narrative themes from sessions are not reprinted here.

## Evidence note

Two small inhaled-dose studies support timing and subjective findings. The receptor description comes from the study abstract. No half-life was reported.

## Doses

```yaml
- label: Ascending inhaled doses, four participants
  amount: 0.375–21 µg/kg
  quantity: 0.375
  quantityMax: 21
  unit: µg/kg
  ingredient: Salvinorin A
  formulation: Inhaled study doses
  route: Inhaled
  frequency: Up to 16 ascending doses plus 4 placebos
  duration: Acute laboratory sessions under supportive conditions
  population: 4 healthy adults who had used hallucinogens
  purpose: Human psychopharmacology and dose effects
  sourceCategory: research
  note: Drug strength peaked at 2 minutes. Heart rate and blood pressure did not increase significantly.
  sourceId: johnson2011
- label: Ascending inhaled doses, eight participants
  amount: 0.375–21 µg/kg
  quantity: 0.375
  quantityMax: 21
  unit: µg/kg
  ingredient: Salvinorin A
  formulation: Inhaled study doses
  route: Inhaled
  frequency: Up to 16 ascending doses
  duration: Double-blind placebo-controlled sessions, with 1-month follow-up
  population: 8 healthy adults who had used hallucinogens
  purpose: Dose-related subjective, dissociative, and memory effects
  sourceCategory: research
  note: Effects peaked at 2 minutes and dissipated rapidly. High doses often reached maximal drug strength or unresponsiveness.
  sourceId: maclean2013
```

## Pharmacokinetics

```yaml
- id: salvinorin-unresolved
  analyte: Salvinorin A
  route: Inhaled
  formulation: Pure compound in ascending study doses
  population: Healthy adults who had used hallucinogens
  endpoint: elimination-half-life
  statistic: not-established
  value: null
  low: null
  high: null
  unit: hours
  context: Subjective timing is reported. Elimination half-life is not.
  sourceId: johnson2011
  modelEligible: false
```

## Duration

```yaml
- id: psychonautwiki-smoked
  measurement: subjective
  route: Smoked
  population: Ranges compiled by PsychonautWiki contributors
  sourceId: psychonautwiki
  note: PsychonautWiki community duration ranges for this route.
  total:
    min: 15
    max: 90
    unit: minutes
  phases:
    - name: onset
      basis: elapsed-since-exposure
      min: 15
      max: 60
      unit: seconds
    - name: after-effects
      basis: phase-duration
      min: 15
      max: 60
      unit: minutes
- id: psychonautwiki-sublingual
  measurement: subjective
  route: Sublingual
  population: Ranges compiled by PsychonautWiki contributors
  sourceId: psychonautwiki
  note: PsychonautWiki community duration ranges for this route.
  total:
    min: 30
    max: 90
    unit: minutes
  phases:
    - name: onset
      basis: elapsed-since-exposure
      min: 10
      max: 20
      unit: minutes
    - name: after-effects
      basis: phase-duration
      min: 30
      max: 120
      unit: minutes
```

## Modifiers

```yaml
[]
```

## Effects

```yaml
- conceptId: dissociation
  name: Dose-related dissociative effects
  direction: Increased
  evidence: Human research
  description: The eight-person study reported intense subjective effects and dose-related dissociative effects, with some questionnaire overlap with classic hallucinogens. Participants described the effects as qualitatively different from other drugs they had used. Recall and recognition memory were impaired during the session. No persisting adverse effects were found at the 1-month follow-up.
  sourceId: maclean2013
  population: 8 healthy adults who had used hallucinogens
  exposure: Inhaled salvinorin A, 0.375–21 µg/kg
  instrument: null
  magnitude: null
```

## Outcomes

```yaml
[]
```

## Mechanisms

```yaml
- title: Kappa-opioid agonism
  description: The cited human study describes salvinorin A as a potent selective nonnitrogenous kappa-opioid agonist.
  sourceId: johnson2011
  conceptId: kappa-opioid-receptor
```

## Cautions

```yaml
- title: High doses and responsiveness
  description: In the eight-person study, high doses often produced maximal drug strength or unresponsiveness. Effects in that study peaked at 2 minutes.
  sourceId: maclean2013
- title: Short monitored sessions
  description: The four-person study found no significant increase in heart rate or blood pressure and no definite subjective effects by about 20 minutes. Those observations are limited to that protocol.
  sourceId: johnson2011
```

## Claims

```yaml
- id: salvinorin-kappa
  assertion: Salvinorin A is described as a potent selective nonnitrogenous kappa-opioid agonist and the principal constituent of Salvia divinorum.
  relation: receptor-agonism
  participants:
    - entityId: substance:salvinorin-a
      role: substance
    - entityId: tag:kappa-opioid-receptor
      role: target
  context: Human psychopharmacology study of the pure inhaled compound
  sourceIds:
    - johnson2011
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: The receptor description is stated in the study abstract. This article does not add a binding constant. The pure compound is distinct from the plant.
```

## Interactions

```yaml
[]
```

## Experience links

```yaml
- title: Salvinorin A on PsychonautWiki
  url: https://psychonautwiki.org/wiki/Salvinorin_A
  publisher: PsychonautWiki
```

## References

```yaml
- id: johnson2011
  title: Human psychopharmacology and dose-effects of salvinorin A, a kappa opioid agonist hallucinogen present in the plant Salvia divinorum
  authors: Johnson et al.
  year: 2011
  pmid: "21131142"
  url: https://pubmed.ncbi.nlm.nih.gov/21131142/
  kind: Human dose-effect study
  insight: Reports inhaled ascending doses, a 2-minute peak, resolution by about 20 minutes, and the kappa-opioid agonist description.
  limitation: Four participants. No elimination half-life is reported.
  funding: Not assessed in this draft.
- id: maclean2013
  title: "Dose-related effects of salvinorin A in humans: dissociative, hallucinogenic, and memory effects"
  authors: MacLean et al.
  year: 2013
  pmid: "23135605"
  url: https://pubmed.ncbi.nlm.nih.gov/23135605/
  kind: Double-blind placebo-controlled study
  insight: Reports dose-related dissociative effects, memory impairment during the session, and no persisting adverse effects at one month.
  limitation: Eight participants. Session narratives are not reproduced here.
  funding: Not assessed in this draft.
- id: pubchem
  title: "Salvinorin A: compound identity and structure"
  authors: NCBI PubChem
  year: 2026
  url: https://pubchem.ncbi.nlm.nih.gov/compound/128563
  kind: Chemical database
  insight: Source of the displayed formula, molecular weight, structure, and connectivity SMILES.
  limitation: Connectivity SMILES do not encode every stereochemical distinction. The parent record is distinct from salts, formulations, and commercial product quality.
  funding: US National Library of Medicine.
- id: psychonautwiki
  title: "Salvinorin A: PsychonautWiki dose and duration data"
  authors: PsychonautWiki contributors
  year: 2026
  url: https://psychonautwiki.org/wiki/Salvinorin_A
  kind: Community wiki data · CC BY 4.0
  insight: Source of this page's community dose bands and subjective duration ranges, from the PsychonautWiki API snapshot built about 2026-06-23 and retrieved 2026-11-06. The structured data is used under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/); BHWiki normalized unit symbols and route names.
  limitation: "PsychonautWiki states: \"PW's dosage information is gathered from users and resources for educational purposes only. It is not a recommendation and should be verified with other sources for accuracy.\" Its dose and duration values carry no per-value citations."
```

## Legal

```yaml
[]
```

