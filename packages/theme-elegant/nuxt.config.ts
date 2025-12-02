// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image'],
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  // Explicitly tell Nuxt where to find Tailwind config
  tailwindcss: {
    configPath: 'tailwind.config.ts', // Correct absolute path
  },
  components: {
    dirs: [
      { path: 'components', pathPrefix: false }
    ]
  },


})