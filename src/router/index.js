import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/HomePage.vue";

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/menugastro",
    name: "MenuGastro",
    component: () => import ("@/views/MenuGastro.vue"),
  },
  {
    path: "/exploregastro",
    name: "ExploreGastro",
    component: () => import ("@/views/ExploreGastro.vue"),
  },
  {
    path: "/spagastro",
    name: "SpaGastro",
    component: () => import ("@/views/SpaGastro.vue"),
  },
  {
    path: "/loginadmin",
    name: "LoginAdmin",
    component: () => import ("@/views/LoginAdmin.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
