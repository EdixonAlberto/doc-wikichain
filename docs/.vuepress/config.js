const folders = {
  cryptos: 'cryptocurrencies'
}

module.exports = {
  base: "/doc-wikichain/",
  title: 'Wikichain',
  lang: "es-VE",
  description: 'Enciclopedia de Blockchain',
  head: [
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto' }],
    // ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  themeConfig: {
    search: true,
    // logo: '/img/image.png',
    nav: [
      { text: 'Acerca', link: '/about' },
    ],
    sidebar: [
      {
        title: 'Inicio',
        collapsable: false,
        children: [
          '/',
          '/blockchain',
          '/smart-contracts',
          // '/makerDao',
          // '/ethereum',
          // '/ether'
        ]
      },
      {
        title: 'Criptomonedas',
        collapsable: false,
        children: [
          `/${folders.cryptos}/dai`
        ]
      }
    ],
    activeHeaderLinks: false,
    sidebarDepth: 0
  },
  markdown: {
    anchor: {
      permalink: false,
    }
  }
}
