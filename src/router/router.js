import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () =>
      import(
        /* webpackChunkName: "ListPage" */ "@/modules/pokemon/pages/ListPage"
      ),
  },

  {
    path: "/about",
    component: () =>
      import(
        /*webpackChunkName: "AboutPage"*/ "@/modules/pokemon/pages/AboutPage"
      ),
  },
  {
    path: "/id",
    component: () =>
      import(
        /*webpackChunkName: "PokemonPage"*/ "@/modules/pokemon/pages/PokemonPage"
      ),
  },
  {
    path: "/:pathmatch(.*)*",
    component: () =>
      import(
        /*webpackChunkName: "NoPagefound"*/ "@/modules/shared/pages/NoPagefound"
      ),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
