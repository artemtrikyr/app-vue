import { createStore } from "vuex";
import menuStore from './menustore';
import serviceStore from './servicestore';
import db  from '../firebase-config';
import {
  collection,
  onSnapshot,
  addDoc,
  deleteDoc,
  doc
} from 'firebase/firestore';

export default createStore({
  state: {
    isLoggedIn: localStorage.getItem("isAdmin") === "true",
    spaServices: [],
  },
  mutations: {
    SET_SERVICES_LIST(services) {
      console.log(serviceStore.state.spaServices);
      serviceStore.state.spaServices = services;
    },
    ADD_SERVICE({ category, servis }) {
      if (!serviceStore.state.spaServises[category]) {
        serviceStore.state.spaServises[category] = [];
      }
      serviceStore.state.spaServises[category].push(servis);
    },
  },
  actions: {
    async fetchServices({ commit }, category) {
      const servicesRef = collection(db, 'services');
      const categoryServices = [];
      
      // Real-time listener for updates on the 'services' collection
      onSnapshot(servicesRef, (querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // Push each service document to the array
          const service = { id: doc.id, ...doc.data() };
          categoryServices.push(service);
        });
        
        // Commit the services data to Vuex store
        commit('SET_SERVICES', { category, services: categoryServices });
      });
    },
    async addServiceToDb(_, servis) {
      try {
        const docRef = await addDoc(collection(db, 'services'), {
          name: servis.name,
          description: servis.description,
          price: servis.price,
          category: servis.category,
        });
        // Now include the generated ID in the service object
        const newServiceWithId = { ...servis, id: docRef.id };
        serviceStore.state.spaServises.push(newServiceWithId);
        // Save the service locally in the Vuex store
        // Save the service locally in the Vuex store
        //commit('ADD_SERVICE', { cat, servis: newServiceWithId });
    
        this.dispatch('fetchServices');
      } catch (error) {
        console.error('Error adding service:', error);
      }
    },
    async removeServiceFromDb(_,service) {
      try {
        // Перевірте, що service.id існує
        service=serviceStore.state.filter(id=>id.name=service.name);
        console.log(service[0]);
        const serviceRef = doc(db, 'services', service[0].id); // Ensure service has an 'id' field
        await deleteDoc(serviceRef);
        //commit('REMOVE_SERVICE', service);
      } catch (error) {
        console.error('Помилка при видаленні сервісу: ', error);
      }
    }
  },
  modules: {
    menuStore,
    serviceStore,
  },
});
