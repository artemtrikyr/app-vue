<template>
  <div class="dish-item">
    <h3>{{ dish.name }}</h3>
    <p>{{ dish.description }}</p>
    <span class="price">{{ dish.price }} грн</span><br><br>
    <button id="button-edit-delete" v-if="isAdmin" @click="editDish">Редагувати</button>
    <button id="button-edit-delete" v-if="isAdmin" @click="deleteDish">Видалити</button>
  </div>
  
    
  

</template>

<script>
export default {
  name: 'MenuItem',
  data() {
    return {
      isAdmin: localStorage.getItem("isAdmin") === "true",
    }
  },
  mounted() {
    // При завантаженні компонента перевіряємо localStorage
    const adminStatus = localStorage.getItem("isAdmin");
    if (adminStatus === "true") {
      this.isAdmin = true; // Якщо користувач адмін, оновлюємо статус
    }
  },
  props: {
    dish: {
      type: Object,
      required: true,
    },
  },
  methods: {
    editDish() {
      alert("Редагування страви");
    },
    deleteDish() {
      alert("Видалення страви");
    },
  }
};
</script>

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
