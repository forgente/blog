---
date: 2021-10-28
authors: "zeripath"
title: "Gitea 1.15.6 is released"
tags: ["release", "gitea"]
draft: false
coverImageRelease: "1.15.6"
---

We are proud to present the release of Gitea version 1.15.6.

We highly encourage users to update to this version for some important bug-fixes.

We have merged [9](https://github.com/go-gitea/gitea/pulls?q=is%3Apr+milestone%3A1.15.6+is%3Amerged) pull requests to release this version.

:exclamation: We remind users that a bug was discovered with `gitea dump` in 1.14.3–1.14.6 and 1.15.0. Database dumps from these versions cause
broken fields in the `repo_unit` and `login_source` tables causing the issue identified in [#16961](https://github.com/go-gitea/gitea/pull/16961). 
Users on 1.14.x must upgrade to 1.14.7 before running `gitea dump`. If this is not possible and you are affected [#17137](https://github.com/go-gitea/gitea/pull/17137)
provides a new `gitea doctor` command to fix the `repo_unit` issue:

```
gitea doctor --fix --run fix-broken-repo-units
```

A command to provide an automatic fix for problems with the `login_source` table does not appear definitely possible and if you are affected please contact the maintainers.
 
<!-- Security Thanks! -->

You can download one of our pre-built binaries from our [downloads page](https://dl.gitea.com/gitea/1.15.6/) - make sure to select the correct platform! For further details on how to install, follow our [installation guide](https://docs.gitea.com/installation/install-from-binary).


We would also like to thank all of our supporters on [Open Collective](https://opencollective.com/gitea) who are helping to sustain us financially.

**Have you heard? We now have a [swag shop](https://shop.gitea.io)! :shirt: :tea:**

<!--more-->

## Changelog

## [1.15.6](https://github.com/go-gitea/gitea/releases/tag/v1.15.6) - 2021-10-28

* BUGFIXES
  * Prevent panic in serv.go with Deploy Keys (#17434) (#17435)
  * Fix CSV render error (#17406) (#17431)
  * Read expected buffer size (#17409) (#17430)
  * Ensure that restricted users can access repos for which they are members (#17460) (#17464)
  * Make commit-statuses popup show correctly (#17447) (#17466)
* TESTING
  * Add integration tests for private.NoServCommand and private.ServCommand (#17456) (#17463)
