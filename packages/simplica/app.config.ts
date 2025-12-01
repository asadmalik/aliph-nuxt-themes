export default defineAppConfig({
  themeSimplica: {
    siteTitleFallback: 'Simplica Blog',
    siteDescriptionFallback: 'A clean, minimalist blog theme for Nuxt Content.',
    blogTitleFallback: 'Blog',
    blogDescriptionFallback: 'Latest articles, tutorials, and updates.',

    relatedPosts: {
      enabled: true,
      title: 'Related Posts',
      numberOfPosts: 3,
      sameCategory: true,
      showMoreButton: true,
      moreButtonText: 'View all posts',
    },

    viewAllPostsButton: {
      enabled: true,
      text: 'View all posts',
    },

    blogMeta: {
      category: {
        visible: true,
        colorClass: 'text-mikado_yellow-500',
        hoverClass: 'text-oxford_blue-700',
        linkArchivePage: true,
      },
      tags: {
        visible: true,
        colorClass: 'text-mikado_yellow-500',
        hoverClass: 'text-oxford_blue-700',
        linkArchivePage: true,
      },
      author: {
        visible: true,
        colorClass: 'text-mikado_yellow-500',
        hoverClass: 'text-oxford_blue-700',
        linkArchivePage: false,
      },
      publishDate: {
        visible: true,
        colorClass: 'text-mikado_yellow-500',
        hoverClass: 'text-oxford_blue-700',
        linkArchivePage: true,
      },
    },

    ui: {
      ctaButton: {
        backgroundColor: 'bg-oxford_blue-600',
        textColor: 'text-white',
        hoverBackgroundColor: 'bg-oxford_blue-800',
      },
      navbar: {
        backgroundColor: 'bg-oxford_blue-900',
        textColor: 'text-white',
      },
      footer: {
        backgroundColor: 'bg-oxford_blue-900',
        textColor: 'text-white',
      },
    },
  },
});
