<!--layers\\theme-simplica\\components\\BlogCard.vue-->
<template>
  <div class="flex h-full flex-col gap-4 bg-white font-sans">
    <NuxtLink :to="post.path">
      <img v-if="post.featureImage" :src="post.featureImage" :alt="post.title" class="h-48 w-full object-cover" />
    </NuxtLink>
    <div class="flex flex-1 flex-col gap-3">
      <div v-if="themeConfig.blogMeta.category.visible" class="text-xs uppercase tracking-wide text-gray-600">
        <NuxtLink
          v-if="themeConfig.blogMeta.category.linkArchivePage"
          :to="`/blog/category/${post.category}`"
          class="hover:underline"
        >
          {{ post.category }}
        </NuxtLink>
        <span v-else>{{ post.category }}</span>
      </div>

      <NuxtLink :to="post.path" class="text-lg font-semibold leading-tight text-gray-900">
        {{ post.title }}
      </NuxtLink>
      <NuxtLink :to="post.path" class="text-sm leading-relaxed text-gray-700">
        {{ post.excerpt }}
      </NuxtLink>

      <div class="mt-auto flex flex-wrap items-center gap-2 text-xs text-gray-600">
        <NuxtLink :to="`/blog/archive/${post.author}`" class="hover:underline">
          <span v-if="themeConfig.blogMeta.author.visible">
            {{ post.author }}
          </span>
        </NuxtLink>
        <span v-if="themeConfig.blogMeta.author.visible">•</span>
        <NuxtLink
          v-if="themeConfig.blogMeta.publishDate.linkArchivePage"
          :to="`/blog/archive/${getYearMonthString(post.date)}`"
          class="hover:underline"
        >
          {{ formatDate(post.date) }}
        </NuxtLink>
        <span v-else>
          {{ formatDate(post.date) }}
        </span>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useThemeSimplicaConfig } from '~/composables/useThemeSimplicaConfig'

const props = defineProps({
  post: Object
})
const themeConfig = useThemeSimplicaConfig()

const formatDate = (date) => {
  if (!date) return ''
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

const getYearMonthString = (date) => {
  if (!date) return ''
  const dateObj = new Date(date)
  const year = dateObj.getFullYear()
  const month = String(dateObj.getMonth() + 1).padStart(2, '0')
  return year + '-' + month
}
</script>
