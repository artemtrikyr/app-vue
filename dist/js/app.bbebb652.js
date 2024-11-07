(function(){"use strict";var e={9586:function(e,i,r){var n=r(5130),t=r(6768);const o={id:"app"};function a(e,i,r,a,c,s){const p=(0,t.g2)("LoaderB"),d=(0,t.g2)("NavBar"),m=(0,t.g2)("router-view"),l=(0,t.g2)("FooterBar");return(0,t.uX)(),(0,t.CE)("div",o,[c.isLoading?((0,t.uX)(),(0,t.Wv)(p,{key:0})):(0,t.Q3)("",!0),(0,t.bF)(d),(0,t.bF)(m,null,{default:(0,t.k6)((({Component:e})=>[(0,t.bF)(n.eB,{name:"fade",mode:"out-in",onBeforeEnter:s.startLoading,onAfterEnter:s.finishLoading},{default:(0,t.k6)((()=>[((0,t.uX)(),(0,t.Wv)((0,t.$y)(e)))])),_:2},1032,["onBeforeEnter","onAfterEnter"])])),_:1}),(0,t.bF)(l)])}function c(e,i,r,n,o,a){return i[0]||(i[0]=(0,t.Fv)('<div class="footer"><div class="footer-block first-block"><div class="B2-semibold">Opening hours</div><div class="footer-section"><div class="footer-title">Restaurant</div><h3 class="footer-time">Mo - Su 11:30 - 22:30</h3></div><div class="footer-section"><div class="footer-title">SPA - Servis</div><h3 class="footer-time">Mo - Su 10:00 - 22:00</h3></div><div class="footer-title">Address</div><h3 class="footer-address"> Staroměstské náměstí 480/24<br> Praha 1, 110 00 </h3></div><div class="footer-block second-block"><div class="B2-semibold">Links</div><ul class="footer-links"><li><a href="/">Home</a></li><li><a href="/menugastro">Menu</a></li><li><a href="/spagastro">SPA - Servis</a></li><li><a href="/exploregastro">About us</a></li></ul></div><div class="footer-block third-block"><div class="B2-semibold">Additional Information</div><div class="footer-info"> The restaurant is air conditioned.<br> WiFi is available.<br><br> We can hold your reservation for 15 minutes.<br> Pets are not allowed in the restaurant. <br><br> Our restaurant offers a variety of vegetarian and vegan options. <br> We accept all major credit cards for payment.<br><br> The restaurant has a dedicated kids&#39; menu.<br><br> Outdoor seating is available during the summer months.<br><br> Our team can accommodate food allergies or dietary restrictions upon request.<br></div></div><div class="footer-block forth-block"><div class="B2-semibold">Contacts</div><div class="footer-contact"> Phone<br><a href="tel:+420723338287">+420 723 338 287</a><br><br> Email<br><a href="mailto:info@gastrowerrestaurant.cz">info@gastrowerrestaurant.cz</a><br><br> P.R. manager<br><a href="mailto:trykur.artem@fieldrestaurant.cz">Trykur Artem</a><br><br> Restaurant manager<br><a href="mailto:miroslav.nosek@gastrowerrestaurant.cz">Miroslav Nosek</a><br><br><a href="presskit">Info for media and travel agencies</a><br><br> Provozovatel<br> Červená Liška Restaurant s.r.o.<br> Staroměstské náměstí 480/24<br> Praha 1, 110 00<br></div></div></div><hr class="footer-line"><div class="footer-bottom-l"><div class="footer-bottom-text"><span>© GastroWer restaurant</span><a href="/" class="footer-link">Terms and conditions</a><a href="/" class="footer-link">Personal data protection</a></div><div class="back-top"><a href="#top" class="footer-link">Back to the top</a></div></div>',3))}var s={name:"FooterBar"},p=r(1241);const d=(0,p.A)(s,[["render",c]]);var m=d;const l={class:"navbar"},u={class:"nav-links"},f={class:"nav-links"},v={class:"nav-links"},h={class:"nav-links"};function g(e,i,r,o,a,c){const s=(0,t.g2)("router-link");return(0,t.uX)(),(0,t.CE)("nav",l,[(0,t.Lk)("ul",u,[(0,t.Lk)("li",null,[(0,t.bF)(s,{to:"/"},{default:(0,t.k6)((()=>i[2]||(i[2]=[(0,t.eW)("Home")]))),_:1})])]),(0,t.Lk)("ul",f,[(0,t.Lk)("li",null,[(0,t.bF)(s,{to:"/menugastro"},{default:(0,t.k6)((()=>i[3]||(i[3]=[(0,t.eW)("Restaurant")]))),_:1})])]),i[5]||(i[5]=(0,t.Lk)("div",{class:"logo"},[(0,t.Lk)("h2",null,"Gastro Wer")],-1)),(0,t.Lk)("ul",v,[(0,t.Lk)("li",null,[(0,t.bF)(s,{to:"/spagastro"},{default:(0,t.k6)((()=>i[4]||(i[4]=[(0,t.eW)("SPA - Servis")]))),_:1})])]),(0,t.Lk)("div",h,[(0,t.Lk)("li",null,[a.isAdmin?(0,t.Q3)("",!0):((0,t.uX)(),(0,t.CE)("a",{key:0,onClick:i[0]||(i[0]=(0,n.D$)(((...e)=>c.HandleAuth&&c.HandleAuth(...e)),["prevent"]))},"Login")),a.isAdmin?((0,t.uX)(),(0,t.CE)("a",{key:1,onClick:i[1]||(i[1]=(0,n.D$)(((...e)=>c.HandleAuth&&c.HandleAuth(...e)),["prevent"]))},"Logout")):(0,t.Q3)("",!0)])])])}r(4114);var b={name:"NavBar",data(){return{isAdmin:"true"===localStorage.getItem("isAdmin")}},methods:{HandleAuth(){this.isAdmin?(localStorage.removeItem("isAdmin"),this.isAdmin=!1,this.$router.push("/")):this.$router.push("/loginadmin")}},watch:{$route(){this.isAdmin="true"===localStorage.getItem("isAdmin")}}};const k=(0,p.A)(b,[["render",g],["__scopeId","data-v-04441871"]]);var y=k,E=r.p+"media/load-video.89b56503.mp4";const A={class:"loader"};function S(e,i){return(0,t.uX)(),(0,t.CE)("div",A,i[0]||(i[0]=[(0,t.Lk)("video",{autoplay:"",muted:"",loop:"",playsinline:""},[(0,t.Lk)("source",{src:E,type:"video/mp4"}),(0,t.eW)(" Ваш браузер не підтримує відео. ")],-1)]))}const L={},C=(0,p.A)(L,[["render",S],["__scopeId","data-v-238bf259"]]);var _=C,O={data(){return{isLoading:!1}},components:{NavBar:y,FooterBar:m,LoaderB:_},methods:{startLoading(){this.isLoading=!0},finishLoading(){this.isLoading=!1}}};const B=(0,p.A)(O,[["render",a]]);var D=B,T=r(1387);const w={class:"home-page"};function P(e,i,r,n,o,a){return(0,t.uX)(),(0,t.CE)("div",w,[i[1]||(i[1]=(0,t.Lk)("header",null,[(0,t.Lk)("h1",{class:"header-1"},"A place where everything"),(0,t.Lk)("h1",{class:"header-2"},"complements Each Other...")],-1)),i[2]||(i[2]=(0,t.Lk)("div",{class:"main-text"},[(0,t.Lk)("p",null,"Welcome to our complex!")],-1)),(0,t.Lk)("button",{onClick:i[0]||(i[0]=(...e)=>a.GoToPage&&a.GoToPage(...e)),class:"button-explore"},"Explore!")])}var R={name:"HomePage",methods:{GoToPage(){this.$router.push("/exploregastro")}}};const N=(0,p.A)(R,[["render",P]]);var I=N;const M=[{path:"/",name:"HomePage",component:I},{path:"/menugastro",name:"MenuGastro",component:()=>r.e(345).then(r.bind(r,1345))},{path:"/exploregastro",name:"ExploreGastro",component:()=>r.e(791).then(r.bind(r,7468))},{path:"/spagastro",name:"SpaGastro",component:()=>r.e(53).then(r.bind(r,6053))},{path:"/loginadmin",name:"LoginAdmin",component:()=>r.e(948).then(r.bind(r,4948))}],x=(0,T.aE)({history:(0,T.LA)("/"),routes:M,scrollBehavior(){return{top:0}}});var F=x,G=r(782);const H={categoriesMenu:["Перші страви","Другі страви","Гриль","Салати","Сніданки","Лаваш","Закуски","Піца","Напої"],dishes:{"Перші страви":[{name:"Гаспачо",description:"Холодний суп із томатів, огірків та спецій. Ідеальний варіант для спекотного дня.",price:120},{name:"Борщ",description:"З класичним буряком, картоплею та спеціями. Традиційна українська страва.",price:100},{name:"Крем-суп",description:"Легкий кремовий суп на основі вершків і овочів.",price:120},{name:"Мінестроне",description:"Овочевий італійський суп із макаронами та зеленню.",price:140},{name:"Солянка",description:"Насичений м'ясний суп з ковбасами та соліннями.",price:150},{name:"Уха",description:"Класична рибна уха на основі свіжої риби з додаванням овочів.",price:130},{name:"Том Ям",description:"Гострий тайський суп із морепродуктами та кокосовим молоком.",price:180},{name:"Чіхіртма",description:"Грузинський курячий суп із яйцями та кінзою.",price:140},{name:"Харчо",description:"Густий суп із яловичини та рису з додаванням томатів і спецій.",price:150},{name:"Рамен",description:"Японський суп із локшиною, овочами та м'ясом у насиченому бульйоні.",price:170},{name:"Лобстер біс",description:"Насичений французький суп-пюре з лобстера та вершків.",price:220},{name:"Курячий бульйон",description:"Легкий суп із домашньої курки з додаванням локшини.",price:110},{name:"Фо Бо",description:"В'єтнамський суп з яловичиною, локшиною та травами в ароматному бульйоні.",price:160},{name:"Суп із сочевиці",description:"Густий та поживний суп із червоної сочевиці з додаванням спецій.",price:130},{name:"Французький цибулевий суп",description:"Класичний суп із карамелізованої цибулі під сирною скоринкою.",price:150},{name:"Суп-пюре з гарбуза",description:"Ніжний кремовий суп із гарбуза та вершків з додаванням мускатного горіха.",price:140}],"Другі страви":[{name:"Стейк рибай",description:"Соковитий яловичий стейк з кров'ю, подається з овочами.",price:320},{name:"Куряча котлета по-київськи",description:"Фарширована куряча котлета з вершковим маслом.",price:180},{name:"Яловичина Веллінгтон",description:"Філе яловичини в листковому тісті з грибами та травами.",price:350},{name:"Запечена качка",description:"Качка, маринована в спеціях, запечена до хрусткої скоринки.",price:280},{name:"Бефстроганов",description:"Класична російська страва з яловичини у вершковому соусі.",price:210},{name:"Філе міньйон",description:"Ніжний стейк із яловичини, підсмажений до ідеальної готовності.",price:400},{name:"Курячий стейк",description:"Мариноване куряче філе, смажене на грилі.",price:160},{name:"Свинина в медово-гірчичному соусі",description:"Соковита свинина з пікантним медово-гірчичним соусом.",price:200},{name:"Рагу з овочами",description:"Тушковане рагу з сезонних овочів із ароматними травами.",price:140},{name:"Паста карбонара",description:"Італійська паста з беконом і пармезаном у вершковому соусі.",price:180},{name:"Лазанья",description:"Шари пасти з м'ясом, соусом бешамель та сиром.",price:190},{name:"Соте з грибів",description:"Тушковані гриби з цибулею і часником у вершковому соусі.",price:150},{name:"Телячі ребра",description:"Ніжні телячі ребра, запечені у власному соку з травами.",price:280},{name:"Фрікасе з курки",description:"Тушковане куряче філе у вершковому соусі з грибами.",price:220},{name:"Запечена сьомга",description:"Філе сьомги, запечене з лимоном і кропом.",price:300}],"Гриль":[{name:"Шашлик зі свинини",description:"Соковиті шматочки свинини, смажені на грилі.",price:180},{name:"Курячі крильця BBQ",description:"Крильця в медовому соусі BBQ, запечені на грилі.",price:160},{name:"Стейк з тунця",description:"Свіжий тунець, обсмажений до легкої рум'яності.",price:270},{name:"Баранячі ребра",description:"Ребра ягняти, приготовані на відкритому вогні.",price:250},{name:"Овочі на грилі",description:"Асорті овочів, запечених на грилі з оливковою олією.",price:130},{name:"Шашлик із телятини",description:"Шматочки телятини, мариновані у спеціях і смажені на грилі.",price:220},{name:"Рибні шашлички",description:"Філе риби, обсмажене на грилі з лимоном і спеціями.",price:210},{name:"Курячі грудки на грилі",description:"Мариновані курячі грудки з лимонним соком та спеціями.",price:150},{name:"Мікс гриль",description:"Асорті з різних видів м'яса, смажених на грилі.",price:320},{name:"Шашлик із грибів",description:"Шампіньйони, смажені на вугіллі з ароматними спеціями.",price:140},{name:"Грильовані мідії",description:"Мідії на грилі з лимонним соком та зеленню.",price:200},{name:"Бургер на грилі",description:"Соковитий бургер з яловичини, приготований на грилі.",price:180},{name:"Кебаб з баранини",description:"Соковиті шматочки баранини на шампурі, смажені на грилі.",price:230},{name:"Медальйони зі свинини",description:"Свинячі медальйони, підсмажені до ідеального стану.",price:190},{name:"Лосось на грилі",description:"Філе лосося, запечене на грилі з лимоном.",price:280}],"Салати":[{name:"Цезар із куркою",description:"Класичний салат із куркою, пармезаном та сухарями.",price:150},{name:"Грецький салат",description:"Овочевий салат з оливками, фетою та оливковою олією.",price:130},{name:"Салат із тунцем",description:"Свіжий тунець, овочі та яйця під гірчичним соусом.",price:170},{name:"Олів'є",description:"Традиційний новорічний салат із куркою, картоплею та майонезом.",price:120},{name:"Капрезе",description:"Томат, моцарела та базилік, заправлені оливковою олією.",price:140},{name:"Салат із авокадо",description:"Свіжий авокадо з помідорами, огірками та зеленню.",price:180},{name:"Салат Нісуаз",description:"Французький салат із тунцем, анчоусами та овочами.",price:190},{name:"Вінегрет",description:"Овочевий салат із буряком, картоплею та квасолею.",price:110},{name:"Салат із куркою та ананасом",description:"Куряче філе з ананасами та майонезом.",price:160},{name:"Тайський салат",description:"Салат із овочів і курки з кисло-солодким соусом.",price:200},{name:"Салат з креветками",description:"Креветки, листя салату, авокадо та соус на основі йогурту.",price:220},{name:"Салат із сиром фета",description:"Сир фета, помідори, огірки та оливкова олія.",price:160},{name:"Фітнес-салат",description:"Овочевий салат із курячим філе та низькокалорійним соусом.",price:140},{name:"Салат із копченою рибою",description:"Копчена риба, листя салату та овочі.",price:190},{name:"Салат із руколою та креветками",description:"Свіжа рукола, креветки, томати черрі.",price:210}],"Сніданки":[{name:"Омлет із сиром",description:"Класичний омлет із додаванням твердого сиру.",price:90},{name:"Яйця Бенедикт",description:"Сніданок з яйцями пашот на булочці з голландським соусом.",price:120},{name:"Вівсянка з фруктами",description:"Ніжна вівсянка з додаванням свіжих фруктів.",price:80},{name:"Млинці з сиром",description:"Тонкі млинці, фаршировані сиром.",price:100},{name:"Тости з авокадо",description:"Підсмажені тости з кремом із авокадо та яйцями пашот.",price:150},{name:"Сирники",description:"Традиційні українські сирники зі сметаною.",price:130},{name:"Англійський сніданок",description:"Яєчня, бекон, сосиски, фасоля і тости.",price:180},{name:"Гранола з йогуртом",description:"Смажена гранола з йогуртом і медом.",price:110},{name:"Круасан з шоколадом",description:"Пухкий круасан з начинкою з темного шоколаду.",price:90},{name:"Шакшука",description:"Яйця, приготовані в томатному соусі з перцем і спеціями.",price:140},{name:"Панкейки з ягодами",description:"Пухкі панкейки, подані зі свіжими ягодами і сиропом.",price:120},{name:"Тости з лососем",description:"Підсмажені тости з вершковим сиром і копченим лососем.",price:160},{name:"Яєчня з беконом",description:"Яйця, підсмажені з хрустким беконом.",price:110},{name:"Овочевий омлет",description:"Омлет із додаванням свіжих овочів.",price:100},{name:"Булочки з корицею",description:"М'які булочки з ароматною начинкою з кориці.",price:90}],"Лаваш":[{name:"Лаваш із сиром",description:"Класичний лаваш із сиром та зеленню.",price:90},{name:"Лаваш із куркою",description:"Лаваш із томатами, куркою та сиром",price:105},{name:"Лаваш із тунцем",description:"Лаваш із тунцем, зеленню та ікрою",price:135}],"Закуски":[{name:"Брускетта з томатами",description:"Хрусткий хліб з томатами, базиліком і оливковою олією.",price:90},{name:"Сирна тарілка",description:"Асорті з різних сортів сиру з медом і горіхами.",price:250},{name:"Тартар із лосося",description:"Свіжий лосось, подрібнений з авокадо та травами.",price:220},{name:"Паштет із печінки",description:"Домашній паштет із курячої печінки з тостами.",price:120},{name:"Форшмак",description:"Оселедець, подрібнений з яблуками та яйцями.",price:140},{name:"Хумус",description:"Ніжний хумус із нуту з оливковою олією та зеленню.",price:100},{name:"Креветки в темпурі",description:"Хрусткі креветки в клярі, подаються з соусом.",price:180},{name:"Карпачо з яловичини",description:"Тонко нарізана сира яловичина з каперсами та оливковою олією.",price:240},{name:"Баклажани по-грецьки",description:"Запечені баклажани з томатним соусом та сиром.",price:130},{name:"Спрінг-роли",description:"Роли з овочами та м'ясом, загорнуті в рисовий папір.",price:170},{name:"Калмари гриль",description:"Свіжі калмари, обсмажені на грилі з лимонним соком.",price:190},{name:"Оселедець під шубою",description:"Традиційна закуска з оселедця, буряка і майонезу.",price:120},{name:"Соте з грибів",description:"Тушковані гриби з цибулею і часником.",price:150},{name:"Пікантні крильця",description:"Курячі крильця, обсмажені з гострим соусом.",price:160},{name:"Антіпасто",description:"Італійська закуска з ковбас, сирів і оливок.",price:210}],"Піца":[{name:"Маргарита",description:"Класична піца з томатами, моцарелою та базиліком.",price:150},{name:"Пепероні",description:"Піца з гострою ковбасою пепероні та сиром моцарела.",price:170},{name:"Чотири сири",description:"Асорті з чотирьох видів сиру на тонкому тісті.",price:190},{name:"Гавайська",description:"Піца з куркою, ананасами та сиром моцарела.",price:160},{name:"Капрічоза",description:"Піца з шинкою, грибами та артишоками.",price:180},{name:"М'ясна",description:"Піца з різними видами м'яса: беконом, салямі, шинкою.",price:200},{name:"Вегетаріанська",description:"Піца з овочами: баклажани, цукіні, томати, гриби.",price:160},{name:"Трюфельна",description:"Піца з трюфельним маслом, моцарелою та пармезаном.",price:240},{name:"Діабола",description:"Гостра піца з салямі, перцем чилі та томатами.",price:180},{name:"Салямі",description:"Піца з салямі, томатами та моцарелою.",price:170},{name:"Морепродукти",description:"Піца з морепродуктами: креветки, мідії, кальмари.",price:220},{name:"Чотири сезони",description:"Піца з різними начинками для кожної пори року.",price:190},{name:"Фунгі",description:"Піца з грибами та сиром на томатному соусі.",price:160},{name:"Піца BBQ",description:"Піца з куркою BBQ, червоною цибулею та сиром.",price:200},{name:"Кальцоне",description:"Закрита піца з шинкою, сиром та томатами.",price:210}],"Напої":[{name:"Капучино",description:"Кава з молоком і густою піною.",price:60},{name:"Еспресо",description:"Класична міцна кава.",price:50},{name:"Лате",description:"Кава з великою кількістю молока.",price:70},{name:"Американо",description:"Чорна кава з додаванням води.",price:50},{name:"Чай зелений",description:"Чай зі свіжих зелених листочків.",price:40},{name:"Чай чорний",description:"Класичний чорний чай.",price:40},{name:"Сік апельсиновий",description:"Свіжий сік із апельсинів.",price:80},{name:"Сік яблучний",description:"Свіжий яблучний сік.",price:70},{name:"Морс",description:"Охолоджений морс із ягід.",price:60},{name:"Лимонад",description:"Домашній лимонад із лимонів та м'яти.",price:90},{name:"Мохіто безалкогольний",description:"Напій з м'ятою, лаймом та содовою.",price:100},{name:"Мінеральна вода",description:"Негазована мінеральна вода.",price:40},{name:"Смузі ягідний",description:"Смузі з сезонних ягід.",price:120},{name:"Фреш із грейпфрута",description:"Свіжовичавлений сік із грейпфрута.",price:80},{name:"Холодний чай",description:"Чай з лимоном і льодом.",price:60}]}},j={REMOVE_CATEGORY(e,i){e.categoriesMenu=e.categoriesMenu.filter((e=>e!==i))},ADD_CATEGORY(e,i){e.categoriesMenu.includes(i)||e.categoriesMenu.push(i)},ADD_DISH(e,{category:i,dish:r}){e.dishes[i]||(e.dishes[i]=[]),e.dishes[i].push(r)},DELETE_DISH(e,{category:i,dishName:r}){const n=e.dishes[i];e.dishes[i]=n.filter((e=>e.name!==r))}},W={deleteCategory({commit:e},i){e("REMOVE_CATEGORY",i)},addCategory({commit:e},i){e("ADD_CATEGORY",i)},addDish({commit:e},{category:i,dish:r}){e("ADD_DISH",{category:i,dish:r})},deleteDish({commit:e},{category:i,dishName:r}){e("DELETE_DISH",{category:i,dishName:r})}},V={getDishesByCategory:e=>i=>e.dishes[i]||[],isAdmin:e=>e.isAdmin};var X={namespaced:!0,state:H,actions:W,getters:V,mutations:j};const Y={categoriesSpa:["Масажі","Догляд за обличчям","Догляд за тілом","Манікюр та педикюр","Сауна та бані","СПА для пари"],spaServises:{"Масажі":[{name:"Класичний масаж",description:"Розслаблюючий масаж для всього тіла, який знімає напругу та покращує кровообіг.",price:800},{name:"Ароматерапевтичний масаж",description:"Масаж із використанням ефірних олій для максимального релаксу та зняття стресу.",price:1e3},{name:"Тайський масаж",description:"Глибокий масаж із натисканням на енергетичні точки для відновлення енергії тіла.",price:1200},{name:"Антистресовий масаж",description:"Масаж для зняття стресу та релаксації м`язів з акцентом на шию і плечі.",price:900}],"Догляд за обличчям":[{name:"Глибоке очищення обличчя",description:"Процедура для очищення пор і вирівнювання текстури шкіри.",price:600},{name:"Антивікові процедури",description:"Підтягуючий догляд з використанням колагену для зменшення зморшок.",price:1500},{name:"Зволожуючі маски",description:"Маска для глибокого зволоження сухої та втомленої шкіри.",price:700},{name:"Ліфтинг обличчя",description:"Інтенсивний ліфтинг для відновлення контурів обличчя та покращення тонусу шкіри.",price:2e3}],"Догляд за тілом":[{name:"Пілінг тіла",description:"Глибоке очищення шкіри від мертвих клітин для гладкості та свіжості.",price:800},{name:"Шоколадне обгортання",description:"Процедура з використанням шоколаду для живлення та зволоження шкіри.",price:1200},{name:"Водоростеве обгортання",description:"Детокс-процедура для шкіри з використанням водоростей.",price:1300},{name:"Розслаблююча процедура для тіла",description:"Комплексна програма для релаксації та відновлення шкіри.",price:1500}],"Манікюр та педикюр":[{name:"Класичний манікюр",description:"Основний догляд за нігтями з обробкою кутикули та покриттям лаком.",price:400},{name:"СПА-манікюр",description:"Глибокий догляд за руками з використанням зволожуючих масок та масажу.",price:600},{name:"Класичний педикюр",description:"Процедура догляду за ногами з обробкою ступні та нанесенням лаку.",price:500},{name:"Гель-лак",description:"Довготривале покриття нігтів з використанням гель-лаку.",price:700}],"Сауна та бані":[{name:"Фінська сауна",description:"Традиційна суха сауна для релаксації та очищення організму.",price:500},{name:"Інфрачервона сауна",description:"Сауна з м`яким інфрачервоним теплом для глибокого прогрівання тіла.",price:700},{name:"Римська баня",description:"М\n`яка парна з високою вологістю для глибокого очищення та релаксації.",price:800},{name:"Турецький хамам",description:"Теплий пар та вологість для м`якого очищення шкіри та відновлення організму.",price:900}],"СПА для пари":[{name:"Романтичний масаж для двох",description:"Релаксаційний масаж для пари у спеціально облаштованій кімнаті.",price:2500},{name:"СПА-процедури для двох",description:"Комплексний догляд з масажем, обгортанням та пілінгом для пари.",price:3e3},{name:"Ванна для двох",description:"Релакс у ванні з ефірними оліями та сіллю для пари.",price:1800},{name:"Чайна церемонія для двох",description:"Релаксація з дегустацією спеціальних чаїв після процедур.",price:1e3}]}},$={REMOVE_CATEGORY(e,i){e.categoriesSpa=e.categoriesSpa.filter((e=>e!==i))},ADD_CATEGORY(e,i){e.categoriesSpa.includes(i)||e.categoriesSpa.push(i)},ADD_SERVICE(e,{category:i,servis:r}){e.spaServises[i]||(e.spaServises[i]=[]),e.spaServises[i].push(r)},DELETE_SERVICE(e,{category:i,serviceName:r}){const n=e.spaServises[i];e.spaServises[i]=n.filter((e=>e.name!==r))}},Q={deleteCategory({commit:e},i){e("REMOVE_CATEGORY",i)},addCategory({commit:e},i){e("ADD_CATEGORY",i)},addService({commit:e},{category:i,servis:r}){e("ADD_SERVICE",{category:i,servis:r})},deleteService({commit:e},{category:i,serviceName:r}){e("DELETE_SERVICE",{category:i,serviceName:r})}},z={getServiceByCategory:e=>i=>e.spaServises[i]||[],isAdmin:e=>e.isAdmin};var q={namespaced:!0,state:Y,actions:Q,getters:z,mutations:$},K=(0,G.y$)({state:{isLoggedIn:"true"===localStorage.getItem("isAdmin")},mutations:{},actions:{},getters:{},modules:{menuStore:X,serviceStore:q}});(0,n.Ef)(D).use(K).use(F).mount("#app")}},i={};function r(n){var t=i[n];if(void 0!==t)return t.exports;var o=i[n]={exports:{}};return e[n].call(o.exports,o,o.exports,r),o.exports}r.m=e,function(){var e=[];r.O=function(i,n,t,o){if(!n){var a=1/0;for(d=0;d<e.length;d++){n=e[d][0],t=e[d][1],o=e[d][2];for(var c=!0,s=0;s<n.length;s++)(!1&o||a>=o)&&Object.keys(r.O).every((function(e){return r.O[e](n[s])}))?n.splice(s--,1):(c=!1,o<a&&(a=o));if(c){e.splice(d--,1);var p=t();void 0!==p&&(i=p)}}return i}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[n,t,o]}}(),function(){r.n=function(e){var i=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(i,{a:i}),i}}(),function(){r.d=function(e,i){for(var n in i)r.o(i,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:i[n]})}}(),function(){r.f={},r.e=function(e){return Promise.all(Object.keys(r.f).reduce((function(i,n){return r.f[n](e,i),i}),[]))}}(),function(){r.u=function(e){return"js/"+e+"."+{53:"e3f29071",345:"0b513004",791:"5121b0cc",948:"64395e66"}[e]+".js"}}(),function(){r.miniCssF=function(e){return"css/"+e+"."+{53:"83f8999d",345:"d2ba9bf3",791:"0d62f61c",948:"31748958"}[e]+".css"}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,i){return Object.prototype.hasOwnProperty.call(e,i)}}(),function(){var e={},i="app-vue:";r.l=function(n,t,o,a){if(e[n])e[n].push(t);else{var c,s;if(void 0!==o)for(var p=document.getElementsByTagName("script"),d=0;d<p.length;d++){var m=p[d];if(m.getAttribute("src")==n||m.getAttribute("data-webpack")==i+o){c=m;break}}c||(s=!0,c=document.createElement("script"),c.charset="utf-8",c.timeout=120,r.nc&&c.setAttribute("nonce",r.nc),c.setAttribute("data-webpack",i+o),c.src=n),e[n]=[t];var l=function(i,r){c.onerror=c.onload=null,clearTimeout(u);var t=e[n];if(delete e[n],c.parentNode&&c.parentNode.removeChild(c),t&&t.forEach((function(e){return e(r)})),i)return i(r)},u=setTimeout(l.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=l.bind(null,c.onerror),c.onload=l.bind(null,c.onload),s&&document.head.appendChild(c)}}}(),function(){r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){r.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,i,n,t,o){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css",r.nc&&(a.nonce=r.nc);var c=function(r){if(a.onerror=a.onload=null,"load"===r.type)t();else{var n=r&&r.type,c=r&&r.target&&r.target.href||i,s=new Error("Loading CSS chunk "+e+" failed.\n("+n+": "+c+")");s.name="ChunkLoadError",s.code="CSS_CHUNK_LOAD_FAILED",s.type=n,s.request=c,a.parentNode&&a.parentNode.removeChild(a),o(s)}};return a.onerror=a.onload=c,a.href=i,n?n.parentNode.insertBefore(a,n.nextSibling):document.head.appendChild(a),a},i=function(e,i){for(var r=document.getElementsByTagName("link"),n=0;n<r.length;n++){var t=r[n],o=t.getAttribute("data-href")||t.getAttribute("href");if("stylesheet"===t.rel&&(o===e||o===i))return t}var a=document.getElementsByTagName("style");for(n=0;n<a.length;n++){t=a[n],o=t.getAttribute("data-href");if(o===e||o===i)return t}},n=function(n){return new Promise((function(t,o){var a=r.miniCssF(n),c=r.p+a;if(i(a,c))return t();e(n,c,null,t,o)}))},t={524:0};r.f.miniCss=function(e,i){var r={53:1,345:1,791:1,948:1};t[e]?i.push(t[e]):0!==t[e]&&r[e]&&i.push(t[e]=n(e).then((function(){t[e]=0}),(function(i){throw delete t[e],i})))}}}(),function(){var e={524:0};r.f.j=function(i,n){var t=r.o(e,i)?e[i]:void 0;if(0!==t)if(t)n.push(t[2]);else{var o=new Promise((function(r,n){t=e[i]=[r,n]}));n.push(t[2]=o);var a=r.p+r.u(i),c=new Error,s=function(n){if(r.o(e,i)&&(t=e[i],0!==t&&(e[i]=void 0),t)){var o=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;c.message="Loading chunk "+i+" failed.\n("+o+": "+a+")",c.name="ChunkLoadError",c.type=o,c.request=a,t[1](c)}};r.l(a,s,"chunk-"+i,i)}},r.O.j=function(i){return 0===e[i]};var i=function(i,n){var t,o,a=n[0],c=n[1],s=n[2],p=0;if(a.some((function(i){return 0!==e[i]}))){for(t in c)r.o(c,t)&&(r.m[t]=c[t]);if(s)var d=s(r)}for(i&&i(n);p<a.length;p++)o=a[p],r.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return r.O(d)},n=self["webpackChunkapp_vue"]=self["webpackChunkapp_vue"]||[];n.forEach(i.bind(null,0)),n.push=i.bind(null,n.push.bind(n))}();var n=r.O(void 0,[504],(function(){return r(9586)}));n=r.O(n)})();
//# sourceMappingURL=app.bbebb652.js.map