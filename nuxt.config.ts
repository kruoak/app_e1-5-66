// https://nuxt.com/docs/api/configuration/nuxt-config
// export default defineNuxtConfig({
//   devtools: { enabled: true }

// })
// nuxt.config.ts
// import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: ['vuetify/lib/styles/main.sass',
         '@mdi/font/css/materialdesignicons.min.css'
       ],
  build: {
    transpile: ['vuetify'],
  },
  devtools: { enabled: true },
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },
})

