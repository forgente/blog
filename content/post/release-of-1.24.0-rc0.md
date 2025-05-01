---
date: 2025-04-30T10:01:00-07:00
authors: 
  - "lunny"
title: "Gitea 1.24.0 Release Candidate"
tags: ["release"]
draft: false
coverImageRelease: 1.24.0-rc0
---

We are very excited to release the first release candidate (RC) of Gitea 1.24! Gitea 1.24 is packed with new features, improvements, performances and amount of refactors. Getting the RC (release candidate) allows you to experiment with it early, try it on your workloads, and report any issues before the final release. Here are some notable changes and features in Gitea 1.24; for the full list, refer to the full release notes.

We are very thankful for the many people who have contributed to the project from sending code patches, reporting issues, translating, and in supporting us in many other ways too.

## Major Breaking changes

- Make Gitea always use its internal config, ignore `/etc/gitconfig` ([#33076](https://github.com/go-gitea/gitea/pull/33076))
- Improve log format ([#33814](https://github.com/go-gitea/gitea/pull/33814))
- Fix markdown render behaviors ([#34122](https://github.com/go-gitea/gitea/pull/34122))
- Add package version api endpoints ([#34173](https://github.com/go-gitea/gitea/pull/34173))

## Major Highlights

### Security

- Enforce two-factor auth (2FA: TOTP or WebAuthn) ([#34187](https://github.com/go-gitea/gitea/pull/34187))

A global setting `security.TWO_FACTOR_AUTH` has been introduced to require 2FA for all the users. Users login without 2FA can login and visit explore but can NOT read or write to any repositories via API/web.

### Code

- Add anonymous access support for private/unlisted repositories ([#33127](https://github.com/go-gitea/gitea/pull/33127), [#34051](https://github.com/go-gitea/gitea/pull/34051))
This will allow public code/issues/wikis access of private repositories.

- Add file tree to file view page ([#32721](https://github.com/go-gitea/gitea/pull/32721))

This pull request introduces a file tree on the left side when reviewing files of a repository.

- Add material icons for file list ([#33837](https://github.com/go-gitea/gitea/pull/33837))

This introduced the matierial icons theme rather than the default one. It could be enabled by `ui.FILE_ICON_THEME=material`.

- Support choose email when creating a commit via web UI ([#33432](https://github.com/go-gitea/gitea/pull/33432))

If users have multiple emails, this PR allowes users to choose email when updating files with web UI.

- Add basic auth support to rss/atom feeds ([#33371](https://github.com/go-gitea/gitea/pull/33371))

- Private README.md for organization ([#32872](https://github.com/go-gitea/gitea/pull/32872))

We now support two types of organization README repositories: `.profile` and `.profile-private`.

.profile-private is the private version, accessible only to organization members.

- Email option to embed images as base64 instead of link ([#32061](https://github.com/go-gitea/gitea/pull/32061))

A new configuration `mailer.EMBED_ATTACHMENT_IMAGES` has been introduced to allow the images to be embedded.

### Issues

- Add sorting by exclusive labels (issue priority) ([#33206](https://github.com/go-gitea/gitea/pull/33206))

When creating or updating exclusive labels, you can specify a `Sort Order` to enable sorting issues by priority based on their assigned exclusive labels.

- Add sub issue list support ([#32940](https://github.com/go-gitea/gitea/pull/32940))

When list issues with a markdown syntax on issue, pull request or comment, the issues will be expanded with titles.

### Pull Requests

- Option to delay conflict checking of old pull requests until page view ([#27779](https://github.com/go-gitea/gitea/pull/27779))

[repository.pull-request] DELAY_CHECK_FOR_INACTIVE_DAYS is a new setting to delay the mergeable check for pull requests that have been inactive for the specified number of days.

This avoids potentially long delays for big repositories with many pull requests. and reduces system load overall when there are many repositories or pull requests.

When viewing the PR, checking will start immediately and the PR merge box will automatically reload when complete. Accessing the PR through the API will also start checking immediately.

### Actions

- Artifacts download api for artifact actions v4 [#33510](https://github.com/go-gitea/gitea/pull/33510)
- Actions Runner rest APIs [#33873](https://github.com/go-gitea/gitea/pull/33873)
- Support workflow event dispatch via API [#33545](https://github.com/go-gitea/gitea/pull/33545)

### Projects

- Add fullscreen mode as a more efficient operation way to view projects ([#34081](https://github.com/go-gitea/gitea/pull/34081))
A fullscreen mode has been introduced for project kanban view.

- Worktime tracking for the organization level ([#19808](https://github.com/go-gitea/gitea/pull/19808))
Worktime summary tab has been added in the organization level. It can also filter by time, repositories, milestones and members.

### Others

- Add cli flags LDAP group configuration ([#33933](https://github.com/go-gitea/gitea/pull/33933))

- Add middleware for request prioritization ([#33951](https://github.com/go-gitea/gitea/pull/33951))
This adds a middleware for overload protection, that is intended to help protect against malicious scrapers.

### Improved Performance

As more and more big instances are reporting performances issues, some performances
improvements have been resolved in this version.

Commits list page performance optimization.

- Improve commits list performance to reduce unnecessary database queries ([#33528](https://github.com/go-gitea/gitea/pull/33528))
- Cache GPG keys, emails and users when list commits ([#34086](https://github.com/go-gitea/gitea/pull/34086))

User dashboard performance optimization.

- Optimize total count of feed when loading activities in user dashboard. ([#33841](https://github.com/go-gitea/gitea/pull/33841))
- Optimize heatmap query ([#33853](https://github.com/go-gitea/gitea/pull/33853))
- Only use prev and next buttons for pagination on user dashboard ([#33981](https://github.com/go-gitea/gitea/pull/33981))

Others

- Add cache for common package queries ([#22491](https://github.com/go-gitea/gitea/pull/22491))
- Move issue pin to an standalone table for querying performance ([#33452](https://github.com/go-gitea/gitea/pull/33452))
- Improve pull request list API performance ([#34052](https://github.com/go-gitea/gitea/pull/34052))
- Refactor Git Attribute & performance optimization ([#34154](https://github.com/go-gitea/gitea/pull/34154))

## Contributors

* [@6543](https://github.com/6543)
* [@BlenderDefender](https://github.com/BlenderDefender)
* [@ChristopherHX](https://github.com/ChristopherHX)
* [@DrMaxNix](https://github.com/DrMaxNix)
* [@ExplodingDragon](https://github.com/ExplodingDragon)
* [@HeCorr](https://github.com/HeCorr)
* [@KN4CK3R](https://github.com/KN4CK3R)
* [@LaoQi](https://github.com/LaoQi)
* [@ManInDark](https://github.com/ManInDark)
* [@McRaeAlex](https://github.com/McRaeAlex)
* [@Mik4sa](https://github.com/Mik4sa)
* [@Mopcho](https://github.com/Mopcho)
* [@SimonPistache](https://github.com/SimonPistache)
* [@TheFox0x7](https://github.com/TheFox0x7)
* [@TimsDevCorner](https://github.com/TimsDevCorner)
* [@Tomeamis](https://github.com/Tomeamis)
* [@Vinoth-kumar-Ganesan](https://github.com/Vinoth-kumar-Ganesan)
* [@YaFou](https://github.com/YaFou)
* [@Zettat123](https://github.com/Zettat123)
* [@a1012112796](https://github.com/a1012112796)
* [@a1994sc](https://github.com/a1994sc)
* [@aindriu80](https://github.com/aindriu80)
* [@appleboy](https://github.com/appleboy)
* [@arifer612](https://github.com/arifer612)
* [@asvanberg](https://github.com/asvanberg)
* [@badhezi](https://github.com/badhezi)
* [@bencurio](https://github.com/bencurio)
* [@bigdeejay](https://github.com/bigdeejay)
* [@bohde](https://github.com/bohde)
* [@brechtvl](https://github.com/brechtvl)
* [@bsofiato](https://github.com/bsofiato)
* [@bytedream](https://github.com/bytedream)
* [@cassiozareck](https://github.com/cassiozareck)
* [@changchaishi](https://github.com/changchaishi)
* [@charles7668](https://github.com/charles7668)
* [@darren](https://github.com/darren)
* [@dek5troza](https://github.com/dek5troza)
* [@denyskon](https://github.com/denyskon)
* [@dfirebaugh](https://github.com/dfirebaugh)
* [@dianaStr7](https://github.com/dianaStr7)
* [@eeyrjmr](https://github.com/eeyrjmr)
* [@ericLemanissier](https://github.com/ericLemanissier)
* [@ghost](https://github.com/ghost)
* [@gsvd](https://github.com/gsvd)
* [@hakonharnes](https://github.com/hakonharnes)
* [@harryvince](https://github.com/harryvince)
* [@hawicz](https://github.com/hawicz)
* [@henrygoodman](https://github.com/henrygoodman)
* [@hiifong](https://github.com/hiifong)
* [@jannispl](https://github.com/jannispl)
* [@jason19970210](https://github.com/jason19970210)
* [@job79](https://github.com/job79)
* [@jubalh](https://github.com/jubalh)
* [@katsusan](https://github.com/katsusan)
* [@kemzeb](https://github.com/kemzeb)
* [@kerwin612](https://github.com/kerwin612)
* [@khs-alt](https://github.com/khs-alt)
* [@kkovacs](https://github.com/kkovacs)
* [@lonix1](https://github.com/lonix1)
* [@lunny](https://github.com/lunny)
* [@mbollmann-v](https://github.com/mbollmann-v)
* [@mengzhuo](https://github.com/mengzhuo)
* [@metiftikci](https://github.com/metiftikci)
* [@misthios](https://github.com/misthios)
* [@mscherer](https://github.com/mscherer)
* [@quentinguidee](https://github.com/quentinguidee)
* [@rafaelDev0ps](https://github.com/rafaelDev0ps)
* [@rremer](https://github.com/rremer)
* [@silverwind](https://github.com/silverwind)
* [@sommerf-lf](https://github.com/sommerf-lf)
* [@sschroe](https://github.com/sschroe)
* [@strk](https://github.com/strk)
* [@stuzer05](https://github.com/stuzer05)
* [@sveinnthorarins](https://github.com/sveinnthorarins)
* [@techknowlogick](https://github.com/techknowlogick)
* [@telackey](https://github.com/telackey)
* [@typed-sigterm](https://github.com/typed-sigterm)
* [@vsysoev](https://github.com/vsysoev)
* [@wgr1984](https://github.com/wgr1984)
* [@wkelly17](https://github.com/wkelly17)
* [@wxiaoguang](https://github.com/wxiaoguang)
* [@yp05327](https://github.com/yp05327)
