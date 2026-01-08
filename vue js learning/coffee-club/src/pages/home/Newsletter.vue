<template>
     <section class="py-8 md:py-12">
          <MaxContainer>
               <div class="bg-sec rounded-xl px-4 sm:px-6 md:px-8 py-4">
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

                         <!-- Left Content -->
                         <div class="space-y-6">
                              <div>
                                   <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 md:mb-4">
                                        Join in and get 15% off!
                                   </h2>
                                   <p class="text-gray-300 text-sm md:text-base">
                                        Subscribe to our newsletter and get 15% off discount code
                                   </p>
                              </div>

                              <!-- Email Form -->
                              <form @submit.prevent="handleSubscribe" class="flex flex-col sm:flex-row gap-3 md:gap-4"
                                   v-if="!isSubscribed">
                                   <div class="flex-1 relative">
                                        <div
                                             class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                             <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor"
                                                  viewBox="0 0 24 24">
                                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                       d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                             </svg>
                                        </div>
                                        <input v-model="email" type="email" placeholder="Email address" required
                                             :disabled="isLoading"
                                             class="w-full pl-10 pr-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-coffee focus:border-transparent text-gray-900 placeholder-gray-500 text-sm md:text-base disabled:opacity-50">
                                   </div>
                                   <button type="submit" :disabled="isLoading"
                                        class="bg-coffee text-white px-6 md:px-8 py-3 rounded-lg font-semibold hover:bg-opacity-80 transition-colors duration-300 whitespace-nowrap text-sm md:text-base disabled:opacity-50 disabled:cursor-not-allowed">
                                        {{ isLoading ? 'Subscribing...' : 'Subscribe' }}
                                   </button>
                              </form>

                              <!-- Success Message -->
                              <div v-if="isSubscribed" class="bg-green-600 text-white p-4 rounded-lg text-center">
                                   <div class="flex items-center justify-center space-x-2">
                                        <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                  d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span class="font-semibold">Thank you for subscribing!</span>
                                   </div>
                                   <p class="text-sm mt-2">Check your email for the 15% discount code.</p>
                              </div>
                         </div>

                         <!-- Right Content - Coffee Cups Image -->
                         <div class="flex justify-center lg:justify-end order-first lg:order-last">
                              <div class="relative max-w-xs md:max-w-sm lg:max-w-md">
                                   <img src="/images/coffee_cups.png" alt="Coffee Cups" class="max-h-60 object-contain">
                              </div>
                         </div>

                    </div>
               </div>
          </MaxContainer>
     </section>
</template>

<script>
import MaxContainer from '@/components/MaxContainer.vue'

export default {
     name: 'Newsletter',
     components: {
          MaxContainer
     },
     data() {
          return {
               email: '',
               isSubscribed: false,
               isLoading: false
          }
     },
     methods: {
          async handleSubscribe() {
               if (this.email && !this.isLoading) {
                    this.isLoading = true

                    try {
                         // Simulate API call
                         await new Promise(resolve => setTimeout(resolve, 1000))

                         // Handle newsletter subscription
                         console.log('Subscribing email:', this.email)

                         // You can add actual API call here
                         // Example: await this.$api.subscribe(this.email)

                         // Show success state
                         this.isSubscribed = true

                         // Reset after 3 seconds
                         setTimeout(() => {
                              this.isSubscribed = false
                              this.email = ''
                         }, 3000)

                    } catch (error) {
                         console.error('Subscription failed:', error)
                         alert('Subscription failed. Please try again.')
                    } finally {
                         this.isLoading = false
                    }
               }
          }
     }
}
</script>