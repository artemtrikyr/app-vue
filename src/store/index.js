import { createStore } from "vuex";
import menuStore from './menustore';   
import serviceStore from './servicestore';

export default createStore({
  state: {
    isLoggedIn: localStorage.getItem("isAdmin") === "true",
  },
  mutations: {
    
  },
  actions: {
    
  },
  getters: {
    
  },
  modules: {
    menuStore,
    serviceStore,
  },
});
