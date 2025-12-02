// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ['../packages/theme-elegant'],
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@nuxt/eslint', '@nuxtjs/tailwindcss', '@nuxtjs/google-fonts', '@nuxt/image'],
  googleFonts: {
    families: {
      Inter: {
        wght: [400, 700],
        ital: [300]
      },
      Spectral: {
        wght: [300, 500],
        ital: [300]
      },
    },
    download: true,     // self-host
    display: 'swap',    // avoid invisible text
    preload: false,     // turn OFF; it's for remote CSS and disables 'swap'
    prefetch: false,    // not needed when self-hosting
    preconnect: false,  // not needed when self-hosting
    useStylesheet: true // inject a normal <link rel="stylesheet"> for stability
  },
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