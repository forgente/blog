---
date: 2023-08-20T22:00:00+02:00
authors:
  - "delvh"
  - "lunny"
title: "Gitea 1.20.3 is released"
tags: ["release"]
draft: false
coverImageRelease: 1.20.3
---

Gitea 1.20.3 is now released including [60](https://github.com/go-gitea/gitea/pulls?q=is%3Apr+milestone%3A1.20.3+is%3Amerged) merged PRs **and a breaking change**.

You can download Gitea 1.20.3 for example from our [downloads page](https://dl.gitea.com/gitea/1.20.3/). Please read our [installation guide](https://docs.gitea.com/1.20/installation/install-from-binary) for more information on installation.

## :warning: Breaking change
In [#23912](https://github.com/go-gitea/gitea/pull/23911), we missed that `PATH` can be inherited from its parent sections.
This means that if admins define a global `[storage].PATH` configuration and don't override it in subsections (i.e. `[storage.lfs].PATH`), all data will be stored exactly in this `PATH` without any `attachments`, `lfs`, … subfolders.
In other words, files can be overwritten unintentionally.
Fortunately, most instances will not be affected by this.

With [#26271](https://github.com/go-gitea/gitea/pull/26271), this is now fixed.
However, we cannot migrate existing data into subfolders.
Please check your configuration.
If you notice that you set `[storage].PATH` but not the concrete child section paths, please move the files into the respective default subfolders as detailed in [the documentation](https://docs.gitea.com/administration/config-cheat-sheet#storage-storage).
Additionally, you can think about explicitly setting the concrete storage `PATH`s or unsetting `[storage].PATH`.

## Changelog

* BREAKING
  * Fix the wrong derive path ([#26271](https://github.com/go-gitea/gitea/pull/26271)) ([#26318](https://github.com/go-gitea/gitea/pull/26318))
* SECURITY
  * Fix API leaking Usermail if not logged in ([#25097](https://github.com/go-gitea/gitea/pull/25097)) ([#26350](https://github.com/go-gitea/gitea/pull/26350))
* FEATURES
  * Add ThreadID parameter for Telegram webhooks ([#25996](https://github.com/go-gitea/gitea/pull/25996)) ([#26480](https://github.com/go-gitea/gitea/pull/26480))
* ENHANCEMENTS
  * Add minimum polyfill to support "relative-time-element" in PaleMoon ([#26575](https://github.com/go-gitea/gitea/pull/26575)) ([#26578](https://github.com/go-gitea/gitea/pull/26578))
  * Fix dark theme highlight for "NameNamespace" ([#26519](https://github.com/go-gitea/gitea/pull/26519)) ([#26527](https://github.com/go-gitea/gitea/pull/26527))
  * Detect ogg mime-type as audio or video ([#26494](https://github.com/go-gitea/gitea/pull/26494)) ([#26505](https://github.com/go-gitea/gitea/pull/26505))
  * Use `object-fit: contain` for oauth2 custom icons ([#26493](https://github.com/go-gitea/gitea/pull/26493)) ([#26498](https://github.com/go-gitea/gitea/pull/26498))
  * Move dropzone progress bar to bottom to show filename when uploading ([#26492](https://github.com/go-gitea/gitea/pull/26492)) ([#26497](https://github.com/go-gitea/gitea/pull/26497))
  * Remove last newline from config file ([#26468](https://github.com/go-gitea/gitea/pull/26468)) ([#26471](https://github.com/go-gitea/gitea/pull/26471))
  * Minio: add missing region on client initialization ([#26412](https://github.com/go-gitea/gitea/pull/26412)) ([#26438](https://github.com/go-gitea/gitea/pull/26438))
  * Add pull request review request webhook event ([#26401](https://github.com/go-gitea/gitea/pull/26401)) ([#26407](https://github.com/go-gitea/gitea/pull/26407))
  * Fix text truncate ([#26354](https://github.com/go-gitea/gitea/pull/26354)) ([#26384](https://github.com/go-gitea/gitea/pull/26384))
  * Fix incorrect color of selected assignees when create issue ([#26324](https://github.com/go-gitea/gitea/pull/26324)) ([#26372](https://github.com/go-gitea/gitea/pull/26372))
  * Display human-readable text instead of cryptic filemodes ([#26352](https://github.com/go-gitea/gitea/pull/26352)) ([#26358](https://github.com/go-gitea/gitea/pull/26358))
  * Hide `last indexed SHA` when a repo could not be indexed yet ([#26340](https://github.com/go-gitea/gitea/pull/26340)) ([#26345](https://github.com/go-gitea/gitea/pull/26345))
  * Fix the topic validation rule and suport dots ([#26286](https://github.com/go-gitea/gitea/pull/26286)) ([#26303](https://github.com/go-gitea/gitea/pull/26303))
  * Fix due date rendering the wrong date in issue ([#26268](https://github.com/go-gitea/gitea/pull/26268)) ([#26274](https://github.com/go-gitea/gitea/pull/26274))
  * Don't autosize textarea in diff view ([#26233](https://github.com/go-gitea/gitea/pull/26233)) ([#26244](https://github.com/go-gitea/gitea/pull/26244))
  * Fix commit compare style ([#26209](https://github.com/go-gitea/gitea/pull/26209)) ([#26226](https://github.com/go-gitea/gitea/pull/26226))
  * Warn instead of reporting an error when a webhook cannot be found ([#26039](https://github.com/go-gitea/gitea/pull/26039)) ([#26211](https://github.com/go-gitea/gitea/pull/26211))
* BUGFIXES
  * Use "input" event instead of "keyup" event for migration form ([#26602](https://github.com/go-gitea/gitea/pull/26602)) ([#26605](https://github.com/go-gitea/gitea/pull/26605))
  * Do not use deprecated log config options by default ([#26592](https://github.com/go-gitea/gitea/pull/26592)) ([#26600](https://github.com/go-gitea/gitea/pull/26600))
  * Fix "issueReposQueryPattern does not match query" ([#26556](https://github.com/go-gitea/gitea/pull/26556)) ([#26564](https://github.com/go-gitea/gitea/pull/26564))
  * Sync repo's IsEmpty status correctly ([#26517](https://github.com/go-gitea/gitea/pull/26517)) ([#26560](https://github.com/go-gitea/gitea/pull/26560))
  * Fix project filter bugs ([#26490](https://github.com/go-gitea/gitea/pull/26490)) ([#26558](https://github.com/go-gitea/gitea/pull/26558))
  * Use `hidden` over `clip` for text truncation ([#26520](https://github.com/go-gitea/gitea/pull/26520)) ([#26522](https://github.com/go-gitea/gitea/pull/26522))
  * Set "type=button" for editor's toolbar buttons ([#26510](https://github.com/go-gitea/gitea/pull/26510)) ([#26518](https://github.com/go-gitea/gitea/pull/26518))
  * Fix NuGet search endpoints ([#25613](https://github.com/go-gitea/gitea/pull/25613)) ([#26499](https://github.com/go-gitea/gitea/pull/26499))
  * Fix storage path logic especially for relative paths ([#26441](https://github.com/go-gitea/gitea/pull/26441)) ([#26481](https://github.com/go-gitea/gitea/pull/26481))
  * Close stdout correctly for "git blame" ([#26470](https://github.com/go-gitea/gitea/pull/26470)) ([#26473](https://github.com/go-gitea/gitea/pull/26473))
  * Check first if minio bucket exists before trying to create it ([#26420](https://github.com/go-gitea/gitea/pull/26420)) ([#26465](https://github.com/go-gitea/gitea/pull/26465))
  * Avoiding accessing undefined tributeValues #26461 ([#26462](https://github.com/go-gitea/gitea/pull/26462))
  * Call git.InitSimple for runRepoSyncReleases ([#26396](https://github.com/go-gitea/gitea/pull/26396)) ([#26450](https://github.com/go-gitea/gitea/pull/26450))
  * Add transaction when creating pull request created dirty data ([#26259](https://github.com/go-gitea/gitea/pull/26259)) ([#26437](https://github.com/go-gitea/gitea/pull/26437))
  * Fix wrong middleware sequence ([#26428](https://github.com/go-gitea/gitea/pull/26428)) ([#26436](https://github.com/go-gitea/gitea/pull/26436))
  * Fix admin queue page title and fix CI failures ([#26409](https://github.com/go-gitea/gitea/pull/26409)) ([#26421](https://github.com/go-gitea/gitea/pull/26421))
  * Introduce ctx.PathParamRaw to avoid incorrect unescaping ([#26392](https://github.com/go-gitea/gitea/pull/26392)) ([#26405](https://github.com/go-gitea/gitea/pull/26405))
  * Bypass MariaDB performance bug of the "IN" sub-query, fix incorrect IssueIndex ([#26279](https://github.com/go-gitea/gitea/pull/26279)) ([#26368](https://github.com/go-gitea/gitea/pull/26368))
  * Fix incorrect CLI exit code and duplicate error message ([#26346](https://github.com/go-gitea/gitea/pull/26346)) ([#26347](https://github.com/go-gitea/gitea/pull/26347))
  * Prevent newline errors with Debian packages ([#26332](https://github.com/go-gitea/gitea/pull/26332)) ([#26342](https://github.com/go-gitea/gitea/pull/26342))
  * Fix bug with sqlite load read ([#26305](https://github.com/go-gitea/gitea/pull/26305)) ([#26339](https://github.com/go-gitea/gitea/pull/26339))
  * Make git batch operations use parent context timeout instead of default timeout ([#26325](https://github.com/go-gitea/gitea/pull/26325)) ([#26330](https://github.com/go-gitea/gitea/pull/26330))
  * Support getting changed files when commit ID is `EmptySHA` ([#26290](https://github.com/go-gitea/gitea/pull/26290)) ([#26316](https://github.com/go-gitea/gitea/pull/26316))
  * Clarify the logger's MODE config option ([#26267](https://github.com/go-gitea/gitea/pull/26267)) ([#26281](https://github.com/go-gitea/gitea/pull/26281))
  * Use shared template for webhook icons ([#26242](https://github.com/go-gitea/gitea/pull/26242)) ([#26246](https://github.com/go-gitea/gitea/pull/26246))
  * Fix pull request check list is limited ([#26179](https://github.com/go-gitea/gitea/pull/26179)) ([#26245](https://github.com/go-gitea/gitea/pull/26245))
  * Fix attachment clipboard copy on insecure origin ([#26224](https://github.com/go-gitea/gitea/pull/26224)) ([#26231](https://github.com/go-gitea/gitea/pull/26231))
  * Fix access check for org-level project ([#26182](https://github.com/go-gitea/gitea/pull/26182)) ([#26223](https://github.com/go-gitea/gitea/pull/26223))
* MISC
  * Improve profile readme rendering ([#25988](https://github.com/go-gitea/gitea/pull/25988)) ([#26453](https://github.com/go-gitea/gitea/pull/26453))
  * [docs] Add missing backtick in quickstart.zh-cn.md ([#26349](https://github.com/go-gitea/gitea/pull/26349)) ([#26357](https://github.com/go-gitea/gitea/pull/26357))
  * Upgrade x/net to 0.13.0 ([#26301](https://github.com/go-gitea/gitea/pull/26301))

## Contributors to this release

* [@CaiCandong](https://github.com/CaiCandong)
* [@Infinoid](https://github.com/Infinoid)
* [@KN4CK3R](https://github.com/KN4CK3R)
* [@Lingoing](https://github.com/Lingoing)
* [@OddMorning](https://github.com/OddMorning)
* [@balki](https://github.com/balki)
* [@blachniet](https://github.com/blachniet)
* [@crystalcommunication](https://github.com/crystalcommunication)
* [@delvh](https://github.com/delvh)
* [@lunny](https://github.com/lunny)
* [@nblock](https://github.com/nblock)
* [@otbutz](https://github.com/otbutz)
* [@podsvirov](https://github.com/podsvirov)
* [@sgabenov](https://github.com/sgabenov)
* [@silverwind](https://github.com/silverwind)
* [@wxiaoguang](https://github.com/wxiaoguang)

