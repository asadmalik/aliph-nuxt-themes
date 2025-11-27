<template>
    <div class="bg-rich_black-500 text-white pt-8 pb-6 px-4">
        <div class="container mx-auto
             grid grid-cols-1
             md:[grid-template-columns:3fr_1fr_1fr]
             gap-8">
            <!-- Brand & Short Statement -->
            <div>
                <div class="flex items-center mb-4">
                    <img src="/assets/img/aliph.svg" alt="Aliph Learning Logo" class="w-10 mr-2" />

                </div>
                <p class="text-sm text-gray-300 leading-relaxed max-w-md">
                    Bridging the gap between classroom theory and real-world development.
                    Unlock your future with hands-on training, industry tools, and a community
                    of passionate mentors.
                </p>
            </div>

            <!-- Main Links -->
            <!-- Main Links -->
            <div class="flex flex-col">
                <h3 class="font-semibold text-lg mb-3">Explore</h3>
                <div class="flex flex-col space-y-2 text-sm">
                    <NuxtLink v-for="item in appConfig.navigation.footer.items" :key="item.to" :to="item.to"
                        class="hover:text-primary transition-colors">
                        {{ item.title }}
                    </NuxtLink>
                </div>
            </div>

            <!-- Legal Links -->
            <div class="flex flex-col">
                <h3 class="font-semibold text-lg mb-3">Legal</h3>
                <div class="flex flex-col space-y-2 text-sm">
                    <NuxtLink to="/legal" class="hover:text-gold-500 transition-colors">
                        Privacy Policy
                    </NuxtLink>
                    <NuxtLink to="/legal" class="hover:text-gold-500 transition-colors">
                        Terms of Service
                    </NuxtLink>
                </div>
            </div>
        </div>

        <!-- Bottom Bar -->
        <div class="border-t border-gray-700 mt-6 pt-4">
            <div class="container mx-auto text-center text-xs text-gray-400">
                © {{ currentYear }} Aliph Learning. All rights reserved.
            </div>
        </div>
    </div>
</template>
<script setup>
    const currentYear = new Date().getFullYear();
    const appConfig = useAppConfig();
</script>