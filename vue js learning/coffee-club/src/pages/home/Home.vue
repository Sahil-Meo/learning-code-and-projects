<template>
     <MaxContainer>
          <section class="py-20 md:py-28 text-center">
               <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
                    Welcome to Coffee Club
               </h1>

               <p class="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
                    Discover and enjoy the best coffee blends, curated for every taste.
               </p>

               <div class="flex justify-center gap-4">
                    <router-link to="/shop"
                         class="inline-block bg-amber-700 hover:bg-amber-800 text-white font-medium py-3 px-6 rounded-md shadow">
                         Shop Coffee
                    </router-link>

                    <router-link to="/learn"
                         class="inline-block border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium py-3 px-6 rounded-md">
                         Learn More
                    </router-link>
               </div>
          </section>
     </MaxContainer>
</template>

<script>
import MaxContainer from '@/components/MaxContainer.vue'

export default {
     name: 'home',
     components: {
          MaxContainer
     }
}
</script>