<template>
  <div>
    <h2>{{ currentCategory }}</h2>
    <div v-for="servis in getServiceByCategory(currentCategory)" :key="servis.name">
      <SpaItem :servis="servis" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import SpaItem from './SpaItem.vue';

export default {
  name: 'SpaList',
  components: {
    SpaItem,
  },
  props: {
    currentCategory: {
      type: String,
      required: true,
    },
  },
  computed: {
    ...mapGetters(['getServiceByCategory']),
    spaServises() {
      return this.getServiceByCategory(this.currentCategory);
    }
  }
};
</script>

<style>
h2 {
  font-size: 2rem;
  margin-bottom: 20px;
}
</style>