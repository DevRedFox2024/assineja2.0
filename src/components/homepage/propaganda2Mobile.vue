<!-- @format -->

<template>
  <v-main class="propaganda2-mobile d-flex">
    <v-container
      class="d-flex flex-column justify-space-between align-center text-center"
      style="height: 95vh; padding-top: 40px; padding-bottom: 40px">
      <h1 class="text-h6 text-md-h3 font-weight-bold">
        Conecte-se com velocidade, viva com liberdade
      </h1>

      <v-btn
        @click="handlewhatsapp"
        class="redfox-btn"
        color="#fff"
        style="
          font-weight: bold;
          border-radius: 10px;
          border: 1px solid #db0e35;
          color: #db0e35;
        "
        size="x-large"
        >ATIVAR REDFOX GAMER</v-btn
      >
    </v-container>
  </v-main>
</template>

<script setup>
const handlewhatsapp = () => {
  window.open(
    "https://api.whatsapp.com/send/?phone=5511986871731&text=Vim+do+site%2C+gostaria+de+saber+sobre+os+planos.&type=phone_number&app_absent=0"
  );
};
</script>

<style scoped>
.propaganda2-mobile {
  background-image: url("../../assets/propaganda2Mobile.webp");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;
  width: 100%;
}
</style>
