import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { loadCorpus } from "../src/lib/content-markdown";
import type { Substance } from "../src/lib/types";
import {
  CROSSWALK_PATH, INTERACTION_CAPTURE_PATH, INTERACTION_REVIEWS_PATH, SNAPSHOT_PATH,
  canonicalPageUrl, nameKey, readJson,
  type Crosswalk, type InteractionCapture, type InteractionCategory, type PwSnapshot,
} from "./psychonautwiki-data";

export type InteractionReview = { slug: string; target: string; outcome: "added" | "rejected"; interactionId?: string; note: string; reviewedAt: string };
export type InteractionReviews = { schemaVersion: 1; reviews: InteractionReview[] };
export type LeadTarget = { otherSlug: string } | { targetClassId: string } | null;
export type InteractionLead = { slug: string; pwSubstance: string; category: InteractionCategory; target: string; resolved: LeadTarget };

// PsychonautWiki class targets with an exact BHWiki class concept (content/concepts/class).
const classTargets: Record<string, string> = {
  antihistamines: "antihistamine", benzodiazepines: "benzodiazepine", deliriants: "deliriant", depressants: "depressant",
  dissociatives: "dissociative", opioids: "opioid", psychedelics: "psychedelic", stimulants: "stimulant",
};

export function resolveTarget(target: string, crosswalk: Crosswalk, substances: Pick<Substance, "slug" | "name" | "aliases">[]): LeadTarget {
  const key = nameKey(target);
  const crosswalked = crosswalk.entries.find((entry) => entry.relation === "same-substance" && nameKey(entry.pwName) === key);
  if (crosswalked) return { otherSlug: crosswalked.slug };
  const articles = substances.filter((article) => [article.slug, article.name, ...article.aliases].some((name) => nameKey(name) === key));
  if (articles.length === 1) return { otherSlug: articles[0].slug };
  const classId = Object.hasOwn(classTargets, key) ? classTargets[key] : undefined;
  return classId ? { targetClassId: classId } : null;
}

const reviewKey = (slug: string, target: string) => `${slug}\u0000${nameKey(target)}`;

export function interactionLeads(substances: Substance[], crosswalk: Crosswalk, capture: InteractionCapture, reviews: InteractionReviews): InteractionLead[] {
  const slugByPwName = new Map(crosswalk.entries.filter((entry) => entry.relation === "same-substance").map((entry) => [entry.pwName, entry.slug]));
  const reviewed = new Set(reviews.reviews.map((review) => reviewKey(review.slug, review.target)));
  const leads: InteractionLead[] = [];
  for (const item of capture.interactions) {
    const slug = slugByPwName.get(item.substance);
    if (!slug || reviewed.has(reviewKey(slug, item.target))) continue;
    const article = substances.find((candidate) => candidate.slug === slug)!;
    const resolved = resolveTarget(item.target, crosswalk, substances);
    const curated = resolved !== null && article.interactions.some((interaction) => "otherSlug" in resolved
      ? interaction.otherSlug === resolved.otherSlug
      : interaction.targetClassId === resolved.targetClassId);
    if (!curated) leads.push({ slug, pwSubstance: item.substance, category: item.category, target: item.target, resolved });
  }
  return leads.sort((a, b) => a.slug.localeCompare(b.slug) || a.target.localeCompare(b.target) || a.category.localeCompare(b.category));
}

export function validateReviews(reviews: InteractionReviews, substances: Substance[]): void {
  if (reviews.schemaVersion !== 1 || !Array.isArray(reviews.reviews)) throw new Error("Unexpected interaction review log format");
  const seen = new Set<string>();
  for (const review of reviews.reviews) {
    const label = `${review.slug} × ${review.target}`;
    const article = substances.find((candidate) => candidate.slug === review.slug);
    if (!article) throw new Error(`Review names an unknown article: ${label}`);
    if (seen.has(reviewKey(review.slug, review.target))) throw new Error(`Duplicate interaction review: ${label}`);
    seen.add(reviewKey(review.slug, review.target));
    if (review.outcome !== "added" && review.outcome !== "rejected") throw new Error(`Unknown review outcome: ${label}`);
    if (!review.note?.trim() || !/^\d{4}-\d{2}-\d{2}$/.test(review.reviewedAt)) throw new Error(`Review needs a note and an ISO date: ${label}`);
    if (review.outcome === "added" && !article.interactions.some((interaction) => interaction.id === review.interactionId)) {
      throw new Error(`An added review must name an interaction on the article: ${label}`);
    }
  }
}

function printLeads(root: string, slug: string | undefined) {
  if (!existsSync(path.join(root, INTERACTION_CAPTURE_PATH))) throw new Error("No local interaction capture. Run `bun run content:psychonautwiki-fetch` first.");
  const capture = readJson<InteractionCapture>(root, INTERACTION_CAPTURE_PATH);
  const crosswalk = readJson<Crosswalk>(root, CROSSWALK_PATH);
  const reviews = readJson<InteractionReviews>(root, INTERACTION_REVIEWS_PATH);
  const snapshot = readJson<PwSnapshot>(root, SNAPSHOT_PATH);
  const { substances } = loadCorpus(path.join(root, "content"));
  validateReviews(reviews, substances);
  const leads = interactionLeads(substances, crosswalk, capture, reviews).filter((lead) => !slug || lead.slug === slug);
  const urls = new Map(snapshot.substances.map((substance) => [substance.name, canonicalPageUrl(substance.url)]));
  const lines = [
    "# PsychonautWiki interaction leads",
    "",
    `Capture retrieved ${capture.retrievedAt}. Leads are unverified and must not be cited or published. Add an interaction only from primary sources, then log the outcome in ${INTERACTION_REVIEWS_PATH}.`,
  ];
  let current = "";
  for (const lead of leads) {
    if (lead.slug !== current) {
      current = lead.slug;
      lines.push("", `## ${lead.slug} (${lead.pwSubstance}, ${urls.get(lead.pwSubstance)})`);
    }
    const target = lead.resolved === null ? "unresolved" : "otherSlug" in lead.resolved ? `substance:${lead.resolved.otherSlug}` : `tag:${lead.resolved.targetClassId}`;
    lines.push(`- ${lead.category} · ${lead.target} → ${target}`);
  }
  lines.push("", `${leads.length} lead(s).`);
  console.log(lines.join("\n"));
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const at = process.argv.indexOf("--slug");
  printLeads(path.resolve(import.meta.dirname, ".."), at > 0 ? process.argv[at + 1] : undefined);
}
