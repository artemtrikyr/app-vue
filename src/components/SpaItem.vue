<template>
  <div class="servis-item">
    <h3>{{ servis.name }}</h3>
    <p>{{ servis.description }}</p>
    <span class="price">{{ servis.price }} грн</span><br><br>
    <button id="button-edit-delete" v-if="isAdmin" @click="editServies">Редагувати</button>
    <button id="button-edit-delete" v-if="isAdmin" @click="deleteServies">Видалити</button>
  </div>
  
</template>


<script>
export default {
  name: 'SpaItem',
  data() {
    return {
      isAdmin: localStorage.getItem("isAdmin") === "true",
    }
  },
  mounted() {
    const adminStatus = localStorage.getItem("isAdmin");
    if (adminStatus === "true") {
      this.isAdmin = true; 
    }
  },
  props: {
    servis: {
      type: Object,
      required: true,
    },
  },
  methods: {
    editServies() {
      alert("Редагування страви");
    },
    deleteServies() {
      alert("Видалення страви");
    },
  }
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