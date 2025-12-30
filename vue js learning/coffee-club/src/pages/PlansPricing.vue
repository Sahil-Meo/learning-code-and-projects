<template>
  <div class="min-h-screen bg-gray-900 text-white">
    <div class="container mx-auto px-4 py-16">
      <h1 class="text-4xl font-bold text-center mb-8 text-coffee">Plans & Pricing</h1>
      <div class="max-w-6xl mx-auto">
        
        <!-- Hero Section -->
        <div class="text-center mb-12">
          <p class="text-xl text-gray-300 mb-8">
            Choose the perfect plan for your coffee needs. From casual sippers to coffee connoisseurs, 
            we have options that fit every lifestyle and budget.
          </p>
        </div>

        <!-- Pricing Plans -->
        <div class="grid md:grid-cols-3 gap-8 mb-12">
          
          <!-- Basic Plan -->
          <div class="bg-gray-800 rounded-lg p-8 text-center">
            <h2 class="text-2xl font-semibold mb-4 text-coffee">Coffee Lover</h2>
            <div class="mb-6">
              <span class="text-4xl font-bold">$19</span>
              <span class="text-gray-300">/month</span>
            </div>
            <ul class="space-y-3 mb-8 text-left">
              <li class="flex items-center">
                <span class="text-coffee mr-2">✓</span>
                10% discount on all drinks
              </li>
              <li class="flex items-center">
                <span class="text-coffee mr-2">✓</span>
                Free size upgrade once per day
              </li>
              <li class="flex items-center">
                <span class="text-coffee mr-2">✓</span>
                Birthday drink on us
              </li>
              <li class="flex items-center">
                <span class="text-coffee mr-2">✓</span>
                Early access to new products
              </li>
            </ul>
            <button class="w-full bg-coffee text-white py-3 rounded-lg hover:bg-opacity-80 transition-colors">
              Choose Plan
            </button>
          </div>

          <!-- Premium Plan -->
          <div class="bg-gray-800 rounded-lg p-8 text-center border-2 border-coffee relative">
            <div class="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-coffee text-white px-4 py-1 rounded-full text-sm">
              Most Popular
            </div>
            <h2 class="text-2xl font-semibold mb-4 text-coffee">Coffee Enthusiast</h2>
            <div class="mb-6">
              <span class="text-4xl font-bold">$39</span>
              <span class="text-gray-300">/month</span>
            </div>
            <ul class="space-y-3 mb-8 text-left">
              <li class="flex items-center">
                <span class="text-coffee mr-2">✓</span>
                20% discount on all drinks
              </li>
              <li class="flex items-center">
                <span class="text-coffee mr-2">✓</span>
                Free size upgrade anytime
              </li>
              <li class="flex items-center">
                <span class="text-coffee mr-2">✓</span>
                2 free drinks per month
              </li>
              <li class="flex items-center">
                <span class="text-coffee mr-2">✓</span>
                Free pastry with any drink
              </li>
              <li class="flex items-center">
                <span class="text-coffee mr-2">✓</span>
                Priority order processing
              </li>
              <li class="flex items-center">
                <span class="text-coffee mr-2">✓</span>
                Exclusive member events
              </li>
            </ul>
            <button class="w-full bg-coffee text-white py-3 rounded-lg hover:bg-opacity-80 transition-colors">
              Choose Plan
            </button>
          </div>

          <!-- VIP Plan -->
          <div class="bg-gray-800 rounded-lg p-8 text-center">
            <h2 class="text-2xl font-semibold mb-4 text-coffee">Coffee Connoisseur</h2>
            <div class="mb-6">
              <span class="text-4xl font-bold">$69</span>
              <span class="text-gray-300">/month</span>
            </div>
            <ul class="space-y-3 mb-8 text-left">
              <li class="flex items-center">
                <span class="text-coffee mr-2">✓</span>
                30% discount on all drinks
              </li>
              <li class="flex items-center">
                <span class="text-coffee mr-2">✓</span>
                Unlimited free size upgrades
              </li>
              <li class="flex items-center">
                <span class="text-coffee mr-2">✓</span>
                5 free drinks per month
              </li>
              <li class="flex items-center">
                <span class="text-coffee mr-2">✓</span>
                Free food item daily
              </li>
              <li class="flex items-center">
                <span class="text-coffee mr-2">✓</span>
                VIP line access
              </li>
              <li class="flex items-center">
                <span class="text-coffee mr-2">✓</span>
                Monthly coffee bean delivery
              </li>
              <li class="flex items-center">
                <span class="text-coffee mr-2">✓</span>
                Personal barista consultations
              </li>
            </ul>
            <button class="w-full bg-coffee text-white py-3 rounded-lg hover:bg-opacity-80 transition-colors">
              Choose Plan
            </button>
          </div>

        </div>

        <!-- Corporate Plans -->
        <div class="bg-gray-800 rounded-lg p-8 mb-12">
          <h2 class="text-2xl font-semibold text-center mb-6 text-coffee">Corporate Plans</h2>
          <div class="grid md:grid-cols-2 gap-8">
            <div>
              <h3 class="text-xl font-semibold mb-4 text-coffee">Office Coffee Service</h3>
              <p class="text-gray-300 mb-4">
                Keep your team energized with our office coffee delivery service. We provide 
                premium coffee, equipment, and maintenance for offices of all sizes.
              </p>
              <ul class="space-y-2 mb-6">
                <li class="flex items-center">
                  <span class="text-coffee mr-2">✓</span>
                  Weekly coffee delivery
                </li>
                <li class="flex items-center">
                  <span class="text-coffee mr-2">✓</span>
                  Professional equipment rental
                </li>
                <li class="flex items-center">
                  <span class="text-coffee mr-2">✓</span>
                  Training for office staff
                </li>
                <li class="flex items-center">
                  <span class="text-coffee mr-2">✓</span>
                  24/7 support hotline
                </li>
              </ul>
              <button class="bg-coffee text-white px-6 py-3 rounded-lg hover:bg-opacity-80 transition-colors">
                Get Quote
              </button>
            </div>
            <div>
              <h3 class="text-xl font-semibold mb-4 text-coffee">Event Catering</h3>
              <p class="text-gray-300 mb-4">
                Make your events memorable with our professional coffee catering service. 
                Perfect for conferences, meetings, and special occasions.
              </p>
              <ul class="space-y-2 mb-6">
                <li class="flex items-center">
                  <span class="text-coffee mr-2">✓</span>
                  Mobile coffee bar setup
                </li>
                <li class="flex items-center">
                  <span class="text-coffee mr-2">✓</span>
                  Professional barista service
                </li>
                <li class="flex items-center">
                  <span class="text-coffee mr-2">✓</span>
                  Custom menu options
                </li>
                <li class="flex items-center">
                  <span class="text-coffee mr-2">✓</span>
                  Full setup and cleanup
                </li>
              </ul>
              <button class="bg-coffee text-white px-6 py-3 rounded-lg hover:bg-opacity-80 transition-colors">
                Book Event
              </button>
            </div>
          </div>
        </div>

        <!-- FAQ Section -->
        <div class="bg-gray-800 rounded-lg p-8">
          <h2 class="text-2xl font-semibold text-center mb-6 text-coffee">Frequently Asked Questions</h2>
          <div class="space-y-6">
            <div>
              <h3 class="text-lg font-semibold mb-2 text-coffee">Can I change my plan anytime?</h3>
              <p class="text-gray-300">
                Yes! You can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.
              </p>
            </div>
            <div>
              <h3 class="text-lg font-semibold mb-2 text-coffee">Do unused benefits roll over?</h3>
              <p class="text-gray-300">
                Free drinks and food items reset each month and don't roll over. However, your discount percentage applies to all purchases.
              </p>
            </div>
            <div>
              <h3 class="text-lg font-semibold mb-2 text-coffee">Is there a contract commitment?</h3>
              <p class="text-gray-300">
                No contracts required! You can cancel your membership at any time with 30 days notice.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PlansPricing'
}
</script>