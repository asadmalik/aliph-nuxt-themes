Got it.
**AGENTS.md must be compact, actionable, and tailored specifically for AI agents.**
It must describe the **goals**, **rules**, **directories**, **theme architecture**, **extensibility**, and **how agents should behave** when modifying the project.

Below is a **clean, structured, <8000-char AGENTS.md** written EXACTLY for agent-mode, following modern standards.

---

# **AGENTS.md**

# 📌 Project: Nuxt Blog with Installable Themes

This project is a **Nuxt 3 application** that delegates all blog presentation to **external Nuxt Layer themes**, published as npm packages.
The app only manages **content, routing, navigation config, and data logic**.
Themes handle **layouts, components, blog styling**, and are installed via npm.

---

# 🎯 Primary Objectives for Agents

1. **Preserve separation of concerns**

   * App = logic, content, routes
   * Themes = layouts, presentation, components

2. **Always work within the active theme selected by `extends` in `nuxt.config.ts`**

   * Example:

     ```ts
     extends: ['@asadmalik.pk/theme-elegant']
     ```

3. **Never duplicate layouts inside the app**

   * The app must not shadow theme layouts unless explicitly instructed.

4. **When updating blog pages**, only modify:

   * `.app/pages/blog/**/*.vue`
   * `.app/content/blog/*.md`

5. **Never fetch content inside themes.**
   Themes only receive props or slots.

6. **Preserve compatibility with Nuxt Content v3 (`queryCollection`).**

---

# 🧱 Project Structure (Consumer App)

```
.app/
  components/global/
  composables/
  content/blog/
  layouts/
    blank.vue
  pages/blog/
    index.vue
    [...slug].vue
    category/[category].vue
    tag/[tag].vue
    archive/[author].vue
    archive/[year]-[month].vue
  app.config.ts
  content.config.ts
  nuxt.config.ts
  tailwind.config.ts
```

### Key rules:

* `layouts/` MUST NOT contain blog layouts (`blog-list`, `single`, etc.) unless intentionally overriding a theme.
* Blog pages (**listing, single, category, tag, archive**) should render through theme layouts:

```vue
<NuxtLayout name="blog-list" :posts="posts" />
```

```vue
<NuxtLayout name="single" :body="page.body">
  <template #title>{{ page.title }}</template>
</NuxtLayout>
```

---

# 🎨 Theme Architecture (External NPM Packages)

Each theme (e.g., `@asadmalik.pk/theme-elegant`) contains:

```
components/
  BlogCard.vue
  NavigationBar.vue
composables/
  useBlogMeta.ts
layouts/
  blog-list.vue
  single.vue
  archive.vue
  author.vue
  page.vue
  default.vue
app.config.ts
tailwind.config.ts
nuxt.config.ts
```

### Theme Rules for Agents:

* Themes NEVER query content.
* Themes ONLY consume props or slots.
* Themes manage:

  * Blog card designs
  * Typography
  * Page layout structure
  * Navigation bar styling
  * Decorative sections
* Themes may read from `useAppConfig()` to obtain:

  * Navigation links
  * Color/class rules
  * Visibility flags
  * UI preferences

---

# 🧩 Content Model (Nuxt Content v3)

Defined in `.app/content.config.ts`:

Each blog post has:

* `title`, `description`, `excerpt`
* `featureImage`
* `author`, `category`, `tags`
* `date`
* `body`
* `seo` (optional metadata)
* `path` (auto-generated)

### Fetching API:

**Single post:**

```ts
queryCollection('blog').path(route.path).first()
```

**List:**

```ts
queryCollection('blog').all()
```

---

# 📄 Blog Pages (App Layer Responsibilities)

### `/blog/index.vue`

* Fetch all posts
* Pass posts into theme layout:

  ```vue
  <NuxtLayout name="blog-list" :posts="posts" />
  ```

### `/blog/[...slug].vue`

* Fetch single post
* Pass metadata via slots and `:body`:

  ```vue
  <NuxtLayout name="single" :body="page.body">
    <template #title>{{ page.title }}</template>
  </NuxtLayout>
  ```

### `/blog/category/[category].vue`

* Filter via `queryCollection('blog').where({ category })`
* Render with:

  ```vue
  <NuxtLayout name="blog-list" :posts="filteredPosts" />
  ```

Same pattern for **tag**, **author**, **archive**.

---

# 🧭 Navigation System

Themes read navigation items from `.app/app.config.ts`:

```ts
navigation: {
  logo: { component: 'AppLogo', props: { class: 'h-10' } },
  items: [
    { title: 'Home', to: '/' },
    { title: 'Blog', to: '/blog' },
    { title: 'About Us', to: '/about-us' },
    { title: 'Contact Us', to: '/contact-us' },
  ]
}
```

Agents modifying navigation should **only** update this file.

---

# 🔧 Tailwind & Styling Rules

* Themes include their own `tailwind.config.ts` (colors, typography rules).
* The consuming app includes global Tailwind config; Nuxt merges them.
* Agents editing theme colors must do so **inside the theme package**, not the app.

---

# 🛑 Critical Agent Rules

1. **Do not modify theme files from inside the consumer app.**
2. **Do not move or rename theme layout names** unless instructed.
3. **Do not add new layouts inside `.app/layouts/` that override theme names.**
4. **Do not fetch content inside the theme.**
5. **Do not break the slot/prop contract** between:

   * `index.vue`, `[...slug].vue`
   * theme layout files
6. When modifying blog output, always use:

   ```vue
   <ContentRenderer :value="body" />
   ```
7. Do not downgrade or alter Nuxt Content v3 APIs (`queryCollection`).

---

# ⚙️ Extending the System

Agents may add:

* New themes (published to npm)
* New slots to theme layouts
* Additional metadata fields in blog schema
* New visual components inside themes
* New filtering/pagination in blog index page

Agents MUST NOT:

* Introduce coupling between themes and the app
* Add server APIs inside themes
* Introduce layout logic that bypasses Nuxt Layout API

---

# 📦 Installing a Theme in Any Nuxt Project

```
pnpm add -D @asadmalik.pk/theme-elegant
```

`nuxt.config.ts`:

```ts
export default defineNuxtConfig({
  extends: ['@asadmalik.pk/theme-elegant'],
  modules: ['@nuxt/content', '@nuxtjs/tailwindcss']
})
```

Then create pages in the consumer project:

```vue
<NuxtLayout name="blog-list" :posts="posts" />
```

---

# ✅ Summary

* App handles content + routing
* Themes handle styling + layouts
* Themes are installed via npm
* Data flows: **app → layouts → components**
* Absolutely no data fetching occurs inside themes
* Agents must ensure the design remains modular, theme-driven, and drop-in compatible with future Nuxt apps

