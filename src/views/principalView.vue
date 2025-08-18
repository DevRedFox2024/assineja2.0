<!-- @format -->

<template>
  <div v-if="windowWidth > 1024">
    <Header />
    <Carrosel1Sessao />
    <BtnWhats />
    <RedfoxSection3 />
    <RedFoxCarrosel5 />
    <Carrosel2propaganda />
    <RedfoxSeusAplicativos3 />
    <Mapa />
    <Footer />
  </div>
  <div v-else>
    <Header />
  </div>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import Header from "../components/infomacao/header.vue";
import Carrosel1Sessao from "../components/homepage/carrosel1Sessao.vue";
import BtnWhats from "../components/btnWhats.vue";
import RedfoxSection3 from "../components/homepage/RedfoxSection3.vue";
import RedFoxCarrosel5 from "../components/homepage/RedFoxCarrosel5.vue";
import Carrosel2propaganda from "../components/homepage/carrosel2propaganda.vue";
import RedfoxSeusAplicativos3 from "../components/homepage/RedfoxSeusAplicativos3.vue";
import Footer from "../components/infomacao/footer.vue";
import Mapa from "../components/homepage/Mapa.vue";

const windowWidth = ref(window.innerWidth);

onMounted(() => {
  window.addEventListener("resize", () => {
    windowWidth.value = window.innerWidth;
  });
});

onUnmounted(() => {
  window.removeEventListener("resize", () => {
    windowWidth.value = window.innerWidth;
  });
});
</script>
<style scoped></style>
