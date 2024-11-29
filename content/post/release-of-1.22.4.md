---
date: 2024-11-26T11:19:00-7:00
authors: 
  - "lunny"
title: "Gitea 1.22.4 is released"
tags: ["release"]
draft: false
coverImageRelease: 1.22.4
---

We are proud to present the release of Gitea version 1.22.4.

We highly encourage users to update to this version for one security bug-fixes.

We have merged [48](https://github.com/go-gitea/gitea/pulls?q=is%3Apr+milestone%3A1.22.4+is%3Amerged) pull requests to release this version.

<!-- Security Thanks! -->

We would like to give a special thanks to forgejo for reporting the timing attack against internal token which are fixed by [#32473](https://github.com/go-gitea/gitea/pull/32473). Another security fix is webauthn inconsistent checking which are fixed by [#32531](https://github.com/go-gitea/gitea/pull/32531). Thanks to [@wxiaoguang](https://github.com/wxiaoguang) and [@lunny](https://github.com/lunny) for fixing the problem.

You can download one of our pre-built binaries from our [downloads page](https://dl.gitea.com/gitea/1.22.4/) - make sure to select the correct platform! For further details on how to install, follow our [installation guide](https://docs.gitea.com/installation/install-from-binary).

We would also like to thank all of our supporters on [Open Collective](https://opencollective.com/gitea) who are helping to sustain us financially.

**Are you looking for a seamless, hassle-free solution to manage your Git repositories? Look no further! [Gitea Cloud](https://cloud.gitea.com) is here to revolutionize your development experience.**

<!--more-->

## Changelog

## [1.22.4](https://github.com/go-gitea/gitea/releases/tag/v1.22.4) - 2024-11-26

<!-- Changelog Details -->

* SECURITY
  * Fix basic auth with webauthn ([#32531](https://github.com/go-gitea/gitea/pull/32531)) ([#32536](https://github.com/go-gitea/gitea/pull/32536))
  * Refactor internal routers (partial backport, auth token const time comparing) ([#32473](https://github.com/go-gitea/gitea/pull/32473)) ([#32479](https://github.com/go-gitea/gitea/pull/32479))
* PERFORMANCE
  * Remove transaction for archive download ([#32186](https://github.com/go-gitea/gitea/pull/32186)) ([#32520](https://github.com/go-gitea/gitea/pull/32520))
* BUGFIXES
  * Fix `missing signature key` error when pulling Docker images with `SERVE_DIRECT` enabled ([#32365](https://github.com/go-gitea/gitea/pull/32365)) ([#32397](https://github.com/go-gitea/gitea/pull/32397))
  * Fix get reviewers fails when selecting user without pull request permissions unit ([#32415](https://github.com/go-gitea/gitea/pull/32415)) ([#32616](https://github.com/go-gitea/gitea/pull/32616))
  * Fix adding index files to tmp directory ([#32360](https://github.com/go-gitea/gitea/pull/32360)) ([#32593](https://github.com/go-gitea/gitea/pull/32593))
  * Fix PR creation on forked repositories via API ([#31863](https://github.com/go-gitea/gitea/pull/31863)) ([#32591](https://github.com/go-gitea/gitea/pull/32591))
  * Fix missing menu tabs in organization project view page ([#32313](https://github.com/go-gitea/gitea/pull/32313)) ([#32592](https://github.com/go-gitea/gitea/pull/32592))
  * Support HTTP POST requests to `/userinfo`, aligning to OpenID Core specification ([#32578](https://github.com/go-gitea/gitea/pull/32578)) ([#32594](https://github.com/go-gitea/gitea/pull/32594))
  * Fix debian package clean up cron job ([#32351](https://github.com/go-gitea/gitea/pull/32351)) ([#32590](https://github.com/go-gitea/gitea/pull/32590))
  * Fix GetInactiveUsers ([#32540](https://github.com/go-gitea/gitea/pull/32540)) ([#32588](https://github.com/go-gitea/gitea/pull/32588))
  * Allow the actions user to login via the jwt token ([#32527](https://github.com/go-gitea/gitea/pull/32527)) ([#32580](https://github.com/go-gitea/gitea/pull/32580))
  * Fix submodule parsing ([#32571](https://github.com/go-gitea/gitea/pull/32571)) ([#32577](https://github.com/go-gitea/gitea/pull/32577))
  * Refactor find forks and fix possible bugs that weaken permissions check ([#32528](https://github.com/go-gitea/gitea/pull/32528)) ([#32547](https://github.com/go-gitea/gitea/pull/32547))
  * Fix some places that don't respect org full name setting ([#32243](https://github.com/go-gitea/gitea/pull/32243)) ([#32550](https://github.com/go-gitea/gitea/pull/32550))
  * Refactor push mirror find and add check for updating push mirror ([#32539](https://github.com/go-gitea/gitea/pull/32539)) ([#32549](https://github.com/go-gitea/gitea/pull/32549))
  * Fix basic auth with webauthn ([#32531](https://github.com/go-gitea/gitea/pull/32531)) ([#32536](https://github.com/go-gitea/gitea/pull/32536))
  * Fix artifact v4 upload above 8MB ([#31664](https://github.com/go-gitea/gitea/pull/31664)) ([#32523](https://github.com/go-gitea/gitea/pull/32523))
  * Fix oauth2 error handle not return immediately ([#32514](https://github.com/go-gitea/gitea/pull/32514)) ([#32516](https://github.com/go-gitea/gitea/pull/32516))
  * Fix action not triggered when commit message is too long ([#32498](https://github.com/go-gitea/gitea/pull/32498)) ([#32507](https://github.com/go-gitea/gitea/pull/32507))
  * Fix `GetRepoLink` nil pointer dereference on dashboard feed page when repo is deleted with actions enabled ([#32501](https://github.com/go-gitea/gitea/pull/32501)) ([#32502](https://github.com/go-gitea/gitea/pull/32502))
  * Fix `missing signature key` error when pulling Docker images with `SERVE_DIRECT` enabled ([#32397](https://github.com/go-gitea/gitea/pull/32397)) ([#32397](https://github.com/go-gitea/gitea/pull/32397))
  * Fix the permission check for user search API and limit the number of returned users for `/user/search` ([#32310](https://github.com/go-gitea/gitea/pull/32310))
  * Fix SearchIssues swagger docs ([#32208](https://github.com/go-gitea/gitea/pull/32208)) ([#32298](https://github.com/go-gitea/gitea/pull/32298))
  * Fix dropdown content overflow ([#31610](https://github.com/go-gitea/gitea/pull/31610)) ([#32250](https://github.com/go-gitea/gitea/pull/32250))
  * Disable Oauth check if oauth disabled ([#32368](https://github.com/go-gitea/gitea/pull/32368)) ([#32480](https://github.com/go-gitea/gitea/pull/32480))
  * Respect renamed dependencies of Cargo registry ([#32430](https://github.com/go-gitea/gitea/pull/32430)) ([#32478](https://github.com/go-gitea/gitea/pull/32478))
  * Fix mermaid diagram height when initially hidden ([#32457](https://github.com/go-gitea/gitea/pull/32457)) ([#32464](https://github.com/go-gitea/gitea/pull/32464))
  * Fix broken releases when re-pushing tags ([#32435](https://github.com/go-gitea/gitea/pull/32435)) ([#32449](https://github.com/go-gitea/gitea/pull/32449))
  * Only provide the commit summary for Discord webhook push events ([#32432](https://github.com/go-gitea/gitea/pull/32432)) ([#32447](https://github.com/go-gitea/gitea/pull/32447))
  * Only query team tables if repository is under org when getting assignees ([#32414](https://github.com/go-gitea/gitea/pull/32414)) ([#32426](https://github.com/go-gitea/gitea/pull/32426))
  * Fix created_unix for mirroring ([#32342](https://github.com/go-gitea/gitea/pull/32342)) ([#32406](https://github.com/go-gitea/gitea/pull/32406))
  * Respect UI.ExploreDefaultSort setting again ([#32357](https://github.com/go-gitea/gitea/pull/32357)) ([#32385](https://github.com/go-gitea/gitea/pull/32385))
  * Fix broken image when editing comment with non-image attachments ([#32319](https://github.com/go-gitea/gitea/pull/32319)) ([#32345](https://github.com/go-gitea/gitea/pull/32345))
  * Fix disable 2fa bug ([#32320](https://github.com/go-gitea/gitea/pull/32320)) ([#32330](https://github.com/go-gitea/gitea/pull/32330))
  * Always update expiration time when creating an artifact ([#32281](https://github.com/go-gitea/gitea/pull/32281)) ([#32285](https://github.com/go-gitea/gitea/pull/32285))
  * Fix null errors on conversation holder ([#32258](https://github.com/go-gitea/gitea/pull/32258)) ([#32266](https://github.com/go-gitea/gitea/pull/32266)) ([#32282](https://github.com/go-gitea/gitea/pull/32282))
  * Only rename a user when they should receive a different name ([#32247](https://github.com/go-gitea/gitea/pull/32247)) ([#32249](https://github.com/go-gitea/gitea/pull/32249))
  * Fix checkbox bug on private/archive filter ([#32236](https://github.com/go-gitea/gitea/pull/32236)) ([#32240](https://github.com/go-gitea/gitea/pull/32240))
  * Add a doctor check to disable the "Actions" unit for mirrors ([#32424](https://github.com/go-gitea/gitea/pull/32424)) ([#32497](https://github.com/go-gitea/gitea/pull/32497))
  * Quick fix milestone deadline 9999 ([#32423](https://github.com/go-gitea/gitea/pull/32423))
  * Make `show stats` work when only one file changed ([#32244](https://github.com/go-gitea/gitea/pull/32244)) ([#32268](https://github.com/go-gitea/gitea/pull/32268))
  * Make `owner/repo/pulls` handlers use "PR reader" permission ([#32254](https://github.com/go-gitea/gitea/pull/32254)) ([#32265](https://github.com/go-gitea/gitea/pull/32265))
  * Update scheduled tasks even if changes are pushed by "ActionsUser" ([#32246](https://github.com/go-gitea/gitea/pull/32246)) ([#32252](https://github.com/go-gitea/gitea/pull/32252))
* MISC
  * Remove unnecessary code: `GetPushMirrorsByRepoID` called on all repo pages ([#32560](https://github.com/go-gitea/gitea/pull/32560)) ([#32567](https://github.com/go-gitea/gitea/pull/32567))
  * Improve some sanitizer rules ([#32534](https://github.com/go-gitea/gitea/pull/32534))
  * Update nix development environment vor v1.22.x ([#32495](https://github.com/go-gitea/gitea/pull/32495))
  * Add warn log when deleting inactive users ([#32318](https://github.com/go-gitea/gitea/pull/32318)) ([#32321](https://github.com/go-gitea/gitea/pull/32321))
  * Update github.com/go-enry/go-enry to v2.9.1 ([#32295](https://github.com/go-gitea/gitea/pull/32295)) ([#32296](https://github.com/go-gitea/gitea/pull/32296))
  * Warn users when they try to use a non-root-url to sign in/up ([#32272](https://github.com/go-gitea/gitea/pull/32272)) ([#32273](https://github.com/go-gitea/gitea/pull/32273))

## Contributors

* [@6543](https://github.com/6543)
* [@a1012112796](https://github.com/a1012112796)
* [@bohde](https://github.com/bohde)
* [@charles7668](https://github.com/charles7668)
* [@ChristopherHX](https://github.com/ChristopherHX)
* [@cloudchamb3r](https://github.com/cloudchamb3r)
* [@jeroenlaylo](https://github.com/jeroenlaylo)
* [@kemzeb](https://github.com/kemzeb)
* [@LordChunk](https://github.com/LordChunk)
* [@lunny](https://github.com/lunny)
* [@marcellmars](https://github.com/marcellmars)
* [@silverwind](https://github.com/silverwind)
* [@stevapple](https://github.com/stevapple)
* [@usbalbin](https://github.com/usbalbin)
* [@wxiaoguang](https://github.com/wxiaoguang)
* [@yp05327](https://github.com/yp05327)
* [@Zettat123](https://github.com/Zettat123)
