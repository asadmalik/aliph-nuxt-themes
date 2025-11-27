<script setup lang="ts">

    const page = ref(1);
    const perPage = 15;

    // Fetch blog posts
    const { data: allPosts } = await useAsyncData('blog', () => queryCollection('blog').all());
    //console.log('data on page: ', allPosts.value)
    // Paginate posts
    const paginatedPosts = computed(() => {
        return allPosts.value?.slice((page.value - 1) * perPage, page.value * perPage);
    });

    const totalPages = computed(() => Math.ceil(allPosts.value?.length / perPage));
    // console.log('total pages: ', totalPages.value, paginatedPosts.value)
</script>

<template>
    <NuxtLayout name="blog-list" :posts="paginatedPosts" :page="page" :totalPages="totalPages" />
</template>
