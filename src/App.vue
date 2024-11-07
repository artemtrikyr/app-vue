<template>
  <div id="app">
    <LoaderB v-if="isLoading" />
    <NavBar  />
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in" @before-enter="startLoading" @after-enter="finishLoading">
        <component :is="Component" />
      </transition>
    </router-view>
    <FooterBar />
  </div>
</template>

<script>
import FooterBar from "./components/FooterBar.vue";
import NavBar from "./components/NavBar.vue";
import LoaderB from "./components/LoaderB.vue";

export default {
  data() {
      return {
        isLoading: false,
      }
  },
  components: {
    NavBar,
    FooterBar,
    LoaderB
  },
  methods: {
    startLoading() {
      this.isLoading = true;
    },
    finishLoading() {
      this.isLoading = false;
    },
  },
}
</script>


<style>
body {
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  background-color: #f4f4f4;
  margin: 0;
}

/* Анімація переходу */
.fade-enter-active, .fade-leave-active {
  transition: opacity 1.1s ease;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
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
