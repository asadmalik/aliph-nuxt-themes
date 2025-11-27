<template>
    <div
        class="w-full overflow-x-hidden mt-12 pt-30 min-h-screen bg-slate-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
        <header class="fixed top-0 left-0 w-full bg-rich_black-500 shadow-md z-50">
            <NavigationBar></NavigationBar>
        </header>

        <div class="container max-w-screen-2xl mx-auto overflow-x-hidden">
            <!-- Hero Section -->
            <div class="max-w-2xl flex-col align-middle text-center my-24 mx-auto">
                <h1 class="text-5xl font-thin leading-relaxed">
                    Posts by: <br><span class="font-extrabold ">{{
                        props.author
                    }}</span>
                </h1>
                <p class="mt-4 text-lg text-gray-600 dark:text-gray-300">
                    {{ description || '' }}
                </p>
            </div>

            <!-- Blog Listing -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12 md:mb-24 lg:mb-36">
                <div v-for="post in posts" :key="post.path"
                    class="rounded-lg shadow-md hover:shadow-lg overflow-hidden bg-white dark:bg-gray-800">
                    <NuxtLink :to="post.path">
                        <img v-if="post.featureImage" :src="post.featureImage" :alt="post.title"
                            class="w-full h-48 object-cover">
                    </NuxtLink>
                    <div class="p-6">
                        <!-- <span class="text-sm text-mikado_yellow-500">{{ post.category }}</span> -->
                        <NuxtLink :to="post.path">
                            <h2 class="text-xl font-bold mt-2">{{ post.title }}</h2>
                        </NuxtLink>
                        <p class="text-gray-600 dark:text-gray-300 mt-2">{{ post.excerpt }}</p>
                        <div class="mt-4 flex items-center text-sm text-gray-500 dark:text-gray-400">
                            <span class="mr-1">{{ post.author }}</span> &nbsp;•&nbsp;
                            <span class="ml-1">{{ formatDate(post.date) }}</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Pagination -->
            <div v-if="totalPages & totalPages > 1" class="my-12 flex justify-center mb-12 md:mb-24 lg:mb-36">
                <button @click="prevPage" :disabled="page <= 1"
                    class="px-4 py-2 mx-2 bg-gray-200 dark:bg-gray-700 rounded-md">
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
    const props = defineProps({
        posts: Array,
        page: Number,
        totalPages: Number,
        author: String,
        description: String
    });

    // Pagination functions
    const prevPage = () => {
        if (props.page > 1) props.page--;
    };
    const nextPage = () => {
        if (props.page < props.totalPages) props.page++;
    };

    // Format date function
    const formatDate = (date) => {
        if (!date) return "";
        return new Date(date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });
    };
</script>
