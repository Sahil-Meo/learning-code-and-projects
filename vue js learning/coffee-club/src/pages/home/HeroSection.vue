<template>
     <section class="bg-slate-900 text-white py-12 px-4">
          <div class="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
               <!-- LEFT CONTENT -->
               <div class="w-full md:w-1/2">
                    <!-- Subtitle -->
                    <p class="text-sm uppercase tracking-widest text-gray-300 mb-3">
                         {{ subtitle }}
                    </p>

                    <!-- Title -->
                    <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
                         {{ title }}
                    </h1>

                    <!-- Two-line description -->
                    <p class="text-gray-300 mb-1">
                         {{ descLine1 }}
                    </p>
                    <p class="text-gray-300 mb-6">
                         {{ descLine2 }}
                    </p>

                    <!-- Buttons -->
                    <div class="flex flex-wrap gap-4">
                         <button @click="onOrder"
                              class="px-6 py-2 border-2 border-white text-white rounded-md hover:bg-white hover:text-slate-900 transition">
                              Order Now
                         </button>

                         <button @click="onLearn"
                              class="px-6 py-2 border-2 border-white text-white rounded-md hover:bg-white hover:text-slate-900 transition">
                              Learn More
                         </button>
                    </div>
               </div>

               <!-- RIGHT IMAGE -->
               <div class="w-full md:w-1/2 flex justify-center">
                    <img :src="imageSrc" :alt="imageAlt" class="w-full max-w-md sm:max-w-lg rounded-lg" />
               </div>
          </div>
     </section>
</template>

<script>
export default {
     name: "HeroSection",
     props: {
          subtitle: {
               type: String,
               default: "Fresh & Delicious",
          },
          title: {
               type: String,
               default: "Taste the Best Food",
          },
          descLine1: {
               type: String,
               default: "Prepared with high-quality ingredients every day.",
          },
          descLine2: {
               type: String,
               default: "Fast delivery • Great taste • Affordable price",
          },
          imageSrc: {
               type: String,
               default: "https://via.placeholder.com/600x450",
          },
          imageAlt: {
               type: String,
               default: "Hero Image",
          },
     },
     methods: {
          onOrder() {
               this.$emit("order");
          },
          onLearn() {
               this.$emit("learn");
          },
     },
};
</script>
