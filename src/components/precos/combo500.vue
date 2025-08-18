<!-- @format -->

<template>
  <v-card class="preco700" variant="outlined" hover>
    <v-container>
      <v-row class="conteudo-imagem" no-gutters>
        <v-col cols="12" class="d-flex justify-center">
          <v-img
            class="imagem700"
            :src="mega700"
            alt="Mega 700"
            contain
            transition="scale-transition" />
        </v-col>
      </v-row>

      <v-row class="logos-streaming mt-4" no-gutters>
        <v-col cols="auto" class="d-flex align-center">
          <v-dialog v-model="disneyDialog" max-width="500">
            <template v-slot:activator="{ props: dialogProps }">
              <v-tooltip location="left" open-delay="300">
                <template v-slot:activator="{ props: tooltipProps }">
                  <img
                    class="disney"
                    v-bind="{ ...dialogProps, ...tooltipProps }"
                    src="../../assets/card/iconeLooke.webp" />
                </template>
                <span class="conteudo-dica">
                  <strong>Looke incluído</strong><br />
                  Clique para mais detalhes
                </span>
              </v-tooltip>
            </template>

            <v-card>
              <v-card-title class="d-flex align-center">
                <v-avatar size="40" class="mr-2">
                  <img src="../../assets/card/iconeLooke.webp" alt="Looke" />
                </v-avatar>
                <span>Looke</span>
              </v-card-title>

              <v-card-text>
                <p>
                  Descubra o que a Looke pode oferecer para transformar sua
                  experiência de entretenimento:
                </p>
                <ul class="modal-list">
                  <li>
                    <v-icon small color="primary">mdi-check</v-icon> Plataforma
                    100% brasileira com streaming sob demanda
                  </li>
                  <li>
                    <v-icon small color="primary">mdi-check</v-icon> Filmes,
                    séries, documentários e shows para todos os gostos
                  </li>
                  <li>
                    <v-icon small color="primary">mdi-check</v-icon> Catálogo
                    atualizado com lançamentos e conteúdos clássicos
                  </li>
                  <li>
                    <v-icon small color="primary">mdi-check</v-icon> Acesso
                    ilimitado em diversos dispositivos (TV, celular, tablet, PC)
                  </li>
                  <li>
                    <v-icon small color="primary">mdi-check</v-icon> Conteúdos
                    para toda a família — infantil, ação, comédia, e muito mais
                  </li>
                </ul>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="#db0e35"
                  variant="text"
                  @click="disneyDialog = false">
                  Fechar
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-col>

        <v-col cols="auto" class="d-flex align-center">
          <p class="mx-2 my-0" style="color: #333333">ou</p>
        </v-col>

        <v-col cols="auto" class="d-flex align-center">
          <v-dialog v-model="maxDialog" max-width="500">
            <template v-slot:activator="{ props: dialogProps }">
              <v-tooltip location="right" open-delay="300">
                <template v-slot:activator="{ props: tooltipProps }">
                  <img
                    class="max"
                    v-bind="{ ...dialogProps, ...tooltipProps }"
                    src="../../assets/card/icondeezer.webp" />
                </template>
                <span class="conteudo-dica">
                  <strong>Deezer incluído</strong><br />
                  Clique para mais detalhes
                </span>
              </v-tooltip>
            </template>

            <v-card>
              <v-card-title class="d-flex align-center">
                <v-avatar size="40" class="mr-2">
                  <img src="../../assets/card/icondeezer.webp" alt="Max" />
                </v-avatar>
                <span>Deezer Incluído</span>
              </v-card-title>

              <v-card-text>
                <p>
                  Com a Deezer, sua trilha sonora te acompanha onde você for:
                </p>
                <ul class="modal-list">
                  <li>
                    <v-icon small color="primary">mdi-check</v-icon> Milhões de
                    músicas, podcasts e rádios ao seu alcance
                  </li>
                  <li>
                    <v-icon small color="primary">mdi-check</v-icon> Escute suas
                    playlists favoritas sem consumir sua internet
                  </li>
                  <li>
                    <v-icon small color="primary">mdi-check</v-icon> Ouça
                    offline quando quiser — sem anúncios e sem interrupções
                  </li>
                  <li>
                    <v-icon small color="primary">mdi-check</v-icon> Qualidade
                    de som superior e sem travamentos
                  </li>
                  <li>
                    <v-icon small color="primary">mdi-check</v-icon>
                    Personalização inteligente com base no seu gosto musical
                  </li>
                </ul>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="#db0e35"
                  variant="text"
                  @click="maxDialog = false">
                  Fechar
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-col>

        <v-col cols="12" class="mt-4 d-flex justify-center">
          <v-btn
            @click="handlelead"
            class="buton"
            color="#fff"
            style="
              background-color: #db0e35;
              color: #fff;
              border: 1px solid #fff;
              border-radius: 8px;
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
      <p style="font-size: 0.7rem; font-weight: bold; color: #333333">
        +150 canais AO VIVO
      </p>
    </v-row>
  </v-card>
</template>

<script setup>
import mega700 from "../../assets/card/novocard500.svg";
import { ref } from "vue";

const disneyDialog = ref(false);
const maxDialog = ref(false);

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

.disney {
  height: 53px;
  width: auto;
  border-radius: 16px !important;
  cursor: pointer;
  transition: all 0.3s ease;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
}

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
  padding: 20px;
  border-radius: 8px;
  background-color: #fff;
  margin: 0 auto;
  transition: all 0.3s ease;
}

.preco700:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

.imagem700 {
  max-width: 100%;
  height: auto;
  left: 5%;
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
  text-align: left;
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
