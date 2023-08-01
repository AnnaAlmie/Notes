// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/scss/main.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/scss/_variables.scss";',
        },
      },
    },
  },
  //https://icon-sets.iconify.design/
  modules: ['nuxt-icon'],
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => ['date'].includes(tag),
    },
  }
})
