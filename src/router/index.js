import Vue from "vue";
import VueRouter from "vue-router";
import TableNative from "@/components/TableNative";
import TableFlex from "@/components/TableFlex";
import TableGrid from "@/components/TableGrid";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "native",
    component: TableNative,
  },
  {
    path: "/flex",
    name: "flex",
    component: TableFlex,
  },
  {
    path: "/grid",
    name: "grid",
    component: TableGrid,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
