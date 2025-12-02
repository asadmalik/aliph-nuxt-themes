<!-- playground/pages/blog/[...slug].vue -->
<script setup lang="ts">
definePageMeta({
  layout: false,
  pageTransition: false,
  layoutTransition: false,
})

const route = useRoute()

const { data: page } = await useAsyncData('page-' + route.path, () => {
  return queryCollection('blog').path(route.path).first()
})

if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Post not found',
  })
}

const formatDate = (date?: string | Date) => {
  if (!date) return ''
  const d = new Date(date)
  if (Number.isNaN(d.getTime())) return ''
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

// If you later add readingTime to content, you can wire it here:
// const readingTime = computed(() => page.value?.readingTime ?? null)
const readingTime = computed<number | null>(() => null)
</script>

<template>
  <div v-if="page">
    <NuxtLayout
      name="single"
      :body="page.body"
      :readingTime="readingTime"
    >
      <template #category>
        {{ page.category }}
      </template>

      <template #title>
        {{ page.title }}
      </template>

      <template #author>
        {{ page.author }}
      </template>

      <template #date>
        {{ formatDate(page.date) }}
      </template>

      <template #featureImage>
        <img
          v-if="page.featureImage"
          :src="page.featureImage"
          :alt="page.title"
          class="h-full w-full object-cover"
        />
      </template>

      <!-- Optional: when you implement related posts, render them here -->
      <template #related>
        <!-- related cards go here -->
      </template>
    </NuxtLayout>
  </div>
</template>
