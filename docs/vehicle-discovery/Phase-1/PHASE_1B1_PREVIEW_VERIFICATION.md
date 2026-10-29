# DanAuto Phase 1B.1-P preview verification

**Decision: BLOCKED at hosting eligibility. No preview was created; the routing correction is not verified on Vercel and is not ready for production release.**

Assessment: 2026-10-24 Africa/Lagos (2026-10-23 UTC). The owner confirmed during this task that the existing Vercel team is on **Hobby**. The commercial-use restriction prevents proceeding under the conditional deployment authorization. All remaining feasible investigation was read-only apart from this requested report and ignored diagnostic evidence. No subscription, project configuration, protection control, alias, domain, source, dependency, database or Git history was changed. No commit, push, merge, pull request, deployment or promotion occurred.

## A. Repository and commit verification

| Item | Verified value |
| --- | --- |
| Branch | `modernization/phase-1b1-routing` |
| HEAD / reviewed candidate | `01cc01139dd5c8d586e85880e5bf7f9b1ae5f3a7` |
| Commit subject | `fix: add Vercel SPA fallback and routing regression coverage` |
| Working tree at entry | Clean; empty index |
| Local main, unchanged | `05b0ac136b9075fab0b41a4b31307f54146471ea` |
| Original Phase 1A closeout, preserved | `c6d02aadfab149f75851f4a757e6f8ec00ca0ffc`; ancestor of HEAD and still the foundation branch tip |
| Reconciliation merge, preserved | `2c68e70917250c682bb31b380af33d6a360fb22a` |
| Local origin/main reference | `caa06557511bbdb28f59d2eb3d1ab4f17e6c76fa`; no fetch/update performed in this task |
| Baseline tag | `danauto-app-baseline-2026-10-23`, dereferences unchanged local main |
| Remote | `https://github.com/Lorddan212/Dan-Automobile.git` |

The reviewed commit contains exactly root `vercel.json`, the routing-delivery spec, and the two Phase 1B.1 security/routing reports. Its rewrite is source `/(.*)` to `/index.html` with the official schema reference. Current configuration matches that commit. No source, public asset, package, lockfile or Vite configuration differs from HEAD.

Both original recovery resources remain present under `C:\Users\HP\Desktop\DanAuto-Recovery\phase-1a-20261023`, and their recorded SHA-256 checksums were reverified:

- History bundle: `7D12BB0B6AF1D166FF7F681A4843B96FE81E9E96AF200885D75FAB1F1DBE12D4`.
- Source/documentation ZIP: `5414E1E5C9F4B5EB64AFB812F65A4F24511D3531387233F9C5AF5F38002CA6CC`.

No tag, branch, backup or accepted report was overwritten. This new report is intentionally left uncommitted; ignored diagnostics are under `output/playwright/phase-1b1-preview/`. The reviewed deployment candidate remains the exact clean commit, rather than a working tree containing this later report.

## B. Vercel account and plan eligibility

Confirmed project owner: team **Daniel J's projects**, slug `daniel-js-projects-14c7f014`, ID `team_RAwMJSSTlIwMx5dQ2Doc8Egl`. The team/project connector confirms identity but omits billing/plan fields. Therefore **Hobby is owner-confirmed in this task, not independently retrieved billing metadata**. Browser dashboard attempts timed out; no plan value was guessed from absent connector fields.

Vercel's [Hobby documentation](https://vercel.com/docs/plans/hobby) restricts the plan to personal, noncommercial use. Its [fair-use commercial-usage section](https://vercel.com/docs/limits/fair-use-guidelines#commercial-usage) requires Pro or Enterprise for commercial use and includes advertising products/services and paid development in its examples. DanAuto represents an automobile business and advertises vehicles and services. This intended preview is part of that business project; no verified exception establishes eligibility merely because it is temporary. **Task 2 fails, so Task 3 was not attempted.** This is the requested hosting gate, not an automatic approval rejection or a failed deployment.

Eligible Vercel option: **Pro**, with the existing team/project retained after a separately approved subscription decision; Enterprise is also eligible but unnecessary for this scope. The current [Pro plan reference](https://vercel.com/docs/plans/pro-plan#pro-plan-pricing) lists a **USD 20/month platform fee**, one deploying seat and USD 20 usage credit; extra seats, usage, add-ons and applicable taxes can add cost. No upgrade or trial was started. An existing Hobby deployment continuing to respond is not evidence of eligibility for another deployment.

Compliant free alternative for a separately authorized generic SPA preview: **Netlify Free**. Netlify's [official announcement explicitly permits commercial projects](https://www.netlify.com/blog/introducing-netlify-free-plan/); its [current Free plan](https://docs.netlify.com/manage/accounts-and-billing/billing/billing-for-credit-based-plans/credit-based-pricing-plans/#free-plan) provides 300 monthly credits with a hard cap and no auto recharge. The older announcement's resource quotas are not used as current limits. Netlify can serve the unchanged Vite build with a separately reviewed, host-specific [SPA fallback](https://docs.netlify.com/manage/routing/redirects/rewrites-proxies/#history-pushstate-and-single-page-apps), allowing direct-route, refresh, query and asset testing. Its broad fallback also needs explicit missing-asset/API boundaries; it is not automatically a solution to those checks.

A Netlify result would validate DanAuto's browser behavior and that host's delivery only. It cannot validate Vercel's `vercel.json`, dashboard overrides, reserved paths or protection behavior. Vercel-specific verification remains **BLOCKED** even if a different-host preview later passes. No alternative service/project/account was created, no repository was added, and the accepted long-term architecture was not revised.

## C. Project configuration and dashboard overrides

| Setting / observation | Evidence and limit |
| --- | --- |
| Existing project | `dan-automobile`, ID `prj_RB6sUa2WbMHeRiONSsDv1oHr7jYG`; accountId matches the verified team |
| Framework / Node | Vite / Node 24.x, exposed by project connector |
| Root / build command / output | Existing production build logs identify entrypoint `.`, run `npm run build` then `vite build`, and emit `dist/index.html` plus `dist/assets/*`. This verifies the effective root/build/output for that deployment |
| Current raw dashboard overrides | Exact rootDirectory, outputDirectory, buildCommand and installCommand values are omitted by the connector; dashboard timed out. Their current raw values remain unverified |
| Dashboard routing rules | Fresh `list_project_routes`: empty array, version null, currentRoutes 0; no project routing rules found |
| Repository routing | Only the reviewed vercel.json fallback; no cleanUrls, trailingSlash, redirect, middleware or API-function configuration |
| Dashboard cleanUrls / other unexposed deployment options | Not exposed; must be reconfirmed before an eligible preview. Do not infer false/null from omitted fields |
| Local CLI connection | No `.vercel/project.json`; no VERCEL_TOKEN environment variable. The prior phase's CLI inspection failed authentication. No login/link/pull operation or credential change was performed here |

Fresh deployment listing shows the same latest production deployment `dpl_4YLCenR2V5tgk7Snfx7dEnWE3h6r`, READY, main SHA `caa06557511bbdb28f59d2eb3d1ab4f17e6c76fa`. Its immutable hostname is `dan-automobile-kzp7lf3cz-daniel-js-projects-14c7f014.vercel.app`. Build logs independently confirm cloning that repository/branch/revision. Current public production alias: `dan-automobile.vercel.app`.

The project-domain listing contains one verified production domain with gitBranch/customEnvironmentId/redirect null. The production deployment also has the existing main-branch and project aliases. No configured domain was found assigned to the routing branch. An eligible Preview deployment normally has its own generated URL; it must not promote or reassign these production domains. Recheck branch-domain assignments and target at deployment time. No preview/production alias operation happened here.

## D. Preview deployment information

| Field | Result |
| --- | --- |
| Preview URL / deployment ID | **None created** |
| Intended source revision | `01cc01139dd5c8d586e85880e5bf7f9b1ae5f3a7` |
| Intended target | Preview only, existing verified project/team |
| CLI deploy/build/pull/link operation | Not run; eligibility gate failed |
| Deployment result | BLOCKED, not ERROR/READY |

The older foundation preview `dpl_2ZoUJD2jKQ2jupvwLTmPKAsNMRGM` is revision `d7871ae`, not the routing candidate. It cannot substitute for a deployment of 01cc011. No GitHub push or PR was used to trigger a build.

## E. Full route-by-route HTTP comparison

Fresh observations began **2026-10-23 23:02:57 UTC / 2026-10-24 00:02:57 Lagos**. Production GETs used manual redirect handling, no bypass and no forms. All listed non-root responses have `x-vercel-error: NOT_FOUND`, no Location header and no SPA shell. Preview HTTP/content type/browser results are absent because no eligible candidate exists; they are not invented 404 results.

| Route | Production HTTP / content type | Preview HTTP / content type | Preview browser rendering | Result |
| --- | --- | --- | --- | --- |
| `/about` | 404 / text/plain | Not run | Not run | BLOCKED; production fails |
| `/services` | 404 / text/plain | Not run | Not run | BLOCKED; production fails |
| `/cars` | 404 / text/plain | Not run | Not run | BLOCKED; production fails |
| `/gallery` | 404 / text/plain | Not run | Not run | BLOCKED; production fails |
| `/contact` | 404 / text/plain | Not run | Not run | BLOCKED; production fails |
| `/privacy` | 404 / text/plain | Not run | Not run | BLOCKED; production fails |
| `/terms` | 404 / text/plain | Not run | Not run | BLOCKED; production fails |
| `/cookies` | 404 / text/plain | Not run | Not run | BLOCKED; production fails |
| `/cars/mercedes-e300` | 404 / text/plain | Not run | Not run | BLOCKED; production fails |
| `/cars/no-such-baseline-id` | 404 / text/plain | Not run | Not run | BLOCKED; production cannot render unavailable page |
| `/models` | 404 / text/plain | Not run | Not run | BLOCKED; client redirect cannot start |
| `/models/mercedes-e300` | 404 / text/plain | Not run | Not run | BLOCKED; client redirect cannot start |
| `/unknown-baseline-route` | 404 / text/plain | Not run | Not run | BLOCKED; client fallback cannot start |

Homepage: **200 / text/html; charset=utf-8**, matching the original shell hash. `/about?source=routing%20check`, `/about/?source=routing-check` and `/cars/mercedes-e300/?tag=one&tag=two` each remain **404 / text/plain; charset=utf-8**, with no redirect. Preview query preservation, slash behavior and nested refresh are **BLOCKED**.

Behavior distinction from source inspection and accepted earlier local tests: invalid vehicle IDs render the existing unavailable screen after the SPA boots; the wildcard route redirects to `/`, rather than displaying an application Not Found page. Legacy URLs redirect through React Navigate to Cars/detail. With an SPA shell fallback, those initial HTTP responses can be **200** even when an ID is unavailable or the client redirects. They must not be reported as genuine HTTP 404s or server 3xx redirects. No application behavior was redesigned to meet different semantics in this task.

## F. Asset and API-path behavior

Fresh public production requests: **24/24 build files return 200 and SHA-256-match the recovered original build**. JavaScript is served as application/javascript, CSS as text/css, HTML as text/html and the public SVG favicon as image/svg+xml (full header strings in JSON evidence). Existing image CDN delivery is not established by this result: browser diagnostics substitute external images/stylesheets, and the only public bundled image is the favicon. Real external-image loading on the candidate remains unverified.

| Production boundary probe | HTTP / content type | SPA HTML? |
| --- | --- | --- |
| `/assets/__danauto_missing__.js` | 404 / text/plain | No |
| `/assets/__danauto_missing__.css` | 404 / text/plain | No |
| `/__danauto_missing__.png` | 404 / text/plain | No |
| `/api/__danauto_routing_probe__` | 404 / text/plain | No |
| `/.well-known/__danauto_routing_probe__` | 404 / text/plain | No |
| `/_vercel/__danauto_routing_probe__` | 404 / text/plain | No |

These are nonexistent URL probes, not calls to vehicle providers or a functioning API. There are no legitimate application API handlers to test.

**Candidate preflight risk:** the reviewed `/(.*)` pattern also matches all six boundary probes above. Existing filesystem entries/functions have priority, but missing files/endpoints have no such entry. Consequently missing assets and missing `/api/...` paths can fall through to `/index.html` and become HTML/200. The prior routing report already disclosed this property. Static matching was rechecked here and recorded; this is a configuration assessment, **not an observed candidate HTTP result**. Platform reservation of `/.well-known` and any handling of `/_vercel` must be verified on Vercel rather than inferred solely from the regular expression.

The new acceptance requirements specifically reject HTML for missing assets/API paths. They are not proved by the original local pass, and the generic catch-all needs a narrowly reviewed boundary decision/correction before release. No exclusion or other config change was made under this preview-only task. A future scope should preserve app deep links while keeping missing asset/API/platform namespaces out of the SPA fallback, then rerun both negative and positive routing checks. Do not invent API functionality to satisfy that test.

## G. Desktop/mobile browser results

Fresh Chromium diagnostics against **existing production**, not a routing preview: **2/2 scenarios pass** (desktop 1440x900 and emulated iPhone 13). From homepage, About, Cars, Gallery and Contact client navigation works; Camry search returns one catalog card, Gallery has eight cards, and Contact shows its form. Zero uncaught page/console errors, zero unexpected requests, no form submission. Non-GET traffic and unexpected external requests are blocked; external images/stylesheets are substituted.

These checks explain why client navigation can work while direct links fail. They do not prove preview rendering, native mobile behavior, real image availability, nested refresh or the Vercel rewrite. The earlier local build/typecheck/7 tooling tests and 36 normal plus 2 expected gallery browser outcomes remain **historical Phase 1B.1-R evidence**; the full local suite was not rerun or relabeled as a candidate deployment result here. No source or dependency changed to justify rebuilding it during the blocked stage.

## H. Deployment protection observations

Project connector: Vercel authentication/SSO protection enabled with deploymentType `all_except_custom_domains`; password protection disabled; trusted-IP protection disabled. No control was weakened.

An unauthenticated request to the existing foundation preview's immutable URL returns **302**, content type text/plain, Location at `https://vercel.com/sso-api` (query omitted from evidence). This is authentication, not a route failure or application pass. It is not the corrected revision. No login redirect was followed and counted as HTTP 200 application success.

For a future eligible candidate, [official `vercel curl`](https://vercel.com/docs/cli/curl) can target its exact full URL and handle protected requests. Relative paths without an explicit deployment can select production, so the candidate URL must be explicit. The command may retrieve or generate an automation bypass token; do not assume it is entirely settings-neutral. Prefer an existing approved authentication/bypass arrangement; seek separate approval if new protection configuration is required. Avoid verbose output, token arguments, shared auth state and secret-bearing traces. In this blocked task no bypass token/link was created, no protected candidate exists, and no authenticated candidate verification was attempted. The CLI authentication failure from the preceding stage was not treated as a routing failure.

## I. Errors, failures and blockers

1. **Hosting blocker:** owner-confirmed Hobby is not an eligible commercial deployment arrangement. No deployment attempted.
2. **Configuration visibility limit:** dashboard/browser inspection timed out; exact current raw root/output/install/build/cleanUrls overrides remain unverified. Effective production build facts and empty routing rules were obtained through read-only tools.
3. **Production failure:** all 13 direct non-root paths still return genuine Vercel 404s; query/slash variants fail too.
4. **Candidate boundary risk:** broad fallback matches missing assets/API URLs, conflicting with the newly specified negative-path requirements unless separately addressed and verified. Reserved paths require platform-level tests.
5. **Preview/protection gate:** no corrected preview, URL, deployment ID, candidate browser result or authenticated route result exists.
6. The existing gallery pointer defect and previously recorded dependency findings remain unchanged. They were not fixed or hidden.

Read-only evidence: `output/playwright/phase-1b1-preview/public-routing-observations.json`, `production-client-navigation.json`, `project-readiness-evidence.json` and `fallback-boundary-preflight.json`, with the diagnostic scripts alongside them. Protection redirect query data is omitted. Git diff/whitespace checks pass; only this requested Markdown report is untracked outside ignored diagnostics.

## J. Is the routing correction verified?

**No.** It remains locally validated with a probable missing-fallback diagnosis, but Vercel deployment validation is **BLOCKED**. Do not infer a deployed pass from matching build bytes, a working homepage, client navigation, local Vite preview or static route compilation. Production is unchanged.

## K. Ready for a separately authorized production release?

**NO-GO.** First establish an eligible hosting arrangement, confirm unexposed settings, resolve/review the missing-asset/API boundary requirements, deploy the approved exact candidate to an eligible isolated preview, and pass all direct/refresh/query/asset/reserved/protection/browser checks. If configuration changes are authorized, the candidate will have a new reviewed commit; 01cc011 must not silently be relabeled as that revised candidate. A passing alternative-host preview cannot certify Vercel behavior. No production subscription, migration, alias or release action is implied.

## L. Can local dependency security work resume independently?

**Technically feasible, but not authorized to resume under this task or the unchanged production gate.** Local compatible dependency work can be isolated on a separately authorized development branch, preserving this checkpoint, backups and report, with no deployment/provider/database access. Hosting eligibility does not prevent local code/tooling work by itself. However, the prior Phase 1B.1 authorization explicitly paused changes until its production gate passed or the owner revised that gate; neither has happened here.

The owner may separately authorize local-only security remediation with an explicit revised gate while hosting/preview/release remain blocked. That would require a fresh dependency assessment and the established build/typecheck/tooling/browser/audit checks. No upgrade is performed now, and Phase 1B.2 remains outside scope.

**Next decisions for review:** choose an eligible Vercel Pro arrangement or authorize a generic Netlify Free preview; separately scope the negative-path routing correction if desired; explicitly revise/authorize the local security-work gate if it should proceed independently. This report makes no subscription purchase, deployment or implementation decision on the owner's behalf.
