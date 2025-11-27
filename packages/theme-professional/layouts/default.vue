<script setup>
    //const menuOpen = ref(false);

</script>
<template>
    <div>
        <NuxtLoadingIndicator />
        <header class="fixed top-0 left-0 w-full bg-rich_black-500 shadow-md z-50">
            <NavigationBar></NavigationBar>
        </header>
        <NuxtPage />
        <!-- Footer -->
        <Footer />
    </div>
</template>
<style scoped>
    :global(.router-link-active) {
        @apply text-primary-300 font-semibold;
    }

    :global(.router-link-exact-active) {
        @apply text-primary-300 font-bold;
    }
</style>