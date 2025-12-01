<template>
  <LayoutShell>
    <article class="mx-auto max-w-3xl space-y-8 py-16">
      <header class="space-y-4">
        <div class="text-xs uppercase tracking-wide text-gray-600">
          <slot name="category" />
        </div>
        <h1 class="text-4xl font-semibold leading-tight text-gray-900">
          <slot name="title" />
        </h1>
        <div class="flex flex-wrap items-center gap-3 text-sm text-gray-600">
          <div class="flex items-center gap-2">
            <slot name="author-avatar">
              <span class="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gray-100">✦</span>
            </slot>
            <div>
              <div class="font-medium text-gray-900">
                <slot name="author" />
              </div>
              <div class="text-xs text-gray-600">
                <slot name="author-subline">Contributor</slot>
              </div>
            </div>
          </div>
          <span v-if="$slots.date">•</span>
          <span class="text-xs uppercase tracking-wide" v-if="$slots.date">
            <slot name="date" />
          </span>
          <template v-if="$slots.readingTime">
            <span>•</span>
            <span class="text-xs uppercase tracking-wide">
              <slot name="readingTime" />
            </span>
          </template>
        </div>
      </header>

      <section v-if="$slots.featureImage" class="w-full">
        <div class="aspect-[16/9] w-full overflow-hidden">
          <slot name="featureImage" />
        </div>
      </section>

      <section v-if="$slots.excerpt" class="text-lg text-gray-700">
        <slot name="excerpt" />
      </section>

      <section v-if="$slots.tags">
        <div class="flex flex-wrap items-center gap-2 text-sm text-gray-700">
          <slot name="tags" />
        </div>
      </section>

      <section>
        <div class="prose prose-lg max-w-none font-sans prose-a:underline">
          <ContentRenderer v-if="layoutCustomProps.body" :value="layoutCustomProps.body" />
        </div>
      </section>

      <footer class="flex flex-wrap items-center justify-between gap-4 text-sm text-gray-700">
        <div class="flex items-center gap-3">
          <slot name="author-footer-avatar">
            <span class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">✦</span>
          </slot>
          <div>
            <p class="text-xs uppercase tracking-wide text-gray-600">Written by</p>
            <p class="text-base font-medium text-gray-900">
              <slot name="author" />
            </p>
          </div>
        </div>
        <div v-if="$slots.footer" class="text-xs text-gray-600">
          <slot name="footer" />
        </div>
      </footer>
    </article>
  </LayoutShell>
</template>

<script setup>
import LayoutShell from '~/components/LayoutShell.vue'

const layoutCustomProps = useAttrs()
</script>
