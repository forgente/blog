---
date: 2021-10-21T17:04:26+07:00
authors: "zeripath"
title: "Gitea 1.15.5 is released"
tags: ["release", "gitea"]
draft: false
coverImageRelease: "1.15.5"
---

We are proud to present the release of Gitea version 1.15.5.

We highly encourage users to update to this version for some important bug-fixes and some security fixes.

We have merged [14](https://github.com/go-gitea/gitea/pulls?q=is%3Apr+milestone%3A1.15.5+is%3Amerged) pull requests to release this version.

:exclamation: We remind users that a bug was discovered with `gitea dump` in 1.14.3–1.14.6 and 1.15.0. Database dumps from these versions cause
broken fields in the `repo_unit` and `login_source` tables causing the issue identified in [#16961](https://github.com/go-gitea/gitea/pull/16961). 
Users on 1.14.x must upgrade to 1.14.7 before running `gitea dump`. If this is not possible and you are affected [#17137](https://github.com/go-gitea/gitea/pull/17137)
provides a new `gitea doctor` command to fix the `repo_unit` issue:

```
gitea doctor --fix --run fix-broken-repo-units
```

A command to provide an automatic fix for problems with the `login_source` table does not appear definitely possible and if you are affected please contact the maintainers.
 
<!-- Security Thanks! -->

You can download one of our pre-built binaries from our [downloads page](https://dl.gitea.io/gitea/1.15.5/) - make sure to select the correct platform! For further details on how to install, follow our [installation guide](https://docs.gitea.io/en-us/install-from-binary/).


We would also like to thank all of our supporters on [Open Collective](https://opencollective.com/gitea) who are helping to sustain us financially.

**Have you heard? We now have a [swag shop](https://shop.gitea.io)! :shirt: :tea:**

<!--more-->

## Changelog

## [1.15.5](https://github.com/go-gitea/gitea/releases/tag/v1.15.5) - 2021-10-21

* SECURITY
  * Upgrade Bluemonday to v1.0.16 (#17372) (#17374)
  * Ensure correct SSH permissions check for private and restricted users (#17370) (#17373)
* BUGFIXES
  * Prevent NPE in CSV diff rendering when column removed (#17018) (#17377)
  * Offer rsa-sha2-512 and rsa-sha2-256 algorithms in internal SSH (#17281) (#17376)
  * Don't panic if we fail to parse U2FRegistration data (#17304) (#17371)
  * Ensure popup text is aligned left (backport for 1.15) (#17343)
  * Ensure that git daemon export ok is created for mirrors (#17243) (#17306)
  * Disable core.protectNTFS (#17300) (#17302)
  * Use pointer for wrappedConn methods (#17295) (#17296)
  * AutoRegistration is supposed to be working with disabled registration (backport) (#17292)
  * Handle duplicate keys on GPG key ring (#17242) (#17284)
  * Fix SVG side by side comparison link (#17375) (#17391)
