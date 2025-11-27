// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ['../packages/theme-elegant'],
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@nuxt/eslint', '@nuxtjs/tailwindcss'],
   content: {
    build: {
      markdown: {
        highlight: {
          // Theme used in all color schemes.
          langs: [
            'javascript', 'vue', 'typescript', 'bash', 'ts', 'json'
          ],
          theme: {
            // Default theme (same as single string)
            default: 'github-light',
            // Theme used if `html.dark`
            dark: 'github-dark',

          }
        }
      }
    },
    renderer: {
      anchorLinks: false,
    },
    database: {
      type: 'libsql',
      url: process.env.TURSO_DATABASE_URL,
      authToken: process.env.TURSO_AUTH_TOKEN,
    }
  },
})