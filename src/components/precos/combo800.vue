<!-- @format -->

<template>
  <v-card class="preco700" variant="outlined" hover>
    <v-container height="auto" min-height="330" max-height="330">
      <v-row class="conteudo-imagem" no-gutters>
        <v-col cols="12" class="d-flex justify-center">
          <v-img
            class="imagem700"
            :src="mega800"
            alt="Mega 700"
            contain
            transition="scale-transition" />
        </v-col>
      </v-row>
      <v-row class="logos-streaming" no-gutters>
        <v-col cols="auto" class="d-flex align-center">
          <v-dialog v-model="ubookDialog" max-width="500">
            <template v-slot:activator="{ props: dialogProps }">
              <v-tooltip location="left" open-delay="300">
                <template v-slot:activator="{ props: tooltipProps }">
                  <img
                    class="disney"
                    v-bind="{ ...dialogProps, ...tooltipProps }"
                    src="../../assets/card/ubook.webp" />
                </template>
                <span class="conteudo-dica">
                  <strong>Ubook+ incluído</strong><br />
                  Clique para mais detalhes
                </span>
              </v-tooltip>
            </template>

            <v-card>
              <v-card-title class="d-flex align-center">
                <span>Ubook Go</span>
              </v-card-title>

              <v-card-text>
                <p>
                  Ubook GO: uma plataforma de audiobooks onde, todo mês, você
                  recebe um título pra chamar de seu — escolha entre o sugerido
                  ou troque por outro do catálogo.
                </p>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="#db0e35"
                  variant="text"
                  @click="ubookDialog = false">
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
            "
            block
            rounded
            ripple>
            ASSINE JÁ
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
    <br />
    <v-row class="d-flex justify-center mt-5 mt-md-2">
      <p style="font-size: 0.7rem; font-weight: bold">+150 canais AO VIVO</p>
    </v-row>
  </v-card>
</template>

<script setup>
import mega800 from "../../assets/card/redimecionado800.png";
import { ref } from "vue";

const ubookDialog = ref(false);

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
  height: 30px;
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
  min-height: 411px !important;
  max-width: 300px;
  max-height: 430px;
  height: auto;
  padding: 20px;
  border-radius: 8px;
  background-color: rgba(0, 0, 0, 0.473);
  margin: 0 auto;
  transition: all 0.3s ease;
}

.preco700:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

.imagem700 {
  max-width: 100%;
  height: auto;
  left: 4%;
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
  gap: 1rem;
  height: auto;
  min-height: 98px;
  max-height: 98px;
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
    height: auto;
  }

  .preco700 {
        padding: 25px;
    height: auto;
    max-width: 100%;
  }

  .logos-streaming {
    gap: 10px;
  }
}
</style>
