<!-- components/LayoutShell.vue -->
<template>
  <div class="min-h-screen bg-white text-gray-900 font-sans">
    <NuxtLoadingIndicator />
    <NavigationBar />
    <main class="container mx-auto max-w-6xl px-4">
      <slot />
    </main>
    <Footer />
  </div>
</template>
