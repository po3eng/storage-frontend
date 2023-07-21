import Vue from "vue";

import VueRouter from "vue-router";
import store from "@/store";
import { ROUTES } from "./constants";

Vue.use(VueRouter);

const routes = [
  {
    component: () => import(/* webpackChunkName: "login" */ "../views/login.vue"),
    ...ROUTES.login,
  },
  {
    component: () => import(/* webpackChunkName: "storage" */ "../views/storage/index.vue"),
    ...ROUTES.storage,
  },
  {
    component: () => import(/* webpackChunkName: "profile" */ "../views/profile.vue"),
    ...ROUTES.profile,
  },
  {
    component: () => import(/* webpackChunkName: "lists" */ "../views/lists.vue"),
    ...ROUTES.lists,
  },
  {
    component: () => import(/* webpackChunkName: "reports" */ "../views/reports.vue"),
    ...ROUTES.reports,
  },
  {
    component: () => import(/* webpackChunkName: "settings" */ "../views/settings"),
    ...ROUTES.settings,
  },
  {
    component: () => import(/* webpackChunkName: "contractors" */ "../views/contractors"),
    ...ROUTES.contractors,
  },
];

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const { requiredAuthorized, requiredAnonymous } = to.meta;

  const user = store.getters["user/getUser"];
  document.title = to.meta.title;
  if (!user && to.path !== "/login") {
    router.push("/login").catch(e => {});
    next();
  }
  next();
});

export default router;
