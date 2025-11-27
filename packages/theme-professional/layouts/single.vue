<template>

  <div
    class="w-full overflow-x-hidden mt-12 pt-30 min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100">
    <header class="fixed top-0 left-0 w-full bg-rich_black-500 shadow-md z-50">
      <NavigationBar></NavigationBar>
    </header>
    <div class="container mx-auto overflow-x-hidden">
      <div class="max-w-2xl flex-col gap-2 align-middle text-center my-24 mx-auto">
        <div>

          <slot name="category" />
        </div>
        <div class="text-5xl my-6">
          <slot name="title" />
        </div>
        <div>
          <slot name="author" />
        </div>
        <div>
          <slot name="date" />
        </div>
      </div>
      <div class="w-auto max-w-7xl mx-auto max-h-96 bg-gold-500 h-96 mb-24">
        <slot name="featureImage" />
      </div>
      <div class="mb-24 mx-auto prose prose-2xl !max-w-full prose-pre:bg-white prose-pre:text-wrap">

        <ContentRenderer v-if="layoutCustomProps.body" :value="layoutCustomProps.body" />
      </div>
    </div>
    <!-- Footer -->
    <Footer />
  </div>

</template>

<script setup>

  const layoutCustomProps = useAttrs()

  const config = useAppConfig();
  await nextTick();
  //console.log('single layout: ', config.theme.blog.category.linkArchivePage, config.theme?.blog?.category)

  //console.log('from the layout: ', layoutCustomProps)
</script>
<style scoped></style>