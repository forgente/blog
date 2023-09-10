---
date: 2023-05-08T22:18:00+08:00
authors: "lunny"
title: "Gitea 1.19.3 is released"
tags: ["release"]
draft: false
coverImageRelease: "1.19.3"
---

We are proud to present the release of Gitea version 1.19.3.

We highly encourage users to update to this version for some important bug-fixes.

We have merged [8](https://github.com/go-gitea/gitea/pulls?q=is%3Apr+milestone%3A1.19.3+is%3Amerged) pull requests to release this version.

In this release, we use golang 1.20.4 to fix [CVE-2023-24539](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2023-24539), [CVE-2023-24540](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2023-24540), and [CVE-2023-29400](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2023-29400) .

You can download one of our pre-built binaries from our [downloads page](https://dl.gitea.com/gitea/1.19.3/) - make sure to select the correct platform! For further details on how to install, follow our [installation guide](https://docs.gitea.com/installation/install-from-binary).

We would also like to thank all of our supporters on [Open Collective](https://opencollective.com/gitea) who are helping to sustain us financially.

**Have you heard? We now have a [swag shop](https://shop.gitea.io)! :shirt: :tea:**

<!--more-->

## Changelog

## [1.19.3](https://github.com/go-gitea/gitea/releases/tag/1.19.3) - 2023-05-03

* SECURITY
  * Use golang 1.20.4 to fix CVE-2023-24539, CVE-2023-24540, and CVE-2023-29400
* ENHANCEMENTS
  * Enable whitespace rendering on selection in Monaco ([#24444](https://github.com/go-gitea/gitea/pull/24444)) ([#24485](https://github.com/go-gitea/gitea/pull/24485))
  * Improve milestone filter on issues page ([#22423](https://github.com/go-gitea/gitea/pull/22423)) ([#24440](https://github.com/go-gitea/gitea/pull/24440))
* BUGFIXES
  * Fix api error message if fork exists ([#24487](https://github.com/go-gitea/gitea/pull/24487)) ([#24493](https://github.com/go-gitea/gitea/pull/24493))
  * Fix user-cards format ([#24428](https://github.com/go-gitea/gitea/pull/24428)) ([#24431](https://github.com/go-gitea/gitea/pull/24431))
  * Fix incorrect CurrentUser check for docker rootless ([#24435](https://github.com/go-gitea/gitea/pull/24435))
  * Getting the tag list does not require being signed in ([#24413](https://github.com/go-gitea/gitea/pull/24413)) ([#24416](https://github.com/go-gitea/gitea/pull/24416))
