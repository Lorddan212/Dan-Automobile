# Commercial hosting assessment

**Official-document review: 23 October 2026. Proposal only; no account, DNS, environment, hosting or deployment changes.** Current account entitlements and existing production host are unverified.

## 1. Recommendation and eligibility

Recommend **Cloudflare Workers with Static Assets** for the future unified Vite frontend and small read API, Supabase PostgreSQL via constrained HTTPS queries, and GitHub Actions for bounded ingestion. Cloudflare Pages plus Pages Functions is a viable alternative delivery shape, not another frontend. Use one chosen shape at implementation.

Commercial eligibility assessment: Cloudflare's self-serve agreement explicitly accommodates company/entity customers; reviewed general, application-service and developer-platform terms and Free pricing contain no personal/noncommercial-only condition for this proposed Pages/Workers use. This is a documented eligibility assessment, not a legal guarantee or SLA. Normal acceptable-use, content and service limits still apply. Review terms again at deployment.

Netlify expressly permits commercial Free projects in its official announcement; current pricing uses credits and supersedes that older announcement's quota numbers. Netlify is the fallback if Node function compatibility outweighs Cloudflare's free CPU restriction. Vercel Hobby remains excluded for this business use; Pro is a paid reference requiring separate budget approval.

## 2. Comparison

| Option | Eligibility / deployment | Functions and quota snapshot | Scheduling | Secrets, Git, Supabase |
|---|---|---|---|---|
| Cloudflare Workers Free + Static Assets | Commercial assessment above; one edge entry and Vite static bundle | Dynamic requests 100,000/day, 10ms CPU/request, 128MB memory; static asset requests free/unlimited under product pricing; asset/runtime limits apply | Cron Triggers supported; current Free account limit 5. Do not use small edge budget for full CSV imports | Worker secret bindings; Git-backed Workers Builds or authorized CI deployment; HTTPS Supabase interface avoids assuming Node TCP compatibility |
| Cloudflare Pages Free + Functions | Static dist deployment with optional edge functions; same eligibility | 500 builds/month, one concurrent build, 20-minute build timeout; 20,000 files and 25MiB/file; Functions use Workers quota | Pages has no independent scheduled Functions model; use separate Worker cron or external runner | GitHub/GitLab previews, environment-scoped bindings; Supabase HTTPS |
| Netlify Free, current credit plan | Commercial projects allowed; static bundle plus Node/edge functions | 300 shared credits/month; production deploy 15 credits, bandwidth 20/GB, requests 2/10k, compute 10/GB-hour; allowance is shared, not independent maxima | Scheduled Functions supported for deployed functions; compute/runtime and credit limits apply | Environment variables with function scope; Git previews; Node SDK/HTTPS Supabase. Prevent preview access to production secrets |
| Vercel Pro, paid reference | Commercial plan; static Vite + server functions | $20/month platform fee currently includes one deploying seat and $20 usage credit; additional usage/seat terms apply | Cron supported subject to function/plan limits | Scoped secrets, Git previews and Supabase compatibility; no purchase approved |
| Existing production host | Preserve until owner-approved release | Host and exact deployed settings not established | Unknown | Verify baseline first; local main is not proof of production |

Sources: [Workers limits](https://developers.cloudflare.com/workers/platform/limits/), [Workers pricing](https://developers.cloudflare.com/workers/platform/pricing/), [Static Assets](https://developers.cloudflare.com/workers/static-assets/), [Pages limits](https://developers.cloudflare.com/pages/platform/limits/), [Workers builds](https://developers.cloudflare.com/workers/ci-cd/builds/limits-and-pricing/), [Cron](https://developers.cloudflare.com/workers/configuration/cron-triggers/), [secret bindings](https://developers.cloudflare.com/workers/configuration/secrets/), [Cloudflare agreement](https://www.cloudflare.com/terms/), [application-service terms](https://www.cloudflare.com/service-specific-terms-application-services/).
Netlify: [commercial Free announcement; historical quotas](https://www.netlify.com/blog/introducing-netlify-free-plan/), [current pricing](https://www.netlify.com/pricing/), [self-serve service agreement](https://www.netlify.com/pdf/self-serve-subscription-agreement.pdf/), [functions](https://docs.netlify.com/build/functions/overview/), [scheduled functions](https://docs.netlify.com/build/functions/scheduled-functions/). The website Terms of Use are not the service agreement; the guessed master-agreement URL failed and is not relied on.
Vercel: [Hobby restriction](https://vercel.com/docs/plans/hobby), [Pro reference](https://vercel.com/docs/plans/pro-plan).

Developer-platform terms: https://www.cloudflare.com/service-specific-terms-developer-platform/ (reviewed 23 October 2026). Workers Builds Free currently provides 3,000 build minutes/month, one concurrent build and a 20-minute timeout; this is distinct from Pages' 500-build allowance.

## 3. Cost and runtime guardrails

Netlify arithmetic example (assumption, not forecast): 4 production releases = 60 credits; 5GB delivery = 100; 100,000 requests = 20; 1GB-hour compute = 10. Total 190/300 before other metered features. Exhaustion can pause the site. Do not copy old 100GB/300-build-minute allowances into current-plan forecasts; legacy accounts may differ.

Cloudflare's 10ms free CPU is a material validation risk for Zod, normalization, rendering and broad searches. Keep ingestion outside the request runtime; validate bounded input/output, query indexed DB views and cache safely. Network wait and CPU are different resources. Benchmark real edge execution before final runtime acceptance; if insufficient, propose Netlify or an explicitly approved paid Workers plan. No automatic paid fallback.

Use GitHub standard Linux runners for weekly EPA and monthly identity refresh, with bounded daily/weekly recall/safety jobs. Public standard runners may be free; private GitHub Free has 2,000 monthly minutes, subject to account terms. Schedules can be delayed; support manual authorized recovery, concurrency locks and last-success monitoring.

## 4. Supabase and storage sizing

[Supabase Free](https://supabase.com/pricing): 500MB DB, 1GB file storage, 5GB egress plus 5GB cached egress, two active projects, inactivity pause after one week. Commercial suitability does not establish production availability or backup guarantees. Plan export/restore and suspension recovery; do not generate fake activity to bypass policy.

Phase 0B assumptions retained: 12,000–18,000 2015–2026 configurations (not counted); sample serialized EPA row mean ~1.99KB, one raw snapshot ~24–36MB; normalized/provenance/index initial estimate 150–300MB. Measure full eligible count and actual indexed size before approval. Version changed rows only, bound logs/history and retain quota headroom. 1,000 optimized 150KB images ~150MB; don't cache multi-MB originals indiscriminately.

50,000 uncached 20KB API responses ~1GB; 20,000 150KB images ~3GB. Cache hit rates, regional latency and production traffic remain unmeasured. Avoid duplicated data stores: Supabase is authoritative; CDN caches are disposable. Keep images outside relational rows and preserve approved rights manifests.

## 5. Release conditions

Owner selects/approves deployment shape and quota risk; runtime compatibility and regional query latency pass; production baseline/rollback verified; rights cleared; preview isolated; least-privilege DB roles and secrets verified; budget alerts and pause/failure behavior documented. Provider rules and $0 automotive APIs do not promise $0 infrastructure at arbitrary load.

See [migration plan](IN_PLACE_MODERNIZATION_PLAN.md) and [rights register](PROVIDER_RIGHTS_REGISTER.md).
