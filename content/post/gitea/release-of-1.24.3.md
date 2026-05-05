---
date: 2025-07-15T09:45:00-7:00
authors: 
  - "lunny"
title: "Gitea 1.24.3 is released"
tags: ["release"]
draft: false
coverImageRelease: 1.24.3
---

We are excited to announce the release of **Gitea version 1.24.3**!

This release includes [30 merged pull requests](https://github.com/go-gitea/gitea/pulls?q=is%3Apr+milestone%3A1.24.3+is%3Amerged), thanks to the amazing contributions from our community.

## Security

The official Docker image has been updated to include Git 2.49.1, addressing [CVE-2025-46334](https://nvd.nist.gov/vuln/detail/CVE-2025-46334). If you’re using a custom Git installation, we strongly recommend upgrading to the latest version to ensure your instance remains secure.

## How to install or update

Download our pre-built binaries from the [Gitea downloads page](https://dl.gitea.com/gitea/1.24.3/) — make sure to select the version compatible with your platform. For a step-by-step guide on installation or upgrades, check out our [installation documentation](https://docs.gitea.com/category/installation)

## Special Thanks

We would also like to thank all of our supporters on [Open Collective](https://opencollective.com/gitea) who are helping to sustain us financially.

---

Looking for a seamless, hassle-free solution to manage your Git repositories?
Discover [Gitea Cloud](https://cloud.gitea.com) — A fully-managed, scalable platform designed to streamline your development workflow.

<!--more-->

## Changelog

## [1.24.3](https://github.com/go-gitea/gitea/releases/tag/v1.24.3) - 2025-07-15

* BUGFIXES
  * Fix form property assignment edge case ([#35073](https://github.com/go-gitea/gitea/pull/35073)) ([#35078](https://github.com/go-gitea/gitea/pull/35078))
  * Improve submodule relative path handling ([#35056](https://github.com/go-gitea/gitea/pull/35056)) ([#35075](https://github.com/go-gitea/gitea/pull/35075))
  * Fix incorrect comment diff hunk parsing, fix github asset ID nil panic ([#35046](https://github.com/go-gitea/gitea/pull/35046)) ([#35055](https://github.com/go-gitea/gitea/pull/35055))
  * Fix updating user visibility ([#35036](https://github.com/go-gitea/gitea/pull/35036)) ([#35044](https://github.com/go-gitea/gitea/pull/35044))
  * Support base64-encoded agit push options ([#35037](https://github.com/go-gitea/gitea/pull/35037)) ([#35041](https://github.com/go-gitea/gitea/pull/35041))
  * Make submodule link work with relative path ([#35034](https://github.com/go-gitea/gitea/pull/35034)) ([#35038](https://github.com/go-gitea/gitea/pull/35038))
  * Fix bug when displaying git user avatar in commits list ([#35006](https://github.com/go-gitea/gitea/pull/35006))
  * Fix API response for swagger spec ([#35029](https://github.com/go-gitea/gitea/pull/35029))
  * Start automerge check again after the conflict check and the schedule ([#34988](https://github.com/go-gitea/gitea/pull/34988)) ([#35002](https://github.com/go-gitea/gitea/pull/35002))
  * Fix the response format for actions/workflows ([#35009](https://github.com/go-gitea/gitea/pull/35009)) ([#35016](https://github.com/go-gitea/gitea/pull/35016))
  * Fix repo settings and protocol log problems ([#35012](https://github.com/go-gitea/gitea/pull/35012)) ([#35013](https://github.com/go-gitea/gitea/pull/35013))
  * Fix project images scroll ([#34971](https://github.com/go-gitea/gitea/pull/34971)) ([#34972](https://github.com/go-gitea/gitea/pull/34972))
  * Mark old reviews as stale on agit pr updates ([#34933](https://github.com/go-gitea/gitea/pull/34933)) ([#34965](https://github.com/go-gitea/gitea/pull/34965))
  * Fix git graph page ([#34948](https://github.com/go-gitea/gitea/pull/34948)) ([#34949](https://github.com/go-gitea/gitea/pull/34949))
  * Don't send trigger for a pending review's comment create/update/delete ([#34928](https://github.com/go-gitea/gitea/pull/34928)) ([#34939](https://github.com/go-gitea/gitea/pull/34939))
  * Fix some log and UI problems ([#34863](https://github.com/go-gitea/gitea/pull/34863)) ([#34868](https://github.com/go-gitea/gitea/pull/34868))
  * Fix archive API ([#34853](https://github.com/go-gitea/gitea/pull/34853)) ([#34857](https://github.com/go-gitea/gitea/pull/34857))
  * Ignore force pushes for changed files in a PR review ([#34837](https://github.com/go-gitea/gitea/pull/34837)) ([#34843](https://github.com/go-gitea/gitea/pull/34843))
  * Fix SSH LFS timeout ([#34838](https://github.com/go-gitea/gitea/pull/34838)) ([#34842](https://github.com/go-gitea/gitea/pull/34842))
  * Fix team permissions ([#34827](https://github.com/go-gitea/gitea/pull/34827)) ([#34836](https://github.com/go-gitea/gitea/pull/34836))
  * Fix job status aggregation logic ([#34823](https://github.com/go-gitea/gitea/pull/34823)) ([#34835](https://github.com/go-gitea/gitea/pull/34835))
  * Fix issue filter ([#34914](https://github.com/go-gitea/gitea/pull/34914)) ([#34915](https://github.com/go-gitea/gitea/pull/34915))
  * Fix typo in pull request merge warning message text ([#34899](https://github.com/go-gitea/gitea/pull/34899)) ([#34903](https://github.com/go-gitea/gitea/pull/34903))
  * Support the open-icon of folder ([#34168](https://github.com/go-gitea/gitea/pull/34168)) ([#34896](https://github.com/go-gitea/gitea/pull/34896))
  * Optimize flex layout of release attachment area ([#34885](https://github.com/go-gitea/gitea/pull/34885)) ([#34886](https://github.com/go-gitea/gitea/pull/34886))
  * Fix the issue of abnormal interface when there is no issue-item on the project page ([#34791](https://github.com/go-gitea/gitea/pull/34791)) ([#34880](https://github.com/go-gitea/gitea/pull/34880))
  * Skip updating timestamp when sync branch ([#34875](https://github.com/go-gitea/gitea/pull/34875))
  * Fix required contexts and commit status matching bug ([#34815](https://github.com/go-gitea/gitea/pull/34815)) ([#34829](https://github.com/go-gitea/gitea/pull/34829))

## Contributors

* [@ChristopherHX](https://github.com/ChristopherHX)
* [@dcermak](https://github.com/dcermak)
* [@delvh](https://github.com/delvh)
* [@kerwin612](https://github.com/kerwin612)
* [@lunny](https://github.com/lunny)
* [@nienjiuntai](https://github.com/nienjiuntai)
* [@Pavanipogula](https://github.com/Pavanipogula)
* [@wxiaoguang](https://github.com/wxiaoguang)
* [@Zettat123](https://github.com/Zettat123)
