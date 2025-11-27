<script setup lang="ts">

    const route = useRoute();
    const page = ref(1);
    const perPage = 6;

    // Fetch posts for the category
    const { data: allPosts } = await useAsyncData('blog', () =>
        queryCollection('blog')
            .where('tags', 'LIKE', `%${route.params.tag}%`)
            .all()
    )
    //console.log('theme tag: ', route.params['tag'])
    //console.log('category posts:', allPosts.value)
    // Paginate posts
    const paginatedPosts = computed(() =>
        allPosts.value?.slice((page.value - 1) * perPage, page.value * perPage)
    );

    const totalPages = 1//computed(() => Math.ceil(allPosts.value?.length / perPage));
</script>

<template>
    <NuxtLayout name="archive" :posts="paginatedPosts" :page="page" :totalPages="totalPages"
        :archiveType="route.params.tag" />
</template>
