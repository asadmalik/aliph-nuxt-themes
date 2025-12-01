<!-- layers/theme-elegant/components/BlogCard.vue -->
<template>
  <div
    class="rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800"
  >
    <!-- Image -->
    <NuxtLink :to="post.path">
      <img
        v-if="post.featureImage"
        :src="post.featureImage"
        :alt="post.title"
        class="w-full h-48 md:h-56 object-cover"
      />
    </NuxtLink>

    <div class="p-5 md:p-6 space-y-3">
      <!-- Category -->
      <div v-if="category.visible && post.category">
        <NuxtLink
          :to="`/blog/category/${categorySlug}`"
          :class="category.colorClass"
        >
          {{ post.category }}
        </NuxtLink>
      </div>

      <!-- Title -->
      <NuxtLink :to="post.path">
        <h2 class="text-xl font-semibold leading-snug hover:text-[#172e51] dark:hover:text-slate-50">
          {{ post.title }}
        </h2>
      </NuxtLink>

      <!-- Excerpt -->
      <NuxtLink
        v-if="showExcerpt && post.excerpt"
        :to="post.path"
      >
        <p class="text-sm text-slate-600 dark:text-slate-300 mt-1 line-clamp-3">
          {{ post.excerpt }}
        </p>
      </NuxtLink>

      <!-- Meta -->
      <div
        v-if="showMeta && (author.visible || date.visible)"
        class="mt-4 flex flex-wrap items-center gap-2 text-xs text-slate-500 dark:text-slate-400"
      >
        <!-- Author -->
        <template v-if="author.visible && post.author">
          <NuxtLink
            :to="`/blog/archive/${post.author}`"
            :class="author.colorClass"
          >
            {{ post.author }}
          </NuxtLink>
          <span class="mx-1">•</span>
        </template>

        <!-- Date -->
        <NuxtLink
          v-if="date.visible && post.date"
          :to="`/blog/archive/${getYearMonthString(post.date)}`"
          :class='date.colorClass|| ""'
        >
          {{ formatDate(post.date) }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  post: {
    path: string
    title: string
    excerpt?: string
    featureImage?: string
    category?: string
    author?: string
    date?: string | Date
  }
}>()

const appConfig = useAppConfig()

// Safe access to theme config with fallbacks
const themeElegant = computed(() => appConfig.themeElegant ?? {})
const blog = computed(() => themeElegant.value.blog ?? {})
const listing = computed(() => blog.value.listing ?? {})
const meta = computed(() => listing.value.meta ?? {})

const showExcerpt = computed(() => listing.value.showExcerpt ?? true)
const showMeta = computed(() => listing.value.showMeta ?? true)

const category = computed(() => meta.value.category ?? {
  visible: true,
  colorClass:
    'inline-flex items-center rounded-full border border-slate-200 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-[#172e51] bg-slate-50 dark:border-slate-700 dark:bg-slate-900/60',
})

const author = computed(() => meta.value.author ?? {
  visible: true,
  colorClass:
    'font-medium text-slate-700 hover:text-[#172e51] dark:text-slate-200 dark:hover:text-white',
})

const date = computed(() => meta.value.date ?? {
  visible: true,
  colorClass:
    'hover:text-[#172e51] dark:hover:text-white',
})

// Slug for category URL
const categorySlug = computed(() => {
  if (!props.post.category) return ''
  return props.post.category.toLowerCase().replace(/\s+/g, '-')
})

// Helpers
const formatDate = (date: string | Date | undefined) => {
  if (!date) return ''
  const d = new Date(date)
  if (Number.isNaN(d.getTime())) return ''
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

const getYearMonthString = (date: string | Date | undefined) => {
  if (!date) return ''
  const d = new Date(date)
  if (Number.isNaN(d.getTime())) return ''
  const year = d.getFullYear()
  const month = String(d.getMonth() + 1).padStart(2, '0')
  return `${year}-${month}`
}
</script>
