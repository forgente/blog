// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import {themes as prismThemes} from 'prism-react-renderer';
import remarkGithubMentions from './plugins/remark-github-mentions.js';

const lightCodeTheme = prismThemes.github;
const darkCodeTheme = prismThemes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Gitea Blog',
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
        remarkPlugins: [remarkGithubMentions],
      },
    ],
    [
        '@docusaurus/plugin-client-redirects',
        {
          redirects: [
              { to: '/introducing-new-features-of-labels-and-projects',from:'/2023/04/supercharge-your-issue-management-workflow-introducing-org/user-level-projects-scoped-labels-advanced-label-templates/',},
              { to: '/backports-to-the-future',from:'/2023/04/backports-to-the-future/',},
              { to: '/creating-go-actions',from:'/2023/04/creating-go-actions/',},
              { to: '/record-terminal-sessions-and-replay-them-on-gitea',from:'/2023/04/gitea-x-asciicast-recording-and-viewing-terminal-sessions-on-gitea/',},
              { to: '/hacking-on-gitea-actions',from:'/2023/03/hacking-on-gitea-actions/',},
              { to: '/introducing-versioned-documentation',from:'/2023/03/introducing-versioned-documentation/',},
              { to: '/feature-preview-mapping-oidc-groups-to-teams',from:'/2023/03/feature-preview-mapping-oidc-groups-to-teams/',},
              { "to": "/release-of-1.19.3", "from":"/2023/05/gitea-1.19.3-is-released/"},
    { "to": "/release-of-1.19.2", "from":"/2023/04/gitea-1.19.2-is-released/"},
    { "to": "/release-of-1.19.1", "from":"/2023/04/gitea-1.19.1-is-released/"},
    { "to": "/release-of-1.19.0", "from":"/2023/03/gitea-1.19.0-is-released/"},
    { "to": "/release-of-1.18.5", "from":"/2023/02/gitea-1.18.5-is-released/"},
    { "to": "/release-of-1.18.4", "from":"/2023/02/gitea-1.18.4-is-released/"},
    { "to": "/release-of-1.18.3", "from":"/2023/01/gitea-1.18.3-is-released/"},
    { "to": "/release-of-1.18.2", "from":"/2023/01/gitea-1.18.2-is-released/"},
    { "to": "/release-of-1.18.1", "from":"/2023/01/gitea-1.18.1-is-released/"},
    { "to": "/release-of-1.18.0", "from":"/2022/12/gitea-1.18.0-is-released/"},
    { "to": "/release-of-1.17.4", "from":"/2022/12/gitea-1.17.4-is-released/"},
            { to: '/quarterly-23q1',from:'/2023/02/gitea-quarterly-report-23q1/',},
            { to: '/feature-preview-gitea-actions',from:'/2022/12/feature-preview-gitea-actions/',},
            { to: '/a-message-from-lunny-on-gitea-ltd.-and-the-gitea-project',from:'/2022/10/a-message-from-lunny-on-gitea-ltd.-and-the-gitea-project/',},
            { to: '/open-source-sustainment',from:'/2022/10/open-source-sustainment-and-the-future-of-gitea/',},
            { "to": "/release-of-1.17.3", "from":"/2022/10/gitea-1.17.3-is-released/"},
    { "to": "/release-of-1.17.2", "from":"/2022/09/gitea-1.17.2-is-released/"},
    { "to": "/release-of-1.17.1", "from":"/2022/08/gitea-1.17.1-is-released/"},
    { "to": "/release-of-1.17.0", "from":"/2022/07/gitea-1.17.0-is-released/"},
    { "to": "/release-of-1.16.9", "from":"/2022/07/gitea-1.16.9-is-released/"},
    { "to": "/release-of-1.16.8", "from":"/2022/05/gitea-1.16.8-is-released/"},
    { "to": "/release-of-1.16.7", "from":"/2022/05/gitea-1.16.7-is-released/"},
            { to: '/render-jupyter-notebooks',from:'/2022/04/how-to-render-jupyter-notebooks-on-gitea/',},
            { to: '/running-gitea-on-flyio',from:'/2022/04/running-gitea-on-fly.io/',},
            { "to": "/release-of-1.16.6", "from":"/2022/04/gitea-1.16.6-is-released/"},
    { "to": "/release-of-1.16.5", "from":"/2022/03/gitea-1.16.5-is-released/"},
    { "to": "/release-of-1.16.4", "from":"/2022/03/gitea-1.16.4-is-released/"},
    { "to": "/release-of-1.15.11", "from":"/2022/01/gitea-1.15.11-is-released/"},
    { "to": "/release-of-1.15.10", "from":"/2022/01/gitea-1.15.10-is-released/"},
    { "to": "/release-of-1.15.9", "from":"/2022/01/gitea-1.15.9-is-released/"},
    { "to": "/release-of-1.15.8", "from":"/2021/12/gitea-1.15.8-is-released/"},
    { "to": "/release-of-1.15.7", "from":"/2021/12/gitea-1.15.7-is-released/"},
    { "to": "/release-of-1.15.6", "from":"/2021/10/gitea-1.15.6-is-released/"},
    { "to": "/release-of-1.15.5", "from":"/2021/10/gitea-1.15.5-is-released/"},
    { "to": "/release-of-1.15.4", "from":"/2021/10/gitea-1.15.4-is-released/"},
    { "to": "/release-of-1.15.3", "from":"/2021/09/gitea-1.15.3-is-released/"},
    { "to": "/release-of-1.15.2", "from":"/2021/09/gitea-1.15.2-is-released/"},
    { "to": "/release-of-1.15.0", "from":"/2021/08/gitea-1.15.0-is-released/"},
    { "to": "/release-of-1.14.6", "from":"/2021/08/gitea-1.14.6-is-released/"},
    { "to": "/release-of-1.14.5", "from":"/2021/07/gitea-1.14.5-is-released/"},
    { "to": "/release-of-1.14.4", "from":"/2021/07/gitea-1.14.4-is-released/"},
    { "to": "/release-of-1.14.3", "from":"/2021/06/gitea-1.14.3-is-released/"},
    { "to": "/release-of-1.14.2", "from":"/2021/05/gitea-1.14.2-is-released/"},
    { "to": "/release-of-1.14.1", "from":"/2021/04/gitea-1.14.1-is-released/"},
    { "to": "/release-of-1.14.0", "from":"/2021/04/gitea-1.14.0-is-released/"},
    { "to": "/release-of-1.13.7", "from":"/2021/04/gitea-1.13.7-is-released/"},
    { "to": "/release-of-1.13.6", "from":"/2021/03/gitea-1.13.6-is-released/"},
    { "to": "/release-of-1.13.5", "from":"/2021/03/gitea-1.13.5-is-released/"},
    { "to": "/release-of-1.13.4", "from":"/2021/03/gitea-1.13.4-is-released/"},
    { "to": "/release-of-1.13.3", "from":"/2021/03/gitea-1.13.3-is-released/"},
    { "to": "/release-of-1.13.2", "from":"/2021/02/gitea-1.13.2-is-released/"},
    { "to": "/release-of-1.13.1", "from":"/2020/12/gitea-1.13.1-is-released/"},
    { "to": "/release-of-1.13.0", "from":"/2020/12/gitea-1.13.0-is-released/"},
    { "to": "/release-of-1.12.6", "from":"/2020/11/gitea-1.12.6-is-released/"},
    { "to": "/release-of-1.12.5", "from":"/2020/10/gitea-1.12.5-is-released/"},
    { "to": "/release-of-1.12.4", "from":"/2020/09/gitea-1.12.4-is-released/"},
    { "to": "/release-of-1.12.3", "from":"/2020/07/gitea-1.12.3-is-released/"},
    { "to": "/release-of-1.12.2", "from":"/2020/07/gitea-1.12.2-is-released/"},
            { to: '/introducing-helm-chart',from:'/2020/09/introducing-an-official-helm-chart-for-gitea/',},
            { "to": "/release-of-1.11.7", "from":"/2020/06/gitea-1.11.7-is-released/"},    { "to": "/release-of-1.11.6", "from":"/2020/05/gitea-1.11.6-is-released/"},    { "to": "/release-of-1.11.5", "from":"/2020/05/gitea-1.11.5-is-released/"},    { "to": "/release-of-1.11.4", "from":"/2020/04/gitea-1.11.4-is-released/"},
             //{ "to": "/release-of-1.11.3-and-1.10.6", "from":"/2020/03/gitea-1.11.3-and-1.10.6-released/"},
               { "to": "/release-of-1.11.2", "from":"/2020/03/gitea-1.11.2-is-released/"},    { "to": "/release-of-1.11.1", "from":"/2020/02/gitea-1.11.1-is-released/"},    { "to": "/release-of-1.11.0", "from":"/2020/02/gitea-1.11.0-is-released/"},    { "to": "/release-of-1.10.3", "from":"/2020/01/gitea-1.10.3-is-released/"},    { "to": "/release-of-1.10.2", "from":"/2020/01/gitea-1.10.2-is-released/"},    { "to": "/release-of-1.10.1", "from":"/2019/12/gitea-1.10.1-is-released/"},    { "to": "/release-of-1.10.0", "from":"/2019/11/gitea-1.10.0-is-released/"},    { "to": "/release-of-1.9.6", "from":"/2019/11/gitea-1.9.6-is-released/"},    { "to": "/release-of-1.9.5", "from":"/2019/10/gitea-1.9.5-is-released/"},    { "to": "/release-of-1.9.4", "from":"/2019/10/gitea-1.9.4-is-released/"},    { "to": "/release-of-1.9.3", "from":"/2019/09/gitea-1.9.3-is-released/"},    { "to": "/release-of-1.9.2", "from":"/2019/08/gitea-1.9.2-is-released/"},    { "to": "/release-of-1.9.1", "from":"/2019/08/gitea-1.9.1-is-released/"},    { "to": "/release-of-1.9.0", "from":"/2019/07/gitea-1.9.0-is-released/"},    { "to": "/release-of-1.8.3", "from":"/2019/06/gitea-1.8.3-is-released/"},    { "to": "/release-of-1.8.2", "from":"/2019/05/gitea-1.8.2-is-released/"},    { "to": "/release-of-1.8.1", "from":"/2019/05/gitea-1.8.1-is-released/"},    { "to": "/release-of-1.8.0", "from":"/2019/04/gitea-1.8.0-is-released/"},    { "to": "/release-of-1.7.6", "from":"/2019/04/gitea-1.7.6-is-released/"},    { "to": "/release-of-1.7.5", "from":"/2019/03/gitea-1.7.5-is-released/"},    { "to": "/release-of-1.7.4", "from":"/2019/03/gitea-1.7.4-is-released/"},
            { to: '/release-of-1.7.3',from:'/2019/02/release-of-1.7.3/',},
            { to: '/release-of-1.7.2',from:'/2019/02/release-of-1.7.2/',},
            { to: '/release-of-1.7.1',from:'/2019/02/release-of-1.7.1/',},
            { to: '/release-of-1.7.0',from:'/2019/01/gitea-1.7.0-is-released/',},
            { to: '/release-of-1.6.3',from:'/2019/01/release-of-1.6.3/',},
            { to: '/release-of-1.6.2',from:'/2018/12/release-of-1.6.2/',},
            { to: '/release-of-1.6.1',from:'/2018/12/gitea-1.6.1-is-released/',},
            { to: '/release-of-1.6.0',from:'/2018/11/gitea-1.6.0-is-released/',},
            { to: '/release-of-1.5.3',from:'/2018/10/gitea-1.5.3-is-released/',},
            { to: '/release-of-1.5.2',from:'/2018/10/gitea-1.5.2-is-released/',},
            { to: '/release-of-1.5.1',from:'/2018/09/gitea-1.5.1-is-released/',},
            { to: '/release-of-1.5.0',from:'/2018/08/gitea-1.5.0-is-released/',},
            { to: '/release-of-1.4.3',from:'/2018/06/release-of-1.4.3/',},
            { to: '/release-of-1.4.2',from:'/2018/06/release-of-1.4.2/',},
            { to: '/release-of-1.4.1',from:'/2018/05/release-of-1.4.1/',},
            { to: '/release-of-1.4.0',from:'/2018/03/gitea-1.4.0-is-released/',},
            { to: '/release-of-1.3.3',from:'/2018/02/release-of-1.3.3/',},
            { to: '/release-of-1.3.2',from:'/2017/12/release-of-1.3.2/',},
            { to: '/release-of-1.3.1',from:'/2017/12/release-of-1.3.1/',},
            { to: '/release-of-1.3.0',from:'/2017/11/release-of-1.3.0/',},
            { to: '/release-of-1.2.3',from:'/2017/11/release-of-1.2.3/',},
            { to: '/release-of-1.2.2',from:'/2017/10/release-of-1.2.2/',},
            { to: '/release-of-1.2.1',from:'/2017/10/release-of-1.2.1/',},
            { to: '/release-of-1.2.0',from:'/2017/10/release-of-1.2.0/',},
            { to: '/release-of-1.1.4',from:'/2017/09/release-of-1.1.4/',},
            { to: '/release-of-1.1.3',from:'/2017/08/release-of-1.1.3/',},
            { to: '/release-of-1.1.2',from:'/2017/06/release-of-1.1.2/',},
            { to: '/release-of-1.1.1',from:'/2017/05/release-of-1.1.1/',},
            { to: '/release-of-1.1.0',from:'/2017/03/release-of-1.1.0/',},
            { to: '/release-of-1.0.2',from:'/2017/02/release-of-1.0.2/',},
            { to: '/release-of-1.0.1',from:'/2017/01/release-of-1.0.1/',},
            { to: '/release-of-1.0.0',from:'/2016/12/release-of-1.0.0/',},
            { to: '/welcome-to-gitea',from:'/2016/12/welcome-to-gitea/',},
            { "to": "/release-of-1.16.2-and-1.16.3", "from":"/2022/03/gitea-1.16.2-and-1.16.3-released/"},
    { "to": "/release-of-1.16.0-and-1.16.1", "from":"/2022/02/gitea-1.16.0-and-1.16.1-released/"},
    { "to": "/release-of-1.15.1-and-1.14.7", "from":"/2021/09/gitea-1.15.1-and-1.14.7-are-released/"},
    { "to": "/release-of-tea-0.8.0", "from":"/2021/09/tea-0.8.0-is-released/"},
    { "to": "/release-of-tea-0.7.0", "from":"/2021/03/tea-0.7.0-is-released/"},
    { "to": "/release-of-tea-0.4.0", "from":"/2020/07/tea-0.4.0-is-released/"},
    //{ "to": "/release-of-1.12.0-and-1.12.1", "from":"/2020/06/gitea-1.12.0-and-1.12.1-are-released/"}
          ],
        },
      ],
      [
        'docusaurus-plugin-plausible',
        {
          domain: 'blog.gitea.com',
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
        gtag: {
            trackingID: 'G-BLKS03QEDY'
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
      announcementBar: {
        id: 'announcementBar-4', // Increment on change
        content: `<a href="https://about.gitea.com/products/cloud">Try &nbsp; Gitea Cloud &nbsp;  ☁️  &nbsp; for 30 days <span aria-hidden="true">&rarr;</span> Accelerate your Development & Deploys!</a>`,
      },
      navbar: {
        title: 'Gitea',
        logo: {
          alt: 'Gitea Logo',
          src: 'img/logo.svg',
          href: 'https://about.gitea.com/',
          target: '_self',
        },
        items: [
          {
            href: 'https://docs.gitea.com/',
            label: 'Docs',
            position: 'left',
            className: 'internal-href',
            target: '_self',
          },
          {
            href: 'https://docs.gitea.com/api/1.20/',
            label: 'API',
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
            href: 'https://github.com/go-gitea/gitea',
            label: 'Code',
            position: 'left',
          },
          {
            href: 'https://docs.gitea.com/enterprise',
            label: 'Enterprise',
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
            target: '_self',
          },
          {
            href: 'https://gitea.com/user/login',
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
                label: 'Tutorial',
                href: 'https://docs.gitea.com/',
                className: 'internal-href',
                target: '_self',
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
        additionalLanguages: ['ini'],
      },
      image: '/img/logo.svg',
      metadata: [{name: 'og:logo', content: '/img/logo.svg'}]
    }),
};

module.exports = config;
