<!-- @format -->

<template>
  <v-main>
    <v-carousel hide-delimiters height="auto">
      <v-carousel-item>
        <v-img :src="max" cover height="auto"></v-img>
      </v-carousel-item>
      <v-carousel-item>
        <v-img :src="deezer" cover height="auto"></v-img>
      </v-carousel-item>
      <v-carousel-item>
        <v-img :src="sky" cover height="auto"></v-img>
      </v-carousel-item>
      <v-carousel-item>
        <v-img :src="playkids" cover height="auto"></v-img>
      </v-carousel-item>
      <v-carousel-item>
        <v-img :src="exitlag" cover height="auto"></v-img>
      </v-carousel-item>
      <v-carousel-item>
        <v-img :src="itTv" cover height="auto"></v-img>
      </v-carousel-item>
      <v-carousel-item>
        <v-img :src="looke" cover height="auto"></v-img>
      </v-carousel-item>
      <v-carousel-item>
        <v-img :src="disney" cover height="auto"></v-img>
      </v-carousel-item>
    </v-carousel>
  </v-main>
</template>

<script setup>
import max from "../../assets/max.webp";
import deezer from "../../assets/deezer.webp";
import sky from "../../assets/sky.webp";
import playkids from "../../assets/plpaykids.webp";
import exitlag from "../../assets/exitlag.webp";
import itTv from "../../assets/itTvv.webp";
import looke from "../../assets/looke.webp";
import disney from "../../assets/disney.webp";
</script>
