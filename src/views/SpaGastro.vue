<template>
  <div class="spa-container">
    <!-- Ліва статична колонка -->
    <aside class="spa-sidebar">
      <h2>Послуги</h2>
      <ul>
        <li v-for="category in categoriesSpa" :key="category" @click="selectCategory(category)">
          {{ category }}
        </li>
      </ul>

      <div v-if="isAdmin" class="isAdmin">
          <input type="text" v-model="newCategory" placeholder="Нова категорія" /><br>
          <button @click="addCategory(newCategory)">Додати категорію</button>
        </div>
    </aside>

    <!-- Права скролювана колонка з MenuList -->
    <section class="spa-content">
      <SpaList :currentCategory="currentCategory" 
      :isAdmin="isAdmin" 
      @add-service="openAddServiceForm"
      @delete-category="handleDeleteCategory"/>
    </section>

    <div v-if="showAddServiceForm" class="add-service-form">
        <h3>Додати нову послугу до {{ currentCategory }}</h3>
        <input type="text" v-model="newServiceName" placeholder="Назва послуги" />
        <input type="text" v-model="newServiceDescription" placeholder="Опис послуги" />
        <input type="number" v-model="newServicePrice" placeholder="Ціна послуги" />
        <button @click="handleAddService">Додати послугу</button>
        <button @click="closeAddServiceForm">Скасувати</button>
      </div>
  </div>


</template>

<script>
import { mapState, mapActions } from "vuex";
import SpaList from '@/components/SpaList.vue';

export default {
  name: 'SpaGastro',
  components: {
    SpaList,
  },
  data() {
    return {
      currentCategory: 'Масажі',
      newCategory: "",
      newServiceName: "",
      newServiceDescription: "",
      newServicePrice: null,
      showAddServiceForm: false,
    };
  },

  computed: {
      ...mapState('serviceStore', ['categoriesSpa']),
      isAdmin() {return localStorage.getItem("isAdmin") === "true";}
  },

  methods: {
    ...mapActions('serviceStore', ['addCategory', 'deleteCategory', 'addService']),
    selectCategory(category) {this.currentCategory = category;},
    
    //метод видалення категоріїї
    handleDeleteCategory(currentCategory) {
      this.deleteCategory(currentCategory);
    },

    openAddServiceForm() {
      this.showAddServiceForm = true;
    },

    closeAddServiceForm() {
      this.showAddServiceForm = false;
      this.newServiceName = ""; // очищаємо поле введення
      this.newServiceDescription = "";
      this.newServicePrice = null;
    },
    handleAddService() {
      if(this.newServiceName && this.newServiceDescription && this.newServicePrice){
        const newService = 
        { 
          name: this.newServiceName,
          description: this.newServiceDescription,
          price: this.newServicePrice
        };
        this.addService({ category: this.currentCategory, servis: newService });
        this.closeAddServiceForm();
      } else {
        alert("Введіть усі данні для послуги");
      }
    },
  },
};
</script>

<style>
/* Загальна сторінка */
.spa-container {
  display: flex;
  min-height: 100vh;
  padding-top: 25px;
  background-image: url('@/assets/background-spa.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  position: relative;
}

.spa-container::before {
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
.spa-sidebar {
  width: 200px;
  background-color: #331B17;
  opacity: 0.8;
  color: white;
  padding: 20px;
  padding-top: 40px;
  position: relative;
  /* Змінено з fixed */
  overflow-y: auto;

}

.spa-sidebar h2 {
  font-size: 2.4rem;
  margin-bottom: 20px;
}

.spa-sidebar ul {
  list-style: none;
  padding: 0;
}

.spa-sidebar ul li {
  margin-bottom: 15px;
  cursor: pointer;
  font-size: 1.6rem;
}

.spa-sidebar ul li:hover {
  color: #3498db;
}

/* Права скролова сторона */
.spa-content {
  margin-left: 30px;
  /* Відстань від лівого боку */
  padding: 20px;
  padding-top: 30px;
  flex: 1;
  min-height: 100vh;
  /* Мінімальна висота */
  overflow-y: auto;
  color: white;
  position: relative;
}

#button-spa {
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
.add-service-form {
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


.add-service-form input,
.add-service-form button {
  margin-bottom: 10px;
  /* Відступ між елементами */
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 1em;
}

.add-service-form input#description {
  height: 60px;
  /* Збільшена висота для опису */
  resize: vertical;
  /* Дозволяє змінювати висоту вручну */
}

.add-service-form h3 {
  margin-bottom: 15px;
  font-size: 1.2em;
  text-align: center;
}

.add-service-form button {
  cursor: pointer;
  background-color: #444;
  color: white;
  border: none;
  transition: all 0.3s;
}

.add-service-form button:hover {
  background-color: #555;
}
</style>