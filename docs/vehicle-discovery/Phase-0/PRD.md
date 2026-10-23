# Product Requirements Document (PRD)

**Product:** Vehicle Discovery & Comparison Platform (working name)

**Version / date:** 1.2 / 23 October 2026

**Status:** Phase 0C documentation freeze for owner review; Phase 0B benchmark accepted, rights/implementation authorization still gated. See [validation report](PHASE_0B_VALIDATION_REPORT.md) and [rights register](PROVIDER_RIGHTS_REGISTER.md).

**Owner / implementation:** DanAuto automobile business; existing application modernized in place. No Phase 1 implementation begun.

## 1. Product summary

A polished, searchable, mobile-first platform where anyone in the world can explore actual U.S.-market vehicle configurations, inspect reliable technical and efficiency facts, compare 2–4 alternatives, and save a shortlist. Vehicle data is assembled from multiple complementary public APIs/open feeds (EPA/DOE, NHTSA catalog/safety/recalls and carefully licensed media), normalized and refreshed in a controlled backend pipeline. No vehicle catalog records are typed into source files.

The new discovery capability is an informational **vehicle research tool within the existing DanAuto dealership application**. Preserve the existing Lagos sales/sourcing/inspection/services and contact experience. Research records do not imply dealer stock, local availability, valuations or offers. Market coverage and data-source boundaries remain visible.

## 2. Problem, opportunity and differentiation

- Automotive specifications are dispersed among vehicle catalogs, government datasets and image sources.
- A car's make/model/year alone is insufficient to identify its engine, transmission, drive configuration or fuel economy.
- Comparison tools can falsely suggest precision when two variants have mismatched market or test conditions.
- A high-quality, transparent, API-based comparison experience is a strong proof of full-stack frontend engineering, data modeling, caching, testing and accessibility.

**Differentiation:** Every factual field has a source, market, measurement and freshness context; unknowns are explicit; comparison operates on exact source-backed configurations rather than vague model names.

## 3. Target audience and primary jobs

| Persona | Need | Critical journey |
|---|---|---|
| Prospective buyer | Narrow choices without marketing hype | Search → filter → inspect → compare → shortlist |
| Auto enthusiast | Understand equipment and powertrain variations | Browse manufacturer/model/year → variant details |
| Researcher / student | Verify published consumption and emissions | Search model → inspect source/metric basis → compare |
| Portfolio reviewer | Evaluate software product quality | Full, live, accessible, documented application |

**Primary target:** general English-language desktop/mobile visitors, without accounts.

## 4. Goals and non-goals

### Goals

G1. A usable discovery catalog that derives vehicle listings from supported external datasets, not hand-maintained car objects.

G2. Correct separation of model, model year and exact configuration.

G3. Effective faceted search, URL-linked results, sorted and paginated results.

G4. Credible vehicle detail pages with verified specifications, metadata, and licensed photos or placeholders.

G5. Accurate comparison among 2–4 variants with correct display units and missing-value semantics.

G6. Browser-persistent favorites and comparison selection without login.

G7. Accessible responsive premium design from 320px to very wide screens; predictable loading/error states.

G8. Maintainable architecture with automated tests, monitoring and **$0 automotive API subscription fees** for v1, subject to separate infrastructure free-tier allowances.

G9. Conditional official U.S. safety-rating and recall enrichment with visible source, matching scope and warnings about coverage.

### Non-goals for new research features in v1

These exclusions do not authorize removal of existing dealership content or business routes. Their preservation/cutover is defined in [the route plan](IN_PLACE_MODERNIZATION_PLAN.md).

- Real dealer stock, location-aware used-car offers, purchase/checkout, payments, shipping or contact with sellers.
- Vehicle market values, estimated MSRP, insurance, credit calculators or ownership cost predictions.
- Native mobile application, user-uploaded car listings, inventory management, booking or social network.
- Guaranteed worldwide vehicle variants, global spec claims, or universal automobile/body type coverage.
- VIN decoding, public accounts, cloud favorites, 3D rendering and generative photography in v1.
- Automatically claiming horsepower, torque, 0–60, interior options, safety ratings or dimensions where no authorized source returns them **for the actual supported configuration**.

## 5. Data-market policy

- **Launch model years:** 2015–2026 inclusive, U.S. EPA-record-backed vehicle configurations. Support later expansion across EPA historical data since 1984.
- **Product language:** 'U.S.-market specifications' and 'EPA estimates' where relevant. Visitors anywhere can browse; geographic access is not a claim about local vehicle availability.
- **2027:** Preliminary data may exist but is not part of standard launch coverage until a deliberate, clearly labeled update decision.
- **Segments:** Supported passenger-car, SUV, minivan, pickup and other EPA-represented classes only; categories without dependable data are not advertised as complete.
- **Data integrity:** No invented facts, no inferred prices, and no guessed exact trim/photo identity.

## 6. Functional requirements (MoSCoW)

| ID | Priority | Requirement | Acceptance evidence |
|---|---|---|---|
| FR-01 | Must | Home page with search, supported categories and clear CTA | Search navigates to Explorer; cards populated from backend |
| FR-02 | Must | Search vehicle year/make/model and clear text search | Results match normalized records; empty/error cases handled |
| FR-03 | Must | Year, make, model, fuel, drivetrain, transmission, category filters | Only real populated facets shown; cascading selections remain valid |
| FR-04 | Must | Server-side pagination and deterministic sort | Stable counts/order; no duplicate page records |
| FR-05 | Must | URL-reflected search/filter/sort/page state | Reload/back/forward/share preserve state |
| FR-06 | Must | Vehicle detail by stable public identifier | Correct year/make/model/config; provenance/last update visible |
| FR-07 | Must | Official consumption and emissions values where present | Units, official EPA standard, unavailable state displayed |
| FR-08 | Must | Compare 2–4 exact configurations | Unique selection, remove/replace, same-unit columns, diff display |
| FR-09 | Must | Favorites saved locally in browser | Add/remove, refresh survival, graceful disabled-storage fallback |
| FR-10 | Must | Accurate image or neutral fallback | Attribution/source accessible; no false exact-match claim |
| FR-11 | Must | Data Source/Methodology page | Providers, geographic scope, caveats, corrections policy |
| FR-12 | Must | Loading, no-results, partial-data, upstream-failure states | Tested on small/mobile/desktop widths |
| FR-13 | Must | Dark/light themes and reduced-motion behavior | Choice persists; contrast and motion requirements checked |
| FR-14 | Should | Metric/imperial UI preferences | Physical-unit conversion without changing original source values |
| FR-15 | Must | Copy/share comparison link | URL can reconstruct comparison order and IDs |
| FR-16 | Must | Keyboard-operable mobile filter sheet and compare tray | Accessible focus management; no clipped content |
| FR-17 | Could | Recently viewed vehicles | Local-only and opt-in for user convenience |
| FR-18 | Later | Account and cloud-synced favorites/comparisons | Explicit v2 milestone |
| FR-19 | Later | VIN decoding, extended trim/performance specs | Only with validated source and terms |
| FR-20 | Later | Live listings / valuations / regional expansion | Separate product and budget decision |
| FR-21 | Should | Official safety results where the tested variant match is verified | Rating and test basis shown, or clear `Not rated / no reliable match` |
| FR-22 | Should | Official recall campaigns mapped to make/model/year with exact scope explanation | Campaign and official details linked; no claim a specific VIN is affected |
| FR-23 | Must | Multi-source provenance and provider-failure resilience | Per-field source/timestamp; one provider failure does not break the core catalog |

## 7. Routes and page contracts

| Route | Purpose | Essential UI |
|---|---|---|
| `/` | Unified DanAuto home | Preserve business CTAs and content; add discovery search/categories and verified featured records only when ready |
| `/vehicles` | Explorer | Search input, validated facets, sort, count, paginated result cards |
| `/vehicles/:slugOrId` | Detail | Configuration label, photo, key specs, sections, provenance, compare/favorite |
| `/compare` | Comparison | 2–4 exact configurations, grouped comparable metrics, differences, replace |
| `/favorites` | Local shortlist | Saved configurations, empty state, compare action |
| `/about` | Company and research information | Retain company identity; explain research scope without removing business content |
| `/data-sources` | Trust and methodology | Supplier names, refresh policy, scope, measurement notes, photos credits |
| `/privacy` | Privacy | Anonymous browsing, local storage, optional telemetry disclosure |
| `/terms` | Terms | Informational nature of specifications, source copyrights |
| `*` | Not found | Clear recovery to search/home |

Existing `/services`, `/gallery`, `/contact`, `/cookies`, `/cars`, `/cars/:carId` and `/models` aliases remain reachable until the route-specific validated cutover in [IN_PLACE_MODERNIZATION_PLAN.md](IN_PLACE_MODERNIZATION_PLAN.md). One router/frontend; no parallel product. Optional image credit overlay/detail may be a reusable component, not a separate route.

## 8. Discovery behavior

- Query matches normalized make/model/variant terminology and recognized aliases; whitespace/case/punctuation handling is deterministic.
- Make → model → year selections constrain the choices to real existing configurations. Year selection also works independently.
- Refinements: category/EPA class; fuel type; drivetrain; transmission; optionally cylinders, displacement, EPA combined MPG/MPGe or EV range only when semantically applicable and broadly available.
- Range filters label units and exclude missing fields rather than treating null as 0.
- Selectable sort: relevance/name/model year; efficiency sorted within compatible metric classes only. Incomparable MPG and MPGe are not interleaved as though identical.
- Canonical URLs encode filters, sort and page; invalid values are sanitized with a recoverable message.
- Display result totals, active chips, Clear All; support skeleton, empty-results suggestions and recoverable network errors.
- Do not fetch all records to the browser and filter them client-side.

## 9. Detail behavior

- Display full available identity: U.S., year, make, model, EPA option/powertrain distinction; do not fabricate a commercial trim label.
- Sections: Overview, Powertrain, Transmission & Drive, EPA Efficiency & Range, Emissions, optionally verified U.S. Safety Ratings and Model-Scoped Recalls, available passenger/cargo class or volume, Sources & Last Updated, Images.
- Each optional data field is nullable. Explain N/A, not collected and differing test standards where relevant.
- Distinguish annual fuel cost **estimates** (dependent on fuel prices, usage assumptions and data retrieval date) from transaction prices.
- EV and PHEV fields appear conditionally; gasoline MPG vs electric MPGe/kWh per 100 miles are labeled and compared correctly.
- Place favorite and comparison actions near main heading and maintain focus/accessibility.

## 10. Comparison behavior

- Minimum two, maximum four **different variant IDs**. Persist selection in a shareable URL and fallback session/local storage.
- Show identical field groups in all columns; compare numbers only if metric, market and standard match, after unit conversion as appropriate.
- Highlight 'different' fields and optionally 'better' values only where direction makes sense (lower CO2/consumption, higher range) and comparable basis exists. Never declare a single 'best car'.
- If a metric is absent for one or more vehicles, render 'Not available' per cell, not a numeric zero.
- PHEV must distinguish blended gas/electric operation; no misleading zero-fuel-consumption claims.
- Mobile: pinned metric labels, card-switcher or horizontal table with clear swipe cues; accessible focus order and no viewport-wide overflow.

## 11. Favorites behavior

- Allow adding/removing by canonical variant ID; show favorite count; same saved set across relevant pages in a browser.
- Persist in local storage where available; handle blocked storage (private browsing) without application crashes.
- Indicate that local favorites are not synced across devices; accounts are intentionally postponed.
- Removed/unpublished records show a recoverable warning rather than breaking favorites view.

## 12. UI, accessibility and responsive design

**Visual direction:** restrained premium automotive editorial design: carbon and graphite, electric-blue/silver accents, professional vehicle imagery, strong numerical hierarchy, minimal but purposeful motion, clear data tables.

**Width planning:** 320–359 very-small phones; 360–599 phones; 600–767 large phones/small tablets; 768–1023 tablets; 1024–1439 laptops; 1440–1919 desktops; 1920+ widescreens. These are design-test ranges, not hardcoded device categories.

- Mobile-first responsive layout; max-readable content width on desktops; no page-level horizontal scroll.
- Semantic controls; screen reader descriptions; focus styles; functional skip link; dialog focus trapping and return; 44px touch target where practical.
- WCAG 2.2 AA-oriented implementation review; respect reduced-motion and meaningful image alt text.
- Consistent images/skeleton aspect ratios to limit layout shift. Lazy-load below-the-fold photos.
- User-selectable theme; reduced sensory load; no decorative data visualizations that imply absent facts.

## 13. Nonfunctional requirements

| ID | Requirement | Target and method |
|---|---|---|
| NFR-01 | Availability/resilience | Cached catalog read path works through transient upstream outage; clearly dated freshness |
| NFR-02 | Performance | Representative page Lighthouse Performance ≥90 on defined mobile audit; LCP ≤2.5s, CLS ≤0.1 in controlled runs where practical |
| NFR-03 | Accessibility | Lighthouse Accessibility ≥90 plus manual keyboard/contrast/focus audits; no critical a11y defects |
| NFR-04 | Security | No secrets in browser; server validation and rate controls; least-privilege DB policy |
| NFR-05 | Correctness | 100% sampled provenance; zero known false photo/variant matches, missing ≠ 0 |
| NFR-06 | Reliability | Provider adapter timeouts/backoff; repeatable upsert and fail-safe sync |
| NFR-07 | Testing | Critical user journeys automated and green across desktop/mobile CI fixtures |
| NFR-08 | Transparency | Public market, sources, dates, metric standards, licensing/credit policy |
| NFR-09 | Cost | Free-first operation; quotas/egress monitored; any recurring paid API requires approval |
| NFR-10 | Maintainability | Schema migrations, shared type/validation contracts, versioned field-mapping docs |

## 14. Success metrics after launch

- Discovery journey task completion; search-to-detail click-through; compare starts/completions; favorite additions.
- Zero confirmed cross-variant mismatches; number of published photos with complete licensing evidence; sync success rate.
- Field availability rates (engine, drivetrain, EPA MPG, EV range, image) reported by model year/fuel type.
- p75 navigation and search timings; Lighthouse audit results by representative device; API/server spending.
- Do not predeclare target adoption/traffic numbers before observing a baseline.

## 15. Risks, dependencies and mitigations

| Risk | Response |
|---|---|
| EPA records are not marketing-trim names | Label as source-backed configurations; keep separate variant identifiers |
| NHTSA model/year nomenclature differs | Alias/crosswalk table; no automatic merge on loose text similarity |
| Imagery is scarce/ambiguous | Licensed exact-match-first approach; honest placeholders |
| Specs unavailable without paid data | Optional fields, contextual missing states, careful feature copy |
| External APIs slow or rate-limited | Controlled sync and read-through local database; provider abstraction |
| Source values are revised | Source ID, import revision, record modified date, scheduled delta sync |
| Research records confused with existing dealership offers | Retain business pages, label U.S. research scope and do not infer inventory or current prices |
| Free hosting resource limits | Budget guardrails and monitoring; no unrestricted bulk download endpoint |

## 16. Sign-off and handoff

Phase 0B research is accepted: 30 responses, 29/30 conservative targets, 450/450 applicable core values, 12 safety/recall investigations, five representative file audits. These are dated research results, not implemented tests. Phase 1 remains gated on rights closure, owner-approved hosting/risks and explicit authorization; baseline/recovery must be verified before implementation. See [ROADMAP_AND_ACCEPTANCE.md](ROADMAP_AND_ACCEPTANCE.md).


## 17. Multiple free data providers: product boundaries

We will evaluate and integrate **more than two free/public APIs** whenever they provide meaningful, legally usable fields. The launch data ingestion is still anchored to **EPA source IDs** because other sources often do not encode equivalent trim-level configurations. NHTSA Safety Ratings and Recalls are distinct endpoints and may contribute safety information but have incomplete or broader matching scopes.

- **Safety data:** Display official NCAP scores only after joining an NHTSA-tested variant to the appropriate vehicle at a supported specificity. No matching test means *Not rated/No verified match*, never a zero-star rating. A year/make/model match alone cannot prove engine- or trim-specific equivalence.
- **Recall data:** A make/model/year recall result indicates a possibly relevant campaign, **not** proof a particular vehicle/VIN is affected, outstanding, or unrepaired. Give source links and advise users to check by VIN through official channels.
- **Open metadata:** Wikidata is contextual enrichment, never a replacement for EPA powertrain records; unsupported items remain omitted.
- **Images:** Verified Commons photos can be exact or labeled representative; the user should never mistake a representative photo for a precise trim/configuration.
- **Free budget:** Free access is not the same as unlimited access. Quotas, caching, attribution, uptime, and fair-use controls must be documented. Any source requiring payment for ongoing public deployment is excluded unless the user later authorizes an upgrade.

See `FREE_MULTI_API_STRATEGY.md` and `CODEX_PHASE_0_HANDOFF.md` for the operational details.

## 18. Phase 0C frozen decisions and evidence limits

- Existing DanAuto directory/repository/history and business routes are mandatory; no duplicate frontend.
- [Phase 0B](PHASE_0B_VALIDATION_REPORT.md): 29/30 targets; Silverado 1500 unresolved; 450/450 core values includes its provisional record. No complete horsepower/torque/trim/price promise.
- Gasoline, diesel, HEV/mild HEV, BEV and PHEV use separate applicable fields and operating modes. Classification comes from explicit source evidence, not name heuristics.
- NCAP broader-scope context may display separately; exact EPA rating association needs exact evidence. No overall/frontal competitive ranking without same-body/within-250lb evidence. Dedicated recalls feed is authoritative for campaigns; no VIN repair claims.
- Five audited photo examples are representative; exact-photo coverage is zero established in this sample. Unavailable photos use neutral placeholders.
- [Rights register](PROVIDER_RIGHTS_REGISTER.md) controls publication. [Hosting assessment](HOSTING_ASSESSMENT.md) recommends Cloudflare subject to checks; Vercel Hobby excluded.
- Optional [open enrichment](OPEN_DATA_ENRICHMENT_REVIEW.md) cannot block the core or replace accurate unknown states. No trials as required dependencies.
- Existing performance, WCAG/accessibility, security and testing targets remain release requirements; no research check is counted as application test evidence.
