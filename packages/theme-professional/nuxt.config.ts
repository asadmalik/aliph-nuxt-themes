// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxt/content'],
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  // Explicitly tell Nuxt where to find Tailwind config
  tailwindcss: {
    configPath: __dirname + '/tailwind.config.ts', // Correct absolute path
  },
  components: {
    dirs: [
      { path: 'components', pathPrefix: false }
    ]
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

    /*     experimental: {
      trailingSlash: true,
    } */

  },

})
