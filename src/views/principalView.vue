<!-- @format -->

<template>
  <div v-if="windowWidth > 1024">
    <Header />
    <Carrosel1Sessao />
    <BtnWhats />
    <RedfoxSection3 />
    <RedFoxCarrosel5 />
    <RedfoxSeusAplicativos3 />
    <Mapa />
    <Footer />
  </div>
  <div v-else>
    <Header />
    <Carrosel1SessaoMobile />
    <BtnWhatsCelular />
    <RedfoxSection3Mobile />
    <SessaoAplicativosMobile />
    <SeessaoSobrenos4Mobile />
    <Footer_alternativo_red />
    <FooterCelular />
  </div>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import Header from "../components/infomacao/header.vue";
import Carrosel1Sessao from "../components/homepage/carrosel1Sessao.vue";
import BtnWhats from "../components/btnWhats.vue";
import RedfoxSection3 from "../components/homepage/RedfoxSection3.vue";
import RedFoxCarrosel5 from "../components/homepage/RedFoxCarrosel5.vue";

import RedfoxSeusAplicativos3 from "../components/homepage/RedfoxSeusAplicativos3.vue";
import Footer from "../components/infomacao/footer.vue";
import Mapa from "../components/homepage/Mapa.vue";
import Carrosel1SessaoMobile from "../components/homepage/carrosel1SessaoMobile.vue";
import RedfoxSection3Mobile from "../components/homepage/RedfoxSection3Mobile.vue";
import SessaoAplicativosMobile from "../components/homepage/SessaoAplicativosMobile.vue";
import SeessaoSobrenos4Mobile from "../components/homepage/seessaoSobrenos4Mobile.vue";
import Footer_alternativo_red from "../components/infomacao/footer_alternativo_red.vue";
import FooterCelular from "../components/infomacao/footerCelular.vue";
import BtnWhatsCelular from "../components/btnWhatsCelular.vue";

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
