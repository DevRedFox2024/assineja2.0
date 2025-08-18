<!-- @format -->

<template>
  <v-app class="container-app1" id="app1">
    <v-container
      class="container-centralizado"
      style="height: 100vh; display: flex; max-width: 94% !important">
      <v-row style="align-items: center">
        <v-col cols="12" md="4" lg="8" style="padding-left: 0; height: auto">
          <h1 style="text-align: left">
            Conecte-se com <br />
            velocidade, viva com <br />
            liberdade
          </h1>
          <br />
          <p style="text-align: left">
            Não é só sobre internet — é sobre <br />
            estar presente, sem interrupções, <br />
            nos momentos que você não quer <br />
            perder.
          </p>
          <br />
          <v-row style="margin-left: 0; margin-right: 0">
            <v-col cols="auto" style="padding: 8px">
              <v-btn
                @click="handlewhatsapp"
                class="redfox-btn"
                color="#db0e35"
                style="font-weight: bold; color: #fff; border: #fff solid 1px"
                dark
                large
                depressed>
                QUERO SER REDFOX
              </v-btn>
            </v-col>
            <v-col cols="auto" style="padding: 8px">
              <v-btn
                class="redfox-btn"
                color="#fff"
                style="
                  font-weight: bold;
                  color: #db0e35;
                  border: #db0e35 solid 1px;
                "
                dark
                large>
                {{ countdownText }}
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
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
    "https://api.whatsapp.com/send?phone=551124842656&text=Ol%C3%A1,%20Redfox!"
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
  background-image: url("../../assets/testebanner1.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: auto;
  /* min-height: 80vh !important; */
  min-height: 118vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding: 2rem;
}

.v-container {
  padding-bottom: 1vh;
}

.redfox-btn {
  width: 100%;
  max-width: 210px;
}

.v-col {
  padding-left: 0;
  padding-right: 0;
}

@media (min-width: 1024px) and (max-width: 1355px) {
  h1 {
    font-size: 2rem;
  }
}

/* @media (min-width: 1024px) and (max-width: 1280px) {
  .propaganda2 {
    height: auto;
    min-height: 100vh !important;
  }
  .container-centralizado {
    height: auto;
    min-height: 120vh !important;
  }
} */
</style>
