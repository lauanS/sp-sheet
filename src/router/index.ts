import { createRouter, createWebHistory } from 'vue-router'
import FlorianView from '@/views/FlorianView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: FlorianView
    }
  ]
})

export default router
