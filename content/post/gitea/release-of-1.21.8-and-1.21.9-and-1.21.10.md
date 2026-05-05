---
date: 2024-03-27T10:22:00+08:00
authors:
  - "lunny"
title: "1.21.8/9/10 are released"
tags: ["release"]
draft: false
coverImageRelease: "1.21.10"
---

Gitea 1.21.10 is now released. 1.21.10 includs [8](https://github.com/go-gitea/gitea/pulls?q=is%3Apr+milestone%3A1.21.10+is%3Amerged) merged PRs. You are highly recommanded to upgrade to this version ASAP. This is also include the bug fixes in 1.21.8 and 1.21.9 which weren't announcemented. 1.21.8 includes [50](https://github.com/go-gitea/gitea/pulls?q=is%3Apr+milestone%3A1.21.8+is%3Amerged) merged PRs and 1.21.9 includes [33](https://github.com/go-gitea/gitea/pulls?q=is%3Apr+milestone%3A1.21.9+is%3Amerged) merged PRs

You can download Gitea 1.21.10 for example from our [downloads page](https://dl.gitea.com/gitea/1.21.10/). Please read our [installation guide](https://docs.gitea.com/installation/install-from-binary) for more information on installation.

We would also like to thank all of our supporters on [Open Collective](https://opencollective.com/gitea) who are helping to sustain us financially.

**Are you looking for a seamless, hassle-free solution to manage your Git repositories? Look no further! [Gitea Cloud](https://cloud.gitea.com) is here to revolutionize your development experience.**

## Changelog

## [1.21.10](https://github.com/go-gitea/gitea/releases/tag/v1.21.10) - 2024-03-25

* BUGFIXES
  * Fix Add/Remove WIP on pull request title failure ([#29999](https://github.com/go-gitea/gitea/pull/29999)) ([#30066](https://github.com/go-gitea/gitea/pull/30066))
  * Fix misuse of `TxContext` ([#30061](https://github.com/go-gitea/gitea/pull/30061)) ([#30062](https://github.com/go-gitea/gitea/pull/30062))
  * Respect DEFAULT_ORG_MEMBER_VISIBLE setting when adding creator to org ([#30013](https://github.com/go-gitea/gitea/pull/30013)) ([#30035](https://github.com/go-gitea/gitea/pull/30035))
  * Escape paths for find file correctly ([#30026](https://github.com/go-gitea/gitea/pull/30026)) ([#30031](https://github.com/go-gitea/gitea/pull/30031))
  * Remove duplicate option in admin screen and now-unused translation keys ([#28492](https://github.com/go-gitea/gitea/pull/28492)) ([#30024](https://github.com/go-gitea/gitea/pull/30024))
  * Fix manual merge form and 404 page templates ([#30000](https://github.com/go-gitea/gitea/pull/30000))

## Contributors for 1.21.10

* [@DrMaxNix](https://github.com/DrMaxNix)
* [@lunny](https://github.com/lunny)
* [@silverwind](https://github.com/silverwind)
* [@wxiaoguang](https://github.com/wxiaoguang)
* [@wolfogre](https://github.com/wolfogre)

## [1.21.9](https://github.com/go-gitea/gitea/releases/tag/v1.21.9) - 2024-03-21

* PERFORMANCE
  * Only do counting when count_only=true for repo dashboard ([#29884](https://github.com/go-gitea/gitea/pull/29884)) ([#29905](https://github.com/go-gitea/gitea/pull/29905))
  * Add cache for dashboard commit status ([#29932](https://github.com/go-gitea/gitea/pull/29932))
* ENHANCEMENT
  * Make runs-on support variable expression ([#29468](https://github.com/go-gitea/gitea/pull/29468)) ([#29782](https://github.com/go-gitea/gitea/pull/29782))
  * Show Actions post step when it's running ([#29926](https://github.com/go-gitea/gitea/pull/29926)) ([#29928](https://github.com/go-gitea/gitea/pull/29928))
* BUGFIXES
  * Fix PR creation via API between branches of the same repo with head field namespaced ([#26986](https://github.com/go-gitea/gitea/pull/26986)) ([#29857](https://github.com/go-gitea/gitea/pull/29857))
  * Fix and rewrite markup anchor processing ([#29931](https://github.com/go-gitea/gitea/pull/29931)) ([#29946](https://github.com/go-gitea/gitea/pull/29946))
  * Notify reviewers added via CODEOWNERS ([#29842](https://github.com/go-gitea/gitea/pull/29842)) ([#29902](https://github.com/go-gitea/gitea/pull/29902))
  * Fix template error when comment review doesn't exist ([#29888](https://github.com/go-gitea/gitea/pull/29888)) ([#29889](https://github.com/go-gitea/gitea/pull/29889))
  * Fix user id column case ([#29863](https://github.com/go-gitea/gitea/pull/29863)) ([#29867](https://github.com/go-gitea/gitea/pull/29867))
  * Make meilisearch do exact search for issues (#29740 & [#29671](https://github.com/go-gitea/gitea/pull/29671)) ([#29846](https://github.com/go-gitea/gitea/pull/29846))
  * Fix the `for` attribute not pointing to the ID of the color picker ([#29813](https://github.com/go-gitea/gitea/pull/29813)) ([#29815](https://github.com/go-gitea/gitea/pull/29815))
  * Fix codeowner detected diff base branch to mergebase ([#29783](https://github.com/go-gitea/gitea/pull/29783)) ([#29807](https://github.com/go-gitea/gitea/pull/29807))
  * Fix Safari spinner rendering ([#29801](https://github.com/go-gitea/gitea/pull/29801)) ([#29802](https://github.com/go-gitea/gitea/pull/29802))
  * Fix missing translation on milestones ([#29785](https://github.com/go-gitea/gitea/pull/29785)) ([#29789](https://github.com/go-gitea/gitea/pull/29789))
  * Fix user router possible panic ([#29751](https://github.com/go-gitea/gitea/pull/29751)) ([#29786](https://github.com/go-gitea/gitea/pull/29786))
  * Fix possible NPE in ToPullReviewList ([#29759](https://github.com/go-gitea/gitea/pull/29759)) ([#29775](https://github.com/go-gitea/gitea/pull/29775))
  * Fix the wrong default value of ENABLE_OPENID_SIGNIN on docs ([#29925](https://github.com/go-gitea/gitea/pull/29925)) ([#29927](https://github.com/go-gitea/gitea/pull/29927))
  * Solving the issue of UI disruption when the review is deleted without refreshing ([#29951](https://github.com/go-gitea/gitea/pull/29951)) ([#29968](https://github.com/go-gitea/gitea/pull/29968))
  * Fix loadOneBranch panic ([#29938](https://github.com/go-gitea/gitea/pull/29938)) ([#29939](https://github.com/go-gitea/gitea/pull/29939))
  * Fix invalid link of the commit status when ref is tagged ([#29752](https://github.com/go-gitea/gitea/pull/29752)) ([#29908](https://github.com/go-gitea/gitea/pull/29908))
  * Editor error message misleading due to re-used key. ([#29859](https://github.com/go-gitea/gitea/pull/29859)) ([#29876](https://github.com/go-gitea/gitea/pull/29876))
  * Fix double border and border-radius on empty action steps ([#29845](https://github.com/go-gitea/gitea/pull/29845)) ([#29850](https://github.com/go-gitea/gitea/pull/29850))
  * Use `Temporal.PlainDate` for absolute dates ([#29804](https://github.com/go-gitea/gitea/pull/29804)) ([#29808](https://github.com/go-gitea/gitea/pull/29808))
  * Fix incorrect package link method calls in templates ([#29580](https://github.com/go-gitea/gitea/pull/29580)) ([#29764](https://github.com/go-gitea/gitea/pull/29764))
  * Fix the bug that the user may log out if GetUserByID returns unknown error ([#29962](https://github.com/go-gitea/gitea/pull/29962)) ([#29964](https://github.com/go-gitea/gitea/pull/29964))
  * Performance improvements for pull request list page ([#29900](https://github.com/go-gitea/gitea/pull/29900)) ([#29972](https://github.com/go-gitea/gitea/pull/29972))
  * Fix bugs in rerunning jobs ([#29983](https://github.com/go-gitea/gitea/pull/29983)) ([#29955](https://github.com/go-gitea/gitea/pull/29955))

## Contributors for 1.21.9

* [@6543](https://github.com/6543)
* [@buckybytes](https://github.com/buckybytes)
* [@denyskon](https://github.com/denyskon)
* [@HEREYUA](https://github.com/HEREYUA)
* [@lng2020](https://github.com/lng2020)
* [@lunny](https://github.com/lunny)
* [@norohind](https://github.com/norohind)
* [@sillyguodong](https://github.com/sillyguodong)
* [@silverwind](https://github.com/silverwind)
* [@wolfogre](https://github.com/wolfogre)
* [@wxiaoguang](https://github.com/wxiaoguang)
* [@yardenshoham](https://github.com/yardenshoham)
* [@yp05327](https://github.com/yp05327)
* [@Zettat123](https://github.com/Zettat123)

## [1.21.8](https://github.com/go-gitea/gitea/releases/tag/v1.21.8) - 2024-03-12

* SECURITY
  * Only use supported sort orders for "/explore/users" page ([#29430](https://github.com/go-gitea/gitea/pull/29430)) ([#29443](https://github.com/go-gitea/gitea/pull/29443))
* ENHANCEMENTS
  * Fix wrong line number in code search result ([#29260](https://github.com/go-gitea/gitea/pull/29260)) ([#29623](https://github.com/go-gitea/gitea/pull/29623))
* BUGFIXES
  * Use Get but not Post to get actions artifacts ([#29734](https://github.com/go-gitea/gitea/pull/29734)) ([#29737](https://github.com/go-gitea/gitea/pull/29737))
  * Fix inconsistent rendering of block mathematical expressions ([#29677](https://github.com/go-gitea/gitea/pull/29677)) ([#29711](https://github.com/go-gitea/gitea/pull/29711))
  * Fix rendering internal file links in org ([#29669](https://github.com/go-gitea/gitea/pull/29669)) ([#29705](https://github.com/go-gitea/gitea/pull/29705))
  * Don't show AbortErrors on logout ([#29639](https://github.com/go-gitea/gitea/pull/29639)) ([#29667](https://github.com/go-gitea/gitea/pull/29667))
  * Fix user-defined markup links targets ([#29305](https://github.com/go-gitea/gitea/pull/29305)) ([#29666](https://github.com/go-gitea/gitea/pull/29666))
  * Fix incorrect rendering csv file when file size is larger than UI.CSV.MaxFileSize ([#29653](https://github.com/go-gitea/gitea/pull/29653)) ([#29663](https://github.com/go-gitea/gitea/pull/29663))
  * Fix hidden test's failure ([#29254](https://github.com/go-gitea/gitea/pull/29254)) ([#29662](https://github.com/go-gitea/gitea/pull/29662))
  * Add empty repo check-in DetectAndHandleSchedules ([#29606](https://github.com/go-gitea/gitea/pull/29606)) ([#29659](https://github.com/go-gitea/gitea/pull/29659))
  * Fix 500 when deleting an account with an incorrect password or unsupported login type ([#29579](https://github.com/go-gitea/gitea/pull/29579)) ([#29656](https://github.com/go-gitea/gitea/pull/29656))
  * Use strict protocol check when redirect ([#29642](https://github.com/go-gitea/gitea/pull/29642)) ([#29644](https://github.com/go-gitea/gitea/pull/29644))
  * Avoid issue info panic ([#29625](https://github.com/go-gitea/gitea/pull/29625)) ([#29632](https://github.com/go-gitea/gitea/pull/29632))
  * Avoid unexpected panic in graceful manager ([#29629](https://github.com/go-gitea/gitea/pull/29629)) ([#29630](https://github.com/go-gitea/gitea/pull/29630))
  * Make "/user/login" page redirect if the current user has signed in ([#29583](https://github.com/go-gitea/gitea/pull/29583)) ([#29599](https://github.com/go-gitea/gitea/pull/29599))
  * Fix workflow trigger event IssueChangeXXX bug ([#29559](https://github.com/go-gitea/gitea/pull/29559)) ([#29565](https://github.com/go-gitea/gitea/pull/29565))
  * Fix incorrect cookie path for AppSubURL ([#29534](https://github.com/go-gitea/gitea/pull/29534)) ([#29552](https://github.com/go-gitea/gitea/pull/29552))
  * Fix queue worker incorrectly stopped when there are still more items in the queue ([#29532](https://github.com/go-gitea/gitea/pull/29532)) ([#29546](https://github.com/go-gitea/gitea/pull/29546))
  * Fix incorrect redirection when creating a PR fails ([#29537](https://github.com/go-gitea/gitea/pull/29537)) ([#29543](https://github.com/go-gitea/gitea/pull/29543))
  * Fix incorrect subpath in links ([#29535](https://github.com/go-gitea/gitea/pull/29535)) ([#29541](https://github.com/go-gitea/gitea/pull/29541))
  * Fix issue link does not support quotes ([#29484](https://github.com/go-gitea/gitea/pull/29484)) ([#29487](https://github.com/go-gitea/gitea/pull/29487)) ([#29536](https://github.com/go-gitea/gitea/pull/29536))
  * Fix issue & comment history bugs ([#29525](https://github.com/go-gitea/gitea/pull/29525)) ([#29527](https://github.com/go-gitea/gitea/pull/29527))
  * Set pre-step status to `skipped` if the job is skipped ([#29489](https://github.com/go-gitea/gitea/pull/29489)) ([#29523](https://github.com/go-gitea/gitea/pull/29523))
  * Fix/Improve `processWindowErrorEvent` ([#29407](https://github.com/go-gitea/gitea/pull/29407)) ([#29480](https://github.com/go-gitea/gitea/pull/29480))
  * Fix counter display number incorrectly displayed on the page ([#29448](https://github.com/go-gitea/gitea/pull/29448)) ([#29478](https://github.com/go-gitea/gitea/pull/29478))
  * Fix workflow trigger event bugs ([#29467](https://github.com/go-gitea/gitea/pull/29467)) ([#29475](https://github.com/go-gitea/gitea/pull/29475))
  * Fix URL calculation in the clone input box ([#29470](https://github.com/go-gitea/gitea/pull/29470)) ([#29473](https://github.com/go-gitea/gitea/pull/29473))
  * The job should always run when `if` is `always()` ([#29464](https://github.com/go-gitea/gitea/pull/29464)) ([#29469](https://github.com/go-gitea/gitea/pull/29469))
  * Fix template bug ([#27581](https://github.com/go-gitea/gitea/pull/27581)) ([#29446](https://github.com/go-gitea/gitea/pull/29446))
  * Not trigger all jobs anymore when re-running the first job ([#29439](https://github.com/go-gitea/gitea/pull/29439)) ([#29441](https://github.com/go-gitea/gitea/pull/29441))
  * Ignore empty repo for CreateRepository in action notifier ([#29416](https://github.com/go-gitea/gitea/pull/29416)) ([#29424](https://github.com/go-gitea/gitea/pull/29424))
  * Fix incorrect tree path value for patch editor ([#29377](https://github.com/go-gitea/gitea/pull/29377)) ([#29421](https://github.com/go-gitea/gitea/pull/29421))
  * Add missing database transaction for new issues ([#29490](https://github.com/go-gitea/gitea/pull/29490)) ([#29607](https://github.com/go-gitea/gitea/pull/29607))
  * Fix 500 when pushing release to an empty repo ([#29554](https://github.com/go-gitea/gitea/pull/29554)) ([#29564](https://github.com/go-gitea/gitea/pull/29564))
  * Fix incorrect relative/absolute URL usages ([#29531](https://github.com/go-gitea/gitea/pull/29531)) ([#29547](https://github.com/go-gitea/gitea/pull/29547))
  * Fix wrong test usage of `AppSubURL` ([#29459](https://github.com/go-gitea/gitea/pull/29459)) ([#29488](https://github.com/go-gitea/gitea/pull/29488))
  * Fix missed return ([#29450](https://github.com/go-gitea/gitea/pull/29450)) ([#29453](https://github.com/go-gitea/gitea/pull/29453))
  * Fixing the issue when status checks per rule matches multiple actions ([#29631](https://github.com/go-gitea/gitea/pull/29631)) ([#29655](https://github.com/go-gitea/gitea/pull/29655))
  * Improve contrast on blame timestamp, fix double border ([#29482](https://github.com/go-gitea/gitea/pull/29482)) ([#29485](https://github.com/go-gitea/gitea/pull/29485))

## Contributors for 1.21.8

* [@ankitrgadiya](https://github.com/ankitrgadiya)
* [@C0rn3j](https://github.com/C0rn3j)
* [@charles7668](https://github.com/charles7668)
* [@DanielMatiasCarvalho](https://github.com/DanielMatiasCarvalho)
* [@KN4CK3R](https://github.com/KN4CK3R)
* [@lng2020](https://github.com/lng2020)
* [@lunny](https://github.com/lunny)
* [@sillyguodong](https://github.com/sillyguodong)
* [@silverwind](https://github.com/silverwind)
* [@techknowlogick](https://github.com/techknowlogick)
* [@wolfogre](https://github.com/wolfogre)
* [@wxiaoguang](https://github.com/wxiaoguang)
* [@yp05327](https://github.com/yp05327)
* [@Zettat123](https://github.com/Zettat123)
