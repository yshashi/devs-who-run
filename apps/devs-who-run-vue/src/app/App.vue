<script setup lang="ts">
import { ref, onMounted } from 'vue';
import AppHeader from './core/components/Header.vue';
import AppFooter from './core/components/Footer.vue';
import About from './core/components/About.vue';
import Feature from './core/components/Feature.vue';
import Testimonials from './core/components/Testimonials.vue';
import Cta from './core/components/Cta.vue';
import ThemeButton from './core/components/ThemeButton.vue';

const isDarkMode = ref(window.matchMedia('(prefers-color-scheme: dark)').matches);

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
  document.documentElement.classList.toggle('dark', isDarkMode.value);
};

onMounted(() => {
  document.documentElement.classList.toggle('dark', isDarkMode.value);
});
</script>

<template>
  <div
    class="min-h-screen"
    :class="{ 'dark': isDarkMode }"
  >
    <div class="bg-white transition-colors duration-300 dark:bg-gray-900">
      <ThemeButton
        :is-dark-mode="isDarkMode"
        @toggle="toggleDarkMode"
      />
      <AppHeader />
      <About />
      <Feature />
      <Testimonials />
      <Cta />
      <AppFooter />
    </div>
  </div>
</template>
