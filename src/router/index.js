import Vue from "vue";
import VueRouter from "vue-router";
import CurrencyList from "../views/CurrencyList";
import CurrencyConverter from "../views/CurrencyConverter";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Main",
    component: CurrencyList,
  },
  {
    path: "/converter",
    name: "Converter",
    component: CurrencyConverter,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
