import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const Layout = () => import('@/views/Layout.vue')
const Home = () => import('@/views/home/index.vue')
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Layout,
    children: [{
      path: '/',
      component: Home
    }]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
