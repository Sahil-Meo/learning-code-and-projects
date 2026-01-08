<template>
  <section class="py-12 md:py-16 ">
    <MaxContainer>
      <!-- Section Title -->
      <div class="text-center mb-8 md:mb-36">
        <h2 class="text-3xl md:text-4xl font-bold text-white">Our Happy Customers</h2>
      </div>
      
      <!-- Testimonials Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        <TestimonialCard 
          v-for="testimonial in testimonials" 
          :key="testimonial.id"
          :testimonial="testimonial"
        />
      </div>
    </MaxContainer>
  </section>
</template>

<script>
import MaxContainer from '@/components/MaxContainer.vue'
import TestimonialCard from '@/components/TestimonialCard.vue'

export default {
  name: 'Testimonials',
  components: {
    MaxContainer,
    TestimonialCard
  },
  data() {
    return {
      testimonials: [
        {
          id: 1,
          name: 'Jane Adams',
          review: 'Lorem ipsum dolor sit amet consectetur. Dui erat massa condimentum lacus urna interdum quam. Euismod tristique ac duis et suspendisse cursus sit tempus pulvinar.',
          rating: 4,
          image: '/images/client_1.png'
        },
        {
          id: 2,
          name: 'Sam Williams',
          review: 'Lorem ipsum dolor sit amet consectetur. Dui erat massa condimentum lacus urna interdum quam. Euismod tristique ac duis et suspendisse cursus sit tempus pulvinar.',
          rating: 4,
          image: '/images/client_2.png'
        },
        {
          id: 3,
          name: 'Angela Gozzales',
          review: 'Lorem ipsum dolor sit amet consectetur. Dui erat massa condimentum lacus urna interdum quam. Euismod tristique ac duis et suspendisse cursus sit tempus pulvinar.',
          rating: 3,
          image: '/images/client_3.png'
        }
      ]
    }
  }
}
</script>