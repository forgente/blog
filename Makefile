THEME := themes/gitea
PUBLIC := public
ARCHIVE := https://dl.gitea.com/theme/main.tar.gz

HUGO_PACKAGE := github.com/gohugoio/hugo@v0.81.0

.PHONY: all
all: build

.PHONY: clean
clean:
	rm -rf $(PUBLIC) $(THEME)

.PHONY: server
server: $(THEME)
	go run $(HUGO_PACKAGE) server

.PHONY: build
build: $(THEME)
	go run $(HUGO_PACKAGE) --cleanDestinationDir

.PHONY: update
update: $(THEME)

$(THEME):
	mkdir -p $@
	curl -sL $(ARCHIVE) | tar xz -C $@
