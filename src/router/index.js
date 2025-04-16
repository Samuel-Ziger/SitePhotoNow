import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/sobre',
    name: 'Sobre',
    component: () => import('../views/Sobre.vue')
  },
  {
    path: '/loja',
    name: 'Loja',
    component: () => import('../views/Loja.vue')
  },
  {
    path: '/maps',
    name: 'Maps',
    component: () => import('../views/Maps.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router 