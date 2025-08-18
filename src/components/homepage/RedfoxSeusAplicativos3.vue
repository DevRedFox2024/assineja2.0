<!-- @format -->

<template>
  <v-main class="container-redfox-aplicativosseus">
    <v-container class="pa-0">
      <v-row class="align-center" style="min-height: 100vh">
        <v-col
          cols="10"
          sm="8"
          md="6"
          lg="5"
          class="ml-sm-6 ml-md-10 ml-lg-16 py-16">
          <h1
            class="text-h3 text-md-h3 text-lg-h2 text-xl-h2 font-weight-black text-left">
            Seus apps favoritos inclusos no seu plano!
          </h1>
          <br />
          <p class="mt-4 text-h6 text-md-h6 text-xl-h5 font-weight-medium">
            Cliente Redfox tem preço especial na assinatura de aplicativos!
            Entretenimento, saúde, educação... tudo junto e ainda assim mais
            barato que qualquer flix a parte!
          </p>
          <br />
          <v-btn
            @click="handlePlanos"
            class="mt-8 botao"
            width="100%"
            max-width="300"
            min-height="48"
            size="x-large">
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
    "https://api.whatsapp.com/send?phone=551124842656&text=Ol%C3%A1,%20Redfox!",
    "_blank"
  );
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap");
.botao {
  background-color: var(--red);
  font-family: "Bebas Neue", sans-serif;
  font-size: 1.5rem !important;
  letter-spacing: 1px;
  color: white !important;
  text-transform: uppercase;
  border-radius: 8px !important;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
}

.botao:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.4);
}

.botao:active {
  transform: translateY(0);
}
.container-redfox-aplicativosseus {
  background-image: url("../../assets/testeAprovado.webp");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
}

@media (max-width: 600px) {
  .container-redfox-aplicativosseus {
    background-position: 70% center;
  }

  h1 {
    line-height: 1.2;
  }

  .v-col {
    margin-left: 24px !important;
  }
}
</style>
