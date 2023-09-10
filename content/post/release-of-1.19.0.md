---
date: 2023-03-20T14:40:00+01:00
authors:
    - "jolheiser"
    - "delvh"
    - "lunny"
    - "yardenshoham"
    - "techknowlogick"
title: "Gitea 1.19.0 is released"
tags: ["release", "gitea"]
draft: false
coverImageRelease: "1.19"
---

We are proud to present the release of Gitea version 1.19.0.

We highly encourage users to update to this version for many new features and other improvements.

We have merged [544](https://github.com/go-gitea/gitea/pulls?q=is%3Apr+milestone%3A1.19.0+is%3Amerged) pull requests to release this version.

## Thank you!

- The [Blender team](https://blender.org) for their extensive work on this version, i.e. through issues, pull requests, and support of the Gitea Project.
- [@wxiaoguang](https://gitea.com/wxiaoguang), [@fsologureng](https://codeberg.org/fsologureng), and everyone else who has been helping with the accessibility changes.
- [@yardenshoham](https://gitea.com/yardenshoham) for his contribution on [Gitea Backporter](https://github.com/GiteaBot/gitea-backporter), which makes our backport work significantly easier than before.
- [@pat-s](https://gitea.com/pat-s) for his work to make static website PRs previewable.

We would also like to thank all of our supporters on [Open Collective](https://opencollective.com/gitea) who are helping to sustain us financially.

You can download one of our pre-built binaries from our [downloads page](https://dl.gitea.com/gitea/1.19.0/) - make sure to select the correct platform! For further details on how to install, follow our [installation guide](https://docs.gitea.com/installation/install-from-binary).

We are now working on moving our infrastructure from `gitea.io` to `gitea.com`, as well as migrating from Drone CI to Gitea Actions. During this conversion, if you encounter any problems, please report them via [discord](https://discord.gg/gitea).

**Have you heard? We now have a [swag shop](https://shop.gitea.io)! :shirt: :tea:**

<!--more-->

## Breaking Changes

### :warning: Incorrectly documented default value for update checker ([#22084](https://github.com/go-gitea/gitea/issues/22084))
`[cron.update_checker].ENABLED` is `true` by default.
Previously, the documentation indicated that it would be disabled by default, which was incorrect.

### :warning: Newly reserved username: `gitea-actions` ([#21937](https://github.com/go-gitea/gitea/issues/21937))
With the implementation of Gitea Actions (see below), Gitea needed a user to run the actions.
The username `gitea-actions` was chosen and is thus now reserved.
 If a user with that name exists, an admin should rename them, i.e. using the admin panel.

### :warning: Remove DSA host key from Docker Container ([#21522](https://github.com/go-gitea/gitea/issues/21522))
The DSA host key has been removed from the OpenSSH daemon configuration file in the Docker container for Gitea.
This change is a result of the deprecation of the DSA public key algorithm since OpenSSH >= 7.0.
As a result, any client that uses DSA for authentication will no longer be able to connect to the Docker container.
We recommend users to use a different public key algorithm such as RSA or ECDSA for authentication.

### :warning: Remove ReverseProxy authentication from the API ([#22219](https://github.com/go-gitea/gitea/issues/22219))
ReverseProxy-authentication was an insecure way of authenticating a user.
Hence, it was dropped without replacement.
Any user that relied on it must switch to basic or token authentication now.

### :warning: Remove `[ui].ONLY_SHOW_RELEVANT_REPOS` setting. ([#21962](https://github.com/go-gitea/gitea/issues/21962))
On the explore page, you can switch whether you only want to see relevant repos, or all repos.
As this page already offers a link to switch between these two options, this setting only had a negligible effect and complicated the logic by a lot.
Hence, it was dropped without replacement.
You can now remove it from your `app.ini` if present.

### :warning: Restrict valid user names ([#20136](https://github.com/go-gitea/gitea/issues/20136))
Valid user names now follow the following rules:
- allowed letters are `-`,`.`, `_`, `0-9`, `a-z`, `A-Z`
- names must not start or end with `-`,`.`, or `_`
- names must not have consecutive `-`,`.`, or `_`. (i.e. `a-.b` is illegal)

No action must be taken for existing users.
This is only enforced for newly created users.

### :warning: Separate allowed units for normal repos and forks ([#22541](https://github.com/go-gitea/gitea/issues/22541))
Previously, fork repositories had all default units.
Now, forks only enable code access and pull requests by default.
If you want everything to behave like before, please set the setting `[repository].DEFAULT_FORK_REPO_UNITS` to the value of `[repository].DEFAULT_REPO_UNITS`.

### :warning: Support camel case for issue and code search when using Bleve ([#22829](https://github.com/go-gitea/gitea/issues/22829))
In order to be able to support queries that include camel case tokens, the indexes must be rebuilt.
This is an automatic process that will be done on the first startup without any user interaction.

### :warning: Support commit description in the merge template ([#22248](https://github.com/go-gitea/gitea/issues/22248))
Previously, your whole `default_merge_message` template file was considered to be the commit title.
Now, only the first line is the commit title, and the rest (from line 3 on) is the commit description, just like in normal commits.

## Highlights

### :rocket: Gitea Actions ([#21937](https://github.com/go-gitea/gitea/issues/21937))
One of the biggest requests of all time has finally made it into Gitea (for now as a preview): Gitea Actions.
Gitea Actions is a built-in CI system like GitHub Actions. With Gitea Actions, you can reuse your familiar workflows and Github Actions in your self-hosted Gitea instance.
While it is not currently fully compatible with GitHub Actions, we intend to become as compatible as possible in future versions.
The typical procedure is as follows:
1. Register a runner (at the moment, [act runners](https://gitea.com/gitea/act_runner) are the only option).
This can be done on the following scopes:
   - site-wide (by site admins)
   - organization-wide (by organization owners)
   - repository-wide (by repository owners)
2. Create workflow files under `.gitea/workflows/<workflow name>.yaml` or `.github/workflows/<workflow name>.yaml`.
The syntax is the same as the [GitHub workflow syntax](https://docs.github.com/en/actions) where supported.
(The link points at the GitHub documentation as we don't have our own docs yet)
For example, try the following test file which Gitea uses to pre-build the available `act_runner` binaries:
```yaml
name: goreleaser

on:
  push:
    branches: [ main ]

jobs:
  goreleaser:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
        with:
          fetch-depth: 0
      - run: git fetch --force --tags
      - uses: actions/setup-go@v3
        with:
          go-version: '>=1.20.1'
      - name: goreleaser
        uses: https://github.com/goreleaser/goreleaser-action@v4
        with:
            distribution: goreleaser-pro
            version: latest
            args: release --nightly
        env:
          GORELEASER_KEY: ${{ secrets.GORELEASER_KEY }}
```
3. Commit and push the workflow files
4. If everything has been set up correctly, the workflows will be run whenever one of its triggers has been triggered:
![successful workflow run](/demos/21937/actions-view.png)

Huge thanks to the authors of actions ([@wolfogre](https://gitea.com/wolfogre), [@lunny](https://gitea.com/lunny), [@appleboy](https://gitea.com/appleboy) and [@fuxiaohei](https://gitea.com/fuxiaohei)), of [@nektos](https://github.com/nektos), [all contributors of act](https://github.com/nektos/act) for [act_runner](https://gitea.com/gitea/act_runner), and [@delvh](https://gitea.com/delvh) for significant effort spent reviewing the PRs.

More information can be found [in the issue to implement actions](https://github.com/go-gitea/gitea/issues/13539), and you can find a small tutorial [in our blog](https://blog.gitea.com/feature-preview-gitea-actions/).

### :rocket: Asciicast support ([#22448](https://github.com/go-gitea/gitea/issues/22448))
It is now possible to view uploaded Asciicast (`.cast`) files.
Asciicast is an efficient format to convert a textsequence time interval (i.e. a terminal session) into a video.
A picture (or in this case three) is worth a thousand words:
First, you open the file as any other file:
![asciicast open file](/demos/22448/asciicast-open.png)
Then, you start watching the video:
![asciicast play video](/demos/22448/asciicast-play.png)
One of the key features of asciicast videos is that the text contained in it can be selected.
![asciicast select text inside the video](/demos/22448/asciicast-select-text.png)

Thanks to [@wolfogre](https://gitea.com/wolfogre)

### :rocket: Cargo ([#21888](https://github.com/go-gitea/gitea/issues/21888)), Chef ([#22554](https://github.com/go-gitea/gitea/issues/22554)), Conda ([#22262](https://github.com/go-gitea/gitea/issues/22262)) package registries and package limits/cleanup ([#21584](https://github.com/go-gitea/gitea/issues/21584), [#21658](https://github.com/go-gitea/gitea/pull/21658))
Gitea 1.19 ships with three new package registries that coincidentally all start with `C`:
- Cargo (Rust)
- Chef (language agnostic)
- Conda (especially Python, can also be used for other languages)

Furthermore, it is now possible to limit how large an uploaded package can be, or when packages will be deleted again to save space.

Thanks to [@KN4CK3R](https://gitea.com/KN4CK3R) for all of his work adding each of the new package registry types and restricting the amount of space consumed by packages.

### :rocket: Citing repos ([#19999](https://github.com/go-gitea/gitea/issues/19999))
Repositories with a `CITATION.cff` file will now automatically display a hint to cite the repository.
![cite dialogue](/demos/19999/cite-repo.png)
To find the dialogue, click on <kbd>…</kbd> to open the menu for additional actions.

Thanks to [@Nolann71](https://github.com/Nolann71)

### :rocket: Copy file content ([#21629](https://github.com/go-gitea/gitea/issues/21629))
It is now easier than ever before to copy the content of a whole file:
![Content copy button](/demos/21629/copy-file-content.png)

Thanks to [@yardenshoham](https://github.com/yardenshoham)

### :rocket: Pre-built FreeBSD binaries ([#22397](https://github.com/go-gitea/gitea/issues/22397))
Now we provide official pre-built FreeBSD binaries. 

Thanks to [@techknowlogick](https://gitea.com/techknowlogick) for the many year effort of adding
FreeBSD support to XGO, and to the FreeBSD community for their advice throughout the process

### :rocket: Highlight `Note` and `Warning` in markdown quotes ([#21711](https://github.com/go-gitea/gitea/issues/21711))
The first `**Note**` or `**Warning**` found in a markdown quote (`> text`) will automatically be highlighted now:
![note and warning highlighting](/demos/21711/note-warning-highlight.png)

Thanks to [@yardenshoham](https://github.com/yardenshoham)

### :rocket: LFS GC ([#22385](https://github.com/go-gitea/gitea/issues/22385))
Unreferenced LFS files will now be cleaned as well after a while. \
Previously, such files would simply accumulate forever.

Thanks to [@zeripath](https://github.com/zeripath)

### :rocket: Projects for organizations/users ([#22235](https://github.com/go-gitea/gitea/issues/22235))
If you have ever had at least two repositories that were related to each other, you probably hated working with projects.
This has now improved tremendously as Gitea 1.19 allows you to define projects on a "global" level, to track work in multiple repositories.

![org-user projects](/demos/22235/Org-User-level-projects.png)

Thanks to [@lunny](https://github.com/lunny)

### :rocket: Referencing commits across repos ([#22645](https://github.com/go-gitea/gitea/issues/22645))
We were surprised too when we noticed that Gitea doesn't support referencing a commit in another repository yet.
Said and done, you can now reference commit `123456789` in repo `owner/repo` by using the syntax `owner/repo@123456789`, when you are talking about that specific commit even if you're not inside of repo `owner/repo` at the moment.

Thanks to [@KN4CK3R](https://gitea.com/KN4CK3R)

### :rocket: Reply by email ([#22056](https://github.com/go-gitea/gitea/issues/22056))
It is now possible to reply to a mail about a comment to create a new comment.

Thanks to [@KN4CK3R](https://github.com/KN4CK3R) and [@a1012112796](https://github.com/a1012112796) for their work on this widely requested feature

### :rocket: Restrict access token permissions ([#20908](https://github.com/go-gitea/gitea/issues/20908))
Previously, all access tokens had all permissions. \
Now, you can set which permissions access tokens may have to prevent unintended access. \
FYI: We call these restrictions `scoped access tokens`.
![dialogue to select the permissions of an access token](/demos/20908/scoped-access-tokens.png)

Thanks to [@harryzcy](https://gitea.com/harryzcy) for increasing the security of Gitea

### :rocket: Scoped labels ([#22585](https://github.com/go-gitea/gitea/issues/22585))
Whenever a label contains a `/` in its name (not at either end), you can decide if a label should be `exclusive`.
For example, if the labels `kind/bug` and `kind/enhancement` have the `exclusive` option set, an issue may only be classified as a bug, or an enhancement, but not both. You can see in the screenshot, that multiple `Kind` labels can be set, but only one `Priority` label. Additionally, scoped labels are highlighted differently.
![scoped label display](/demos/22585/scoped-labels.png)
By the way, the labels you can see in the screenshot are part of the new label set `Advanced` that is shipped by default with Gitea 1.19.
It mimics the labels Gitea uses for its own development.
Read more about (scoped) labels in the [documentation](https://docs.gitea.io/en-us/labels/#scoped-labels).

Thanks to [@brechtvl](https://github.com/brechtvl) and the rest of the Blender team for adding this functionality to Gitea

### :rocket: Secrets ([#22142](https://github.com/go-gitea/gitea/issues/22142))
Repos, users and organizations can now store secrets that can be used for example inside Gitea actions.
These secrets cannot be seen by anyone who isn't an owner of the repo or organization.

Thanks to [@wolfogre](https://gitea.com/wolfogre), [@lunny](https://gitea.com/lunny) and [@lafriks](https://gitea.com/lafriks)

### :rocket: Wildcard branch protection ([#20825](https://github.com/go-gitea/gitea/issues/20825))
Previously, branch protection was limited to a single branch that had to exist.
Now, you can use wildcards such as
- `*` (to protect all branches)
- `feature/*-test` (to protect all branches that start with `feature/`, end with `-test`, and have no `/` inbetween)
- `test/**` (to protect all branches starting with `test/`, no matter what comes afterward).

Thanks to [@lunny](https://gitea.com/lunny)

### :rocket: Honorable mentions (substantial improvements)
- Multi-server support:
    - previously, every generated link was absolute
    - now, Gitea uses relative links wherever possible
    - thus, Gitea is now far more portable between different URLs
- Accessibility:
    - Many small improvements to make Gitea usable for everyone
- Easier theming:
    - CSS no longer has any hardcoded colors
    - Gitea uses standard CSS now instead of the previous LESS
    - Changing the theme is now fairly easy

Lastly, we also want to thank all the maintainers of Gitea who support the community, and who discuss and review all of these PRs, or help the project out in any other way.

## Changelog

### [1.19.0](https://github.com/go-gitea/gitea/releases/tag/1.19.0) - 2023-03-19

* BREAKING
  * Add loading yaml label template files (#22976) (#23232)
  * Make issue and code search support camel case (#22829)
  * Repositories: by default disable all units except code and pulls on forks (#22541)
  * Support template for merge message description (#22248)
  * Fix wrong default value for update checker on app.example.ini (#22084)
  * Remove ONLY_SHOW_RELEVANT_REPOS setting (#21962)
  * Implement actions (#21937)
  * Remove deprecated DSA host key from Docker Container (#21522)
  * Improve valid user name check (#20136)
* SECURITY
  * Return 404 instead of 403 if user can not access the repo (#23155) (#23158)
  * Support scoped access tokens (#20908)
* FEATURES
  * Add support for commit cross references (#22645)
  * Scoped labels (#22585)
  * Add Chef package registry (#22554)
  * Support asciicast files as new markup (#22448)
  * cgo cross-compile for freebsd (#22397)
  * Add cron method to gc LFS MetaObjects (#22385)
  * Add new captcha: cloudflare turnstile (#22369)
  * Enable `@<user>`- completion popup on the release description textarea (#22359)
  * make /{username}.png redirect to user/org avatar (#22356)
  * Add Conda package registry (#22262)
  * Support org/user level projects (#22235)
  * Add Mermaid copy button, avoid unnecessary tooltip hide (#22225)
  * Add user secrets (#22191)
  * Secrets storage with SecretKey encrypted (#22142)
  * Preview images for Issue cards in Project Board view (#22112)
  * Add support for incoming emails (#22056)
  * Add Cargo package registry (#21888)
  * Add option to prohibit fork if user reached maximum limit of repositories (#21848)
  * Add attention blocks within quote blocks for `Note` and `Warning` (#21711)
  * Add Feed for Releases and Tags (#21696)
  * Add package registry cleanup rules (#21658)
  * Add "Copy" button to file view of raw text (#21629)
  * Allow disable sitemap (#21617)
  * Add package registry quota limits (#21584)
  * Map OIDC groups to Orgs/Teams (#21441)
  * Keep languages defined in .gitattributes (#21403)
  * Add Webhook authorization header (#20926)
  * Supports wildcard protected branch (#20825)
  * Copy citation file content, in APA and BibTex format, on repo home page (#19999)
* API
  * Match api migration behavior to web behavior (#23552) (#23573)
  * Purge API comment (#23451) (#23452)
  * User creation API: allow custom "created" timestamps (#22549)
  * Add `updated_at` field to PullReview API object (#21812)
  * Add API management for issue/pull and comment attachments (#21783)
  * Add API endpoint to get latest release (#21267)
  * Support system hook API (#14537)
* ENHANCEMENTS
  * Add `.patch` to `attachment.ALLOWED_TYPES` (#23580) (#23582) 
  * Fix sticky header in diff view (#23554) (#23568)
  * Fix some broken css (#23560) (#23567)
  * Refactor merge/update git command calls (#23366) (#23544)
  * Fix review comment context menu clipped bug (#23523) (#23543)
  * Imrove scroll behavior to hash issuecomment(scroll position, auto expand if file is folded, and on refreshing) (#23513) (#23540)
  * Increase horizontal page padding (#23507) (#23537)
  * Use octicon-verified for gpg signatures (#23529) (#23536)
  * Make time tooltips interactive (#23526) (#23527)
  * Replace Less with CSS (#23508)
  * Fix 'View File' button in code search (#23478) (#23483)
  * Convert GitHub event on actions and fix some pull_request events. (#23037) (#23471)
  * Support reflogs (#22451) (#23438)
  * Fix actions frontend bugs (pagination, long name alignment) and small simplify (#23370) (#23436)
  * Scoped label display and documentation tweaks (#23430) (#23433)
  * Add missing tabs to org projects page (#22705) (#23412)
  * Fix and move "Use this template" button (#23398) (#23408)
  * Handle OpenID discovery URL errors a little nicer when creating/editing sources (#23397) (#23403)
  * Rename `canWriteUnit` to `canWriteProjects` (#23386) (#23399)
  * Refactor and tidy-up the merge/update branch code (#22568) (#23365)
  * Refactor `setting.Database.UseXXX` to methods (#23354) (#23356)
  * Fix incorrect project links and use symlink icon for org-wide projects (#23325) (#23336)
  * Fix PR view misalignment caused by long name file (#23321) (#23335)
  * Scoped labels: don't require holding alt key to remove (#23303) (#23331)
  * Add context when rendering labels or emojis (#23281) (#23319)
  * Change interactiveBorder to fix popup preview  (#23169) (#23314)
  * Scoped labels: set aria-disabled on muted Exclusive option for a11y (#23306) (#23311)
  * update to mermaid v10 (#23178) (#23299)
  * Fix code wrap for unbroken lines (#23268) (#23293)
  * Use async await to fix empty quote reply at first time (#23168) (#23256)
  * Fix switched citation format (#23250) (#23253)
  * Allow `<video>` in MarkDown (#22892) (#23236)
  * Order pull request conflict checking by recently updated, for each push (#23220) (#23225)
  * Fix Fomantic UI's `touchstart` fastclick, always use `click` for click events (#23065) (#23195)
  * Add word-break to sidebar-item-link (#23146) (#23180)
  * Add InsecureSkipVerify to Minio Client for Storage (#23166) (#23177)
  * Fix height for sticky head on large screen on PR page (#23111) (#23123)
  * Change style to improve whitespaces trimming inside inline markdown code (#23093) (#23120)
  * Avoid warning for system setting when start up (#23054) (#23116)
  * Add accessibility to the menu on the navbar (#23059) (#23095)
  * Improve accessibility for issue comments (#22612) (#23083)
  * Remove delete button for review comment (#23036)
  * Remove dashes between organization member avatars on hover (#23034)
  * Use `gt-relative` class instead of the ambiguous `gt-pr` class  (#23008)
  * handle deprecated settings (#22992)
  * Add scopes to API to create token and display them (#22989)
  * Improve PR Review Box UI (#22986)
  * Improve issues.LoadProject (#22982)
  * Add all units to the units permission list in org team members sidebar (#22971)
  * Rename `GetUnits` to `LoadUnits` (#22970)
  * Rename `repo.GetOwner` to `repo.LoadOwner` (#22967)
  * Rename "People" to "Members" in organization page and use a better icon (#22960)
  * Fix avatar misalignment (#22955)
  * Sort issues and pulls by recently updated in user and organization home (#22925)
  * Add `title` to PR file tree items (#22918)
  * First step to refactor the `.hide` to `.gt-hidden` (#22916)
  * Add tooltip to issue reference (#22913)
  * Always show the `command line instructions` button even if there are conflicts (#22909)
  * Fix dark-colored description text in arc-green theme (#22908)
  * Remove Fomantic-UI's `.hidden` CSS class for menu elements (#22895)
  * Move helpers to be prefixed with `gt-` (#22879)
  * Move `IsReadmeFile*` from `modules/markup/` to `modules/util` (#22877)
  * Highlight focused diff file (#22870)
  * Add some headings to repo views (#22869)
  * Fix milestone title font problem (#22863)
  * Pull Requests: setting to allow edits by maintainers by default, tweak UI (#22862)
  * Introduce customized HTML elements, fix incorrect AppUrl usages in templates (#22861)
  * Add `/$count` endpoints for NuGet v2 (#22855)
  * Remove Fomantic-UI's `.hidden` CSS class for checkbox elements (#22851)
  * Fix notification and stopwatch empty states (#22845)
  * Always go full width in PR view (#22844)
  * Improve AppUrl/ROOT_URL checking (#22836)
  * Fix style of actions rerun button (#22835)
  * Fix more HTMLURL in templates (#22831)
  * Fix inconsistent Filter Project name in issue list (#22827)
  * include build info in Prometheus metrics (#22819)
  * Make clone URL use current page's host (#22808)
  * Refactor legacy strange git operations (#22756)
  * Improve error report when user passes a private key (#22726)
  * set user dashboard org visibility to basic (#22706)
  * Fix diff UI for unexpandable items (#22700)
  * Remove 'primary' class from tab counter labels (#22687)
  * Add more events details supports for actions (#22680)
  * Refactor git command package to improve security and maintainability (#22678)
  * Use relative url in actions view (#22675)
  * set user visibility class to basic (#22674)
  * Add repository setting to enable/disable releases unit (#22671)
  * Remove label color from global issue filters (#22660)
  * Fix poor alignment of organization description on organization home page (#22656)
  * Small refactor for loading PRs (#22652)
  * Allow setting access token scope by CLI (#22648)
  * Improve accessibility of navigation bar and footer (#22635)
  * Fixes accessibility behavior of Watching, Staring and Fork buttons (#22634)
  * Fixes accessibility of empty repository commit status (#22632)
  * Pull request yaml template support for including commit body in a field (#22629)
  * Show migration validation error (#22619)
  * set org visibility class to basic in header (#22605)
  * Fix cache-control header clearing comment text when editing issue (#22604)
  * Add ARIA support for Fomantic UI checkboxes (#22599)
  * Add templates to customize text when creating and migrating repositories (#22597)
  * Allow setting `redirect_to` cookie on OAuth login (#22594)
  * Improve checkbox accessibility a bit by adding the title attribute (#22593)
  * Allow issue templates to not render title (#22589)
  * Webhooks: for issue close/reopen action, add commit ID that caused it (#22583)
  * Fix missing title and filter in issue sidebar project menu (#22557)
  * Issues: support setting issue template field values with query (#22545)
  * Issues: add Project filter to issues list and search (#22544)
  * Pull Requests: add color to approved/reject icon in pull requests list (#22543)
  * Mute all links in issue timeline (#22533)
  * Dropzone: Add "Copy link" button for new uploads (#22517)
  * Support importing comment types (#22510)
  * Load asciicast css async (#22502)
  * Move delete user to service (#22478)
  * Change use of Walk to WalkDir to improve disk performance (#22462)
  * Add reply hint to mail text (#22459)
  * fix wrong theme class when logged out if default theme is changed (#22408)
  * Refactor the setting to make unit test easier (#22405)
  * Improve utils of slices (#22379)
  * Use context parameter in models/git (#22367)
  * Always reuse transaction (#22362)
  * Fix unstable emoji sort (#22346)
  * Add context cache as a request level cache (#22294)
  * Reminder for no more logs to console (#22282)
  * Support estimated count with multiple schemas (#22276)
  * Move `convert` package to services (#22264)
  * Use dynamic package type list (#22263)
  * Hide file borders on sticky diff box (#22217)
  * Improve notification and stopwatch styles (#22169)
  * Fixed Project view .board-column height for tall screens. (#22108)
  * Use multi reader instead to concat strings (#22099)
  * Use git command instead of exec.Cmd in blame (#22098)
  * Fix autofilled text visibility in dark mode (#22088)
  * Rename almost all Ctx functions (#22071)
  * Rename actions to operations on UI (#22067)
  * refactor bind functions based on generics (#22055)
  * Support disabling database auto migration (#22053)
  * remove duplicated read file code (#22042)
  * Use link in UI which returned a relative url but not html_url which contains an absolute url (#21986)
  * Skip initing disabled storages (#21985)
  * Add doctor command for full GC of LFS (#21978)
  * Util type to parse ref name (#21969)
  * Replace fmt.Sprintf with hex.EncodeToString (#21960)
  * Use random bytes to generate access token (#21959)
  * Add index for access_token (#21908)
  * Move all remaining colors into CSS variables (#21903)
  * Webhook list enhancements (#21893)
  * Embed Matrix icon as SVG (#21890)
  * Remove useless "Cancel" buttons (#21872)
  * fix(web): keep the pages of the navigation in the center (#21867)
  * fix(web): reduce page jitter on browsers that support overlay scrollbar (#21850)
  * Improvements for Content Copy (#21842)
  * Tweak katex options (#21828)
  * Show syntax lexer name in file view/blame (#21814)
  * Remove `href="javascript:;"` in "save topics (Done)" button (#21813)
  * Render number of commits in repo page in a user friendly way (#21786)
  * Adjust clone timeout error to suggest increasing timeout (#21769)
  * Update message of reach_limit_of_creation (#21757)
  * Allow detect whether it's in a database transaction for a context.Context (#21756)
  * Add configuration for CORS allowed headers (#21747)
  * Move svg html render to modules/svg (#21716)
  * Release and Tag List tweaks (#21712)
  * Remove template previewer (#21701)
  * Clean up formatting on install page (#21668)
  * Configure update checker on installation page (#21655)
  * Merge db.Iterate and IterateObjects (#21641)
  * Add option to enable CAPTCHA validation for login (#21638)
  * Allow disable RSS/Atom feed (#21622)
  * Use CSS color-scheme instead of invert (#21616)
  * Localize time units on activity heatmap (#21570)
  * Fix UI column width, button overflow Fomantic's grid (#21559)
  * feat: notify doers of a merge when automerging (#21553)
  * Split migrations folder (#21549)
  * feat: add button to quickly clear merge message (#21548)
  * Add `context.Context` to more methods (#21546)
  * Add index for hook_task table (#21545)
  * Allow disable code tab (#20805)
* BUGFIXES
  * Fix template error when reference Project (#23584)
  * Fix dropdown icon misalignment when using fomantic icon (#23558) (#23577)
  * Fix diff detail buttons wrapping, use tippy for review box (#23271) (#23546)
  * Handle missing `README` in create repos API (#23387) (#23510)
  * Disable sending email after push a commit to a closed PR (#23462) (#23492)
  * Fix aria.js bugs: incorrect role element problem, mobile focus problem, tippy problem (#23450) (#23486)
  * Fix due date being wrong on issue list (#23475) (#23477)
  * Remove wrongly added column on migration test fixtures (#23456) (#23470)
  * Make branches list page operations remember current page (#23420) (#23460)
  * Fix missing commit status in PR which from forked repo (#23351) (#23453)
  * Show edit/close/delete button on organization wide repositories (#23388) (#23429)
  * Preserve file size when creating attachments (#23406) (#23426)
  * Fix broken Chroma CSS styles (#23174) (#23402)
  * Fix incorrect NotFound conditions in org/projects.go (#23384) (#23395)
  * Set `X-Gitea-Debug` header once (#23361) (#23381)
  * Pass context to avatar for projects view (#23359) (#23378)
  * Fix panic when getting notes by ref (#23372) (#23377)
  * Do not recognize text files as audio (#23355) (#23368)
  * Fix adding of empty class name (#23352) (#23360)
  * Fix various ImageDiff/SVG bugs (#23312) (#23358)
  * Fix incorrect display for comment context menu (#23343) (#23344)
  * Remove unnecessary space on link (#23334) (#23340)
  * Fix incorrect redirect link of delete org project (#23327) (#23339)
  * Fix cannot reopen after pushing commits to a closed PR (#23189) (#23324)
  * Fix broken code editor diff preview (#23307) (#23320)
  * Support sanitising the URL by removing extra slashes in the URL (#21333) (#23300)
  * Avoid panic caused by broken payload when creating commit status (#23216) (#23294)
  * Fill head commit to in payload when notifying push commits for mirroring (#23215) (#23292)
  * Fix various bugs for "install" page (#23194) (#23286)
  * Fix GetFilesChangedBetween if the file name may be escaped (#23272) (#23279)
  * Revert relative links to absolute links in mail templates (#23267) (#23269)
  * Fix commit retrieval by tag (#21804) (#23266)
  * Use correct README link to render the README (#23152) (#23264)
  * Close the temp file when dumping database to make the temp file can be deleted on Windows (#23249) (#23251)
  * Use the correct selector to hide the checkmark of selected labels on clear (#23224) (#23228)
  * Fix incorrect checkbox behaviors in the dashboard repolist's filter (#23147) (#23205)
  * Properly flush unique queues on startup (#23154) (#23201)
  * Pass `--global` when calling `git config --get`, for consistency with `git config --set` (#23157) (#23199)
  * Make `gitea serv` respect git binary home (#23138) (#23197)
  * Change button text for commenting and closing an issue at the same time (#23135) (#23182)
  * Fix DBConsistency checks on MSSQL (#23132) (#23134)
  * Show empty repos in Admin Repository Management page (#23114) (#23130)
  * Redirect to the commit page after applying patch (#23056) (#23127)
  * Fix nil context in RenderMarkdownToHtml (#23092) (#23108)
  * Make issue meta dropdown support Enter, confirm before reloading (#23014) (#23102)
  * Fix SyncOnCommit always return false in API of push_mirrors (#23088) (#23100)
  * Fix commit name in Apply Patch page (#23086) (#23099)
  * Fix some more hidden problems (#23074) (#23075)
  * Bump golang.org/x/net from 0.4.0 to 0.7.0 (#22980)
  * Get rules by id when editing branch protection rule (#22932)
  * Fix panic when call api (/repos/{owner}/{repo}/pulls/{index}/files) (#22921)
  * Increase Content field size of gpg_import_key to MEDIUMTEXT (#22897)
  * Fix hidden commit status on multiple checks (#22889)
  * Fix .golangci.yml (#22868)
  * Fix update by rebase being wrongly disabled by protected base branch (#22825)
  * Make issue title edit buttons focusable and fix incorrect ajax requests (#22807)
  * Fix rerun button of Actions (#22798)
  * remove update language in ProfilePost (#22748)
  * Do not overwrite empty DefaultBranch (#22708)
  * Fix ref to trigger Actions (#22679)
  * Fix time to NotifyPullRequestSynchronized (#22650)
  * Show all projects, not just repo projects and open/closed projects  (#22640)
  * Project links should use parent link methods (#22587)
  * Fix group filter for ldap source sync (#22506)
  * Check quota limits for container uploads (#22450)
  * Fix halfCommitter and WithTx (#22366)
  * Attempt to fix TestExportUserGPGKeys (#22159)
  * Fix heatmap first color being unused (#22157)
  * Fix scroll over mermaid frame (#21925)
  * Move migration test fixtures to the correct directories (#21901)
  * fix(web): add `alt` for logo in home page (#21887)
  * Fix webhook attachment text is not set in review comment (#21763)
  * Alter package_version.metadata_json to LONGTEXT (#21667)
  * Ensure that Webhook tasks are not double delivered (#21558)
* TESTING
  * Make CI use a dummy password hasher for all tests (#22983)
  * Disable test for incoming email (#22686)
  * Move fuzz tests into tests/fuzz (#22376)
  * Test views of LFS files (#22196)
  * Specify ID in `TestAPITeam` (#22192)
  * verify nodeinfo response by schema  (#22137)
  * Skip GitHub migration tests if the API token is undefined (#21824)
  * Add a simple test for external renderer (#20033)
* TRANSLATION
  * Use "Title Case" for text "Reference in new issue" (#22936)
* BUILD
  * Wrap unless-check in docker manifests (#23079) (#23081)
  * Adjust manifest to prevent tagging latest on rcs (#22811)
  * update to build with go1.20 (#22732)
  * Add Bash and Zsh completion scripts (#22646)
  * Add Contributed backport command (#22643)
  * Remove deprecated packages & staticcheck fixes (#22012)
  * Update to Alpine 3.17 (#21904)
  * Update JS dependencies (#21881)
  * Fix webpack license warning (#21815)
* DOCS
  * Update documentation for the new YAML label file format  (#23020) (#23341)
  * Update hacking-on-gitea-zh_cn documentation (#23315) (#23323)
  * Add basic documentation for labels, including scoped labels (#23304) (#23309)
  * Re-add accidentally removed `hacking-on-gitea.zh-cn.md` (#23297) (#23305)
  * Fix secrets overview page missing from docs sidebar (#23143) (#23145)
  * Add some guidelines for refactoring (#22880)
  * Explain that the no-access team unit does not affect public repositories (#22661)
  * Fix incorrect Redis URL snippets in the example app.ini (#22573)
  * docs: add swagger.json file location to FAQ (#22489)
  * Update index.de-de.md (#22363)
  * Update Gmail mailer configuration (#22291)
  * Add missed reverse proxy authentication documentation (#22250)
  * Add plural definitions for German translations (#21802)
  * Attempt clarify AppWorkPath etc. (#21656)
  * Add some documentation to packages (#21648)
* MISC
  * Use `<nav>` instead of `<div>` in the global navbar (#23125) (#23533)
  * Bump webpack from 5.75.0 to 5.76.0 (#23484) (#23487)
  * Do not create commit graph for temporary repos (#23219) (#23229)
  * Update button is shown when a Pull Request is marked WIP - Issue #21740 (#22683)
  * Add main landmark to templates and adjust titles (#22670)
  * Fix error on account activation with wrong passwd (#22609)
  * Update JS dependencies (#22538)
  * Display unreferenced packages total size in package admin panel (#22498)
  * Mobile fix for Project view: Add delay to Sortable.js on mobile, to ensure scrolling is possible. (#22152)
  * Update chroma to v2.4.0 (#22000)
  * Hide collapse icon in diff with no lines (#21094)

## Contributors for this release

* [@6543](https://github.com/6543)
* [@Adito5393](https://github.com/Adito5393)
* [@ByLCY](https://github.com/ByLCY)
* [@Cosin](https://github.com/Cosin)
* [@CrazyTushkan](https://github.com/CrazyTushkan)
* [@CrystalCommunication](https://github.com/CrystalCommunication)
* [@GiteaBot](https://github.com/GiteaBot)
* [@Gusted](https://github.com/Gusted)
* [@HesterG](https://github.com/HesterG)
* [@JakobDev](https://github.com/JakobDev)
* [@KN4CK3R](https://github.com/KN4CK3R)
* [@MFTabriz](https://github.com/MFTabriz)
* [@MisterCavespider](https://github.com/MisterCavespider)
* [@Nolann71](https://github.com/Nolann71)
* [@Racer159](https://github.com/Racer159)
* [@Zettat123](https://github.com/Zettat123)
* [@aceArt-GmbH](https://github.com/aceArt-GmbH)
* [@brechtvl](https://github.com/brechtvl)
* [@clarfonthey](https://github.com/clarfonthey)
* [@delvh](https://github.com/delvh)
* [@dependabot[bot]](https://github.com/dependabot[bot])
* [@dfelinto](https://github.com/dfelinto)
* [@disposedtrolley](https://github.com/disposedtrolley)
* [@drewmnoel](https://github.com/drewmnoel)
* [@drsybren](https://github.com/drsybren)
* [@flynnnnnnnnnn](https://github.com/flynnnnnnnnnn)
* [@fnetX](https://github.com/fnetX)
* [@fsiddi](https://github.com/fsiddi)
* [@fsologureng](https://github.com/fsologureng)
* [@garymoon](https://github.com/garymoon)
* [@gempir](https://github.com/gempir)
* [@gnat](https://github.com/gnat)
* [@harryzcy](https://github.com/harryzcy)
* [@haruo31](https://github.com/haruo31)
* [@jim-kirisame](https://github.com/jim-kirisame)
* [@jladbrook](https://github.com/jladbrook)
* [@jolheiser](https://github.com/jolheiser)
* [@jpraet](https://github.com/jpraet)
* [@jtran](https://github.com/jtran)
* [@kdumontnu](https://github.com/kdumontnu)
* [@kecrily](https://github.com/kecrily)
* [@kolaente](https://github.com/kolaente)
* [@kousu](https://github.com/kousu)
* [@kyakdan](https://github.com/kyakdan)
* [@lafriks](https://github.com/lafriks)
* [@lukashass](https://github.com/lukashass)
* [@lunny](https://github.com/lunny)
* [@mrsdizzie](https://github.com/mrsdizzie)
* [@mwasilew2](https://github.com/mwasilew2)
* [@oliverpool](https://github.com/oliverpool)
* [@qwerty287](https://github.com/qwerty287)
* [@rekayno](https://github.com/rekayno)
* [@reopt999](https://github.com/reopt999)
* [@segler89](https://github.com/segler89)
* [@sillyguodong](https://github.com/sillyguodong)
* [@silverwind](https://github.com/silverwind)
* [@techknowlogick](https://github.com/techknowlogick)
* [@tiny6996](https://github.com/tiny6996)
* [@wolfogre](https://github.com/wolfogre)
* [@wxiaoguang](https://github.com/wxiaoguang)
* [@xtexChooser](https://github.com/xtexChooser)
* [@xyworks](https://github.com/xyworks)
* [@yardenshoham](https://github.com/yardenshoham)
* [@yp05327](https://github.com/yp05327)
* [@zeripath](https://github.com/zeripath)

