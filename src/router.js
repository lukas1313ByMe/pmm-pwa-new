import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import tag from "./views/leftSide.vue";
import rightSide from "./views/rightSide.vue";
import advertise from "./views/advertisment.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "*",
      component: Home
    },
    {
      path: "/home/:id",
      name: "home",
      component: Home
    },
    {
      path: "/tag/:id",
      name: "tag",
      component: tag
    },
    {
      path: "/text",
      name: "text",
      component: rightSide
    },
    {
      path: "/advertisment",
      name: "advertsiment",
      component: advertise
    }
  ]
});
