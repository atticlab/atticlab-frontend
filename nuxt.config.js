export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'spa',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'static',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
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
    '@nuxtjs/fontawesome',
  ],
  fontawesome: {
    icons: {
      solid: true,
    },
  },
  /*
   ** Nuxt.js modules
   */
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
    extractCSS: true,
  },
}
