import { mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  INTERACTION_CAPTURE_PATH, SNAPSHOT_PATH, formatSnapshot,
  type InteractionCapture, type InteractionCategory, type PwSnapshot, type PwSubstance,
} from "./psychonautwiki-data";

const ENDPOINT = "https://api.psychonautwiki.org/";
const USER_AGENT = "BHWiki/0.1 (+https://github.com/AntonIXO/BHWiki; PsychonautWiki snapshot import)";
const LICENSE = "PsychonautWiki semantic data, CC BY 4.0 (https://creativecommons.org/licenses/by/4.0/) per https://psychonautwiki.org/wiki/Copyrights. Attribution: PsychonautWiki contributors.";
const span = "{ min max units }";
const QUERY = `{
  substances(limit: 1000) {
    name url commonNames systematicName
    roas {
      name
      dose { units threshold heavy light { min max } common { min max } strong { min max } }
      duration { onset ${span} comeup ${span} peak ${span} offset ${span} afterglow ${span} total ${span} }
    }
    dangerousInteractions { name }
    unsafeInteractions { name }
    uncertainInteractions { name }
  }
}`;
const categories: InteractionCategory[] = ["dangerous", "unsafe", "uncertain"];
type ApiSubstance = PwSubstance & { [K in `${InteractionCategory}Interactions`]: { name: string }[] | null };
type Health = { status: string; ready: boolean; substances: number; aliases: number; snapshot_age_seconds: number; version: string };

async function fetchPsychonautWiki(root: string) {
  const healthResponse = await fetch(new URL("health", ENDPOINT), { headers: { "user-agent": USER_AGENT } });
  if (!healthResponse.ok) throw new Error(`PsychonautWiki API /health HTTP ${healthResponse.status}`);
  const health = (await healthResponse.json()) as Health;
  if (!health.ready) throw new Error("PsychonautWiki API is not ready");
  // /health is CDN-cached: the origin produced it `age` seconds before the response date.
  const observedAt = Date.parse(healthResponse.headers.get("date") ?? "") - Number(healthResponse.headers.get("age") ?? 0) * 1000;
  if (Number.isNaN(observedAt)) throw new Error("PsychonautWiki API /health response has no date");

  const response = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "content-type": "application/json", "user-agent": USER_AGENT },
    body: JSON.stringify({ query: QUERY }),
  });
  if (!response.ok) throw new Error(`PsychonautWiki API HTTP ${response.status}`);
  const body = (await response.json()) as { data?: { substances: ApiSubstance[] }; errors?: { message: string }[] };
  if (body.errors?.length || !body.data) throw new Error(`PsychonautWiki API error: ${body.errors?.map((error) => error.message).join("; ")}`);
  const listed = body.data.substances;
  if (listed.length !== health.substances) throw new Error(`API listed ${listed.length} substances; /health reports ${health.substances}`);

  const retrievedAt = new Date().toISOString().slice(0, 10);
  const substances: PwSubstance[] = listed
    .map(({ name, url, commonNames, systematicName, roas }) => ({
      name, url, commonNames, systematicName,
      roas: roas ? [...roas].sort((a, b) => a.name.localeCompare(b.name)) : null,
    }))
    .sort((a, b) => a.name.localeCompare(b.name));
  const snapshot: PwSnapshot = {
    schemaVersion: 1,
    source: ENDPOINT,
    license: LICENSE,
    retrievedAt,
    snapshotBuiltOn: new Date(observedAt - health.snapshot_age_seconds * 1000).toISOString().slice(0, 10),
    health: { substances: health.substances, aliases: health.aliases, snapshotAgeSeconds: health.snapshot_age_seconds, version: health.version },
    substances,
  };
  const capture: InteractionCapture = {
    schemaVersion: 1,
    retrievedAt,
    interactions: listed
      .flatMap((substance) => categories.flatMap((category) => (substance[`${category}Interactions`] ?? []).map(({ name }) => ({ substance: substance.name, category, target: name }))))
      .sort((a, b) => a.substance.localeCompare(b.substance) || a.category.localeCompare(b.category) || a.target.localeCompare(b.target)),
  };
  writeFileSync(path.join(root, SNAPSHOT_PATH), formatSnapshot(snapshot));
  const capturePath = path.join(root, INTERACTION_CAPTURE_PATH);
  mkdirSync(path.dirname(capturePath), { recursive: true });
  writeFileSync(capturePath, `${JSON.stringify(capture, null, 2)}\n`);
  return { retrievedAt, snapshotBuiltOn: snapshot.snapshotBuiltOn, substances: substances.length, interactions: capture.interactions.length };
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  fetchPsychonautWiki(path.resolve(import.meta.dirname, "..")).then((summary) => console.log(summary));
}
