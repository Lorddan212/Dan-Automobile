# DanAuto Phase 1B.1-S local dependency security remediation

**Status: compatible local remediation PASS; owner review pending. Production release remains NO-GO.**

Assessment date: **2026-10-24 Africa/Lagos**. The owner's Phase 1B.1-S request explicitly authorizes local dependency work independently of the unresolved hosting gate. This supersedes the earlier local-work pause for this scope only. No deployment, hosting change, provider integration, database operation or Phase 1B.2 work occurred. **No Git staging, commit, branch switch, merge, push, PR or tag operation was performed.**

The earlier security assessment is preserved verbatim below as historical evidence, not the current decision. Its original file and the unchanged preview report were also copied into ignored local recovery evidence before editing.

## A. Starting Git branch, HEAD and preservation

| Item | Verified value |
| --- | --- |
| Current branch | `modernization/phase-1b1-routing` |
| Starting and final HEAD | `01cc01139dd5c8d586e85880e5bf7f9b1ae5f3a7` |
| Local main | `05b0ac136b9075fab0b41a4b31307f54146471ea`, unchanged |
| Phase 1A closeout | `c6d02aadfab149f75851f4a757e6f8ec00ca0ffc`, preserved in history and on its foundation branch |
| Baseline tag | `danauto-app-baseline-2026-10-23`, still points to original application commit |
| Known local origin/main | `caa06557511bbdb28f59d2eb3d1ab4f17e6c76fa`; HEAD is three commits ahead, zero behind this reference |
| Entry status | Empty index, no tracked changes, one legitimate untracked preview report |
| Final index | Empty; owner controls all staging and commits |

The comparison uses the known local remote-tracking references; no fetch or remote-reference update was needed. Original recovery bundle and ZIP under `C:\Users\HP\Desktop\DanAuto-Recovery\phase-1a-20261023` retain their recorded SHA-256 hashes, and `git bundle verify` again confirms complete original history. Neither backup was overwritten. The prior reports and pre-change package files were copied to `output/playwright/phase-1b1-security/before/` before dependency changes.

Preserved preview report SHA-256: `F6CEC0BD14CD0D4921D8D4D7BEE618738E9FA07C654D1F786785E391DBEBCDA6`. The old security assessment SHA-256 was `4D4D96C345DEC2C3229D6625CF42F3F5F17522362673698C257603F19BB741A8`; the exact original text remains the suffix of this file and is recoverable from HEAD as well as the local snapshot.

## B. Original and final vulnerability counts

Fresh complete-tree and production-only audits were run before and after changes. The original `05b0ac1` manifest/lockfile was separately audited without installing it: it has the same initial 11 affected package entries and 32 active advisory IDs. All initial findings therefore predate Phase 1A; the added test/TypeScript foundation did not introduce them.

| Audit | Before package entries | After package entries | Before unique advisories | After unique advisories | Final exit |
| --- | --- | --- | --- | --- | --- |
| Full, including development | 11: 7 high / 3 moderate / 1 low | **5: 1 high / 4 moderate / 0 low** | 32 | **10** | 1: known findings remain |
| Production only | 2 high | **0** | 9 | **0** | 0 |

No critical finding before or after. **22 unique active advisories were addressed; no new unique advisory appeared.** Package counts include propagated parent entries and are not advisory counts. The post-remediation moderate count includes unchanged `postcss-nested` and `tailwindcss` parents now reported through the existing parser advisory; it does not represent two new advisories or changed Tailwind code. Before/after JSON evidence retains the exact npm classifications.

All 33 requested GitHub advisory records (32 active plus the known withdrawal) were freshly retrieved from the official [GitHub advisory API](https://docs.github.com/en/rest/security-advisories/global-advisories#get-a-global-security-advisory). Current package versions, engines and parent/peer requirements were checked against the official npm registry. `GHSA-vfj7-8cjw-p6xm` is confirmed withdrawn at `2026-10-23T12:53:02Z`; it is excluded from both initial and final active counts and **not counted as a package patch**.

## C. Exact packages, dependency paths and advisories

| Package | Dependency relationship and exposure | Dependency path | Current context |
| --- | --- | --- | --- |
| react-router-dom | Direct, production; inherited router findings | app -> react-router-dom | BrowserRouter application; no framework/RSC server |
| react-router | Transitive, production | app -> react-router-dom -> react-router | Client navigation is relevant; many listed server/RSC conditions are absent |
| postcss | Direct, development/build | app -> postcss; shared by Vite/Tailwind | Compiles repository CSS; no public CSS processor |
| @babel/core | Transitive, development/build | app -> @vitejs/plugin-react -> @babel/core | Compiles repository source; no visitor-controlled compiler input |
| browserslist | Transitive, development/build | app -> autoprefixer/Babel -> browserslist | Build-time browser queries/statistics |
| baseline-browser-mapping | Transitive, development/build | app -> browserslist -> baseline-browser-mapping | Invalid build input can terminate Node |
| nanoid | Transitive, development/build | app -> postcss -> nanoid | No application session/token generation observed |
| source-map-js | Transitive, development/build | app -> postcss -> source-map-js | Source-map processing rather than public request handling |
| postcss-selector-parser | Transitive, development/build | app -> tailwindcss -> parser; also postcss-nested -> parser | Selector processing during CSS compilation |
| vite | Direct, development/build | app -> vite | Windows dev/editor/file-serving issues remain relevant locally |
| esbuild | Transitive, development/build | app -> vite -> esbuild | Advisory targets esbuild's serve API, not emitted static files |

Reachability distinctions do not dismiss inventory findings. The React Router patch removes the nine affected router advisories without introducing SSR, RSC, loaders or a backend. Source-map/file-disclosure and build-parser fixes reduce developer/build risk even though the application does not expose those processors to visitors.

The following ledger lists every original active advisory, its individual severity, installed-version change and official first-fixed version matching the original affected branch. The react-router-dom parent inherits router findings; it is not nine additional independent advisories. **Every row also existed in the separately audited original baseline.**

| Package | Before -> after | Severity | Advisory | First fixed version | Result |
| --- | --- | --- | --- | --- | --- |
| @babel/core | 7.29.0 -> 7.29.7 | low | [GHSA-4x5r-pxfx-6jf8](https://github.com/advisories/GHSA-4x5r-pxfx-6jf8) | 7.29.6 | Addressed |
| baseline-browser-mapping | 2.10.16 -> 2.11.32 | moderate | [GHSA-w5vr-8v7q-w6rv](https://github.com/advisories/GHSA-w5vr-8v7q-w6rv) | 2.11.0 | Addressed |
| browserslist | 4.28.2 -> 4.29.4 | high | [GHSA-c83g-rgw3-j3cx](https://github.com/advisories/GHSA-c83g-rgw3-j3cx) | 4.28.7 | Addressed |
| browserslist | 4.28.2 -> 4.29.4 | high | [GHSA-73wf-gq98-2v4g](https://github.com/advisories/GHSA-73wf-gq98-2v4g) | 4.28.7 | Addressed |
| esbuild | 0.21.5 -> 0.21.5 | moderate | [GHSA-67mh-4wv8-2f99](https://github.com/advisories/GHSA-67mh-4wv8-2f99) | 0.25.0 | Remains |
| nanoid | 3.3.11 -> 3.3.20 | high | [GHSA-28wg-ghj8-5hjv](https://github.com/advisories/GHSA-28wg-ghj8-5hjv) | 3.3.16 | Addressed |
| nanoid | 3.3.11 -> 3.3.20 | high | [GHSA-2v37-7h3g-55p8](https://github.com/advisories/GHSA-2v37-7h3g-55p8) | 3.3.18 | Addressed |
| nanoid | 3.3.11 -> 3.3.20 | high | [GHSA-xwg4-73v4-xw9w](https://github.com/advisories/GHSA-xwg4-73v4-xw9w) | 3.3.12 | Addressed |
| postcss | 8.5.8 -> 8.5.31 | moderate | [GHSA-qx2v-qp2m-jg93](https://github.com/advisories/GHSA-qx2v-qp2m-jg93) | 8.5.10 | Addressed |
| postcss | 8.5.8 -> 8.5.31 | high | [GHSA-6g55-p6wh-862q](https://github.com/advisories/GHSA-6g55-p6wh-862q) | 8.5.12 | Addressed |
| postcss | 8.5.8 -> 8.5.31 | moderate | [GHSA-fxqj-rqcc-2cmp](https://github.com/advisories/GHSA-fxqj-rqcc-2cmp) | 8.5.23 | Addressed |
| postcss | 8.5.8 -> 8.5.31 | high | [GHSA-r28c-9q8g-f849](https://github.com/advisories/GHSA-r28c-9q8g-f849) | 8.5.18 | Addressed |
| postcss-selector-parser | 6.1.2 -> 6.1.5 | low | [GHSA-w9m9-85wc-3x92](https://github.com/advisories/GHSA-w9m9-85wc-3x92) | 6.1.3 | Addressed |
| postcss-selector-parser | 6.1.2 -> 6.1.5 | moderate | [GHSA-rj75-hqrm-r3gf](https://github.com/advisories/GHSA-rj75-hqrm-r3gf) | 7.1.6 | Remains |
| react-router | 7.14.0 -> 7.18.4 | high | [GHSA-49rj-9fvp-4h2h](https://github.com/advisories/GHSA-49rj-9fvp-4h2h) | 7.14.2 | Addressed |
| react-router | 7.14.0 -> 7.18.4 | high | [GHSA-8x6r-g9mw-2r78](https://github.com/advisories/GHSA-8x6r-g9mw-2r78) | 7.15.0 | Addressed |
| react-router | 7.14.0 -> 7.18.4 | low | [GHSA-84g9-w2xq-vcv6](https://github.com/advisories/GHSA-84g9-w2xq-vcv6) | 7.15.1 | Addressed |
| react-router | 7.14.0 -> 7.18.4 | moderate | [GHSA-wrjc-x8rr-h8h6](https://github.com/advisories/GHSA-wrjc-x8rr-h8h6) | 7.18.0 | Addressed |
| react-router | 7.14.0 -> 7.18.4 | moderate | [GHSA-h8fp-f39c-q6mh](https://github.com/advisories/GHSA-h8fp-f39c-q6mh) | 7.18.0 | Addressed |
| react-router | 7.14.0 -> 7.18.4 | moderate | [GHSA-337j-9hxr-rhxg](https://github.com/advisories/GHSA-337j-9hxr-rhxg) | 7.18.0 | Addressed |
| react-router | 7.14.0 -> 7.18.4 | high | [GHSA-chx6-hx7r-mcp5](https://github.com/advisories/GHSA-chx6-hx7r-mcp5) | 7.18.0 | Addressed |
| react-router | 7.14.0 -> 7.18.4 | moderate | [GHSA-2j2x-hqr9-3h42](https://github.com/advisories/GHSA-2j2x-hqr9-3h42) | 7.14.1 | Addressed |
| react-router | 7.14.0 -> 7.18.4 | high | [GHSA-qwww-vcr4-c8h2](https://github.com/advisories/GHSA-qwww-vcr4-c8h2) | 7.18.2 | Addressed |
| source-map-js | 1.2.1 -> 1.2.2 | high | [GHSA-68fv-2mgg-jv7q](https://github.com/advisories/GHSA-68fv-2mgg-jv7q) | 1.2.2 | Addressed |
| vite | 5.4.21 -> 5.4.21 | moderate | [GHSA-4w7w-66w2-5vf9](https://github.com/advisories/GHSA-4w7w-66w2-5vf9) | 6.4.2 | Remains |
| vite | 5.4.21 -> 5.4.21 | moderate | [GHSA-v6wh-96g9-6wx3](https://github.com/advisories/GHSA-v6wh-96g9-6wx3) | 6.4.3 | Remains |
| vite | 5.4.21 -> 5.4.21 | high | [GHSA-fx2h-pf6j-xcff](https://github.com/advisories/GHSA-fx2h-pf6j-xcff) | 6.4.3 | Remains |
| vite | 5.4.21 -> 5.4.21 | moderate | [GHSA-698v-4r3x-3vcv](https://github.com/advisories/GHSA-698v-4r3x-3vcv) | 6.4.4 | Remains |
| vite | 5.4.21 -> 5.4.21 | moderate | [GHSA-r825-w8mm-5pxw](https://github.com/advisories/GHSA-r825-w8mm-5pxw) | 6.4.4 | Remains |
| vite | 5.4.21 -> 5.4.21 | high | [GHSA-587h-7wmj-h5pm](https://github.com/advisories/GHSA-587h-7wmj-h5pm) | 6.4.4 | Remains |
| vite | 5.4.21 -> 5.4.21 | low | [GHSA-9jrq-w75r-8gcw](https://github.com/advisories/GHSA-9jrq-w75r-8gcw) | 6.4.4 | Remains |
| vite | 5.4.21 -> 5.4.21 | moderate | [GHSA-rq7h-c2jc-7f22](https://github.com/advisories/GHSA-rq7h-c2jc-7f22) | 6.4.4 | Remains |

## D. Dependency versions changed

Only two manifest floors change: `react-router-dom` from `^7.14.0` to `^7.18.4`, and development `postcss` from `^8.5.8` to `^8.5.31`. Node `24.22.1`, npm `11.19.1`, packageManager, engine range, all scripts and exact test/TypeScript pins are unchanged. React/React DOM stay 18.3.1, Vite 5.4.21, Tailwind 3.4.19, Framer Motion 12.38.0 and @vitejs/plugin-react 4.7.0.

The lockfile records **29 version updates**, with no package paths added/removed, no major version changes, no overrides, and no newly introduced install scripts. Supporting Babel patch packages and browser-data updates follow the targeted packages' normal dependency ranges; set-cookie-parser is a compatible router dependency refresh, not a separately claimed advisory fix. All changed packages' declared Node engines accept Node 24.22.1; the complete installed tree is valid.

| Locked package | Before | After |
| --- | --- | --- |
| @babel/code-frame | 7.29.0 | 7.29.7 |
| @babel/compat-data | 7.29.0 | 7.29.7 |
| @babel/core | 7.29.0 | 7.29.7 |
| @babel/generator | 7.29.1 | 7.29.8 |
| @babel/helper-compilation-targets | 7.28.6 | 7.29.7 |
| @babel/helper-globals | 7.28.0 | 7.29.7 |
| @babel/helper-module-imports | 7.28.6 | 7.29.7 |
| @babel/helper-module-transforms | 7.28.6 | 7.29.7 |
| @babel/helper-string-parser | 7.27.1 | 7.29.11 |
| @babel/helper-validator-identifier | 7.28.5 | 7.29.7 |
| @babel/helper-validator-option | 7.27.1 | 7.29.7 |
| @babel/helpers | 7.29.2 | 7.29.10 |
| @babel/parser | 7.29.2 | 7.29.11 |
| @babel/template | 7.28.6 | 7.29.7 |
| @babel/traverse | 7.29.0 | 7.29.10 |
| @babel/types | 7.29.0 | 7.29.11 |
| baseline-browser-mapping | 2.10.16 | 2.11.32 |
| browserslist | 4.28.2 | 4.29.4 |
| caniuse-lite | 1.0.30001786 | 1.0.30001819 |
| electron-to-chromium | 1.5.332 | 1.5.464 |
| nanoid | 3.3.11 | 3.3.20 |
| node-releases | 2.0.37 | 2.0.60 |
| postcss | 8.5.8 | 8.5.31 |
| postcss-selector-parser | 6.1.2 | 6.1.5 |
| react-router | 7.14.0 | 7.18.4 |
| react-router-dom | 7.14.0 | 7.18.4 |
| set-cookie-parser | 2.7.2 | 2.7.3 |
| source-map-js | 1.2.1 | 1.2.2 |
| update-browserslist-db | 1.2.3 | 1.3.4 |

Changes were separated into two steps:

1. Router-only installation, strict typecheck, production build, six focused desktop/mobile query/slash/legacy/wildcard tests, and intermediate full/production audits. All checks passed; production findings fell to zero before build-tool edits.
2. PostCSS patch and targeted compatible updates to Babel, Browserslist/mapping, nanoid, source-map-js and selector-parser. A clean lockfile install and full verification followed.

No forced audit fix or dependency override was used. No package was added merely to pin a transitive version. The fresh registry metadata showed 5.4.21 and 3.4.19 as the highest compatible Vite 5 and Tailwind 3 versions respectively, so neither was changed.

## E. Remaining vulnerabilities

| Installed package entry | Severity | Remaining finding / relationship | Why retained |
| --- | --- | --- | --- |
| vite 5.4.21 | High | Eight direct Vite advisories listed in C, plus esbuild propagation | No compatible Vite 5 patch; major toolchain migration excluded |
| esbuild 0.21.5 | Moderate | GHSA-67mh-4wv8-2f99 | First fixed 0.25.0 falls outside Vite 5's ^0.21.3 constraint |
| postcss-selector-parser 6.1.5 | Moderate | GHSA-rj75-hqrm-r3gf | First fixed 7.1.6 is outside Tailwind 3/postcss-nested 6 parser ranges |
| postcss-nested 6.2.0 | Moderate | Propagated existing parser finding | Parent requires parser ^6.1.1; no independent advisory added |
| tailwindcss 3.4.19 | Moderate | Propagated existing parser/nested finding | Parent requires parser ^6.1.2 and nested ^6.2.0; no independent advisory added |

Total: **5 affected package entries, 10 unique active advisories, 1 high / 4 moderate / 0 low / 0 critical**, all development/build scope. Full audit intentionally remains exit 1. Production-only audit is zero for the current tree; that is not a blanket application security certification or a deployed improvement.

## F. Future major-upgrade requirements

Vite's listed first-fixed branches reach at least **6.4.4** for the complete known set; current npm remediation points to Vite 8.3.5. These are advisory thresholds/candidates, not an authorization or recommendation to blindly select an older major. Plan a separate, supported Vite/plugin migration with Node compatibility and the same regression gates. Reassess esbuild alongside its owning Vite version; do not force 0.25 into Vite 5.

The remaining parser CPU-exhaustion issue requires parser **7.1.6+**. Tailwind 3 and postcss-nested 6 constrain parser 6.x. A separate parent/parser migration review is needed; npm proposes Tailwind 4.3.3. The 6.1.5 patch fixes the low recursion advisory, not the remaining moderate advisory. No unsupported parser override was used. Keep Vite and Tailwind major migrations separate from each other and from React/routing major changes.

## G. Full verification results

Commands used the existing portable Node 24.22.1/npm 11.19.1 on PATH; no global runtime/package installation. The inherited NODE_ENV is production, so `--include=dev` is required for full audits and reproducible test-tool installation.

| Check | Actual result |
| --- | --- |
| `npm ci --include=dev --ignore-scripts --no-audit --no-fund --cache "$env:TEMP/danauto-npm-cache"` | Exit 0; 150 installed packages; approximately four minutes; lockfile checksum unchanged |
| `npm ls --all --include=dev --json` | Exit 0; complete installed dependency tree valid |
| `npm run typecheck` | Exit 0 after clean install |
| `npm run test:tooling` | Exit 0; all **7** reporter tests pass |
| `npm run build` within `npm run test:e2e` | Exit 0; 2,164 modules, 24 output files |
| Full `npm run test:e2e` | Exit 0; **36 normal passes + 2 expected gallery failures** |
| Routing-specific tests within full suite | **6/6 pass**, desktop/mobile query/refresh/slash/assets cases |
| Initial router-only focused route run | **6/6 pass**, including existing legacy/wildcard behavior |
| `npm audit --include=dev --json` | Exit 1; 5 known affected development package entries / 10 unique advisories |
| `npm audit --omit=dev --json` | Exit 0; zero findings |
| Git diff / whitespace / unstaged scope checks | Pass; source, routing, tests and runtime/tooling config unchanged; empty index |

Full browser run began 2026-10-23T23:43:13.979Z (2026-10-24T00:43:13.979+01:00 Lagos). Duration 3.89 minutes. Zero unexpected results, skips, flaky results or runner errors.

The gallery reporter remains unchanged. Each of the two expected failures contains exactly one error matching the recorded `car-details-gallery-copy` pointer obstruction; no teardown/browser error is hidden. No assertion was weakened or skipped. The suite covers business/legal routes and refresh, 166-card catalog/search/filter behavior, valid/invalid vehicle IDs, usable gallery controls, legacy redirects/wildcard behavior, desktop/mobile menus, and simulated contact validation/success with no delivery request.

Browser fixtures replace external images/stylesheets and reject other external traffic. These results establish local Chromium behavior and emulated mobile coverage, not real image delivery, pixel parity, physical mobile devices, deployed routing or live provider/database integrations. A harmless NO_COLOR/FORCE_COLOR warning remains; the old browser-data warning did not recur after the compatible browser-data refresh.

## H. Application behavior and bundle impact

No application source, design, content, catalog, route declaration or form behavior changed. The accepted regression outcomes are preserved. Dependency bytes and content hashes are expected to change with the router update; the previous 24-file byte-identity claim does not apply to this new build.

| Artifact metric | Original baseline | Updated build |
| --- | --- | --- |
| File count | 24 | 24 |
| Total raw bytes | 553324 | 554616 |
| Total separately gzipped bytes | 157927 | 158540 |
| Entry JavaScript | index-C1CJmp3_.js | index-By9vPxOh.js |
| Entry raw bytes | 325683 | 326975 |
| Entry gzip bytes | 106403 | 107011 |
| CSS bytes | 103634 | 103634 |

CSS, public favicon and generated catalog-data chunk remain byte-identical to the recovered baseline. The entry JavaScript grows by **1,292 raw bytes / 608 gzip bytes**. File count stays 24; aggregate emitted bytes grow by 1,292. Changed shared runtime references also change several chunk hashes. No runtime dependency was added and no framework major was upgraded. The build output remains ignored and was not deployed.

## I. Routing and hosting issues left unresolved

Root `vercel.json` is byte-for-byte unchanged from the reviewed 01cc011 correction. Its broad SPA catch-all may serve HTML for missing assets and missing API paths; reserved namespaces still require platform-specific verification. Local Vite fallback passes do not validate Vercel's edge routing.

The prior preview assessment records production's 13 direct-route 404s and the owner's confirmed Hobby commercial-use blocker. Neither was resolved or freshly rechecked through a deployment in this local task. The existing preview report remains unchanged. Defer hosting, domains, protection, routing-boundary correction and any Cloudflare/alternative preview to separate authorization. No production settings, environment variables or remote Git refs were changed, and no provider was contacted or dataset ingested.

## J. Exact file changes and owner Git handoff

Modified tracked files:

- `package.json`: two compatible dependency floors.
- `package-lock.json`: the corresponding 29 resolved version updates and normal dependency metadata.
- `docs/vehicle-discovery/Phase-1/PHASE_1B1_SECURITY_REPORT.md`: this current assessment plus the verbatim historical assessment.

Preserved untracked file from before this task: `docs/vehicle-discovery/Phase-1/PHASE_1B1_PREVIEW_VERIFICATION.md`, unchanged by checksum. No non-ignored file was removed or newly added by this task. No source/test/configuration file was modified. Ignored scripts, snapshots, official advisory/package metadata, audits, full dependency trees, version ledger, intermediate/final browser results and build-size evidence are under `output/playwright/phase-1b1-security/`.

Proposed Conventional Commit subject:

```text
fix(deps): patch compatible dependency vulnerabilities
```

Optional body:

```text
Update React Router within v7 and apply compatible build-tool patches.
Address 22 active advisories; production audit now reports zero findings.
Document remaining Vite/esbuild/parser risks and preserve prior evidence.
Verify clean install, build, typecheck, seven tooling tests, and the
36-pass/two-expected-failure browser baseline without changing app code.
```

Owner-only commands after reviewing the changes (not executed by Codex):

```powershell
git status --short --branch
git diff --check
git diff -- package.json package-lock.json docs/vehicle-discovery/Phase-1/PHASE_1B1_SECURITY_REPORT.md
git add -- package.json package-lock.json docs/vehicle-discovery/Phase-1/PHASE_1B1_SECURITY_REPORT.md
git diff --cached --check
git diff --cached --stat
git commit -m "fix(deps): patch compatible dependency vulnerabilities"
git status --short
```

These commands include only the three security-task files. The unchanged preview report remains untracked unless the owner separately chooses to include it. No push, PR, merge or release command is proposed as part of this handoff.

## K. Recommended next development phase

First review and checkpoint this local security work. Then separately authorize either the narrowly scoped routing-boundary/eligible hosting preparation or the remaining Vite maintenance migration, with independent rollback/testing. Any Tailwind/parser major migration is a separate task. Phase 1B.2 incremental TypeScript work can be proposed after review; it is not started or implicitly authorized. Keep provider ingestion/publication, database setup and production release gated independently.

## L. Rollback instructions

Owner-controlled rollback, if required before committing: first preserve/review these local edits, then restore only `package.json` and `package-lock.json` from 01cc011 (or their verified `before/` snapshots) and run the same clean-install/test commands with the documented runtime. Leave the preview report and historical security evidence intact. Do not reset the repository or overwrite unrelated work. If later committed, use a reviewed revert of that security commit on a development branch rather than resetting history. Rollback reintroduces the addressed vulnerabilities, so it is a compatibility recovery option, not the preferred security state. No production rollback is needed because nothing was deployed.

## M. Final readiness assessment

**GO for owner review of the local compatible security changes.** All required local stability checks pass, audited production findings are zero, and 22 active advisories were addressed without a major upgrade. Residual development findings are explicit and the full audit remains nonzero.

**NO-GO for production release or a claim that deployment routing is fixed.** Hosting eligibility, missing-asset/API routing boundaries and deployed verification remain unresolved. No files are staged or committed. Stop for owner review; no Phase 1B.2 implementation begins.

---

# Historical assessment preserved from before Phase 1B.1-S

The following assessment described the earlier blocked stage. Its local-work gate is superseded by the explicit Phase 1B.1-S authorization above; its historical evidence is retained unchanged.

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
