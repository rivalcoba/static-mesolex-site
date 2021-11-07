import vueI18n from './config/i18n'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'MESOLEX',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'msapplication-TileColor', content: '#da532c' },
      { name: 'theme-color', content: '#ffffff' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossorigin: true
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Fira+Sans+Condensed:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Fira+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp'
      },
      {
        rel: 'shortcut icon',
        href: '/imagenes-generales/favicon_package/favicon.ico',
        type: 'image/x-icon'
      },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/imagenes-generales/favicon_package/apple-touch-icon.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/imagenes-generales/favicon_package/favicon-32x32.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/imagenes-generales/favicon_package/favicon-16x16.png'
      },
      {
        rel: 'manifest',
        href: '/imagenes-generales/favicon_package/site.webmanifest'
      },
      {
        rel: 'mask-icon',
        href: '/imagenes-generales/favicon_package/safari-pinned-tab.svg',
        color: '#5bbad5'
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/styles/estilos.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/i18n'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  // Internationalization Configuration
  i18n: {
    parsePages: true,
    strategy: 'no_prefix',
    detectBrowserLanguage: {
      useCookie: true,
      alwaysRedirect: true,
      fallbackLocale: 'es'
    },
    locales: [
      { code: 'es', name: 'ESP' },
      { code: 'en', name: 'ENG' }
    ],
    defaultLocale: 'en',
    vueI18n
  }
}
