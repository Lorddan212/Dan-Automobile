# DanAuto Vehicle Discovery & Comparison — Phase 0

**Version 1.2 / 23 October 2026. Phase 0C documentation finalized for review. Application implementation has not begun.**

## Final product and repository decision

Modernize the **existing DanAuto application in its current directory, VS Code workspace and Git repository**. Preserve Git history, dealership content/routes and current production until replacement functionality is validated and an explicit release is approved. This supersedes earlier independent-repository/sibling-app recommendations. One coherent application, progressively migrated to React 19, TypeScript, Vite and Tailwind CSS 4.

Documentation edits only are authorized now. Do not install, modify app/config, create branches/tags/commits, stage/push/deploy, migrate databases, configure services, change DNS/secrets or send email.

## Planning and evidence index

The original eight documents remain:
1. [PRD.md](PRD.md) — product scope, functional/nonfunctional requirements and existing-route preservation.
2. [API_PROVIDER_EVALUATION.md](API_PROVIDER_EVALUATION.md) — complementary providers, historical paid alternatives, fixed benchmark criteria.
3. [FREE_MULTI_API_STRATEGY.md](FREE_MULTI_API_STRATEGY.md) — provider responsibilities, boundaries and failure handling.
4. [DATA_AND_APPLICATION_ARCHITECTURE.md](DATA_AND_APPLICATION_ARCHITECTURE.md) — configuration identity, scoped N–N links, provenance, mappings, read API and ingestion.
5. [IMAGE_AND_DESIGN_STRATEGY.md](IMAGE_AND_DESIGN_STRATEGY.md) — asset rights, matching, fallbacks, design/accessibility.
6. [ROADMAP_AND_ACCEPTANCE.md](ROADMAP_AND_ACCEPTANCE.md) — phase/release gates and authoritative open blockers.
7. [CODEX_PHASE_0_HANDOFF.md](CODEX_PHASE_0_HANDOFF.md) — next-session boundaries and verification.
8. This README — decisions and navigation.

Phase 0C supporting documents:
- [PHASE_0B_VALIDATION_REPORT.md](PHASE_0B_VALIDATION_REPORT.md) — preserved 12–13 October evidence; not a new benchmark.
- [PROVIDER_RIGHTS_REGISTER.md](PROVIDER_RIGHTS_REGISTER.md) — rights/access/storage/commercial decisions and unresolved items.
- [PROVIDER_INQUIRY_DRAFTS.md](PROVIDER_INQUIRY_DRAFTS.md) — professional EPA/vPIC drafts, **unsent**.
- [HOSTING_ASSESSMENT.md](HOSTING_ASSESSMENT.md) — current commercial hosting comparison and cost/runtime assumptions.
- [OPEN_DATA_ENRICHMENT_REVIEW.md](OPEN_DATA_ENRICHMENT_REVIEW.md) — optional power/dimensions/equipment/photos/MSRP opportunities, rights and coverage gaps.
- [IN_PLACE_MODERNIZATION_PLAN.md](IN_PLACE_MODERNIZATION_PLAN.md) — keep/adapt/replace inventory, every route, staged upgrades and recovery.

## Frozen v1 decisions

- U.S.-market EPA-backed configurations, 2015–2026; globally accessible research, not a claim of worldwide variants or dealer inventory. Preliminary 2027 excluded unless separately approved.
- Multiple complementary free providers: FuelEconomy.gov configuration anchor, vPIC identity, NCAP/Recalls scoped enrichment, Commons file-reviewed photos. Wikidata and verified open datasets optional; AFDC stations later.
- No mandatory paid automotive APIs. Free access does not establish commercial storage/redistribution rights or unlimited infrastructure.
- Exact comparison identity uses internal UUID + EPA ID; no guessed trim/photo joins.
- Server search/filter/sort/pagination and URL state; compare 2–4 distinct configurations in shareable order; favorites local; no accounts/VIN required.
- Missing hp/torque/MSRP/dimensions/equipment remain unknown. Annual fuel-cost estimates are not prices.
- Exact or clearly labelled representative imagery, with author/source/license/version; neutral fallback accepted.
- Shared DanAuto business navigation and content retained; no duplicate SPA.
- Cloudflare Workers Static Assets + small read API, Supabase PostgreSQL and bounded external jobs recommended, subject to runtime/owner approval. Netlify fallback; Vercel Hobby excluded for business use; Pro paid reference only.
- Privacy: no identity/VIN required, local favorites, least-privilege DB/read API, no secrets bundled. Accessibility/performance/testing release targets retained.

## Verified evidence versus proposals

Accepted Phase 0B: 30/30 EPA records retrieved, **29/30 conservative frozen targets**, unresolved Silverado 1500; **450/450 applicable core values** including that candidate; 12 safety/recall investigations; five representative image-file audits. Numeric/string/null/mode interpretation checked in memory, not production test coverage.

Current source audit: React18/JS/Vite5/Tailwind3 frontend, generated 166-model catalog and separate eight detail records, simulated contact submission. Local main at 05b0ac1 is not proof of production SHA. docs/ and .codex/ were untracked at entry. No build/browser/deployment parity claimed.

## Readiness and next action

**Phase 0 readiness BLOCKED:** EPA commercial feed rights and vPIC redistribution clarification remain; host selection/runtime fit, production recovery and licensed fixtures/assets require follow-through. Documentation completion is not Phase 1 approval.

Owner reviews this packet and unsent inquiries. Obtain applicable permissions, approve the deployment/upgrade sequence, then explicitly authorize the limited next phase. Proposed first work is verified baseline/recovery followed by staged foundation migration, not a new application or immediate production release.

Directory is spelled Phase-0 on disk; Windows resolves the requested phase-0 path to the same directory. Internal links preserve relative filename casing.
