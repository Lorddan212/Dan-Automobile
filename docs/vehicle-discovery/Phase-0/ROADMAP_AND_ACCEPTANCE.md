# Implementation Roadmap, Acceptance Gates & Phase 0 Sign-Off

**Version:** 1.2 — 23 October 2026. **Not a claim of implemented work.** No **new platform** repo, database, deployment, paid subscription, API key or code has been created. The original DanAuto repo already exists and must be preserved.

## 0. Phase approach

Each phase is a testable milestone. Do not proceed merely because a screen looks polished. Maintain `status`, `files_changed`, `decisions`, `tests`, `blocked_by`, `risks`, and `next_action` in the implementation report for each phase. Git operations, database migrations and deployment should be explicit, with separate verification evidence.

### Phase 0 — Research/PRD and provider proof (benchmark accepted; rights and authorization pending)

**Deliverables:** PRD, provider comparison with official links, source priority, sample cohort/evaluation rubric, logical schema and identity policy, image/license strategy, UX design brief, risk and cost register, measurable test plan.

**Exit gate:**

- [x] Scope committed: free-first / US specs globally accessible / 2015–2026 initial years / in-place modernization of the existing DanAuto directory, workspace and Git repository.
- [x] User journeys, required pages, exclusions, core feature priorities and nonfunctional targets written.
- [x] Multiple free API roles documented against provider reference pages: EPA, NHTSA vPIC, NHTSA NCAP, recalls, Commons and optional Wikidata/AFDC.
- [x] Source-grounded schema and commercial licensing safeguards specified.
- [x] Image credibility, licensing, fallback strategy and mobile requirements defined.
- [x] Complete frozen 30-record benchmark: 29/30 confirmed targets; 450/450 applicable core values. See [evidence](PHASE_0B_VALIDATION_REPORT.md).
- [ ] Verify source access/redistribution/attribution requirements and any rate quotas against current provider terms.
- [x] Audit five actual file pages and screen all 30 targets; representative examples, not exact EPA photos. Final asset admission remains open.
- [ ] Confirm chosen free deployment quotas/CSV import-runner approach and resource limits.
- [ ] Approve any necessary adjustment after validation; then formally unlock Phase 1.

**Important:** The research benchmark is accepted, but rights and Phase 1 authorization remain open. Do not confuse successful API access or documentation completion with legal publication clearance or implemented tests.

### Phase 1 — Product foundation and design system

**Scope:** progressively modernize the existing React 18/JS/Vite/Tailwind 3 app toward React 19/TS/Vite/Tailwind 4; routing; common layout; theme; typed domain contracts; responsive token system; ESLint/formatting/tests; CI; error and loading components; source-agnostic sample test fixtures.

**Acceptance:**

- [ ] Initial application builds without TypeScript/lint errors; no production secrets bundled.
- [ ] Navigation to every defined route works with keyboard and mobile controls.
- [ ] 320px, 375px, 768px, 1024px and 1920px shells show no horizontal page overflow.
- [ ] Theme preferences and reduced-motion behavior function correctly.
- [ ] CI runs unit tests, lint and typecheck on PRs.
- [ ] Application displays only clearly designated fixture/sample data until real ingestion is verified.

### Phase 2 — Backend, normalized catalog and synchronization

**Scope:** Supabase schema migrations and indexes, multiple free provider adapters, EPA CSV ingestion, NHTSA vPIC identity lookups, conditionally linked NHTSA safety/recalls, public read endpoints, validation and provenance, scheduled sync, observability, and image metadata model.

**Acceptance:**

- [ ] Catalog contains real eligible EPA-backed records; no hardcoded vehicle catalog in frontend.
- [ ] Each published variant has immutable internal ID + unique external EPA ID and correct market/year/model linkage.
- [ ] Rerunning import does not increase duplicates or erase valid records.
- [ ] Field-specific missing/sentinel rules and MPG/MPGe semantics pass known sample cases.
- [ ] Partial provider failures preserve last valid catalog and surface recorded sync errors.
- [ ] No commercial credentials leaked; public API paginated and input validated.
- [ ] Read models, facets, detailed records and metadata are covered by contract tests.

### Phase 3 — Home and Vehicle Explorer

**Scope:** live featured vehicles from database, search/filter/sort/pagination, URL synchronization, responsive filtering, filter chips, skeletons, empty/error states.

**Acceptance:**

- [ ] Multiple search/filter combinations return records matching SQL-backed query semantics.
- [ ] Facets contain only values actually represented in filtered eligible data.
- [ ] Pagination has no duplicates/omissions for a stable query; sort deterministic on ties.
- [ ] Browser Back/Forward/Refresh restore Explorer state.
- [ ] Invalid URL parameters are rejected or normalized gracefully.
- [ ] All catalog cards show correct identity, source-backed metrics, and truthful image status.
- [ ] Filtering is functional on 320px and tablet widths, keyboard-operable.

### Phase 4 — Vehicle details and approved photos

**Scope:** variant-specific details, identity, source dates, spec groups, accurately scoped safety/recall modules where validated, accurate metric interpretations, approved images, attribution, placeholders, robust error boundaries.

**Acceptance:**

- [ ] Verify 30 sampled detail pages against stored EPA source IDs and raw values.
- [ ] Missing optional fields never produce zero, fake MSRP or invented horsepower.
- [ ] All displayed photo metadata valid, attribution accessible and model matching reviewed.
- [ ] Detail URL remains stable after re-import and loads on hard refresh.
- [ ] Layout and media loading are responsive and have no broken image states.

### Phase 5 — Comparison and local favorites

**Scope:** select 2–4 variants, side-by-side comparison, replace/remove, diff highlight, mobile alternative view, shareable compare URL, browser favorites.

**Acceptance:**

- [ ] Comparison rejects duplicate/unpublished IDs and gracefully reports missing records.
- [ ] Numeric differences only computed for same underlying metric/basis; unit conversions tested.
- [ ] Fuel economy and electric range rules verified for ICE, HEV, BEV and PHEV cases.
- [ ] User can save/remove a favorite and reload page retaining same list when storage available.
- [ ] Compare state is shareable and reconstructs correct order.
- [ ] Mobile comparison works at 320px without hidden labels or page overflow.

### Phase 6 — QA, accessibility, security and performance

**Scope:** Vitest/RTL/MSW unit and integration; Playwright E2E; quality/performance audits; security review and observability.

**Acceptance:**

- [ ] CI green for typecheck, lint, build, all automated suites.
- [ ] Playwright runs browse → search/filter → detail → compare → favorite flow at phone and desktop sizes.
- [ ] Tested widths: 320, 375, 430, 768, 1024, 1440 and 1920 px, plus 200% zoom where applicable.
- [ ] Automated Lighthouse representative landing/explorer/detail/compare target ≥90 Performance, Accessibility, Best Practices, recorded methodology and run conditions.
- [ ] Manual WCAG 2.2 AA-oriented checks; no critical/fundamental focus, keyboard, color or screen-reader defect.
- [ ] No blocker/high-severity security findings, leaked secrets, raw unsanitized upstream rendering or unrestricted ingestion endpoints.
- [ ] Provider downtime/rate limits, malformed data, missing image, missing config, and stale cache tests pass.

### Phase 7 — Deployment and production release

**Scope:** owner-approved commercially eligible host (Cloudflare recommended subject to runtime checks; Netlify fallback; Vercel Pro paid-reference only), Supabase database, secure environment configuration, migrations, import/sync process, monitoring, public documentation, privacy/data-source disclosures and portfolio case study.

**Acceptance:**

- [ ] HTTPS production site works on desktop and physical phone; routes survive hard refresh.
- [ ] Public catalog serves actual supported U.S.-market records, with source citations/limitations visible.
- [ ] Background ingestion/refresh has a documented manual recovery method and quota guardrails.
- [ ] Monitoring reports rate-limit, import or availability failures without exposing credentials.
- [ ] README includes architecture, setup, source/license caveats, limitations and screenshots.
- [ ] A repeatable production smoke-test checklist passes and release notes document feature coverage.

### Phase 8 — Optional extensions (NOT committed for v1)

Possible: cloud accounts/favorites with RLS, saved comparisons, VIN decoding, permitted licensed horsepower/torque/trim data, premium imagery, enhanced EV metrics, multi-market data, real car inventory and pricing. Each extension needs a discrete PRD, validated API license and approved operating budget.

## B. Representative acceptance test matrix

| Journey | Normal | Boundary | Failure |
|---|---|---|---|
| Browse/search | Year/make/model and free text return correct variants | Unknown query/long model name/no records | Invalid query, API timeout |
| Filters | Fuel, drive, year, class combine correctly | Null metrics, zero results, reset, URL refresh | Invalid facet / stale URL |
| Details | Source-backed EPA numbers displayed with units | Historic year, multiple matching options, BEV/PHEV | Missing source/image / provider stale |
| Compare | 2–4 distinct IDs, conversion and diff | 2 same-model different variants, unknown fields | Duplicate ID / removed variant |
| Favorites | Save, remove, persist | Large local list, outdated ID | localStorage blocked |
| Image | Exact or labeled representative with credit | No image, broken remote thumbnail | License revoked / ambiguous model |
| Responsive | Search/filter/compare on 320–1920 | 200% zoom, landscape, long text | No clipped actions or inaccessible modal |
| Sync | New/updated records handled | Same import repeated | 429, malformed rows, partial CSV |

## C. Phase 0 data pilot template

For each of 30 EPA records, log:

- Index and choice rationale (year, make, model, fuel category and class).
- HTTP endpoint/feed date and EPA source ID, exact option label and modification date.
- NHTSA lookups/matching notes, if any.
- Required/optional field coverage; MPG versus MPGe interpretation.
- Ambiguous/missing/conflicting values with screenshots or response snippets.
- Image candidate file URL, license/author, matching grade, fallback outcome.
- Request status/latency/rate limits, reviewer, date and go/no-go note.

The pilot was completed 12–13 October 2026; preserve the accepted [validation report](PHASE_0B_VALIDATION_REPORT.md). This template applies to future revalidation; do not replace historical evidence with new values.

## D. Cost and operational decision gates

- Baseline public APIs can be free; free database/hosting bandwidth, resource limits and storage still need monitoring.
- No paid automotive API and no committed monthly/annual recurring budget in v1.
- If paid upgrade proposed, attach exact provider plan, required endpoints, commercial/public display rights, caching/storage rights, call forecast, monthly/annual cost, overage behavior, cancellation and tested accuracy. Require owner sign-off.
- Commercial vendor marketing descriptions are not sufficient evidence of legal permission to store or redistribute records or images.

## E. Phase 0 'definition of ready to code'

The project is **ready for authorized in-place implementation only after**: (1) PRD reviewed, (2) verified pilot source coverage and identity scheme, (3) a documented image rights procedure demonstrated with real files, (4) confirmation of feasible free-tier data ingestion/hosting, and (5) a known-good sample fixture set for automated tests. The benchmark and image-rights procedure provide research evidence for items 2–3; rights closure, fixture permissions, host selection and production recovery remain open. Readiness status below is authoritative; no scaffolding/new application is proposed.


## F. Multi-API acceptance addendum (v1.1)

**Phase 0 provider matrix:** For each included free source record endpoint, document access/key requirements, applicable quota, commercial/public display rights, local caching or bulk ingestion rights, update cadence, coverage, matching key, error shapes, and documented fallback.

**Pilot cohort:** Maintain the 30 EPA variant sample. For >=12 sampled model/year combinations, attempt Safety Ratings and Recall lookups, recording *tested/not tested/no safe match, campaign/no campaigns/source error* separately. Review >=5 Commons candidate photos for rights and vehicle identity. Optional Wikidata and AFDC probes must not block core catalog readiness.

**Phase 0 pass conditions:** No false exact-match source joins in reviewed sample; every attached field stores source and date; safety/recall display tests prove that unavailable, untested and none-found are separate cases; all public-provider usage terms documented; no paid subscription or undisclosed recurring commitment. Record actual coverage as measured rather than imposing an arbitrary unverified percentage.

**Phase 2 additional acceptance:** Core EPA catalog still works if NHTSA safety/recalls and Commons are down; model-scope recalls never appear as VIN-specific status; official safety scores never flow to a mismatched exact variant; rate limiting cannot create retry storms.

**Phase 4 additional acceptance:** Safety and recall modules appear only when coverage is reliable, present clear source URLs and tested/model scope, handle both no-record and source-error states, and pass fixture-driven UI tests.

**Workspace rule:** Codex is already operating inside an existing DanAuto frontend project. The original Lagos-based business website, its static catalog, and its Git history must be preserved through the approved incremental route plan. The owner has finalized in-place modernization; repository location is not an open decision. Adding these Markdown planning documents is not permission to refactor existing source code. Do not run installs, upgrade dependencies, modify databases, commit, push, deploy, or rewrite routes until authorized.

## G. Phase 0C authoritative acceptance status

| Gate | Status as of 23 October 2026 | Required next evidence |
|---|---|---|
| In-place repository/product decision | PASS | One application; preserve history and business routes |
| Frozen benchmark ≥24/30 | PASS | 29/30; unresolved Silverado retained |
| Core-field/matching evidence | PASS (research) | 450/450 values; no false exact joins adopted; not implemented adapter/UI tests |
| Safety/recall and imagery research | PASS (research) | 12 cases, five file audits; production display/asset tests remain |
| Eight planning documents reconciled and evidence preserved | PASS (documentation) | Review this Phase 0C packet |
| EPA commercial reuse | BLOCKED | Official terms/written permission for display/cache/storage/normalization/read-API redistribution |
| vPIC redistribution scope | BLOCKED for proposed redistribution | Clarification; no blanket license inference |
| Host recommendation | PARTIAL | Cloudflare recommended; owner selection, account quota and real edge/runtime checks pending |
| Production baseline/recovery | PARTIAL | Plan documented; actual deployed SHA/settings, backup and isolated restore not executed |
| Licensed fixtures and final image admission | PARTIAL | Fixture permissions, deterministic test cases and final asset review |
| Full-corpus size/performance | PARTIAL | Actual count/DB/index/load measurements in authorized implementation |
| Phase 1 authorization | BLOCKED | Explicit owner approval after prerequisite review |

Overall **Phase 0 readiness: BLOCKED** by core rights and missing Phase 1 authorization. Documentation work can be complete while publication/implementation readiness stays blocked.

Protected-baseline/branch/restore actions are proposals only and require the appropriate next authorization. No branch/tag/commit/service/migration/deploy was created. [Detailed stages and route acceptance](IN_PLACE_MODERNIZATION_PLAN.md); [hosting](HOSTING_ASSESSMENT.md); [rights](PROVIDER_RIGHTS_REGISTER.md); [unsent inquiries](PROVIDER_INQUIRY_DRAFTS.md).

Phase 4's 30-page check means verify all eligible sampled detail records and explicitly verify that provisional/unpublished #19 is withheld; do not publish it merely to make a 30-page check pass. Safety/recall failures degrade only their modules; rights and identity failures cannot be bypassed. Accessibility/performance/security/CI requirements above are retained.

Phase 1 proposal: 1A baseline/recovery/regression map; 1B gradual TS/contracts and checks; 1C React19; 1D Vite/Node compatibility; 1E Tailwind4; 1F unified shell and clearly labelled fixtures. Review upgrades separately. Backend, migration and deployment gates are later authorizations, not implied by documentation acceptance.
