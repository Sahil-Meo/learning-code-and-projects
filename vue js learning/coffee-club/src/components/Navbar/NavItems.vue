<template>
     <ul class="flex items-center justify-center sm:gap-6 md:gap-12 border-2 border-coffee rounded-3xl py-2 px-4">
          <li v-for="(item, index) in navItems" :key="index + 1" class="text-base text-white">
               <router-link :to="item.path" class="hover:text-coffee transition-colors duration-200"
                    :class="{ 'text-coffee': $route.path === item.path }">
                    {{ item.name }}
               </router-link>
          </li>
     </ul>
</template>
<script>
export default {
     name: 'NavItems',
     data() {
          return {
               navItems: [
                    { name: 'Home', path: '/' },
                    { name: 'About', path: '/about' },
                    { name: 'Contact', path: '/contact' },
                    { name: 'Coffee Items', path: '/coffee-items' }
               ]
          }
     }
}
</script>