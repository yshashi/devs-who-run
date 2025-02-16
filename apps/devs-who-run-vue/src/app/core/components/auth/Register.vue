<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { AuthService } from '../../services/auth.service';

import AuthLayout from './AuthLayout.vue';

const router = useRouter();
const gitHubUserName = ref('');
const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const error = ref('');
const isLoading = ref(false);

const passwordsMatch = computed(() => {
  return password.value === confirmPassword.value;
});

const handleRegister = async () => {
  if (!passwordsMatch.value) {
    error.value = 'Passwords do not match';
    return;
  }

  try {
    isLoading.value = true;
    error.value = '';
    await AuthService.register({
      gitHubUserName: gitHubUserName.value,
      email: email.value,
      password: password.value,
      confirmPassword: confirmPassword.value,
    });
    router.push('/dashboard');
  } catch (err: any) {
    error.value = err.response?.data?.message || 'Registration failed. Please try again.';
  } finally {
    isLoading.value = false;
  }
};

const handleGithubLogin = () => {
  AuthService.githubLogin();
};

const navigateToLogin = () => {
  router.push('/login');
};

const navigateToHome = () => {
  router.push('/');
};
</script>

<template>
  <AuthLayout>
    <div class="mb-6 text-left">
      <button
        class="text-blue-600 hover:text-blue-500 dark:text-blue-400 focus:outline-none"
        @click="navigateToHome"
      >
        <i class="mr-2 fas fa-arrow-left" />
        Back to Home
      </button>
    </div>

    <div class="mb-8 text-center">
      <h2 class="text-3xl font-bold text-gray-900 dark:text-white">
        Create Account
      </h2>
      <p class="mt-2 text-gray-600 dark:text-gray-400">
        Join our community of developers
      </p>
    </div>

    <form
      class="space-y-6"
      @submit.prevent="handleRegister"
    >
      <div
        v-if="error"
        class="p-3 text-sm text-red-500 bg-red-100 rounded-md dark:bg-red-900/20"
      >
        {{ error }}
      </div>

      <div>
        <label
          for="gitHubUserName"
          class="block text-sm font-medium text-gray-700 dark:text-gray-300"
        >GitHub UserName</label>
        <input
          id="gitHubUserName"
          v-model="gitHubUserName"
          type="text"
          required
          class="block px-3 py-2 mt-1 w-full bg-white rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        >
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

      <div>
        <label
          for="password"
          class="block text-sm font-medium text-gray-700 dark:text-gray-300"
        >Password</label>
        <input
          id="password"
          v-model="password"
          type="password"
          required
          class="block px-3 py-2 mt-1 w-full bg-white rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        >
      </div>

      <div>
        <label
          for="confirm-password"
          class="block text-sm font-medium text-gray-700 dark:text-gray-300"
        >Confirm Password</label>
        <input
          id="confirm-password"
          v-model="confirmPassword"
          type="password"
          required
          class="block px-3 py-2 mt-1 w-full bg-white rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        >
      </div>

      <button
        type="submit"
        :disabled="isLoading || !passwordsMatch"
        class="px-4 py-2 w-full text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:bg-blue-500 dark:hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {{ isLoading ? 'Creating account...' : 'Create account' }}
      </button>

      <div class="relative">
        <div class="flex absolute inset-0 items-center">
          <div class="w-full border-t border-gray-300 dark:border-gray-600" />
        </div>
        <div class="flex relative justify-center text-sm">
          <span class="px-2 text-gray-500 bg-white dark:bg-gray-800 dark:text-gray-400">Or continue with</span>
        </div>
      </div>

      <button
        type="button"
        class="px-4 py-2 w-full text-gray-700 bg-white rounded-md border border-gray-300 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:hover:bg-gray-600"
        @click="handleGithubLogin"
      >
        <i class="mr-2 fa-brands fa-github" />
        Sign up with GitHub
      </button>

      <p class="mt-4 text-sm text-center text-gray-600 dark:text-gray-400">
        Already have an account?
        <button
          class="font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400 focus:outline-none"
          @click="navigateToLogin"
        >
          Sign in
        </button>
      </p>
    </form>
  </AuthLayout>
</template>
