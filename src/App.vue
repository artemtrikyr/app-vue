<template>
  <div id="app">
    <NavBar />
    <router-view />
    <FooterBar />
  </div>
</template>

<script>
import FooterBar from "./components/FooterBar.vue";
import NavBar from "./components/NavBar.vue";

export default {
  components: {
      NavBar,
      FooterBar,
  }
};
</script>

<style>
body {
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  background-color: #f4f4f4;
  margin: 0;
}
</style>
