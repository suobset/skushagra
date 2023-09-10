import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '14c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', 'fc8'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '6db'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '14e'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', 'e30'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', 'e5a'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '301'),
    exact: true
  },
  {
    path: '/archive',
    component: ComponentCreator('/archive', 'f08'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'cb8'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '41b'),
    exact: true
  },
  {
    path: '/blog/liminal spaces art of appreciating',
    component: ComponentCreator('/blog/liminal spaces art of appreciating', '928'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '1da'),
    exact: true
  },
  {
    path: '/blog/tags/aesthetics',
    component: ComponentCreator('/blog/tags/aesthetics', 'c8e'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', 'e03'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '5a0'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', 'a9b'),
    exact: true
  },
  {
    path: '/blog/tags/life',
    component: ComponentCreator('/blog/tags/life', 'e3a'),
    exact: true
  },
  {
    path: '/blog/tags/liminal-space',
    component: ComponentCreator('/blog/tags/liminal-space', 'dd7'),
    exact: true
  },
  {
    path: '/blog/tags/nostalgia',
    component: ComponentCreator('/blog/tags/nostalgia', 'a24'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', '000'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '4bf'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '517'),
    routes: [
      {
        path: '/docs/category/research',
        component: ComponentCreator('/docs/category/research', '60f'),
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
    component: ComponentCreator('/', '0d2'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
