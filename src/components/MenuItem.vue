<template>
  <div class="dish-item">
    <h3>{{ dish.name }}</h3>
    <p>{{ dish.description }}</p>
    <span class="price">{{ dish.price }} грн</span> <br>
    <div v-if="isAdmin">
      <button @click="editDish">Редагувати</button>
      <button @click="confirmDeleteDish">Видалити</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MenuItem',
  props: {
    dish: {
      type: Object,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    editDish() {
      alert('Редагувати страву');
    },
    confirmDeleteDish() {
      if (confirm('Ви впевнені, що хочете видалити страву?')){
        this.$emit('delete-dish', this.dish.name);
      }
    }
  }
};
</script>

<style>
/* Стилі для відображення кожної страви */
.dish-item {
  margin-bottom: 20px;
}

.price {
  font-weight: bold;
}
</style>


<style>
.dish-item {
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
  margin-bottom: 20px;
}

.dish-item h3 {
  margin: 0;
  font-size: 1.5rem;
}

.dish-item p {
  margin: 5px 0;
}

.price {
  font-weight: bold;
  color: #d8d8d8;
}

#button-edit-delete {
  background-color: #573f3f;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
  margin-right: 10px;
}

#button-edit-delete:hover {
  transition: all 0.3s ease;
  background-color: #3498db;
}

.button-menu-item {
  padding-left: 10px;
}
</style>
