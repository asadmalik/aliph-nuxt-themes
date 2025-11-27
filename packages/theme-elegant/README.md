# Nuxt Blogging Theme

A fully-themed, drop-in **Nuxt 3 Blog Theme** built as a **Nuxt Layer**, designed to be installed in any Nuxt project.
It handles **layouts, components, styling, typography, navigation UI**, and more — while **your app** handles content & routes.

---

## **✨ Features**

* Plug-and-play Nuxt Layer (extend and you're done)
* Beautiful blog list + single post layouts
* Built for **Nuxt Content v3** (`queryCollection`)
* Zero data fetching inside the theme
* Slots + props driven architecture
* Tailwind Typography & responsive layout
* Works on any Nuxt 3 project (client or personal)

---

## **📦 Installation**

```bash
pnpm add -D @asadmalik.pk/theme-elegant
```

Enable the theme in your **nuxt.config.ts**:

```ts
export default defineNuxtConfig({
  extends: ['@asadmalik.pk/theme-elegant'],

  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss'
  ]
})
```

Done. The theme is active.

---

# **⚙️ Theme Options (`app.config.ts`)**

`@asadmalik.pk/theme-elegant` reads configuration from your project’s **app.config.ts**.
These settings control:

* Site metadata
* Blog metadata
* Related posts
* “View All Posts” button
* Navigation & footer
* Logo
* Extra UI toggles

All optional — but recommended.

---

## **📄 Full Config Example**

```ts
// app/app.config.ts
export default defineAppConfig({
  content: {
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
      src: '/assets/img/aliph.svg',
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
})
```

---

## **🧠 How Theme Options Are Used**

### **Site / Blog Metadata**

| Field             | Used For                   |
| ----------------- | -------------------------- |
| `siteTitle`       | Navbar branding            |
| `siteDescription` | SEO (optional)             |
| `blogTitle`       | Blog landing page title    |
| `blogDescription` | Blog landing page subtitle |

---

### **Related Posts (Single Post Page)**

| Setting          | Behavior                     |
| ---------------- | ---------------------------- |
| `enabled`        | Show/hide section            |
| `title`          | Heading above related posts  |
| `numberOfPosts`  | Count to display             |
| `sameCategory`   | Limit to same category       |
| `showMoreButton` | Display “View All Posts” CTA |
| `moreButtonText` | CTA text                     |

---

### **"View All Posts" (Blog Index Footer)**

| Setting   | Behavior      |
| --------- | ------------- |
| `enabled` | Toggle button |
| `text`    | Button label  |

---

### **Navigation + Footer**

* `navigation.logo` → logo details
* `navigation.items` → header menu
* `navigation.footer.items` → footer links

Theme listens to this via:

```ts
const config = useAppConfig()
```

If something is missing, the theme gracefully hides that UI part.

---

## **📂 Required Content Setup (Nuxt Content v3)**

Install:

```bash
pnpm add @nuxt/content
```

Create:

```
content/
  blog/
    hello-world.md
```

Markdown example:

```md
---
title: "Hello World"
excerpt: "Quick intro…"
featureImage: "/images/hello.jpg"
author: "Asad"
category: "Nuxt"
tags:
  - Nuxt3
  - Blog
date: "2025-01-01"
---
Welcome to your first post!
```

---

# **🧱 Required Pages You Must Create**

The theme does not fetch data — your app does.

---

## **📄 Blog List**

`/pages/blog/index.vue`

```vue
<script setup>
const posts = await queryCollection('blog').all()
</script>

<template>
  <NuxtLayout name="blog-list" :posts="posts" />
</template>
```

---

## **📄 Single Article**

`/pages/blog/[...slug].vue`

```vue
<script setup>
const route = useRoute()
const page = await queryCollection('blog').path(route.path).first()
</script>

<template>
  <NuxtLayout name="single" :body="page.body">
    <template #category>{{ page.category }}</template>
    <template #title>{{ page.title }}</template>
    <template #author>{{ page.author }}</template>
    <template #date>{{ page.date }}</template>
    <template #featureImage>
      <img :src="page.featureImage" class="w-full h-auto" />
    </template>
  </NuxtLayout>
</template>
```

---

## **📄 Category / Tag / Archive Pages**

Same structure:

```vue
<NuxtLayout name="blog-list" :posts="posts" />
```

You fully control routing.

---

# **🎨 Tailwind Customization**

Theme includes its own Tailwind config.

You can override from your app:

```ts
// tailwind.config.ts
export default {
  theme: {
    extend: {
      colors: {
        brand: '#172e51'
      }
    }
  }
}
```

---

# **📁 Inside the Theme**

```
layouts/
  blog-list.vue
  single.vue
  archive.vue
  author.vue
  page.vue
  default.vue

components/
  BlogCard.vue
  NavigationBar.vue

composables/
  useBlogMeta.ts

app.config.ts
tailwind.config.ts
nuxt.config.ts
```

These should **not** be edited from your app.
Override via your own layer only if necessary.

---

# **🚀 What To Do Next**

* Start writing posts
* Configure navigation + content settings
* Style overrides via your tailwind config
* Build category/tag/archive pages
* Swap themes later if you want (same API)

This theme is built to be **developer-friendly, extendable, and fully portable**.

---


## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
