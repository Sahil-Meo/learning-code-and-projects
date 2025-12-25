<script setup></script>

<template>
  <Navbar />
  <!-- <HeroSection /> -->
  <Home />
</template>

<script>
import Navbar from './components/Navbar/Navbar.vue';
import HeroSection from './pages/home/HeroSection.vue';
import Home from './pages/home/Home.vue';
export default {
  name: "App",
  components: {
    Navbar,
    Home,
    HeroSection
  },

}

</script>

<style scoped></style>
