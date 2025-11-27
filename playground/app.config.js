
// .app/app.config.ts
export default defineAppConfig({
    content:{
        siteTitle: 'Aliph Learning',
        siteDescription: 'Learn and Grow with Aliph Learning - Your Gateway to Knowledge and Skills!',
        blogTitle: 'Aliph Learning Blog',
        blogDescription: 'Insights, Tips, and Stories from Aliph Learning - Explore Our Blog for the Latest in Education and Personal Development!',
        showRelatedPosts: {
            enabled: true,
            title: 'Related Posts',
            numberOfPosts: 3,
            sameCategory: true,
            showMoreButton: true,
            moreButtonText: 'View All Posts',
        },
        showViewAllPostsButton: {
            enabled: true,
            text: 'View All Posts',
        },
    },
    navigation: {
        logo: {
            src: '/assets/img/aliph.svg',   // or '~/assets/logo.svg'
            alt: 'Asad Malik',
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
                { title: 'Privacy Policy', to: '/' },
                { title: 'Terms of Use', to: '/' },
                { title: 'Complaints', to: '/' },
            ],
        }
    },
});