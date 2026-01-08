<template>
  <section class="py-8">
    <MaxContainer>
      <div class="relative rounded-2xl overflow-hidden h-64 md:h-80 flex items-center justify-center shadow-2xl" :style="{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }">
        <!-- Overlay for better text readability -->
        <div class="absolute inset-0 bg-black bg-opacity-50"></div>

        <!-- Content -->
        <div class="relative z-10 text-center text-white px-6 max-w-xl">
          <h2 class=" text-3xl md:text-4xl lg:text-5xl font-semibold mb-8 drop-shadow-lg banner-title ">
            {{ title }}
          </h2>
          <router-link to="/shop"
            class="inline-block bg-coffee text-white px-8 py-3 rounded-full font-semibold hover:bg-opacity-80 hover:scale-105 transition-all duration-300 shadow-lg">
            {{ buttonText }}
          </router-link>
        </div>
      </div>
    </MaxContainer>
  </section>
</template>

<script>
import MaxContainer from './MaxContainer.vue'

export default {
  name: 'Banner',
  components: {
    MaxContainer
  },
  props: {
    backgroundImage: {
      type: String,
      default: '/images/coffee_beans.webp'
    },
    title: {
      type: String,
      default: 'Check out our best coffee beans'
    },
    buttonText: {
      type: String,
      default: 'Explore'
    }
  }
}
</script>