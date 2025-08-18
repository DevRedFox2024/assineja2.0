<!-- @format -->

<template>
  <v-main
    v-if="currentWidth > 1024"
    style="
      background: linear-gradient(to right, #a40b28, #db0e35, #a40b28);
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1001;
    "
    class="d-flex align-center justify-center">
    <v-container class="fill-height">
      <v-row class="d-flex align-center justify-space-between">
        <v-col cols="2">
          <router-link to="/">
            <v-img width="180" :src="logo" />
          </router-link>
        </v-col>
        <v-col cols="auto" class="d-flex align-center justify-flex-end">
          <v-btn
            color="#db0e35"
            @click="handlelead"
            class="botao"
            text="Assine já"></v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-main>

  <v-app-bar v-else style="background-color: #a40b28">
    <v-container>
      <v-row class="d-flex align-center justify-space-between ma-0">
        <v-col cols="auto" class="pa-0">
          <router-link to="/">
            <v-img width="120" max-width="120" :src="logo" />
          </router-link>
        </v-col>
        <v-col cols="auto" class="pa-0">
          <v-btn
            color="#fff"
            @click="handlelead"
            class="botao-mobile"
            text="Assine já"></v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<style scoped>
.botao {
  font-weight: bold !important;
  font-family: "Bebas Neue", cursive !important;
  font-size: 1.5rem;
  height: auto;
  min-height: 40px;
  background-color: #db0e35 !important;
  max-height: 45px;
  width: auto;
  min-width: 160px;
  max-width: 161px;
  border: 1px solid #fff !important;
  box-shadow: #fff 0px 0px 8px 2px !important;
  border-radius: 32px;
}

.botao-mobile {
  font-weight: bold !important;
  font-family: "Bebas Neue", cursive !important;
  font-size: 1rem;
  height: 35px;
  color: #db0e35 !important;
  min-width: 120px;
  background-color: #fff !important;
  box-shadow: #db0e35 0px 0px 5px 1px !important;
  border-radius: 32px;
}
</style>

<script setup>
import logo from "../../assets/logo.png";
import { ref, onMounted, onUnmounted } from "vue";

const currentWidth = ref(window.innerWidth);
const handlelead = () => {
  window.open(
    "https://api.whatsapp.com/send/?phone=5511986871731&text=Vim+do+site%2C+gostaria+de+saber+sobre+os+planos.&type=phone_number&app_absent=0",
    "_blank"
  );
};
onMounted(() => {
  window.addEventListener("resize", () => {
    currentWidth.value = window.innerWidth;
  });
});

onUnmounted(() => {
  window.removeEventListener("resize", () => {
    currentWidth.value = window.innerWidth;
  });
});
</script>
