<script setup lang="ts">

    const route = useRoute();
    const page = ref(1);
    const perPage = 6;

    // Fetch posts for the category
    const { data: allPosts } = await useAsyncData('blog', () =>
        queryCollection('blog').where('category', '=', route.params['category']).all()
    )

    //console.log('category posts:', allPosts.value)
    // Paginate posts
    const paginatedPosts = computed(() =>
        allPosts.value?.slice((page.value - 1) * perPage, page.value * perPage)
    );

    const totalPages = 1//computed(() => Math.ceil(allPosts.value?.length / perPage));
    //console.log('category listing: ', paginatedPosts, route.params['category'])
</script>

<template>
    <NuxtLayout name="archive" :posts="paginatedPosts" :page="page" :totalPages="totalPages"
        :archiveType="route.params['category']" />
</template>
