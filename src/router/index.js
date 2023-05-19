import { createRouter, createWebHistory } from 'vue-router'
import WineStore from '../views/WineStore.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Wine',
      component: WineStore
    }
  ]
})

export default router
