<template>
     <MaxContainer>
          <dev class="flex items-center justify-between py-4 sm:py-6 md:py-8">
               <div class="flex items-center"><img class="" src="../../assets/images/nav_logo.png" alt="logo image">
               </div>
               <NavItems />
               <div class="flex items-center gap-2">
                    <span class="text-white pi pi-search">
                         <SearchIcon iconClass="w-6 h-6 text-white" />
                    </span>
                    <button
                         class="text-base text-white border-2 border-coffee py-1 px-4 rounded-3xl flex items-center">Sign
                         up</button>
               </div>
          </dev>
     </MaxContainer>
</template>

<script>
import NavItems from './NavItems.vue';
import SearchIcon from '@/assets/icons/SearchIcon.vue';
import MaxContainer from '../MaxContainer.vue';
export default {
     name: "Navbar",
     components: {
          NavItems,
          SearchIcon,
          MaxContainer
     },
     data() {
          return {

          }
     }

}
</script>

<style scoped></style>