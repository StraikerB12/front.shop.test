const imageminMozjpeg = require('imagemin-mozjpeg')
const ImageminPlugin = require('imagemin-webpack-plugin').default
const isDev = process.env.NODE_ENV !== 'production'

export default {
  mode: 'universal',
  ...(!isDev && { modern: 'client' }),

  head: {
    title: 'front-test-shop',
    htmlAttrs: { lang: 'ru' },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [ { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' } ]
  },

  render: {
    // http2: {
    //     push: true,
    //     pushAssets: (req, res, publicPath, preloadFiles) => preloadFiles
    //     .map(f => `<${publicPath}${f.file}>; rel=preload; as=${f.asType}`)
    //   },
    // compressor: false,
    resourceHints: false
    // etag: false,
    // static: {
    //  etag: false
    // }
  },

  filenames: {
    app: ({ isDev }) => isDev ? '[name].js' : 'js/[contenthash].js',
    chunk: ({ isDev }) => isDev ? '[name].js' : 'js/[contenthash].js',
    css: ({ isDev }) => isDev ? '[name].css' : 'css/[contenthash].css',
    img: ({ isDev }) => isDev ? '[path][name].[ext]' : 'img/[contenthash:7].[ext]',
    font: ({ isDev }) => isDev ? '[path][name].[ext]' : 'fonts/[contenthash:7].[ext]',
    video: ({ isDev }) => isDev ? '[path][name].[ext]' : 'videos/[contenthash:7].[ext]'
  },

  ...(!isDev && {
    html: {
      minify: {
        collapseBooleanAttributes: true,
        decodeEntities: true,
        minifyCSS: true,
        minifyJS: true,
        processConditionalComments: true,
        removeEmptyAttributes: true,
        removeRedundantAttributes: true,
        trimCustomFragments: true,
        useShortDoctype: true
      }
    }
  }),

  splitChunks: {
    layouts: true,
    pages: true,
    commons: true
  },

  ...(!isDev && {
    extractCSS: {
      ignoreOrder: true
    }
  }),

  postcss: {
    plugins: {
      ...(!isDev && {
        cssnano: {
          preset: ['advanced', {
            autoprefixer: false,
            cssDeclarationSorter: false,
            zindex: false,
            discardComments: { removeAll: true }
          }]
        }
      })
    },
    ...(!isDev && { preset: {browsers: 'cover 99.5%', autoprefixer: true} }),
    order: 'cssnanoLast'
  },

  extend (config, ctx) {
    const ORIGINAL_TEST = '/\\.(png|jpe?g|gif|svg|webp)$/i'
    const vueSvgLoader = [
      { loader: 'vue-svg-loader', options: { svgo: false } }
    ]
    const imageMinPlugin = new ImageminPlugin({
      pngquant: { quality: '5-30', speed: 7, strip: true },
      jpegtran: { progressive: true },
      gifsicle: { interlaced: true },
      plugins: [ imageminMozjpeg({ quality: 70, progressive: true }) ]
    })
    if (!ctx.isDev) config.plugins.push(imageMinPlugin)

    config.module.rules.forEach(rule => {
      if (rule.test.toString() === ORIGINAL_TEST) {
        rule.test = /\.(png|jpe?g|gif|webp)$/i
        rule.use = [
          { loader: 'url-loader', options: { limit: 1000, name: ctx.isDev ? '[path][name].[ext]' : 'img/[contenthash:7].[ext]' } }
        ]
      }
    })
    
    const svgRule = {
      test: /\.svg$/,
      oneOf: [
        { resourceQuery: /inline/, use: vueSvgLoader },
        { resourceQuery: /data/, loader: 'url-loader' },
        { resourceQuery: /raw/, loader: 'raw-loader' },
        { loader: 'file-loader' }
      ]
    }
    config.module.rules.push(svgRule) 
  },


  transpile: ['vue-lazy-hydration', 'intersection-observer'],

  rootDir: __dirname,
  loading: { color: '#ddd' },
  // optimizeCss: false,

  css: [
    '~/assets/scss/global-variables.scss',
    'element-ui/lib/theme-chalk/index.css',
    'normalize.css',
  ],

  serverMiddleware: [ ],

  plugins: [
    {src: '~/plugins/ElementUI', ssr: true },
  ],

  components: true,

  buildModules: [
  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    '@nuxtjs/auth-next',
    'nuxt-trailingslash-module',
    'nuxt-webfontloader',
    'cookie-universal-nuxt',
    
  ],

  build: {
    vendor: ['element-ui']
  },


  webfontloader: {
    events: false,
    google: { families: ['Montserrat:300,400,500,600:cyrillic&display=swap'] },
    timeout: 3000
  },

  styleResources: {
    scss: [],
    less: [],
    stylus: []
  },

  router: { prefetchLinks: false },
  axios: {
    // baseURL: 'http://yourapi:8000',
    // https:false,
  },

  auth: {
    redirect: false,
    strategies: {
      local: {
        scheme: 'refresh',
        token: {
          property: 'data.access_token',
          maxAge: 30,
          global: true,
          // type: 'Bearer'
        },
        refreshToken: {
          property: 'data.refresh_token',
          data: 'refresh_token',
          maxAge: 60 * 60 * 24 * 30
        },
        user: {
          property: 'data.user',
         // autoFetch: true
        },
        endpoints: {
          login: { url: 'http://back.shop.test/api/users.login', method: 'post' },
          refresh: { url: 'http://back.shop.test/api/users.token', method: 'post' },
          user: { url: 'http://back.shop.test/api/users.get', method: 'get' },
          logout: { url: 'http://back.shop.test/api/users.logout', method: 'post' }
        },
        // autoLogout: false
      }
    }
  },
}
