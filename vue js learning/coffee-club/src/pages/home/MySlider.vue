<template>
  <div
    class="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center p-8"
  >
    <div class="w-full max-w-7xl">
      <!-- ================= HEADER ================= -->
      <div class="mb-8 text-center">
        <h1 class="text-5xl font-bold text-white mb-4">Coffee Collection</h1>
        <p class="text-gray-400 text-lg">Explore our premium coffee selection</p>
      </div>

      <!-- ================= SLIDER ================= -->
      <div class="relative">
        <!-- Visible Area (shows exactly 4 cards) -->
        <div class="rounded-2xl overflow-hidden">
          <!-- Sliding Wrapper: we slide this left/right by percent values -->
          <div
            ref="sliderRef"
            class="flex transition-transform duration-500 ease-in-out"
            :style="{ transform: `translateX(${translateXPercent}%)` }"
            @transitionend="onSliderTransitionEnd"
          >
            <!-- Render 6 cards: [leftHidden, visible0, visible1, visible2, visible3, rightHidden] -->
            <div
              v-for="(card, index) in visibleCardItems"
              :key="`card-visible-${index}-${card.id}`"
              class="flex-shrink-0 px-3"
              :style="{ width: `${cardWidthPercent}%` }"
            >
              <div
                :class="[
                  'bg-gradient-to-br',
                  card.color,
                  'rounded-xl p-8 h-80 flex flex-col justify-between shadow-2xl hover:scale-105 transition-transform duration-300'
                ]"
              >
                <div>
                  <div class="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6 backdrop-blur-sm">
                    <span class="text-3xl">☕</span>
                  </div>

                  <h3 class="text-3xl font-bold text-white mb-3">{{ card.title }}</h3>
                  <p class="text-white/80 text-lg">{{ card.description }}</p>
                </div>

                <button class="bg-white/20 hover:bg-white/30 text-white font-semibold py-3 px-6 rounded-lg backdrop-blur-sm transition-all duration-300">
                  Explore
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- ================= NAVIGATION BUTTONS ================= -->
        <button
          @click="goToPrevious"
          :disabled="isAnimating"
          class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 bg-white p-4 rounded-full shadow-2xl hover:scale-110 transition disabled:opacity-50"
        >
          ◀
        </button>

        <button
          @click="goToNext"
          :disabled="isAnimating"
          class="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 bg-white p-4 rounded-full shadow-2xl hover:scale-110 transition disabled:opacity-50"
        >
          ▶
        </button>
      </div>

      <!-- ================= DOT INDICATORS ================= -->
      <div class="flex justify-center gap-2 mt-8">
        <button
          v-for="n in totalRealCards"
          :key="`dot-${n}`"
          @click="goToStartByDot(n - 1)"
          :class="[
            'transition-all duration-300',
            activeStartIndex === n - 1 ? 'bg-white w-4 h-2 rounded-full' : 'bg-gray-600 w-2 h-2 rounded-full'
          ]"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MySlider",

  data() {
    return {
      /* ---------------- REAL DATA ---------------- */
      cardsData: [
        { id: 1, title: "Espresso", color: "from-amber-900 to-amber-700", description: "Rich & Bold" },
        { id: 2, title: "Cappuccino", color: "from-orange-800 to-orange-600", description: "Creamy Delight" },
        { id: 3, title: "Latte", color: "from-yellow-700 to-yellow-500", description: "Smooth & Sweet" },
        { id: 4, title: "Americano", color: "from-stone-800 to-stone-600", description: "Classic Choice" },
        { id: 5, title: "Mocha", color: "from-brown-800 to-brown-600", description: "Chocolate Bliss" },
        { id: 6, title: "Macchiato", color: "from-amber-800 to-amber-600", description: "Strong & Pure" },
        { id: 7, title: "Flat White", color: "from-neutral-700 to-neutral-500", description: "Velvety Smooth" },
        { id: 8, title: "Cold Brew", color: "from-slate-800 to-slate-600", description: "Refreshing Chill" }
      ],

      /* ---------------- VIEW / SETTINGS ---------------- */
      numberOfVisibleCards: 4, // how many cards are fully visible in the viewport
      bufferOnEachSide: 1, // one hidden card left and one hidden card right
      visibleCardItems: [], // length = numberOfVisibleCards + bufferOnEachSide*2 (6)
      // translate percent applied to wrapper. initial: -cardWidthPercent so that index 1..4 are visible
      translateXPercent: 0,
      isAnimating: false,
      lastAction: null, // "next" | "previous" | null

      // logical index in cardsData that corresponds to the left-most VISIBLE card (center area)
      visibleStartIndex: 0,

      // index in cardsData that will be appended next when moving forward
      nextAppendIndex: 0
    };
  },

  computed: {
    /* single card width percent relative to container so 4 cards fully take 100% */
    cardWidthPercent() {
      return 100 / this.numberOfVisibleCards; // e.g., 25%
    },

    /* number of real slides in data */
    totalRealCards() {
      return this.cardsData.length;
    },

    /* active dot = which card is left-most visible among the center 4 */
    activeStartIndex() {
      return this.visibleStartIndex % this.totalRealCards;
    },

    /* total rendered cards count (visible + 2 buffers) */
    totalRenderedCards() {
      return this.numberOfVisibleCards + this.bufferOnEachSide * 2;
    }
  },

  created() {
    this.setupInitialRenderedCards();
  },

  methods: {
    /* Build initial rendered array:
       We want: [leftHidden, visible0, visible1, visible2, visible3, rightHidden]
       If visibleStartIndex = 0, leftHidden = last item in cardsData, rightHidden = item after visible range.
    */
    setupInitialRenderedCards() {
      const start = 0;
      this.visibleStartIndex = start;

      const items = [];
      // we iterate i = -buffer .. visibleCount+buffer-1
      for (let i = -this.bufferOnEachSide; i < this.numberOfVisibleCards + this.bufferOnEachSide; i++) {
        const idx = (start + i + this.totalRealCards) % this.totalRealCards;
        items.push({ ...this.cardsData[idx] });
      }

      this.visibleCardItems = items;

      // nextAppendIndex points to item right after the visible group:
      this.nextAppendIndex = (start + this.numberOfVisibleCards) % this.totalRealCards;

      // initial translate: shift left by one cardWidth so center 4 are visible
      this.translateXPercent = -this.cardWidthPercent;
    },

    /* Move to the next card:
       Animate LEFT by one card (to reveal the rightHidden card)
       After transition ends we will rotate data and reset translate back to -cardWidthPercent
    */
    goToNext() {
      if (this.isAnimating) return;
      this.isAnimating = true;
      this.lastAction = "next";

      // move left by one more card
      this.translateXPercent = -(this.cardWidthPercent * (this.bufferOnEachSide + 1));
    },

    /* Move to the previous card:
       Animate RIGHT by one card (to reveal the leftHidden card)
       After transition ends we rotate data backward and reset translate back to -cardWidthPercent
    */
    goToPrevious() {
      if (this.isAnimating) return;
      this.isAnimating = true;
      this.lastAction = "previous";

      // move right to 0 (since initial at -cardWidthPercent)
      this.translateXPercent = 0;
    },

    /* Click a dot to change the left-most visible card (center area) directly.
       We'll rebuild the rendered array around that requested start index.
    */
    goToStartByDot(startIndex) {
      if (this.isAnimating) return;

      // Rebuild rendered items centered on startIndex
      const items = [];
      for (let i = -this.bufferOnEachSide; i < this.numberOfVisibleCards + this.bufferOnEachSide; i++) {
        const idx = (startIndex + i + this.totalRealCards) % this.totalRealCards;
        items.push({ ...this.cardsData[idx] });
      }
      this.visibleCardItems = items;

      // update logical pointers
      this.visibleStartIndex = startIndex;
      this.nextAppendIndex = (startIndex + this.numberOfVisibleCards) % this.totalRealCards;

      // ensure wrapper positioned to show center 4 (no animation)
      const slider = this.$refs.sliderRef;
      if (slider) slider.style.transition = "none";
      this.translateXPercent = -this.cardWidthPercent;
      // force reflow then re-enable transition
      if (slider) void slider.offsetHeight;
      if (slider) slider.style.transition = "";
    },

    /* Transition end handler - rotate data depending on last action */
    onSliderTransitionEnd(event) {
      // only act on transform transition
      if (event && event.propertyName && event.propertyName !== "transform") return;

      const sliderEl = this.$refs.sliderRef;
      if (!sliderEl) {
        this.finishAnimation();
        return;
      }

      if (this.lastAction === "next") {
        // We moved left; the right hidden card has become visible at index (buffer+visible-1)
        // Rotate: remove first item (leftHidden) and append item at nextAppendIndex
        this.visibleCardItems.shift();

        // append nextAppendIndex item (circular)
        this.visibleCardItems.push({ ...this.cardsData[this.nextAppendIndex] });

        // advance logical visibleStartIndex and nextAppendIndex
        this.visibleStartIndex = (this.visibleStartIndex + 1) % this.totalRealCards;
        this.nextAppendIndex = (this.nextAppendIndex + 1) % this.totalRealCards;

        // reset translate to show center area (disable transition, set value, force reflow, re-enable)
        sliderEl.style.transition = "none";
        this.translateXPercent = -this.cardWidthPercent;
        void sliderEl.offsetHeight;
        sliderEl.style.transition = "";
      } else if (this.lastAction === "previous") {
        // We moved right; left hidden card slid into center area.
        // Rotate backward: remove last item (rightHidden) and prepend the item before current visibleStartIndex
        const indexToPrepend = (this.visibleStartIndex - 1 + this.totalRealCards) % this.totalRealCards;
        this.visibleCardItems.pop();
        this.visibleCardItems.unshift({ ...this.cardsData[indexToPrepend] });

        // update visibleStartIndex and nextAppendIndex
        this.visibleStartIndex = indexToPrepend;
        this.nextAppendIndex = (this.visibleStartIndex + this.numberOfVisibleCards) % this.totalRealCards;

        // reset translate to center area
        sliderEl.style.transition = "none";
        this.translateXPercent = -this.cardWidthPercent;
        void sliderEl.offsetHeight;
        sliderEl.style.transition = "";
      }

      this.finishAnimation();
    },

    finishAnimation() {
      this.isAnimating = false;
      this.lastAction = null;
    }
  }
};
</script>

<style scoped>
/* Each card's width is a percent of the container so 4 cards fill 100% width.
   We render 6 cards, so wrapper's width naturally becomes 150% (6 * 25%) and translateX shifts.
*/
.overflow-hidden {
  overflow: hidden;
}
</style>
