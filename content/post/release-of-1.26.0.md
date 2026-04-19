---
date: 2026-04-18T13:04:00-07:00
authors:
  - "lunny"
  - "bircni"
title: "Gitea 1.26.0 is released"
tags: ["release"]
draft: false
coverImageRelease: "1.26.0"
---

We are thrilled to announce the latest release of Gitea **v1.26.0**.

Gitea 1.26.0 brings exciting new features, performance improvements, and quality-of-life enhancements. Here are some notable changes and features in Gitea 1.26; for the full list, refer to the [full release notes](#changelog).

We are very thankful for the many people who have contributed to the project by sending code patches, reporting issues, translating, and supporting us in many other ways.

## Security

This release addresses several important security vulnerabilities:

- CVE-2026-28737: Stored XSS in the Gitea 3D File Viewer via the glTF extensionsRequired field. Fixed by [#37233](https://github.com/go-gitea/gitea/pull/37233). Thanks to [@yonatan-pl](https://github.com/yonatan-pl) for reporting the issue, and to [@silverwind](https://github.com/silverwind) and [@wxiaoguang](https://github.com/wxiaoguang) for the patch.

- CVE-2026-22555: Missing CanCreateOrgRepo check in the API fork flow allowed exfiltration of organization secrets. Fixed by [#36950](https://github.com/go-gitea/gitea/pull/36950). Thanks to [@andrejtomci](https://github.com/andrejtomci) for reporting the issue, and to [@lunny](https://github.com/lunny) for the patch.

- CVE-2026-27780: Branch protection bypass caused by silent truncation in bufio.Scanner during pre-receive hook processing. Fixed by [#36963](https://github.com/go-gitea/gitea/pull/36963). Thanks to [@yonatan-pl](https://github.com/yonatan-pl) for reporting the issue, and to [@lunny](https://github.com/lunny) for the patch.

- Bound `PageSize` in `ListUnadoptedRepositories` to prevent unbounded API responses ([#36884](https://github.com/go-gitea/gitea/pull/36884)).

## How to Update

You can download it for example from our [downloads page](https://dl.gitea.com/gitea/1.26.0/). Please read our [installation guide](https://docs.gitea.com/1.26/category/installation) for more information on installation. To upgrade, as always, back up your data and then replace the binary or Docker container and restart.

## Special Thanks

We would like to thank all of our supporters on [Open Collective](https://opencollective.com/gitea) who are helping to sustain the project financially.

As always, the changes are sorted descending by what we deem most important for users and admins, so the most important change comes first.

> **Are you looking for a seamless, hassle-free solution to manage your Git repositories? Look no further! [Gitea Cloud](https://cloud.gitea.com) is here to revolutionize your development experience.**

## Major Breaking Changes

### :warning: Correct Swagger annotations for enums, status codes, and notification state ([#37030](https://github.com/go-gitea/gitea/pull/37030))

The generated OpenAPI description is now aligned with the actual API: enum values, HTTP status codes, and notification state are documented more accurately. If you rely on the published Swagger spec for code generation or contract tests, regenerate clients and re-check any assumptions about optional fields or response shapes.

Thank you to **[@myers](https://github.com/myers)** for contributing this change.

### :warning: Remove GET API registration-token ([#36801](https://github.com/go-gitea/gitea/pull/36801))

The `GET` endpoint used to retrieve a registration token has been removed. Automation that still calls it needs to be updated to the supported registration flow for your deployment.

Thank you to **[@lunny](https://github.com/lunny)** for contributing this change.

### :warning: Support Actions `concurrency` syntax ([#32751](https://github.com/go-gitea/gitea/pull/32751))

Workflows can now use GitHub-style `concurrency` groups so that new runs cancel or queue relative to in-progress jobs. That changes runtime behavior compared with earlier releases, so review existing workflows after upgrading—especially long-running or overlapping pipelines.

Thank you to **[@Zettat123](https://github.com/Zettat123)** for contributing this feature.

### :warning: Make `PUBLIC_URL_DETECTION` default to `auto` ([#36955](https://github.com/go-gitea/gitea/pull/36955))

New installations now default to automatic public URL detection. If you depend on a specific explicit URL configuration behind reverse proxies or alternate hostnames, confirm your `[server]` settings after upgrade so links, webhooks, and redirects still match your environment.

Thank you to **[@wxiaoguang](https://github.com/wxiaoguang)** for contributing this change.

## Major Highlights (Code)

### :rocket: Add keyboard shortcuts for repository file and code search ([#36416](https://github.com/go-gitea/gitea/pull/36416))

Navigate the code browser and search faster from the keyboard, similar to familiar shortcuts in other Git hosts.

Thank you to **[@micahkepe](https://github.com/micahkepe)** for contributing this feature.

### :rocket: Add support for archive-upload RPC ([#36391](https://github.com/go-gitea/gitea/pull/36391))

Gitea now supports `git archive --remote` against the repository URL, so clients can fetch archives through Git’s remote archive protocol (not only through the HTTP download endpoints).

Thank you to **[@TheFox0x7](https://github.com/TheFox0x7)** for contributing this feature.

### :rocket: Add ability to download subpath archive ([#36371](https://github.com/go-gitea/gitea/pull/36371))

Download a zip or tarball for a subdirectory of the repository instead of the full tree, which is ideal for monorepos and partial checkouts.

![Download archive for a repository subpath](/demos/36371/1.png)

Thank you to **[@TheFox0x7](https://github.com/TheFox0x7)** for contributing this feature.

### :rocket: Automatic generation of release notes ([#35977](https://github.com/go-gitea/gitea/pull/35977))

The release editor can generate Markdown notes server-side from merged pull requests and contributors, similar to GitHub, so publishing a version takes less manual editing.

![Automatic release notes in the release editor](/demos/35977/1.png)

Thank you to **[@dawidgora](https://github.com/dawidgora)** for contributing this feature.

### :rocket: Add "Go to file" and "Delete directory" on the repo file list ([#35911](https://github.com/go-gitea/gitea/pull/35911))

Jump directly to a file by name and remove a whole directory from the browser when you have permission, streamlining everyday repository maintenance.

<video src="/demos/35911/1.mp4" type="video/mp4" width="800" controls>Your browser does not support embedded video</video>

Thank you to **[@brymut](https://github.com/brymut)** for contributing this feature.

## Major Highlights (Actions)

### :rocket: Support Actions `concurrency` syntax ([#32751](https://github.com/go-gitea/gitea/pull/32751))

Workflows can declare concurrency groups so new runs cancel or queue behind in-flight jobs, closely matching GitHub Actions. Because this changes how overlapping runs behave, pair this with the migration notes in **Major Breaking Changes** above.

Thank you to **[@Zettat123](https://github.com/Zettat123)** for contributing this feature.

### :rocket: Workflow dependency visualization and graph refresh ([#26062](https://github.com/go-gitea/gitea/pull/26062)) ([#36248](https://github.com/go-gitea/gitea/pull/36248)) ([#36912](https://github.com/go-gitea/gitea/pull/36912))

Complex workflows are easier to understand: the run view can show how jobs depend on each other, and the workflow graph styling has been updated for clarity.

![Restyled workflow run graph with job dependencies](/demos/36912/1.png)

Thank you to **[@xDarkmanx](https://github.com/xDarkmanx)** and **[@bircni](https://github.com/bircni)** for contributing these improvements.

### :rocket: Add button to re-run failed jobs ([#36924](https://github.com/go-gitea/gitea/pull/36924))

Retry only the jobs that failed instead of restarting the entire workflow when something flakes or is fixed out of band.

![Re-run failed jobs from the Actions run view](/demos/36924/1.png)

Thank you to **[@bircni](https://github.com/bircni)** for contributing this feature.

### :rocket: Support Actions and reusable workflows from private repositories ([#32562](https://github.com/go-gitea/gitea/pull/32562))

Pipelines can reference actions and reusable workflows stored in private repos you can access, matching common CI patterns on other platforms.

Thank you to **[@Zettat123](https://github.com/Zettat123)** for contributing this feature.

### :rocket: Configurable permissions for Actions automatic tokens ([#36173](https://github.com/go-gitea/gitea/pull/36173))

Tune what the automatic `GITHUB_TOKEN`-style credential may do so you can follow least-privilege defaults per instance or organization.

Thank you to **[@Excellencedev](https://github.com/Excellencedev)** for contributing this feature.

### :rocket: Per-runner disable and pause ([#36776](https://github.com/go-gitea/gitea/pull/36776))

Administrators can pause or disable individual runners without removing them, which helps during maintenance or when isolating a bad host.

Thank you to **[@bircni](https://github.com/bircni)** for contributing this feature.

### :rocket: Non-zipped Actions artifacts ([#36786](https://github.com/go-gitea/gitea/pull/36786))

Artifact upload/download can avoid zip wrapping where appropriate (with updated `actions` runner components), simplifying consumption from downstream jobs or external tools.

Thank you to **[@ChristopherHX](https://github.com/ChristopherHX)** for contributing this feature.

### :rocket: Summary on the Actions run view ([#36883](https://github.com/go-gitea/gitea/pull/36883))

Run summaries surface key outcome information at a glance alongside logs and job status.

![Markdown summary on an Actions workflow run](/demos/36883/1.png)

Thank you to **[@bircni](https://github.com/bircni)** for contributing this feature.

## Major Highlights (Performance)

### :rocket: Refactor `cat-file` batch operations ([#35775](https://github.com/go-gitea/gitea/pull/35775))

Git object reads use the newer `--batch-command` style where possible, cutting overhead for operations that touch many objects.

Thank you to **[@wxiaoguang](https://github.com/wxiaoguang)** for contributing this improvement.

### :rocket: Use merge tree to detect merge conflicts when possible ([#36400](https://github.com/go-gitea/gitea/pull/36400))

Conflict detection can take a faster path by leveraging merge-tree when Git supports it, which speeds up pull request and merge previews on busy instances.

Thank you to **[@lunny](https://github.com/lunny)** for contributing this improvement.

## Major Highlights (Administration)

### :rocket: Instance-wide info banner and maintenance mode ([#36571](https://github.com/go-gitea/gitea/pull/36571))

Show a global notice to all users and optionally steer traffic while you perform maintenance, without ad-hoc proxy tricks.

![Instance-wide banner and maintenance mode settings](/demos/36571/1.png)

Thank you to **[@bircni](https://github.com/bircni)** for contributing this feature.

### :rocket: User badges ([#36752](https://github.com/go-gitea/gitea/pull/36752))

Profiles can display badges so teams can recognize roles, achievements, or internal designations at a glance.

![List of all badges](/demos/36752/1.png)
![Users with specific badge](/demos/36752/2.png)

Thank you to **[@bircni](https://github.com/bircni)** for contributing this feature.

## Major Highlights (Build)

### :rocket: Migrate from webpack to Vite ([#37002](https://github.com/go-gitea/gitea/pull/37002))

The front-end toolchain now builds with Vite for faster development feedback and leaner production bundles.

Thank you to **[@silverwind](https://github.com/silverwind)** for contributing this migration.

### :rocket: Replace Monaco with CodeMirror ([#36764](https://github.com/go-gitea/gitea/pull/36764))

In-browser editing uses CodeMirror instead of Monaco, improving consistency with the rest of the UI and bundle layout.

![CodeMirror editor](/demos/36764/1.png)

Thank you to **[@silverwind](https://github.com/silverwind)** for contributing this change.

### :rocket: Replace CSRF cookie with `CrossOriginProtection` ([#36183](https://github.com/go-gitea/gitea/pull/36183))

Cross-site request protections are modernized: the old CSRF cookie mechanism gives way to `CrossOriginProtection`, which may affect custom reverse-proxy or embedding setups—see upgrade notes if you tune CORS or cookies manually.

Thank you to **[@silverwind](https://github.com/silverwind)** for contributing this change.

## Major Highlights (Others)

### :rocket: Terraform state registry ([#36710](https://github.com/go-gitea/gitea/pull/36710))

Host Terraform state in Gitea’s package registry so teams can coordinate infrastructure with the same access controls as code.

Thank you to **[@TheFox0x7](https://github.com/TheFox0x7)** for contributing this feature.

### :rocket: Render OpenAPI specifications in the browser ([#36449](https://github.com/go-gitea/gitea/pull/36449))

OpenAPI documents attached to the repository can be rendered for reading and exploration without leaving Gitea.

Thank you to **[@wxiaoguang](https://github.com/wxiaoguang)** for contributing this feature.

## Changelog

- BREAKING
  - Correct swagger annotations for enums, status codes, and notification state ([#37030](https://github.com/go-gitea/gitea/pull/37030))
  - Remove GET API registration-token ([#36801](https://github.com/go-gitea/gitea/pull/36801))
  - Support Actions `concurrency` syntax ([#32751](https://github.com/go-gitea/gitea/pull/32751))
  - Make PUBLIC_URL_DETECTION default to "auto" ([#36955](https://github.com/go-gitea/gitea/pull/36955))
- SECURITY
  - Bound PageSize in `ListUnadoptedRepositories` ([#36884](https://github.com/go-gitea/gitea/pull/36884))
- FEATURES
  - Support Actions `concurrency` syntax ([#32751](https://github.com/go-gitea/gitea/pull/32751))
  - Add Terraform state registry ([#36710](https://github.com/go-gitea/gitea/pull/36710))
  - Instance-wide (global) info banner and maintenance mode ([#36571](https://github.com/go-gitea/gitea/pull/36571))
  - Support rendering OpenAPI spec ([#36449](https://github.com/go-gitea/gitea/pull/36449))
  - Add keyboard shortcuts for repository file and code search ([#36416](https://github.com/go-gitea/gitea/pull/36416))
  - Add support for archive-upload rpc ([#36391](https://github.com/go-gitea/gitea/pull/36391))
  - Add ability to download subpath archive ([#36371](https://github.com/go-gitea/gitea/pull/36371))
  - Add workflow dependencies visualization ([#26062](https://github.com/go-gitea/gitea/pull/26062)) ([#36248](https://github.com/go-gitea/gitea/pull/36248)) & Restyle Workflow Graph ([#36912](https://github.com/go-gitea/gitea/pull/36912))
  - Automatic generation of release notes ([#35977](https://github.com/go-gitea/gitea/pull/35977))
  - Add "Go to file", "Delete directory" to repo file list page ([#35911](https://github.com/go-gitea/gitea/pull/35911))
  - Introduce "config edit-ini" sub command to help maintaining INI config file ([#35735](https://github.com/go-gitea/gitea/pull/35735))
  - Add button to re-run failed jobs in Actions ([#36924](https://github.com/go-gitea/gitea/pull/36924))
  - Support actions and reusable workflows from private repos ([#32562](https://github.com/go-gitea/gitea/pull/32562))
  - Add summary to action runs view ([#36883](https://github.com/go-gitea/gitea/pull/36883))
  - Add user badges ([#36752](https://github.com/go-gitea/gitea/pull/36752))
  - Add configurable permissions for Actions automatic tokens ([#36173](https://github.com/go-gitea/gitea/pull/36173))
  - Add per-runner "Disable/Pause" ([#36776](https://github.com/go-gitea/gitea/pull/36776))
  - Feature non-zipped actions artifacts (action v7 / nodejs / npm v6.2.0) ([#36786](https://github.com/go-gitea/gitea/pull/36786))
- PERFORMANCE
  - WorkflowDispatch API optionally return runid ([#36706](https://github.com/go-gitea/gitea/pull/36706))
  - Add render cache for SVG icons ([#36863](https://github.com/go-gitea/gitea/pull/36863))
  - Load `mentionValues` asynchronously ([#36739](https://github.com/go-gitea/gitea/pull/36739))
  - Lazy-load some Vue components, fix heatmap chunk loading on every page ([#36719](https://github.com/go-gitea/gitea/pull/36719))
  - Load heatmap data asynchronously ([#36622](https://github.com/go-gitea/gitea/pull/36622))
  - Use prev/next pagination for user profile activities page to speed up ([#36642](https://github.com/go-gitea/gitea/pull/36642))
  - Refactor cat-file batch operations and support `--batch-command` approach ([#35775](https://github.com/go-gitea/gitea/pull/35775))
  - Use merge tree to detect conflicts when possible ([#36400](https://github.com/go-gitea/gitea/pull/36400))
- ENHANCEMENTS
  - Implement logout redirection for reverse proxy auth setups ([#36085](https://github.com/go-gitea/gitea/pull/36085)) ([#37171](https://github.com/go-gitea/gitea/pull/37171))
  - Adds option to force update new branch in contents routes ([#35592](https://github.com/go-gitea/gitea/pull/35592))
  - Add viewer controller for mermaid (zoom, drag) ([#36557](https://github.com/go-gitea/gitea/pull/36557))
  - Add code editor setting dropdowns ([#36534](https://github.com/go-gitea/gitea/pull/36534))
  - Add `elk` layout support to mermaid ([#36486](https://github.com/go-gitea/gitea/pull/36486))
  - Add resolve/unresolve review comment API endpoints ([#36441](https://github.com/go-gitea/gitea/pull/36441))
  - Allow configuring default PR base branch (fixes [#36412](https://github.com/go-gitea/gitea/pull/36412)) ([#36425](https://github.com/go-gitea/gitea/pull/36425))
  - Add support for RPM Errata (updateinfo.xml) ([#37125](https://github.com/go-gitea/gitea/pull/37125))
  - Require additional user confirmation for making repo private ([#36959](https://github.com/go-gitea/gitea/pull/36959))
  - Add `actions.WORKFLOW_DIRS` setting ([#36619](https://github.com/go-gitea/gitea/pull/36619))
  - Avoid opening new tab when downloading actions logs ([#36740](https://github.com/go-gitea/gitea/pull/36740))
  - Implements OIDC RP-Initiated Logout ([#36724](https://github.com/go-gitea/gitea/pull/36724))
  - Show workflow link ([#37070](https://github.com/go-gitea/gitea/pull/37070))
  - Desaturate dark theme background colors ([#37056](https://github.com/go-gitea/gitea/pull/37056))
  - Refactor "org teams" page and help new users to "add member" to an org ([#37051](https://github.com/go-gitea/gitea/pull/37051))
  - Add webhook name field to improve webhook identification ([#37025](https://github.com/go-gitea/gitea/pull/37025)) ([#37040](https://github.com/go-gitea/gitea/pull/37040))
  - Make task list checkboxes clickable in the preview tab ([#37010](https://github.com/go-gitea/gitea/pull/37010))
  - Improve severity labels in Actions logs and tweak colors ([#36993](https://github.com/go-gitea/gitea/pull/36993))
  - Linkify URLs in Actions workflow logs ([#36986](https://github.com/go-gitea/gitea/pull/36986))
  - Allow text selection on checkbox labels ([#36970](https://github.com/go-gitea/gitea/pull/36970))
  - Support dark/light theme images in markdown ([#36922](https://github.com/go-gitea/gitea/pull/36922))
  - Enable native dark mode for swagger-ui ([#36899](https://github.com/go-gitea/gitea/pull/36899))
  - Rework checkbox styling, remove `input` border hover effect ([#36870](https://github.com/go-gitea/gitea/pull/36870))
  - Refactor storage content-type handling of ServeDirectURL ([#36804](https://github.com/go-gitea/gitea/pull/36804))
  - Use "Enable Gravatar" but not "Disable" ([#36771](https://github.com/go-gitea/gitea/pull/36771))
  - Use case-insensitive matching for Git error "Not a valid object name" ([#36728](https://github.com/go-gitea/gitea/pull/36728))
  - Add "Copy Source" to markup comment menu ([#36726](https://github.com/go-gitea/gitea/pull/36726))
  - Change image transparency grid to CSS ([#36711](https://github.com/go-gitea/gitea/pull/36711))
  - Add "Run" prefix for unnamed action steps ([#36624](https://github.com/go-gitea/gitea/pull/36624))
  - Persist actions log time display settings in `localStorage` ([#36623](https://github.com/go-gitea/gitea/pull/36623))
  - Use first commit title for multi-commit PRs and fix auto-focus title field ([#36606](https://github.com/go-gitea/gitea/pull/36606))
  - Improve BuildCaseInsensitiveLike with lowercase ([#36598](https://github.com/go-gitea/gitea/pull/36598))
  - Improve diff highlighting ([#36583](https://github.com/go-gitea/gitea/pull/36583))
  - Exclude cancelled runs from failure-only email notifications ([#36569](https://github.com/go-gitea/gitea/pull/36569))
  - Use full-file highlighting for diff sections ([#36561](https://github.com/go-gitea/gitea/pull/36561))
  - Color command/error logs in Actions log ([#36538](https://github.com/go-gitea/gitea/pull/36538))
  - Add paging headers ([#36521](https://github.com/go-gitea/gitea/pull/36521))
  - Improve timeline entries for WIP prefix changes in pull requests ([#36518](https://github.com/go-gitea/gitea/pull/36518))
  - Add FOLDER_ICON_THEME configuration option ([#36496](https://github.com/go-gitea/gitea/pull/36496))
  - Normalize guessed languages for code highlighting ([#36450](https://github.com/go-gitea/gitea/pull/36450))
  - Add chunked transfer encoding support for LFS uploads ([#36380](https://github.com/go-gitea/gitea/pull/36380))
  - Indicate when only optional checks failed ([#36367](https://github.com/go-gitea/gitea/pull/36367))
  - Add 'allow_maintainer_edit' API option for creating a pull request ([#36283](https://github.com/go-gitea/gitea/pull/36283))
  - Support closing keywords with URL references ([#36221](https://github.com/go-gitea/gitea/pull/36221))
  - Improve diff file headers ([#36215](https://github.com/go-gitea/gitea/pull/36215))
  - Fix and enhance comment editor monospace toggle ([#36181](https://github.com/go-gitea/gitea/pull/36181))
  - Add git.DIFF_RENAME_SIMILARITY_THRESHOLD option ([#36164](https://github.com/go-gitea/gitea/pull/36164))
  - Add matching pair insertion to markdown textarea ([#36121](https://github.com/go-gitea/gitea/pull/36121))
  - Add sorting/filtering to admin user search API endpoint ([#36112](https://github.com/go-gitea/gitea/pull/36112))
  - Allow action user have read permission in public repo like other user ([#36095](https://github.com/go-gitea/gitea/pull/36095))
  - Disable matchBrackets in monaco ([#36089](https://github.com/go-gitea/gitea/pull/36089))
  - Use GitHub-style commit message for squash merge ([#35987](https://github.com/go-gitea/gitea/pull/35987))
  - Make composer registry support tar.gz and tar.bz2 and fix bugs ([#35958](https://github.com/go-gitea/gitea/pull/35958))
  - Add GITEA_PR_INDEX env variable to githooks ([#35938](https://github.com/go-gitea/gitea/pull/35938))
  - Add proper error message if session provider can not be created ([#35520](https://github.com/go-gitea/gitea/pull/35520))
  - Add button to copy file name in PR files ([#35509](https://github.com/go-gitea/gitea/pull/35509))
  - Move `X_FRAME_OPTIONS` setting from `cors` to `security` section ([#30256](https://github.com/go-gitea/gitea/pull/30256))
  - Add placeholder content for empty content page ([#37114](https://github.com/go-gitea/gitea/pull/37114))
  - Add `DEFAULT_DELETE_BRANCH_AFTER_MERGE` setting ([#36917](https://github.com/go-gitea/gitea/pull/36917))
  - Redirect to the only OAuth2 provider when no other login methods and fix various problems ([#36901](https://github.com/go-gitea/gitea/pull/36901))
  - Add admin badge to navbar avatar ([#36790](https://github.com/go-gitea/gitea/pull/36790))
  - Add `never` option to `PUBLIC_URL_DETECTION` configuration ([#36785](https://github.com/go-gitea/gitea/pull/36785))
  - Add background and run count to actions list page ([#36707](https://github.com/go-gitea/gitea/pull/36707))
  - Add icon to buttons "Close with Comment", "Close Pull Request", "Close Issue" ([#36654](https://github.com/go-gitea/gitea/pull/36654))
  - Add support for in_progress event in workflow_run webhook ([#36979](https://github.com/go-gitea/gitea/pull/36979))
  - Report commit status for pull_request_review events ([#36589](https://github.com/go-gitea/gitea/pull/36589))
  - Render merged pull request title as such in dashboard feed ([#36479](https://github.com/go-gitea/gitea/pull/36479))
  - Feature to be able to filter project boards by milestones ([#36321](https://github.com/go-gitea/gitea/pull/36321))
  - Use user id in noreply emails ([#36550](https://github.com/go-gitea/gitea/pull/36550))
  - Enable pagination on GiteaDownloader.getIssueReactions() ([#36549](https://github.com/go-gitea/gitea/pull/36549))
  - Remove striped tables in UI ([#36509](https://github.com/go-gitea/gitea/pull/36509))
  - Improve control char rendering and escape button styling ([#37094](https://github.com/go-gitea/gitea/pull/37094))
  - Support legacy run/job index-based URLs and refactor migration 326 ([#37008](https://github.com/go-gitea/gitea/pull/37008))
  - Add date to "No Contributions" tooltip ([#36190](https://github.com/go-gitea/gitea/pull/36190))
  - Show edit page confirmation dialog on tree view file change ([#36130](https://github.com/go-gitea/gitea/pull/36130))
  - Mention proc-receive in text for dashboard.resync_all_hooks func ([#35991](https://github.com/go-gitea/gitea/pull/35991))
  - Reuse selectable style for wiki ([#35990](https://github.com/go-gitea/gitea/pull/35990))
  - Support blue yellow colorblind theme ([#35910](https://github.com/go-gitea/gitea/pull/35910))
  - Support selecting theme on the footer ([#35741](https://github.com/go-gitea/gitea/pull/35741))
  - Improve online runner check ([#35722](https://github.com/go-gitea/gitea/pull/35722))
  - Add quick approve button on PR page ([#35678](https://github.com/go-gitea/gitea/pull/35678))
  - Enable commenting on expanded lines in PR diffs ([#35662](https://github.com/go-gitea/gitea/pull/35662))
  - Print PR-Title into tooltip for actions ([#35579](https://github.com/go-gitea/gitea/pull/35579))
  - Use explicit, stronger defaults for newly generated repo signing keys for Debian ([#36236](https://github.com/go-gitea/gitea/pull/36236))
  - Improve the compare page ([#36261](https://github.com/go-gitea/gitea/pull/36261))
  - Unify repo names in system notices ([#36491](https://github.com/go-gitea/gitea/pull/36491))
  - Move package settings to package instead of being tied to version ([#37026](https://github.com/go-gitea/gitea/pull/37026))
  - Add Actions API rerun endpoints for runs and jobs ([#36768](https://github.com/go-gitea/gitea/pull/36768))
  - Add branch_count to repository API ([#35351](https://github.com/go-gitea/gitea/pull/35351)) ([#36743](https://github.com/go-gitea/gitea/pull/36743))
  - Add created_by filter to SearchIssues ([#36670](https://github.com/go-gitea/gitea/pull/36670))
  - Allow admins to rename non-local users ([#35970](https://github.com/go-gitea/gitea/pull/35970))
  - Support updating branch via API ([#35951](https://github.com/go-gitea/gitea/pull/35951))
  - Add an option to automatically verify SSH keys from LDAP ([#35927](https://github.com/go-gitea/gitea/pull/35927))
  - Make "update file" API can create a new file when SHA is not set ([#35738](https://github.com/go-gitea/gitea/pull/35738))
  - Update issue.go with labels documentation (labels content, not ids) ([#35522](https://github.com/go-gitea/gitea/pull/35522))
  - Expose content_version for optimistic locking on issue and PR edits ([#37035](https://github.com/go-gitea/gitea/pull/37035))
  - Pass ServeHeaderOptions by value instead of pointer, fine tune httplib tests ([#36982](https://github.com/go-gitea/gitea/pull/36982))
- BUGFIXES
  - Frontend iframe renderer framework: 3D models, OpenAPI ([#37233](https://github.com/go-gitea/gitea/pull/37233)) ([#37273](https://github.com/go-gitea/gitea/pull/37273))
  - Fix CODEOWNERS absolute path matching. ([#37244](https://github.com/go-gitea/gitea/pull/37244)) ([#37264](https://github.com/go-gitea/gitea/pull/37264))
  - Swift registry metadata: preserve more JSON fields and accept empty metadata ([#37254](https://github.com/go-gitea/gitea/pull/37254)) ([#37261](https://github.com/go-gitea/gitea/pull/37261))
  - Fix user ssh key exporting and tests ([#37256](https://github.com/go-gitea/gitea/pull/37256)) ([#37258](https://github.com/go-gitea/gitea/pull/37258))
  - Fix team member avatar size and add tooltip ([#37253](https://github.com/go-gitea/gitea/pull/37253))
  - Fix commit title rendering in action run and blame ([#37243](https://github.com/go-gitea/gitea/pull/37243)) ([#37251](https://github.com/go-gitea/gitea/pull/37251))
  - Fix corrupted JSON caused by goccy library ([#37214](https://github.com/go-gitea/gitea/pull/37214)) ([#37220](https://github.com/go-gitea/gitea/pull/37220))
  - Add test for "fetch redirect", add CSS value validation for external render ([#37207](https://github.com/go-gitea/gitea/pull/37207)) ([#37216](https://github.com/go-gitea/gitea/pull/37216))
  - Fix incorrect concurrency check ([#37205](https://github.com/go-gitea/gitea/pull/37205)) ([#37215](https://github.com/go-gitea/gitea/pull/37215))
  - Fix handle missing base branch in PR commits API ([#37193](https://github.com/go-gitea/gitea/pull/37193)) ([#37203](https://github.com/go-gitea/gitea/pull/37203))
  - Fix encoding for Matrix Webhooks ([#37190](https://github.com/go-gitea/gitea/pull/37190)) ([#37201](https://github.com/go-gitea/gitea/pull/37201))
  - Fix handle fork-only commits in compare API ([#37185](https://github.com/go-gitea/gitea/pull/37185)) ([#37199](https://github.com/go-gitea/gitea/pull/37199))
  - Indicate form field readonly via background, fix RunUser config ([#37175](https://github.com/go-gitea/gitea/pull/37175), [#37180](https://github.com/go-gitea/gitea/pull/37180)) ([#37178](https://github.com/go-gitea/gitea/pull/37178))
  - Report structurally invalid workflows to users ([#37116](https://github.com/go-gitea/gitea/pull/37116)) ([#37164](https://github.com/go-gitea/gitea/pull/37164))
  - Fix API not persisting pull request unit config when has_pull_requests is not set ([#36718](https://github.com/go-gitea/gitea/pull/36718))
  - Rename CSS variables and improve colorblind themes ([#36353](https://github.com/go-gitea/gitea/pull/36353))
  - Hide `add-matcher` and `remove-matcher` from actions job logs ([#36520](https://github.com/go-gitea/gitea/pull/36520))
  - Prevent navigation keys from triggering actions during IME composition ([#36540](https://github.com/go-gitea/gitea/pull/36540))
  - Fix vertical alignment of `.commit-sign-badge` children ([#36570](https://github.com/go-gitea/gitea/pull/36570))
  - Fix duplicate startup warnings in admin panel ([#36641](https://github.com/go-gitea/gitea/pull/36641))
  - Fix CODEOWNERS review request attribution using comment metadata ([#36348](https://github.com/go-gitea/gitea/pull/36348))
  - Fix HTML tags appearing in wiki table of contents ([#36284](https://github.com/go-gitea/gitea/pull/36284))
  - Fix various bugs ([#37096](https://github.com/go-gitea/gitea/pull/37096))
  - Fix various legacy problems ([#37092](https://github.com/go-gitea/gitea/pull/37092))
  - Fix RPM Registry 404 when package name contains 'package' ([#37087](https://github.com/go-gitea/gitea/pull/37087))
  - Merge some standalone Vite entries into index.js ([#37085](https://github.com/go-gitea/gitea/pull/37085))
  - Fix various problems ([#37077](https://github.com/go-gitea/gitea/pull/37077))
  - Fix issue label deletion with Actions tokens ([#37013](https://github.com/go-gitea/gitea/pull/37013))
  - Hide delete branch or tag buttons in mirror or archived repositories. ([#37006](https://github.com/go-gitea/gitea/pull/37006))
  - Fix org contact email not clearable once set ([#36975](https://github.com/go-gitea/gitea/pull/36975))
  - Fix a bug when forking a repository in an organization ([#36950](https://github.com/go-gitea/gitea/pull/36950))
  - Preserve sort order of exclusive labels from template repo ([#36931](https://github.com/go-gitea/gitea/pull/36931))
  - Make container registry support Apple Container (basic auth) ([#36920](https://github.com/go-gitea/gitea/pull/36920))
  - Fix the wrong push commits in the pull request when force push ([#36914](https://github.com/go-gitea/gitea/pull/36914))
  - Add class "list-header-filters" to the div for projects ([#36889](https://github.com/go-gitea/gitea/pull/36889))
  - Fix dbfs error handling ([#36844](https://github.com/go-gitea/gitea/pull/36844))
  - Fix incorrect viewed files counter if reverted change was viewed ([#36819](https://github.com/go-gitea/gitea/pull/36819))
  - Refactor avatar package, support default avatar fallback ([#36788](https://github.com/go-gitea/gitea/pull/36788))
  - Fix README symlink resolution in subdirectories like .github ([#36775](https://github.com/go-gitea/gitea/pull/36775))
  - Fix CSS stacking context issue in actions log ([#36749](https://github.com/go-gitea/gitea/pull/36749))
  - Add gpg signing for merge rebase and update by rebase ([#36701](https://github.com/go-gitea/gitea/pull/36701))
  - Delete non-exist branch should return 404 ([#36694](https://github.com/go-gitea/gitea/pull/36694))
  - Fix `TestActionsCollaborativeOwner` ([#36657](https://github.com/go-gitea/gitea/pull/36657))
  - Fix multi-arch Docker build SIGILL by splitting frontend stage ([#36646](https://github.com/go-gitea/gitea/pull/36646))
  - Fix linguist-detectable attribute being ignored for configuration files ([#36640](https://github.com/go-gitea/gitea/pull/36640))
  - Fix state desync in ComboMarkdownEditor ([#36625](https://github.com/go-gitea/gitea/pull/36625))
  - Unify DEFAULT_SHOW_FULL_NAME output in templates and dropdown ([#36597](https://github.com/go-gitea/gitea/pull/36597))
  - Pull Request Pusher should be the author of the merge ([#36581](https://github.com/go-gitea/gitea/pull/36581))
  - Fix various version parsing problems ([#36553](https://github.com/go-gitea/gitea/pull/36553))
  - Fix highlight diff result ([#36539](https://github.com/go-gitea/gitea/pull/36539))
  - Fix mirror sync parser and fix mirror messages ([#36504](https://github.com/go-gitea/gitea/pull/36504))
  - Fix bug when list pull request commits ([#36485](https://github.com/go-gitea/gitea/pull/36485))
  - Fix various bugs ([#36446](https://github.com/go-gitea/gitea/pull/36446))
  - Fix issue filter menu layout ([#36426](https://github.com/go-gitea/gitea/pull/36426))
  - Restrict branch naming when new change matches with protection rules ([#36405](https://github.com/go-gitea/gitea/pull/36405))
  - Fix link/origin referrer and login redirect ([#36279](https://github.com/go-gitea/gitea/pull/36279))
  - Generate IDs for HTML headings without id attribute ([#36233](https://github.com/go-gitea/gitea/pull/36233))
  - Use a migration test instead of a wrong test which populated the meta test repositories and fix a migration bug ([#36160](https://github.com/go-gitea/gitea/pull/36160))
  - Fix issue close timeline icon ([#36138](https://github.com/go-gitea/gitea/pull/36138))
  - Fix diff blob excerpt expansion ([#35922](https://github.com/go-gitea/gitea/pull/35922))
  - Fix external render ([#35727](https://github.com/go-gitea/gitea/pull/35727))
  - Fix review request webhook bug ([#35339](https://github.com/go-gitea/gitea/pull/35339)) ([#35723](https://github.com/go-gitea/gitea/pull/35723))
  - Fix shutdown waitgroup panic ([#35676](https://github.com/go-gitea/gitea/pull/35676))
  - Cleanup ActionRun creation ([#35624](https://github.com/go-gitea/gitea/pull/35624))
  - Fix possible bug when migrating issues/pull requests ([#33487](https://github.com/go-gitea/gitea/pull/33487))
  - Various fixes ([#36697](https://github.com/go-gitea/gitea/pull/36697))
  - Apply notify/register mail flags during install load ([#37120](https://github.com/go-gitea/gitea/pull/37120))
  - Repair duration display for bad stopped timestamps ([#37121](https://github.com/go-gitea/gitea/pull/37121))
  - Fix(upgrade.sh): use HTTPS for GPG key import and restore SELinux context after upgrade ([#36930](https://github.com/go-gitea/gitea/pull/36930))
  - Fix various trivial problems ([#36921](https://github.com/go-gitea/gitea/pull/36921))
  - Fix various trivial problems ([#36953](https://github.com/go-gitea/gitea/pull/36953))
  - Fix NuGet package upload error handling ([#37074](https://github.com/go-gitea/gitea/pull/37074))
  - Fix CodeQL code scanning alerts ([#36858](https://github.com/go-gitea/gitea/pull/36858))
  - Refactor issue sidebar and fix various problems ([#37045](https://github.com/go-gitea/gitea/pull/37045))
  - Fix various problems ([#37029](https://github.com/go-gitea/gitea/pull/37029))
  - Fix relative-time RangeError ([#37021](https://github.com/go-gitea/gitea/pull/37021))
  - Fix chroma lexer mapping ([#36629](https://github.com/go-gitea/gitea/pull/36629))
  - Fix typos and grammar in English locale ([#36751](https://github.com/go-gitea/gitea/pull/36751))
  - Fix milestone/project text overflow in issue sidebar ([#36741](https://github.com/go-gitea/gitea/pull/36741))
  - Fix `no-content` message not rendering after comment edit ([#36733](https://github.com/go-gitea/gitea/pull/36733))
  - Fix theme loading in development ([#36605](https://github.com/go-gitea/gitea/pull/36605))
  - Fix workflow run jobs API returning null steps ([#36603](https://github.com/go-gitea/gitea/pull/36603))
  - Fix timeline event layout overflow with long content ([#36595](https://github.com/go-gitea/gitea/pull/36595))
  - Fix minor UI issues in runner edit page ([#36590](https://github.com/go-gitea/gitea/pull/36590))
  - Fix incorrect vendored detections ([#36508](https://github.com/go-gitea/gitea/pull/36508))
  - Fix editorconfig not respected in PR Conversation view ([#36492](https://github.com/go-gitea/gitea/pull/36492))
  - Don't create self-references in merged PRs ([#36490](https://github.com/go-gitea/gitea/pull/36490))
  - Fix potential incorrect runID in run status update ([#36437](https://github.com/go-gitea/gitea/pull/36437))
  - Fix file-tree ui error when adding files to repo without commits ([#36312](https://github.com/go-gitea/gitea/pull/36312))
  - Improve image captcha contrast for dark mode ([#36265](https://github.com/go-gitea/gitea/pull/36265))
  - Fix panic in blame view when a file has only a single commit ([#36230](https://github.com/go-gitea/gitea/pull/36230))
  - Fix spelling error in migrate-storage cmd utility ([#36226](https://github.com/go-gitea/gitea/pull/36226))
  - Fix code highlighting on blame page ([#36157](https://github.com/go-gitea/gitea/pull/36157))
  - Fix nilnil in onedev downloader ([#36154](https://github.com/go-gitea/gitea/pull/36154))
  - Fix actions lint ([#36029](https://github.com/go-gitea/gitea/pull/36029))
  - Fix oauth2 session gob register ([#36017](https://github.com/go-gitea/gitea/pull/36017))
  - Fix Arch repo pacman.conf snippet ([#35825](https://github.com/go-gitea/gitea/pull/35825))
  - Fix a number of `strictNullChecks`-related issues ([#35795](https://github.com/go-gitea/gitea/pull/35795))
  - Fix URLJoin, markup render link resolving, sign-in/up/linkaccount page common data ([#36861](https://github.com/go-gitea/gitea/pull/36861))
  - Hide delete directory button for mirror or archive repository and disable the menu item if user have no permission ([#36384](https://github.com/go-gitea/gitea/pull/36384))
  - Update message severity colors, fix navbar double border ([#37019](https://github.com/go-gitea/gitea/pull/37019))
  - Inline and lazy-load EasyMDE CSS, fix border colors ([#36714](https://github.com/go-gitea/gitea/pull/36714))
  - Closed milestones with no issues now show as 100% completed ([#36220](https://github.com/go-gitea/gitea/pull/36220))
  - Add test for ExtendCommentTreePathLength migration and fix bugs ([#35791](https://github.com/go-gitea/gitea/pull/35791))
  - Only turn links to current instance into hash links ([#36237](https://github.com/go-gitea/gitea/pull/36237))
  - Fix typos in code comments: doesnt, dont, wont ([#36890](https://github.com/go-gitea/gitea/pull/36890))
- REFACTOR
  - Clean up and improve non-gitea js error filter ([#37148](https://github.com/go-gitea/gitea/pull/37148)) ([#37155](https://github.com/go-gitea/gitea/pull/37155))
  - Always show owner/repo name in compare page dropdowns ([#37172](https://github.com/go-gitea/gitea/pull/37172)) ([#37200](https://github.com/go-gitea/gitea/pull/37200))
  - Remove dead CSS rules ([#37173](https://github.com/go-gitea/gitea/pull/37173)) ([#37177](https://github.com/go-gitea/gitea/pull/37177))
  - Replace Monaco with CodeMirror ([#36764](https://github.com/go-gitea/gitea/pull/36764))
  - Replace CSRF cookie with `CrossOriginProtection` ([#36183](https://github.com/go-gitea/gitea/pull/36183))
  - Replace index with id in actions routes ([#36842](https://github.com/go-gitea/gitea/pull/36842))
  - Remove unnecessary function parameter ([#35765](https://github.com/go-gitea/gitea/pull/35765))
  - Move jobparser from act repository to Gitea ([#36699](https://github.com/go-gitea/gitea/pull/36699))
  - Refactor compare router param parse ([#36105](https://github.com/go-gitea/gitea/pull/36105))
  - Optimize 'refreshAccesses' to perform update without removing then adding ([#35702](https://github.com/go-gitea/gitea/pull/35702))
  - Clean up checkbox cursor styles ([#37016](https://github.com/go-gitea/gitea/pull/37016))
  - Remove undocumented support of signing key in the repository git configuration file ([#36143](https://github.com/go-gitea/gitea/pull/36143))
  - Switch `cmd/` to use constructor functions. ([#36962](https://github.com/go-gitea/gitea/pull/36962))
  - Use `relative-time` to render absolute dates ([#36238](https://github.com/go-gitea/gitea/pull/36238))
  - Some refactors about GetMergeBase ([#36186](https://github.com/go-gitea/gitea/pull/36186))
  - Some small refactors ([#36163](https://github.com/go-gitea/gitea/pull/36163))
  - Use gitRepo as parameter instead of repopath when invoking sign functions ([#36162](https://github.com/go-gitea/gitea/pull/36162))
  - Move blame to gitrepo ([#36161](https://github.com/go-gitea/gitea/pull/36161))
  - Move some functions to gitrepo package to reduce RepoPath reference directly ([#36126](https://github.com/go-gitea/gitea/pull/36126))
  - Use gitrepo's clone and push when possible ([#36093](https://github.com/go-gitea/gitea/pull/36093))
  - Remove mermaid margin workaround ([#35732](https://github.com/go-gitea/gitea/pull/35732))
  - Move some functions to gitrepo package ([#35543](https://github.com/go-gitea/gitea/pull/35543))
  - Move GetDiverging functions to gitrepo ([#35524](https://github.com/go-gitea/gitea/pull/35524))
  - Use global lock instead of status pool for cron lock ([#35507](https://github.com/go-gitea/gitea/pull/35507))
  - Use explicit mux instead of DefaultServeMux ([#36276](https://github.com/go-gitea/gitea/pull/36276))
  - Use gitrepo's push function ([#36245](https://github.com/go-gitea/gitea/pull/36245))
  - Pass request context to generateAdditionalHeadersForIssue ([#36274](https://github.com/go-gitea/gitea/pull/36274))
  - Move assign project when creating pull request to the same database transaction ([#36244](https://github.com/go-gitea/gitea/pull/36244))
  - Move catfile batch to a sub package of git module ([#36232](https://github.com/go-gitea/gitea/pull/36232))
  - Use gitrepo.Repository instead of wikipath ([#35398](https://github.com/go-gitea/gitea/pull/35398))
  - Use experimental go json v2 library ([#35392](https://github.com/go-gitea/gitea/pull/35392))
  - Refactor template render ([#36438](https://github.com/go-gitea/gitea/pull/36438))
  - Refactor GetRepoRawDiffForFile to avoid unnecessary pipe or goroutine ([#36434](https://github.com/go-gitea/gitea/pull/36434))
  - Refactor text utility classes to Tailwind CSS ([#36703](https://github.com/go-gitea/gitea/pull/36703))
  - Refactor git command stdio pipe ([#36422](https://github.com/go-gitea/gitea/pull/36422))
  - Refactor git command context & pipeline ([#36406](https://github.com/go-gitea/gitea/pull/36406))
  - Refactor git command stdio pipe ([#36393](https://github.com/go-gitea/gitea/pull/36393))
  - Remove unused functions ([#36672](https://github.com/go-gitea/gitea/pull/36672))
  - Refactor Actions Token Access ([#35688](https://github.com/go-gitea/gitea/pull/35688))
  - Move commit related functions to gitrepo package ([#35600](https://github.com/go-gitea/gitea/pull/35600))
  - Move archive function to repo_model and gitrepo ([#35514](https://github.com/go-gitea/gitea/pull/35514))
  - Move some functions to gitrepo package ([#35503](https://github.com/go-gitea/gitea/pull/35503))
  - Use git model to detect whether branch exist instead of gitrepo method ([#35459](https://github.com/go-gitea/gitea/pull/35459))
  - Some refactor for repo path ([#36251](https://github.com/go-gitea/gitea/pull/36251))
  - Extract helper functions from SearchIssues ([#36158](https://github.com/go-gitea/gitea/pull/36158))
  - Refactor merge conan and container auth preserve actions taskID ([#36560](https://github.com/go-gitea/gitea/pull/36560))
  - Refactor Nuget Auth to reuse Basic Auth Token Validation ([#36558](https://github.com/go-gitea/gitea/pull/36558))
  - Refactor ActionsTaskID ([#36503](https://github.com/go-gitea/gitea/pull/36503))
  - Refactor auth middleware ([#36848](https://github.com/go-gitea/gitea/pull/36848))
  - Refactor code render and render control chars ([#37078](https://github.com/go-gitea/gitea/pull/37078))
  - Clean up AppURL, remove legacy origin-url webcomponent ([#37090](https://github.com/go-gitea/gitea/pull/37090))
  - Remove `util.URLJoin` and replace all callers with direct path concatenation ([#36867](https://github.com/go-gitea/gitea/pull/36867))
  - Replace legacy tw-flex utility classes with flex-text-block/inline ([#36778](https://github.com/go-gitea/gitea/pull/36778))
  - Mark unused&immature activitypub as "not implemented" ([#36789](https://github.com/go-gitea/gitea/pull/36789))
- TESTING
  - Add e2e tests for server push events ([#36879](https://github.com/go-gitea/gitea/pull/36879))
  - Rework e2e tests ([#36634](https://github.com/go-gitea/gitea/pull/36634))
  - Add e2e reaction test, improve accessibility, enable parallel testing ([#37081](https://github.com/go-gitea/gitea/pull/37081))
  - Increase e2e test timeouts on CI to fix flaky tests ([#37053](https://github.com/go-gitea/gitea/pull/37053))
- BUILD
  - Upgrade go-git to v5.18.0 ([#37269](https://github.com/go-gitea/gitea/pull/37269))
  - Replace rollup-plugin-license with rolldown-license-plugin ([#37130](https://github.com/go-gitea/gitea/pull/37130)) ([#37158](https://github.com/go-gitea/gitea/pull/37158))
  - Bump min go version to 1.26.2 ([#37139](https://github.com/go-gitea/gitea/pull/37139)) ([#37143](https://github.com/go-gitea/gitea/pull/37143))
  - Convert locale files from ini to json format ([#35489](https://github.com/go-gitea/gitea/pull/35489))
  - Bump golangci-lint to 2.7.2, enable modernize stringsbuilder ([#36180](https://github.com/go-gitea/gitea/pull/36180))
  - Port away from `flake-utils` ([#35675](https://github.com/go-gitea/gitea/pull/35675))
  - Remove nolint ([#36252](https://github.com/go-gitea/gitea/pull/36252))
  - Update the Unlicense copy to latest version ([#36636](https://github.com/go-gitea/gitea/pull/36636))
  - Update to go 1.26.0 and golangci-lint 2.9.0 ([#36588](https://github.com/go-gitea/gitea/pull/36588))
  - Replace `google/go-licenses` with custom generation ([#36575](https://github.com/go-gitea/gitea/pull/36575))
  - Update go dependencies ([#36548](https://github.com/go-gitea/gitea/pull/36548))
  - Bump appleboy/git-push-action from 1.0.0 to 1.2.0 ([#36306](https://github.com/go-gitea/gitea/pull/36306))
  - Remove fomantic form module ([#36222](https://github.com/go-gitea/gitea/pull/36222))
  - Bump setup-node to v6, re-enable cache ([#36207](https://github.com/go-gitea/gitea/pull/36207))
  - Bump crowdin/github-action from 1 to 2 ([#36204](https://github.com/go-gitea/gitea/pull/36204))
  - Revert "Bump alpine to 3.23 ([#36185](https://github.com/go-gitea/gitea/pull/36185))" ([#36202](https://github.com/go-gitea/gitea/pull/36202))
  - Update chroma to v2.21.1 ([#36201](https://github.com/go-gitea/gitea/pull/36201))
  - Bump astral-sh/setup-uv from 6 to 7 ([#36198](https://github.com/go-gitea/gitea/pull/36198))
  - Bump docker/build-push-action from 5 to 6 ([#36197](https://github.com/go-gitea/gitea/pull/36197))
  - Bump aws-actions/configure-aws-credentials from 4 to 5 ([#36196](https://github.com/go-gitea/gitea/pull/36196))
  - Bump dev-hanz-ops/install-gh-cli-action from 0.1.0 to 0.2.1 ([#36195](https://github.com/go-gitea/gitea/pull/36195))
  - Add JSON linting ([#36192](https://github.com/go-gitea/gitea/pull/36192))
  - Enable dependabot for actions ([#36191](https://github.com/go-gitea/gitea/pull/36191))
  - Bump alpine to 3.23 ([#36185](https://github.com/go-gitea/gitea/pull/36185))
  - Update chroma to v2.21.0 ([#36171](https://github.com/go-gitea/gitea/pull/36171))
  - Update JS deps and eslint enhancements ([#36147](https://github.com/go-gitea/gitea/pull/36147))
  - Update JS deps ([#36091](https://github.com/go-gitea/gitea/pull/36091))
  - update golangci-lint to v2.7.0 ([#36079](https://github.com/go-gitea/gitea/pull/36079))
  - Update JS deps, fix deprecations ([#36040](https://github.com/go-gitea/gitea/pull/36040))
  - Update JS deps ([#35978](https://github.com/go-gitea/gitea/pull/35978))
  - Add toolchain directive to go.mod ([#35901](https://github.com/go-gitea/gitea/pull/35901))
  - Move `gitea-vet` to use `go tool` ([#35878](https://github.com/go-gitea/gitea/pull/35878))
  - Update to go 1.25.4 ([#35877](https://github.com/go-gitea/gitea/pull/35877))
  - Enable TypeScript `strictNullChecks` ([#35843](https://github.com/go-gitea/gitea/pull/35843))
  - Enable `vue/require-typed-ref` eslint rule ([#35764](https://github.com/go-gitea/gitea/pull/35764))
  - Update JS dependencies ([#35759](https://github.com/go-gitea/gitea/pull/35759))
  - Move `codeformat` folder to tools ([#35758](https://github.com/go-gitea/gitea/pull/35758))
  - Update dependencies ([#35733](https://github.com/go-gitea/gitea/pull/35733))
  - Bump happy-dom from 20.0.0 to 20.0.2 ([#35677](https://github.com/go-gitea/gitea/pull/35677))
  - Bump setup-go to v6 ([#35660](https://github.com/go-gitea/gitea/pull/35660))
  - Update JS deps, misc tweaks ([#35643](https://github.com/go-gitea/gitea/pull/35643))
  - Bump happy-dom from 19.0.2 to 20.0.0 ([#35625](https://github.com/go-gitea/gitea/pull/35625))
  - Use bundled version of spectral ([#35573](https://github.com/go-gitea/gitea/pull/35573))
  - Update JS and PY deps ([#35565](https://github.com/go-gitea/gitea/pull/35565))
  - Bump github.com/wneessen/go-mail from 0.6.2 to 0.7.1 ([#35557](https://github.com/go-gitea/gitea/pull/35557))
  - Migrate from webpack to vite ([#37002](https://github.com/go-gitea/gitea/pull/37002))
  - Update JS dependencies and misc tweaks ([#37064](https://github.com/go-gitea/gitea/pull/37064))
  - Update to eslint 10 ([#36925](https://github.com/go-gitea/gitea/pull/36925))
  - Optimize Docker build with dependency layer caching ([#36864](https://github.com/go-gitea/gitea/pull/36864))
  - Update JS deps ([#36850](https://github.com/go-gitea/gitea/pull/36850))
  - Update tool dependencies and fix new lint issues ([#36702](https://github.com/go-gitea/gitea/pull/36702))
  - Remove redundant linter rules ([#36658](https://github.com/go-gitea/gitea/pull/36658))
  - Move Fomantic dropdown CSS to custom module ([#36530](https://github.com/go-gitea/gitea/pull/36530))
  - Remove and forbid `@ts-expect-error` ([#36513](https://github.com/go-gitea/gitea/pull/36513))
  - Refactor git command stderr handling ([#36402](https://github.com/go-gitea/gitea/pull/36402))
  - Enable gocheckcompilerdirectives linter ([#36156](https://github.com/go-gitea/gitea/pull/36156))
  - Replace `lint-go-gopls` with additional `govet` linters ([#36028](https://github.com/go-gitea/gitea/pull/36028))
  - Update golangci-lint to v2.6.0 ([#35801](https://github.com/go-gitea/gitea/pull/35801))
  - Misc tool tweaks ([#35734](https://github.com/go-gitea/gitea/pull/35734))
  - Add cache to container build ([#35697](https://github.com/go-gitea/gitea/pull/35697))
  - Upgrade vite ([#37126](https://github.com/go-gitea/gitea/pull/37126))
  - Update `setup-uv` to v8.0.0 ([#37101](https://github.com/go-gitea/gitea/pull/37101))
  - Upgrade `go-git` to v5.17.2 and related dependencies ([#37060](https://github.com/go-gitea/gitea/pull/37060))
  - Raise minimum Node.js version to 22.18.0 ([#37058](https://github.com/go-gitea/gitea/pull/37058))
  - Upgrade `golang.org/x/image` to v0.38.0 ([#37054](https://github.com/go-gitea/gitea/pull/37054))
  - Update minimum go version to 1.26.1, golangci-lint to 2.11.2, fix test style ([#36876](https://github.com/go-gitea/gitea/pull/36876))
  - Enable eslint concurrency ([#36878](https://github.com/go-gitea/gitea/pull/36878))
  - Vendor relative-time-element as local web component ([#36853](https://github.com/go-gitea/gitea/pull/36853))
  - Update material-icon-theme v5.32.0 ([#36832](https://github.com/go-gitea/gitea/pull/36832))
  - Update Go dependencies ([#36781](https://github.com/go-gitea/gitea/pull/36781))
  - Upgrade minimatch ([#36760](https://github.com/go-gitea/gitea/pull/36760))
  - Remove i18n backport tool at the moment because of translation format changed ([#36643](https://github.com/go-gitea/gitea/pull/36643))
  - Update emoji data for Unicode 16 ([#36596](https://github.com/go-gitea/gitea/pull/36596))
  - Update JS dependencies, adjust webpack config, misc fixes ([#36431](https://github.com/go-gitea/gitea/pull/36431))
  - Update material-icon-theme to v5.31.0 ([#36427](https://github.com/go-gitea/gitea/pull/36427))
  - Update JS and PY deps ([#36383](https://github.com/go-gitea/gitea/pull/36383))
  - Bump alpine to 3.23, add platforms to `docker-dryrun` ([#36379](https://github.com/go-gitea/gitea/pull/36379))
  - Update JS deps ([#36354](https://github.com/go-gitea/gitea/pull/36354))
  - Update goldmark to v1.7.16 ([#36343](https://github.com/go-gitea/gitea/pull/36343))
  - Update chroma to v2.22.0 ([#36342](https://github.com/go-gitea/gitea/pull/36342))
- DOCS
  - Update AI Contribution Policy ([#37022](https://github.com/go-gitea/gitea/pull/37022))
  - Update AGENTS.md with additional guidelines ([#37018](https://github.com/go-gitea/gitea/pull/37018))
  - Add missing cron tasks to example ini ([#37012](https://github.com/go-gitea/gitea/pull/37012))
  - Add AI Contribution Policy to CONTRIBUTING.md ([#36651](https://github.com/go-gitea/gitea/pull/36651))
  - Minor punctuation improvement in CONTRIBUTING.md ([#36291](https://github.com/go-gitea/gitea/pull/36291))
  - Add documentation for markdown anchor post-processing ([#36443](https://github.com/go-gitea/gitea/pull/36443))
- MISC
  - Correct spelling ([#36783](https://github.com/go-gitea/gitea/pull/36783))
  - Update Nix flake ([#37110](https://github.com/go-gitea/gitea/pull/37110))
  - Update Nix flake ([#37024](https://github.com/go-gitea/gitea/pull/37024))
  - Add valid github scopes ([#36977](https://github.com/go-gitea/gitea/pull/36977))
  - Update Nix flake ([#36943](https://github.com/go-gitea/gitea/pull/36943))
  - Update Nix flake ([#36902](https://github.com/go-gitea/gitea/pull/36902))
  - Update Nix flake ([#36857](https://github.com/go-gitea/gitea/pull/36857))
  - Update Nix flake ([#36787](https://github.com/go-gitea/gitea/pull/36787))

## Contributors for this release

We thank all contributors who helped make this release possible!

* [@0xMax42](https://github.com/0xMax42)
* [@6543](https://github.com/6543)
* [@a1012112796](https://github.com/a1012112796)
* [@AdamMajer](https://github.com/AdamMajer)
* [@alphazeba](https://github.com/alphazeba)
* [@argoyle](https://github.com/argoyle)
* [@bartvdbraak](https://github.com/bartvdbraak)
* [@bimakw](https://github.com/bimakw)
* [@bircni](https://github.com/bircni)
* [@BLumia](https://github.com/BLumia)
* [@brymut](https://github.com/brymut)
* [@bytedream](https://github.com/bytedream)
* [@ChristopherHX](https://github.com/ChristopherHX)
* [@CorySanin](https://github.com/CorySanin)
* [@crawfordxx](https://github.com/crawfordxx)
* [@cyx25](https://github.com/cyx25)
* [@da-Kai](https://github.com/da-Kai)
* [@DaanSelen](https://github.com/DaanSelen)
* [@danigm](https://github.com/danigm)
* [@dawidgora](https://github.com/dawidgora)
* [@Dh4nu5hwebdev](https://github.com/Dh4nu5hwebdev)
* [@divyun](https://github.com/divyun)
* [@dmach](https://github.com/dmach)
* [@DrMaxNix](https://github.com/DrMaxNix)
* [@e6aluga](https://github.com/e6aluga)
* [@Enzime](https://github.com/Enzime)
* [@Excellencedev](https://github.com/Excellencedev)
* [@Exgene](https://github.com/Exgene)
* [@hamkido](https://github.com/hamkido)
* [@heathdutton](https://github.com/heathdutton)
* [@ita004](https://github.com/ita004)
* [@ivan-tkatchev](https://github.com/ivan-tkatchev)
* [@jimparis](https://github.com/jimparis)
* [@josetduarte](https://github.com/josetduarte)
* [@junoberryferry](https://github.com/junoberryferry)
* [@kemzeb](https://github.com/kemzeb)
* [@krjakbrjak](https://github.com/krjakbrjak)
* [@lifegpc](https://github.com/lifegpc)
* [@lunny](https://github.com/lunny)
* [@Luohaothu](https://github.com/Luohaothu)
* [@luojiyin1987](https://github.com/luojiyin1987)
* [@lutinglt](https://github.com/lutinglt)
* [@majiayu000](https://github.com/majiayu000)
* [@mdferdousalam](https://github.com/mdferdousalam)
* [@meln5674](https://github.com/meln5674)
* [@Mic92](https://github.com/Mic92)
* [@micahkepe](https://github.com/micahkepe)
* [@mithileshgupta12](https://github.com/mithileshgupta12)
* [@mrtz-j](https://github.com/mrtz-j)
* [@myers](https://github.com/myers)
* [@mykh-hailo](https://github.com/mykh-hailo)
* [@NAM-MAN](https://github.com/NAM-MAN)
* [@navneet102](https://github.com/navneet102)
* [@Naxdy](https://github.com/Naxdy)
* [@nllptrx](https://github.com/nllptrx)
* [@noeljackson](https://github.com/noeljackson)
* [@OptionalValue](https://github.com/OptionalValue)
* [@peterverraedt](https://github.com/peterverraedt)
* [@POPSuL](https://github.com/POPSuL)
* [@robgonnella](https://github.com/robgonnella)
* [@robinson-j16](https://github.com/robinson-j16)
* [@Rohansguliani](https://github.com/Rohansguliani)
* [@rossigee](https://github.com/rossigee)
* [@saneks222](https://github.com/saneks222)
* [@schinkelg](https://github.com/schinkelg)
* [@ScionOfDesign](https://github.com/ScionOfDesign)
* [@sebastianertz](https://github.com/sebastianertz)
* [@shafi-VM](https://github.com/shafi-VM)
* [@shashank-netapp](https://github.com/shashank-netapp)
* [@silverwind](https://github.com/silverwind)
* [@smileBeda](https://github.com/smileBeda)
* [@sollyu](https://github.com/sollyu)
* [@strk](https://github.com/strk)
* [@surya-purohit](https://github.com/surya-purohit)
* [@techknowlogick](https://github.com/techknowlogick)
* [@telometto](https://github.com/telometto)
* [@thbeu](https://github.com/thbeu)
* [@TheFox0x7](https://github.com/TheFox0x7)
* [@theoludwig](https://github.com/theoludwig)
* [@Theproudcold](https://github.com/Theproudcold)
* [@tototomate123](https://github.com/tototomate123)
* [@tycho](https://github.com/tycho)
* [@tyroneyeh](https://github.com/tyroneyeh)
* [@Utopiah](https://github.com/Utopiah)
* [@WinterCabbage](https://github.com/WinterCabbage)
* [@wxiaoguang](https://github.com/wxiaoguang)
* [@xDarkmanx](https://github.com/xDarkmanx)
* [@xiaox315](https://github.com/xiaox315)
* [@xijiang](https://github.com/xijiang)
* [@yshyuk](https://github.com/yshyuk)
* [@Zettat123](https://github.com/Zettat123)
* [@zorrobiwan](https://github.com/zorrobiwan)
* [@ZPascal](https://github.com/ZPascal)

And many more contributors who have helped with testing, reporting issues, and translating!

We will thank all original contributors of backport pull requests on next release.
