<template>
    <div class="servis-item">
      <h3>{{ servis.name }}</h3>
      <p>{{ servis.description }}</p>
      <span class="price">{{ servis.price }} грн</span>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SpaItem',
    props: {
      servis: {
        type: Object,
        required: true,
      },
    },
  };
  </script>
  
  <style >
  .servis-item {
    border-bottom: 1px solid #ccc;
    padding-bottom: 10px;
    margin-bottom: 20px;
  }
  
  .servis-item h3 {
    margin: 0;
    font-size: 1.5rem;
  }
  
  .servis-item p {
    margin: 5px 0;
  }
  
  .price {
    font-weight: bold;
    color: #d8d8d8;
  }
  </style>
  