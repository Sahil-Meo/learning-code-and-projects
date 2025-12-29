<template>
     <HeroSection />
     <MaxContainer>
          <section class="category-section py-6 sm:py-12">
               <div class="flex justify-between mb-6 sm:mb-12">
                    <h2 class="text-3xl sm:text-4xl font-medium text-white">Offers</h2>
                    <div class="flex gap-2 sm:gap-4">
                         <button :class="scrollBtn" @click="scrollLeft">
                              <ChevronLeftIcon />
                         </button>
                         <button :class="scrollBtn" @click="scrollRight">
                              <ChevronRightIcon />
                         </button>
                    </div>
               </div>
               <div ref="scrollContainer" class="flex overflow-x-scroll bar scroll-smooth"
                    style="scrollbar-width: none; -ms-overflow-style: none;">
                    <CoffeeCatCard :category="category" v-for="(category, index) in categories" :key="index" addClass="coffee-cat-card" />
               </div>
          </section>
          <div class="my-20">
               <!-- <SliderFile /> -->
               <MySlider />
          </div>
     </MaxContainer>
</template>

<script>
import MaxContainer from '@/components/MaxContainer.vue';
import HeroSection from './HeroSection.vue';
import ChevronLeftIcon from '@/assets/icons/ChevronLeftIcon.vue';
import ChevronRightIcon from '@/assets/icons/ChevronRightIcon.vue';
import CoffeeCatCard from '@/components/CoffeeCatCard.vue';
import SliderFile from './SliderFile.vue';
import MySlider from './MySlider.vue';

export default {
     name: 'Home',
     components: {
          MySlider,
          SliderFile,
          CoffeeCatCard,
          MaxContainer,
          HeroSection,
          ChevronLeftIcon,
          ChevronRightIcon
     },
     data() {
          return {
               scrollBtn: "bg-[#181717] text-white w-10 h-10 rounded-full text-center self-center hover:bg-[#282828] transition-colors duration-300",
               currentIndex: 0,
               categories: [
                    {
                         image: 'espresso',
                         title: "Espresso",
                         description: "Rich and bold single shot of pure coffee excellence."
                    },
                    {
                         image: 'cappuccino',
                         title: "Cappuccino",
                         description: "Perfect balance of espresso, steamed milk, and foam."
                    },
                    {
                         image: 'latte',
                         title: "Caffè Latte",
                         description: "Smooth and creamy espresso with steamed milk."
                    },
                    {
                         image: 'americano',
                         title: "Americano",
                         description: "Classic espresso diluted with hot water for a lighter taste."
                    },
                    {
                         image: 'mocha',
                         title: "Mocha",
                         description: "Delicious blend of espresso, chocolate, and steamed milk."
                    },
                    {
                         image: 'macchiato',
                         title: "Macchiato",
                         description: "Espresso marked with a dollop of foamed milk."
                    },
                    {
                         image: 'flatwhite',
                         title: "Flat White",
                         description: "Velvety microfoam over a double shot of espresso."
                    },
                    {
                         image: 'coldbrew',
                         title: "Cold Brew",
                         description: "Smooth, naturally sweet coffee steeped in cold water."
                    },
                    {
                         image: 'affogato',
                         title: "Affogato",
                         description: "Hot espresso poured over vanilla ice cream delight."
                    },
                    {
                         image: 'cortado',
                         title: "Cortado",
                         description: "Equal parts espresso and warm milk, perfectly balanced."
                    }
               ]
          }
     },
     methods: {
          scrollLeft() {
               const container = this.$refs.scrollContainer;
               const cardWidth = container.querySelector('.coffee-cat-card')?.offsetWidth;
               const scrollAmount = cardWidth;

               // Move index backward
               this.currentIndex--;

               // Loop to end if at beginning
               if (this.currentIndex < 0) {
                    this.currentIndex = this.categories.length - 1;
               }

               // Scroll to the new position
               container.scrollTo({
                    left: this.currentIndex * scrollAmount,
                    behavior: 'smooth'
               });
          },

          scrollRight() {
               const container = this.$refs.scrollContainer;
               const cardWidth = container.querySelector('.coffee-cat-card')?.offsetWidth;

               const scrollAmount = cardWidth;

               // Move index forward
               this.currentIndex++;

               // Loop to beginning if at end
               if (this.currentIndex >= this.categories.length) {
                    this.currentIndex = 0;
               }

               // Scroll to the new position
               container.scrollTo({
                    left: this.currentIndex * scrollAmount,
                    behavior: 'smooth'
               });
          },

          handleOrderClick() {
               console.log('Order now clicked');
          },

          handleLearnClick() {
               console.log('Learn About Us clicked');
          }
     }
}
</script>

<style scoped>
/* Hide scrollbar for Chrome, Safari and Opera */
.bar::-webkit-scrollbar {
     display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.bar {
     -ms-overflow-style: none;
     /* IE and Edge */
     scrollbar-width: none;
     /* Firefox */
}

</style>