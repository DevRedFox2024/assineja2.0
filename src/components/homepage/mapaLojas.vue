<!-- @format -->

<template>
  <div class="map-container">
    <l-map
      class="maps"
      ref="map"
      :zoom="zoom"
      :center="center"
      :options="{ zoomControl: false }"
      style="height: 80vh; width: 80%; margin: 0 auto">
      <l-tile-layer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' />

      <l-marker
        v-for="(location, index) in locations"
        :key="index"
        :lat-lng="[location.lat, location.lon]"
        :icon="myIcon"
        @mouseover="handleMouseOver(index)"
        @mouseout="handleMouseOut(index)"
        :ref="(el) => setMarkerRef(index, el)"
        @click="abrirRota(location.lat, location.lon)">
        <l-popup><div v-html="location.title"></div></l-popup>
      </l-marker>
    </l-map>
  </div>
</template>

<style scoped>
.maps {
  border-radius: 16px;
}
@media (max-width: 768px) {
  .maps {
    height: 500px !important;
    width: 100%;
    max-width: 800px !important;
  }

  .map-container {
    width: 100% !important;
    height: 100%;
  }
}
</style>

<script setup>
import { ref, nextTick } from "vue";
import { LMap, LTileLayer, LMarker, LPopup } from "@vue-leaflet/vue-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import customIcon from "../../assets/loc.png";

const zoom = ref(13);
const center = ref([-23.430219, -46.535219]);

const myIcon = L.icon({
  iconUrl: customIcon,
  iconSize: [38, 41],
  iconAnchor: [12, 41],
  popupAnchor: [0, -41],
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.4/images/marker-shadow.png",
  shadowSize: [41, 41],
  shadowAnchor: [12, 41],
});

const abrirRota = (lat, lon) => {
  const url = `https://www.google.com/maps/dir/?api=1&origin=Minha+Localização&destination=${lat},${lon}`;
  window.open(url, "_blank");
};

const markerRefs = ref({});
const closeTimeouts = ref({});
const currentOpenPopupIndex = ref(null);

const setMarkerRef = (index, el) => {
  if (el) markerRefs.value[index] = el;
};

const handleMouseOver = (index) => {
  clearTimeout(closeTimeouts.value[index]);

  if (
    currentOpenPopupIndex.value !== null &&
    currentOpenPopupIndex.value !== index
  ) {
    const currentMarker = markerRefs.value[currentOpenPopupIndex.value];
    if (currentMarker?.leafletObject?.getPopup()) {
      currentMarker.leafletObject.closePopup();
    }
  }

  nextTick(() => {
    const marker = markerRefs.value[index];
    if (marker?.leafletObject) {
      marker.leafletObject.openPopup();
      currentOpenPopupIndex.value = index;
    }
  });
};

const handleMouseOut = (index) => {
  closeTimeouts.value[index] = setTimeout(() => {
    const marker = markerRefs.value[index];
    if (marker?.leafletObject?.getPopup()) {
      marker.leafletObject.closePopup();
      if (currentOpenPopupIndex.value === index) {
        currentOpenPopupIndex.value = null;
      }
    }
  }, 15000);
};

const locations = ref([
  {
    lat: -23.473120266585184,
    lon: -46.54691545145974,
    title: `<strong>Loja Vila Endres</strong><hr style="margin: 6px 0; border: none; border-top: 1px solid #000;">
       <br><strong>Endereço:</strong> Avenida Presidente Humberto de Alencar Castelo Branco, 3413, Vila Leonor, 07024-170
       <br><br><strong>Horário de Funcionamento:</strong> Segunda a Sexta das 08:00 às 16:20 | Sábado das 08:00 às 20:00
       <br><br><i class="fab fa-whatsapp" style="color: #25D366;"></i> &nbsp;(11) 2484-2656
       <br>`,
  },
  {
    lat: -23.47908146465775,
    lon: -46.393976905764305,
    title: `<strong>Loja Vila Any</strong><hr style="margin: 6px 0; border: none; border-top: 1px solid #000;">
       <br><strong>Endereço:</strong> Estrada do Itaim, 2380, Jardim Izildinha,  07262-160
       <br><br><strong>Horário de Funcionamento:</strong> Segunda a Sexta das 08:00 às 18:00 | Sábado das 08:00 às 17:00
       <br><br><i class="fab fa-whatsapp" style="color: #25D366;"></i> &nbsp;(11) 2484-2656
       <br>`,
  },
  {
    lat: -23.489785103009886,
    lon: -46.548955386147426,
    title: `<strong>Loja Shopping Internacional</strong><hr style="margin: 6px 0; border: none; border-top: 1px solid #000;">
       <br><strong>Endereço:</strong> Rua Engenheiro Camilo Olivetti, 295, Vila Endres (SHOPPING INTERNACIONAL), loja a-10 - PISO TÉRREO, 07042-040
       <br><br><strong>Horário de Funcionamento:</strong> Segunda a Sexta das 10:00 às 22:00 | Sábado das 10:00 às 22:00
       <br><br><i class="fab fa-whatsapp" style="color: #25D366;"></i> &nbsp;(11) 2484-2656
       <br>`,
  },
  {
    lat: -23.432119401928922,
    lon: -46.43949917215842,
    title: `<strong>Loja Presidente Dutra</strong><hr style="margin: 6px 0; border: none; border-top: 1px solid #000;">
       <br><strong>Endereço:</strong> Avenida  Papa João Paulo I, 2722, Cidade Parque São Luiz, 07170-385
       <br><br><strong>Horário de Funcionamento:</strong> Segunda a Sexta das 09:40 às 18:00 | Sábado das 08:00 às 17:00
       <br><br><i class="fab fa-whatsapp" style="color: #25D366;"></i> &nbsp;(11) 2484-2656
       <br>`,
  },
  {
    lat: -23.40819579245751,
    lon: -46.4978090468548,
    title: `<strong>Loja Mikail</strong><hr style="margin: 6px 0; border: none; border-top: 1px solid #000;">
       <br><strong>Endereço:</strong> Estrada do Zircônio, 155, Parque Primavera, 07145-000
       <br><br><strong>Horário de Funcionamento:</strong> Segunda a Sexta das 09:40 às 18:00 | Sábado das 08:40 às 17:00
       <br><br><i class="fab fa-whatsapp" style="color: #25D366;"></i> &nbsp;(11) 2484-2656
       <br>`,
  },
  {
    lat: -23.205633678662522,
    lon: -46.15678390164017,
    title: `<strong>Loja Igaratá </strong><hr style="margin: 6px 0; border: none; border-top: 1px solid #000;">
       <br><strong>Endereço:</strong> Avenida Francisco Lourenço, 41, Centro, 12350-000
       <br><br><strong>Horário de Funcionamento:</strong> Segunda a Sexta das 08:00 às 18:00 | Sábado das 08:00 às 17:00
       <br><br><i class="fab fa-whatsapp" style="color: #25D366;"></i> &nbsp;(11) 2484-2656
       <br>`,
  },
  {
    lat: -23.376573417882643,
    lon: -46.4481521294151,
    title: `<strong>Loja Fortaleza</strong><hr style="margin: 6px 0; border: none; border-top: 1px solid #000;">
       <br><strong>Endereço:</strong> Avenida dos Evangélicos, 156 ,  Jardim Fortaleza, 07154-000
       <br><br><strong>Horário de Funcionamento:</strong> Segunda a Sexta das 08:00 às 18:00 | Sábado das 08:00 às 17:00
       <br><br><i class="fab fa-whatsapp" style="color: #25D366;"></i> &nbsp;(11) 2484-2656
       <br>`,
  },
  {
    lat: -23.445073537631295,
    lon: -46.43812845327779,
    title: `<strong>Loja Cumbica</strong><hr style="margin: 6px 0; border: none; border-top: 1px solid #000;">
       <br><strong>Endereço:</strong> Rua Porto Velho, 684 , Jardim Cumbica, 07240-060
       <br><br><strong>Horário de Funcionamento:</strong> Segunda a Sexta das 08:00 às 18:00 | Sábado das 08:00 às 17:00
       <br><br><i class="fab fa-whatsapp" style="color: #25D366;"></i> &nbsp;(11) 2484-2656
       <br>`,
  },
  {
    lat: -23.463996121505943,
    lon: -46.416856922019724,
    title: `<strong>Loja Pimentas</strong><hr style="margin: 6px 0; border: none; border-top: 1px solid #000;">
       <br><strong>Endereço:</strong> Rua Muribeca, 262 Jardim Monte Alegre, 07272-345
       <br><br><strong>Horário de Funcionamento:</strong> Segunda a Sexta das 08:00 às 18:00 | Sábado das 08:00 às 17:00
       <br><br><i class="fab fa-whatsapp" style="color: #25D366;"></i> &nbsp;(11) 2484-2656
       <br>`,
  },
  {
    lat: -23.44507674159692,
    lon: -46.41029064636129,
    title: `<strong>Loja Jurema</strong><hr style="margin: 6px 0; border: none; border-top: 1px solid #000;">
       <br><strong>Endereço:</strong> Rua Olivanca, 221 A Jardim Carvalho, 07244-310
       <br><br><strong>Horário de Funcionamento:</strong> Segunda a Sexta das 08:00 às 18:00 | Sábado das 08:00 às 17:00
       <br><br><i class="fab fa-whatsapp" style="color: #25D366;"></i> &nbsp;(11) 2484-2656
       <br>`,
  },
  {
    lat: -23.403558502598077,
    lon: -46.41693945735407,
    title: `<strong>Loja Ponte Alta</strong><hr style="margin: 6px 0; border: none; border-top: 1px solid #000;">
       <br><strong>Endereço:</strong> Avenida José Rangel Filho, 933 Jardim Ponte Alta I, 07179-350
       <br><br><strong>Horário de Funcionamento:</strong> Segunda a Sexta das 08:00 às 18:00 | Sábado das 08:00 às 17:00
       <br><br><i class="fab fa-whatsapp" style="color: #25D366;"></i> &nbsp;(11) 2484-2656
       <br>`,
  },
  {
    lat: -23.446178582369885,
    lon: -46.46388017335796,
    title: `<strong>Loja Base Aérea</strong><hr style="margin: 6px 0; border: none; border-top: 1px solid #000;">
       <br><strong>Endereço:</strong> Rua Anastácio, 54 Conjunto Residencial Paes de Barros, 07182-200
       <br><br><strong>Horário de Funcionamento:</strong> Segunda a Sexta das 09:00 às 17:20 | Sábado das 08:00 às 14:00
       <br><br><i class="fab fa-whatsapp" style="color: #25D366;"></i> &nbsp;(11) 2484-2656
       <br>`,
  },
  {
    lat: -23.434631853184595,
    lon: -46.51700043031234,
    title: `<strong>Loja Bela vista</strong><hr style="margin: 6px 0; border: none; border-top: 1px solid #000;">
       <br><strong>Endereço:</strong> Avenida Manoel Isidoro Martins, 412,  Bela Vista,  07132-280
       <br><br><strong>Horário de Funcionamento:</strong> Segunda a Sexta das 08:00 às 17:00 | Sábado das 08:00 às 14:00
       <br><br><i class="fab fa-whatsapp" style="color: #25D366;"></i> &nbsp;(11) 2484-2656
       <br>`,
  },
  {
    lat: -23.469536133479142,
    lon: -46.526898733854324,
    title: `<strong>Loja Centro</strong><hr style="margin: 6px 0; border: none; border-top: 1px solid #000;">
       <br><strong>Endereço:</strong> Rua Dom Pedro, 405,  Centro,  07011-003
       <br><br><strong>Horário de Funcionamento:</strong> Segunda a Sexta das 08:00 às 19:00 | Sábado das 08:00 às 19:00
       <br><br><i class="fab fa-whatsapp" style="color: #25D366;"></i> &nbsp;(11) 2484-2656
       <br>`,
  },
  {
    lat: -23.3183521104615,
    lon: -46.225968549140575,
    title: `<strong>Loja Santa Isabel</strong><hr style="margin: 6px 0; border: none; border-top: 1px solid #000;">
       <br><strong>Endereço:</strong> Av. Manoel Ferraz de Campos Salles, 642, Centro, 07500-000
       <br><br><strong>Horário de Funcionamento:</strong> Segunda a Sexta das 08:00 às 16:20 | Sábado das 08:00 às 17:00
       <br><br><i class="fab fa-whatsapp" style="color: #25D366;"></i> &nbsp;(11) 2484-2656
       <br>`,
  },
  {
    lat: -23.493472483687537,
    lon: -46.401133005716254,
    title: `<strong>Loja Itaim Paulista</strong><hr style="margin: 6px 0; border: none; border-top: 1px solid #000;">
       <br><strong>Endereço:</strong> Rua Cordão de São Francisco, 847, Vila Aimoré, 08190-000
       <br><br><strong>Horário de Funcionamento:</strong> Segunda a Sexta das 08:40 às 17:00 | Sábado das 08:00 às 16:20
       <br><br><i class="fab fa-whatsapp" style="color: #25D366;"></i> &nbsp;(11) 2484-2656
       <br>`,
  },
  {
    lat: -23.39616747134168,
    lon: -46.323624996860865,
    title: `<strong>Loja Arujá</strong><hr style="margin: 6px 0; border: none; border-top: 1px solid #000;">
       <br><strong>Endereço:</strong> Av. dos Expedicionários, 975, Centro, 07400-490
       <br><br><strong>Horário de Funcionamento:</strong> Segunda a Sexta das 09:00 às 17:20 | Sábado das 08:00 às 16:20
       <br><br><i class="fab fa-whatsapp" style="color: #25D366;"></i> &nbsp;(11) 2484-2656
       <br>`,
  },
  {
    lat: -23.404023526157125,
    lon: -46.47437561173429,
    title: `<strong>Loja Santos Dummont</strong><hr style="margin: 6px 0; border: none; border-top: 1px solid #000;">
       <br><strong>Endereço:</strong> Estrada do Elenco, 4610, Pq. Primavera, 07145-240
       <br><br><strong>Horário de Funcionamento:</strong> Segunda a Sexta das 08:00 às 16:20 | Sábado das 08:00 às 16:20
       <br><br><i class="fab fa-whatsapp" style="color: #25D366;"></i> &nbsp;(11) 2484-2656
       <br>`,
  },
  {
    lat: -23.48486446119479,
    lon: -46.43291879724719,
    title: `<strong>Loja Jardim Helena</strong><hr style="margin: 6px 0; border: none; border-top: 1px solid #000;">
       <br><strong>Endereço:</strong> Avenida Oliveira Freire, 269, Parque Paulistano, 08080-570
       <br><br><strong>Horário de Funcionamento:</strong> Segunda a Sexta das 08:00 às 19:00 | Sábado das 08:00 às 19:00
       <br><br><i class="fab fa-whatsapp" style="color: #25D366;"></i> &nbsp;(11) 2484-2656
       <br>`,
  },
  {
    lat: -23.424376300621123,
    lon: -46.34929121072905,
    title: `<strong>Loja Jardim América</strong><hr style="margin: 6px 0; border: none; border-top: 1px solid #000;">
       <br><strong>Endereço:</strong> R. José Alexandrino de Morães, 333, Jardim Patricia, 08584-090
       <br><br><strong>Horário de Funcionamento:</strong> Segunda a Sexta das 09:00 às 17:20 | Sábado das 08:00 às 16:20
       <br><br><i class="fab fa-whatsapp" style="color: #25D366;"></i> &nbsp;(11) 2484-2656
       <br>`,
  },
  {
    lat: -23.46283649257016,
    lon: -46.40565388422218,
    title: `<strong>Loja Marcos Freire</strong><hr style="margin: 6px 0; border: none; border-top: 1px solid #000;">
       <br><strong>Endereço:</strong> Estr. do Sacramento, 1055, Cidade Tupinambá, 07263-000
       <br><br><strong>Horário de Funcionamento:</strong> Segunda a Sexta das 08:00 às 18:00 | Sábado das 08:00 às 17:00
       <br><br><i class="fab fa-whatsapp" style="color: #25D366;"></i> &nbsp;(11) 2484-2656
       <br>`,
  },
  {
    lat: -23.310486106592908,
    lon: -45.98169837885478,
    title: `<strong>Loja Jacareí</strong><hr style="margin: 6px 0; border: none; border-top: 1px solid #000;">
       <br><strong>Endereço:</strong> Rod. Henrique Eroles, 200, São João, 12322-540
       <br><br><strong>Horário de Funcionamento:</strong> Segunda a Sexta das 08:00 às 16:20 | Sábado das 08:00 às 17:00
       <br><br><i class="fab fa-whatsapp" style="color: #25D366;"></i> &nbsp;(11) 2484-2656
       <br>`,
  },
  {
    lat: -23.405341397808613,
    lon: -46.38735618999444,
    title: `<strong>Loja Bonsucesso</strong><hr style="margin: 6px 0; border: none; border-top: 1px solid #000;">
       <br><strong>Endereço:</strong> Rua Tamotsu Iwasse, n° 3 - Vila Nova Bonsucesso, Guarulhos/SP - (Loja é dentro do Mercado Nagumo)
       <br><br><strong>Horário de Funcionamento:</strong> Segunda a Sábado das 08:00 às 20:00
       <br><br><i class="fab fa-whatsapp" style="color: #25D366;"></i> &nbsp;(11) 2484-2656
       <br>`,
  },
]);
</script>

<style scoped>
.map-container {
  width: 80%;
  height: 60%;
  margin-top: 8%;
  padding: 32px;
}
</style>
