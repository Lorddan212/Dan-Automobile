# Phase 0B validation report — preserved evidence

**Original research: 12–13 October 2026. Accepted by owner for Phase 0C. Transcribed into the documentation on 23 October 2026.** This preserves the prior report; the 30-vehicle, safety and image benchmark was not rerun on 23 October. URLs may now return revised data. No persistent raw dataset or production test suite was created during Phase 0B.

## A. Executive result and method

30/30 EPA details returned HTTP 200; conservatively confirmed targets **29/30 (96.7%)**, exceeding the fixed ≥24/30 requirement. Target 19's explicit Silverado **1500** designation was not established. Keep it in the denominator and withhold that exact marketing association.

Targets were frozen before lookups; none substituted. For broad targets, the lowest numeric ID among investigated qualifying candidates was retained as a reproducible example, not a unique retail-trim assertion or exhaustive enumeration. 11 targets had multiple candidates. No exact cross-provider merge was adopted without evidence. EPA detail retrieval window: **2026-10-12T13:39:59.604Z–13:40:16.692Z**. Initial safety/recall responses: **2026-10-12T21:23:52.548Z–21:24:14.511Z**, followed by alias/detail checks during the 12–13 October reporting session. Commons searches: **2026-10-12T21:24:12.183Z–21:25:49.542Z**. Exact timestamps for subsequent checks were not retained in the final report; no invented precision is added.

## B. Frozen cohort and selected EPA records

G gasoline, D diesel, H HEV (including mild), E BEV, P PHEV. Engine L/cylinders; S/AV-S/AM-S preserve EPA transmission labels, CVT abbreviates variable ratios. BEV engine fields are inapplicable. Efficiency city/highway/combined is MPG for combustion/HEV and gasoline PHEV operation, MPGe for BEV. Environment = tailpipe CO₂ g/mi / GHG score / fuel-economy score. Dates are source creation/modification, not retrieval.

| # | Frozen target → selected configuration | EPA source | Mechanical | Efficiency | Environment | Created / modified |
|---|---|---|---|---|---|---|
| 1 | 2015 Toyota Camry 2.5 gasoline automatic | [35734](https://www.fueleconomy.gov/ws/rest/vehicle/35734) | G 2.5/4 S6 FWD | 25/34/28 | 313/7/7 | 2014-09-25 / 2016-09-26 |
| 2 | 2015 Toyota Camry Hybrid → LE | [35736](https://www.fueleconomy.gov/ws/rest/vehicle/35736) | H 2.5/4 CVT FWD | 42/38/40 | 220/9/9 | 2014-09-25 / 2016-09-26 |
| 3 | 2015 Honda Civic gasoline manual → 1.8 M5 | [35670](https://www.fueleconomy.gov/ws/rest/vehicle/35670) | G 1.8/4 M5 FWD | 28/35/31 | 289/8/8 | 2014-09-11 / 2016-09-26 |
| 4 | 2015 BMW 328i RWD automatic | [35330](https://www.fueleconomy.gov/ws/rest/vehicle/35330) | G 2.0/4 S8 RWD | 23/34/27 | 327/7/7 | 2014-07-31 / 2016-09-26 |
| 5 | 2015 Nissan LEAF BEV | [34918](https://www.fueleconomy.gov/ws/rest/vehicle/34918) | E A1 FWD | 126/101/114 | 0/10/10 | 2014-05-14 / 2022-02-02 |
| 6 | 2018 Ford F150 2.7 2WD | [39241](https://www.fueleconomy.gov/ws/rest/vehicle/39241) | G 2.7/6 S10 RWD | 20/26/22 | 401/4/4 | 2017-08-10 / 2017-09-21 |
| 7 | 2018 Ford F150 2.7 4WD | [39255](https://www.fueleconomy.gov/ws/rest/vehicle/39255) | G 2.7/6 S10 part-time 4WD | 19/24/21 | 423/4/4 | 2017-08-10 / 2017-09-21 |
| 8 | 2018 Subaru Outback 2.5 AWD | [38856](https://www.fueleconomy.gov/ws/rest/vehicle/38856) | G 2.5/4 AV-S7 AWD | 25/32/28 | 320/6/6 | 2017-06-26 / 2017-12-20 |
| 9 | 2018 Nissan LEAF BEV | [39860](https://www.fueleconomy.gov/ws/rest/vehicle/39860) | E A1 FWD | 125/100/112 | 0/10/10 | 2018-01-24 / 2020-04-02 |
| 10 | 2018 Toyota Prius Prime PHEV | [39882](https://www.fueleconomy.gov/ws/rest/vehicle/39882) | P 1.8/4 CVT FWD | 55/53/54 | 78/10/10 | 2018-02-12 / 2022-03-25 |
| 11 | 2021 Toyota RAV4 gasoline AWD → stop-start | [42968](https://www.fueleconomy.gov/ws/rest/vehicle/42968) | G 2.5/4 S8 AWD | 27/33/29 | 301/6/6 | 2020-08-24 / 2020-10-26 |
| 12 | 2021 Toyota RAV4 Hybrid AWD | [42972](https://www.fueleconomy.gov/ws/rest/vehicle/42972) | H 2.5/4 AV-S6 AWD | 41/38/40 | 223/8/8 | 2020-08-24 / 2020-10-26 |
| 13 | 2021 Toyota RAV4 Prime PHEV → Prime 4WD | [42793](https://www.fueleconomy.gov/ws/rest/vehicle/42793) | P 2.5/4 AV-S6 AWD | 40/36/38 | 72/10/10 | 2020-07-02 / 2022-03-25 |
| 14 | 2021 Chrysler Pacifica PHEV → Pacifica Hybrid | [43497](https://www.fueleconomy.gov/ws/rest/vehicle/43497) | P 3.6/6 CVT FWD | 29/30/30 | 119/10/9 | 2020-11-11 / 2022-03-25 |
| 15 | 2021 Tesla Model 3 Long Range AWD | [43401](https://www.fueleconomy.gov/ws/rest/vehicle/43401) | E A1 AWD | 141/127/134 | 0/10/10 | 2020-10-26 / 2023-10-19 |
| 16 | 2024 Toyota Camry 3.5 FWD | [47085](https://www.fueleconomy.gov/ws/rest/vehicle/47085) | G 3.5/6 S8 FWD | 22/33/26 | 338/5/5 | 2023-09-19 / 2024-01-18 |
| 17 | 2024 Nissan LEAF BEV | [46973](https://www.fueleconomy.gov/ws/rest/vehicle/46973) | E A1 FWD | 123/99/111 | 0/10/10 | 2023-07-31 / 2024-08-25 |
| 18 | 2024 Toyota Prius Prime PHEV → non-SE record | [47500](https://www.fueleconomy.gov/ws/rest/vehicle/47500) | P 2.0/4 CVT FWD | 50/47/48 | 60/10/9 | 2023-11-06 / 2024-01-18 |
| 19 | 2024 Chevrolet Silverado 1500 diesel 2WD → Silverado 2WD; 1500 UNRESOLVED | [46815](https://www.fueleconomy.gov/ws/rest/vehicle/46815) | D 3.0/6 A10 RWD | 23/29/26 | 397/5/5 | 2023-07-31 / 2024-01-18 |
| 20 | 2024 Hyundai Ioniq 5 AWD → Long range AWD | [46962](https://www.fueleconomy.gov/ws/rest/vehicle/46962) | E A1 AWD | 110/88/99 | 0/10/10 | 2023-07-31 / 2024-08-25 |
| 21 | 2025 Honda Civic Hybrid → Civic 4Dr hybrid option | [48018](https://www.fueleconomy.gov/ws/rest/vehicle/48018) | H 2.0/4 CVT FWD | 50/47/49 | 181/8/8 | 2024-08-07 / 2024-08-25 |
| 22 | 2025 Chevrolet Corvette automatic → 6.2 | [48477](https://www.fueleconomy.gov/ws/rest/vehicle/48477) | G 6.2/8 S8 RWD | 16/25/19 | 471/4/4 | 2024-09-18 / 2025-02-19 |
| 23 | 2025 Kia EV9 AWD → Long Range AWD | [48368](https://www.fueleconomy.gov/ws/rest/vehicle/48368) | E A1 AWD | 91/75/83 | 0/10/9 | 2024-08-25 / 2024-09-10 |
| 24 | 2025 BMW i4 eDrive40 → Gran Coupe 18-inch wheels | [48310](https://www.fueleconomy.gov/ws/rest/vehicle/48310) | E A1 RWD | 113/111/112 | 0/10/9 | 2024-08-25 / 2024-09-10 |
| 25 | 2025 Mercedes-Benz C300 4MATIC | [47993](https://www.fueleconomy.gov/ws/rest/vehicle/47993) | H mild 2.0/4 A9 AWD | 24/33/27 | 329/5/5 | 2024-08-07 / 2025-01-27 |
| 26 | 2026 Toyota Camry hybrid FWD → HEV FF LE | [49823](https://www.fueleconomy.gov/ws/rest/vehicle/49823) | H 2.5/4 AV-S6 FWD | 52/49/51 | 173/8/8 | 2025-10-03 / 2025-10-28 |
| 27 | 2026 Toyota Camry hybrid AWD → HEV AWD SE/XLE | [49821](https://www.fueleconomy.gov/ws/rest/vehicle/49821) | H 2.5/4 AV-S6 AWD | 46/46/46 | 192/7/7 | 2025-10-03 / 2025-10-28 |
| 28 | 2026 Hyundai Tucson gasoline AWD | [49500](https://www.fueleconomy.gov/ws/rest/vehicle/49500) | G 2.5/4 S8 AWD | 24/30/26 | 337/5/5 | 2025-09-25 / 2025-10-28 |
| 29 | 2026 Hyundai Tucson Hybrid AWD | [49498](https://www.fueleconomy.gov/ws/rest/vehicle/49498) | H 1.6/4 AM-S6 AWD | 36/37/36 | 243/7/7 | 2025-09-25 / 2025-12-11 |
| 30 | 2026 Kia Sportage PHEV → Plug-in Hybrid | [49767](https://www.fueleconomy.gov/ws/rest/vehicle/49767) | P 1.6/4 AM-S6 AWD | 35/36/36 | 97/9/8 | 2025-09-25 / 2025-10-28 |

Regular gasoline except premium BMW 328i, Corvette and C300; diesel candidate as marked. PHEVs use regular gasoline plus electricity. A1 is EPA's one-speed automatic descriptor, not a combustion-engine automatic equivalence.

Retained investigated alternative IDs: #2 35736/35737; #3 35670/35672; #6 39241/39242/39243; #7 39255/39256/39257; #11 42968/42969/42970/42971; #18 47500/47501; #23 48368/48369; #24 48310/48311; #26 49823/49824; #27 49821/49822/49825; #29 49498/49499. Do not transfer their figures between records.

Unresolved #19 lookup: [Silverado 2WD options](https://www.fueleconomy.gov/ws/rest/vehicle/menu/options?year=2024&make=Chevrolet&model=Silverado%202WD) returned 46815, diesel 3.0/six-cylinder/10-speed/2WD. vPIC's broader Silverado family also does not prove 1500. Later manufacturer research is separate, not a retroactive benchmark substitution.

## C. Electric and PHEV modes

Consumption city/highway/combined in kWh/100mi; range in miles. Charging time is reported 240V hours, not DC fast charging.

| # | Consumption C/H/combined | BEV range or PHEV charge-depleting range | PHEV total range | 240V hours |
|---|---|---:|---:|---:|
| 5 | 26.6482/33.2577/29.6225 | 84 | N/A | 8 |
| 9 | 26.9597/33.7185/30.0011 | 151 | N/A | 8 |
| 10 | 23/28/25 | 25 | 640 | 2 |
| 13 | 32/40/36 | 42 | 600 | 4.5 |
| 14 | 39/45/41 | 32 | 520 | 2 |
| 15 | 23.9556/26.5188/25.109 | 353 | N/A | 11.2 |
| 17 | 27.4203/34.1006/30.4264 | 149 | N/A | 8 |
| 18 | 27/33/29 | 40 | 550 | 4 |
| 20 | 30.6883/38.0934/34.0206 | 260 | N/A | 8.5 |
| 23 | 37/45/41 | 280 | N/A | 14.5 |
| 24 | 29.9254/30.4362/30.1552 | 318 | N/A | 10 |
| 30 | 39/47/43 | 33 | 470 | 2 |

| PHEV # | Charge-depleting MPGe C/H/combined | Composite gasoline-electricity MPGe C/H/combined |
|---|---|---|
| 10 | 145/121/133 | 83/72/78 |
| 13 | 105/84/94 | 72/58/65 |
| 14 | 87/76/82 | 50/45/48 |
| 18 | 125/103/114 | 86/72/79 |
| 30 | 87/78/83 | 56/52/54 |

All five return phevBlended="true". Do not promise pure-electric operation for the charge-depleting distance. [Prius 47500 official display](https://www.fueleconomy.gov/feg/Find.do?action=sbs&id=47500) distinguishes gasoline MPG, electricity-plus-gas MPGe and total range.

## D. Completeness and parsing

Core 15 fields: id, year, make, model, fuelType1, drive, trany, city08, highway08, comb08, co2TailpipeGpm, ghgScore, feScore, createdOn, modifiedOn. **450/450 core values present across 30 retrieved records, including the provisional diesel candidate.** Presence is not permission to publish or proof of complete specification coverage.

| Group | Confirmed targets | Core complete records | Engine L/cylinders | Electric consumption/range | Motor/battery descriptor |
|---|---|---|---|---|---|
| Gasoline | 10/10 | 10/10 | 10/10 | N/A | N/A |
| Diesel | 0/1 exact target | 1/1 candidate | 1/1 candidate | N/A | N/A |
| HEV including mild | 7/7 | 7/7 | 7/7 | N/A | 5/7 |
| BEV | 7/7 | 7/7 | N/A | 7/7 | 7/7 |
| PHEV | 5/5 | 5/5 | 5/5 | 5/5 | 5/5 |

Both 2026 Camry motor/battery descriptors are blank. Advanced exact horsepower/torque/acceleration/exterior dimensions/configuration prices verified from the sampled API responses: **0/30**. Other free-source experiments may improve coverage later.

Numeric strings require explicit finite-number parsing after checking blank/null/missing/sentinels. Boolean("false") is wrong. Preserve valid BEV zero tailpipe CO₂; do not turn Camry range="0" into zero driving range. LEAF uses range with blank rangeA. PHEV rangeA is charge-depleting; retain separate fuel modes. evMotor mixes kW descriptions and battery voltage/chemistry: never sum as system horsepower. Menus may be singleton objects or arrays. Recall Notes may be null, flags genuine booleans. Twelve in-memory research parsing checks passed; **not production automated tests**. No live/browser/load/deployment verification implied. [Field dictionary](https://www.fueleconomy.gov/feg/ws/).

## E. Cross-provider matching

23 vPIC year/make requests succeeded. Example [2021 Toyota](https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeYear/make/Toyota/modelyear/2021?format=json).

| Family | vPIC make / model IDs |
|---|---|
| Camry; RAV4; RAV4 Prime; Prius Prime | 448 / 2469; 2217; 28070; 21950 |
| Civic | 474 / 1863 |
| 328i; i4 | 452 / 1709; 29579 |
| LEAF | 478 / 1905 |
| F-150 | 460 / 1801 |
| Outback | 523 / 2233 |
| Pacifica | 477 / 3628 |
| Model 3 | 441 / 17834 |
| Silverado; Corvette | 467 / 1850; 1831 |
| Ioniq 5; Tucson | 498 / 28983; 2058 |
| EV9; Sportage | 499 / 32587; 2770 |
| C-Class | 449 / 2085 |

EPA RAV4 gasoline/HEV records can map to one broad vPIC model; Prime has a separate model. vPIC C-Class does not prove C300 4MATIC equivalence. F-150 splits engine/drive in EPA and cab/drive in NCAP. Civic hybrid can be an option descriptor rather than model-name suffix. Duplicate identical vPIC LEAF rows must not create duplicate canonical identities. Make ID is not legal manufacturer ID; unique manufacturer/plant is not established for each configuration.

Use exact provider IDs, reviewed aliases, market/year/powertrain/body/drive checks, scoped N–N evidence links. Scope and confidence/review status are independent. Fuzzy matching proposes candidates only; retain unmatched records. No exact EPA-to-NCAP configuration join was established.

## F. Twelve safety and recall investigations

Official list pattern: https://api.nhtsa.gov/SafetyRatings/modelyear/2024/make/Toyota/model/Camry?format=json  
Detail pattern/example: https://api.nhtsa.gov/SafetyRatings/VehicleId/19426?format=json  
Recall links below preserve actual lookup names. Scores O/F/S/R; NR means Not Rated. Results: 12/12 investigated with tested IDs after alias corrections; 11/12 have at least one overall score; **0 exact EPA–NCAP joins proven**.

| Year/make/model | IDs/body/drive/release and scores | Campaign IDs and scope | Association |
|---|---|---|---|
| 2015 Toyota Camry | 9121 four-door FWD 5/4/5/4 | [15V144000](https://api.nhtsa.gov/recalls/recallsByVehicle?make=Toyota&model=Camry&modelYear=2015), certain EPS electronics | Model/body/drive, not exact 2.5 |
| 2015 Honda Civic | 9106 sedan 5/4/5/4; 9105 coupe 4/4/5/4, FWD | [15V574000](https://api.nhtsa.gov/recalls/recallsByVehicle?make=Honda&model=Civic&modelYear=2015), automatic transmission issue | Ambiguous body; exclude campaign applicability to manual target |
| 2018 Ford F-150 | Regular Cab 12127 4x2/12128 4x4, 4/4/5/4; SuperCrew 12129/12130 5/5/5/4; SuperCab 12131/12132 4/4/5/4 | [19 campaigns](https://api.nhtsa.gov/recalls/recallsByVehicle?make=Ford&model=F-150&modelYear=2018), engine/cab/equipment/previous repair restrictions | Ambiguous cab; no single score for EPA record |
| 2018 Subaru Outback | 12397 SW AWD 5/5/5/4 | [18V935000, 18V773000, 21V587000](https://api.nhtsa.gov/recalls/recallsByVehicle?make=Subaru&model=Outback&modelYear=2018), camera/fuel warning/pump | Model/body/drive |
| 2018 Nissan LEAF | 12789 BEV five-door FWD NR/NR/NR/NR | [19V654000, 23V048000, 23V494000, 24V071000](https://api.nhtsa.gov/recalls/recallsByVehicle?make=Nissan&model=Leaf&modelYear=2018), cameras/manual instructions/speed control | Model-level, explicitly unrated |
| 2021 Toyota RAV4 | 15849 AWD, 15825 FWD, both 5/4/5/4 | [23V865000](https://api.nhtsa.gov/recalls/recallsByVehicle?make=Toyota&model=RAV4&modelYear=2021), occupant classification sensor | AWD model-level; not automatic Prime transfer |
| 2021 Chrysler Pacifica | Hybrid FWD **15457 5/4/5/4**; ordinary FWD 15455 5/5/5/4, AWD 15456 NR/5/5/NR | [22V181000, 23V010000, 24V436000, 24V793000, 25V876000, 25V877000, 26V362000](https://api.nhtsa.gov/recalls/recallsByVehicle?make=Chrysler&model=Pacifica&modelYear=2021), PHEV/equipment/adapted-vehicle restrictions | Hybrid/body/drive scope |
| 2021 Tesla Model 3 | AWD early 15903/later 16051, RWD early 15902/later 16052; all 5/5/5/5 | [22 campaigns](https://api.nhtsa.gov/recalls/recallsByVehicle?make=Tesla&model=Model%203&modelYear=2021), software/service/equipment/Performance exclusions | Release ambiguous even with equal scores |
| 2024 Toyota Camry | FWD 19426/AWD 19427 both 5/5/5/5 | [24V128000](https://api.nhtsa.gov/recalls/recallsByVehicle?make=Toyota&model=Camry&modelYear=2024), certain rear head-restraint brackets | FWD model-level, not exact V6 |
| 2024 Hyundai Ioniq 5 | Early AWD 19547/RWD 19546 5/4/5/5; later AWD 20792/RWD 20791 NR/NR/5/5 | [24V204000, 24V868000, 26V432000](https://api.nhtsa.gov/recalls/recallsByVehicle?make=Hyundai&model=Ioniq%205&modelYear=2024), ICCU/battery | Release ambiguity changes available ratings |
| 2025 Kia EV9 | AWD 20738/RWD 20737 both 5/4/5/4 | [24V757000, 24V962000, 25V115000, 26V545000](https://api.nhtsa.gov/recalls/recallsByVehicle?make=Kia&model=EV9&modelYear=2025), display/seats/drive unit/occupant detection | AWD model-level |
| 2026 Toyota Camry hybrid | HEV FWD 21640/AWD 21641 both 5/5/5/5 | [25V744000, 25V869000, 26V511000](https://api.nhtsa.gov/recalls/recallsByVehicle?make=Toyota&model=Camry%20Hybrid&modelYear=2026), PVM equipment/inverter/display | HEV/body/drive scope |

F-150 list requires names F-150 REGULAR CAB, F-150 SUPER CREW, F-150 SUPERCAB. 2026 safety requires CAMRY HYBRID HEV; recall endpoint requires Camry Hybrid. Initial plain Camry returned empty safety and HTTP400 recall; correction found real data. Safety RecallsCount:0 conflicted with three dedicated recall campaigns: never use that summary as recall truth.

F-150 campaign set: 20V097000, 21V983000, 21V155000, 21E027000, 18V894000, 18V392000, 19V633000, 19V278000, 18V568000, 18V213000, 18V214000, 17V672000, 17V669000, 17V598000, 22V150000, 24V852000, 25V236000, 26V373000, 26V375000.
Model 3 set: 22V037000, 21V834000, 21V835000, 22V045000, 21V387000, 21V846000, 22V050000, 22V063000, 22V235000, 22V263000, 22V317000, 22V702000, 22V798000, 23V085000, 23V838000, 24V051000, 24V153000, 24V376000, 24V554000, 24V935000, 26V283000, 26V507000.

[NHTSA guidelines](https://www.nhtsa.gov/ratings/government-5-star-safety-ratings-motor-vehicles-advertising-and-communication-usage): overall/frontal comparisons only same body style within 250lb. Missing curb-weight evidence means no competitive overall/frontal ranking. Show safety concerns; avoid unsupported safest/best claims. [Official VIN checker](https://www.nhtsa.gov/recalls). Campaign list is not VIN applicability or repair status; empty response is not a guarantee.

## G. Image evidence

30 bounded searches (≤3 candidates each); 29 returned files, 17 potentially representative after metadata screening, five file pages audited, zero exact EPA-configuration photos established. No images downloaded/added to project; file-page audit is not final crop/visual QA.

| # | File page / original | Creator, license | Identity confidence |
|---|---|---|---|
| 5 | [LEAF page](https://commons.wikimedia.org/wiki/File:2015_Nissan_Leaf_Battery_Electric_(18524948709).jpg) / [original](https://upload.wikimedia.org/wikipedia/commons/d/d5/2015_Nissan_Leaf_Battery_Electric_%2818524948709%29.jpg) | Massachusetts Dept. of Environmental Protection, [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/) | Representative 2015 ZE0 BEV; 480x360 only |
| 7 | [F150 page](https://commons.wikimedia.org/wiki/File:2018_Ford_F150_Platinum_FX4_Crew_Cab_in_Ruby_Red,_front_left.jpg) / [original](https://upload.wikimedia.org/wikipedia/commons/7/70/2018_Ford_F150_Platinum_FX4_Crew_Cab_in_Ruby_Red%2C_front_left.jpg) | Mr.choppers, [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) selected from dual licensing | 2018 Platinum FX4 Crew Cab; engine unproven; not exact 2WD |
| 8 | [Outback page](https://commons.wikimedia.org/wiki/File:2018_Subaru_Outback_au_SIAM_2018.jpg) / [original](https://upload.wikimedia.org/wikipedia/commons/9/91/2018_Subaru_Outback_au_SIAM_2018.jpg) | Bull-Doser, public-domain dedication, no CC version | Canadian show vehicle, representative fifth generation |
| 16 | [Camry page](https://commons.wikimedia.org/wiki/File:Toyota_Camry_(XV70)_IMG_9081.jpg) / [original](https://upload.wikimedia.org/wikipedia/commons/e/ef/Toyota_Camry_%28XV70%29_IMG_9081.jpg) | Alexander-93, [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) | US-spec XV70 facelift; 2024 photo date not model-year/V6 proof |
| 18 | [Prius page](https://commons.wikimedia.org/wiki/File:2024_Toyota_Prius_Prime_XSE_PHEV_in_Cutting_Edge_Metallic,_front_left.jpg) / [original](https://upload.wikimedia.org/wikipedia/commons/5/57/2024_Toyota_Prius_Prime_XSE_PHEV_in_Cutting_Edge_Metallic%2C_front_left.jpg) | Mr.choppers, CC BY-SA 3.0 selected from dual licensing | Strong model/year/XSE/PHEV; exact EPA crosswalk unapproved |

These licenses permit commercial use, caching and adaptation with applicable attribution/change/ShareAlike conditions; public-domain dedication permits reuse without CC conditions. Store creator/title/source/license/version and derivative notice. No general relicensing of application code is implied by an asset license.

Other potential representatives: #4,6,9,10,11,13,15,17,24,25,26,27; admission review incomplete. Rejected/no approved result: #1 Chinese older car/taxi, #2 Australian/pre-facelift, #3 later/non-US Civic, #12 older HEV or PHEV, #14 PHEV unproven, #19 older Silverado, #20 Ioniq 5 N, #21 European hatchback, #22 older Corvette, #23 EV9 GT, #28 older Tucson/veiled next generation, #29 no files, #30 Chinese Sportage Ace. This accounts for all 30. BMW/Mercedes file-page tool errors despite successful API metadata are access limitations, not provider absence. Fallback: neutral owned placeholder.

## H. Rights, infrastructure and decision

Historical rights: EPA REST/CSV commercial display/cache/redistribution unresolved; EPA photographs manufacturer/Ward's-owned. vPIC public-use FAQ conflicts with unknown catalog license. NCAP/recall dataset metadata supports factual public-domain reuse; preserve scope. Commons per-file rights. Wikidata structured CC0 only; optional AFDC/EIA not core dependencies. See [current rights register](PROVIDER_RIGHTS_REGISTER.md) for evidence URLs and updates.

Historical estimates (not measured full corpus/load): 12,000–18,000 configurations, ~1.99KB mean serialized sampled EPA record, one snapshot 24–36MB; normalized/provenance/index DB 150–300MB; 1,000 150KB images ~150MB; 50,000 20KB reads ~1GB; 20,000 150KB image deliveries ~3GB. Supabase Free 500MB DB/1GB storage/5GB egress + 5GB cached egress with inactivity pause; monitor and restore. No services provisioned.

Vercel Hobby personal/noncommercial restriction blocks assumed business hosting. [Phase 0C hosting review](HOSTING_ASSESSMENT.md) proposes alternatives; it does not alter historical API metrics.

## I. Acceptance and handoff

PASS: denominator fixed; ≥24/30; source IDs; per-powertrain metrics; 12 safety/recall investigations; five file audits; no known false exact merges adopted. PARTIAL: imagery admission, full corpus sizing, protected baseline/recovery. BLOCKED: feed rights/publication and Phase 1 authorization. Research checks do not establish application rendering, automated regression, load or production parity.

Architecture is now definitively in-place: one repository/frontend, progressive JS→TS/React19/Tailwind4, backend adapters/Zod/read API/Supabase/jobs, scoped N–N matching and per-field provenance. Keep existing business routes until replacement passes and explicit release approval. [Modernization plan](IN_PLACE_MODERNIZATION_PLAN.md), [roadmap](ROADMAP_AND_ACCEPTANCE.md). No implementation began.
