// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/synthwave84');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Kushagra Srivastava',
  tagline: 'Operating Systems & Compilers Programmer | AI/ML Specialization (NLP)',
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
          //Not permitting edits: for future reference ```editUrl: ```
        },
        blog: {
          showReadingTime: true,
          blogTitle: 'Fineletters.',
          blogListComponent: '@theme/BlogListPage',
          blogDescription: 'The Finechive Newsletter, by Kush S.',
          postsPerPage: 'ALL',
          blogSidebarCount: 0,
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
            label: 'About Me',
          },
          {to: '/docs/resume', label: 'Resume', position: 'left'},
          {to: '/docs/category/research', label: 'Research & Ongoing', position: 'left'},
          {
            href: 'mailto:ksrivastava@umass.edu',
            label: 'Contact',
            position: 'left',
          },
          {to: '/blog', label: 'Blog', position: 'right'},
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Research + Programming',
            items: [
              {
                label: 'About Me',
                to: '/docs/intro',
              },
              {
                label: 'Ongoing Projects',
                to: '/docs/research/ongoing',
              },
              {
                label: 'iCons Research',
                to: '/docs/research/iCons',
              },
              {
                label: 'Manning CICS Projects',
                to: '/docs/research/CICS',
              },
              {
                label: 'Other Programming Projects',
                to: '/docs/research/projects',
              },
            ],           
          },
          {
            title: 'Creative + Hobby',
            items: [
              {
                label: 'Finechive',
                to: '/docs/category/the-finechive',
              },
              {
                label: 'Fineletters',
                to: '/blog',
              },
              {
                label: 'Photography & Digital Art',
                to: '/docs/finechive/photography',
              },
              {
                label: 'Code (Hobby)',
                to: '/docs/finechive/code-projects'
              },
              {
                label: `Don't Panic`,
                to: '/dontpanic',
              },
            ],
          },
          {
            title: 'On the Web',
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
		      html: `<a href="https://orcid.org/0000-0003-0656-5478" style="color: #FFFFFF;">
				Kush S. ORCiD
              	<img alt="ORCID logo" src="https://info.orcid.org/wp-content/uploads/2019/11/orcid_16x16.png" width="16" height="16" />
              	</a>`,
              },
              {
		            label: 'Threads',
		            href: 'https://threads.net/@suobset',
              },
              {
		            label: 'Everything Else',
		            to: '/docs/links',
              },
            ],
          },
          {
            title: 'Site Meta',
            items: [
              {
                label: 'Site Archive',
                to: '/archive',
              },
              {
                label: 'Libre Source',
                to: '/source',
              },
              {
                html: `<a href="https://skushagra.com/docs/finechive/scripting-shenanigans#delcookies"><img src="https://suobset.github.io/finechive-helper/88x31/noocookie.gif"></img></a>`
              },
              {
                html: `<a href="bestViewedByAnyBrowser"><img src="https://suobset.github.io/finechive-helper/88x31/lynx.gif"></img></a>`
              }
            ]
          }
        ],
        copyright: `Copyright © 2019-${new Date().getFullYear()} Kushagra Srivastava <br />
        All views expressed here are my own, and not representative of my organization or university.`,
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true, //Disable switching to dark mode, it never existed
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
