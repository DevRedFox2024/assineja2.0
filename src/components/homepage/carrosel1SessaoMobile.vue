<!-- @format -->

<template>
  <v-main class="carouselMobile">
    <transition name="fade" mode="out-in">
      <component :is="banners[currentBanner]" :key="currentBanner" />
    </transition>
  </v-main>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import Propaganda1Mobile from "./propaganda1Mobile.vue";
import Propaganda2Mobile from "./propaganda2Mobile.vue";

const banners = [Propaganda1Mobile, Propaganda2Mobile];
const currentBanner = ref(0);
let intervalId = null;

onMounted(() => {
  intervalId = setInterval(() => {
    currentBanner.value = (currentBanner.value + 1) % banners.length;
  }, 7000);
});

onUnmounted(() => {
  if (intervalId) clearInterval(intervalId);
});
</script>

<style scoped></style>
