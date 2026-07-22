---
date: 2026-07-21T00:00:00+03:00
authors:
  - "forgente"
title: "Forgente 2.0.0: the hard fork, and Forgente-native versioning"
tags: ["release", "forgente"]
draft: false
---

Forgente **v2.0.0** is out — the first release cut from Forgente's own main
line. It marks the point where Forgente stops being a rebuild of Gitea and
becomes its own project: its own module path, its own runtime identity, and
its own version numbers, while staying a drop-in for existing Gitea
deployments on the wire.

<!--truncate-->

Forgente is a self-hosted software forge — Git hosting with issue tracking,
code review, project management, wikis, a package registry, and CI (Actions).
It began as a fork of [Gitea](https://github.com/go-gitea/gitea) and shipped
two releases (`v1.26.4-1`, `v1.27.0-1`) that tracked upstream one-to-one. With
this release, the fork is complete.

## Why "2.0.0", and where 1.x went

Until now, Forgente versions were `<upstream>-<forgente build>`: `1.27.0-1`
meant "the first Forgente build of Gitea 1.27.0." That scheme couldn't
survive a hard fork — Forgente's code no longer maps one-to-one onto a Gitea
release, so pinning our version to theirs would be dishonest.

From here, Forgente uses **its own semantic versioning**, starting at
**v2.0.0**. The jump to a major is deliberate: the cutover changes
operator-facing surfaces (environment variables, container paths, git hooks),
so it earns a major under semver's own rules. The old `v1.x` tags remain valid
history — they're the pre-fork releases — but the version line is Forgente's
now.

The upstream baseline for v2.0.0 is Gitea `main` as of 2026-07-21 (our last
sync merge), which includes the changes landed upstream since Gitea 1.27.0.

## What changes for operators

Most of the fork is a rename, done carefully so existing installs keep
working. **Read the
[migration guide](https://docs.forgente.com/administration/hard-fork-migration)
before upgrading** — the short version:

- **Environment variables** are now `FORGENTE_*`. The old `GITEA_*` names are
  still honored with a one-time deprecation warning, and git-hook subprocess
  env is emitted under both prefixes, so nothing breaks on day one.
- **Container layout**: the binary lives at `/app/forgente/forgente`, with a
  `/app/gitea` compatibility symlink. Rootless images move their volumes to
  `/var/lib/forgente` and `/etc/forgente` — **this volume remap is a manual
  step**, covered in the guide. The root image keeps `/data/gitea`.
- **Git delegate hooks** were renamed `gitea` → `forgente`. Run
  `forgente admin regenerate hooks` once after upgrading to clear the legacy
  files.
- **systemd** units are now `forgente.service`; disable the old `gitea` unit
  and enable the new one.

## What deliberately stays Gitea-compatible

The rename stops at the wire. Everything the surrounding ecosystem depends on
keeps its Gitea name **on purpose**, so your existing tools work unchanged:

- `X-Gitea-*` webhook headers and the `gitea` webhook type
- the `GITEA_TOKEN` Actions secret
- the `GITEA__section__key` config-env prefix (the new
  `FORGENTE__section__key` prefix is accepted alongside it)
- the REST API surface

That means [`tea`](https://gitea.com/gitea/tea), the Gitea SDKs, and
`act_runner` talk to Forgente with no changes.

## How to install

Container:

```bash
docker run -p 3000:3000 -p 2222:22 forgente/forgente:2.0.0
```

Images are on [Docker Hub](https://hub.docker.com/r/forgente/forgente) and
[GHCR](https://github.com/forgente/forgente/pkgs/container/forgente) as
`latest`, `2`, `2.0`, `2.0.0` (plus `-rootless` variants). If you deploy with
Helm, use the chart published alongside v2.0.0 or later — it sets the
`FORGENTE_*` env the new rootless image expects.

Binaries for every platform are on the
[downloads page](https://dl.forgente.com/forgente/2.0.0/) and attached to the
[GitHub release](https://github.com/forgente/forgente/releases/tag/v2.0.0),
each with SHA-256 checksum, sigstore bundle, and GPG signature (key
`67129BAD57A2C8D2186032489D6FD2FD6E0B9BA5`,
`Forgente <maintainers@forgente.com>`). The snap is on the stable channel:
`snap install forgente`.

A patch, **v2.0.1**, is already out: it makes the root container image set
`FORGENTE_CUSTOM` internally so the server stops logging deprecation warnings
against its own baked-in defaults. No action beyond bumping the image pin —
your volumes and hooks are untouched.

## Tracking upstream after the fork

Forgente no longer merges Gitea wholesale. A daily maintainer-side watch
follows upstream security advisories and patch tags on the release lines we've
shipped from; each one becomes a triage issue, and fixes land as reviewed
cherry-picks. Upstream security fixes are never ignored — the mechanism just
became deliberate instead of automatic.

## A note on this blog

Starting with this post, the Forgente blog publishes **only Forgente's own
writing**. Earlier entries here were mirrored from the upstream Gitea blog
while we stood up the infrastructure; those belong to the Gitea project and
live at [blog.gitea.com](https://blog.gitea.com). From here forward, what you
read on blog.forgente.com is Forgente's.

## Thanks

Forgente exists because Gitea is excellent. Our thanks to the Gitea
maintainers and contributors for the project this fork is built on — and for
the fixes that will keep flowing into Forgente through the security picks
ahead.
