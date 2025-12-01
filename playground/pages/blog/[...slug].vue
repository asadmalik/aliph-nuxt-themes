<!--./.app/pages/blog/[...slug].vue-->
<script setup lang="ts">

  definePageMeta({
    layout: false,
    pageTransition: false,
    layoutTransition: false
  })
  const route = useRoute()
  const config = useAppConfig();

  const { data: page } = await useAsyncData('page-' + route.path, () => {
    return queryCollection('blog').path(route.path).first()
  })
  //console.log(page);
  if (!page.value) {
    throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
  }
  else
  console.log('Loaded page:', page.value);

  // Function to format date
  const formatDate = (date) => {
    if (!date) return "";
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  console.log('feaured image:', page.value?.featureImage)
</script>

<template>
  <div>

    <NuxtLayout name="single" :body="page?.body">
  <template #category>
    <NuxtLink
      v-if="config.theme?.blog?.category?.linkArchivePage"
      :to="`/blog/category/${page?.category}`"
      :class="[config.theme?.blog?.category?.colorClass, 'hover:' + config.theme?.blog?.category?.hoverClass]"
    >
      {{ page?.category }}
    </NuxtLink>
  </template>

  <template #title>{{ page?.title }}</template>
  <template #author>{{ page?.author }}</template>
  <template #date>{{ formatDate(page?.date) }}</template>

  <template #readingTime>
    <!-- totally up to you how you compute this -->
    ~5 min read
  </template>

  <template #excerpt>
    {{ page?.excerpt }}
  </template>

  <template #tags>
    <NuxtLink
      v-for="tag in page?.tags || []"
      :key="tag"
      :to="`/blog/tag/${tag}`"
      class="rounded-full border border-slate-200 px-3 py-1 text-xs font-medium text-slate-600 hover:border-amber-500 hover:text-amber-600 dark:border-slate-700 dark:text-slate-300 dark:hover:border-amber-400 dark:hover:text-amber-300"
    >
      #{{ tag }}
    </NuxtLink>
  </template>

  <template #featureImage>
    <img
      v-if="page?.featureImage"
      :src="page.featureImage"
      :alt="page.title"
      class="h-full w-full object-cover"
    >
    <div
      v-else
      class="flex h-full items-center justify-center bg-slate-100 dark:bg-slate-800"
    >
      <p class="text-center text-slate-500 dark:text-slate-400">
        No featured image available
      </p>
    </div>
  </template>
</NuxtLayout>


  </div>
</template>
