<template>
  <h1>About Page</h1>
  <hr />
  <!-- <h2>{{ name }}</h2> -->
  <button @click="onChangeName">Cambiar nombre</button>
</template>

<script>
export default {
  data() {
    return {
      name: "Jc",
    };
  },
  methods: {
    onChangeName() {
      console.log("se cambiara el name jc ayala");
      this.name = "Jc AYALA";
    },
  },

  beforeCreate() {
    console.log("beforeCreate");
  },
  created() {
    console.log("created");
  },
  beforeMount() {
    console.log("beforeMount");
  },
  mounted() {
    console.log("mounted");
  },
  renderTriggered() {
    console.log("renderTriggered");
  },
  beforeUpdate() {
    console.log("beforeUpdate");
  },
  renderTracked() {
    console.log("renderTracked");
  },
  updated() {
    console.log("updated");
  },
  activated() {
    console.log("activated");
  },
  deactivated() {
    console.log("deactivated");
  },
  beforeUnmount() {
    console.log("beforeUnmount");
  },
  unmounted() {
    console.log("unmounted");
  },
};
</script>

<style></style>
