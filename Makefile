THEME := themes/gitea
ARCHIVE := https://dl.gitea.com/theme/main.tar.gz

.PHONY: all
all: build

.PHONY: clean
clean:
	rm -rf $(THEME)

.PHONY: server
server: $(THEME)
	npm run start

.PHONY: build
build: $(THEME)
	npm run build

.PHONY: update
update: $(THEME)

$(THEME):
	mkdir -p $@
	curl -sL $(ARCHIVE) | tar xz -C $@
