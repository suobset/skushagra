import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', 'f4a'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', 'ddf'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '338'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'a90'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '210'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '822'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '618'),
    exact: true
  },
  {
    path: '/archive',
    component: ComponentCreator('/archive', '4a1'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', '98a'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '679'),
    exact: true
  },
  {
    path: '/blog/dc-the-opportunity-project',
    component: ComponentCreator('/blog/dc-the-opportunity-project', '317'),
    exact: true
  },
  {
    path: '/blog/liminal spaces art of appreciating',
    component: ComponentCreator('/blog/liminal spaces art of appreciating', 'ba0'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', 'c9f'),
    exact: true
  },
  {
    path: '/blog/tags/academia',
    component: ComponentCreator('/blog/tags/academia', '265'),
    exact: true
  },
  {
    path: '/blog/tags/aesthetics',
    component: ComponentCreator('/blog/tags/aesthetics', '499'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', 'bc5'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '2a2'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', 'b6c'),
    exact: true
  },
  {
    path: '/blog/tags/i-cons',
    component: ComponentCreator('/blog/tags/i-cons', 'af6'),
    exact: true
  },
  {
    path: '/blog/tags/life',
    component: ComponentCreator('/blog/tags/life', 'c54'),
    exact: true
  },
  {
    path: '/blog/tags/liminal-space',
    component: ComponentCreator('/blog/tags/liminal-space', '5bf'),
    exact: true
  },
  {
    path: '/blog/tags/nostalgia',
    component: ComponentCreator('/blog/tags/nostalgia', '30a'),
    exact: true
  },
  {
    path: '/blog/tags/personal',
    component: ComponentCreator('/blog/tags/personal', '24b'),
    exact: true
  },
  {
    path: '/blog/tags/website',
    component: ComponentCreator('/blog/tags/website', '517'),
    exact: true
  },
  {
    path: '/blog/the finechive',
    component: ComponentCreator('/blog/the finechive', '72b'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', '8c7'),
    exact: true
  },
  {
    path: '/disclaimer_fsf',
    component: ComponentCreator('/disclaimer_fsf', '599'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '85a'),
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
        path: '/docs/finechive/preface',
        component: ComponentCreator('/docs/finechive/preface', 'c21'),
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
    component: ComponentCreator('/', 'faa'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
