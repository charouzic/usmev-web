import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'LandingPage',
      component: () => import('../views/LandingPageView.vue'), // Landing page
    },
    // {
    //   path: '/about',
    //   name: 'About',
    //   component: () => import('../views/AboutView.vue'), // Example for other pages
    // },
  ],
});

export default router;
