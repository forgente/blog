---
date: 2024-01-18T11:36:00+08:00
authors:
  - "lunny"
title: "Gitea 1.21.4 is released"
tags: ["release"]
draft: false
coverImageRelease: "1.21.4"
---

Gitea 1.21.4 is now released. It contains [54](https://github.com/go-gitea/gitea/pulls?q=is%3Apr+milestone%3A1.21.4+is%3Amerged) merged PRs and fixes for a security vulnerability.

We highly encourage users to update to this version for some important bug-fixes. There are two security bug fixed in this release. Thanks to [@kdumontnu](https://github.com/kdumontnu) for reporting the issue.

<!-- Security Thanks! -->
Thanks to [@harryzcy](https://github.com/harryzcy) and [@jackHay22](https://github.com/jackHay22) for fixing the problems.

You can download Gitea 1.21.4 for example from our [downloads page](https://dl.gitea.com/gitea/1.21.4/). Please read our [installation guide](https://docs.gitea.com/installation/install-from-binary) for more information on installation.

We would also like to thank all of our supporters on [Open Collective](https://opencollective.com/gitea) who are helping to sustain us financially.

**Are you looking for a seamless, hassle-free solution to manage your Git repositories? Look no further! [Gitea Cloud](https://cloud.gitea.com) is here to revolutionize your development experience.**

## Changelog

## [1.21.4](https://github.com/go-gitea/gitea/releases/tag/v1.21.4) - 2024-01-16

* SECURITY
  * Update github.com/cloudflare/circl ([#28789](https://github.com/go-gitea/gitea/pull/28789)) ([#28790](https://github.com/go-gitea/gitea/pull/28790))
  * Require token for GET subscription endpoint ([#28765](https://github.com/go-gitea/gitea/pull/28765)) ([#28768](https://github.com/go-gitea/gitea/pull/28768))
* BUGFIXES
  * Use refname:strip-2 instead of refname:short when syncing tags ([#28797](https://github.com/go-gitea/gitea/pull/28797)) ([#28811](https://github.com/go-gitea/gitea/pull/28811))
  * Fix links in issue card ([#28806](https://github.com/go-gitea/gitea/pull/28806)) ([#28807](https://github.com/go-gitea/gitea/pull/28807))
  * Fix nil pointer panic when exec some gitea cli command ([#28791](https://github.com/go-gitea/gitea/pull/28791)) ([#28795](https://github.com/go-gitea/gitea/pull/28795))
  * Require token for GET subscription endpoint ([#28765](https://github.com/go-gitea/gitea/pull/28765)) ([#28778](https://github.com/go-gitea/gitea/pull/28778))
  * Fix button size in "attached header right" ([#28770](https://github.com/go-gitea/gitea/pull/28770)) ([#28774](https://github.com/go-gitea/gitea/pull/28774))
  * Fix `convert.ToTeams` on empty input ([#28426](https://github.com/go-gitea/gitea/pull/28426)) ([#28767](https://github.com/go-gitea/gitea/pull/28767))
  * Hide code related setting options in repository when code unit is disabled ([#28631](https://github.com/go-gitea/gitea/pull/28631)) ([#28749](https://github.com/go-gitea/gitea/pull/28749))
  * Fix incorrect URL for "Reference in New Issue" ([#28716](https://github.com/go-gitea/gitea/pull/28716)) ([#28723](https://github.com/go-gitea/gitea/pull/28723))
  * Fix panic when parsing empty pgsql host ([#28708](https://github.com/go-gitea/gitea/pull/28708)) ([#28709](https://github.com/go-gitea/gitea/pull/28709))
  * Upgrade xorm to new version which supported update join for all supported databases ([#28590](https://github.com/go-gitea/gitea/pull/28590)) ([#28668](https://github.com/go-gitea/gitea/pull/28668))
  * Fix alpine package files are not rebuilt ([#28638](https://github.com/go-gitea/gitea/pull/28638)) ([#28665](https://github.com/go-gitea/gitea/pull/28665))
  * Avoid cycle-redirecting user/login page ([#28636](https://github.com/go-gitea/gitea/pull/28636)) ([#28658](https://github.com/go-gitea/gitea/pull/28658))
  * Fix empty ref for cron workflow runs ([#28640](https://github.com/go-gitea/gitea/pull/28640)) ([#28647](https://github.com/go-gitea/gitea/pull/28647))
  * Remove unnecessary syncbranchToDB with tests ([#28624](https://github.com/go-gitea/gitea/pull/28624)) ([#28629](https://github.com/go-gitea/gitea/pull/28629))
  * Use known issue IID to generate new PR index number when migrating from GitLab ([#28616](https://github.com/go-gitea/gitea/pull/28616)) ([#28618](https://github.com/go-gitea/gitea/pull/28618))
  * Fix flex container width ([#28603](https://github.com/go-gitea/gitea/pull/28603)) ([#28605](https://github.com/go-gitea/gitea/pull/28605))
  * Fix the scroll behavior for emoji/mention list ([#28597](https://github.com/go-gitea/gitea/pull/28597)) ([#28601](https://github.com/go-gitea/gitea/pull/28601))
  * Fix wrong due date rendering in issue list page ([#28588](https://github.com/go-gitea/gitea/pull/28588)) ([#28591](https://github.com/go-gitea/gitea/pull/28591))
  * Fix `status_check_contexts` matching bug ([#28582](https://github.com/go-gitea/gitea/pull/28582)) ([#28589](https://github.com/go-gitea/gitea/pull/28589))
  * Fix 500 error of searching commits ([#28576](https://github.com/go-gitea/gitea/pull/28576)) ([#28579](https://github.com/go-gitea/gitea/pull/28579))
  * Use information from previous blame parts ([#28572](https://github.com/go-gitea/gitea/pull/28572)) ([#28577](https://github.com/go-gitea/gitea/pull/28577))
  * Update mermaid for 1.21 ([#28571](https://github.com/go-gitea/gitea/pull/28571))
  * Fix 405 method not allowed CORS / OIDC ([#28583](https://github.com/go-gitea/gitea/pull/28583)) ([#28586](https://github.com/go-gitea/gitea/pull/28586)) ([#28587](https://github.com/go-gitea/gitea/pull/28587)) ([#28611](https://github.com/go-gitea/gitea/pull/28611))
  * Fix `GetCommitStatuses` ([#28787](https://github.com/go-gitea/gitea/pull/28787)) ([#28804](https://github.com/go-gitea/gitea/pull/28804))
  * Forbid removing the last admin user ([#28337](https://github.com/go-gitea/gitea/pull/28337)) ([#28793](https://github.com/go-gitea/gitea/pull/28793))
  * Fix schedule tasks bugs ([#28691](https://github.com/go-gitea/gitea/pull/28691)) ([#28780](https://github.com/go-gitea/gitea/pull/28780))
  * Fix issue dependencies ([#27736](https://github.com/go-gitea/gitea/pull/27736)) ([#28776](https://github.com/go-gitea/gitea/pull/28776))
  * Fix system webhooks API bug ([#28531](https://github.com/go-gitea/gitea/pull/28531)) ([#28666](https://github.com/go-gitea/gitea/pull/28666))
  * Fix when private user following user, private user will not be counted in his own view ([#28037](https://github.com/go-gitea/gitea/pull/28037)) ([#28792](https://github.com/go-gitea/gitea/pull/28792))
  * Render code block in activity tab ([#28816](https://github.com/go-gitea/gitea/pull/28816)) ([#28818](https://github.com/go-gitea/gitea/pull/28818))
* ENHANCEMENTS
  * Rework markup link rendering ([#26745](https://github.com/go-gitea/gitea/pull/26745)) ([#28803](https://github.com/go-gitea/gitea/pull/28803))
  * Modernize merge button ([#28140](https://github.com/go-gitea/gitea/pull/28140)) ([#28786](https://github.com/go-gitea/gitea/pull/28786))
  * Speed up loading the dashboard on mysql/mariadb ([#28546](https://github.com/go-gitea/gitea/pull/28546)) ([#28784](https://github.com/go-gitea/gitea/pull/28784))
  * Assign pull request to project during creation ([#28227](https://github.com/go-gitea/gitea/pull/28227)) ([#28775](https://github.com/go-gitea/gitea/pull/28775))
  * Show description as tooltip instead of title for labels ([#28754](https://github.com/go-gitea/gitea/pull/28754)) ([#28766](https://github.com/go-gitea/gitea/pull/28766))
  * Make template `DateTime` show proper tooltip ([#28677](https://github.com/go-gitea/gitea/pull/28677)) ([#28683](https://github.com/go-gitea/gitea/pull/28683))
  * Switch destination directory for apt signing keys ([#28639](https://github.com/go-gitea/gitea/pull/28639)) ([#28642](https://github.com/go-gitea/gitea/pull/28642))
  * Include heap pprof in diagnosis report to help debugging memory leaks ([#28596](https://github.com/go-gitea/gitea/pull/28596)) ([#28599](https://github.com/go-gitea/gitea/pull/28599))
* DOCS
  * Suggest to use Type=simple for systemd service ([#28717](https://github.com/go-gitea/gitea/pull/28717)) ([#28722](https://github.com/go-gitea/gitea/pull/28722))
  * Extend description for ARTIFACT_RETENTION_DAYS ([#28626](https://github.com/go-gitea/gitea/pull/28626)) ([#28630](https://github.com/go-gitea/gitea/pull/28630))
* MISC
  * Add -F to commit search to treat keywords as strings ([#28744](https://github.com/go-gitea/gitea/pull/28744)) ([#28748](https://github.com/go-gitea/gitea/pull/28748))
  * Add download attribute to release attachments ([#28739](https://github.com/go-gitea/gitea/pull/28739)) ([#28740](https://github.com/go-gitea/gitea/pull/28740))
  * Concatenate error in `checkIfPRContentChanged` ([#28731](https://github.com/go-gitea/gitea/pull/28731)) ([#28737](https://github.com/go-gitea/gitea/pull/28737))
  * Improve 1.21 document for Database Preparation ([#28643](https://github.com/go-gitea/gitea/pull/28643)) ([#28644](https://github.com/go-gitea/gitea/pull/28644))

## Contributors for 1.21.4

* [@delvh](https://github.com/delvh)
* [@denyskon](https://github.com/denyskon)
* [@earl-warren](https://github.com/earl-warren)
* [@KN4CK3R](https://github.com/KN4CK3R)
* [@hakito](https://github.com/hakito)
* [@harryzcy](https://github.com/harryzcy)
* [@lng2020](https://github.com/lng2020)
* [@me-heer](https://github.com/me-heer)
* [@morphelinho](https://github.com/morphelinho)
* [@jackHay22](https://github.com/jackHay22)
* [@JakobDev](https://github.com/JakobDev)
* [@lunny](https://github.com/lunny)
* [@pulltheflower](https://github.com/pulltheflower)
* [@wxiaoguang](https://github.com/wxiaoguang)
* [@yardenshoham](https://github.com/yardenshoham)
* [@yp05327](https://github.com/yp05327)
* [@Zettat123](https://github.com/Zettat123)
