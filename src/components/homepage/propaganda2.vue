<!-- @format -->

<template>
  <v-main class="propaganda2">
    <v-container style="max-width: 92%" class="d-flex align-center">
      <v-row>
        <v-col>
          <p>
            RedFox <span style="color: #db0e35; font-weight: bold">Gamer</span>
          </p>
          <br />
          <h1 :class="titleClass" style="font-weight: bold">
            Gamer de Verdade Usa <br />
            RedFox — Ultra Velocidade e <br />
            Ping Baixo!
          </h1>
          <br />
          <h3 :class="paragraphClass">
            Internet pensada para quem vive <br />
            o mundo gamer todos os dias.
          </h3>
          <br />
          <v-btn
            @click="handlewhatsapp"
            class="redfox-btn"
            color="#db0e35"
            dark>
            QUERO MEU REDFOX GAMER
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>
<style scoped>
.redfox-btn {
  background-color: #db0e35 !important;
  font-weight: 700 !important;
  font-family: "Bebas Neue", sans-serif !important;
  font-size: 1.5rem !important;
  line-height: 1 !important;
  letter-spacing: 1.5px !important;
  color: white !important;
  text-transform: uppercase !important;
  border-radius: 8px !important;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3) !important;
  transition: all 0.3s ease !important;
  padding: 0 32px !important;
}

.redfox-btn:hover {
  transform: translateY(-3px) !important;
  box-shadow: 0 8px 20px rgba(219, 14, 53, 0.5) !important;
}
.propaganda2 {
  background-image: url("../../assets/propagandateste22.webp");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  height: auto;
  min-height: 118vh;
  width: 100%;
}
@media (min-width: 1024px) and (max-width: 1280px) {
  .propaganda2 {
    height: 160vh;
  }
}
</style>
<script setup>
import { computed } from "vue";
import { useDisplay } from "vuetify";

const { xs, sm, md, lg, xl } = useDisplay();

const titleClass = computed(() => {
  if (xl.value || lg.value) return "text-h3";
  if (md.value) return "text-h3";
  if (sm.value) return "text-h4";
  return "text-h3";
});

const paragraphClass = computed(() => {
  if (xl.value || lg.value) return "text-h4";
  if (md.value) return "text-body-1";
  if (sm.value) return "text-body-2";
  return "text-body-2";
});

const handlewhatsapp = () => {
  window.open(
    "https://api.whatsapp.com/send/?phone=5511986871731&text=Vim+do+site%2C+gostaria+de+saber+sobre+os+planos.&type=phone_number&app_absent=0"
  );
};
</script>
