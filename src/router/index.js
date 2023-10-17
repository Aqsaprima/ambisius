import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/daftar',
      name: 'daftar',
      component: () => import('../views/daftar.vue')
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../views/dashboard.vue')
    },
    {
      path: '/masuk',
      name: 'masuk',
      component: () => import('../views/masuk.vue')
    }
  ]
})

export default router
