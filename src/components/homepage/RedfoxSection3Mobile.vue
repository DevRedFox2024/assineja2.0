<!-- @format -->

<template>
  <v-main class="redfox-section3">
    <v-container class="d-flex justify-center">
      <v-col cols="12" class="text-center px-4">
        <v-row justify="center">
          <v-col cols="12">
            <h1 class="text-h5 font-weight-bold mb-2 titulo">
              Internet residencial com até 1 Giga de velocidade
            </h1>
            <p class="text-body-2 mb-6">
              Aqui seus Apps FAVORITOS podem ter até 50% de desconto!
            </p>
            <v-container>
              <v-chip
                class="mb-4"
                color="red darken-2"
                text-color="white"
                large>
                <v-icon left>mdi-crown</v-icon>
                Combos Mais Desejados
              </v-chip>
              <v-row class="mb-8">
                <v-col cols="12" md="4">
                  <Combo700 />
                </v-col>
                <v-col cols="12" md="4">
                  <Combo700basic />
                </v-col>
                <v-col cols="12" md="4">
                  <Combo500 />
                </v-col>
                <v-col cols="12" md="4">
                  <Combo350 />
                </v-col>
              </v-row>

              <v-chip
                class="mb-4"
                color="green darken-2"
                text-color="white"
                large>
                <v-icon left>mdi-cash</v-icon>
                Internet Rápida e Barata
              </v-chip>
              <v-row class="mb-8">
                <v-col cols="12" md="4">
                  <Economico1 />
                </v-col>
                <v-col cols="12" md="4">
                  <Economico2 />
                </v-col>
                <v-col cols="12" md="4">
                  <Economico3 />
                </v-col>
              </v-row>

              <v-chip
                class="mb-4"
                color="blue darken-2"
                text-color="white"
                large>
                <v-icon left>mdi-star</v-icon>
                Internet Ultra Rápida
              </v-chip>
              <v-row>
                <v-col cols="12" md="6">
                  <Combo800 />
                </v-col>
                <v-col cols="12" md="6">
                  <Combo1giga />
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
import Combo700 from "../../components/precos/combo700.vue";
import Combo700basic from "../../components/precos/combo700basic.vue";
import Combo500 from "../../components/precos/combo500.vue";
import Combo800 from "../precos/combo800.vue";
import Combo350 from "../precos/combo350.vue";
import Combo1giga from "../precos/combo1giga.vue";
import Economico1 from "../precos/economico1.vue";
import Economico2 from "../precos/economic2.vue";
import Economico3 from "../precos/economico3.vue";
</script>

<style scoped>
.v-chip {
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.v-chip:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 8px rgba(0, 0, 0, 0.15);
}

.mb-8 {
  margin-bottom: 32px !important;
}
</style>
