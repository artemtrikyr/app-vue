<template>
  <div>
    <h2>{{ currentCategory }}</h2>
    <div v-if="isAdmin">
      <button @click="$emit('add-dish')">Додати страву</button>
      <button @click="$emit('delete-category', currentCategory)">Видалити категорію</button>
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
    ...mapGetters(['getDishesByCategory']),
    dishes() {
      return this.getDishesByCategory(this.currentCategory);
    }
  },
  methods: {
      ...mapActions(['deleteDish']),
      handleDeleteDish(dishName) {
      this.deleteDish({ category: this.currentCategory, dishName });
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
