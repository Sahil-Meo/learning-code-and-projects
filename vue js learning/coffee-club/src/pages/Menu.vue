<template>
  <div class="min-h-screen bg-gray-900 text-white">
    <MaxContainer class="py-16">
      <h1 class="text-4xl font-bold text-center mb-8 text-coffee">Our Menu</h1>
      <div class="max-w-6xl mx-auto">
        
        <!-- Menu Categories -->
        <div class="flex flex-wrap justify-center gap-4 mb-12">
          <button 
            v-for="category in categories" 
            :key="category"
            @click="activeCategory = category"
            :class="[
              'px-6 py-2 rounded-full transition-colors',
              activeCategory === category 
                ? 'bg-coffee text-white' 
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            ]"
          >
            {{ category }}
          </button>
        </div>

        <!-- Hot Drinks -->
        <div v-if="activeCategory === 'Hot Drinks'" class="space-y-8">
          <section>
            <h2 class="text-2xl font-semibold mb-6 text-coffee">Espresso Drinks</h2>
            <div class="grid md:grid-cols-2 gap-6">
              <div class="flex justify-between items-center p-4 bg-gray-800 rounded-lg">
                <div>
                  <h3 class="text-lg font-semibold">Espresso</h3>
                  <p class="text-gray-300 text-sm">Rich, concentrated coffee shot</p>
                </div>
                <span class="text-coffee font-bold text-lg">$2.50</span>
              </div>
              <div class="flex justify-between items-center p-4 bg-gray-800 rounded-lg">
                <div>
                  <h3 class="text-lg font-semibold">Americano</h3>
                  <p class="text-gray-300 text-sm">Espresso with hot water</p>
                </div>
                <span class="text-coffee font-bold text-lg">$3.25</span>
              </div>
              <div class="flex justify-between items-center p-4 bg-gray-800 rounded-lg">
                <div>
                  <h3 class="text-lg font-semibold">Cappuccino</h3>
                  <p class="text-gray-300 text-sm">Espresso with steamed milk and foam</p>
                </div>
                <span class="text-coffee font-bold text-lg">$4.50</span>
              </div>
              <div class="flex justify-between items-center p-4 bg-gray-800 rounded-lg">
                <div>
                  <h3 class="text-lg font-semibold">Latte</h3>
                  <p class="text-gray-300 text-sm">Espresso with steamed milk</p>
                </div>
                <span class="text-coffee font-bold text-lg">$4.75</span>
              </div>
            </div>
          </section>
        </div>

        <!-- Cold Drinks -->
        <div v-if="activeCategory === 'Cold Drinks'" class="space-y-8">
          <section>
            <h2 class="text-2xl font-semibold mb-6 text-coffee">Iced Beverages</h2>
            <div class="grid md:grid-cols-2 gap-6">
              <div class="flex justify-between items-center p-4 bg-gray-800 rounded-lg">
                <div>
                  <h3 class="text-lg font-semibold">Iced Coffee</h3>
                  <p class="text-gray-300 text-sm">Chilled coffee over ice</p>
                </div>
                <span class="text-coffee font-bold text-lg">$3.75</span>
              </div>
              <div class="flex justify-between items-center p-4 bg-gray-800 rounded-lg">
                <div>
                  <h3 class="text-lg font-semibold">Cold Brew</h3>
                  <p class="text-gray-300 text-sm">Smooth, cold-steeped coffee</p>
                </div>
                <span class="text-coffee font-bold text-lg">$4.25</span>
              </div>
              <div class="flex justify-between items-center p-4 bg-gray-800 rounded-lg">
                <div>
                  <h3 class="text-lg font-semibold">Iced Latte</h3>
                  <p class="text-gray-300 text-sm">Espresso with cold milk over ice</p>
                </div>
                <span class="text-coffee font-bold text-lg">$5.25</span>
              </div>
              <div class="flex justify-between items-center p-4 bg-gray-800 rounded-lg">
                <div>
                  <h3 class="text-lg font-semibold">Frappé</h3>
                  <p class="text-gray-300 text-sm">Blended iced coffee drink</p>
                </div>
                <span class="text-coffee font-bold text-lg">$6.00</span>
              </div>
            </div>
          </section>
        </div>

        <!-- Food -->
        <div v-if="activeCategory === 'Food'" class="space-y-8">
          <section>
            <h2 class="text-2xl font-semibold mb-6 text-coffee">Pastries & Snacks</h2>
            <div class="grid md:grid-cols-2 gap-6">
              <div class="flex justify-between items-center p-4 bg-gray-800 rounded-lg">
                <div>
                  <h3 class="text-lg font-semibold">Croissant</h3>
                  <p class="text-gray-300 text-sm">Buttery, flaky French pastry</p>
                </div>
                <span class="text-coffee font-bold text-lg">$3.50</span>
              </div>
              <div class="flex justify-between items-center p-4 bg-gray-800 rounded-lg">
                <div>
                  <h3 class="text-lg font-semibold">Blueberry Muffin</h3>
                  <p class="text-gray-300 text-sm">Fresh baked with real blueberries</p>
                </div>
                <span class="text-coffee font-bold text-lg">$4.25</span>
              </div>
              <div class="flex justify-between items-center p-4 bg-gray-800 rounded-lg">
                <div>
                  <h3 class="text-lg font-semibold">Chocolate Cake</h3>
                  <p class="text-gray-300 text-sm">Rich, moist chocolate cake slice</p>
                </div>
                <span class="text-coffee font-bold text-lg">$5.75</span>
              </div>
              <div class="flex justify-between items-center p-4 bg-gray-800 rounded-lg">
                <div>
                  <h3 class="text-lg font-semibold">Bagel with Cream Cheese</h3>
                  <p class="text-gray-300 text-sm">Fresh bagel with cream cheese</p>
                </div>
                <span class="text-coffee font-bold text-lg">$4.50</span>
              </div>
            </div>
          </section>
        </div>

        <!-- Specials -->
        <div v-if="activeCategory === 'Specials'" class="space-y-8">
          <section>
            <h2 class="text-2xl font-semibold mb-6 text-coffee">Today's Specials</h2>
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-gray-800 rounded-lg p-6">
                <h3 class="text-xl font-semibold mb-2 text-coffee">Barista's Choice</h3>
                <p class="text-gray-300 mb-4">Our signature blend with notes of chocolate and caramel</p>
                <span class="text-2xl font-bold text-coffee">$4.95</span>
              </div>
              <div class="bg-gray-800 rounded-lg p-6">
                <h3 class="text-xl font-semibold mb-2 text-coffee">Seasonal Delight</h3>
                <p class="text-gray-300 mb-4">Limited time seasonal drink with premium ingredients</p>
                <span class="text-2xl font-bold text-coffee">$6.50</span>
              </div>
            </div>
          </section>
        </div>

      </div>
    </MaxContainer>
  </div>
</template>

<script>
import MaxContainer from '../components/MaxContainer.vue'

export default {
  name: 'Menu',
  data() {
    return {
      activeCategory: 'Hot Drinks',
      categories: ['Hot Drinks', 'Cold Drinks', 'Food', 'Specials']
    }
  },
  components: {
    MaxContainer
  }
}
</script>