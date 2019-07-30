
module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    {
      src: '~/assets/main.scss',
      lang: 'scss'
    }
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/axios'
  ],
  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:8080'
  },

  dev: {
    proxyTable: {
      '/api':
        {
          target: 'http://192.168.2.195:8080',
          pathRewrite: { '^/api': '/' }
        }
    }
  },
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // 请求代理配置，解决跨域
    '@gauseen/nuxt-proxy',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  },
  router: {
    base: '/',
    prefetchLinks: false,
    extendRoutes(routes, resolve) {
      routes.push()
    },
    scrollBehavior: function(to, from, savedPosition) {
      // return { x: 0, y: 0 }
      if (to.hash) {
        return {
          selector: to.hash
        }
      }
    },
    middleware: ['createAuthor']
  }
};
