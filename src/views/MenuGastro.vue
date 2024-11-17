<template>
  <div>
    <div class="menu-container">
      <aside class="menu-sidebar">
        <h2>Меню</h2>
        <!-- Відображення -->
        <ul>
          <li v-for="category in categoriesMenu" :key="category.id" @click="selectCategory(category.name)">
            {{ category.name }}
          </li>
        </ul>

        <div v-if="isAdmin" class="isAdmin">
          <input type="text" v-model="newCategory" placeholder="Нова категорія" /><br>
          <button @click="addCategory">Додати категорію</button>
        </div>
      </aside>

      <section class="menu-content">
        <MenuList :currentCategory="currentCategory" :isAdmin="isAdmin" @add-dish="openAddDishForm"
          @delete-category="handleDeleteCategory" />
      </section>

      <!-- Можливість додавання страви -->
      <div v-if="showAddDishForm" class="add-dish-form">
        <h3>Додати нову страву до {{ currentCategory }}</h3>
        <input type="text" v-model="newDishName" placeholder="Назва страви" />
        <input type="text" v-model="newDishDescription" placeholder="Опис страви" />
        <input type="number" v-model="newDishPrice" placeholder="Ціна страви" />
        <button @click="handleAddDish">Додати страву</button>
        <button @click="closeAddDishForm">Скасувати</button>
      </div>
    </div>
  </div>
</template>

<script>
import MenuList from "@/components/MenuList.vue";

export default {
  name: "MenuGastro",
  components: {
    MenuList,
  },
  data() {
    return {
      categoriesMenu: [],
      currentCategory: "",
      newCategory: "",
      newDishName: "",
      newDishDescription: "",
      newDishPrice: null,
      showAddDishForm: false,
    };
  },
  computed: {
    isAdmin() { return localStorage.getItem("isAdmin") === "true"; }
  },
  methods: {
    ...mapActions('menuStore', ['addCategory', 'deleteCategory', 'addDish']),
    selectCategory(category) { this.currentCategory = category; },

    // Видалення категорії
    handleDeleteCategory(currentCategory) {
      this.deleteCategory(currentCategory);

      // Відкриття форми додавання страви
      openAddDishForm() {
        this.showAddDishForm = true;
      };
      closeAddDishForm() {
        this.showAddDishForm = false;
        this.newDishName = ""; // очищаємо поле введення
        this.newDishDescription = "";
        this.newDishPrice = null;
      };

      // Додавання нової страви до поточної категорії
      handleAddDish() {
        if (this.newDishName && this.newDishDescription && this.newDishPrice) {
          const newDish =
          {
            name: this.newDishName,
            description: this.newDishDescription,
            price: this.newDishPrice
          };
          this.addDish({ category: this.currentCategory, dish: newDish });
          this.closeAddDishForm();
        } else {
          alert("Введіть усі данні для страви");
        }
      };
    },
  }
}
</script>


<style>
/* Загальна сторінка */
.menu-container {
  display: flex;
  min-height: 100vh;
  padding-top: 25px;
  background-image: url('@/assets/background-menu.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  position: relative;
}


.menu-container::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 0;
}

/* Ліва статична сторона */
.menu-sidebar {
  width: 200px;
  background-color: #331B17;
  opacity: 0.8;
  color: white;
  padding: 20px;
  padding-top: 40px;
  position: relative;
  overflow-y: auto;
}

.menu-sidebar h2 {
  font-size: 2.4rem;
  margin-bottom: 20px;
}

.menu-sidebar ul {
  list-style: none;
  padding: 0;
}

.menu-sidebar ul li {
  margin-bottom: 15px;
  cursor: pointer;
  font-size: 1.6rem;
}

.menu-sidebar ul li:hover {
  color: #3498db;
}

/* Права скролова сторона */
.menu-content {
  margin-left: 30px;
  padding: 30px;
  flex: 1;
  min-height: 100vh;
  overflow-y: auto;
  color: white;
  position: relative;
}

#button-menu {
  width: 200px;
  height: 40px;
  border-radius: 30px;
  margin-bottom: 10px;
  font-size: 1rem;
  background-color: #573f3f;
  opacity: 90%;
  border: none;
  color: white;
  cursor: pointer;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  font-weight: bolder;
}

/* Форма для додавання страв\послуг */
.add-dish-form {
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  padding: 15px;
  background-color: #331B17;
  opacity: 0.9;
  color: white;
  border-radius: 8px;
  z-index: 1;
  max-width: 300px;
}


.add-dish-form input,
.add-dish-form button {
  margin-bottom: 10px;
  /* Відступ між елементами */
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 1em;
}

.add-dish-form input#description {
  height: 60px;
  /* Збільшена висота для опису */
  resize: vertical;
  /* Дозволяє змінювати висоту вручну */
}

.add-dish-form h3 {
  margin-bottom: 15px;
  font-size: 1.2em;
  text-align: center;
}

.add-dish-form button {
  cursor: pointer;
  background-color: #444;
  color: white;
  border: none;
  transition: all 0.3s;
}

.add-dish-form button:hover {
  background-color: #555;
}
</style>
