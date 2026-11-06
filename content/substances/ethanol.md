---
slug: ethanol
name: Ethanol
subtitle: Beverage alcohol with dose-dependent acute effects and capacity-limited elimination.
aliases:
  - Alcohol
  - Ethyl alcohol
  - Beverage alcohol
formula: C2H6O
molecularWeight: 46.07 g/mol
pubchemCid: 702
smiles: CCO
category: Depressant
tags:
  - depressant
accent: "#c3b093"
reviewedAt: 2026-10-16
editorialStatus: sourced-draft
halfLife:
  label: Not represented by a single first-order half-life
  low: null
  high: null
  context: Ethanol elimination is concentration-dependent and capacity-limited; the selected pharmacokinetic source does not establish one model-stable first-order half-life.
  sourceId: holford1987
  observationId: ethanol-unresolved
kinetics:
  onset: Not assigned from the selected evidence
  peak: No fixed oral peak time assigned; absorption depends on dose, formulation, food and drinking pattern
  duration: Not represented by a fixed half-life because elimination is concentration-dependent
  bioavailability: Oral systemic exposure varies with absorption and first-pass extraction; no universal value is assigned
  metabolism: Primarily hepatic oxidation by alcohol dehydrogenase to acetaldehyde, with capacity-limited elimination at relevant concentrations
  sourceId: holford1987
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
x-order: 404
---

## Summary

Ethanol (ethyl alcohol) is the psychoactive alcohol in beer, wine and spirits. Acute human experiments show dose- and time-dependent subjective sedation, sometimes accompanied by stimulant-like ratings on the rising blood-alcohol curve, and measurable psychomotor impairment. Regular or sustained exposure is linked to liver and brain injury, can raise blood pressure, and can produce alcohol use disorder, physical dependence and potentially life-threatening withdrawal. Official pregnancy guidance states that no safe amount or safe time for alcohol use in pregnancy is known.

## Description

The parent molecule is PubChem CID 702, formula C2H6O and molecular weight 46.07 g/mol. “Beverage alcohol” refers here to ethanol delivered in beer, wine, spirits or experimental beverage formulations; those matrices are not chemically identical to pure ethanol and can change absorption context. Research doses below are experimental ethanol exposures, often normalized to body mass, not serving guidance. Ethanol is distributed in body water and is eliminated mainly by hepatic oxidation to acetaldehyde; because elimination becomes capacity-limited, a single first-order half-life is a poor general description.

## Evidence note

Acute dose-response and interaction evidence includes small randomized or crossover laboratory studies, while the liver and brain harm records rely on large but observational cohorts and therefore retain confounding and self-report limitations. Pregnancy exposure cannot ethically be randomized; the official precautionary position and a large cohort with both positive and null findings are kept separate. Several older pharmacology papers were available only as PubMed abstracts/metadata in this research pass, so their funding and conflict declarations remain unassessed. Null findings are retained where they narrow claims: 0.2 g/kg produced negligible subjective effects in one acute study; lower acute exposures did not impair every psychomotor or memory endpoint; a pregnancy cohort found no association with preterm birth; and a low-dose benzodiazepine interaction experiment did not show potentiation or prolonged action despite additive impairment on one measure.

## Doses

```yaml
- label: Acute subjective dose-response experiment
  amount: 0.2, 0.4, or 0.8 g/kg in separate sessions
  quantity: 0.2
  quantityMax: 0.8
  unit: g/kg
  ingredient: Ethanol
  formulation: Oral alcohol challenge beverage
  route: Oral
  frequency: Single exposure per session
  duration: Four randomized crossover sessions
  population: 49 healthy nonproblem social drinkers aged 21–35
  purpose: Measure acute stimulant-like and sedative-like subjective responses across dose and blood-alcohol-curve phase
  sourceCategory: research
  note: Experimental exposure only; the study included a placebo session and does not establish a general-use dose range.
  sourceId: holdstock1998
- label: Acute psychomotor dose-response experiment
  amount: 0.5 or 1.0 g/kg
  quantity: 0.5
  quantityMax: 1
  unit: g/kg
  ingredient: Ethanol
  formulation: Oral alcohol challenge
  route: Oral
  frequency: Single study exposure
  duration: Acute psychomotor testing
  population: 12 healthy volunteers
  purpose: Test coordination, attention and reaction-related performance
  sourceCategory: research
  note: Peak blood alcohol concentrations were study-specific and do not establish a general-use dose range.
  sourceId: nuotto1991
- label: Fed-versus-fasted pharmacokinetic crossover
  amount: 0.80 g/kg
  quantity: 0.8
  quantityMax: null
  unit: g/kg
  ingredient: Ethanol
  formulation: Oral ethanol exposure
  route: Oral
  frequency: Single exposure per condition
  duration: Blood sampling over approximately 6 hours
  population: 10 healthy men
  purpose: Compare blood-ethanol profiles and disappearance with breakfast versus overnight fasting
  sourceCategory: research
  note: A specific meal substantially changed exposure in this small study; the result is not a universal meal correction factor.
  sourceId: jones1994
- label: Threshold dose
  amount: 10 g
  quantity: 10
  quantityMax: null
  unit: g
  ingredient: Ethanol
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
  amount: 10–20 g
  quantity: 10
  quantityMax: 20
  unit: g
  ingredient: Ethanol
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
  amount: 20–30 g
  quantity: 20
  quantityMax: 30
  unit: g
  ingredient: Ethanol
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
  amount: 30–40 g
  quantity: 30
  quantityMax: 40
  unit: g
  ingredient: Ethanol
  formulation: Not established
  route: Oral
  frequency: Not established
  duration: Not established
  population: Not established
  purpose: PsychonautWiki dosage classification
  sourceCategory: community
  note: Band from the PsychonautWiki API snapshot built about 2026-06-23.
  sourceId: psychonautwiki
- label: Heavy dose band (40 g and above)
  amount: 40 g and above
  quantity: 40
  quantityMax: null
  unit: g
  ingredient: Ethanol
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
- id: ethanol-unresolved
  analyte: Ethanol
  route: Systemic
  formulation: Ethanol
  population: Humans
  endpoint: elimination-half-life
  statistic: not-established
  value: null
  low: null
  high: null
  unit: hours
  context: Clinical pharmacokinetic modeling describes concentration-dependent, capacity-limited elimination rather than one stable first-order half-life; a zero-order approximation also has limitations.
  sourceId: holford1987
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
    min: 1.5
    max: 5
    unit: hours
  phases:
    - name: onset
      basis: elapsed-since-exposure
      min: 2
      max: 5
      unit: minutes
    - name: comeup
      basis: phase-duration
      min: 15
      max: 45
      unit: minutes
    - name: peak
      basis: phase-duration
      min: 30
      max: 90
      unit: minutes
    - name: offset
      basis: phase-duration
      min: 45
      max: 120
      unit: minutes
    - name: after-effects
      basis: phase-duration
      min: 6
      max: 48
      unit: hours
```

## Modifiers

```yaml
- label: Food or meal timing
  effect: Lower peak blood ethanol and faster disappearance in one controlled crossover
  detail: After 0.80 g/kg, mean peak BAC was 67 mg/dL after breakfast versus 104 mg/dL fasting; AUC was also lower, and the reported disappearance rate increased after food. Ten healthy men were studied, so no fixed personal correction factor is justified.
  sourceId: jones1994
  observationId: ethanol-unresolved
  factorType: other
  direction: faster
```

## Effects

```yaml
- id: ethanol-subjective-sedation
  conceptId: drowsiness
  name: Sedative-like subjective response
  direction: Variable
  evidence: Human research
  description: In a randomized double-blind crossover, 0.2 g/kg produced negligible subjective effects versus placebo; 0.4 g/kg increased sedative-like ratings at 90 minutes; 0.8 g/kg increased both stimulant-like and sedative-like ratings on the ascending limb and only sedative-like ratings on the descending limb. Roughly half of participants showed the expected stimulant-then-sedative pattern, indicating marked individual variability.
  sourceId: holdstock1998
  population: 49 healthy nonproblem social drinkers aged 21–35
  exposure: Placebo or ethanol 0.2, 0.4, or 0.8 g/kg orally
  instrument: Repeated subjective stimulant-like and sedative-like ratings over 3 hours
  magnitude: Dose-, phase- and person-dependent; the lowest dose was negligible versus placebo in this study.
  reportType: measured-assessment
  conflictingSourceIds: []
```

## Outcomes

```yaml
- id: ethanol-reaction-time-1983
  conceptId: reaction-time
  name: Simple reaction time
  direction: Increased
  evidence: Human research
  description: Ethanol 0.4 g/kg alone significantly slowed simple reaction time for 30–60 minutes. In the same experiment ethanol alone had no detectable effect on immediate recall, prompted recall, learning or word recognition.
  sourceId: taberner1983
  population: 10 healthy male volunteers
  exposure: Ethanol 0.4 g/kg with placebo benzodiazepine condition
  instrument: Simple reaction-time and memory test battery
  magnitude: Significant reaction-time slowing at 30–60 minutes; the PubMed abstract did not report a numerical effect size.
  reportType: measured-assessment
  conflictingSourceIds: []
- id: ethanol-psychomotor-dose-1991
  conceptId: reaction-time
  name: Psychomotor test-battery performance
  direction: Variable
  evidence: Human research
  description: At 1.0 g/kg, effects were evident across the computerized psychomotor battery; at 0.5 g/kg, only coordination was significantly impaired one hour after drinking. The lower exposure therefore did not impair every measured domain.
  sourceId: nuotto1991
  population: 12 healthy volunteers
  exposure: Ethanol 0.5 or 1.0 g/kg orally
  instrument: Computerized hand-eye coordination, attention and reaction-skills battery
  magnitude: Reported peak BAC about 0.33 g/L after 0.5 g/kg and 0.86 g/L after 1.0 g/kg.
  reportType: measured-assessment
  conflictingSourceIds: []
```

## Mechanisms

```yaml
- title: Capacity-limited hepatic oxidation
  description: Ethanol is metabolized mainly in the liver by alcohol dehydrogenase to acetaldehyde. Clinical pharmacokinetic modeling describes a concentration-dependent process analogous to Michaelis–Menten kinetics, which is why one fixed first-order half-life is not used here.
  sourceId: holford1987
- title: NMDA-receptor current inhibition
  description: In voltage-clamped hippocampal neurons, ethanol inhibited NMDA-activated current concentration-dependently from 5 to 50 mM; 50 mM reduced NMDA current by 61%, more than kainate- or quisqualate-activated currents in that preparation. This cellular experiment does not establish the magnitude of a human clinical effect.
  sourceId: lovinger1989
- title: GABA-A receptor response variability
  description: In 250 healthy people given 0.5 g/kg orally, GABRA4 rs2229940 was associated with reaction-time response to ethanol, while GABRA6 rs4454083 related to motor time but not the ethanol-induced change; multiple other tested GABA-A receptor missense variants were null after correction. Association does not identify a universal ethanol binding site.
  sourceId: garcia2018
```

## Cautions

```yaml
- title: Liver cirrhosis
  description: In 401,806 UK women who drank at least weekly, cirrhosis incidence rose with amount consumed; at 15 or more drinks per week (mean 220 g alcohol) versus 1–2 drinks (mean 30 g), adjusted RR was 3.43 (95% CI 2.87–4.10). Daily drinking and drinking without meals were additional observational risk markers. Self-report and residual confounding prevent treating meal timing as a protective intervention.
  sourceId: simpson2019
- title: Brain structure and cognitive decline
  description: In the Whitehall II imaging substudy, higher long-term intake was associated with hippocampal atrophy and white-matter differences; 14–<21 UK units/week was associated with right hippocampal atrophy versus abstinence (OR 3.4, 95% CI 1.4–8.1). No protective association was found for 1–<7 units/week, and no association was found with cross-sectional cognition, semantic-fluency decline or word recall. Imaging was endpoint observational data with residual-confounding and representativeness limits.
  sourceId: topiwala2017
- title: Blood pressure and cardiovascular burden
  description: In 46 normotensive male drinkers, randomized reduction from about 336 to 65 mL ethanol/week lowered systolic blood pressure; the mean difference during the final two weeks was 3.8 mmHg and pressure rose when usual drinking resumed. The short male-only trial measured blood pressure, not cardiovascular events.
  sourceId: puddey1985
- title: Dependence and withdrawal
  description: NIAAA describes alcohol use disorder as including tolerance and withdrawal and warns that sudden cessation after chronic heavy drinking can produce potentially life-threatening withdrawal, including seizures and delirium tremens. This official clinical synthesis does not predict an individual withdrawal course from ethanol dose alone.
  sourceId: niaaa-aud-2025
- title: Pregnancy
  description: CDC states that no known safe amount or safe time for alcohol use during pregnancy has been established and that beer, wine and liquor can all be harmful; prenatal exposure can cause fetal alcohol spectrum disorders and is associated with adverse pregnancy outcomes.
  sourceId: cdc-pregnancy-2026
- title: Pregnancy cohort findings are endpoint-specific
  description: In 10,851 pregnancies, binge exposure defined as 5 UK units (40 g alcohol) was associated with small-for-gestational-age birth (OR 1.68, 95% CI 1.15–2.47), while moderate drinking was not associated with either studied birth outcome and binge drinking was not associated with preterm birth. These observational null findings do not establish a safe prenatal threshold or address neurodevelopmental outcomes.
  sourceId: cooper2013
```

## Claims

```yaml
- id: ethanol-depressant-class
  assertion: Ethanol is classified here as a central nervous system depressant while retaining evidence that acute subjective responses can include stimulant-like ratings on the ascending blood-alcohol curve.
  relation: classified-as
  participants:
    - entityId: substance:ethanol
      role: substance
    - entityId: tag:depressant
      role: class
  context: Acute oral human laboratory studies of subjective and psychomotor effects
  sourceIds:
    - holdstock1998
    - nuotto1991
    - taberner1983
  conflictingSourceIds: []
  assessment: not-formally-assessed
  limitation: A class label does not imply that every dose, time point, endpoint or individual response is purely sedating.
```

## Interactions

```yaml
- id: ethanol-opioids
  name: Opioids
  otherSlug: null
  targetClassId: opioid
  summary: FDA warns that opioids combined with benzodiazepines or other CNS depressants, including alcohol, can cause extreme sleepiness, respiratory depression, coma and death.
  sourceId: fda-opioids-2016
  mechanism: Additive central nervous system and respiratory depression.
  context: Class-level U.S. regulatory warning; risk magnitude varies by opioid, dose and patient and is not quantified here.
  severity:
    label: Serious risks including respiratory depression, coma and death
    sourceId: fda-opioids-2016
  conflictingSourceIds: []
- id: ethanol-benzodiazepines
  name: Benzodiazepines
  otherSlug: null
  targetClassId: benzodiazepine
  summary: FDA warns not to combine benzodiazepines with alcohol because alcohol can increase serious and life-threatening effects. A small older laboratory study at specific low doses found additive critical-flicker impairment but no potentiation or prolongation of the tested benzodiazepine effects.
  sourceId: fda-benzodiazepines-2020
  mechanism: Additive CNS depression; endpoint-specific interactions can differ.
  context: The narrow null result in ten healthy men does not negate the broader class warning.
  severity:
    label: FDA class warning for serious and life-threatening effects
    sourceId: fda-benzodiazepines-2020
  conflictingSourceIds:
    - taberner1983
```

## Experience links

```yaml
- title: Ethanol
  url: https://psychonautwiki.org/wiki/Ethanol
  publisher: PsychonautWiki
```

## References

```yaml
- id: pubchem
  title: Ethanol | CH3CH2OH | CID 702
  authors: National Center for Biotechnology Information, PubChem
  year: 2026
  url: https://pubchem.ncbi.nlm.nih.gov/compound/702
  kind: Chemical database
  insight: Establishes parent-compound identity, formula, molecular weight, CID and connectivity SMILES.
  limitation: A chemical identity record does not describe beverage composition, exposure, clinical effects or product quality.
  funding: U.S. National Library of Medicine/NCBI database; publication-level funding declaration not applicable.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
- id: holford1987
  title: Clinical pharmacokinetics of ethanol.
  authors: N H Holford
  year: 1987
  pmid: "3319346"
  doi: 10.2165/00003088-198713050-00001
  url: https://pubmed.ncbi.nlm.nih.gov/3319346/
  kind: Clinical pharmacokinetic review
  insight: Describes concentration-dependent, capacity-limited elimination, hepatic alcohol-dehydrogenase metabolism and limitations of simple zero-order modeling.
  limitation: Review rather than a single primary experiment; full text and disclosure statements were not inspected in this research pass.
  funding: Not assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
- id: holdstock1998
  title: Individual differences in the biphasic effects of ethanol.
  authors: L Holdstock; H de Wit
  year: 1998
  pmid: "9884132"
  url: https://pubmed.ncbi.nlm.nih.gov/9884132/
  kind: Randomized double-blind crossover study
  insight: Provides placebo-controlled 0.2, 0.4 and 0.8 g/kg subjective dose-response and ascending-versus-descending limb data.
  limitation: 49 young social drinkers; full text and publication disclosure statements were not inspected.
  funding: PubMed indexes U.S. Public Health Service research support; the publication funding declaration was not inspected.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
- id: nuotto1991
  title: "Evaluation of a new computerized psychomotor test battery: effects of alcohol."
  authors: E J Nuotto; K T Korttila
  year: 1991
  pmid: "1946181"
  doi: 10.1111/j.1600-0773.1991.tb01253.x
  url: https://pubmed.ncbi.nlm.nih.gov/1946181/
  kind: Randomized controlled acute study
  insight: Shows stronger psychomotor impairment at 1.0 than 0.5 g/kg and preserves limited lower-dose null findings.
  limitation: Only 12 healthy volunteers; the abstract does not provide endpoint effect sizes, and full disclosure text was not inspected.
  funding: Not assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
- id: jones1994
  title: Food-induced lowering of blood-ethanol profiles and increased rate of elimination immediately after a meal.
  authors: A W Jones; K A Jönsson
  year: 1994
  pmid: "8064267"
  url: https://pubmed.ncbi.nlm.nih.gov/8064267/
  kind: Human crossover pharmacokinetic study
  insight: Demonstrates lower peak BAC and AUC and faster apparent disappearance after a meal in the tested conditions.
  limitation: Ten healthy men and one meal/exposure design; full text and disclosure statements were not inspected.
  funding: Not assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
- id: taberner1983
  title: An investigation into the interaction between ethanol at low doses and the benzodiazepines nitrazepam and temazepam on psychomotor performance in normal subjects.
  authors: P V Taberner; C J Roberts; E Shrosbree; C J Pycock; L English
  year: 1983
  pmid: "6140699"
  doi: 10.1007/BF00427570
  url: https://pubmed.ncbi.nlm.nih.gov/6140699/
  kind: Randomized human interaction study
  insight: Documents reaction-time slowing with ethanol 0.4 g/kg, memory nulls for ethanol alone and endpoint-specific benzodiazepine interaction findings.
  limitation: Ten healthy men, older methods and specific low doses; the narrow interaction null cannot establish general combination safety.
  funding: PubMed indexes non-U.S. government research support; the article funding declaration was not inspected.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
- id: garcia2018
  title: Missense Gamma-Aminobutyric Acid Receptor Polymorphisms Are Associated with Reaction Time, Motor Time, and Ethanol Effects in Vivo.
  authors: Elena García-Martín; María I Ramos; José A Cornejo-García; Segismundo Galván; James R Perkins; Laura Rodríguez-Santos; Hortensia Alonso-Navarro; Félix J Jiménez-Jiménez; José A G Agúndez
  year: 2018
  pmid: "29445327"
  doi: 10.3389/fncel.2018.00010
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC5797743/
  kind: Human pharmacogenetic ethanol-challenge study
  insight: Links selected GABA-A receptor missense variants to reaction or motor-time phenotypes after 0.5 g/kg while reporting multiple corrected null associations.
  limitation: Association study without placebo and with rare genotypes/haplotypes; it does not establish a unique receptor mechanism.
  funding: Not assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Authors declared no commercial or financial relationships that could be construed as a potential conflict.
  conflictOfInterestStatus: none-declared
  disclosureUrl: https://pmc.ncbi.nlm.nih.gov/articles/PMC5797743/
- id: lovinger1989
  title: Ethanol inhibits NMDA-activated ion current in hippocampal neurons.
  authors: D M Lovinger; G White; F F Weight
  year: 1989
  pmid: "2467382"
  doi: 10.1126/science.2467382
  url: https://pubmed.ncbi.nlm.nih.gov/2467382/
  kind: Cellular electrophysiology study
  insight: Shows concentration-dependent inhibition of NMDA-activated current by ethanol in hippocampal neurons.
  limitation: Cellular preparation; it cannot quantify a human subjective, cognitive or clinical outcome.
  funding: PubMed indexes U.S. Public Health Service research support; the article funding declaration was not inspected.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
- id: puddey1985
  title: A randomized controlled trial of the effect of alcohol consumption on blood pressure.
  authors: I B Puddey; L J Beilin; R Vandongen; I L Rouse
  year: 1985
  pmid: "4028514"
  doi: 10.1111/j.1440-1681.1985.tb02643.x
  url: https://pubmed.ncbi.nlm.nih.gov/4028514/
  kind: Randomized controlled crossover trial
  insight: Reduction of regular alcohol intake lowered systolic blood pressure in normotensive male drinkers and the effect reversed on resumption.
  limitation: 46 men, short intervention and blood-pressure endpoint; no cardiovascular event estimate.
  funding: Not assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
- id: topiwala2017
  title: "Moderate alcohol consumption as risk factor for adverse brain outcomes and cognitive decline: longitudinal cohort study."
  authors: Anya Topiwala; Charlotte L Allan; Vyara Valkanova; Enikő Zsoldos; Nicola Filippini; Claire Sexton; Abda Mahmood; Peggy Fooks; Archana Singh-Manoux; Clare E Mackay; Mika Kivimäki; Klaus P Ebmeier
  year: 2017
  pmid: "28588063"
  doi: 10.1136/bmj.j2353
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC5460586/
  kind: Longitudinal cohort with endpoint neuroimaging
  insight: Associates higher long-term intake with hippocampal atrophy, white-matter differences and faster lexical-fluency decline while preserving cognitive null outcomes.
  limitation: Alcohol was self-reported; MRI was cross-sectional at study endpoint; the cohort was predominantly educated middle-class men and residual confounding remains possible.
  funding: UK Medical Research Council grant G1001354, Gordon Edward Small's Charitable Trust SC008962, HDH Wills 1965 Charitable Trust, plus disclosed investigator support from MRC and NordForsk.
  sponsorshipStatus: non-industry-funded
  conflictsOfInterest: Authors disclosed the stated grant support and declared no financial relationships or other relationships that could appear to influence the work.
  conflictOfInterestStatus: none-declared
  disclosureUrl: https://www.bmj.com/content/357/bmj.j2353
- id: simpson2019
  title: "Alcohol drinking patterns and liver cirrhosis risk: analysis of the prospective UK Million Women Study."
  authors: Rachel F Simpson; Carol Hermon; Bette Liu; Jane Green; Gillian K Reeves; Valerie Beral; Sarah Floud; Million Women Study Collaborators
  year: 2019
  pmid: "30472032"
  doi: 10.1016/S2468-2667(18)30230-5
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC6323353/
  kind: Prospective cohort study
  insight: Quantifies cirrhosis incidence associations with total intake, daily frequency and meal context.
  limitation: Observational self-reported exposure in middle-aged UK women; residual confounding and selection limit causal interpretation of drinking-pattern modifiers.
  funding: UK Medical Research Council grant MR/K02700X/1 and Cancer Research UK grant C570/A16491; Bette Liu disclosed NHMRC fellowship support.
  sponsorshipStatus: non-industry-funded
  conflictsOfInterest: Authors declared no competing interests.
  conflictOfInterestStatus: none-declared
  disclosureUrl: https://pmc.ncbi.nlm.nih.gov/articles/PMC6323353/
- id: cooper2013
  title: "The association between binge drinking and birth outcomes: results from the Born in Bradford cohort study."
  authors: Duncan L Cooper; Emily S Petherick; John Wright
  year: 2013
  pmid: "23729326"
  doi: 10.1136/jech-2012-202303
  url: https://pubmed.ncbi.nlm.nih.gov/23729326/
  kind: Pregnancy cohort study
  insight: Reports an association between binge exposure and small-for-gestational-age birth while preserving null findings for preterm birth and moderate exposure on the studied endpoints.
  limitation: Self-reported observational exposure, residual confounding and limited birth endpoints; null findings cannot establish prenatal safety.
  funding: PubMed indexes non-U.S. government research support; the publication funding declaration was not inspected.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed.
  conflictOfInterestStatus: not-assessed
- id: niaaa-aud-2025
  title: "Alcohol Use Disorder: From Risk to Diagnosis to Recovery"
  authors: National Institute on Alcohol Abuse and Alcoholism
  year: 2025
  url: https://www.niaaa.nih.gov/health-professionals-communities/core-resource-on-alcohol/alcohol-use-disorder-risk-diagnosis-recovery
  kind: Official U.S. clinical resource
  insight: Summarizes alcohol use disorder, tolerance, dependence and potentially life-threatening withdrawal including seizures and delirium tremens.
  limitation: Clinical synthesis rather than a primary ethanol exposure study; it does not provide an individual dose-to-withdrawal prediction.
  funding: U.S. National Institutes of Health/NIAAA government resource; page-level external sponsorship was not separately assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed at page level.
  conflictOfInterestStatus: not-assessed
- id: cdc-pregnancy-2026
  title: About Alcohol Use During Pregnancy
  authors: Centers for Disease Control and Prevention
  year: 2026
  url: https://www.cdc.gov/alcohol-pregnancy/about/index.html
  kind: Official U.S. public-health guidance
  insight: States that no known safe amount or safe time in pregnancy is established and that all beverage-alcohol types can be harmful.
  limitation: Precautionary public-health guidance and evidence synthesis, not a randomized prenatal exposure study or a quantified threshold analysis.
  funding: U.S. CDC government resource; page-level external sponsorship was not separately assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed at page level.
  conflictOfInterestStatus: not-assessed
- id: fda-opioids-2016
  title: New Safety Measures Announced for Opioid Analgesics, Prescription Opioid Cough Products, and Benzodiazepines
  authors: U.S. Food and Drug Administration
  year: 2016
  url: https://www.fda.gov/drugs/information-drug-class/new-safety-measures-announced-opioid-analgesics-prescription-opioid-cough-products-and
  kind: Official U.S. regulatory safety communication
  insight: Warns of extreme sleepiness, respiratory depression, coma and death when opioids are combined with benzodiazepines or other CNS depressants including alcohol.
  limitation: Class-level regulatory warning; it does not quantify interaction magnitude for every opioid, ethanol dose or patient.
  funding: U.S. FDA government resource; page-level external sponsorship was not separately assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed at page level.
  conflictOfInterestStatus: not-assessed
- id: fda-benzodiazepines-2020
  title: FDA requiring Boxed Warning updated to improve safe use of benzodiazepine drug class
  authors: U.S. Food and Drug Administration
  year: 2020
  url: https://www.fda.gov/drugs/drug-safety-and-availability/fda-requiring-boxed-warning-updated-improve-safe-use-benzodiazepine-drug-class
  kind: Official U.S. regulatory safety communication
  insight: Warns that alcohol with benzodiazepines can increase serious and life-threatening effects.
  limitation: Class-level warning based on postmarketing and literature review; it is not a dose-specific controlled ethanol interaction estimate.
  funding: U.S. FDA government resource; page-level external sponsorship was not separately assessed.
  sponsorshipStatus: not-assessed
  conflictsOfInterest: Not assessed at page level.
  conflictOfInterestStatus: not-assessed
- id: psychonautwiki
  title: "Alcohol: PsychonautWiki dose and duration data"
  authors: PsychonautWiki contributors
  year: 2026
  url: https://psychonautwiki.org/wiki/Alcohol
  kind: Community wiki data · CC BY 4.0
  insight: Source of this page's community dose bands and subjective duration ranges, from the PsychonautWiki API snapshot built about 2026-06-23 and retrieved 2026-11-06. The structured data is used under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/); BHWiki normalized unit symbols and route names.
  limitation: "PsychonautWiki states: \"PW's dosage information is gathered from users and resources for educational purposes only. It is not a recommendation and should be verified with other sources for accuracy.\" Its dose and duration values carry no per-value citations."
```

## Legal

```yaml
- jurisdiction: France
  activity: Retail sale or free supply of alcoholic beverages to minors
  status: Prohibited to minors; the person supplying the beverage must require proof of majority under Code de la santé publique Article L3342-1.
  sourceUrl: https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000031927682
  asOf: 2026-10-16
- jurisdiction: England and Wales
  activity: Sale of alcohol to persons under 18
  status: A sale to an individual under 18 is an offence under Licensing Act 2003 section 146, subject to statutory defenses and related exceptions elsewhere in the Act.
  sourceUrl: https://www.legislation.gov.uk/ukpga/2003/17/section/146
  asOf: 2026-10-16
- jurisdiction: United States (federal-state framework)
  activity: Minimum age for purchase or public possession of alcoholic beverages
  status: 23 U.S.C. §158 conditions specified federal highway funds on state law making purchase or public possession by persons under 21 unlawful; statutory definitions and exceptions apply, and state law supplies the operative offense rules.
  sourceUrl: https://uscode.house.gov/view.xhtml?edition=prelim&f=treesort&fq=true&granuleId=USC-prelim-title23-section158
  asOf: 2026-10-16
```

