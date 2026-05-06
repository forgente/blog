---
date: 2026-05-05T23:00:00+02:00
authors:
  - "bircni"
title: "Gitea Runner 1.0.0 is released"
tags: ["release", "actions", "runner"]
coverImage: /img/runner-1.0.0-cover.svg
draft: false
---

We are happy to announce the release of **Gitea Runner 1.0.0**.

This is the first stable release of the official Gitea Actions runner under its new name. The project formerly known as `act_runner` has been renamed to **Gitea Runner**, with the repository now available at [gitea/runner](https://gitea.com/gitea/runner).

## Why the rename?

The original `act_runner` name reflected the project's early implementation history and its relationship with [nektos/act](https://github.com/nektos/act). Since then, Gitea Actions and the runner have grown into a core part of the Gitea ecosystem.

The new name makes the purpose clearer: this is the official runner for Gitea Actions.

Note: the last `act_runner` releases were on the `v0.6.x` line. **Gitea Runner `v1.0.0` is an intentional reset** and starts a new stable versioning scheme under the new name.

<!--more-->

## What changed?

The most visible changes are the project, binary, and container image names:

- Repository: [`gitea/runner`](https://gitea.com/gitea/runner)
- Binary: `gitea-runner`
- Download path: [`https://dl.gitea.com/gitea-runner/`](https://dl.gitea.com/gitea-runner/)
- Docker image: `gitea/runner`

For example, registering and starting a runner now looks like this:

```bash
./gitea-runner register
./gitea-runner daemon
```

Docker users can use the new image name:

```bash
docker run \
  -e GITEA_INSTANCE_URL=https://gitea.example.com \
  -e GITEA_RUNNER_REGISTRATION_TOKEN=<your_token> \
  -v /var/run/docker.sock:/var/run/docker.sock \
  --name gitea-runner \
  gitea/runner:1.0.0
```

## Configuration

Gitea Runner continues to support the familiar registration flow, while encouraging explicit YAML configuration for runner settings.

You can generate a starting configuration with:

```bash
./gitea-runner generate-config > config.yaml
```

Then pass it to the commands that load runner configuration:

```bash
./gitea-runner -c config.yaml register
./gitea-runner -c config.yaml daemon
./gitea-runner -c config.yaml cache-server
```

If you prefer an environment-only setup (no config file), the runner still supports the environment variables shown above (`GITEA_INSTANCE_URL` and `GITEA_RUNNER_REGISTRATION_TOKEN`). A config file is the recommended way to manage runner behavior going forward.

## Upgrade notes

If you already run `act_runner`, plan to update scripts, service files, Docker Compose files, Kubernetes manifests, and monitoring references to the new `gitea-runner` and `gitea/runner` names.

For many deployments, the migration is a straight rename. For example:

```diff
- act_runner daemon
+ gitea-runner daemon
```

```diff
- gitea/act_runner:0.2.x
+ gitea/runner:1.0.0
```

The old repository URL redirects to the new repository, but new documentation and release artifacts use the new naming.

As always, please test the new runner in your environment before rolling it out broadly, especially if your workflows depend on custom labels, Docker-in-Docker setups, rootless Docker, or external cache configuration.

## Download

Pre-built binaries are available from the [Gitea Runner downloads page](https://dl.gitea.com/gitea-runner/1.0.0/).

The release is also available from the [Gitea Runner release page](https://gitea.com/gitea/runner/releases/tag/v1.0.0).

## Thank you

Thank you to everyone who contributed code, testing, bug reports, documentation, and feedback while the runner matured from its first releases to 1.0.0.

We would also like to thank the [nektos/act](https://github.com/nektos/act) project and contributors, whose work continues to be an important part of the Gitea Actions runner.
