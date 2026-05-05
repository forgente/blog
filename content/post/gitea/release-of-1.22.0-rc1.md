---
date: 2024-05-04T22:49:00+08:00
authors: 
  - "lunny"
title: "Gitea 1.22.0 Release Candidate"
tags: ["release"]
draft: false
coverImageRelease: 1.22.0-rc1
---

We are very excited to release the last release candidate (RC) of Gitea 1.22! Gitea 1.22 is packed with new features and improvements. Getting the RC (release candidate) allows you to experiment with it early, try it on your workloads, and report any issues before the final release. Here are some notable changes and features in Gitea 1.22; for the full list, refer to the full release notes.

We are very thankful for the many people who have contributed to the project from sending code patches, reporting issues, translating, and in supporting us in many other ways too.

Note: Due to refactoring in the upcoming nightly version, we have dropped rc0 of 1.22 and with the release of rc1 the fixes have been incorporated. You won't be able to downgrade from RC1 to RC0. There will be no impact to end users who are using RC0, and they could safely upgrade to RC1 to get more bug fixes and new enhancements.

## Major Breaking changes

- Require MySQL 8.0, PostgreSQL 12, MSSQL 2012 ([#27337](https://github.com/go-gitea/gitea/pull/27337)) and Recommend/convert to use case-sensitive collation for MySQL/MSSQL ([#28662](https://github.com/go-gitea/gitea/pull/28662)).

  Support for MySQL 5.7, PostgreSQL 10 and 11, and MSSQL 2008 is dropped. You are encouraged to upgrade to supported versions. And for MySQL/MSSQL which is default case insensitive, it caused some bugs when searching. So moving to a case-sensitive collation is recommended.

  * Ref: https://endoflife.date/mysql
  * Ref: https://endoflife.date/postgresql
  * Ref: https://endoflife.date/mssqlserver

  If you use an unsupported database version, please [get in touch with us](https://docs.gitea.com/help/support) for information on our Extended Support Contracts. We can provide testing and support for older databases and integrate those fixes into the Gitea codebase.

- Breaking summary for template refactoring ([#29395](https://github.com/go-gitea/gitea/pull/29395))
  The template system have been refactored, some template functions maybe changed or removed. 

  * `Safe` is renamed to `SafeHTML`, and in most cases it shouldn't be used.
  * `Escape` is renamed to `HTMLEscape`, and in most cases it shouldn't be used. The template should escape most variables automatically.
  * `Str2html` is renamed to `SanitizeHTML`, only use it when necessary, it only "sanitizes" the input by pre-defined rules, but it doesn't "render" or "convert" the content.
  * Use `HTMLFormat` instead of `printf` when processing HTML related contents.
  
  If you are using custom templates (including "mail" templates and "website" templates), after you upgrade to Gitea 1.22, you should extract the templates from Gitea like before.

- Rename the default themes to gitea-light, gitea-dark, gitea-auto ([#27419](https://github.com/go-gitea/gitea/pull/27419))
- Support storage base path as prefix ([#27827](https://github.com/go-gitea/gitea/pull/27827))
- Always enable caches ([#28527](https://github.com/go-gitea/gitea/pull/28527))

## Major Highlights

### End-User Features

In an effort to reduce technical debt, and unify our frontend technologies, we are in the [process of retiring our use of jQuery](https://blog.gitea.com/goodbye-jquery/), and Fomantic-UI, and integrating HTMX and Tailwind CSS.

- Renamed the default themes and improved dark theme ([#27419](https://github.com/go-gitea/gitea/pull/27419)) colorblindness-friendly theme
- Add support for sha256 repositories ([#23894](https://github.com/go-gitea/gitea/pull/23894))
- Implement contributors graph ([#27882](https://github.com/go-gitea/gitea/pull/27882))
- Implement code frequency graph ([#29191](https://github.com/go-gitea/gitea/pull/29191))
- Add Profile Readme for Organisations ([#27955](https://github.com/go-gitea/gitea/pull/27955))
- Add user blocking ([#29028](https://github.com/go-gitea/gitea/pull/29028))
- Add alert blocks in markdown ([#29121](https://github.com/go-gitea/gitea/pull/29121))
- Support repo code search without setting up an indexer ([#29998](https://github.com/go-gitea/gitea/pull/29998))
- Render embedded code preview by permlink in markdown ([#30234](https://github.com/go-gitea/gitea/pull/30234))
- Customizable "Open with" applications for repository clone ([#29320](https://github.com/go-gitea/gitea/pull/29320))
- Use raw Wiki links for non-renderable Wiki files ([#30273](https://github.com/go-gitea/gitea/pull/30273))
- Retarget depending pulls when the parent branch is deleted ([#28686](https://github.com/go-gitea/gitea/pull/28686))
- Support pasting URLs over markdown text ([#29566](https://github.com/go-gitea/gitea/pull/29566))
- Show latest commit for file ([#28067](https://github.com/go-gitea/gitea/pull/28067))
- Support for forking single branch ([#25821](https://github.com/go-gitea/gitea/pull/25821))
- Edit file on pull request files directly ([#29697](https://github.com/go-gitea/gitea/pull/29697))
- Allow everyone to read or write a wiki by a repo unit setting ([#30495](https://github.com/go-gitea/gitea/pull/30495))

### Actions Features

Since the release of Gitea Actions in version 1.19, usage of it and feedback regarding the functionality has been enormous. Some enhancements, and additional functionality included in this release include [official images for the runner](https://gitea.com/gitea/runner-images), and more:

- Actions Artifacts v4 backend ([#28965](https://github.com/go-gitea/gitea/pull/28965))
- Implement actions badge svgs ([#28102](https://github.com/go-gitea/gitea/pull/28102))
- Add skip ci functionality ([#28075](https://github.com/go-gitea/gitea/pull/28075))
- Artifact deletion in actions ui ([#27172](https://github.com/go-gitea/gitea/pull/27172))
- Add API routes to get runner registration token ([#27144](https://github.com/go-gitea/gitea/pull/27144))

### Administration Features

- Allow options to disable user deletion from the interface on app.ini ([#29275](https://github.com/go-gitea/gitea/pull/29275))
- Add global setting how timestamps should be rendered ([#28657](https://github.com/go-gitea/gitea/pull/28657))
- Allow to sync tags from admin dashboard ([#28045](https://github.com/go-gitea/gitea/pull/28045))
- Add admin API route for managing user's badges ([#23106](https://github.com/go-gitea/gitea/pull/23106))

### Improved Performance

- The loading performance of commit status from repository's default branch ([#29444](https://github.com/go-gitea/gitea/pull/29444))
- The branch list page divergence loading improvements for those repositories with over thousands branches ([#29577](https://github.com/go-gitea/gitea/pull/29577))
- The issues and pulls page loading performance ([#29900](https://github.com/go-gitea/gitea/pull/29900)) ([#29515](https://github.com/go-gitea/gitea/pull/29515))
- Dashboard loading performance improvements ([#29010](https://github.com/go-gitea/gitea/pull/29010)) ([#30223](https://github.com/go-gitea/gitea/pull/30223)) ([#30700](https://github.com/go-gitea/gitea/pull/30700))

The full changelog can be visit from https://github.com/go-gitea/gitea/releases/tag/v1.22.0-rc1.

Please download the [Gitea 1.22 RC](https://dl.gitea.com/gitea/1.22.0-rc1/) and try it! If you notice any problems, please [file an issue](https://github.com/go-gitea/gitea/issues).

## Contributors

- @6543
- @AdamMajer
- @Anthony-Jhoiro
- @BLumia
- @C0rn3j
- @CEnnis91
- @CaiCandong
- @ChengenH
- @ChristopherHX
- @CodeShakingSheep
- @DanielMatiasCarvalho
- @DrMaxNix
- @Equationzhao
- @ExplodingDragon
- @HEREYUA
- @HoshinoRei
- @JakobDev
- @Juneezee
- @KN4CK3R
- @KazzmanK
- @KiritaniAyaka
- @KnudH
- @LucaZulberti
- @M4n5ter
- @MarkusAmshove
- @MichaelHinrichs
- @MiloCubed
- @Nabapadma-sarker
- @Nuyube
- @Origami404
- @RightFS
- @SimonErm
- @Sirherobrine23
- @Sonic853
- @TheMagician23
- @VovaStelmashchuk
- @Yakov5776
- @Zettat123
- @andrewimeson
- @ankitrgadiya
- @anudeepreddy
- @appleboy
- @arnaudmorin
- @bramhaag
- @brechtvl
- @bt90
- @buckybytes
- @bugaevc
- @capvor
- @carlosfelgueiras
- @cchangwen
- @charles7668
- @chenrui333
- @chrisnc
- @crapStone
- @crazeteam
- @d1nch8g
- @darrinsmart
- @davidhulick
- @delvh
- @denyskon
- @dlintw
- @dsseng
- @earl-warren
- @edwardzhanged
- @evantobin
- @fantognazza
- @fashberg
- @forsaken628
- @framitdavid
- @fuxiaohei
- @ghost
- @gwymor
- @hakito
- @harryzcy
- @hickford
- @hmoffatt
- @inferno-umar
- @invliD
- @jackHay22
- @jam7
- @jbgomond
- @jmlt2002
- @johanvdw
- @jolheiser
- @jpraet
- @jtran
- @jwetzell
- @jxshin
- @katsusan
- @kdumontnu
- @kemzeb
- @kerwin612
- @kilimnik
- @kralo
- @kvaster
- @lafriks
- @lng2020
- @lunny
- @macifell
- @marcinkuzminski
- @me-heer
- @me2seeks
- @memphis88
- @merlleu
- @metiftikci
- @mjl-
- @mohammedahmed18
- @morphelinho
- @mpldr
- @msantos
- @n0toose
- @nekrondev
- @nfsec
- @nodiscc
- @norohind
- @oliverpool
- @pboguslawski
- @pengqiseven
- @picsel2
- @pitpalme
- @pulltheflower
- @puni9869
- @qwerty287
- @rafaelsgirao
- @rafh
- @rbhz
- @rschoon
- @sahinakkaya
- @scottyeager
- @scribblemaniac
- @sdvcrx
- @sebastian-sauer
- @sillyguodong
- @silverwind
- @sonjek
- @sryze
- @stevapple
- @techknowlogick
- @testwill
- @thenaterhood
- @tobiasbp
- @tomholford
- @viceice
- @wackbyte
- @wienans
- @wiktor-k
- @wolfogre
- @wxiaoguang
- @xkcdstickfigure
- @xor-gate
- @yardenshoham
- @yp05327
- @zeripath
- @zhangnew
- @zokkis
