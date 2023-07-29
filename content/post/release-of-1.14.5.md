---
date: 2021-07-16T09:02:55+01:00
authors: "zeripath"
title: "Gitea 1.14.5 is released"
tags: ["release", "gitea"]
draft: false
coverImageRelease: "1.14.5"
---

We are proud to present the release of Gitea version 1.14.5.

We highly encourage users to update to this version for some important bug-fixes.

We have merged [8](https://github.com/go-gitea/gitea/pulls?q=is%3Apr+milestone%3A1.14.5+is%3Amerged) pull requests to release this version.

We would like to give a special thanks to [@6543](https://gitea.com/6543) and [@zeripath](https://gitea.com/zeripath) for submitting the security patches for this release.

You can download one of our pre-built binaries from our [downloads page](https://dl.gitea.io/gitea/1.14.5/) - make sure to select the correct platform! For further details on how to install, follow our [installation guide](https://docs.gitea.io/en-us/install-from-binary/).

We would also like to thank all of our supporters on [Open Collective](https://opencollective.com/gitea) who are helping to sustain us financially.

**Have you heard? We now have a [swag shop](https://shop.gitea.io)! :shirt: :tea:**

<!--more-->

## Changelog

## [1.14.5](https://github.com/go-gitea/gitea/releases/tag/v1.14.5) - 2021-07-16

* SECURITY
  * Hide mirror passwords on repo settings page ([#16022](https://github.com/go-gitea/gitea/pull/16022)) ([#16355](https://github.com/go-gitea/gitea/pull/16355))
  * Update bluemonday to v1.0.15 ([#16379](https://github.com/go-gitea/gitea/pull/16379)) ([#16380](https://github.com/go-gitea/gitea/pull/16380))
* BUGFIXES
  * Retry rename on lock induced failures ([#16435](https://github.com/go-gitea/gitea/pull/16435)) ([#16439](https://github.com/go-gitea/gitea/pull/16439))
  * Validate issue index before querying DB ([#16406](https://github.com/go-gitea/gitea/pull/16406)) ([#16410](https://github.com/go-gitea/gitea/pull/16410))
  * Fix crash following ldap authentication update ([#16447](https://github.com/go-gitea/gitea/pull/16447)) ([#16449](https://github.com/go-gitea/gitea/pull/16449))
* ENHANCEMENTS
  * Redirect on bad CSRF instead of presenting bad page ([#14937](https://github.com/go-gitea/gitea/pull/14937)) ([#16378](https://github.com/go-gitea/gitea/pull/16378))
