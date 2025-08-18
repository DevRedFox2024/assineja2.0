<!-- @format -->

<template>
  <v-main style="height: auto">
    <v-container
      :class="{ 'container-lg': true, 'container-xl': $vuetify.display.xl }">
      <v-row align="center" justify="center">
        <v-col
          class="text-left"
          cols="12"
          md="6"
          lg="5"
          xl="5"
          order="2"
          order-md="1">
          <h1 :class="titleClass" style="font-weight: 800">
            Novo APP Meu <span style="color: #db0e35">RedFox</span>
            <span style="color: #db0e35"> Movel</span>
          </h1>
          <br />
          <p style="color: #cccbcb" :class="textClass">
            Controle total da sua internet na palma da <br />
            mão mais leve, mais ágil e feito pra você!
          </p>
          <p style="color: #cccbcb" :class="textClass">
            Agora ficou fácil fazer suas recargas, <br />
            consultar consumo, conferir benefícios <br />
            e muito mais
          </p>

          <div class="d-flex align-start mt-4 button-container">
            <v-btn @click="handlewhatsapp" class="botao1 mr-2">
              ASSINE JÁ
            </v-btn>
            <v-btn @click="linktri" class="botao2" outlined>BAIXAR APP</v-btn>
          </div>
        </v-col>

        <v-col
          cols="12"
          md="6"
          lg="7"
          xl="7"
          order="1"
          order-md="2"
          class="d-flex justify-center justify-md-end image-col">
          <v-img :class="imageClass" :src="photoRedfox" contain></v-img>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script setup>
import photoRedfox from "../../assets/photoRedfox.webp";
import { computed } from "vue";
import { useDisplay } from "vuetify";

const { lg, xl } = useDisplay();

const titleClass = computed(() => ({
  "text-h4": true,
  "text-md-h4": true,
  "text-lg-h2": lg.value,
  "text-xl-h3": xl.value,
  "font-weight-800": true,
}));

const textClass = computed(() => ({
  "text-h7": true,
  "text-lg-h6": lg.value,
  "text-xl-h5": xl.value,
}));

const imageClass = computed(() => ({
  "max-width-100": true,
  "width-80": true,
  "width-lg-90": lg.value,
  "width-xl-100": xl.value,
}));

const handlewhatsapp = () => {
  window.open(
    "https://api.whatsapp.com/send?phone=551124842656&text=Ol%C3%A1,%20Redfox!",
    "_blank"
  );
};

const linktri = () => {
  window.open("https://linktr.ee/RedfoxMovel_", "_blank");
};
</script>

<style scoped>
.container-lg {
  width: 80%;
}

.container-xl {
  width: 70%;
}

.botao1,
.botao2 {
  font-family: "Bebas Neue", cursive;
  font-size: 1.5rem;
  height: 50px;
  width: auto;
  min-width: 25%;
  padding: 10px;
  transition: all 0.2s ease;
  border-radius: 32px;
}

.botao1 {
  background-color: #db0e35;
  color: #fff;
  border: 1px solid #fff;
}
.botao1:hover {
  background-color: #fff;
  color: #db0e35;
  border: 1px solid #db0e35;
}
.botao2 {
  background-color: #fff;
  color: #db0e35;
  border: 1px solid #db0e35;
}
.botao2:hover {
  background-color: #db0e35;
  color: #fff;
  border: 1px solid #fff;
}

@media (min-width: 1024px) and (max-width: 1280px) {
  .container-lg {
    width: 85%;
    padding: 0 2rem;
  }

  .button-container {
    margin-top: 2rem;
  }

  .image-col {
    padding-left: 2rem;
  }

  .botao1,
  .botao2 {
    font-size: 1.3rem;
    height: 45px;
    min-width: 30%;
  }
}
</style>
