<template>
     <div class="min-h-screen bg-gray-900 text-white">
          <div class="container mx-auto px-4 py-16">
               <h1 class="text-4xl font-bold text-center mb-8 text-coffee">Our Coffee Menu</h1>
               <div class="max-w-6xl mx-auto">

                    <!-- Coffee Categories -->
                    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                         <!-- Espresso Drinks -->
                         <div class="bg-gray-800 rounded-lg p-6">
                              <h2 class="text-2xl font-semibold mb-4 text-coffee">Espresso Drinks</h2>
                              <div class="space-y-3">
                                   <div class="flex justify-between">
                                        <span>Espresso</span>
                                        <span class="text-coffee">$2.50</span>
                                   </div>
                                   <div class="flex justify-between">
                                        <span>Americano</span>
                                        <span class="text-coffee">$3.25</span>
                                   </div>
                                   <div class="flex justify-between">
                                        <span>Cappuccino</span>
                                        <span class="text-coffee">$4.50</span>
                                   </div>
                                   <div class="flex justify-between">
                                        <span>Latte</span>
                                        <span class="text-coffee">$4.75</span>
                                   </div>
                                   <div class="flex justify-between">
                                        <span>Macchiato</span>
                                        <span class="text-coffee">$4.25</span>
                                   </div>
                              </div>
                         </div>

                         <!-- Specialty Drinks -->
                         <div class="bg-gray-800 rounded-lg p-6">
                              <h2 class="text-2xl font-semibold mb-4 text-coffee">Specialty Drinks</h2>
                              <div class="space-y-3">
                                   <div class="flex justify-between">
                                        <span>Mocha</span>
                                        <span class="text-coffee">$5.25</span>
                                   </div>
                                   <div class="flex justify-between">
                                        <span>Caramel Latte</span>
                                        <span class="text-coffee">$5.50</span>
                                   </div>
                                   <div class="flex justify-between">
                                        <span>Vanilla Bean Frappé</span>
                                        <span class="text-coffee">$6.00</span>
                                   </div>
                                   <div class="flex justify-between">
                                        <span>Iced Coffee</span>
                                        <span class="text-coffee">$3.75</span>
                                   </div>
                                   <div class="flex justify-between">
                                        <span>Cold Brew</span>
                                        <span class="text-coffee">$4.25</span>
                                   </div>
                              </div>
                         </div>

                         <!-- Pastries & Snacks -->
                         <div class="bg-gray-800 rounded-lg p-6">
                              <h2 class="text-2xl font-semibold mb-4 text-coffee">Pastries & Snacks</h2>
                              <div class="space-y-3">
                                   <div class="flex justify-between">
                                        <span>Croissant</span>
                                        <span class="text-coffee">$3.50</span>
                                   </div>
                                   <div class="flex justify-between">
                                        <span>Blueberry Muffin</span>
                                        <span class="text-coffee">$4.25</span>
                                   </div>
                                   <div class="flex justify-between">
                                        <span>Chocolate Cake</span>
                                        <span class="text-coffee">$5.75</span>
                                   </div>
                                   <div class="flex justify-between">
                                        <span>Peanut Cookies</span>
                                        <span class="text-coffee">$2.95</span>
                                   </div>
                                   <div class="flex justify-between">
                                        <span>Bagel with Cream Cheese</span>
                                        <span class="text-coffee">$4.50</span>
                                   </div>
                              </div>
                         </div>

                    </div>

                    <!-- Featured Items -->
                    <div class="mt-12">
                         <h2 class="text-3xl font-semibold text-center mb-8 text-coffee">Today's Specials</h2>
                         <div class="grid md:grid-cols-2 gap-8">
                              <div class="bg-gray-800 rounded-lg p-6 text-center">
                                   <h3 class="text-xl font-semibold mb-2 text-coffee">Barista's Choice</h3>
                                   <p class="text-gray-300 mb-4">Our signature blend with notes of chocolate and
                                        caramel, perfectly balanced for any time of day.</p>
                                   <span class="text-2xl font-bold text-coffee">$4.95</span>
                              </div>
                              <div class="bg-gray-800 rounded-lg p-6 text-center">
                                   <h3 class="text-xl font-semibold mb-2 text-coffee">Seasonal Delight</h3>
                                   <p class="text-gray-300 mb-4">Limited time seasonal drink featuring premium
                                        ingredients and unique flavor combinations.</p>
                                   <span class="text-2xl font-bold text-coffee">$6.50</span>
                              </div>
                         </div>
                    </div>

               </div>
          </div>
     </div>
</template>

<script>
export default {
     name: 'CoffeeItems'
}
</script>