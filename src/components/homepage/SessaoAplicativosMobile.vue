<!-- @format -->

<template>
  <v-main class="fundo-container">
    <v-container
      class="pa-4 d-flex flex-column"
      style="min-height: 100vh; height: auto">
      <v-row justify="center" class="d-flex flex-column align-center">
        <v-col cols="12" md="9" sm="10" class="text-center">
          <h1 class="titulo">Seus apps favoritos inclusos no seu plano!</h1>
          <p class="descricao">
            Cliente Redfox tem preço especial na assinatura de aplicativos!
            Entretenimento, saúde, educação... tudo junto e ainda assim mais
            barato que qualquer flix à parte!
          </p>
        </v-col>
      </v-row>

      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>

      <v-row justify="center" class="mt-auto">
        <v-col cols="12" class="text-center">
          <v-btn @click="handlePlanos" color="#db0e35" class="botao">
            CONHEÇA NOSSOS PLANOS
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script setup>
const handlePlanos = () => {
  window.open(
    "https://api.whatsapp.com/send/?phone=5511986871731&text=Vim+do+site%2C+gostaria+de+saber+sobre+os+planos.&type=phone_number&app_absent=0",
    "_blank"
  );
};
</script>

<style scoped>
.fundo-container {
  background-image: url("../../assets/fundoHomiCelular.webp");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 110vh;
  width: 100%;
}

.titulo {
  font-family: "Bebas Neue", sans-serif;
  font-weight: 900;
  font-size: 2rem;
  line-height: 1.3;
  margin-bottom: 1.5rem;
}

.descricao {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
}

.botao {
  border: 1px solid #fff;
  font-size: 1.2rem;
  font-family: "Bebas Neue", sans-serif !important;
}

@media (min-width: 600px) {
  .titulo {
    font-size: 2.4rem;
  }

  .descricao {
    font-size: 1.15rem;
  }

  .botao {
    font-size: 1.3rem;
  }
}

@media (min-width: 960px) {
  .titulo {
    font-size: 3rem;
  }

  .descricao {
    font-size: 1.2rem;
  }

  .botao {
    font-size: 1.4rem;
  }
}
</style>
