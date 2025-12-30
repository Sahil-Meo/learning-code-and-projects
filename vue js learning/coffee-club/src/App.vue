<script setup></script>

<template>
  <Navbar />
  <router-view />
  <Footer />
</template>

<script>
import Navbar from './components/Navbar/Navbar.vue';
import Footer from './components/Footer.vue';

export default {
  name: "App",
  components: {
    Navbar,
    Footer
  }
}
</script>

<style scoped></style>
