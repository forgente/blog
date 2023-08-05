---
date: 2021-03-24T09:37:25+08:00
authors: "lunny"
title: "Gitea 1.13.6 is released"
tags: ["release", "gitea"]
draft: false
coverImageRelease: "1.13.6"
---

We are proud to present the release of Gitea version 1.13.6.

We highly encourage users to update to this version for some very important bug-fixes.


We have merged [4](https://github.com/go-gitea/gitea/pulls?q=is%3Apr+milestone%3A1.13.6+is%3Amerged) pull requests to release this version.

<!-- Security Thanks! -->
We would like to give a special thanks to Marcos Españadero who is Network Management / SysOps at UTE ABI Corredor for reporting a security issue that was patched in this release.
Thanks to [@lunny](https://github.com/lunny) for fixing in [#15124](https://github.com/go-gitea/gitea/pull/15124, and [@zeripath](https://github.com/zeripath) for fixing another one in [#15096](https://github.com/go-gitea/gitea/pull/15096).

You can download one of our pre-built binaries from our [downloads page](https://dl.gitea.io/gitea/1.13.6/) - make sure to select the correct platform! For further details on how to install, follow our [installation guide](https://docs.gitea.io/en-us/install-from-binary/).

We would also like to thank all of our supporters on [Open Collective](https://opencollective.com/gitea) who are helping to sustain us financially.

**Have you heard? We now have a [swag shop](https://shop.gitea.io)! :shirt: :tea:**

<!--more-->

## Changelog

## [1.13.6](https://github.com/go-gitea/gitea/releases/tag/v1.13.6) - 2021-03-21

* SECURITY
  * Fix bug on avatar middleware ([#15124](https://github.com/go-gitea/gitea/pull/15124)) ([#15125](https://github.com/go-gitea/gitea/pull/15125))
  * Fix another clusterfuzz identified issue ([#15096](https://github.com/go-gitea/gitea/pull/15096)) ([#15114](https://github.com/go-gitea/gitea/pull/15114))
* API
  * Fix nil exeption for get pull reviews API [#15104](https://github.com/go-gitea/gitea/pull/15104) ([#15106](https://github.com/go-gitea/gitea/pull/15106))
* BUGFIXES
  * Fix markdown rendering in milestone content ([#15056](https://github.com/go-gitea/gitea/pull/15056)) ([#15092](https://github.com/go-gitea/gitea/pull/15092))
