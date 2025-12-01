<template>
  <LayoutShell>
    <section class="py-16">
      <div class="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
        <h1 class="text-4xl font-semibold leading-tight">Posts by {{ props.author }}</h1>
        <p class="text-base text-gray-700">{{ description || '' }}</p>
      </div>

      <div class="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2">
        <BlogCard v-for="post in posts" :key="post.path" :post="post" />
      </div>

      <div v-if="totalPages & totalPages > 1" class="mt-12 flex justify-center gap-4 text-sm">
        <button @click="prevPage" :disabled="page <= 1" class="px-3 py-2 disabled:text-gray-400">Prev</button>
        <span>{{ page }} / {{ totalPages }}</span>
        <button @click="nextPage" :disabled="page >= totalPages" class="px-3 py-2 disabled:text-gray-400">Next</button>
      </div>
    </section>
  </LayoutShell>
</template>

<script setup>
import LayoutShell from '~/components/LayoutShell.vue'
import BlogCard from '~/components/BlogCard.vue'

const props = defineProps({
  posts: Array,
  page: Number,
  totalPages: Number,
  author: String,
  description: String
})

const prevPage = () => {
  if (props.page > 1) props.page--
}
const nextPage = () => {
  if (props.page < props.totalPages) props.page++
}
</script>
