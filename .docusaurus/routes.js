import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '8dc'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '9cb'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '530'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3d'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '131'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', 'b6e'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '40d'),
    exact: true
  },
  {
    path: '/archive',
    component: ComponentCreator('/archive', 'a37'),
    exact: true
  },
  {
    path: '/bestViewedByAnyBrowser',
    component: ComponentCreator('/bestViewedByAnyBrowser', '7fc'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', '89f'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '1f6'),
    exact: true
  },
  {
    path: '/blog/dc-the-opportunity-project',
    component: ComponentCreator('/blog/dc-the-opportunity-project', 'd92'),
    exact: true
  },
  {
    path: '/blog/debugxiety',
    component: ComponentCreator('/blog/debugxiety', 'bea'),
    exact: true
  },
  {
    path: '/blog/dreaming',
    component: ComponentCreator('/blog/dreaming', '814'),
    exact: true
  },
  {
    path: '/blog/liminal-spaces-art-of-appreciating',
    component: ComponentCreator('/blog/liminal-spaces-art-of-appreciating', '69f'),
    exact: true
  },
  {
    path: '/blog/newsletter time',
    component: ComponentCreator('/blog/newsletter time', '7f0'),
    exact: true
  },
  {
    path: '/blog/newsletter1',
    component: ComponentCreator('/blog/newsletter1', '794'),
    exact: true
  },
  {
    path: '/blog/newsletter2',
    component: ComponentCreator('/blog/newsletter2', '61c'),
    exact: true
  },
  {
    path: '/blog/newsletter3',
    component: ComponentCreator('/blog/newsletter3', 'e54'),
    exact: true
  },
  {
    path: '/blog/on-macos-and-libre-software',
    component: ComponentCreator('/blog/on-macos-and-libre-software', 'dd5'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '940'),
    exact: true
  },
  {
    path: '/blog/tags/academia',
    component: ComponentCreator('/blog/tags/academia', 'b53'),
    exact: true
  },
  {
    path: '/blog/tags/aesthetics',
    component: ComponentCreator('/blog/tags/aesthetics', 'e3e'),
    exact: true
  },
  {
    path: '/blog/tags/art',
    component: ComponentCreator('/blog/tags/art', 'ff2'),
    exact: true
  },
  {
    path: '/blog/tags/code',
    component: ComponentCreator('/blog/tags/code', 'e86'),
    exact: true
  },
  {
    path: '/blog/tags/dictionary',
    component: ComponentCreator('/blog/tags/dictionary', 'a95'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', 'e67'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '493'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', 'd15'),
    exact: true
  },
  {
    path: '/blog/tags/hobbies',
    component: ComponentCreator('/blog/tags/hobbies', '952'),
    exact: true
  },
  {
    path: '/blog/tags/i-cons',
    component: ComponentCreator('/blog/tags/i-cons', '0fa'),
    exact: true
  },
  {
    path: '/blog/tags/internet-wonders',
    component: ComponentCreator('/blog/tags/internet-wonders', 'cd7'),
    exact: true
  },
  {
    path: '/blog/tags/life',
    component: ComponentCreator('/blog/tags/life', 'c7c'),
    exact: true
  },
  {
    path: '/blog/tags/liminal-space',
    component: ComponentCreator('/blog/tags/liminal-space', 'f0e'),
    exact: true
  },
  {
    path: '/blog/tags/newsletter',
    component: ComponentCreator('/blog/tags/newsletter', '382'),
    exact: true
  },
  {
    path: '/blog/tags/nostalgia',
    component: ComponentCreator('/blog/tags/nostalgia', '172'),
    exact: true
  },
  {
    path: '/blog/tags/open-source',
    component: ComponentCreator('/blog/tags/open-source', '05f'),
    exact: true
  },
  {
    path: '/blog/tags/personal',
    component: ComponentCreator('/blog/tags/personal', '05d'),
    exact: true
  },
  {
    path: '/blog/tags/website',
    component: ComponentCreator('/blog/tags/website', 'd7d'),
    exact: true
  },
  {
    path: '/blog/the finechive',
    component: ComponentCreator('/blog/the finechive', 'ed3'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', '609'),
    exact: true
  },
  {
    path: '/disclaimer_fsf',
    component: ComponentCreator('/disclaimer_fsf', '4fd'),
    exact: true
  },
  {
    path: '/dontpanic',
    component: ComponentCreator('/dontpanic', '36e'),
    exact: true
  },
  {
    path: '/source',
    component: ComponentCreator('/source', '756'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'ae4'),
    routes: [
      {
        path: '/docs/category/research',
        component: ComponentCreator('/docs/category/research', '60f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/the-finechive',
        component: ComponentCreator('/docs/category/the-finechive', 'a52'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/finechive/blog',
        component: ComponentCreator('/docs/finechive/blog', 'd13'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/finechive/code-projects',
        component: ComponentCreator('/docs/finechive/code-projects', 'dc8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/finechive/contents',
        component: ComponentCreator('/docs/finechive/contents', '875'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/finechive/morbios',
        component: ComponentCreator('/docs/finechive/morbios', 'c34'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/finechive/now',
        component: ComponentCreator('/docs/finechive/now', '93d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/finechive/photography',
        component: ComponentCreator('/docs/finechive/photography', 'd13'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/finechive/preface',
        component: ComponentCreator('/docs/finechive/preface', 'c21'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/finechive/saberstat',
        component: ComponentCreator('/docs/finechive/saberstat', '928'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/finechive/scripting-shenanigans',
        component: ComponentCreator('/docs/finechive/scripting-shenanigans', 'd3f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/finechive/tech-config',
        component: ComponentCreator('/docs/finechive/tech-config', '3a4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro', 'aed'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/links',
        component: ComponentCreator('/docs/links', '336'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/orgs',
        component: ComponentCreator('/docs/orgs', '9df'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/research/CICS',
        component: ComponentCreator('/docs/research/CICS', '7ab'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/research/icons',
        component: ComponentCreator('/docs/research/icons', '518'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/research/ongoing',
        component: ComponentCreator('/docs/research/ongoing', 'cc0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/research/projects',
        component: ComponentCreator('/docs/research/projects', '0ed'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/resume',
        component: ComponentCreator('/docs/resume', 'cbf'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '156'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
