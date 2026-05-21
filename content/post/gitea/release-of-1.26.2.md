---
date: 2026-05-20T10:29:00+02:00
authors:
  - "bircni"
  - "lunny"
title: "Gitea 1.26.2 is released"
tags: ["release"]
draft: false
coverImageRelease: 1.26.2
---

We are excited to announce the release of **Gitea 1.26.2**! We strongly recommend all users upgrade to this version, as it contains a number of security fixes alongside important bug fixes and stability improvements.

  * CVE-2026-27783: fix(permissions): Fix reading permission ([#37769](https://github.com/go-gitea/gitea/pull/37769)) ([#37781](https://github.com/go-gitea/gitea/pull/37781)). Thanks to @hoangperry for the report, and thanks to @lunny for the fix.
  * fix(actions): make artifact signature payloads unambiguous (#37707) Thanks to @lunny for the fix.
  * CVE-2026-25714: fix: Unify public-only token filtering in API queries and repo access checks (#37118) Thanks to Medoedus for the report. Thanks to @lunny for the fix.
  * CVE-2026-20706: fix: Add missed token scope checking (#37735) Thanks to geoo115 for the report. Thanks to @lunny for the fix.
  * fix(oauth): bind token exchanges to the original client request (#37704) Thanks to @lunny for the fix.
  * fix(oauth): strengthen PKCE validation and refresh token replay protection (#37706) Thanks to @lunny for the fix.
  * fix(web): enforce token scopes on raw, media, and attachment downloads (#37698) Thanks to @lunny for the fix.
  * fix(security): enforce wiki git writes and LFS token access at request time (#37695) Thanks to @lunny for the fix.
  * feat(api): encrypt AWS creds (#37679) Thanks to @Exgene for the report and the fix.
  * CVE-2026-27771: fix(packages): Add label for private and internal package and fix composor package source permission check (#37610) Thanks to [NoScope](https://noscope.com) for the report. Thanks to @lunny for the fix.
  * CVE-2026-28744: fix(git): Fix smart http request scope bug (#37583) Thanks to ohxorud-dev for the report. Thanks to @lunny for the fix.
  * CVE-2026-28699: Fix basic auth bug (#37503) Thanks to Wesley Colquitt / ByteShyftStudios LLC / [@Alardiians](https://github.com/Alardiians) for the report. Thanks to @lunny for the fix.
  * CVE-2026-26231: Fix allow maintainer edit permission check (#37479) (#37484) Thanks to Arvin Shivram of Brutecat Security for the report. Thanks to @lunny for the fix.
  * Fix URL sanitization to handle schemeless credentials (#37440) (#37471) Thanks @bircni for the fix.
  * chore(deps): bump go-git/go-git/v5 to 5.19.0 (#37608)
  * fix(deps): update dependency mermaid to v11.15.0 [security], add e2e test

This release includes [54 merged pull requests](https://github.com/go-gitea/gitea/pulls?q=is%3Apr+milestone%3A1.26.2+is%3Amerged), thanks to the amazing contributions from our community.

## How to install or update

Download our pre-built binaries from the [Gitea downloads page](https://dl.gitea.com/gitea/1.26.2/) — make sure to select the version compatible with your platform. For a step-by-step guide on installation or upgrades, check out our [installation documentation](https://docs.gitea.com/category/installation)

## Special Thanks

We would also like to thank all of our supporters on [Open Collective](https://opencollective.com/gitea) who are helping to sustain us financially.

---

Looking for a seamless, hassle-free solution to manage your Git repositories?
Discover [Gitea Cloud](https://cloud.gitea.com) — A fully-managed, scalable platform designed to streamline your development workflow.

<!--more-->

## Changelog

## [1.26.2](https://github.com/go-gitea/gitea/releases/tag/v1.26.2) - 2026-05-20

* SECURITY
  * Actions
    * Make artifact signature payloads unambiguous ([#37795](https://github.com/go-gitea/gitea/pull/37795))
  * Access
    * Enforce wiki git writes and LFS token access at request time ([#37714](https://github.com/go-gitea/gitea/pull/37714))
  * API
    * Unify public-only token filtering in API queries and repo access checks ([#37773](https://github.com/go-gitea/gitea/pull/37773))
    * Encrypt AWS credentials ([#37713](https://github.com/go-gitea/gitea/pull/37713))
  * Auth
    * Add missed token scope checking ([#37757](https://github.com/go-gitea/gitea/pull/37757))
    * Fix basic auth bug ([#37503](https://github.com/go-gitea/gitea/pull/37503))
  * Branch
    * Fix update branch protection order ([#37513](https://github.com/go-gitea/gitea/pull/37513))
  * Dependencies
    * Update dependency mermaid to v11.15.0 [security] ([#37665](https://github.com/go-gitea/gitea/pull/37665))
    * Bump go-git/go-git/v5 to 5.19.0 ([#37609](https://github.com/go-gitea/gitea/pull/37609))
  * Git
    * Fix smart http request scope bug ([#37605](https://github.com/go-gitea/gitea/pull/37605))
  * OAuth
    * Bind token exchanges to the original client request ([#37740](https://github.com/go-gitea/gitea/pull/37740))
    * Strengthen PKCE validation and refresh token replay protection ([#37738](https://github.com/go-gitea/gitea/pull/37738))
  * Packages
    * Add label for private and internal packages and fix composer package source permission check ([#37643](https://github.com/go-gitea/gitea/pull/37643))
  * Repo
    * Fix allow maintainer edit permission check ([#37484](https://github.com/go-gitea/gitea/pull/37484))
  * Web
    * Enforce token scopes on raw, media, and attachment downloads ([#37733](https://github.com/go-gitea/gitea/pull/37733))
    * Fix URL sanitization to handle schemeless credentials ([#37471](https://github.com/go-gitea/gitea/pull/37471))
    * Fix attachment Content-Security-Policy ([#37464](https://github.com/go-gitea/gitea/pull/37464))

* BUGFIXES
  * Actions
    * Fix wrong assumption that run id always >= job id ([#37742](https://github.com/go-gitea/gitea/pull/37742))
    * Fix deadlock between `PrepareRunAndInsert` and `UpdateTaskByState` ([#37718](https://github.com/go-gitea/gitea/pull/37718))
    * Run `TransferLogs` on `UpdateLog{Rows:[], NoMore:true}` ([#37687](https://github.com/go-gitea/gitea/pull/37687))
    * Fix blank lines after `::endgroup::` ([#37612](https://github.com/go-gitea/gitea/pull/37612))
    * Report individual step status in workflow job API response ([#37598](https://github.com/go-gitea/gitea/pull/37598))
    * Prevent panic when workflow contains null jobs ([#37576](https://github.com/go-gitea/gitea/pull/37576))
    * Validate workflow param to prevent 500 error ([#37554](https://github.com/go-gitea/gitea/pull/37554))
    * Don't unblock run-level-concurrency-blocked runs in the resolver ([#37538](https://github.com/go-gitea/gitea/pull/37538))
    * Fix scheduled action panic with null event payload ([#37466](https://github.com/go-gitea/gitea/pull/37466))
  * API
    * Fix invalid UTF-8 commit messages in JSON API responses ([#37585](https://github.com/go-gitea/gitea/pull/37585))
    * Return 409 message instead of empty JSON for wrong commit id ([#37584](https://github.com/go-gitea/gitea/pull/37584))
  * Auth
    * Set User-Agent on avatar fetch and sync avatar on link-account register ([#37726](https://github.com/go-gitea/gitea/pull/37726))
    * Treat email addresses case-insensitively ([#37611](https://github.com/go-gitea/gitea/pull/37611))
  * Branch
    * Allow direct commits for unprotected files with push restrictions ([#37756](https://github.com/go-gitea/gitea/pull/37756))
  * Build
    * Fix snap build (1.26) ([#37686](https://github.com/go-gitea/gitea/pull/37686))
  * CLI
    * Fix "run as root" check ([#37625](https://github.com/go-gitea/gitea/pull/37625))
  * Dependencies
    * Update dependency go to v1.26.3 ([#37613](https://github.com/go-gitea/gitea/pull/37613))
  * Docs
    * Remove excessive quote from terraform instructions ([#37426](https://github.com/go-gitea/gitea/pull/37426))
  * Markup
    * Make RenderString never fail ([#37780](https://github.com/go-gitea/gitea/pull/37780))
  * Packages
    * Fix package creation unique conflict ([#37776](https://github.com/go-gitea/gitea/pull/37776))
    * Use file names for generic web downloads ([#37520](https://github.com/go-gitea/gitea/pull/37520))
  * Permissions
    * Fix reading permission ([#37781](https://github.com/go-gitea/gitea/pull/37781))
  * PR
    * Handle empty pull request files view to allow reviews ([#37785](https://github.com/go-gitea/gitea/pull/37785))
    * Add `DEFAULT_TITLE_SOURCE` setting for pull request title default behavior ([#37766](https://github.com/go-gitea/gitea/pull/37766))
    * Show correct mergebase ([#37656](https://github.com/go-gitea/gitea/pull/37656))
    * Fix merge autodetect when multiple PRs are pushed at once ([#37516](https://github.com/go-gitea/gitea/pull/37516))
    * Fix review submission from single-commit PR view ([#37485](https://github.com/go-gitea/gitea/pull/37485))
    * Fix compare dropdown failing when selecting branch with no common merge-base ([#37472](https://github.com/go-gitea/gitea/pull/37472))
  * Repo
    * `/generate` must sync the branch table for the new repo ([#37712](https://github.com/go-gitea/gitea/pull/37712))
    * Make clone URL respect public URL detection setting ([#37617](https://github.com/go-gitea/gitea/pull/37617))
  * Templates
    * Add `CurrentURL` template variable back ([#37449](https://github.com/go-gitea/gitea/pull/37449))
  * UI
    * Add natural sort to sortTreeViewNodes ([#37777](https://github.com/go-gitea/gitea/pull/37777))
    * Fix mCaptcha broken after Vite migration ([#37509](https://github.com/go-gitea/gitea/pull/37509))
    * Fix color regressions, add `priority` color ([#37421](https://github.com/go-gitea/gitea/pull/37421))
  * User
    * Use consistent GetUser family functions ([#37589](https://github.com/go-gitea/gitea/pull/37589))
    * Make `GetPossibleUserByID` handle deleted users ([#37431](https://github.com/go-gitea/gitea/pull/37431))
  * Web
    * Make ServeSetHeaders default to download attachment if filename exists ([#37555](https://github.com/go-gitea/gitea/pull/37555))

## Contributors

* [@0xGREG](https://github.com/0xGREG)
* [@agyss](https://github.com/agyss)
* [@bircni](https://github.com/bircni)
* [@cyphercodes](https://github.com/cyphercodes)
* [@Exgene](https://github.com/Exgene)
* [@jasonlearst](https://github.com/jasonlearst)
* [@KalashThakare](https://github.com/KalashThakare)
* [@lavamini](https://github.com/lavamini)
* [@lunny](https://github.com/lunny)
* [@rootful](https://github.com/rootful)
* [@silverwind](https://github.com/silverwind)
* [@techknowlogick](https://github.com/techknowlogick)
* [@TheFox0x7](https://github.com/TheFox0x7)
* [@wxiaoguang](https://github.com/wxiaoguang)
* [@Zettat123](https://github.com/Zettat123)
