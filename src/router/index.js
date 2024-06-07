import { createRouter, createWebHistory } from 'vue-router'

// 组件
import HomePage from '../views/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomePage
    }
  ]
})

export default router
