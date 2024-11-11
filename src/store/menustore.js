// const state = {
//     categoriesMenu: [
//         'Перші страви',
//         'Другі страви',
//         'Гриль',
//         'Салати',
//         'Сніданки',
//         'Лаваш',
//         'Закуски',
//         'Піца',
//         'Напої',
//     ],
//     dishes: {
//         'Перші страви': [
//             { name: 'Гаспачо', description: 'Холодний суп із томатів, огірків та спецій. Ідеальний варіант для спекотного дня.', price: 120 },
//             { name: 'Борщ', description: 'З класичним буряком, картоплею та спеціями. Традиційна українська страва.', price: 100 },
//             { name: 'Крем-суп', description: 'Легкий кремовий суп на основі вершків і овочів.', price: 120 },
//             { name: 'Мінестроне', description: 'Овочевий італійський суп із макаронами та зеленню.', price: 140 },
//             { name: 'Солянка', description: 'Насичений м\'ясний суп з ковбасами та соліннями.', price: 150 },
//             { name: 'Уха', description: 'Класична рибна уха на основі свіжої риби з додаванням овочів.', price: 130 },
//             { name: 'Том Ям', description: 'Гострий тайський суп із морепродуктами та кокосовим молоком.', price: 180 },
//             { name: 'Чіхіртма', description: 'Грузинський курячий суп із яйцями та кінзою.', price: 140 },
//             { name: 'Харчо', description: 'Густий суп із яловичини та рису з додаванням томатів і спецій.', price: 150 },
//             { name: 'Рамен', description: 'Японський суп із локшиною, овочами та м\'ясом у насиченому бульйоні.', price: 170 },
//             { name: 'Лобстер біс', description: 'Насичений французький суп-пюре з лобстера та вершків.', price: 220 },
//             { name: 'Курячий бульйон', description: 'Легкий суп із домашньої курки з додаванням локшини.', price: 110 },
//             { name: 'Фо Бо', description: 'В\'єтнамський суп з яловичиною, локшиною та травами в ароматному бульйоні.', price: 160 },
//             { name: 'Суп із сочевиці', description: 'Густий та поживний суп із червоної сочевиці з додаванням спецій.', price: 130 },
//             { name: 'Французький цибулевий суп', description: 'Класичний суп із карамелізованої цибулі під сирною скоринкою.', price: 150 },
//             { name: 'Суп-пюре з гарбуза', description: 'Ніжний кремовий суп із гарбуза та вершків з додаванням мускатного горіха.', price: 140 },
//         ],

//         'Другі страви': [
//             { name: 'Стейк рибай', description: 'Соковитий яловичий стейк з кров\'ю, подається з овочами.', price: 320 },
//             { name: 'Куряча котлета по-київськи', description: 'Фарширована куряча котлета з вершковим маслом.', price: 180 },
//             { name: 'Яловичина Веллінгтон', description: 'Філе яловичини в листковому тісті з грибами та травами.', price: 350 },
//             { name: 'Запечена качка', description: 'Качка, маринована в спеціях, запечена до хрусткої скоринки.', price: 280 },
//             { name: 'Бефстроганов', description: 'Класична російська страва з яловичини у вершковому соусі.', price: 210 },
//             { name: 'Філе міньйон', description: 'Ніжний стейк із яловичини, підсмажений до ідеальної готовності.', price: 400 },
//             { name: 'Курячий стейк', description: 'Мариноване куряче філе, смажене на грилі.', price: 160 },
//             { name: 'Свинина в медово-гірчичному соусі', description: 'Соковита свинина з пікантним медово-гірчичним соусом.', price: 200 },
//             { name: 'Рагу з овочами', description: 'Тушковане рагу з сезонних овочів із ароматними травами.', price: 140 },
//             { name: 'Паста карбонара', description: 'Італійська паста з беконом і пармезаном у вершковому соусі.', price: 180 },
//             { name: 'Лазанья', description: 'Шари пасти з м\'ясом, соусом бешамель та сиром.', price: 190 },
//             { name: 'Соте з грибів', description: 'Тушковані гриби з цибулею і часником у вершковому соусі.', price: 150 },
//             { name: 'Телячі ребра', description: 'Ніжні телячі ребра, запечені у власному соку з травами.', price: 280 },
//             { name: 'Фрікасе з курки', description: 'Тушковане куряче філе у вершковому соусі з грибами.', price: 220 },
//             { name: 'Запечена сьомга', description: 'Філе сьомги, запечене з лимоном і кропом.', price: 300 },
//         ],
//         'Гриль': [
//             { name: 'Шашлик зі свинини', description: 'Соковиті шматочки свинини, смажені на грилі.', price: 180 },
//             { name: 'Курячі крильця BBQ', description: 'Крильця в медовому соусі BBQ, запечені на грилі.', price: 160 },
//             { name: 'Стейк з тунця', description: 'Свіжий тунець, обсмажений до легкої рум\'яності.', price: 270 },
//             { name: 'Баранячі ребра', description: 'Ребра ягняти, приготовані на відкритому вогні.', price: 250 },
//             { name: 'Овочі на грилі', description: 'Асорті овочів, запечених на грилі з оливковою олією.', price: 130 },
//             { name: 'Шашлик із телятини', description: 'Шматочки телятини, мариновані у спеціях і смажені на грилі.', price: 220 },
//             { name: 'Рибні шашлички', description: 'Філе риби, обсмажене на грилі з лимоном і спеціями.', price: 210 },
//             { name: 'Курячі грудки на грилі', description: 'Мариновані курячі грудки з лимонним соком та спеціями.', price: 150 },
//             { name: 'Мікс гриль', description: 'Асорті з різних видів м\'яса, смажених на грилі.', price: 320 },
//             { name: 'Шашлик із грибів', description: 'Шампіньйони, смажені на вугіллі з ароматними спеціями.', price: 140 },
//             { name: 'Грильовані мідії', description: 'Мідії на грилі з лимонним соком та зеленню.', price: 200 },
//             { name: 'Бургер на грилі', description: 'Соковитий бургер з яловичини, приготований на грилі.', price: 180 },
//             { name: 'Кебаб з баранини', description: 'Соковиті шматочки баранини на шампурі, смажені на грилі.', price: 230 },
//             { name: 'Медальйони зі свинини', description: 'Свинячі медальйони, підсмажені до ідеального стану.', price: 190 },
//             { name: 'Лосось на грилі', description: 'Філе лосося, запечене на грилі з лимоном.', price: 280 },
//         ],
//         'Салати': [
//             { name: 'Цезар із куркою', description: 'Класичний салат із куркою, пармезаном та сухарями.', price: 150 },
//             { name: 'Грецький салат', description: 'Овочевий салат з оливками, фетою та оливковою олією.', price: 130 },
//             { name: 'Салат із тунцем', description: 'Свіжий тунець, овочі та яйця під гірчичним соусом.', price: 170 },
//             { name: 'Олів\'є', description: 'Традиційний новорічний салат із куркою, картоплею та майонезом.', price: 120 },
//             { name: 'Капрезе', description: 'Томат, моцарела та базилік, заправлені оливковою олією.', price: 140 },
//             { name: 'Салат із авокадо', description: 'Свіжий авокадо з помідорами, огірками та зеленню.', price: 180 },
//             { name: 'Салат Нісуаз', description: 'Французький салат із тунцем, анчоусами та овочами.', price: 190 },
//             { name: 'Вінегрет', description: 'Овочевий салат із буряком, картоплею та квасолею.', price: 110 },
//             { name: 'Салат із куркою та ананасом', description: 'Куряче філе з ананасами та майонезом.', price: 160 },
//             { name: 'Тайський салат', description: 'Салат із овочів і курки з кисло-солодким соусом.', price: 200 },
//             { name: 'Салат з креветками', description: 'Креветки, листя салату, авокадо та соус на основі йогурту.', price: 220 },
//             { name: 'Салат із сиром фета', description: 'Сир фета, помідори, огірки та оливкова олія.', price: 160 },
//             { name: 'Фітнес-салат', description: 'Овочевий салат із курячим філе та низькокалорійним соусом.', price: 140 },
//             { name: 'Салат із копченою рибою', description: 'Копчена риба, листя салату та овочі.', price: 190 },
//             { name: 'Салат із руколою та креветками', description: 'Свіжа рукола, креветки, томати черрі.', price: 210 },
//         ],
//         'Сніданки': [
//             { name: 'Омлет із сиром', description: 'Класичний омлет із додаванням твердого сиру.', price: 90 },
//             { name: 'Яйця Бенедикт', description: 'Сніданок з яйцями пашот на булочці з голландським соусом.', price: 120 },
//             { name: 'Вівсянка з фруктами', description: 'Ніжна вівсянка з додаванням свіжих фруктів.', price: 80 },
//             { name: 'Млинці з сиром', description: 'Тонкі млинці, фаршировані сиром.', price: 100 },
//             { name: 'Тости з авокадо', description: 'Підсмажені тости з кремом із авокадо та яйцями пашот.', price: 150 },
//             { name: 'Сирники', description: 'Традиційні українські сирники зі сметаною.', price: 130 },
//             { name: 'Англійський сніданок', description: 'Яєчня, бекон, сосиски, фасоля і тости.', price: 180 },
//             { name: 'Гранола з йогуртом', description: 'Смажена гранола з йогуртом і медом.', price: 110 },
//             { name: 'Круасан з шоколадом', description: 'Пухкий круасан з начинкою з темного шоколаду.', price: 90 },
//             { name: 'Шакшука', description: 'Яйця, приготовані в томатному соусі з перцем і спеціями.', price: 140 },
//             { name: 'Панкейки з ягодами', description: 'Пухкі панкейки, подані зі свіжими ягодами і сиропом.', price: 120 },
//             { name: 'Тости з лососем', description: 'Підсмажені тости з вершковим сиром і копченим лососем.', price: 160 },
//             { name: 'Яєчня з беконом', description: 'Яйця, підсмажені з хрустким беконом.', price: 110 },
//             { name: 'Овочевий омлет', description: 'Омлет із додаванням свіжих овочів.', price: 100 },
//             { name: 'Булочки з корицею', description: 'М\'які булочки з ароматною начинкою з кориці.', price: 90 },
//         ],
//         'Лаваш': [
//             { name: 'Лаваш із сиром', description: 'Класичний лаваш із сиром та зеленню.', price: 90 },
//             { name: 'Лаваш із куркою', description: 'Лаваш із томатами, куркою та сиром', price: 105 },
//             { name: 'Лаваш із тунцем', description: 'Лаваш із тунцем, зеленню та ікрою', price: 135 },
//         ],
//         'Закуски': [
//             { name: 'Брускетта з томатами', description: 'Хрусткий хліб з томатами, базиліком і оливковою олією.', price: 90 },
//             { name: 'Сирна тарілка', description: 'Асорті з різних сортів сиру з медом і горіхами.', price: 250 },
//             { name: 'Тартар із лосося', description: 'Свіжий лосось, подрібнений з авокадо та травами.', price: 220 },
//             { name: 'Паштет із печінки', description: 'Домашній паштет із курячої печінки з тостами.', price: 120 },
//             { name: 'Форшмак', description: 'Оселедець, подрібнений з яблуками та яйцями.', price: 140 },
//             { name: 'Хумус', description: 'Ніжний хумус із нуту з оливковою олією та зеленню.', price: 100 },
//             { name: 'Креветки в темпурі', description: 'Хрусткі креветки в клярі, подаються з соусом.', price: 180 },
//             { name: 'Карпачо з яловичини', description: 'Тонко нарізана сира яловичина з каперсами та оливковою олією.', price: 240 },
//             { name: 'Баклажани по-грецьки', description: 'Запечені баклажани з томатним соусом та сиром.', price: 130 },
//             { name: 'Спрінг-роли', description: 'Роли з овочами та м\'ясом, загорнуті в рисовий папір.', price: 170 },
//             { name: 'Калмари гриль', description: 'Свіжі калмари, обсмажені на грилі з лимонним соком.', price: 190 },
//             { name: 'Оселедець під шубою', description: 'Традиційна закуска з оселедця, буряка і майонезу.', price: 120 },
//             { name: 'Соте з грибів', description: 'Тушковані гриби з цибулею і часником.', price: 150 },
//             { name: 'Пікантні крильця', description: 'Курячі крильця, обсмажені з гострим соусом.', price: 160 },
//             { name: 'Антіпасто', description: 'Італійська закуска з ковбас, сирів і оливок.', price: 210 },
//         ],
//         'Піца': [
//             { name: 'Маргарита', description: 'Класична піца з томатами, моцарелою та базиліком.', price: 150 },
//             { name: 'Пепероні', description: 'Піца з гострою ковбасою пепероні та сиром моцарела.', price: 170 },
//             { name: 'Чотири сири', description: 'Асорті з чотирьох видів сиру на тонкому тісті.', price: 190 },
//             { name: 'Гавайська', description: 'Піца з куркою, ананасами та сиром моцарела.', price: 160 },
//             { name: 'Капрічоза', description: 'Піца з шинкою, грибами та артишоками.', price: 180 },
//             { name: 'М\'ясна', description: 'Піца з різними видами м\'яса: беконом, салямі, шинкою.', price: 200 },
//             { name: 'Вегетаріанська', description: 'Піца з овочами: баклажани, цукіні, томати, гриби.', price: 160 },
//             { name: 'Трюфельна', description: 'Піца з трюфельним маслом, моцарелою та пармезаном.', price: 240 },
//             { name: 'Діабола', description: 'Гостра піца з салямі, перцем чилі та томатами.', price: 180 },
//             { name: 'Салямі', description: 'Піца з салямі, томатами та моцарелою.', price: 170 },
//             { name: 'Морепродукти', description: 'Піца з морепродуктами: креветки, мідії, кальмари.', price: 220 },
//             { name: 'Чотири сезони', description: 'Піца з різними начинками для кожної пори року.', price: 190 },
//             { name: 'Фунгі', description: 'Піца з грибами та сиром на томатному соусі.', price: 160 },
//             { name: 'Піца BBQ', description: 'Піца з куркою BBQ, червоною цибулею та сиром.', price: 200 },
//             { name: 'Кальцоне', description: 'Закрита піца з шинкою, сиром та томатами.', price: 210 },
//         ],
//         'Напої': [
//             { name: 'Капучино', description: 'Кава з молоком і густою піною.', price: 60 },
//             { name: 'Еспресо', description: 'Класична міцна кава.', price: 50 },
//             { name: 'Лате', description: 'Кава з великою кількістю молока.', price: 70 },
//             { name: 'Американо', description: 'Чорна кава з додаванням води.', price: 50 },
//             { name: 'Чай зелений', description: 'Чай зі свіжих зелених листочків.', price: 40 },
//             { name: 'Чай чорний', description: 'Класичний чорний чай.', price: 40 },
//             { name: 'Сік апельсиновий', description: 'Свіжий сік із апельсинів.', price: 80 },
//             { name: 'Сік яблучний', description: 'Свіжий яблучний сік.', price: 70 },
//             { name: 'Морс', description: 'Охолоджений морс із ягід.', price: 60 },
//             { name: 'Лимонад', description: 'Домашній лимонад із лимонів та м\'яти.', price: 90 },
//             { name: 'Мохіто безалкогольний', description: 'Напій з м\'ятою, лаймом та содовою.', price: 100 },
//             { name: 'Мінеральна вода', description: 'Негазована мінеральна вода.', price: 40 },
//             { name: 'Смузі ягідний', description: 'Смузі з сезонних ягід.', price: 120 },
//             { name: 'Фреш із грейпфрута', description: 'Свіжовичавлений сік із грейпфрута.', price: 80 },
//             { name: 'Холодний чай', description: 'Чай з лимоном і льодом.', price: 60 },
//         ],
//         // інші категорії та страви
//     },
// }
import db  from '../firebase-config';
import { collection, addDoc, getDocs, deleteDoc, doc } from 'firebase/firestore';

const state = {
    categoriesMenu: [],  
    dishes: {},          
    isAdmin: false,      
};

const mutations = {
    SET_CATEGORIES(state, categories) {
        state.categoriesMenu = categories;
    },
    SET_DISHES(state, dishes) {
        state.dishes = dishes;
    },
    REMOVE_CATEGORY(state, currentCategory) {
        state.categoriesMenu = state.categoriesMenu.filter((cat) => cat !== currentCategory);
        delete state.dishes[currentCategory];  // Видаляємо страви з цієї категорії
    },
    ADD_CATEGORY(state, newCategory) {
        if (!state.categoriesMenu.includes(newCategory)) {
            state.categoriesMenu.push(newCategory);
            state.dishes[newCategory] = [];  // Ініціалізуємо порожній масив страв для нової категорії
        }
    },
    ADD_DISH(state, { category, dish }) {
        if (!state.dishes[category]) {
            state.dishes[category] = [];
        }
        state.dishes[category].push(dish);
    },
    DELETE_DISH(state, { category, dishName }) {
        const dishes = state.dishes[category];
        state.dishes[category] = dishes.filter(dish => dish.name !== dishName);
    }
};

const actions = {
    // Ініціалізація: отримання даних з фаер сторе
    async initializeMenu({ commit }) {
        try {
            const categoriesSnapshot = await getDocs(collection(db, 'categories'));
            const dishesSnapshot = await getDocs(collection(db, 'dishes'));

            const categories = [];
            const dishes = {};

            categoriesSnapshot.forEach(doc => {
                categories.push(doc.data().name);
            });

            dishesSnapshot.forEach(doc => {
                const data = doc.data();
                if (!dishes[data.category]) {
                    dishes[data.category] = [];
                }
                dishes[data.category].push({ id: doc.id, ...data });
            });

            commit('SET_CATEGORIES', categories);
            commit('SET_DISHES', dishes);
        } catch (error) {
            console.error('Error initializing menu:', error);
        }
    },

    // Додавання нової категорії до Firestore і state
    async addCategory({ commit }, newCategory) {
        try {
            await addDoc(collection(db, 'categories'), { name: newCategory });
            commit('ADD_CATEGORY', newCategory);
        } catch (error) {
            console.error('Error adding category:', error);
        }
    },

    // Видалення категорії з Firestore і state
    async deleteCategory({ commit }, currentCategory) {
        try {
            // Видаляємо категорію з колекції "categories"
            const categoriesSnapshot = await getDocs(collection(db, 'categories'));
            const categoryDoc = categoriesSnapshot.docs.find(doc => doc.data().name === currentCategory);
            if (categoryDoc) {
                await deleteDoc(doc(db, 'categories', categoryDoc.id));
            }

            // Видаляємо всі страви, які належать цій категорії
            const dishesSnapshot = await getDocs(collection(db, 'dishes'));
            dishesSnapshot.forEach(dishDoc => {
                if (dishDoc.data().category === currentCategory) {
                    deleteDoc(doc(db, 'dishes', dishDoc.id));
                }
            });

            commit('REMOVE_CATEGORY', currentCategory);
        } catch (error) {
            console.error('Error deleting category:', error);
        }
    },

    // Додавання нової страви до Firestore і state
    async addDish({ commit }, { category, dish }) {
        try {
            addDoc(collection(db, category),dish);
            const docRef = await addDoc(collection(db, 'dishes'), { ...dish, category });
            commit('ADD_DISH', { category, dish: { ...dish, id: docRef.id } });
        } catch (error) {
            console.error('Error adding dish:', error);
        }
    },

    // Видалення страви з Firestore і state
    async deleteDish({ commit }, { category, dishName }) {
        try {
            const dishesSnapshot = await getDocs(collection(db, 'dishes'));
            const dishDoc = dishesSnapshot.docs.find(doc => doc.data().name === dishName && doc.data().category === category);
            if (dishDoc) {
                await deleteDoc(doc(db, 'dishes', dishDoc.id));
            }

            commit('DELETE_DISH', { category, dishName });
        } catch (error) {
            console.error('Error deleting dish:', error);
        }
    }
};

const getters = {
    getDishesByCategory: (state) => (category) => {
        return state.dishes[category] || [];
    },
    isAdmin: (state) => state.isAdmin,
};

export default {
    namespaced: true,
    state,
    actions,
    getters,
    mutations
};
