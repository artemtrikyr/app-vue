"use strict";(self["webpackChunkapp_vue"]=self["webpackChunkapp_vue"]||[]).push([[53],{6053:function(e,r,t){t.r(r),t.d(r,{default:function(){return X}});var i=t(6768),n=t(4232),o=t(5130);const c={class:"spa-container"},s={class:"spa-sidebar"},a=["onClick"],l={key:0,class:"isAdmin"},d={class:"spa-content"},u={key:0,class:"add-service-form"};function v(e,r,t,v,m,p){const S=(0,i.g2)("SpaList");return(0,i.uX)(),(0,i.CE)("div",c,[(0,i.Lk)("aside",s,[r[8]||(r[8]=(0,i.Lk)("h2",null,"Послуги",-1)),(0,i.Lk)("ul",null,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(e.categoriesSpa,(e=>((0,i.uX)(),(0,i.CE)("li",{key:e,onClick:r=>p.selectCategory(e)},(0,n.v_)(e),9,a)))),128))]),p.isAdmin?((0,i.uX)(),(0,i.CE)("div",l,[(0,i.bo)((0,i.Lk)("input",{type:"text","onUpdate:modelValue":r[0]||(r[0]=e=>m.newCategory=e),placeholder:"Нова категорія"},null,512),[[o.Jo,m.newCategory]]),r[7]||(r[7]=(0,i.Lk)("br",null,null,-1)),(0,i.Lk)("button",{onClick:r[1]||(r[1]=r=>e.addCategory(m.newCategory))},"Додати категорію")])):(0,i.Q3)("",!0)]),(0,i.Lk)("section",d,[(0,i.bF)(S,{currentCategory:m.currentCategory,isAdmin:p.isAdmin,onAddService:p.openAddServiceForm,onDeleteCategory:p.handleDeleteCategory},null,8,["currentCategory","isAdmin","onAddService","onDeleteCategory"])]),m.showAddServiceForm?((0,i.uX)(),(0,i.CE)("div",u,[(0,i.Lk)("h3",null,"Додати нову послугу до "+(0,n.v_)(m.currentCategory),1),(0,i.bo)((0,i.Lk)("input",{type:"text","onUpdate:modelValue":r[2]||(r[2]=e=>m.newServiceName=e),placeholder:"Назва послуги"},null,512),[[o.Jo,m.newServiceName]]),(0,i.bo)((0,i.Lk)("input",{type:"text","onUpdate:modelValue":r[3]||(r[3]=e=>m.newServiceDescription=e),placeholder:"Опис послуги"},null,512),[[o.Jo,m.newServiceDescription]]),(0,i.bo)((0,i.Lk)("input",{type:"number","onUpdate:modelValue":r[4]||(r[4]=e=>m.newServicePrice=e),placeholder:"Ціна послуги"},null,512),[[o.Jo,m.newServicePrice]]),(0,i.Lk)("button",{onClick:r[5]||(r[5]=(...e)=>p.handleAddService&&p.handleAddService(...e))},"Додати послугу"),(0,i.Lk)("button",{onClick:r[6]||(r[6]=(...e)=>p.closeAddServiceForm&&p.closeAddServiceForm(...e))},"Скасувати")])):(0,i.Q3)("",!0)])}var m=t(782);const p={key:0,class:"isAdmin"};function S(e,r,t,o,c,s){const a=(0,i.g2)("SpaItem");return(0,i.uX)(),(0,i.CE)("div",null,[(0,i.Lk)("h2",null,(0,n.v_)(t.currentCategory),1),t.isAdmin?((0,i.uX)(),(0,i.CE)("div",p,[(0,i.Lk)("button",{onClick:r[0]||(r[0]=r=>e.$emit("add-service"))},"Додати послугу"),(0,i.Lk)("button",{onClick:r[1]||(r[1]=(...e)=>s.confirmDeleteCategory&&s.confirmDeleteCategory(...e))},"Видалити категорію")])):(0,i.Q3)("",!0),((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(e.getServiceByCategory(t.currentCategory),(e=>((0,i.uX)(),(0,i.CE)("div",{key:e.name},[(0,i.bF)(a,{servis:e,isAdmin:t.isAdmin,onDeleteService:s.handleDeleteService},null,8,["servis","isAdmin","onDeleteService"])])))),128))])}const C={class:"servis-item"},y={class:"price"},h={key:0,class:"isAdmin"};function g(e,r,t,o,c,s){return(0,i.uX)(),(0,i.CE)("div",C,[(0,i.Lk)("h3",null,(0,n.v_)(t.servis.name),1),(0,i.Lk)("p",null,(0,n.v_)(t.servis.description),1),(0,i.Lk)("span",y,(0,n.v_)(t.servis.price)+" грн",1),r[1]||(r[1]=(0,i.Lk)("br",null,null,-1)),r[2]||(r[2]=(0,i.Lk)("br",null,null,-1)),t.isAdmin?((0,i.uX)(),(0,i.CE)("div",h,[(0,i.Lk)("button",{onClick:r[0]||(r[0]=(...e)=>s.confirmDeleteService&&s.confirmDeleteService(...e))},"Видалити")])):(0,i.Q3)("",!0)])}var k={name:"SpaItem",props:{servis:{type:Object,required:!0},isAdmin:{type:Boolean,default:!1}},methods:{confirmDeleteService(){confirm("Ви впевнені, що хочете видалити послугу?")&&this.$emit("delete-service",this.servis.name)}}},A=t(1241);const w=(0,A.A)(k,[["render",g]]);var L=w,b={name:"SpaList",components:{SpaItem:L},props:{currentCategory:{type:String,required:!0},isAdmin:{type:Boolean,default:!1}},computed:{...(0,m.L8)("serviceStore",["getServiceByCategory"]),spaServises(){return this.getServiceByCategory(this.currentCategory)}},methods:{...(0,m.i0)("serviceStore",["deleteService"]),handleDeleteService(e){this.deleteService({category:this.currentCategory,serviceName:e})},confirmDeleteCategory(){confirm("Ви впевнені що хочете видалити категорію?")&&this.$emit("delete-category",this.currentCategory)}}};const f=(0,A.A)(b,[["render",S]]);var D=f,F={name:"SpaGastro",components:{SpaList:D},data(){return{currentCategory:"Масажі",newCategory:"",newServiceName:"",newServiceDescription:"",newServicePrice:null,showAddServiceForm:!1}},computed:{...(0,m.aH)("serviceStore",["categoriesSpa"]),isAdmin(){return"true"===localStorage.getItem("isAdmin")}},methods:{...(0,m.i0)("serviceStore",["addCategory","deleteCategory","addService"]),selectCategory(e){this.currentCategory=e},handleDeleteCategory(e){this.deleteCategory(e)},openAddServiceForm(){this.showAddServiceForm=!0},closeAddServiceForm(){this.showAddServiceForm=!1,this.newServiceName="",this.newServiceDescription="",this.newServicePrice=null},handleAddService(){if(this.newServiceName&&this.newServiceDescription&&this.newServicePrice){const e={name:this.newServiceName,description:this.newServiceDescription,price:this.newServicePrice};this.addService({category:this.currentCategory,servis:e}),this.closeAddServiceForm()}else alert("Введіть усі данні для послуги")}}};const E=(0,A.A)(F,[["render",v]]);var X=E}}]);
//# sourceMappingURL=53.e3f29071.js.map