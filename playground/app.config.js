// .app/app.config.ts in playground or client app
export default defineAppConfig({
    site: {
        title: 'Aliph Learning',
        description: 'Learn and Grow with Aliph Learning...',
    },

    // navigation stays here as you already do
    navigation: {
        logo: {
            src: '/assets/img/aliph.svg',
            alt: 'Aliph Learning',
            class: 'h-10',
            title: 'Aliph Learning',
        },
        items: [
            { title: 'Home', to: '/' },
            { title: 'Blog', to: '/blog' },
            { title: 'About Us', to: '/about-us' },
            { title: 'Contact Us', to: '/contact-us' },
        ],
        footer: {
            items: [
                { title: 'Home', to: '/' },
                { title: 'Blog', to: '/blog' },
                { title: 'About Us', to: '/about-us' },
                { title: 'Contact Us', to: '/contact-us' },
            ]
        }
    },

    themeElegant: {
        blog: {
            single: {
                showOutline: true,
                showShareButtons: true,
                heroHeightClass: 'h-96',
                showBackLink: true,
                backLinkText: '← Back to Blog',
            },
            relatedPosts: {
                enabled: true,
                title: 'Related Posts',
                numberOfPosts: 3,
                sameCategory: true,
                sameTags: true,
                showMoreButton: true,
                moreButtonText: 'View All Posts',
            },
            cta: {
                belowHero: {
                    enabled: true,
                    title: 'Like what you’re reading?',
                    text: 'Join the Aliph Learning newsletter.',
                    buttonText: 'Join newsletter',
                    buttonTo: '/newsletter',
                },
            },
            listing: {
                showExcerpt: true,
                showMeta: true,
                meta: {
                    author: {
                        visible: true,
                        colorClass: 'font-medium text-slate-800 hover:text-[#172e51]',
                    },
                },
            },
        },
    },
})
