---
date: 2023-08-24T10:00:00+08:00
authors: 
  - "techknowlogick"
title: "Evolution of the Gitea downloads site"
tags: ["infrastructure", "bts"]
draft: false
---

The [Gitea downloads site](https://dl.gitea.com) has grown over the project's many years and has gone through several stages. This post will be a series to share the history of behind-the-scenes infrastructure operations. This post is meant as an interesting read rather than a guide as to what to do. As with every choice, trade-offs are made, whether mentioned or not.

When the project started, the downloads site was hosted on the same virtual machine as the demo website and served with a simple file index with the files stored locally on the server. This served us well for quite some time until the amount of data we stored grew.

We then had to look for what was next. An option we could've gone with was to mount an external block storage device to the VM and increase the size as time went on, or, and this is what we went with, was to move the data to be stored in an S3 compatible storage. Since S3 doesn't offer a friendly file index listing, the S3 bucket was mounted to the virtual machine using a fuse-driver and the same web server file index we had previously.

This was also alright for some time, at least until it started serving more and more traffic. Even though there was a CDN, there was still enough traffic making it to the virtual machine, and with the increased traffic, the S3 file system mount disconnected enough to be troublesome and require intervention. This was when [techknowlogick](https://gitea.com/techknowlogick) (a member of the Technical Oversight Committee) wrote a [caddy plugin](https://github.com/techknowlogick/caddy-s3browser) to list files from S3. Instead of directly serving the files from the VM, the links to the files were redirected to a CDN in front of the S3 bucket, and Caddy called the S3 API directly to generate the file index, so there were no file system mount troubles to deal with.

This was great, set and forget, except for a pesky VM that needed maintenance, patching, and more. So every so often, the downloads site needed to go down so things could get patched. A second VM could have been used to load balance traffic, or any number of possible other solutions could have been chosen, but that would've just added to the overall maintenance burden and cost. So instead of dealing with servers, we went "serverless" (yes, there are still servers, but someone else is dealing with them). The caddy plugin to generate file indexes was replaced with a "serverless"-function that queries the S3 Bucket directory and a CDN that has direct integration with the S3 Bucket so it can serve the files also directly but will fallback to the file listing function if a file isn't found for that route. The CDN has aggressive caching, so the file indexes only need to be generated once. Also, when files are uploaded to the S3 bucket, another function listens for file upload events and clears the cache on a targeted basis to not completely clear the cache.

The [serverless functions](https://gitea.com/gitea/infrastructure/src/branch/main/dl-gitea-com/lambda) and [infrastructure overview](https://gitea.com/gitea/infrastructure/src/branch/main/dl-gitea-com/image.png) have been open-sourced in case any other project wants to poke at what we've done and use it for themselves. Please feel free to hop into [our chat](https://docs.gitea.com/help/support) and ask any questions.

We want to thank all the people throughout the years who helped keep this up and running by providing operational support, feedback and advice.