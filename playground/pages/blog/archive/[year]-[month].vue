<script setup lang="ts">
    const route = useRoute();
    const page = ref(1);
    const perPage = 6;
    //console.log('route params: ', route.params)
    // Extract year and month from the URL (e.g., "2024-01")
    //const [year, month] = route.params["year-month"].toString().split("-").map(Number);
    const year = Number.parseInt(route.params.year.toString());
    const month = Number.parseInt(route.params.month.toString());

    //console.log('year and month: ', year, month)
    // Define start and end dates for the selected month
    const startDate = new Date(year, month - 1, 1).toISOString();
    const endDate = new Date(year, month, 0).toISOString(); // Last day of month

    // Fetch posts published within the selected month
    const { data: allPosts } = await useAsyncData("blog", () =>
        queryCollection("blog")
            .where("date", "BETWEEN", [startDate, endDate])
            .all()
    );

    // Paginate posts
    const paginatedPosts = computed(() =>
        allPosts.value?.slice((page.value - 1) * perPage, page.value * perPage)
    );

    const totalPages = computed(() =>
        Math.ceil((allPosts.value?.length || 0) / perPage)
    );
   // console.log('all post date archive: ', allPosts, paginatedPosts.value, totalPages.value);
</script>

<template>
    <NuxtLayout name="archive" :posts="paginatedPosts" :page="page" :totalPages="totalPages"
        :archiveType='`${year}-${String(month).padStart(2, "0")}`' />
</template>


