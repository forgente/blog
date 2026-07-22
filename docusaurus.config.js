// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import {themes as prismThemes} from 'prism-react-renderer';
import remarkGithubMentions from './plugins/remark-github-mentions.js';

const lightCodeTheme = prismThemes.github;
const darkCodeTheme = prismThemes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Forgente Blog',
  tagline: 'News and releases from the Forgente project',
  favicon: 'img/favicon.svg',
  url: 'https://blog.forgente.com',
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
        editUrl: 'https://github.com/forgente/blog/blob/main/',
        postsPerPage: 12,
        path: 'content/post',
        blogTagsPostsComponent: require.resolve(
          "./src/theme/BlogListPage/index.js",
        ),
        remarkPlugins: [remarkGithubMentions],
      },
    ],
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        // Enable docs plugin minimally to satisfy search-local hooks
        // See: https://github.com/facebook/docusaurus/issues/3360
        docs: {
          path: 'docs',
          routeBasePath: 'docs',
          sidebarPath: false,
        },
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
        title: 'Forgente',
        logo: {
          alt: 'Forgente Logo',
          src: 'img/logo.svg',
          href: 'https://forgente.com/',
          target: '_self',
        },
        items: [
          {
            href: 'https://docs.forgente.com/',
            label: 'Docs',
            position: 'left',
            className: 'internal-href',
            target: '_self',
          },
          {
            to: '/',
            label: 'Blog',
            position: 'left',
          },
          {
            href: 'https://github.com/forgente/forgente',
            label: 'Code',
            position: 'left',
          },
          {
            type: 'search',
            position: 'right',
          },
          {
            href: 'https://forgente.com/user/login',
            label: 'Sign In',
            position: 'right',
            className: 'internal-href signin-button',
            target: '_self',
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
                label: 'Documentation',
                href: 'https://docs.forgente.com/',
                className: 'internal-href',
                target: '_self',
              },
            ],
          },
          {
            title: 'Project',
            items: [
              {
                label: 'Code',
                href: 'https://github.com/forgente/forgente',
              },
              {
                label: 'Instance',
                href: 'https://forgente.com/',
              },
            ],
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['ini'],
      },
      image: '/img/logo.svg',
      metadata: [{name: 'og:logo', content: '/img/logo.svg'}]
    }),
};

module.exports = config;
