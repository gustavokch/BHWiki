import type { DirectedStep, EffectDetails, QuantitativeResult, StudyContext } from "./research-types";
export type TagKind = "class" | "chemical-family" | "mechanism" | "target" | "neurotransmitter" | "enzyme" | "effect" | "outcome" | "exposure" | "legal";
export type Tag = { id: string; label: string; kind: TagKind; description: string; aliases?: string[]; sourceUrls?: string[]; relatedIds?: string[]; details?: EffectDetails };
export type Concept = Tag;
export type SponsorshipStatus = "industry-funded" | "non-industry-funded" | "mixed-funding" | "no-external-funding" | "not-reported" | "not-assessed";
export type ConflictOfInterestStatus = "declared" | "none-declared" | "not-reported" | "not-assessed";
export type Reference = {
  id: string; title: string; authors: string; year: number; url: string; kind: string;
  insight: string; limitation: string; pmid?: string; doi?: string; funding?: string;
  sponsorshipStatus?: SponsorshipStatus; conflictsOfInterest?: string;
  conflictOfInterestStatus?: ConflictOfInterestStatus; disclosureUrl?: string;
};
export type EditorialStatus = "sourced-draft" | "editorially-reviewed";
export type Observation = {
  id?: string; study?: StudyContext; result?: QuantitativeResult; conflictingSourceIds?: string[];
  reportType?: "measured-assessment" | "informal-account";
  conceptId: string; name: string; direction: "Increased" | "Decreased" | "Variable";
  evidence: "Human research" | "Subjective reports" | "Limited research";
  description: string; sourceId: string; population: string; exposure: string;
  instrument: string | null; magnitude: string | null;
};
export type TimeUnit = "seconds" | "minutes" | "hours";
export type TimeSpan = { min: number | null; max: number | null; unit: TimeUnit };
export type DurationPhaseName = "onset" | "comeup" | "peak" | "offset" | "after-effects";
export type DurationPhase = { name: DurationPhaseName; basis?: "elapsed-since-exposure" | "phase-duration" } & TimeSpan;
export type DurationRoute = {
  id?: string; formulation?: string; measurement?: "subjective" | "plasma"; analyte?: string;
  route: string; population: string; sourceId: string; note: string;
  total: TimeSpan | null; phases: DurationPhase[];
};
export type TimingMarker = {
  id: string; label: string; analyte: string; population: string;
  measurement: "subjective" | "plasma"; at: number; unit: TimeUnit;
  note: string; sourceId: string;
};
export type DoseContext = {
  label: string; amount: string; quantity: number | null; quantityMax: number | null; unit: string;
  ingredient: string; formulation: string; route?: string; frequency: string; duration: string;
  population: string; purpose: string; sourceCategory: "research" | "approved-label" | "reference" | "community";
  foodRelation?: "empty-stomach" | "with-food" | "with-or-without-food" | "food-effect-not-established";
  solubility?: "water-soluble" | "fat-soluble" | "formulation-dependent" | "solubility-not-established";
  absorptionNote?: string;
  note: string; sourceId: string;
};
export type PKObservation = {
  id: string; analyte: string; route?: string; formulation?: string; population?: string;
  endpoint: "elimination-half-life"; statistic: "approximate" | "study-mean" | "reported-range" | "not-established";
  value: number | null; low: number | null; high: number | null; unit: "hours";
  context: string; sourceId: string; modelEligible: boolean;
};
export type Claim = {
  id: string; assertion: string; relation: string; participants: { entityId: string; role: string }[];
  context: string; sourceIds: string[]; conflictingSourceIds: string[];
  assessment: "not-formally-assessed"; limitation: string;
};
export type Interaction = { id: string; name: string; otherSlug: string | null; summary: string; sourceId: string; targetClassId?: string; mechanism?: string; context?: string; severity?: { label: string; sourceId: string }; conflictingSourceIds?: string[] };
export type IdentificationTest = {
  name: string;
  kind: "presumptive-reagent" | "instrumental-confirmation";
  target: string;
  expectedResult: string;
  interpretation: string;
  limitations: string;
  sourceId: string;
};
export type MonitoringItem = {
  marker: string;
  target: string;
  why: string;
  sourceId: string;
};
export type ExperienceLink = { title: string; url: string; publisher: "PsychonautWiki" };
export type ExternalWikiService = "Wikipedia" | "Examine" | "PsychonautWiki";
export type ExternalWikiLink = { service: ExternalWikiService; url: string; title?: string };
export type Substance = {
  slug: string; name: string; subtitle: string; summary: string; description: string;
  aliases: string[]; formula: string; molecularWeight: string; pubchemCid: number | null; smiles: string;
  category: string; tags: string[]; accent: string;
  evidenceNote: string; reviewedAt: string; editorialStatus: EditorialStatus;
  halfLife: { label: string; low: number | null; high: number | null; context: string; sourceId: string; observationId?: string };
  pkObservations: PKObservation[];
  kinetics: { onset: string; peak: string; duration: string; bioavailability: string; metabolism: string; sourceId: string; timeline?: DurationRoute[]; markers?: TimingMarker[] };
  modifiers: { label: string; effect: string; detail: string; sourceId: string; observationId: string; factorType: "smoking" | "pregnancy" | "enzyme" | "genotype" | "other"; direction: "slower" | "faster" | "variable" }[];
  doses: DoseContext[]; effects: Observation[]; outcomes: Observation[]; claims: Claim[];
  mechanisms: { title: string; description: string; sourceId: string; conceptId?: string }[];
  cautions: { title: string; description: string; sourceId: string }[];
  monitoring?: MonitoringItem[];
  monitoringCadence?: string;
  interactions: Interaction[];
  identificationTests?: IdentificationTest[];
  experienceLinks: ExperienceLink[]; externalWikiLinks?: ExternalWikiLink[];
  references: Reference[];
  legal: { jurisdiction: string; activity: string; status: string; sourceUrl: string; asOf: string }[];
};
export type CatalogSubstance = Pick<Substance, "slug" | "name" | "summary" | "aliases" | "formula" | "category" | "tags" | "editorialStatus" | "reviewedAt"> & { halfLifeLabel: string };
export type Hyperedge = { id: string; label: string; relation: string; members: string[]; memberRoles: Record<string,string>; description: string; sourceUrl: string; sourceUrls?: string[]; directedSteps?: DirectedStep[] };
export type KnowledgeGraphData = { substances: CatalogSubstance[]; tags: Tag[]; hyperedges: Hyperedge[]; truncated?: boolean };
export type Revision = { revision: number; publishedAt: string; sourceCommit: string | null; contributors: string[]; reviewers: string[]; editorialStatus: EditorialStatus; summary: string; contentHash: string };
export function toCatalogSubstance(s: Substance): CatalogSubstance { return {slug:s.slug,name:s.name,summary:s.summary,aliases:s.aliases,formula:s.formula,category:s.category,tags:s.tags,editorialStatus:s.editorialStatus,reviewedAt:s.reviewedAt,halfLifeLabel:s.halfLife.label}; }
export function conceptPath(t: Pick<Tag,"id"|"kind">): string { return `/${t.kind === "effect" ? "effects" : t.kind === "outcome" ? "outcomes" : "concepts"}/${t.id}`; }
