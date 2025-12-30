<template>
  <div class="min-h-screen bg-gray-900 text-white">
    <MaxContainer class="py-16">
      <h1 class="text-4xl font-bold text-center mb-8 text-coffee">Order Ahead</h1>
      <div class="max-w-4xl mx-auto">
        
        <!-- Hero Section -->
        <div class="text-center mb-12">
          <p class="text-xl text-gray-300 mb-8">
            Skip the line and get your coffee ready when you arrive. Order ahead for pickup at any Coffee Club location.
          </p>
          <div class="bg-gray-800 rounded-lg p-8">
            <h2 class="text-2xl font-semibold mb-4 text-coffee">How It Works</h2>
            <div class="grid md:grid-cols-3 gap-6">
              <div class="text-center">
                <div class="w-16 h-16 bg-coffee rounded-full flex items-center justify-center mx-auto mb-4">
                  <span class="text-2xl font-bold">1</span>
                </div>
                <h3 class="text-lg font-semibold mb-2">Choose Your Items</h3>
                <p class="text-gray-300 text-sm">Browse our menu and select your favorite drinks and snacks</p>
              </div>
              <div class="text-center">
                <div class="w-16 h-16 bg-coffee rounded-full flex items-center justify-center mx-auto mb-4">
                  <span class="text-2xl font-bold">2</span>
                </div>
                <h3 class="text-lg font-semibold mb-2">Select Pickup Time</h3>
                <p class="text-gray-300 text-sm">Choose when you want to pick up your order</p>
              </div>
              <div class="text-center">
                <div class="w-16 h-16 bg-coffee rounded-full flex items-center justify-center mx-auto mb-4">
                  <span class="text-2xl font-bold">3</span>
                </div>
                <h3 class="text-lg font-semibold mb-2">Pick Up & Enjoy</h3>
                <p class="text-gray-300 text-sm">Arrive at your selected time and grab your order</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Order Form -->
        <div class="bg-gray-800 rounded-lg p-8">
          <h2 class="text-2xl font-semibold mb-6 text-coffee">Place Your Order</h2>
          <form class="space-y-6">
            <div class="grid md:grid-cols-2 gap-6">
              <div>
                <label class="block text-sm font-medium mb-2">Select Location</label>
                <select class="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:border-coffee">
                  <option>Downtown Coffee Club</option>
                  <option>Uptown Coffee Club</option>
                  <option>Mall Coffee Club</option>
                  <option>Airport Coffee Club</option>
                </select>
              </div>
              <div>
                <label class="block text-sm font-medium mb-2">Pickup Time</label>
                <select class="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:border-coffee">
                  <option>ASAP (15 minutes)</option>
                  <option>30 minutes</option>
                  <option>1 hour</option>
                  <option>2 hours</option>
                </select>
              </div>
            </div>

            <div>
              <h3 class="text-lg font-semibold mb-4 text-coffee">Popular Items</h3>
              <div class="grid md:grid-cols-2 gap-4">
                <div class="flex items-center justify-between p-4 bg-gray-700 rounded-lg">
                  <div>
                    <h4 class="font-semibold">Cappuccino</h4>
                    <p class="text-gray-300 text-sm">Rich espresso with steamed milk</p>
                    <span class="text-coffee font-bold">$4.50</span>
                  </div>
                  <button class="bg-coffee text-white px-4 py-2 rounded hover:bg-opacity-80 transition-colors">
                    Add
                  </button>
                </div>
                <div class="flex items-center justify-between p-4 bg-gray-700 rounded-lg">
                  <div>
                    <h4 class="font-semibold">Latte</h4>
                    <p class="text-gray-300 text-sm">Smooth espresso with steamed milk</p>
                    <span class="text-coffee font-bold">$4.75</span>
                  </div>
                  <button class="bg-coffee text-white px-4 py-2 rounded hover:bg-opacity-80 transition-colors">
                    Add
                  </button>
                </div>
                <div class="flex items-center justify-between p-4 bg-gray-700 rounded-lg">
                  <div>
                    <h4 class="font-semibold">Americano</h4>
                    <p class="text-gray-300 text-sm">Classic espresso with hot water</p>
                    <span class="text-coffee font-bold">$3.25</span>
                  </div>
                  <button class="bg-coffee text-white px-4 py-2 rounded hover:bg-opacity-80 transition-colors">
                    Add
                  </button>
                </div>
                <div class="flex items-center justify-between p-4 bg-gray-700 rounded-lg">
                  <div>
                    <h4 class="font-semibold">Croissant</h4>
                    <p class="text-gray-300 text-sm">Buttery, flaky pastry</p>
                    <span class="text-coffee font-bold">$3.50</span>
                  </div>
                  <button class="bg-coffee text-white px-4 py-2 rounded hover:bg-opacity-80 transition-colors">
                    Add
                  </button>
                </div>
              </div>
            </div>

            <div class="text-center">
              <button type="submit" class="bg-coffee text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-80 transition-colors">
                Review Order
              </button>
            </div>
          </form>
        </div>

      </div>
    </MaxContainer>
  </div>
</template>

<script>
import MaxContainer from '../components/MaxContainer.vue'

export default {
  name: 'OrderAhead',
  components: {
    MaxContainer
  }
}
</script>