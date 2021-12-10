
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
    path: '/blog/khyron-test-version',
    component: ComponentCreator('/blog/khyron-test-version','6b2'),
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
    path: '/blog/tags/khyron',
    component: ComponentCreator('/blog/tags/khyron','757'),
    exact: true
  },
  {
    path: '/blog/tags/launch',
    component: ComponentCreator('/blog/tags/launch','c95'),
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
    path: '/play',
    component: ComponentCreator('/play','a0e'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs','d7c'),
    routes: [
      {
        path: '/docs/description',
        component: ComponentCreator('/docs/description','352'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/disclaimer',
        component: ComponentCreator('/docs/disclaimer','7ad'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/gameplay/evolution',
        component: ComponentCreator('/docs/gameplay/evolution','874'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/gameplay/game',
        component: ComponentCreator('/docs/gameplay/game','c46'),
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
        path: '/docs/gameplay/mothership',
        component: ComponentCreator('/docs/gameplay/mothership','2ad'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/gameplay/planet',
        component: ComponentCreator('/docs/gameplay/planet','58a'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/gameplay/spaceship',
        component: ComponentCreator('/docs/gameplay/spaceship','b25'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/privacy_policy',
        component: ComponentCreator('/docs/privacy_policy','039'),
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
        path: '/docs/story/arrival',
        component: ComponentCreator('/docs/story/arrival','12c'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/story/beginning',
        component: ComponentCreator('/docs/story/beginning','e67'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/story/community',
        component: ComponentCreator('/docs/story/community','24a'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/story/supplyes',
        component: ComponentCreator('/docs/story/supplyes','07c'),
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
