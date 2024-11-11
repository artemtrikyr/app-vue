//import { createStore } from "./index.js";
const state = {
    categoriesSpa: [
        'Масажі',
        'Догляд за обличчям',
        'Догляд за тілом',
        'Манікюр та педикюр',
        'Сауна та бані',
        'СПА для пари'
    ],
    spaServises: {
        'Масажі': [
            {category:'Масажі', name: 'Класичний масаж', description: 'Розслаблюючий масаж для всього тіла, який знімає напругу та покращує кровообіг.', price: 800 },
            {category:'Масажі', name: 'Ароматерапевтичний масаж', description: 'Масаж із використанням ефірних олій для максимального релаксу та зняття стресу.', price: 1000 },
            {category:'Масажі', name: 'Тайський масаж', description: 'Глибокий масаж із натисканням на енергетичні точки для відновлення енергії тіла.', price: 1200 },
            {category:'Масажі', name: 'Антистресовий масаж', description: 'Масаж для зняття стресу та релаксації м`язів з акцентом на шию і плечі.', price: 900 }
        ],

        'Догляд за обличчям': [
            {category:'Догляд за обличчям', name: 'Глибоке очищення обличчя', description: 'Процедура для очищення пор і вирівнювання текстури шкіри.', price: 600 },
            {category:'Догляд за обличчям', name: 'Антивікові процедури', description: 'Підтягуючий догляд з використанням колагену для зменшення зморшок.', price: 1500 },
            {category:'Догляд за обличчям', name: 'Зволожуючі маски', description: 'Маска для глибокого зволоження сухої та втомленої шкіри.', price: 700 },
            {category:'Догляд за обличчям', name: 'Ліфтинг обличчя', description: 'Інтенсивний ліфтинг для відновлення контурів обличчя та покращення тонусу шкіри.', price: 2000 }
        ],

        'Догляд за тілом': [
            {category:'Догляд за тілом', name: 'Пілінг тіла', description: 'Глибоке очищення шкіри від мертвих клітин для гладкості та свіжості.', price: 800 },
            {category:'Догляд за тілом', name: 'Шоколадне обгортання', description: 'Процедура з використанням шоколаду для живлення та зволоження шкіри.', price: 1200 },
            {category:'Догляд за тілом', name: 'Водоростеве обгортання', description: 'Детокс-процедура для шкіри з використанням водоростей.', price: 1300 },
            {category:'Догляд за тілом', name: 'Розслаблююча процедура для тіла', description: 'Комплексна програма для релаксації та відновлення шкіри.', price: 1500 }
        ],

        'Манікюр та педикюр': [
            {category:'Манікюр та педикюр', name: 'Класичний манікюр', description: 'Основний догляд за нігтями з обробкою кутикули та покриттям лаком.', price: 400 },
            {category:'Манікюр та педикюр', name: 'СПА-манікюр', description: 'Глибокий догляд за руками з використанням зволожуючих масок та масажу.', price: 600 },
            {category:'Манікюр та педикюр', name: 'Класичний педикюр', description: 'Процедура догляду за ногами з обробкою ступні та нанесенням лаку.', price: 500 },
            {category:'Манікюр та педикюр', name: 'Гель-лак', description: 'Довготривале покриття нігтів з використанням гель-лаку.', price: 700 }
        ],

        'Сауна та бані': [
            {category:'Сауна та бані', name: 'Фінська сауна', description: 'Традиційна суха сауна для релаксації та очищення організму.', price: 500 },
            {category:'Сауна та бані', name: 'Інфрачервона сауна', description: 'Сауна з м`яким інфрачервоним теплом для глибокого прогрівання тіла.', price: 700 },
            {category:'Сауна та бані', name: 'Римська баня', description: 'М\n`яка парна з високою вологістю для глибокого очищення та релаксації.', price: 800 },
            {category:'Сауна та бані', name: 'Турецький хамам', description: 'Теплий пар та вологість для м`якого очищення шкіри та відновлення організму.', price: 900 }
        ],

        'СПА для пари': [
            {category:'СПА для пари', name: 'Романтичний масаж для двох', description: 'Релаксаційний масаж для пари у спеціально облаштованій кімнаті.', price: 2500 },
            {category:'СПА для пари', name: 'СПА-процедури для двох', description: 'Комплексний догляд з масажем, обгортанням та пілінгом для пари.', price: 3000 },
            {category:'СПА для пари', name: 'Ванна для двох', description: 'Релакс у ванні з ефірними оліями та сіллю для пари.', price: 1800 },
            {category:'СПА для пари', name: 'Чайна церемонія для двох', description: 'Релаксація з дегустацією спеціальних чаїв після процедур.', price: 1000 }
        ]
    },
}
// servicestore.js
  const mutations = {
    REMOVE_CATEGORY(state, currentCategory) {
      state.categoriesSpa = state.categoriesSpa.filter((cat) => cat !== currentCategory);
    },
    ADD_CATEGORY(state, newCategory) {
      if (!state.categoriesSpa.includes(newCategory)) {
        state.categoriesSpa.push(newCategory);
      }
    },
    ADD_SERVICE(state, { category, servis }) {
      if (!state.spaServises[category]) {
        state.spaServises[category] = [];
      }
      state.spaServises[category].push(servis);
    },
    DELETE_SERVICE(state, { category, service }) {
        const spaServises = state.spaServises[category];
        state.spaServises[category] = spaServises.filter(servis => servis.name !== service.name);
     },
     
  };
  
  const actions = {
    async deleteCategory({ commit }, currentCategory) {
      commit('REMOVE_CATEGORY', currentCategory);
    },
    async addCategory({ commit }, newCategory) {
      commit('ADD_CATEGORY', newCategory);
    },
    async addService({ commit, dispatch }, { category, servis }) {
      servis.category = category;
      commit('ADD_SERVICE', { category, servis });
      await dispatch('addServiceToDb', servis, { root: true });
    },
    async deleteService({ commit, dispatch }, { category, service }) {
        console.log("Deleting service:", service);
        commit('DELETE_SERVICE', { category, service });
        await dispatch('removeServiceFromDb', service, { root: true });
    },    
  };
  
  const getters = {
    getServiceByCategory: (state) => (category) => {
      return state.spaServises[category] || [];
    },
  };
  
  export default {
    namespaced: true,
    state,
    actions,
    getters,
    mutations,
  };
  