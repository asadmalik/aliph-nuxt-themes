export interface ThemeSimplicaConfig {
  siteTitleFallback: string
  siteDescriptionFallback: string
  blogTitleFallback: string
  blogDescriptionFallback: string
  relatedPosts: {
    enabled: boolean
    title: string
    numberOfPosts: number
    sameCategory: boolean
    showMoreButton: boolean
    moreButtonText: string
  }
  viewAllPostsButton: {
    enabled: boolean
    text: string
  }
  blogMeta: {
    category: ThemeMetaDisplayOptions
    tags: ThemeMetaDisplayOptions
    author: ThemeMetaDisplayOptions
    publishDate: ThemeMetaDisplayOptions
  }
  ui: {
    ctaButton: ThemeButtonOptions
    navbar: ThemeColorOptions
    footer: ThemeColorOptions
  }
}

export interface ThemeMetaDisplayOptions {
  visible: boolean
  colorClass: string
  hoverClass: string
  linkArchivePage: boolean
}

export interface ThemeButtonOptions {
  backgroundColor: string
  textColor: string
  hoverBackgroundColor: string
}

export interface ThemeColorOptions {
  backgroundColor: string
  textColor: string
}
