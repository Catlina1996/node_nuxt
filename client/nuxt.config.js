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
            { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
            { name: 'renderer', content: 'webkit|ie-comp|ie-stand' },
            { name: 'renderer', content: 'webkit' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },
    /*
     ** Customize the progress-bar color
     */
    loading: { color: '#00B7FF' },
    /*
     ** Global CSS
     */
    css: [{
        src: './assets/main.css'
    }],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [
        '~/plugins/axios',
        '~/plugins/museui'
    ],
    env: {
        BASE_URL: process.env.BASE_URL,
        NODE_ENV: process.env.NODE_ENV
    },

    dev: {
        proxyTable: {
            '/api': {
                target: 'http://localhost:3456',
                ws: true, //是否支持websocket
                secure: true, // 如果是 https ,需要开启这个选项
                changeOrigin: true, //跨域
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
    axios: {},
    /*
     ** Build configuration
     */
    build: {
        /*
         ** You can extend webpack config here
         */
        extractCSS: { allChunks: true },
        extend(config, cxt) {
            if (cxt.isClient) {
                config.module.rules.push({
                    test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                    loader: 'url-loader',
                    query: {
                        limit: 1000, // 1 KB
                        name: 'fonts/[name].[hash:7].[ext]'
                    }
                })
            }
        },
        styleResources: {
            scss: './assets/public.scss'
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