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
          <v-dialog v-model="cardDialog" max-width="500">
            <template v-slot:activator="{ props: dialogProps }">
              <v-tooltip location="left" open-delay="300">
                <template v-slot:activator="{ props: tooltipProps }">
                  <img
                    class="disney"
                    v-bind="{ ...dialogProps, ...tooltipProps }"
                    src="../../assets/card/iconExitlag.webp" />
                </template>
                <span class="conteudo-dica">
                  <strong>ExitLag</strong><br />
                  Clique para mais detalhes
                </span>
              </v-tooltip>
            </template>

            <v-card>
              <v-card-title class="d-flex align-center">
                <v-avatar size="40" class="mr-2">
                  <img src="../../assets/card/iconExitlag.webp" alt="Disney+" />
                </v-avatar>
                <span>ExitLag</span>
              </v-card-title>

              <v-card-text>
                <p>
                  Jogue como nunca antes com os benefícios exclusivos do
                  ExitLag:
                </p>
                <ul class="modal-list">
                  <li>
                    <v-icon small color="primary">mdi-check</v-icon> Reduza
                    drasticamente o ping
                  </li>
                  <li>
                    <v-icon small color="primary">mdi-check</v-icon> Elimine
                    travamentos e quedas de conexão
                  </li>
                  <li>
                    <v-icon small color="primary">mdi-check</v-icon> Roteamento
                    inteligente para servidores do mundo todo
                  </li>
                  <li>
                    <v-icon small color="primary">mdi-check</v-icon> Conexão
                    mais estável e responsiva
                  </li>
                  <li>
                    <v-icon small color="primary">mdi-check</v-icon> Performance
                    profissional com um clique
                  </li>
                </ul>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="#db0e35"
                  variant="text"
                  @click="cardDialog = false">
                  Fechar
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-col>

        <v-col cols="12" class="d-flex justify-center">
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
import mega700 from "../../assets/card/redimecionado700basic.png";
import { ref } from "vue";

const cardDialog = ref(false);

const handlelead = () => {
  window.open(
    "https://api.whatsapp.com/send?phone=551124842656&text=Ol%C3%A1,%20Redfox!",
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
  height: auto;
  min-height: 50px;
  max-height: 51px;
  width: auto;
  cursor: pointer;
  transition: all 0.3s ease;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
}

.disney:hover {
  transform: scale(1.1);
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2));
}

.preco700 {
  width: 100%;
  max-width: 300px;
  height: auto;
  padding: 20px;
  border-radius: 8px;
  background-color: #ffffff;
  margin: 0 auto;
  transition: all 0.3s ease;
}

.preco700:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

.imagem700 {
  max-width: 100%;
  height: auto;
  object-fit: contain;
  left: 5%;
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
