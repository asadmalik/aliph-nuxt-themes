<template>
            <footer class="bg-rich_black-500 text-white pt-8 pb-6 px-4">
            <div class="container mx-auto
             grid grid-cols-1
             md:[grid-template-columns:3fr_1fr_1fr]
             gap-8">
                <!-- Brand & Short Statement -->
                <div>
                    <div class="flex items-center mb-4">
<NuxtLink to="/"
      class="flex flex-row font-bold items-center text-[2rem] !text-mikado_yellow-500 active:text-mikado_yellow-500">
      <img
    v-if="logoPropsSrc"
    :src="logoPropsSrc"
    :alt="navigation.logo.alt || 'Logo'"
    v-bind="navigation.logo"
  />
  {{ navigation.logo?.title || '' }}
    </NuxtLink>
                    </div>
                    <p class="text-sm text-gray-300 leading-relaxed max-w-md">
                        {{ siteDescription || '' }}
                    </p>
                </div>

                <!-- Main Links -->
                <div class="flex flex-col">
                    <h3 class="font-semibold text-lg mb-3">Explore</h3>
                    <div class="flex flex-col space-y-2 text-sm">
                        <NuxtLink v-for="item in navigation.items" :key="item.to" :to="item.to"
                            class="hover:text-gold-500 transition-colors">
                            {{ item.title }}
                        </NuxtLink>
                    </div>
                </div>

                <!-- Legal Links -->
                <div class="flex flex-col">
                    <h3 class="font-semibold text-lg mb-3">Legal</h3>
                    <div class="flex flex-col space-y-2 text-sm">
                        <NuxtLink v-for="item in footerLinks" :key="item.to" :to="item.to"
                            class="hover:text-gold-500 transition-colors">
                            {{ item.title }}
                        </NuxtLink>
                    </div>
                </div>
            </div>

            <!-- Bottom Bar -->
            <div class="border-t border-gray-700 mt-6 pt-4">
                <div class="container mx-auto text-center text-xs text-gray-400">
                    © {{ currentYear }} {{ navigation.logo?.title || '' }}. All rights reserved.
                </div>
            </div>
        </footer>
    </template>
<script setup>
    const currentYear = new Date().getFullYear();
    const appConfig = useAppConfig();
  console.log('NavigationBar appConfig theme-elegant:', appConfig);
  const logoPropsSrc = appConfig.navigation.logo.src;
  const navigation = appConfig.navigation;
  const footerLinks = appConfig.navigation.footer.items;
  const siteDescription = appConfig.site.description || '';
</script>