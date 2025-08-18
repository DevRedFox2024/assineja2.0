<!-- @format -->

<template>
  <v-chip class="vertical-chip">* consulte condições</v-chip>
</template>

<script setup></script>

<style scoped>
.vertical-chip {
  writing-mode: vertical-lr;
  transform: rotate(180deg);
  background-color: #db0e35 !important;
  color: #fff !important;
  font-weight: 800;
  font-size: 0.8rem;
  padding: 16px 8px !important;
  height: auto !important;
  position: fixed;
  left: 1%;
  top: 50%;
  transform: translateY(-50%) rotate(180deg);
  z-index: 1000;
  cursor: pointer;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
}

@media (max-width: 768px) {
  .vertical-chip {
    font-size: 0.7rem !important;
    padding: 12px 6px !important;
    left: 1% !important;
  }
}

@media (max-width: 480px) {
  .vertical-chip {
    font-size: 0.6rem !important;
    padding: 10px 5px !important;
  }
}
</style>
