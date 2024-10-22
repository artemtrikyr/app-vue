<template>
  <div class="menu-container">
    <!-- Ліва статична колонка -->
    <aside class="menu-sidebar">
      <h2>Меню</h2>
      <ul>
        <li v-for="category in categories" :key="category" @click="selectCategory(category)">
          {{ category }}
        </li>
      </ul>
    </aside>

    <!-- Права скролювана колонка з MenuList -->
    <section class="menu-content">
      <MenuList :currentCategory="currentCategory" />
    </section>
  </div>
  

</template>

<script>
import MenuList from '@/components/MenuList.vue';

export default {
  name: 'MenuGastro',
  components: {
    MenuList,
  },
  data() {
    return {
      categories: [
        'Перші страви', 
        'Другі страви', 
        'Гриль', 
        'Салати', 
        'Сніданки', 
        'Лаваш', 
        'Закуски', 
        'Піца', 
        'Напої',
      ],
      currentCategory: 'Перші страви',
    };
  },
  methods: {
    selectCategory(category) {
      this.currentCategory = category;
    },
  },
};
</script>

<style >

/* Загальна сторінка */
.menu-container {
  display: flex;
  min-height: 100vh; /* Змінено на мінімальну висоту */
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
  position: relative; /* Змінено з fixed */
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
  margin-left: 30px; /* Відстань від лівого боку */
  padding: 20px;
  flex: 1;
  min-height: 100vh; /* Мінімальна висота */
  overflow-y: auto;
  color: white;
  position: relative;
}
</style>
