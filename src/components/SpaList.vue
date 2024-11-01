<template>
  <div>
    <h2>{{ currentCategory }}</h2>
    <div v-if="isAdmin" class="isAdmin">
      <button @click="$emit('add-service')">Додати послугу</button>
      <button @click="confirmDeleteCategory">Видалити категорію</button>
    </div>
    <div v-for="servis in getServiceByCategory(currentCategory)" :key="servis.name">
      <SpaItem :servis="servis" 
      :isAdmin="isAdmin" 
      @delete-service="handleDeleteService"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
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
    isAdmin: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    ...mapGetters('serviceStore', ['getServiceByCategory']),
    spaServises() {return this.getServiceByCategory(this.currentCategory);}
  },
  methods: {
    ...mapActions('serviceStore', ['deleteService']),
      
    handleDeleteService(serviceName) {
      this.deleteService({ category: this.currentCategory, serviceName });
    },
    
    confirmDeleteCategory(){
      if(confirm('Ви впевнені що хочете видалити категорію?')){
        this.$emit('delete-category', this.currentCategory)
      }
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