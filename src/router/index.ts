import { createRouter, createWebHistory } from 'vue-router'
import SheetPage from '@/views/SheetPage.vue'
import Home from '@/views/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/sheet',
      name: 'sheet',
      component: SheetPage
    }
  ]
})

export default router
