# DanAuto Phase 1B.1 security and reconciliation report

Status: **BLOCKED at the Task 1 deployment safety gate. Dependency remediation was not started.**

Investigation date: 2026-10-23 (production asset verification began at 22:00 UTC). This report records the requested stop condition, not a completed Phase 1B.1 implementation. No dependency/source/configuration change, branch, merge, commit, push, pull request, deployment or Phase 1B.2 implementation was performed. The only new non-ignored workspace file is this report.

The user instruction requires dependency modifications to wait until Git and deployment safety checks pass, and requires reporting production problems before dependency work. Public deep links fail the accepted direct-load/refresh behavior. The issue was not hidden by limiting tests to client-side navigation.

## A. Local and remote Git reconciliation

| Reference / item | Verified value |
| --- | --- |
| Current local branch | `modernization/phase-1a-foundation` |
| HEAD / local closeout | `c6d02aadfab149f75851f4a757e6f8ec00ca0ffc` |
| Local main, unchanged | `05b0ac136b9075fab0b41a4b31307f54146471ea` |
| origin/main after requested fetch | `caa06557511bbdb28f59d2eb3d1ab4f17e6c76fa` |
| origin/modernization/phase-1a-foundation | `d7871ae8f3eb15432849f046c89d76fd06186976` |
| Phase 0 documentation checkpoint | `79beae7cb4ef5134297d88a6361fbe286c11d73f` |
| Annotated baseline tag | `danauto-app-baseline-2026-10-23`, dereferenced to unchanged local main |
| Remote | `https://github.com/Lorddan212/Dan-Automobile.git` |

`git fetch origin` updated remote references only. No merge/rebase/pull/reset was performed. The working tree and index were clean at entry. Relative to the fetched remote main, the current branch has one unique commit and remote main has one unique commit; their common parent line reaches `d7871ae`. Local `c6d02aa` is **not** an ancestor of remote main.

[PR #6](https://github.com/Lorddan212/Dan-Automobile/pull/6) is confirmed merged at **2026-10-23 21:01:24 UTC** (22:01:24 Lagos). Its head was `d7871ae`, its base was `05b0ac1`, and its merge commit was `caa0655`. It merged two commits and changed 24 files: 14 accepted Phase 0 documents and ten initial tooling/report/configuration files. The merge tree equals `d7871ae` exactly. Its application source, public assets, entry HTML, Vite/Tailwind/PostCSS configuration and deployment configuration are unchanged from `05b0ac1`.

The six differences between local closeout and remote main are already reviewed: the newer implementation report, package test script, Playwright reporter registration, strengthened route spec, new expected-failure reporter, and its unit tests. These are the original `c6d02aa` changes, not unknown commits or a new application change. The previously disclosed generated `.codex/environments/environment.toml` is present in PR #6; no secret was observed and it was not edited. No new unreviewed PR change was found, but the local closeout has not been merged remotely.

After the deployment gate is cleared, a safe proposed reconciliation is a dedicated local `modernization/phase-1b1-security` branch from the reverified remote merge followed by an additive merge of the accepted local closeout. That preserves both merge history and the original closeout SHA while leaving local main untouched. **This branch and merge were not executed because Task 1 did not pass.**

Original recovery protection was rechecked: both recorded archive checksums match, all **49/49** restored-file SHA-256 hashes match, and `git bundle verify` confirms complete original history. Archive/bundle locations and hashes remain in [the Phase 1A report](PHASE_1A_IMPLEMENTATION_REPORT.md#verified-recovery-backup). Neither backup was overwritten.

## B. Vercel deployment and production-domain verification

Vercel's read-only deployment, deployment-alias, project-domain and latest-production-deployment tools confirm:

- Deployment: `dpl_4YLCenR2V5tgk7Snfx7dEnWE3h6r`; state **READY**; target **production**; source Git; branch main; SHA `caa06557511bbdb28f59d2eb3d1ab4f17e6c76fa`.
- Project: `prj_RB6sUa2WbMHeRiONSsDv1oHr7jYG`, dan-automobile, Vite.
- Public production domain: [dan-automobile.vercel.app](https://dan-automobile.vercel.app/), verified and assigned to this deployment. Its two additional listed aliases are `dan-automobile-daniel-js-projects-14c7f014.vercel.app` and `dan-automobile-git-main-daniel-js-projects-14c7f014.vercel.app`.
- The inspected deployment is the newest listed production deployment. Read-only public GET requests independently confirm the production site's availability and its build contents.

All **24/24 public build files** (including HTML, CSS, JS chunks and favicon) returned HTTP 200 and match the original recovered build byte for byte by SHA-256. This establishes unchanged deployed application bytes; READY status and byte identity alone do not establish correct deep-link delivery.

**Blocking finding: 13/13 tested non-root routes return HTTP 404 with `x-vercel-error: NOT_FOUND`.** The React SPA shell is delivered at the root but not at direct business/legal/detail/legacy URLs:

| Public URL path | HTTP status | Response |
| --- | --- | --- |
| `/` | 200 | Accepted SPA shell |
| `/about` | 404 | Vercel NOT_FOUND; React Router does not boot |
| `/services` | 404 | Vercel NOT_FOUND; React Router does not boot |
| `/cars` | 404 | Vercel NOT_FOUND; React Router does not boot |
| `/gallery` | 404 | Vercel NOT_FOUND; React Router does not boot |
| `/contact` | 404 | Vercel NOT_FOUND; React Router does not boot |
| `/privacy` | 404 | Vercel NOT_FOUND; React Router does not boot |
| `/terms` | 404 | Vercel NOT_FOUND; React Router does not boot |
| `/cookies` | 404 | Vercel NOT_FOUND; React Router does not boot |
| `/cars/mercedes-e300` | 404 | Vercel NOT_FOUND; React Router does not boot |
| `/cars/no-such-baseline-id` | 404 | Vercel NOT_FOUND; React Router does not boot |
| `/models` | 404 | Vercel NOT_FOUND; React Router does not boot |
| `/models/mercedes-e300` | 404 | Vercel NOT_FOUND; React Router does not boot |
| `/unknown-baseline-route` | 404 | Vercel NOT_FOUND; React Router does not boot |

Separate Chromium diagnostics show that navigating from the homepage through About, Cars, Gallery and Contact works at desktop and mobile widths; catalog search also works. Both scenarios recorded zero console/page errors, zero unexpected requests and no form submission. Non-GET requests were blocked, and external images/stylesheets were substituted as in the accepted local tests. These client-navigation passes **do not** erase the direct-request failures.

This behavior is consistent with a missing deployment SPA fallback: the repository has no tracked `vercel.json`, while the browser application uses BrowserRouter. Vercel documents that Vite SPA deep links need appropriate routing configuration. [Official Vite deployment guidance](https://vercel.com/docs/frameworks/frontend/vite#using-vite-to-make-spas). This is a diagnosis/inference, not a configuration change or an approved fix.

The older baseline deployment `dpl_7myWsrHYkXuAqFJZRZpJzkry774D` still exists, but requests to its immutable URL redirect to Vercel login. Its eventual login page's HTTP 200 is **not** a passing application-route check. No bypass token/link was created and no protection was changed. Therefore whether these 404s predate PR #6 is **unconfirmed**; this report does not blame PR #6 for an unproven new regression. Current production routing cannot be certified equivalent to the accepted local baseline, so the deployment gate remains failed.

## C. Fresh initial security assessment

The Phase 1A closeout report and its full advisory/dependency assessment were read. Fresh audits against the unchanged current lockfile completed successfully with finding-producing exit 1:

| Audit | Affected package entries | Critical | High | Moderate | Low | Unique active GHSAs |
| --- | --- | --- | --- | --- | --- | --- |
| `npm audit --include=dev --json` | 11 | 0 | 7 | 3 | 1 | 32 |
| `npm audit --omit=dev --json` | 2 | 0 | 2 | 0 | 0 | 9 |

Package entries and unique advisories are different denominators: react-router-dom propagates router findings, and several leaf packages each have multiple advisories. Nine affected entries are development/build dependencies; the two production entries are react-router and react-router-dom. The withdrawn braces advisory and its propagated package entries remain excluded. Withdrawal is not a patch, and no package version has changed in this stage.

All findings are pre-existing and match the accepted closeout classifications. The following rows document installed versions, chain, advisory IDs, exploitability scope and candidates established in the Phase 1A assessment. These candidates were **not installed** or represented as newly tested remediation. Full first-fixed-version and individual advisory risk details remain available in [the accepted security ledger](PHASE_1A_IMPLEMENTATION_REPORT.md#b-complete-dependency-security-assessment). Updated package metadata must be rechecked when actual implementation resumes.

| Installed package | Severity | Relationship / scope | Introduction chain | Advisory identifiers | Candidate correction / compatibility | Existing-app context |
| --- | --- | --- | --- | --- | --- | --- |
| `@babel/core@7.29.0` | low | Transitive / dev | app > @vitejs/plugin-react > @babel/core | [GHSA-4x5r-pxfx-6jf8](https://github.com/advisories/GHSA-4x5r-pxfx-6jf8) | 7.29.6; compatible 7.x patch | Attacker-controlled compilation/source maps required; no visitor-controlled compiler input. |
| `baseline-browser-mapping@2.10.16` | moderate | Transitive / dev | app > autoprefixer > browserslist > baseline-browser-mapping | [GHSA-w5vr-8v7q-w6rv](https://github.com/advisories/GHSA-w5vr-8v7q-w6rv) | 2.11.0; compatible 2.x update | Invalid mapping input can stop build-time Node; not a public request handler. |
| `browserslist@4.28.2` | high | Transitive / dev | app > autoprefixer > browserslist | [GHSA-c83g-rgw3-j3cx](https://github.com/advisories/GHSA-c83g-rgw3-j3cx), [GHSA-73wf-gq98-2v4g](https://github.com/advisories/GHSA-73wf-gq98-2v4g) | 4.28.7; compatible 4.x patch | Unbounded queries/untrusted statistics can exhaust or disrupt the compiler; no visitor input path. |
| `esbuild@0.21.5` | moderate | Transitive / dev | app > vite > esbuild | [GHSA-67mh-4wv8-2f99](https://github.com/advisories/GHSA-67mh-4wv8-2f99) | 0.25.0; Vite 5 constrains 0.21.x, so defer to a reviewed Vite major migration | Standalone esbuild serve CORS issue; current app uses Vite/preview, not esbuild serve. |
| `nanoid@3.3.11` | high | Transitive / dev | app > postcss > nanoid | [GHSA-28wg-ghj8-5hjv](https://github.com/advisories/GHSA-28wg-ghj8-5hjv), [GHSA-2v37-7h3g-55p8](https://github.com/advisories/GHSA-2v37-7h3g-55p8), [GHSA-xwg4-73v4-xw9w](https://github.com/advisories/GHSA-xwg4-73v4-xw9w) | 3.3.18 covers all three; compatible 3.x patch | Requires invalid/untrusted generator sizes; no application/session-token use observed. |
| `postcss@8.5.8` | high | Direct / dev | app > postcss; also Vite and Tailwind | [GHSA-qx2v-qp2m-jg93](https://github.com/advisories/GHSA-qx2v-qp2m-jg93), [GHSA-6g55-p6wh-862q](https://github.com/advisories/GHSA-6g55-p6wh-862q), [GHSA-fxqj-rqcc-2cmp](https://github.com/advisories/GHSA-fxqj-rqcc-2cmp), [GHSA-r28c-9q8g-f849](https://github.com/advisories/GHSA-r28c-9q8g-f849) | 8.5.23 covers all four; compatible 8.x patch | Untrusted CSS or source maps can expose build-host files; no public CSS processing. |
| `postcss-selector-parser@6.1.2` | moderate | Transitive / dev | app > tailwindcss > postcss-selector-parser; also postcss-nested | [GHSA-w9m9-85wc-3x92](https://github.com/advisories/GHSA-w9m9-85wc-3x92), [GHSA-rj75-hqrm-r3gf](https://github.com/advisories/GHSA-rj75-hqrm-r3gf) | 6.1.3 fixes low only; 7.1.6 needed for moderate, requiring a separately reviewed parser/parent major boundary | Untrusted selectors can exhaust compilation CPU/recursion; not visitor-executed parsing. |
| `react-router@7.14.0` | high | Transitive / production | app > react-router-dom > react-router | [GHSA-49rj-9fvp-4h2h](https://github.com/advisories/GHSA-49rj-9fvp-4h2h), [GHSA-8x6r-g9mw-2r78](https://github.com/advisories/GHSA-8x6r-g9mw-2r78), [GHSA-84g9-w2xq-vcv6](https://github.com/advisories/GHSA-84g9-w2xq-vcv6), [GHSA-wrjc-x8rr-h8h6](https://github.com/advisories/GHSA-wrjc-x8rr-h8h6), [GHSA-h8fp-f39c-q6mh](https://github.com/advisories/GHSA-h8fp-f39c-q6mh), [GHSA-337j-9hxr-rhxg](https://github.com/advisories/GHSA-337j-9hxr-rhxg), [GHSA-chx6-hx7r-mcp5](https://github.com/advisories/GHSA-chx6-hx7r-mcp5), [GHSA-2j2x-hqr9-3h42](https://github.com/advisories/GHSA-2j2x-hqr9-3h42), [GHSA-qwww-vcr4-c8h2](https://github.com/advisories/GHSA-qwww-vcr4-c8h2) | 7.18.2 covers listed fixes; matched 7.18.4 is a registry-verified compatible candidate | Most findings need Framework/RSC/SSR features absent from BrowserRouter. Client navigation-target validation remains relevant. |
| `react-router-dom@7.14.0` | high | Direct / production | app > react-router-dom | Inherited from react-router rows | Matched 7.18.4 updates its react-router dependency within 7.x | Propagates the nine router advisories; not nine additional independent advisories. |
| `source-map-js@1.2.1` | high | Transitive / dev | app > postcss > source-map-js | [GHSA-68fv-2mgg-jv7q](https://github.com/advisories/GHSA-68fv-2mgg-jv7q) | 1.2.2; compatible 1.x patch | Malicious indexed map offsets can block build-time Node; no visitor-controlled map processor. |
| `vite@5.4.21` | high | Direct / dev | app > vite | [GHSA-4w7w-66w2-5vf9](https://github.com/advisories/GHSA-4w7w-66w2-5vf9), [GHSA-v6wh-96g9-6wx3](https://github.com/advisories/GHSA-v6wh-96g9-6wx3), [GHSA-fx2h-pf6j-xcff](https://github.com/advisories/GHSA-fx2h-pf6j-xcff), [GHSA-698v-4r3x-3vcv](https://github.com/advisories/GHSA-698v-4r3x-3vcv), [GHSA-r825-w8mm-5pxw](https://github.com/advisories/GHSA-r825-w8mm-5pxw), [GHSA-587h-7wmj-h5pm](https://github.com/advisories/GHSA-587h-7wmj-h5pm), [GHSA-9jrq-w75r-8gcw](https://github.com/advisories/GHSA-9jrq-w75r-8gcw), [GHSA-rq7h-c2jc-7f22](https://github.com/advisories/GHSA-rq7h-c2jc-7f22) | 6.4.4 covers listed Vite fixes; no safe Vite 5 fix identified, major migration deferred | Development-server file/editor issues, especially Windows; static artifacts do not run the Vite development server. |

The same-major router maintenance update is allowed by this phase's major-version restriction in principle, but cannot begin before Task 1 clears. Vite 5 and its esbuild constraint require the separate reviewed Vite migration; the remaining moderate selector-parser finding needs a separately assessed parent/parser boundary. No override or forced audit fix was applied.

## D. Exact vulnerabilities remediated

**None.** Dependency modification was stopped before it began. There is no claimed security improvement, zero-vulnerability claim or withdrawal counted as remediation.

## E. Remaining findings

All initial findings remain: **11 affected entries (7 high / 3 moderate / 1 low; no critical)**, including **two high production entries**. There is no newly introduced dependency finding because package manifests and lockfiles were not changed. Reachability caveats above reduce some current exposure but do not resolve or dismiss the findings.

## F. Dependency and version changes

None. `package.json`, `package-lock.json`, installed dependency selections, Node `24.22.1`, npm `11.19.1`, .nvmrc and TypeScript/Playwright tooling are unchanged. No npm install/update/audit-fix command ran. The existing React 18.3.1, Vite 5.4.21, Tailwind 3.4.19, router 7.14.0 and Framer Motion 12.38.0 versions remain.

## G. Verification actually performed

| Check | Actual result |
| --- | --- |
| Local state/remotes/log/ancestry; requested fetch; GitHub PR metadata | Completed; known one-commit-per-side divergence explained, local main untouched |
| Backup checksums, recovered manifest and Git bundle | Pass: 49/49 file hashes and original history valid |
| Vercel newest production deployment/aliases/project domain | READY merge deployment confirmed on public production domain |
| Public production file SHA-256 comparison | Pass: 24/24 match recovered original build |
| Direct production URLs | **Fail:** root 200, all 13 non-root cases Vercel 404 |
| Public desktop/mobile Chromium client navigation and search | Pass: 2/2 diagnostic scenarios; no console/page errors, no submitted forms |
| Older immutable deployment's route comparison | Incomplete: login-protected, not evidence of a passing or failing old application route |
| Fresh complete / production-only audits | Completed; exit 1 due to the findings above |
| Clean dependency install | Not run: implementation gate failed before dependency edits |
| New local production build / typecheck / tooling unit suite / full Playwright suite | Not rerun in Phase 1B.1 after the gate failure; no post-remediation result exists |
| Existing Phase 1A test evidence | Historical only: build/typecheck passed, 7 tooling tests, 30 normal browser passes and 2 known gallery expected failures; not relabeled as this phase's fresh results |
| Git source/config/package/test diff | Unchanged from entry HEAD; no gallery or test assertion change |
| Git whitespace and final status | Report checked; only this new report is untracked, with an empty index |

The original production verification script intentionally failed on its first unexpected deep URL. A subsequent diagnostic inspected every route without treating client navigation or authentication redirects as substitutes for successful direct requests. Read-only production checks generated no deployment and did not submit contact information.

## H. Application behavior and bundle impact

No runtime/app/CSS behavior was modified. The merged public build remains the exact 24-file baseline. Client navigation continues working, but direct links and refreshes on non-root URLs cannot reach the app. Consequently the local Vite preview's passing SPA fallback tests were insufficient to prove Vercel production deep-link behavior. The known gallery pointer obstruction and simulated contact handling remain untouched, and the two gallery expected failures remain in the local test suite.

## I. Files changed and local evidence

Only `docs/vehicle-discovery/Phase-1/PHASE_1B1_SECURITY_REPORT.md` was added as a non-ignored file. Generated read-only diagnostic scripts and evidence are under ignored `output/playwright/phase-1b1/`: production asset/route results, full route diagnostics, client-navigation results, and both initial audit JSON files. None was staged. No existing source, documentation, dependency, tooling or hosting file was modified. Fetch updated Git's remote-tracking metadata as explicitly authorized.

## J. Local checkpoint

**No Phase 1B.1 branch or commit was created.** HEAD remains `c6d02aadfab149f75851f4a757e6f8ec00ca0ffc`; local main remains `05b0ac136b9075fab0b41a4b31307f54146471ea`. The requested safe checkpoint is conditional on passing verification, which has not happened. The report is left uncommitted for review. No remote PR, push, tag, deployment, service, migration or ingestion was created.

## K. Risks, rollback and resumption

No application/dependency rollback is necessary because no implementation change occurred. Preserve the current report and original recovery archives. Do not reset or force-update either development history or main.

The next decision is a separately authorized production-routing review/resolution, or an explicit owner revision of this phase's safety gate allowing local dependency work while the demonstrated deployment issue remains documented. A likely future fix is a reviewed SPA route fallback that preserves real assets and any reserved/future API behavior. That would modify deployment configuration and ultimately require a separately approved release; **it was not implemented under this phase's restrictions**. Recheck direct business/legal/detail URLs, legacy routes and refreshes on an authorized deployed candidate before declaring the gate passed. Restore access to the older immutable deployment only through an authorized read-only mechanism if proving the issue's history is necessary.

Once the gate is cleared, re-fetch/review remote state, preserve both known histories on a dedicated local stage branch, freeze the exact starting commit, refresh audits/metadata, implement compatible patches in small steps, and perform the complete clean-install/build/typecheck/tooling/browser/audit matrix. Major framework upgrades and any dependency override still require compatibility evidence and separate scope. No automatic rollback/deployment operation is proposed or authorized here.

## L. Recommended Phase 1B.2 scope

Phase 1B.2 remains **not authorized and not ready to start** while Phase 1B.1 is blocked. After this gate and the compatible dependency work are reviewed, propose one small incremental TypeScript change: explicit typed boundaries/pure helpers using local fixtures, with correct identity/null/unit/provenance semantics. Keep legacy JSX and business routes working, retain strict no-emit checking for new TS, add only tests needed by that concrete conversion, and avoid provider calls, data replacement, backend setup, framework upgrades or broad component rewrites. Record separate tests and rollback for that future change.

**Final decision: Phase 1B.1 NO-GO beyond read-only diagnosis until the deployment safety gate is resolved or explicitly revised. Stop for review.**
