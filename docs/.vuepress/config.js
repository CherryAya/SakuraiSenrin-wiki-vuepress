const { description } = require('../../package')

module.exports = {
  title: 'Sakurai-Senrin',
  description: 'Build a lightweight QQ robot for GalGame players',
  base: '/SakuraiSenrin-wiki-vuepress/',
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],
  themeConfig: {
    repo: 'CherryAya/SakuraiSenrin-wiki-vuepress',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: true,
    nav: [
      {
        text: 'Guide | 指南',
        link: '/guide/',
      },
      {
        text: 'Plugin | 插件',
        link: '/plugin/'
      },
      {
        text: 'Repository',
        link: 'https://github.com/Hajimarino-HOPE/SakuraiSenrin'
      }
    ],
  },
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
