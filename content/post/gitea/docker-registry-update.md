---
date: 2025-02-28T10:00:00+08:00
authors:
  - "techknowlogick"
title: "Gitea adds alternative URLs for Docker Images"
tags: ["docker", "announcement"]
draft: false
---

With the upcoming changes to Docker Hub's rate limits, we are adding alternative URLs for Gitea Docker images. Both the existing Docker Hub URLs and our new URLs will remain functional, giving you flexibility in how you access our images while helping mitigate potential rate limit impacts.

<!--more-->

## Available Options

You can now pull Gitea Docker images from either:

- Docker Hub (existing):
  - `gitea/gitea:VERSION`
  - `giteacharts/gitea:VERSION`

- New Registry (new):
  - `docker.gitea.com/gitea:VERSION`
  - `docker.gitea.com/charts/gitea:VERSION`

Both sources will continue to be maintained and will serve identical images, although we strongly recommend using the new registry URLs to help avoid potential rate limit impacts.

## What This Means For You

This change adds flexibility but requires no immediate action. You can continue using the existing Docker Hub URLs, or optionally switch to our self-hosted registry URLs in your deployment scripts.

- Both registry options serve identical images
- Switching to `docker.gitea.com` URLs may help you avoid Docker Hub rate limits
- The new URLs are served from a different IP address range, so you may need to update firewall rules if switching in certain locked-down environments

## Acknowledgments

We'd like to thank [Xe Iaso](https://xeiaso.net) who notified us of the change and wrote a [detailed guide](https://tigrisdata.com/blog/pullthru-cache/) on setting up a pull-through Docker cache to help mitigate any impacts from rate limit changes.

We would also like to thank Docker for their software and hub that have supported us throughout the years. The changes they are making are understandable, and we understand that achieving the right balance is a difficult task.

## Options for Other Open Source Projects in the same situation

For open source projects whose users may also be impacted by these Docker Hub changes:

- Docker offers an [open source sponsorship program](https://www.docker.com/community/open-source/application/) that provides increased limits and other benefits
- Consider self-hosting Gitea, which has a built-in Docker registry (along with support for 20+ other package types), or signing up for a [Gitea Cloud](https://cloud.gitea.com) dedicated instance.

As always, we remain committed to providing reliable and accessible tools for the open source community.
