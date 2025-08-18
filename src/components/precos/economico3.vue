<!-- @format -->

<template>
  <v-card
    class="preco700 d-flex flex-column justify-center align-center"
    variant="outlined"
    hover>
    <v-container
      class="d-flex flex-column align-center"
      style="padding-top: 30px">
      <v-row class="conteudo-imagem" no-gutters>
        <v-col cols="12" class="d-flex justify-center">
          <v-img
            class="imagem700"
            :src="mega700"
            alt="Mega 700"
            contain
            transition="scale-transition" />
        </v-col>

        <v-col cols="12" class="d-flex justify-end mt-10">
          <v-btn
            @click="handlelead"
            class="buton"
            color="#fff"
            style="
              background-color: #db0e35;
              color: #fff;
              border: 1px solid #fff;
            "
            block
            ripple>
            ASSINE JÁ
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
    <br />
    <v-row class="d-flex justify-center">
      <p style="font-size: 0.7rem; font-weight: bold; text-align: center">
        +150 canais AO VIVO
      </p>
    </v-row>
  </v-card>
</template>

<script setup>
import mega700 from "../../assets/card/economico700.svg";

const handlelead = () => {
  window.open(
    "https://api.whatsapp.com/send/?phone=5511986871731&text=Vim+do+site%2C+gostaria+de+saber+sobre+os+planos.&type=phone_number&app_absent=0",
    "_blank"
  );
};
</script>

<style scoped>
.buton {
  font-family: "bebas neue", sans-serif;
  font-size: 1.5rem;
  height: 50px;
  padding: 10px 10px 10px 10px;
  transition: all 0.2s ease;
}

.buton:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(219, 14, 53, 0.3);
}

.disney,
.max {
  height: 50px;
  width: auto;
  cursor: pointer;
  transition: all 0.3s ease;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
}

.disney:hover,
.max:hover {
  transform: scale(1.1);
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2));
}

.preco700 {
  width: 100%;
  max-width: 300px;
  height: auto;
  min-height: 400px;
  padding: 20px;
  border-radius: 8px;
  background: radial-gradient(circle, #db0e35, #820032);
  margin: 0 auto;
  transition: all 0.3s ease;
}

.preco700:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

.imagem700 {
  max-width: 100%;
  left: 4%;
  height: auto;
  object-fit: contain;
  transition: transform 0.5s ease;
}

.preco700:hover .imagem700 {
  transform: scale(1.05);
}

.conteudo-imagem {
  width: 100%;
}

.logos-streaming {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 15px;
}

.conteudo-dica {
  display: inline-block;
  max-width: 200px;
  text-align: center;
  line-height: 1.4;
  font-weight: bold;
  color: #db0e35;
}

.modal-list {
  list-style: none;
  padding-left: 0;
}

.modal-list li {
  padding: 4px 0;
  display: flex;
  align-items: center;
}

.modal-list .v-icon {
  margin-right: 8px;
}

@media (max-width: 600px) {
  .disney,
  .max {
    height: 40px;
  }

  .preco700 {
    padding: 15px;
    max-width: 100%;
  }

  .logos-streaming {
    gap: 10px;
  }
}
</style>
