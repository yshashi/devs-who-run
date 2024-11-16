import { createRouter, createWebHistory } from 'vue-router';


import Welcome from './NxWelcome.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Welcome
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@devs-who-run-vue/home'),
    }
  ]
})

export default router;
