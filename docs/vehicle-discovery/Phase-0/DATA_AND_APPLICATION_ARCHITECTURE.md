# Data Model, Application Architecture and Ingestion Contract

**Status:** Phase 0C proposed architecture freeze, 23 October 2026; no SQL, application code or services implemented. Rights/publication gates remain open. See [accepted evidence](PHASE_0B_VALIDATION_REPORT.md).

## 1. Why the schema is configuration-centric

`make + model + year` is NOT sufficient to compare exact vehicles. Multiple engines, fuels, transmissions and drive types may coexist. The authoritative first-release configuration key is **EPA vehicle record ID** in the U.S. catalog, never a guessed marketing trim name. CarAPI commercial trim identities, when adopted later, must be stored in a separately sourced crosswalk and matched only with reliable evidence.

Canonical user-visible label pattern: `2024 • Toyota • [Model] • [EPA option description / drivetrain / engine] • U.S.-market`. The words in brackets are displayed only if supplied. EPA option names need not equal dealer-marketed trims.

## 2. Logical entity model

| Entity/table | Example columns | Key relationships / constraints |
|---|---|---|
| `data_providers` | id, name, homepage, access_type, data_license_url, refresh_policy, cache_policy, enabled | One row per authorized provider |
| `manufacturers` | id, canonical_name, slug, country_if_source, status | Unique canonical slug |
| `makes` | id, canonical_name, vpic_make_id nullable | Brand distinct from legal manufacturer |
| `manufacturer_make_links` | manufacturer_id, make_id, market, valid_from, valid_to, evidence_record_id | Reviewed N–N legal manufacturer relationships |
| `manufacturer_aliases` | id, manufacturer_id, alias, source_provider_id | Alias unique within provider, reviewed if ambiguous |
| `make_aliases` | id, make_id, alias, provider_id | Reviewed brand aliases; preserve raw provider label |
| `models` | id, make_id, canonical_name, slug, segment_if_verified | Unique `(make_id, slug)` with audited exceptions |
| `model_aliases` | id, model_id, alias, source_provider_id | Match differences without mutating source string |
| `model_years` | id, model_id, year, market_code, status | Unique `(model_id, year, market_code)` |
| `vehicle_variants` | id (UUID), model_year_id, source_identity, option_label, body_class, fuel_kind, drivetrain, transmission_label, engine_description, is_published, first_seen_at, last_seen_at | Exact configurations, not VINs; unique provider/source mapping; preserve null |
| `variant_specs` | variant_id, engine_liters, cylinders, ev_motor_kw, mpg_city, mpg_highway, mpg_combined, mpge_combined, kwh_per_100mi, ev_range_miles, co2_g_per_mile, ghg_score, source_basis, last_verified_at | 1:1 or split by metric group; don't conflate MPG/MPGe |
| `variant_spec_values` (extension) | id, variant_id, spec_key, numeric_value, text_value, unit, standard, context, provider_record_id, observed_at | Future optional enrichment; typed metric dictionary; unit-aware provenance |
| `provider_records` | id, provider_id, provider_record_key, raw_content_location_or_checksum, source_created_at, source_modified_at, fetched_at, field_version | Unique provider/key plus version where retained; licensed storage only |
| `provider_entity_links` | provider_record_id, target_entity_type, target_entity_id, match_scope, confidence, review_status, evidence, verified_at | Scoped N–N; enforce real entity references via typed link tables/constraints; no falsely exact variant link |
| `provider_match_reviews` | id, provider_record_id, candidate_entity_type, candidate_entity_id, match_reason, confidence_status, reviewed_at | Required for ambiguous matching across all providers, including safety/recalls/images; constrain target references |
| `vehicle_images` | id, variant_id nullable, model_year_id nullable, model_id nullable, source_page_url, image_url_or_asset_key, creator, license_name, license_url, permitted_uses, match_level, approved, checked_at, sort_order | Published only after license + accuracy review |
| `ingestion_runs` | id, provider_id, scope, status, started_at, finished_at, record_counts, revision, errors_summary | Audit sync completeness |
| `ingestion_issues` | id, ingestion_run_id, source_record_key, issue_type, severity, resolution | Unmatched/malformed/conflict queue |
| `favorite_lists` (v2) | id, user_id, created_at | Accounts only in v2 |
| `favorite_items` (v2) | id, list_id, variant_id, saved_at | Unique `(list_id, variant_id)` |
| `saved_comparisons` (v2) | id, user_id, share_token, created_at | Accounts only in v2; guest version in URLs |
| `comparison_items` (v2) | comparison_id, variant_id, position | 2–4 distinct variants when saved |

**v1 persistence:** Keep favorites in local browser storage, not in production database user tables. Implement v2-only tables when accounts are approved. `provider_records` may hold only permitted metadata/checksums for a restricted commercial provider; raw payload storage is policy-dependent.

## 3. Relationship summary

- `manufacturers` N—N `makes` 1—N `models` 1—N `model_years` 1—N `vehicle_variants` 1—1 `variant_specs`.
- `data_providers` 1—N `provider_records`; scoped `provider_entity_links` relate records N—N to appropriate makes/models/model-years/configurations/tests/campaigns.
- `vehicle_images` attaches to the narrowest justified entity (exact variant → model year → model); inheritance is explicitly labeled as **representative** and never silently promoted to exact-match.
- `vehicle_variants` N—N `saved_comparisons` only if the future cloud feature is enabled.

## 4. Identity, matching and versioning rules

- EPA `(provider = EPA, id = EPA source vehicle ID)` is the unique upstream identity for initial variants.
- Internal UUIDs are stable across provider reimports; URLs use immutable public IDs or durable slugs + IDs. Reimport must be idempotent (upsert, not truncate/recreate).
- Manufacturer normalization: canonical case, punctuation/diacritics strategy, alias mapping. Do not merge `Mercedes` into `Mercedes-Benz`, or similarly named model generations, merely from fuzzy text without explicit mapping.
- A source-side change to variant powertrain or configuration is logged and evaluated; do not silently overwrite a cross-sourced value with a different meaning.
- Preserve original strings and units for traceability; normalized display units are derived by documented conversion functions.
- Do not present NHTSA decoded VIN records as catalog variants unless actually linked to the same year/model/configuration.

## 5. Field-provenance contract

Every published number or categorical specification must be traceable to:

1. `provider_id`, upstream record key, observation/import time and optional source modification time;
2. U.S. market/geographic scope;
3. unit and measurement standard (EPA city/highway/combined, MPGe, kWh/100mi, range basis, etc.);
4. raw-to-normalized mapping version; and
5. nullable/not-applicable/unknown state.

Implementation may optimize per-field provenance by storing a source record reference for groups that all come from the same EPA row. Optional paid override fields always carry their own source references. Display most relevant last-verified date on detail pages and public data-source methodology.

### Important EPA mapping cautions

- `city08`, `highway08`, `comb08` may be MPG or **MPGe** depending on alternative fuel; use `fuelType` and interpretation rules, never label them universally MPG.
- BEV consumption uses `cityE`, `highwayE`, `combE` (kWh/100 miles), and BEV range uses `range` (all seven sampled BEVs have blank `rangeA`). PHEV `rangeA` is charge-depleting distance; do not promise pure-electric range.
- PHEV fuel/electric pathways differ; do not combine conventional/alternate fuel fields into one misleading average.
- `fuelCost08` and `fuelCostA08` are estimates based on assumptions and provider fuel prices, not vehicle purchase cost.
- `-1` can indicate unknown/not available in some EPA scores; blank or 0 can have field-dependent meaning. Maintain a field-specific sentinel table before ingestion.
- EPA class `VClass` is not identical to popular marketing labels; map categories explicitly, preserving raw class.
- `modifiedOn` from EPA allows record-level freshness assessment; log corpus sync time separately.

## 6. Proposed ingestion and sync approach

**Initial:** download/import permitted EPA all-years CSV, filter to launch years, validate schema and field interpretation, build identity rows, populate normalized variant specs and availability flags. Use API menu endpoints to verify year/make/model/options for sampled vehicles. Query NHTSA in bounded batches to attach manufacturer metadata and review naming differences.

**Regular updates:** after initial ingestion, pull upstream CSV on a scheduled cadence suitable for actual source freshness (provisional weekly); detect file signature/ETag/size changes where exposed; stage records, run schema and row-count checks, upsert changed IDs, mark vanished records for review rather than immediately deleting user-visible vehicles. Track last successful sync and failures. Recent updates can be more frequent around new model-year publication, if justified and within limits.

**When provider unavailable:** serve last verified catalog with a non-alarming timestamp; avoid partial destructive refresh. Backoff and retries respect 429, `Retry-After`, provider rules and service availability.

**Never:** scrape websites that disallow it; accept unverifiable machine-generated spec values; bulk-cache vendor data without permitted rights; directly call paid APIs with browser-exposed credentials.

## 7. Backend endpoints (conceptual only; names may change)

| Endpoint | Contract |
|---|---|
| `GET /api/health` | API health, no secrets |
| `GET /api/catalog/years` | Supported model years |
| `GET /api/catalog/makes?year=...` | Distinct normalized makes with actual records |
| `GET /api/catalog/models?make=...&year=...` | Existing models filtered by make/year |
| `GET /api/catalog/facets?...` | Counts/options from same query semantics as Explorer |
| `GET /api/vehicles?q=&year=&make=&model=&fuel=&drive=&sort=&page=&pageSize=` | Paginated, safe, authorized public discovery records; default/maximum page size |
| `GET /api/vehicles/:id` | Stable variant identity, spec groups, image credit, source metadata |
| `POST /api/compare/resolve` | Validate 2–4 IDs, return uniformly shaped comparable metrics; may use GET if sharable URLs are sufficient |
| `GET /api/data/status` | Public scope and last known successful data sync |

**Response principles:** versioned API contract; Zod schema validation; null or explicit unavailable reason rather than fabricated values; field-provenance reference; pagination metadata; consistent errors, bounded payload sizes and cache headers. Source version and normalized field mappings are recorded. Details and compare use internal IDs; no client-bound commercial secrets.

## 8. Reference stack and project boundaries

**Frontend:** React 19, TypeScript, Vite, Tailwind CSS 4, React Router, TanStack Query, Zod, Lucide, optional accessible component primitives, restrained Motion. Feature-based modules: discovery, catalog detail, comparison, favorites, design system, common utilities.

**Backend:** TypeScript provider/domain/read services with a thin Cloudflare Worker runtime entry proposed; Zod contracts shared with frontend. Use Supabase HTTPS queries and benchmark edge CPU compatibility. Bounded imports run through GitHub Actions outside page requests. Netlify is the Node-compatible fallback; Vercel Pro is paid-reference only. [Hosting assessment](HOSTING_ASSESSMENT.md).

**Database:** Supabase PostgreSQL with indexes for `(market, year, make, model)`, text search if needed, indexed numeric metric filters, unique provider IDs; authenticated row security for v2 profile features. Public catalog reads through a constrained API or safely configured read-only access. Never use a service-role key in the browser.

**Operational safeguards:** upstream request budgets, API usage alerts, timeouts, circuit breaker or stale-while-revalidate where applicable, error monitoring, field coverage telemetry, structured sync logs, test fixtures independent from live API volatility.

## 9. Comparison unit and semantics dictionary

| Attribute | Source unit | Display choice | Comparison conditions |
|---|---|---|---|
| Engine displacement | L | L | Same fuel/powertrain context; can compare as numeric |
| Cylinders | count | count | Unknown kept null; not an absolute quality ranking |
| City/highway/combined efficiency | MPG or MPGe | MPG/MPGe or derived L/100km | Never compare MPG and MPGe as the same measure |
| Electric energy | kWh/100 miles | kWh/100 mi or kWh/100 km | Similar charge/testing assumptions |
| EPA range | miles | mi/km | Distinguish BEV all-electric and PHEV charge-depleting range |
| CO2 tailpipe | g/mile | g/mi or g/km | Label test year/standard; BEV zero tailpipe ≠ zero lifecycle |
| Cost estimate | USD/year | USD/year (source assumptions) | Show assumptions/date; not market sticker price |
| Drive / transmission | raw labels | normalized with source context | Categorical distinctions, no arbitrary 'winner' |
| Horsepower/torque (future) | hp / lb-ft or N·m | unit toggle | Source and rating standard required |

## 10. Failure, privacy and performance strategy

- Ingest should generate explicit report: rows received/imported/skipped/conflicted; duplicate keys; null field frequencies; date range; response freshness; mapping-version change.
- Performance targets: indexed catalog paginated queries, cached popular browse queries, dynamic loading, image optimization, transparent stale catalog states.
- No personal information needed in v1; favorites are local and can be cleared from browser. Do not advertise cloud synchronization.
- Production read roles have no ability to mutate catalog. Secret keys, ingestion privileges, vendor credentials and image audit tools must remain server-side.
- Search and compare limit maximum input lengths, count, page size, and filter cardinality; use parameterized queries.

## 11. Architecture decisions to validate before implementation

1. Validate selected EPA CSV schema, sentinel semantics and total eligible rows for 2015–2026.
2. Confirm relevant public-data attribution/reuse details from source publishing terms.
3. Verify provider API connectivity and frequency policy in intended deployment region.
4. Decide import runner/cron quotas and local-development fixture plan.
5. Confirm Commons photo hosting/thumbnail handling and every published image license.
6. Freeze internal IDs and public route conventions once proof-of-data evaluation passes.


## 12. Additional public-provider models (reconciled Phase 0C)

The schema must accommodate **multiple independent free providers**, not merely EPA and vPIC. New optional entities:

| Entity | Minimum contract | Critical rule |
|---|---|---|
| `vehicle_safety_tests` | `id`, `provider_id`, `nhtsa_vehicle_id`, `year`, `make`, `model`, `tested_variant_label`, `overall_rating_nullable`, `rating_details_json`, `test_date_or_year_nullable`, `fetched_at` | Preserve original NHTSA tested-vehicle ID and rating source; a missing test does not imply poor safety |
| `variant_safety_links` | `variant_id`, `safety_test_id`, `match_scope`, `confidence`, `review_status`, `evidence`, `verified_at` | Only publish exact variant ratings for verified match; otherwise display separately at broad model scope |
| `recall_campaigns` | `id`, `provider_id`, `campaign_number`, `component`, `summary`, `consequence`, `remedy`, `source_url`, `last_seen_at` | Campaign number stable key; deduplicate identical campaigns across refreshes |
| `recall_model_scope` | `campaign_id`, `make`, `model`, `year`, `market_code`, `source_match_notes` | Links to **model/year**, not an individual VIN; do not assert a particular car is affected or repaired |
| `variant_recall_displays` (derived view, optional) | `variant_id`, `campaign_id`, `association_scope`, `disclaimer` | Derived association must retain *model-scope* warnings; prefer not to persist unless necessary |
| `enrichment_match_audits` | `id`, `source_record_id`, `target_entity_type`, `target_entity_id`, `matched_on`, `result`, `reviewer`, `observed_at` | No silent fuzzy cross-provider merge; log uncertain/conflicting matches |
| `media_assets` (extend existing image model) | `commons_file_title`, `author`, `license_name`, `license_url`, `attribution`, `vehicle_match_level`, `reviewed_at` | Verify reusable rights for each candidate, not just source host |
| `source_quotas` (operational) | `provider_id`, `quota_window`, `budget`, `estimated_used`, `reset_at`, `disabled_reason` | Fail conservatively and keep prior valid records on rate-limit errors |

**Matching hierarchy:** first preserve provider record identity; then deterministic year/make/model aliases; then verify vehicle/variant descriptors against documented source fields. Never infer equivalence from image similarity, approximate trim strings, or a single overlapping model name. Store unresolved matches as pending or unmatched, not published as precise facts.

**Freshness policy (proposed, not guaranteed):** EPA bulk refresh periodically after announced releases; manufacturer/model metadata less often; safety/recalls more frequently as practical within provider limits; asset licenses reviewed on admission and on reported removals; AFDC only when future EV features are activated. Record source fetch dates separately from the release dates of facts. Render cached official figures with clear source date. Each individual provider's failure must leave the main catalog usable.

## 13. Frozen per-powertrain mapping and missing-value contract

[Source dictionary](https://www.fueleconomy.gov/feg/ws/); actual examples and measurements in [Phase 0B](PHASE_0B_VALIDATION_REPORT.md). API field casing must be validated at the boundary (dictionary labels and JSON keys can differ).

| Kind | Classification evidence | Efficiency | Range and engine rules |
|---|---|---|---|
| Gasoline | fuelType1 gasoline, no explicit EV/PHEV/Hybrid marker | city08/highway08/comb08 MPG | displ/cylinders apply; range zero in sample is not zero tank range |
| Diesel | fuelType1 Diesel / atvType Diesel | Same MPG fields | Engine applies; target #19 designation still provisional |
| HEV | atvType Hybrid plus descriptors | Primary gasoline MPG | No plug-in range inferred; Camry HEV motor descriptor can be blank |
| Mild HEV | Hybrid plus explicit Mild Hybrid descriptor, e.g. C300 47993 | Gasoline MPG; subtype retained | Do not infer electric-only driving or PHEV operation from 48V description |
| BEV | atvType EV / fuelType1 Electricity | city08/highway08/comb08 MPGe; cityE/highwayE/combE kWh/100mi | range is BEV miles; rangeA blank is inapplicable; displ/cylinders N/A |
| PHEV | Plug-in Hybrid, fuelType2 Electricity | Primary gasoline MPG; cityA08/highwayA08/combA08 charge-depleting MPGe; phevCity/phevHwy/phevComb composite MPGe | rangeA charge-depleting miles, range total miles; preserve phevBlended, separate electricity and gas operation |

Parse blank/null/absent before Number conversion. Preserve raw values with reason codes. Field-specific -1 → unavailable for relevant scores/CO₂; zero BEV tailpipe CO₂ valid, zero alternate metrics on single-fuel records inapplicable. Do not apply one global zero rule. Parse string/genuine booleans explicitly; startStop Y/N differs from true/false. Unknown future field values generate review issues, not silent guessing. Record source creation/modification/retrieval separately.

evMotor is a raw motor/battery descriptor, sometimes voltage/chemistry. A separate numeric motor-power field stays nullable unless source and parsing are verified; never sum it into system hp. Charge240 is hours under source conditions, not DC-fast-charge performance. Preserve available EPA volumes only with body context; zero volume may be absent/inapplicable. MSRP, fuel cost and market prices remain separate.

variant_spec_values must hold state/reason, metric key, value, unit, operating mode, measurement basis, provider_record_id, raw field name, mapping version and verification time. Fixed indexed query columns may cache these projections; the evidence reference remains authoritative. Scope enum: exact_configuration, model_year, model_family, ambiguous, unmatched. Confidence (verified/candidate/rejected) and review state are separate; only eligible reviewed links publish.

provider_entity_links may be implemented as constrained concrete join tables to enforce real foreign keys. No arbitrary polymorphic identifier without integrity enforcement. vehicle_safety_tests and recall_campaigns remain independent of EPA variants; preserve cab/body/drive/release and campaign applicability/exclusions.

## 14. In-place boundaries and release controls

Adopt [IN_PLACE_MODERNIZATION_PLAN.md](IN_PLACE_MODERNIZATION_PLAN.md) for internal folders, route mapping, upgrade sequence, baseline and rollback. A single src frontend shares server/shared domain contracts; no new SPA/repository. Preserve current production and existing business functionality until validated replacement is explicitly released.

Proposed read path: browser → cacheable constrained read API → indexed Supabase views. Proposed write path: rights-approved provider jobs → Zod/raw validation → staging → semantic/match checks → idempotent atomic promotion. Browser navigation makes no direct provider fan-out.

Request/response Zod schemas, pagination limits, consistent error envelopes, unknown-ID 404, ordered 2–4-ID compare and stale-source metadata must be specified before implementation. Build one maintained contract artifact/fixtures when authorized, not duplicate hand-maintained specs.

Weekly EPA / monthly identity / bounded daily or weekly safety-recall cadence is a proposal; record last success, checkpoints, content hash, request budget, errors and mapping version. Provider outage never deletes the valid catalog. No unapproved rights retention. First full-corpus count, indexed DB sizing and actual region/runtime benchmarks remain unmeasured.
