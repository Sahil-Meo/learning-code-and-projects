<!-- TiktokIcon.vue -->
<template>
     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
          class="lucide lucide-tiktok-icon lucide-tiktok" :class="iconClass">
          <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/>
     </svg>
</template>

<script>
export default {
     name: "TiktokIcon",
     props: {
          iconClass: {
               type: String,
               default: "w-5 h-5 text-coffee",
          },
     },
};
</script>