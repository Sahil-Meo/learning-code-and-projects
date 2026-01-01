<template>
  <div
    class="min-w-[250px] w-full bg-sec rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 shadow-lg flex-1">
    <!-- Coffee Image -->
    <div class=" h-52 overflow-hidden">
      <img :src="coffee.image" :alt="coffee.name" class="w-full h-full object-cover">
    </div>

    <!-- Coffee Details -->
    <div class="p-4">
      <h3 class="text-lg font-semibold text-white mb-2">{{ coffee.name }}</h3>
      <p class="text-gray-400 text-sm mb-4 leading-relaxed">{{ coffee.description }}</p>

      <div class="flex items-center justify-between">
        <span class="text-white font-bold">Rs. {{ coffee.price }}</span>
        <button @click="orderNow"
          class="bg-coffee text-white px-3 py-1.5 rounded-full hover:bg-opacity-80 transition-colors text-sm font-medium">
          Order now
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SpecialCoffeeCard",
  props: {
    coffee: {
      type: Object,
      required: true,
      default: () => ({
        name: "Coffee",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        price: 199,
        image: "/images/coffee_cup.png"
      })
    }
  },
  methods: {
    orderNow() {
      // Handle order functionality
      console.log(`Ordering ${this.coffee.name}`);
      // You can emit an event or navigate to order page
      this.$emit('order', this.coffee);
    }
  }
}
</script>