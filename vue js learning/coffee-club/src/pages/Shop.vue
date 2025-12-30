<template>
  <div class="min-h-screen bg-gray-900 text-white">
    <MaxContainer class="py-16">
      <h1 class="text-4xl font-bold text-center mb-8 text-coffee">Coffee Shop</h1>
      <div class="max-w-6xl mx-auto">
        
        <!-- Featured Products -->
        <section class="mb-12">
          <h2 class="text-2xl font-semibold mb-6 text-coffee">Featured Products</h2>
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div class="bg-gray-800 rounded-lg p-6">
              <div class="h-48 bg-gray-700 rounded-lg mb-4 flex items-center justify-center">
                <span class="text-gray-400">Coffee Beans Image</span>
              </div>
              <h3 class="text-xl font-semibold mb-2">Premium Arabica Beans</h3>
              <p class="text-gray-300 mb-4">Single-origin beans from the highlands of Colombia</p>
              <div class="flex justify-between items-center">
                <span class="text-2xl font-bold text-coffee">$24.99</span>
                <button class="bg-coffee text-white px-4 py-2 rounded hover:bg-opacity-80 transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>

            <div class="bg-gray-800 rounded-lg p-6">
              <div class="h-48 bg-gray-700 rounded-lg mb-4 flex items-center justify-center">
                <span class="text-gray-400">Coffee Mug Image</span>
              </div>
              <h3 class="text-xl font-semibold mb-2">Coffee Club Mug</h3>
              <p class="text-gray-300 mb-4">Premium ceramic mug with our signature logo</p>
              <div class="flex justify-between items-center">
                <span class="text-2xl font-bold text-coffee">$12.99</span>
                <button class="bg-coffee text-white px-4 py-2 rounded hover:bg-opacity-80 transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>

            <div class="bg-gray-800 rounded-lg p-6">
              <div class="h-48 bg-gray-700 rounded-lg mb-4 flex items-center justify-center">
                <span class="text-gray-400">Gift Card Image</span>
              </div>
              <h3 class="text-xl font-semibold mb-2">Gift Card</h3>
              <p class="text-gray-300 mb-4">Perfect gift for coffee lovers</p>
              <div class="flex justify-between items-center">
                <span class="text-2xl font-bold text-coffee">$25.00</span>
                <button class="bg-coffee text-white px-4 py-2 rounded hover:bg-opacity-80 transition-colors">
                  Purchase
                </button>
              </div>
            </div>
          </div>
        </section>

        <!-- Product Categories -->
        <section class="mb-12">
          <h2 class="text-2xl font-semibold mb-6 text-coffee">Shop by Category</h2>
          <div class="grid md:grid-cols-4 gap-4">
            <div class="bg-gray-800 rounded-lg p-6 text-center hover:bg-gray-700 transition-colors cursor-pointer">
              <h3 class="text-lg font-semibold mb-2">Coffee Beans</h3>
              <p class="text-gray-300 text-sm">Premium quality beans from around the world</p>
            </div>
            <div class="bg-gray-800 rounded-lg p-6 text-center hover:bg-gray-700 transition-colors cursor-pointer">
              <h3 class="text-lg font-semibold mb-2">Equipment</h3>
              <p class="text-gray-300 text-sm">Professional coffee brewing equipment</p>
            </div>
            <div class="bg-gray-800 rounded-lg p-6 text-center hover:bg-gray-700 transition-colors cursor-pointer">
              <h3 class="text-lg font-semibold mb-2">Merchandise</h3>
              <p class="text-gray-300 text-sm">Mugs, t-shirts, and branded items</p>
            </div>
            <div class="bg-gray-800 rounded-lg p-6 text-center hover:bg-gray-700 transition-colors cursor-pointer">
              <h3 class="text-lg font-semibold mb-2">Gift Cards</h3>
              <p class="text-gray-300 text-sm">Perfect gifts for coffee enthusiasts</p>
            </div>
          </div>
        </section>

        <!-- Special Offers -->
        <section>
          <h2 class="text-2xl font-semibold mb-6 text-coffee">Special Offers</h2>
          <div class="bg-gradient-to-r from-coffee to-orange-600 rounded-lg p-8 text-center">
            <h3 class="text-2xl font-bold mb-4">Free Shipping on Orders Over $50</h3>
            <p class="text-lg mb-6">Get your favorite coffee delivered to your door with free shipping on qualifying orders.</p>
            <button class="bg-white text-coffee px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Shop Now
            </button>
          </div>
        </section>

      </div>
    </MaxContainer>
  </div>
</template>

<script>
import MaxContainer from '../components/MaxContainer.vue'

export default {
  name: 'Shop',
  components: {
    MaxContainer
  }
}
</script>