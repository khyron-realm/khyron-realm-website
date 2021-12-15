
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/about',
    component: ComponentCreator('/about','239'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog','8f8'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive','f4c'),
    exact: true
  },
  {
    path: '/blog/khyron-test-version',
    component: ComponentCreator('/blog/khyron-test-version','339'),
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
    component: ComponentCreator('/blog/tags/khyron','1e1'),
    exact: true
  },
  {
    path: '/blog/tags/launch',
    component: ComponentCreator('/blog/tags/launch','40e'),
    exact: true
  },
  {
    path: '/blog/tags/test',
    component: ComponentCreator('/blog/tags/test','bcb'),
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
    component: ComponentCreator('/docs','9ee'),
    routes: [
      {
        path: '/docs/credits',
        component: ComponentCreator('/docs/credits','01c'),
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
        path: '/docs/disclaimer',
        component: ComponentCreator('/docs/disclaimer','7ad'),
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
        path: '/docs/getting_started',
        component: ComponentCreator('/docs/getting_started','fdc'),
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
        path: '/docs/story/supplies',
        component: ComponentCreator('/docs/story/supplies','a1a'),
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
