(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["todorouter"],{"1d8d":function(e,t,o){},"353b":function(e,t,o){"use strict";o("40e5")},"40e5":function(e,t,o){},8127:function(e,t,o){"use strict";o("1d8d")},a300:function(e,t,o){"use strict";o("a873")},a873:function(e,t,o){},d087:function(e,t,o){"use strict";o.r(t);o("b0c0");var n=o("7a23"),c=function(e){return Object(n["v"])("data-v-15b727f9"),e=e(),Object(n["t"])(),e},a={key:0,class:"container-modal"},s={key:1,class:"container-modal--photo"},r={class:"container-layout-todo"},i={class:"todo-layout"},l=c((function(){return Object(n["g"])("div",{class:"container-circle"},[Object(n["g"])("div",{class:"circle-left"}),Object(n["g"])("div",{class:"circle-right"})],-1)})),u=c((function(){return Object(n["g"])("i",{class:"fas fa-sign-out-alt"},null,-1)})),d=[u],h={class:"container-photo"},p=["src"],b=Object(n["h"])("¡Bienvenido/a "),f={class:"container-clock"},O=Object(n["h"])(": "),j=Object(n["h"])(": "),g=c((function(){return Object(n["g"])("h1",{class:"title-list"},"Lista de Tareas",-1)})),m={class:"container-task-list"},k={class:"container-title-icon-plus"},v=c((function(){return Object(n["g"])("h5",{class:"title-daily-tasks"},"Tareas Diarias",-1)})),w={class:"container-icon-plus-dash"},P={class:"container-ul"},T={class:"task-list"},I=["onClick"],C=["onClick"];function M(e,t,o,c,u,M){var y=Object(n["z"])("NewTaskModal"),x=Object(n["z"])("InputPhotoModal");return Object(n["s"])(),Object(n["f"])(n["a"],null,[u.showIconPlus?Object(n["e"])("",!0):(Object(n["s"])(),Object(n["f"])("div",a,[Object(n["i"])(y,{onCreateTask:M.createTask,onOpenModal:M.openModal,newTask:u.newTask,showIconPlus:u.showIconPlus},null,8,["onCreateTask","onOpenModal","newTask","showIconPlus"])])),u.openPhoto?(Object(n["s"])(),Object(n["f"])("div",s,[Object(n["i"])(x,{onOpenModalPhoto:M.openModalPhoto,onUpdatePhoto:M.updatePhoto,openPhoto:u.openPhoto},null,8,["onOpenModalPhoto","onUpdatePhoto","openPhoto"])])):Object(n["e"])("",!0),Object(n["g"])("div",r,[Object(n["g"])("div",i,[l,Object(n["g"])("div",{onClick:t[0]||(t[0]=function(e){return M.onLogout()}),class:"container-icon-logout"},d),Object(n["g"])("div",h,[Object(n["g"])("img",{onClick:t[1]||(t[1]=function(e){return M.openModalPhoto()}),src:e.currentUser.photoProfile,alt:"photoProfile"},null,8,p),Object(n["g"])("h1",null,[b,Object(n["g"])("span",null,Object(n["B"])(e.currentUser.name)+"!",1)])]),Object(n["g"])("div",f,[Object(n["g"])("h1",null,[Object(n["g"])("span",null,Object(n["B"])(u.hours),1),O,Object(n["g"])("span",null,Object(n["B"])(u.minAddCero),1),j,Object(n["g"])("span",null,Object(n["B"])(u.secondAddCero),1)])]),g,Object(n["g"])("div",m,[Object(n["g"])("div",k,[v,Object(n["g"])("div",w,[Object(n["g"])("i",{onClick:t[2]||(t[2]=function(e){return u.showIconPlus=!u.showIconPlus}),class:"far fa-plus-square"}),Object(n["g"])("i",{onClick:t[3]||(t[3]=function(e){return M.deleteTask()}),class:"fas fa-trash icon-delete"})])]),Object(n["g"])("div",P,[Object(n["g"])("ul",T,[(Object(n["s"])(!0),Object(n["f"])(n["a"],null,Object(n["y"])(e.tasks,(function(e){return Object(n["s"])(),Object(n["f"])("div",{key:e.id,class:"container-list",onClick:t[4]||(t[4]=function(e){return M.updateTask()})},[Object(n["g"])("div",{onClick:function(t){return e.completed=!e.completed},class:Object(n["o"])(["squareCheck",{"completed-square":e.completed}])},null,10,I),Object(n["g"])("li",{onClick:function(t){return e.completed=!e.completed},class:Object(n["o"])({completed:e.completed})},Object(n["B"])(e.text),11,C)])})),128))])])])])])],64)}var y=o("1da1"),x=o("5530"),S=(o("96cf"),o("5502")),A={class:"container-form"};function D(e,t,o,c,a,s){var r=this;return Object(n["s"])(),Object(n["f"])("div",{onClick:t[3]||(t[3]=Object(n["I"])((function(e){return r.$emit("openModal")}),["self"])),class:"container-modal"},[Object(n["g"])("div",A,[Object(n["g"])("form",{onSubmit:t[2]||(t[2]=Object(n["I"])((function(e){return r.$emit("createTask")}),["prevent"]))},[Object(n["H"])(Object(n["g"])("input",{onSubmit:t[0]||(t[0]=function(e){return r.$emit("createTask")}),type:"text","keyup.enter":"submit","onUpdate:modelValue":t[1]||(t[1]=function(e){return o.newTask.text=e}),placeholder:"Escribe tu tarea"},null,544),[[n["D"],o.newTask.text]])],32)])])}var $={emits:["openModal","createTask"],props:{newTask:{type:Object},showIconPlus:{type:Boolean}}},_=(o("a300"),o("6b0d")),B=o.n(_);const L=B()($,[["render",D],["__scopeId","data-v-9ed49846"]]);var U=L,N=function(e){return Object(n["v"])("data-v-36adca8e"),e=e(),Object(n["t"])(),e},R={class:"modal"},q=N((function(){return Object(n["g"])("h1",null,"¿Desea cambiar la foto de perfil?",-1)}));function E(e,t,o,c,a,s){var r=this;return Object(n["s"])(),Object(n["f"])("div",{onClick:t[2]||(t[2]=Object(n["I"])((function(e){return r.$emit("openModalPhoto")}),["self"])),class:"container-modal-photo"},[Object(n["g"])("div",R,[q,Object(n["H"])(Object(n["g"])("input",{type:"file",onChange:t[0]||(t[0]=function(){return s.uploadImageProfile&&s.uploadImageProfile.apply(s,arguments)}),ref:"imageSelector",accept:"image/png, image/jpeg"},null,544),[[n["E"],!1]]),Object(n["g"])("button",{onClick:t[1]||(t[1]=function(){return s.onSelectedImage&&s.onSelectedImage.apply(s,arguments)})},"Subir foto")])])}var H=o("bc3a"),z=o.n(H),J=function(){var e=Object(y["a"])(regeneratorRuntime.mark((function e(t){var o,n,c,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,o=new FormData,o.append("upload_preset","photoProfile"),o.append("file",t),n="https://api.cloudinary.com/v1_1/ddn278n2q/image/upload",e.next=9,z.a.post(n,o);case 9:return c=e.sent,a=c.data,console.log(a),e.abrupt("return",a.secure_url);case 15:return e.prev=15,e.t0=e["catch"](2),console.log("Error al cargar la imagen, revisar logs"),console.log(e.t0),e.abrupt("return",null);case 20:case"end":return e.stop()}}),e,null,[[2,15]])})));return function(t){return e.apply(this,arguments)}}(),F=J,V={emits:["openModalPhoto","updatePhoto"],data:function(){return{picture:""}},methods:{onSelectedImage:function(){var e=this.$refs.imageSelector.click();console.log(e)},uploadImageProfile:function(e){var t=this;return Object(y["a"])(regeneratorRuntime.mark((function o(){var n,c;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:if(n=e.target.files[0],n){o.next=3;break}return o.abrupt("return");case 3:return o.next=5,F(n);case 5:c=o.sent,console.log(t.picture),t.$emit("updatePhoto",c),t.$emit("openModalPhoto");case 9:case"end":return o.stop()}}),o)})))()}}};o("353b");const G=B()(V,[["render",E],["__scopeId","data-v-36adca8e"]]);var K=G,Q={name:"todolayaout",components:{NewTaskModal:U,InputPhotoModal:K},data:function(){return{date:"",hours:0,minutes:0,seconds:0,minAddCero:0,secondAddCero:0,showIconPlus:!0,openPhoto:!1,picture:"",newTask:{id:"",text:"",completed:!1}}},methods:Object(x["a"])(Object(x["a"])(Object(x["a"])({},Object(S["b"])("todo",["createTaskAction","loadLocalStorage","updateTaskLocalStorage","deleteTaskAction","updateNewPhotoProfile"])),Object(S["d"])("auth",["logout"])),{},{openModal:function(){this.showIconPlus=!this.showIconPlus},openModalPhoto:function(){this.openPhoto=!this.openPhoto},currentDate:function(){this.date=new Date(Date.now()),this.hours=this.date.getHours(),this.minutes=this.date.getMinutes(),this.seconds=this.date.getSeconds(),this.minutes<=9?this.minAddCero="0"+this.minutes:this.minAddCero=this.minutes,this.seconds<=9?this.secondAddCero="0"+this.seconds:this.secondAddCero=this.seconds},createTask:function(){this.newTask.text.length<=0||(console.log("he llegado"),this.newTask.id=this.date.getTime(),this.createTaskAction(this.newTask),this.resetNewTask(),this.showIconPlus=!0,console.log(this.newTask),console.log(this.showIconPlus))},updateTask:function(){var e=this;return Object(y["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.updateTaskLocalStorage(e.tasks);case 1:case"end":return t.stop()}}),t)})))()},deleteTask:function(){this.deleteTaskAction(this.tasks),console.log(this.tasks),console.log(this.$refs)},resetNewTask:function(){this.newTask={id:"",text:"",completed:!1}},onLogout:function(){this.$router.push({name:"login"}),this.logout()},updatePhoto:function(e){var t=e,o=this.user;o.photoProfile=t,o.idToken=this.currentUser.id,console.log(o),this.updateNewPhotoProfile(o)}}),computed:Object(x["a"])(Object(x["a"])(Object(x["a"])({},Object(S["c"])("auth",["currentUser"])),Object(S["e"])("todo",["tasks"])),Object(S["e"])("auth",["user"])),created:function(){var e=this;this.loadLocalStorage(),this.currentDate(),setInterval((function(){e.currentDate()}),1e3)}};o("8127");const W=B()(Q,[["render",M],["__scopeId","data-v-15b727f9"]]);t["default"]=W}}]);
//# sourceMappingURL=todorouter.9ce99342.js.map