# Forgente: Blog

Source for [blog.forgente.com](https://blog.forgente.com) — news and release
announcements from the [Forgente](https://forgente.com) project.

## Content policy

This blog publishes Forgente's own writing only. It is **not** a mirror of the
upstream Gitea blog: Forgente hard-forked from Gitea in 2026-07, and while the
forge tracks upstream security fixes, this blog does not republish upstream
posts. Gitea's blog lives at [blog.gitea.com](https://blog.gitea.com).

Posts live under `content/post/<category>/`, where the folder name becomes the
category tab on the site (e.g. `content/post/releases/` → "Releases").

## Hosting

The site is a static [Docusaurus](https://docusaurus.io/) build. Pushing to
`main` runs the publish workflow, which builds the site and deploys it to the
S3 + CloudFront distribution behind blog.forgente.com.

## Development

Serve the site locally with hot reload:

```
pnpm install
pnpm run start
```

## Contributing

Fork -> Patch -> Push -> Pull Request

## License

This project is under the Apache-2.0 License. See the [LICENSE](LICENSE) file
for the full license text.

## Copyright

```
Copyright (c) 2026 The Forgente Authors <https://forgente.com>
```
