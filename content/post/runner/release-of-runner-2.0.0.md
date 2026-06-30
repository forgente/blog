---
date: 2026-06-30T10:00:00+02:00
authors:
  - "Zettat123"
  - "bircni"
title: "Gitea Runner 2.0.0 is released"
tags: ["release", "actions", "runner"]
coverImage: /img/runner-2.0.0-cover.svg
draft: false
---

We are happy to announce the release of **Gitea Runner 2.0.0**.

This release brings job summaries, improved cancellation handling, job-level workflow syntax that was previously ignored, and a long list of reliability fixes since the 1.0.0 stable release.

Several headline features in 2.0.0 pair with **Gitea 1.27** on the server side. The runner remains wire-compatible with older Gitea versions; when the server does not advertise a capability, the runner simply skips the related feature.

<!--more-->

## Highlights in 2.0.0

### Job summaries

Workflow steps can now write to `GITHUB_STEP_SUMMARY`, and the runner uploads the rendered markdown when Gitea advertises support. Summaries appear in the Actions run view alongside job logs.

:::info
**Requires Gitea 1.27** for storing and displaying summaries. On older Gitea versions the runner skips the upload when the server does not advertise the `job-summary` capability.
:::

### Cancellation and cleanup

Cancellation handling is substantially improved:

- The runner advertises a `cancelling` capability so Gitea can use a transitional **Cancelling** state before a job is finalized as cancelled.
- Post steps and `if: always()` / `if: cancelled()` main steps now run on cancellation, matching GitHub Actions behavior.
- Unix and Windows step process trees are torn down reliably when a job is cancelled, avoiding hung runners.

:::info
**Requires Gitea 1.27** for the transitional **Cancelling** job state and capability negotiation. The runner remains wire-compatible with older servers; without Gitea 1.27, cancellation still works but without the full server-side semantics.
:::

### Job-level workflow syntax

Two `jobs.<job_id>` fields that were parsed from YAML but silently ignored are now implemented:

- **`timeout-minutes`** — applies a deadline around the entire job (container start, pre-steps, main steps, and post-steps). Supports expression interpolation. Runner-only; no Gitea upgrade required.
- **`continue-on-error`** — when a job is allowed to fail, dependent jobs gated on `if: success()` still run, matching GitHub Actions semantics.

:::info
**Requires Gitea 1.27** for workflow run aggregation that treats tolerated job failures as success for `needs`.
:::

### Post-task host hook

A new optional `runner.post_task_script` setting runs a host executable after each task's built-in cleanup (post steps, container teardown, bind-workdir removal). This is useful for pruning Docker images, vacuuming ephemeral disks, or resetting VM state between jobs. See the [post-task script documentation](https://gitea.com/gitea/runner/src/branch/main/docs/post-task-script.md) for lifecycle details and timeout behavior.

### Other runner features

- **`ssh://` action URLs** — clone actions over SSH in addition to HTTPS and HTTP.
- **Shallow action clones** — remote actions are shallow-cloned by default (`runner.action_shallow_clone`, default `true`), with automatic fallback to a full clone when needed.
- **IPv6 container networking** — `container.options.network.enable_ipv6` controls IPv6 for job network creation.
- **Job container volume interpolation** — `container.volumes` entries now support expression interpolation.

## Breaking change

**Docker pull credentials:** Gitea Runner no longer implicitly uses `DOCKER_USERNAME` and `DOCKER_PASSWORD` workflow secrets for image pulls ([#1007](https://gitea.com/gitea/runner/pulls/1007)). These names are commonly used for registry login during image pushes, and sending them to every pull caused authentication failures against Docker Hub.

If you relied on the old implicit behavior, migrate to explicit credentials:

```yaml
jobs:
  build:
    container:
      image: registry.example.com/image:tag
      credentials:
        username: ${{ secrets.REGISTRY_USERNAME }}
        password: ${{ secrets.REGISTRY_PASSWORD }}
```

For private Docker actions or service containers, use `credentials` on the service definition, or run `docker login` on the runner host before jobs start.

## Upgrade notes

- Replace `gitea/runner:1.0.x` (or an older tag) with `gitea/runner:2.0.0` in Docker Compose, Kubernetes manifests, and service units.
- Review workflows that use `DOCKER_USERNAME` / `DOCKER_PASSWORD` for pulls (see breaking change above).
- If you use `continue-on-error` at the job level, upgrade Gitea to 1.27 so workflow results reflect the intended semantics.
- Test cancellation and `always()` cleanup steps in a staging environment before rolling out broadly.

## Download

Pre-built binaries are available from the [Gitea Runner downloads page](https://dl.gitea.com/gitea-runner/2.0.0/).

The release is also available from the [Gitea Runner release page](https://gitea.com/gitea/runner/releases/tag/v2.0.0).

## Thank you

Thank you to everyone who contributed code, testing, bug reports, documentation, and feedback since the 1.0.0 release.

---

## Changelog

### [2.0.0](https://gitea.com/gitea/runner/releases/tag/v2.0.0) - 2026-06-30

* BREAKING
  * Stop implicitly using `DOCKER_USERNAME`/`DOCKER_PASSWORD` secrets for image pulls ([#1007](https://gitea.com/gitea/runner/pulls/1007))

* FEATURES
  * Upload job summary when Gitea advertises support — **requires Gitea 1.27** ([#917](https://gitea.com/gitea/runner/pulls/917))
  * Complete runner-side cancellation handling — **pairs with Gitea 1.27** ([#1016](https://gitea.com/gitea/runner/pulls/1016))
  * Enable `jobs.<job_id>.timeout-minutes` ([#1032](https://gitea.com/gitea/runner/pulls/1032))
  * Enable `jobs.<job_id>.continue-on-error` — **requires Gitea 1.27 for workflow aggregation** ([#1032](https://gitea.com/gitea/runner/pulls/1032))
  * Add optional `runner.post_task_script` hook after task cleanup ([#1026](https://gitea.com/gitea/runner/pulls/1026))
  * Support `ssh://` action URLs ([#1035](https://gitea.com/gitea/runner/pulls/1035))
  * Shallow clone action repositories by default ([#1053](https://gitea.com/gitea/runner/pulls/1053))
  * IPv6 options for network container creation ([#1029](https://gitea.com/gitea/runner/pulls/1029))

* BUGFIXES
  * Run `always()`/`cancelled()` and post steps correctly on cancellation ([#1043](https://gitea.com/gitea/runner/pulls/1043))
  * Kill Unix step process group on cancel to avoid hang ([#1025](https://gitea.com/gitea/runner/pulls/1025))
  * Composite nested `uses:` actions use the clone token ([#1041](https://gitea.com/gitea/runner/pulls/1041))
  * Namespace local docker action image tags per repository ([#1051](https://gitea.com/gitea/runner/pulls/1051))
  * Interpolate job `container.volumes` ([#1036](https://gitea.com/gitea/runner/pulls/1036))
  * Prevent loss of step log output at end of step ([#1028](https://gitea.com/gitea/runner/pulls/1028))
  * Bound host-environment cleanup and reclaim leaked scratch dirs ([#1024](https://gitea.com/gitea/runner/pulls/1024))
  * Guard `SetJobError` against missing job-error container ([#1050](https://gitea.com/gitea/runner/pulls/1050))
  * Do not update cached actions with stale origin URL ([#1014](https://gitea.com/gitea/runner/pulls/1014))

### [1.0.8](https://gitea.com/gitea/runner/releases/tag/v1.0.8) - 2026-06-02

* BUGFIXES
  * Kill Windows step process tree on cancel to avoid hang ([#1011](https://gitea.com/gitea/runner/pulls/1011))

### [1.0.7](https://gitea.com/gitea/runner/releases/tag/v1.0.7) - 2026-05-29

* BUGFIXES
  * Re-validate cached container id before reuse ([#1003](https://gitea.com/gitea/runner/pulls/1003))
  * Support multiline secret masking ([#1001](https://gitea.com/gitea/runner/pulls/1001))
  * Fix matrix-job data races and outputs ([#994](https://gitea.com/gitea/runner/pulls/994))
  * Deliver cancel ack and reap leftover Windows job processes ([#996](https://gitea.com/gitea/runner/pulls/996))
  * Respect configured log level for job log forwarding ([#989](https://gitea.com/gitea/runner/pulls/989))

### [1.0.6](https://gitea.com/gitea/runner/releases/tag/v1.0.6) - 2026-05-22

* BUGFIXES
  * Clean up job network and container when container start fails ([#986](https://gitea.com/gitea/runner/pulls/986))

### [1.0.5](https://gitea.com/gitea/runner/releases/tag/v1.0.5) - 2026-05-21

* FEATURES
  * Add `cache.offline_mode` to reuse cached actions without fetching ([#966](https://gitea.com/gitea/runner/pulls/966))

* BUGFIXES
  * Remove stale Gitea 1.20 compatibility shims ([#978](https://gitea.com/gitea/runner/pulls/978))

### [1.0.4](https://gitea.com/gitea/runner/releases/tag/v1.0.4) - 2026-05-18

* FEATURES
  * Make pseudo-TTY allocation opt-in ([#961](https://gitea.com/gitea/runner/pulls/961))

* BUGFIXES
  * Fix token use with schemaless Gitea instance ([#977](https://gitea.com/gitea/runner/pulls/977))
  * Fix host cleanup, volume allowlist, cache upload, and action host edge cases ([#970](https://gitea.com/gitea/runner/pulls/970))
  * Support env-file lines larger than 64 KiB ([#974](https://gitea.com/gitea/runner/pulls/974))
  * Respect proxy env vars in runner client ([#962](https://gitea.com/gitea/runner/pulls/962))
  * Return early when parallel executor length is zero ([#960](https://gitea.com/gitea/runner/pulls/960))
  * Switch Docker dependencies to `moby/moby` ([#943](https://gitea.com/gitea/runner/pulls/943))

* ENHANCEMENTS
  * Add OCI `source` and `version` labels to images ([#975](https://gitea.com/gitea/runner/pulls/975))

### [1.0.3](https://gitea.com/gitea/runner/releases/tag/v1.0.3) - 2026-05-12

* BUGFIXES
  * Isolate per-task runner envs ([#959](https://gitea.com/gitea/runner/pulls/959))
  * Ensure `dbfs_data` is cleaned up after task completion ([#952](https://gitea.com/gitea/runner/pulls/952))
  * Preserve cache key case to stop redundant uploads ([#947](https://gitea.com/gitea/runner/pulls/947))

### [1.0.2](https://gitea.com/gitea/runner/releases/tag/v1.0.2) - 2026-05-08

* FEATURES
  * Remove emojis from runner logging; add `Starting job container` log group ([#940](https://gitea.com/gitea/runner/pulls/940))

* BUGFIXES
  * Overwrite read-only files when copying action directories ([#942](https://gitea.com/gitea/runner/pulls/942))
  * Serialize action-cache reads to prevent worktree race ([#938](https://gitea.com/gitea/runner/pulls/938))
  * Add `apparmor=rootlesskit` in `security_opt` ([#937](https://gitea.com/gitea/runner/pulls/937))

### [1.0.1](https://gitea.com/gitea/runner/releases/tag/v1.0.1) - 2026-05-07

* BUGFIXES
  * Re-fetch cached reusable workflow on every run ([#930](https://gitea.com/gitea/runner/pulls/930))
