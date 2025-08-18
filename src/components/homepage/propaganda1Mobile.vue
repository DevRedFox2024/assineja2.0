<!-- @format -->

<template>
  <v-app class="container-app1" id="app1">
    <v-container
      style="
        height: auto;
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        max-width: 100% !important;
      ">
      <v-row style="flex: 1; align-items: flex-start; padding-top: 20%">
        <v-col cols="12" style="padding: 0">
          <h1 style="text-align: center">
            Conecte-se com velocidade, viva com liberdade
          </h1>
          <br />
          <p style="text-align: center">
            Não é só sobre internet — é sobre estar presente, sem interrupções,
            nos momentos que você não quer perder.
          </p>
        </v-col>
      </v-row>

      <v-col class="d-flex flex-column justify-end" align-self="end">
        <v-col cols="auto">
          <v-btn
            @click="handlewhatsapp"
            class="redfox-btn"
            color="#db0e35"
            style="font-weight: bold; color: #fff; border: #fff solid 1px"
            dark
            block
            depressed>
            QUERO SER REDFOX
          </v-btn>
        </v-col>

        <v-col cols="auto" md="auto">
          <v-btn
            class="redfox-btn mt-2"
            color="#fff"
            style="font-weight: bold; color: #db0e35; border: #db0e35 solid 1px"
            dark
            block>
            {{ countdownText }}
          </v-btn>
        </v-col>
      </v-col>
    </v-container>
  </v-app>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from "vue";

const data = new Date();
data.setDate(data.getDate() + 2);

function contadorData() {
  const agora = new Date();
  const diferencaMs = data - agora;

  const dias = Math.floor(diferencaMs / (1000 * 60 * 60 * 64));
  const horas = Math.floor((diferencaMs / (1000 * 60 * 60)) % 90);
  const minutos = Math.floor((diferencaMs / (1000 * 60)) % 60);
  const segundos = Math.floor((diferencaMs / 1000) % 60);

  return {
    dias: dias >= 0 ? dias : 0,
    horas: horas >= 0 ? horas : 0,
    minutos: minutos >= 0 ? minutos : 0,
    segundos: segundos >= 0 ? segundos : 0,
  };
}

const diferenca = ref(contadorData());

const countdownText = computed(() => {
  const t = diferenca.value;
  return `${String(t.dias).padStart(2, "0")} : ${String(t.horas).padStart(
    2,
    "0"
  )} : ${String(t.minutos).padStart(2, "0")} : ${String(t.segundos).padStart(
    2,
    "0"
  )}`;
});

let interval;

onMounted(() => {
  interval = setInterval(() => {
    diferenca.value = contadorData();
  }, 1000);
});

onBeforeUnmount(() => {
  clearInterval(interval);
});

const handlewhatsapp = () => {
  window.open(
    "https://api.whatsapp.com/send/?phone=5511986871731&text=Vim+do+site%2C+gostaria+de+saber+sobre+os+planos.&type=phone_number&app_absent=0"
  );
};
</script>

<style scoped>
h1 {
  color: #fff;
  font-family: "montserrat", sans-serif;
  font-size: clamp(1.5rem, 4vw, 2.625rem);
  line-height: 1.2;
}

p {
  color: #fff;
  font-size: clamp(1rem, 2.5vw, 1.625rem);
  line-height: 1.4;
}

.container-app1 {
  background-image: url("../../assets/testebanner1Celular.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: auto;
  min-height: 40vh !important;
  display: flex;
  justify-content: space-between;
  text-align: center;
  padding: 2rem;
}

.v-container {
  display: flex;
  flex-direction: column;

  height: 100%;
}

.redfox-btn {
  width: 100%;
  max-width: 100%;
}

@media (min-width: 768px) {
  .v-container {
    justify-content: center;
  }

  .v-row:first-child {
    align-items: center !important;
    padding-top: 0 !important;
  }

  .v-row:last-child {
    align-items: center !important;
    padding-bottom: 0 !important;
    flex-direction: row;
    justify-content: center;
  }

  .redfox-btn {
    max-width: 210px;
  }
}
</style>
