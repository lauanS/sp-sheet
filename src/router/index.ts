import { createRouter, createWebHistory } from 'vue-router'
import SheetView from '@/views/SheetView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: SheetView
    }
  ]
})

export default router
