import { NuxtConfig } from '@nuxt/types';
import i18n from './config/i18n';

const config: NuxtConfig = {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'nuxt-ts-template',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ['~/plugins/initStore.ts', '~/plugins/initAxios.ts'],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    [
      'nuxt-i18n',
      {
        strategy: 'no_prefix',
        defaultLocale: 'en',
        locales: [
          {
            code: 'en',
            name: 'English',
          },
          {
            code: 'ru',
            name: 'Russian',
          },
        ],
        vueI18n: i18n,
      },
    ],
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    baseURL: 'http://numbersapi.com',
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    transpile: ['vuex-simple'],
  },
};

export default config;
