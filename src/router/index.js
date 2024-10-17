import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import MenuGastro from "@/views/MenuGastro.vue";
import ExploreGastro from "@/views/ExploreGastro.vue";
import SpaGastro from "@/views/SpaGastro.vue";

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/menugastro",
    name: "MenuGastro",
    component: MenuGastro,
  },
  {
    path: "/exploregastro",
    name: "ExploreGastro",
    component: ExploreGastro,
  },
  {
    path: "/spagastro",
    name: "SpaGastro",
    component: SpaGastro
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
