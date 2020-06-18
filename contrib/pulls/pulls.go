package main

import (
	"flag"
	"fmt"
	"io/ioutil"
	"os"
	"regexp"
)

var (
	pullURL   = "https://github.com/go-gitea/gitea/pull/"
	pullRegex = regexp.MustCompile(`#(\d+)\)`)
)

func main() {
	var release string
	flag.StringVar(&release, "release", "", "The release to target")
	flag.Parse()

	if release == "" {
		fmt.Println("missing --release flag")
		return
	}

	fi, err := os.OpenFile(fmt.Sprintf("content/post/release-of-%s.md", release), os.O_RDWR, os.ModePerm)
	if os.IsNotExist(err) {
		fmt.Printf("could not find content/post/release-of-%s.md\n", release)
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

	repl := pullRegex.ReplaceAll(data, []byte(`[#$1](`+pullURL+`$1))`))
	if _, err := fi.WriteAt(repl, 0); err != nil {
		fmt.Println(err)
		return
	}

	fmt.Println("conversion complete")
}
