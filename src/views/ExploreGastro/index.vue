<template>
    <div class="body-page">
        <div class="section" id="section1">
    <h1>Ресторан Gastro Wer</h1>
    <p>
      some adittional text some adittional text some adittional text some
      adittional text some adittional text some adittional text
    </p>
  </div>
  <div class="section" id="section2">
    <h1>Explore Our Dining</h1>
    <img src="https://image-tc.galaxy.tf/wijpeg-ay9bwdfei91yjxj1hhwg7e09e/promo1.jpg?width=1920" alt="cover img">
  </div>
    </div>
</template>

<script>
export default {
  name: 'ExploreGastro',
};
</script>

<style scoped>
.section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100svh;
  background-size: cover;
  background-position: center;
  position: relative;
  overflow: hidden;
}

#section1 {
  flex-direction: row;
  justify-content: space-around;
  background-image: url("https://turvopros.com/wp-content/uploads/2023/04/restorani-dubaya-s-krasivym-vidom.jpg");
}

#section1 h1 {
  width: 40vw;
  background-color: rgb(0 0 0/0.5);
  padding: 20px;
  border-radius: 10px;
  text-align: center;
}

#section1 p {
  background-color: rgb(0 0 0/0.5);
  padding: 20px;
  border-radius: 10px;
  width: 40vw;
}

#section2 {
  background-color: #262626;
  text-align: center;
  padding: 50px 0;
  justify-content: space-evenly;
  

}

#section2 h1 {
  color: #ffffff;
  margin-bottom: 20px;
}

#section2 img {
  width: 55vw;
  border: 5px solid #ffffff;
  border-radius: 10px;
  transition: transform 1.5s ease, box-shadow 0.5s ease;
}

#section2 img:hover {
  box-shadow: 0 8px 20px rgba(255, 255, 255, 0.3);
  transform: scale(1.3);
}

header {
  text-align: center;
  color: white;
  z-index: 2;
}

h1 {
  font-size: 7rem;
  color: #ffffff;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
  margin-bottom: 20px;
}
</style>