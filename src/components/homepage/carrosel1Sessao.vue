<!-- @format -->

<template>
  <v-main class="carousel">
    <transition name="fade" mode="out-in">
      <component :is="banners[currentBanner]" :key="currentBanner" />
    </transition>
  </v-main>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import Propaganda1 from "./propaganda1.vue";
import Propaganda2 from "./propaganda2.vue";

const banners = [Propaganda1, Propaganda2];
const currentBanner = ref(0);
let intervalId = null;

onMounted(() => {
  intervalId = setInterval(() => {
    currentBanner.value = (currentBanner.value + 1) % banners.length;
  }, 5000);
});

onUnmounted(() => {
  if (intervalId) clearInterval(intervalId);
});
</script>

<style scoped>
.carousel {
  position: relative;
  width: 100%;
  min-height: 70vh;
  overflow: hidden;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media (max-width: 1024px) {
  .carousel {
    min-height: 32vh;
  }
}
@media (max-width: 767px) {
  .carousel {
    min-height: 40vh;
  }
}
@media (max-width: 480px) {
  .carousel {
    min-height: 30vh;
  }
}
</style>
