---
date: 2021-08-05T09:02:55+01:00
authors: "zeripath"
title: "Gitea 1.14.6 is released"
tags: ["release", "gitea"]
draft: false
---

We are proud to present the release of Gitea version 1.14.6.

We highly encourage users to update to this version for some security fixes.

We have merged [6](https://github.com/go-gitea/gitea/pulls?q=is%3Apr+milestone%3A1.14.6+is%3Amerged) pull requests to release this version.

We would like to give a special thanks to [@6543](https://gitea.com/6543) and [@zeripath](https://gitea.com/zeripath) for submitting the security patches for this release.

You can download one of our pre-built binaries from our [downloads page](https://dl.gitea.io/gitea/1.14.6/) - make sure to select the correct platform! For further details on how to install, follow our [installation guide](https://docs.gitea.io/en-us/install-from-binary/).

We would also like to thank all of our supporters on [Open Collective](https://opencollective.com/gitea) who are helping to sustain us financially.

**Have you heard? We now have a [swag shop](https://shop.gitea.io)! :shirt: :tea:**

<!--more-->

## Changelog

### [1.14.6](https://github.com/go-gitea/gitea/releases/tag/v1.14.6) - 2021-08-04

* SECURITY
  * Bump github.com/markbates/goth from v1.67.1 to v1.68.0 (#16538) (#16540)
  * Switch to maintained JWT lib (#16532) (#16535)
  * Upgrade to latest version of golang-jwt (as forked for 1.14) (#16590) (#16607)
* BUGFIXES
  * Add basic edit ldap auth test & actually fix #16252 (#16465) (#16495)
  * Make cancel from CatFileBatch and CatFileBatchCheck wait for the command to end (#16479) (#16481)
