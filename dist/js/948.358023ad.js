"use strict";(self["webpackChunkapp_vue"]=self["webpackChunkapp_vue"]||[]).push([[948],{4948:function(s,e,r){r.r(e),r.d(e,{default:function(){return h}});var o=r(641),t=r(3751),a=r(33);const i={class:"login-container"},n=["type"],u={key:0,class:"error"};function d(s,e,r,d,l,p){return(0,o.uX)(),(0,o.CE)("div",i,[e[7]||(e[7]=(0,o.Lk)("h2",null,"Авторизація",-1)),(0,o.Lk)("form",{onSubmit:e[3]||(e[3]=(0,t.D$)(((...s)=>p.login&&p.login(...s)),["prevent"]))},[(0,o.Lk)("div",null,[e[4]||(e[4]=(0,o.Lk)("label",{for:"username"},"Логін",-1)),(0,o.bo)((0,o.Lk)("input",{type:"text",id:"username","onUpdate:modelValue":e[0]||(e[0]=s=>l.username=s),required:""},null,512),[[t.Jo,l.username]])]),(0,o.Lk)("div",null,[e[5]||(e[5]=(0,o.Lk)("label",{for:"password"},"Пароль",-1)),(0,o.bo)((0,o.Lk)("input",{type:l.showPassword?"text":"password",id:"password","onUpdate:modelValue":e[1]||(e[1]=s=>l.password=s),required:""},null,8,n),[[t.hp,l.password]]),(0,o.Lk)("button",{id:"show-hide",type:"button",onClick:e[2]||(e[2]=(...s)=>p.togglePasswordVisibility&&p.togglePasswordVisibility(...s))},(0,a.v_)(l.showPassword?"Приховати":"Показати"),1)]),e[6]||(e[6]=(0,o.Lk)("button",{id:"button-login-ad",type:"submit"},"Увійти",-1))],32),l.errorMessage?((0,o.uX)(),(0,o.CE)("p",u,(0,a.v_)(l.errorMessage),1)):(0,o.Q3)("",!0)])}r(4114);var l={name:"LoginAdmin",data(){return{username:"",password:"",errorMessage:"",showPassword:!1}},methods:{login(){"admin"===this.username&&"admin"===this.password?(localStorage.setItem("isAdmin","true"),this.$router.push("/")):this.errorMessage="Невірний логін або пароль"},togglePasswordVisibility(){this.showPassword=!this.showPassword}}},p=r(6262);const w=(0,p.A)(l,[["render",d]]);var h=w}}]);
//# sourceMappingURL=948.358023ad.js.map