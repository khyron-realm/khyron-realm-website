
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
    component: ComponentCreator('/blog','e96'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive','f4c'),
    exact: true
  },
  {
    path: '/blog/robochain-test-version',
    component: ComponentCreator('/blog/robochain-test-version','ef2'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags','e13'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus','fbc'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook','393'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello','c54'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola','44c'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome','3cb'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page','be1'),
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
