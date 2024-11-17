<template>
  <div>
    <h2>{{ currentCategory }}</h2>
    <div v-if="isAdmin" class="isAdmin">
      <button @click="$emit('add-dish')">Додати страву</button>
      <button @click="confirmDeleteCategory">Видалити категорію</button>
    </div>
    <div v-for="dish in dishes" :key="dish.name">
      <MenuItem :dish="dish" 
      :isAdmin="isAdmin" 
      @delete-dish="handleDeleteDish"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import MenuItem from './MenuItem.vue';

export default {
  name: 'MenuList',
  components: {
    MenuItem,
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
    ...mapGetters('menuStore', ['getDishesByCategory']),
    dishes() {return this.getDishesByCategory(this.currentCategory);}
  },
  methods: {
    ...mapActions('menuStore', ['deleteDish']),
    
    handleDeleteDish(dishName) {
      this.deleteDish({ category: this.currentCategory, dishName });
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
h4 {
  font-size: 2rem;
}
</style>