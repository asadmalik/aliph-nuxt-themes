<template>
  <LayoutShell>
    <section class="pt-16 pb-24">
      <div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-0">
        <!-- Back link -->
        <NuxtLink
          v-if="single.showBackLink"
          to="/blog"
          class="mb-4 inline-flex items-center gap-2 text-sm text-slate-600 hover:text-[#172e51] hover:underline dark:text-slate-300 dark:hover:text-white"
        >
          {{ single.backLinkText || '← Back to Blog' }}
        </NuxtLink>

        <article
          class="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-950"
        >
          <!-- Hero -->
          <div
            class="relative flex items-end bg-gradient-to-br from-[#172e51] via-slate-800 to-slate-700"
            :class="single.heroHeightClass"
          >
            <!-- Feature image -->
            <div v-if="single.showHeroImage" class="absolute inset-0">
              <slot name="featureImage" />
            </div>

            <!-- Overlay content -->
            <div
              class="relative z-10 w-full space-y-4 bg-gradient-to-t from-black/45 via-black/25 px-6 py-6 text-white md:px-10 md:py-8"
            >
              <!-- Category pill -->
              <div
                v-if="single.showCategoryPill"
                class="inline-flex items-center gap-2 text-xs font-semibold tracking-wide uppercase"
              >
                <span
                  class="inline-flex items-center rounded-full bg-white/10 px-3 py-1 backdrop-blur"
                >
                  <slot name="category" />
                </span>
              </div>

              <!-- Title -->
              <h1 class="text-3xl font-semibold leading-tight md:text-4xl lg:text-5xl">
                <slot name="title" />
              </h1>

              <!-- Meta -->
              <div
                v-if="single.showAuthor || single.showDate || typography.showReadingTime"
                class="flex flex-wrap items-center gap-3 text-xs text-white/80 md:text-sm"
              >
                <span v-if="single.showAuthor" class="flex items-center gap-2">
                  <span class="font-medium">
                    <slot name="author" />
                  </span>
                </span>

                <span v-if="single.showAuthor && single.showDate">•</span>

                <span v-if="single.showDate">
                  <slot name="date" />
                </span>

                <span
                  v-if="typography.showReadingTime && readingTime"
                  class="flex items-center gap-2"
                >
                  <span>•</span>
                  <span>{{ readingTime }} min read</span>
                </span>
              </div>
            </div>
          </div>

          <!-- Body + optional sidebar -->
          <div
            class="grid gap-10 px-6 py-10 md:px-10 lg:px-12"
            :class="
              single.showSidebar && layout.showSidebarOnSingle
                ? 'lg:grid-cols-[minmax(0,1.8fr)_minmax(0,0.8fr)]'
                : 'lg:grid-cols-1'
            "
          >
            <!-- Main content -->
            <div :class="[layout.constrainedWidthClass, 'w-full mx-auto']">
              <!-- CTA below hero -->
              <div
                v-if="ctaBelowHero.enabled"
                class="mb-10 rounded-xl border border-slate-200/70 bg-slate-50/80 p-5 dark:border-slate-700 dark:bg-slate-900/60"
              >
                <h2 class="mb-2 text-lg font-semibold">
                  {{ ctaBelowHero.title }}
                </h2>
                <p class="mb-4 text-sm text-slate-700 dark:text-slate-300">
                  {{ ctaBelowHero.text }}
                </p>
                <NuxtLink
                  :to="ctaBelowHero.buttonTo"
                  class="inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium transition bg-[#172e51] text-white hover:bg-[#12243e]"
                >
                  {{ ctaBelowHero.buttonText }}
                </NuxtLink>
              </div>

              <!-- Content body -->
              <div
                :class="[
                  'prose prose-slate dark:prose-invert',
                  typography.bodySize,
                  'prose-headings:font-semibold prose-a:text-[#172e51] prose-a:no-underline hover:prose-a:underline',
                ]"
              >
                <ContentRenderer :value="body" />
              </div>

              <!-- CTA after content -->
              <div
                v-if="ctaAfterContent.enabled"
                class="mt-12 rounded-xl border border-slate-200/70 bg-slate-50/80 p-6 text-center dark:border-slate-700 dark:bg-slate-900/60"
              >
                <h2 class="mb-2 text-xl font-semibold">
                  {{ ctaAfterContent.title }}
                </h2>
                <p
                  class="mx-auto mb-4 max-w-xl text-sm text-slate-700 dark:text-slate-300"
                >
                  {{ ctaAfterContent.text }}
                </p>
                <NuxtLink
                  :to="ctaAfterContent.buttonTo"
                  class="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium transition bg-[#172e51] text-white hover:bg-[#12243e]"
                >
                  {{ ctaAfterContent.buttonText }}
                </NuxtLink>
              </div>

              <!-- Related posts slot -->
              <div
                v-if="related.enabled"
                class="mt-16 border-t border-slate-200 pt-8 dark:border-slate-800"
              >
                <div class="mb-6 flex items-center justify-between gap-4">
                  <h2 class="text-lg font-semibold">
                    {{ related.title }}
                  </h2>
                  <NuxtLink
                    v-if="related.showMoreButton"
                    to="/blog"
                    class="text-sm text-[#172e51] hover:underline"
                  >
                    {{ related.moreButtonText }}
                  </NuxtLink>
                </div>

                <slot name="related" />
              </div>
            </div>

            <!-- Sidebar: outline / widgets -->
            <aside
              v-if="single.showSidebar && layout.showSidebarOnSingle"
              class="space-y-8"
            >
              <!-- Outline (TOC) -->
              <div
                v-if="single.showOutline && toc.length"
                class="rounded-xl border border-slate-200 bg-slate-50/80 p-4 text-sm dark:border-slate-700 dark:bg-slate-900/60"
              >
                <h3
                  class="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500"
                >
                  On this page
                </h3>
                <nav>
                  <ul class="space-y-1">
                    <li v-for="link in toc" :key="link.id">
                      <a
                        :href="`#${link.id}`"
                        class="text-slate-700 hover:text-[#172e51] dark:text-slate-300 dark:hover:text-white"
                      >
                        {{ link.text }}
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>

              <!-- Custom sidebar widgets -->
              <slot name="sidebar" />
            </aside>
          </div>
        </article>
      </div>
    </section>
  </LayoutShell>
</template>

<script setup lang="ts">
const props = defineProps<{
  body: any
  readingTime?: number | null
}>()

const readingTime = computed(() => props.readingTime ?? null)

// TOC (if Nuxt Content has populated it)
const toc = computed(() => props.body?.toc?.links ?? [])

const config = useThemeElegantConfig()

const layout = computed(() => config.value.layout ?? {})
const typography = computed(() => config.value.typography ?? {})
const blog = computed(() => config.value.blog ?? {})

const single = computed(() => blog.value.single ?? {})
const related = computed(() => blog.value.relatedPosts ?? {})
const ctaBelowHero = computed(() => blog.value.cta?.belowHero ?? { enabled: false })
const ctaAfterContent = computed(() => blog.value.cta?.afterContent ?? { enabled: false })
</script>
