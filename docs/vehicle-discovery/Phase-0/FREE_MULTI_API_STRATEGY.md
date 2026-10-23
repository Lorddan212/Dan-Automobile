# Free Multi-API Integration Strategy

**Version:** 1.2, 23 October 2026  
**Decision:** Use multiple complementary **free and legally reusable** automotive data sources. No paid/API subscription purchases for the initial release.  
**Status:** Phase 0B pilot accepted: 29/30 confirmed targets, 30 EPA responses, 450/450 applicable core values, 12/12 safety/recall investigations, five representative image audits. No integration code implemented. [Evidence](PHASE_0B_VALIDATION_REPORT.md); [rights gates](PROVIDER_RIGHTS_REGISTER.md).

## 1. Provider responsibility matrix

| Source/endpoint family | First-release role | Source identity | What it contributes | Gating limitations |
|---|---|---|---|---|
| FuelEconomy.gov REST and bulk CSV | **Required / anchor** | EPA vehicle ID | Make/model/year, actual powertrain options, engine/cylinders, drive/transmission, EPA MPG/MPGe, EV range, emissions, fuel-cost assumptions | U.S. tested configurations; not complete marketed trims, horsepower, MSRP or precise photos |
| NHTSA vPIC | **Required for identity validation as available** | NHTSA make/model IDs, VIN identifiers where applicable | Manufacturer/model/vehicle-type metadata, aliases | Different grain and labels from EPA; VIN decode reserved for future feature |
| NHTSA 5-Star Safety Ratings / NCAP | **Conditional v1 enrichment** | NHTSA tested vehicle ID | Verified crash ratings, tested variant metadata | Some vehicle variants not tested; a model/year match alone is not proof that an engine/trim carries that rating |
| NHTSA Recalls | **Conditional v1 enrichment** | Campaign number and reported make/model/year | Official recall issues, summary and remedy | Model-level campaigns do not prove a specific VIN is affected/unrepaired; source is not a repair-status ledger |
| Wikimedia Commons + MediaWiki imageinfo | **Conditional v1 imagery** | Commons file title and version/metadata | Photo URL, author, attribution, license | Visual matching and license review required; insufficient exact-variant coverage possible |
| Wikidata APIs / query service | **Optional metadata** | Wikidata item ID | Linked maker/model identifiers, some contextual references | Not reliable as a primary trim-spec database; respect SPARQL fair use and unsuitable for bulk text search |
| AFDC / NLR fuel station APIs | **Future EV feature only** | Station ID | U.S. EV/alternative fuel station location/network details | Different domain, needs free developer key and usage quotas; not a vehicle specification provider |

NHTSA Safety Ratings and Recalls are different API families from vPIC. Combining endpoints increases coverage, not certainty of identifying an exact vehicle.

## 2. Resolution policy: which data source wins?

1. **Identity:** Canonical U.S. configuration = EPA ID; stable internal UUID; source IDs and labels are immutable external cross-references.
2. **Fuel economy/EV EPA estimates/emissions:** Use EPA fields with test basis. Do not override from generic or crowdsourced records.
3. **Make/model aliases:** Use vPIC and documented alias crosswalk; uncertain cross-provider matches stay pending.
4. **Safety:** Only an appropriate NCAP tested-vehicle identifier or a thoroughly audited variant match may back a precise variant rating; otherwise show safe broader context or no rating.
5. **Recalls:** Show campaigns at their published make/model/year scope, not a claim about the user's specific car. Provide official NHTSA lookup.
6. **Images:** Independently approve each file's vehicle match and licensing; may label as representative.
7. **Wikidata:** Add limited contextual metadata only where credible; never supersede an official EPA/NHTSA field.

Every field or linked record should carry `provider_id`, source identifier, retrieval date, source publication date if available, market, match scope and matching-evidence status.

## 3. Documented endpoint families and preserved validation

- EPA documentation and CSV: https://www.fueleconomy.gov/feg/ws/index.shtml
- EPA one vehicle by ID: https://www.fueleconomy.gov/ws/rest/vehicle/31873
- EPA discovery path: `/ws/rest/vehicle/menu/year` → `make?year=` → `model?year=&make=` → `options?year=&make=&model=`
- vPIC documentation: https://vpic.nhtsa.dot.gov/api/
- NHTSA tested vehicles: `https://api.nhtsa.gov/SafetyRatings/modelyear/2013/make/Acura/model/rdx`
- NHTSA tested ID details: `https://api.nhtsa.gov/SafetyRatings/VehicleId/7520`
- NHTSA recall campaigns: `https://api.nhtsa.gov/recalls/recallsByVehicle?make=acura&model=rdx&modelYear=2012`
- NHTSA official API documentation: https://www.nhtsa.gov/nhtsa-datasets-and-apis
- Commons license reuse: https://commons.wikimedia.org/wiki/Commons:Reusing_content_outside_Wikimedia
- MediaWiki file metadata: https://www.mediawiki.org/wiki/API:Imageinfo
- Wikidata API/SPARQL access: https://www.wikidata.org/wiki/Help:Data_access
- AFDC stations API: https://developer.nlr.gov/docs/transportation/alt-fuel-stations-v1/all/
- NLR rate and API-key docs: https://developer.nlr.gov/docs/rate-limits/ and https://developer.nlr.gov/docs/api-key/

The examples above remain endpoint documentation, not a claim they were all called. The accepted report identifies the actual sampled IDs/URLs and dates. Additional optional Wikidata/AFDC live-key tests remain unperformed.

## 4. Operational controls for sustainable free usage

- Use scheduled, bounded EPA bulk imports rather than requesting all vehicles from the UI.
- Treat separately sourced safety/recall records as conditional enrichments with independent refresh jobs, throttling, backoff on 429, and good source attribution.
- Follow source-specific licensing/caching rules, including independent image licenses. Never infer permission from an open endpoint or from a commercial sandbox.
- For developer.nlr.gov, developer keys are required for production station API use and published default limits are up to 1,000 requests/hour; DEMO_KEY is more restricted. This is a **future** feature, not a Phase 1 prerequisite.
- Offer stale-while-available catalog data where terms permit. Provider outages must not blank out the verified EPA catalog.
- Track free-tier database storage/bandwidth and server execution independently from automotive API subscription charges: $0 API subscription does not guarantee $0 total operating cost at arbitrary traffic.

## 5. What free sources may still not provide

Complete horsepower/torque/0–60 mph for all trims; commercial trim equipment; manufacturer studio galleries for every year; live U.S. dealer listings, pricing or current market values; precise VIN recall completion status without a VIN check; universally comparable safety scores for untested vehicles. **Do not fill these holes with formulas, AI guesses, generic Unsplash photos or misleading placeholders.** Treat these as intentional `Not available from verified sources` fields.

## 6. Retained validation rubric and measured outcome

- Spread across model years 2015–2026, at least 8 makes, sedans/SUVs/pickups, hybrids/BEVs/PHEVs/ICE, variant collisions and name aliases.
- Preserve the completed 30-record benchmark and original IDs/dates: ≥24/30 fixed targets, actual 29/30; no substitutions. Revalidation must use a new dated report, not overwrite historical findings.
- Test at least 12 corresponding make/model/year lookups through NHTSA Safety Ratings and Recalls. Record `rated`, `untested`, `ambiguous`, `campaign found`, `no campaign`, and `source error` separately.
- Review at least 5 visually relevant Commons photos and their author/license/source-page metadata.
- Probe optional Wikidata metadata on a small sample. AFDC only if EV charging maps become a committed feature.
- Measure coverage (do not fabricate it), false-match rate (target 0 in the reviewed cohort), source response failures, and rights uncertainty. If safety/recall mappings are ambiguous, do **not** block basic catalog launch: defer those particular fields/modules.

## 7. Decision and approval

Keep free providers **modular and interchangeable**, not one huge frontend function and not direct browser calls to secret-key endpoints. Paid APIs stay in a research appendix only. Codex may inspect source files and report feasibility, but **must not start coding, install packages, migrate, deploy, commit or push** until the owner explicitly approves the phase.

## 8. Phase 0C architecture freeze

One DanAuto frontend/repository, with complementary provider adapters and scoped evidence links. EPA anchors configuration; vPIC validates broad identity; NCAP/recalls provide separately scoped official facts; Commons provides individually reviewed media. Optional open datasets are described in [OPEN_DATA_ENRICHMENT_REVIEW.md](OPEN_DATA_ENRICHMENT_REVIEW.md); no optional source or failed enrichment blocks the core.

The frozen benchmark's ≥24/30 threshold is met at 29/30, but rights are not inferred from it. [PROVIDER_RIGHTS_REGISTER.md](PROVIDER_RIGHTS_REGISTER.md) controls enablement; [PROVIDER_INQUIRY_DRAFTS.md](PROVIDER_INQUIRY_DRAFTS.md) contains unsent EPA/vPIC requests.

Mandatory regression examples for future fixtures: Civic manual must not inherit automatic-transmission campaign applicability; Pacifica Hybrid NCAP 15457 differs from ordinary Pacifica; F-150 cab variants and Ioniq 5 early/later releases remain distinct; 2026 CAMRY HYBRID HEV safety name differs from Camry Hybrid recall name; safety RecallsCount:0 must not suppress dedicated recall campaigns.

Scoped N–N links carry source record, target entity, match scope, confidence/review/evidence and dates. Field-level units/modes/null reasons are mandatory. No loose matching or guessed combined hybrid horsepower. [Mappings](DATA_AND_APPLICATION_ARCHITECTURE.md) and [migration sequence](IN_PLACE_MODERNIZATION_PLAN.md).

Normal browsing reads cached normalized data, never fans out to providers. Rights-approved background jobs have budgets/checkpoints/backoff and preserve last-valid data. Cloudflare/Supabase plus external bounded jobs is recommended subject to [runtime/hosting validation](HOSTING_ASSESSMENT.md), not provisioned.
