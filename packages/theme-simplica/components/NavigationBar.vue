<template>
  <header class="relative z-50 bg-white text-gray-900">
    <div class="container mx-auto flex items-center justify-between px-4 py-4 font-sans">
      <NuxtLink to="/" class="flex items-center gap-3 text-xl font-semibold">
        <img v-if="logoPropsSrc" :src="logoPropsSrc" :alt="navigation.logo.alt || 'Logo'" v-bind="navigation.logo" />
        <span>{{ siteTitle }}</span>
      </NuxtLink>

      <button @click="toggleMenu" class="md:hidden" aria-label="Toggle navigation">
        <svg v-if="!isMenuOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <nav class="hidden items-center gap-6 text-sm md:flex">
        <NuxtLink v-for="item in navigation.items" :key="item.to" :to="item.to" class="hover:underline">
          {{ item.title }}
        </NuxtLink>
      </nav>
    </div>

    <transition name="fade">
      <nav
        v-if="isMenuOpen"
        class="w-full px-4 pb-4 pt-2 text-sm md:hidden"
      >
        <ul class="flex flex-col gap-3">
          <li v-for="item in navigation.items" :key="item.to">
            <NuxtLink @click="toggleMenu" :to="item.to" class="block py-1 hover:underline">
              {{ item.title }}
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </transition>
  </header>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useThemeSimplicaConfig } from '~/composables/useThemeSimplicaConfig'

const appConfig = useAppConfig()
const themeConfig = useThemeSimplicaConfig()

const navigation = computed(() => appConfig.navigation ?? { logo: {}, items: [], footer: { items: [] } })
const logoPropsSrc = computed(() => navigation.value.logo?.src)
const siteTitle = computed(() => navigation.value.logo?.title ?? themeConfig.value.siteTitleFallback)

const isMenuOpen = ref(false)
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
