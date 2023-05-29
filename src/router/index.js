import { createRouter, createWebHistory } from 'vue-router'
import StoreHeader from '../components/icons/parts_of_the_site/StoreHeader.vue'
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
