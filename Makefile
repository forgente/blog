THEME := themes/gitea
ARCHIVE := https://dl.gitea.com/theme/main.tar.gz

.PHONY: all
all: install build

.PHONY: install
install:
	pnpm install --frozen-lockfile

.PHONY: clean
clean:
	rm -rf $(THEME)

.PHONY: server
server: $(THEME)
	pnpm run start

.PHONY: build
build: $(THEME)
	pnpm run build

.PHONY: update
update: $(THEME)

$(THEME):
	mkdir -p $@
	curl -sL $(ARCHIVE) | tar xz -C $@
