<script setup lang="ts">

defineProps<{
  isDarkMode: boolean
}>();

const emit = defineEmits<{
  (e: 'toggle'): void
}>();

const toggleTheme = () => {
  emit('toggle');
};
</script>

<template>
  <button
    class="fixed top-4 right-4 z-50 bg-gray-200 rounded-full transition-colors duration-300 size-12 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
    @click="toggleTheme"
  >
    <i v-if="isDarkMode" class="text-xl fa-solid fa-sun dark:text-gray-200"></i>
    <i v-else class="text-xl fa-solid fa-moon dark:text-gray-200"></i>
  </button>
</template>
