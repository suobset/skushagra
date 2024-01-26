import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '8d8'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '656'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'bd7'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'b0e'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '1d9'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', 'db3'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', 'e4b'),
    exact: true
  },
  {
    path: '/archive',
    component: ComponentCreator('/archive', 'd88'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', '9b2'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', 'd35'),
    exact: true
  },
  {
    path: '/blog/dc-the-opportunity-project',
    component: ComponentCreator('/blog/dc-the-opportunity-project', '306'),
    exact: true
  },
  {
    path: '/blog/debugxiety',
    component: ComponentCreator('/blog/debugxiety', '001'),
    exact: true
  },
  {
    path: '/blog/dreaming',
    component: ComponentCreator('/blog/dreaming', '1a0'),
    exact: true
  },
  {
    path: '/blog/liminal spaces art of appreciating',
    component: ComponentCreator('/blog/liminal spaces art of appreciating', '924'),
    exact: true
  },
  {
    path: '/blog/on-macos-and-libre-software',
    component: ComponentCreator('/blog/on-macos-and-libre-software', 'bff'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '034'),
    exact: true
  },
  {
    path: '/blog/tags/academia',
    component: ComponentCreator('/blog/tags/academia', '3b0'),
    exact: true
  },
  {
    path: '/blog/tags/aesthetics',
    component: ComponentCreator('/blog/tags/aesthetics', 'fc7'),
    exact: true
  },
  {
    path: '/blog/tags/code',
    component: ComponentCreator('/blog/tags/code', '78c'),
    exact: true
  },
  {
    path: '/blog/tags/dictionary',
    component: ComponentCreator('/blog/tags/dictionary', '193'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', 'b9d'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '37f'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '645'),
    exact: true
  },
  {
    path: '/blog/tags/hobbies',
    component: ComponentCreator('/blog/tags/hobbies', 'c09'),
    exact: true
  },
  {
    path: '/blog/tags/i-cons',
    component: ComponentCreator('/blog/tags/i-cons', '4df'),
    exact: true
  },
  {
    path: '/blog/tags/life',
    component: ComponentCreator('/blog/tags/life', 'dba'),
    exact: true
  },
  {
    path: '/blog/tags/liminal-space',
    component: ComponentCreator('/blog/tags/liminal-space', '6ff'),
    exact: true
  },
  {
    path: '/blog/tags/nostalgia',
    component: ComponentCreator('/blog/tags/nostalgia', '7cf'),
    exact: true
  },
  {
    path: '/blog/tags/open-source',
    component: ComponentCreator('/blog/tags/open-source', 'a62'),
    exact: true
  },
  {
    path: '/blog/tags/personal',
    component: ComponentCreator('/blog/tags/personal', '246'),
    exact: true
  },
  {
    path: '/blog/tags/website',
    component: ComponentCreator('/blog/tags/website', '91f'),
    exact: true
  },
  {
    path: '/blog/the finechive',
    component: ComponentCreator('/blog/the finechive', '621'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', '766'),
    exact: true
  },
  {
    path: '/disclaimer_fsf',
    component: ComponentCreator('/disclaimer_fsf', '5d4'),
    exact: true
  },
  {
    path: '/dontpanic',
    component: ComponentCreator('/dontpanic', 'e77'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'a33'),
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
        path: '/docs/finechive/rosaceae',
        component: ComponentCreator('/docs/finechive/rosaceae', '0a6'),
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
    component: ComponentCreator('/', '3e9'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
