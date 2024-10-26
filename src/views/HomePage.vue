<template>
  <div class="home-page">
    <header>
      <h1 class="header-1">A place where everything</h1>
      <h1 class="header-2">complements Each Other...</h1>
    </header>
    <div class="main-text">
      <p>Welcome to our complex!</p>
    </div>
    <button @click="GoToPage" class="button-explore">Explore!</button>
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

<style>
.home-page {
  display: flex;
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
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
/* тінь на задній фон */
.home-page::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 0; 
}
.home-page h1,
.main-text,
button {
  position: relative;
  z-index: 1; 
}

.home-page h1 {
  font-size: 4rem;
}
/* надпис */
header {
  text-align: center;
  color: white;
  padding-top: 60px;
  z-index: 1;
}
.header-1 {
  margin-right: 150px;
}
.header-2 {
  margin-left: 200px;
}


.main-text{
  text-align: center;
  padding-top: 100px;
  color: white;
  text-shadow: 4px 4px 7px rgba(0, 0, 0, 1);
}
.main-text p{
  font-size: 20px;
}


h1 {
  color: #ffffff;
  text-shadow: 4px 4px 7px rgba(0, 0, 0, 1);
  margin-bottom: 20px;

}

.button-explore {
  width: 200px;
  height: 40px;
  border-radius: 30px;
  font-size: 1rem;
  background-color: #56423e;
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
