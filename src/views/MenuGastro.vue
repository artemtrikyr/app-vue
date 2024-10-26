<template>
  <div>
    <div class="menu-container">
      <aside class="menu-sidebar">
        <h2>Меню</h2>
        <ul>
          <li v-for="category in categories" :key="category" @click="selectCategory(category)">
            {{ category }}
          </li>
        </ul>
        <div v-if="isAdmin">
          <button id="button-menu" @click="addCategory">Додати категорію</button>
        </div>
      </aside>

      <section class="menu-content">
        <MenuList :currentCategory="currentCategory" />
        <button v-if="isAdmin" id="button-menu" @click="addDish">Додати страву</button>
        <button v-if="isAdmin" id="button-menu" @click="deleteCategory">Видалити категорію</button>
      </section>
      
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
      categories: [
        "Перші страви",
        "Другі страви",
        "Гриль",
        "Салати",
        "Сніданки",
        "Лаваш",
        "Закуски",
        "Піца",
        "Напої",
      ],
      currentCategory: "Перші страви",
      isAdmin: localStorage.getItem("isAdmin") === "true",
    };
  },
  mounted() {
    // При завантаженні компонента перевіряємо localStorage
    const adminStatus = localStorage.getItem("isAdmin");
    if (adminStatus === "true") {
      this.isAdmin = true; // Якщо користувач адмін, оновлюємо статус
    }
  },
  methods: {
    selectCategory(category) {
      this.currentCategory = category;
    },
    addDish() {
      alert("Додавання страви");
    },
    deleteCategory(){
      alert("Видалення категорії");
    },
    addCategory(){
      alert("Додавання категорії")
    }
  },
};
</script>


<style>
/* Загальна сторінка */
.menu-container {
  display: flex;
  min-height: 100vh;
  padding-top: 25px;
  background-image: url("https://media.admagazine.ru/photos/61bc62f42892c167ea82922a/16:9/w_2560%2Cc_limit/%25D0%25BE%25D0%25B1%25D0%25BB%25D0%25BE%25D0%25B6%25D0%25BA%25D0%25B0.jpg");
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
</style>
