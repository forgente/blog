---
date: "2021-09-03T13:31:00+01:00"
author: "zeripath"
title: "Gitea 1.15.2 is released"
tags: ["release"]
draft: false
---

Unfortunately following the release of 1.15.1 it has become apparent that there is an issue with upgrading from 1.15.0 to 1.15.1 due to problem with a table constraint that was unexpectedly automatically dropped. Users who upgraded straight from 1.14.x to 1.15.1 are not affected and users who upgraded from 1.15.0 to 1.15.1 can fix the problem using `gitea doctor recreate-table issue_index` or upgrade to 1.15.2.

We have merged [3](https://github.com/go-gitea/gitea/pulls?q=is:pr+milestone:1.15.2+is:merged) pull requests to release version 1.15.2.

You can download one of our pre-built binaries from our [downloads page](https://dl.gitea.io/gitea/1.15.2/) - make sure to select the correct platform! For further details on how to install, follow our [installation guide](https://docs.gitea.io/en-us/install-from-binary/).

We would also like to thank all of our supporters on [Open Collective](https://opencollective.com/gitea) who are helping to sustain us financially.

**Have you heard? We now have a [swag shop](https://shop.gitea.io)! :shirt: :tea:**

<!--more-->

## Changelog

### [1.15.2](https://github.com/go-gitea/gitea/releases/tag/v1.15.2) - 2021-09-03

* BUGFIXES
  * Add unique constraint back into issue_index (#16938)
  * Close storage objects before cleaning (#16934) (#16942)
