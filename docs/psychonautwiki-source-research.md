# PsychonautWiki as a structured data source

Retrieval date: 2026-11-06. Live observations ran from 19:15 to 19:32 UTC. Fastly POP labels in response headers include `CWB` and `FRA`. Every statement below cites the URL where it was observed. Statements not directly observed are marked `[INFERENCE]`. This document records evidence. It is not legal advice.

## Method

About 95 sequential, single requests went to PsychonautWiki-operated hosts (`psy.is`, `psychonautwiki.org` and `api.psychonautwiki.org`). Each request used the User-Agent `BHWiki-research/0.1 (+https://github.com/)`. No crawling, recursion or bulk page download took place. The largest response was one GraphQL list containing only substance names. Some verification requests went to `/w/api.php` and `/wiki/Template:` paths. These paths are disallowed for crawlers by [robots.txt](https://psychonautwiki.org/robots.txt), as described in section 5. They were one-off manual checks. An importer must not repeat them at scale without permission. GitHub data came from the authenticated `gh api` CLI.

Commands (`UA='BHWiki-research/0.1 (+https://github.com/)'`, `API=https://psychonautwiki.org/w/api.php`):

```sh
# psy.is
curl -sS -I -A "$UA" https://psy.is/ ; curl -sS -I -A "$UA" https://psy.is/LSD ; curl -sS -I -A "$UA" https://psy.is/wiki/LSD
curl -sS -L -A "$UA" -o /dev/null -w '%{url_effective} %{num_redirects}\n' https://psy.is/LSD   # also /wiki/LSD, /Ketamine
dig +short psy.is A; dig +short psy.is NS; dig +short psychonautwiki.org A; dig +short psychonautwiki.org NS
whois -h whois.isnic.is psy.is ; whois psychonautwiki.org

# robots
curl -sS -A "$UA" https://psychonautwiki.org/robots.txt
curl -sS -A "$UA" -D - https://api.psychonautwiki.org/robots.txt

# GraphQL
curl -sS -A "$UA" -H 'Content-Type: application/json' -X POST https://api.psychonautwiki.org/ --data @introq.json
#   introq.json = the standard graphql-js IntrospectionQuery (FullType / InputValue / TypeRef fragments, includeDeprecated: true)
curl ... --data '{"query":"{ substances(query: \"LSD\") { name url featured summary systematicName commonNames addictionPotential toxicity crossTolerances class { chemical psychoactive } tolerance { full half zero } roas { name dose { units threshold heavy common { min max } light { min max } strong { min max } } duration { afterglow { min max units } comeup { min max units } duration { min max units } offset { min max units } onset { min max units } peak { min max units } total { min max units } } bioavailability { min max } } images { thumb image } effects { name url } uncertainInteractions { name } unsafeInteractions { name } dangerousInteractions { name } } }"}'
curl ... --data '{"query":"{ substances(query: \"Ketamine\") { ...same ROA selection... roa { oral { name } insufflated { name } ... } } }"}'
curl ... --data '{"query":"{ substances(limit: 2000) { name } }"}'
curl ... --data '{"query":"{ substances(limit: 5, offset: 370) { name } }"}'      # and offset: 373
curl ... --data '{"query":"{ effectsBySubstance(substance: \"LSD\", limit: 10) { name url } }"}'
curl ... --data '{"query":"{ substancesByEffect(effect: [\"Euphoria\"], limit: 5) { name } }"}'
curl -sS -A "$UA" -X OPTIONS -D - -o /dev/null https://api.psychonautwiki.org/ -H 'Origin: https://example.org' -H 'Access-Control-Request-Method: POST' -H 'Access-Control-Request-Headers: content-type'
curl -sS -A "$UA" "https://api.psychonautwiki.org/?query=%7B%20substances(query%3A%20%22Caffeine%22)%20%7B%20name%20url%20%7D%20%7D"
curl -sS -A "$UA" https://api.psychonautwiki.org/health ; curl -sS -A "$UA" https://api.psychonautwiki.org/metrics

# MediaWiki / Semantic MediaWiki (single requests)
"$API?action=query&meta=siteinfo&siprop=general|rightsinfo|statistics|extensions&format=json&formatversion=2"
"$API?action=browsebysubject&subject=LSD&format=json"                      # also Pregabalin, Caffeine
"$API?action=ask&format=json&query=[[LSD]]|?Sublingual_common_dose|?Sublingual_min_common_dose|?Sublingual_max_common_dose|?Sublingual_dose_units|?DangerousInteraction|?Modification_date"
"$API?action=query&prop=revisions&titles=LSD&rvprop=ids|timestamp|user|comment|sha1|size|content&rvslots=main&format=json&formatversion=2"
"$API?action=query&prop=revisions&titles=Template:SubstanceBox/LSD&rvprop=ids|timestamp|user|comment|sha1|size|content&rvslots=main&format=json&formatversion=2"
"$API?action=query&prop=revisions&revids=161047&rvprop=ids|timestamp|user|comment|content&rvslots=main&format=json&formatversion=2"   # and revids=152462
"$API?action=query&prop=revisions&titles=Template:SubstanceBox/LSD&rvprop=ids|timestamp|user|comment&rvlimit=6&format=json&formatversion=2"
"$API?action=parse&page=Template:SubstanceBox/LSD&prop=revid|wikitext&format=json&formatversion=2"
"$API?action=mobileview&page=LSD&prop=revision|lastmodified|normalizedtitle&sections=0&format=json&formatversion=2"
"$API?action=smwbrowse&browse=property&params={\"limit\":500,\"offset\":0,\"search\":\"\",\"description\":false,\"prefLabel\":false,\"usageCount\":true}&format=json"
"$API?action=paraminfo&modules=query+approvedrevs|approve&format=json&formatversion=2"
"$API?action=query&meta=allmessages&ammessages=copyrightwarning|copyrightwarning2|copyright|copyrightpage|...&amlang=en&format=json&formatversion=2"
"$API?action=query&titles=File:Lsd bottle1.jpg|File:LSD.svg|File:Lsd brain scan.jpg|File:Harmchart.png&prop=imageinfo|categories|revisions&iiprop=user|timestamp|url|extmetadata&rvprop=content&rvslots=main&format=json&formatversion=2"
"$API?action=query&list=search&srsearch=<term>&srlimit=8&format=json&formatversion=2"   # terms listed where used
"$API?action=query&list=recentchanges&rcnamespace=0|10&rctype=edit|new&rcprop=title|timestamp|user|ids&rcend=2026-08-08T00:00:00Z&rclimit=500&format=json&formatversion=2"
"$API?action=query&prop=categoryinfo&titles=Category:Psychoactive substance&format=json&formatversion=2"
curl -sS -A "$UA" https://psychonautwiki.org/wiki/LSD                          # wgRevisionId, cachereport, infobox disclaimer
curl -sS -A "$UA" https://psychonautwiki.org/wiki/Template:SubstanceBox/LSD    # wgRevisionId vs wgCurRevisionId
curl -sS -A "$UA" https://psychonautwiki.org/sitemap/sitemap-index-mediawiki-pw_.xml

# GitHub
gh api 'orgs/psychonautwiki/repos?per_page=100&sort=pushed'
gh api repos/psychonautwiki/bifrost ; gh api 'repos/psychonautwiki/bifrost/commits?per_page=15' ; gh api repos/psychonautwiki/bifrost/branches
gh api 'repos/psychonautwiki/bifrost/issues?state=all&per_page=30&sort=updated' ; gh api repos/psychonautwiki/bifrost/issues/{75,70,64,63,73}
gh api -H 'Accept: application/vnd.github.raw' repos/psychonautwiki/bifrost/contents/<path>   # README.md, LICENSE, Cargo.toml, src/**
gh api repos/TripSit/drugs ; gh api -H 'Accept: application/vnd.github.raw' repos/TripSit/drugs/contents/{README.md,package.json}
```

The source code citations below use bifrost `master` at commit [`e2fb969aff088332e45ef54553838ee62801d6ec`](https://github.com/psychonautwiki/bifrost/commit/e2fb969aff088332e45ef54553838ee62801d6ec). The full introspection response was 47,103 bytes. Its SHA-256 was `0437a0ddadd96006e6b58f4d4a08733cd13391f843ca96053d294ed8933050a3`.

## Summary

- **Three license regimes apply.** [Copyrights](https://psychonautwiki.org/w/index.php?title=Copyrights&oldid=145652) says text and metadata are CC BY-SA 4.0. It says semantic data is "free for use by anyone for any purpose, when properly attributed" under CC BY 4.0. Files, experience reports and personal user information "are subject to their owner's copyright". Original "Disregard Everything I Say" articles are "probably" CC BY-NC-SA 4.0.
- **The GraphQL API is live and open but has no content terms.** [api.psychonautwiki.org](https://api.psychonautwiki.org/) needs no authentication and sends `access-control-allow-origin: *`. It sent no rate-limit headers. The API software, [bifrost](https://github.com/psychonautwiki/bifrost), is MIT-licensed. The API landing page states no content license or terms of use.
- **The live API serves a frozen snapshot.** On 2026-11-06, [/health](https://api.psychonautwiki.org/health) reported `"snapshot_age_seconds":11757123`, about 136 days, which means the snapshot was built around 2026-06-23. [/metrics](https://api.psychonautwiki.org/metrics) reported `bifrost_shaping_circuit_breaker_open 1` and `bifrost_revalidation_queue_due 376`. In bifrost, an open circuit breaker pauses revalidation. Pregabalin interactions in the API lag the wiki's Semantic MediaWiki (SMW) data from 2026-07-22.
- **Several API fields are broken.** `effects` returns the substance itself, `summary` returns the first infobox line, and `substancesByEffect` returns `[]`. The `roa.<route>.name` field is `null`, an observation with no matching issue. Open bifrost issues [#64](https://github.com/psychonautwiki/bifrost/issues/64) and [#75](https://github.com/psychonautwiki/bifrost/issues/75) report the `effects` and `summary` defects and stale data. Fix PR [#73](https://github.com/psychonautwiki/bifrost/pull/73) has been unmerged since 2026-07-16.
- **The project asks clients to use the API instead of crawling.** The [Main Page](https://psychonautwiki.org/w/index.php?title=Main_Page&oldid=170416) says "Please don't crawl the wiki. Use our API instead." [robots.txt](https://psychonautwiki.org/robots.txt) disallows `/w/`, which includes `api.php` apart from `action=mobileview`. It sets no `Crawl-delay`.
- **Semantic MediaWiki is the real data layer.** `action=browsebysubject` and `action=ask` on [api.php](https://psychonautwiki.org/w/api.php) return typed values and an `_MDAT` modification timestamp. The wiki has 435 SMW properties. Dosage properties follow `<Route>_<min|max>_<level>_dose` and similar patterns. Bifrost derives the API from the same data.
- **Approved Revs gates dosage values.** The values live in `Template:SubstanceBox/<Name>` pages. For LSD, the page view shows `wgRevisionId` 152462 from 2022-06-29. The latest revision, `wgCurRevisionId`, is 170000 from 2026-01-08. SMW and the API carry values from the approved revision, such as bioavailability 71–71. `prop=revisions` and `action=parse` return the latest, unapproved wikitext.
- **Dose and duration values are uncited community data.** In the LSD, Ketamine and Caffeine SubstanceBoxes, dose and duration values carry no `<ref>`. The few exceptions are bioavailability fields and one Ketamine peak time. The infobox disclaimer says dosage information "is gathered from users and resources for educational purposes only".
- **TripSit supplied some interactions.** Interactions are inline SMW annotations in article prose. Some entries cite references. [Template:DangerousInteractions/Intro](https://psychonautwiki.org/w/index.php?title=Template:DangerousInteractions/Intro&oldid=150155) says "Some of the listed interactions have been sourced from TripSit". [tripsit.me/combo](https://tripsit.me/combo) carries "© Copyright TripSit. All Rights Reserved."
- **Effects are an SMW property backed by the Subjective Effect Index.** The `Effect` property has 15,571 usages, and LSD has 93 values. The Subjective Effect Index (SEI) is CC BY-SA wiki text "principally derived from the collective experiences and analyses of our contributors". [Effect Index](https://effectindex.com/) is a separate site under CC BY-NC-SA 4.0.
- **psy.is is not a permalink scheme.** It sends 301 redirects into `Special:Search`, so `/wiki/LSD` breaks. Staff email uses `@psy.is`. The ISNIC registry lists the domain's expiry as 2026-11-21. BHWiki should keep canonical `https://psychonautwiki.org/wiki/<Title>` links.
- **The platform carries maintenance risk.** It runs MediaWiki 1.35.1, which mediawiki.org calls an obsolete LTS. MediaWiki 1.35.0–1.35.4 "contain a critical security issue". The wiki reports 21 active users. The API lists 373 substances. Category:Psychoactive substance holds 411 pages.

## 1. psy.is

### Path behavior (observed 2026-11-06)

| Request | Response | Final page |
| --- | --- | --- |
| `https://psy.is/` | `301`, `location: https://psychonautwiki.org/w/index.php?title=Special:Search&search=`, `server: Varnish` | Empty search page |
| `https://psy.is/LSD` | `301` to `…Special:Search&search=LSD` | `https://psychonautwiki.org/wiki/LSD` (2 redirects; search "go" match) |
| `https://psy.is/wiki/LSD` | `301` to `…Special:Search&search=wiki/LSD` | Search results for "wiki/LSD" (`wgCanonicalSpecialPageName":"Search"`) |
| `https://psy.is/Ketamine` | `301` to `…search=Ketamine` | `https://psychonautwiki.org/wiki/Ketamine` |
| `http://psy.is/LSD` | `HTTP/1.1 301`, same `location`, `Server: Varnish` | Same as HTTPS |
| `https://www.psy.is/` | `301` to `…Special:Search&search=` | Empty search page |

psy.is turns the path into a search query. A title resolves only when MediaWiki search finds an exact match. Paths that use the canonical `/wiki/` prefix do not resolve.

### Ownership signals

- **DNS (`dig`).** `psy.is` has A records `151.101.{2,66,130,194}.217` and NS `ns-cloud-d{1..4}.googledomains.com`. `psychonautwiki.org` has A records `151.101.{2,66,130,194}.137` and NS `ns-cloud-c{1..4}.googledomains.com`. `api.psychonautwiki.org` resolves to the same `.137` addresses. The same Varnish/`x-served-by: cache-…` headers came back from both domains. The wiki footer thanks [fastly.net](https://psychonautwiki.org/wiki/Copyrights). `[INFERENCE]` Both domains sit behind the same Fastly service.
- **ISNIC registry (`whois -h whois.isnic.is psy.is`).** `registrant: KS381-IS` lists `address: DE`. The domain was `created: November 21 2018` and `expires: November 21 2026`. The registry gives no organisation name.
- **psychonautwiki.org registry (`whois psychonautwiki.org`).** The record lists `Registrant Country: DE`, `Registrar: Squarespace Domains II LLC`, creation 2014-01-21 and expiry 2027-01-21.
- **Wiki content.** The [PsychonautWiki project page](https://psychonautwiki.org/w/index.php?title=PsychonautWiki&oldid=170290) lists staff as "Kenan (Kenan Sulayman, kenan@psy.is)" and "White (Nami, nami@psy.is)". A wiki search for `"psy.is"` returned `team@psy.is` and `donations@psy.is` on the Psychoactive substance index, Donate and experience pages. The search also found an `auto.psy.is` link on Routes of administration. The search ran through `list=search`.
- **No shortlink usage.** `insource:"https://psy.is"` returned 0 hits. The wiki does not advertise `psy.is/<Title>` links.

### Recommendation

Link canonical `https://psychonautwiki.org/wiki/<Title>` URLs, as BHWiki already does in [`content/substances/lsd.md`](../content/substances/lsd.md) line 220. psy.is is a project-controlled domain, judging by staff email and shared hosting. Its path behavior is a search redirect rather than a stable permalink. The registry also lists a 2026-11-21 expiry.

## 2. Licensing and terms

### Copyrights page, exact wikitext

Source: [Copyrights, oldid 145652](https://psychonautwiki.org/w/index.php?title=Copyrights&oldid=145652). User Unity last edited it on 2021-03-05T22:45:56Z with the comment "Replace DEIS link with Creative Commons link". The revision history (`rvlimit=8`) shows two moves: `PsychonautWiki:Licence` to `PsychonautWiki:Copyrights` on 2014-04-22, then to `Copyrights` on 2015-05-15.

```text
'''Any contributions you make are to be in accordance with [https://creativecommons.org/licenses/by-sa/4.0/ Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0)]; additional terms may apply.'''

Most data, including, but not limited to text and metadata, is provided under this licence.

Personal experience report stories and personal user information, not including semantic data, are subject to their owner's copyright.

File contributions, including, but not limited to images, are subject to their owner's copyright; additional terms may apply.

'''ONLY CONTRIBUTIONS WHICH SATISFY THE LICENCE REQUIREMENTS WILL BE ACCEPTED'''

* Semantic data is free for use by anyone for any purpose, when properly attributed: [https://creativecommons.org/licenses/by/4.0/ Attribution 4.0 International (CC BY 4.0)]

* Original articles from "Disregard Everything I Say" are probably licensed for any purpose other than commercial use: [https://creativecommons.org/licenses/by-nc-sa/4.0/ Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0)]
```

### Other declarations

- **Page footer.** Every page shows "Content is available under Creative Commons Attribution-ShareAlike 4.0 International unless otherwise noted." It links `/wiki/Copyrights` and includes `<link rel="license" href="/wiki/Copyrights"/>` ([Copyrights HTML](https://psychonautwiki.org/wiki/Copyrights)).
- **Declared site license.** `siprop=rightsinfo` returns `{"url": "Copyrights", "text": "Creative Commons Attribution-ShareAlike 4.0 International"}` ([siteinfo](https://psychonautwiki.org/w/api.php?action=query&meta=siteinfo&siprop=general%7Crightsinfo&format=json&formatversion=2)).
- **Edit-time grant.** `copyrightwarning` is the MediaWiki default, not customised. It reads "Please note that all contributions to {{SITENAME}} are considered to be released under the $2 (see $1 for details)…" ([allmessages](https://psychonautwiki.org/w/api.php?action=query&meta=allmessages&ammessages=copyrightwarning&amlang=en&format=json&formatversion=2)). `[INFERENCE]` MediaWiki core fills `$2` with the rights text above, CC BY-SA 4.0, and `$1` with the Copyrights link.
- **General disclaimer.** [General disclaimer, oldid 104987](https://psychonautwiki.org/w/index.php?title=General_disclaimer&oldid=104987) begins: "Any litigation against the PsychonautWiki ("The Project"), its owners, operators ("The Affiliates") and contributors … is subject to German laws. By using The Project you agree to indemnify and hold harmless from all losses, liabilities, damages and expenses …"
- **Privacy policy.** [Privacy policy, oldid 148216](https://psychonautwiki.org/w/index.php?title=Privacy_policy&oldid=148216) covers logging, the Hetzner data centre in Falkenstein, Germany, and analytics through Google Analytics, Facebook Analytics, Yandex.Metrika and Countly. It contains no content-reuse or API terms.
- **API terms.** None found. The [API landing page HTML](https://api.psychonautwiki.org/) contains no "license", "terms", "copyright" or "attribution" string. A wiki search for `"terms of use"` found only file-license templates and a user page.
- **API software license.** MIT applies to the software only ([LICENSE](https://github.com/psychonautwiki/bifrost/blob/e2fb969aff088332e45ef54553838ee62801d6ec/LICENSE#L1-L4)): "Copyright (c) 2016 Kenan Sulayman / Copyright (c) 2016 The PsychonautWiki Contributors". The README states "MIT - Copyright (c) 2016-2025 Kenan Sulayman / PsychonautWiki" ([README L98-L100](https://github.com/psychonautwiki/bifrost/blob/e2fb969aff088332e45ef54553838ee62801d6ec/README.md#L98-L100)).

### License by content class

| Content class | Declared license | Exact wording or evidence | Source |
| --- | --- | --- | --- |
| Article text and metadata | CC BY-SA 4.0 | "Most data, including, but not limited to text and metadata, is provided under this licence." | [Copyrights](https://psychonautwiki.org/w/index.php?title=Copyrights&oldid=145652) |
| Semantic data (SMW properties: doses, durations, ROA, interactions, classes, tolerance, `Effect`) | CC BY 4.0 | "Semantic data is free for use by anyone for any purpose, when properly attributed" | [Copyrights](https://psychonautwiki.org/w/index.php?title=Copyrights&oldid=145652) |
| Experience reports, personal user information | Owner's copyright | "…not including semantic data, are subject to their owner's copyright." | [Copyrights](https://psychonautwiki.org/w/index.php?title=Copyrights&oldid=145652) |
| Files and images | Owner's copyright, set per file | "…are subject to their owner's copyright; additional terms may apply." `File:LSD.svg` has `{{PD-ineligible}}`. `File:Lsd bottle1.jpg` and `File:Lsd brain scan.jpg` have empty description pages. `File:Harmchart.png` says only "Importing file". `extmetadata` has only `DateTime` and `ObjectName`. | [Copyrights](https://psychonautwiki.org/w/index.php?title=Copyrights&oldid=145652), [imageinfo query](https://psychonautwiki.org/w/api.php?action=query&titles=File:Lsd%20bottle1.jpg%7CFile:LSD.svg%7CFile:Lsd%20brain%20scan.jpg%7CFile:Harmchart.png&prop=imageinfo%7Ccategories%7Crevisions&iiprop=user%7Ctimestamp%7Curl%7Cextmetadata&rvprop=content&rvslots=main&format=json&formatversion=2) |
| Original "Disregard Everything I Say" (DEIS) articles | "probably" CC BY-NC-SA 4.0 | "…are probably licensed for any purpose other than commercial use" | [Copyrights](https://psychonautwiki.org/w/index.php?title=Copyrights&oldid=145652) |
| Subjective Effect Index articles (effect descriptions) | The page footer's CC BY-SA 4.0; no separate carve-out | The footer on [Subjective effect index](https://psychonautwiki.org/wiki/Subjective_effect_index) shows the site license. `[INFERENCE]` The general text license covers SEI pages because Copyrights gives them no exception. | [Copyrights](https://psychonautwiki.org/w/index.php?title=Copyrights&oldid=145652) |
| Effect names attached to substances (`Effect` property) | CC BY 4.0, as semantic data | `[[Effect::Stimulation]]` annotations in LSD wikitext | [LSD, oldid 169966](https://psychonautwiki.org/w/index.php?title=LSD&oldid=169966) |
| GraphQL API software | MIT | LICENSE | [bifrost LICENSE](https://github.com/psychonautwiki/bifrost/blob/e2fb969aff088332e45ef54553838ee62801d6ec/LICENSE) |
| GraphQL API responses | Not stated | `[INFERENCE]` A response inherits the license of each field's source: SMW fields as semantic data, `summary` as page text, `images` as owner's copyright, and `reagents` with unknown provenance (see Open questions). | — |
| Interactions sourced from TripSit | Not stated on PsychonautWiki | TripSit's combo page says "© Copyright TripSit. All Rights Reserved." | [Template:DangerousInteractions/Intro](https://psychonautwiki.org/w/index.php?title=Template:DangerousInteractions/Intro&oldid=150155), [tripsit.me/combo](https://tripsit.me/combo) |

### Compatibility with BHWiki's CC BY-SA 4.0 content

- **CC BY-SA 4.0 text.** It matches BHWiki's license. Creative Commons says adaptations of BY-SA 4.0 material "may only be licensed under: BY-SA 4.0, or a later version of the BY-SA license" ([compatible licenses](https://creativecommons.org/share-your-work/licensing-considerations/compatible-licenses/)).
- **CC BY 4.0 semantic data.** It is compatible with BHWiki's license: "Works licensed under CC BY may be incorporated into works that are licensed under CC BY-SA" ([CC FAQ](https://creativecommons.org/faq/)).
- **CC BY-NC-SA 4.0 material (DEIS articles, Effect Index).** It is incompatible. The BY-SA 4.0 compatible-license list does not include BY-NC-SA ([compatible licenses](https://creativecommons.org/share-your-work/licensing-considerations/compatible-licenses/)). The CC FAQ also says "if you want to use a remix for commercial purposes, you cannot incorporate material released under one of the NonCommercial licenses" ([CC FAQ](https://creativecommons.org/faq/)).
- **Owner's-copyright files and experience reports.** They carry no license grant, so BHWiki can only link to them.

### Attribution requirements

PsychonautWiki asks for proper attribution but specifies no format. CC BY 4.0 §3(a)(1) requires reusers to keep: "identification of the creator(s) … a copyright notice; a notice that refers to this Public License; a notice that refers to the disclaimer of warranties; a URI or hyperlink to the Licensed Material to the extent reasonably practicable". Reusers must also "indicate if You modified the Licensed Material" and "indicate the Licensed Material is licensed under this Public License, and include the text of, or the URI or hyperlink to, this Public License". §3(a)(2) allows satisfying these conditions "by providing a URI or hyperlink to a resource that includes the required information". CC BY 4.0 §4 also licenses sui generis database rights. Anyone who shares "all or a substantial portion of the contents of the database" must still meet §3(a). Source: [CC BY 4.0 legal code](https://creativecommons.org/licenses/by/4.0/legalcode.en).

## 3. GraphQL API (`https://api.psychonautwiki.org/`)

### Transport facts (observed)

| Aspect | Observation | Source |
| --- | --- | --- |
| Liveness | `GET /` returned `200 text/html` with the "PsychonautWiki API - GraphQL Playground" page. `POST /` returned `200 content-type: application/graphql-response+json`. | [api.psychonautwiki.org](https://api.psychonautwiki.org/) |
| Authentication | None; requests carried no credentials | same |
| CORS | `access-control-allow-origin: *` on every response. An `OPTIONS` preflight returned `access-control-allow-methods: *`, `access-control-allow-headers: *` and `allow: GET,HEAD,POST`. | same |
| Caching headers | `cache-control: max-age=3600, stale-while-revalidate=60, stale-if-error=86400`; `via: 1.1 varnish, 1.1 varnish`; `x-served-by: cache-fra-…, cache-cwb-…`; `strict-transport-security: max-age=900` | same |
| Rate limiting | No `X-RateLimit-*` or `Retry-After` headers. The router adds only CORS and trace layers ([main.rs L291-L305](https://github.com/psychonautwiki/bifrost/blob/e2fb969aff088332e45ef54553838ee62801d6ec/src/main.rs#L291-L305)). The schema builder sets no depth or complexity limit ([schema.rs L26-L32](https://github.com/psychonautwiki/bifrost/blob/e2fb969aff088332e45ef54553838ee62801d6ec/src/graphql/schema.rs#L26-L32)). | — |
| GET queries | `?query=` works only with percent-encoding. A `+`-encoded query returned the parse error `expected selection`, so the server does not decode `+` as a space. | [GET example](https://api.psychonautwiki.org/?query=%7B%20substances(query%3A%20%22Caffeine%22)%20%7B%20name%20url%20%7D%20%7D) |
| Robots | `https://api.psychonautwiki.org/robots.txt` returned `404` | — |
| Health | `{"status":"healthy","ready":true,"substances":373,"aliases":1310,"snapshot_age_seconds":11757123,"version":"4.0.0"}` | [/health](https://api.psychonautwiki.org/health) |
| Full list | `substances(limit: 2000) { name }` returned 373 unique names. `limit: 5, offset: 370` returned 3, and `offset: 373` returned `[]`. | POST queries above |
| Filters | `substances(query:, effect:, chemicalClass:, psychoactiveClass:)` are mutually exclusive. Combining two returned the error `"Parameters are mutually exclusive: effect, query, chemical_class, psychoactive_class"`. | POST |
| Name search | `query: "Lucy"` returned LSD, `"psilocybin"` returned "Psilocybin mushrooms", and `"4-AcO"` returned five 4-AcO-* substances. This matches the commit "Replace fuzzy trigram search with exact and prefix alias matching" ([f56c829](https://github.com/psychonautwiki/bifrost/commit/f56c829b16)). | POST |
| Non-substance entries | The list includes `Amphetamine (disambiguation)`, `Benzodiazepines`, `Dissociatives`, `Entactogen`, `Eugeroics`, `Opioids` and `Stimulants`. | `substances(limit: 2000)` |

### Introspected schema (verbatim field list, scalars omitted)

The introspection query returned `queryType: QueryRoot`, `mutationType: null` and `subscriptionType: null`. Directives: `deprecated`, `include`, `oneOf`, `skip`, `specifiedBy`. No field is deprecated. Field descriptions returned by the server follow the code block.

```graphql
type QueryRoot {
  substances(effect: String, query: String, chemicalClass: String, psychoactiveClass: String, limit: Int! = 10, offset: Int! = 0): [Substance!]!
  substancesByEffect(effect: [String!], limit: Int! = 50, offset: Int! = 0): [Substance!]!
  effectsBySubstance(substance: String!, limit: Int! = 50, offset: Int! = 0): [Effect!]!
  erowid(substance: String, limit: Int! = 50, offset: Int! = 0): [ErowidExperience!]
  experiences(substancesByEffect: String, effectsBySubstance: String, substance: String): [Experience!]!
  reagentResults(substance: String, substances: [String!]): [ReagentQueryResult!]!
  reagents: [Reagent!]!
  reagentColors: [ReagentColor!]!
}
type Substance {
  name: String
  url: String
  featured: Boolean
  class: SubstanceClass
  tolerance: SubstanceTolerance
  roa: SubstanceRoaTypes
  roas: [SubstanceRoa!]
  addictionPotential: String
  toxicity: [String!]
  crossTolerances: [String!]
  commonNames: [String!]
  systematicName: String
  effects: [Effect!]!
  summary: String
  images: [SubstanceImage!]
  uncertainInteractions: [Substance!]
  unsafeInteractions: [Substance!]
  dangerousInteractions: [Substance!]
  reagents: SubstanceReagents
}
type SubstanceClass { chemical: [String!]  psychoactive: [String!] }
type SubstanceTolerance { full: String  half: String  zero: String }
type SubstanceRoaTypes {
  oral: SubstanceRoa  sublingual: SubstanceRoa  buccal: SubstanceRoa  insufflated: SubstanceRoa  rectal: SubstanceRoa
  transdermal: SubstanceRoa  subcutaneous: SubstanceRoa  intramuscular: SubstanceRoa  intravenous: SubstanceRoa  smoked: SubstanceRoa
}
type SubstanceRoa { name: String  dose: SubstanceRoaDose  duration: SubstanceRoaDuration  bioavailability: SubstanceRoaRange }
type SubstanceRoaDose { units: String  threshold: Float  heavy: Float  common: SubstanceRoaRange  light: SubstanceRoaRange  strong: SubstanceRoaRange }
type SubstanceRoaDuration {
  afterglow: SubstanceRoaDurationRange  comeup: SubstanceRoaDurationRange  duration: SubstanceRoaDurationRange
  offset: SubstanceRoaDurationRange  onset: SubstanceRoaDurationRange  peak: SubstanceRoaDurationRange  total: SubstanceRoaDurationRange
}
type SubstanceRoaDurationRange { min: Float  max: Float  units: String }
type SubstanceRoaRange { min: Float  max: Float }
type SubstanceImage { thumb: String  image: String }
type Effect { name: String  url: String  substances: [Substance!]! }
type Experience { substances: [Substance!]  effects: [Effect!] }
type ErowidExperience { title: String  author: String  substance: String  meta: ErowidMeta  substanceInfo: [ErowidSubstanceInfo!]  erowidNotes: [String!]  pullQuotes: [String!]  body: String }
type ErowidMeta { erowidId: String  gender: String  published: String  year: Int  age: Int  views: Int }
type ErowidSubstanceInfo { amount: String  method: String  substance: String  form: String }
type SubstanceReagents { substanceName: String!  rawName: String  results: [ReagentTestResult!]!  pwSubstance: Substance }
type ReagentQueryResult { query: String!  matchedName: String!  results: [ReagentTestResult!]!  pwSubstance: Substance }
type ReagentTestResult { reagent: Reagent!  startColors: [ReagentColor!]!  endColors: [ReagentColor!]!  isPositive: Boolean!  description: String! }
type Reagent { id: Int!  name: String!  fullName: String!  shortName: String!  whiteFirstColor: Boolean }
type ReagentColor { id: Int!  name: String!  hex: String!  simple: Boolean!  simpleColorId: Int }
```

Server-supplied descriptions:

- `substances`: "Query substances with optional filters. All filters are mutually exclusive - only one can be specified at a time."
- `Substance.effects`: "Get effects for this substance (from cached data)".
- `Substance.summary` and `Substance.images`: "(from cached data)".
- `*Interactions`: "(resolved from snapshot)".
- `erowid`: "Query Erowid experience reports (requires PLEBISCITE feature)". `/metrics` counts these calls as `status="disabled"`.
- `experiences`: "Legacy experiences query (stub for API compatibility)".

### Substance fields

| Field | Type | Meaning, with upstream SMW property | Example value (2026-11-06) |
| --- | --- | --- | --- |
| `name` | String | Page title | `"LSD"` |
| `url` | String | Canonical wiki URL | `"https://psychonautwiki.org/wiki/LSD"` |
| `featured` | Boolean | `Featured` = `"t"` | `true` |
| `class.chemical` | [String!] | `Chemical_class` (page value) | `["Lysergamides"]` |
| `class.psychoactive` | [String!] | `Psychoactive_class` | `["Psychedelic"]`; Ketamine `["Dissociatives"]` |
| `commonNames` | [String!] | `Common_name` | `["LSD","LSD-25","Lucy","L","Acid","Cid","Tabs","Blotter"]` |
| `systematicName` | String | `Systematic_name` (43 uses wiki-wide) | `null` for LSD |
| `roas` | [SubstanceRoa!] | One entry per route with any ROA property, built from parsed keys ([parser.rs L59-L70](https://github.com/psychonautwiki/bifrost/blob/e2fb969aff088332e45ef54553838ee62801d6ec/src/services/psychonaut/parser.rs#L59-L70)) | LSD: `sublingual` only; Ketamine: `insufflated`, `oral`, `sublingual`; Caffeine: `insufflated`, `oral`, `smoked` |
| `roas[].name` | String | Lower-cased route prefix | `"sublingual"` |
| `roas[].dose.units` | String | `<Route>_dose_units` | `"µg"`, `"mg"` |
| `roas[].dose.threshold` | Float | `<Route>_threshold_dose` | `15.0` |
| `roas[].dose.light` / `common` / `strong` | {min, max} Float | `<Route>_min_<level>_dose`, `<Route>_max_<level>_dose` | light `{15,75}`, common `{75,150}`, strong `{150,300}` |
| `roas[].dose.heavy` | Float | `<Route>_heavy_dose`, a lower bound shown as "300 µg +" in the SubstanceBox | `300.0` |
| `roas[].duration.onset` / `comeup` / `peak` / `offset` / `total` / `afterglow` / `duration` | {min, max: Float, units: String} | `<Route>_<min/max>_<phase>_time` + `<Route>_<phase>_time_units` | onset `{15,30,"minutes"}`, peak `{3,5,"hours"}`, total `{8,12,"hours"}`, afterglow `{12,48,"hours"}`, `duration: null` |
| `roas[].bioavailability` | {min, max} Float (percent) | `<Route>_<min/max>_bioavailability` | LSD `{71,71}`; Ketamine insufflated `{null,45}` |
| `roa` | SubstanceRoaTypes | Fixed object with 10 routes and no `inhaled` key, although SMW has 27 `Inhaled_*` properties | Ketamine `{"oral":{"name":null},"insufflated":{"name":null},…,"sublingual":{"name":null}}`. `name` is null here, so use `roas`. |
| `tolerance.full` / `half` / `zero` | String | `Time_to_full_tolerance`, `Time_to_half_tolerance`, `Time_to_zero_tolerance` (free text) | `"almost immediately after ingestion"`, `null`, `"5 days"` |
| `crossTolerances` | [String!] | Link targets extracted from `Cross-tolerance` text (`"all [[psychedelics]]"`) | `["psychedelics"]` |
| `addictionPotential` | String | `Addiction_potential` (free text) | `"non-addictive with a low abuse potential"` |
| `toxicity` | [String!] | `Toxicity` (free text) | `["extremely low toxicity relative to dose"]` |
| `uncertainInteractions` / `unsafeInteractions` / `dangerousInteractions` | [Substance!] | `UncertainInteraction`, `UnsafeInteraction`, `DangerousInteraction`. Names resolve to snapshot substances, or to stubs with only `name` and `url` ([snapshot.rs L543-L563](https://github.com/psychonautwiki/bifrost/blob/e2fb969aff088332e45ef54553838ee62801d6ec/src/cache/snapshot.rs#L543-L563)). | LSD dangerous: `Lithium`; unsafe: `Tramadol`, `Deliriants`, `Tricyclic antidepressants`, `Ritonavir`; uncertain: `Cannabis`, `Stimulants` |
| `effects` | [Effect!]! | Intended source: SMW `Effect`. Actually returns the subject page (section 8). | `[{"name":"LSD","url":"https://psychonautwiki.org/wiki/LSD"}]` |
| `summary` | String | First two non-empty lines of `action=parse` HTML after tag stripping ([revalidator.rs L530-L554](https://github.com/psychonautwiki/bifrost/blob/e2fb969aff088332e45ef54553838ee62801d6ec/src/cache/revalidator.rs#L530-L554)) | `"Summary sheet: LSD LSD"` |
| `images` | [SubstanceImage!] | Every file used on the page (`action=parse&prop=images`), including UI icons | LSD returns 16 entries, among them `1200px-10_strip.jpg`, `Lsd_bottle1.jpg`, `Lock-green.svg`, `Eye.svg`, `User.svg`, `Harmchart.png` |
| `reagents` | SubstanceReagents | Bundled `data/reagents.json` with fuzzy matching | not queried |

### Sample responses (trimmed)

`substances(query: "LSD")`:

```json
{"name":"LSD","url":"https://psychonautwiki.org/wiki/LSD","featured":true,"summary":"Summary sheet: LSD LSD","systematicName":null,
 "commonNames":["LSD","LSD-25","Lucy","L","Acid","Cid","Tabs","Blotter"],
 "addictionPotential":"non-addictive with a low abuse potential","toxicity":["extremely low toxicity relative to dose"],"crossTolerances":["psychedelics"],
 "class":{"chemical":["Lysergamides"],"psychoactive":["Psychedelic"]},
 "tolerance":{"full":"almost immediately after ingestion","half":null,"zero":"5 days"},
 "roas":[{"name":"sublingual",
   "dose":{"units":"µg","threshold":15.0,"heavy":300.0,"common":{"min":75.0,"max":150.0},"light":{"min":15.0,"max":75.0},"strong":{"min":150.0,"max":300.0}},
   "duration":{"afterglow":{"min":12.0,"max":48.0,"units":"hours"},"comeup":{"min":45.0,"max":90.0,"units":"minutes"},"duration":null,
     "offset":{"min":3.0,"max":5.0,"units":"hours"},"onset":{"min":15.0,"max":30.0,"units":"minutes"},"peak":{"min":3.0,"max":5.0,"units":"hours"},
     "total":{"min":8.0,"max":12.0,"units":"hours"}},
   "bioavailability":{"min":71.0,"max":71.0}}],
 "images":[{"thumb":"https://psychonautwiki.org/w/thumb.php?f=1200px-10_strip.jpg&width=200","image":"https://psychonautwiki.org/w/images/f/f1/1200px-10_strip.jpg"}, "… 15 more …"],
 "effects":[{"name":"LSD","url":"https://psychonautwiki.org/wiki/LSD"}],
 "uncertainInteractions":[{"name":"Cannabis"},{"name":"Stimulants"}],
 "unsafeInteractions":[{"name":"Tramadol"},{"name":"Deliriants"},{"name":"Tricyclic antidepressants"},{"name":"Ritonavir"}],
 "dangerousInteractions":[{"name":"Lithium"}]}
```

`substances(query: "Ketamine")` returned three routes:

```json
{"name":"Ketamine","class":{"chemical":["Arylcyclohexylamines"],"psychoactive":["Dissociatives"]},
 "tolerance":{"full":"develops with prolonged and repeated use","half":null,"zero":null},"crossTolerances":["dissociative"],
 "addictionPotential":"moderate to high abuse potential and produces psychological dependence with chronic use","toxicity":null,
 "roa":{"oral":{"name":null},"insufflated":{"name":null},"intramuscular":null,"intravenous":null,"rectal":null,"smoked":null,"sublingual":{"name":null}},
 "roas":[
  {"name":"insufflated","dose":{"units":"mg","threshold":5.0,"heavy":150.0,"common":{"min":30.0,"max":75.0},"light":{"min":10.0,"max":30.0},"strong":{"min":75.0,"max":150.0}},
   "duration":{"onset":{"min":1.0,"max":3.0,"units":"minutes"},"comeup":{"min":5.0,"max":15.0,"units":"minutes"},"peak":{"min":15.0,"max":45.0,"units":"minutes"},
     "offset":{"min":30.0,"max":60.0,"units":"minutes"},"total":{"min":1.0,"max":2.0,"units":"hours"},"afterglow":{"min":2.0,"max":12.0,"units":"hours"},"duration":null},
   "bioavailability":{"min":null,"max":45.0}},
  {"name":"oral","dose":{"units":"mg","threshold":50.0,"heavy":450.0,"common":{"min":100.0,"max":300.0},"light":{"min":50.0,"max":100.0},"strong":{"min":300.0,"max":450.0}},
   "duration":{"onset":{"min":10.0,"max":30.0,"units":"minutes"},"comeup":{"min":5.0,"max":20.0,"units":"minutes"},"peak":{"min":45.0,"max":90.0,"units":"minutes"},
     "offset":{"min":3.0,"max":6.0,"units":"hours"},"total":null,"afterglow":{"min":4.0,"max":8.0,"units":"hours"},"duration":null},
   "bioavailability":{"min":null,"max":17.0}},
  {"name":"sublingual","dose":null,"duration":null,"bioavailability":{"min":20.0,"max":29.0}}],
 "dangerousInteractions":[{"name":"Alcohol"},{"name":"GHB"},{"name":"GBL"},{"name":"Opioids"},{"name":"Tramadol"}],
 "unsafeInteractions":null,
 "uncertainInteractions":[{"name":"Amphetamines"},{"name":"Cocaine"},{"name":"Benzodiazepines"},{"name":"MAOIs"},{"name":"Trazodone"},{"name":"Grapefruit"}],
 "effects":[{"name":"Ketamine"}]}
```

`substances(query: "Caffeine") { roas { name dose {…} } }` returned `insufflated` (threshold 2.5 mg), `oral` (threshold 10, light 20–50, common 50–150, strong 150–500, heavy 500 mg) and `smoked` (threshold 25 mg).

Ranges come back as separate `min` and `max` values. Either bound can be null, as in Ketamine's insufflated bioavailability.

### Source repository and data derivation

- **Repository.** [psychonautwiki/bifrost](https://github.com/psychonautwiki/bifrost) is described as "The PsychonautWiki API.", is MIT-licensed and is written in Rust. It was created 2016-11-09. On 2026-11-06 GitHub reported 84 stars, 15 forks and 12 open issues and pull requests (`gh api repos/psychonautwiki/bifrost`).
- **Version.** `Cargo.toml` on master has `version = "4.0.0"`, the same as the deployed `/health` `version`. `[INFERENCE]` The deployed build is master or close to it. No commit SHA is exposed.
- **History.** The last master commit, `e2fb969`, landed 2026-02-24 with the message "feat: Add search index self-test and strict alias prioritization". `pushed_at` is 2026-05-28, from a dependabot branch. The Rust rewrite began with "feat: initial Rust GraphQL server with caching" on 2025-11-28 ([5569173](https://github.com/psychonautwiki/bifrost/commit/5569173885)). The old JavaScript moved to `legacy/` ([8be5e6b](https://github.com/psychonautwiki/bifrost/commit/8be5e6baa0)). Snapshot caching arrived on 2026-01-06 ([fbaf715](https://github.com/psychonautwiki/bifrost/commit/fbaf715f4faf34a3bd338da33a3b82503787a87f)).
- **Stack.** The [README](https://github.com/psychonautwiki/bifrost/blob/e2fb969aff088332e45ef54553838ee62801d6ec/README.md#L91-L96) lists "axum + async-graphql". It describes a "Stale-while-revalidate cache with request coalescing". It also states "Upstream data from PsychonautWiki's MediaWiki API (parsed from wikitext)". The code shows the substance data actually comes from SMW. The README example uses a nonexistent field, `rpioa` ([L47](https://github.com/psychonautwiki/bifrost/blob/e2fb969aff088332e45ef54553838ee62801d6ec/README.md#L47)).
- **Upstream calls.** Each call goes to `https://psychonautwiki.org/w/api.php`:
  1. Substance names come from `action=ask` with `[[Category:Psychoactive substance]]` and limit 9999 ([revalidator.rs L353-L360](https://github.com/psychonautwiki/bifrost/blob/e2fb969aff088332e45ef54553838ee62801d6ec/src/cache/revalidator.rs#L353-L360)).
  2. Core data comes from `action=browsebysubject&subject=<name>` ([api.rs L255-L264](https://github.com/psychonautwiki/bifrost/blob/e2fb969aff088332e45ef54553838ee62801d6ec/src/services/psychonaut/api.rs#L255-L264)). Regex dispatch maps it into fields ([parser.rs L7-L16](https://github.com/psychonautwiki/bifrost/blob/e2fb969aff088332e45ef54553838ee62801d6ec/src/services/psychonaut/parser.rs#L7-L16) and [L118-L233](https://github.com/psychonautwiki/bifrost/blob/e2fb969aff088332e45ef54553838ee62801d6ec/src/services/psychonaut/parser.rs#L118-L233)).
  3. Effects come from `action=ask` with `[[:<name>]]|?Effect` ([revalidator.rs L507-L528](https://github.com/psychonautwiki/bifrost/blob/e2fb969aff088332e45ef54553838ee62801d6ec/src/cache/revalidator.rs#L507-L528)).
  4. The summary comes from `action=parse&prop=text`, and images from `action=parse&prop=images` ([api.rs L266-L296](https://github.com/psychonautwiki/bifrost/blob/e2fb969aff088332e45ef54553838ee62801d6ec/src/services/psychonaut/api.rs#L266-L296)).
- **Caching.** The schema module's doc comment says "All queries read from the in-memory snapshot - no backend calls are made. The snapshot is kept fresh by the background revalidator." ([schema.rs L1-L4](https://github.com/psychonautwiki/bifrost/blob/e2fb969aff088332e45ef54553838ee62801d6ec/src/graphql/schema.rs#L1-L4)). The defaults are a 24 h TTL, at most 10 concurrent revalidations, a 6 h full reconciliation and the disk file `./bifrost_cache.bin` ([config.rs L6-L16, L107-L109](https://github.com/psychonautwiki/bifrost/blob/e2fb969aff088332e45ef54553838ee62801d6ec/src/config.rs#L6-L16)). Adaptive shaping opens a circuit breaker at ≥ 50 % backend error rate and logs "Circuit breaker OPENED - pausing revalidation" ([shaping.rs L183-L201, L308-L313](https://github.com/psychonautwiki/bifrost/blob/e2fb969aff088332e45ef54553838ee62801d6ec/src/cache/shaping.rs#L183-L201)). The redirect and alias fetcher sleeps 500 ms and 300 ms between pages ([api.rs L371-L372, L432-L433](https://github.com/psychonautwiki/bifrost/blob/e2fb969aff088332e45ef54553838ee62801d6ec/src/services/psychonaut/api.rs#L371-L372)).
- **Live cache state.** On 2026-11-06, [/metrics](https://api.psychonautwiki.org/metrics) reported:
  - `bifrost_cache_snapshot_age_seconds 11757114.98`
  - `bifrost_shaping_circuit_breaker_open 1`
  - `bifrost_shaping_error_rate 1`
  - `bifrost_shaping_p99_latency_ms 90306`
  - `bifrost_revalidation_queue_due 376`
  - `bifrost_revalidation_duration_seconds_count 0`
  - `bifrost_backend_bytes_received_total 0`
  - `bifrost_boot_type{type="warm_start"} 1`
  - `bifrost_query_total{query_type="substances",status="success"} 1849195`

  Subtracting the snapshot age from the observation time gives a build time of about 2026-06-23T17:30Z. `[INFERENCE]` The instance booted from a persisted snapshot, cannot reach or parse the wiki backend, and has stopped revalidating.

  Both `/health` and `/metrics` are CDN-cached: a 2026-11-06T19:34:50Z request returned `cache-control: max-age=3600, stale-while-revalidate=60, stale-if-error=86400`, `x-cache: HIT, HIT` and `age: 772`, with the same `snapshot_age_seconds` value as earlier requests. The build-time estimate is therefore accurate to about one hour, not to the second.

## 4. MediaWiki and Semantic MediaWiki APIs

### Availability and platform

[`api.php` siteinfo](https://psychonautwiki.org/w/api.php?action=query&meta=siteinfo&siprop=general%7Crightsinfo%7Cstatistics%7Cextensions&format=json&formatversion=2) returned `200` with `access-control-allow-origin: *` and these values:

- `generator: MediaWiki 1.35.1`
- `phpversion: 7.4.29`
- `dbtype: mysql 8.0.22`
- `lang: en-gb`
- `wikiid: mediawiki-pw_`

Installed extensions include SemanticMediaWiki 3.2.2, Semantic Internal Objects 0.8.2, SemanticCompoundQueries 2.1.0, SemanticScribunto 2.1.0, Semantic Drilldown 2.1, Approved Revs 1.2.2, Cite, Scribunto, ParserFunctions, Variables 2.5.1, Arrays 2.2.0, CirrusSearch 6.5.4, MobileFrontend 2.3.0, TextExtracts and OAuth. The site statistics were `pages 18701`, `articles 1910`, `edits 166930`, `images 4852`, `users 12427`, `activeusers 21` and `admins 9`.

### SMW `browsebysubject` (LSD)

[`action=browsebysubject&subject=LSD`](https://psychonautwiki.org/w/api.php?action=browsebysubject&subject=LSD&format=json) returned the following properties. Data-item type numbers come from SMW: 1 = number, 2 = text, 4 = boolean, 6 = time, 9 = wiki page.

| SMW property | Type | Value(s) |
| --- | --- | --- |
| `Addiction_potential` | 2 | `non-addictive with a low abuse potential` |
| `Chemical_class` | 9 | `Lysergamides` |
| `Common_name` | 2 | `LSD, LSD-25, Lucy, L, Acid, Cid, Tabs, Blotter` |
| `Cross-tolerance` | 2 | `all [[psychedelics]]` |
| `DangerousInteraction` / `UnsafeInteraction` / `UncertainInteraction` | 2 | `Lithium` / `Tramadol, Deliriants, Tricyclic antidepressants, Ritonavir` / `Cannabis, Stimulants` |
| `Effect` | 9 | 93 values (`Auditory_hallucination`, `Geometry`, …) |
| `Featured` | 4 | `t` |
| `Psychoactive_class` | 9 | `Psychedelic` |
| `Sublingual_threshold_dose`, `Sublingual_heavy_dose` | 1 | `15`, `300` |
| `Sublingual_{min,max}_{light,common,strong}_dose` | 1 | `15/75`, `75/150`, `150/300` |
| `Sublingual_dose_units` | 2 | `µg` |
| `Sublingual_{min,max}_{onset,comeup,peak,offset,total,afterglow}_time` | 1 | `15/30`, `45/90`, `3/5`, `3/5`, `8/12`, `12/48` |
| `Sublingual_<phase>_time_units` | 2 | `minutes` (onset and comeup), `hours` (others) |
| `Sublingual_{min,max}_bioavailability` | 1 | `71/71` |
| `Time_to_full_tolerance`, `Time_to_zero_tolerance` | 2 | `almost immediately after ingestion`, `5 days` |
| `Toxicity` | 2 | `extremely low toxicity relative to dose` |
| `_MDAT` (modification date) | 6 | `1/2025/12/11/8/7/17/0` |
| `_INST` (categories) | 9 | 21 categories, including `Articles_with_unsourced_statements` and `Psychoactive_substance` |

### SMW `ask`

The [ask query](https://psychonautwiki.org/w/api.php?action=ask&format=json&query=%5B%5BLSD%5D%5D%7C%3FSublingual_common_dose%7C%3FSublingual_min_common_dose%7C%3FSublingual_max_common_dose%7C%3FSublingual_dose_units%7C%3FDangerousInteraction%7C%3FModification_date) returned typed print requests. Min and max doses are `_num`, units and interactions are `_txt`, and `Modification date` is `_dat`. The values were `"Sublingual min common dose":[75]`, `"Sublingual max common dose":[150]`, `"Sublingual dose units":["µg"]`, `"DangerousInteraction":["Lithium"]` and `"Modification date":[{"timestamp":"1765440437","raw":"1/2025/12/11/8/7/17/0"}]`. `Sublingual_common_dose` exists as a `_wpg` property but is empty.

### SMW property inventory

[`action=smwbrowse&browse=property`](https://psychonautwiki.org/w/api.php?action=smwbrowse&browse=property&params=%7B%22limit%22%3A500%2C%22offset%22%3A0%2C%22search%22%3A%22%22%2C%22description%22%3Afalse%2C%22prefLabel%22%3Afalse%2C%22usageCount%22%3Atrue%7D&format=json) returned 435 properties.

**Route-prefixed properties.** Counts by route: Insufflated 40, Oral 39, Sublingual 35, Intravenous 32, Smoked 30, Buccal 27, Inhaled 27, Rectal 27, Transdermal 18, Intramuscular 10. They follow 52 distinct suffix patterns. Most are the canonical patterns:

- `<R>_threshold_dose`, `<R>_heavy_dose`, `<R>_{min,max}_{light,common,strong}_dose`, `<R>_dose_units`
- `<R>_{min,max}_{onset,comeup,peak,offset,total,afterglow,duration}_time`, `<R>_<phase>_time_units`
- `<R>_{min,max}_bioavailability`

The rest are non-canonical variants: `<R>_common_min_dose`, `<R>_light_max_dose`, `<R>_aftereffects_time_units`, `<R>_aftereffect_time_units`, `<R>_mix_afterglow_time`, `<R>_min_onset_units`, `<R>_min_total_units` and `<R>_threshold_dose_units`.

**Main non-route properties, with usage counts:**

- `Effect` 15571
- `Common_name` 1065
- `DangerousInteraction` 859
- `UncertainInteraction` 788
- `Featured` 474
- `Chemical_class` 386
- `Psychoactive_class` 379
- `UnsafeInteraction` 365
- `Toxicity` 284
- `Addiction_potential` 253
- `Time_to_full_tolerance` 230
- `Time_to_zero_tolerance` 226
- `Cross-tolerance` 225
- `Time_to_half_tolerance` 195
- `Systematic_name` 43

`[INFERENCE]` An importer must validate units and tolerate the variant names. Bifrost's regexes would map a variant such as `common_min_dose` into the wrong slot.

### Revisions, timestamps and Approved Revs (provenance pinning)

- **Revision metadata.** [`prop=revisions`](https://psychonautwiki.org/w/api.php?action=query&prop=revisions&titles=LSD&rvprop=ids%7Ctimestamp%7Cuser%7Ccomment%7Csha1%7Csize&format=json&formatversion=2) returns `revid`, `parentid`, `user`, `timestamp`, `sha1`, `size` and content. For LSD it returned page ID 7289, `revid 169966`, `timestamp 2025-12-11T08:07:17Z`, `sha1 4889d892fdb3e4dc09d33d7618bd4fa4e22e8b95` and `size 104161`. The article itself is approved at its latest revision: the HTML shows `wgCurRevisionId` and `wgRevisionId` both at 169966.
- **Where dose values live.** The article's second line is `{{SubstanceBox/LSD}}`. Dose, duration and bioavailability annotations live in [Template:SubstanceBox/LSD](https://psychonautwiki.org/w/index.php?title=Template:SubstanceBox/LSD&oldid=170000), which has page ID 4765.
- **Template history:**
  - 170000, 2026-01-08 by Zinibowwww, "Bioavailability change"
  - 161047, 2024-05-08 by Quack, a bioavailability citation change
  - 152462, 2022-06-29 by Graham, "wiki ref formatting"
  - 151128, 2022-05-12 by Kenan
- **Displayed revision.** Viewing the template page shows `"wgCurRevisionId":170000,"wgRevisionId":152462` and "Retrieved from … oldid=152462". The rendered LSD page infobox shows "Bioavailability 71% - 71%". The parser cache report timestamp was `20261106191850`, a fresh parse.
- **Value disagreement:**
  - Revision 152462 annotates `[[Sublingual min bioavailability::71]]% - [[Sublingual max bioavailability::71]]%`.
  - Revision 161047 annotates `OralROA_Bioavailability=[[Sublingual min bioavailability::92]]% - [[Sublingual max bioavailability::100]]%`. The oral row writes into the sublingual property, a mislabel in the source.
  - Revision 170000 adds `SublingualROA_Bioavailability=80%<ref>…</ref>` with no SMW annotation.

  SMW and the API return 71/71, matching the approved revision.
- **Second case (Caffeine).** SMW `Oral_threshold_dose` is `10` and `Oral_min_light_dose` is `20` ([browsebysubject Caffeine](https://psychonautwiki.org/w/api.php?action=browsebysubject&subject=Caffeine&format=json)). The latest [Template:SubstanceBox/Caffeine, revid 164566 (2024-10-23)](https://psychonautwiki.org/w/index.php?title=Template:SubstanceBox/Caffeine&oldid=164566) has `[[Oral threshold dose::25]]` and `[[Oral min light dose::25]]`. `[INFERENCE]` Approved Revs gating explains this case too. Its approved revision ID was not checked.
- **Parse returns latest.** [`action=parse&page=Template:SubstanceBox/LSD&prop=revid|wikitext`](https://psychonautwiki.org/w/api.php?action=parse&page=Template:SubstanceBox/LSD&prop=revid%7Cwikitext&format=json&formatversion=2) returned `revid 170000`, the latest and unapproved revision.
- **No read API for approved revisions.** [`paraminfo`](https://psychonautwiki.org/w/api.php?action=paraminfo&modules=query%2Bapprovedrevs%7Capprove&format=json&formatversion=2) shows only the write module `approve` (`revid`, `unapprove`, `token`) and warns `The module "query" does not have a submodule "approvedrevs"`.
- **mobileview works but is deprecated.** [`action=mobileview`](https://psychonautwiki.org/w/api.php?action=mobileview&page=LSD&prop=revision%7Clastmodified%7Cnormalizedtitle&sections=0&format=json&formatversion=2) is the only `api.php` action robots.txt allows. It returned `revision 169966` and `lastmodified 2025-12-11T08:07:17Z` alongside the warning "This API is deprecated. See T186627 for more details."

`[INFERENCE]` A pin must therefore record the article `revid` and timestamp, the approved SubstanceBox revision ID, the SMW `_MDAT` and a hash of the SMW payload. The approved revision ID is currently observable only from page HTML (`wgRevisionId`). The latest template revision may hold unreviewed values that disagree with what readers see.

### Dumps and other bulk channels

- **Dumps.** A wiki search for `"database dump"` returned 0 hits. Neither the [project page](https://psychonautwiki.org/w/index.php?title=PsychonautWiki&oldid=170290) nor the [Network](https://psychonautwiki.org/w/index.php?title=Network&oldid=168179) "Development" panel links a dump. That panel lists only "PsychonautWiki's API" and "TripSit: Drug Combinations".
- **Sitemaps.** The [sitemap index](https://psychonautwiki.org/sitemap/sitemap-index-mediawiki-pw_.xml) lists per-namespace `.xml.gz` sitemaps with `lastmod`, which was `2026-11-06T18:48:32Z` at retrieval.
- **Special:Export.** `[INFERENCE]` MediaWiki core includes Special:Export, but robots.txt disallows `/wiki/Special:` and it was not tested.

## 5. robots.txt and crawl policy

[`https://psychonautwiki.org/robots.txt`](https://psychonautwiki.org/robots.txt) returned 1,792 bytes. The file starts with a PGP-signed poem in comments, followed by:

```text
User-agent: *
Allow: /w/api.php?action=mobileview&
Allow: /w/load.php?
Allow: /w/thumb.php?
Allow: /w/images/
Allow: /w/extensions/
Disallow: /w/
#Disallow: /wiki/User:
#Disallow: /wiki/Talk:
#Disallow: /wiki/Image:
Disallow: /wiki/Template:
Disallow: /wiki/Special:
Disallow: /wiki/MediaWiki:
Disallow: /wiki/Help:

Sitemap: https://psychonautwiki.org/sitemap/sitemap-index-mediawiki-pw_.xml
```

- The file has no `Crawl-delay`.
- The `/w/` rule disallows `api.php` (except `action=mobileview`), `index.php?action=raw` and `oldid` permalinks for crawlers. `/wiki/<Article>` remains allowed, as do images and thumbnails.
- `https://api.psychonautwiki.org/robots.txt` returned `404`.
- The [Main Page, oldid 170416](https://psychonautwiki.org/w/index.php?title=Main_Page&oldid=170416) shows the panel: "Please don't crawl the wiki. [https://api.psychonautwiki.org Use our API instead.] PsychonautWiki ❤️ Developers. [https://github.com/psychonautwiki/bifrost/issues Please report any obstacles.]"

`[INFERENCE]` The sanctioned bulk channel is the GraphQL API, which is stale and partly broken (sections 3 and 9). Revision-pinned provenance needs `api.php`, which robots.txt disallows for automated agents. Neither route offers an approved revision ID. Before automating `api.php` reads, BHWiki should request permission through the [contact page](https://psychonautwiki.org/wiki/Contact_us) or team@psy.is.

## 6. Citations inside PsychonautWiki data

- **SubstanceBox templates.** In [Template:SubstanceBox/LSD revid 170000](https://psychonautwiki.org/w/index.php?title=Template:SubstanceBox/LSD&oldid=170000), every `SublingualROA_Threshold/Light/Common/Strong/Heavy/Duration/Onset/Comeup/Peak/Offset/Aftereffects` value is a bare SMW annotation without `<ref>`. Only the `OralROA_Bioavailability` field (Grumann et al., Drug Testing and Analysis) and the `SublingualROA_Bioavailability` field (a PubMed URL) carry references. In [Template:SubstanceBox/Ketamine revid 160085](https://psychonautwiki.org/w/index.php?title=Template:SubstanceBox/Ketamine&oldid=160085), only the bioavailability fields and `InsufflatedROA_Peak` carry `<ref>` tags. No dose value does. [Template:SubstanceBox/Caffeine revid 164566](https://psychonautwiki.org/w/index.php?title=Template:SubstanceBox/Caffeine&oldid=164566) has no `<ref>` on any populated dose or duration field.
- **No citation in SMW or the API.** SMW values have no citation linkage. `browsebysubject` returns plain values, and the GraphQL schema has no citation or source field (section 3).
- **Infobox disclaimer.** The rendered [LSD page](https://psychonautwiki.org/wiki/LSD) infobox says: "DISCLAIMER: PW's dosage information is gathered from users and resources for educational purposes only. It is not a recommendation and should be verified with other sources for accuracy."
- **Dosage classification page.** [Dosage classification, oldid 160478](https://psychonautwiki.org/w/index.php?title=Dosage_classification&oldid=160478) defines threshold, light, common, strong and heavy qualitatively. For example, "A heavy dose is the upper limit of what a substance is capable of producing in terms of psychoactive effects". The page carries the notice "This article does not cite enough references." It says nothing about how the numbers are determined.
- **Unsourced-statement categories.** LSD's SMW `_INST` includes `Articles_with_unsourced_statements` ([browsebysubject](https://psychonautwiki.org/w/api.php?action=browsebysubject&subject=LSD&format=json)). Article prose, by contrast, is heavily referenced (`<ref>{{cite journal…}}`) in the [LSD wikitext](https://psychonautwiki.org/w/index.php?title=LSD&oldid=169966).
- **Conclusion.** `[INFERENCE]` Dose and duration ranges are community-derived aggregates without per-value provenance. BHWiki should treat them as "PsychonautWiki states", not as evidence. Each value would need an independent primary source before it could support a BHWiki claim.

## 7. Interactions provenance

- **Annotation form.** Interactions are inline SMW annotations in the article's "Interactions" section, each with a prose explanation. Example from the [LSD wikitext](https://psychonautwiki.org/w/index.php?title=LSD&oldid=169966):
  - `*'''[[DangerousInteraction::Lithium]]''':<ref name="ErowidInteraction"></ref><ref>{{Citation | vauthors=((Nayak, S.)) … | title=Classic psychedelic coadministration with lithium … | publisher=PsyArXiv …}}</ref>`
  - The Tramadol, Cannabis and Stimulants entries cite `<ref name="tripsit">{{cite web|url=http://drugs.tripsit.me/lsd|title=Tripsit Factsheets - LSD|publisher=Tripsit…}}</ref>`.
  - The Ritonavir and Tricyclic antidepressants entries cite Erowid's "LSD: Interactions" (2003).
  - The Deliriants entry has no reference.
- **Intro template.** The section opens with [Template:DangerousInteractions/Intro, oldid 150155 (2022-02-01)](https://psychonautwiki.org/w/index.php?title=Template:DangerousInteractions/Intro&oldid=150155): "Many psychoactive substances that are reasonably safe to use on their own can suddenly become dangerous and even life-threatening when combined with certain other substances. The following list provides some known dangerous interactions (although it is not guaranteed to include all of them)." It continues: "Always conduct independent research … Some of the listed interactions have been sourced from [https://combo.tripsit.me TripSit]."
- **TripSit as a data source.** The [Network page](https://psychonautwiki.org/w/index.php?title=Network&oldid=168179) "Development" panel lists "TripSit: Drug Combinations" at `https://tripsit.me/combo.json`. The wiki footer thanks tripsit.me ([Copyrights](https://psychonautwiki.org/wiki/Copyrights)).
- **TripSit's license.** PsychonautWiki does not state one. `https://combo.tripsit.me/` now redirects to [tripsit.me/combo](https://tripsit.me/combo), whose footer reads "© Copyright TripSit. All Rights Reserved." The [TripSit/drugs](https://github.com/TripSit/drugs) GitHub repository has no LICENSE file; the GitHub API reports `license: null`. Its `package.json` declares `"license": "ISC"`, and its README states no data license.
- **Data shape.** Interaction targets are free text that mixes substances, classes and foods, for example `Stimulants`, `Tricyclic antidepressants`, `Opioids`, `Grapefruit` and `MAOIs` in the Ketamine and LSD API output. The API resolves each name to a snapshot substance or a stub. The page records no per-pair mechanism, severity rationale or source ID as structured data.
- **Staleness.** For Pregabalin, the GraphQL API returned `uncertainInteractions: Oxycodone, SSRI, MDMA`. SMW returned `UncertainInteraction: Oxycodone, MDMA, SSRIs, Ketamine` with `_MDAT 2026-07-22T06:32:05`, matching [Pregabalin revid 170240](https://psychonautwiki.org/w/api.php?action=query&prop=revisions&titles=Pregabalin&rvprop=ids%7Ctimestamp%7Cuser&format=json&formatversion=2) ([browsebysubject Pregabalin](https://psychonautwiki.org/w/api.php?action=browsebysubject&subject=Pregabalin&format=json)). Issue [#75](https://github.com/psychonautwiki/bifrost/issues/75) reports the same discrepancy.

## 8. Effects taxonomy

- **Wiki form.** Substance articles annotate effects inline inside `{{effects/base}}` and `{{effects/physical|…}}` blocks. Example: `*'''[[Effect::Stimulation]]''' - LSD is usually described as very energetic …` ([LSD wikitext](https://psychonautwiki.org/w/index.php?title=LSD&oldid=169966)). The SMW `Effect` property has 15,571 usages, and LSD carries 93 values ([smwbrowse](https://psychonautwiki.org/w/api.php?action=smwbrowse&browse=property&params=%7B%22limit%22%3A500%2C%22offset%22%3A0%2C%22search%22%3A%22%22%2C%22description%22%3Afalse%2C%22prefLabel%22%3Afalse%2C%22usageCount%22%3Atrue%7D&format=json), [browsebysubject](https://psychonautwiki.org/w/api.php?action=browsebysubject&subject=LSD&format=json)).
- **Effects disclaimer.** The rendered [LSD page](https://psychonautwiki.org/wiki/LSD) says: "Disclaimer: The effects listed below cite the Subjective Effect Index (SEI), an open research literature based on anecdotal user reports and the personal analyses of PsychonautWiki contributors. As a result, they should be viewed with a healthy degree of skepticism."
- **SEI.** [Subjective effect index](https://psychonautwiki.org/wiki/Subjective_effect_index) calls the SEI "a collection of wiki articles designed to serve as a comprehensive reference work for the diverse range of subjective effects". It says the SEI "currently contains over 200 entries" whose contents "are principally derived from the collective experiences and analyses of our contributors, various anecdotal reports collected from the internet, and (whenever possible) the published scientific literature". The [project page](https://psychonautwiki.org/w/index.php?title=PsychonautWiki&oldid=170290) dates the "original notes which devised the first plans for … the subjective effect index" to summer 2011, by Josikins.
- **API exposure (broken).** `effects`, `effectsBySubstance` and `Effect.substances` exist in the schema. Live results:
  - `effectsBySubstance(substance:"LSD")` returned `[{"name":"LSD",…}]`.
  - `effectsBySubstance(substance:"Caffeine")` returned `[{"name":"Caffeine",…}]`.
  - `substancesByEffect(effect:["Euphoria"])` and `substances(effect:"Euphoria")` both returned `[]`.

  The cause is visible in [revalidator.rs L507-L528](https://github.com/psychonautwiki/bifrost/blob/e2fb969aff088332e45ef54553838ee62801d6ec/src/cache/revalidator.rs#L507-L528). The code maps each ask result *subject* (`item.fulltext`) to an `Effect` and ignores the `Effect` printouts. The comment there reads "This is a simplified implementation". [/metrics](https://api.psychonautwiki.org/metrics) reports `bifrost_cache_index_by_effect_size 373`, one entry per substance. Issue [#64](https://github.com/psychonautwiki/bifrost/issues/64) (open since 2026-01-08) reports the bug, and PR [#73](https://github.com/psychonautwiki/bifrost/pull/73) (open, unmerged) would fix it. The API exposes effect names and URLs only, never descriptions or levels.
- **Licensing.** SEI article text falls under the footer license, CC BY-SA 4.0. Effect names attached to substances are SMW semantic data, which Copyrights declares CC BY 4.0 ([Copyrights](https://psychonautwiki.org/w/index.php?title=Copyrights&oldid=145652)).
- **Relation to Effect Index.** [effectindex.com](https://effectindex.com/) footer: "Formalised documentation of subjective effects. Not medical advice. Content is licensed under CC BY-NC-SA 4.0 for non-commercial reuse with attribution." The PsychonautWiki [Network](https://psychonautwiki.org/w/index.php?title=Network&oldid=168179) page lists "Effect Index (see also Subjective effect index on PsychonautWiki)". A wiki `insource:"effectindex"` search found 3 pages, including a replication credited to an effectindex.com profile on Environmental cubism. The two are separate sites with different licenses. No PsychonautWiki page observed here describes a shared dataset or a license grant between them. BHWiki's existing policy keeps Effect Index link-only ([docs/reference-research.md](reference-research.md) line 45, [CONTENT-LICENSE.md](../CONTENT-LICENSE.md) line 9).

## 9. Stability and risks

| Signal | Observation | Source |
| --- | --- | --- |
| API data freshness | Snapshot about 136 days old; circuit breaker open; revalidation queue fully due; no revalidations since boot | [/health](https://api.psychonautwiki.org/health), [/metrics](https://api.psychonautwiki.org/metrics) |
| API defects | `effects` returns the substance itself for all 373 substances; `summary` returns the wrong block in 357 of 373; data is stale; non-substance pages are listed. Issue #75 (2026-10-15) has 0 comments. | [#75](https://github.com/psychonautwiki/bifrost/issues/75) |
| Maintenance cadence | The last master commit was 2026-02-24. Dependabot PRs #68 and #72 and fix PRs #73 and #74 are open. | [commits](https://github.com/psychonautwiki/bifrost/commits/master), [issues](https://github.com/psychonautwiki/bifrost/issues) |
| Outages | #70 (2026-04-25, open, no reply): "Error 503 first byte timeout … Varnish cache server". #63 (2025-12-27): timeouts at offset 192, closed 2026-01-06 by commit fbaf715. | [#70](https://github.com/psychonautwiki/bifrost/issues/70), [#63](https://github.com/psychonautwiki/bifrost/issues/63) |
| Maintainer | Kenan Sulayman authored the 2026 master commits. GitHub user `19h` replied on #63 that the fix had "Landed in" commit fbaf715, which Kenan Sulayman authored. `[INFERENCE]` `19h` is the same maintainer. The project page lists Kenan as handling "infrastructure and system operations". | [commits](https://github.com/psychonautwiki/bifrost/commits/master), [#63](https://github.com/psychonautwiki/bifrost/issues/63), [project page](https://psychonautwiki.org/w/index.php?title=PsychonautWiki&oldid=170290) |
| Wiki software | MediaWiki 1.35.1. mediawiki.org: "MediaWiki 1.35 is an obsolete long-term support release" and "MediaWiki 1.35.0 to 1.35.4 contain a critical security issue." | [siteinfo](https://psychonautwiki.org/w/api.php?action=query&meta=siteinfo&siprop=general&format=json&formatversion=2), [MediaWiki 1.35](https://www.mediawiki.org/wiki/MediaWiki_1.35) |
| Editorial activity | 121 article and template edits by 11 users between 2026-08-15 and 2026-11-05 (72 in October, 37 in early November), 5 of them to SubstanceBox templates; `activeusers 21` | [recentchanges](https://psychonautwiki.org/w/api.php?action=query&list=recentchanges&rcnamespace=0%7C10&rctype=edit%7Cnew&rcprop=title%7Ctimestamp%7Cuser%7Cids&rcend=2026-08-08T00:00:00Z&rclimit=500&format=json&formatversion=2), siteinfo |
| Approval backlog | LSD SubstanceBox edits from 2024-05-08 and 2026-01-08 are not displayed; the approved revision is from 2022-06-29 | Section 4 |
| Coverage | Category:Psychoactive substance has 411 pages and 12 subcategories; the API lists 373, including 7 class or disambiguation pages | [categoryinfo](https://psychonautwiki.org/w/api.php?action=query&prop=categoryinfo&titles=Category:Psychoactive%20substance&format=json&formatversion=2), API |
| Domain | psy.is registry expiry 2026-11-21 | ISNIC whois |
| Footer anomaly | Every page footer ends with a link to `https://evolgent.de` ("evolgent - Online-Privatpraxis für Psychotherapie …") inside `<li style="transform: rotateX(90deg);">`. `[INFERENCE]` The link is visually hidden and unrelated to licensing. | [Copyrights HTML](https://psychonautwiki.org/wiki/Copyrights) |
| Deprecation notices | `action=mobileview` is deprecated (T186627) but is the only robots-allowed `api.php` action. The API's `experiences` query is described as a "Legacy … stub". | mobileview response, introspection |

## Licensing implications for BHWiki

None of this is legal advice. It applies the declared terms in section 2 to BHWiki's licenses: CC BY-SA 4.0 for editorial content and MIT for code ([CONTENT-LICENSE.md](../CONTENT-LICENSE.md)).

| Material | Declared license | May BHWiki store and redistribute it? | Conditions and caveats | Recommendation |
| --- | --- | --- | --- | --- |
| Numeric dose, duration and bioavailability ranges, units and ROA names (SMW) | CC BY 4.0 | Yes, as attributed third-party data inside CC BY-SA 4.0 content | CC BY §3(a) attribution, a modification notice and a license link. The values are uncited and approval-gated. Record the SMW `_MDAT`, the approved template revision and the retrieval date. Keep the data out of MIT-licensed code paths, or label its CC BY 4.0 status explicitly. | Store only as clearly labelled "PsychonautWiki states" source values with provenance. Never present them as BHWiki-verified dosing. |
| Classes, common names, tolerance and cross-tolerance strings | CC BY 4.0 | Yes, as for the ranges | Tolerance, toxicity and addiction strings are short prose fragments, and BHWiki policy avoids copying PsychonautWiki prose ([docs/content-sources.md](content-sources.md) line 109). | Import identifiers and names. Keep free-text fragments link-only unless the policy changes. |
| Interaction lists (uncertain, unsafe, dangerous) | CC BY 4.0 (semantic data) | Legally plausible but risky | Some entries are "sourced from TripSit", whose combo page is "All Rights Reserved". Entry-level provenance is incomplete. | Link-only, or use as a lead list re-verified against primary sources. Do not bulk import until the TripSit question is resolved. |
| Effect names per substance (`Effect`) | CC BY 4.0 | Yes, as identifiers or links | The API field is broken, so data would come from SMW. | Link to PsychonautWiki effect pages. Use names only as cross-reference keys. |
| Article prose and SEI effect descriptions | CC BY-SA 4.0 | Legally compatible with BHWiki's CC BY-SA 4.0 | Same-license share-alike, attribution and change notes. This conflicts with BHWiki's current no-copy policy. | Keep link-only under the current policy. |
| API `summary` | CC BY-SA 4.0 (page text) `[INFERENCE]` | — | Broken (wrong block) | Do not use. |
| Images and files | Owner's copyright; per-file tags mostly absent | No, unless a file has a verified free license | `File:LSD.svg` is `{{PD-ineligible}}`; most sampled files lack tags | Link-only. |
| Experience reports | Owner's copyright | No | — | Link-only, matching current practice. |
| DEIS-original articles | "Probably" CC BY-NC-SA 4.0 | No (NC is incompatible) | — | Link-only. |
| Effect Index content | CC BY-NC-SA 4.0 | No | — | Link-only, matching current policy. |
| bifrost source code | MIT | Yes, for code reuse | Covers code only, not returned content | n/a |
| API reagent data | Unstated provenance | No | Upstream source not documented in the repository | Do not import. |

### Proposed attribution text

This is a BHWiki proposal; PsychonautWiki requests no specific format. Place it beside any imported value and on a central provenance page:

> Dose, duration and route data for *LSD* from PsychonautWiki contributors, "[LSD](https://psychonautwiki.org/wiki/LSD)" (Semantic MediaWiki data, page modified 2025-12-11T08:07:17Z; SubstanceBox approved revision 152462; retrieved 2026-11-06), licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) per [PsychonautWiki: Copyrights](https://psychonautwiki.org/wiki/Copyrights). Units and structure converted by BHWiki. No warranty. PsychonautWiki notes its dosage information "is gathered from users and resources for educational purposes only" and "should be verified with other sources for accuracy."

### Unresolved

1. Copyrights declares semantic data CC BY 4.0. Contributors' edit-time grant is CC BY-SA 4.0 through the default `copyrightwarning`. Whether PsychonautWiki can offer the more permissive BY grant for SMW annotations is not established. `[INFERENCE]` Treating the data as CC BY-SA 4.0 costs BHWiki nothing for content already under BY-SA 4.0. It matters only if the data enters MIT-licensed artefacts.
2. PsychonautWiki gives no attribution format, and the meaning of "additional terms may apply" is unexplained.
3. It is unknown which interaction entries came from TripSit, and under what permission.
4. `[INFERENCE]` EU sui generis database rights may apply, given the German operator and German-law disclaimer. CC BY 4.0 §4 covers them when the licensor holds them. For data, the CC BY grant suffices.

## Open questions

| Question | What was tried | Status |
| --- | --- | --- |
| Is there an API rate limit or usage policy? | Response headers, the API landing page, bifrost router and schema code, a wiki search for "terms of use" | None found. Ask the team through GitHub issues or team@psy.is. |
| May BHWiki automate `api.php` reads (SMW, revisions), which robots.txt disallows under `/w/`? | Read robots.txt and the Main Page notice | Unresolved. Needs explicit permission. |
| How can the *approved* revision ID be obtained programmatically? | `paraminfo` for `query+approvedrevs` (missing); `action=parse` (returns latest); `mobileview` (article revision only) | Only `wgRevisionId` in page HTML found, on robots-disallowed `/wiki/Template:` pages for templates |
| Is Caffeine's SMW/template mismatch also due to Approved Revs? | Compared SMW values with latest template wikitext | Approved revision ID not checked. `[INFERENCE]` |
| Are database or XML dumps available? | Wiki search for "database dump" (0 hits); project page, Network page | None found. Special:Export not tested because robots.txt disallows `Special:`. |
| Which deployed bifrost commit is running? | `/health` returns `version 4.0.0` only | Unknown |
| Why does the API list 373 substances when the category holds 411 pages? | Compared the two counts | `[INFERENCE]` Snapshot age and SMW category resolution; not verified |
| Where does the API's reagent data come from, and under what license? | Read `scripts/convert_reagents.py` and `src/services/reagents/mod.rs` | No source attribution found |
| Which interactions came from TripSit, and under what license? | Template intro, Network page, tripsit.me/combo footer, TripSit/drugs repository | PsychonautWiki gives no license statement. TripSit says "All Rights Reserved"; its repository has no LICENSE file. |
| Are the DEIS articles actually CC BY-NC-SA? | Copyrights says "probably" | Unresolved |
| Do the SEI and Effect Index share any license grant or relationship? | Network page, wiki searches, Effect Index footer | Not established from primary sources |
| Will psy.is be renewed after the 2026-11-21 expiry? | ISNIC whois | Unknown. Canonical links avoid the dependency. |
| What are the per-file licenses for images? | `imageinfo` + `extmetadata` for 4 LSD files | Mostly no license tag. Each file would need checking before any reuse. |
