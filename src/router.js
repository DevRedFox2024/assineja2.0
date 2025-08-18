/** @format */

import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "principal",
    component: () => import("./views/principalView.vue"),
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
