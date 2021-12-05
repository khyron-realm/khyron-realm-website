// @ts-check

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'KHYRON REALM',
  tagline: 'Crypto MMO Game',
  url: 'https://khyron-realm.netlify.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.png',
  organizationName: 'target-software',
  projectName: 'khyron-realm',

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/target-software/game-website/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/target-software/game-website/blog/',
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
      navbar: {
        title: 'Khyron Realm',
        logo: {
          alt: 'Khyron Realm logo',
          src: 'img/logo/logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'description',
            position: 'left',
            label: 'Wiki',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: '/about',
            label: 'About',
            position: 'left',
          },
          {
            href: '/contact',
            label: 'Contact',
            position: 'left',
          },
          {
            href: '/play_now',
            label: 'Play Demo',
            position: 'right',
          },
          {
            href: 'https://discord.gg/JpgFgxvqSK',
            label: 'Discord',
            position: 'right',
          },
          {
            href: '#',
            label: 'Donate',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Wiki',
                to: '/docs/description',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'YouTube',
                href: 'https://www.youtube.com/channel/UC6f6rpDLnvDvEFDiB3t6-Jw',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/JpgFgxvqSK',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/robo_chain',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'Docusaurus',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Khyron Realm.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
