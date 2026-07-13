---
date: 2026-07-12T10:00:00+02:00
authors:
  - "bircni"
title: "Gitea 1.27.0 is released"
tags: ["release"]
draft: false
coverImageRelease: "1.27.0"
---

We are thrilled to announce the latest release of Gitea **v1.27.0**.

Gitea 1.27.0 brings exciting new features, performance improvements, and quality-of-life enhancements. It also ships a large number of security fixes, so we strongly recommend upgrading as soon as possible — see the [Security](#security) section for details. Here are some notable changes and features in Gitea 1.27; for the full list, refer to the [full release notes](#changelog).

We are very thankful for the many people who have contributed to the project by sending code patches, reporting issues, translating, and supporting us in many other ways.

<!--more-->

:::info Pair Gitea 1.27 with Gitea Runner 2.0.0
Several Actions features in this release negotiate a capability with the runner. To get **job summaries**, the transitional **Cancelling** job state, and correct **`continue-on-error`** aggregation, upgrade your runners to **[Gitea Runner 2.0.0](/release-of-runner-2.0.0/)**. Gitea stays wire-compatible with older runners — it simply skips the feature when the runner does not advertise support. Highlights that need the new runner are marked with **🔧 Requires Gitea Runner 2.0.0** below.
:::

## Security

This release addresses the following security vulnerabilities. Please upgrade as soon as possible.

- CVE-2026-58443: Public-only repository tokens could update private pull-request head branches. Fixed by [#38406](https://github.com/go-gitea/gitea/pull/38406). Thanks to [@ohxorud-dev](https://github.com/ohxorud-dev) for reporting the issue, and to [@bircni](https://github.com/bircni) for the patch.
- CVE-2026-58433: The team-repository linking endpoint bypassed the `RepoAdminChangeTeamAccess` organization setting. Fixed by [#38324](https://github.com/go-gitea/gitea/pull/38324). Thanks to [@de3erve](https://github.com/de3erve) for reporting the issue, and to [@bircni](https://github.com/bircni) for the patch.
- CVE-2026-58435: Privilege escalation through LFS deploy keys. Fixed by [#38322](https://github.com/go-gitea/gitea/pull/38322). Thanks to [@adrian-doyensec](https://github.com/adrian-doyensec) for reporting the issue, and to [@bircni](https://github.com/bircni) for the patch.
- CVE-2026-58436: Unauthenticated denial of service via quadratic-time parsing of the `Accept-Language` header. Fixed by [#38323](https://github.com/go-gitea/gitea/pull/38323). Thanks to [@tonghuaroot](https://github.com/tonghuaroot) for reporting the issue, and to [@bircni](https://github.com/bircni) for the patch.
- CVE-2026-58437: Repository visibility could be manipulated via Git push options. Fixed by [#38323](https://github.com/go-gitea/gitea/pull/38323). Thanks to [@prakhar0x01](https://github.com/prakhar0x01) for reporting the issue, and to [@bircni](https://github.com/bircni) for the patch.
- CVE-2026-58439: Branch protection bypass — retargeting a pull request preserved a stale `official` approval flag. Fixed by [#38319](https://github.com/go-gitea/gitea/pull/38319). Thanks to [@yonatan-pl](https://github.com/yonatan-pl) for reporting the issue, and to [@bircni](https://github.com/bircni) for the patch.
- CVE-2026-54481: The internal API HTTP client no longer skips TLS certificate verification. Fixed by [#38406](https://github.com/go-gitea/gitea/pull/38406). Thanks to [@sanil18](https://github.com/sanil18) for reporting the issue, and to [@bircni](https://github.com/bircni) for the patch.
- CVE-2026-55987: OAuth2 sign-in could reactivate an administrator-deactivated account on authentication sources that do not issue refresh tokens. Fixed by [#38406](https://github.com/go-gitea/gitea/pull/38406). Thanks to [@khoadb175](https://github.com/khoadb175) for reporting the issue, and to [@bircni](https://github.com/bircni) for the patch.
- CVE-2026-57894: Repository migration followed Git HTTP redirects after URL allow/block validation, enabling internal repository exfiltration. Fixed by [#38320](https://github.com/go-gitea/gitea/pull/38320). Thanks to [@cyberlanc3r](https://github.com/cyberlanc3r) for reporting the issue, and to [@bircni](https://github.com/bircni) for the patch.
- CVE-2026-58314: Two SSRF issues in repository migration. Fixed by [#38406](https://github.com/go-gitea/gitea/pull/38406). Thanks to [@xclow3n](https://github.com/xclow3n) for reporting the issue, and to [@bircni](https://github.com/bircni) for the patch.
- CVE-2026-59765: SSRF via migration asset downloads that bypassed the host matcher, allowing internal files and cloud metadata to be read. Fixed by [#38406](https://github.com/go-gitea/gitea/pull/38406). Thanks to [@tikket1](https://github.com/tikket1), [@theluckystrike](https://github.com/theluckystrike), [@Letian-aarch64](https://github.com/Letian-aarch64), [@JebeenLee](https://github.com/JebeenLee), [@JLLeitschuh](https://github.com/JLLeitschuh), [@pick](https://github.com/pick) and [@noobx123](https://github.com/noobx123) for reporting the issue, and to [@bircni](https://github.com/bircni) for the patch.
- CVE-2026-58416: A fork pull-request Actions task could read a third private repository through the collaborative-owner branch. Fixed by [#38214](https://github.com/go-gitea/gitea/pull/38214). Thanks to [@CassianStarck](https://github.com/CassianStarck) for reporting the issue, and to [@bircni](https://github.com/bircni) for the patch.
- CVE-2026-58420: Local file inclusion via a `file://` URI in migration restore. Fixed by [#38215](https://github.com/go-gitea/gitea/pull/38215). Thanks to [@isa0-gh](https://github.com/isa0-gh) for reporting the issue, and to [@bircni](https://github.com/bircni) for the patch.
- CVE-2026-58425: OAuth token introspection returned metadata for tokens issued to other clients. Fixed by [#38042](https://github.com/go-gitea/gitea/pull/38042). Thanks to [@bl4cksku11](https://github.com/bl4cksku11) for reporting the issue, and to [@lunny](https://github.com/lunny) for the patch.
- CVE-2026-58427: The private organization member list could be leaked via the `/members` API endpoint. Fixed by [#38213](https://github.com/go-gitea/gitea/pull/38213). Thanks to [@Razzlemouse](https://github.com/Razzlemouse) for reporting the issue, and to [@bircni](https://github.com/bircni) for the patch.
- CVE-2026-58428: The release-attachment extension allowlist could be bypassed through the web release edit form. Fixed by [#38314](https://github.com/go-gitea/gitea/pull/38314). Thanks to [@bl4cksku11](https://github.com/bl4cksku11) for reporting the issue, and to [@lunny](https://github.com/lunny) for the patch.
- CVE-2026-58429: Public-only personal access tokens could bypass scope restrictions on organization and permission endpoints. Fixed by [#38323](https://github.com/go-gitea/gitea/pull/38323). Thanks to [@Pcat2003](https://github.com/Pcat2003) for reporting the issue, and to [@bircni](https://github.com/bircni) for the patch.
- CVE-2026-58431: The public-only API token restriction was not enforced on team API routes. Fixed by [#38323](https://github.com/go-gitea/gitea/pull/38323). Thanks to [@rmb122](https://github.com/rmb122) for reporting the issue, and to [@bircni](https://github.com/bircni) for the patch.
- CVE-2026-58432: Missing authorization checks allowed access to sensitive resources through user-controlled keys. Fixed by [#38318](https://github.com/go-gitea/gitea/pull/38318). Thanks to [@z3r0s6](https://github.com/z3r0s6) for reporting the issue, and to [@bircni](https://github.com/bircni) for the patch.
- CVE-2026-58438: Cross-repository IDOR in issue-dependency removal let an attacker tamper with and comment on private repositories they could not access. Fixed by [#38324](https://github.com/go-gitea/gitea/pull/38324). Thanks to [@de3erve](https://github.com/de3erve) for reporting the issue, and to [@bircni](https://github.com/bircni) for the patch.
- CVE-2026-58440: Webhooks created by a collaborator kept firing after that collaborator's repository access was revoked. Fixed by [#38324](https://github.com/go-gitea/gitea/pull/38324). Thanks to [@sec-reex](https://github.com/sec-reex) for reporting the issue, and to [@bircni](https://github.com/bircni) for the patch.
- CVE-2026-58441: SSRF in `restore-repo` via an unsanitized clone URL. Fixed by [#38324](https://github.com/go-gitea/gitea/pull/38324). Thanks to [@yoojoon2](https://github.com/yoojoon2) for reporting the issue, and to [@bircni](https://github.com/bircni) for the patch.
- CVE-2026-58442: Repository-migration SSRF via a multi-answer DNS allow-list bypass. Fixed by [#38324](https://github.com/go-gitea/gitea/pull/38324). Thanks to [@Tomer-PL](https://github.com/Tomer-PL) for reporting the issue, and to [@bircni](https://github.com/bircni) for the patch.
- CVE-2026-58444: A personal access token scope-enforcement bypass on the repository home page could disclose private repository contents. Fixed by [#38406](https://github.com/go-gitea/gitea/pull/38406). Thanks to [@StarPlatinu](https://github.com/StarPlatinu) for reporting the issue, and to [@bircni](https://github.com/bircni) for the patch.
- CVE-2026-42931: Denial of service via unbounded request-body reading in the npm package tag endpoint. Fixed by [#38406](https://github.com/go-gitea/gitea/pull/38406). Thanks to [@Tricta](https://github.com/Tricta) for reporting the issue, and to [@bircni](https://github.com/bircni) for the patch.
- CVE-2026-50105: The RSS/Atom feed handlers bypassed API-token scope and public-only confinement. Fixed by [#38406](https://github.com/go-gitea/gitea/pull/38406). Thanks to [@CassianStarck](https://github.com/CassianStarck) for reporting the issue, and to [@bircni](https://github.com/bircni) for the patch.
- CVE-2026-55982: The OIDC userinfo endpoint returned identity claims without enforcing API-token scopes. Fixed by [#38406](https://github.com/go-gitea/gitea/pull/38406). Thanks to [@ybsun0215](https://github.com/ybsun0215) for reporting the issue, and to [@bircni](https://github.com/bircni) for the patch.
- CVE-2026-55986: The email-management API bypassed the manage-credentials feature restriction. Fixed by [#38406](https://github.com/go-gitea/gitea/pull/38406). Thanks to [@martijnperdaan52](https://github.com/martijnperdaan52) for reporting the issue, and to [@bircni](https://github.com/bircni) for the patch.
- CVE-2026-56443: A residual public-only token scope bypass on limited-visibility owners. Fixed by [#38323](https://github.com/go-gitea/gitea/pull/38323). Thanks to [@JebeenLee](https://github.com/JebeenLee) and [@alecclyde](https://github.com/alecclyde) for reporting the issue, and to [@bircni](https://github.com/bircni) for the patch.
- CVE-2026-56654: Privilege escalation via access-token scope escalation in the API. Fixed by [#38406](https://github.com/go-gitea/gitea/pull/38406). Thanks to [@AdamKorcz](https://github.com/AdamKorcz) and [@ohxorud-dev](https://github.com/ohxorud-dev) for reporting the issue, and to [@bircni](https://github.com/bircni) for the patch.
- CVE-2026-56657: Denial of service in the SSH key parser. Fixed by [#38406](https://github.com/go-gitea/gitea/pull/38406). Thanks to [@AdamKorcz](https://github.com/AdamKorcz) for reporting the issue, and to [@bircni](https://github.com/bircni) for the patch.
- CVE-2026-56755: Denial of service caused by quadratic string concatenation in Debian package uploads. Fixed by [#38406](https://github.com/go-gitea/gitea/pull/38406). Thanks to [@AdamKorcz](https://github.com/AdamKorcz) for reporting the issue, and to [@bircni](https://github.com/bircni) for the patch.
- CVE-2026-57886: Cross-repository issue and comment attachment re-linking could expose private attachment content. Fixed by [#38406](https://github.com/go-gitea/gitea/pull/38406). Thanks to [@zulloper](https://github.com/zulloper) for reporting the issue, and to [@bircni](https://github.com/bircni) for the patch.
- CVE-2026-57897: Cross-repository information disclosure via the organization-level Actions run/job APIs. Fixed by [#38406](https://github.com/go-gitea/gitea/pull/38406). Thanks to [@prakhar0x01](https://github.com/prakhar0x01) for reporting the issue, and to [@bircni](https://github.com/bircni) for the patch.
- CVE-2026-58507: Private repository existence disclosure via the go-get meta endpoint. Fixed by [#38406](https://github.com/go-gitea/gitea/pull/38406). Thanks to [@prakhar0x01](https://github.com/prakhar0x01) for reporting the issue, and to [@bircni](https://github.com/bircni) for the patch.
- CVE-2026-58508: Two SSRF issues in migration/mirror (DNS rebinding and missing re-validation). Fixed by [#38406](https://github.com/go-gitea/gitea/pull/38406). Thanks to [@AmerMrkaljevic](https://github.com/AmerMrkaljevic) for reporting the issue, and to [@bircni](https://github.com/bircni) for the patch.
- CVE-2026-58510: The repository watch-cleanup fix was not applied to the API `EditRepo` path, leaving stale watches when a repository became private. Fixed by [#38406](https://github.com/go-gitea/gitea/pull/38406). Thanks to [@eddieran](https://github.com/eddieran) for reporting the issue, and to [@bircni](https://github.com/bircni) for the patch.
- CVE-2026-59763: Unbounded Arch package file metadata could cause resource amplification during package uploads. Fixed by [#38406](https://github.com/go-gitea/gitea/pull/38406). Thanks to [@kkkh1](https://github.com/kkkh1) for reporting the issue, and to [@bircni](https://github.com/bircni) for the patch.
- CVE-2026-23603: Blind SSRF in OAuth2 avatar synchronization via an unvalidated OIDC `picture` claim. Fixed by [#38406](https://github.com/go-gitea/gitea/pull/38406). Thanks to [@alimezar](https://github.com/alimezar) for reporting the issue, with additional reports from [@cwanglab](https://github.com/cwanglab), [@Vext-Labs](https://github.com/Vext-Labs), [@Medoedus](https://github.com/Medoedus), [@ffulbtech](https://github.com/ffulbtech), [@theluckystrike](https://github.com/theluckystrike), [@prakhar0x01](https://github.com/prakhar0x01), [@AnuragBathani](https://github.com/AnuragBathani) and [@khoadb175](https://github.com/khoadb175), and to [@bircni](https://github.com/bircni) for the patch.
- CVE-2026-58417: The REST API exposed the membership of private organizations. Fixed by [#38145](https://github.com/go-gitea/gitea/pull/38145). Thanks to [@maluff](https://github.com/maluff), [@Sai2r](https://github.com/Sai2r) and [@mgelde](https://github.com/mgelde) for reporting the issue, and to [@bircni](https://github.com/bircni) for the patch.
- CVE-2026-58434: Private repository metadata remained accessible after access was revoked. Fixed by [#38321](https://github.com/go-gitea/gitea/pull/38321). Thanks to [@ybsun0215](https://github.com/ybsun0215) for reporting the issue, and to [@bircni](https://github.com/bircni) for the patch.
- CVE-2026-58445: A cross-repository label-ID enumeration oracle in the delete-issue-label API. Fixed by [#38406](https://github.com/go-gitea/gitea/pull/38406). Thanks to [@CassianStarck](https://github.com/CassianStarck) for reporting the issue, and to [@bircni](https://github.com/bircni) for the patch.
- CVE-2026-55984: A null-pointer dereference in the AddTime API could cause an authenticated denial of service. Fixed by [#38406](https://github.com/go-gitea/gitea/pull/38406). Thanks to [@martijnperdaan52](https://github.com/martijnperdaan52) for reporting the issue, and to [@bircni](https://github.com/bircni) for the patch.
- CVE-2026-56750: Remember-me tokens were not invalidated correctly, allowing session reuse. Fixed by [#38406](https://github.com/go-gitea/gitea/pull/38406). Thanks to [@AdamKorcz](https://github.com/AdamKorcz) for reporting the issue, and to [@bircni](https://github.com/bircni) for the patch.
- CVE-2026-58511: Webhook authorization headers were returned in plaintext via the API. Fixed by [#38406](https://github.com/go-gitea/gitea/pull/38406). Thanks to [@theluckystrike](https://github.com/theluckystrike) and [@APhuongKMA](https://github.com/APhuongKMA) for reporting the issue, and to [@bircni](https://github.com/bircni) for the patch.

This release also includes the following additional security hardening fixes:

- Revoked users can no longer read private repository objects or issue titles through the user `starred`/`times` API endpoints. Fixed by [#38324](https://github.com/go-gitea/gitea/pull/38324). Thanks to [@sec-reex](https://github.com/sec-reex) for reporting the issue, and to [@bircni](https://github.com/bircni) for the patch.
- Added a private/internal label for packages and fixed the Composer package source permission check. Fixed by [#37610](https://github.com/go-gitea/gitea/pull/37610). Thanks to [@JoshBolding](https://github.com/JoshBolding) and [@sec-reex](https://github.com/sec-reex) for reporting the issue, and to [@lunny](https://github.com/lunny) for the patch.
- AWS credentials stored via the API are now encrypted. Fixed by [#37679](https://github.com/go-gitea/gitea/pull/37679). Thanks to [@Exgene](https://github.com/Exgene) for the patch.
- Updated `github.com/go-git/go-git/v5` to v5.19.1 to pick up an upstream security fix ([#37786](https://github.com/go-gitea/gitea/pull/37786)).

We are grateful to all the security researchers who responsibly disclosed these issues.

## How to Update

You can download it for example from our [downloads page](https://dl.gitea.com/gitea/1.27.0/). Please read our [installation guide](https://docs.gitea.com/1.27/category/installation) for more information on installation. To upgrade, as always, back up your data and then replace the binary or Docker container and restart.

## Special Thanks

We would like to thank all of our supporters on [Open Collective](https://opencollective.com/gitea) who are helping to sustain the project financially.

As always, the changes are sorted descending by what we deem most important for users and admins, so the most important change comes first.

> **Are you looking for a seamless, hassle-free solution to manage your Git repositories? Look no further! [Gitea Cloud](https://cloud.gitea.com) is here to revolutionize your development experience.**

## Major Breaking Changes

### :warning: Move release artifact signing to sigstore ([#38250](https://github.com/go-gitea/gitea/pull/38250))

Gitea release artifacts are now signed with sigstore instead of the previous GPG flow. If you verify downloaded binaries or Docker images as part of your deployment pipeline, update your verification step to the sigstore-based process.

Thank you to **[@TheFox0x7](https://github.com/TheFox0x7)** for contributing this change.

### :warning: Improve support for reusable workflows ([#37478](https://github.com/go-gitea/gitea/pull/37478))

Reusable workflows referenced with `uses:` are now parsed on the Gitea side rather than on the runner. Each called (child) job is inserted as its own `ActionRunJob` and dispatched as an independent task, so callee logs surface as separate job entries instead of being inlined into the caller's "Set up job" step. Review workflows that rely on reusable-workflow behavior after upgrading.

**External reusable workflows** (`uses: https://other-gitea-instance/OWNER/REPO/.gitea/workflows/test.yaml@REF`) are no longer supported. To keep using them, clone the repositories to the local instance and reference them there.

Thank you to **[@Zettat123](https://github.com/Zettat123)** for contributing this change.

### :warning: Use a Content-Security-Policy script nonce ([#37232](https://github.com/go-gitea/gitea/pull/37232))

Inline scripts are now allowed via a per-request CSP nonce instead of a broader policy. Custom templates, themes, or embeds that inject inline `<script>` tags may stop executing until they are updated to carry the nonce. Review custom front-end customizations after upgrading.

Thank you to **[@wxiaoguang](https://github.com/wxiaoguang)** for contributing this change.

### :warning: `X-Content-Type-Options: nosniff` is now sent by default ([#37354](https://github.com/go-gitea/gitea/pull/37354))

All responses now include the `X-Content-Type-Options: nosniff` header, which stops browsers from MIME-sniffing responses away from their declared `Content-Type`. If a reverse proxy, embed, or custom asset relied on content sniffing, set `X_CONTENT_TYPE_OPTIONS = unset` under `[security]` to remove the header, or override its value as needed.

Thank you to **[@SAY-5](https://github.com/SAY-5)** for contributing this change.

## Major Highlights (Actions)

### :rocket: Reusable workflows are now first-class jobs ([#37478](https://github.com/go-gitea/gitea/pull/37478))

Workflows called with `uses:` are now resolved by Gitea itself instead of by the runner. Every called workflow is expanded into its own jobs, which are scheduled as independent tasks: they get their own entries in the run sidebar, their own logs, and their own nodes in the dependency graph, nested under the job that called them. Callee output is no longer inlined into the caller's "Set up job" step, so a failure inside a reusable workflow points straight at the job that failed. Nested calls (a reusable workflow calling another) work the same way, and outputs, inputs, and matrix jobs propagate across the boundary.

![Reusable-workflow jobs listed individually in the run sidebar and dependency graph](/demos/37478/1.png)
![Expanded nested reusable workflows, each with its own jobs and logs](/demos/37478/2.png)

:::info
This changes existing behavior — see "Improve support for reusable workflows" under Major Breaking Changes. External reusable workflows referenced by URL (`uses: https://other-instance/OWNER/REPO/...`) are no longer supported.
:::

Thank you to **[@Zettat123](https://github.com/Zettat123)** for contributing this feature.

### :rocket: 🔧 Job summaries — `GITHUB_STEP_SUMMARY` ([#37500](https://github.com/go-gitea/gitea/pull/37500))

Workflow steps can write Markdown to `GITHUB_STEP_SUMMARY`, and Gitea renders it on the run **Summary** view. Summaries are stored in the database rather than as downloadable artifacts, and later polish makes the summary UI richer ([#37824](https://github.com/go-gitea/gitea/pull/37824)).

:::info
**🔧 Requires Gitea Runner 2.0.0** to upload summaries. Gitea advertises the `job-summary` capability; with an older runner nothing is uploaded and the Summary view stays empty.
:::

![Rendered Markdown job summaries on the Actions run Summary view](/demos/37500/1.png)

Thank you to **[@bircni](https://github.com/bircni)** for contributing this feature.

### :rocket: 🔧 Implement `jobs.<job_id>.continue-on-error` ([#38100](https://github.com/go-gitea/gitea/pull/38100))

`continue-on-error` was previously parsed from YAML but ignored when computing a run's overall status, so a tolerated job failure could still fail the whole run. Gitea now stores the value per job and treats an allowed failure as success when aggregating the workflow run, matching GitHub Actions.

:::info
**🔧 Requires Gitea Runner 2.0.0** for the runner to allow the job to fail; Gitea 1.27 provides the run-status aggregation.
:::

Thank you to **[@bircni](https://github.com/bircni)** for contributing this feature.

### :rocket: 🔧 Run post/cleanup steps when a workflow is cancelled ([#37275](https://github.com/go-gitea/gitea/pull/37275))

Cancelling a run now executes post-run cleanup and `always()` / `cancelled()` steps, using a transitional **Cancelling** job state before the job is finalized as cancelled.

:::info
**🔧 Requires Gitea Runner 2.0.0** for the transitional **Cancelling** state and capability negotiation. With an older runner, cancellation still works but without the full server-side semantics.
:::

Thank you to **[@KalashThakare](https://github.com/KalashThakare)**, **[@bircni](https://github.com/bircni)**, and **[@Zettat123](https://github.com/Zettat123)** for contributing this feature.

### :rocket: Owner-level and global scoped workflows ([#38154](https://github.com/go-gitea/gitea/pull/38154))

Define workflows at the owner (org/user) level and instance-wide, so shared automation no longer has to be copied into every repository.

![Scoped Workflows source configuration in organization settings](/demos/38154/1.png)
![Owner- and global-scoped workflows in the Actions workflow list](/demos/38154/2.png)

Thank you to **[@Zettat123](https://github.com/Zettat123)** for contributing this feature.

### :rocket: Bulk delete, disable, and enable runners in the admin UI ([#37869](https://github.com/go-gitea/gitea/pull/37869))

Manage many runners at once from the admin runner list instead of acting on them one by one.

![Bulk disable, enable, and delete actions in the admin runners list](/demos/37869/1.png)

Thank you to **[@bircni](https://github.com/bircni)** for contributing this feature.

### :rocket: Workflow status badge modal ([#38196](https://github.com/go-gitea/gitea/pull/38196))

Grab the Markdown/HTML snippet for a workflow status badge from a modal in the Actions UI.

![Workflow status badge modal with Markdown and HTML snippets](/demos/38196/1.png)

Thank you to **[@guanzi008](https://github.com/guanzi008)** for contributing this feature.

### :rocket: Show run status on the browser tab favicon ([#38071](https://github.com/go-gitea/gitea/pull/38071))

The run view reflects the current job status on the browser tab favicon (and sets a descriptive tab title, [#37870](https://github.com/go-gitea/gitea/pull/37870)), so you can watch a run from another tab.

![Run status reflected on the browser tab favicon](/demos/38071/1.png)

Thank you to **[@bircni](https://github.com/bircni)** for contributing this feature.

### :rocket: List workflows that ran once but were removed from the default branch ([#37835](https://github.com/go-gitea/gitea/pull/37835))

Historical workflows that no longer exist on the default branch remain listed, so their past runs stay discoverable.

![Workflows removed from the default branch grouped under "Other workflows" in the Actions sidebar](/demos/37835/1.png)

Thank you to **[@bircni](https://github.com/bircni)** for contributing this feature.

## Major Highlights (Code & Repositories)

### :rocket: Jupyter Notebook (`.ipynb`) rendering ([#37433](https://github.com/go-gitea/gitea/pull/37433))

Notebook files render as formatted output in the file view instead of raw JSON.

![Rendered Jupyter notebook with Matplotlib output in the repo file view](/demos/37433/1.png)

Thank you to **[@karthikbhandary2](https://github.com/karthikbhandary2)** for contributing this feature.

### :rocket: Allow multiple projects per issue and pull request ([#36784](https://github.com/go-gitea/gitea/pull/36784))

Issues and pull requests can now belong to more than one project, and a new column picker lets you place them directly from the sidebar ([#37037](https://github.com/go-gitea/gitea/pull/37037)).

![Issue sidebar showing an issue in multiple projects](/demos/36784/1.png)
![Project column picker in the issue sidebar](/demos/37037/1.png)

Thank you to **[@icyavocado](https://github.com/icyavocado)** and **[@myers](https://github.com/myers)** for contributing these features.

### :rocket: Avatar stacks ([#37594](https://github.com/go-gitea/gitea/pull/37594))

Overlapping avatar stacks give a compact view of the people involved (assignees, participants, and similar lists).

![Overlapping avatar stacks at several group sizes](/demos/37594/1.png)

Thank you to **[@bircni](https://github.com/bircni)** for contributing this feature.

### :rocket: "Follow rename" in the file commit history ([#34994](https://github.com/go-gitea/gitea/pull/34994))

The commit history list for a file can follow the file across renames, so history does not stop at the rename.

![File commit history with "Include renames" enabled vs disabled](/demos/34994/1.png)

Thank you to **[@Chi-Iroh](https://github.com/Chi-Iroh)** for contributing this feature.

### :rocket: Markdown fenced code blocks support more syntaxes ([#37154](https://github.com/go-gitea/gitea/pull/37154))

More fenced code block languages/info strings are recognized for syntax highlighting.

Thank you to **[@wxiaoguang](https://github.com/wxiaoguang)** for contributing this improvement.

## Major Highlights (Organizations & Teams)

### :rocket: Team visibility so org members can discover teams ([#37680](https://github.com/go-gitea/gitea/pull/37680))

Teams can be made discoverable to organization members, making it easier to find and request access to the right team.

![Organization teams list as seen by a regular member](/demos/37680/1.png)

Thank you to **[@bircni](https://github.com/bircni)** for contributing this feature.

### :rocket: Search bar on the organization members tab ([#37347](https://github.com/go-gitea/gitea/pull/37347))

Filter large member lists directly on the organization members page.

![Search bar on the organization members tab](/demos/37347/1.png)

Thank you to **[@lunny](https://github.com/lunny)** for contributing this feature.

### :rocket: Split the repository creation limit into user and org scopes ([#37872](https://github.com/go-gitea/gitea/pull/37872))

Repository creation limits can be set independently for personal accounts and organizations.

Thank you to **[@Zettat123](https://github.com/Zettat123)** for contributing this feature.

## Major Highlights (API)

### :rocket: Serve the OpenAPI 3.0 spec at `/openapi.v1.json` ([#37038](https://github.com/go-gitea/gitea/pull/37038))

Gitea publishes an OpenAPI 3.0 description of its API for tooling and client generation.

Thank you to **[@myers](https://github.com/myers)** for contributing this feature.

### :rocket: Token introspection and self-deletion endpoints ([#37995](https://github.com/go-gitea/gitea/pull/37995))

New API endpoints introspect the current token and allow a token to delete itself.

Thank you to **[@TheFox0x7](https://github.com/TheFox0x7)** for contributing this feature.

### :rocket: Assignees APIs ([#37330](https://github.com/go-gitea/gitea/pull/37330))

Manage issue and pull request assignees over the API.

Thank you to **[@lunny](https://github.com/lunny)** for contributing this feature.

### :rocket: List workflow runs for a workflow ([#37196](https://github.com/go-gitea/gitea/pull/37196))

`GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}/runs` lists runs for a specific workflow.

Thank you to **[@bn-zr](https://github.com/bn-zr)** for contributing this feature.

### :rocket: Server-side branch filtering and raw diff/patch for comparisons ([#37982](https://github.com/go-gitea/gitea/pull/37982)) ([#37632](https://github.com/go-gitea/gitea/pull/37632)) ([#38148](https://github.com/go-gitea/gitea/pull/38148))

The list-branches API gains a `q` filter, comparisons expose a raw diff/patch endpoint, and compare accepts ref suffixes.

Thank you to **[@HarshMN2345](https://github.com/HarshMN2345)**, **[@grafail](https://github.com/grafail)**, and **[@eyupcanakman](https://github.com/eyupcanakman)** for contributing these features.

## Major Highlights (Others)

### :rocket: Custom URI schemes in OAuth2 redirect URIs ([#37356](https://github.com/go-gitea/gitea/pull/37356))

OAuth2 applications can register redirect URIs with custom URI schemes, which native and desktop apps commonly need.

Thank you to **[@wxiaoguang](https://github.com/wxiaoguang)** for contributing this feature.

### :rocket: Auto-generate additional SSH host keys ([#33974](https://github.com/go-gitea/gitea/pull/33974))

Gitea can generate additional SSH host keys automatically for the built-in SSH server.

Thank you to **[@TheFox0x7](https://github.com/TheFox0x7)** for contributing this feature.

### :rocket: OpenSearch support and REST-based search client ([#37411](https://github.com/go-gitea/gitea/pull/37411))

The `olivere/elastic` dependency is replaced with a REST API client, adding OpenSearch support alongside Elasticsearch.

Thank you to **[@silverwind](https://github.com/silverwind)** for contributing this improvement.

### :rocket: Telegram Bot API 10.1 rich messages for webhooks ([#38298](https://github.com/go-gitea/gitea/pull/38298))

The Telegram webhook uses the newer Bot API rich message format.

Thank you to **[@SudhanshuMatrix](https://github.com/SudhanshuMatrix)** for contributing this feature.

## Changelog

- BREAKING
  - Feat(actions)!: improve support for reusable workflows ([#37478](https://github.com/go-gitea/gitea/pull/37478))
  - Use Content-Security-Policy: script nonce ([#37232](https://github.com/go-gitea/gitea/pull/37232))

- SECURITY
  - Fix: various security fixes ([#38406](https://github.com/go-gitea/gitea/pull/38406)) ([#38426](https://github.com/go-gitea/gitea/pull/38426))
  - Fix(security): harden access checks and migration validation ([#38324](https://github.com/go-gitea/gitea/pull/38324)) ([#38400](https://github.com/go-gitea/gitea/pull/38400))
  - Fix: enforce public-only token scope and harden push options / locale parsing ([#38323](https://github.com/go-gitea/gitea/pull/38323)) ([#38399](https://github.com/go-gitea/gitea/pull/38399))
  - Fix(pull): re-evaluate review official flag on target branch change ([#38319](https://github.com/go-gitea/gitea/pull/38319)) ([#38402](https://github.com/go-gitea/gitea/pull/38402))
  - Fix(api): stop leaking private repo metadata after access revocation ([#38321](https://github.com/go-gitea/gitea/pull/38321)) ([#38390](https://github.com/go-gitea/gitea/pull/38390))
  - Fix(lfs): require proof of possession for cross-repo objects ([#38322](https://github.com/go-gitea/gitea/pull/38322)) ([#38389](https://github.com/go-gitea/gitea/pull/38389))
  - Fix(mirror): disable HTTP redirects on pull mirror sync ([#38320](https://github.com/go-gitea/gitea/pull/38320)) ([#38367](https://github.com/go-gitea/gitea/pull/38367))
  - Fix: golang html template url escaping ([#38363](https://github.com/go-gitea/gitea/pull/38363)) ([#38369](https://github.com/go-gitea/gitea/pull/38369))
  - Fix(release): validate web attachment renames against allowed types ([#38314](https://github.com/go-gitea/gitea/pull/38314)) ([#38328](https://github.com/go-gitea/gitea/pull/38328))
  - Fix(release): gate draft release attachments on web download endpoints ([#38318](https://github.com/go-gitea/gitea/pull/38318)) ([#38325](https://github.com/go-gitea/gitea/pull/38325))
  - Fix(deps): update module github.com/go-git/go-git/v5 to v5.19.1 [security] ([#37786](https://github.com/go-gitea/gitea/pull/37786))
  - Fix(oauth): restrict introspection to the token's client ([#38042](https://github.com/go-gitea/gitea/pull/38042))
  - Fix(api): don't expose private org membership via public_members ([#38145](https://github.com/go-gitea/gitea/pull/38145))
  - Fix(actions): deny fork-PR cross-repo access via collaborative owner ([#38214](https://github.com/go-gitea/gitea/pull/38214))
  - Fix(migrations): prevent path traversal in repository restore ([#38215](https://github.com/go-gitea/gitea/pull/38215))

- FEATURES
  - Feat(actions): add workflow status badge modal ([#38196](https://github.com/go-gitea/gitea/pull/38196))
  - Feat(actions): support owner-level and global scoped workflows ([#38154](https://github.com/go-gitea/gitea/pull/38154))
  - Feat(api): support ref suffixes in compare ([#38148](https://github.com/go-gitea/gitea/pull/38148))
  - Feat(actions): implement `jobs.<job_id>.continue-on-error` ([#38100](https://github.com/go-gitea/gitea/pull/38100))
  - Feat(actions): show run status on browser tab favicon ([#38071](https://github.com/go-gitea/gitea/pull/38071))
  - Feat(api): add token introspection and self-deletion endpoint ([#37995](https://github.com/go-gitea/gitea/pull/37995))
  - Feat(api): add q parameter to list branches API for server-side filtering ([#37982](https://github.com/go-gitea/gitea/pull/37982))
  - Feat(repo): split repository creation limit into user and org scopes ([#37872](https://github.com/go-gitea/gitea/pull/37872))
  - Feat(actions): bulk delete, disable and enable runners in admin UI ([#37869](https://github.com/go-gitea/gitea/pull/37869))
  - Feat(actions): List workflows that were executed once but got removed from the default branch ([#37835](https://github.com/go-gitea/gitea/pull/37835))
  - Feat(org): add team visibility so org members can discover teams ([#37680](https://github.com/go-gitea/gitea/pull/37680))
  - Feat: add raw diff/patch endpoint for repository comparisons ([#37632](https://github.com/go-gitea/gitea/pull/37632))
  - Feat: Add avatar stacks ([#37594](https://github.com/go-gitea/gitea/pull/37594))
  - Feat(actions): add job summaries (GITHUB_STEP_SUMMARY) ([#37500](https://github.com/go-gitea/gitea/pull/37500))
  - Feat(web): Add Jupyter Notebook (.ipynb) Rendering Support ([#37433](https://github.com/go-gitea/gitea/pull/37433))
  - Support for Custom URI Schemes in OAuth2 Redirect URIs ([#37356](https://github.com/go-gitea/gitea/pull/37356))
  - Feat(orgs): Add search bar for organization members tab page ([#37347](https://github.com/go-gitea/gitea/pull/37347))
  - Feat(api): Add assignees APIs ([#37330](https://github.com/go-gitea/gitea/pull/37330))
  - Feat(api): Add `GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}/runs` ([#37196](https://github.com/go-gitea/gitea/pull/37196))
  - Serve OpenAPI 3.0 spec at /openapi.v1.json ([#37038](https://github.com/go-gitea/gitea/pull/37038))
  - Add project column picker to issue and pull request sidebar ([#37037](https://github.com/go-gitea/gitea/pull/37037))
  - Allow multiple projects per issue and pull requests ([#36784](https://github.com/go-gitea/gitea/pull/36784))
  - Feat(ui): add "follow rename" to file commit history list ([#34994](https://github.com/go-gitea/gitea/pull/34994))
  - Feat(ssh): auto generate additional ssh keys ([#33974](https://github.com/go-gitea/gitea/pull/33974))

- ENHANCEMENTS
  - Enhance(actions): only create filtered-out workflow commit status for required contexts ([#38371](https://github.com/go-gitea/gitea/pull/38371)) ([#38385](https://github.com/go-gitea/gitea/pull/38385))
  - Enhance: allow builtin default git config options to be overridden ([#38172](https://github.com/go-gitea/gitea/pull/38172))
  - Enhance: allow MathML core elements ([#38034](https://github.com/go-gitea/gitea/pull/38034))
  - Enhance(markup): improve issue title rendering ([#37908](https://github.com/go-gitea/gitea/pull/37908))
  - Enhance(actions): set descriptive browser tab title on run view ([#37870](https://github.com/go-gitea/gitea/pull/37870))
  - Enhance: Migrate remaining gopkg.in/yaml.v3 usages to go.yaml.in/yaml/v4 ([#37866](https://github.com/go-gitea/gitea/pull/37866))
  - Enhance(actions): show workflow name from YAML instead of filename ([#37833](https://github.com/go-gitea/gitea/pull/37833))
  - Feat(actions): add before/after to PR synchronize event payload ([#37827](https://github.com/go-gitea/gitea/pull/37827))
  - Enhance(actions): add branch filters to run list ([#37826](https://github.com/go-gitea/gitea/pull/37826))
  - Enhance(actions): Make Summary UI more beautiful with more infos ([#37824](https://github.com/go-gitea/gitea/pull/37824))
  - Feat: add copy button to action step header, improve other copy buttons ([#37744](https://github.com/go-gitea/gitea/pull/37744))
  - Fix(icon): use repo-forked icon to display forks count ([#37731](https://github.com/go-gitea/gitea/pull/37731))
  - Feat(api): add sort and order query parameters to job list endpoints ([#37672](https://github.com/go-gitea/gitea/pull/37672))
  - Feat(api): add last_sync to repository API ([#37566](https://github.com/go-gitea/gitea/pull/37566))
  - Enhance: Adjust Workflow Graph styling ([#37497](https://github.com/go-gitea/gitea/pull/37497))
  - Improve code editor text selection and clean up lint enablement ([#37474](https://github.com/go-gitea/gitea/pull/37474))
  - Add mirror auth updates to repo edit API and settings ([#37468](https://github.com/go-gitea/gitea/pull/37468))
  - Replace `olivere/elastic` with REST API client, add OpenSearch support ([#37411](https://github.com/go-gitea/gitea/pull/37411))
  - Feat: Add default PR branch update style setting ([#37410](https://github.com/go-gitea/gitea/pull/37410))
  - Fix inconsistent disabled styling on logged-out repo header buttons ([#37406](https://github.com/go-gitea/gitea/pull/37406))
  - Allow fast-forward-only merge when signed commits are required ([#37335](https://github.com/go-gitea/gitea/pull/37335))
  - Enhance styling in actions page ([#37323](https://github.com/go-gitea/gitea/pull/37323))
  - Fix: improve actions status icons and texts ([#37206](https://github.com/go-gitea/gitea/pull/37206))
  - Make Markdown fenced code block work with more syntaxes ([#37154](https://github.com/go-gitea/gitea/pull/37154))
  - Fix: Sort action run jobs by JobID and Name with matrix examples ([#37046](https://github.com/go-gitea/gitea/pull/37046))
  - Add API endpoint to reply to pull request review comments ([#36683](https://github.com/go-gitea/gitea/pull/36683))

- PERFORMANCE
  - Perf(actions): debounce runner heartbeat writes and throttle task picks ([#38281](https://github.com/go-gitea/gitea/pull/38281)) ([#38368](https://github.com/go-gitea/gitea/pull/38368))
  - Perf(web): sort the action_run query by a repo-scoped index when possible ([#38155](https://github.com/go-gitea/gitea/pull/38155))
  - Perf: Various performance regression fixes ([#38078](https://github.com/go-gitea/gitea/pull/38078))
  - Perf: extend action `c_u` index to include `created_unix` for faster dashboard feeds ([#38076](https://github.com/go-gitea/gitea/pull/38076))
  - Batch-load related data in actions run, job, and task API endpoints ([#37032](https://github.com/go-gitea/gitea/pull/37032))

- BUGFIXES
  - Fix(util): reject invalid characters between time-estimate units ([#38416](https://github.com/go-gitea/gitea/pull/38416)) ([#38423](https://github.com/go-gitea/gitea/pull/38423))
  - Fix: represent a deleted assignee team as a Ghost team ([#38413](https://github.com/go-gitea/gitea/pull/38413)) ([#38419](https://github.com/go-gitea/gitea/pull/38419))
  - Fix(turnstile): route CAPTCHA verification through the configured proxy ([#38412](https://github.com/go-gitea/gitea/pull/38412)) ([#38420](https://github.com/go-gitea/gitea/pull/38420))
  - Fix: refresh pull request merge box when the commit status is pending ([#38410](https://github.com/go-gitea/gitea/pull/38410)) ([#38411](https://github.com/go-gitea/gitea/pull/38411))
  - Fix: actions task state concurrent update ([#38405](https://github.com/go-gitea/gitea/pull/38405)) ([#38409](https://github.com/go-gitea/gitea/pull/38409))
  - Fix(actions): keep workflow run trailing on one row with long branch names ([#38382](https://github.com/go-gitea/gitea/pull/38382)) ([#38403](https://github.com/go-gitea/gitea/pull/38403))
  - Fix(web): use locale-aware date formatting for contribution calendar tooltips ([#38398](https://github.com/go-gitea/gitea/pull/38398)) ([#38401](https://github.com/go-gitea/gitea/pull/38401))
  - Fix: co-author detection ([#38392](https://github.com/go-gitea/gitea/pull/38392)) ([#38397](https://github.com/go-gitea/gitea/pull/38397))
  - Fix: incorrect co-author detection on commit page ([#38386](https://github.com/go-gitea/gitea/pull/38386)) ([#38387](https://github.com/go-gitea/gitea/pull/38387))
  - Fix(ui): restore commits table column widths ([#38379](https://github.com/go-gitea/gitea/pull/38379)) ([#38383](https://github.com/go-gitea/gitea/pull/38383))
  - Fix: minio init check ([#38355](https://github.com/go-gitea/gitea/pull/38355)) ([#38361](https://github.com/go-gitea/gitea/pull/38361))
  - Fix: org project view assignee list ([#38357](https://github.com/go-gitea/gitea/pull/38357)) ([#38360](https://github.com/go-gitea/gitea/pull/38360))
  - Fix(actions): release claimed task if context is cancelled during `FetchTask` ([#38343](https://github.com/go-gitea/gitea/pull/38343)) ([#38347](https://github.com/go-gitea/gitea/pull/38347))
  - Fix(actions): make runner list pagination order deterministic ([#38313](https://github.com/go-gitea/gitea/pull/38313)) ([#38327](https://github.com/go-gitea/gitea/pull/38327))
  - Fix: Improve since/until when counting commits for X-Total-Count ([#38243](https://github.com/go-gitea/gitea/pull/38243)) ([#38304](https://github.com/go-gitea/gitea/pull/38304))
  - Fix(actions): prevent chevron overlap with log text when timestamps are enabled ([#38227](https://github.com/go-gitea/gitea/pull/38227)) ([#38307](https://github.com/go-gitea/gitea/pull/38307))
  - Fix(workflows): branch protection status checks fail when workflow uses on: paths filter ([#38237](https://github.com/go-gitea/gitea/pull/38237)) ([#38302](https://github.com/go-gitea/gitea/pull/38302))
  - Fix(oauth2): persist linkAccountData during auto-link 2FA flow ([#38274](https://github.com/go-gitea/gitea/pull/38274)) ([#38295](https://github.com/go-gitea/gitea/pull/38295))
  - Fix(actions): allow Actions bot to push to protected branches ([#38284](https://github.com/go-gitea/gitea/pull/38284)) ([#38293](https://github.com/go-gitea/gitea/pull/38293))
  - Fix(actions): include all aggregable run statuses in status filter ([#38280](https://github.com/go-gitea/gitea/pull/38280)) ([#38287](https://github.com/go-gitea/gitea/pull/38287))
  - Fix(archiver): use serializable repo-archive queue payload ([#38273](https://github.com/go-gitea/gitea/pull/38273)) ([#38283](https://github.com/go-gitea/gitea/pull/38283))
  - Fix: update npm dependencies, fix misc issues ([#38257](https://github.com/go-gitea/gitea/pull/38257))
  - Fix(api): respect since/until when counting commits for X-Total-Count ([#38204](https://github.com/go-gitea/gitea/pull/38204))
  - Fix: codemirror regressions ([#38248](https://github.com/go-gitea/gitea/pull/38248))
  - Fix(api): support HEAD requests on all API GET endpoints ([#38245](https://github.com/go-gitea/gitea/pull/38245))
  - Fix(actions): Cleanup workflow status badge code ([#38241](https://github.com/go-gitea/gitea/pull/38241))
  - Fix(web): Correctly align the "disabled" label on larger workflow names ([#38240](https://github.com/go-gitea/gitea/pull/38240))
  - Fix(actions): don't swallow HTML entities into linkified URLs ([#38239](https://github.com/go-gitea/gitea/pull/38239))
  - Fix(packages): accept npm "repository" and "bin" in string form ([#38236](https://github.com/go-gitea/gitea/pull/38236))
  - Fix(actions): fix 500 error when canceling a canceling task ([#38223](https://github.com/go-gitea/gitea/pull/38223))
  - Fix(deps): update module golang.org/x/image to v0.43.0 [security] ([#38219](https://github.com/go-gitea/gitea/pull/38219))
  - Fix(mssql): convert legacy DATETIME columns to DATETIME2 ([#38216](https://github.com/go-gitea/gitea/pull/38216))
  - Fix(api): deny private org member enumeration via /members ([#38213](https://github.com/go-gitea/gitea/pull/38213))
  - Fix(actions): ensure all waiting jobs get runners in large workflows ([#38200](https://github.com/go-gitea/gitea/pull/38200))
  - Fix(deps): update go dependencies ([#38194](https://github.com/go-gitea/gitea/pull/38194))
  - Fix(deps): update npm dependencies ([#38193](https://github.com/go-gitea/gitea/pull/38193))
  - Fix(cli): default must-change-password to false for bot users ([#38175](https://github.com/go-gitea/gitea/pull/38175))
  - Fix(actions): show run index in run view and fix summary graph height ([#38165](https://github.com/go-gitea/gitea/pull/38165))
  - Fix: csp ([#38162](https://github.com/go-gitea/gitea/pull/38162))
  - Fix(deps): update npm dependencies ([#38123](https://github.com/go-gitea/gitea/pull/38123))
  - Fix(mssql): expand legacy issue and comment long-text columns ([#38120](https://github.com/go-gitea/gitea/pull/38120))
  - Fix(packages): validate debian distribution and component names ([#38116](https://github.com/go-gitea/gitea/pull/38116))
  - Fix(packages): validate module version in goproxy ParsePackage ([#38104](https://github.com/go-gitea/gitea/pull/38104))
  - Fix(deps): update dependency esbuild to v0.28.1 [security] ([#38097](https://github.com/go-gitea/gitea/pull/38097))
  - Fix: git push hook post receive ([#38089](https://github.com/go-gitea/gitea/pull/38089))
  - Fix(ui): prevent commit status popup overflowing its row ([#38081](https://github.com/go-gitea/gitea/pull/38081))
  - Fix: validate gem name in rubygems parseMetadataFile ([#38061](https://github.com/go-gitea/gitea/pull/38061))
  - Fix: commit display name ([#38057](https://github.com/go-gitea/gitea/pull/38057))
  - Fix: csp regressions ([#38047](https://github.com/go-gitea/gitea/pull/38047))
  - Fix: api error message ([#38031](https://github.com/go-gitea/gitea/pull/38031))
  - Fix(deps): update npm dependencies ([#38029](https://github.com/go-gitea/gitea/pull/38029))
  - Fix: pgsql lint ([#38022](https://github.com/go-gitea/gitea/pull/38022))
  - Fix(indexer): fix assignee filters in issue search ([#38021](https://github.com/go-gitea/gitea/pull/38021))
  - Fix: various dropdown problems ([#38020](https://github.com/go-gitea/gitea/pull/38020))
  - Fix: refactor git error handling and make archive streaming handle non-existing commit id ([#38007](https://github.com/go-gitea/gitea/pull/38007))
  - Fix: raise git required version to 2.13 ([#37996](https://github.com/go-gitea/gitea/pull/37996))
  - Fix: remove "no-transfrom" from the cache-control header ([#37985](https://github.com/go-gitea/gitea/pull/37985))
  - Fix(deps): update module github.com/google/go-github/v87 to v88 ([#37971](https://github.com/go-gitea/gitea/pull/37971))
  - Fix: use committer time where ever possible as default ([#37969](https://github.com/go-gitea/gitea/pull/37969))
  - Fix(deps): update npm dependencies, remove nolyfill ([#37968](https://github.com/go-gitea/gitea/pull/37968))
  - Fix(deps): update go dependencies ([#37967](https://github.com/go-gitea/gitea/pull/37967))
  - Fix(pull): preserve squash message trailers and additional commit messages ([#37954](https://github.com/go-gitea/gitea/pull/37954))
  - Fix(deps): update module golang.org/x/image to v0.41.0 [security] ([#37904](https://github.com/go-gitea/gitea/pull/37904))
  - Fix: support ##[command] log prefix in action run UI ([#37882](https://github.com/go-gitea/gitea/pull/37882))
  - Fix(deps): update module github.com/google/go-github/v86 to v87 ([#37845](https://github.com/go-gitea/gitea/pull/37845))
  - Fix(deps): update npm dependencies ([#37844](https://github.com/go-gitea/gitea/pull/37844))
  - Fix(deps): update go dependencies ([#37841](https://github.com/go-gitea/gitea/pull/37841))
  - Fix(frontend): resolve Vite assets by manifest source path ([#37836](https://github.com/go-gitea/gitea/pull/37836))
  - Fix(locales): Replace hardcoded strings ([#37788](https://github.com/go-gitea/gitea/pull/37788))
  - Fix(packages): render markdown links relative to linked repo ([#37676](https://github.com/go-gitea/gitea/pull/37676))
  - Fix: persist mirror repository metadata ([#37519](https://github.com/go-gitea/gitea/pull/37519))
  - Fix cmd tests by mocking builtin paths ([#37369](https://github.com/go-gitea/gitea/pull/37369))
  - Add `form-fetch-action` to some forms, fix "fetch action" resp bug ([#37305](https://github.com/go-gitea/gitea/pull/37305))
  - Feat: execute post run cleanup when workflow is cancelled ([#37275](https://github.com/go-gitea/gitea/pull/37275))
  - Fix `relative-time` error and improve global error handler ([#37241](https://github.com/go-gitea/gitea/pull/37241))
  - Refactor flash message and remove SanitizeHTML template func ([#37179](https://github.com/go-gitea/gitea/pull/37179))

- TESTING
  - Test(e2e): fix race in pdf file render test ([#38380](https://github.com/go-gitea/gitea/pull/38380)) ([#38381](https://github.com/go-gitea/gitea/pull/38381))
  - Test: compare key file contents instead of `FileInfo` in `TestInitKeys` ([#38330](https://github.com/go-gitea/gitea/pull/38330)) ([#38331](https://github.com/go-gitea/gitea/pull/38331))
  - Test: speed up two tests ([#37905](https://github.com/go-gitea/gitea/pull/37905))
  - Test: Fix random failure test ([#37887](https://github.com/go-gitea/gitea/pull/37887))
  - Test: fix flaky `issue-comment` close test ([#37880](https://github.com/go-gitea/gitea/pull/37880))
  - Test: enable WAL for sqlite integration tests ([#37861](https://github.com/go-gitea/gitea/pull/37861))
  - Test: fix flaky `TestResourceIndex` and reduce its runtime ([#37847](https://github.com/go-gitea/gitea/pull/37847))
  - Test: run `TestAPIRepoMigrate` offline via a local clone source ([#37817](https://github.com/go-gitea/gitea/pull/37817))
  - Ci: shard tests and reduce redundant work ([#37618](https://github.com/go-gitea/gitea/pull/37618))
  - Test(e2e): run playwright via container ([#37300](https://github.com/go-gitea/gitea/pull/37300))
  - Remove external service dependencies in migration tests ([#36866](https://github.com/go-gitea/gitea/pull/36866))

- BUILD
  - Fix(actions): authenticate snapcraft before nightly remote build ([#38252](https://github.com/go-gitea/gitea/pull/38252))
  - Ci: cap Elasticsearch heap in db-tests ([#37816](https://github.com/go-gitea/gitea/pull/37816))
  - Build(snap): publish nightly version to snapcraft via actions ([#37814](https://github.com/go-gitea/gitea/pull/37814))
  - Ci: split pgsql shards into plain jobs, dedupe setup actions ([#37802](https://github.com/go-gitea/gitea/pull/37802))
  - Ci: narrow files-changed frontend filter ([#37749](https://github.com/go-gitea/gitea/pull/37749))
  - Ci: add `zizmor` to `lint-actions` ([#37720](https://github.com/go-gitea/gitea/pull/37720))
  - Chore: clean up "contrib" dir ([#37690](https://github.com/go-gitea/gitea/pull/37690))
  - Fix: snap build (main branch) ([#37685](https://github.com/go-gitea/gitea/pull/37685))
  - Ci: Also lint json5 files ([#37659](https://github.com/go-gitea/gitea/pull/37659))
  - Feat(editor): broaden language detection in web code editor ([#37619](https://github.com/go-gitea/gitea/pull/37619))
  - Build: update pnpm to v11 ([#37591](https://github.com/go-gitea/gitea/pull/37591))
  - Refactor(deps): migrate from `nektos/act` fork to `gitea/runner` ([#37557](https://github.com/go-gitea/gitea/pull/37557))
  - Refactor: lint bare `fill`/`stroke` colors, add vars for git graph color series ([#37543](https://github.com/go-gitea/gitea/pull/37543))
  - Update go js py dependencies ([#37525](https://github.com/go-gitea/gitea/pull/37525))
  - Ci: lint PR titles with commitlint ([#37498](https://github.com/go-gitea/gitea/pull/37498))
  - Chore: upgrade Go version in devcontainer image to 1.26 ([#37374](https://github.com/go-gitea/gitea/pull/37374))
  - Update GitHub Actions to latest major versions ([#37313](https://github.com/go-gitea/gitea/pull/37313))
  - Update go js dependencies ([#37312](https://github.com/go-gitea/gitea/pull/37312))
  - Fail vite build on rolldown warnings via NODE_ENV=test ([#37270](https://github.com/go-gitea/gitea/pull/37270))
  - Remove htmx ([#37224](https://github.com/go-gitea/gitea/pull/37224))
  - Replace custom Go formatter with `golangci-lint fmt` ([#37194](https://github.com/go-gitea/gitea/pull/37194))
  - Refactor htmx and fetch-action related code ([#37186](https://github.com/go-gitea/gitea/pull/37186))
  - Integrate renovate bot for all dependency updates ([#37050](https://github.com/go-gitea/gitea/pull/37050))
  - Build(sign): move to sigstore ([#38250](https://github.com/go-gitea/gitea/pull/38250))

- DOCS
  - Docs: update changelog for 1.26.3 & 1.26.4 ([#38178](https://github.com/go-gitea/gitea/pull/38178))
  - Docs: fix duplicated word in foreachref doc comment ([#38161](https://github.com/go-gitea/gitea/pull/38161))
  - Docs: Clarify criteria for becoming a merger ([#38113](https://github.com/go-gitea/gitea/pull/38113))
  - Docs: Publish TOC Election Result 2026 ([#38111](https://github.com/go-gitea/gitea/pull/38111))
  - Docs: mark openapi3 as autogenerated in attributes ([#37963](https://github.com/go-gitea/gitea/pull/37963))
  - Docs: add development setup guide ([#37960](https://github.com/go-gitea/gitea/pull/37960))

- MISC
  - Revert(sign): restore gpg ([#38251](https://github.com/go-gitea/gitea/pull/38251))
  - Refactor: replace legacy `delete-button` with `link-action` ([#38143](https://github.com/go-gitea/gitea/pull/38143))
  - Refactor(actions): read runner capabilities from proto field ([#38068](https://github.com/go-gitea/gitea/pull/38068))
  - Refactor(api): clarify APIError message usage and fix legacy lint error ([#38012](https://github.com/go-gitea/gitea/pull/38012))
  - Refactor: Use db.Get[] instead of db.GetEngine(ctx).Get(bean) to avoid zero value fetching wrong database record ([#37977](https://github.com/go-gitea/gitea/pull/37977))
  - Fix(deps): update go dependencies ([#37851](https://github.com/go-gitea/gitea/pull/37851))
  - Ci: Fix sync PR labels from the conventional-commit title ([#37784](https://github.com/go-gitea/gitea/pull/37784)) ([#37825](https://github.com/go-gitea/gitea/pull/37825))
  - Ci: tweak `files-changed`, add `free-disk-space` ([#37819](https://github.com/go-gitea/gitea/pull/37819))
  - Fix(deps): update module golang.org/x/crypto to v0.52.0 [security] ([#37806](https://github.com/go-gitea/gitea/pull/37806))
  - Test(e2e): add comment, release, star, PR and fork tests ([#37800](https://github.com/go-gitea/gitea/pull/37800))
  - Chore: simplify issue and pull request templates ([#37799](https://github.com/go-gitea/gitea/pull/37799))
  - Chore: Update giteabot to fix failure when backport ([#37789](https://github.com/go-gitea/gitea/pull/37789))
  - Fix(api): handle partial failures in push mirror synchronization gracefully ([#37782](https://github.com/go-gitea/gitea/pull/37782))
  - Fix(deps): update module gitlab.com/gitlab-org/api/client-go/v2 to v2.26.0 ([#37771](https://github.com/go-gitea/gitea/pull/37771))
  - Ci: split giteabot workflow ([#37770](https://github.com/go-gitea/gitea/pull/37770))
  - Fix(deps): update npm dependencies ([#37768](https://github.com/go-gitea/gitea/pull/37768))
  - Refactor(waitgroup): replace Add/Done goroutines with WaitGroup.Go ([#37764](https://github.com/go-gitea/gitea/pull/37764))
  - Fix(deps): update module google.golang.org/grpc to v1.81.1 ([#37762](https://github.com/go-gitea/gitea/pull/37762))
  - Ci: fix cache-related issues ([#37761](https://github.com/go-gitea/gitea/pull/37761))
  - Chore: fix tests ([#37760](https://github.com/go-gitea/gitea/pull/37760))
  - Fix(deps): update module github.com/google/go-github/v85 to v86 ([#37754](https://github.com/go-gitea/gitea/pull/37754))
  - Fix(deps): update npm dependencies ([#37753](https://github.com/go-gitea/gitea/pull/37753))
  - Fix(deps): update go dependencies ([#37752](https://github.com/go-gitea/gitea/pull/37752))
  - Chore(deps): update action dependencies ([#37751](https://github.com/go-gitea/gitea/pull/37751))
  - Fix(markup): wrap indented code blocks for the code-copy button ([#37748](https://github.com/go-gitea/gitea/pull/37748))
  - Chore(db): introduce db.Session and db.EngineMigration interfaces ([#37746](https://github.com/go-gitea/gitea/pull/37746))
  - Feat(web): also display PR counts in repo list ([#37739](https://github.com/go-gitea/gitea/pull/37739))
  - Refactor(glob): use strings.Builder for regexp compilation ([#37730](https://github.com/go-gitea/gitea/pull/37730))
  - Chore(doctor): remove four obsolete doctor check implementations ([#37728](https://github.com/go-gitea/gitea/pull/37728))
  - Refactor(org): simplify owner-team org repo creation logic ([#37727](https://github.com/go-gitea/gitea/pull/37727))
  - Refactor: move `workflowpattern` into `modules/actions` ([#37717](https://github.com/go-gitea/gitea/pull/37717))
  - Chore: clean up tests ([#37715](https://github.com/go-gitea/gitea/pull/37715))
  - Style: misc UI fixes ([#37691](https://github.com/go-gitea/gitea/pull/37691))
  - Ci: add shellcheck linter ([#37682](https://github.com/go-gitea/gitea/pull/37682))
  - Fix: catch and fix more lint problems ([#37674](https://github.com/go-gitea/gitea/pull/37674))
  - Fix(deps): update dependency mermaid to v11.15.0 [security], add e2e test ([#37662](https://github.com/go-gitea/gitea/pull/37662))
  - Fix(deps): update npm dependencies ([#37647](https://github.com/go-gitea/gitea/pull/37647))
  - Ci(renovate): update Go import paths on major bumps ([#37641](https://github.com/go-gitea/gitea/pull/37641))
  - Fix(deps): update go dependencies (major) ([#37639](https://github.com/go-gitea/gitea/pull/37639))
  - Chore(deps): update action dependencies (major) ([#37638](https://github.com/go-gitea/gitea/pull/37638))
  - Fix(deps): update module code.gitea.io/sdk/gitea to v0.25.0 ([#37637](https://github.com/go-gitea/gitea/pull/37637))
  - Fix(deps): update npm dependencies ([#37636](https://github.com/go-gitea/gitea/pull/37636))
  - Refactor(log): replace log.Critical with log.Error ([#37624](https://github.com/go-gitea/gitea/pull/37624))
  - Build(deps): bump fast-uri from 3.1.0 to 3.1.2 ([#37616](https://github.com/go-gitea/gitea/pull/37616))
  - Feat(oauth): Support AWS Cognito OAuth2 provider ([#37607](https://github.com/go-gitea/gitea/pull/37607))
  - Chore(deps): update action dependencies ([#37603](https://github.com/go-gitea/gitea/pull/37603))
  - Ci: allow `chore` type in PR title lint ([#37575](https://github.com/go-gitea/gitea/pull/37575))
  - Refactor: only reset a database table when the table's data was changed ([#37573](https://github.com/go-gitea/gitea/pull/37573))
  - Ci: increase renovate frequency and fix RENOVATE_ALLOWED_POST_UPGRADE_COMMANDS ([#37565](https://github.com/go-gitea/gitea/pull/37565))
  - Refactor: use modernc sqlite driver as default ([#37562](https://github.com/go-gitea/gitea/pull/37562))
  - Docs: fix 4 typos in CHANGELOG.md ([#37549](https://github.com/go-gitea/gitea/pull/37549))
  - Fix(deps): update go dependencies ([#37541](https://github.com/go-gitea/gitea/pull/37541))
  - Chore(deps): update action dependencies ([#37540](https://github.com/go-gitea/gitea/pull/37540))
  - Refactor pull request view (6) ([#37522](https://github.com/go-gitea/gitea/pull/37522))
  - Fix: redirect early CLI console logger to stderr ([#37507](https://github.com/go-gitea/gitea/pull/37507))
  - Refactor "flex-list" to "flex-divided-list" ([#37505](https://github.com/go-gitea/gitea/pull/37505))
  - Refactor compare diff/pull page (1) ([#37481](https://github.com/go-gitea/gitea/pull/37481))
  - Refactor pull request view (4) ([#37451](https://github.com/go-gitea/gitea/pull/37451))
  - Update 1.26.1 changelog in main ([#37442](https://github.com/go-gitea/gitea/pull/37442))
  - Refactor: use named `Permission` field in `Repository` struct instead of anonymous embedding ([#37441](https://github.com/go-gitea/gitea/pull/37441))
  - Refactor: serve site manifest via `/assets/site-manifest.json` endpoint ([#37405](https://github.com/go-gitea/gitea/pull/37405))
  - Remove IsValidExternalURL/IsAPIURL and use IsValidURL at call sites ([#37364](https://github.com/go-gitea/gitea/pull/37364))
  - Update `Block a user` form ([#37359](https://github.com/go-gitea/gitea/pull/37359))
  - Move review request functions to a standalone file ([#37358](https://github.com/go-gitea/gitea/pull/37358))
  - Feat(security): set X-Content-Type-Options: nosniff by default ([#37354](https://github.com/go-gitea/gitea/pull/37354))
  - Enable strict TypeScript, add `errorMessage` helper ([#37292](https://github.com/go-gitea/gitea/pull/37292))
  - Refactor frontend `tw-justify-between` layouts to `flex-left-right` ([#37291](https://github.com/go-gitea/gitea/pull/37291))
  - Update Nix flake ([#37284](https://github.com/go-gitea/gitea/pull/37284))
  - Fix Repository transferring page ([#37277](https://github.com/go-gitea/gitea/pull/37277))
  - Remove `SubmitEvent` polyfill ([#37276](https://github.com/go-gitea/gitea/pull/37276))
  - Remove dead code identified by `deadcode` tool ([#37271](https://github.com/go-gitea/gitea/pull/37271))
  - Upgrade go-git to v5.18.0 ([#37268](https://github.com/go-gitea/gitea/pull/37268))
  - Don't add useless labels which will bother changelog generation ([#37267](https://github.com/go-gitea/gitea/pull/37267))
  - Move heatmap to first-party code ([#37262](https://github.com/go-gitea/gitea/pull/37262))
  - Tests/integration: simplify code ([#37249](https://github.com/go-gitea/gitea/pull/37249))
  - Add pagination and search box to org teams list ([#37245](https://github.com/go-gitea/gitea/pull/37245))
  - Remove error returns from crypto random helpers and callers ([#37240](https://github.com/go-gitea/gitea/pull/37240))
  - Add `ExternalIDClaim` option for OAuth2 OIDC auth source ([#37229](https://github.com/go-gitea/gitea/pull/37229))
  - Refactor: simplify ParseCatFileTreeLine and catBatchParseTreeEntries ([#37210](https://github.com/go-gitea/gitea/pull/37210))
  - Refactor "htmx" to "fetch action" ([#37208](https://github.com/go-gitea/gitea/pull/37208))
  - Update go js py dependencies ([#37204](https://github.com/go-gitea/gitea/pull/37204))
  - Add comment for the design of "user activity time" ([#37195](https://github.com/go-gitea/gitea/pull/37195))
  - Remove outdated RunUser logic ([#37180](https://github.com/go-gitea/gitea/pull/37180))
  - Models/fixtures: add "DO NOT add more test data" comment to all yml fixture files ([#37150](https://github.com/go-gitea/gitea/pull/37150))
  - Update javascript dependencies ([#37142](https://github.com/go-gitea/gitea/pull/37142))
  - Update go dependencies ([#37141](https://github.com/go-gitea/gitea/pull/37141))
  - Frontport changelog of v1.26.0-rc0 ([#37138](https://github.com/go-gitea/gitea/pull/37138))
  - Introduce `ActionRunAttempt` to represent each execution of a run ([#37119](https://github.com/go-gitea/gitea/pull/37119))
  - Workflow Artifact Info Hover ([#37100](https://github.com/go-gitea/gitea/pull/37100))
  - Extend issue context popup beyond markdown content ([#36908](https://github.com/go-gitea/gitea/pull/36908))
  - Add bulk repository deletion for organizations ([#36763](https://github.com/go-gitea/gitea/pull/36763))
  - Feat: Add bypass allowlist for branch protection ([#36514](https://github.com/go-gitea/gitea/pull/36514))


## Contributors for this release

We thank all contributors who helped make this release possible!

* [@0xGREG](https://github.com/0xGREG)
* [@6543](https://github.com/6543)
* [@afahey03](https://github.com/afahey03)
* [@agyss](https://github.com/agyss)
* [@antialias](https://github.com/antialias)
* [@augustocbx](https://github.com/augustocbx)
* [@bircni](https://github.com/bircni)
* [@BLumia](https://github.com/BLumia)
* [@bn-zr](https://github.com/bn-zr)
* [@bytedream](https://github.com/bytedream)
* [@chethenry](https://github.com/chethenry)
* [@Chi-Iroh](https://github.com/Chi-Iroh)
* [@cyphercodes](https://github.com/cyphercodes)
* [@dawidgora](https://github.com/dawidgora)
* [@delvh](https://github.com/delvh)
* [@eliroca](https://github.com/eliroca)
* [@Exgene](https://github.com/Exgene)
* [@eyupcanakman](https://github.com/eyupcanakman)
* [@fwag](https://github.com/fwag)
* [@g7](https://github.com/g7)
* [@grafail](https://github.com/grafail)
* [@guanzi008](https://github.com/guanzi008)
* [@harryzcy](https://github.com/harryzcy)
* [@HarshMN2345](https://github.com/HarshMN2345)
* [@icyavocado](https://github.com/icyavocado)
* [@jasonlearst](https://github.com/jasonlearst)
* [@JoeGruffins](https://github.com/JoeGruffins)
* [@jorgeortiz85](https://github.com/jorgeortiz85)
* [@KalashThakare](https://github.com/KalashThakare)
* [@karthikbhandary2](https://github.com/karthikbhandary2)
* [@keshane](https://github.com/keshane)
* [@krjakbrjak](https://github.com/krjakbrjak)
* [@lavamini](https://github.com/lavamini)
* [@lunny](https://github.com/lunny)
* [@maximilize](https://github.com/maximilize)
* [@metiftikci](https://github.com/metiftikci)
* [@metsw24-max](https://github.com/metsw24-max)
* [@Mohit25022005](https://github.com/Mohit25022005)
* [@mohsek](https://github.com/mohsek)
* [@mtschoen](https://github.com/mtschoen)
* [@myers](https://github.com/myers)
* [@nschloe](https://github.com/nschloe)
* [@pandareen](https://github.com/pandareen)
* [@peyremorgan](https://github.com/peyremorgan)
* [@PineBale](https://github.com/PineBale)
* [@pisarz77](https://github.com/pisarz77)
* [@Pomidorry](https://github.com/Pomidorry)
* [@Powerscore](https://github.com/Powerscore)
* [@premsreelathasugeendran](https://github.com/premsreelathasugeendran)
* [@prettysunflower](https://github.com/prettysunflower)
* [@puni9869](https://github.com/puni9869)
* [@pycub](https://github.com/pycub)
* [@rootful](https://github.com/rootful)
* [@rremer](https://github.com/rremer)
* [@s3onghyun](https://github.com/s3onghyun)
* [@SaveTheRbtz](https://github.com/SaveTheRbtz)
* [@SAY-5](https://github.com/SAY-5)
* [@sebastianertz](https://github.com/sebastianertz)
* [@silverwind](https://github.com/silverwind)
* [@Sumit189](https://github.com/Sumit189)
* [@SuperSandro2000](https://github.com/SuperSandro2000)
* [@techknowlogick](https://github.com/techknowlogick)
* [@thatguyfig](https://github.com/thatguyfig)
* [@TheFox0x7](https://github.com/TheFox0x7)
* [@tht](https://github.com/tht)
* [@wxiaoguang](https://github.com/wxiaoguang)
* [@xingxing21](https://github.com/xingxing21)
* [@Zettat123](https://github.com/Zettat123)
* [@ZPascal](https://github.com/ZPascal)
