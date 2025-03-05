---
date: 2025-03-04T16:57:00-8:00
authors: 
  - "lunny"
title: "Gitea 1.23.5 is released"
tags: ["release"]
draft: false
coverImageRelease: 1.23.5
---

We are proud to present the release of **Gitea version 1.23.5**.

This update addresses one critical security issues, so we strongly recommend all users upgrade as soon as possible.

We have merged [17](https://github.com/go-gitea/gitea/pulls?q=is%3Apr+milestone%3A1.23.5+is%3Amerged) pull requests to release this version.

<!-- Security Thanks! -->

We build Gitea v1.23.5 with Golang v1.23.7 to avoid possible security problem. See CVE-2025-22870 and Go issue [https://go.dev/issue/71984](https://go.dev/issue/71984). We also upgrade golang.org/x/net to v0.36.0 for the same reason. Thanks @techknowlogick and @lunny for the fix!

## How to install or update

Download our pre-built binaries from the [Gitea downloads page](https://dl.gitea.com/gitea/1.23.5/) — make sure to select the version compatible with your platform. For a step-by-step guide on installation or upgrades, check out our [installation documentation](https://docs.gitea.com/category/installation)

## Special Thanks

We would also like to thank all of our supporters on [Open Collective](https://opencollective.com/gitea) who are helping to sustain us financially.

---

Looking for a seamless, hassle-free solution to manage your Git repositories?
Discover [Gitea Cloud](https://cloud.gitea.com) — A fully-managed, scalable platform designed to streamline your development workflow.

<!--more-->

## Changelog

## [1.23.5](https://github.com/go-gitea/gitea/releases/tag/v1.23.5) - 2025-03-03

* SECURITY
  * Bump x/oauth2 & x/crypto ([#33704](https://github.com/go-gitea/gitea/pull/33704)) ([#33727](https://github.com/go-gitea/gitea/pull/33727))
* PERFORMANCE
  * Optimize user dashboard loading ([#33686](https://github.com/go-gitea/gitea/pull/33686)) ([#33708](https://github.com/go-gitea/gitea/pull/33708))
* BUGFIXES
  * Fix navbar dropdown item align ([#33782](https://github.com/go-gitea/gitea/pull/33782))
  * Fix inconsistent closed issue list icon ([#33722](https://github.com/go-gitea/gitea/pull/33722)) ([#33728](https://github.com/go-gitea/gitea/pull/33728))
  * Fix for Maven Package Naming Convention Handling ([#33678](https://github.com/go-gitea/gitea/pull/33678)) ([#33679](https://github.com/go-gitea/gitea/pull/33679))
  * Improve Open-with URL encoding ([#33666](https://github.com/go-gitea/gitea/pull/33666)) ([#33680](https://github.com/go-gitea/gitea/pull/33680))
  * Deleting repository should unlink all related packages ([#33653](https://github.com/go-gitea/gitea/pull/33653)) ([#33673](https://github.com/go-gitea/gitea/pull/33673))
  * Fix omitempty bug ([#33663](https://github.com/go-gitea/gitea/pull/33663)) ([#33670](https://github.com/go-gitea/gitea/pull/33670))
  * Upgrade go-crypto from 1.1.4 to 1.1.6 ([#33745](https://github.com/go-gitea/gitea/pull/33745)) ([#33754](https://github.com/go-gitea/gitea/pull/33754))
  * Fix OCI image.version annotation for releases to use full semver ([#33698](https://github.com/go-gitea/gitea/pull/33698)) ([#33701](https://github.com/go-gitea/gitea/pull/33701))
  * Try to fix ACME path when renew ([#33668](https://github.com/go-gitea/gitea/pull/33668)) ([#33693](https://github.com/go-gitea/gitea/pull/33693))
  * Fix mCaptcha bug ([#33659](https://github.com/go-gitea/gitea/pull/33659)) ([#33661](https://github.com/go-gitea/gitea/pull/33661))
  * Git graph: don't show detached commits ([#33645](https://github.com/go-gitea/gitea/pull/33645)) ([#33650](https://github.com/go-gitea/gitea/pull/33650))
  * Use MatchPhraseQuery for bleve code search ([#33628](https://github.com/go-gitea/gitea/pull/33628))
  * Adjust appearence of commit status webhook ([#33778](https://github.com/go-gitea/gitea/pull/33778)) #33789
  * Upgrade golang net from 0.35.0 -> 0.36.0 ([#33795](https://github.com/go-gitea/gitea/pull/33795)) #33796

## Contributors

* [@arifer612](https://github.com/arifer612)
* [@denyskon](https://github.com/denyskon)
* [@dianaStr7](https://github.com/dianaStr7)
* [@ericLemanissier](https://github.com/ericLemanissier)
* [@jpraet](https://github.com/jpraet)
* [@lunny](https://github.com/lunny)
* [@silverwind](https://github.com/silverwind)
* [@wxiaoguang](https://github.com/wxiaoguang)

