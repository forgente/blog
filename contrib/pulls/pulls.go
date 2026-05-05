package main

import (
	"flag"
	"fmt"
	"io/ioutil"
	"os"
	"regexp"
)

var (
	pullGiteaURL = "https://github.com/go-gitea/gitea/pull/"
	pullTeaURL   = "https://gitea.com/gitea/tea/pulls/"
	pullRegex    = regexp.MustCompile(`#(\d+)\)`)
)

func main() {
	var release string
	var tea bool
	flag.StringVar(&release, "release", "", "The release to target")
	flag.BoolVar(&tea, "tea", false, "switch to tea mode")
	flag.Parse()

	if release == "" {
		fmt.Println("missing --release flag")
		return
	}

	post := fmt.Sprintf("content/post/gitea/release-of-%s.md", release)
	if tea {
		post = fmt.Sprintf("content/post/tea/release-of-tea-%s.md", release)
	}

	fi, err := os.OpenFile(post, os.O_RDWR, os.ModePerm)
	if os.IsNotExist(err) {
		fmt.Printf("could not find %s\n", post)
		return
	} else if err != nil {
		fmt.Println(err)
		return
	}
	defer fi.Close()

	data, err := ioutil.ReadAll(fi)
	if err != nil {
		fmt.Println(err)
		return
	}

	pullURL := pullGiteaURL
	if tea {
		pullURL = pullTeaURL
	}

	repl := pullRegex.ReplaceAll(data, []byte(`[#$1](`+pullURL+`$1))`))
	if _, err := fi.WriteAt(repl, 0); err != nil {
		fmt.Println(err)
		return
	}

	fmt.Println("conversion complete")
}
