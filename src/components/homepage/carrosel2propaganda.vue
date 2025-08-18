<!-- @format -->

<!-- componente propaganda 2 redfoxmovel do carrosel propaganda -->

<template>
  <v-main
    style="
      height: auto;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
    ">
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
            Potência <span style="color: var(--red)">Máxima</span> em
            <span style="color: var(--red)">Conexão</span>
          </h1>
          <br />
          <p style="color: #cccbcb" :class="textClass">
            Navegue, jogue e trabalhe com planos até 1
            <span style="font-weight: 800">GIGA</span>
            que você merece.
          </p>
          <p style="color: #cccbcb" :class="textClass">
            Alta <span style="font-weight: 800">performance</span> para sua
            <span style="font-weight: 800">casa</span>
            ou <span style="font-weight: 800">empresa</span>.
          </p>

          <div class="d-flex align-start mt-4 button-container">
            <v-btn @click="handlewhatsapp" class="botao1 mr-2">
              FALE AGORA COM UM ESPECIALISTA</v-btn
            >
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
import photoRedfox from "../../assets/photoRed.webp";
import { computed } from "vue";
import { useDisplay } from "vuetify";

const { lg, xl } = useDisplay();

const titleClass = computed(() => ({
  "text-h4": true,
  "text-md-h5": true,
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
</script>

<style scoped>
.container-lg {
  width: 80%;
}

.container-xl {
  width: 70%;
}

.botao1 {
  font-family: "Bebas Neue", cursive;
  font-size: 1.2rem;
  height: auto;
  width: auto;
  min-width: 25%;
  padding: 0.9rem 1rem;
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
