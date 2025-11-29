---
date: 2025-10-29T11:03:00-07:00
authors:
  - "lunny"
title: "Gitea 1.25.0 is released"
tags: ["release"]
draft: false
coverImageRelease: "1.25.0"
---

We are thrilled to announce the latest release of Gitea **v1.25.0**.

Gitea 1.25.0 brings exciting new features, performance improvements, and quality-of-life enhancements. Here are some notable changes and features in Gitea 1.25; for the full list, refer to the full release notes.

We are very thankful for the many people who have contributed to the project from sending code patches, reporting issues, translating, and in supporting us in many other ways too.

## How to Update

You can download it for example from our [downloads page](https://dl.gitea.com/gitea/1.25.0/). Please read our [installation guide](https://docs.gitea.com/1.25/category/installation) for more information on installation. For upgrade, as always, backup your data and then replace the binary or docker container and restart.

## Special Thanks

We would like to thank all of our supporters on [Open Collective](https://opencollective.com/gitea) who are helping to sustain the project financially.

As always, the changes are sorted descending by what we deem most important for users and admins, so the most important change comes first.

> **Are you looking for a seamless, hassle-free solution to manage your Git repositories? Look no further! [Gitea Cloud](https://cloud.gitea.com) is here to revolutionize your development experience.**

## Major Breaking changes

### :warning: Remove deprecated auth sources ([#35272](https://github.com/go-gitea/gitea/pull/35272))

Deprecated authentication sources have been removed in this version. Please ensure your authentication configuration is up to date before upgrading.

### :warning: Refactor and update mail templates ([#35150](https://github.com/go-gitea/gitea/pull/35150))

Mail templates have been refactored to improve maintainability. If you have customized mail templates, please note that this is a breaking change.

Thank you to [**@techknowlogick**](https://github.com/techknowlogick) for contributing this feature.

## Major Highlights (Code)

### :rocket: Stream repository archives by default ([#35487](https://github.com/go-gitea/gitea/pull/35487))

Repository archives (zip/tar.gz/bundle) are now streamed by default, significantly improving performance and reducing memory usage when downloading large repositories. This enhancement provides a better user experience, especially for large projects.

Thank you to [**@ChristopherHX**](https://github.com/ChristopherHX) for contributing this feature.

### :rocket: Add support for 3D/CAD file formats preview ([#34794](https://github.com/go-gitea/gitea/pull/34794))

Gitea now supports previewing 3D and CAD file formats directly in the web interface! This includes support for STL, OBJ, and other common 3D file formats, making it easier for engineering and design teams to collaborate on 3D models and CAD designs without leaving Gitea.

![3D/CAD file preview](/demos/34794/1.png)

Thank you to [**@kerwin612**](https://github.com/kerwin612) for contributing this feature.

### :rocket: Edit file workflow for creating a fork and proposing changes ([#34240](https://github.com/go-gitea/gitea/pull/34240))

A streamlined edit file workflow has been introduced, allowing users to create a fork and propose changes more easily. When editing a file in a repository you don't have write access to, Gitea will now automatically offer to create a fork and open a pull request with your changes.

![Fork workflow](/demos/34240/1.png)

Thank you to [**@brechtvl**](https://github.com/brechtvl) for contributing this feature.

### :rocket: Follow file symlinks in the UI to their target ([#28835](https://github.com/go-gitea/gitea/pull/28835))

The UI now follows file symlinks to their target files, making it easier to navigate repositories with symbolic links. When viewing a symlink in the file browser, you can now click through to see the actual file content.

![Symlink following](/demos/28835/1.png)

Thank you to [**@delvh**](https://github.com/delvh) for contributing this feature.

### :rocket: Support Basic Authentication for archive downloads ([#35087](https://github.com/go-gitea/gitea/pull/35087))

Repository archive downloads now support Basic Authentication, making it easier to integrate with automation tools and scripts that need to download repository archives programmatically.

Thank you to [**@pvgoran**](https://github.com/pvgoran) for contributing this feature.

### :rocket: Use configurable remote name for git commands ([#35172](https://github.com/go-gitea/gitea/pull/35172))

Git commands now support configurable remote names instead of being hardcoded to "origin". This provides better flexibility for users with custom git workflows.

Thank you to [**@ilya-nurullin**](https://github.com/ilya-nurullin) for contributing this feature.

### :rocket: Display pull request in merged commit view ([#35202](https://github.com/go-gitea/gitea/pull/35202))

When viewing a merged commit, Gitea now displays the associated pull request information, making it easier to trace changes back to their original pull requests.

![Pull request in merged commit view](/demos/35202/1.png)

Thank you to [**@na-Itms**](https://github.com/na-Itms) for contributing this feature.

### :rocket: Improve submodule relative path handling ([#35056](https://github.com/go-gitea/gitea/pull/35056))

Submodule handling has been improved with better support for relative paths, making it easier to work with repositories that use relative submodule URLs.

Thank you to [**@wxiaoguang**](https://github.com/wxiaoguang) for contributing this feature.

## Major Highlights (Actions)

### :rocket: Send email on Workflow Run Success/Failure ([#34982](https://github.com/go-gitea/gitea/pull/34982))

Gitea Actions now supports sending email notifications when workflows succeed or fail! This highly requested feature allows teams to stay informed about their CI/CD pipeline status without constantly checking the web interface.

![Email notifications configuration](/demos/34982/1.png)
![Email notification example](/demos/34982/2.png)

Thank you to [**@NorthRealm**](https://github.com/NorthRealm) for contributing this feature.

## Major Highlights (Authentication & Security)

### :rocket: Improve instance wide SSH commit signing ([#34341](https://github.com/go-gitea/gitea/pull/34341))

Instance-wide SSH commit signing has been improved with better configuration options and verification capabilities, enhancing security for organizations that require signed commits.

```ini
[repository.signing]
SIGNING_KEY = /data/id_ed25519.pub
SIGNING_NAME = Gitea
SIGNING_EMAIL = git@domain.com
SIGNING_FORMAT = ssh
INITIAL_COMMIT = always
CRUD_ACTIONS = always
WIKI = always
MERGES = always
```

Thank you to [**@ChristopherHX**](https://github.com/ChristopherHX) for contributing this feature.

### :rocket: Refactor OpenIDConnect to support SSH/FullName sync ([#34978](https://github.com/go-gitea/gitea/pull/34978))

OpenID Connect integration has been enhanced to support synchronizing SSH keys and full names from identity providers, streamlining user management for organizations using OIDC.

Thank you to [**@wxiaoguang**](https://github.com/wxiaoguang) for contributing this feature.

### :rocket: Support base64-encoded agit push options ([#35037](https://github.com/go-gitea/gitea/pull/35037))

AGit push options now support base64 encoding, providing better compatibility with special characters and binary data in push options.

Thank you to [**@wxiaoguang**](https://github.com/wxiaoguang) for contributing this feature.

## Major Highlights (API)

### :rocket: Refactor repo contents API and add "contents-ext" API ([#34822](https://github.com/go-gitea/gitea/pull/34822))

The repository contents API has been refactored with the addition of a new "contents-ext" API endpoint, providing more flexibility and better performance for retrieving file contents and repository data.

Thank you to [**@wxiaoguang**](https://github.com/wxiaoguang) for contributing this feature.

### :rocket: Add `has_code` to repository REST API ([#35214](https://github.com/go-gitea/gitea/pull/35214))

The repository REST API now includes a `has_code` field, making it easier to identify repositories that contain code versus empty repositories or those with only wikis.

Thank you to [**@6543**](https://github.com/6543) for contributing this feature.

## Major Highlights (User Experience)

### :rocket: Enable more markdown paste features in textarea editor ([#35494](https://github.com/go-gitea/gitea/pull/35494))

The markdown textarea editor now supports more paste features, including automatic markdown formatting for pasted content, making it easier to create well-formatted comments and documentation.

Thank you to [**@silverwind**](https://github.com/silverwind) for contributing this feature.

### :rocket: Refactor time tracker UI ([#34983](https://github.com/go-gitea/gitea/pull/34983))

The time tracker user interface has been refactored with a cleaner, more intuitive design, making it easier to track time spent on issues and pull requests.

Thank you to [**@wxiaoguang**](https://github.com/wxiaoguang) for contributing this feature.

### :rocket: Partially refresh notifications list ([#35010](https://github.com/go-gitea/gitea/pull/35010))

The notifications list now supports partial refresh, reducing page load times and improving responsiveness when checking for new notifications.

<video controls width="90%">
  <source src="/demos/35010/1.mp4"/>
</video>

Thank you to [**@anbraten**](https://github.com/anbraten) for contributing this feature.

### :rocket: Also display "recently pushed branch" alert on PR view ([#35001](https://github.com/go-gitea/gitea/pull/35001))

The "recently pushed branch" alert is now also displayed on the pull request view page, making it easier to create pull requests from recently pushed branches.

![Recently pushed branch alert](/demos/35001/1.png)

Thank you to [**@Naxdy**](https://github.com/Naxdy) for contributing this feature.

### :rocket: Use monospace font in PR command line instructions ([#35074](https://github.com/go-gitea/gitea/pull/35074))

Command line instructions in pull requests now use a monospace font for better readability and easier copying.

![Monospace font in PR instructions](/demos/35074/1.png)

Thank you to [**@silverwind**](https://github.com/silverwind) for contributing this feature.

## Major Highlights (Administration)

### :rocket: Don't store repo archives on `gitea dump` ([#35467](https://github.com/go-gitea/gitea/pull/35467))

The `gitea dump` command no longer stores repository archives by default, significantly reducing backup size and time. Repository data can still be backed up, but pre-generated archives are excluded.

Thank you to [**@h7x4**](https://github.com/h7x4) for contributing this feature.

### :rocket: Avoid emoji mismatch and allow to only enable chosen emojis ([#35705](https://github.com/go-gitea/gitea/pull/35705))

Emoji configuration has been improved, allowing administrators to enable only specific emojis and avoid mismatches between custom and default emoji sets.

![Emoji configuration](/demos/35705/1.png)

Thank you to [**@wxiaoguang**](https://github.com/wxiaoguang) for contributing this feature.

## Changelog

* BREAKING
  * Remove deprecated auth sources ([#35272](https://github.com/go-gitea/gitea/pull/35272))

* FEATURES
  * Stream repo zip/tar.gz/bundle archives by default ([#35487](https://github.com/go-gitea/gitea/pull/35487))
  * Add support for 3D/CAD file formats preview ([#34794](https://github.com/go-gitea/gitea/pull/34794))
  * Send email on Workflow Run Success/Failure ([#34982](https://github.com/go-gitea/gitea/pull/34982))
  * Edit file workflow for creating a fork and proposing changes ([#34240](https://github.com/go-gitea/gitea/pull/34240))
  * Improve instance wide ssh commit signing ([#34341](https://github.com/go-gitea/gitea/pull/34341))
  * Refactor repo contents API and add "contents-ext" API ([#34822](https://github.com/go-gitea/gitea/pull/34822))
  * Follow file symlinks in the UI to their target ([#28835](https://github.com/go-gitea/gitea/pull/28835))
  * Use configurable remote name for git commands ([#35172](https://github.com/go-gitea/gitea/pull/35172))
  * Refactor OpenIDConnect to support SSH/FullName sync ([#34978](https://github.com/go-gitea/gitea/pull/34978))

* ENHANCEMENTS
  * Code
    * Display pull request in merged commit view ([#35202](https://github.com/go-gitea/gitea/pull/35202))
    * Support Basic Authentication for archive downloads ([#35087](https://github.com/go-gitea/gitea/pull/35087))
    * Improve submodule relative path handling ([#35056](https://github.com/go-gitea/gitea/pull/35056))
    * Support base64-encoded agit push options ([#35037](https://github.com/go-gitea/gitea/pull/35037))
    * Add `has_code` to repository REST API ([#35214](https://github.com/go-gitea/gitea/pull/35214))

  * Actions
    * Prevent duplicate actions email ([#35215](https://github.com/go-gitea/gitea/pull/35215))
    * Use `inputs` context when parsing workflows ([#35595](https://github.com/go-gitea/gitea/pull/35595))
    * The status icon of the Action step is consistent with GitHub ([#35618](https://github.com/go-gitea/gitea/pull/35618)) #35621

  * User Experience
    * Enable more markdown paste features in textarea editor ([#35494](https://github.com/go-gitea/gitea/pull/35494))
    * Refactor time tracker UI ([#34983](https://github.com/go-gitea/gitea/pull/34983))
    * Partially refresh notifications list ([#35010](https://github.com/go-gitea/gitea/pull/35010))
    * Also display "recently pushed branch" alert on PR view ([#35001](https://github.com/go-gitea/gitea/pull/35001))
    * Use monospace font in PR command line instructions ([#35074](https://github.com/go-gitea/gitea/pull/35074))
    * UI: add hover background to table rows in user and repo admin page ([#35072](https://github.com/go-gitea/gitea/pull/35072))
    * Make restricted users can access public repositories ([#35693](https://github.com/go-gitea/gitea/pull/35693))

  * Administration
    * Don't store repo archives on `gitea dump` ([#35467](https://github.com/go-gitea/gitea/pull/35467))
    * Avoid emoji mismatch and allow to only enable chosen emojis ([#35705](https://github.com/go-gitea/gitea/pull/35705))
    * Always return the relevant status information, even if no status exists ([#35335](https://github.com/go-gitea/gitea/pull/35335))
    * Disable Field count validation of CSV viewer ([#35228](https://github.com/go-gitea/gitea/pull/35228))
    * Don't block site admin's operation if SECRET_KEY is lost ([#35721](https://github.com/go-gitea/gitea/pull/35721))

  * Issues & Pull Requests
    * When sorting issues by nearest due date, issues without due date should be sorted ascending ([#35267](https://github.com/go-gitea/gitea/pull/35267))

* BUGFIXES
  * Update tab title when navigating file tree ([#35757](https://github.com/go-gitea/gitea/pull/35757)) #35772
  * Fix "ref-issue" handling in markup ([#35739](https://github.com/go-gitea/gitea/pull/35739)) #35771
  * Fix webhook to prevent tag events from bypassing branch filters targets ([#35567](https://github.com/go-gitea/gitea/pull/35567)) #35577
  * Fix markup init after issue comment editing ([#35536](https://github.com/go-gitea/gitea/pull/35536)) #35537
  * Fix creating pull request failure when the target branch name is the same as some tag ([#35552](https://github.com/go-gitea/gitea/pull/35552)) #35582
  * Fix auto-expand and auto-scroll for actions logs ([#35570](https://github.com/go-gitea/gitea/pull/35570)) ([#35583](https://github.com/go-gitea/gitea/pull/35583)) #35586
  * Use inputs context when parsing workflows ([#35590](https://github.com/go-gitea/gitea/pull/35590)) #35595
  * Fix diffpatch API endpoint ([#35610](https://github.com/go-gitea/gitea/pull/35610)) #35613
  * Creating push comments before invoke pull request checking ([#35647](https://github.com/go-gitea/gitea/pull/35647)) #35668
  * Fix missing Close when error occurs and abused connection pool ([#35658](https://github.com/go-gitea/gitea/pull/35658)) #35670
  * Fix build ([#35674](https://github.com/go-gitea/gitea/pull/35674))
  * Fix workflow run event status while rerunning a failed job ([#35689](https://github.com/go-gitea/gitea/pull/35689))
  * Avoid emoji mismatch and allow to only enable chosen emojis ([#35692](https://github.com/go-gitea/gitea/pull/35692))
  * Refactor legacy code, fix LFS auth bypass, fix symlink bypass ([#35708](https://github.com/go-gitea/gitea/pull/35708))
  * Fix various trivial problems ([#35714](https://github.com/go-gitea/gitea/pull/35714))
  * Fix attachment file size limit in server backend ([#35519](https://github.com/go-gitea/gitea/pull/35519))
  * Honor delete branch on merge repo setting when using merge API ([#35488](https://github.com/go-gitea/gitea/pull/35488))
  * Fix external render, make iframe render work (#35727, [#35730](https://github.com/go-gitea/gitea/pull/35730))
  * Upgrade go mail to 0.7.2 ([#35748](https://github.com/go-gitea/gitea/pull/35748))
  * Revert #18491, fix oauth2 client link account ([#35745](https://github.com/go-gitea/gitea/pull/35745))
  * Fix workflow run event status while rerunning a failed job ([#35703](https://github.com/go-gitea/gitea/pull/35703))
  * Fix various bugs ([#35696](https://github.com/go-gitea/gitea/pull/35696))
  * Use LFS object size instead of blob size when viewing a LFS file ([#35680](https://github.com/go-gitea/gitea/pull/35680))
  * Fix code tag style problem and LFS view bug ([#35636](https://github.com/go-gitea/gitea/pull/35636))
  * Fix inputing review comment will remove reviewer ([#35615](https://github.com/go-gitea/gitea/pull/35615))
  * Fix diffpatch API endpoint ([#35613](https://github.com/go-gitea/gitea/pull/35613))
  * Fix: auto-expand and auto-scroll for actions logs ([#35586](https://github.com/go-gitea/gitea/pull/35586))
  * Fix creating pull request failure when the target branch name is the same as some tag ([#35582](https://github.com/go-gitea/gitea/pull/35582))
  * Fix rebase push display wrong comments bug ([#35580](https://github.com/go-gitea/gitea/pull/35580))
  * Fix webhook: prevent tag events from bypassing branch filters targets ([#35577](https://github.com/go-gitea/gitea/pull/35577))
  * Fix markup init after issue comment editing ([#35537](https://github.com/go-gitea/gitea/pull/35537))
  * Fix different behavior in status check pattern matching with double stars ([#35474](https://github.com/go-gitea/gitea/pull/35474))
  * Fix overflow in notifications list ([#35446](https://github.com/go-gitea/gitea/pull/35446))

* REFACTORS
  * Move updateref and removeref to gitrepo and remove unnecessary open repository ([#35511](https://github.com/go-gitea/gitea/pull/35511))
  * Move git command to git/gitcmd ([#35483](https://github.com/go-gitea/gitea/pull/35483))
  * Replace gobwas/glob package ([#35478](https://github.com/go-gitea/gitea/pull/35478))
  * Correctly override user unitmodes ([#35501](https://github.com/go-gitea/gitea/pull/35501))
  * Fix various typos in codebase ([#35480](https://github.com/go-gitea/gitea/pull/35480))

* MISC
  * Clean up npm dependencies ([#35508](https://github.com/go-gitea/gitea/pull/35508), [#35484](https://github.com/go-gitea/gitea/pull/35484))
  * Update eslint to v9 ([#35485](https://github.com/go-gitea/gitea/pull/35485))
  * Replace webpack with rspack ([#35460](https://github.com/go-gitea/gitea/pull/35460))
  * Bump setup-node to v5 ([#35448](https://github.com/go-gitea/gitea/pull/35448))
  * Bump archives&rar dep ([#35638](https://github.com/go-gitea/gitea/pull/35638))
  * Fix build ([#35674](https://github.com/go-gitea/gitea/pull/35674))
  * Fix missing Close when error occurs and abused connection pool ([#35670](https://github.com/go-gitea/gitea/pull/35670))
  * Creating push comments before invoke pull request checking ([#35668](https://github.com/go-gitea/gitea/pull/35668))
  * Fix a bug missed return ([#35667](https://github.com/go-gitea/gitea/pull/35667))
  * Always create Actions logs stepsContainer ([#35672](https://github.com/go-gitea/gitea/pull/35672))
  * Mock external service in hcaptcha TestCaptcha ([#35614](https://github.com/go-gitea/gitea/pull/35614))
  * Fixing issue: Password Leak in Log Messages ([#35609](https://github.com/go-gitea/gitea/pull/35609))
  * Exposing TimeEstimate field in the API ([#35475](https://github.com/go-gitea/gitea/pull/35475))
  * Vertically center date in file view latest commit ([#35456](https://github.com/go-gitea/gitea/pull/35456))
  * The status icon of the Action step is consistent with GitHub ([#35621](https://github.com/go-gitea/gitea/pull/35621))
  * Add perf trace start time ([#35282](https://github.com/go-gitea/gitea/pull/35282))

## Contributors for this release

We thank all contributors who helped make this release possible!

* [@6543](https://github.com/6543)
* [@AdamMajer](https://github.com/AdamMajer)
* [@AlexMaryW](https://github.com/AlexMaryW)
* [@BLumia](https://github.com/BLumia)
* [@Birdulon](https://github.com/Birdulon)
* [@ChristopherHX](https://github.com/ChristopherHX)
* [@DevCharly](https://github.com/DevCharly)
* [@Exgene](https://github.com/Exgene)
* [@ExplodingDragon](https://github.com/ExplodingDragon)
* [@GWDx](https://github.com/GWDx)
* [@GiteaBot](https://github.com/GiteaBot)
* [@Joshdike](https://github.com/Joshdike)
* [@LePau](https://github.com/LePau)
* [@MaxWebZ](https://github.com/MaxWebZ)
* [@MrMars98](https://github.com/MrMars98)
* [@Naxdy](https://github.com/Naxdy)
* [@NorthRealm](https://github.com/NorthRealm)
* [@Pavanipogula](https://github.com/Pavanipogula)
* [@R-HNF](https://github.com/R-HNF)
* [@ScionOfDesign](https://github.com/ScionOfDesign)
* [@SnowballXueQiu](https://github.com/SnowballXueQiu)
* [@Sumit189](https://github.com/Sumit189)
* [@TheFox0x7](https://github.com/TheFox0x7)
* [@TimB87](https://github.com/TimB87)
* [@Udehlee](https://github.com/Udehlee)
* [@Zettat123](https://github.com/Zettat123)
* [@a1012112796](https://github.com/a1012112796)
* [@ahanoff](https://github.com/ahanoff)
* [@ajmeese7](https://github.com/ajmeese7)
* [@alexblackie](https://github.com/alexblackie)
* [@anbraten](https://github.com/anbraten)
* [@anthony-zh](https://github.com/anthony-zh)
* [@appleboy](https://github.com/appleboy)
* [@badhezi](https://github.com/badhezi)
* [@bartvdbraak](https://github.com/bartvdbraak)
* [@brechtvl](https://github.com/brechtvl)
* [@bytedream](https://github.com/bytedream)
* [@charles7668](https://github.com/charles7668)
* [@confusedsushi](https://github.com/confusedsushi)
* [@cuiweixie](https://github.com/cuiweixie)
* [@dcermak](https://github.com/dcermak)
* [@delvh](https://github.com/delvh)
* [@dr-1](https://github.com/dr-1)
* [@endo0911engineer](https://github.com/endo0911engineer)
* [@eric-j-ason](https://github.com/eric-j-ason)
* [@gnanakeethan](https://github.com/gnanakeethan)
* [@h7x4](https://github.com/h7x4)
* [@hramrach](https://github.com/hramrach)
* [@ilya-nurullin](https://github.com/ilya-nurullin)
* [@ita004](https://github.com/ita004)
* [@jaxtew](https://github.com/jaxtew)
* [@jskong1124](https://github.com/jskong1124)
* [@junoberryferry](https://github.com/junoberryferry)
* [@justusbunsi](https://github.com/justusbunsi)
* [@kemzeb](https://github.com/kemzeb)
* [@kerwin612](https://github.com/kerwin612)
* [@kilisei](https://github.com/kilisei)
* [@koalajoe23](https://github.com/koalajoe23)
* [@lsd-techno](https://github.com/lsd-techno)
* [@lunny](https://github.com/lunny)
* [@lutinglt](https://github.com/lutinglt)
* [@luzpaz](https://github.com/luzpaz)
* [@lynxplay](https://github.com/lynxplay)
* [@lyricwulf](https://github.com/lyricwulf)
* [@markusamshove](https://github.com/markusamshove)
* [@metiftikci](https://github.com/metiftikci)
* [@meyfa-lawo](https://github.com/meyfa-lawo)
* [@na-Itms](https://github.com/na-Itms)
* [@naaa760](https://github.com/naaa760)
* [@nienjiuntai](https://github.com/nienjiuntai)
* [@pat-s](https://github.com/pat-s)
* [@philip-peterson](https://github.com/philip-peterson)
* [@pvgoran](https://github.com/pvgoran)
* [@raucao](https://github.com/raucao)
* [@rickyma](https://github.com/rickyma)
* [@risu729](https://github.com/risu729)
* [@s-weigand](https://github.com/s-weigand)
* [@satnam72](https://github.com/satnam72)
* [@sebastianertz](https://github.com/sebastianertz)
* [@shashank-netapp](https://github.com/shashank-netapp)
* [@silverwind](https://github.com/silverwind)
* [@surya-purohit](https://github.com/surya-purohit)

And many more contributors who have helped with testing, reporting issues, and translating!

We will thank all original contributors of backport pull requests on next release.
