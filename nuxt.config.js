export default {
  ssr: false,
  target: 'static',
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** Global CSS
   */
  css: [
    {
      src: '@/assets/styles/index.scss',
      lang: 'scss',
    },
  ],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    // Doc: https://github.com/nuxt-community/fontawesome-module
    ['@nuxtjs/fontawesome'],
    '@aceforth/nuxt-optimized-images',
  ],
  fontawesome: {
    icons: {
      solid: ['faTimes', 'faQuoteLeft'],
      brands: [
        'faReddit',
        'faGithub',
        'faLinkedin',
        'faFacebook',
        'faTwitter',
        'faMedium',
        'faTelegram',
      ],
    },
  },
  modules: [
    // Doc: https://github.com/bootstrap-vue/bootstrap-vue
    'bootstrap-vue/nuxt',
    // Doc: https://github.com/nuxt-community/style-resources-module
    '@nuxtjs/style-resources',
  ],
  bootstrapVue: {
    componentPlugins: [
      'LayoutPlugin',
      'NavbarPlugin',
      'FormPlugin',
      'ButtonPlugin',
      'FormInputPlugin',
      'FormGroupPlugin',
      'FormTextareaPlugin',
    ],
  },
  styleResources: {
    scss: ['@/assets/styles/variables.scss'],
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    extend(config, ctx) {
      if (ctx && ctx.isClient) {
        config.optimization.splitChunks.maxSize = 512000
      }
    },
    babel: {
      compact: true,
    },
    extractCSS: true,
    optimization: {
      splitChunks: {
        cacheGroups: {
          styles: {
            name: 'styles',
            test: /\.(css|vue)$/,
            chunks: 'all',
            enforce: true,
          },
        },
      },
    },
  },
  router: {
    prefetchLinks: true,
  },
  render: {
    bundleRenderer: {
      shouldPreload: (file, type) => {
        return ['style'].includes(type)
      },
    },
  },
  optimizedImages: {
    optimizeImages: true,
  },
}
