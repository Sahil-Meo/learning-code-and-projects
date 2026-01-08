<template>
  <section class="py-16">
    <MaxContainer >
      <div class="grid lg:grid-cols-2 items-center">
        
        <!-- Left Content -->
        <div class=" space-y-3 sm:space-y-6 max-w-md">
          <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-white">Our Special Coffee</h2>
         <div class=" space-y-4 sm:space-y-6 md:space-y-8">
           <p class="text-gray-300 leading-relaxed max-w-sm">
            Lorem ipsum dolor sit amet consectetur. Dui erat massa condimentum lacus urna interdum quam. 
            Euismod tristique ac duis et suspendisse cursus sit tempus pulvinar.
          </p>
          <button class="bg-coffee text-white px-6 py-3 rounded-full hover:bg-opacity-80 transition-colors font-medium ">
            Contact us
          </button>
         </div>
        </div>

        <!-- Right Content - Coffee Cards -->
        <div class="flex border gap-6  ">
          <SpecialCoffeeCard 
            v-for="coffee in specialCoffees" 
            :key="coffee.id"
            :coffee="coffee"
            @order="handleOrder"
          />
        </div>

      </div>
    </MaxContainer>
  </section>
</template>

<script>
import MaxContainer from '@/components/MaxContainer.vue'
import SpecialCoffeeCard from '@/components/SpecialCoffeeCard.vue'

export default {
  name: 'CoffeeItems',
  components: {
    MaxContainer,
    SpecialCoffeeCard
  },
  data() {
    return {
      specialCoffees: [
        {
          id: 1,
          name: 'Lungo Coffee',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
          price: 199,
          image: '/images/lungo_coffee.webp '
        },
        {
          id: 2,
          name: 'Dalgona Coffee',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
          price: 139,
          image: '/images/Iced_Coffee.webp'
        },
        {
          id: 3,
          name: 'Iced Coffee',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
          price: 159,
          image: '/images/coffee_cups.png'
        }
      ]
    }
  },
  methods: {
    handleOrder(coffee) {
      // Handle order logic here
      console.log('Order placed for:', coffee.name);
      // You could navigate to order page, show modal, etc.
    }
  }
}
</script>