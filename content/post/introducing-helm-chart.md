---
date: "2020-09-07T20:00:00+00:00"
author: "techknowlogick"
title: "Introducing an Official Helm Chart for Gitea"
tags: ["release", "helm-chart", "deployment"]
draft: false
---

A question that we are often asked is "How can I run Gitea on Kubernetes", previously we had pointed users to a YAML file with a fairly standard kubernetes deployment, however this required a lot of configuration effort by the user in terms of setting up a database, managing storage, and more. Thanks to the helm chart started by [@jfelten](https://github.com/jfelten), which was then continued by [@cdrage](https://github.com/cdrage), and [NOVUM-RGI](https://github.com/novumrgi), that work has now been transitioned over to official support status and is being maintained by some of the original authors, as well as other Gitea maintainers.

We are proud to release the [Official Gitea Helm Chart](https://gitea.com/gitea/helm-chart/).

<!--more-->

To show you how quick it is to install Gitea using our helm chart is, here is a getting started guide that also includes creating the cluster from scratch.

First you'll need to [install KinD](https://github.com/kubernetes-sigs/kind#installation-and-usage), and create a cluster with it using `kind create cluster` and tell your local tools where they can get the configuration to connect to your newly created cluster using `export KUBECONFIG="$(kind get kubeconfig-path --name="kind")` 

Now that your cluster has been created, you'll need to tell helm where it can look for the helm chart using `helm repo add gitea-charts https://dl.gitea.io/charts/` and to ensure that helm has the latest updates you can have it pull down the latest repo changes with `helm repo update`.

Finally, you can install Gitea using the default configuration with `helm install gitea gitea-charts/gitea`. There are many [configuration options](https://gitea.com/gitea/helm-chart/#configuration) available including setting up an ingress, using an external database, and much more!
