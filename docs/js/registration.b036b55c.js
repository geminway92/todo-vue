(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["registration"],{"47dc":function(e,t,r){"use strict";r("6b6c")},"6b6c":function(e,t,r){},b0c0:function(e,t,r){var n=r("83ab"),s=r("5e77").EXISTS,o=r("9bf2").f,i=Function.prototype,a=i.toString,c=/^\s*function ([^ (]*)/,u="name";n&&!s&&o(i,u,{configurable:!0,get:function(){try{return a.call(this).match(c)[1]}catch(e){return""}}})},bd55:function(e,t,r){"use strict";r.r(t);r("b0c0");var n=r("7a23"),s=function(e){return Object(n["t"])("data-v-82a5bd5a"),e=e(),Object(n["r"])(),e},o={class:"registration"},i=s((function(){return Object(n["e"])("h1",null,"Bienvenido/a",-1)})),a={key:0},c={key:1,class:"title-errors"},u=s((function(){return Object(n["e"])("b",null,"Por favor, corrija el(los) siguientes error(es):",-1)})),l=s((function(){return Object(n["e"])("div",{class:"container-button"},[Object(n["e"])("button",{type:"submit"},"Registrar")],-1)})),b={class:"h5-cuenta"},d=Object(n["g"])("¿Tienes una cuenta? ");function p(e,t,r,s,p,m){return Object(n["q"])(),Object(n["d"])("div",o,[i,p.errors.length?(Object(n["q"])(),Object(n["d"])("p",c,[u,Object(n["e"])("ul",null,[(Object(n["q"])(!0),Object(n["d"])(n["a"],null,Object(n["w"])(p.errors,(function(e){return Object(n["q"])(),Object(n["d"])("li",{key:e},Object(n["z"])(e),1)})),128))])])):(Object(n["q"])(),Object(n["d"])("h3",a,"Le ayudamos a cumplir con sus tareas a tiempo")),Object(n["e"])("form",{onSubmit:t[4]||(t[4]=Object(n["E"])((function(){return m.checkForm&&m.checkForm.apply(m,arguments)}),["prevent"]))},[Object(n["D"])(Object(n["e"])("input",{type:"text",placeholder:"Escribe su nombre","onUpdate:modelValue":t[0]||(t[0]=function(e){return p.user.name=e})},null,512),[[n["B"],p.user.name,void 0,{trim:!0}]]),Object(n["D"])(Object(n["e"])("input",{type:"email",placeholder:"Escribe su email","onUpdate:modelValue":t[1]||(t[1]=function(e){return p.user.email=e}),autocomplete:"username"},null,512),[[n["B"],p.user.email,void 0,{trim:!0}]]),Object(n["D"])(Object(n["e"])("input",{type:"password",placeholder:"Escribe la contraseña","onUpdate:modelValue":t[2]||(t[2]=function(e){return p.user.password=e}),autocomplete:"new-password"},null,512),[[n["B"],p.user.password,void 0,{number:!0}]]),Object(n["D"])(Object(n["e"])("input",{type:"password",placeholder:"Confirme contraseña","onUpdate:modelValue":t[3]||(t[3]=function(e){return p.confirmPassword=e}),autocomplete:"new-password"},null,512),[[n["B"],p.confirmPassword,void 0,{number:!0}]]),l],32),Object(n["e"])("h5",b,[d,Object(n["e"])("span",{onClick:t[5]||(t[5]=function(e){return m.routerLogin()})},"Inicia sección")])])}var m=r("5530"),h=r("5502");let j=(e=21)=>{let t="",r=crypto.getRandomValues(new Uint8Array(e));while(e--){let n=63&r[e];t+=n<36?n.toString(36):n<62?(n-26).toString(36).toUpperCase():n<63?"_":"-"}return t};var O={name:"registration",data:function(){return{user:{id:"",name:"",email:"",password:null},errors:[],confirmPassword:null}},methods:Object(m["a"])(Object(m["a"])({},Object(h["b"])("todo",["setUser"])),{},{checkForm:function(){this.errors=[],this.user.name||this.errors.push("El nombre es obligatorio."),this.user.email||this.errors.push("El correo es obligatorio"),this.user.password&&this.confirmPassword?this.user.password!==this.confirmPassword&&this.errors.push("La contraseña no coincide"):this.errors.push("La contraseña es obligatoria"),this.user.name&&this.user.email&&this.user.password&&this.user.password==this.confirmPassword&&(this.user.id=j(),console.log(this.user),this.setUser(this.user),this.user={id:"",name:"",email:"",password:null})},routerLogin:function(){this.$router.push({name:"login"})}})},f=(r("47dc"),r("6b0d")),w=r.n(f);const g=w()(O,[["render",p],["__scopeId","data-v-82a5bd5a"]]);t["default"]=g}}]);
//# sourceMappingURL=registration.b036b55c.js.map