// packages/theme-elegant/app.config.ts
export default defineAppConfig({
  themeElegant: {
    // global-ish visual prefs for this theme
    layout: {
      constrainedWidthClass: 'max-w-4xl',   // for single pages
      fullWidthClass: 'max-w-6xl',         // for list pages
      showSidebarOnSingle: true,
      sidebarPosition: 'right',            // 'left' | 'right'
    },

    typography: {
      bodySize: 'prose-lg',                // maps to prose modifier class
      enableDropCap: false,
      showReadingTime: true,
    },
   blog: {
      listing: {
        postsPerPage: 9,
        layout: 'grid',
        showHeroFeaturedPost: true,
        hero: {
          enabled: true,
          variant: 'overlay',
          label: 'Featured',
        },
        showExcerpt: true,
        showMeta: true,
        meta: {
          category: {
            visible: true,
            colorClass:
              'inline-flex items-center rounded-full border border-slate-200 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-[#172e51] bg-slate-50 dark:border-slate-700 dark:bg-slate-900/60',
          },
          author: {
            visible: true,
            colorClass:
              'font-medium text-slate-700 hover:text-[#172e51] dark:text-slate-200 dark:hover:text-white',
          },
          date: {
            visible: true,
            colorClass:
              'hover:text-[#172e51] dark:hover:text-white',
          },
        },
      },
      single: {
        showBackLink: true,
        showOutline: true
      },
  },
}})
