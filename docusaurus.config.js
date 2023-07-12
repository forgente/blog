// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Gitea Blogs',
  tagline: 'Git with a cup of tea',
  favicon: 'img/favicon.svg',
  url: 'https://blog.gitea.com',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  plugins: [
    [
      require.resolve('./plugins/blog'),
      {
        showReadingTime: true,
        routeBasePath: '/',
        editUrl: 'https://gitea.com/gitea/blog/src/branch/main/',
        postsPerPage: 12,
        path: 'content/post',
        blogTagsPostsComponent: require.resolve(
          "./src/theme/BlogListPage/index.js",
        ),
      },
    ]
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        // blog is enabled through a custom plugin, so we disable it from preset
        // ./plugins/blog/index.js
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  themes: [
    [
      "@easyops-cn/docusaurus-search-local",
      {
        hashed: false,
        language: ["en"],
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
        indexBlog: true,
        indexDocs: false,
        blogRouteBasePath: "/"
      }
    ]
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Gitea',
        logo: {
          alt: 'Gitea Logo',
          src: 'img/logo.svg',
          href: 'https://about.gitea.com/',
        },
        items: [
          {
            href: 'https://docs.gitea.com/', 
            label: 'Docs', 
            position: 'left',
            className: 'internal-href',
          },
          {
            href: 'https://docs.gitea.com/api/1.19/', 
            label: 'API', 
            position: 'left',
            className: 'internal-href',
          },
          {
            to: '/', 
            label: 'Blog', 
            position: 'left',
          },
          {
            href: 'https://github.com/go-gitea/gitea',
            label: 'Code',
            position: 'left',
          },
          {
            type: 'search',
            position: 'right',
          },
          {
            href: 'https://docs.gitea.com/help/seek-help',
            position: 'right',
            label: 'Support',
            className: 'internal-href',
          },
          {
            href: 'https://gitea.com/user/login',
            label: 'Sign In', 
            position: 'right',
            className: 'internal-href signin-button',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                href: 'https://docs.gitea.com/',
                className: 'internal-href',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/gitea',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/gitea',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/giteaio',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Code',
                href: 'https://github.com/go-gitea/gitea',
              },
            ],
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      }
    }),
};

module.exports = config;
