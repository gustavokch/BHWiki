---
slug: dextromethorphan
name: Dextromethorphan
subtitle: OTC antitussive with CYP2D6-sensitive dissociative pharmacology
aliases:
  - DXM
  - DM
formula: C18H25NO
molecularWeight: 271.40 g/mol
pubchemCid: 5360696
smiles: CN1CC[C@@]23CCCC[C@@H]2[C@@H]1CC4=C3C=C(C=C4)OC
category: Dissociative
tags:
  - dissociative
  - nmda-receptor
  - serotonin
accent: "#808080"
reviewedAt: 2026-10-16
editorialStatus: sourced-draft
halfLife:
  label: Strongly CYP2D6-dependent; median 2.4 h in extensive and 19.1 h in poor metabolizers in one small study
  low: 2.4
  high: 19.1
  context: Capon et al. studied six CYP2D6 extensive and six poor metabolizers after 30 mg oral dextromethorphan; the values are phenotype-specific medians, not a universal population range.
  sourceId: capon1996
  observationId: dxm-half-life-cyp2d6
kinetics:
  onset: No universal onset value was established across the primary sources used.
  peak: No universal Tmax or subjective peak value was established across the primary sources used.
  duration: Duration varies with dose, formulation and CYP2D6 status; the high-dose study observed participants for 6 h, not as a therapeutic-duration estimate.
  bioavailability: Absolute oral bioavailability was not established in the primary sources used.
  metabolism: CYP2D6 O-demethylation forms dextrorphan; phenotype or inhibition can shift exposure strongly toward parent dextromethorphan. Measured metabolites also include 3-hydroxymorphinan and 3-methoxymorphinan.
  sourceId: schadel1995
x-shape:
  - slug
  - name
  - subtitle
  - summary
  - description
  - evidenceNote
  - aliases
  - formula
  - molecularWeight
  - pubchemCid
  - smiles
  - category
  - tags
  - accent
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
x-order: 407
---

## Summary

Dextromethorphan is a U.S. over-the-counter oral antitussive ingredient for temporary suppression of cough from minor throat or bronchial irritation. Human pharmacokinetic studies show unusually large exposure differences because CYP2D6 converts dextromethorphan to dextrorphan: poor metabolizers and CYP2D6 inhibition retain much more parent drug and form less dextrorphan. Controlled supratherapeutic dosing produces dose-related perceptual, dissociative/hallucinogen-like, autonomic and emetic effects. Clinical evidence for cough is endpoint-dependent rather than uniformly positive, and a randomized off-label pain trial was null. Serotonin toxicity has been reported with supratherapeutic dextromethorphan plus SSRIs, while chronic very-high-dose use has produced dependence and withdrawal in case reports. A controlled observational pregnancy study found no excess of major malformations, but its size cannot exclude uncommon risks.

## Description

The chemical identity here is parent dextromethorphan, C18H25NO; marketed cough products commonly use dextromethorphan hydrobromide and dose it in hydrobromide-equivalent milligrams. Dextrorphan is a distinct CYP2D6-generated metabolite and is not treated as interchangeable evidence. FDA OTC Monograph M012 lists dextromethorphan and dextromethorphan hydrobromide as oral antitussive active ingredients, while the current single-ingredient DailyMed softgel label describes temporary cough relief from minor throat and bronchial irritation associated with a cold.

The OTC cough indication is separated here from off-label and nonmedical claims. Analgesic efficacy was tested directly in a randomized medication-abortion study and was not demonstrated. Controlled high-dose findings establish altered perception and subjective state, not a therapeutic psychiatric indication. Combination-product evidence is not transferred to dextromethorphan monotherapy.

## Evidence note

Direct evidence includes small human CYP2D6 pharmacokinetic experiments, a randomized crossover cough study, a 12-participant controlled supratherapeutic study, a 156-participant randomized off-label pain trial, a 184-exposure pregnancy cohort, and clinical case reports. Experimental cough challenge, subjective cough burden, cough frequency, psychoactive ratings and pain are not pooled. Several older primary papers lack accessible PMC full text; funding and conflict fields therefore retain PubMed-level information or are marked not reported. Combination-product efficacy evidence was excluded.

## Doses

```yaml
- label: U.S. OTC monograph adult antitussive dosing
  amount: 10–20 mg every 4 hours or 30 mg every 6–8 hours; maximum 120 mg in 24 hours
  quantity: null
  quantityMax: 120
  unit: mg
  ingredient: Dextromethorphan hydrobromide-equivalent
  formulation: Oral monograph-conforming product
  route: oral
  frequency: Every 4 hours or every 6–8 hours, depending on dose
  duration: Short-term symptomatic OTC use
  population: Adults and children 12 years and older
  purpose: Temporary suppression of cough due to minor throat or bronchial irritation
  sourceCategory: reference
  foodRelation: food-effect-not-established
  solubility: formulation-dependent
  absorptionNote: The monograph specifies dose equivalence to dextromethorphan hydrobromide.
  note: Individual marketed products can use narrower age labeling.
  sourceId: fdaM012
- label: Current single-ingredient 15 mg softgel label
  amount: 30 mg
  quantity: 30
  quantityMax: 30
  unit: mg
  ingredient: Dextromethorphan HBr
  formulation: 15 mg soft gelatin capsules
  route: oral
  frequency: Every 6–8 hours as needed; maximum 120 mg in 24 hours
  duration: Short-term symptomatic OTC use
  population: Adults and children 12 years and older
  purpose: Temporary relief of cough associated with minor throat and bronchial irritation from a cold
  sourceCategory: reference
  note: Two 15 mg capsules per dose; this product is not intended for children under 12.
  sourceId: dailyMed2026
- label: CYP2D6 pharmacokinetic probe exposure
  amount: 30 mg single oral dose
  quantity: 30
  quantityMax: 30
  unit: mg
  ingredient: Dextromethorphan
  formulation: Research oral dose
  route: oral
  frequency: single dose
  duration: single administration
  population: CYP2D6 extensive and poor metabolizers
  purpose: Pharmacokinetic and experimental antitussive study
  sourceCategory: research
  note: Research exposure, not a dosing recommendation.
  sourceId: capon1996
- label: Controlled supratherapeutic laboratory exposures
  amount: 100–800 mg/70 kg as separate single sessions
  quantity: 100
  quantityMax: 800
  unit: mg/70 kg
  ingredient: Dextromethorphan
  formulation: Research oral dose
  route: oral
  frequency: single dose per session in an ascending run-up design
  duration: 6-hour acute assessment
  population: 12 healthy volunteers with histories of hallucinogen use
  purpose: Characterization of supratherapeutic subjective, behavioral and physiological effects
  sourceCategory: research
  note: Supratherapeutic research exposures; not therapeutic dosing.
  sourceId: reissig2012
- label: Off-label medication-abortion pain trial
  amount: 60 mg loading dose, then 30 mg at 2 and 5 hours after misoprostol
  quantity: 60
  quantityMax: 120
  unit: mg
  ingredient: Dextromethorphan
  formulation: Oral research regimen
  route: oral
  frequency: Three doses over 5 hours
  duration: single treatment episode
  population: 156 randomized medication-abortion participants
  purpose: Adjunctive analgesia research
  sourceCategory: research
  note: The trial did not show reduced worst pain or analgesic use versus placebo.
  sourceId: ferguson2023
- label: Threshold dose
  amount: 75 mg
  quantity: 75
  quantityMax: null
  unit: mg
  ingredient: Dextromethorphan
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
  amount: 100–200 mg
  quantity: 100
  quantityMax: 200
  unit: mg
  ingredient: Dextromethorphan
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
  amount: 200–400 mg
  quantity: 200
  quantityMax: 400
  unit: mg
  ingredient: Dextromethorphan
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
  amount: 400–700 mg
  quantity: 400
  quantityMax: 700
  unit: mg
  ingredient: Dextromethorphan
  formulation: Not established
  route: Oral
  frequency: Not established
  duration: Not established
  population: Not established
  purpose: PsychonautWiki dosage classification
  sourceCategory: community
  note: Band from the PsychonautWiki API snapshot built about 2026-06-23.
  sourceId: psychonautwiki
- label: Heavy dose band (700 mg and above)
  amount: 700 mg and above
  quantity: 700
  quantityMax: null
  unit: mg
  ingredient: Dextromethorphan
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
- id: dxm-half-life-cyp2d6
  analyte: Dextromethorphan
  route: oral
  formulation: 30 mg research dose
  population: Six CYP2D6 extensive and six poor metabolizers
  endpoint: elimination-half-life
  statistic: reported-range
  value: null
  low: 2.4
  high: 19.1
  unit: hours
  context: Capon et al. reported median half-lives of 2.4 h in extensive metabolizers and 19.1 h in poor metabolizers; quinidine-treated extensive metabolizers had a median of 5.6 h.
  sourceId: capon1996
  modelEligible: false
- id: dextrorphan-half-life-cyp2d6
  analyte: Dextrorphan
  route: oral
  formulation: 30 mg dextromethorphan research dose
  population: Six CYP2D6 extensive and six poor metabolizers
  endpoint: elimination-half-life
  statistic: reported-range
  value: null
  low: 1.4
  high: 10.1
  unit: hours
  context: Median dextrorphan half-life was 1.4 h in extensive metabolizers, 10.1 h in poor metabolizers and 6.6 h after quinidine in extensive metabolizers.
  sourceId: capon1996
  modelEligible: false
- id: dxm-pregnancy-half-life
  analyte: Dextromethorphan
  route: oral
  formulation: 30 mg research dose
  population: Pregnant CYP2D6 activity-score 1–2 participants studied during pregnancy and postpartum
  endpoint: elimination-half-life
  statistic: not-established
  value: null
  low: null
  high: null
  unit: hours
  context: Amaeze et al. measured metabolite/parent ratios rather than elimination half-life; a pregnancy-specific half-life cannot be inferred from that study.
  sourceId: amaeze2023
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
    min: 8
    max: 12
    unit: hours
  phases:
    - name: onset
      basis: elapsed-since-exposure
      min: 30
      max: 120
      unit: minutes
    - name: comeup
      basis: phase-duration
      min: 60
      max: 120
      unit: minutes
    - name: peak
      basis: phase-duration
      min: 3
      max: 6
      unit: hours
    - name: offset
      basis: phase-duration
      min: 2
      max: 4
      unit: hours
    - name: after-effects
      basis: phase-duration
      min: 4
      max: 24
      unit: hours
```

## Modifiers

```yaml
- label: CYP2D6 metabolizer phenotype
  effect: Markedly changes parent and metabolite exposure
  detail: After 30 mg, dextromethorphan AUC was about 150-fold greater in poor than extensive metabolizers, while total dextrorphan AUC was about 8.6-fold lower in poor metabolizers.
  sourceId: capon1996
  observationId: dxm-half-life-cyp2d6
  factorType: genotype
  direction: variable
- label: CYP2D6 inhibition by quinidine
  effect: Raises dextromethorphan exposure and slows apparent elimination
  detail: In extensive metabolizers, 50 mg quinidine increased dextromethorphan AUC about 43-fold and changed median parent half-life from 2.4 to 5.6 h.
  sourceId: capon1996
  observationId: dxm-half-life-cyp2d6
  factorType: enzyme
  direction: slower
- label: Pregnancy
  effect: Higher CYP2D6 and CYP3A probe activity during pregnancy than postpartum
  detail: Among 47 completing CYP2D6 activity-score 1–2 participants, the urinary dextrorphan/dextromethorphan ratio was 43% higher and the urinary 3-hydroxymorphinan/dextromethorphan ratio 92% higher during pregnancy than postpartum.
  sourceId: amaeze2023
  observationId: dxm-pregnancy-half-life
  factorType: pregnancy
  direction: faster
```

## Effects

```yaml
- id: dxm-dissociation
  conceptId: dissociation
  name: Dose-related dissociative and hallucinogen-like subjective effects
  direction: Increased
  evidence: Human research
  reportType: measured-assessment
  description: In a controlled ascending-dose study, supratherapeutic dextromethorphan increased observer-rated distance from reality and visual effects and participant-rated perceptual change, stimulation, tingling, headache, drug liking and mystical-type experience; joy and anxiety were also observed.
  sourceId: reissig2012
  population: 12 healthy volunteers with histories of hallucinogen use
  exposure: Single oral doses from 100 to 800 mg/70 kg
  instrument: Repeated participant questionnaires, observer ratings and pharmacological-class ratings
  magnitude: Dose-related; after 400 mg/70 kg, 11 of 12 participants classified the experience as resembling a classic hallucinogen.
```

## Outcomes

```yaml
- id: dxm-cough-reflex
  conceptId: cough-reflex-sensitivity
  name: Citric-acid cough reflex sensitivity
  direction: Decreased
  evidence: Human research
  reportType: measured-assessment
  description: In a randomized double-blind crossover study of smoking-related cough, 22 mg dextromethorphan significantly increased the citric-acid concentration required to elicit the C2 cough endpoint versus placebo at 1 and 2 hours.
  sourceId: ramsay2008
  population: Adults with smoking-related cough
  exposure: 22 mg pregastric dextromethorphan
  instrument: Citric-acid dose-response cough challenge
  magnitude: Statistically significant active-versus-placebo difference at 1 and 2 hours.
- id: dxm-clinical-cough-null
  conceptId: cough-frequency
  name: Subjective cough burden and recorded cough
  direction: Variable
  evidence: Human research
  reportType: measured-assessment
  description: The same crossover study found no significant active-versus-placebo difference in subjective cough measures, and cough-reflex sensitivity did not correlate with recorded cough counts or symptoms.
  sourceId: ramsay2008
  population: Adults with smoking-related cough
  exposure: 22 mg pregastric dextromethorphan
  instrument: Daily symptom diary, Leicester questionnaire and manual cough counter
  magnitude: Null active-versus-placebo difference for subjective measures despite improvement from baseline in both groups.
- id: dxm-capsaicin-null
  conceptId: cough-frequency
  name: Capsaicin-provoked cough frequency
  direction: Variable
  evidence: Human research
  reportType: measured-assessment
  description: Capon et al. found no antitussive effect of 30 mg dextromethorphan in their capsaicin cough model and cautioned that this experimental model might be unsuitable for detecting the clinical effect.
  sourceId: capon1996
  population: Six CYP2D6 extensive and six poor metabolizers
  exposure: 30 mg oral dextromethorphan
  instrument: Capsaicin-provoked cough frequency
  magnitude: No significant antitussive effect reported.
- id: dxm-abortion-pain-null
  conceptId: pain
  name: Medication-abortion pain and rescue analgesic use
  direction: Variable
  evidence: Human research
  reportType: measured-assessment
  description: Adjunctive dextromethorphan did not reduce worst pain or use of ibuprofen, acetaminophen or opioids versus placebo; satisfaction with pain control was lower in the dextromethorphan group.
  sourceId: ferguson2023
  population: 156 randomized medication-abortion participants
  exposure: 60 mg then 30 mg at 2 and 5 hours
  instrument: Repeated pain scores, medication-use reporting and satisfaction
  magnitude: Worst pain 8.0 vs 7.0, p=0.06; satisfaction 75% vs 91%, p=0.02.
- id: dxm-pregnancy-malformations
  conceptId: pregnancy-outcomes
  name: Major malformations after pregnancy exposure
  direction: Variable
  evidence: Limited research
  reportType: measured-assessment
  description: Among 128 first-trimester exposures in a controlled observational cohort, major malformations occurred in 2.3% versus 2.8% in matched controls; the study did not detect an increased overall rate.
  sourceId: einarson2001
  population: Pregnant women counseled by the Motherisk Program and matched controls
  exposure: Dextromethorphan use during pregnancy
  instrument: Prospective pregnancy follow-up
  magnitude: 3 major malformations among first-trimester exposed live births versus 5 in controls; cohort size limits rare-risk inference.
```

## Mechanisms

```yaml
- title: CYP2D6 O-demethylation to dextrorphan
  description: Human pharmacokinetic studies directly show CYP2D6-dependent formation of dextrorphan. In poor metabolizers, parent dextromethorphan dominates plasma exposure and dextrorphan formation is much lower; quinidine phenocopies reduced CYP2D6 activity.
  sourceId: schadel1995
- title: NMDA-receptor channel antagonism
  description: In guinea-pig neocortical slices, dextrorphan at 1–250 micromolar and dextromethorphan at 100 micromolar blocked NMDA-linked epileptiform activity; intracellular experiments found blockade of NMDA-induced depolarization without altering intrinsic membrane properties. This is preclinical mechanism evidence, not a clinical efficacy result.
  sourceId: wong1988
  conceptId: nmda-receptor
- title: Sigma-1 receptor binding
  description: A comparative receptor-binding study reported sigma-1 Ki values of 205 nM for dextromethorphan and 144 nM for dextrorphan, while dextrorphan had greater affinity than dextromethorphan at PCP/NMDA-channel sites. The assay does not establish which target mediates therapeutic cough suppression or human subjective effects.
  sourceId: chou1999
```

## Cautions

```yaml
- title: Serotonin toxicity with serotonergic co-exposure
  description: Two published cases met a serotonin-syndrome diagnosis with very high measured dextromethorphan concentrations plus therapeutic SSRI concentrations. One case also had markedly elevated chlorpheniramine, so the case series cannot define a dextromethorphan-only threshold or incidence.
  sourceId: schwartz2008
- title: Abuse, dependence and withdrawal
  description: A case report documents six years of escalation to 1,800 mg/day with functional neglect and withdrawal including craving, diaphoresis, nausea, hypertension and tachycardia. A single case establishes possibility, not prevalence.
  sourceId: mutschler2010
- title: Supratherapeutic acute effects
  description: Controlled high-dose administration produced dose-related increases in blood pressure, heart rate and emesis alongside perceptual and behavioral effects. The sample was small and selected for prior hallucinogen experience.
  sourceId: reissig2012
- title: Pregnancy evidence is reassuring but limited
  description: The Motherisk cohort did not find a higher overall major-malformation rate, but 128 first-trimester exposures cannot exclude uncommon defects or dose-specific risks.
  sourceId: einarson2001
- title: Current OTC pregnancy and breastfeeding precaution
  description: The current single-ingredient U.S. OTC label includes a pregnancy/breastfeeding precaution rather than an assertion of established safety.
  sourceId: dailyMed2026
```

## Claims

```yaml
- id: dxm-claim-cough-efficacy
  assertion: Dextromethorphan consistently improves clinically important cough outcomes
  relation: efficacy-claim
  participants:
    - entityId: substance:dextromethorphan
      role: intervention
    - entityId: tag:cough-frequency
      role: outcome
  context: The regulatory indication is temporary cough suppression, but Ramsay et al. found reduced experimental cough-reflex sensitivity without placebo-separated subjective benefit, while Capon et al. found no effect in a capsaicin model.
  sourceIds:
    - fdaM012
    - ramsay2008
  conflictingSourceIds:
    - capon1996
  assessment: not-formally-assessed
  limitation: Experimental cough challenge, spontaneous cough frequency and patient-reported symptoms are not interchangeable endpoints.
- id: dxm-claim-analgesia
  assertion: Dextromethorphan improves medication-abortion pain when added to usual analgesics
  relation: off-label-efficacy-claim
  participants:
    - entityId: substance:dextromethorphan
      role: adjunct
    - entityId: tag:pain
      role: outcome
  context: A 156-participant randomized double-blind placebo-controlled trial found no significant reduction in worst pain or analgesic consumption.
  sourceIds:
    - ferguson2023
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: This null result is specific to medication abortion, the tested regimen and background analgesia; it does not test every pain condition.
- id: dxm-claim-dissociation
  assertion: Supratherapeutic dextromethorphan can produce marked dissociative and hallucinogen-like subjective effects
  relation: acute-subjective-effect
  participants:
    - entityId: substance:dextromethorphan
      role: exposure
    - entityId: tag:dissociation
      role: effect
  context: A controlled 12-person ascending-dose study demonstrated dose-related perceptual and distance-from-reality effects from 100–800 mg/70 kg.
  sourceIds:
    - reissig2012
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Participants had prior hallucinogen experience, the sample was small and doses were supratherapeutic.
- id: dxm-claim-pregnancy
  assertion: Dextromethorphan has been proven free of teratogenic risk in pregnancy
  relation: safety-claim
  participants:
    - entityId: substance:dextromethorphan
      role: exposure
    - entityId: tag:pregnancy-outcomes
      role: outcome
  context: The controlled observational cohort found no overall excess of major malformations, but the study was not large enough to establish absence of rare risk.
  sourceIds:
    - einarson2001
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: Observational design, modest sample size and limited power for specific uncommon defects prevent a no-risk conclusion.
```

## Interactions

```yaml
- id: dxm-maoi
  name: Monoamine oxidase inhibitors
  otherSlug: null
  summary: FDA OTC labeling states that dextromethorphan products should not be used during prescription MAOI treatment or for 2 weeks after stopping the MAOI.
  sourceId: fdaM012
  mechanism: Clinically important monoaminergic interaction reflected in mandatory OTC labeling.
  context: U.S. OTC antitussive labeling
  severity:
    label: Label-level do-not-use interaction
    sourceId: fdaM012
- id: dxm-ssri-serotonin
  name: SSRIs and serotonin toxicity
  otherSlug: null
  summary: Serotonin syndrome has been reported with supratherapeutic dextromethorphan plus therapeutic escitalopram or sertraline concentrations; one case also involved chlorpheniramine.
  sourceId: schwartz2008
  mechanism: Serotonergic toxicity; the case series does not establish a quantitative safe or toxic threshold.
  context: Two toxicology cases with measured drug concentrations
  severity:
    label: Potentially serious
    sourceId: schwartz2008
- id: dxm-quinidine-cyp2d6
  name: Quinidine-mediated CYP2D6 inhibition
  otherSlug: null
  summary: In extensive metabolizers, quinidine greatly increased dextromethorphan exposure and prolonged parent half-life while reducing formation of dextrorphan.
  sourceId: capon1996
  mechanism: CYP2D6 inhibition
  context: Controlled human pharmacokinetic interaction study
  severity:
    label: Major pharmacokinetic modification in the studied setting
    sourceId: capon1996
```

## Experience links

```yaml
[]
```

## References

```yaml
- id: pubchem2026
  title: Dextromethorphan | C18H25NO | CID 5360696
  authors: National Center for Biotechnology Information, PubChem
  year: 2026
  url: https://pubchem.ncbi.nlm.nih.gov/compound/5360696
  kind: chemical-database
  insight: Chemical identity record for CID 5360696, including formula and structure.
  limitation: Database record rather than a clinical study; access can be dynamically rendered.
  funding: U.S. National Library of Medicine/NCBI public database.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not applicable as an investigator-authored clinical publication; institutional database provenance.
  conflictOfInterestStatus: not-assessed
- id: dailyMed2026
  title: Dextromethorphan Hydrobromide Capsules, 15mg
  authors: Softgel Healthcare Pvt Ltd
  year: 2026
  url: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=20f7c1a9-fc4d-1f51-e063-6394a90a8be3
  kind: current-otc-label
  insight: Current single-ingredient OTC label with cough indication, adult dosing, MAOI warning and pregnancy/breastfeeding precaution.
  limitation: Product-specific manufacturer labeling; it does not establish efficacy for off-label uses or characterize every marketed formulation.
  funding: Manufacturer labeling distributed through DailyMed.
  sponsorshipStatus: industry-funded
  conflictsOfInterest: Manufacturer-authored product labeling; not an investigator-authored trial.
  conflictOfInterestStatus: not-assessed
  disclosureUrl: https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=20f7c1a9-fc4d-1f51-e063-6394a90a8be3
- id: fdaM012
  title: "Over-the-Counter (OTC) Monograph M012: Cold, Cough, Allergy, Bronchodilator, and Antiasthmatic Drug Products for Over-the-Counter Human Use"
  authors: U.S. Food and Drug Administration
  year: 2022
  url: https://www.accessdata.fda.gov/drugsatfda_docs/omuf/monographs/OTC%20Monograph_M012-Cough%20Cold%20Allergy%20Bronchodilator%20and%20Antiasthmatic%20Drug%20Products%20for%20OTC%20Human%20Use%2010.14.2022.pdf
  kind: regulator-monograph
  insight: Lists dextromethorphan and its hydrobromide as oral antitussives and specifies indications, doses and the MAOI warning.
  limitation: Regulatory monograph, not a single randomized efficacy trial; applies when all monograph conditions are met.
  funding: U.S. federal regulatory agency
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Institutional regulatory source; investigator conflicts are not applicable.
  conflictOfInterestStatus: not-assessed
- id: dea2026
  title: "Drugs of Abuse: A DEA Resource Guide, 2026 Edition"
  authors: U.S. Drug Enforcement Administration
  year: 2026
  url: https://www.dea.gov/sites/default/files/2026-10/Drugs-Abuse-2026.pdf
  kind: regulator-resource
  insight: DEA states that DXM is neither a controlled substance nor a regulated chemical under the Controlled Substances Act.
  limitation: Regulatory/public-health resource, not a clinical trial; state sale restrictions and non-U.S. law are outside this statement.
  funding: U.S. federal agency
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Institutional regulatory source.
  conflictOfInterestStatus: not-assessed
- id: capon1996
  title: The influence of CYP2D6 polymorphism and quinidine on the disposition and antitussive effect of dextromethorphan in humans.
  authors: D A Capon; F Bochner; N Kerry; G Mikus; C Danz; A A Somogyi
  year: 1996
  url: https://pubmed.ncbi.nlm.nih.gov/8841152/
  kind: human-pharmacokinetic-study
  insight: Six extensive and six poor metabolizers showed 150-fold parent-AUC differences; quinidine increased parent exposure, while the capsaicin model was null.
  limitation: Very small phenotype groups and an experimental cough model; full text was not available through PMC for this draft.
  pmid: "8841152"
  doi: 10.1016/S0009-9236(96)90056-9
  funding: PubMed indexes Research Support, Non-U.S. Gov't; specific funder was not available in the accessible record.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not reported in the accessible PubMed record; full text not assessed.
  conflictOfInterestStatus: not-assessed
- id: schadel1995
  title: "Pharmacokinetics of dextromethorphan and metabolites in humans: influence of the CYP2D6 phenotype and quinidine inhibition."
  authors: M Schadel; D Wu; S V Otton; W Kalow; E M Sellers
  year: 1995
  url: https://pubmed.ncbi.nlm.nih.gov/7593709/
  kind: human-pharmacokinetic-study
  insight: After 30 mg, parent drug was minimal in extensive but dominant in poor metabolizers; quinidine suppressed dextrorphan formation.
  limitation: Small groups of five extensive and four poor metabolizers; full text was not available through PMC for this draft.
  pmid: "7593709"
  doi: 10.1097/00004714-199508000-00005
  funding: PubMed indexes U.S. Public Health Service research support.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not reported in the accessible PubMed record.
  conflictOfInterestStatus: not-assessed
- id: ramsay2008
  title: "Assessment of antitussive efficacy of dextromethorphan in smoking related cough: objective vs. subjective measures."
  authors: James Ramsay; Caroline Wright; Rachel Thompson; David Hull; Alyn H Morice
  year: 2008
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC2432485/
  kind: randomized-crossover-trial
  insight: 22 mg reduced citric-acid cough-reflex sensitivity versus placebo, while subjective cough outcomes did not separate from placebo.
  limitation: Smoking-related cough model; physiologic cough challenge and clinically experienced cough diverged, limiting endpoint generalization.
  pmid: "18279476"
  doi: 10.1111/j.1365-2125.2008.03115.x
  funding: Funding was not reported in the accessible PubMed metadata used for this draft.
  sponsorshipStatus: not-reported
  conflictsOfInterest: Conflict disclosure was not extracted from the accessible record.
  conflictOfInterestStatus: not-assessed
  disclosureUrl: https://pmc.ncbi.nlm.nih.gov/articles/PMC2432485/
- id: reissig2012
  title: High doses of dextromethorphan, an NMDA antagonist, produce effects similar to classic hallucinogens.
  authors: Chad J Reissig; Lawrence P Carter; Matthew W Johnson; Miriam Z Mintzer; Margaret A Klinedinst; Roland R Griffiths
  year: 2012
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC3652430/
  kind: controlled-human-laboratory-study
  insight: Single doses of 100–800 mg/70 kg produced dose-related perceptual, subjective and physiological effects in 12 volunteers.
  limitation: Small selected sample with prior hallucinogen experience; supratherapeutic exposures cannot be generalized to labeled cough dosing.
  pmid: "22526529"
  doi: 10.1007/s00213-012-2680-6
  funding: PubMed indexes NIH extramural research support.
  sponsorshipStatus: non-industry-funded
  conflictsOfInterest: Conflict disclosure was not extracted from the accessible record.
  conflictOfInterestStatus: not-assessed
  disclosureUrl: https://pmc.ncbi.nlm.nih.gov/articles/PMC3652430/
- id: schwartz2008
  title: Dextromethorphan-induced serotonin syndrome.
  authors: Anna R Schwartz; Anthony F Pizon; Daniel E Brooks
  year: 2008
  url: https://pubmed.ncbi.nlm.nih.gov/19238739/
  kind: case-series
  insight: Two serotonin-syndrome cases had supratherapeutic measured dextromethorphan with therapeutic SSRI concentrations.
  limitation: Only two cases; one included high chlorpheniramine exposure, and case reports cannot estimate incidence or a threshold.
  pmid: "19238739"
  doi: 10.1080/15563650701668625
  funding: Not reported in the accessible PubMed record.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not reported in the accessible PubMed record.
  conflictOfInterestStatus: not-assessed
- id: mutschler2010
  title: Dextromethorphan withdrawal and dependence syndrome.
  authors: Jochen Mutschler; Anne Koopmann; Martin Grosshans; Derik Hermann; Karl Mann; Falk Kiefer
  year: 2010
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC2925345/
  kind: case-report
  insight: Documents long-term escalation to 1,800 mg/day, dependence and autonomic withdrawal during inpatient detoxification.
  limitation: Single severe case; does not provide prevalence or risk at therapeutic doses.
  pmid: "20737060"
  doi: 10.3238/arztebl.2010.0537
  funding: No funding category is listed in the accessible PubMed metadata.
  sponsorshipStatus: not-reported
  conflictsOfInterest: Conflict disclosure was not extracted from the accessible record.
  conflictOfInterestStatus: not-assessed
  disclosureUrl: https://pmc.ncbi.nlm.nih.gov/articles/PMC2925345/
- id: einarson2001
  title: "The safety of dextromethorphan in pregnancy : results of a controlled study."
  authors: A Einarson; D Lyszkiewicz; G Koren
  year: 2001
  url: https://pubmed.ncbi.nlm.nih.gov/11171724/
  kind: controlled-observational-pregnancy-study
  insight: Among 184 exposed pregnancies, the study did not find a higher overall major-malformation rate than matched controls.
  limitation: Observational counseling-program cohort with modest sample size; insufficient for uncommon defect patterns or definitive no-risk conclusions.
  pmid: "11171724"
  doi: 10.1378/chest.119.2.466
  funding: PubMed indexes Research Support, Non-U.S. Gov't.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not reported in the accessible PubMed record.
  conflictOfInterestStatus: not-assessed
- id: amaeze2023
  title: Impact of Pregnancy and Vitamin A Supplementation on CYP2D6 Activity.
  authors: Ogochukwu U Amaeze; Lindsay C Czuba; Aprajita S Yadav; Emily E Fay; Jeffrey LaFrance; Sara Shum; Sue L Moreni; Jennie Mao; Weize Huang; Nina Isoherranen; Mary F Hebert
  year: 2023
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC9931631/
  kind: prospective-randomized-pharmacokinetic-study
  insight: Forty-seven completers showed higher dextromethorphan metabolic ratios during pregnancy than postpartum; vitamin A had no effect.
  limitation: Included CYP2D6 activity scores 1–2 and used short-window metabolic ratios rather than full dextromethorphan half-life.
  pmid: "36309846"
  doi: 10.1002/jcph.2169
  funding: PubMed indexes NIH extramural and non-U.S. government research support.
  sponsorshipStatus: non-industry-funded
  conflictsOfInterest: Conflict disclosure was not extracted for this draft.
  conflictOfInterestStatus: not-assessed
  disclosureUrl: https://pmc.ncbi.nlm.nih.gov/articles/PMC9931631/
- id: ferguson2023
  title: "Dextromethorphan as a novel nonopioid adjunctive agent for pain control with medication abortion: A randomized controlled trial."
  authors: Grace P Ferguson; Sharon L Achilles; Leslie A Meyn; Colleen M Krajewski; Catherine A Chappell; Kavita Vinekar; Beatrice A Chen
  year: 2023
  url: https://pubmed.ncbi.nlm.nih.gov/36332661/
  kind: randomized-controlled-trial
  insight: In 156 randomized participants, adjunctive dextromethorphan did not reduce worst pain or analgesic use; satisfaction was lower than placebo.
  limitation: Condition- and regimen-specific; nearly one quarter used no analgesia, and adherence to counseled analgesics varied.
  pmid: "36332661"
  doi: 10.1016/j.contraception.2022.10.010
  funding: PubMed indexes Research Support, Non-U.S. Gov't.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not reported in the accessible PubMed record used for this draft.
  conflictOfInterestStatus: not-assessed
- id: wong1988
  title: Dextrorphan and dextromethorphan, common antitussives, are antiepileptic and antagonize N-methyl-D-aspartate in brain slices.
  authors: B Y Wong; D A Coulter; D W Choi; D A Prince
  year: 1988
  url: https://pubmed.ncbi.nlm.nih.gov/2897648/
  kind: preclinical-mechanistic-study
  insight: Both parent drug and dextrorphan blocked NMDA-linked electrophysiologic responses in guinea-pig neocortical slices.
  limitation: In-vitro animal tissue at micromolar concentrations; does not establish human target occupancy or clinical benefit.
  pmid: "2897648"
  doi: 10.1016/0304-3940(88)90362-x
  funding: PubMed indexes U.S. Public Health Service and non-U.S. government research support.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not reported in the accessible PubMed record.
  conflictOfInterestStatus: not-assessed
- id: chou1999
  title: Binding of dimemorfan to sigma-1 receptor and its anticonvulsant and locomotor effects in mice, compared with dextromethorphan and dextrorphan.
  authors: Y C Chou; J F Liao; W Y Chang; M F Lin; C F Chen
  year: 1999
  url: https://pubmed.ncbi.nlm.nih.gov/10064839/
  kind: preclinical-receptor-binding-study
  insight: Direct comparative binding measured sigma-1 affinity and lower dextromethorphan than dextrorphan affinity at PCP/NMDA-channel sites.
  limitation: Preclinical comparative binding and mouse behavior; cannot assign a human therapeutic mechanism.
  pmid: "10064839"
  doi: 10.1016/S0006-8993(99)01125-7
  funding: PubMed indexes Research Support, Non-U.S. Gov't.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not reported in the accessible PubMed record.
  conflictOfInterestStatus: not-assessed
- id: psychonautwiki
  title: "Dextromethorphan: PsychonautWiki dose and duration data"
  authors: PsychonautWiki contributors
  year: 2026
  url: https://psychonautwiki.org/wiki/Dextromethorphan
  kind: Community wiki data · CC BY 4.0
  insight: Source of this page's community dose bands and subjective duration ranges, from the PsychonautWiki API snapshot built about 2026-06-23 and retrieved 2026-11-06. The structured data is used under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/); BHWiki normalized unit symbols and route names.
  limitation: "PsychonautWiki states: \"PW's dosage information is gathered from users and resources for educational purposes only. It is not a recommendation and should be verified with other sources for accuracy.\" Its dose and duration values carry no per-value citations."
```

## Legal

```yaml
- jurisdiction: United States — federal OTC drug regulation
  activity: Marketing as an oral antitussive
  status: Dextromethorphan and dextromethorphan hydrobromide are listed oral antitussive active ingredients under FDA OTC Monograph M012 when the product meets the monograph and general OTC conditions.
  sourceUrl: https://www.accessdata.fda.gov/drugsatfda_docs/omuf/monographs/OTC%20Monograph_M012-Cough%20Cold%20Allergy%20Bronchodilator%20and%20Antiasthmatic%20Drug%20Products%20for%20OTC%20Human%20Use%2010.14.2022.pdf
  asOf: 2026-10-16
- jurisdiction: United States — federal Controlled Substances Act
  activity: Controlled-substance scheduling and chemical regulation
  status: DEA's 2026 resource guide states that DXM is neither a controlled substance nor a regulated chemical under the Controlled Substances Act.
  sourceUrl: https://www.dea.gov/sites/default/files/2026-10/Drugs-Abuse-2026.pdf
  asOf: 2026-10-16
```

