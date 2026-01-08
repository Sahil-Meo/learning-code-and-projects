<template>
     <section class="flex items-center">
          <MaxContainer>
               <div class="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
                    <!-- Left Content -->
                    <div class="text-white space-y-2 sm:space-y-4 col-span-3">
                         <!-- Welcome Text -->
                         <h3 class="text-coffee text-3xl sm:text-4xl font-medium">
                              Welcome!
                         </h3>

                         <!-- Main Heading -->
                         <h1 class="text-4xl lg:text-5xl font-semibold leading-tight">
                              We serve the richest coffee in the city!
                         </h1>

                         <!-- Description -->
                         <p class="text-gray-300 text-base lg:text-lg leading-relaxed max-w-lg">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                              Suspendisse varius enim in eros elementum tristique.
                         </p>

                         <!-- Buttons -->
                         <div class="flex flex-wrap self-center gap-4 pt-4">
                              <button
                                   class="bg-coffee hover:bg-coffee text-white font-medium px-8 py-3 rounded-full transition duration-300"
                                   @click="handleOrderClick">
                                   Order now
                              </button>

                              <button
                                   class="border-2 border-white hover:bg-white hover:text-coffee text-white font-medium px-8 py-3 rounded-full transition duration-300"
                                   @click="handleLearnClick">
                                   Learn About Us
                              </button>
                         </div>
                    </div>

                    <!-- Right Image -->
                    <div class="flex justify-center lg:justify-end col-span-2">
                         <div class="relative">
                              <img src="/images/coffee_cups.png" alt="Coffee lover"
                                   class="w-full max-w-md lg:max-w-lg object-contain" />
                         </div>
                    </div>
               </div>
          </MaxContainer>
     </section>
</template>

<script>
import MaxContainer from '@/components/MaxContainer.vue';
export default {
     name: 'HeroSection',
     components: {
          MaxContainer
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
     
</style>