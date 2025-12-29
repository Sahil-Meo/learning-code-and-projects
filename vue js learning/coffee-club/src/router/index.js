import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/home/Home.vue'
import About from '../pages/About.vue'
import Contact from '../pages/Contact.vue'
import CoffeeItems from '../pages/CoffeeItems.vue'

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
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/coffee-items',
    name: 'CoffeeItems',
    component: CoffeeItems
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router