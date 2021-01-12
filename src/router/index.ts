import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "@/views/Home.vue";
import ApiView from "@/views/ApiView.vue";
import DataView from "@/views/DataView.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/apiview",
    name: "Api View",
    component: ApiView
  },
  {
    path: "/dataview",
    name: "Data View",
    component: DataView
  }
  // TODO: 404
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
