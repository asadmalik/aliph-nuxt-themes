<template>
  <footer class="bg-white text-gray-700">
    <div class="container mx-auto grid grid-cols-1 gap-8 px-4 py-10 font-sans md:[grid-template-columns:3fr_1fr_1fr]">
      <div>
        <NuxtLink to="/" class="flex items-center gap-3 text-xl font-semibold text-gray-900">
          <img v-if="logoPropsSrc" :src="logoPropsSrc" :alt="navigation.logo.alt || 'Logo'" v-bind="navigation.logo" />
          <span>{{ siteTitle }}</span>
        </NuxtLink>
        <p class="mt-3 max-w-md text-sm leading-relaxed">{{ siteDescription || '' }}</p>
      </div>

      <div class="flex flex-col gap-2 text-sm">
        <h3 class="text-base font-semibold text-gray-900">Explore</h3>
        <NuxtLink v-for="item in navigation.items" :key="item.to" :to="item.to" class="hover:underline">
          {{ item.title }}
        </NuxtLink>
      </div>

      <div class="flex flex-col gap-2 text-sm">
        <h3 class="text-base font-semibold text-gray-900">Legal</h3>
        <NuxtLink v-for="item in footerLinks" :key="item.to" :to="item.to" class="hover:underline">
          {{ item.title }}
        </NuxtLink>
      </div>
    </div>

    <div class="px-4 pb-8 text-center text-xs text-gray-500">
      © {{ currentYear }} {{ siteTitle }}. All rights reserved.
    </div>
  </footer>
</template>
<script setup>
import { computed } from 'vue'
import { useThemeSimplicaConfig } from '~/composables/useThemeSimplicaConfig'

const currentYear = new Date().getFullYear()
const appConfig = useAppConfig()
const themeConfig = useThemeSimplicaConfig()

const navigation = computed(() => appConfig.navigation ?? { logo: {}, items: [], footer: { items: [] } })
const logoPropsSrc = computed(() => navigation.value.logo?.src)
const footerLinks = computed(() => navigation.value.footer?.items ?? [])
const siteDescription = computed(() => appConfig.content?.siteDescription ?? themeConfig.value.siteDescriptionFallback)
const siteTitle = computed(() => navigation.value.logo?.title ?? themeConfig.value.siteTitleFallback)
</script>
