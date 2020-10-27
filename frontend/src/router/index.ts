import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/results",
    name: "Results",
    component: () => import("../views/Results.vue")
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
