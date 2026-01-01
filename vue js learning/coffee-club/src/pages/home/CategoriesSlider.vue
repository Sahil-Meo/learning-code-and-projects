<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center p-8">
    <div class="w-full max-w-7xl">
      <!-- Header -->
      <div class="mb-8 text-center">
        <h1 class="text-5xl font-bold text-white mb-4">
          Coffee Collection
        </h1>
        <p class="text-gray-400 text-lg">
          Explore our premium coffee selection
        </p>
      </div>

      <!-- Slider Container -->
      <div class="relative">
        <!-- Overflow Container - Only shows 4 cards -->
        <div class="overflow-hidden rounded-2xl">
          <!-- Cards Wrapper - This moves left/right -->
          <div ref="sliderRef" class="flex transition-transform duration-500 ease-in-out"
            :style="{ transform: `translateX(${translateValue}%)` }" @transitionend="handleTransitionEnd">
            <div v-for="(card, index) in clonedCards" :key="`${card.id}-${index}`" class="flex-shrink-0 px-3"
              :style="{ width: `${cardWidth}%` }">
              <div
                :class="['bg-gradient-to-br', card.color, 'rounded-xl p-8 h-80 flex flex-col justify-between shadow-2xl hover:scale-105 transition-transform duration-300']">
                <div>
                  <div
                    class="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6 backdrop-blur-sm">
                    <span class="text-3xl">☕</span>
                  </div>
                  <h3 class="text-3xl font-bold text-white mb-3">
                    {{ card.title }}
                  </h3>
                  <p class="text-white/80 text-lg">
                    {{ card.description }}
                  </p>
                </div>
                <button
                  class="bg-white/20 hover:bg-white/30 text-white font-semibold py-3 px-6 rounded-lg backdrop-blur-sm transition-all duration-300">
                  Explore
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Navigation Buttons -->
        <button @click="handlePrevious" :disabled="isTransitioning"
          class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 bg-white hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed text-gray-900 p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110"
          aria-label="Previous">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>

        <button @click="handleNext" :disabled="isTransitioning"
          class="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 bg-white hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed text-gray-900 p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110"
          aria-label="Next">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>

      <!-- Indicator Dots -->
      <div class="flex justify-center gap-2 mt-8">
        <div v-for="(card, index) in cardsData" :key="index" :class="[
          'w-2 h-2 rounded-full transition-all duration-300',
          getCurrentDotIndex === index ? 'bg-white w-8' : 'bg-gray-600'
        ]" />
      </div>

      <!-- Info Box -->
      <div class="mt-12 bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 text-gray-300">
        <h3 class="text-xl font-bold text-white mb-3">🎯 How Infinite Looping Works:</h3>
        <ul class="space-y-2 text-sm leading-relaxed">
          <li><strong class="text-white">1. Clone Cards:</strong> The last 4 cards are cloned at the start, and the
            first 4 cards are cloned at the end.</li>
          <li><strong class="text-white">2. Visual Trick:</strong> When you slide to a clone, it looks identical to the
            real card.</li>
          <li><strong class="text-white">3. Instant Jump:</strong> After the transition ends, the slider instantly jumps
            to the real card position (no transition).</li>
          <li><strong class="text-white">4. Seamless Loop:</strong> Because the clone and real card look the same, the
            jump is invisible to the user.</li>
          <li><strong class="text-white">5. Result:</strong> Infinite scrolling in both directions with smooth
            animations!</li>
        </ul>
        <div class="mt-4 p-4 bg-gray-700/50 rounded-lg">
          <p class="text-xs text-gray-400">
            <strong>Technical:</strong> Total cards in DOM: 16 (4 clones + 8 real + 4 clones) |
            Visible: 4 cards | Movement: translateX() | Current Index: {{ currentIndex }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SliderFile',
  data() {
    return {
      // Original 8 cards data
      cardsData: [
        { id: 1, title: 'Espresso', color: 'from-amber-900 to-amber-700', description: 'Rich & Bold ' },
        { id: 2, title: 'Cappuccino', color: 'from-orange-800 to-orange-600', description: 'Creamy Delight ' },
        { id: 3, title: 'Latte', color: 'from-yellow-700 to-yellow-500', description: 'Smooth & Sweet' },
        { id: 4, title: 'Americano', color: 'from-stone-800 to-stone-600', description: 'Classic Choice' },
        { id: 5, title: 'Mocha', color: 'from-brown-800 to-brown-600', description: 'Chocolate Bliss' },
        { id: 6, title: 'Macchiato', color: 'from-amber-800 to-amber-600', description: 'Strong & Pure' },
        { id: 7, title: 'Flat White', color: 'from-neutral-700 to-neutral-500', description: 'Velvety Smooth' },
        { id: 8, title: 'Cold Brew', color: 'from-slate-800 to-slate-600', description: 'Refreshing Chill' }
      ],
      currentIndex: 4, // Start after the first 4 clones
      isTransitioning: false,
      cardWidth: 25 // 25% width per card (4 cards visible = 100% / 4)
    }
  },
  computed: {
    // Create cloned cards array for infinite loop
    clonedCards() {
      // Clone last 4 cards at the start
      const endClones = this.cardsData.slice(-4).map((card, i) => ({
        ...card,
        id: `clone-end-${i}`
      }));

      // Clone first 4 cards at the end
      const startClones = this.cardsData.slice(0, 4).map((card, i) => ({
        ...card,
        id: `clone-start-${i}`
      }));

      // Return: [last 4 clones] + [8 real cards] + [first 4 clones]
      return [...endClones, ...this.cardsData, ...startClones];
    },

    // Calculate the translateX value
    translateValue() {
      return -(this.currentIndex * this.cardWidth);
    },

    // Calculate which dot should be active
    getCurrentDotIndex() {
      return Math.floor((this.currentIndex - 4 + this.cardsData.length) % this.cardsData.length);
    }
  },
  methods: {
    // Handle Next button click
    handleNext() {
      if (this.isTransitioning) return;
      this.isTransitioning = true;
      this.currentIndex++;
    },

    // Handle Previous button click
    handlePrevious() {
      if (this.isTransitioning) return;
      this.isTransitioning = true;
      this.currentIndex--;
    },

    // Handle transition end - This is where the infinite loop magic happens!
    handleTransitionEnd() {
      this.isTransitioning = false;
      const slider = this.$refs.sliderRef;

      // If we've scrolled to the END clones (beyond the real cards)
      // Jump back to the start of the real cards
      if (this.currentIndex >= this.cardsData.length + 4) {
        slider.style.transition = 'none'; // Disable transition for instant jump
        this.currentIndex = 4; // Jump to first real card
        // Force browser reflow to apply the instant position change
        slider.offsetHeight;
        // Re-enable transition for next animation
        slider.style.transition = 'transform 0.5s ease-in-out';
      }

      // If we've scrolled to the START clones (before the real cards)
      // Jump forward to the end of the real cards
      if (this.currentIndex <= 3) {
        slider.style.transition = 'none'; // Disable transition for instant jump
        this.currentIndex = this.cardsData.length + 3; // Jump to last real card
        // Force browser reflow
        slider.offsetHeight;
        // Re-enable transition
        slider.style.transition = 'transform 0.5s ease-in-out';
      }
    }
  }
}
</script>

<style scoped>
/* Ensure Tailwind gradients work properly */
.bg-gradient-to-br {
  background-image: linear-gradient(to bottom right, var(--tw-gradient-stops));
}

/* Smooth transitions */
.transition-transform {
  transition-property: transform;
  transition-timing-function: ease-in-out;
}

/* Hide scrollbar if any appears */
.overflow-hidden {
  overflow: hidden;
}
</style>