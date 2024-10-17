<template>
  <div class="home-page">
    <header>
      <h1 class="header-1">A place where everything</h1>
      <h1 class="header-2">complements each other...</h1>
    </header>
      <div class="main-text">
       
      </div>
      <button @click="GoToPage">Explore!</button>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  methods: {
    GoToPage() {
      this.$router.push('/exploregastro');
    },
  },
};
</script>

<style scoped>
.home-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url("https://www.christravelblog.com/wp-content/uploads/2015/09/IMG_1974-czech-intercontinental-prague-luxury-hotel-review-002.jpg");
  background-size: cover;
  background-position: center;
  position: relative;
  overflow: hidden;
}

.home-page h1 {
  font-size: 2rem;
}


header {
  text-align: center;
  color: white;
  z-index: 1;
}
.header-1{
  margin-right: 150px;
}
.header-2{
  margin-left: 200px;
}


h1 {
  color: #ffffff;
  text-shadow: 4px 4px 7px rgba(0, 0, 0, 1);
  margin-bottom: 20px;
  
}

button {
  width: 200px;
  height: 40px;
  border-radius: 30px;
  font-size: 1rem;
  margin-top: 50px;
  background-color: #353535;
  opacity: 90%;
  border: none;
  color: white;
  cursor: pointer;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  font-weight: bolder;
}

button:hover {
  background-color: #2f3cc3;
  opacity: 100%;
  transform: translateY(-5px);
  box-shadow: 0px 12px 20px rgba(0, 0, 0, 0.3);
}

@keyframes fadeIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
