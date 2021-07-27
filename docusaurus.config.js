const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Nocalhost',
  tagline: 'Nocalhost is an open-source toolsets help to build cloud-native applications easier and faster',
  url: 'https://neaped.github.io',
  baseUrl: '/nh-docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'neaped', // Usually your GitHub org/user name.
  projectName: 'nh-docs', // Usually your repo name.
  // i18n Configurations
  // Stylesheets
  stylesheets: [
    "https://fonts.googleapis.com/icon?family=Material+Icons",
  ],
  // Plugins
  plugins: [
    'plugin-image-zoom',
  ],
  themeConfig: {
    // Search
    algolia: {
      apiKey: 'a20f9e4540c8e520a806eae92c33cdd5',
      indexName: 'nocalhost',
    },
    // Navbar
    navbar: {
      title: 'Nocalhost',
      logo: {
        alt: 'Most productive cloud-native development toolsets',
        src: 'img/logo.png',
      },
      items: [
        // Documentations
        {
          type: 'doc',
          docId: 'quick-start',
          position: 'left',
          label: 'Docs',
        },
        // Video
        {to: '/videos', label: 'Videos', position: 'left'},
        // Blog
        {to: '/blog', label: 'Blog', position: 'left'},
        // Version
        {
          type: 'docsVersionDropdown',
          position: 'right',
          dropdownItemsAfter: [{to: '/versions', label: 'All Versions'}],
        },
        // Language
        {
          type: 'localeDropdown',
          position: 'right'
        },
        // Github Icon
        {
          href: 'https://github.com/nocalhost/nocalhost',
          // label: 'GitHub',
          position: 'right',
          className: 'header-github-link',
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
              label: 'Getting Started',
              to: '/docs/quick-start',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
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
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        // Docs
        docs: {
          path: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/neaped/nocal-docs-docusaurus/tree/dev',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        // Blog
        blog: {
          showReadingTime: true,
        },
        // Theme
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
