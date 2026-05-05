---
date: 2026-01-22T11:32:00-7:00
authors: 
  - "lunny"
title: "Gitea 1.25.4 is released"
tags: ["release"]
draft: false
coverImageRelease: 1.25.4
---

We're excited to announce the release of Gitea 1.25.4! We strongly recommend all users upgrade to this version, as it includes important security fixes, numerous bug fixes, and overall stability improvements.

**Permission & Protection Checks**

  * CVE-2026-20736: Release attachments must belong to the intended repo ([#36347](https://github.com/go-gitea/gitea/pull/36347)) ([#36375](https://github.com/go-gitea/gitea/pull/36375))
  * CVE-2026-20750: Fix permission check on org project operations ([#36318](https://github.com/go-gitea/gitea/pull/36318)) ([#36373](https://github.com/go-gitea/gitea/pull/36373))
  * CVE-2026-20883: Add more check for stopwatch read or list ([#36340](https://github.com/go-gitea/gitea/pull/36340)) ([#36368](https://github.com/go-gitea/gitea/pull/36368))
  * CVE-2026-20904: Fix openid setting check ([#36346](https://github.com/go-gitea/gitea/pull/36346)) ([#36361](https://github.com/go-gitea/gitea/pull/36361))
  * CVE-2026-20888: Fix cancel auto merge bug ([#36341](https://github.com/go-gitea/gitea/pull/36341)) ([#36356](https://github.com/go-gitea/gitea/pull/36356))
  * CVE-2026-20912: Fix delete attachment check ([#36320](https://github.com/go-gitea/gitea/pull/36320)) ([#36355](https://github.com/go-gitea/gitea/pull/36355))
  * CVE-2026-20897: LFS locks must belong to the intended repo ([#36344](https://github.com/go-gitea/gitea/pull/36344)) ([#36349](https://github.com/go-gitea/gitea/pull/36349))

**Information Leakage Prevention**

  * CVE-2026-0798: Clean watches when make a repository private and check permission when send release emails ([#36319](https://github.com/go-gitea/gitea/pull/36319)) ([#36370](https://github.com/go-gitea/gitea/pull/36370))
  * CVE-2026-20800: Fix bug on notification read ([#36339](https://github.com/go-gitea/gitea/pull/36339)) ([#36387](https://github.com/go-gitea/gitea/pull/36387))

**Dependency Update**

Go upgrades to 1.25.6 which includes security fixes to the go command, and the archive/zip, crypto/tls, and net/url packages, as well as bug fixes.

Thanks for [spingARbor](https://github.com/spingARbor) to report these security vulnerabilities.

This release includes [27 merged pull requests](https://github.com/go-gitea/gitea/pulls?q=is%3Apr+milestone%3A1.25.4+is%3Amerged), thanks to the amazing contributions from our community.

## How to install or update

Download our pre-built binaries from the [Gitea downloads page](https://dl.gitea.com/gitea/1.25.4/) — make sure to select the version compatible with your platform. For a step-by-step guide on installation or upgrades, check out our [installation documentation](https://docs.gitea.com/category/installation)

## Special Thanks

We would also like to thank all of our supporters on [Open Collective](https://opencollective.com/gitea) who are helping to sustain us financially.

---

Looking for a seamless, hassle-free solution to manage your Git repositories?
Discover [Gitea Cloud](https://cloud.gitea.com) — A fully-managed, scalable platform designed to streamline your development workflow.

<!--more-->

## Changelog

* SECURITY
  * Release attachments must belong to the intended repo ([#36347](https://github.com/go-gitea/gitea/pull/36347)) ([#36375](https://github.com/go-gitea/gitea/pull/36375))
  * Fix permission check on org project operations ([#36318](https://github.com/go-gitea/gitea/pull/36318)) ([#36373](https://github.com/go-gitea/gitea/pull/36373))
  * Clean watches when make a repository private and check permission when send release emails ([#36319](https://github.com/go-gitea/gitea/pull/36319)) ([#36370](https://github.com/go-gitea/gitea/pull/36370))
  * Add more check for stopwatch read or list ([#36340](https://github.com/go-gitea/gitea/pull/36340)) ([#36368](https://github.com/go-gitea/gitea/pull/36368))
  * Fix openid setting check ([#36346](https://github.com/go-gitea/gitea/pull/36346)) ([#36361](https://github.com/go-gitea/gitea/pull/36361))
  * Fix cancel auto merge bug ([#36341](https://github.com/go-gitea/gitea/pull/36341)) ([#36356](https://github.com/go-gitea/gitea/pull/36356))
  * Fix delete attachment check ([#36320](https://github.com/go-gitea/gitea/pull/36320)) ([#36355](https://github.com/go-gitea/gitea/pull/36355))
  * LFS locks must belong to the intended repo ([#36344](https://github.com/go-gitea/gitea/pull/36344)) ([#36349](https://github.com/go-gitea/gitea/pull/36349))
  * Fix bug on notification read ([#36339](https://github.com/go-gitea/gitea/pull/36339)) #36387
* ENHANCEMENTS
  * Add more routes to the "expensive" list ([#36290](https://github.com/go-gitea/gitea/pull/36290))
  * Make "commit statuses" API accept slashes in "ref" ([#36264](https://github.com/go-gitea/gitea/pull/36264)) ([#36275](https://github.com/go-gitea/gitea/pull/36275))
* BUGFIXES
  * Fix markdown newline handling during IME composition ([#36421](https://github.com/go-gitea/gitea/pull/36421)) #36424
  * Fix missing repository id when migrating release attachments ([#36389](https://github.com/go-gitea/gitea/pull/36389))
  * Fix bug when compare in the pull request ([#36363](https://github.com/go-gitea/gitea/pull/36363)) ([#36372](https://github.com/go-gitea/gitea/pull/36372))
  * Fix incorrect text content detection ([#36364](https://github.com/go-gitea/gitea/pull/36364)) ([#36369](https://github.com/go-gitea/gitea/pull/36369))
  * Fill missing `has_code` in repository api ([#36338](https://github.com/go-gitea/gitea/pull/36338)) ([#36359](https://github.com/go-gitea/gitea/pull/36359))
  * Fix notifications pagination query parameters ([#36351](https://github.com/go-gitea/gitea/pull/36351)) ([#36358](https://github.com/go-gitea/gitea/pull/36358))
  * Fix some trivial problems ([#36336](https://github.com/go-gitea/gitea/pull/36336)) ([#36337](https://github.com/go-gitea/gitea/pull/36337))
  * Prevent panic when GitLab release has more links than sources ([#36295](https://github.com/go-gitea/gitea/pull/36295)) ([#36305](https://github.com/go-gitea/gitea/pull/36305))
  * Fix stats bug when syncing release ([#36285](https://github.com/go-gitea/gitea/pull/36285)) ([#36294](https://github.com/go-gitea/gitea/pull/36294))
  * Always honor user's choice for "delete branch after merge" ([#36281](https://github.com/go-gitea/gitea/pull/36281)) ([#36286](https://github.com/go-gitea/gitea/pull/36286))
  * Use the requested host for LFS links ([#36242](https://github.com/go-gitea/gitea/pull/36242)) ([#36258](https://github.com/go-gitea/gitea/pull/36258))
  * Fix panic when get editor config file ([#36241](https://github.com/go-gitea/gitea/pull/36241)) ([#36247](https://github.com/go-gitea/gitea/pull/36247))
  * Fix regression in writing authorized principals ([#36213](https://github.com/go-gitea/gitea/pull/36213)) ([#36218](https://github.com/go-gitea/gitea/pull/36218))
  * Fix WebAuthn error checking ([#36219](https://github.com/go-gitea/gitea/pull/36219)) ([#36235](https://github.com/go-gitea/gitea/pull/36235))

## Contributors

* [@argoyle](https://github.com/argoyle)
* [@lunny](https://github.com/lunny)
* [@peterverraedt](https://github.com/peterverraedt)
* [@silverwind](https://github.com/silverwind)
* [@sollyu](https://github.com/sollyu)
* [@TheFox0x7](https://github.com/TheFox0x7)
* [@tyroneyeh](https://github.com/tyroneyeh)
* [@wxiaoguang](https://github.com/wxiaoguang)
