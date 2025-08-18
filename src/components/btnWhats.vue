<!-- @format -->

<script setup>
const whatshandle = () => {
  window.open(
    "https://api.whatsapp.com/send?phone=551124842656&text=Ol%C3%A1,%20Redfox!"
  );
};
</script>
<template>
  <v-container
    @click="whatshandle"
    class="social-float2 d-flex align-end justify-end">
    <v-row class="d-flex align-center pa-2 justify-end" style="gap: 1rem">
      <p>Chame no Whatsapp</p>
      <v-icon class="icon pulse">mdi-whatsapp</v-icon>
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
}

.pulse {
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(14, 219, 106, 0.7);
  }
  70% {
    transform: scale(1.05);
    box-shadow: 0 0 0 10px rgba(14, 219, 106, 0);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(14, 219, 106, 0);
  }
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
