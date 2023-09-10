---
date: 2022-01-14T19:16:06+00:00
authors: "zeripath"
title: "Gitea 1.15.10 is released"
tags: ["release", "gitea"]
draft: false
coverImageRelease: "1.15.10"
---

We are proud to present the release of Gitea version 1.15.10.

We highly encourage users to update to this version for some important bug-fixes and a security upgrade to the MermaidJS library.

We have merged [8](https://github.com/go-gitea/gitea/pulls?q=is%3Apr+milestone%3A1.15.10+is%3Amerged) pull requests to release this version.

<!-- Security Thanks! -->

You can download one of our pre-built binaries from our [downloads page](https://dl.gitea.com/gitea/1.15.10/) - make sure to select the correct platform! For further details on how to install, follow our [installation guide](https://docs.gitea.com/installation/install-from-binary).

We would also like to thank all of our supporters on [Open Collective](https://opencollective.com/gitea) who are helping to sustain us financially.

**Have you heard? We now have a [swag shop](https://shop.gitea.io)! :shirt: :tea:**

<!--more-->

## Changelog

## [1.15.10](https://github.com/go-gitea/gitea/releases/tag/v1.15.10) - 2022-01-14

* BUGFIXES
  * Fix inconsistent PR comment counts (#18260) (#18261)
  * Fix release link broken (#18252) (#18253)
  * Fix update user from site administration page bug (#18250) (#18251)
  * Set HeadCommit when creating tags (#18116) (#18173)
  * Use correct translation key for error messages due to max repo limits (#18135 & #18153) (#18152)
  * Fix purple color in suggested label colors (#18241) (#18242)
* SECURITY
  * Bump mermaid from 8.10.1 to 8.13.8 (#18198) (#18206)
