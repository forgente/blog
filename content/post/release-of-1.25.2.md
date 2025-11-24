---
date: 2025-11-22T21:05:00-7:00
authors: 
  - "lunny"
title: "Gitea 1.25.2 is released"
tags: ["release"]
draft: false
coverImageRelease: 1.25.2
---

We are excited to announce the release of **Gitea 1.25.2**! We strongly recommend all users upgrade to this version, as it includes important security fixes  and improves overall stability.

We've fixed a number of permission and authentication issues to improve security and consistency across the platform:

**Permission & Protection Checks**

- Fixed permission validation for deleting releases.
- Corrected branch protection checks when updating pull requests via rebase.
- Fixed permission checks for issue dependencies.
- Fixed validation for deleting comment history entries.

**Information Leakage Prevention**

- Unified the error message for "non-existing user" and "invalid password" to avoid revealing account existence.
    - Resolves issue [#35984](https://github.com/go-gitea/gitea/pull/35984)
- Prevented draft releases from being visible to users without write access.
- Updated API behavior to return the signature's email address rather than the user profile's email.

**Dependency Update**

- Updated golang.org/x/crypto from v0.43.0 -> v0.45.0 to address the critical security issue [GO-2025-4134](https://pkg.go.dev/vuln/GO-2025-4134).

Thanks [@d3struct1v3-create](https://github.com/d3struct1v3-create) and forgejo team for the security information. Thanks @wxiaoguang and @lunny for the patches.

This release includes [23 merged pull requests](https://github.com/go-gitea/gitea/pulls?q=is%3Apr+milestone%3A1.25.2+is%3Amerged), thanks to the amazing contributions from our community.

## How to install or update

Download our pre-built binaries from the [Gitea downloads page](https://dl.gitea.com/gitea/1.25.2/) — make sure to select the version compatible with your platform. For a step-by-step guide on installation or upgrades, check out our [installation documentation](https://docs.gitea.com/category/installation)

## Special Thanks

We would also like to thank all of our supporters on [Open Collective](https://opencollective.com/gitea) who are helping to sustain us financially.

---

Looking for a seamless, hassle-free solution to manage your Git repositories?
Discover [Gitea Cloud](https://cloud.gitea.com) — A fully-managed, scalable platform designed to streamline your development workflow.

<!--more-->

## Changelog

## [1.25.2](https://github.com/go-gitea/gitea/releases/tag/v1.25.2) - 2025-11-23

* SECURITY
  * Upgrade golang.org/x/crypto to 0.45.0 ([#35985](https://github.com/go-gitea/gitea/pull/35985)) ([#35988](https://github.com/go-gitea/gitea/pull/35988))
  * Fix various permission & login related bugs ([#36002](https://github.com/go-gitea/gitea/pull/36002)) ([#36004](https://github.com/go-gitea/gitea/pull/36004))
* ENHANCEMENTS
  * Display source code downloads last for release attachments ([#35897](https://github.com/go-gitea/gitea/pull/35897)) ([#35903](https://github.com/go-gitea/gitea/pull/35903))
  * Change project default column icon to 'star' ([#35967](https://github.com/go-gitea/gitea/pull/35967)) ([#35979](https://github.com/go-gitea/gitea/pull/35979))
* BUGFIXES
  * Disabled GCM OAuth2 flow attempts when OAuth2 itself is disabled which is part of ([#36002](https://github.com/go-gitea/gitea/pull/36002)) ([#36004](https://github.com/go-gitea/gitea/pull/36004))
  * Allow empty commit when merging pull request with squash style ([#35989](https://github.com/go-gitea/gitea/pull/35989)) ([#36003](https://github.com/go-gitea/gitea/pull/36003))
  * Fix container push tag overwriting ([#35936](https://github.com/go-gitea/gitea/pull/35936)) ([#35954](https://github.com/go-gitea/gitea/pull/35954))
  * Fix corrupted external render content ([#35946](https://github.com/go-gitea/gitea/pull/35946)) and upgrade golang.org/x packages ([#35950](https://github.com/go-gitea/gitea/pull/35950))
  * Limit reading bytes instead of ReadAll ([#35928](https://github.com/go-gitea/gitea/pull/35928)) ([#35934](https://github.com/go-gitea/gitea/pull/35934))
  * Use correct form field for allowed force push users in branch protection API ([#35894](https://github.com/go-gitea/gitea/pull/35894)) ([#35908](https://github.com/go-gitea/gitea/pull/35908))
  * Fix team member access check ([#35899](https://github.com/go-gitea/gitea/pull/35899)) ([#35905](https://github.com/go-gitea/gitea/pull/35905))
  * Fix conda null depend issue ([#35900](https://github.com/go-gitea/gitea/pull/35900)) ([#35902](https://github.com/go-gitea/gitea/pull/35902))
  * Set the dates to now when not specified by the caller ([#35861](https://github.com/go-gitea/gitea/pull/35861)) ([#35874](https://github.com/go-gitea/gitea/pull/35874))
  * Fix gogit ListEntriesRecursiveWithSize ([#35862](https://github.com/go-gitea/gitea/pull/35862))
  * Misc CSS fixes ([#35888](https://github.com/go-gitea/gitea/pull/35888)) ([#35981](https://github.com/go-gitea/gitea/pull/35981))
  * Don't show unnecessary error message to end users for DeleteBranchAfterMerge ([#35937](https://github.com/go-gitea/gitea/pull/35937)) ([#35941](https://github.com/go-gitea/gitea/pull/35941))
  * Load jQuery as early as possible to support custom scripts ([#35926](https://github.com/go-gitea/gitea/pull/35926)) ([#35929](https://github.com/go-gitea/gitea/pull/35929))
  * Allow to display embed images/pdfs when SERVE_DIRECT was enabled on MinIO storage ([#35882](https://github.com/go-gitea/gitea/pull/35882)) ([#35917](https://github.com/go-gitea/gitea/pull/35917))
  * Make OAuth2 issuer configurable ([#35915](https://github.com/go-gitea/gitea/pull/35915)) ([#35916](https://github.com/go-gitea/gitea/pull/35916))
  * Fix #35763: Add proper page title for project pages ([#35773](https://github.com/go-gitea/gitea/pull/35773)) ([#35909](https://github.com/go-gitea/gitea/pull/35909))
  * Fix avatar upload error handling ([#35887](https://github.com/go-gitea/gitea/pull/35887)) ([#35890](https://github.com/go-gitea/gitea/pull/35890))
  * Contribution heatmap improvements ([#35876](https://github.com/go-gitea/gitea/pull/35876)) ([#35880](https://github.com/go-gitea/gitea/pull/35880))
  * Remove padding override on `.ui .sha.label` ([#35864](https://github.com/go-gitea/gitea/pull/35864)) ([#35873](https://github.com/go-gitea/gitea/pull/35873))
  * Fix pull description code label background ([#35865](https://github.com/go-gitea/gitea/pull/35865)) ([#35870](https://github.com/go-gitea/gitea/pull/35870))

## Contributors

* [@divyun](https://github.com/divyun)
* [@DrMaxNix](https://github.com/DrMaxNix)
* [@lifegpc](https://github.com/lifegpc)
* [@lunny](https://github.com/lunny)
* [@Luohaothu](https://github.com/Luohaothu)
* [@lutinglt](https://github.com/lutinglt)
* [@mithileshgupta12](https://github.com/mithileshgupta12)
* [@silverwind](https://github.com/silverwind)
* [@wxiaoguang](https://github.com/wxiaoguang)
* [@zorrobiwan](https://github.com/zorrobiwan)
