<template>
  <div class="navbar">
    <!-- <router-link :to="{ name: 'home' }">Pokemon List</router-link>
    <router-link :to="{ name: 'pokemon-id', params: { id: 85 } }"
      >Pokemon por id</router-link
    >
    <router-link :to="{ name: 'about' }">About</router-link> -->
    <CustomLink v-for="link in links" :key="link.to" :link="link" />
  </div>
</template>
<script>
import { defineAsyncComponent } from "vue";
export default {
  data() {
    return {
      links: [
        { to: "pokemon-home", name: "Pokemons" },
        { to: "pokemon-id", name: "Por id", id: 105 },
        { to: "pokemon-about", name: "About" },

        { to: "dbz-characters", name: "Personajes" },
        { to: "dbz-about", name: "DBZ-About" },

        { to: "https://google.com", name: "Google" },
      ],
    };
  },
  components: {
    CustomLink: defineAsyncComponent(() => import("./CustomLink.vue")),
  },
};
</script>
<style scoped>
.navbar {
  padding: 0 30px;
}
.navbar a {
  font-weight: bold;
  color: #2c3e50;
  margin: 0 10px;
}
.router-link-exact-active {
  color: #42b983 !important;
}
</style>
