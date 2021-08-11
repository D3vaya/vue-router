import { createRouter, createWebHashHistory } from "vue-router";
import isAuthenticatedGuard from "./auth-guard";

const routes = [
  { path: "/", redirect: "/pokemon" },
  {
    path: "/pokemon",
    name: "pokemon",
    component: () =>
      import(
        /* webpackChunkName: "PokemonLayout" */ "@/modules/pokemon/layouts/PokemonLayout"
      ),
    children: [
      {
        path: "home",
        name: "pokemon-home",
        component: () =>
          import(
            /* webpackChunkName: "ListPage" */ "@/modules/pokemon/pages/ListPage"
          ),
      },
      {
        path: "about",
        name: "pokemon-about",
        component: () =>
          import(
            /*webpackChunkName: "AboutPage"*/ "@/modules/pokemon/pages/AboutPage"
          ),
      },
      {
        path: "pokemonid/:id",
        name: "pokemon-id",
        component: () =>
          import(
            /*webpackChunkName: "PokemonPage"*/ "@/modules/pokemon/pages/PokemonPage"
          ),
        props: (route) => {
          const id = Number(route.params.id);
          return isNaN(id) ? { id: 1 } : { id };
        },
      },
      { path: "", redirect: { name: "pokemon-about" } },
    ],
  },
  // DBZ
  {
    path: "/dbz",
    name: "dbz",
    beforeEnter: [isAuthenticatedGuard],
    component: () =>
      import(
        /* webpackChunkName: "PokemonLayout" */ "@/modules/dbz/layouts/DbzLayout"
      ),
    children: [
      {
        path: "characters",
        name: "dbz-characters",
        component: () =>
          import(
            /* webpackChunkName: "CharactersPage" */ "@/modules/dbz/pages/Characters"
          ),
      },
      {
        path: "about",
        name: "dbz-about",
        component: () =>
          import(/* webpackChunkName: "About" */ "@/modules/dbz/pages/About"),
      },
      { path: "", redirect: { name: "dbz-characters" } },
    ],
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

// GUARD GLOBAL SINCRONO
// router.beforeEach((to, from, next) => {
//   const random = Math.random() * 100;
//   if (random > 50) {
//     console.log("autenticado", random);
//     next();
//   } else {
//     console.log("no autenticado", random);
//     next({ name: "pokemon-home" });
//   }
// });

// GUARD GLOBAL ASINCRONO
// const canAccess = () => {
//   return new Promise((resolve) => {
//     const random = Math.random() * 100;
//     if (random > 50) {
//       console.log("autenticado - Can Access", random);
//       resolve(true);
//     } else {
//       console.log("no autenticado Can Access", random);
//       resolve(false);
//     }
//   });
// };

// router.beforeEach(async (to, from, next) => {
//   const authorized = await canAccess();
//   authorized ? next() : next({ name: "pokemon-home" });
// });

export default router;
