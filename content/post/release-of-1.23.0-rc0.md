---
date: 2024-12-18T10:53:00-07:00
authors: 
  - "lunny"
title: "Gitea 1.23.0 Release Candidate"
tags: ["release"]
draft: false
coverImageRelease: 1.23.0-rc0
---

We are very excited to release the first release candidate (RC) of Gitea 1.23! Gitea 1.23 is packed with new features, improvements, performances and amount of refactors. Getting the RC (release candidate) allows you to experiment with it early, try it on your workloads, and report any issues before the final release. Here are some notable changes and features in Gitea 1.23; for the full list, refer to the full release notes.

We are very thankful for the many people who have contributed to the project from sending code patches, reporting issues, translating, and in supporting us in many other ways too.

## Security

This release incorporates all security fixes from v1.22, along with an additional security-related fix that has not been backported to v1.22.

- Include file extension checks in attachment API ([#32151](https://github.com/go-gitea/gitea/pull/32151))

## Major Breaking changes

- Actions logs expired will be cleaned up in background. ([#31735](https://github.com/go-gitea/gitea/pull/31735))

  A new configuration `[actions].LOG_RETENTION_DAYS = 365` was introduced to control how long the logs should be deleted. The default value is `365` days. If you want to keep the logs longer, you need to change the configurations once you upgrade.

- Configuration `[camo].Allways` was corrected to `[camo].Always` ([#32097](https://github.com/go-gitea/gitea/pull/32097))

- Make OIDC introspection authentication strictly require Client ID and secret ([#31632](https://github.com/go-gitea/gitea/pull/31632))

- Remove SHA1 for support for ssh rsa signing ([#31857](https://github.com/go-gitea/gitea/pull/31857))

- Use UTC as default timezone when schedule Actions cron tasks ([#31742](https://github.com/go-gitea/gitea/pull/31742))

## Major Highlights

### Code

- GitHub-like repository home page ([#32213](https://github.com/go-gitea/gitea/pull/32213) & [#32847](https://github.com/go-gitea/gitea/pull/32847))

- Rearrange Clone Panel ([#31142](https://github.com/go-gitea/gitea/pull/31142))

- Support repository license ([#24872](https://github.com/go-gitea/gitea/pull/24872))

- Support "merge upstream branch" (Sync fork) ([#32741](https://github.com/go-gitea/gitea/pull/32741))

- Included tag search capabilities ([#32045](https://github.com/go-gitea/gitea/pull/32045))

- Support migration from AWS CodeCommit ([#31981](https://github.com/go-gitea/gitea/pull/31981))

- Add pure SSH LFS support ([#31516](https://github.com/go-gitea/gitea/pull/31516))

- Allow to fork repository into the same owner ([#32819](https://github.com/go-gitea/gitea/pull/32819))

### Issues

- Suggestions for issues ([#32327](https://github.com/go-gitea/gitea/pull/32327))

- Issue time estimate, meaningful time tracking ([#23113](https://github.com/go-gitea/gitea/pull/23113))

- Support quote selected comments to reply ([#32431](https://github.com/go-gitea/gitea/pull/32431))

### Pull Requests

- Add reviewers selection to new pull request ([#32403](https://github.com/go-gitea/gitea/pull/32403))

- Add priority to protected branch ([#32286](https://github.com/go-gitea/gitea/pull/32286))

### Actions

- Actions support workflow dispatch event ([#28163](https://github.com/go-gitea/gitea/pull/28163))

- Support compression for Actions logs & enable by default ([#31761](https://github.com/go-gitea/gitea/pull/31761) & [#32013](https://github.com/go-gitea/gitea/pull/32013))

### Packages

- Add Arch package registry ([#32692](https://github.com/go-gitea/gitea/pull/32692))

### Projects

- Add option to filter board cards by labels and assignees ([#31999](https://github.com/go-gitea/gitea/pull/31999))

### Others

- Add some handy markdown editor features ([#32400](https://github.com/go-gitea/gitea/pull/32400))

- Allow cropping an avatar before setting it ([#32565](https://github.com/go-gitea/gitea/pull/32565))

- Add automatic light/dark option for the colorblind theme ([#31997](https://github.com/go-gitea/gitea/pull/31997))

- Introduce globallock as distributed locks ([#31908](https://github.com/go-gitea/gitea/pull/31908) & [#31813](https://github.com/go-gitea/gitea/pull/31813))

- Allow to disable the password-based login (sign-in) form ([#32687](https://github.com/go-gitea/gitea/pull/32687))

- Add Passkey login support ([#31504](https://github.com/go-gitea/gitea/pull/31504))

- Enhancing Gitea OAuth2 Provider with Granular Scopes for Resource Access ([#32573](https://github.com/go-gitea/gitea/pull/32573))

### Improved Performance

As more and more big instances are reporting performances issues, some performances
improvements have been resolved in this version.

- Perf: add extra index to notification table ([#32395](https://github.com/go-gitea/gitea/pull/32395))

- Introduce OrgList and add LoadTeams, optimaze Load teams for orgs ([#32543](https://github.com/go-gitea/gitea/pull/32543))

- Improve performance of diffs ([#32393](https://github.com/go-gitea/gitea/pull/32393))

- Make LFS http_client parallel within a batch. ([#32369](https://github.com/go-gitea/gitea/pull/32369))

- Add new index for action to resolve the performance problem ([#32333](https://github.com/go-gitea/gitea/pull/32333)) & Improve get feed with pagination ([#31821](https://github.com/go-gitea/gitea/pull/31821))

- Performance improvements for pull request list API ([#30490](https://github.com/go-gitea/gitea/pull/30490)) & Use batch database operations instead of one by one to optimze api pulls ([#32680](https://github.com/go-gitea/gitea/pull/32680))

The full changelog can be visit from https://github.com/go-gitea/gitea/releases/tag/v1.23.0-rc0.

Please download the [Gitea 1.23 RC0](https://dl.gitea.com/gitea/1.23.0-rc0/) and try it! If you notice any problems, please [file an issue](https://github.com/go-gitea/gitea/issues).

## Contributors

* [@42wim](https://github.com/42wim)
* [@6543](https://github.com/6543)
* [@AdamMajer](https://github.com/AdamMajer)
* [@Adrian-Hirt](https://github.com/Adrian-Hirt)
* [@BElluu](https://github.com/BElluu)
* [@BlenderDefender](https://github.com/BlenderDefender)
* [@BoYanZh](https://github.com/BoYanZh)
* [@CalK16](https://github.com/CalK16)
* [@Chief-Detektor](https://github.com/Chief-Detektor)
* [@ChristopherHX](https://github.com/ChristopherHX)
* [@ConcurrentCrab](https://github.com/ConcurrentCrab)
* [@CyberFlameGO](https://github.com/CyberFlameGO)
* [@ExplodingDragon](https://github.com/ExplodingDragon)
* [@Frankkkkk](https://github.com/Frankkkkk)
* [@GiteaBot](https://github.com/GiteaBot)
* [@HEREYUA](https://github.com/HEREYUA)
* [@HenriquerPimentel](https://github.com/HenriquerPimentel)
* [@HorlogeSkynet](https://github.com/HorlogeSkynet)
* [@KN4CK3R](https://github.com/KN4CK3R)
* [@KnudH](https://github.com/KnudH)
* [@LordChunk](https://github.com/LordChunk)
* [@Makonike](https://github.com/Makonike)
* [@MaxWipfli](https://github.com/MaxWipfli)
* [@Mic92](https://github.com/Mic92)
* [@NishiyamaPedro](https://github.com/NishiyamaPedro)
* [@RiceChuan](https://github.com/RiceChuan)
* [@Sebastian-T-T](https://github.com/Sebastian-T-T)
* [@SimonPistache](https://github.com/SimonPistache)
* [@StanleySweet](https://github.com/StanleySweet)
* [@Sumit189](https://github.com/Sumit189)
* [@SunnyWan59](https://github.com/SunnyWan59)
* [@TheBrokenRail](https://github.com/TheBrokenRail)
* [@TheFox0x7](https://github.com/TheFox0x7)
* [@Zettat123](https://github.com/Zettat123)
* [@Zoupers](https://github.com/Zoupers)
* [@a1012112796](https://github.com/a1012112796)
* [@alexandear](https://github.com/alexandear)
* [@anbraten](https://github.com/anbraten)
* [@appleboy](https://github.com/appleboy)
* [@archer-321](https://github.com/archer-321)
* [@baltitenger](https://github.com/baltitenger)
* [@bohde](https://github.com/bohde)
* [@brechtvl](https://github.com/brechtvl)
* [@bsofiato](https://github.com/bsofiato)
* [@changchaishi](https://github.com/changchaishi)
* [@charles-plutohealth](https://github.com/charles-plutohealth)
* [@charles7668](https://github.com/charles7668)
* [@chesteripz](https://github.com/chesteripz)
* [@cloudchamb3r](https://github.com/cloudchamb3r)
* [@delvh](https://github.com/delvh)
* [@denyskon](https://github.com/denyskon)
* [@dicarne](https://github.com/dicarne)
* [@emrebdr](https://github.com/emrebdr)
* [@enko](https://github.com/enko)
* [@eshirvana](https://github.com/eshirvana)
* [@fabiobarkoski](https://github.com/fabiobarkoski)
* [@fuxiaohei](https://github.com/fuxiaohei)
* [@harryzcy](https://github.com/harryzcy)
* [@henrygoodman](https://github.com/henrygoodman)
* [@hiifong](https://github.com/hiifong)
* [@itzonban](https://github.com/itzonban)
* [@jam7](https://github.com/jam7)
* [@jmlt2002](https://github.com/jmlt2002)
* [@jtran](https://github.com/jtran)
* [@kdumontnu](https://github.com/kdumontnu)
* [@kemzeb](https://github.com/kemzeb)
* [@kerwin612](https://github.com/kerwin612)
* [@kiatt210](https://github.com/kiatt210)
* [@lafriks](https://github.com/lafriks)
* [@llxlr](https://github.com/llxlr)
* [@lucasoethe](https://github.com/lucasoethe)
* [@lunny](https://github.com/lunny)
* [@maantje](https://github.com/maantje)
* [@madneal](https://github.com/madneal)
* [@mainboarder](https://github.com/mainboarder)
* [@manvalls](https://github.com/manvalls)
* [@marcellmars](https://github.com/marcellmars)
* [@metiftikci](https://github.com/metiftikci)
* [@mevius4](https://github.com/mevius4)
* [@micash545](https://github.com/micash545)
* [@mowoc-ocp](https://github.com/mowoc-ocp)
* [@mzroot](https://github.com/mzroot)
* [@pangliang](https://github.com/pangliang)
* [@rremer](https://github.com/rremer)
* [@s4uliu5](https://github.com/s4uliu5)
* [@sangcheol12](https://github.com/sangcheol12)
* [@scribblemaniac](https://github.com/scribblemaniac)
* [@sebastian-sauer](https://github.com/sebastian-sauer)
* [@sebluy](https://github.com/sebluy)
* [@sergeyvfx](https://github.com/sergeyvfx)
* [@silkentrance](https://github.com/silkentrance)
* [@sillyguodong](https://github.com/sillyguodong)
* [@silverwind](https://github.com/silverwind)
* [@slingamn](https://github.com/slingamn)
* [@sommerf-lf](https://github.com/sommerf-lf)
* [@sryze](https://github.com/sryze)
* [@stevapple](https://github.com/stevapple)
* [@stuzer05](https://github.com/stuzer05)
* [@tdesveaux](https://github.com/tdesveaux)
* [@techknowlogick](https://github.com/techknowlogick)
* [@testwill](https://github.com/testwill)
* [@thezzisu](https://github.com/thezzisu)
* [@tmnvanderberg](https://github.com/tmnvanderberg)
* [@tobiasbp](https://github.com/tobiasbp)
* [@tyroneyeh](https://github.com/tyroneyeh)
* [@usbalbin](https://github.com/usbalbin)
* [@wangjingcun](https://github.com/wangjingcun)
* [@william-allspice](https://github.com/william-allspice)
* [@wolfogre](https://github.com/wolfogre)
* [@wxiaoguang](https://github.com/wxiaoguang)
* [@xlii-chl](https://github.com/xlii-chl)
* [@yardenshoham](https://github.com/yardenshoham)
* [@yp05327](https://github.com/yp05327)
