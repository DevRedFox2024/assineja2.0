<!-- @format -->

<template>
  <v-main>
    <v-carousel hide-delimiters height="auto" max-height="80vh">
      <v-carousel-item>
        <v-img :src="bannerDisney" cover height="100%"></v-img>
      </v-carousel-item>
      <v-carousel-item>
        <v-img :src="bannerMax" cover height="65vh"></v-img>
      </v-carousel-item>
    </v-carousel>
  </v-main>
</template>

<script setup>
import bannerDisney from "../../assets/bannerDisney.webp";
import bannerMax from "../../assets/maxbanner.webp";
</script>
