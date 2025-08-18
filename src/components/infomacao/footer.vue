<!-- @format -->

<script setup>
import logoRed from "../../assets/logoFooter.webp";
</script>

<template>
  <div class="footer">
    <v-container class="d-flex justify-center align-center">
      <v-row align="start" justify="center">
        <v-col
          cols="12"
          md="8"
          class="d-flex flex-column align-center justify-center text-center pa-4">
          <router-link to="/">
            <v-img :src="logoRed" width="320"></v-img>
          </router-link>
          <p class="mt-2">Conectando você ao futuro</p>
        </v-col>
        <v-col cols="12" md="4" class="col-footer3">
          <h1>Contato</h1>
          <p class="icon">
            <v-icon style="color: var(--red)" class="icon">mdi-email</v-icon>
            <a href="mailto:vendas@redfoxtelecom.com.br" style="color: inherit">
              vendas@redfoxtelecom.com.br
            </a>
          </p>
          <p class="icon">
            <v-icon style="color: var(--red)" class="icon">mdi-whatsapp</v-icon>
            <a
              href="tel:1124842656"
              style="color: inherit; text-decoration: none; font-size: 1rem">
              (11) 2484-2656
            </a>
          </p>
          <p class="icon">
            <v-icon style="color: var(--red)" class="icon">mdi-phone</v-icon>
            <a
              style="color: inherit; text-decoration: none; font-size: 1rem"
              href="tel:0800-773-2656"
              target="_blank"
              >0800-773-2656</a
            >
          </p>
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <v-row>
        <v-col>
          <p class="text-center" style="font-size: 0.8rem">
            © 2025 RedFox Internet - Todos os direitos reservados© 2025 RedFox
            Internet - Todos os direitos reservados
          </p>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style scoped>
.link-footer {
  text-decoration: none;
  color: #fff;
}
.link-footer:hover {
  color: #db0e35;
  transition: all 0.4s ease;
}
h2 {
  font-size: 1rem;
  font-weight: 500;
}
.footer {
  background-color: #1a1a1a;
  color: #fff;
  padding: 32px 0;
}

.footer-title {
  font-size: 1.25rem;
  font-weight: 500;
  margin-bottom: 16px;
  text-align: left;
  width: 100%;
}

.email-field {
  width: 100%;
  max-width: 400px;
  margin-bottom: 16px;
}

.send-btn {
  font-size: 0.9rem;
  background-color: #db0e35;
  min-width: auto;
  padding: 0 12px;
  border: #fff solid 1px;
  color: white;
}

.social-icons {
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
}

.icon {
  color: white;
}

.icon:hover {
  color: #db0e35 !important;
  transition: all 0.4s ease;
}

.footer-logo {
  display: block;
  margin-top: 16px;
}

.col-footer {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
</style>
