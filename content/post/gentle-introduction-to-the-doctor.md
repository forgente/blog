---
date: 2022-06-14T14:03:27+02:00
authors: "dachary"
title: "A gentle introduction to the gitea doctor"
tags: ["tutorial"]
draft: false
---

While helping people with their upgrades [in the Gitea forum](https://forum.gitea.com/t/migration-from-1-2-to-1-16-8/5309) or [at the Hostea clinic](https://forum.hostea.org/t/gitea-upgrade-from-1-14-1-to-1-16-8/90), I realized that few Gitea admins know about the [`gitea doctor`](https://docs.gitea.com/administration/command-line#doctor) command and decided to write this blog post as a gentle introduction.

### An apple a day keeps the doctor away

Or in our case, Gitea versions [below 1.11.5](https://github.com/go-gitea/gitea/blob/v1.11.5/cmd/doctor.go). Since then, the `gitea doctor` is available and is designed to run against a specific Gitea version. It would not be a good idea to try to run the doctor from Gitea 1.16 to verify the sanity of a Gitea 1.2 instance: it will be confused by how the database is organized and a number of other details. Historical fun fact: the `gitea doctor` was backported to [Gitea 1.10.5](https://github.com/go-gitea/gitea/blob/v1.10.5/cmd/doctor.go) and [Gitea 1.10.6](https://github.com/go-gitea/gitea/blob/v1.10.6/cmd/doctor.go) and may be of help if you run this particular version and are facing the problem that motivated the backport.

With each version `gitea doctor` improves and gains new capabilities. For instance, in Gitea 1.17 it becomes aware of [orphaned pull requests](https://github.com/go-gitea/gitea/pull/19731) and is able to fix them. If such a problem exists in Gitea 1.16, it does not know about it.

### Calling the doctor

In the following, examples are based on a Gitea 1.16.8 instance you can run as follows:

```bash
$ docker run --name gitea -p 3000:3000 -e GITEA__security__INSTALL_LOCK=true -d gitea/gitea:1.16.8-rootless
$ docker exec gitea gitea admin user create --admin --username root --password admin1234 --email root@example.com
$ docker exec gitea mkdir /var/lib/gitea/data/log
```

And then you can go to the [web interface](https://127.0.0.1:3000/) to create a `test` repository, with an initial `README.md` file. When this is done the doctor can be called as follows:

```bash
$ docker exec gitea gitea doctor --all
[1] Check paths and basic configuration
 - [I] Configuration File Path:    "/etc/gitea/app.ini"
 - [I] Repository Root Path:       "/var/lib/gitea/git/repositories"
 - [I] Data Root Path:             "/var/lib/gitea"
 - [I] Custom File Root Path:      "/var/lib/gitea/custom"
 - [I] Work directory:             "/var/lib/gitea"
 - [I] Log Root Path:              "/var/lib/gitea/data/log"
OK
[2] Check if there is garbage storage files
OK
[3] Check Database Version
OK
[4] Check consistency of database
OK
[5] Check if user with wrong type exist
OK
[6] Check if OpenSSH authorized_keys file is up-to-date
OK
[7] Check if SCRIPT_TYPE is available
 - [I] ScriptType bash is on the current PATH at /bin/bash
OK
[8] Check if hook files are up-to-date and executable
OK
[9] Recalculate Stars number for all user
OK
[10] Check old archives
 - [I] 0 old archives in repository need to be deleted
OK
[11] Enable push options
 - [I] Checked 1 repositories, 0 need updates.
OK
[12] Check for incorrectly dumped repo_units (See #16961)
 - [W] Found 0 broken repo_units
OK
[13] Recalculate merge bases
 - [W] 0 PRs with incorrect mergebases of 0 PRs total in 1 repos
OK
[14] Check git-daemon-export-ok files
 - [I] Checked 1 repositories, 0 need updates.
```

### What does the doctor know?

Although the `doctor` can be compared to [fsck(8)](https://en.wikipedia.org/wiki/Fsck), it does not know everything. It took decades for `fsck` to become the ultimate authority on finding problems on file systems and reliably fixing them without losing data. Nowadays, only a handful of people in the world are brave enough to manually attempt a file system recovery when `fsck` cannot recover from a data loss.

The first `doctor` version is two years old and Gitea admins are still routinely running SQL queries against the database or moving files around when trying to figure out why a Gitea instance is not behaving as it should. It is however worth checking if the doctor does not already have a solution by listing all it can do:

```bash
$ docker exec gitea gitea doctor --list
Default	Name				Title
*	paths				Check paths and basic configuration
	storages			Check if there is garbage storage files
*	check-db-version		Check Database Version
	check-db-consistency		Check consistency of database
*	check-user-type			Check if user with wrong type exist
*	authorized-keys			Check if OpenSSH authorized_keys file is up-to-date
	script-type			Check if SCRIPT_TYPE is available
	hooks				Check if hook files are up-to-date and executable
	recalculate-stars-number	Recalculate Stars number for all user
	check-old-archives		Check old archives
	enable-push-options		Enable push options
	fix-broken-repo-units		Check for incorrectly dumped repo_units (See #16961)
	recalculate-merge-bases		Recalculate merge bases
	check-git-daemon-export-ok	Check git-daemon-export-ok files
```

And then call the `check` that looks interesting:

```bash
$ docker exec gitea gitea doctor --run authorized-keys
[1] Check if OpenSSH authorized_keys file is up-to-date
OK
```

The challenge is to figure out which `check` does what and at the moment the best source of information is ... [the sources](https://github.com/go-gitea/gitea/tree/v1.16.8) themselves. The [doctor.go](https://github.com/go-gitea/gitea/blob/v1.16.8/cmd/doctor.go) command is the entry point and [the doctor directory](https://github.com/go-gitea/gitea/tree/v1.16.8/modules/doctor) contains the rest.

Some `checks` are straightforward to understand, even if you do not know Go, such as [the authorized-keys check](https://github.com/go-gitea/gitea/blob/v1.16.8/modules/doctor/authorizedkeys.go). Others are much more involved and your best chance is to [ask the Gitea chatroom](https://matrix.to/#/#gitea:matrix.org) for help.

### Is it going to hurt?

By default the doctor (very much like `fsck -N`) only performs non destructive checks and displays diagnostics, with an indication of how serious the problem is. In the example above, there only are lines with **[I]** (which indicates an information) and **[W]** which indicates a warning that can be ignored but may be worth looking into. Those two warnings are actually just informational and should be labelled as **[I]**, [which has been fixed](https://github.com/go-gitea/gitea/pull/19836) in a more recent version of the doctor.

Now let's do something bad: remove the permissions from a hook in our repository:

```bash
$ docker exec gitea chmod -x /var/lib/gitea/git/repositories/root/test.git/hooks/post-receive
```

Run the doctor with the `check` supposed to find that out:

```bash
$ docker exec gitea gitea doctor --run hooks
[1] Check if hook files are up-to-date and executable
 - [W] old hook file /var/lib/gitea/git/repositories/root/test.git/hooks/post-receive is not executable
```

Ask it to fix this with the `--fix` flag:

```bash
$ docker exec gitea gitea doctor --run hooks --fix
[1] Check if hook files are up-to-date and executable
 - [W] Regenerated hooks for root/test
 - [W] old hook file /var/lib/gitea/git/repositories/root/test.git/hooks/post-receive is not executable
```

And run it one last time to check all is well:

```bash
$ docker exec gitea gitea doctor --run hooks
[1] Check if hook files are up-to-date and executable
OK
```

Even when the doctor is unable to fix a problem, it can help by showing extensive debug output which can be found, by default, in the `doctor.log` file in the directory from which it runs. Or it can be displayed on the standard output with `--log-file -`, which is most convenient when running in docker.

### Going further

If that was helpful to you, I would very much appreciate if you [send me a message on Mastodon](https://mastodon.online/@dachary). It will encourage me to write more blog posts to share what I learn about Gitea. Even better: you could [send a pull request](https://github.com/go-gitea/gitea/pulls) to improve the doctor and help it mature.
