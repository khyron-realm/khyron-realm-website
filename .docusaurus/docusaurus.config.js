export default {
  "title": "KHYRON REALM",
  "tagline": "Free to Play to Earn MMO",
  "url": "https://khyron-realm.netlify.app",
  "baseUrl": "/",
  "onBrokenLinks": "throw",
  "onBrokenMarkdownLinks": "warn",
  "favicon": "img/favicon.ico",
  "organizationName": "Unlimited Studios",
  "projectName": "khyron-realm",
  "themeConfig": {
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": false,
      "respectPrefersColorScheme": true,
      "switchConfig": {
        "darkIcon": "🌙",
        "darkIconStyle": {
          "marginLeft": "2px"
        },
        "lightIcon": "☀️",
        "lightIconStyle": {
          "marginLeft": "1px"
        }
      }
    },
    "prism": {
      "theme": {
        "plain": {
          "color": "#F8F8F2",
          "backgroundColor": "#282A36"
        },
        "styles": [
          {
            "types": [
              "prolog",
              "constant",
              "builtin"
            ],
            "style": {
              "color": "rgb(189, 147, 249)"
            }
          },
          {
            "types": [
              "inserted",
              "function"
            ],
            "style": {
              "color": "rgb(80, 250, 123)"
            }
          },
          {
            "types": [
              "deleted"
            ],
            "style": {
              "color": "rgb(255, 85, 85)"
            }
          },
          {
            "types": [
              "changed"
            ],
            "style": {
              "color": "rgb(255, 184, 108)"
            }
          },
          {
            "types": [
              "punctuation",
              "symbol"
            ],
            "style": {
              "color": "rgb(248, 248, 242)"
            }
          },
          {
            "types": [
              "string",
              "char",
              "tag",
              "selector"
            ],
            "style": {
              "color": "rgb(255, 121, 198)"
            }
          },
          {
            "types": [
              "keyword",
              "variable"
            ],
            "style": {
              "color": "rgb(189, 147, 249)",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "comment"
            ],
            "style": {
              "color": "rgb(98, 114, 164)"
            }
          },
          {
            "types": [
              "attr-name"
            ],
            "style": {
              "color": "rgb(241, 250, 140)"
            }
          }
        ]
      },
      "darkTheme": {
        "plain": {
          "color": "#F8F8F2",
          "backgroundColor": "#282A36"
        },
        "styles": [
          {
            "types": [
              "prolog",
              "constant",
              "builtin"
            ],
            "style": {
              "color": "rgb(189, 147, 249)"
            }
          },
          {
            "types": [
              "inserted",
              "function"
            ],
            "style": {
              "color": "rgb(80, 250, 123)"
            }
          },
          {
            "types": [
              "deleted"
            ],
            "style": {
              "color": "rgb(255, 85, 85)"
            }
          },
          {
            "types": [
              "changed"
            ],
            "style": {
              "color": "rgb(255, 184, 108)"
            }
          },
          {
            "types": [
              "punctuation",
              "symbol"
            ],
            "style": {
              "color": "rgb(248, 248, 242)"
            }
          },
          {
            "types": [
              "string",
              "char",
              "tag",
              "selector"
            ],
            "style": {
              "color": "rgb(255, 121, 198)"
            }
          },
          {
            "types": [
              "keyword",
              "variable"
            ],
            "style": {
              "color": "rgb(189, 147, 249)",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "comment"
            ],
            "style": {
              "color": "rgb(98, 114, 164)"
            }
          },
          {
            "types": [
              "attr-name"
            ],
            "style": {
              "color": "rgb(241, 250, 140)"
            }
          }
        ]
      },
      "additionalLanguages": []
    },
    "image": "img/logo/logo.png",
    "navbar": {
      "hideOnScroll": true,
      "title": "Khyron Realm",
      "logo": {
        "alt": "Khyron Realm Logo",
        "src": "img/logo/logo.png",
        "srcDark": "img/logo/logo.png"
      },
      "items": [
        {
          "type": "doc",
          "docId": "description",
          "position": "left",
          "label": "Wiki"
        },
        {
          "to": "/blog",
          "label": "Blog",
          "position": "left"
        },
        {
          "href": "/about",
          "label": "About",
          "position": "left"
        },
        {
          "href": "/contact",
          "label": "Contact",
          "position": "left"
        },
        {
          "href": "/play",
          "label": "Play Demo",
          "position": "right"
        },
        {
          "href": "https://discord.gg/JpgFgxvqSK",
          "label": "Discord",
          "position": "right"
        },
        {
          "href": "#",
          "label": "Donate",
          "position": "right"
        }
      ]
    },
    "footer": {
      "links": [
        {
          "title": "Getting started",
          "items": [
            {
              "label": "Wiki",
              "to": "/docs/description"
            },
            {
              "label": "Play demo",
              "to": "/play"
            }
          ]
        },
        {
          "title": "Team",
          "items": [
            {
              "label": "Blog",
              "to": "/blog"
            },
            {
              "label": "Docusaurus",
              "href": "https://github.com/facebook/docusaurus"
            }
          ]
        },
        {
          "title": "Social",
          "items": [
            {
              "label": "Discord",
              "href": "https://discord.gg/JpgFgxvqSK"
            },
            {
              "label": "Twitter",
              "href": "https://twitter.com/robo_chain"
            },
            {
              "label": "LinkedIn",
              "href": "https://linkedin.com/"
            },
            {
              "label": "YouTube",
              "href": "https://www.youtube.com/channel/UC6f6rpDLnvDvEFDiB3t6-Jw"
            }
          ]
        }
      ],
      "copyright": "Copyright © 2021 Khyron Realm. All rights reserved.",
      "style": "light"
    },
    "googleAnalytics": {
      "trackingID": "G-7M84C2EJB5",
      "anonymizeIP": true
    },
    "docs": {
      "versionPersistence": "localStorage"
    },
    "metadatas": [],
    "hideableSidebar": false,
    "tableOfContents": {
      "minHeadingLevel": 2,
      "maxHeadingLevel": 3
    }
  },
  "plugins": [
    "docusaurus-plugin-sass",
    "@docusaurus/plugin-ideal-image"
  ],
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "sidebarPath": "/Users/alex_grigoras/Documents/GitHub/game-website/sidebars.js",
          "editUrl": "https://github.com/target-software/game-website/wiki/"
        },
        "blog": {
          "showReadingTime": true,
          "editUrl": "https://github.com/target-software/game-website/blog"
        },
        "theme": {
          "customCss": "/Users/alex_grigoras/Documents/GitHub/game-website/src/css/custom.scss"
        }
      }
    ]
  ],
  "baseUrlIssueBanner": true,
  "i18n": {
    "defaultLocale": "en",
    "locales": [
      "en"
    ],
    "localeConfigs": {}
  },
  "onDuplicateRoutes": "warn",
  "customFields": {},
  "themes": [],
  "titleDelimiter": "|",
  "noIndex": false
};