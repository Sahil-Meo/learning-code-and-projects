import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/home/Home.vue'
import About from '../pages/About.vue'
import Contact from '../pages/Contact.vue'
import CoffeeItems from '../pages/CoffeeItems.vue'

// Privacy pages
import TermsOfUse from '../pages/TermsOfUse.vue'
import PrivacyPolicy from '../pages/PrivacyPolicy.vue'
import Cookies from '../pages/Cookies.vue'

// Services pages
import Shop from '../pages/Shop.vue'
import OrderAhead from '../pages/OrderAhead.vue'
import Menu from '../pages/Menu.vue'

// About us pages
import FindLocation from '../pages/FindLocation.vue'
import OurStory from '../pages/OurStory.vue'

// Information pages
import PlansPricing from '../pages/PlansPricing.vue'
import SellProducts from '../pages/SellProducts.vue'
import Jobs from '../pages/Jobs.vue'

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
  },
  // Privacy routes
  {
    path: '/terms-of-use',
    name: 'TermsOfUse',
    component: TermsOfUse
  },
  {
    path: '/privacy-policy',
    name: 'PrivacyPolicy',
    component: PrivacyPolicy
  },
  {
    path: '/cookies',
    name: 'Cookies',
    component: Cookies
  },
  // Services routes
  {
    path: '/shop',
    name: 'Shop',
    component: Shop
  },
  {
    path: '/order-ahead',
    name: 'OrderAhead',
    component: OrderAhead
  },
  {
    path: '/menu',
    name: 'Menu',
    component: Menu
  },
  // About us routes
  {
    path: '/find-location',
    name: 'FindLocation',
    component: FindLocation
  },
  {
    path: '/our-story',
    name: 'OurStory',
    component: OurStory
  },
  // Information routes
  {
    path: '/plans-pricing',
    name: 'PlansPricing',
    component: PlansPricing
  },
  {
    path: '/sell-products',
    name: 'SellProducts',
    component: SellProducts
  },
  {
    path: '/jobs',
    name: 'Jobs',
    component: Jobs
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router