---
slug: kava
name: Kava
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
  sourceId: optihealth-substance-01a08b04-2f5a-773f-9ee6-5ecbe8f534cd
  observationId: kava-identity-unassessed
kinetics:
  onset: Not established
  peak: Not established
  duration: Not established
  bioavailability: Not established
  metabolism: Not established
  sourceId: optihealth-substance-01a08b04-2f5a-773f-9ee6-5ecbe8f534cd
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
x-order: 1574
---

## Summary

Kava is recorded as a canonical identity from a source-backed OptiHealth candidate. This draft does not assert effects, dosing, safety, or efficacy.

## Description

This page records the source-backed identity label Kava. The import preserves the candidate's aliases and source trail only; molecular structure, pharmacokinetics, effects, dosing, safety, and efficacy remain unestablished here.

## Evidence note

Identity only import: the cited sources support candidate identity provenance, not an evidence review. No biological relationship or clinical claim is asserted.

Reddit index corpus import (13 linked source records; 12 PubMed abstracts). Full-text methods, funding, and conflicts remain unassessed where the source record says so.

PubMed MCP abstract review: 12 linked PubMed identifiers were retrieved for this Reddit-index entry; structured fields below are limited to abstract-supported findings. PMC full text was used where rights-eligible and available; remaining methods, funding, and conflicts are unassessed.

PubMed MCP abstract review covered 12 PMID-linked records for this Reddit-index entry. Structured fields are limited to abstract-supported findings; PMC full text was retrieved where rights-eligible and available, with remaining methods, funding, and conflicts unassessed.

## Doses

```yaml
- label: PubMed study exposure (9829291)
  amount: 20 mg/kg
  quantity: 20
  quantityMax: null
  unit: mg/kg
  ingredient: Kava
  formulation: As described in the PubMed abstract
  frequency: Study exposure
  duration: Study exposure
  population: A small dose of kava extract (20 mg/kg body weight i.p.) caused changes in rat behaviour and concentrations of dopamine in the nucleus accumbens.
  purpose: Research exposure
  sourceCategory: research
  note: Dose extracted from the PubMed abstract; verify the full text for formulation and protocol details.
  sourceId: reddit-pmid-9829291
- label: PubMed study exposure (1332016)
  amount: 5 mg/kg
  quantity: 5
  quantityMax: null
  unit: mg/kg
  ingredient: Kava
  formulation: As described in the PubMed abstract
  frequency: Study exposure
  duration: Study exposure
  population: As the first of a series of studies on the neuropharmacological interactions of kava with CNS receptors we tested purified pyrones and kava resin for activity on GABA and benzodiazepine binding sites in rat and mouse brain membranes.
  purpose: Research exposure
  sourceCategory: research
  note: Dose extracted from the PubMed abstract; verify the full text for formulation and protocol details.
  sourceId: reddit-pmid-1332016
- label: PubMed study exposure (15181652)
  amount: 300 mg
  quantity: 300
  quantityMax: null
  unit: mg
  ingredient: Kava
  formulation: As described in the PubMed abstract
  frequency: Study exposure
  duration: Study exposure
  population: Forster) on emotional reactivity and cognitive performance were investigated in a double-blind randomized placebo-controlled trial involving healthy volunteers.
  purpose: Research exposure
  sourceCategory: research
  note: Dose extracted from the PubMed abstract; verify the full text for formulation and protocol details.
  sourceId: reddit-pmid-15181652
- label: PubMed study exposure (11544547)
  amount: 30 mg
  quantity: 30
  quantityMax: null
  unit: mg
  ingredient: Kava
  formulation: As described in the PubMed abstract
  frequency: Study exposure
  duration: Study exposure
  population: "TREATMENT AND CLINICAL COURSE: The patient's physical condition deteriorated."
  purpose: Research exposure
  sourceCategory: research
  note: Dose extracted from the PubMed abstract; verify the full text for formulation and protocol details.
  sourceId: reddit-pmid-11544547
```

## Pharmacokinetics

```yaml
- id: kava-identity-unassessed
  analyte: Kava
  route: Not assessed
  formulation: Identity-only record
  population: Not assessed
  endpoint: elimination-half-life
  statistic: not-established
  value: null
  low: null
  high: null
  unit: hours
  context: This identity import does not establish a pharmacokinetic observation.
  sourceId: optihealth-substance-01a08b04-2f5a-773f-9ee6-5ecbe8f534cd
  modelEligible: false
```

## Modifiers

```yaml
[]
```

## Effects

```yaml
- id: reddit-kava-anxiety-12225450
  conceptId: anxiety
  name: Anxiety
  direction: Increased
  evidence: Limited research
  description: "RESULTS: The use of kava occurs among indigenous populations in the South Pacific and in northern Australia, while also being used throughout the western world as a herbal medicine. Animal studies show that kava lactones alter neuronal excitation through direct interactions with voltage-dependent ion channels, giving rise to kava's muscle relaxant, anaesthetic, anxiolytic and anticonvulsive properties. Several isolated cases of psychotic and severe dystonic reactions following kava use suggest that kava also has psychoactive properties, yet there is no conclusive evidence that kava interferes with normal cognitive processes.  CONCLUSIONS: Kava is effective in the treatment of tension and anx"
  sourceId: reddit-pmid-12225450
  exposure: "OBJECTIVE: This review considers the context in which kava is used, together with its underlying psychopharmacological mechanisms, to investigate the neurobehavioural effects associated with kava use."
  instrument: null
  magnitude: null
  reportType: measured-assessment
  population: Population description was not available in the retrieved abstract.
- id: reddit-kava-euphoria-9829291
  conceptId: euphoria
  name: Euphoria
  direction: Variable
  evidence: Limited research
  description: 1. Kavapyrones have well-known psychotropic properties.
  sourceId: reddit-pmid-9829291
  population: A small dose of kava extract (20 mg/kg body weight i.p.) caused changes in rat behaviour and concentrations of dopamine in the nucleus accumbens.
  exposure: "1."
  instrument: null
  magnitude: null
  reportType: measured-assessment
- id: reddit-kava-anxiety-9832350
  conceptId: anxiety
  name: Anxiety
  direction: Increased
  evidence: Human research
  description: Kava-kava, a psychoactive beverage, induces relaxation, improves social interaction, promotes sleep and plays an important role in the sociocultural life in the islands of the South Pacific. On the other hand, standardized extracts of kava-kava roots are used for the therapy of anxiety, tension and restlessness.
  sourceId: reddit-pmid-9832350
  exposure: Kava-kava, a psychoactive beverage, induces relaxation, improves social interaction, promotes sleep and plays an important role in the sociocultural life in the islands of the South Pacific.
  instrument: null
  magnitude: null
  reportType: measured-assessment
  population: Population description was not available in the retrieved abstract.
- id: reddit-kava-anxiety-10653213
  conceptId: anxiety
  name: Anxiety
  direction: Decreased
  evidence: Limited research
  description: Synthetic anxiolytic drugs are effective for treating anxiety, but they are burdened with adverse effects. Constraints on resources and time often render therapies such as psychologic interventions impracticable.
  sourceId: reddit-pmid-10653213
  population: contacted to provide further information
  exposure: Synthetic anxiolytic drugs are effective for treating anxiety, but they are burdened with adverse effects.
  instrument: null
  magnitude: null
  reportType: measured-assessment
```

## Outcomes

```yaml
- id: reddit-kava-cognitive-performance-12225450
  conceptId: cognitive-performance
  name: Cognitive Performance
  direction: Increased
  evidence: Limited research
  description: "RESULTS: The use of kava occurs among indigenous populations in the South Pacific and in northern Australia, while also being used throughout the western world as a herbal medicine. Animal studies show that kava lactones alter neuronal excitation through direct interactions with voltage-dependent ion channels, giving rise to kava's muscle relaxant, anaesthetic, anxiolytic and anticonvulsive properties. Several isolated cases of psychotic and severe dystonic reactions following kava use suggest that kava also has psychoactive properties, yet there is no conclusive evidence that kava interferes with normal cognitive processes.  CONCLUSIONS: Kava is effective in the treatment of tension and anx"
  sourceId: reddit-pmid-12225450
  exposure: "RESULTS: The use of kava occurs among indigenous populations in the South Pacific and in northern Australia, while also being used throughout the western world as a herbal medicine. Animal studies show that kava lactones alter neuronal excitation through direct interactions with voltage-dependent ion channels, giving rise to kava's muscle relaxant, anaesthetic, anxiolytic and anticonvulsive properties. Several isolated cases of psychotic and severe dystonic reactions following kava use suggest that kava also has psychoactive properties, yet there is no conclusive evidence that kava interferes with normal cognitive processes.  CONCLUSIONS: Kava is effective in the treatment of tension and anx"
  instrument: null
  magnitude: null
  reportType: measured-assessment
  population: Population description was not available in the retrieved abstract.
- id: reddit-kava-anxiety-symptom-severity-12225450
  conceptId: anxiety-symptom-severity
  name: Anxiety Symptom Severity
  direction: Increased
  evidence: Limited research
  description: "RESULTS: The use of kava occurs among indigenous populations in the South Pacific and in northern Australia, while also being used throughout the western world as a herbal medicine. Animal studies show that kava lactones alter neuronal excitation through direct interactions with voltage-dependent ion channels, giving rise to kava's muscle relaxant, anaesthetic, anxiolytic and anticonvulsive properties. Several isolated cases of psychotic and severe dystonic reactions following kava use suggest that kava also has psychoactive properties, yet there is no conclusive evidence that kava interferes with normal cognitive processes.  CONCLUSIONS: Kava is effective in the treatment of tension and anx"
  sourceId: reddit-pmid-12225450
  exposure: "RESULTS: The use of kava occurs among indigenous populations in the South Pacific and in northern Australia, while also being used throughout the western world as a herbal medicine. Animal studies show that kava lactones alter neuronal excitation through direct interactions with voltage-dependent ion channels, giving rise to kava's muscle relaxant, anaesthetic, anxiolytic and anticonvulsive properties. Several isolated cases of psychotic and severe dystonic reactions following kava use suggest that kava also has psychoactive properties, yet there is no conclusive evidence that kava interferes with normal cognitive processes.  CONCLUSIONS: Kava is effective in the treatment of tension and anx"
  instrument: null
  magnitude: null
  reportType: measured-assessment
  population: Population description was not available in the retrieved abstract.
- id: reddit-kava-sleep-11642654
  conceptId: sleep
  name: Sleep
  direction: Variable
  evidence: Limited research
  description: 1. Antiepileptic drugs that are successful as mood stabilizers, e.g. carbamazepine, valproate and lamotrigine, exhibit a characteristic pattern of action on ion fluxes.
  sourceId: reddit-pmid-11642654
  population: Experimental paradigms included current and voltage clamp recordings from rat hippocampal CA 1 pyramidal cells and dorsal root ganglia as well as field potential recordings in guinea pig hippocampal slices. 6.
  exposure: 1. Antiepileptic drugs that are successful as mood stabilizers, e.g. carbamazepine, valproate and lamotrigine, exhibit a characteristic pattern of action on ion fluxes.
  instrument: null
  magnitude: null
  reportType: measured-assessment
- id: reddit-kava-sleep-9829291
  conceptId: sleep
  name: Sleep
  direction: Variable
  evidence: Limited research
  description: 1. Kavapyrones have well-known psychotropic properties.
  sourceId: reddit-pmid-9829291
  population: A small dose of kava extract (20 mg/kg body weight i.p.) caused changes in rat behaviour and concentrations of dopamine in the nucleus accumbens.
  exposure: 1. Kavapyrones have well-known psychotropic properties.
  instrument: null
  magnitude: null
  reportType: measured-assessment
- id: reddit-kava-sleep-9832350
  conceptId: sleep
  name: Sleep
  direction: Increased
  evidence: Human research
  description: Kava-kava, a psychoactive beverage, induces relaxation, improves social interaction, promotes sleep and plays an important role in the sociocultural life in the islands of the South Pacific. On the other hand, standardized extracts of kava-kava roots are used for the therapy of anxiety, tension and restlessness.
  sourceId: reddit-pmid-9832350
  exposure: Kava-kava, a psychoactive beverage, induces relaxation, improves social interaction, promotes sleep and plays an important role in the sociocultural life in the islands of the South Pacific. On the other hand, standardized extracts of kava-kava roots are used for the therapy of anxiety, tension and restlessness.
  instrument: null
  magnitude: null
  reportType: measured-assessment
  population: Population description was not available in the retrieved abstract.
- id: reddit-kava-anxiety-symptom-severity-9832350
  conceptId: anxiety-symptom-severity
  name: Anxiety Symptom Severity
  direction: Increased
  evidence: Human research
  description: Kava-kava, a psychoactive beverage, induces relaxation, improves social interaction, promotes sleep and plays an important role in the sociocultural life in the islands of the South Pacific. On the other hand, standardized extracts of kava-kava roots are used for the therapy of anxiety, tension and restlessness.
  sourceId: reddit-pmid-9832350
  exposure: Kava-kava, a psychoactive beverage, induces relaxation, improves social interaction, promotes sleep and plays an important role in the sociocultural life in the islands of the South Pacific. On the other hand, standardized extracts of kava-kava roots are used for the therapy of anxiety, tension and restlessness.
  instrument: null
  magnitude: null
  reportType: measured-assessment
  population: Population description was not available in the retrieved abstract.
- id: reddit-kava-attention-15181652
  conceptId: attention
  name: Attention
  direction: Variable
  evidence: Human research
  description: The acute effects of the herbal anxiolytic Kava-kava (Piper methysticum G. Forster) on emotional reactivity and cognitive performance were investigated in a double-blind randomized placebo-controlled trial involving healthy volunteers.
  sourceId: reddit-pmid-15181652
  population: Forster) on emotional reactivity and cognitive performance were investigated in a double-blind randomized placebo-controlled trial involving healthy volunteers.
  exposure: The acute effects of the herbal anxiolytic Kava-kava (Piper methysticum G. Forster) on emotional reactivity and cognitive performance were investigated in a double-blind randomized placebo-controlled trial involving healthy volunteers.
  instrument: null
  magnitude: null
  reportType: measured-assessment
- id: reddit-kava-cognitive-performance-15181652
  conceptId: cognitive-performance
  name: Cognitive Performance
  direction: Variable
  evidence: Human research
  description: The acute effects of the herbal anxiolytic Kava-kava (Piper methysticum G. Forster) on emotional reactivity and cognitive performance were investigated in a double-blind randomized placebo-controlled trial involving healthy volunteers.
  sourceId: reddit-pmid-15181652
  population: Forster) on emotional reactivity and cognitive performance were investigated in a double-blind randomized placebo-controlled trial involving healthy volunteers.
  exposure: The acute effects of the herbal anxiolytic Kava-kava (Piper methysticum G. Forster) on emotional reactivity and cognitive performance were investigated in a double-blind randomized placebo-controlled trial involving healthy volunteers.
  instrument: null
  magnitude: null
  reportType: measured-assessment
- id: reddit-kava-episodic-memory-15181652
  conceptId: episodic-memory
  name: Episodic Memory
  direction: Variable
  evidence: Human research
  description: The acute effects of the herbal anxiolytic Kava-kava (Piper methysticum G. Forster) on emotional reactivity and cognitive performance were investigated in a double-blind randomized placebo-controlled trial involving healthy volunteers.
  sourceId: reddit-pmid-15181652
  population: Forster) on emotional reactivity and cognitive performance were investigated in a double-blind randomized placebo-controlled trial involving healthy volunteers.
  exposure: The acute effects of the herbal anxiolytic Kava-kava (Piper methysticum G. Forster) on emotional reactivity and cognitive performance were investigated in a double-blind randomized placebo-controlled trial involving healthy volunteers.
  instrument: null
  magnitude: null
  reportType: measured-assessment
- id: reddit-kava-cognitive-performance-16818312
  conceptId: cognitive-performance
  name: Cognitive Performance
  direction: Increased
  evidence: Human research
  description: Volunteer subjects were assigned to receive a mixture of the intoxicating substance, kava, in a mixture with fruit juice, or juice alone. Subjects then undertook tasks of acute cognitive functioning, including reaction time and tracking tasks, and a measure of body sway.
  sourceId: reddit-pmid-16818312
  population: assigned to receive a mixture of the intoxicating substance, kava, in a mixture with fruit juice, or juice alone
  exposure: Volunteer subjects were assigned to receive a mixture of the intoxicating substance, kava, in a mixture with fruit juice, or juice alone. Subjects then undertook tasks of acute cognitive functioning, including reaction time and tracking tasks, and a measure of body sway.
  instrument: null
  magnitude: null
  reportType: measured-assessment
- id: reddit-kava-anxiety-symptom-severity-10653213
  conceptId: anxiety-symptom-severity
  name: Anxiety Symptom Severity
  direction: Decreased
  evidence: Limited research
  description: Synthetic anxiolytic drugs are effective for treating anxiety, but they are burdened with adverse effects. Constraints on resources and time often render therapies such as psychologic interventions impracticable.
  sourceId: reddit-pmid-10653213
  population: contacted to provide further information
  exposure: Synthetic anxiolytic drugs are effective for treating anxiety, but they are burdened with adverse effects. Constraints on resources and time often render therapies such as psychologic interventions impracticable.
  instrument: null
  magnitude: null
  reportType: measured-assessment
- id: reddit-kava-fatigue-severity-11544547
  conceptId: fatigue-severity
  name: Fatigue Severity
  direction: Variable
  evidence: Limited research
  description: "HISTORY AND CLINICAL FINDINGS: A 60 year-old woman was admitted to hospital because of jaundice, fatigue, weight loss over several months and icteric skin. Because of progressive liver failure, concomitant renal failure and progressive encephalopathy she was transferred to an intensive care unit."
  sourceId: reddit-pmid-11544547
  population: "TREATMENT AND CLINICAL COURSE: The patient's physical condition deteriorated."
  exposure: "HISTORY AND CLINICAL FINDINGS: A 60 year-old woman was admitted to hospital because of jaundice, fatigue, weight loss over several months and icteric skin. Because of progressive liver failure, concomitant renal failure and progressive encephalopathy she was transferred to an intensive care unit."
  instrument: null
  magnitude: null
  reportType: measured-assessment
- id: reddit-kava-cognitive-performance-12589393
  conceptId: cognitive-performance
  name: Cognitive Performance
  direction: Increased
  evidence: Limited research
  description: Kava is an extract from the Piper methysticum Forst. f. plant that has been consumed in the Pacific islands for millennia and more recently, among indigenous populations, in northern Australia and throughout the Western world as an herbal medicine. Through alterations on neuronal excitation, kava induces muscle relaxation, anasthesia, and has anxiolytic properties.
  sourceId: reddit-pmid-12589393
  exposure: Kava is an extract from the Piper methysticum Forst. f. plant that has been consumed in the Pacific islands for millennia and more recently, among indigenous populations, in northern Australia and throughout the Western world as an herbal medicine. Through alterations on neuronal excitation, kava induces muscle relaxation, anasthesia, and has anxiolytic properties.
  instrument: null
  magnitude: null
  reportType: measured-assessment
  population: Population description was not available in the retrieved abstract.
```

## Mechanisms

```yaml
- title: Source-specific finding from PMID 12225450
  description: "RESULTS: The use of kava occurs among indigenous populations in the South Pacific and in northern Australia, while also being used throughout the western world as a herbal medicine. Animal studies show that kava lactones alter neuronal excitation through direct interactions with voltage-dependent ion channels, giving rise to kava's muscle relaxant, anaesthetic, anxiolytic and anticonvulsive properties. Several isolated cases of psychotic and severe dystonic reactions following kava use suggest that kava also has psychoactive properties, yet there is no conclusive evidence that kava interferes with normal cognitive processes.  CONCLUSIONS: Kava is effective in the treatment of tension and anx"
  sourceId: reddit-pmid-12225450
- title: Source-specific finding from PMID 11642654
  description: 1. Antiepileptic drugs that are successful as mood stabilizers, e.g. carbamazepine, valproate and lamotrigine, exhibit a characteristic pattern of action on ion fluxes.
  sourceId: reddit-pmid-11642654
- title: Source-specific finding from PMID 9829291
  description: 1. Kavapyrones have well-known psychotropic properties.
  sourceId: reddit-pmid-9829291
- title: Source-specific finding from PMID 9832350
  description: Kava-kava, a psychoactive beverage, induces relaxation, improves social interaction, promotes sleep and plays an important role in the sociocultural life in the islands of the South Pacific. On the other hand, standardized extracts of kava-kava roots are used for the therapy of anxiety, tension and restlessness.
  sourceId: reddit-pmid-9832350
- title: Source-specific finding from PMID 9434608
  description: "Three kava pyrones, the natural compounds (+)-methysticine and (+)-kavain, and the synthetic racemate (+/-)-kavain, were tested concerning their action on in vitro uptake of monoamines in synaptosomes prepared from the cerebral cortex and hippocampus of rats. (+/-)-Kavain and (+)-kavain were found to potently inhibit the uptake of [3H]-noradrenaline. Uptake of [3H]-noradrenaline was inhibited in the following order of potency: (+/-)-kavain = (+)-kavain > (+)-methysticine, whereas none of the kava pyrones efficiently blocked the uptake of [3H]-serotonin."
  sourceId: reddit-pmid-9434608
- title: Source-specific finding from PMID 1332016
  description: Kava, an intoxicating beverage prepared from the pepper plant Piper methysticum, is widely consumed by the indigenous peoples in the islands of the South Pacific. As the first of a series of studies on the neuropharmacological interactions of kava with CNS receptors we tested purified pyrones and kava resin for activity on GABA and benzodiazepine binding sites in rat and mouse brain membranes.
  sourceId: reddit-pmid-1332016
```

## Cautions

```yaml
- title: Source-specific finding from PMID 12225450
  description: "RESULTS: The use of kava occurs among indigenous populations in the South Pacific and in northern Australia, while also being used throughout the western world as a herbal medicine. Animal studies show that kava lactones alter neuronal excitation through direct interactions with voltage-dependent ion channels, giving rise to kava's muscle relaxant, anaesthetic, anxiolytic and anticonvulsive properties. Several isolated cases of psychotic and severe dystonic reactions following kava use suggest that kava also has psychoactive properties, yet there is no conclusive evidence that kava interferes with normal cognitive processes.  CONCLUSIONS: Kava is effective in the treatment of tension and anx"
  sourceId: reddit-pmid-12225450
- title: Source-specific finding from PMID 11642654
  description: 1. Antiepileptic drugs that are successful as mood stabilizers, e.g. carbamazepine, valproate and lamotrigine, exhibit a characteristic pattern of action on ion fluxes.
  sourceId: reddit-pmid-11642654
- title: Source-specific finding from PMID 9829291
  description: 1. Kavapyrones have well-known psychotropic properties.
  sourceId: reddit-pmid-9829291
- title: Source-specific finding from PMID 9832350
  description: Kava-kava, a psychoactive beverage, induces relaxation, improves social interaction, promotes sleep and plays an important role in the sociocultural life in the islands of the South Pacific. On the other hand, standardized extracts of kava-kava roots are used for the therapy of anxiety, tension and restlessness.
  sourceId: reddit-pmid-9832350
- title: Source-specific finding from PMID 1332016
  description: Kava, an intoxicating beverage prepared from the pepper plant Piper methysticum, is widely consumed by the indigenous peoples in the islands of the South Pacific. As the first of a series of studies on the neuropharmacological interactions of kava with CNS receptors we tested purified pyrones and kava resin for activity on GABA and benzodiazepine binding sites in rat and mouse brain membranes.
  sourceId: reddit-pmid-1332016
- title: Source-specific finding from PMID 15181652
  description: The acute effects of the herbal anxiolytic Kava-kava (Piper methysticum G. Forster) on emotional reactivity and cognitive performance were investigated in a double-blind randomized placebo-controlled trial involving healthy volunteers.
  sourceId: reddit-pmid-15181652
- title: Source-specific finding from PMID 10653213
  description: Synthetic anxiolytic drugs are effective for treating anxiety, but they are burdened with adverse effects. Constraints on resources and time often render therapies such as psychologic interventions impracticable.
  sourceId: reddit-pmid-10653213
- title: Source-specific finding from PMID 20720265
  description: This review critically analyzes the clinical data of patients with suspected kava hepatotoxicity and suggests recommendations for minimizing risk. Kava is a plant (Piper methysticum) of the pepper family Piperaceae, and its rhizome is used for traditional aqueous extracts in the South Pacific Islands and for commercial ethanolic and acetonic medicinal products as anxiolytic herbs in Western countries.
  sourceId: reddit-pmid-20720265
```

## Claims

```yaml
- id: reddit-claim-kava-12225450-0
  assertion: "PMID 12225450 reports: RESULTS: The use of kava occurs among indigenous populations in the South Pacific and in northern Australia, while also being used throughout the western world as a herbal medicine. Animal studies show that kava lactones alter neuronal excitation through direct interactions with voltage-dependent ion channels, giving rise to kava's muscle relaxant, anaesthetic, anxiolytic and anticonvulsive properties. Several isolated cases of psychotic and severe dystonic reactions following kava use suggest that kava also has psychoactive properties, yet there is no conclusive evidence that kava interferes with normal cognitive processes.  CONCLUSIONS: Kava is effective in the treatment of tension and anx"
  relation: associated-with
  participants:
    - entityId: substance:kava
      role: intervention or exposure
    - entityId: tag:anxiety
      role: reported endpoint
  context: Publication abstract; direction and population are retained on the linked observation.
  sourceIds:
    - reddit-pmid-12225450
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Automated corpus import from an abstract; this record is not an independent meta-analysis.
- id: reddit-claim-kava-12225450-1
  assertion: "PMID 12225450 reports: RESULTS: The use of kava occurs among indigenous populations in the South Pacific and in northern Australia, while also being used throughout the western world as a herbal medicine. Animal studies show that kava lactones alter neuronal excitation through direct interactions with voltage-dependent ion channels, giving rise to kava's muscle relaxant, anaesthetic, anxiolytic and anticonvulsive properties. Several isolated cases of psychotic and severe dystonic reactions following kava use suggest that kava also has psychoactive properties, yet there is no conclusive evidence that kava interferes with normal cognitive processes.  CONCLUSIONS: Kava is effective in the treatment of tension and anx"
  relation: associated-with
  participants:
    - entityId: substance:kava
      role: intervention or exposure
    - entityId: tag:anxiety-symptom-severity
      role: reported endpoint
  context: Publication abstract; direction and population are retained on the linked observation.
  sourceIds:
    - reddit-pmid-12225450
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Automated corpus import from an abstract; this record is not an independent meta-analysis.
- id: reddit-claim-kava-11642654-2
  assertion: "PMID 11642654 reports: 1. Antiepileptic drugs that are successful as mood stabilizers, e.g. carbamazepine, valproate and lamotrigine, exhibit a characteristic pattern of action on ion fluxes."
  relation: associated-with
  participants:
    - entityId: substance:kava
      role: intervention or exposure
    - entityId: tag:anxiety
      role: reported endpoint
  context: Publication abstract; direction and population are retained on the linked observation.
  sourceIds:
    - reddit-pmid-11642654
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Automated corpus import from an abstract; this record is not an independent meta-analysis.
- id: reddit-claim-kava-11642654-3
  assertion: "PMID 11642654 reports: 1. Antiepileptic drugs that are successful as mood stabilizers, e.g. carbamazepine, valproate and lamotrigine, exhibit a characteristic pattern of action on ion fluxes."
  relation: associated-with
  participants:
    - entityId: substance:kava
      role: intervention or exposure
    - entityId: tag:sleep
      role: reported endpoint
  context: Publication abstract; direction and population are retained on the linked observation.
  sourceIds:
    - reddit-pmid-11642654
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Automated corpus import from an abstract; this record is not an independent meta-analysis.
- id: reddit-claim-kava-9829291-4
  assertion: "PMID 9829291 reports: 1. Kavapyrones have well-known psychotropic properties."
  relation: associated-with
  participants:
    - entityId: substance:kava
      role: intervention or exposure
    - entityId: tag:euphoria
      role: reported endpoint
  context: Publication abstract; direction and population are retained on the linked observation.
  sourceIds:
    - reddit-pmid-9829291
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Automated corpus import from an abstract; this record is not an independent meta-analysis.
- id: reddit-claim-kava-9829291-5
  assertion: "PMID 9829291 reports: 1. Kavapyrones have well-known psychotropic properties."
  relation: associated-with
  participants:
    - entityId: substance:kava
      role: intervention or exposure
    - entityId: tag:sleep
      role: reported endpoint
  context: Publication abstract; direction and population are retained on the linked observation.
  sourceIds:
    - reddit-pmid-9829291
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Automated corpus import from an abstract; this record is not an independent meta-analysis.
- id: reddit-claim-kava-9832350-6
  assertion: "PMID 9832350 reports: Kava-kava, a psychoactive beverage, induces relaxation, improves social interaction, promotes sleep and plays an important role in the sociocultural life in the islands of the South Pacific. On the other hand, standardized extracts of kava-kava roots are used for the therapy of anxiety, tension and restlessness."
  relation: associated-with
  participants:
    - entityId: substance:kava
      role: intervention or exposure
    - entityId: tag:anxiety
      role: reported endpoint
  context: Publication abstract; direction and population are retained on the linked observation.
  sourceIds:
    - reddit-pmid-9832350
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Automated corpus import from an abstract; this record is not an independent meta-analysis.
- id: reddit-claim-kava-9832350-7
  assertion: "PMID 9832350 reports: Kava-kava, a psychoactive beverage, induces relaxation, improves social interaction, promotes sleep and plays an important role in the sociocultural life in the islands of the South Pacific. On the other hand, standardized extracts of kava-kava roots are used for the therapy of anxiety, tension and restlessness."
  relation: associated-with
  participants:
    - entityId: substance:kava
      role: intervention or exposure
    - entityId: tag:anxiety-symptom-severity
      role: reported endpoint
  context: Publication abstract; direction and population are retained on the linked observation.
  sourceIds:
    - reddit-pmid-9832350
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Automated corpus import from an abstract; this record is not an independent meta-analysis.
- id: reddit-claim-kava-9434608-8
  assertion: "PMID 9434608 reports: Three kava pyrones, the natural compounds (+)-methysticine and (+)-kavain, and the synthetic racemate (+/-)-kavain, were tested concerning their action on in vitro uptake of monoamines in synaptosomes prepared from the cerebral cortex and hippocampus of rats. (+/-)-Kavain and (+)-kavain were found to potently inhibit the uptake of [3H]-noradrenaline. Uptake of [3H]-noradrenaline was inhibited in the following order of potency: (+/-)-kavain = (+)-kavain > (+)-methysticine, whereas none of the kava pyrones efficiently blocked the uptake of [3H]-serotonin."
  relation: associated-with
  participants:
    - entityId: substance:kava
      role: intervention or exposure
    - entityId: tag:anxiety
      role: reported endpoint
  context: Publication abstract; direction and population are retained on the linked observation.
  sourceIds:
    - reddit-pmid-9434608
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Automated corpus import from an abstract; this record is not an independent meta-analysis.
- id: reddit-claim-kava-9434608-9
  assertion: "PMID 9434608 reports: Three kava pyrones, the natural compounds (+)-methysticine and (+)-kavain, and the synthetic racemate (+/-)-kavain, were tested concerning their action on in vitro uptake of monoamines in synaptosomes prepared from the cerebral cortex and hippocampus of rats. (+/-)-Kavain and (+)-kavain were found to potently inhibit the uptake of [3H]-noradrenaline. Uptake of [3H]-noradrenaline was inhibited in the following order of potency: (+/-)-kavain = (+)-kavain > (+)-methysticine, whereas none of the kava pyrones efficiently blocked the uptake of [3H]-serotonin."
  relation: associated-with
  participants:
    - entityId: substance:kava
      role: intervention or exposure
    - entityId: tag:anxiety-symptom-severity
      role: reported endpoint
  context: Publication abstract; direction and population are retained on the linked observation.
  sourceIds:
    - reddit-pmid-9434608
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Automated corpus import from an abstract; this record is not an independent meta-analysis.
- id: reddit-claim-kava-1332016-10
  assertion: "PMID 1332016 reports: Kava, an intoxicating beverage prepared from the pepper plant Piper methysticum, is widely consumed by the indigenous peoples in the islands of the South Pacific. As the first of a series of studies on the neuropharmacological interactions of kava with CNS receptors we tested purified pyrones and kava resin for activity on GABA and benzodiazepine binding sites in rat and mouse brain membranes."
  relation: associated-with
  participants:
    - entityId: substance:kava
      role: intervention or exposure
    - entityId: tag:anxiety
      role: reported endpoint
  context: Publication abstract; direction and population are retained on the linked observation.
  sourceIds:
    - reddit-pmid-1332016
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Automated corpus import from an abstract; this record is not an independent meta-analysis.
- id: reddit-claim-kava-1332016-11
  assertion: "PMID 1332016 reports: Kava, an intoxicating beverage prepared from the pepper plant Piper methysticum, is widely consumed by the indigenous peoples in the islands of the South Pacific. As the first of a series of studies on the neuropharmacological interactions of kava with CNS receptors we tested purified pyrones and kava resin for activity on GABA and benzodiazepine binding sites in rat and mouse brain membranes."
  relation: associated-with
  participants:
    - entityId: substance:kava
      role: intervention or exposure
    - entityId: tag:anxiety-symptom-severity
      role: reported endpoint
  context: Publication abstract; direction and population are retained on the linked observation.
  sourceIds:
    - reddit-pmid-1332016
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Automated corpus import from an abstract; this record is not an independent meta-analysis.
- id: reddit-claim-kava-15181652-12
  assertion: "PMID 15181652 reports: The acute effects of the herbal anxiolytic Kava-kava (Piper methysticum G. Forster) on emotional reactivity and cognitive performance were investigated in a double-blind randomized placebo-controlled trial involving healthy volunteers."
  relation: associated-with
  participants:
    - entityId: substance:kava
      role: intervention or exposure
    - entityId: tag:anxiety
      role: reported endpoint
  context: Publication abstract; direction and population are retained on the linked observation.
  sourceIds:
    - reddit-pmid-15181652
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Automated corpus import from an abstract; this record is not an independent meta-analysis.
- id: reddit-claim-kava-15181652-13
  assertion: "PMID 15181652 reports: The acute effects of the herbal anxiolytic Kava-kava (Piper methysticum G. Forster) on emotional reactivity and cognitive performance were investigated in a double-blind randomized placebo-controlled trial involving healthy volunteers."
  relation: associated-with
  participants:
    - entityId: substance:kava
      role: intervention or exposure
    - entityId: tag:episodic-memory
      role: reported endpoint
  context: Publication abstract; direction and population are retained on the linked observation.
  sourceIds:
    - reddit-pmid-15181652
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Automated corpus import from an abstract; this record is not an independent meta-analysis.
- id: reddit-claim-kava-16818312-14
  assertion: "PMID 16818312 reports: Volunteer subjects were assigned to receive a mixture of the intoxicating substance, kava, in a mixture with fruit juice, or juice alone. Subjects then undertook tasks of acute cognitive functioning, including reaction time and tracking tasks, and a measure of body sway."
  relation: associated-with
  participants:
    - entityId: substance:kava
      role: intervention or exposure
    - entityId: tag:anxiety
      role: reported endpoint
  context: Publication abstract; direction and population are retained on the linked observation.
  sourceIds:
    - reddit-pmid-16818312
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Automated corpus import from an abstract; this record is not an independent meta-analysis.
- id: reddit-claim-kava-16818312-15
  assertion: "PMID 16818312 reports: Volunteer subjects were assigned to receive a mixture of the intoxicating substance, kava, in a mixture with fruit juice, or juice alone. Subjects then undertook tasks of acute cognitive functioning, including reaction time and tracking tasks, and a measure of body sway."
  relation: associated-with
  participants:
    - entityId: substance:kava
      role: intervention or exposure
    - entityId: tag:cognitive-performance
      role: reported endpoint
  context: Publication abstract; direction and population are retained on the linked observation.
  sourceIds:
    - reddit-pmid-16818312
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Automated corpus import from an abstract; this record is not an independent meta-analysis.
- id: reddit-claim-kava-10653213-16
  assertion: "PMID 10653213 reports: Synthetic anxiolytic drugs are effective for treating anxiety, but they are burdened with adverse effects. Constraints on resources and time often render therapies such as psychologic interventions impracticable."
  relation: associated-with
  participants:
    - entityId: substance:kava
      role: intervention or exposure
    - entityId: tag:anxiety
      role: reported endpoint
  context: Publication abstract; direction and population are retained on the linked observation.
  sourceIds:
    - reddit-pmid-10653213
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Automated corpus import from an abstract; this record is not an independent meta-analysis.
- id: reddit-claim-kava-10653213-17
  assertion: "PMID 10653213 reports: Synthetic anxiolytic drugs are effective for treating anxiety, but they are burdened with adverse effects. Constraints on resources and time often render therapies such as psychologic interventions impracticable."
  relation: associated-with
  participants:
    - entityId: substance:kava
      role: intervention or exposure
    - entityId: tag:anxiety-symptom-severity
      role: reported endpoint
  context: Publication abstract; direction and population are retained on the linked observation.
  sourceIds:
    - reddit-pmid-10653213
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Automated corpus import from an abstract; this record is not an independent meta-analysis.
- id: reddit-claim-kava-11544547-18
  assertion: "PMID 11544547 reports: HISTORY AND CLINICAL FINDINGS: A 60 year-old woman was admitted to hospital because of jaundice, fatigue, weight loss over several months and icteric skin. Because of progressive liver failure, concomitant renal failure and progressive encephalopathy she was transferred to an intensive care unit."
  relation: associated-with
  participants:
    - entityId: substance:kava
      role: intervention or exposure
    - entityId: tag:anxiety
      role: reported endpoint
  context: Publication abstract; direction and population are retained on the linked observation.
  sourceIds:
    - reddit-pmid-11544547
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Automated corpus import from an abstract; this record is not an independent meta-analysis.
- id: reddit-claim-kava-11544547-19
  assertion: "PMID 11544547 reports: HISTORY AND CLINICAL FINDINGS: A 60 year-old woman was admitted to hospital because of jaundice, fatigue, weight loss over several months and icteric skin. Because of progressive liver failure, concomitant renal failure and progressive encephalopathy she was transferred to an intensive care unit."
  relation: associated-with
  participants:
    - entityId: substance:kava
      role: intervention or exposure
    - entityId: tag:fatigue-severity
      role: reported endpoint
  context: Publication abstract; direction and population are retained on the linked observation.
  sourceIds:
    - reddit-pmid-11544547
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Automated corpus import from an abstract; this record is not an independent meta-analysis.
- id: reddit-claim-kava-20720265-20
  assertion: "PMID 20720265 reports: This review critically analyzes the clinical data of patients with suspected kava hepatotoxicity and suggests recommendations for minimizing risk. Kava is a plant (Piper methysticum) of the pepper family Piperaceae, and its rhizome is used for traditional aqueous extracts in the South Pacific Islands and for commercial ethanolic and acetonic medicinal products as anxiolytic herbs in Western countries."
  relation: associated-with
  participants:
    - entityId: substance:kava
      role: intervention or exposure
    - entityId: tag:anxiety
      role: reported endpoint
  context: Publication abstract; direction and population are retained on the linked observation.
  sourceIds:
    - reddit-pmid-20720265
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Automated corpus import from an abstract; this record is not an independent meta-analysis.
- id: reddit-claim-kava-20720265-21
  assertion: "PMID 20720265 reports: This review critically analyzes the clinical data of patients with suspected kava hepatotoxicity and suggests recommendations for minimizing risk. Kava is a plant (Piper methysticum) of the pepper family Piperaceae, and its rhizome is used for traditional aqueous extracts in the South Pacific Islands and for commercial ethanolic and acetonic medicinal products as anxiolytic herbs in Western countries."
  relation: associated-with
  participants:
    - entityId: substance:kava
      role: intervention or exposure
    - entityId: tag:fatigue-severity
      role: reported endpoint
  context: Publication abstract; direction and population are retained on the linked observation.
  sourceIds:
    - reddit-pmid-20720265
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Automated corpus import from an abstract; this record is not an independent meta-analysis.
- id: reddit-claim-kava-12589393-22
  assertion: "PMID 12589393 reports: Kava is an extract from the Piper methysticum Forst. f. plant that has been consumed in the Pacific islands for millennia and more recently, among indigenous populations, in northern Australia and throughout the Western world as an herbal medicine. Through alterations on neuronal excitation, kava induces muscle relaxation, anasthesia, and has anxiolytic properties."
  relation: associated-with
  participants:
    - entityId: substance:kava
      role: intervention or exposure
    - entityId: tag:anxiety
      role: reported endpoint
  context: Publication abstract; direction and population are retained on the linked observation.
  sourceIds:
    - reddit-pmid-12589393
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Automated corpus import from an abstract; this record is not an independent meta-analysis.
- id: reddit-claim-kava-12589393-23
  assertion: "PMID 12589393 reports: Kava is an extract from the Piper methysticum Forst. f. plant that has been consumed in the Pacific islands for millennia and more recently, among indigenous populations, in northern Australia and throughout the Western world as an herbal medicine. Through alterations on neuronal excitation, kava induces muscle relaxation, anasthesia, and has anxiolytic properties."
  relation: associated-with
  participants:
    - entityId: substance:kava
      role: intervention or exposure
    - entityId: tag:cognitive-performance
      role: reported endpoint
  context: Publication abstract; direction and population are retained on the linked observation.
  sourceIds:
    - reddit-pmid-12589393
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Automated corpus import from an abstract; this record is not an independent meta-analysis.
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
- id: optihealth-substance-01a08b04-2f5a-773f-9ee6-5ecbe8f534cd
  title: OptiHealth canonical substance identity snapshot
  authors: OptiHealth catalog
  year: 2026
  url: https://optihealth.devpins.org/substance-identity/01a08b04-2f5a-773f-9ee6-5ecbe8f534cd
  kind: catalog-identity
  insight: The OptiHealth canonical catalog records this substance identity label.
  limitation: This catalog snapshot is not an independent evidence review and does not establish structure, dose, safety, or efficacy.
- id: reddit-pmid-12225450
  title: The neurobehavioural effects of kava.
  authors: Sheree Cairney, Paul Maruff, Alan R Clough
  year: 2002
  url: https://pubmed.ncbi.nlm.nih.gov/12225450/
  kind: PubMed publication
  insight: "RESULTS: The use of kava occurs among indigenous populations in the South Pacific and in northern Australia, while also being used throughout the western world as a herbal medicine. Animal studies show that kava lactones alter neuronal excitation through direct interactions with voltage-dependent ion channels, giving rise to kava's muscle relaxant, anaesthetic, anxiolytic and anticonvulsive properties. Several isolated cases of psychotic and severe dystonic reactions following kava use suggest that kava also has psychoactive properties, yet there is no conclusive evidence that kava interferes with normal cognitive processes.  CONCLUSIONS: Kava is effective in the treatment of tension and anx"
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: "12225450"
  doi: 10.1046/j.1440-1614.2002.01027.x
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-11642654
  title: Kava pyrones exert effects on neuronal transmission and transmembraneous cation currents similar to established mood stabilizers--a review.
  authors: H Grunze, J Langosch, K Schirrmacher, D Bingmann, J Von Wegerer, J Walden
  year: 2001
  url: https://pubmed.ncbi.nlm.nih.gov/11642654/
  kind: PubMed publication
  insight: 1. Antiepileptic drugs that are successful as mood stabilizers, e.g. carbamazepine, valproate and lamotrigine, exhibit a characteristic pattern of action on ion fluxes.
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: "11642654"
  doi: 10.1016/s0278-5846(01)00208-1
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-9829291
  title: Effect of kava extract and individual kavapyrones on neurotransmitter levels in the nucleus accumbens of rats.
  authors: S S Baum, R Hill, H Rommelspacher
  year: 1998
  url: https://pubmed.ncbi.nlm.nih.gov/9829291/
  kind: PubMed publication
  insight: 1. Kavapyrones have well-known psychotropic properties.
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: "9829291"
  doi: 10.1016/s0278-5846(98)00062-1
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-9832350
  title: Inhibition of platelet MAO-B by kava pyrone-enriched extract from Piper methysticum Forster (kava-kava).
  authors: R Uebelhack, L Franke, H J Schewe
  year: 1998
  url: https://pubmed.ncbi.nlm.nih.gov/9832350/
  kind: PubMed publication
  insight: Kava-kava, a psychoactive beverage, induces relaxation, improves social interaction, promotes sleep and plays an important role in the sociocultural life in the islands of the South Pacific. On the other hand, standardized extracts of kava-kava roots are used for the therapy of anxiety, tension and restlessness.
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: "9832350"
  doi: 10.1055/s-2007-979325
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-9434608
  title: "[3H]-monoamine uptake inhibition properties of kava pyrones."
  authors: U Seitz, A Schüle, J Gleitz
  year: 1997
  url: https://pubmed.ncbi.nlm.nih.gov/9434608/
  kind: PubMed publication
  insight: "Three kava pyrones, the natural compounds (+)-methysticine and (+)-kavain, and the synthetic racemate (+/-)-kavain, were tested concerning their action on in vitro uptake of monoamines in synaptosomes prepared from the cerebral cortex and hippocampus of rats. (+/-)-Kavain and (+)-kavain were found to potently inhibit the uptake of [3H]-noradrenaline. Uptake of [3H]-noradrenaline was inhibited in the following order of potency: (+/-)-kavain = (+)-kavain > (+)-methysticine, whereas none of the kava pyrones efficiently blocked the uptake of [3H]-serotonin."
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: "9434608"
  doi: 10.1055/s-2006-957761
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-1332016
  title: "Kava pyrones and resin: studies on GABAA, GABAB and benzodiazepine binding sites in rodent brain."
  authors: L P Davies, C A Drew, P Duffield, G A Johnston, D D Jamieson
  year: 1992
  url: https://pubmed.ncbi.nlm.nih.gov/1332016/
  kind: PubMed publication
  insight: Kava, an intoxicating beverage prepared from the pepper plant Piper methysticum, is widely consumed by the indigenous peoples in the islands of the South Pacific. As the first of a series of studies on the neuropharmacological interactions of kava with CNS receptors we tested purified pyrones and kava resin for activity on GABA and benzodiazepine binding sites in rat and mouse brain membranes.
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: "1332016"
  doi: 10.1111/j.1600-0773.1992.tb00530.x
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-15181652
  title: Enhanced cognitive performance and cheerful mood by standardized extracts of Piper methysticum (Kava-kava).
  authors: Richard Thompson, Willibald Ruch, Rüdiger U Hasenöhrl
  year: 2004
  url: https://pubmed.ncbi.nlm.nih.gov/15181652/
  kind: PubMed publication
  insight: The acute effects of the herbal anxiolytic Kava-kava (Piper methysticum G. Forster) on emotional reactivity and cognitive performance were investigated in a double-blind randomized placebo-controlled trial involving healthy volunteers.
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: "15181652"
  doi: 10.1002/hup.581
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-link-d996202109fc
  title: Effect of an acute dose of crude kava root extract on problem solving in healthy young adults
  authors: Not established
  year: 2026
  url: https://connection.ebscohost.com/c/articles/69991367/effect-acute-dose-crude-kava-root-extract-problem-solving-healthy-young-adults
  kind: Reddit index publication link
  insight: The Reddit index links this publication; bibliographic metadata was not returned by the PubMed batch.
  limitation: Full text, publication metadata, funding, and conflicts were not independently verified in this corpus pass.
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-16818312
  title: Acute effects of kava on measures of cognitive performance, physiological function and mood.
  authors: J Prescott, D Jamieson, N Emdur, P Duffield
  year: 1993
  url: https://pubmed.ncbi.nlm.nih.gov/16818312/
  kind: PubMed publication
  insight: Volunteer subjects were assigned to receive a mixture of the intoxicating substance, kava, in a mixture with fruit juice, or juice alone. Subjects then undertook tasks of acute cognitive functioning, including reaction time and tracking tasks, and a measure of body sway.
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: "16818312"
  doi: 10.1080/09595239300185731
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-10653213
  title: "Efficacy of kava extract for treating anxiety: systematic review and meta-analysis."
  authors: M H Pittler, E Ernst
  year: 2000
  url: https://pubmed.ncbi.nlm.nih.gov/10653213/
  kind: PubMed publication
  insight: Synthetic anxiolytic drugs are effective for treating anxiety, but they are burdened with adverse effects. Constraints on resources and time often render therapies such as psychologic interventions impracticable.
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: "10653213"
  doi: 10.1097/00004714-200002000-00014
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-11544547
  title: "[Fulminant liver failure after administration of the herbal antidepressant Kava-Kava]."
  authors: M Kraft, T W Spahn, J Menzel, N Senninger, K H Dietl, H Herbst, W Domschke, M M Lerch
  year: 2001
  url: https://pubmed.ncbi.nlm.nih.gov/11544547/
  kind: PubMed publication
  insight: "HISTORY AND CLINICAL FINDINGS: A 60 year-old woman was admitted to hospital because of jaundice, fatigue, weight loss over several months and icteric skin. Because of progressive liver failure, concomitant renal failure and progressive encephalopathy she was transferred to an intensive care unit."
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: "11544547"
  doi: 10.1055/s-2001-16966
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-20720265
  title: Kava hepatotoxicity--a clinical review.
  authors: Rolf Teschke
  year: 2010
  url: https://pubmed.ncbi.nlm.nih.gov/20720265/
  kind: PubMed publication
  insight: This review critically analyzes the clinical data of patients with suspected kava hepatotoxicity and suggests recommendations for minimizing risk. Kava is a plant (Piper methysticum) of the pepper family Piperaceae, and its rhizome is used for traditional aqueous extracts in the South Pacific Islands and for commercial ethanolic and acetonic medicinal products as anxiolytic herbs in Western countries.
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: "20720265"
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
- id: reddit-pmid-12589393
  title: Saccade and cognitive function in chronic kava users.
  authors: Sheree Cairney, Alan R Clough, Paul Maruff, Alex Collie, Bart J Currie, Jon Currie
  year: 2003
  url: https://pubmed.ncbi.nlm.nih.gov/12589393/
  kind: PubMed publication
  insight: Kava is an extract from the Piper methysticum Forst. f. plant that has been consumed in the Pacific islands for millennia and more recently, among indigenous populations, in northern Australia and throughout the Western world as an herbal medicine. Through alterations on neuronal excitation, kava induces muscle relaxation, anasthesia, and has anxiolytic properties.
  limitation: Imported from the PubMed abstract; full-text methods and disclosures were not inspected in this corpus pass.
  pmid: "12589393"
  doi: 10.1038/sj.npp.1300052
  funding: Not assessed in this corpus pass.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed in this corpus pass.
  conflictOfInterestStatus: not-assessed
```

## Legal

```yaml
[]
```

## External wiki links

```yaml
- service: Wikipedia
  url: https://en.wikipedia.org/wiki/Kava
  title: Wikipedia
- service: Examine
  url: https://examine.com/supplements/Kava
  title: Examine
```

