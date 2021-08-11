<template>
  <div class="navbar">
    <router-link to="/">Pokemon List</router-link>
    <router-link to="/id">Pokemon por id</router-link>
    <router-link to="/about">About</router-link>
  </div>
</template>

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
