# DanAuto in-place modernization blueprint

**Phase 0C proposal frozen for review: 23 October 2026. No implementation authorized.**

## 1. Product and repository boundary

One DanAuto application, directory, VS Code workspace and Git history. Retain the Lagos dealership sales/sourcing/inspection/service experience while introducing clearly labelled U.S.-market research features. No sibling application, parallel SPA or second repository. Existing business content is not reclassified as EPA data or live stock. This document resolves the earlier separate-product/repository advice.

## 2. Retain, adapt and replace inventory

| Existing source | Retain | Adapt or replace after authorization |
|---|---|---|
| src/App.jsx | One router, lazy routes, shared shell, skip-link concept | Route-level error/loading handling, real 404, metadata, reduced-motion-aware scroll; remove fixed 1.4s boot delay only after checks |
| src/components/Navbar.jsx and Footer.jsx | DanAuto identity, business navigation, contact/social destinations | Add research navigation; keyboard/mobile focus; owner verifies actual contact destinations before release (current WhatsApp number is not assumed operational) |
| src/components/Button.jsx | Shared link/button variants | Typed discriminated props, accessible disabled/loading state, focus and reduced motion |
| src/components/CarCard.jsx, CatalogModelCard.jsx | Card layout, lazy image/aspect-ratio concepts | Source-backed configuration contract; remove generated price/power/range; reduced-motion/touch-safe interactions |
| src/components/Hero.jsx | Brand presentation and CTA hierarchy | Pause autoplay; avoid mandatory animation; add research entry without burying business contact |
| src/components/Loader.jsx | Consistent loading appearance | Real async loading and stable layout; accessible announcements |
| src/pages/Home.jsx | Sales/sourcing/ownership-support content and useful sections | Add validated discovery entry; do not silently relabel sample requests as inventory |
| AboutPage.jsx, Services.jsx, Gallery.jsx | Company, service categories, gallery navigation and useful editorial composition | Verify claims/assets; accessible carousel controls and pause; separate editorial photos from configuration photos |
| src/pages/Cars.jsx, CarDetails.jsx | Browse/detail UX ideas and legacy URL availability | Shared catalog UI and stable IDs; data adapters replace generated objects progressively |
| src/pages/Contact.jsx | Form fields, validation intent and contact journey | Current success is simulated after 1.2s; approved future delivery must only report success after confirmed receipt, with failure/retry/privacy handling |
| src/pages/Legal.jsx | Existing privacy/terms/cookies routes | Review local-storage, provider, imagery and contact-data disclosures with actual behavior |
| src/index.css | Useful spacing, brand motifs, layout classes | Inventory existing tokens before Tailwind 4; replace broad outline suppression with visible focus; preserve responsive behavior |
| src/utils/data.js | Verified business copy/assets only after owner/rights review | Retire 166 generated model catalog and incompatible eight detail objects when replacement passes; never ingest formula values as verified facts |

Current interactions to preserve as useful concepts: Cars.jsx has deferred text search, brand selection, type tabs, fuel and estimated-price filters, result counts and empty states. Replace client-only filtering with server facets/URL state; withhold the price filter until authorized comparable dated prices exist. CarDetails.jsx has previous/next gallery controls and thumbnail selection; retain with keyboard labels and verified assets. Hero/About have slide selectors; Services/Gallery have autoplay presentation. Add pause/reduced-motion controls and preserve the service/contact CTAs. These are existing interactions, not implemented comparison/favorites features. Source inspection does not establish browser or production verification.

## 3. Route-by-route transition

| Existing/new route | Before replacement is validated | Approved target behavior and release check |
|---|---|---|
| / | Existing dealership home | Unified DanAuto home with research entry and preserved business CTAs; navigation/contact regression check |
| /about | Preserve company page | Company plus concise research scope; no loss of business identity |
| /services | Preserve all existing service categories | Maintain service/contact links; source-backed research remains informational |
| /gallery | Preserve editorial gallery | Audit rights; label representative editorial photos; never infer stock availability |
| /contact | Preserve reachability and current fields | Correct simulated submission in an authorized stage; test real receipt/error state before release |
| /cars | Preserve legacy catalog until Explorer passes | Canonical Explorer becomes /vehicles; redirect /cars preserving supported query state only at approved cutover |
| /cars/:carId | Preserve legacy detail availability | Explicit reviewed old-ID crosswalk to new detail; if no equivalent, explain archived/unavailable legacy entry. Never choose a similar EPA vehicle |
| /models and /models/:carId | Preserve current aliases to /cars | Later server redirects through reviewed destination mapping; prevent chains/loops |
| /vehicles | Add only when validated behind preview/release controls | Same application Explorer using read API; URL filters, pagination, keyboard and hard-refresh tests |
| /vehicles/:id | New stable internal public ID | Exact EPA configuration, scoped enrichments, sources, licensed photo/fallback; unknown ID gives real 404 |
| /compare | New | 2–4 distinct published IDs in shareable ordered URL; metric semantics and mobile check |
| /favorites | New | Local persistence with blocked-storage and removed-record states |
| /data-sources | New | Market, methods, freshness, corrections, image credits and provider scope |
| /privacy, /terms, /cookies | Preserve URLs and current content pending review | Update disclosures to actual feature behavior |
| * | Current home redirect remains until planned fix | Accessible 404 with HTTP 404 for indexed detail URLs; do not canonicalize every unknown path to home |

Use one implementation of Explorer/detail components. Temporary legacy-data adapters and route flags are migration mechanisms with a removal criterion, not a permanent duplicate frontend. Shared CSS changes must be checked on business pages too.

SEO: inventory existing deployed URLs/titles before changes; stable public IDs and canonical URLs; preserve useful indexed pages; genuine server redirects at cutover; sitemap contains published records only. SPA hard-refresh fallback must exclude API paths and distinguish missing details. Define prerender/server metadata strategy for indexable detail pages during implementation without assuming client-side title changes guarantee indexing.

## 4. Production protection before implementation

Observed local main: 05b0ac136b9075fab0b41a4b31307f54146471ea (23 October 2026); **not proven to be deployed production**. Existing docs/ and .codex/ are untracked. No Git mutation has been performed.

Once explicitly authorized:
1. Identify actual production provider, deployment ID, deployed Git SHA, Node/package versions, build command, asset/redirect settings and domain bindings. Record settings without secrets.
2. Back up the working tree including necessary untracked docs/assets; exclude secrets from repository/bundle. A Git bundle alone omits untracked work and deployment settings.
3. Establish an owner-approved baseline tag/archive from the verified deployed commit; verify archive integrity and restore into an isolated temporary checkout.
4. Rebuild with the recorded toolchain; test all routes and business CTAs in an isolated preview. If exact rebuild is impossible, preserve the immutable deployed artifact and document the limitation before proceeding.
5. Rehearse provider rollback to the prior deployment without changing live production. Record restore steps, expected recovery time and successful preview smoke checks.
6. Create a modernization development branch only when authorized; protect production branch, require PR checks and explicit production promotion. Prevent existing auto-deploy integration from publishing development commits.
7. Isolate preview environment/data/secrets; previews must never run destructive jobs against production. Preserve current production until a release is approved.
8. For later database changes, use additive expand/contract migrations and a tested restore/export. App rollback alone cannot reverse data loss; defer destructive schema cleanup until the old release no longer depends on it.

## 5. Reviewable implementation stages

All stages below are proposed. Phase 1 authorization does not automatically authorize services, migrations or production release.

| Stage | Change | Acceptance | Rollback |
|---|---|---|---|
| 1A | Verified baseline, restore rehearsal, regression map, CI proposal | Production SHA/settings captured; isolated recovery succeeds; business routes/CTAs checked | Keep current production artifact pinned |
| 1B | Add TypeScript alongside JS; typed domain boundaries, lint/typecheck/test tooling | Existing JS still works; contracts distinguish scope/null/modes; legacy regression checks pass | Revert bounded tooling PR |
| 1C | React 18.3 → React 19 and compatible React dependencies | Review React migration warnings/removals; route/forms/motion smoke and build pass | Revert dependency/lockfile PR |
| 1D | Supported Vite/Node toolchain upgrade | Pin supported versions after official compatibility/security review; build/preview parity | Restore toolchain/lockfile |
| 1E | Tailwind 3 → 4 separately | Review browser support, CSS directives/plugins and token mapping; all pages at 320–1920px, 200% zoom, focus/contrast/reduced motion pass | Revert CSS/tooling PR |
| 1F | Unified navigation, route skeletons, design system and source-agnostic fixtures | Business routes intact; no fixtures mistaken for real data; responsive accessible shell; no production secrets | Route flag / bounded PR revert |
| 2 | Provider adapters + Zod, approved fixtures, Supabase schema and ingestion | Rights cleared; EPA ID uniqueness, idempotent upsert, per-field sentinel rules, staged atomic promotion and recovery tests | Retain last-valid dataset; additive schema |
| 3 | Explorer | Server pagination/facets/sort; URL back/forward; compatible metric filters; no full-corpus browser fetch | Retain old /cars until cutover approved |
| 4 | Details and imagery | Validate sampled records; provenance, missing values, stable URLs, representative labels and credits | Unpublish affected record/asset, neutral fallback |
| 5 | Compare/favorites | 2–4 IDs, share order, units/modes; local persistence and blocked-storage tests | Disable new feature without dropping catalog |
| 6 | Scoped safety/recalls | Tested IDs/body/drive/release distinguished; dedicated recall feed; no VIN-status claims; exclusion fixtures pass | Hide affected enrichment, keep core catalog |
| 7 | Release QA and hosting | Typecheck/lint/build/unit/integration/E2E; security/a11y/performance gates; preview/physical-phone checks; restore rehearsal; explicit release approval | Promote preserved deployment; compatible DB rollback plan |

Testing: Vitest/RTL/MSW for parsing, adapters and states; contract tests for read API; database integration for uniqueness/upserts; Playwright business + discovery journeys at phone/desktop. Keep live-provider smoke tests separate from deterministic CI fixtures. Existing Lighthouse ≥90 and LCP/CLS, WCAG 2.2 AA-oriented requirements remain in PRD/roadmap.

## 6. Proposed internal boundaries

- src/: existing frontend progressively migrated; features/discovery, details, comparison, favorites and shared UI.
- shared/: TypeScript/Zod request, response and metric contracts.
- server/: provider adapters, normalization/matching, constrained read services, runtime entry.
- db/: reviewed PostgreSQL migrations/indexes; no schema created during Phase 0.
- jobs/: bounded ingestion outside page-request runtime; no public unrestricted import endpoint.
- tests/: deterministic fixtures and meaningful cross-layer tests; live tests opt-in.

Recommended runtime/hosting is in [HOSTING_ASSESSMENT.md](HOSTING_ASSESSMENT.md); provider authorization in [PROVIDER_RIGHTS_REGISTER.md](PROVIDER_RIGHTS_REGISTER.md).

## 7. References checked 23 October 2026

- [React 19 upgrade guide](https://react.dev/blog/2024/04/25/react-19-upgrade-guide)
- [Tailwind 4 upgrade guide](https://tailwindcss.com/docs/upgrade-guide)
- [Phase 0B evidence](PHASE_0B_VALIDATION_REPORT.md)
- [Acceptance and blockers](ROADMAP_AND_ACCEPTANCE.md)
