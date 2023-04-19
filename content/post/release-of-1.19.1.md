---
date: "2023-04-13T09:13:47+07:00"
authors: 
  - "jolheiser"
  - "delvh"
title: "Gitea 1.19.1 is released"
tags: ["release", "gitea"]
draft: false
---

We are proud to present the release of Gitea version 1.19.1.

We highly encourage users to update to this version for some important bug-fixes.

We have merged [95](https://github.com/go-gitea/gitea/pulls?q=is%3Apr+milestone%3A1.19.1+is%3Amerged) pull requests to release this version.

:exclamation: If you are using `actions.actions` in `DISABLED_REPO_UNITS` or `DEFAULT_REPO_UNITS`, it will be treated as an invalid unit key.  
It has been changed to `repo.actions` for consistency.  
If you haven't placed it there explicitly, no action is required.  
While Gitea aims for stability in already released versions, we decided to release this breaking change in 1.19.1 because Gitea Actions are still experimental and this option was previously undocumented, so we expect that a vast majority of users are likely unaffected.

You can download one of our pre-built binaries from our [downloads page](https://dl.gitea.io/gitea/1.19.1/) - make sure to select the correct platform! For further details on how to install, follow our [installation guide](https://docs.gitea.io/en-us/install-from-binary/).


We would also like to thank all of our supporters on [Open Collective](https://opencollective.com/gitea) who are helping to sustain us financially.

**Have you heard? We now have a [swag shop](https://shop.gitea.io)! :shirt: :tea:**

<!--more-->

## Changelog

## [1.19.1](https://github.com/go-gitea/gitea/releases/tag/v1.19.1) - 2023-04-12

<!-- Changelog Details -->
* BREAKING
  * Rename actions unit to `repo.actions` and add docs for it ([#23733](https://github.com/go-gitea/gitea/pull/23733)) ([#23881](https://github.com/go-gitea/gitea/pull/23881))
* ENHANCEMENTS
  * Add cardtype to org/user level project on creation, edit and view ([#24043](https://github.com/go-gitea/gitea/pull/24043)) ([#24066](https://github.com/go-gitea/gitea/pull/24066))
  * Refactor commit status for Actions jobs ([#23786](https://github.com/go-gitea/gitea/pull/23786)) ([#24060](https://github.com/go-gitea/gitea/pull/24060))
  * Show errors for KaTeX and mermaid on the preview tab ([#24009](https://github.com/go-gitea/gitea/pull/24009)) ([#24019](https://github.com/go-gitea/gitea/pull/24019))
  * Show protected branch rule names again ([#23907](https://github.com/go-gitea/gitea/pull/23907)) ([#24018](https://github.com/go-gitea/gitea/pull/24018))
  * Adjust sticky pr header to cover background ([#23956](https://github.com/go-gitea/gitea/pull/23956)) ([#23999](https://github.com/go-gitea/gitea/pull/23999))
  * Discolor pull request tab labels ([#23950](https://github.com/go-gitea/gitea/pull/23950)) ([#23987](https://github.com/go-gitea/gitea/pull/23987))
  * Treat PRs with agit flow as fork PRs when triggering actions. ([#23884](https://github.com/go-gitea/gitea/pull/23884)) ([#23967](https://github.com/go-gitea/gitea/pull/23967))
  * Left-align review comments ([#23937](https://github.com/go-gitea/gitea/pull/23937))
  * Fix image border-radius ([#23886](https://github.com/go-gitea/gitea/pull/23886)) ([#23930](https://github.com/go-gitea/gitea/pull/23930))
  * Scroll collapsed file into view ([#23702](https://github.com/go-gitea/gitea/pull/23702)) ([#23929](https://github.com/go-gitea/gitea/pull/23929))
  * Fix code view (diff) broken layout ([#23096](https://github.com/go-gitea/gitea/pull/23096)) ([#23918](https://github.com/go-gitea/gitea/pull/23918))
  * Org pages style fixes ([#23901](https://github.com/go-gitea/gitea/pull/23901)) ([#23914](https://github.com/go-gitea/gitea/pull/23914))
  * Fix user profile description rendering ([#23882](https://github.com/go-gitea/gitea/pull/23882)) ([#23902](https://github.com/go-gitea/gitea/pull/23902))
  * Fix review box viewport overflow issue ([#23800](https://github.com/go-gitea/gitea/pull/23800)) ([#23898](https://github.com/go-gitea/gitea/pull/23898))
  * Prefill input values in oauth settings as intended ([#23829](https://github.com/go-gitea/gitea/pull/23829)) ([#23871](https://github.com/go-gitea/gitea/pull/23871))
  * CSS color tweaks ([#23828](https://github.com/go-gitea/gitea/pull/23828)) ([#23842](https://github.com/go-gitea/gitea/pull/23842))
  * Fix incorrect visibility dropdown list in add/edit user page ([#23804](https://github.com/go-gitea/gitea/pull/23804)) ([#23833](https://github.com/go-gitea/gitea/pull/23833))
  * Add CSS rules for basic colored labels ([#23774](https://github.com/go-gitea/gitea/pull/23774)) ([#23777](https://github.com/go-gitea/gitea/pull/23777))
  * Add creation time in tag list page ([#23693](https://github.com/go-gitea/gitea/pull/23693)) ([#23773](https://github.com/go-gitea/gitea/pull/23773))
  * Fix br display for packages curls ([#23737](https://github.com/go-gitea/gitea/pull/23737)) ([#23764](https://github.com/go-gitea/gitea/pull/23764))
  * Fix issue due date edit toggle bug ([#23723](https://github.com/go-gitea/gitea/pull/23723)) ([#23758](https://github.com/go-gitea/gitea/pull/23758))
  * Improve commit graph page UI alignment ([#23751](https://github.com/go-gitea/gitea/pull/23751)) ([#23754](https://github.com/go-gitea/gitea/pull/23754))
  * Use GitHub Actions compatible globbing for `branches`, `tag`, `path` filter ([#22804](https://github.com/go-gitea/gitea/pull/22804)) ([#23740](https://github.com/go-gitea/gitea/pull/23740))
  * Redirect to project again after editing it ([#23326](https://github.com/go-gitea/gitea/pull/23326)) ([#23739](https://github.com/go-gitea/gitea/pull/23739))
  * Remove row clicking from notification table ([#22695](https://github.com/go-gitea/gitea/pull/22695)) ([#23706](https://github.com/go-gitea/gitea/pull/23706))
  * Remove conflicting CSS rules on notifications, improve notifications table ([#23565](https://github.com/go-gitea/gitea/pull/23565)) ([#23621](https://github.com/go-gitea/gitea/pull/23621))
  * Fix diff tree height and adjust target file style ([#23616](https://github.com/go-gitea/gitea/pull/23616))
* BUGFIXES
  * Improve error logging for LFS ([#24072](https://github.com/go-gitea/gitea/pull/24072)) ([#24082](https://github.com/go-gitea/gitea/pull/24082))
  * Fix custom mailer template on Windows platform ([#24081](https://github.com/go-gitea/gitea/pull/24081))
  * Update the value of `diffEnd` when clicking the `Show More` button in the DiffFileTree ([#24069](https://github.com/go-gitea/gitea/pull/24069)) ([#24078](https://github.com/go-gitea/gitea/pull/24078))
  * Make label templates have consistent behavior and priority ([#23749](https://github.com/go-gitea/gitea/pull/23749))
  * Fix accidental overwriting of LDAP team memberships ([#24050](https://github.com/go-gitea/gitea/pull/24050)) ([#24065](https://github.com/go-gitea/gitea/pull/24065))
  * Fix branch protection priority ([#24045](https://github.com/go-gitea/gitea/pull/24045)) ([#24061](https://github.com/go-gitea/gitea/pull/24061))
  * Use actions job link as commit status URL instead of run link ([#24023](https://github.com/go-gitea/gitea/pull/24023)) ([#24032](https://github.com/go-gitea/gitea/pull/24032))
  * Add actions support to package auth verification ([#23729](https://github.com/go-gitea/gitea/pull/23729)) ([#24028](https://github.com/go-gitea/gitea/pull/24028))
  * Fix protected branch for API ([#24013](https://github.com/go-gitea/gitea/pull/24013)) ([#24027](https://github.com/go-gitea/gitea/pull/24027))
  * Do not escape space between PyPI repository url and package name… ([#23981](https://github.com/go-gitea/gitea/pull/23981)) ([#24008](https://github.com/go-gitea/gitea/pull/24008))
  * Fix redirect bug when creating issue from a project ([#23971](https://github.com/go-gitea/gitea/pull/23971)) ([#23997](https://github.com/go-gitea/gitea/pull/23997))
  * Set `ref` to fully-formed of the tag when trigger event is `release` ([#23944](https://github.com/go-gitea/gitea/pull/23944)) ([#23989](https://github.com/go-gitea/gitea/pull/23989))
  * Use Get/Set instead of Rename when Regenerate session id ([#23975](https://github.com/go-gitea/gitea/pull/23975)) ([#23983](https://github.com/go-gitea/gitea/pull/23983))
  * Ensure RSS icon is present on all repo tabs ([#23904](https://github.com/go-gitea/gitea/pull/23904)) ([#23973](https://github.com/go-gitea/gitea/pull/23973))
  * Remove `Repository.getFilesChanged` to fix Actions `paths` and `paths-ignore` filter ([#23920](https://github.com/go-gitea/gitea/pull/23920)) ([#23969](https://github.com/go-gitea/gitea/pull/23969))
  * Delete deleted release attachments immediately from storage ([#23913](https://github.com/go-gitea/gitea/pull/23913)) ([#23958](https://github.com/go-gitea/gitea/pull/23958))
  * Use ghost user if package creator does not exist ([#23822](https://github.com/go-gitea/gitea/pull/23822)) ([#23915](https://github.com/go-gitea/gitea/pull/23915))
  * User/Org Feed render description as per web ([#23887](https://github.com/go-gitea/gitea/pull/23887)) ([#23906](https://github.com/go-gitea/gitea/pull/23906))
  * Fix `cases.Title` crash for concurrency ([#23885](https://github.com/go-gitea/gitea/pull/23885)) ([#23903](https://github.com/go-gitea/gitea/pull/23903))
  * Convert .Source.SkipVerify to $cfg.SkipVerify ([#23839](https://github.com/go-gitea/gitea/pull/23839)) ([#23899](https://github.com/go-gitea/gitea/pull/23899))
  * Support "." char as user name for User/Orgs in RSS/ATOM/GPG/KEYS path ... ([#23874](https://github.com/go-gitea/gitea/pull/23874)) ([#23878](https://github.com/go-gitea/gitea/pull/23878))
  * Fix JS error when changing PR's target branch ([#23862](https://github.com/go-gitea/gitea/pull/23862)) ([#23864](https://github.com/go-gitea/gitea/pull/23864))
  * Fix 500 error if there is a name conflict when edit authentication source ([#23832](https://github.com/go-gitea/gitea/pull/23832)) ([#23852](https://github.com/go-gitea/gitea/pull/23852))
  * Fix closed PR also triggers Webhooks and actions ([#23782](https://github.com/go-gitea/gitea/pull/23782)) ([#23834](https://github.com/go-gitea/gitea/pull/23834))
  * Fix checks for `needs` in Actions ([#23789](https://github.com/go-gitea/gitea/pull/23789)) ([#23831](https://github.com/go-gitea/gitea/pull/23831))
  * Fix "Updating branch by merge" bug in "update_branch_by_merge.tmpl" ([#23790](https://github.com/go-gitea/gitea/pull/23790)) ([#23825](https://github.com/go-gitea/gitea/pull/23825))
  * Fix cancel button in the page of project edit not work ([#23655](https://github.com/go-gitea/gitea/pull/23655)) ([#23813](https://github.com/go-gitea/gitea/pull/23813))
  * Don't apply the group filter when listing LDAP group membership if it is empty ([#23745](https://github.com/go-gitea/gitea/pull/23745)) ([#23788](https://github.com/go-gitea/gitea/pull/23788))
  * Fix profile page email display, respect settings ([#23747](https://github.com/go-gitea/gitea/pull/23747)) ([#23756](https://github.com/go-gitea/gitea/pull/23756))
  * Fix project card preview select and template select ([#23684](https://github.com/go-gitea/gitea/pull/23684)) ([#23731](https://github.com/go-gitea/gitea/pull/23731))
  * Check LFS/Packages settings in dump and doctor command ([#23631](https://github.com/go-gitea/gitea/pull/23631)) ([#23730](https://github.com/go-gitea/gitea/pull/23730))
  * Add git dashes separator to some "log" and "diff" commands ([#23606](https://github.com/go-gitea/gitea/pull/23606)) ([#23720](https://github.com/go-gitea/gitea/pull/23720))
  * Create commit status when event is `pull_request_sync` ([#23683](https://github.com/go-gitea/gitea/pull/23683)) ([#23691](https://github.com/go-gitea/gitea/pull/23691))
  * Fix incorrect `HookEventType` of pull request review comments ([#23650](https://github.com/go-gitea/gitea/pull/23650)) ([#23678](https://github.com/go-gitea/gitea/pull/23678))
  * Fix incorrect `show-modal` and `show-panel` class ([#23660](https://github.com/go-gitea/gitea/pull/23660)) ([#23663](https://github.com/go-gitea/gitea/pull/23663))
  * Improve workflow event triggers ([#23613](https://github.com/go-gitea/gitea/pull/23613)) ([#23648](https://github.com/go-gitea/gitea/pull/23648))
  * Introduce path Clean/Join helper functions, partially backport&refactor ([#23495](https://github.com/go-gitea/gitea/pull/23495)) ([#23607](https://github.com/go-gitea/gitea/pull/23607))
  * Fix pagination on `/notifications/watching` ([#23564](https://github.com/go-gitea/gitea/pull/23564)) ([#23603](https://github.com/go-gitea/gitea/pull/23603))
  * Fix submodule is nil panic ([#23588](https://github.com/go-gitea/gitea/pull/23588)) ([#23601](https://github.com/go-gitea/gitea/pull/23601))
  * Polyfill the window.customElements ([#23592](https://github.com/go-gitea/gitea/pull/23592)) ([#23595](https://github.com/go-gitea/gitea/pull/23595))
  * Avoid too long names for actions ([#23162](https://github.com/go-gitea/gitea/pull/23162)) ([#23190](https://github.com/go-gitea/gitea/pull/23190))
* TRANSLATION
  * Backport locales (with manual fixes) ([#23808](https://github.com/go-gitea/gitea/pull/23808), [#23634](https://github.com/go-gitea/gitea/pull/23634), [#24083](https://github.com/go-gitea/gitea/pull/24083))
* BUILD
  * Hardcode path to docker images ([#23955](https://github.com/go-gitea/gitea/pull/23955)) ([#23968](https://github.com/go-gitea/gitea/pull/23968))
* DOCS
  * Update documentation to explain which projects allow Gitea to host static pages ([#23993](https://github.com/go-gitea/gitea/pull/23993)) ([#24058](https://github.com/go-gitea/gitea/pull/24058))
  * Merge `push to create`, `open PR from push`, and `push options` docs articles into one ([#23744](https://github.com/go-gitea/gitea/pull/23744)) ([#23959](https://github.com/go-gitea/gitea/pull/23959))
  * Fix codeblocks in the cheat sheet ([#23664](https://github.com/go-gitea/gitea/pull/23664)) ([#23669](https://github.com/go-gitea/gitea/pull/23669))
* MISC
  * Do not crash when parsing an invalid workflow file  ([#23972](https://github.com/go-gitea/gitea/pull/23972)) ([#23976](https://github.com/go-gitea/gitea/pull/23976))
  * Remove assertion debug code for show/hide refactoring ([#23576](https://github.com/go-gitea/gitea/pull/23576)) ([#23868](https://github.com/go-gitea/gitea/pull/23868))
  * Add ONLY_SHOW_RELEVANT_REPOS back, fix explore page bug, make code more strict ([#23766](https://github.com/go-gitea/gitea/pull/23766)) ([#23791](https://github.com/go-gitea/gitea/pull/23791))
  * Make minio package support legacy MD5 checksum ([#23768](https://github.com/go-gitea/gitea/pull/23768)) ([#23770](https://github.com/go-gitea/gitea/pull/23770))
  * Improve template error reporting ([#23396](https://github.com/go-gitea/gitea/pull/23396)) ([#23600](https://github.com/go-gitea/gitea/pull/23600))