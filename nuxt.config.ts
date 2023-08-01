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
    optimizeDeps: {
      // https://socket.dev/npm/package/nuxt3-localforage
      include: ['localforage'],
    },
  },
  //https://icon-sets.iconify.design/
  modules: ['nuxt-icon', 'nuxt3-localforage'],
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => ['date'].includes(tag),
    },
  }
})
