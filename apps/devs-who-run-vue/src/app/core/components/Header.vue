<script setup lang="ts">
</script>

<template>
  <header class="overflow-hidden relative bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
    <div class="absolute inset-0">
      <div class="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20" />
    </div>
    <div class="relative px-4 py-24 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="text-center">
        <h1 class="mb-8 text-5xl font-extrabold tracking-tight text-gray-900 md:text-7xl dark:text-white">
          <span class="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
            Devs Who Run
          </span>
        </h1>
        <p class="mx-auto mt-3 max-w-md text-xl text-gray-600 dark:text-gray-300 sm:text-2xl md:mt-5 md:max-w-3xl">
          Where code meets cardio - Join a community of developers who balance debugging with distance running
        </p>
        <div class="flex gap-x-6 justify-center mt-10">
          <a
            href="https://discord.gg/gjPdvKjFx3"
            class="px-8 py-3 font-semibold text-white bg-blue-600 rounded-md transition-all transform hover:-translate-y-1 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
            rel="noopener noreferrer"
            target="_blank"
            aria-label="Join Our Discord Community (opens in new tab)"
          >
            Join Discord
            <i class="fa-brands fa-discord"></i>
          </a>
          <a
            href="https://github.com/Devs-Who-Run/devs-who-run"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contribute on GitHub"
            class="px-8 py-3 font-semibold text-blue-600 bg-white rounded-md transition-all transform hover:-translate-y-1 hover:bg-gray-50 dark:bg-gray-800 dark:text-blue-400 dark:hover:bg-gray-700"
          >
            Contribute
            <i class="fa-brands fa-github" />
          </a>
        </div>
      </div>
    </div>
  </header>
</template>
