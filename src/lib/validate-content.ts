import { validateResearchArticle, validateResearchCorpus } from "./validate-research";
import { validateSourceDisclosure } from "./source-disclosures";
import type { Substance, Tag, Hyperedge } from './types';

type RecordValue = Record<string,unknown>;
function fail(path:string,message:string):never {throw new Error(`${path}: ${message}`);}
function record(value:unknown,path:string):RecordValue { if(!value||typeof value!=='object'||Array.isArray(value))fail(path,'expected object');return value as RecordValue; }
function text(value:unknown,path:string){if(typeof value!=='string'||!value.trim())fail(path,'expected nonempty text');}
function texts(value:unknown,path:string){if(!Array.isArray(value))fail(path,'expected array');value.forEach((v,i)=>text(v,`${path}[${i}]`));}
function choice(value:unknown,values:string[],path:string){if(typeof value!=='string'||!values.includes(value))fail(path,'invalid category');}
function numberOrNull(value:unknown,path:string){if(value!==null&&(typeof value!=='number'||!Number.isFinite(value)||value<0))fail(path,'expected nonnegative finite number or null');}
function optionalText(value:unknown,path:string){if(value!==null)text(value,path);}
function objects(value:unknown,path:string,validate:(r:RecordValue,p:string)=>void){if(!Array.isArray(value))fail(path,'expected array');value.forEach((v,i)=>validate(record(v,`${path}[${i}]`),`${path}[${i}]`));}
function fields(r:RecordValue,keys:string[],path:string){keys.forEach(k=>text(r[k],`${path}.${k}`));}
function https(value:unknown,path:string){text(value,path);try{const u=new URL(value as string);if(u.protocol!=='https:'||u.username||u.password)fail(path,'expected public HTTPS URL');}catch{fail(path,'expected public HTTPS URL');}}
function observation(r:RecordValue,p:string){fields(r,['conceptId','name','description','sourceId','population','exposure'],p);choice(r.direction,['Increased','Decreased','Variable'],p+'.direction');choice(r.evidence,['Human research','Subjective reports','Limited research'],p+'.evidence');optionalText(r.instrument,p+'.instrument');optionalText(r.magnitude,p+'.magnitude');}
function timeSpan(value:unknown,path:string){const span=record(value,path);choice(span.unit,['seconds','minutes','hours'],path+'.unit');numberOrNull(span.min,path+'.min');numberOrNull(span.max,path+'.max');if(span.min!==null&&span.max!==null&&(span.max as number)<(span.min as number))fail(path,'range is reversed');}

/** Reject malformed published projections before rendering, not only at TypeScript build time. */
export function validateSubstance(value:unknown):asserts value is Substance {
 const s=record(value,'substance');const p=typeof s.slug==='string'?s.slug:'substance';
 fields(s,['slug','name','subtitle','summary','description','formula','molecularWeight','smiles','category','accent','evidenceNote','reviewedAt'],p);
 if(!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(s.slug as string))fail(p,'invalid slug');
 if(s.pubchemCid!==null&&(!Number.isInteger(s.pubchemCid)||(s.pubchemCid as number)<1))fail(p,'invalid compound identifier');
 if(s.pubchemCid===null&&['formula','molecularWeight','smiles'].some(key=>s[key]!=='Not established'))fail(p,'unresolved identity must not claim a molecular structure');
 if(!/^\d{4}-\d{2}-\d{2}$/.test(s.reviewedAt as string)||!Number.isFinite(Date.parse(s.reviewedAt as string)))fail(p,'invalid source check date');
 if('evidenceLevel' in s)fail(p,'global evidence badges are not supported');
 texts(s.aliases,p+'.aliases');
 const normalizedAliases=(s.aliases as string[]).map(alias=>alias.trim().toLocaleLowerCase('en'));
 if(new Set(normalizedAliases).size!==normalizedAliases.length)fail(p+'.aliases','duplicate alias');
 choice(s.editorialStatus,['sourced-draft','editorially-reviewed'],p+'.editorialStatus');
 const half=record(s.halfLife,p+'.halfLife');fields(half,['label','context','sourceId'],p+'.halfLife');if(half.observationId!==undefined)text(half.observationId,p+'.halfLife.observationId');numberOrNull(half.low,p+'.halfLife.low');numberOrNull(half.high,p+'.halfLife.high');
 const kinetics=record(s.kinetics,p+'.kinetics');fields(kinetics,['onset','peak','duration','bioavailability','metabolism','sourceId'],p+'.kinetics');
 if(kinetics.markers!==undefined){objects(kinetics.markers,p+'.kinetics.markers',(marker,k)=>{fields(marker,['id','label','analyte','population','note','sourceId'],k);if(!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(String(marker.id)))fail(k+'.id','invalid marker ID');choice(marker.measurement,['subjective','plasma'],k+'.measurement');choice(marker.unit,['seconds','minutes','hours'],k+'.unit');numberOrNull(marker.at,k+'.at');if(marker.at===null)fail(k+'.at','marker time must be defined');});const ids=(kinetics.markers as {id:string}[]).map(marker=>marker.id);if(new Set(ids).size!==ids.length)fail(p+'.kinetics.markers','duplicate marker ID');}
 if(kinetics.timeline!==undefined)objects(kinetics.timeline,p+'.kinetics.timeline',(r,k)=>{fields(r,['route','population','sourceId','note'],k);if(r.total!==null)timeSpan(r.total,k+'.total');objects(r.phases,k+'.phases',(phase,pk)=>{choice(phase.name,['onset','comeup','peak','offset','after-effects'],pk+'.name');timeSpan(phase,pk);});const names=(r.phases as {name:string}[]).map(phase=>phase.name);if(new Set(names).size!==names.length)fail(k,'duplicate duration phase');});
 objects(s.pkObservations,p+'.pkObservations',(r,k)=>{fields(r,['id','analyte','context','sourceId'],k);for(const key of ['route','formulation','population'])if(r[key]!==undefined)optionalText(r[key],`${k}.${key}`);choice(r.endpoint,['elimination-half-life'],k+'.endpoint');choice(r.statistic,['approximate','study-mean','reported-range','not-established'],k+'.statistic');choice(r.unit,['hours'],k+'.unit');for(const key of ['value','low','high'])numberOrNull(r[key],`${k}.${key}`);if(typeof r.modelEligible!=='boolean')fail(k,'modelEligible must be boolean');if(r.low!==null&&r.high!==null&&(r.high as number)<(r.low as number))fail(k,'range is reversed');if(r.modelEligible){if(r.statistic==='not-established')fail(k,'unknown half-life cannot be modeled');const lo=r.statistic==='reported-range'?r.low:r.value;const hi=r.statistic==='reported-range'?r.high:r.value;if(typeof lo!=='number'||typeof hi!=='number'||lo<=0||hi<lo)fail(k,'model requires a positive, defined estimate or range');}});
 objects(s.modifiers,p+'.modifiers',(r,k)=>{fields(r,['label','effect','detail','sourceId','observationId'],k);choice(r.factorType,['smoking','pregnancy','enzyme','genotype','other'],k+'.factorType');choice(r.direction,['slower','faster','variable'],k+'.direction');});
 objects(s.doses,p+'.doses',(r,k)=>{fields(r,['label','amount','unit','ingredient','formulation','frequency','duration','population','purpose','note','sourceId'],k);if(r.route!==undefined)optionalText(r.route,k+'.route');numberOrNull(r.quantity,k+'.quantity');numberOrNull(r.quantityMax,k+'.quantityMax');if(r.quantity!==null&&r.quantityMax!==null&&(r.quantityMax as number)<(r.quantity as number))fail(k,'dose range is reversed');choice(r.sourceCategory,['research','approved-label','reference','community'],k+'.sourceCategory');if(r.foodRelation!==undefined)choice(r.foodRelation,['empty-stomach','with-food','with-or-without-food','food-effect-not-established'],k+'.foodRelation');if(r.solubility!==undefined)choice(r.solubility,['water-soluble','fat-soluble','formulation-dependent','solubility-not-established'],k+'.solubility');if(r.absorptionNote!==undefined&&r.absorptionNote!==null)text(r.absorptionNote,k+'.absorptionNote');});
 objects(s.effects,p+'.effects',observation);objects(s.outcomes,p+'.outcomes',observation);
 objects(s.mechanisms,p+'.mechanisms',(r,k)=>fields(r,['title','description','sourceId'],k));objects(s.cautions,p+'.cautions',(r,k)=>fields(r,['title','description','sourceId'],k));
 if(!('interactions' in s))s.interactions=[];
 objects(s.interactions,p+'.interactions',(r,k)=>{fields(r,['id','name','summary','sourceId'],k);if(r.otherSlug!==null){text(r.otherSlug,k+'.otherSlug');if(!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(r.otherSlug as string))fail(k,'invalid related slug');}});
 if(new Set((s.interactions as {id:string}[]).map(i=>i.id)).size!==(s.interactions as unknown[]).length)fail(p,'duplicate interaction ID');
 if(s.identificationTests!==undefined)objects(s.identificationTests,p+'.identificationTests',(r,k)=>{fields(r,['name','target','expectedResult','interpretation','limitations','sourceId'],k);choice(r.kind,['presumptive-reagent','instrumental-confirmation'],k+'.kind');});
 if(!('experienceLinks' in s))s.experienceLinks=[];
 objects(s.experienceLinks,p+'.experienceLinks',(r,k)=>{fields(r,['title'],k);if(r.publisher!=='PsychonautWiki')fail(k,'publisher must be PsychonautWiki');https(r.url,k+'.url');const u=new URL(r.url as string);if(u.hostname!=='psychonautwiki.org'||u.search||u.hash||!/^\/wiki\/[^/]+$/.test(u.pathname))fail(k,'expected a PsychonautWiki substance URL');});
 if((s.experienceLinks as unknown[]).length>1)fail(p,'at most one experience link');
 if('externalWikiLinks' in s){objects(s.externalWikiLinks,p+'.externalWikiLinks',(r,k)=>{choice(r.service,['Wikipedia','Examine','PsychonautWiki'],k+'.service');if(r.title!==undefined)text(r.title,k+'.title');https(r.url,k+'.url');const u=new URL(r.url as string);if(u.search||u.hash)fail(k,'external wiki URL must not contain a search or hash');if(r.service==='Wikipedia'&&(u.hostname!=='en.wikipedia.org'||!/^\/wiki\/[^/]+$/.test(u.pathname)))fail(k,'expected a direct English Wikipedia article URL');if(r.service==='Examine'&&(u.hostname!=='examine.com'||!/^\/(?:supplements|interventions|conditions|outcomes)\/[^/]+\/?$/.test(u.pathname)))fail(k,'expected a direct Examine page URL');if(r.service==='PsychonautWiki'&&(u.hostname!=='psychonautwiki.org'||!/^\/wiki\/[^/]+$/.test(u.pathname)))fail(k,'expected a direct PsychonautWiki page URL');});
  const externalServices=(s.externalWikiLinks as {service:string}[]).map(link=>link.service);if(new Set(externalServices).size!==externalServices.length)fail(p,'at most one external wiki link per service');}
 objects(s.references,p+'.references',(r,k)=>{fields(r,['id','title','authors','kind','insight','limitation'],k);https(r.url,k+'.url');if(!Number.isInteger(r.year)||(r.year as number)<1600||(r.year as number)>2200)fail(k,'invalid publication year');if(r.pmid!==undefined&&!/^\d+$/.test(String(r.pmid)))fail(k,'invalid PMID');if(r.doi!==undefined&&!/^10\.\d{4,9}\/\S+$/.test(String(r.doi)))fail(k,'invalid DOI');validateSourceDisclosure(r,k);});
 objects(s.legal,p+'.legal',(r,k)=>{fields(r,['jurisdiction','activity','status','asOf'],k);https(r.sourceUrl,k+'.sourceUrl');if(!/^\d{4}-\d{2}-\d{2}$/.test(String(r.asOf)))fail(k,'invalid legal date');});
 objects(s.claims,p+'.claims',(r,k)=>{fields(r,['id','assertion','relation','context','limitation'],k);choice(r.assessment,['not-formally-assessed'],k+'.assessment');texts(r.sourceIds,k+'.sourceIds');texts(r.conflictingSourceIds,k+'.conflictingSourceIds');if(!(r.sourceIds as string[]).length)fail(k,'claim needs a source');objects(r.participants,k+'.participants',(m,j)=>fields(m,['entityId','role'],j));if((r.participants as unknown[]).length<2)fail(k,'claim needs participants');});
 const typed=value as Substance;
 const hasSourceTrail=typed.references.some(reference=>reference.id!=='pubchem');
 const hasEvidence=[typed.doses,typed.modifiers,typed.effects,typed.outcomes,typed.mechanisms,typed.cautions,typed.claims,typed.interactions,typed.legal,typed.identificationTests??[]].some(items=>items.length>0);
 if(typed.subtitle==='Source-backed identity stub.'&&!hasEvidence)fail(p,'identity-only substance stubs must not be published');
 if(typed.subtitle==='Reddit index evidence trail.'&&!hasEvidence)fail(p,'Reddit index import must contain structured evidence or be omitted');
 if(!hasSourceTrail&&!hasEvidence)fail(p,'published substance needs a non-identity source or evidence record');
 const sources=new Set(typed.references.map(r=>r.id));if(sources.size!==typed.references.length)fail(p,'duplicate reference ID');
 for(const statement of [...typed.effects,...typed.outcomes,...typed.doses,...typed.modifiers,...typed.mechanisms,...typed.cautions,...typed.interactions,...typed.pkObservations,...(typed.identificationTests ?? []),typed.halfLife,typed.kinetics])if(!sources.has(statement.sourceId))fail(p,`unknown source ${statement.sourceId}`);
 for(const route of typed.kinetics.timeline??[])if(!sources.has(route.sourceId))fail(p,`unknown source ${route.sourceId}`);
 for(const marker of typed.kinetics.markers??[])if(!sources.has(marker.sourceId))fail(p,`unknown source ${marker.sourceId}`);
 const observations=new Set(typed.pkObservations.map(o=>o.id));if(observations.size!==typed.pkObservations.length)fail(p,'duplicate PK observation');
 if(typed.halfLife.observationId && !observations.has(typed.halfLife.observationId))fail(p,`unknown PK observation ${typed.halfLife.observationId}`);
 for(const item of typed.modifiers)if(!observations.has(item.observationId))fail(p,`unknown PK observation ${item.observationId}`);
 for(const claim of typed.claims)for(const id of [...claim.sourceIds,...claim.conflictingSourceIds])if(!sources.has(id))fail(p,`unknown claim source ${id}`);
 if(new Set(typed.claims.map(c=>c.id)).size!==typed.claims.length)fail(p,'duplicate local claim ID');
 validateResearchArticle(typed);
}

export function validateContent(bundle:{substances:Substance[];tags:Tag[];hyperedges:Hyperedge[]}):void {
 const {substances,tags,hyperedges}=bundle;
 const entityIds=new Set<string>();
 for(const s of substances){validateSubstance(s);const id=`substance:${s.slug}`;if(entityIds.has(id))fail(id,'duplicate identity');entityIds.add(id);}
 const kinds=['class','chemical-family','mechanism','target','neurotransmitter','enzyme','effect','outcome','exposure','legal'];
 for(const t of tags){if(substances.some(s=>s.slug===t.id))fail(t.id,'slug is already used by a substance');const id=`tag:${t.id}`;if(entityIds.has(id))fail(id,'duplicate identity');entityIds.add(id);text(t.label,id);text(t.description,id);choice(t.kind,kinds,id);if(!t.sourceUrls?.length)fail(id,'concept needs a source');t.sourceUrls.forEach(u=>https(u,id));}
 const byId=new Map(tags.map(t=>[t.id,t]));
 for(const t of tags)for(const id of t.relatedIds||[])if(!byId.has(id))fail(t.id,`unknown related concept ${id}`);
 for(const s of substances){for(const id of s.tags)if(!byId.has(id))fail(s.slug,`unknown concept ${id}`);for(const [list,kind] of [[s.effects,'effect'],[s.outcomes,'outcome']] as const)for(const o of list)if(byId.get(o.conceptId)?.kind!==kind)fail(s.slug,`${o.conceptId} must be a ${kind}`);for(const c of s.claims){for(const m of c.participants)if(!entityIds.has(m.entityId))fail(s.slug,`unknown claim participant ${m.entityId}`);if(new Set(c.participants.map(m=>m.entityId)).size!==c.participants.length)fail(s.slug,'duplicate claim participant');}for(const interaction of s.interactions)if(interaction.otherSlug!==null&&(!entityIds.has(`substance:${interaction.otherSlug}`)||interaction.otherSlug===s.slug))fail(s.slug,`unknown interaction target ${interaction.otherSlug}`);for(const id of s.tags)if(byId.get(id)?.kind==='legal'&&!s.legal.length)fail(s.slug,'legal tag needs dated article context');}
 validateResearchCorpus(substances,tags,hyperedges);
 const seen=new Set<string>();for(const edge of hyperedges){if(seen.has(edge.id))fail(edge.id,'duplicate hyperedge');seen.add(edge.id);https(edge.sourceUrl,edge.id);for(const url of edge.sourceUrls||[])https(url,edge.id);if(new Set(edge.members).size<2||new Set(edge.members).size!==edge.members.length)fail(edge.id,'relationship needs distinct members');for(const id of edge.members){if(!entityIds.has(id))fail(edge.id,`unknown member ${id}`);text(edge.memberRoles[id],`${edge.id}.${id}.role`);}}
}
