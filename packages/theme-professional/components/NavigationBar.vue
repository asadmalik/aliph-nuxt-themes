<template>
  <!-- Header Content -->
  <div class="container mx-auto px-4 py-3 flex items-center justify-between">
    <!-- Logo -->
    <NuxtLink to="/"
      class="flex flex-row font-bold items-center text-[2rem] !text-mikado_yellow-500 active:text-mikado_yellow-500">
      <img src="/assets/img/aliph.svg" alt="Aliph Learning Logo" class="w-7 mr-2" />
      <span class="font-thin ">Aliph</span>Learning
    </NuxtLink>

    <!-- Mobile Menu Toggle -->
    <button @click="toggleMenu" class="text-white">
      <!-- Hamburger Icon -->
      <svg v-if="!isMenuOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
        stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
      </svg>
      <!-- Close Icon -->
      <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
        stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  </div>

  <!-- Dropdown Menu with Transition -->
  <transition enter-active-class="transition transform ease-out duration-200"
    enter-from-class="opacity-0 -translate-y-2 scale-y-0 origin-top"
    enter-to-class="opacity-100 translate-y-0 scale-y-100"
    leave-active-class="transition transform ease-in duration-150"
    leave-from-class="opacity-100 translate-y-0 scale-y-100"
    leave-to-class="opacity-0 -translate-y-2 scale-y-0 origin-top">
    <nav v-if="isMenuOpen" class="absolute top-full left-0 w-full bg-rich_black-400 shadow-md py-4 px-4
               flex flex-col items-center gap-4 text-center">
      <!-- Primary Nav Links -->
      <ul class="flex flex-col w-full mx-auto space-y-4 text-white">
        <li v-for="item in navigation.items" :key="item.to" class="border-b border-[#1e1e1e]">
          <NuxtLink @click="toggleMenu" :to="item.to"
            class="block text-lg font-medium p-3 hover:bg-primary hover:text-white dark:hover:bg-blue-500 transition-colors">
            {{ item.title }}
          </NuxtLink>
        </li>
      </ul>

      <!-- CTA Button -->
      <NuxtLink to="/#reserve-limited-free-spot" class="px-6 py-2 bg-primary !text-white rounded
                 hover:bg-white-500 hover:!text-primary transition-colors mt-2 !font-normal">
        Sign Up Today
      </NuxtLink>
    </nav>
  </transition>
  <!--  -->
  <!-- Mobile Dropdown Menu -->


</template>

<script setup>

  const appConfig = useAppConfig();
  const logoComponent = appConfig.navigation.logo.component;
  const logoProps = appConfig.navigation.logo.props;
  const navigation = appConfig.navigation;

  const isMenuOpen = ref(false);
  const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
  };
</script>

<style>

  /* Smooth slide-in animation for mobile menu */
  .slide-enter-active,
  .slide-leave-active {
    transition: transform 0.3s ease-in-out, opacity 0.3s;
  }

  .slide-enter-from,
  .slide-leave-to {
    transform: translateY(-10px);
    opacity: 0;
  }
</style>
