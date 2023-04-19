---
date: "2023-03-31T10:00:00+08:00"
author: "wolfogre"
title: "Hacking on Gitea Actions"
tags: ["actions", "feature", "tutorial"]
draft: false
---

Gitea 1.19.0 includes a new feature called Gitea Actions.
This is a built-in CI system of Gitea, similar and compatible to GitHub Actions.

This blog will explain some details about Gitea Actions, including how to use it and how it works.
It should be noted that the information presented pertains to the current situation, and may become outdated in the future.

<!--more-->

## Usage

In [Feature Preview: Gitea Actions](https://blog.gitea.io/2022/12/feature-preview-gitea-actions/), we discussed how to try it out.
However, some things have changed since then, so let's go over it again.

### Set up Gitea

First of all, you need a Gitea instance with a version of 1.19.0 or higher.
You can follow the [documentation](https://docs.gitea.io/en-us/) to set up a new instance or upgrade your existing one.
It doesn't matter how you run Gitea if you want to enable Actions.

Actions are disabled by default (as they are still an feature-in-progress), so you need to add the following to the configuration file to enable it:

```ini
[actions]
ENABLED=true
```

If you want to learn more or encounter any problems while configuring it, please refer to the [Configuration Cheat Sheet](https://docs.gitea.io/en-us/config-cheat-sheet/#actions-actions).

### Set up runner

We have a basic implementation of a Gitea Actions runner called [act runner](https://gitea.com/gitea/act_runner).
It is based on the [act](https://github.com/nektos/act) project.

Currently, the only way to install act runner is by compiling it yourself, or by using one of the [pre-built binaries](http://dl.gitea.com/act_runner).
There is no Docker image or other type of package management yet.
At the moment, act runner should be run from the command line.
Of course, you can also wrap this binary in something like a system service, supervisord, or Docker container.

Before proceeding any further, we suggest running it as a command line to ensure that it works with your environment, especially if you are running a runner on your local host.
In order to avoid consuming too many resources and affecting the Gitea instance, it is also recommended to start runners on separate machines from the Gitea instance.

Also, make sure that Docker is installed.
While it is not strictly necessary, it is common usage.
We will discuss this later.

Before running a runner, you should first register it to your Gitea instance using the following command:

```bash
./act_runner register --no-interactive --instance <instance> --token <token>
```

There are two arguments required, `instance` and `token`.

`instance` refers to the address of your Gitea instance, like `http://192.168.8.8:3000` or `https://gitea.com`.
The runner and job containers (which are started by the runner to execute jobs) will connect to this address.
This means that it could be different from the `ROOT_URL` of your Gitea instance, which is configured for web access.
It is always a bad idea to use a loopback address such as `127.0.0.1` or `localhost`, as we will discuss later.
If you are unsure which address to use, the LAN address is usually the right choice.

`token` is used for authentication and identification, such as `P2U1U0oB4XaRCi8azcngmPCLbRpUGapalhmddh23`.
It is one-time use only and cannot be used to register multiple runners.
You can obtain tokens from `your_gitea.com/admin/runners`.

![register runner](/demos/hacking-actions/register-runner.png)

If you cannot find this page, it is likely that you have a wrong version of Gitea or have not enabled Actions.
Please check the steps above.

After registering, a new file named `.runner` will appear in the current directory.
This file stores the registration information.
Please do not edit it manually.
If this file is missing or corrupted, you can simply remove it and register again.

Finally, it's time to start the runner.

```bash
./act_runner daemon
```

And you can see the new runner in the management page:

![view runner](/demos/hacking-actions/view-runner.png)

You can find more information by visiting [gitea/act_runner](https://gitea.com/gitea/act_runner).

### Use Actions

Even if Actions is enabled for the Gitea instance, repositories still disable Actions by default.

To enable it, go to the settings page of your repository and enable it:

![enable actions](/demos/hacking-actions/enable-actions.png)

The next steps may be rather complicated.
You will need to study [the workflow syntax](https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions) for Actions and write the workflow files you want.

However, we can just start from a simple demo:

```yaml
name: Gitea Actions Demo
run-name: ${{ gitea.actor }} is testing out Gitea Actions 🚀
on: [push]
jobs:
  Explore-Gitea-Actions:
    runs-on: ubuntu-latest
    steps:
      - run: echo "🎉 The job was automatically triggered by a ${{ gitea.event_name }} event."
      - run: echo "🐧 This job is now running on a ${{ runner.os }} server hosted by Gitea!"
      - run: echo "🔎 The name of your branch is ${{ gitea.ref }} and your repository is ${{ gitea.repository }}."
      - name: Check out repository code
        uses: actions/checkout@v3
      - run: echo "💡 The ${{ gitea.repository }} repository has been cloned to the runner."
      - run: echo "🖥️ The workflow is now ready to test your code on the runner."
      - name: List files in the repository
        run: |
          ls ${{ gitea.workspace }}
      - run: echo "🍏 This job's status is ${{ gitea.status }}."
```

You can upload it as a file with the extension `.yaml` in the directory `.gitea/workflows/` of the repository, for example `.gitea/workflows/demo.yaml`.
You might notice that this is fairly similar from the [Quickstart for GitHub Actions](https://docs.github.com/en/actions/quickstart).
That is because  Gitea Actions is designed to be compatible with GitHub Actions wherever possible.

Be careful, the demo file contains some emojis.
Please make sure your database supports them, especially when using MySQL.
If the charset is not `utf8mb4`, errors will occur, such as `Error 1366 (HY000): Incorrect string value: '\\xF0\\x9F\\x8E\\x89 T...' for column 'name' at row 1`.
See [Database Preparation](https://docs.gitea.io/en-us/database-prep/#mysql).
Alternatively, you can use this demo without emojis:

```yaml
name: Gitea Actions Demo
run-name: ${{ gitea.actor }} is testing out Gitea Actions
on: [push]
jobs:
  Explore-Gitea-Actions:
    runs-on: ubuntu-latest
    steps:
      - run: echo "The job was automatically triggered by a ${{ gitea.event_name }} event."
      - run: echo "This job is now running on a ${{ runner.os }} server hosted by Gitea!"
      - run: echo "The name of your branch is ${{ gitea.ref }} and your repository is ${{ gitea.repository }}."
      - name: Check out repository code
        uses: actions/checkout@v3
      - run: echo "The ${{ gitea.repository }} repository has been cloned to the runner."
      - run: echo "The workflow is now ready to test your code on the runner."
      - name: List files in the repository
        run: |
          ls ${{ gitea.workspace }}
      - run: echo "This job's status is ${{ gitea.status }}."
```

The line `on: [push]` indicates that the workflow will be triggered when you push commits to this repository.
However, when you upload the YAML file, it also pushes a commit, so you should see a new task in the Actions tab.

![view job](/demos/hacking-actions/view-job.png)

Great job! You have successfully started working with Actions.

### Q&A

#### Why is Actions not enabled by default?

We know it's annoying to enable Actions for the whole instance and each repository one by one, but not everyone likes or needs this feature.
We believe that more work needs to be done to improve Gitea Actions before it deserves any further special treatment.

#### Should we use `${{ github.xyz }}` or `${{ gitea.xyz }}`  in workflow files?

You can use `github.xyz` and Gitea will work fine.
As mentioned, Gitea Actions is designed to be compatible with GitHub Actions.
However, we recommend using `gitea.xyz` in case Gitea adds something that GitHub does not have to avoid different kinds of secrets in your workflow file (and because you are using this workflow on Gitea, not GitHub).
Still, this is completely optional since both options have the same effect at the moment.

#### Is it possible to register runners for a specific organization or a repository?

Yes, it depends on where you obtain the registration token.

- `/admin/runners`: This is for instance-level runners, which will run jobs for all repositories in the instance.
- `/org/<org>/settings/runners`: This is for organization-level runners, which will run jobs for all repositories in the organization.
- `/<owner>/<repo>/settings/runners`: This is for repository-level runners, which will run jobs for the repository they belong to.

If you cannot see the settings page, please make sure that you have the right permissions and that Actions have been enabled.

Please note that the repository may still use instance-level or organization-level runners even if it has its own repository-level runners.
We may provide options to control this in the future.

#### Is it possible to register runners for a specific user (not organization)?

Not yet.
It is technically possible to implement, but we need to discuss whether it is necessary.

#### What are the labels for runners used for?

You may have noticed that every runner has labels such as `ubuntu-latest`, `ubuntu-22.04`, `ubuntu-20.04`, and `ubuntu-18.04`.
These labels are used for job matching.

For example, `runs-on: ubuntu-latest` in a workflow file means that the job will be run on a runner with the `ubuntu-latest` label.
You can also add custom labels to a runner when registering it, which we will discuss later.

#### Where will the runner download scripts when using actions such as `actions/checkout@v3`?

You may be aware that there are tens of thousands of [marketplace actions](https://github.com/marketplace?type=actions) in GitHub.
However, when you write `uses: actions/checkout@v3`, it actually downloads the scripts from [gitea.com/actions/checkout](http://gitea.com/actions/checkout) by default (not GitHub).
This is a mirror of [github.com/actions/checkout](http://github.com/actions/checkout), but it's impossible to mirror all of them.
That's why you may encounter failures when trying to use some actions that haven't been mirrored.

The good news is that you can specify the URL prefix to use actions from anywhere.
This is an extra syntax in Gitea Actions.
For example:

- `uses: https://github.com/xxx/xxx@xxx`
- `uses: https://gitea.com/xxx/xxx@xxx`
- `uses: http://your_gitea_instance.com/xxx@xxx`

Be careful, the `https://` or `http://` prefix is necessary!

Alternatively, if you want your runners to download actions from GitHub or your own Gitea instance by default, you can configure it by setting `[actions].DEFAULT_ACTIONS_URL`.
See [Configuration Cheat Sheet](https://docs.gitea.io/en-us/config-cheat-sheet/#actions-actions).

This is one of the differences from GitHub Actions, but it should allow users much more flexibility in how they run Actions.

#### How to limit the permission of the runners?

Runners have no more permissions than simply connecting to your Gitea instance.
When any runner receives a job to run, it will temporarily gain limited permission to the repository associated with the job.
If you want to give more permissions to the runner, allowing it to access more private repositories or external systems, you can pass [secrets](https://docs.gitea.io/en-us/usage/secrets/) to it.

Refined permission control to Actions is a complicated job.
In the future, we will add more options to Gitea to make it more configurable, such as allowing more write access to repositories or read access to all repositories in the same organization.

#### How to avoid being hacked?

There are two types of possible attacks: unknown runner stealing the code or secrets from your repository, or malicious scripts controlling your runner.

Avoiding the former means not allowing people you don't know to register runners for your repository, organization, or instance.

The latter is a bit more complicated.
If you're using a private Gitea instance for your company, you may not need to worry about security since you trust your colleagues and can hold them accountable.

For public instances, things are a little different.
Here's how we do it on [gitea.com](http://gitea.com/):

- We only register runners for the "gitea" organization, so our runners will not execute jobs from other repositories.
- Our runners always run jobs with isolated containers. While it is possible to do this directly on the host, we choose not to for more security.
- To run actions for fork pull requests, approval is required. See [#22803](https://github.com/go-gitea/gitea/pull/22803).
- If someone registers their own runner for their repository or organization on [gitea.com](http://gitea.com/), we have no objections and will just not use it in our org. However, they should take care to ensure that the runner is not used by other users they do not know.

#### Which operating systems are supported by act runner?

It works well on Linux, macOS, and Windows.
While other operating systems are theoretically supported, they require further testing.

One thing to note is that if you choose to run jobs directly on the host instead of in job containers, the environmental differences between operating systems may cause unexpected failures.

For example, bash is not available on Windows in most cases, while act tries to use bash to run scripts by default.
Therefore, you need to specify `powershell` as the default shell in your workflow file, see [defaults.run](https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#defaultsrun).

```yaml
defaults:
  run:
    shell: powershell
```

## Design

Gitea Actions has multiple parts.
Let's explain them one by one.

### Act

The [nektos/act](https://github.com/nektos/act) project is an excellent tool that allows you to run your GitHub Actions locally.
We were inspired by this and wondered if it would be possible to run actions for Gitea.

However, while [nektos/act](https://github.com/nektos/act) is designed as a command line tool, what we actually need is a Go library with adjustments for Gitea.
So we forked it as [gitea/act](https://gitea.com/gitea/act).

This is a soft fork that will periodically follow the upstream.
Although some custom commits have been added, we will try our best to avoid changing too much of the original code.

The forked act is just a shim or adapter for Gitea's specific usage.
There are some additional commits that have been made, such as:

- Outputting execution logs to logger hook so they can be reported to Gitea
- Disabling the GraphQL URL, since Gitea doesn't support it
- Starting a new container for every job instead of reusing to ensure isolation.

These modifications have no reason to be merged into the upstream.
They don't make sense if the user just wants to run trusted actions locally.

However, there may be overlaps in the future, such as a required bug fix or new feature needed by both projects.
In these cases, we will contribute the changes back to the upstream repository.

### Act runner

Gitea's runner is called act runner because it's based on act.

Like other CI runners, we designed it as an external part of Gitea, which means it should run on a different server than Gitea.

To ensure that the runner connects to the correct Gitea instance, we need to register it with a token.
Additionally, the runner will introduce itself to Gitea and declare what kind of jobs it can run by reporting its labels.

Earlier, we mentioned that `runs-on: ubuntu-latest` in a workflow file means that the job will be run on a runner with the `ubuntu-latest` label.
But how does the runner know to run `ubuntu-latest`? The answer lies in mapping the label to an environment.
That's why when you add custom labels during registration, you will need to input some complex content like `my_custom_label:docker://centos:7`.
This means that the runner can take the job which needs to run on `my_custom_label`, and it will run it via a docker container with the image `centos:7`.

Docker isn't the only option, though.
The act also supports running jobs directly on the host.
This is achieved through labels like `linux_arm:host`.
This label indicates that the runner can take a job that needs to run on `linux_arm` and run it directly on the host.

The label's design follows the format `label[:schema[:args]]`.
If the schema is omitted, it defaults to `host`.
So,

- `my_custom_label:docker://node:18`: Run jobs labeled with `my_custom_label` using the `node:18` Docker image.
- `my_custom_label:host`: Run jobs labeled with `my_custom_label` directly on the host.
- `my_custom_label`: Same as `my_custom_label:host`.
- `my_custom_label:vm:ubuntu-latest`: (Example only, not implemented) Run jobs labeled with `my_custom_label` using a virtual machine with the `ubuntu-latest` ISO.

### Communication protocol

As act runner is an independent part of Gitea, we needed a protocol for runners to communicate with the Gitea instance.
However, we did not think it was a good idea to have Gitea listen on a new port.
Instead, we wanted to reuse the HTTP port, which means we needed a protocol that is compatible with HTTP.
We chose to use gRPC over HTTP.

We use [actions-proto-def](https://gitea.com/gitea/actions-proto-def) and [actions-proto-go](https://gitea.com/gitea/actions-proto-go) to wire them up.
More information about gRPC can be found on [its website](https://grpc.io/).

### Network architecture

Let's examine the overall network architecture.
This will help you troubleshoot some problems and explain why it's a bad idea to register a runner with a loopback address of the Gitea instance.

![network](/demos/hacking-actions/network.png)

There are four network connections marked in the picture, and the direction of the arrows indicates the direction of establishing the connections.

#### Connection 1, act runner to Gitea instance

The act runner must be able to connect to Gitea to receive tasks and send back the execution results.

#### Connection 2, job containers to Gitea instance

The job containers have different network namespaces than the runner, even if they are on the same machine.
They need to connect to Gitea to fetch codes if there is `actions/checkout@v3` in the workflow, for example.
Fetching code is not always necessary to run some jobs, but it is required in most cases.

If you use a loopback address to register a runner, the runner can connect to Gitea when it is on the same machine.
However, if a job container tries to fetch code from localhost, it will fail because Gitea is not in the same container.

#### Connection 3, act runner to internet

When you use some actions like `actions/checkout@v3`, the act runner downloads the scripts, not the job containers.
By default, it downloads from [gitea.com](http://gitea.com/), so it requires access to the internet.
It also downloads some docker images from Docker Hub by default, which also requires internet access.

However, internet access is not strictly necessary.
You can configure your Gitea instance to fetch actions or images from your intranet facilities.

In fact, your Gitea instance can serve as both the actions marketplace and the image registry.
You can mirror actions repositories from GitHub to your Gitea instance, and use them as normal.
And [Gitea Container Registry](https://docs.gitea.io/en-us/usage/packages/container/) can be used as a Docker image registry.

#### Connection 4,  job containers to internet

When using actions such as `actions/setup-go@v4`, it may be necessary to download resources from the internet to set up the Go language environment in job containers.
Therefore, access to the internet is required for the successful completion of these actions.

However, it is optional as well.
You can use your own custom actions to avoid relying on internet access, or you can use your packaged Docker image to run jobs with all dependencies installed.

#### Summary

Using Gitea Actions only requires ensuring that the runner can connect to the Gitea instance.
Internet access is optional, but not having it will require some additional work.
In other words: The runner works best when it can query the internet itself, but you don't need to expose it to the internet (in either direction).

If you encounter any network issues while using Gitea Actions, hopefully the image above can help you troubleshoot them.

### Q&A

#### Why choose GitHub Actions? Why not something compatible with GitLab CI/CD?

[@lunny](https://gitea.com/lunny) has explained this in the [issue to implement actions](https://github.com/go-gitea/gitea/issues/13539).
Furthermore, Actions is not only a CI/CD system but also an automation tool.

There have also been numerous [marketplace actions](https://github.com/marketplace?type=actions) implemented in the open-source world.
It is exciting to be able to reuse them.

#### Has Gitea Actions achieved full compatibility with GitHub Actions?

Not yet, we are working on it.

[@ChristopherHX](https://github.com/ChristopherHX) has provided an excellent overview of the differences between Gitea Actions and GitHub Actions in [this comment](https://github.com/go-gitea/gitea/issues/13539#issuecomment-1448888850).

#### What if it runs on multiple labels, such as `runs-on: [label_a, label_b]`?

This is valid syntax.
It means that it should run on runners that have both the `label_a` **and** `label_b` labels, see [Workflow syntax for GitHub Actions](https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idruns-on).
Unfortunately, act runner does not work this way.
As mentioned, we map labels to environments:

- `ubuntu` → `ubuntu:22.04`
- `centos` → `centos:8`

But we need to map label groups to environments instead, like so:

- `[ubuntu]` → `ubuntu:22.04`
- `[with-gpu]` → `linux:with-gpu`
- `[ubuntu, with-gpu]` → `ubuntu:22.04_with-gpu`

We also need to re-design how tasks are assigned to runners.
A runner with `ubuntu`, `centos`, or `with-gpu` does not necessarily indicate that it can accept jobs with `[centos, with-gpu]`.
Therefore, the runner should inform the Gitea instance that it can only accept jobs with `[ubuntu]`, `[centos]`, `[with-gpu]`, and `[ubuntu, with-gpu]`.
This is not a technical problem, it was just overlooked in the early design.
See [runtime.go#L65](https://gitea.com/gitea/act_runner/src/commit/90b8cc6a7a48f45cc28b5ef9660ebf4061fcb336/runtime/runtime.go#L65).

Currently, the act runner attempts to match everyone in the labels and uses the first match it finds.

#### What is the difference between agent labels and custom labels for a runner?

![labels](/demos/hacking-actions/labels.png)

Agent labels are reported to the Gitea instance by the runner during registration.
Custom labels, on the other hand, are added manually by a Gitea administrator or owners of the organization or repository (depending on the level of the runner).

However, the design here needs improvement, as it currently has some rough edges.
You can add a custom label such as `centos` to a registered runner, which means the runner will receive jobs with `runs-on: centos`.
However, the runner may not know which environment to use for this label, resulting in it using a default image or leading to a logical dead end.
This default may not match user expectations.
See [runtime.go#L71](https://gitea.com/gitea/act_runner/src/commit/90b8cc6a7a48f45cc28b5ef9660ebf4061fcb336/runtime/runtime.go#L71).

In the meantime, we suggest that you re-register your runner if you want to change its labels.

#### Will there be more implementations for Gitea Actions runner?

Although we would like to provide more options, our limited manpower means that act runner will be the only officially supported runner.
However, both Gitea and act runner are completely open source, so anyone can create a new/better implementation.
We support your choice, no matter how you decide.
In case you fork act runner to create your own version: Please contribute the changes back if you can and if you think your changes will help others as well.

### **Going further**

Have fun with Gitea Actions!
Although it may not be perfect yet, we can work together to improve it.
You can report bugs or propose ideas by submitting issues and joining our chat to discuss them.
And as always, pull requests are welcome!