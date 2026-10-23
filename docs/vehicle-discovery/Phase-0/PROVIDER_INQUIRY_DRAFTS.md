# Provider inquiry drafts — unsent

Prepared 23 October 2026. **Draft documents only. No email has been sent.** Sender identity/signature must be completed by the owner. Do not include credentials, user VINs or personal data.

## FuelEconomy.gov

To: fueleconomy@ornl.gov  
Official contact verified 23 October 2026: https://www.fueleconomy.gov/feg/contacts.shtml  
Subject: Clarification of commercial reuse of FuelEconomy.gov vehicle REST and downloadable data

Dear FuelEconomy.gov team,

We are planning to modernize DanAuto, an automobile business website, with an informational vehicle discovery and comparison service using verified U.S.-market vehicle configurations. We would appreciate written clarification of the applicable reuse conditions for the vehicle REST endpoints at https://www.fueleconomy.gov/ws/rest/vehicle/ and the downloadable Find a Car vehicle table linked from https://www.fueleconomy.gov/feg/ws/.

Our proposed use is to retrieve data through bounded background jobs, retain source IDs and update dates, store source records and normalized values in PostgreSQL, and display selected facts on publicly accessible vehicle and comparison pages. A constrained, paginated read API would supply those pages. We would not imply government endorsement or offer a competing unrestricted dataset download.

Could you please confirm:
1. Whether commercial public display of these REST/download vehicle data is permitted.
2. Whether local caching, persistent storage, normalization, unit conversion, backup retention and historical changed-record storage are permitted, including any retention/deletion obligations.
3. Whether returning selected fields through our public read API is permitted, and how this differs from bulk redistribution or standalone dataset distribution.
4. Which license/terms govern this specific feed, and whether the website's noncommercial document wording applies to the vehicle data.
5. Required attribution, links, disclaimers and update obligations.
6. Any excluded third-party fields or content, including photographs, manufacturer/Ward's materials, and website-only Edmunds MSRP/tank-size information.
7. Recommended automated download/refresh frequency, traffic limits and preferred bulk-download mechanism.

We will retain the official EPA measurement context, leave missing values unknown, and exclude photographs and third-party content unless separately permitted.

Thank you for helping us establish the correct permissions before public implementation.

Kind regards,  
[Owner name]  
DanAuto  
[Owner-controlled website and contact email]

## NHTSA vPIC

To: manufacturerinfo@dot.gov  
Optional dataset-policy contact: nhtsa-datahub@dot.gov  
Contact evidence: https://vpic.nhtsa.dot.gov/api/Home/Index/FAQ and https://catalog.data.gov/dataset/nhtsa-product-information-catalog-and-vehicle-listing-vpic-vehicle-api-csv (reviewed 23 October 2026).  
Subject: vPIC commercial display, caching and normalized data redistribution clarification

Dear NHTSA vPIC team,

We are planning an informational discovery/comparison feature within DanAuto, an automobile business website. We intend to use vPIC make, model and manufacturer identifiers to validate and contextualize U.S.-market vehicle records.

Your FAQ says the API is free for public use without registration or a licensing requirement. The associated data.gov vehicle API catalog currently lists an unknown license. We would appreciate clarification of the applicable terms for our proposed use.

We would retrieve make/model/manufacturer metadata in bounded background jobs, preserve your identifiers/source labels and dates, store normalized metadata and backups locally, and display selected facts through public pages and a constrained paginated read API. We do not propose bulk VIN lookup or collection of users' VINs in the initial release.

Could you confirm:
1. Whether commercial display, local caching/persistent storage, normalization and backup retention are permitted.
2. Whether public read-API responses containing selected metadata constitute permitted reuse, and any limits on bulk or standalone redistribution.
3. The applicable license, attribution, no-endorsement and deletion/update requirements, including any manufacturer-supplied data exceptions.
4. Recommended request budgets, off-peak scheduling and available download alternatives.
5. Whether any image, logo, body-class illustration or other material is governed separately from the factual metadata.

We would keep broad model links distinct from exact EPA configurations and would not present vPIC metadata as proof of trim or safety-test equivalence.

Thank you for your guidance.

Kind regards,  
[Owner name]  
DanAuto  
[Owner-controlled website and contact email]

## Recording replies

Owner reviews and sends independently if desired. On reply, update the [rights register](PROVIDER_RIGHTS_REGISTER.md) with exact scope and policy reference before changing a gate. No reply, a free endpoint, or acceptance of this draft is not permission to redistribute data.
