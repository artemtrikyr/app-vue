<template>
  <div class="spa-container">
    <!-- Ліва статична колонка -->
    <aside class="spa-sidebar">
      <h2>Послуги</h2>
      <ul>
        <li v-for="category in categories" :key="category" @click="selectCategory(category)">
          {{ category }}
        </li>
      </ul>
      <div v-if="isAdmin">
        <button id="button-menu" @click="addCategory">Додати категорію</button>
      </div>
    </aside>

    <!-- Права скролювана колонка з MenuList -->
    <section class="spa-content">
      <SpaList :currentCategory="currentCategory" />
      <button v-if="isAdmin" id="button-menu" @click="addServise">Додати послугу</button>
      <button v-if="isAdmin" id="button-menu" @click="deleteCategory">Видалити категорію</button>
    </section>
  </div>


</template>

<script>
import SpaList from '@/components/SpaList.vue';

export default {
  name: 'SpaGastro',
  components: {
    SpaList,
  },
  data() {
    return {
      categories: [
        'Масажі',
        'Догляд за обличчям',
        'Догляд за тілом',
        'Манікюр та педикюр',
        'Сауна та бані',
        'СПА для пари'
      ],
      currentCategory: 'Масажі',
      isAdmin: localStorage.getItem("isAdmin") === "true",
    };
  },
  mounted() {
    const adminStatus = localStorage.getItem("isAdmin");
    if (adminStatus === "true") {
      this.isAdmin = true;
    }
  },
  methods: {
    selectCategory(category) {
      this.currentCategory = category;
    },
    addServise() {
      alert("Додавання послуги");
    },
    deleteCategory() {
      alert("Видалення категорії");
    },
    addCategory() {
      alert("Додавання категорії")
    }
  },
};
</script>

<style>
/* Загальна сторінка */
.spa-container {
  display: flex;
  min-height: 100vh;
  /* Змінено на мінімальну висоту */
  padding-top: 25px;
  background-image: url("https://bushi-resort-spa-skopje.hotelmix.com.ua/data/Photos/OriginalPhoto/15567/1556718/1556718961/Bushi-Resort-Spa-Skopje-Exterior.JPEG");
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
</style>