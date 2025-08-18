<!-- @format -->

<script setup>
import Mapa from "./mapaLojas.vue";
</script>
<template>
  <v-main
    style="background-color: #000; min-height: 100vh"
    class="d-flex align-center justify-center">
    <v-container class="d-flex flex-column align-center justify-center">
      <v-col cols="auto" class="text-center d-flex flex-column align-center">
        <h1 class="text-h5 font-weight-bold mb-4">
          Consulte agora nossa cobertura e prepare-se para navegar com qualidade
        </h1>
        <p class="text-body-2 font-weight-regular mb-6">
          Estamos em constante expansão para levar a melhor conexão até você.
        </p>
        <Mapa />
      </v-col>
    </v-container>
  </v-main>
</template>
<style scoped></style>
