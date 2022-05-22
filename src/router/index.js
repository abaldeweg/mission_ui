import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.VUE_APP_BASE_URL),
  linkActiveClass: 'isActive',
  linkExactActiveClass: 'isActiveExact',
  routes: [
    {
      path: '/',
      name: 'index',
      redirect: { name: 'mission' },
    },
    {
      path: '/mission',
      name: 'mission',
      component: () => import('../views/MissionView.vue'),
      props: true,
    },
    {
      path: '/export',
      name: 'export',
      component: () => import('../views/ExportView.vue'),
      props: true,
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('../views/ProfileView.vue'),
      props: true,
    },
    {
      path: '/:pathMatch(.*)',
      redirect: { name: 'index' },
    },
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
