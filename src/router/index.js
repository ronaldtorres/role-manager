import Vue from "vue";
import VueRouter from "vue-router";
import RoleMangementView from "../views/RoleMangementView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "RoleMangementView",
    component: RoleMangementView,
  },
  {
    path: "/edit/:id",
    name: "EditRoleView",
    // route level code-splitting
    component: () =>
      import(/* webpackChunkName: "edit" */ "../views/EditRoleView.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
