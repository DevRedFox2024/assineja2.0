<!-- @format -->

<script setup>
const whatshandle = () => {
  window.open(
    "https://api.whatsapp.com/send/?phone=5511986871731&text=Vim+do+site%2C+gostaria+de+saber+sobre+os+planos.&type=phone_number&app_absent=0"
  );
};
</script>

<template>
  <v-container
    @click="whatshandle"
    class="social-float2 d-flex align-end justify-end">
    <v-row class="d-flex align-center pa-2 justify-end" style="gap: 1rem">
      <v-icon class="icon pulse-animation">mdi-whatsapp</v-icon>
    </v-row>
  </v-container>
</template>

<style scoped>
.icon {
  color: #fff;
  font-size: 40px;
  cursor: pointer;
  background-color: #0edb6a;
  border-radius: 32px;
  padding: 25px;
  box-shadow: 0 0 0 rgba(14, 219, 106, 0.7);
  animation: pulse 2s infinite;
}

.social-float2 {
  position: fixed;
  bottom: 120px;
  right: 20px;
  cursor: pointer;
  z-index: 999;
  transition: all 0.3s ease;
  width: auto;
}

.social-float2:hover {
  transform: scale(1.1);
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(14, 219, 106, 0.7);
  }
  70% {
    box-shadow: 0 0 0 15px rgba(14, 219, 106, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(14, 219, 106, 0);
  }
}

.pulse-animation {
  animation: pulse 2s infinite;
}

p {
  color: #000;
  font-size: 1rem;
  height: 30px;
  width: auto;
  padding: 10px;
  border-radius: 8px;
  align-items: center;
  display: flex;
  justify-content: center;
  background-color: #dfdfdf;
  font-weight: 400;
}
</style>
