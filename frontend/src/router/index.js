import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Donate from '../views/Donate.vue'
import Legal from '../views/Legal.vue'
import Transparency from '../views/Transparency.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/donate',
    name: 'Donate',
    component: Donate
  },
  {
    path: '/legal',
    name: 'Legal',
    component: Legal
  },
  {
    path: '/transparency',
    name: 'Transparency',
    component: Transparency
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
