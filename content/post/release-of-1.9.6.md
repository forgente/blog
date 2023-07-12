---
date: 2019-11-13T12:00:00+00:00
authors: "jolheiser"
title: "Gitea 1.9.6 is released"
tags: ["release", "gitea"]
draft: false
---

We are proud to present the release of Gitea version 1.9.6. 

We have merged [7](https://github.com/go-gitea/gitea/pulls?q=is%3Apr+milestone%3A1.9.6+is%3Aclosed) pull requests to release this version. 

You can download one of our pre-built binaries from our [downloads page](https://dl.gitea.io/gitea/1.9.6/) - make sure to select the correct platform! For further details on how to install, follow our [installation guide](https://docs.gitea.io/en-us/install-from-binary/).

We would also like to thank all of our supporters on [Open Collective](https://opencollective.com/gitea) who are helping to sustain us financially.


<!--more-->

## Changelog

* BUGFIXES
  * Allow to merge if file path contains " or \ ([#8629](https://github.com/go-gitea/gitea/pull/8629)) ([#8772](https://github.com/go-gitea/gitea/pull/8772))
  * Fix 500 when edit hook ([#8782](https://github.com/go-gitea/gitea/pull/8782)) ([#8790](https://github.com/go-gitea/gitea/pull/8790))
  * Fix issue with user.fullname ([#8904](https://github.com/go-gitea/gitea/pull/8904))
  * Update Github Migration Test ([#8897](https://github.com/go-gitea/gitea/pull/8897)) ([#8946](https://github.com/go-gitea/gitea/pull/8946))
  * Add Close() method to gogitRepository ([#8901](https://github.com/go-gitea/gitea/pull/8901)) ([#8958](https://github.com/go-gitea/gitea/pull/8958))
