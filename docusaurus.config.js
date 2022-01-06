module.exports = {
  title: "KHYRON REALM",
  tagline: "Free to Play MMO game",
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
      hideOnScroll: false,
      title: "Khyron Realm",
      style: "dark",
      logo: {
        alt: "Khyron Realm Logo",
        src: "img/logo/logo.png",
        srcDark: "img/logo/logo.png",
      },
      items: [
        {
          type: 'doc',
          docId: 'description',
          position: 'right',
          label: 'Wiki',
        },
        {to: '/blog', label: 'Blog', position: 'right'},
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
              to: '/docs/getting_started',
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
              href: 'https://twitter.com/khyronrealm',
            },
            {
              label: 'YouTube',
              href: 'https://www.youtube.com/channel/UC6f6rpDLnvDvEFDiB3t6-Jw',
            },
          ],
        },
        {
          title: 'Info',
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
      copyright: `Copyright ©${new Date().getFullYear()} <b>Khyron Realm</b>. Website made with Docusaurus.`,
      style: "dark"
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
          trackingID: 'G-FPP6QP6WWS',
          anonymizeIP: true,
        }
      },
    ],
  ],
};
