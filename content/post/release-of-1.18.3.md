---
date: 2023-01-23T09:06:54+07:00
authors: "jolheiser"
title: "Gitea 1.18.3 is released"
tags: ["release", "gitea"]
draft: false
---

Gitea version 1.18.3 has been released as a security release.

We highly encourage users to update to this version for some important bug-fixes and a security patch.

We have merged [4](https://github.com/go-gitea/gitea/pulls?q=is%3Apr+milestone%3A1.18.3+is%3Amerged) pull requests to release this version.

<!-- Security Thanks! -->
Thanks to [@Gusted](https://gusted.xyz) for the report, and for the patch which [@KN4CK3R](https://gitea.com/KN4CK3R) applied!

You can download one of our pre-built binaries from our [downloads page](https://dl.gitea.io/gitea/1.18.3/) - make sure to select the correct platform! For further details on how to install, follow our [installation guide](https://docs.gitea.io/en-us/install-from-binary/).


We would also like to thank all of our supporters on [Open Collective](https://opencollective.com/gitea) who are helping to sustain us financially.

**Have you heard? We now have a [swag shop](https://shop.gitea.io)! :shirt: :tea:**

<!--more-->

## Changelog

## [1.18.3](https://github.com/go-gitea/gitea/releases/tag/v1.18.3) - 2023-01-23

<!-- Changelog Details -->
* SECURITY
  * Prevent multiple `To` recipients ([#22566](https://github.com/go-gitea/gitea/pull/22566)) ([#22569](https://github.com/go-gitea/gitea/pull/22569))
* BUGFIXES
  * Truncate commit summary on repo files table. ([#22551](https://github.com/go-gitea/gitea/pull/22551)) ([#22552](https://github.com/go-gitea/gitea/pull/22552))
  * Mute all links in issue timeline ([#22534](https://github.com/go-gitea/gitea/pull/22534))