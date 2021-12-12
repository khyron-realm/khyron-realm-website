module.exports = {
  title: "KHYRON REALM",
  tagline: "Free to Play to Earn MMO",
  url: "https://khyron-realm.netlify.app",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "Unlimited Studios",
  projectName: "khyron-realm",
  themeConfig: {
    colorMode: {
      defaultMode: "light",
      disableSwitch: false,
      respectPrefersColorScheme: true,
      switchConfig: {
        darkIcon: "🌙",
        darkIconStyle: {
          marginLeft: "2px",
        },
        lightIcon: "☀️",
        lightIconStyle: {
          marginLeft: "1px",
        },
      },
    },
    prism: {
      theme: require("prism-react-renderer/themes/dracula"),
      darkTheme: require("prism-react-renderer/themes/dracula"),
    },
    image: "img/logo/logo.png",
    navbar: {
      hideOnScroll: true,
      title: "Khyron Realm",
      logo: {
        alt: "Khyron Realm Logo",
        src: "img/logo/logo.png",
        srcDark: "img/logo/logo.png",
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
          href: '/docs/getting_started',
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
      links: [
        {
          title: 'Getting started',
          items: [
            {
              label: 'Wiki',
              to: '/docs/description',
            },
            {
              label: 'Play demo',
              to: '/play',
            },
          ],
        },
        {
          title: 'Team',
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
        {
          title: 'Social',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/JpgFgxvqSK',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/robo_chain',
            },
            {
              label: 'LinkedIn',
              href: 'https://linkedin.com/',
            },
            {
              label: 'YouTube',
              href: 'https://www.youtube.com/channel/UC6f6rpDLnvDvEFDiB3t6-Jw',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Khyron Realm. All rights reserved.`,
    },
  },
  plugins: ["docusaurus-plugin-sass", "@docusaurus/plugin-ideal-image"],
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/target-software/game-website/wiki/",
        },
        blog: {
          showReadingTime: true,
          editUrl: "https://github.com/target-software/game-website/blog",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.scss"),
        },
        gtag: {
          trackingID: 'G-7M84C2EJB5',
          anonymizeIP: true,
        }
      },
    ],
  ],
};
