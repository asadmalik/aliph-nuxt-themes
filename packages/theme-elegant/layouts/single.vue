<template>
  <LayoutShell>
    <section class=" pb-24">


      <article class=" dark:bg-slate-950 dark:border-slate-800">
        <!-- Hero -->
        <div class="relative flex items-end bg-gradient-to-br from-[#172e51] via-slate-800 to-slate-700"
          :class="single.heroHeightClass">
          <div v-if="single.showHeroImage" class="absolute inset-0">
            <slot name="featureImage" />
            
          </div>

          <div
            class="relative z-10 w-full p-6 md:p-10 text-white space-y-4 bg-gradient-to-t from-black/40 via-black/20">
            <!-- Category pill -->
            <div v-if="single.showCategoryPill"
              class="inline-flex items-center gap-2 text-xs font-semibold tracking-wide uppercase">
              <span class="inline-flex items-center rounded-full bg-white/10 px-3 py-1 backdrop-blur">
                <slot name="category" />
              </span>
            </div>

            <!-- Title -->
            <h1 class="text-center text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
              <slot name="title" />
            </h1>

            <!-- Meta -->
            <div v-if="single.showAuthor || single.showDate || typography.showReadingTime"
              class="flex flex-wrap items-center gap-3 text-xs md:text-sm text-white/80">
              <div v-if="single.showAuthor" class="flex items-center gap-2">
                <span class="font-medium">
                  <slot name="author" />
                </span>
              </div>

              <span v-if="single.showAuthor && single.showDate">•</span>

              <span v-if="single.showDate">
                <slot name="date" />
              </span>

              <span v-if="typography.showReadingTime && readingTime" class="flex items-center gap-2">
                <span>•</span>
                <span>{{ readingTime }} min read</span>
              </span>
            </div>
            <div>
              <!-- Back link -->
            <NuxtLink v-if="single.showBackLink" to="/blog"
              class="text-sm text-white hover:underline flex items-center gap-2 mb-6 w-full text-center">
              {{ single.backLinkText || '← Back to Blog' }}
            </NuxtLink>
            </div>
          </div>
        </div>

        <!-- Body + Sidebar -->
        <div class="grid gap-10 px-6 py-10 md:px-10 lg:px-12"
          :class="single.showSidebar && layout.showSidebarOnSingle ? 'lg:grid-cols-[minmax(0,1.8fr)_minmax(0,0.8fr)]' : 'lg:grid-cols-1'">
          <!-- Main content -->
          <div :class="[
            layout.constrainedWidthClass,
            'w-full mx-auto',
          ]">
            <!-- Optional CTA below hero -->
            <div v-if="ctaBelowHero.enabled"
              class="mb-10 rounded-xl border border-slate-200/70 bg-slate-50/80 p-5 dark:border-slate-700 dark:bg-slate-900/60">
              <h2 class="text-lg font-semibold mb-2">
                {{ ctaBelowHero.title }}
              </h2>
              <p class="text-sm text-slate-700 dark:text-slate-300 mb-4">
                {{ ctaBelowHero.text }}
              </p>
              <NuxtLink :to="ctaBelowHero.buttonTo"
                class="inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium bg-[#172e51] text-white hover:bg-[#12243e] transition">
                {{ ctaBelowHero.buttonText }}
              </NuxtLink>
            </div>

            <!-- Content body -->
            <div :class="[
              'prose prose-slate dark:prose-invert',
              typography.bodySize,
              'prose-headings:font-semibold prose-a:text-[#172e51] prose-a:no-underline hover:prose-a:underline',
            ]">
              <ContentRenderer :value="body" />
            </div>

            <!-- CTA after content -->
            <div v-if="ctaAfterContent.enabled"
              class="mt-12 rounded-xl border border-slate-200/70 bg-slate-50/80 p-6 text-center dark:border-slate-700 dark:bg-slate-900/60">
              <h2 class="text-xl font-semibold mb-2">
                {{ ctaAfterContent.title }}
              </h2>
              <p class="text-sm text-slate-700 dark:text-slate-300 mb-4 max-w-xl mx-auto">
                {{ ctaAfterContent.text }}
              </p>
              <NuxtLink :to="ctaAfterContent.buttonTo"
                class="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium bg-[#172e51] text-white hover:bg-[#12243e] transition">
                {{ ctaAfterContent.buttonText }}
              </NuxtLink>
            </div>

            <!-- Related posts slot (consumer app can render them) -->
            <div v-if="related.enabled" class="mt-16 border-t border-slate-200 pt-8 dark:border-slate-800">
              <div class="flex items-center justify-between gap-4 mb-6">
                <h2 class="text-lg font-semibold">
                  {{ related.title }}
                </h2>
                <NuxtLink v-if="related.showMoreButton" to="/blog" class="text-sm text-[#172e51] hover:underline">
                  {{ related.moreButtonText }}
                </NuxtLink>
              </div>

              <slot name="related" />
            </div>
          </div>

          <!-- Sidebar: outline / widgets etc. -->
          <aside v-if="single.showSidebar && layout.showSidebarOnSingle" class="space-y-8">
            <!-- Table of contents / outline -->
            <div v-if="single.showOutline"
              class="rounded-xl border border-slate-200 bg-slate-50/80 p-4 text-sm dark:border-slate-700 dark:bg-slate-900/60">
              <h3 class="text-xs font-semibold tracking-wide text-slate-500 uppercase mb-2">
                On this page
              </h3>
              <slot name="outline" />
            </div>

            <!-- Sidebar widgets slot (for subscribe, promos, etc) -->
            <slot name="sidebar" />
          </aside>
        </div>
      </article>
    </section>
  </LayoutShell>
</template>

<script setup lang="ts">
  const props = defineProps<{
    body: any
    readingTime?: number | null
  }>()

  const body = props.body
  const readingTime = props.readingTime ?? null

  const config = useThemeElegantConfig()

  console.log('Single layout props toc:', props.body.toc)

  const layout = computed(() => config.value.layout ?? {})
  const typography = computed(() => config.value.typography ?? {})
  const blog = computed(() => config.value.blog ?? {})

  const single = computed(() => blog.value.single ?? {})
  const related = computed(() => blog.value.relatedPosts ?? {})
  const ctaBelowHero = computed(() => blog.value.cta?.belowHero ?? { enabled: false })
  const ctaAfterContent = computed(() => blog.value.cta?.afterContent ?? { enabled: false })
</script>
