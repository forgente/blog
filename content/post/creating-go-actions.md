---
date: 2023-04-19T10:00:00+08:00
authors: 
  - "Zettat123"
  - "techknowlogick"
  - "pat-s"
title: "Creating Go Actions"
tags: ["actions"]
draft: false
---

Gitea's CI system, Gitea Actions, was recently released in version 1.19.0. Gitea Actions is an internal CI/CD system, offering near compatibility with GitHub Actions. One key difference is that Gitea supports both Go and JavaScript actions, while GitHub only supports JavaScript actions natively (though you can use any programming language for Docker container actions).

Go actions provide a way for gophers who are not familiar with JavaScript to create native actions.
However, compared to JavaScript actions, Go actions may be slower because they need to be built as executables before running. But you don't need to put the generated javascript files into dist in a Go action.

In this guide, we'll show you how to create a Go action in Gitea. Before diving in, you should have a basic understanding of Gitea Actions. If you're not familiar with it, we recommend reading [Hacking on Gitea Actions](https://blog.gitea.com/hacking-on-gitea-actions/).

## A Simple Go Action

First, let's create a simple Go action. You'll need to create a repository called `simple-go-action` on your Gitea instance and clone it:

```sh
git clone <repo-url>
cd simple-go-action
# create the go.mod file
go mod init simple-go-action
```

The metadata file is essential for actions, and its filename must be either `action.yml` or `action.yaml`. Here's an example action.yml file:

```yml
name: 'Simple Go Action'
description: 'A simple Gitea action written in go'
runs:
  using: 'go'
  main: 'main.go'
```

To read more about the metadata syntax, you can see the [Metadata syntax for GitHub Actions](https://docs.github.com/en/actions/creating-actions/metadata-syntax-for-github-actions).

You may notice that we use `using: 'go'` in the metadata, specifying Go as the runtime for this action. Since GitHub doesn't support Go actions natively, you won't find this in GitHub's documentation.

Next, add the `main.go` file with a simple logic to print a "Hello world" string:

```go
package main

import "fmt"

func main() {
	fmt.Println("Hello world")
}
```

Now the action is ready to be tested. Commit and push the code to Gitea. To test the action, create another repository called `test-simple-go-action` and add a workflow file using the following code. 
Please replace `<action-url>` with the URL of your action. The `<action-url>` should be like `http(s)://<your-gitea-instance-url>/<owner>/<repo>@<version>`, for example: `https://gitea.com/Zettat123/simple-go-action@v1`. The `<version>` could be a tag, a branch or a commit SHA. For more information, see [using-release-management-for-actions](https://docs.github.com/en/actions/creating-actions/about-custom-actions#using-release-management-for-actions).

```yml
name: 'Test Go Action'
on: [push]
jobs:
  use-go-action:
    runs-on: ubuntu-latest
    steps:
      - name: Setup Go
        uses: actions/setup-go@v3
        with:
          go-version: '1.20'

      - name: Use Go Action  
        uses: <action-url>
```

Since the action is written in Go and the `runs-on` environment may not have Go installed, you'll need to set up a Go runtime before using the action. The `setup-go` action works well in this case, but we'll discuss cases where it doesn't later. After pushing the workflow file, you can see the result in the Actions tab.

![use-go-action-main](/demos/creating-go-actions/use-go-action-main.png)

## Inputs and Outputs

You can specify the data that the action will use through inputs parameters and the data that the action can provide to other actions through outputs parameters. For more information, see GitHub's documentation on [inputs](https://docs.github.com/en/actions/creating-actions/metadata-syntax-for-github-actions#inputs) and [outputs](https://docs.github.com/en/actions/creating-actions/metadata-syntax-for-github-actions#outputs-for-docker-container-and-javascript-actions)

To use `inputs` and `outputs`, you'll need to update the `action.yml` file:

```yml
name: 'Simple Go Action'
description: 'A simple Gitea action written in go'
inputs:
  username:
    description: 'The username to print'
    required: true
outputs:
  time:
    description: 'The time when the action was called'
runs:
  using: 'go'
  main: 'main.go'
```

You'll also need to update the `main.go` file:

```go
package main

import (
	"fmt"
	"os"
	"time"
)

func main() {
	username := readInputs()
	fmt.Printf("username is %s\n", username)

	err := writeOutputs("time", time.Now().Format("2006-01-02 15:04:05"))
	if err != nil {
		panic(err)
	}
}

func readInputs() string {
	username := os.Getenv("INPUT_USERNAME")
	return username
}

func writeOutputs(k, v string) (err error) {
	msg := fmt.Sprintf("%s=%s", k, v)
	outputFilepath := os.Getenv("GITHUB_OUTPUT")
	f, err := os.OpenFile(outputFilepath, os.O_APPEND|os.O_CREATE|os.O_WRONLY, 0644)
	if err != nil {
		return
	}
	defer func() {
		if cErr := f.Close(); cErr != nil && err == nil {
			err = cErr
		}
	}()
	if _, err = f.Write([]byte(msg)); err != nil {
		return
	}
	return
}
```

In the workflow that uses the action, you need to add the code related to `inputs` and `outputs`:

```yml
name: 'Test Go Action'
on: [push]
jobs:
  use-go-action:
    runs-on: ubuntu-latest
    steps:
      - name: Setup Go
        uses: actions/setup-go@v3
        with:
          go-version: '1.20'

      - name: Use Go Action  
        id: use-go-action
        uses: <action-url>
        with:
          username: foo

      - name: Print Output
        run: echo 'output time is ${{ steps.use-go-action.outputs.time }}'
```

After pushing the updated workflow file, you will see the result:

![use-go-action-input-and-output](/demos/creating-go-actions/use-go-action-input-and-output.png)

Good! You have successfully used `inputs` and `outputs` in your action.
You may find that the code for reading `inputs` and writing `outputs` looks complicated.
To simplify the code, you can use the [go-githubactions](https://github.com/sethvargo/go-githubactions) SDK:

```go
package main

import (
	"fmt"
	"time"

	gha "github.com/sethvargo/go-githubactions"
)

func main() {
	username := gha.GetInput("username")
	fmt.Printf("username is %s\n", username)

	gha.SetOutput("time", time.Now().Format("2006-01-02 15:04:05"))
}
```

If you re-run the workflow, the result will be:

![use-sdk](/demos/creating-go-actions/use-sdk.png)

As shown in screenshot, the third-party packages need to be downloaded to build the executable.
If you don't want to download third-party packages every time, you can use `go mod vendor` to create the `vendor` directory to store packages.

## Pre and Post

In the `action.yml` file, we set the `runs.main` to `main.go` to specify the code that the action will run.
In addition to the `main`, you can also specify the `pre` and the `post` for an action. 
The `pre` allows you to run some code before running the `main` and the `post` allows you to run some code at the end of the job.
If you need more information, please read GitHub's documentation on [pre](https://docs.github.com/en/actions/creating-actions/metadata-syntax-for-github-actions#runspre) and [post](https://docs.github.com/en/actions/creating-actions/metadata-syntax-for-github-actions#runspost).

Let's add the `pre` and the `post` to the action.
Firstly, you need to create a `pre` directory and add the `pre.go` file in it:

```go
package main

import "fmt"

func main() {
	fmt.Println("Pre of Simple Go Action")
}
```

Next, create the `post` directory and `post.go` file in the similar way:

```go
package main

import "fmt"

func main() {
	fmt.Println("Post of Simple Go Action")
}
```

And you'll also need to update the `action.yml` file:

```yml
name: 'Simple Go Action'
description: 'A simple Gitea action written in go'
inputs:
  username:
    description: 'The username to print'
    required: true
outputs:
  time:
    description: 'The time when the action was called'
runs:
  using: 'go'
  main: 'main.go'
  pre: "pre/pre.go"
  post: "post/post.go"
```

Now the structure of the directory should be like:

```
├── action.yml
├── go.mod
├── main.go
├── post
│   └── post.go
└── pre
    └── pre.go
```

Everything looks ok! But when you re-run the workflow, you may see an error: `"go": executable file not found in $PATH`.
The reason is that the code in `pre` will be executed before calling the `setup-go` action, and the Go runtime has not yet been set up.
In this case, you'll need to use an image with Go installed to run this workflow and you won't need to call the `setup-go` action since the image already has the Go runtime.
You can use `container.image` to specify the image (replace `<image-with-go>` with an image with go installed):

```yml
name: 'Test Go Action'
on: [push]
jobs:
  use-go-action:
    runs-on: ubuntu-latest
    container:
      image: <image-with-go>
    steps:
      - name: Use Go Action  
        id: use-go-action
        uses: <action-url>
        with:
          username: foo

      - name: Print Output
        run: echo 'output time is ${{ steps.use-go-action.outputs.time }}'
```

Then the workflow will work. You'll see the output of the `pre` in `Set up job`:

![go-action-pre](/demos/creating-go-actions/go-action-pre.png)

and the output of the `post` in `Complete job`:

![go-action-post](/demos/creating-go-actions/go-action-post.png)

---

Now you should have a basic understanding of Gitea's Go actions.
If you have any ideas or encounter any bugs, please feel free to create issues or pull requests.
We can work together to make Gitea Actions even better.

---

You can find the demo code in the following repositories:
- simple-go-action: https://gitea.com/Zettat123/simple-go-action
- test-simple-go-action: https://gitea.com/Zettat123/test-simple-go-action

And there is also a usable go action to publish release to Gitea https://gitea.com/actions/release-action
