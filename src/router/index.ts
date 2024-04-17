import { createRouter, createWebHistory } from 'vue-router'
import SheetPage from '@/views/SheetPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: SheetPage
    }
  ]
})

export default router
