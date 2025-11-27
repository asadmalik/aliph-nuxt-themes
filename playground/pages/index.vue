<template>
    <NuxtLayout name="landing">
        <main class="min-h-screen bg-slate-950 text-slate-50">
            <!-- HERO -->
            <section class="relative overflow-hidden">
                <!-- Background glows -->
                <div class="pointer-events-none absolute inset-0 -z-10">
                    <div
                        class="absolute -top-40 -left-32 h-[420px] w-[420px] rounded-full bg-emerald-500/25 blur-3xl" />
                    <div
                        class="absolute -bottom-40 -right-20 h-[460px] w-[460px] rounded-full bg-cyan-500/25 blur-3xl" />
                    <div
                        class="absolute inset-x-0 top-1/3 h-px bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent opacity-60" />
                </div>

                <div class="max-w-6xl mx-auto px-4 pt-24 pb-20 lg:pt-32">
                    <!-- Badge -->
                    <div
                        class="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-slate-900/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-emerald-200/90 backdrop-blur-xl animate-[fade-in_0.6s_ease-out]">
                        <span class="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
                        <span>Nuxt 3 · Blog Themes · Nuxt Content</span>
                    </div>

                    <div class="mt-10 grid gap-12 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] items-center">
                        <!-- Left: Text -->
                        <div class="space-y-7 animate-[slide-up_0.7s_ease-out]">
                            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight">
                                Turn any Nuxt app into a
                                <span
                                    class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-cyan-300 to-emerald-200">
                                    polished publishing machine
                                </span>
                                in minutes.
                            </h1>

                            <p class="text-sm sm:text-base lg:text-lg text-slate-300 max-w-xl">
                                Install a theme, keep your content and routes, and let a dedicated blog layer handle the
                                design.
                                Nuxt Layers + Nuxt Content v3, wired for real projects and client work.
                            </p>

                            <div class="flex flex-wrap gap-4 pt-2">
                                <!-- Primary CTA -->
                                <div class="relative group">
                                    <div
                                        class="absolute -inset-0.5 rounded-full bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-500 opacity-60 blur group-hover:opacity-80 transition duration-500" />
                                    <NuxtLink
to="/blog"
                                        class="relative inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-semibold bg-slate-950 text-slate-50">
                                        View Blog Demo
                                        <Icon name="lucide:arrow-right" class="ml-2 h-4 w-4" />
                                    </NuxtLink>
                                </div>

                                <!-- Secondary CTA -->
                                <NuxtLink
to="/contact-us"
                                    class="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold border border-slate-600/80 text-slate-100 hover:bg-slate-900/80 hover:border-emerald-400/70 hover:text-emerald-100 transition duration-300">
                                    Talk about a project
                                </NuxtLink>
                            </div>

                            <!-- Meta row -->
                            <div class="flex flex-wrap items-center gap-5 text-[11px] sm:text-xs text-slate-400 pt-3">
                                <div class="flex items-center gap-2">
                                    <span class="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                    <span>For agencies, freelancers, product teams and learning platforms</span>
                                </div>
                                <div class="flex items-center gap-2">
                                    <Icon name="lucide:layers" class="h-4 w-4" />
                                    <span>Drop-in Nuxt Layer themes via <code
                                            class="text-emerald-300">@asadmalik.pk/*</code></span>
                                </div>
                            </div>
                        </div>

                        <!-- Right: Theme “status” card -->
                        <div class="relative">
                            <!-- Glow ring -->
                            <div
                                class="pointer-events-none absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-emerald-400/40 via-cyan-400/40 to-emerald-500/40 opacity-30 blur-2xl" />

                            <div
class="relative group rounded-[1.75rem] border border-white/10 bg-slate-900/80 p-6 shadow-2xl backdrop-blur-xl
                     transition duration-500 hover:-translate-y-1.5 hover:shadow-[0_30px_90px_rgba(15,23,42,0.9)]">
                                <div class="flex items-start justify-between gap-3">
                                    <div>
                                        <p class="text-[11px] uppercase tracking-[0.25em] text-slate-400">
                                            Active Theme
                                        </p>
                                        <p class="mt-1 text-sm font-semibold">
                                            @asadmalik.pk/theme-elegant
                                        </p>
                                    </div>
                                    <span
                                        class="rounded-full bg-emerald-500/15 px-3 py-1 text-[10px] font-semibold text-emerald-300">
                                        Nuxt Layer
                                    </span>
                                </div>

                                <!-- Stats -->
                                <div class="mt-6 grid grid-cols-3 gap-3 text-center text-xs">
                                    <div
class="rounded-2xl border border-white/5 bg-slate-900/80 px-3 py-4 transition duration-300
                         group-hover:border-emerald-400/50 group-hover:-translate-y-1">
                                        <p class="text-[10px] text-slate-400">Time to integrate</p>
                                        <p class="mt-1 text-lg font-semibold">~5 min</p>
                                    </div>
                                    <div
class="rounded-2xl border border-white/5 bg-slate-900/80 px-3 py-4 transition duration-300
                         group-hover:border-cyan-400/50 group-hover:-translate-y-1">
                                        <p class="text-[10px] text-slate-400">Blog layouts</p>
                                        <p class="mt-1 text-lg font-semibold">5+</p>
                                    </div>
                                    <div
class="rounded-2xl border border-white/5 bg-slate-900/80 px-3 py-4 transition duration-300
                         group-hover:border-emerald-400/50 group-hover:-translate-y-1">
                                        <p class="text-[10px] text-slate-400">Client sites</p>
                                        <p class="mt-1 text-lg font-semibold">Unlimited</p>
                                    </div>
                                </div>

                                <!-- Code block -->
                                <div
                                    class="mt-6 rounded-2xl border border-emerald-500/30 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 px-4 py-3 text-[11px] font-mono">
                                    <p class="mb-1 text-emerald-300/90">nuxt.config.ts</p>
                                    <p><span class="text-slate-400">export default</span> defineNuxtConfig({</p>
                                    <p class="pl-4">
                                        extends: <span class="text-slate-400">[</span>
                                        <span class="text-emerald-300">'@asadmalik.pk/theme-elegant'</span>
                                        <span class="text-slate-400">]</span>,
                                    </p>
                                    <p>})</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- WHO IT'S FOR -->
            <section class="border-t border-slate-800 bg-slate-950/95">
                <div class="max-w-6xl mx-auto px-4 py-12 sm:py-16">
                    <div class="grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-start">
                        <div>
                            <h2 class="text-2xl sm:text-3xl font-semibold tracking-tight">
                                Built for real projects, not just demos.
                            </h2>
                            <p class="mt-3 text-sm sm:text-base text-slate-300 max-w-xl">
                                You already know how to ship Nuxt apps. The problem is repeating the same blog layout,
                                navigation,
                                and styling work across every client and personal site.
                            </p>
                            <p class="mt-3 text-sm sm:text-base text-slate-300 max-w-xl">
                                This theme system lets you centralize the presentation layer once, and reuse it
                                everywhere.
                            </p>
                        </div>

                        <div class="grid gap-4 sm:grid-cols-2 text-sm">
                            <div class="rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
                                <p class="text-[11px] uppercase tracking-[0.2em] text-slate-400">
                                    Agencies & studios
                                </p>
                                <p class="mt-2 text-slate-200">
                                    Launch content-heavy sites for multiple clients without rebuilding the blog from
                                    scratch each time.
                                </p>
                            </div>
                            <div class="rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
                                <p class="text-[11px] uppercase tracking-[0.2em] text-slate-400">
                                    Independent developers
                                </p>
                                <p class="mt-2 text-slate-200">
                                    Maintain one central theme repo and keep your portfolio, personal blog, and side
                                    projects in sync.
                                </p>
                            </div>
                            <div class="rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
                                <p class="text-[11px] uppercase tracking-[0.2em] text-slate-400">
                                    SaaS & product teams
                                </p>
                                <p class="mt-2 text-slate-200">
                                    Add a fully featured blog to your marketing site without polluting your core app
                                    logic.
                                </p>
                            </div>
                            <div class="rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
                                <p class="text-[11px] uppercase tracking-[0.2em] text-slate-400">
                                    Learning platforms
                                </p>
                                <p class="mt-2 text-slate-200">
                                    Publish guides, documentation and editorial pieces with consistent layouts across
                                    multiple projects.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- FEATURES -->
            <section class="border-t border-slate-800 bg-slate-950/90">
                <div class="max-w-6xl mx-auto px-4 py-14 sm:py-18">
                    <div class="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10">
                        <div>
                            <h2 class="text-2xl sm:text-3xl font-semibold tracking-tight">
                                A clean separation between content, routing and design.
                            </h2>
                            <p class="mt-3 text-sm sm:text-base text-slate-300 max-w-xl">
                                The app layer controls what is rendered. The theme layer controls how it looks.
                                That’s it. No hidden magic, no tight coupling.
                            </p>
                        </div>
                        <NuxtLink
to="/blog"
                            class="inline-flex items-center text-xs sm:text-sm font-medium text-emerald-300 hover:text-emerald-200 transition">
                            Explore the blog pages
                            <Icon name="lucide:arrow-right" class="ml-1.5 h-4 w-4" />
                        </NuxtLink>
                    </div>

                    <div class="grid gap-6 sm:grid-cols-3">
                        <article
                            class="group rounded-2xl border border-slate-800 bg-slate-900/70 p-5 transition duration-300 hover:-translate-y-1 hover:border-emerald-400/60 hover:bg-slate-900">
                            <div class="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/15">
                                <Icon name="lucide:layout-dashboard" class="h-5 w-5 text-emerald-300" />
                            </div>
                            <h3 class="text-sm font-semibold">Layouts as Nuxt Layers</h3>
                            <p class="mt-2 text-xs sm:text-sm text-slate-300">
                                Blog listing, single post, archive, author pages, and more — all bundled into a reusable
                                Nuxt Layer
                                so your app doesn’t own presentation details.
                            </p>
                        </article>

                        <article
                            class="group rounded-2xl border border-slate-800 bg-slate-900/70 p-5 transition duration-300 hover:-translate-y-1 hover:border-emerald-400/60 hover:bg-slate-900">
                            <div class="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/15">
                                <Icon name="lucide:pen-square" class="h-5 w-5 text-emerald-300" />
                            </div>
                            <h3 class="text-sm font-semibold">Nuxt Content v3 at the core</h3>
                            <p class="mt-2 text-xs sm:text-sm text-slate-300">
                                Structured front matter using <code
                                    class="text-emerald-300">defineContentConfig()</code> and
                                flexible querying via <code class="text-emerald-300">queryCollection()</code>.
                            </p>
                        </article>

                        <article
                            class="group rounded-2xl border border-slate-800 bg-slate-900/70 p-5 transition duration-300 hover:-translate-y-1 hover:border-emerald-400/60 hover:bg-slate-900">
                            <div class="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/15">
                                <Icon name="lucide:sparkles" class="h-5 w-5 text-emerald-300" />
                            </div>
                            <h3 class="text-sm font-semibold">Zero lock-in</h3>
                            <p class="mt-2 text-xs sm:text-sm text-slate-300">
                                Your content remains pure markdown with a clear schema. Themes can change, content does
                                not.
                            </p>
                        </article>
                    </div>
                </div>
            </section>

            <!-- HOW IT WORKS -->
            <section class="border-t border-slate-800 bg-gradient-to-b from-slate-950 to-slate-950">
                <div class="max-w-6xl mx-auto px-4 py-14 sm:py-18">
                    <div class="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                        <div>
                            <h2 class="text-2xl sm:text-3xl font-semibold tracking-tight">
                                From empty Nuxt app to themed blog in three clear steps.
                            </h2>
                            <p class="mt-3 text-sm sm:text-base text-slate-300 max-w-xl">
                                You don’t replace your app. You extend it with a blog theme package and keep full
                                control over
                                routes, data fetching and configuration.
                            </p>
                        </div>
                    </div>

                    <ol class="mt-8 grid gap-6 sm:grid-cols-3 text-sm">
                        <li
                            class="relative rounded-2xl border border-slate-800 bg-slate-900/70 p-5 transition duration-300 hover:-translate-y-1 hover:border-emerald-400/70">
                            <div
                                class="absolute -top-4 left-5 flex h-8 w-8 items-center justify-center rounded-full bg-emerald-400 text-[11px] font-semibold text-slate-950 shadow-lg">
                                1
                            </div>
                            <h3 class="mt-4 font-semibold">Install the theme package</h3>
                            <p class="mt-2 text-slate-300 text-xs sm:text-sm">
                                <code class="text-emerald-300">pnpm add -D @asadmalik.pk/theme-elegant</code>
                            </p>
                            <p class="mt-2 text-slate-300 text-xs sm:text-sm">
                                The theme is just another dependency, versioned and sharable like any other npm package.
                            </p>
                        </li>

                        <li
                            class="relative rounded-2xl border border-slate-800 bg-slate-900/70 p-5 transition duration-300 hover:-translate-y-1 hover:border-emerald-400/70">
                            <div
                                class="absolute -top-4 left-5 flex h-8 w-8 items-center justify-center rounded-full bg-emerald-400 text-[11px] font-semibold text-slate-950 shadow-lg">
                                2
                            </div>
                            <h3 class="mt-4 font-semibold">
                                Extend your app with the theme
                            </h3>
                            <p class="mt-2 text-slate-300 text-xs sm:text-sm">
                                In <span class="font-mono text-xs text-emerald-300">nuxt.config.ts</span>, extend the
                                theme:
                            </p>
                            <div
                                class="mt-3 rounded-xl bg-slate-950/80 border border-slate-800 px-3 py-2 font-mono text-[11px]">
                                <p>export default defineNuxtConfig({</p>
                                <p class="pl-4">
                                    extends: ['@asadmalik.pk/theme-elegant'],
                                </p>
                                <p>})</p>
                            </div>
                            <p class="mt-2 text-slate-300 text-xs sm:text-sm">
                                Your app keeps its own routes, modules and configuration. The theme adds layouts,
                                components and styling.
                            </p>
                        </li>

                        <li
                            class="relative rounded-2xl border border-slate-800 bg-slate-900/70 p-5 transition duration-300 hover:-translate-y-1 hover:border-emerald-400/70">
                            <div
                                class="absolute -top-4 left-5 flex h-8 w-8 items-center justify-center rounded-full bg-emerald-400 text-[11px] font-semibold text-slate-950 shadow-lg">
                                3
                            </div>
                            <h3 class="mt-4 font-semibold">Render via theme layouts</h3>
                            <p class="mt-2 text-slate-300 text-xs sm:text-sm">
                                In your blog pages, render theme layouts:
                            </p>
                            <div
                                class="mt-3 rounded-xl bg-slate-950/80 border border-slate-800 px-3 py-2 font-mono text-[11px]">
                                <p>&lt;NuxtLayout name="blog-list" :posts="posts" /&gt;</p>
                                <p>&lt;NuxtLayout name="single" :body="post.body"&gt;...&lt;/NuxtLayout&gt;</p>
                            </div>
                            <p class="mt-2 text-slate-300 text-xs sm:text-sm">
                                The app passes data and slots. The theme is responsible for layout, typography and
                                design.
                            </p>
                        </li>
                    </ol>
                </div>
            </section>

            <!-- APP CONFIG / THEME SETTINGS -->
            <section class="border-t border-slate-800 bg-slate-950/95">
                <div class="max-w-6xl mx-auto px-4 py-14 sm:py-18">
                    <div class="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] items-start">
                        <div>
                            <h2 class="text-2xl sm:text-3xl font-semibold tracking-tight">
                                Control the theme from your app config, not inside the theme.
                            </h2>
                            <p class="mt-3 text-sm sm:text-base text-slate-300 max-w-xl">
                                The theme reads from <span
                                    class="font-mono text-xs text-emerald-300">app.config.ts</span> for things like
                                navigation, logos and active theme selection. You keep control of branding and
                                navigation without
                                forking the theme.
                            </p>
                            <p class="mt-3 text-sm sm:text-base text-slate-300 max-w-xl">
                                This makes it easy to reuse the same theme across multiple brands and products while
                                keeping each site
                                visually distinct.
                            </p>
                        </div>

                        <div
                            class="rounded-2xl border border-slate-800 bg-slate-950/80 p-4 sm:p-5 font-mono text-[11px] leading-relaxed overflow-auto">
                            <p class="text-emerald-300 mb-1">// app.config.ts</p>
                            <p>export default defineAppConfig({</p>
                            <p class="pl-4">theme: {</p>
                            <p class="pl-8 text-slate-400">
                                // active: 'theme-elegant',
                            </p>
                            <p class="pl-8 text-slate-400">
                                // active: 'theme-professional',
                            </p>
                            <p class="pl-4">},</p>
                            <p class="pl-4">navigation: {</p>
                            <p class="pl-8">logo: {</p>
                            <p class="pl-12">src: '/assets/img/aliph.svg',</p>
                            <p class="pl-12">alt: 'Asad Malik',</p>
                            <p class="pl-12">class: 'h-10',</p>
                            <p class="pl-12">title: 'Aliph Learning',</p>
                            <p class="pl-8">},</p>
                            <p class="pl-8">items: [</p>
                            <p class="pl-12">{ title: 'Home', to: '/' },</p>
                            <p class="pl-12">{ title: 'Blog', to: '/blog' },</p>
                            <p class="pl-12">{ title: 'About Us', to: '/about-us' },</p>
                            <p class="pl-12">{ title: 'Contact Us', to: '/contact-us' },</p>
                            <p class="pl-8">],</p>
                            <p class="pl-8">footer: {</p>
                            <p class="pl-12">items: [/* ... */],</p>
                            <p class="pl-8">},</p>
                            <p class="pl-4">},</p>
                            <p>})</p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- BLOG PREVIEW / DEMO SECTION -->
            <section class="border-t border-slate-800 bg-slate-950/90">
                <div class="max-w-6xl mx-auto px-4 py-14 sm:py-18">
                    <div class="flex items-end justify-between gap-4 mb-8">
                        <div>
                            <h2 class="text-2xl sm:text-3xl font-semibold tracking-tight">
                                Show, don’t tell: the blog in action.
                            </h2>
                            <p class="mt-3 text-sm sm:text-base text-slate-300 max-w-xl">
                                This theme is designed around real content flows: listing pages, single posts,
                                categories, tags,
                                authors and archive views.
                            </p>
                        </div>
                        <NuxtLink
to="/blog"
                            class="hidden sm:inline-flex items-center text-xs sm:text-sm font-medium text-emerald-300 hover:text-emerald-200 transition">
                            Go to blog
                            <Icon name="lucide:arrow-right" class="ml-1.5 h-4 w-4" />
                        </NuxtLink>
                    </div>

                    <div class="grid gap-6 md:grid-cols-3">
                        <article
                            class="group flex flex-col rounded-2xl border border-slate-800 bg-slate-900/80 overflow-hidden transition duration-300 hover:-translate-y-1 hover:border-emerald-400/60">
                            <div class="h-32 bg-gradient-to-tr from-emerald-500/40 via-cyan-500/30 to-emerald-400/30" />
                            <div class="flex-1 p-4 sm:p-5 flex flex-col">
                                <p class="text-[11px] uppercase tracking-[0.2em] text-emerald-300">
                                    Content system
                                </p>
                                <h3 class="mt-2 text-sm font-semibold">
                                    Structured markdown with Nuxt Content v3
                                </h3>
                                <p class="mt-2 text-xs sm:text-sm text-slate-300">
                                    Clean schemas for titles, descriptions, tags, categories and SEO fields. Easy to
                                    evolve without migrations.
                                </p>
                                <div class="mt-4 flex items-center justify-between text-[11px] text-slate-400">
                                    <span>Guide · 7 min read</span>
                                    <Icon name="lucide:chevron-right" class="h-4 w-4" />
                                </div>
                            </div>
                        </article>

                        <article
                            class="group flex flex-col rounded-2xl border border-slate-800 bg-slate-900/80 overflow-hidden transition duration-300 hover:-translate-y-1 hover:border-emerald-400/60">
                            <div class="h-32 bg-gradient-to-tr from-slate-800 via-slate-900 to-slate-950" />
                            <div class="flex-1 p-4 sm:p-5 flex flex-col">
                                <p class="text-[11px] uppercase tracking-[0.2em] text-emerald-300">
                                    Theming
                                </p>
                                <h3 class="mt-2 text-sm font-semibold">
                                    Swap blog themes without touching routes
                                </h3>
                                <p class="mt-2 text-xs sm:text-sm text-slate-300">
                                    Your app owns `/blog`, `/blog/[slug]`, archives and SEO. The theme only decides how
                                    they look.
                                </p>
                                <div class="mt-4 flex items-center justify-between text-[11px] text-slate-400">
                                    <span>Playbook · 5 min read</span>
                                    <Icon name="lucide:chevron-right" class="h-4 w-4" />
                                </div>
                            </div>
                        </article>

                        <article
                            class="group flex flex-col rounded-2xl border border-slate-800 bg-slate-900/80 overflow-hidden transition duration-300 hover:-translate-y-1 hover:border-emerald-400/60">
                            <div class="h-32 bg-gradient-to-tr from-cyan-500/40 via-emerald-500/30 to-cyan-400/30" />
                            <div class="flex-1 p-4 sm:p-5 flex flex-col">
                                <p class="text-[11px] uppercase tracking-[0.2em] text-emerald-300">
                                    Workflow
                                </p>
                                <h3 class="mt-2 text-sm font-semibold">
                                    One central theme repo, many client sites
                                </h3>
                                <p class="mt-2 text-xs sm:text-sm text-slate-300">
                                    Maintain the blog system once and roll improvements out across your portfolio of
                                    projects.
                                </p>
                                <div class="mt-4 flex items-center justify-between text-[11px] text-slate-400">
                                    <span>Strategy · 9 min read</span>
                                    <Icon name="lucide:chevron-right" class="h-4 w-4" />
                                </div>
                            </div>
                        </article>
                    </div>

                    <div class="mt-8 sm:hidden">
                        <NuxtLink
to="/blog"
                            class="inline-flex items-center text-xs sm:text-sm font-medium text-emerald-300 hover:text-emerald-200 transition">
                            Go to blog
                            <Icon name="lucide:arrow-right" class="ml-1.5 h-4 w-4" />
                        </NuxtLink>
                    </div>
                </div>
            </section>

            <!-- SOCIAL PROOF / TESTIMONIALS -->
            <section class="border-t border-slate-800 bg-slate-950/95">
                <div class="max-w-6xl mx-auto px-4 py-14 sm:py-18">
                    <div class="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10">
                        <div>
                            <h2 class="text-2xl sm:text-3xl font-semibold tracking-tight">
                                A better way to treat the blog in your stack.
                            </h2>
                            <p class="mt-3 text-sm sm:text-base text-slate-300 max-w-xl">
                                Instead of cloning layouts between projects or fighting with half-custom CMS setups, you
                                use Nuxt’s
                                native primitives and a clear theme boundary.
                            </p>
                        </div>
                    </div>

                    <div class="grid gap-6 md:grid-cols-3 text-sm">
                        <div class="rounded-2xl border border-slate-800 bg-slate-900/80 p-5 flex flex-col gap-3">
                            <p class="text-slate-300 text-sm">
                                “The separation between routes and presentation is exactly what we needed. We keep our
                                custom flows and
                                still get a consistent blog experience across brands.”
                            </p>
                            <div class="mt-2 flex items-center gap-3">
                                <div class="h-8 w-8 rounded-full bg-gradient-to-tr from-emerald-400 to-cyan-400" />
                                <div>
                                    <p class="text-xs font-semibold">Product Lead</p>
                                    <p class="text-[11px] text-slate-400">B2B SaaS company</p>
                                </div>
                            </div>
                        </div>

                        <div class="rounded-2xl border border-slate-800 bg-slate-900/80 p-5 flex flex-col gap-3">
                            <p class="text-slate-300 text-sm">
                                “We tested the theme on our main site first, then rolled it out to three client
                                projects. It felt less
                                like installing a template and more like upgrading our infrastructure.”
                            </p>
                            <div class="mt-2 flex items-center gap-3">
                                <div class="h-8 w-8 rounded-full bg-gradient-to-tr from-slate-600 to-slate-300" />
                                <div>
                                    <p class="text-xs font-semibold">Agency founder</p>
                                    <p class="text-[11px] text-slate-400">Digital studio</p>
                                </div>
                            </div>
                        </div>

                        <div class="rounded-2xl border border-slate-800 bg-slate-900/80 p-5 flex flex-col gap-3">
                            <p class="text-slate-300 text-sm">
                                “Nuxt Content gives us a writer-friendly flow, and the theme keeps everything
                                consistent. We focus on
                                articles; the layouts take care of themselves.”
                            </p>
                            <div class="mt-2 flex items-center gap-3">
                                <div class="h-8 w-8 rounded-full bg-gradient-to-tr from-emerald-500 to-slate-200" />
                                <div>
                                    <p class="text-xs font-semibold">Content manager</p>
                                    <p class="text-[11px] text-slate-400">Education platform</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- FINAL CTA -->
            <section class="border-t border-slate-800 bg-slate-950">
                <div class="max-w-6xl mx-auto px-4 py-14 sm:py-18">
                    <div
                        class="relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 px-6 py-10 sm:px-10">
                        <div class="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-emerald-500/20 blur-3xl" />
                        <div class="absolute -left-16 bottom-0 h-36 w-36 rounded-full bg-cyan-500/20 blur-3xl" />

                        <div
                            class="relative flex flex-col items-start gap-6 text-left sm:flex-row sm:items-center sm:justify-between">
                            <div>
                                <h2 class="text-2xl sm:text-3xl font-semibold tracking-tight">
                                    Ready to see the theme working with real content?
                                </h2>
                                <p class="mt-3 text-sm sm:text-base text-slate-300 max-w-xl">
                                    Explore the blog listing, open a single post, and see how the layout, typography and
                                    structure are all
                                    handled by the theme — while your Nuxt app keeps control of everything else.
                                </p>
                            </div>

                            <div class="flex flex-wrap gap-4">
                                <div class="relative group">
                                    <div
                                        class="absolute -inset-0.5 rounded-full bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-500 opacity-60 blur group-hover:opacity-90 transition duration-500" />
                                    <NuxtLink
to="/blog"
                                        class="relative inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-semibold bg-slate-950 text-slate-50">
                                        Open Blog Demo
                                        <Icon name="lucide:arrow-right" class="ml-2 h-4 w-4" />
                                    </NuxtLink>
                                </div>

                                <NuxtLink
to="/contact-us"
                                    class="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold border border-slate-600/80 text-slate-100 hover:bg-slate-900/80 hover:border-emerald-400/70 hover:text-emerald-100 transition duration-300">
                                    Discuss your use case
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    </NuxtLayout>
</template>


<script setup lang="ts">
    // If you're not already using @nuxt/icon, either install it or
    // replace <Icon> with your own icon component / remove it.

    definePageMeta({
        layout: false,
        title: 'Nuxt Blog Themes - Ship beautiful blogs in minutes',
        meta: [
            {
                name: 'description',
                content: 'Plug a fully designed blog system into any Nuxt 3 app. Swap themes, keep your content. One central theme repo, unlimited client sites.'
            }
        ]
    })
</script>

<style scoped>
    @keyframes fade-in {
        from {
            opacity: 0;
            transform: translateY(10px);
        }

        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes slide-up {
        from {
            opacity: 0;
            transform: translateY(18px);
        }

        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
</style>
