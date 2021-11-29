
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug','3d6'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config','914'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content','c28'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData','3cf'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata','31b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry','0da'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes','244'),
    exact: true
  },
  {
    path: '/about',
    component: ComponentCreator('/about','239'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog','88f'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive','f4c'),
    exact: true
  },
  {
    path: '/blog/robochain-test-version',
    component: ComponentCreator('/blog/robochain-test-version','225'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags','e13'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello','c54'),
    exact: true
  },
  {
    path: '/blog/tags/launch',
    component: ComponentCreator('/blog/tags/launch','c95'),
    exact: true
  },
  {
    path: '/blog/tags/robochain',
    component: ComponentCreator('/blog/tags/robochain','976'),
    exact: true
  },
  {
    path: '/blog/tags/test',
    component: ComponentCreator('/blog/tags/test','286'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome','3cb'),
    exact: true
  },
  {
    path: '/contact',
    component: ComponentCreator('/contact','244'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs','899'),
    routes: [
      {
        path: '/docs/community',
        component: ComponentCreator('/docs/community','b1a'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/description',
        component: ComponentCreator('/docs/description','352'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/gameplay/auctions',
        component: ComponentCreator('/docs/gameplay/auctions','93a'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/gameplay/headquarters',
        component: ComponentCreator('/docs/gameplay/headquarters','beb'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/gameplay/mines',
        component: ComponentCreator('/docs/gameplay/mines','4f4'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Privacy policy',
        component: ComponentCreator('/docs/Privacy policy','19e'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/roadmap',
        component: ComponentCreator('/docs/roadmap','7ea'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/story',
        component: ComponentCreator('/docs/story','a65'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/team',
        component: ComponentCreator('/docs/team','e04'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/technology',
        component: ComponentCreator('/docs/technology','57f'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/terms&conditions',
        component: ComponentCreator('/docs/terms&conditions','f5f'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/tokenomics',
        component: ComponentCreator('/docs/tokenomics','110'),
        exact: true,
        'sidebar': "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/','deb'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
