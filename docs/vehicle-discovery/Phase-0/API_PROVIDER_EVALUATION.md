# API Provider Evaluation & Decision Matrix

**Research snapshot:** Phase 0B evidence 12–13 October 2026, reconciled 23 October 2026. [Accepted benchmark](PHASE_0B_VALIDATION_REPORT.md); [current rights register](PROVIDER_RIGHTS_REGISTER.md); [additional free-source review](OPEN_DATA_ENRICHMENT_REVIEW.md). Historical commercial-vendor prices below were not revalidated in Phase 0C and are not approved dependencies. No authenticated commercial account trials.

## A. Architecture decision

**Adopt a complementary multi-API, free-first baseline (not one API and not just two):**

1. **FuelEconomy.gov (U.S. DOE/EPA)** — primary catalog for U.S.-market *configurations* and official efficiency/emissions attributes. The free all-years CSV is preferred for scheduled ingestion; use its REST endpoints for validation/targeted lookups.
2. **NHTSA vPIC** — supplement manufacturer/model identification and vehicle type; keep the optional VIN decode integration behind a v2 feature gate. Do **not** treat its make/model list as proof that it has exact engine trims or comparable efficiency.
3. **NHTSA NCAP 5-Star Safety Ratings API** — U.S. crash-test ratings when a matching tested variant can be substantiated; untested is not zero stars.
4. **NHTSA Recalls API / downloads** — campaigns matched at the supported model/year/make scope, with precise language about whether a specific VIN is affected.
5. **Wikimedia Commons + MediaWiki image metadata API** — photo discovery only after verifying each asset's visual relevance, author and license.
6. **Wikidata** — optional linked manufacturer/model identifiers and contextual facts; not authoritative powertrain specifications.
7. **AFDC / National Laboratory of the Rockies developer APIs** — optional future U.S. EV charging stations, not a substitute for vehicle specs.
8. **No paid provider at launch.** Investigate other free APIs/feeds only if their legal permissions, reliability and field accuracy are verifiable; commercial sandbox calls are never assumed to grant a production free tier.

### Official baseline capabilities

**DOE/EPA:** `https://www.fueleconomy.gov/feg/ws/index.shtml` — `/ws/rest/vehicle/menu/year`, `/make?year=`, `/model?year=&make=`, `/options?year=&make=&model=` and `/ws/rest/vehicle/{id}`. Fields include `id`, `year`, `make`, `model`, `VClass`, `fuelType`, `displ`, `cylinders`, `trany`, `drive`, `city08`, `highway08`, `comb08`, electric kWh/100 mi, emissions, EV/PHEV range, EPA annual cost and source modification dates. Missing/not-applicable fields are often blank or sentinels; map carefully. The *all-years* download page currently labels its dataset 1984–2026 and 29 September 2026 update, while 2027 has a separate preliminary file.

**NHTSA:** `https://vpic.nhtsa.dot.gov/api/` — manufacturer, makes, models, vehicle types and VIN decoding. `GetModelsForMakeYear` documents `ModelYear` greater than 1995. No signup required; traffic is controlled automatically, and high-volume operations should be batched outside peak demand.

**Canonical variant ID:** stable internal ID corresponding to a specific U.S. EPA vehicle record ID. NHTSA cross-links are advisory rather than identity replacement.

## B. Provider capability and commercial matrix

| Provider | Access/pricing verified in docs | Y/M/M | Exact configurations & specs | Images | Marketplace prices | Decision / caveat |
| --- | --- | --- | --- | --- | --- | --- |
| **DOE/EPA FuelEconomy.gov** | Public/free REST + CSV | Yes | Yes: option/powertrain, EPA MPG/MPGe, fuel cost, emissions, EV range; **not** full marketing trims/horsepower | No complete gallery | No | **PRIMARY, commercial reuse unresolved** |
| **NHTSA vPIC** | Public/free, no registration | Yes | Broad variables and VIN decode; **not** full trim comparison table | No vehicle photo catalog | No | **IDENTITY ENRICHMENT** |
| **NHTSA Safety Ratings (NCAP)** | Public/free API and downloadable data | Yes, for tested vehicles | Ratings for identified crash-tested variants; incomplete test coverage | No | No | **CONDITIONAL SAFETY ENRICHMENT**; display scope and test year |
| **NHTSA Recalls** | Public/free API and downloadable data | Yes | Recall campaigns at year/make/model scope; not exact VIN applicability | No | No | **CONDITIONAL RECALL ENRICHMENT**; link official recall guidance |
| **Wikidata** | Public query/entity endpoints subject to traffic policies and content terms | Sometimes | Supporting entity identifiers/context, not complete vehicle trim specs | Only links to independently licensed files | No | **OPTIONAL METADATA**, no speculative joins |
| **AFDC / NLR developer API** | Developer key + published rate controls | No (station-centric) | Charging and alternate fueling location details | Station data, not car gallery | No | **FUTURE EV MAP**, no v1 catalog dependency |
| **CarAPI** | Free dataset 2015–2020; paid Base $199/year, Plus $249/year, Premium $299/year | Yes | Premium has trim/body/mileage/engine/color, up to 6,000 calls/day | Not confirmed as included gallery | Some paid products | **Best enrichment trial candidate**; plan summary contradicts detailed entitlements for Base/Plus—use feature comparison |
| **CarsXE** | Sandbox 100 lifetime shared calls; Starter $40.83/month **annual billing** | Yes | VIN-centric specs incl. engine, equipment; YMM lookup separately | `/images` by make/model/year/trim; usage-right filter not proof of license | Market-value endpoint | **Image/spec fallback trial**; specs `/specs` documented as VIN required; ascertain true non-VIN config coverage |
| **API Ninjas Cars v2** | Free 3,000/month **evaluation/noncommercial only**; Developer $59 monthly or $39/month billed annually | Yes, premium endpoints | `/v2/cars` extensive specs; all vehicle-v2 endpoints shown as premium | No built-in comprehensive gallery | No | **Conditional**: Developer does not permit caching/storage; Business tier is more appropriate if persistence required |
| **Vehicle Databases** | 15 free credits advertised; full price after signup/quote | Yes | YMMT and VIN specs; claimed extensive power/size/feature fields | Separate product | Some MSRP fields | **Trial**; check field coverage and redistribution rights |
| **Auto.dev** | Free 1,000 calls/month; Growth $299/month + usage | Yes through listings/VIN | Full specs on Growth | Free plan has VIN-associated photos | Real listings | **Future inventory feature**, not catalog anchor |
| **MarketCheck** | Free 500 calls/month with geographic limits; Basic $299/month + data fees | Via listings | VIN decode/enrichment paid per use | Photos on listings/cached API | Strong real inventory and prices | **Future marketplace**, not v1 |
| **IMAGIN.studio** | Enterprise/quote/API licensing; separate image product with variable prices | By model metadata | Not authoritative source of specs | Studio renders, angle/color/360 options | No | **Premium image upgrade only**, license permits controlled CDN delivery, not unrestricted downloads |
| **Wikimedia Commons** | Free to discover; usage depends on each image license | Via descriptions/categories | Not structured manufacturer specs | Licensed photo candidates | No | **Free image source** after human/automatic review and credits |

**Commercial compliance warning:** CarAPI, CarsXE, API Ninjas, Vehicle Databases and image vendors have distinct rights for transient use, caching, local storage, public redistribution and photos. We must record contract terms before any integration, even if an API key is provided.

## C. Provider links / reviewed sources

- EPA web services and field definitions: <https://www.fueleconomy.gov/feg/ws/index.shtml>
- EPA CSV and 2027 preliminary distinction: <https://www.fueleconomy.gov/feg/download.shtml>
- NHTSA vPIC API: <https://vpic.nhtsa.dot.gov/api/Home/Index>
- NHTSA vPIC FAQ: <https://vpic.nhtsa.dot.gov/api/Home/Index/FAQ>
- CarAPI feature/plan matrix: <https://carapi.app/pricing/>
- CarAPI free 2015–2020 dataset: <https://carapi.app/>
- CarsXE pricing/quota: <https://carsxe.com/pricing>
- CarsXE VIN-first spec endpoint: <https://docs.carsxe.com/docs/products/specifications>
- CarsXE images and legal caveat: <https://docs.carsxe.com/docs/products/vehicle-images>
- API Ninjas specifications: <https://api-ninjas.com/api/cars>
- API Ninjas pricing/storage permissions: <https://api-ninjas.com/pricing>
- Vehicle Databases specs and trial: <https://vehicledatabases.com/api/vehicle-specifications>
- Auto.dev plan matrix: <https://www.auto.dev/pricing>
- MarketCheck plans/endpoint cost: <https://www.marketcheck.com/apis/pricing/>
- IMAGIN.studio plans: <https://www.imaginstudio.com/us/plans>
- IMAGIN licensing/CDN: <https://docs.imagin.studio/api-integration/manuals/getting-started>
- Wikimedia reuse and attribution: <https://commons.wikimedia.org/wiki/Commons:Reusing_content_outside_Wikimedia>
- MediaWiki image metadata: <https://www.mediawiki.org/wiki/API:Imageinfo>
- Wikimedia bot/high-volume access: <https://developer.wikimedia.org/use-content/bot-traffic/>
- NHTSA safety ratings and recall API: <https://www.nhtsa.gov/nhtsa-datasets-and-apis>
- NHTSA safety rating by model year/make/model: <https://api.nhtsa.gov/SafetyRatings/modelyear/2013/make/Acura/model/rdx>
- NHTSA recalls by vehicle: <https://api.nhtsa.gov/recalls/recallsByVehicle?make=acura&model=rdx&modelYear=2012>
- Wikidata query data access: <https://www.wikidata.org/wiki/Help:Data_access>
- AFDC all stations API: <https://developer.nlr.gov/docs/transportation/alt-fuel-stations-v1/all/>
- NLR rate limits: <https://developer.nlr.gov/docs/rate-limits/>

## D. Field coverage matrix

Legend: **Yes** = documented core field; **Possible** = varying record/plan; **No** = not a documented reliable field.

| Field | EPA | NHTSA | CarAPI Premium | CarsXE (VIN-spec) | Commons |
| --- | --- | --- | --- | --- | --- |
| Make / model / year | Yes | Yes | Yes | Yes | Human matching only |
| Exact compare configuration | EPA option ID | No reliable trim identity | Yes (trims) | VIN-derived possible | No |
| Engine displacement / cylinders | Yes when available | Possible from VIN | Yes | Yes when available | No |
| Drive / transmission | Yes when available | Possible from VIN | Yes | Yes when available | No |
| EPA MPG / MPGe / kWh | Yes | No official EPA rating | Mileage data available | Possible | No |
| EPA range / emissions | Yes, conditional | No | Possible | Possible | No |
| Horsepower / torque | Not reliable/complete | Possible by decoded VIN | Possible (validate) | Possible | No |
| Dimensions & cargo | Partial EPA volumes/class | No reliable comprehensive set | Body fields possible | Possible | No |
| Feature equipment and safety | No | Decoded descriptors, not complete | Some trims/colors | VIN equipment | No |
| Model photo and license | No | No | Not assumed | Separate paid image product | Yes, individual file by file |
| Actual listing price | No | No | Not assumed | Separate market value | No |

## E. Frozen thirty-case benchmark (completed research)

Test **five mainstream brands** (Toyota, Honda, Ford, Hyundai, Chevrolet), **three premium/EV brands** (BMW, Mercedes-Benz, Tesla), and at least **three additional brands** (Subaru, Nissan, Kia). Test model years 2015, 2018, 2021, 2024, 2025 and 2026 as records actually exist. Include compact sedan, full-size sedan, SUV, pickup, minivan, sports car, hybrid, battery EV and PHEV. The original 30 targets were frozen before requests and retained without substitutions. The complete results are in [PHASE_0B_VALIDATION_REPORT.md](PHASE_0B_VALIDATION_REPORT.md). Families covered include: Toyota Camry; Honda Civic; Ford F-150; Hyundai Tucson; Chevrolet Silverado; BMW 3 Series; Mercedes-Benz C-Class; Tesla Model 3; Subaru Outback; Nissan Leaf; Kia Sportage; Chrysler Pacifica. Never substitute unavailable targets to improve the fixed denominator. Keep each failed/unresolved identity, query and reason.

For every case capture: (1) upstream record ID, model year, make, model, option descriptor; (2) API availability; (3) field-null status by target metric; (4) conflicting or missing official values; (5) whether a photo with correct generation/year and license exists; (6) latency/quota observations; (7) record-revision timestamps.

### Pilot scoring

After testing, score sources on **coverage 30%, data accuracy 25%, legal/storage rights 20%, sustainability/cost 15%, developer experience 10%**. Each dimension uses a documented 0–5 rubric; disqualify suppliers lacking the necessary publication or retention rights regardless of total score. Do **not** assign scores in advance, and never infer results from marketing copy.

### Go/no-go criteria for baseline

- At least **24/30 fixed targets** must resolve; measured **29/30**. Target 19's 1500 designation remains unresolved despite a valid diesel Silverado 2WD source record.
- Every publication candidate must pass identity, provenance, semantics and rights independently. Measured **450/450 applicable core values** across 30 retrieved rows includes the provisional diesel candidate; it is not a second coverage denominator or full-spec completeness claim.
- **Zero** duplicate canonical identities or undetected merges across engine/fuel/drive variants among the 30.
- EPA + NHTSA usage/access and reproduction requirements recorded; no external vendor subscription required.
- Imagery tested independently; if photo coverage is low, placeholders are acceptable and should not block source-backed catalog launch.

## F. Post-v1 paid alternatives — NOT APPROVED

**No paid APIs are approved for the current project scope.** These vendors are recorded as future research options only. If the owner ever chooses a different budget later, re-evaluate the product trade-offs, official contract, caching rights, data accuracy and cost before a new approval. A paid sandbox or image-search license filter alone is not production display permission.

## G. Phase 0C decisions and optional gaps

In-place DanAuto modernization is final; provider modules live inside this repository. Commercial API rows above remain a historical research appendix, not approved trial purchases or current entitlements.

Measured: 30 EPA responses, 29/30 exact frozen targets, 450/450 core cells, 12 safety/recall cases, five representative image file audits. Presence/identity/rights/image/safety metrics are independent; no weighted score can override missing publication rights. [Full evidence](PHASE_0B_VALIDATION_REPORT.md).

The [rights register](PROVIDER_RIGHTS_REGISTER.md) supersedes any implication that public access alone approves EPA commercial feed reuse or vPIC redistribution. [Optional source review](OPEN_DATA_ENRICHMENT_REVIEW.md) adds EPA test-car/Trends files, manufacturer sheets/manuals and constrained free CarAPI research, with explicit rights and join limitations. No new cohort horsepower/torque/MSRP/dimension coverage is claimed.

No known source yet supplies a legally cleared, fully matched free 2015–2026 trim/equipment/price/photo corpus. Keep gaps nullable. [Hosting](HOSTING_ASSESSMENT.md) is a separate commercial eligibility/cost decision.
