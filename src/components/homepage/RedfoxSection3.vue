<!-- @format -->

<template>
  <v-main class="redfox-section3">
    <v-container class="d-flex justify-center">
      <v-col cols="12" md="12" lg="12" xl="10" class="text-center">
        <v-row justify="center">
          <v-col cols="12" md="12">
            <h1
              class="text-h3 text-md-h4 text-xl-h3 font-weight-bold mb-4 titulo">
              Internet residencial com até 1 Giga de velocidade
            </h1>
            <br />

            <p class="text-body-1 text-md-h6 text-xl-h6 mb-8">
              Aqui seus Apps FAVORITOS podem ter até 50% de desconto!
            </p>

            <v-btn-toggle
              v-model="planoSelecionado"
              mandatory
              class="mb-8 toggle-personalizado"
              rounded="xl"
              color="#db0e35"
              group>
              <!-- <v-btn
                value="combao"
                size="large"
                class="mx-2 toggle-btn"
                :class="{
                  'toggle-btn-active': planoSelecionado === 'combao',
                }">
                Combos Mais Desejados
              </v-btn> -->
              <v-btn
                style=""
                value="economico"
                size="large"
                class="mx-2 toggle-btn"
                :class="{
                  'toggle-btn-active': planoSelecionado === 'economico',
                }">
                Internet Rápida e Barata
              </v-btn>

              <v-btn
                value="flash"
                size="large"
                class="mx-2 toggle-btn"
                :class="{ 'toggle-btn-active': planoSelecionado === 'flash' }">
                Internet Ultra Rápida
              </v-btn>
              <v-btn
                value="Full"
                size="large"
                class="mx-2 toggle-btn"
                :class="{ 'toggle-btn-active': planoSelecionado === 'Full' }">
                Todos
              </v-btn>
            </v-btn-toggle>
            <v-container v-if="promocaoAtivado">
              <v-row class="d-flex justify-center">
                <v-col cols="12" sm="6" md="4" lg="3">
                  <Combo700 />
                </v-col>
                <v-col cols="12" sm="6" md="4" lg="3">
                  <Combo700basic />
                </v-col>
                <v-col cols="12" sm="6" md="4" lg="3">
                  <Combo500 />
                </v-col>
                <v-col cols="12" sm="6" md="4" lg="3">
                  <Combo350 />
                </v-col>
              </v-row>
            </v-container>
            <v-container v-if="planoSelecionado === 'economico'">
              <v-row class="d-flex justify-center">
                <v-col cols="12" sm="6" md="4" lg="3">
                  <Economico3 />
                </v-col>
                <v-col cols="12" sm="6" md="4" lg="3">
                  <Economico2 />
                </v-col>
                <v-col cols="12" sm="6" md="4" lg="3">
                  <Economico1 />
                </v-col>
              </v-row>
            </v-container>
            <v-container v-if="planoSelecionado === 'flash'">
              <v-row class="d-flex justify-center">
                <v-col cols="12" sm="6" md="4" lg="3">
                  <Combo1giga />
                </v-col>
                <v-col cols="12" sm="6" md="4" lg="3">
                  <Combo800 />
                </v-col>
              </v-row>
            </v-container>
            <v-container v-if="planoSelecionado === 'Full'">
              <v-row class="d-flex justify-center">
                <v-col cols="12" sm="6" md="4" lg="3">
                  <Economico1 />
                </v-col>
                <v-col cols="12" sm="6" md="4" lg="3">
                  <Economico2 />
                </v-col>
                <v-col cols="12" sm="6" md="4" lg="3">
                  <Economico3 />
                </v-col>
              </v-row>
              <v-row class="d-flex justify-center">
                <v-col cols="12" sm="6" md="4" lg="3">
                  <Combo1giga />
                </v-col>
                <v-col cols="12" sm="6" md="4" lg="3">
                  <Combo800 />
                </v-col>
              </v-row>
            </v-container>
          </v-col>
        </v-row>
      </v-col>
    </v-container>
  </v-main>
</template>

<script setup>
import { ref } from "vue";
import Combo700 from "../../components/precos/combo700.vue";
import Combo700basic from "../../components/precos/combo700basic.vue";
import Combo500 from "../../components/precos/combo500.vue";
import Combo800 from "../precos/combo800.vue";
import Combo1giga from "../precos/combo1giga.vue";
import Economico1 from "../precos/economico1.vue";
import Economico2 from "../precos/economic2.vue";
import Economico3 from "../precos/economico3.vue";
import Combo350 from "../precos/combo350.vue";

const planoSelecionado = ref("promo");
const promocaoAtivado = ref(true);
</script>

<style scoped>
.titulo {
  letter-spacing: -10% !important;
  font-family: "montserrat", sans-serif;
}
.toggle-btn {
  background-color: #fff;
  color: var(--red);
  font-weight: 700;
  font-family: "montserrat", sans-serif;
}

.redfox-section3 {
  min-height: 50vh;
  padding: 64px 0;
}
:deep(.v-btn) {
  letter-spacing: normal;
  text-transform: none;
}
@media (max-width: 600px) {
  .redfox-section3 {
    padding: 32px 0;
  }
}
</style>
