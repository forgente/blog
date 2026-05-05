---
date: 2023-12-21T15:39:00+08:00
authors:
  - "lunny"
title: "Gitea 1.21.3 is released"
tags: ["release"]
draft: false
coverImageRelease: "1.21.3"
---

Gitea 1.21.3 are now released. 1.21.3 includs [18](https://github.com/go-gitea/gitea/pulls?q=is%3Apr+milestone%3A1.21.3+is%3Amerged) merged PRs and fixes for security vulnerability.

We highly encourage users to update to this version for some important bug-fixes. This release is built with the latest released version of Golang resolve the announced CVE with Golang. CVE-2023-48795, [https://go.dev/issue/64784](https://go.dev/issue/64784)

<!-- Security Thanks! -->
Thanks to [@wxiaoguang](https://gitea.com/wxiaoguang) for fixing the problem.

You can download Gitea 1.21.3 for example from our [downloads page](https://dl.gitea.com/gitea/1.21.3/). Please read our [installation guide](https://docs.gitea.com/installation/install-from-binary) for more information on installation.

We would also like to thank all of our supporters on [Open Collective](https://opencollective.com/gitea) who are helping to sustain us financially.

**Are you looking for a seamless, hassle-free solution to manage your Git repositories? Look no further! [Gitea Cloud](https://cloud.gitea.com) is here to revolutionize your development experience.**

## Changelog

## [1.21.3](https://github.com/go-gitea/gitea/releases/tag/v1.21.3) - 2023-12-21

* SECURITY
  * Update golang.org/x/crypto ([#28519](https://github.com/go-gitea/gitea/pull/28519))
* API
  * chore(api): support ignore password if login source type is LDAP for creating user API ([#28491](https://github.com/go-gitea/gitea/pull/28491)) ([#28525](https://github.com/go-gitea/gitea/pull/28525))
  * Add endpoint for not implemented Docker auth ([#28457](https://github.com/go-gitea/gitea/pull/28457)) ([#28462](https://github.com/go-gitea/gitea/pull/28462))
* ENHANCEMENTS
  * Add option to disable ambiguous unicode characters detection ([#28454](https://github.com/go-gitea/gitea/pull/28454)) ([#28499](https://github.com/go-gitea/gitea/pull/28499))
  * Refactor SSH clone URL generation code ([#28421](https://github.com/go-gitea/gitea/pull/28421)) ([#28480](https://github.com/go-gitea/gitea/pull/28480))
  * Polyfill SubmitEvent for PaleMoon ([#28441](https://github.com/go-gitea/gitea/pull/28441)) ([#28478](https://github.com/go-gitea/gitea/pull/28478))
* BUGFIXES
  * Fix the issue ref rendering for wiki ([#28556](https://github.com/go-gitea/gitea/pull/28556)) ([#28559](https://github.com/go-gitea/gitea/pull/28559))
  * Fix duplicate ID when deleting repo ([#28520](https://github.com/go-gitea/gitea/pull/28520)) ([#28528](https://github.com/go-gitea/gitea/pull/28528))
  * Only check online runner when detecting matching runners in workflows ([#28286](https://github.com/go-gitea/gitea/pull/28286)) ([#28512](https://github.com/go-gitea/gitea/pull/28512))
  * Initalize stroage for orphaned repository doctor ([#28487](https://github.com/go-gitea/gitea/pull/28487)) ([#28490](https://github.com/go-gitea/gitea/pull/28490))
  * Fix possible nil pointer access ([#28428](https://github.com/go-gitea/gitea/pull/28428)) ([#28440](https://github.com/go-gitea/gitea/pull/28440))
  * Don't show unnecessary citation JS error on UI ([#28433](https://github.com/go-gitea/gitea/pull/28433)) ([#28437](https://github.com/go-gitea/gitea/pull/28437))
* DOCS
  * Update actions document about comparsion as Github Actions ([#28560](https://github.com/go-gitea/gitea/pull/28560)) ([#28564](https://github.com/go-gitea/gitea/pull/28564))
  * Fix documents for "custom/public/assets/" ([#28465](https://github.com/go-gitea/gitea/pull/28465)) ([#28467](https://github.com/go-gitea/gitea/pull/28467))
* MISC
  * Fix inperformant query on retrifing review from database. ([#28552](https://github.com/go-gitea/gitea/pull/28552)) ([#28562](https://github.com/go-gitea/gitea/pull/28562))
  * Improve the prompt for "ssh-keygen sign" ([#28509](https://github.com/go-gitea/gitea/pull/28509)) ([#28510](https://github.com/go-gitea/gitea/pull/28510))
  * Update docs for DISABLE_QUERY_AUTH_TOKEN ([#28485](https://github.com/go-gitea/gitea/pull/28485)) ([#28488](https://github.com/go-gitea/gitea/pull/28488))
  * Fix Chinese translation of config cheat sheet[API] ([#28472](https://github.com/go-gitea/gitea/pull/28472)) ([#28473](https://github.com/go-gitea/gitea/pull/28473))
  * Retry SSH key verification with additional CRLF if it failed ([#28392](https://github.com/go-gitea/gitea/pull/28392)) ([#28464](https://github.com/go-gitea/gitea/pull/28464))

## Contributors for 1.21.3

* [@6543](https://github.com/6543)
* [@appleboy](https://github.com/appleboy)
* [@CaiCandong](https://github.com/CaiCandong)
* [@earl-warren](https://github.com/earl-warren)
* [@framitdavid](https://github.com/framitdavid)
* [@kdumontnu](https://github.com/kdumontnu)
* [@KN4CK3R](https://github.com/KN4CK3R)
* [@lunny](https://github.com/lunny)
* [@nekrondev](https://github.com/nekrondev)
* [@wxiaoguang](https://github.com/wxiaoguang)
* [@yp05327](https://github.com/yp05327)
