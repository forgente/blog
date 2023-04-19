---
date: "2020-01-18T12:30:00+00:00"
author: "jolheiser"
title: "Gitea 1.10.3 is released"
tags: ["release", "gitea"]
draft: false
---

We are proud to present the release of Gitea version 1.10.3.

We have merged [15](https://github.com/go-gitea/gitea/pulls?q=is%3Apr+milestone%3A1.10.3+is%3Aclosed) pull requests to release this version.

You can download one of our pre-built binaries from our [downloads page](https://dl.gitea.io/gitea/1.10.3/) - make sure to select the correct platform! For further details on how to install, follow our [installation guide](https://docs.gitea.io/en-us/install-from-binary/).

We would also like to thank all of our supporters on [Open Collective](https://opencollective.com/gitea) who are helping to sustain us financially.

We would like to thank those who reported and/or fixed security issues in this release:  

* Masum Olgun for reporting [#9678](https://github.com/go-gitea/gitea/pull/9678)
  * With special thanks to [@zeripath](https://github.com/zeripath) for fixing
* Brad Wadsworth from [Watermark Insights](https://www.watermarkinsights.com/) for reporting [#9682](https://github.com/go-gitea/gitea/pull/9682)
  * With special thanks to [@zeripath](https://github.com/zeripath) for fixing

<!--more-->

## Changelog

* SECURITY
  * Hide credentials when submitting migration ([#9102](https://github.com/go-gitea/gitea/pull/9102)) ([#9704](https://github.com/go-gitea/gitea/pull/9704))
  * Never allow an empty password to validate ([#9682](https://github.com/go-gitea/gitea/pull/9682)) ([#9684](https://github.com/go-gitea/gitea/pull/9684))
  * Prevent redirect to Host ([#9678](https://github.com/go-gitea/gitea/pull/9678)) ([#9680](https://github.com/go-gitea/gitea/pull/9680))
  * Hide public repos owned by private orgs ([#9609](https://github.com/go-gitea/gitea/pull/9609)) ([#9616](https://github.com/go-gitea/gitea/pull/9616))
* BUGFIXES
  * Allow assignee on Pull Creation when Issue Unit is deactivated ([#9836](https://github.com/go-gitea/gitea/pull/9836)) ([#9838](https://github.com/go-gitea/gitea/pull/9838))
  * Fix download file wrong content-type ([#9825](https://github.com/go-gitea/gitea/pull/9825)) ([#9835](https://github.com/go-gitea/gitea/pull/9835))
  * Fix wrong identify poster on a migrated pull request when submit review ([#9827](https://github.com/go-gitea/gitea/pull/9827)) ([#9831](https://github.com/go-gitea/gitea/pull/9831))
  * Fix dump non-exist log directory ([#9818](https://github.com/go-gitea/gitea/pull/9818)) ([#9820](https://github.com/go-gitea/gitea/pull/9820))
  * Fix compare ([#9808](https://github.com/go-gitea/gitea/pull/9808)) ([#9815](https://github.com/go-gitea/gitea/pull/9815))
  * Fix missing msteam webhook on organization ([#9781](https://github.com/go-gitea/gitea/pull/9781)) ([#9795](https://github.com/go-gitea/gitea/pull/9795))
  * Fix add team on collaborator page when same name as organization ([#9783](https://github.com/go-gitea/gitea/pull/9783))
  * Fix cache problem on dashboard ([#9358](https://github.com/go-gitea/gitea/pull/9358)) ([#9703](https://github.com/go-gitea/gitea/pull/9703))
  * Send tag create and push webhook when release created on UI ([#8671](https://github.com/go-gitea/gitea/pull/8671)) ([#9702](https://github.com/go-gitea/gitea/pull/9702))
  * Branches not at ref commit ID should not be listed as Merged ([#9614](https://github.com/go-gitea/gitea/pull/9614)) ([#9639](https://github.com/go-gitea/gitea/pull/9639))
