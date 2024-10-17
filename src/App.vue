<template>
  <div id="app">
    <NavBar />
    <router-view />
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";

export default {
  components: {
      NavBar,
  }
};
</script>

<style lang="scss" scoped>
body {
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
}
</style>
