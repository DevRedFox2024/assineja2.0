<!-- @format -->

<template>
  <v-main class="black-fundo">
    <v-container class="d-flex justify-center py-16">
      <v-col
        cols="12"
        md="12"
        class="d-flex justify-center align-center flex-column">
        <h1 style="text-align: center" :style="titleClass">
          Confira abaixo nossa localização no mapa e venha nos visitar!
        </h1>
        <MapaLojas />
      </v-col>
    </v-container>
  </v-main>
</template>

<style scoped>
.black-fundo {
  background: linear-gradient(to bottom, #000, #141414);
  display: flex;
  align-items: center;
  justify-content: center;
  height: auto;
  min-height: 100vh;
  padding: 80px 0;
}
</style>

<script setup>
import MapaLojas from "./mapaLojas.vue";
import { useDisplay } from "vuetify";
import { computed } from "vue";

const display = useDisplay();

const titleClass = computed(() => ({
  "text-h4": true,
  "text-md-h5": display.md.value,
  "text-lg-h2": display.lg.value,
  "text-xl-h2": display.xl.value,
  "font-weight-bold": true,
  "text-center": true,
  "mb-8": true,
  "px-4": true,
}));
</script>
