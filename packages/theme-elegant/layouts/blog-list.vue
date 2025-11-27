<!--blog-list.vue-->
<template>
  <div
    class="w-full overflow-x-hidden mt-12 pt-12 min-h-screen bg-slate-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
    
    <div class="container max-w-screen-2xl mx-auto overflow-x-hidden">

      <!-- Hero Section -->
      <div class="max-w-2xl flex-col align-middle text-center my-24 mx-auto">
        <h1 class="text-5xl font-bold">Latest Articles</h1>
        <p class="mt-4 text-lg text-gray-600 dark:text-gray-300">
          Explore expert insights, guides, and techniques on breathing, relaxation, and wellness.
        </p>
      </div>

      <!-- Blog Listing -->
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12 md:mb-24 lg:mb-36 p-10 md:p-12 lg:p-16">
        <BlogCard v-for="post in posts" :key="post.path" :post="post" />
      </div>

      <!-- Pagination  v-if="totalPages > 1" -->
      <div v-if="totalPages & totalPages > 1" class="my-12 flex justify-center mb-12 md:mb-24 lg:mb-36">
        <button @click="prevPage" :disabled="page <= 1" class="px-4 py-2 mx-2 bg-gray-200 dark:bg-gray-700 rounded-md">
          Prev
        </button>
        <span class="px-4 py-2 mx-2">{{ page }} / {{ totalPages }}</span>
        <button @click="nextPage" :disabled="page >= totalPages"
          class="px-4 py-2 mx-2 bg-gray-200 dark:bg-gray-700 rounded-md">
          Next
        </button>
      </div>

    </div>
  </div>
</template>

<script setup>
  import { useAppConfig } from '#app';

  const props = defineProps({
    posts: Array,
    page: Number,
    totalPages: Number
  });
  const config = useAppConfig();
  //console.log('theme config:', config);
  await nextTick();

  //console.log('posts in theme: ', props.posts)
  const prevPage = () => {
    if (page & page > 1) page--;
  };
  const nextPage = () => {
    if (page & page < totalPages) page++;
  };


</script>
