---
date: 2024-04-16T12:04:00+08:00
authors: 
  - "lunny"
title: "Gitea 1.21.11 is released"
tags: ["release"]
draft: false
---

We are proud to present the release of Gitea version 1.21.11.

We highly encourage users to update to this version for some important bug-fixes, notably [#30136](https://github.com/go-gitea/gitea/pull/30136) which can cause XSS problem. We also upgrade to Golang 1.21.9 to include Golang security fix.

We have merged [32](https://github.com/go-gitea/gitea/pulls?q=is%3Apr+milestone%3A1.21.11+is%3Amerged) pull requests to release this version.

<!-- Security Thanks! -->

You can download one of our pre-built binaries from our [downloads page](https://dl.gitea.com/gitea/1.21.11/) - make sure to select the correct platform! For further details on how to install, follow our [installation guide](https://docs.gitea.com/installation/install-from-binary).

We would also like to thank all of our supporters on [Open Collective](https://opencollective.com/gitea) who are helping to sustain us financially.

**Are you looking for a seamless, hassle-free solution to manage your Git repositories? Look no further! [Gitea Cloud](https://cloud.gitea.com) is here to revolutionize your development experience.**

<!--more-->

## Changelog

## [1.21.11](https://github.com/go-gitea/gitea/releases/tag/v1.21.11) - 2024-04-16

<!-- Changelog Details -->

* SECURITY
  * Use go1.21.9 to include Golang security fix
  * Fix possible renderer security problem ([#30136](https://github.com/go-gitea/gitea/pull/30136)) ([#30315](https://github.com/go-gitea/gitea/pull/30315))
* BUGFIXES
  * Fix close file in the Upload func ([#30262](https://github.com/go-gitea/gitea/pull/30262)) ([#30269](https://github.com/go-gitea/gitea/pull/30269))
  * Fix inline math blocks can't be preceeded/followed by alphanumerical characters ([#30175](https://github.com/go-gitea/gitea/pull/30175)) ([#30250](https://github.com/go-gitea/gitea/pull/30250))
  * Fix missing 0 prefix of GPG key id ([#30245](https://github.com/go-gitea/gitea/pull/30245)) ([#30247](https://github.com/go-gitea/gitea/pull/30247))
  * Include encoding in signature payload ([#30174](https://github.com/go-gitea/gitea/pull/30174)) ([#30181](https://github.com/go-gitea/gitea/pull/30181))
  * Move from `max( id )` to `max( index )` for latest commit statuses ([#30076](https://github.com/go-gitea/gitea/pull/30076)) ([#30155](https://github.com/go-gitea/gitea/pull/30155))
  * Load attachments for code comments ([#30124](https://github.com/go-gitea/gitea/pull/30124)) ([#30126](https://github.com/go-gitea/gitea/pull/30126))
  * Fix gitea doctor will remove repo-avatar files when executing command storage-archives ([#30094](https://github.com/go-gitea/gitea/pull/30094)) ([#30120](https://github.com/go-gitea/gitea/pull/30120))
  * Fix possible data race on tests ([#30093](https://github.com/go-gitea/gitea/pull/30093)) ([#30108](https://github.com/go-gitea/gitea/pull/30108))
  * Performance optimization for git push ([#30104](https://github.com/go-gitea/gitea/pull/30104))
  * Fix duplicate migrated milestones ([#30102](https://github.com/go-gitea/gitea/pull/30102)) ([#30105](https://github.com/go-gitea/gitea/pull/30105))
  * Fix panic for fixBrokenRepoUnits16961 ([#30068](https://github.com/go-gitea/gitea/pull/30068)) ([#30100](https://github.com/go-gitea/gitea/pull/30100))
  * Fix incorrect SVGs ([#30087](https://github.com/go-gitea/gitea/pull/30087))
  * Fix create commit status ([#30225](https://github.com/go-gitea/gitea/pull/30225)) ([#30340](https://github.com/go-gitea/gitea/pull/30340))
  * Performance optimization for git push ([#30104](https://github.com/go-gitea/gitea/pull/30104)) ([#30354](https://github.com/go-gitea/gitea/pull/30354))
  * Fix misuse of unsupported global variables ([#30402](https://github.com/go-gitea/gitea/pull/30402))
  * Fix to delete the cookie when AppSubURL is non-empty ([#30375](https://github.com/go-gitea/gitea/pull/30375)) ([#30468](https://github.com/go-gitea/gitea/pull/30468))
  * Avoid user does not exist error when detecting schedule actions when the commit author is an external user ([#30357](https://github.com/go-gitea/gitea/pull/30357)) ([#30408](https://github.com/go-gitea/gitea/pull/30408))
  * Change the default maxPerPage for gitbucket ([#30392](https://github.com/go-gitea/gitea/pull/30392)) ([#30471](https://github.com/go-gitea/gitea/pull/30471))
  * Check the token's owner and repository when registering a runner ([#30406](https://github.com/go-gitea/gitea/pull/30406)) ([#30412](https://github.com/go-gitea/gitea/pull/30412))
  * Avoid losing token when updating mirror settings ([#30429](https://github.com/go-gitea/gitea/pull/30429)) ([#30466](https://github.com/go-gitea/gitea/pull/30466))
  * Fix commit status cache which missed target_url ([#30426](https://github.com/go-gitea/gitea/pull/30426)) ([#30445](https://github.com/go-gitea/gitea/pull/30445))
  * Fix rename branch 500 when the target branch is deleted but exist in database ([#30430](https://github.com/go-gitea/gitea/pull/30430)) ([#30437](https://github.com/go-gitea/gitea/pull/30437))
  * Fix mirror error when mirror repo is empty ([#30432](https://github.com/go-gitea/gitea/pull/30432)) ([#30467](https://github.com/go-gitea/gitea/pull/30467))
  * Use db.ListOptions directly instead of Paginator interface to make it easier to use and fix performance of /pulls and /issues ([#29990](https://github.com/go-gitea/gitea/pull/29990)) ([#30447](https://github.com/go-gitea/gitea/pull/30447))
  * Fix code owners will not be mentioned when a pull request comes from a forked repository ([#30476](https://github.com/go-gitea/gitea/pull/30476)) ([#30497](https://github.com/go-gitea/gitea/pull/30497))
* DOCS
  * Update actions variables documents ([#30394](https://github.com/go-gitea/gitea/pull/30394)) ([#30405](https://github.com/go-gitea/gitea/pull/30405))
* MISC
  * Update katex to 0.16.10 ([#30089](https://github.com/go-gitea/gitea/pull/30089))
  * Upgrade go-sqlite to v1.14.22 ([#30462](https://github.com/go-gitea/gitea/pull/30462))

## Contributors

* [@jmlt2002](https://github.com/jmlt2002)
* [@jtran](https://github.com/jtran)
* [@KN4CK3R](https://github.com/KN4CK3R)
* [@lunny](https://github.com/lunny)
* [@scribblemaniac](https://github.com/scribblemaniac)
* [@silverwind](https://github.com/silverwind)
* [@stevapple](https://github.com/stevapple)
* [@testwill](https://github.com/testwill)
* [@wolfogre](https://github.com/wolfogre)
* [@yp05327](https://github.com/yp05327)
* [@Zettat123](https://github.com/Zettat123)
