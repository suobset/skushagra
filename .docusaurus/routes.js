import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '265'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '70c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'acd'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '3be'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '314'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '7df'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', 'ddc'),
    exact: true
  },
  {
    path: '/archive',
    component: ComponentCreator('/archive', '791'),
    exact: true
  },
  {
    path: '/bestViewedByAnyBrowser',
    component: ComponentCreator('/bestViewedByAnyBrowser', '961'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', '01c'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '75d'),
    exact: true
  },
  {
    path: '/blog/dc-the-opportunity-project',
    component: ComponentCreator('/blog/dc-the-opportunity-project', '78c'),
    exact: true
  },
  {
    path: '/blog/debugxiety',
    component: ComponentCreator('/blog/debugxiety', '749'),
    exact: true
  },
  {
    path: '/blog/dreaming',
    component: ComponentCreator('/blog/dreaming', '6c8'),
    exact: true
  },
  {
    path: '/blog/liminal-spaces-art-of-appreciating',
    component: ComponentCreator('/blog/liminal-spaces-art-of-appreciating', 'b77'),
    exact: true
  },
  {
    path: '/blog/newsletter time',
    component: ComponentCreator('/blog/newsletter time', 'a83'),
    exact: true
  },
  {
    path: '/blog/newsletter1',
    component: ComponentCreator('/blog/newsletter1', 'd84'),
    exact: true
  },
  {
    path: '/blog/newsletter2',
    component: ComponentCreator('/blog/newsletter2', '519'),
    exact: true
  },
  {
    path: '/blog/newsletter3',
    component: ComponentCreator('/blog/newsletter3', 'c29'),
    exact: true
  },
  {
    path: '/blog/newsletter4',
    component: ComponentCreator('/blog/newsletter4', '0ab'),
    exact: true
  },
  {
    path: '/blog/on-macos-and-libre-software',
    component: ComponentCreator('/blog/on-macos-and-libre-software', 'cb1'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '5ec'),
    exact: true
  },
  {
    path: '/blog/tags/academia',
    component: ComponentCreator('/blog/tags/academia', 'fd8'),
    exact: true
  },
  {
    path: '/blog/tags/aesthetics',
    component: ComponentCreator('/blog/tags/aesthetics', '76a'),
    exact: true
  },
  {
    path: '/blog/tags/art',
    component: ComponentCreator('/blog/tags/art', 'fff'),
    exact: true
  },
  {
    path: '/blog/tags/code',
    component: ComponentCreator('/blog/tags/code', '639'),
    exact: true
  },
  {
    path: '/blog/tags/dictionary',
    component: ComponentCreator('/blog/tags/dictionary', '935'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', 'ee7'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', 'c40'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '49f'),
    exact: true
  },
  {
    path: '/blog/tags/hobbies',
    component: ComponentCreator('/blog/tags/hobbies', 'e2f'),
    exact: true
  },
  {
    path: '/blog/tags/i-cons',
    component: ComponentCreator('/blog/tags/i-cons', '24b'),
    exact: true
  },
  {
    path: '/blog/tags/internet-wonders',
    component: ComponentCreator('/blog/tags/internet-wonders', '745'),
    exact: true
  },
  {
    path: '/blog/tags/life',
    component: ComponentCreator('/blog/tags/life', '29f'),
    exact: true
  },
  {
    path: '/blog/tags/liminal-space',
    component: ComponentCreator('/blog/tags/liminal-space', 'ec4'),
    exact: true
  },
  {
    path: '/blog/tags/newsletter',
    component: ComponentCreator('/blog/tags/newsletter', 'd8d'),
    exact: true
  },
  {
    path: '/blog/tags/nostalgia',
    component: ComponentCreator('/blog/tags/nostalgia', '17d'),
    exact: true
  },
  {
    path: '/blog/tags/open-source',
    component: ComponentCreator('/blog/tags/open-source', 'a8f'),
    exact: true
  },
  {
    path: '/blog/tags/personal',
    component: ComponentCreator('/blog/tags/personal', '726'),
    exact: true
  },
  {
    path: '/blog/tags/website',
    component: ComponentCreator('/blog/tags/website', '186'),
    exact: true
  },
  {
    path: '/blog/the finechive',
    component: ComponentCreator('/blog/the finechive', '9ca'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', 'fc7'),
    exact: true
  },
  {
    path: '/disclaimer_fsf',
    component: ComponentCreator('/disclaimer_fsf', 'b04'),
    exact: true
  },
  {
    path: '/dontpanic',
    component: ComponentCreator('/dontpanic', '3a6'),
    exact: true
  },
  {
    path: '/signup',
    component: ComponentCreator('/signup', '785'),
    exact: true
  },
  {
    path: '/source',
    component: ComponentCreator('/source', 'ed9'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '78c'),
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
    component: ComponentCreator('/', '655'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
