<template>
  <div class="body-page">
    <div class="page1" id="section1-text">
      <h1>Restaurant</h1>
      <p>
        Gastro Wer & Spa is a luxurious complex that offers a perfect blend of fine dining and relaxation.
        The restaurant features modern gourmet cuisine, with a focus on fresh, organic ingredients. Guests can enjoy
        breathtaking views through panoramic windows, enhancing the serene and elegant atmosphere. It is an ideal spot
        for family dinners, romantic evenings, or business meetings.
        The spa is a true oasis of tranquility, offering a range of rejuvenating treatments designed to refresh both
        body and mind, providing a peaceful escape from the hustle and bustle of everyday life.
      </p>
    </div>

    <div class="between-pages"></div>

    <div class="page2">
      <div class="section2-text">
        <h1>SPA salon</h1>
        <p>The spa at Gastro Wer is a modern oasis of tranquility and relaxation, where guests can unwind and
          rejuvenate in a harmonious atmosphere. The interior is designed in a minimalist style, using natural materials
          to create a cozy and calming environment. The spa offers a wide range of services, including various types of
          massages and facial treatments, aimed at restoring both body and mind.
        </p>
      </div>
      <div class="section2-img">
        <img
          src="https://idei.club/uploads/posts/2022-03/1647076556_16-idei-club-p-spa-salon-interer-interer-krasivo-foto-22.jpg"
          alt="cover img">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ExploreGastro',
};
</script>

<style scoped>
.body-page {
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}

.between-pages {
  height: 10px;
  background-color: #221512;
}

/* -------------------- */
/* Секція номер 1 */
/* -------------------- */

/* Загальні налаштування */
.page1 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  height: 100svh;
  background-size: cover;
  background-position: center;
  position: relative;
  overflow: hidden;
  background-image: url("https://www.adelerestaurant.cz/files-sbbasic/sr_adelerestaurant_cz/adele_restaurant___bar_vi._e-mail.jpg");
}

/* Задній фон */
.page1::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 0;
}

#section1-text h1,
#section1-text p {
  position: relative;
  z-index: 1;
}

/* ---------------------- */

/* Тексти секція 1 */
#section1-text h1 {
  margin-left: 10%;
  font-size: 4rem;
  width: 15vw;
  padding: 20px;
  text-align: center;
  padding-top: 10%;
  color: #ffffff;
  /* Додаємо тінь до тексту */
  text-shadow: 5px 5px 10px rgba(0, 0, 0, 1);
}

#section1-text p {
  color: #ffffff;
  font-size: 25px;
  padding: 20px;
  margin-left: 23%;
  width: 70vw;
  padding-bottom: 10%;
  /* Додаємо тінь до тексту */
  text-shadow: 10px 10px 15px rgba(0, 0, 0, 5);
}

/* ---------------------- */
/* Секція номер 2 */
/* ---------------------- */
.page2 {
  display: flex;
  justify-content: space-between;
  /* Вирівнюємо контент по горизонталі */
  align-items: center;
  height: 85vh;
  padding: 40px 3%;
  /* Встановлюємо відступи з боків */
  background-size: cover;
  background-position: center;
  position: relative;
  overflow: hidden;
  background-image: url('https://idei.club/uploads/posts/2022-03/1647076571_3-idei-club-p-spa-salon-interer-interer-krasivo-foto-4.jpg');
}

/* Тінь на задній фон */
.page2::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 0;
}

.section2-text,
.section2-img {
  position: relative;
  z-index: 1;
}

/* текст */
.section2-text {
  display: flex;
  flex-direction: column;
  /* Вирівнюємо h1 і p колоною */
  justify-content: flex-start;
  /* Вирівнюємо елементи по верху */
  align-items: flex-start;
  /* Вирівнюємо текст по лівому краю */
  max-width: 40%;
  /* Обмежуємо ширину текстового блоку */
}

.section2-text h1 {
  color: #ffffff;
  margin-bottom: 20px;
  font-size: 3rem;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
  /* Легка тінь для заголовка */
}

.section2-text p {
  color: #ffffff;
  font-size: 1.2rem;
  line-height: 1.6;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.7);
  /* Легка тінь для тексту */
}

/* фото */
.section2-img {
  max-width: 50%;
  /* Контролюємо ширину зображення */
  display: flex;
  justify-content: center;
  /* Центруємо зображення по вертикалі */
}

.section2-img img {
  width: 100%;
  border: 5px solid #ffffff;
  border-radius: 10px;
  transition: transform 0.5s ease, box-shadow 0.5s ease;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.5);
  /* Тінь для зображення */
}

.section2-img img:hover {
  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.7);
  /* Збільшена тінь при наведенні */
  transform: scale(1.05);
  /* Легке збільшення зображення при наведенні */
}
</style>