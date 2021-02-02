---
date: "{{.DateLong}}"
author: "{{.Author}}"
title: "Gitea {{.Milestone}} is released"
tags: ["release"]
draft: false
---

We are proud to present the release of Gitea version {{.Milestone}}.

We highly encourage users to update to this version for some important bug-fixes.

We have merged [{{.Merged}}](https://github.com/go-gitea/gitea/pulls?q=is%3Apr+milestone%3A{{.Milestone}}+is%3Amerged) pull requests to release this version.

<!-- Security Thanks! -->

You can download one of our pre-built binaries from our [downloads page](https://dl.gitea.io/gitea/{{.Milestone}}/) - make sure to select the correct platform! For further details on how to install, follow our [installation guide](https://docs.gitea.io/en-us/install-from-binary/).


We would also like to thank all of our supporters on [Open Collective](https://opencollective.com/gitea) who are helping to sustain us financially.

**Have you heard? We now have a [swag shop](https://shop.gitea.io)! :shirt: :tea:**

<!--more-->

## Changelog

## [{{.Milestone}}](https://github.com/go-gitea/gitea/releases/tag/v{{.Milestone}}) - {{.DateShort}}

<!-- Changelog Details -->
