import { createRouter, createWebHistory } from "vue-router";
import FiView from "../views/FiView.vue";
import ManView from "../views/ManView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: FiView,
    },
    {
      path: "/main",
      name: "main",
      component: ManView,
    },
  ],
});

export default router;