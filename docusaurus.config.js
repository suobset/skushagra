// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Kushagra Srivastava',
  tagline: 'I like devising solutions to real-world problems in an effective and efficient manner.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://skushagra.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'suobset', // Usually your GitHub org/user name.
  projectName: 'skushagra', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Kush S.',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Site Highlights',
            items: [
              {
                label: 'About Me + Everything',
                to: '/docs/intro',
              },
              {
              	label: 'iCons Projects',
              	to: '/docs/icons'
              },
              {
              	label: 'Blog',
              	to: '/blog',
              },
              {
              	label: 'Resume',
              	to: '/docs/resume',
              }
            ],           
          },
          {
            title: 'On the web',
            items: [
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/suobset/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/suobset',
              },
              {
              	label: 'ORCiD',
              	href: 'https://orcid.org/0000-0003-0656-5478'
              },
              {
                label: 'Miscellaneous',
                to: '/docs/links',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                html: `<a href='https://fsf.org'><img src='https://static.fsf.org/nosvn/associate/crm/6091180.png'></img></a>`,
              },
              {
                label: 'Source Code for this site',
                href: 'https://github.com/suobset/skushagra',
              },
              {
              	label: 'Built with Docusaurus',
              	href: 'https://docusaurus.io',
              },
            ],
          },
        ],
        copyright: `Copyright © 2019-${new Date().getFullYear()} Kushagra Srivastava`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
