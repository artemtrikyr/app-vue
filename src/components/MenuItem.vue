<template>
  <div class="dish-item">
    <h3>{{ dish.name }}</h3>
    <p>{{ dish.description }}</p>
    <span class="price">{{ dish.price }} грн</span>
  </div>
</template>

<script>
export default {
  name: 'MenuItem',
  props: {
    dish: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style >
.dish-item {
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
  margin-bottom: 20px;
}

.dish-item h3 {
  margin: 0;
  font-size: 1.5rem;
}

.dish-item p {
  margin: 5px 0;
}

.price {
  font-weight: bold;
  color: #d8d8d8;
}
</style>
