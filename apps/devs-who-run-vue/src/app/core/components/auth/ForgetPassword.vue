<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { AuthService } from '../../services/auth.service';
import AuthLayout from './AuthLayout.vue';

const router = useRouter();
const email = ref('');
const error = ref('');
const isLoading = ref(false);

const sendResetEmail = async () => {
  try {
    isLoading.value = true;
    error.value = '';
    // await AuthService.sendResetEmail(email.value);
    alert('Feature coming soon!');
    email.value = '';
  } catch (err: any) {
    error.value = err.response?.data?.message || 'Failed to send reset email';
  } finally {
    isLoading.value = false;
  }
};

const navigateToLogin = () => {
  router.push('/login');
};
</script>

<template>
  <AuthLayout>
    <!-- Back to Login Link -->
    <div class="mb-6 text-left">
      <button
        class="text-blue-600 hover:text-blue-500 dark:text-blue-400 focus:outline-none"
        @click="navigateToLogin"
      >
        <i class="mr-2 fas fa-arrow-left" />
        Back to Login
      </button>
    </div>

    <div class="mb-8 text-center">
      <h2 class="text-3xl font-bold text-gray-900 dark:text-white">
        Forgot Password?
      </h2>
      <p class="mt-2 text-gray-600 dark:text-gray-400">
        Enter your email to reset your password
      </p>
    </div>

    <form
      class="space-y-6"
      @submit.prevent="sendResetEmail"
    >
      <div
        v-if="error"
        class="p-3 text-sm text-red-500 bg-red-100 rounded-md dark:bg-red-900/20"
      >
        {{ error }}
      </div>

      <div>
        <label
          for="email"
          class="block text-sm font-medium text-gray-700 dark:text-gray-300"
        >Email</label>
        <input
          id="email"
          v-model="email"
          type="email"
          required
          class="block px-3 py-2 mt-1 w-full bg-white rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        >
      </div>
      <button
        type="submit"
        :disabled="isLoading"
        class="px-4 py-2 w-full text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:bg-blue-500 dark:hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {{ isLoading ? 'Sending email...' : 'Send Email' }}
      </button>
    </form>
  </AuthLayout>
</template>

