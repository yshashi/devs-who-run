<script setup lang="ts">
import { ref, onMounted } from 'vue';
import AppHeader from './core/components/Header.vue';
import AppFooter from './core/components/Footer.vue';
import About from './core/components/About.vue';
import Feature from './core/components/Feature.vue';
import Testimonials from './core/components/Testimonials.vue';
import Cta from './core/components/Cta.vue';
import ThemeButton from './core/components/ThemeButton.vue';

const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
const isDarkMode = ref(mediaQuery.matches);
mediaQuery.addEventListener('change', e => {
  isDarkMode.value = e.matches;
  document.documentElement.classList.toggle('dark', e.matches);
});

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
      <router-view />
    </div>
  </div>
</template>
