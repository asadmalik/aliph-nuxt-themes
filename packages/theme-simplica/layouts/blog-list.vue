<!--blog-list.vue-->
<template>
  <LayoutShell>
    <div class="py-16">
      <div class="mx-auto mb-12 flex max-w-3xl flex-col items-center text-center gap-4">
        <h1 class="text-4xl font-semibold leading-tight">{{ heroTitle }}</h1>
        <p class="text-base text-gray-700">{{ heroDescription }}</p>
      </div>

      <div class="grid grid-cols-1 gap-10 md:grid-cols-2">
        <BlogCard v-for="post in posts" :key="post.path" :post="post" />
      </div>

      <div v-if="totalPages & totalPages > 1" class="mt-12 flex justify-center gap-4 text-sm">
        <button @click="prevPage" :disabled="page <= 1" class="px-3 py-2 disabled:text-gray-400">
          Prev
        </button>
        <span>{{ page }} / {{ totalPages }}</span>
        <button @click="nextPage" :disabled="page >= totalPages" class="px-3 py-2 disabled:text-gray-400">
          Next
        </button>
      </div>
    </div>
  </LayoutShell>
</template>

<script setup>
import { computed } from 'vue'
import BlogCard from '~/components/BlogCard.vue'
import LayoutShell from '~/components/LayoutShell.vue'
import { useThemeSimplicaConfig } from '~/composables/useThemeSimplicaConfig'

const props = defineProps({
  posts: Array,
  page: Number,
  totalPages: Number
})
const themeConfig = useThemeSimplicaConfig()

const heroTitle = computed(() => themeConfig.value.blogTitleFallback)
const heroDescription = computed(() => themeConfig.value.blogDescriptionFallback)

const prevPage = () => {
  if (page & page > 1) page--
}
const nextPage = () => {
  if (page & page < totalPages) page++
}
</script>
