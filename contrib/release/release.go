package main

import (
	"encoding/json"
	"flag"
	"fmt"
	"io/ioutil"
	"net/http"
	"os"
	"text/template"
	"time"
)

var (
	mergedURLFmt = "https://api.github.com/search/issues?q=repo:go-gitea/gitea+is:pr+is:merged+milestone:%s"
	tmpl         = template.Must(template.ParseFiles("contrib/release/release.md"))

	author    string
	milestone string
)

type Merged struct {
	TotalCount int `json:"total_count"`
}

func main() {
	flag.StringVar(&author, "author", "", "The author for this blog post")
	flag.StringVar(&milestone, "milestone", "", "The milestone for this release")
	flag.Parse()

	if author == "" {
		fmt.Println("missing --author flag")
		return
	}
	if milestone == "" {
		fmt.Println("missing --milestone flag")
		return
	}

	resp, err := http.Get(fmt.Sprintf(mergedURLFmt, milestone))
	if err != nil {
		fmt.Println(err)
		return
	}
	body, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		fmt.Println(err)
		return
	}
	defer resp.Body.Close()

	var merged Merged
	if err := json.Unmarshal(body, &merged); err != nil {
		fmt.Println(err)
		return
	}

	// This will truncate if you mess up the milestone, but this is in Git so just revert it. YOLO
	fi, err := os.Create(fmt.Sprintf("content/post/gitea/release-of-%s.md", milestone))
	if err != nil {
		fmt.Println(err)
		return
	}
	defer fi.Close()

	date := time.Now()
	data := map[string]interface{}{
		"Author":    author,
		"Milestone": milestone,
		"Merged":    merged.TotalCount,
		"DateLong":  date.Format("2006-01-02T15:04:05+07:00"),
		"DateShort": date.Format("2006-01-02"),
	}

	if err := tmpl.Execute(fi, data); err != nil {
		fmt.Println(err)
		return
	}
}
