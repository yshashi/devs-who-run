import { createRouter, createWebHistory } from 'vue-router';
import { AuthService } from './core/services/auth.service';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'landing',
      component: () => import('./core/components/LandingPage.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./core/components/auth/Login.vue'),
      meta: { requiresGuest: true },
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('./core/components/auth/Register.vue'),
      meta: { requiresGuest: true },
    },
    {
      path: '/forget-password',
      name: 'forget-password',
      component: () => import('./core/components/auth/ForgetPassword.vue'),
      meta: { requiresGuest: true },
    },

  ],
});

// Navigation guards
// router.beforeEach(async (to, from, next) => {
//   const user = await AuthService.getCurrentUser();
//   const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
//   const requiresGuest = to.matched.some(record => record.meta.requiresGuest);

//   if (requiresAuth && !user) {
//     next('/login');
//   } else if (requiresGuest && user) {
//     next('/dashboard');
//   } else {
//     next();
//   }
// });

export default router;
