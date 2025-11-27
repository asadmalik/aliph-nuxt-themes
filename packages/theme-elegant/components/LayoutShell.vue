<!-- components/LayoutShell.vue -->
<template>
  <div class="min-h-screen ">
    <NuxtLoadingIndicator />
    <NavigationBar />
    <main class="container max-w-full mx-auto ">
      <slot />
    </main>
    <Footer />
  </div>
</template>
