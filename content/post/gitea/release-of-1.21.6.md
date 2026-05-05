---
date: 2024-02-23T11:19:18+08:00
authors: 
  - "lunny"
title: "Gitea 1.21.6 is released"
tags: ["release"]
draft: false
coverImageRelease: "1.21.6"
---

We are proud to present the release of Gitea version 1.21.6. It contains [50](https://github.com/go-gitea/gitea/pulls?q=is%3Apr+milestone%3A1.21.6+is%3Amerged) pull requests. We highly encourage users to update to this version for some important bug-fixes and fixes for two security vulnerabilities.

<!-- Security Thanks! -->
We would like to give a special thanks to the Forgejo team for reporting the security issue that was patched in this release.

Thanks to [@Gusted](https://github.com/Gusted), [@6543](https://github.com/6543), [@jolheiser](https://github.com/jolheiser) and [@wxiaoguang](https://github.com/wxiaoguang) for fixing the problems.

You can download one of our pre-built binaries from our [downloads page](https://dl.gitea.com/gitea/1.21.6/) - make sure to select the correct platform! For further details on how to install, follow our [installation guide](https://docs.gitea.com/installation/install-from-binary).

We would also like to thank all of our supporters on [Open Collective](https://opencollective.com/gitea) who are helping to sustain us financially.

**Are you looking for a seamless, hassle-free solution to manage your Git repositories? Look no further! [Gitea Cloud](https://cloud.gitea.com) is here to revolutionize your development experience.**

<!--more-->

## Changelog

## [1.21.6](https://github.com/go-gitea/gitea/releases/tag/v1.21.6) - 2024-02-23

<!-- Changelog Details -->

* SECURITY
  * Fix XSS vulnerabilities ([#29336](https://github.com/go-gitea/gitea/pull/29336))
  * Use general token signing secret ([#29205](https://github.com/go-gitea/gitea/pull/29205)) ([#29325](https://github.com/go-gitea/gitea/pull/29325))
* ENHANCEMENTS
  * Refactor git version functions and check compatibility ([#29155](https://github.com/go-gitea/gitea/pull/29155)) ([#29157](https://github.com/go-gitea/gitea/pull/29157))
  * Improve user experience for outdated comments ([#29050](https://github.com/go-gitea/gitea/pull/29050)) ([#29086](https://github.com/go-gitea/gitea/pull/29086))
  * Hide code links on release page if user cannot read code ([#29064](https://github.com/go-gitea/gitea/pull/29064)) ([#29066](https://github.com/go-gitea/gitea/pull/29066))
  * Wrap contained tags and branches again ([#29021](https://github.com/go-gitea/gitea/pull/29021)) ([#29026](https://github.com/go-gitea/gitea/pull/29026))
  * Fix incorrect button CSS usages ([#29015](https://github.com/go-gitea/gitea/pull/29015)) ([#29023](https://github.com/go-gitea/gitea/pull/29023))
  * Strip trailing newline in markdown code copy ([#29019](https://github.com/go-gitea/gitea/pull/29019)) ([#29022](https://github.com/go-gitea/gitea/pull/29022))
  * Implement some action notifier functions ([#29173](https://github.com/go-gitea/gitea/pull/29173)) ([#29308](https://github.com/go-gitea/gitea/pull/29308))
  * Load outdated comments when (un)resolving conversation on PR timeline ([#29203](https://github.com/go-gitea/gitea/pull/29203)) ([#29221](https://github.com/go-gitea/gitea/pull/29221))
* BUGFIXES
  * Refactor issue template parsing and fix API endpoint ([#29069](https://github.com/go-gitea/gitea/pull/29069)) ([#29140](https://github.com/go-gitea/gitea/pull/29140))
  * Fix swift packages not resolving ([#29095](https://github.com/go-gitea/gitea/pull/29095)) ([#29102](https://github.com/go-gitea/gitea/pull/29102))
  * Remove SSH workaround ([#27893](https://github.com/go-gitea/gitea/pull/27893)) ([#29332](https://github.com/go-gitea/gitea/pull/29332))
  * Only log error when tag sync fails ([#29295](https://github.com/go-gitea/gitea/pull/29295)) ([#29327](https://github.com/go-gitea/gitea/pull/29327))
  * Fix SSPI user creation ([#28948](https://github.com/go-gitea/gitea/pull/28948)) ([#29323](https://github.com/go-gitea/gitea/pull/29323))
  * Improve the `issue_comment` workflow trigger event ([#29277](https://github.com/go-gitea/gitea/pull/29277)) ([#29322](https://github.com/go-gitea/gitea/pull/29322))
  * Discard unread data of `git cat-file` ([#29297](https://github.com/go-gitea/gitea/pull/29297)) ([#29310](https://github.com/go-gitea/gitea/pull/29310))
  * Fix error display when merging PRs ([#29288](https://github.com/go-gitea/gitea/pull/29288)) ([#29309](https://github.com/go-gitea/gitea/pull/29309))
  * Prevent double use of `git cat-file` session. ([#29298](https://github.com/go-gitea/gitea/pull/29298)) ([#29301](https://github.com/go-gitea/gitea/pull/29301))
  * Fix missing link on outgoing new release notifications ([#29079](https://github.com/go-gitea/gitea/pull/29079)) ([#29300](https://github.com/go-gitea/gitea/pull/29300))
  * Fix debian InRelease Acquire-By-Hash newline ([#29204](https://github.com/go-gitea/gitea/pull/29204)) ([#29299](https://github.com/go-gitea/gitea/pull/29299))
  * Always write proc-receive hook for all git versions ([#29287](https://github.com/go-gitea/gitea/pull/29287)) ([#29291](https://github.com/go-gitea/gitea/pull/29291))
  * Do not show delete button when time tracker is disabled ([#29257](https://github.com/go-gitea/gitea/pull/29257)) ([#29279](https://github.com/go-gitea/gitea/pull/29279))
  * Workaround to clean up old reviews on creating a new one ([#28554](https://github.com/go-gitea/gitea/pull/28554)) ([#29264](https://github.com/go-gitea/gitea/pull/29264))
  * Fix bug when the linked account was disactived and list the linked accounts ([#29263](https://github.com/go-gitea/gitea/pull/29263))
  * Do not use lower tag names to find releases/tags ([#29261](https://github.com/go-gitea/gitea/pull/29261)) ([#29262](https://github.com/go-gitea/gitea/pull/29262))
  * Fix missed edit issues event for actions ([#29237](https://github.com/go-gitea/gitea/pull/29237)) ([#29251](https://github.com/go-gitea/gitea/pull/29251))
  * Only delete scheduled workflows when needed ([#29091](https://github.com/go-gitea/gitea/pull/29091)) ([#29235](https://github.com/go-gitea/gitea/pull/29235))
  * Make submit event code work with both jQuery event and native event ([#29223](https://github.com/go-gitea/gitea/pull/29223)) ([#29234](https://github.com/go-gitea/gitea/pull/29234))
  * Fix push to create with capitalize repo name ([#29090](https://github.com/go-gitea/gitea/pull/29090)) ([#29206](https://github.com/go-gitea/gitea/pull/29206))
  * Use ghost user if user was not found ([#29161](https://github.com/go-gitea/gitea/pull/29161)) ([#29169](https://github.com/go-gitea/gitea/pull/29169))
  * Dont load Review if Comment is CommentTypeReviewRequest ([#28551](https://github.com/go-gitea/gitea/pull/28551)) ([#29160](https://github.com/go-gitea/gitea/pull/29160))
  * Refactor parseSignatureFromCommitLine ([#29054](https://github.com/go-gitea/gitea/pull/29054)) ([#29108](https://github.com/go-gitea/gitea/pull/29108))
  * Avoid showing unnecessary JS errors when there are elements with different origin on the page ([#29081](https://github.com/go-gitea/gitea/pull/29081)) ([#29089](https://github.com/go-gitea/gitea/pull/29089))
  * Fix gitea-origin-url with default ports ([#29085](https://github.com/go-gitea/gitea/pull/29085)) ([#29088](https://github.com/go-gitea/gitea/pull/29088))
  * Fix orgmode link resolving ([#29024](https://github.com/go-gitea/gitea/pull/29024)) ([#29076](https://github.com/go-gitea/gitea/pull/29076))
  * Fix Elasticsearch Request Entity Too Large #28117 ([#29062](https://github.com/go-gitea/gitea/pull/29062)) ([#29075](https://github.com/go-gitea/gitea/pull/29075))
  * Do not render empty comments ([#29039](https://github.com/go-gitea/gitea/pull/29039)) ([#29049](https://github.com/go-gitea/gitea/pull/29049))
  * Avoid sending update/delete release notice when it is draft ([#29008](https://github.com/go-gitea/gitea/pull/29008)) ([#29025](https://github.com/go-gitea/gitea/pull/29025))
  * Fix gitea-action user avatar broken on edited menu ([#29190](https://github.com/go-gitea/gitea/pull/29190)) ([#29307](https://github.com/go-gitea/gitea/pull/29307))
  * Disallow merge when required checked are missing ([#29143](https://github.com/go-gitea/gitea/pull/29143)) ([#29268](https://github.com/go-gitea/gitea/pull/29268))
  * Fix incorrect link to swift doc and swift package-registry login command ([#29096](https://github.com/go-gitea/gitea/pull/29096)) ([#29103](https://github.com/go-gitea/gitea/pull/29103))
  * Convert visibility to number ([#29226](https://github.com/go-gitea/gitea/pull/29226)) ([#29244](https://github.com/go-gitea/gitea/pull/29244))
* DOCS
  * Remove outdated docs from some languages ([#27530](https://github.com/go-gitea/gitea/pull/27530)) ([#29208](https://github.com/go-gitea/gitea/pull/29208))
  * Fix typos in the documentation ([#29048](https://github.com/go-gitea/gitea/pull/29048)) ([#29056](https://github.com/go-gitea/gitea/pull/29056))
  * Explained where create issue/PR template ([#29035](https://github.com/go-gitea/gitea/pull/29035))

## Contributors for 1.21.6

* [@6543](https://github.com/6543)
* [@camlafit](https://github.com/camlafit)
* [@CEnnis91](https://github.com/CEnnis91)
* [@delvh](https://github.com/delvh)
* [@inferno-umar](https://github.com/inferno-umar)
* [@jpraet](https://github.com/jpraet)
* [@KN4CK3R](https://github.com/KN4CK3R)
* [@M4n5ter](https://github.com/M4n5ter)
* [@MarkusAmshove](https://github.com/MarkusAmshove)
* [@lunny](https://github.com/lunny)
* [@silverwind](https://github.com/silverwind)
* [@wolfogre](https://github.com/wolfogre)
* [@wxiaoguang](https://github.com/wxiaoguang)
* [@yp05327](https://github.com/yp05327)
* [@Zettat123](https://github.com/Zettat123)
* [@zokkis](https://github.com/zokkis)
