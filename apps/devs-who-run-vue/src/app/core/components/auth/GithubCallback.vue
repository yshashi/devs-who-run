<script setup lang="ts">
import { onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { AuthService } from '../../services/auth.service';

const router = useRouter();
const route = useRoute();

onMounted(async () => {
  try {
    const code = route.query.code as string;
    if (!code) {
      throw new Error('No code provided');
    }

    await AuthService.handleGithubCallback(code);
    router.push('/dashboard');
  } catch (error) {
    console.error('GitHub authentication failed:', error);
    router.push('/login');
  }
});
</script>

<template>
  <div class="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
    <div class="text-center">
      <div class="mx-auto w-16 h-16 rounded-full border-b-2 border-blue-500 animate-spin" />
      <h2 class="mt-4 text-xl font-semibold text-gray-900 dark:text-white">
        Completing GitHub Sign In...
      </h2>
      <p class="mt-2 text-gray-600 dark:text-gray-400">
        Please wait while we process your authentication
      </p>
    </div>
  </div>
</template>
