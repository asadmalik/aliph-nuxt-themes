// packages/theme-elegant/app.config.ts
export default defineAppConfig({
  themeElegant: {
    // Global-ish layout prefs
    layout: {
      constrainedWidthClass: 'max-w-3xl', // for single pages
      fullWidthClass: 'max-w-6xl',       // for list pages
      showSidebarOnSingle: false,
      sidebarPosition: 'right',          // 'left' | 'right'
    },

    // Typography
    typography: {
      bodySize: 'prose-lg',              // maps to prose modifier class
      enableDropCap: false,
      showReadingTime: false,            // can flip to true later when you have data
    },

    blog: {
      // Listing layout
      listing: {
        postsPerPage: 9,
        layout: 'grid',                  // 'grid' | 'list'
        showHeroFeaturedPost: true,
        hero: {
          enabled: true,
          variant: 'overlay',            // 'overlay' | 'simple'
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

      // Single post layout
      single: {
        heroHeightClass: 'h-80',
        showHeroImage: true,

        showCategoryPill: true,
        showAuthor: true,
        showDate: true,

        showBackLink: true,
        backLinkText: '← Back to Blog',

        showSidebar: false,
        showOutline: false,             // you override to true in playground
      },

      // Related posts section
      relatedPosts: {
        enabled: true,
        title: 'Related Posts',
        numberOfPosts: 3,
        sameCategory: true,
        sameTags: false,
        showMoreButton: true,
        moreButtonText: 'View All Posts',
      },

      // CTAs
      cta: {
        belowHero: {
          enabled: true,
          title: 'Like what you’re reading?',
          text: 'Subscribe to get more stories like this in your inbox.',
          buttonText: 'Subscribe',
          buttonTo: '/newsletter',
        },
        afterContent: {
          enabled: false,
          title: 'Ready to take the next step?',
          text: 'Talk to us about implementing these ideas in your own project.',
          buttonText: 'Book a call',
          buttonTo: '/contact-us',
        },
      },
    },
  },
})
