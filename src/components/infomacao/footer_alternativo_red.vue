<!-- @format -->

<template>
  <div class="vfooter">
    <v-container class="icon-container" fluid>
      <div class="icon-box">
        <v-icon @click="handleCall" color="white" size="28">mdi-phone</v-icon>
      </div>
      <div class="icon-box">
        <v-icon @click="handleWhats" color="white" size="28"
          >mdi-whatsapp
        </v-icon>
      </div>
      <div class="icon-box">
        <v-icon @click="handleEmail" color="white" size="28">mdi-email</v-icon>
      </div>
      <div class="scroll-top">
        <v-icon @click="handleTop" color="#db0e35" size="28"
          >mdi-chevron-up
        </v-icon>
      </div>
    </v-container>
  </div>
</template>

<script setup>
const handleEmail = () => {
  window.location.href = "mailto:vendas@redfoxtelecom.com.br";
};
const handleCall = () => {
  window.location.href = "tel:0800-773-2656";
};
const handleTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
const handleWhats = () => {
  window.open(
    "https://api.whatsapp.com/send/?phone=5511986871731&text&type=phone_number&app_absent=0",
    "_blank"
  );
};
</script>

<style scoped>
.vfooter {
  position: fixed;
  bottom: 0;
  background-color: #db0e35;
  width: 100%;
  z-index: 1001;
}

.icon-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  padding: 0;
}

.icon-box {
  background-color: #db0e35;
  width: 70px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.scroll-top {
  background-color: #e3e3e3;
  width: 70px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
