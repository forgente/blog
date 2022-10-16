---
date: "2022-10-14T12:34:02+07:00"
author: "jolheiser"
title: "Gitea 1.17.3 is released"
tags: ["release"]
draft: false
---

We are proud to present the release of Gitea version 1.17.3.

We highly encourage users to update to this version for some important bug-fixes.

We have merged [29](https://github.com/go-gitea/gitea/pulls?q=is%3Apr+milestone%3A1.17.3+is%3Amerged) pull requests to release this version.

<!-- Security Thanks! -->

A big thank you to Ngo Wei Lin ([@Creastery](https://twitter.com/creastery)) of STAR Labs ([@starlabs_sg](https://twitter.com/starlabs_sg)) for reporting issues [#21465](https://github.com/go-gitea/gitea/pull/21465) and [#21464](https://github.com/go-gitea/gitea/pull/21464), and a thank you to to [techknowlogick](https://gitea.com/techknowlogick), [wxiaoguang](https://gitea.com/wxiaoguang), and [6543](https://gitea.com/6543) for sending patches to resolve them.

You can download one of our pre-built binaries from our [downloads page](https://dl.gitea.io/gitea/1.17.3/) - make sure to select the correct platform! For further details on how to install, follow our [installation guide](https://docs.gitea.io/en-us/install-from-binary/).

We would also like to thank all of our supporters on [Open Collective](https://opencollective.com/gitea) who are helping to sustain us financially.

**Have you heard? We now have a [swag shop](https://shop.gitea.io)! :shirt: :tea:**

<!--more-->

## Changelog

## [1.17.3](https://github.com/go-gitea/gitea/releases/tag/v1.17.3) - 2022-10-14

<!-- Changelog Details -->
* SECURITY
  * Bump `golang.org/x/text` ([#21412](https://github.com/go-gitea/gitea/pull/21412)) ([#21413](https://github.com/go-gitea/gitea/pull/21413))
  * Update bluemonday ([#21281](https://github.com/go-gitea/gitea/pull/21281)) ([#21287](https://github.com/go-gitea/gitea/pull/21287))
  * Sanitize and Escape refs in git backend ([#21464](https://github.com/go-gitea/gitea/pull/21464)) ([#21463](https://github.com/go-gitea/gitea/pull/21463))
* ENHANCEMENTS
  * Fix empty container layer history and UI ([#21251](https://github.com/go-gitea/gitea/pull/21251)) ([#21278](https://github.com/go-gitea/gitea/pull/21278))
  * Use en-US as fallback when using other default language ([#21200](https://github.com/go-gitea/gitea/pull/21200)) ([#21256](https://github.com/go-gitea/gitea/pull/21256))
  * Make the vscode clone link respect transport protocol ([#20557](https://github.com/go-gitea/gitea/pull/20557)) ([#21128](https://github.com/go-gitea/gitea/pull/21128))
* BUGFIXES
  * Do DB update after merge in hammer context ([#21401](https://github.com/go-gitea/gitea/pull/21401)) ([#21416](https://github.com/go-gitea/gitea/pull/21416))
  * Add Num{Issues,Pulls} stats checks ([#21404](https://github.com/go-gitea/gitea/pull/21404)) ([#21414](https://github.com/go-gitea/gitea/pull/21414))
  * Stop logging CheckPath returns error: context canceled ([#21064](https://github.com/go-gitea/gitea/pull/21064)) ([#21405](https://github.com/go-gitea/gitea/pull/21405))
  * Parse OAuth Authorization header when request omits client secret ([#21351](https://github.com/go-gitea/gitea/pull/21351)) ([#21374](https://github.com/go-gitea/gitea/pull/21374))
  * Ignore port for loopback redirect URIs ([#21293](https://github.com/go-gitea/gitea/pull/21293)) ([#21373](https://github.com/go-gitea/gitea/pull/21373))
  * Set SemverCompatible to false for Conan packages ([#21275](https://github.com/go-gitea/gitea/pull/21275)) ([#21366](https://github.com/go-gitea/gitea/pull/21366))
  * Tag list should include draft releases with existing tags ([#21263](https://github.com/go-gitea/gitea/pull/21263)) ([#21365](https://github.com/go-gitea/gitea/pull/21365))
  * Fix linked account translation ([#21331](https://github.com/go-gitea/gitea/pull/21331)) ([#21334](https://github.com/go-gitea/gitea/pull/21334))
  * Make NuGet service index publicly accessible ([#21242](https://github.com/go-gitea/gitea/pull/21242)) ([#21277](https://github.com/go-gitea/gitea/pull/21277))
  * Foreign ID conflicts if ID is 0 for each item ([#21271](https://github.com/go-gitea/gitea/pull/21271)) ([#21272](https://github.com/go-gitea/gitea/pull/21272))
  * Use absolute links in feeds ([#21229](https://github.com/go-gitea/gitea/pull/21229)) ([#21265](https://github.com/go-gitea/gitea/pull/21265))
  * Prevent invalid behavior for file reviewing when loading more files ([#21230](https://github.com/go-gitea/gitea/pull/21230)) ([#21234](https://github.com/go-gitea/gitea/pull/21234))
  * Respect `REQUIRE_SIGNIN_VIEW` for packages ([#20873](https://github.com/go-gitea/gitea/pull/20873)) ([#21232](https://github.com/go-gitea/gitea/pull/21232))
  * Treat git object mode 40755 as directory ([#21195](https://github.com/go-gitea/gitea/pull/21195)) ([#21218](https://github.com/go-gitea/gitea/pull/21218))
  * Allow uppercase ASCII alphabet in PyPI package names ([#21095](https://github.com/go-gitea/gitea/pull/21095)) ([#21217](https://github.com/go-gitea/gitea/pull/21217))
  * Fix limited user cannot view himself's profile ([#21212](https://github.com/go-gitea/gitea/pull/21212))
  * Fix template bug of admin monitor ([#21209](https://github.com/go-gitea/gitea/pull/21209))
  * Fix reaction of issues ([#21185](https://github.com/go-gitea/gitea/pull/21185)) ([#21196](https://github.com/go-gitea/gitea/pull/21196))
  * Fix CSV diff for added/deleted files ([#21189](https://github.com/go-gitea/gitea/pull/21189)) ([#21193](https://github.com/go-gitea/gitea/pull/21193))
  * Fix pagination limit parameter problem ([#21111](https://github.com/go-gitea/gitea/pull/21111))
* TESTING
  * Fix missing m.Run() in TestMain ([#21341](https://github.com/go-gitea/gitea/pull/21341))
* BUILD
  * Use Go 1.19 fmt for Gitea 1.17, sync emoji data ([#21239](https://github.com/go-gitea/gitea/pull/21239))