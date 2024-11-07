<template>
  <div class="loader">
    <video autoplay muted loop playsinline>
      <source src="@/assets/load-video.mp4" type="video/mp4" />
      Ваш браузер не підтримує відео.
    </video>
  </div>
</template>

<style scoped>
.loader {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000;
  /* Резервний колір фону */
}

video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* Заповнює весь екран */
}
</style>