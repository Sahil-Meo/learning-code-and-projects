<template>
  <div :class="addClass" class="w-[25%] flex-shrink-0 px-2">
    <div class="flex flex-col items-center space-y-2 sm:space-y-3 bg-sec rounded-xl p-8 box-border">
      <img class="h-14" :src="category.image" alt="Coffee Mug">
      <h3 class="text-xl text-white font-medium text-center">
        {{ category.title }}
      </h3>
      <p class="text-base text-white text-center">
        {{ category.description }}
      </p>
    </div>
  </div>
</template>

<script>
import coffeeCup from '/public/images/coffee_cup.png'

export default {
  name: "CoffeeCatCard",
  props: {
    addClass: { type: String },
    category: {
      type: Object,
      default: () => ({
        image: coffeeCup,
        title: "Coffee Club",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
      })
    }
  }
}
</script>
