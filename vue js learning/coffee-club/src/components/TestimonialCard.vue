<template>
  <div class="bg-sec rounded-2xl p-4  text-center hover:transform hover:scale-105 transition-all duration-300 shadow-lg h-full flex flex-col relative">
    <!-- Client Image -->
    <div class="mb-4 absolute -top-20 right-[33%]">
      <img 
        :src="testimonial.image" 
        :alt="testimonial.name"
        class="w-16 h-16 md:w-36 md:h-36 rounded-full mx-auto object-cover shadow-lg"
      >
    </div>
    
    <!-- Client Name -->
    <h3 class="text-xl md:text-2xl font-semibold text-white mb-3 mt-20">{{ testimonial.name }}</h3>
    
    <!-- Testimonial Text -->
    <p class="text-gray-300 text-sm leading-relaxed mb-4 md:mb-6 flex-grow px-2">
      {{ testimonial.review }}
    </p>
    
    <!-- Star Rating -->
    <div class="flex justify-center space-x-1 mt-auto">
      <span 
        v-for="star in 5" 
        :key="star"
        class="text-2xl"
        :class="star <= testimonial.rating ? 'text-yellow-400' : 'text-gray-500'"
      >
        ★
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TestimonialCard",
  props: {
    testimonial: {
      type: Object,
      required: true,
      default: () => ({
        name: "Customer Name",
        review: "Lorem ipsum dolor sit amet consectetur. Dui erat massa condimentum lacus urna interdum quam.",
        rating: 5,
        image: "/images/client_1.png"
      })
    }
  }
}
</script>