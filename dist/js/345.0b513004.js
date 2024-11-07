"use strict";(self["webpackChunkapp_vue"]=self["webpackChunkapp_vue"]||[]).push([[345],{1345:function(e,t,i){i.r(t),i.d(t,{default:function(){return M}});var n=i(6768),s=i(4232),o=i(5130);const r={class:"menu-container"},d={class:"menu-sidebar"},l=["onClick"],a={key:0,class:"isAdmin"},h={class:"menu-content"},u={key:0,class:"add-dish-form"};function c(e,t,i,c,m,D){const p=(0,n.g2)("MenuList");return(0,n.uX)(),(0,n.CE)("div",null,[(0,n.Lk)("div",r,[(0,n.Lk)("aside",d,[t[8]||(t[8]=(0,n.Lk)("h2",null,"Меню",-1)),(0,n.Lk)("ul",null,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(e.categoriesMenu,(e=>((0,n.uX)(),(0,n.CE)("li",{key:e,onClick:t=>D.selectCategory(e)},(0,s.v_)(e),9,l)))),128))]),D.isAdmin?((0,n.uX)(),(0,n.CE)("div",a,[(0,n.bo)((0,n.Lk)("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=e=>m.newCategory=e),placeholder:"Нова категорія"},null,512),[[o.Jo,m.newCategory]]),t[7]||(t[7]=(0,n.Lk)("br",null,null,-1)),(0,n.Lk)("button",{onClick:t[1]||(t[1]=t=>e.addCategory(m.newCategory))},"Додати категорію")])):(0,n.Q3)("",!0)]),(0,n.Lk)("section",h,[(0,n.bF)(p,{currentCategory:m.currentCategory,isAdmin:D.isAdmin,onAddDish:D.openAddDishForm,onDeleteCategory:D.handleDeleteCategory},null,8,["currentCategory","isAdmin","onAddDish","onDeleteCategory"])]),m.showAddDishForm?((0,n.uX)(),(0,n.CE)("div",u,[(0,n.Lk)("h3",null,"Додати нову страву до "+(0,s.v_)(m.currentCategory),1),(0,n.bo)((0,n.Lk)("input",{type:"text","onUpdate:modelValue":t[2]||(t[2]=e=>m.newDishName=e),placeholder:"Назва страви"},null,512),[[o.Jo,m.newDishName]]),(0,n.bo)((0,n.Lk)("input",{type:"text","onUpdate:modelValue":t[3]||(t[3]=e=>m.newDishDescription=e),placeholder:"Опис страви"},null,512),[[o.Jo,m.newDishDescription]]),(0,n.bo)((0,n.Lk)("input",{type:"number","onUpdate:modelValue":t[4]||(t[4]=e=>m.newDishPrice=e),placeholder:"Ціна страви"},null,512),[[o.Jo,m.newDishPrice]]),(0,n.Lk)("button",{onClick:t[5]||(t[5]=(...e)=>D.handleAddDish&&D.handleAddDish(...e))},"Додати страву"),(0,n.Lk)("button",{onClick:t[6]||(t[6]=(...e)=>D.closeAddDishForm&&D.closeAddDishForm(...e))},"Скасувати")])):(0,n.Q3)("",!0)])])}var m=i(782);const D={key:0,class:"isAdmin"};function p(e,t,i,o,r,d){const l=(0,n.g2)("MenuItem");return(0,n.uX)(),(0,n.CE)("div",null,[(0,n.Lk)("h2",null,(0,s.v_)(i.currentCategory),1),i.isAdmin?((0,n.uX)(),(0,n.CE)("div",D,[(0,n.Lk)("button",{onClick:t[0]||(t[0]=t=>e.$emit("add-dish"))},"Додати страву"),(0,n.Lk)("button",{onClick:t[1]||(t[1]=(...e)=>d.confirmDeleteCategory&&d.confirmDeleteCategory(...e))},"Видалити категорію")])):(0,n.Q3)("",!0),((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(d.dishes,(e=>((0,n.uX)(),(0,n.CE)("div",{key:e.name},[(0,n.bF)(l,{dish:e,isAdmin:i.isAdmin,onDeleteDish:d.handleDeleteDish},null,8,["dish","isAdmin","onDeleteDish"])])))),128))])}const C={class:"dish-item"},y={class:"price"},g={key:0,class:"isAdmin"};function k(e,t,i,o,r,d){return(0,n.uX)(),(0,n.CE)("div",C,[(0,n.Lk)("h3",null,(0,s.v_)(i.dish.name),1),(0,n.Lk)("p",null,(0,s.v_)(i.dish.description),1),(0,n.Lk)("span",y,(0,s.v_)(i.dish.price)+" грн",1),t[1]||(t[1]=(0,n.eW)()),t[2]||(t[2]=(0,n.Lk)("br",null,null,-1)),i.isAdmin?((0,n.uX)(),(0,n.CE)("div",g,[(0,n.Lk)("button",{onClick:t[0]||(t[0]=(...e)=>d.confirmDeleteDish&&d.confirmDeleteDish(...e))},"Видалити")])):(0,n.Q3)("",!0)])}var A={name:"MenuItem",props:{dish:{type:Object,required:!0},isAdmin:{type:Boolean,default:!1}},methods:{confirmDeleteDish(){confirm("Ви впевнені, що хочете видалити страву?")&&this.$emit("delete-dish",this.dish.name)}}},w=i(1241);const L=(0,w.A)(A,[["render",k]]);var v=L,f={name:"MenuList",components:{MenuItem:v},props:{currentCategory:{type:String,required:!0},isAdmin:{type:Boolean,default:!1}},computed:{...(0,m.L8)("menuStore",["getDishesByCategory"]),dishes(){return this.getDishesByCategory(this.currentCategory)}},methods:{...(0,m.i0)("menuStore",["deleteDish"]),handleDeleteDish(e){this.deleteDish({category:this.currentCategory,dishName:e})},confirmDeleteCategory(){confirm("Ви впевнені що хочете видалити категорію?")&&this.$emit("delete-category",this.currentCategory)}}};const b=(0,w.A)(f,[["render",p]]);var F=b,E={name:"MenuGastro",components:{MenuList:F},data(){return{currentCategory:"Перші страви",newCategory:"",newDishName:"",newDishDescription:"",newDishPrice:null,showAddDishForm:!1}},computed:{...(0,m.aH)("menuStore",["categoriesMenu"]),isAdmin(){return"true"===localStorage.getItem("isAdmin")}},methods:{...(0,m.i0)("menuStore",["addCategory","deleteCategory","addDish"]),selectCategory(e){this.currentCategory=e},handleDeleteCategory(e){this.deleteCategory(e)},openAddDishForm(){this.showAddDishForm=!0},closeAddDishForm(){this.showAddDishForm=!1,this.newDishName="",this.newDishDescription="",this.newDishPrice=null},handleAddDish(){if(this.newDishName&&this.newDishDescription&&this.newDishPrice){const e={name:this.newDishName,description:this.newDishDescription,price:this.newDishPrice};this.addDish({category:this.currentCategory,dish:e}),this.closeAddDishForm()}else alert("Введіть усі данні для страви")}}};const X=(0,w.A)(E,[["render",c]]);var M=X}}]);
//# sourceMappingURL=345.0b513004.js.map