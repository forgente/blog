---
date: 2021-12-22T12:58:38+07:00
authors: "lunny"
title: "Gitea 1.15.8 is released"
tags: ["release", "gitea"]
draft: false
coverImageRelease: "1.15.8"
---

We are proud to present the release of Gitea version 1.15.8.

We highly encourage users to update to this version for some important bug-fixes.

We have merged [16](https://github.com/go-gitea/gitea/pulls?q=is%3Apr+milestone%3A1.15.8+is%3Amerged) pull requests to release this version.

:exclamation: We remind users that a bug was discovered with `gitea dump` in 1.14.3–1.14.6 and 1.15.0. Database dumps from these versions cause
broken fields in the `repo_unit` and `login_source` tables causing the issue identified in [#16961](https://github.com/go-gitea/gitea/pull/16961). 
Users on 1.14.x must upgrade to 1.14.7 before running `gitea dump`. If this is not possible and you are affected [#17137](https://github.com/go-gitea/gitea/pull/17137)
provides a new `gitea doctor` command to fix the `repo_unit` issue:

```
gitea doctor --fix --run fix-broken-repo-units
```

<!-- Security Thanks! -->

You can download one of our pre-built binaries from our [downloads page](https://dl.gitea.com/gitea/1.15.8/) - make sure to select the correct platform! For further details on how to install, follow our [installation guide](https://docs.gitea.com/installation/install-from-binary).


We would also like to thank all of our supporters on [Open Collective](https://opencollective.com/gitea) who are helping to sustain us financially.

**Have you heard? We now have a [swag shop](https://shop.gitea.io)! :shirt: :tea:**

<!--more-->

## Changelog

## [1.15.8](https://github.com/go-gitea/gitea/releases/tag/v1.15.8) - 2021-12-20

* BUGFIXES
  * Move POST /{username}/action/{action} to simply POST /{username} ([#18045](https://github.com/go-gitea/gitea/pull/18045)) ([#18046](https://github.com/go-gitea/gitea/pull/18046))
  * Fix delete u2f keys bug ([#18040](https://github.com/go-gitea/gitea/pull/18040)) ([#18042](https://github.com/go-gitea/gitea/pull/18042))
  * Reset Session ID on login ([#18018](https://github.com/go-gitea/gitea/pull/18018)) ([#18041](https://github.com/go-gitea/gitea/pull/18041))
  * Prevent off-by-one error on comments on newly appended lines ([#18029](https://github.com/go-gitea/gitea/pull/18029)) ([#18035](https://github.com/go-gitea/gitea/pull/18035))
  * Stop printing 03d after escaped characters in logs ([#18030](https://github.com/go-gitea/gitea/pull/18030)) ([#18034](https://github.com/go-gitea/gitea/pull/18034))
  * Reset locale on login ([#18023](https://github.com/go-gitea/gitea/pull/18023)) ([#18025](https://github.com/go-gitea/gitea/pull/18025))
  * Fix reset password email template ([#17025](https://github.com/go-gitea/gitea/pull/17025)) ([#18022](https://github.com/go-gitea/gitea/pull/18022))
  * Fix outType on gitea dump ([#18000](https://github.com/go-gitea/gitea/pull/18000)) ([#18016](https://github.com/go-gitea/gitea/pull/18016))
  * Ensure complexity, minlength and isPwned are checked on password setting ([#18005](https://github.com/go-gitea/gitea/pull/18005)) ([#18015](https://github.com/go-gitea/gitea/pull/18015))
  * Fix rename notification bug ([#18011](https://github.com/go-gitea/gitea/pull/18011))
  * Prevent double decoding of % in url params  ([#17997](https://github.com/go-gitea/gitea/pull/17997)) ([#18001](https://github.com/go-gitea/gitea/pull/18001))
  * Prevent hang in git cat-file if the repository is not a valid repository (Partial [#17991](https://github.com/go-gitea/gitea/pull/17991)) ([#17992](https://github.com/go-gitea/gitea/pull/17992))
  * Prevent deadlock in create issue ([#17970](https://github.com/go-gitea/gitea/pull/17970)) ([#17982](https://github.com/go-gitea/gitea/pull/17982))
* TESTING
  * Use non-expiring key. ([#17984](https://github.com/go-gitea/gitea/pull/17984)) ([#17985](https://github.com/go-gitea/gitea/pull/17985))

<!-- Changelog Details -->
