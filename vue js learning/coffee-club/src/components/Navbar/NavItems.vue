<template>
     <ul class="flex items-center justify-center sm:gap-6 md:gap-12 border-2 border-coffee rounded-3xl py-2 px-4">
          <li v-for="(item, index) in navItems" :key="index +1" class="text-base text-white">{{ item }}</li>
     </ul>     
</template>
<script>
export default {
     name: 'NavItems',
     data() {
          return {
               navItems:['Home', 'About', 'Contact','Coffee Items']
          }
     }

}

</script>