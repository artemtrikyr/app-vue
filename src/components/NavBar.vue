<template>
  <nav class="navbar">
    <ul class="nav-links">
      <li>
        <router-link to="/">Home</router-link>
      </li>
    </ul>
    <ul class="nav-links">
      <li>
        <router-link to="/menugastro">Restaurant</router-link>
      </li>
    </ul>
    <div class="logo">
      <h2>Gastro Wer</h2>
    </div>
    <ul class="nav-links">
      <li>
        <router-link to="/spagastro">SPA - Servis</router-link>
      </li>
    </ul>
    <div class="nav-links">
      <li>
        <a v-if="!isAdmin" @click.prevent="HandleAuth">Login</a>
        <a v-if="isAdmin" @click.prevent="HandleAuth">Logout</a>
      </li>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      isAdmin: localStorage.getItem("isAdmin") === "true", // Ініціалізація статусу
    };
  },
  methods: {
    HandleAuth() {
      if (this.isAdmin) {
        localStorage.removeItem("isAdmin");
        this.isAdmin = false;
        this.$router.push("/"); 
      } else {
        this.$router.push("/loginadmin");
      }
    },
  },
  watch: {
    '$route'() {
      this.isAdmin = localStorage.getItem("isAdmin") === "true"; 
    },
  },
};
</script>
<style scoped>
.navbar {
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #331B17;
  opacity: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 10;
}


.logo h2 {
  color: white;
  text-decoration: none;
  font-size: 1.5rem;
  transition: color 0.3s ease;
}

.logo h2:hover {
  color: #3498db;
}

.nav-links {
  display: flex;
  list-style: none;
  padding-left: 1.5%;
  padding-right: 1.5%;
}

.nav-links li {
  margin: 0 10px;
}

.nav-links li a {
  color: white;
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.3s ease;
}

.nav-links li a:hover {
  color: #3498db;
}

.button-login {

  list-style: none;

}

.button-login li {}

.button-login li a {
  color: white;
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.3s ease;
}

.button-login li a:hover {
  color: #3498db;
}


/* Burger Menu */
/* .burger {
  display: none;
  cursor: pointer;
  flex-direction: column;
  justify-content: space-between;
  width: 25px;
  height: 20px;
} */

/* .burger div {
  width: 100%;
  height: 3px;
  background-color: white;
  border-radius: 10px;
  transition: all 0.3s ease;
}

@media screen and (max-width: 768px) {
  .nav-links {
    position: absolute;
    right: 0;
    height: 100vh;
    top: 0;
    background-color: rgba(0, 0, 0, 0.9);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
    transform: translateX(100%);
    transition: transform 0.5s ease;
  }

  .nav-links.nav-active {
    transform: translateX(0%);
  }

  .nav-links li {
    margin: 20px 0;
  }

  .burger {
    display: flex;
  }

  .burger-active .line1 {
    transform: rotate(-45deg) translate(-5px, 6px);
  }

  .burger-active .line2 {
    opacity: 0;
  }

  .burger-active .line3 {
    transform: rotate(45deg) translate(-5px, -6px);
  }
} */
</style>
