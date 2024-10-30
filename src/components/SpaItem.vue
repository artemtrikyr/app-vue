<template>
  <div class="servis-item">
    <h3>{{ servis.name }}</h3>
    <p>{{ servis.description }}</p>
    <span class="price">{{ servis.price }} грн</span><br><br>
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

<style>
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
#button-edit-delete {
  background-color: #573f3f;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
  margin-right: 10px;
}

#button-edit-delete:hover {
  transition: all 0.3s ease;
  background-color: #3498db;
}

.button-menu-item {
  padding-left: 10px;
}
</style>