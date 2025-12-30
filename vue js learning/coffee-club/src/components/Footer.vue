<template>
  <footer class="bg-gray-900 text-white py-6 sm:py-10 md:py-12 border-t border-gray-800">
    <MaxContainer>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-8">

        <!-- Coffee Brand Section -->
        <div class="lg:col-span-2">
          <h2 class="text-2xl font-bold mb-4">
            <span class="text-coffee">COFF</span>EE
          </h2>
          <p class="text-gray-400 text-sm leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum
            tristique.
          </p>
        </div>

        <!-- Privacy Section -->
        <div>
          <h3 class="text-white font-semibold mb-4">Privacy</h3>
          <ul class="space-y-2">
            <li>
              <router-link to="/terms-of-use" class="text-gray-400 hover:text-coffee transition-colors text-sm">
                Terms of use
              </router-link>
            </li>
            <li>
              <router-link to="/privacy-policy" class="text-gray-400 hover:text-coffee transition-colors text-sm">
                Privacy policy
              </router-link>
            </li>
            <li>
              <router-link to="/cookies" class="text-gray-400 hover:text-coffee transition-colors text-sm">
                Cookies
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Services Section -->
        <div>
          <h3 class="text-white font-semibold mb-4">Services</h3>
          <ul class="space-y-2">
            <li>
              <router-link to="/shop" class="text-gray-400 hover:text-coffee transition-colors text-sm">
                Shop
              </router-link>
            </li>
            <li>
              <router-link to="/order-ahead" class="text-gray-400 hover:text-coffee transition-colors text-sm">
                Order ahead
              </router-link>
            </li>
            <li>
              <router-link to="/menu" class="text-gray-400 hover:text-coffee transition-colors text-sm">
                Menu
              </router-link>
            </li>
          </ul>
        </div>

        <!-- About us Section -->
        <div>
          <h3 class="text-white font-semibold mb-4">About us</h3>
          <ul class="space-y-2">
            <li>
              <router-link to="/find-location" class="text-gray-400 hover:text-coffee transition-colors text-sm">
                Find a location
              </router-link>
            </li>
            <li>
              <router-link to="/about" class="text-gray-400 hover:text-coffee transition-colors text-sm">
                About us
              </router-link>
            </li>
            <li>
              <router-link to="/our-story" class="text-gray-400 hover:text-coffee transition-colors text-sm">
                Our story
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Information Section -->
        <div>
          <h3 class="text-white font-semibold mb-4">Information</h3>
          <ul class="space-y-2">
            <li>
              <router-link to="/plans-pricing" class="text-gray-400 hover:text-coffee transition-colors text-sm">
                Plans & pricing
              </router-link>
            </li>
            <li>
              <router-link to="/sell-products" class="text-gray-400 hover:text-coffee transition-colors text-sm">
                Sell your products
              </router-link>
            </li>
            <li>
              <router-link to="/jobs" class="text-gray-400 hover:text-coffee transition-colors text-sm">
                Jobs
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Social media Section -->
        <div>
          <h4 class="text-white font-semibold mb-4">Social media</h4>
          <div class="flex space-x-4">
            <a href="#"
              class="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-coffee transition-colors">
              <svg class="w-4 h-4 " fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </a>
          </div>
        </div>

      </div>

      <!-- Social Media Section -->
      <div class="mt-4 sm:mt-6 md:mt-8 pt-4 sm:pt-6 md:pt-8 border-t border-gray-500">
        <div class="flex flex-col md:flex-row justify-center items-center">
          <div class="text-gray-400 text-sm">
            Copyright Larkdesign2024. All Rights Reserved.
          </div>
        </div>
      </div>
    </MaxContainer>
  </footer>
</template>

<script>
import MaxContainer from './MaxContainer.vue';
export default {
  name: 'Footer',
  components: {
    MaxContainer
  },
}
</script>