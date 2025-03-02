---
date: 2025-03-01T10:00:00+08:00
authors:
  - "techknowlogick"
title: "Turning It Up to 11: Gitea Helm Chart version 11 Release"
tags: ["helm", "kubernetes", "release", "announcement"]
draft: false
---

We're excited to announce the release of version 11 of the Gitea Helm Chart! This major version update brings important dependency updates, new features, and various improvements to enhance your Kubernetes-based Gitea deployments.

A big thank you to @justusbunsi and @pat-s for their continued leadership of the helm chart, and to the many folks from the community who have contributed to this release.
<!--more-->

## What's New in v11.0.0

### Breaking Changes

This release includes several major dependency updates that may require attention during upgrades:

- Updated Gitea to v1.23.4
- Updated Redis Cluster to v11
- Updated Redis to v20
- Updated PostgreSQL to v16
- Updated PostgreSQL-HA to v15

**Please note**: Don't miss the upgrade notes in the README's upgrading section before proceeding with the update.

### New Features

- **Act Runner Improvements**: You can now mount volumes for Gitea Actions runners
- **Service Monitor Enhancement**: Added support for bearer token authentication on metrics endpoints

### Bug Fixes

- Fixed node selector values by properly quoting them
- Improved performance by setting GOMAXPROCS

## Docker Registry Updates

In line with our [recent announcement](/docker-registry-update/), the Helm chart maintenance has been updated to use our `docker.gitea.com` registry URLs. The README has also been updated with installation instructions for the new registry.

## Upgrading

When upgrading from a previous version, pay special attention to the PostgreSQL and Gitea major updates. Detailed upgrade instructions are available in the README file of the Helm chart repository.

## Known Issues

This release still has the issue of disabling Gitea Actions by default. This feature should be enabled by default to match the vanilla Gitea experience. The issue is being tracked as [#731](https://gitea.com/gitea/helm-chart/issues/731).

## Where to Get It

You can install the Helm chart using the following command:

```bash
helm repo add gitea https://dl.gitea.com/charts/
helm repo update
helm install gitea gitea/gitea --version 11.0.0
```

Or using the new registry:

```bash
helm install gitea oci://docker.gitea.com/charts/gitea --version 11.0.0
```

## Resources

- [Full Release Notes](https://gitea.com/gitea/helm-chart/releases/tag/v11.0.0)
- [Gitea Repository](https://gitea.com/gitea/helm-chart)
- [Gitea Documentation](https://docs.gitea.com/installation/install-on-kubernetes)

As always, we appreciate feedback from our community to help us improve Gitea. If you encounter any issues with this release, please report them on our [issue tracker](https://gitea.com/gitea/helm-chart/issues). 