<template>
  <footer class="bg-gray-900 text-white py-12  border-t border-gray-800">
    <MaxContainer>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-8 justify-center ">
        
        <!-- Coffee Brand Section -->
        <div class="lg:col-span-2">
          <h2 class="text-2xl font-bold mb-4">
            <span class="text-coffee">COF</span>FEE
          </h2>
          <p class="text-gray-300 text-sm leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
          </p>
        </div>

        <!-- Privacy Section -->
        <div>
          <h3 class="text-white font-semibold mb-4">Privacy</h3>
          <ul class="space-y-2">
            <li>
              <router-link to="/terms-of-use" class="text-gray-300 hover:text-coffee transition-colors text-sm">
                Terms of use
              </router-link>
            </li>
            <li>
              <router-link to="/privacy-policy" class="text-gray-300 hover:text-coffee transition-colors text-sm">
                Privacy policy
              </router-link>
            </li>
            <li>
              <router-link to="/cookies" class="text-gray-300 hover:text-coffee transition-colors text-sm">
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
              <router-link to="/shop" class="text-gray-300 hover:text-coffee transition-colors text-sm">
                Shop
              </router-link>
            </li>
            <li>
              <router-link to="/order-ahead" class="text-gray-300 hover:text-coffee transition-colors text-sm">
                Order ahead
              </router-link>
            </li>
            <li>
              <router-link to="/menu" class="text-gray-300 hover:text-coffee transition-colors text-sm">
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
              <router-link to="/find-location" class="text-gray-300 hover:text-coffee transition-colors text-sm">
                Find a location
              </router-link>
            </li>
            <li>
              <router-link to="/about" class="text-gray-300 hover:text-coffee transition-colors text-sm">
                About us
              </router-link>
            </li>
            <li>
              <router-link to="/our-story" class="text-gray-300 hover:text-coffee transition-colors text-sm">
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
              <router-link to="/plans-pricing" class="text-gray-300 hover:text-coffee transition-colors text-sm">
                Plans & pricing
              </router-link>
            </li>
            <li>
              <router-link to="/sell-products" class="text-gray-300 hover:text-coffee transition-colors text-sm">
                Sell your products
              </router-link>
            </li>
            <li>
              <router-link to="/jobs" class="text-gray-300 hover:text-coffee transition-colors text-sm">
                Jobs
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Social Media Section -->
        <div>
          <h3 class="text-white font-semibold mb-4">Social media</h3>
          <div class="flex space-x-3">
            <a href="#" class="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-coffee transition-colors">
              <FacebookIcon iconClass="w-4 h-4 text-white" />
            </a>
            <a href="#" class="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-coffee transition-colors">
              <TwitterIcon iconClass="w-4 h-4 text-white" />
            </a>
            <a href="#" class="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-coffee transition-colors">
              <TiktokIcon iconClass="w-4 h-4 text-white" />
            </a>
          </div>
        </div>

      </div>

      <!-- Copyright Section -->
      <div class="mt-8 pt-8 border-t border-gray-800">
        <div class="text-center">
          <div class="text-gray-300 text-sm">
            Copyright Larkdesign2024. All Rights Reserved.
          </div>
        </div>
      </div>
    </MaxContainer>
  </footer>
</template>

<script>
import MaxContainer from './MaxContainer.vue'
import FacebookIcon from '../assets/icons/FacebookIcon.vue'
import TwitterIcon from '../assets/icons/TwitterIcon.vue'
import TiktokIcon from '../assets/icons/TiktokIcon.vue'

export default {
  name: 'Footer',
  components: {
    MaxContainer,
    FacebookIcon,
    TwitterIcon,
    TiktokIcon
  }
}
</script>