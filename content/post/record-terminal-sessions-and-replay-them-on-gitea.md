---
date: "2023-04-08T19:00:00+08:00"
authors:
    - "sillyguodong"
    - "delvh"
    - "jolheiser"
title: "Gitea x Asciicast | Recording and viewing terminal sessions on Gitea"
tags: []
draft: false
---

As of 1.19.0, Gitea supports `asciicast`!
Maybe this is the first time you've heard of asciicast.
This blog will teach you how to use asciicast, and how it relates to Gitea.

## What is asciicast?

As programmers, we often work with terminals and the command line. 
Sometimes, we encounter unfamiliar commands.
Othertimes, the output of commands is not what we expect.
In both these cases, we need to show someone else what we did and what the output is.
Most often, we would record this in a text format.
But have you ever thought about recording it on video?
An asciicast file is exactly that: A text-based recording of a terminal session.
It even offers some additional awesome features we'll go over below.


asciicast files typically have the file extension `.cast` and follow the [newline-delimited JSON](https://jsonlines.org/) file specification.

Here is an example of a `.cast` file:

```json
{"version": 2, "width": 255, "height": 69, "timestamp": 1680420731, "env": {"SHELL": "/bin/zsh", "TERM": "xterm-256color"}}
[0.110535, "o", "\u001b[1m\u001b[7m%\u001b[27m\u001b[1m\u001b[0m                                                                                                                                                                                                                                                              \r \r\u001b]2;gedong@chifangongju:~/Downloads\u0007\u001b]1;~/Downloads\u0007"]
[0.133176, "o", "\r\u001b[0m\u001b[27m\u001b[24m\u001b[J\u001b[01;32m➜  \u001b[36mDownloads\u001b[00m \u001b[K"]
[0.133293, "o", "\u001b[?1h\u001b=\u001b[?2004h"]
[3.419088, "o", "\u001b[?2004l\r\r\n"]
```

- The **first line** is usually called the **header**. It is a JSON-encoded object which contains recording meta-data.
  In this meta-data, in addition to the required attributes `version`, `width` and `height`, there are also optional attributes such as `timestamp`, `env`, `theme` and so on.
- Each of the remaining lines represents an event. All of the events together form an event stream of the entire recording. 
  An event is a JSON array which has three elements, like below:
  ```json
  [time, event-type, event-data]
  ```
  - `time`: float, the number of seconds since the recording has begun.
  - `event-type`: string, one of `"o"` or `"i"`. 
    - `"o"` represents new data printed to stdout (output). 
    - `"i"` represents character(s) typed in by the user (input).
  - `event-data`: event specific data, described separately for each event type.

### Notes
- The latest version of asciicast files is version 2, which solves several problems that couldn't be easily fixed.
  This introduction to acsiicast is also based on version 2.
- version 1 should not be used anymore, and is also not supported by Gitea.
The reason for that is especially that version 1 didn't specify a file extension, so any file could be an asciicast file.
- For more information on asciicast, see their [introduction](https://github.com/asciinema/asciinema/blob/develop/doc/asciicast-v2.md).

## Asciicast on Gitea

You should have a general understanding of asciicast now.
But how do we obtain an asciicast file and how do we use it in conjunction with Gitea?
Both questions will be answered below.

[Asciinema](https://github.com/asciinema/asciinema) is an open source software which lets you easily record your terminal and replay the recordings in a terminal as well as in the web browser.

### Install Asciinema

Installing `Asciinema` is our first step.
The asciinema [installation docs](https://asciinema.org/docs/installation) describe how to install it depending on which platform you are using.

As of the time of this post, asciinema does not support windows terminals.

### Prepare your repository
This is my demo [repository](https://gitea.com/sillyguodong/asciicast_test) that I'm going to use on gitea.com, which I have cloned locally.


### Recording a terminal session
From the root of the project:

 ```shell
 asciinema rec $FILENAME.cast
 ```
This will start a new recording.

![run asciinema](/demos/asciicast/rec-start.png)

As you can hopefully see, asciinema tells you where the recording will be stored (if you don't specify a file name. Otherwise it will be saved at the specified path) and how to stop the recording (type `exit` or <kbd>Ctrl-D</kbd>).

You can temporarily pause the recording by pressing <kbd>Ctrl-\\</kbd>.

After exiting:

![recording end](/demos/asciicast/rec-end.png)

asciinema tells you that recording has finished and was stored successfully.

The following GIF shows the recording process.

![recording process](/demos/asciicast/recording-process.gif)

`hello_asciicast.cast` is generated in the root path of the local repository.

### Push asciicast file to remote reposirtory

```shell
git add .
git commit -m "add a cast file"
git push
```

Now we can see the file in the remote repository:

![push remote](/demos/asciicast/push-remote.png)


### Asciicast on Gitea

After uploading an asciicast file to your Gitea repository, you can choose to view the `source` or you can view the rendered video.

Viewing `source`:

![view source code of the video](/demos/asciicast/view-source.png)

Viewing `render`:

![view rendered asciicast video](/demos/asciicast/view-render.png)

Start playing it:

![play asciicast video](/demos/asciicast/play.gif)

One of the key benefits of asciicast videos is that the text contained in it can be selected.
So, you can for example copy and paste the text from it:

![copy and paste](/demos/asciicast/copy-and-paste.gif)

### Embed in markdown

At the moment, an asciicast file can only be embedded implicitly into Markdown by adding something like the following construct: 

```markdown
[![session recording](/demos/asciicast/hello_asciicast_pic.png)](/src/branch/main/hello_asciicast.cast)
```

We highly recommend that you use Markdown and Asciicast on Gitea to build your work and study notes.
This is for example what's happening in the [`README`](https://gitea.com/sillyguodong/asciicast_test/src/branch/main/README.md) file of the [asciicast demo repository](https://gitea.com/sillyguodong/asciicast_test).
Not only is this more visual than code blocks, but the content is also replicable.

This is a pseudo embedding achieved by displaying an image of the recording that links to the recording when clicked on.

---

Perhaps it will be possible in the future to embed an asciicast file directly into Markdown.
For now, this is as close as it gets.
Still, have fun recording and viewing asciicast files! :movie_camera: 