# Proposal: align CI and deployment on Node.js 24 LTS

Status: **proposal only.** No workflow, `package.json`, or deployment setting has been changed. Prepared 2026-10-23 on branch `chore/node-24-alignment` (from `main` at `2216ecc`).

## Current state

| Where | Node.js | Notes |
|---|---|---|
| `.github/workflows/deploy.yml` (production build) | **20** | Past end of life (2026-04-30) |
| `.github/workflows/verify.yml` (pull-request checks) | **22** | Maintenance LTS |
| Local evidence for Phase 0 and Phase 1 | 22.23.3 | |
| `package.json` `engines` | not set | Next.js 16 requires ≥ 20.9.0 |

Pull requests are therefore verified on a different runtime than the one that builds production.

## Recommendation

Use **Node.js 24 LTS** for both workflows, with a single source of truth (`.nvmrc`).

- **Support window:** per the Node.js release schedule, Node 22 reaches end of life in April 2027 and Node 24 in April 2028. Confirm current dates at <https://nodejs.org/en/about/previous-releases> before merging.
- **Compatibility:** verified below. The static export is byte-identical on Node 22 and Node 24 for both the current `main` (Next 16.3.1) and the security branch (Next 16.4.2).
- **Not Node 26:** it isn't proposed now. It only just reached LTS, and nothing here needs it.

## Verification performed (local, Windows, portable Node binaries)

| Check | `main` @ Next 16.3.1 | `chore/security-next-16.4.2` @ 16.4.2 |
|---|---|---|
| `npm ci` on Node 24.22.0 / npm 11.19.1 | ok, lockfile untouched | ok, lockfile untouched |
| `npm run lint` on Node 24 | pass | pass |
| `npm run build` on Node 24 (static export and postbuild privacy copies) | pass | pass |
| Export Node 22 vs Node 24, build ID normalised | **0 of 60 files differ** | **0 of 60 files differ** |
| Control: two Node 24 builds | 0 of 60 differ | — |
| `scripts/verify/routes.mjs` against the Node 24 build | 12/12 | 12/12 |
| `scripts/verify/home-functional.mjs` against the Node 24 build (anchors, filters, terminal, theme, mobile menu, privacy pages) | 22/22 | 22/22 |

The verification scripts live on `feat/immersive-portfolio`. They were run against these checkouts with `VERIFY_ROOT`.

**Not verified:**
- **Node 20,** which is what `deploy.yml` uses today. It wasn't available locally, so the production artifact hasn't been compared against Node 20. The step-4 artifact comparison below covers that in CI.
- **Linux runners.** The only check was on Windows. The GitHub runner is `ubuntu-latest`, so the PR's own CI run is the Linux confirmation.

## Differences to expect with npm 11 (bundled with Node 24)

1. **Install scripts.** `npm ci` prints a warning that `unrs-resolver@1.12.2` (postinstall) isn't yet covered by `allowScripts`. Its platform binding is still installed through optional dependencies, and lint, which uses it through `eslint-config-next`, passed. Decide whether to approve the script (`npm install-scripts approve unrs-resolver`, recorded in the project config) or accept the warning. Either way, `npm ci` must keep passing.
2. **Optional WebAssembly packages.** npm 11 skipped `@emnapi/runtime` and `@img/sharp-wasm32`, the WebAssembly fallbacks of `sharp`. They aren't needed on native platforms, and `sharp` isn't used by this static export (`images.unoptimized: true`).
3. **Package count.** 344 packages instead of 346, for the reason in item 2. The build output is unaffected (see above).

## Proposed change (not applied)

```diff
--- /dev/null
+++ b/.nvmrc
+24
```

```diff
--- a/.github/workflows/verify.yml
+++ b/.github/workflows/verify.yml
       - name: Set up Node.js
         uses: actions/setup-node@v4
         with:
-          node-version: "22"
+          node-version-file: .nvmrc
           cache: npm
```

```diff
--- a/.github/workflows/deploy.yml
+++ b/.github/workflows/deploy.yml
       - name: Setup Node
         uses: actions/setup-node@v4
         with:
-          node-version: "20"
+          node-version-file: .nvmrc
           cache: ${{ steps.detect-package-manager.outputs.manager }}
```

**Optional:** add `"engines": { "node": ">=24 <25" }` to `package.json`, so local installs on another major version get a warning. Skip it if contributors routinely use other versions.

## Safe rollout

1. **Order.** Land the security upgrade first (`chore/security-next-16.4.2`) or this change first; both orders were verified. Keep them as separate PRs.
2. **Open a PR with only the three changes above.** `verify.yml` runs on the PR with Node 24 on Linux: `npm ci`, lint, build.
3. **Confirm the production build on the new version before merging.**
   - **Don't** run `deploy.yml` from the branch. It has `workflow_dispatch`, and a manual run would publish that branch to Pages.
   - Instead, add a temporary step to the PR's `verify.yml` job that uploads `out/` as a workflow artifact.
   - Compare it with the artifact of the last production deployment: the same file list, both privacy `.html` copies, and `app-ads.txt` present. The custom domain lives in the Pages settings, so `CNAME` isn't expected inside `out/`.
   - Remove the temporary step before merging.
4. **Merge, then watch the first deployment.** After it, request the production URLs: `/`, `/privacy/expenze/`, `/privacy/expenze.html`, `/privacy/qrcodescanner/`, `/privacy/qrcodescanner.html`, `/app-ads.txt` and `/vicons/`.
5. **Rollback** is a single revert of the PR. No data or settings are involved.

## Out of scope

- The JavaScript-action runtime of `actions/checkout`, `actions/setup-node`, `actions/configure-pages` and related actions. GitHub manages that separately from the Node version used to build the site. Check whether newer major versions of these actions are available while touching the workflows, but treat any bump as its own reviewed change.
