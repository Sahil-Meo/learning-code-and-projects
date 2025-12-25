<template>
     <HeroSection />
     <MaxContainer>
          <div class="flex justify-between">
               <h2 class="text-3xl sm:text-4xl font-medium text-white">Offers</h2>
               <div class="flex gap-2 sm:gap-4">
                    <button class="bg-[#181717] text-white w-10 h-10 rounded-full text-center self-center">
                         <ChevronLeftIcon />
                    </button>
                    <button class="bg-[#181717] text-white w-10 h-10 rounded-full text-center self-center">
                         <ChevronRightIcon />
                    </button>
               </div>
          </div>
     </MaxContainer>
</template>

<script>
import MaxContainer from '@/components/MaxContainer.vue';
import HeroSection from './HeroSection.vue';
import ChevronLeftIcon from '@/assets/icons/ChevronLeftIcon.vue';
import ChevronRightIcon from '@/assets/icons/ChevronRightIcon.vue';
export default {
     name: 'Home',
     components: {
          MaxContainer,
          HeroSection,
          ChevronLeftIcon,
          ChevronRightIcon
     },
     methods: {
          handleOrderClick() {
               // Add your order logic here
               console.log('Order now clicked');
          },
          handleLearnClick() {
               // Add your learn more logic here
               console.log('Learn About Us clicked');
          }
     }
}
</script>

<style scoped>
/* Add any additional custom styles if needed */
</style>