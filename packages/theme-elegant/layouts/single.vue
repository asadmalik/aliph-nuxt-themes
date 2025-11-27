<template>
  <LayoutShell>
    <!-- Reading progress bar -->
    <div class="fixed inset-x-0 top-0 z-40 h-1 bg-transparent">
      <div
        class="h-full origin-left bg-amber-500/90 transition-[transform] duration-150 ease-out dark:bg-amber-400/90"
        :style="{ transform: `scaleX(${scrollProgress})` }"
      />
    </div>

    <div
      class="relative w-full overflow-x-hidden bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-50"
    >
      <!-- Soft background glow -->
      <div
        class="pointer-events-none absolute inset-x-0 top-0 z-0 h-80 bg-gradient-to-b from-amber-200/70 via-amber-100/40 to-transparent blur-3xl dark:from-amber-500/20 dark:via-amber-400/5"
      />

      <div class="relative z-10 container mx-auto max-w-6xl px-4 lg:px-8">
        <article class="mx-auto max-w-3xl py-16 lg:py-24">
          <!-- HEADER -->
          <header class="mb-10 lg:mb-14">
            <!-- Category + optional right meta -->
            <div class="mb-4 flex items-center justify-between gap-3">
              <div
                class="inline-flex items-center gap-2 rounded-full bg-slate-900/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-amber-700 shadow-sm ring-1 ring-slate-200/60 backdrop-blur-sm dark:bg-slate-900/60 dark:text-amber-300 dark:ring-slate-700/80"
              >
                <span class="h-1.5 w-1.5 rounded-full bg-amber-500 dark:bg-amber-300" />
                <slot name="category" />
              </div>

              <div
                v-if="$slots['meta-right']"
                class="hidden text-xs text-slate-500 dark:text-slate-400 lg:inline-flex"
              >
                <slot name="meta-right" />
              </div>
            </div>

            <!-- Title -->
            <h1
              class="text-balance text-3xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl dark:text-slate-50"
            >
              <slot name="title" />
            </h1>

            <!-- Author / date / reading time / tags -->
            <div
              class="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-slate-500 dark:text-slate-400"
            >
              <!-- Author avatar-ish -->
              <div class="flex items-center gap-3">
                <span
                  class="inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-xs font-semibold text-slate-700 shadow-sm ring-1 ring-slate-200 dark:bg-slate-800 dark:text-slate-100 dark:ring-slate-700"
                >
                  <slot name="author-avatar">
                    <!-- fallback: initials from author, if user wants later -->
                    <span>✦</span>
                  </slot>
                </span>
                <div class="leading-tight">
                  <div class="font-medium text-slate-900 dark:text-slate-50">
                    <slot name="author" />
                  </div>
                  <div class="text-xs text-slate-500 dark:text-slate-400">
                    <slot name="author-subline">Contributor</slot>
                  </div>
                </div>
              </div>

              <span class="hidden h-1 w-1 rounded-full bg-slate-300 lg:inline-block dark:bg-slate-600" />

              <div class="flex flex-wrap items-center gap-2">
                <span class="text-xs uppercase tracking-[0.18em]">
                  <slot name="date" />
                </span>

                <template v-if="$slots.readingTime">
                  <span
                    class="h-1 w-1 rounded-full bg-slate-300 dark:bg-slate-600"
                  />
                  <span class="text-xs uppercase tracking-[0.18em]">
                    <slot name="readingTime" />
                  </span>
                </template>
              </div>
            </div>
          </header>

          <!-- FEATURE IMAGE -->
          <section
            v-if="$slots.featureImage"
            class="mb-12 overflow-hidden rounded-3xl border border-slate-200/80 bg-slate-900/2 shadow-[0_18px_45px_-20px_rgba(15,23,42,0.55)] transition hover:-translate-y-1 hover:shadow-[0_24px_60px_-28px_rgba(15,23,42,0.75)] dark:border-slate-800/90 dark:bg-slate-900"
          >
            <div class="aspect-[16/9] w-full">
              <slot name="featureImage" />
            </div>
          </section>

          <!-- LEAD / EXCERPT -->
          <section
            v-if="$slots.excerpt"
            class="mb-10 border-l-4 border-amber-500/80 pl-4 text-lg text-slate-700 dark:text-slate-100"
          >
            <slot name="excerpt" />
          </section>

          <!-- TAGS row -->
          <section v-if="$slots.tags" class="mb-8">
            <div class="flex flex-wrap items-center gap-2">
              <slot name="tags" />
            </div>
          </section>

          <!-- BODY + optional sidebar -->
          <section class="">
            <!-- Main content -->
            <div
              class="prose prose-lg max-w-none prose-headings:scroll-mt-24 prose-headings:font-semibold prose-a:font-semibold prose-a:no-underline hover:prose-a:underline prose-blockquote:border-amber-500 prose-blockquote:text-slate-700 prose-img:rounded-2xl prose-pre:bg-slate-900 prose-pre:text-sm prose-pre:text-wrap dark:prose-invert dark:prose-blockquote:border-amber-400 dark:prose-blockquote:text-slate-100 dark:prose-pre:bg-slate-900"
            >
              <ContentRenderer
                v-if="layoutCustomProps.body"
                :value="layoutCustomProps.body"
              />
            </div>

            <!-- Optional sticky sidebar (toc, extra meta etc.) -->
            <aside
              v-if="$slots.sidebar"
              class="mt-12 hidden lg:col-span-4 lg:mt-0 lg:block"
            >
              <div
                class="sticky top-28 rounded-2xl border border-slate-200/80 bg-white/70 p-4 text-sm shadow-sm backdrop-blur-sm dark:border-slate-800/80 dark:bg-slate-900/80"
              >
                <slot name="sidebar" />
              </div>
            </aside>
          </section>

          <!-- FOOTER META -->
          <footer
            class="mt-14 border-t border-slate-200 pt-8 text-sm text-slate-500 dark:border-slate-800 dark:text-slate-400"
          >
            <div
              class="flex flex-wrap items-center justify-between gap-6"
            >
              <div class="flex items-center gap-3">
                <span
                  class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-xs font-semibold text-slate-700 shadow-sm ring-1 ring-slate-200 dark:bg-slate-800 dark:text-slate-100 dark:ring-slate-700"
                >
                  <slot name="author-footer-avatar">
                    <span>✦</span>
                  </slot>
                </span>
                <div class="leading-tight">
                  <p
                    class="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400"
                  >
                    Written by
                  </p>
                  <p
                    class="text-base font-medium text-slate-900 dark:text-slate-50"
                  >
                    <slot name="author" />
                  </p>
                </div>
              </div>

              <div v-if="$slots.footer" class="text-right text-xs">
                <slot name="footer" />
              </div>
            </div>
          </footer>
        </article>
      </div>
    </div>
  </LayoutShell>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import LayoutShell from '~/components/LayoutShell.vue'

const layoutCustomProps = useAttrs()

// Smooth reading progress (0–1)
const scrollProgress = ref(0)

if (process.client) {
  let ticking = false

  const handleScroll = () => {
    if (ticking) return
    ticking = true

    window.requestAnimationFrame(() => {
      const doc = document.documentElement
      const total = doc.scrollHeight - doc.clientHeight
      const current = window.scrollY
      scrollProgress.value =
        total > 0 ? Math.min(1, Math.max(0, current / total)) : 0
      ticking = false
    })
  }

  onMounted(() => {
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
  })

  onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll)
  })
}
</script>
