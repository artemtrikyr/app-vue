<template>
  <div class="dish-item">
    <h3>{{ dish.name }}</h3>
    <p>{{ dish.description }}</p>
    <span class="price">{{ dish.price }} грн</span>
    
    <div v-if="isAdmin" class="admin-actions">
      <button @click="confirmDeleteDish">Видалити</button>
      <!-- Додати кнопку редагування, якщо потрібно -->
      <button @click="toggleEditForm">Редагувати</button>
    </div>
    
    <!-- Форма редагування -->
    <div v-if="editFormVisible" class="edit-form">
      <input v-model="editedDish.name" placeholder="Нову назву страви" />
      <input v-model="editedDish.description" placeholder="Новий опис" />
      <input v-model="editedDish.price" type="number" placeholder="Нова ціна" />
      <button @click="submitEdit">Зберегти</button>
      <button @click="toggleEditForm">Скасувати</button>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2';

export default {
  name: 'MenuItem',
  props: {
    dish: {
      type: Object,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      editFormVisible: false,
      editedDish: { ...this.dish }, // Копія даних для редагування
    };
  },
  methods: {
    // Підтвердження видалення
    confirmDeleteDish() {
      Swal.fire({
        title: 'Ви впевнені?',
        text: 'Цей процес не можна скасувати!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Так, видалити!',
        cancelButtonText: 'Скасувати',
      }).then(async (result) => {
        if (result.isConfirmed) {
          this.$emit('delete-dish', this.dish.name);
        }
      });
    },
    
    // Перемикання форми редагування
    toggleEditForm() {
      this.editFormVisible = !this.editFormVisible;
      if (!this.editFormVisible) {
        this.editedDish = { ...this.dish }; // Скидання змін
      }
    },
    
    // Надсилання редагованих даних
    submitEdit() {
      this.$emit('update-dish', this.editedDish); // Відправка відредагованих даних
      this.toggleEditForm(); // Закриття форми редагування
    },
  },
};
</script>

<style scoped>
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

.admin-actions button {
  background-color: #573f3f;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
  margin-right: 10px;
}

.admin-actions button:hover {
  background-color: #3498db;
  transition: all 0.3s ease;
}

.edit-form {
  margin-top: 10px;
}

.edit-form input {
  display: block;
  margin: 10px 0;
  padding: 5px;
  width: 100%;
}

.edit-form button {
  background-color: #3498db;
  color: white;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.edit-form button:hover {
  background-color: #2e8cc9;
}
</style>
