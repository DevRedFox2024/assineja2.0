<!-- @format -->

<template>
  <v-main v-if="visible" class="container">
    <v-col cols="12" md="12" sm="6" class="pa-0">
      <transition name="slide-up">
        <v-container class="cookie-banner">
          <v-card class="card-cookie">
            <v-card-title class="titulo-cookie">
              Nós usamos cookies
            </v-card-title>
            <v-card-text class="texto-cookie">
              Nós utilizamos cookies para melhorar sua experiência no site. Ao
              continuar navegando, você concorda com nossa Política de
              Privacidade.
            </v-card-text>
            <v-card-actions class="acoes-cookie">
              <v-btn
                @click="acceptCookies"
                class="botao-aceitar"
                variant="flat"
                color="primary">
                Aceitar todos
              </v-btn>
              <v-btn
                @click="closeBanner"
                class="botao-recusar"
                variant="outlined">
                Recusar
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-container>
      </transition>
    </v-col>
  </v-main>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Cookies from "js-cookie";

const visible = ref(false);

const acceptCookies = () => {
  Cookies.set("cookie_consent", "accepted", { expires: 365 });
  visible.value = false;
};

const declineCookies = () => {
  Cookies.set("cookie_consent", "declined", { expires: 365 });
  visible.value = false;
};

const closeBanner = () => {
  visible.value = false;
};

onMounted(async () => {
  if (!Cookies.get("cookie_consent")) {
    visible.value = true;

    try {
      const response = await fetch("https://ipapi.co/json/");
      const data = await response.json();

      if (data.city)
        Cookies.set("city", data.city, { secure: true, expires: 365 });
      if (data.region_code)
        Cookies.set("region", data.region_code, { secure: true, expires: 365 });
    } catch (error) {
      console.error("Error na busca de dados:", error);
    }
  }
});
</script>

<style scoped>
.container {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 9999;
  padding: 16px;
}

.card-cookie {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #db0e35;
  border: 1px solid #fff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.titulo-cookie {
  font-size: 1.2rem;
  font-weight: 600;
  color: #ffffff;
  padding-bottom: 8px;
}

.texto-cookie {
  font-size: 0.9rem;
  color: #ffffff;
  line-height: 1.5;
  padding-bottom: 16px;
}

.link-politica {
  color: #fff;
  font-weight: bolder;
}

.link-politica:hover {
  text-decoration: underline;
}

.acoes-cookie {
  display: flex;
  gap: 12px;
  padding-top: 8px;
}

.botao-aceitar {
  background-color: #fcfcfc !important;
  text-transform: none;
  font-weight: 500;
}

.botao-recusar {
  text-transform: none;
}

@media (max-width: 600px) {
  .acoes-cookie {
    flex-direction: column;
  }

  .botao-personalizar {
    margin-left: 0;
  }
}
</style>
