<template>
  <div id="app">
    <NavBar  />
    <router-view />
    <FooterBar />
  </div>
</template>

<script>
import FooterBar from "./components/FooterBar.vue";
import NavBar from "./components/NavBar.vue";

export default {
  data() {
      return {
      }
  },
  components: {
    NavBar,
    FooterBar,
  },
}
</script>


<style>
body {
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  background-color: #f4f4f4;
  margin: 0;
}
.isAdmin button{
  cursor: pointer;
  border-radius: 5px;
  background-color: #444;
  margin-top: 7px;
  margin-right: 3px;
  margin-bottom: 5px;
  color: white;
  border: none;
  transition: all 0.3s;
}
</style>
