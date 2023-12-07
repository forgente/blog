---
date: 2023-11-27T14:00:00+02:00
authors:
  - "delvh"
  - "lunny"
title: "Gitea 1.21.1 is released"
tags: ["release"]
draft: false
coverImageRelease: "1.21.1/1.20.6"
---

Gitea 1.21.1 and 1.20.6 are now released. 1.21.1 includs [24](https://github.com/go-gitea/gitea/pulls?q=is%3Apr+milestone%3A1.21.1+is%3Amerged) merged PRs and a fix for a high impact security vulnerability. You are highly recommanded to upgrade to this version ASAP. 1.20.6 includes [30](https://github.com/go-gitea/gitea/pulls?q=is:pr+milestone:1.20.6+is:merged) merged PRs and also the fix mentioned above.

The problem was that previously only comments, among other types, was used to find the comment.
However, as you request the comment on a specific repo, it must also be checked that the ID of the given comment belongs to the given repo as you can otherwise retrieve content you are not supposed to see.

<!-- Security Thanks! -->
We would like to give a special thanks to the Forgejo team for reporting the security issue that was patched in this release.  
Thanks to [@lunny](https://gitea.com/lunny) for fixing the problem.

You can download Gitea 1.21.1 for example from our [downloads page](https://dl.gitea.com/gitea/1.21.1/) or 1.20.6 [here](https://dl.gitea.com/gitea/1.20.6/). Please read our [installation guide](https://docs.gitea.com/installation/install-from-binary) for more information on installation.

We would also like to thank all of our supporters on [Open Collective](https://opencollective.com/gitea) who are helping to sustain us financially.

**Are you looking for a seamless, hassle-free solution to manage your Git repositories? Look no further! [Gitea Cloud](https://cloud.gitea.com) is here to revolutionize your development experience.**

## Changelog

## [1.21.1](https://github.com/go-gitea/gitea/releases/tag/v1.21.1) - 2023-11-26

* SECURITY
  * Fix comment permissions ([#28213](https://github.com/go-gitea/gitea/pull/28213)) ([#28216](https://github.com/go-gitea/gitea/pull/28216))
* BUGFIXES
  * Fix delete-orphaned-repos ([#28200](https://github.com/go-gitea/gitea/pull/28200)) ([#28202](https://github.com/go-gitea/gitea/pull/28202))
  * Make CORS work for oauth2 handlers ([#28184](https://github.com/go-gitea/gitea/pull/28184)) ([#28185](https://github.com/go-gitea/gitea/pull/28185))
  * Fix missing buttons ([#28179](https://github.com/go-gitea/gitea/pull/28179)) ([#28181](https://github.com/go-gitea/gitea/pull/28181))
  * Fix no ActionTaskOutput table waring ([#28149](https://github.com/go-gitea/gitea/pull/28149)) ([#28152](https://github.com/go-gitea/gitea/pull/28152))
  * Fix empty action run title ([#28113](https://github.com/go-gitea/gitea/pull/28113)) ([#28148](https://github.com/go-gitea/gitea/pull/28148))
  * Use "is-loading" to avoid duplicate form submit for code comment ([#28143](https://github.com/go-gitea/gitea/pull/28143)) ([#28147](https://github.com/go-gitea/gitea/pull/28147))
  * Fix Matrix and MSTeams nil dereference ([#28089](https://github.com/go-gitea/gitea/pull/28089)) ([#28105](https://github.com/go-gitea/gitea/pull/28105))
  * Fix incorrect pgsql conn builder behavior ([#28085](https://github.com/go-gitea/gitea/pull/28085)) ([#28098](https://github.com/go-gitea/gitea/pull/28098))
  * Fix system config cache expiration timing ([#28072](https://github.com/go-gitea/gitea/pull/28072)) ([#28090](https://github.com/go-gitea/gitea/pull/28090))
  * Restricted users only see repos in orgs which their team was assigned to ([#28025](https://github.com/go-gitea/gitea/pull/28025)) ([#28051](https://github.com/go-gitea/gitea/pull/28051))
* API
  * Fix permissions for Token DELETE endpoint to match GET and POST ([#27610](https://github.com/go-gitea/gitea/pull/27610)) ([#28099](https://github.com/go-gitea/gitea/pull/28099))
* ENHANCEMENTS
  * Do not display search box when there's no packages yet ([#28146](https://github.com/go-gitea/gitea/pull/28146)) ([#28159](https://github.com/go-gitea/gitea/pull/28159))
  * Add missing `packages.cleanup.success` ([#28129](https://github.com/go-gitea/gitea/pull/28129)) ([#28132](https://github.com/go-gitea/gitea/pull/28132))
* DOCS
  * Docs: Replace deprecated IS_TLS_ENABLED mailer setting in email setup ([#28205](https://github.com/go-gitea/gitea/pull/28205)) ([#28208](https://github.com/go-gitea/gitea/pull/28208))
  * Fix the description about the default setting for action in quick start document ([#28160](https://github.com/go-gitea/gitea/pull/28160)) ([#28168](https://github.com/go-gitea/gitea/pull/28168))
  * Add guide page to actions when there's no workflows ([#28145](https://github.com/go-gitea/gitea/pull/28145)) ([#28153](https://github.com/go-gitea/gitea/pull/28153))
* MISC
  * Use full width for PR comparison ([#28182](https://github.com/go-gitea/gitea/pull/28182)) ([#28186](https://github.com/go-gitea/gitea/pull/28186))

## Contributors for 1.21.1

* [@6543](https://github.com/6543)
* [@CodeShakingSheep](https://github.com/CodeShakingSheep)
* [@evantobin](https://github.com/evantobin)
* [@jolheiser](https://github.com/jolheiser)
* [@KN4CK3R](https://github.com/KN4CK3R)
* [@lng2020](https://github.com/lng2020)
* [@lunny](https://github.com/lunny)
* [@pitpalme](https://github.com/pitpalme)
* [@wolfogre](https://github.com/wolfogre)
* [@wxiaoguang](https://github.com/wxiaoguang)
* [@yp05327](https://github.com/yp05327)

## [1.20.6](https://github.com/go-gitea/gitea/releases/tag/v1.20.6) - 2023-11-26

* SECURITY
  * Fix comment permissions ([#28213](https://github.com/go-gitea/gitea/pull/28213)) ([#28217](https://github.com/go-gitea/gitea/pull/28217))
  * Dont leak private users via extensions ([#28023](https://github.com/go-gitea/gitea/pull/28023)) ([#28028](https://github.com/go-gitea/gitea/pull/28028))
  * Unify two factor check ([#27915](https://github.com/go-gitea/gitea/pull/27915)) ([#27939](https://github.com/go-gitea/gitea/pull/27939))
  * Support allowed hosts for webhook to work with proxy ([#27655](https://github.com/go-gitea/gitea/pull/27655)) ([#27674](https://github.com/go-gitea/gitea/pull/27674))
* BUGFIXES
  * Fix no ActionTaskOutput table waring ([#28149](https://github.com/go-gitea/gitea/pull/28149)) ([#28151](https://github.com/go-gitea/gitea/pull/28151))
  * Restricted users only see repos in orgs which their team was assigned to ([#28025](https://github.com/go-gitea/gitea/pull/28025)) ([#28050](https://github.com/go-gitea/gitea/pull/28050))
  * Fix DownloadFunc when migrating releases ([#27887](https://github.com/go-gitea/gitea/pull/27887)) ([#27889](https://github.com/go-gitea/gitea/pull/27889))
  * Fix http protocol auth ([#27875](https://github.com/go-gitea/gitea/pull/27875)) ([#27878](https://github.com/go-gitea/gitea/pull/27878))
  * Revert "fix orphan check for deleted branch ([#27310](https://github.com/go-gitea/gitea/pull/27310)) ([#27320](https://github.com/go-gitea/gitea/pull/27320))" ([#27763](https://github.com/go-gitea/gitea/pull/27763))
  * Fix label render containing invalid HTML ([#27752](https://github.com/go-gitea/gitea/pull/27752)) ([#27761](https://github.com/go-gitea/gitea/pull/27761))
  * Fix poster is not loaded in get default merge message ([#27657](https://github.com/go-gitea/gitea/pull/27657)) ([#27665](https://github.com/go-gitea/gitea/pull/27665))
  * Fix 404 when deleting Docker package with an internal version ([#27615](https://github.com/go-gitea/gitea/pull/27615)) ([#27629](https://github.com/go-gitea/gitea/pull/27629))
  * Fix attachment download bug ([#27486](https://github.com/go-gitea/gitea/pull/27486)) ([#27570](https://github.com/go-gitea/gitea/pull/27570))
  * When comparing with an non-exist repository, return 404 but 500 ([#27437](https://github.com/go-gitea/gitea/pull/27437)) ([#27441](https://github.com/go-gitea/gitea/pull/27441))
* API
  * Fix package webhook ([#27839](https://github.com/go-gitea/gitea/pull/27839)) ([#27854](https://github.com/go-gitea/gitea/pull/27854))
  * Fix org team endpoint ([#27721](https://github.com/go-gitea/gitea/pull/27721)) ([#27729](https://github.com/go-gitea/gitea/pull/27729))
* ENHANCEMENTS
  * Render email addresses as such if followed by punctuation ([#27987](https://github.com/go-gitea/gitea/pull/27987)) ([#27991](https://github.com/go-gitea/gitea/pull/27991))
  * Fix mermaid flowchart margin issue ([#27503](https://github.com/go-gitea/gitea/pull/27503)) ([#27517](https://github.com/go-gitea/gitea/pull/27517))
  * Fix panic in storageHandler ([#27446](https://github.com/go-gitea/gitea/pull/27446)) ([#27478](https://github.com/go-gitea/gitea/pull/27478))
* DOCS
  * Update agit-support.en-us.md ([#27652](https://github.com/go-gitea/gitea/pull/27652))
* MISC
  * Fix wrong xorm Delete usage(backport for 1.20) ([#28003](https://github.com/go-gitea/gitea/pull/28003))
  * Remove duplicated button in Install web page ([#27941](https://github.com/go-gitea/gitea/pull/27941))
  * Avoid run change title process when the title is same ([#27467](https://github.com/go-gitea/gitea/pull/27467)) ([#27557](https://github.com/go-gitea/gitea/pull/27557))

## Contributors for 1.20.6

* [@6543](https://github.com/6543)
* [@delvh](https://github.com/delvh)
* [@earl-warren](https://github.com/earl-warren)
* [@KN4CK3R](https://github.com/KN4CK3R)
* [@jolheiser](https://github.com/jolheiser)
* [@lng2020](https://github.com/lng2020)
* [@lunny](https://github.com/lunny)
* [@silverwind](https://github.com/silverwind)
* [@sryze](https://github.com/sryze)
* [@strk](https://github.com/strk)
* [@wolfogre](https://github.com/wolfogre)
* [@yardenshoham](https://github.com/yardenshoham)
* [@yp05327](https://github.com/yp05327)
* [@Zettat123](https://github.com/Zettat123)
