(function(e){function t(t){for(var n,o,s=t[0],i=t[1],c=t[2],l=0,d=[];l<s.length;l++)o=s[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);f&&f(t);while(d.length)d.shift()();return u.push.apply(u,c||[]),r()}function r(){for(var e,t=0;t<u.length;t++){for(var r=u[t],n=!0,o=1;o<r.length;o++){var s=r[o];0!==a[s]&&(n=!1)}n&&(u.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},o={app:0},a={app:0},u=[];function s(e){return i.p+"js/"+({forgetpassword:"forgetpassword",home:"home","login~registration":"login~registration",login:"login",registration:"registration",todolayout:"todolayout",todorouter:"todorouter"}[e]||e)+"."+{forgetpassword:"c3c3350a",home:"c0de4be0","login~registration":"70f4b39c",login:"8293d065",registration:"5203efe1",todolayout:"d0fcb1b8",todorouter:"08ef69d7"}[e]+".js"}function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(e){var t=[],r={forgetpassword:1,home:1,login:1,registration:1,todolayout:1,todorouter:1};o[e]?t.push(o[e]):0!==o[e]&&r[e]&&t.push(o[e]=new Promise((function(t,r){for(var n="css/"+({forgetpassword:"forgetpassword",home:"home","login~registration":"login~registration",login:"login",registration:"registration",todolayout:"todolayout",todorouter:"todorouter"}[e]||e)+"."+{forgetpassword:"1fdb61a7",home:"1df97e5a","login~registration":"31d6cfe0",login:"7db19f19",registration:"281e7f86",todolayout:"054cc45d",todorouter:"f57942b2"}[e]+".css",a=i.p+n,u=document.getElementsByTagName("link"),s=0;s<u.length;s++){var c=u[s],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===n||l===a))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){c=d[s],l=c.getAttribute("data-href");if(l===n||l===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var n=t&&t.target&&t.target.src||a,u=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=n,delete o[e],f.parentNode.removeChild(f),r(u)},f.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){o[e]=0})));var n=a[e];if(0!==n)if(n)t.push(n[2]);else{var u=new Promise((function(t,r){n=a[e]=[t,r]}));t.push(n[2]=u);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=s(e);var d=new Error;c=function(t){l.onerror=l.onload=null,clearTimeout(f);var r=a[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",d.name="ChunkLoadError",d.type=n,d.request=o,r[1](d)}a[e]=void 0}};var f=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var f=l;u.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);var n={};r.r(n),r.d(n,"load",(function(){return d})),r.d(n,"createTask",(function(){return f})),r.d(n,"updateTask",(function(){return p})),r.d(n,"deleteTask",(function(){return g}));var o={};r.r(o),r.d(o,"loadLocalStorage",(function(){return y})),r.d(o,"updateTaskLocalStorage",(function(){return w})),r.d(o,"createTaskAction",(function(){return T})),r.d(o,"deleteTaskAction",(function(){return O})),r.d(o,"updateNewPhotoProfile",(function(){return j}));var a={};r.r(a),r.d(a,"createUser",(function(){return I})),r.d(a,"signInUser",(function(){return N})),r.d(a,"checkAuth",(function(){return A}));var u={};r.r(u),r.d(u,"currentState",(function(){return U})),r.d(u,"currentUser",(function(){return _}));var s={};r.r(s),r.d(s,"loginUser",(function(){return E})),r.d(s,"logout",(function(){return J}));r("e260"),r("e6cf"),r("cca6"),r("a79d");var i=r("7a23"),c=r("5502"),l=function(){return{tasks:[]}},d=(r("4de4"),function(e,t){e.tasks=t,localStorage.setItem("tasks",JSON.stringify(e.tasks))}),f=function(e,t){e.tasks.push(t),localStorage.setItem("tasks",JSON.stringify(e.tasks))},p=function(e,t){e.tasks=t,localStorage.setItem("tasks",JSON.stringify(e.tasks))},g=function(e,t){console.log(t);var r=t.filter((function(e){return!0!==e.completed}));console.log(r),e.tasks=r,localStorage.setItem("tasks",JSON.stringify(e.tasks))},m=r("1da1"),h=(r("96cf"),r("bc3a")),k=r.n(h),b=k.a.create({baseURL:"https://identitytoolkit.googleapis.com/v1/accounts",params:{key:"AIzaSyAUOkjZUPpoM1Hf3d_R1edFjTMHo_OPlyY"}}),v=b,y=function(){var e=Object(m["a"])(regeneratorRuntime.mark((function e(t){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(r=t.commit,e.prev=1,!localStorage.getItem("tasks")){e.next=6;break}return n=JSON.parse(localStorage.getItem("tasks")),r("load",n),e.abrupt("return");case 6:e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](1),console.log("error",e.t0);case 11:localStorage.setItem("tasks",JSON.stringify([]));case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),w=function(e,t){var r=e.commit;r("updateTask",t)},T=function(){var e=Object(m["a"])(regeneratorRuntime.mark((function e(t,r){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=t.commit,n("createTask",r);case 2:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),O=function(){var e=Object(m["a"])(regeneratorRuntime.mark((function e(t,r){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=t.commit,n("deleteTask",r);case 2:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),j=function(){var e=Object(m["a"])(regeneratorRuntime.mark((function e(t,r){var n,o,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.commit,n=localStorage.getItem("idToken"),o=r.photoProfile,e.next=5,v.post(":update",{idToken:n,photoUrl:o});case 5:a=e.sent,console.log(a);case 7:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),S=r("723e"),x={namespaced:!0,state:l,mutations:n,actions:o,getters:S},P=x,R=function(){return{status:"not-authenticated",user:null,idToken:null,refreshToken:null}},I=(r("b0c0"),function(){var e=Object(m["a"])(regeneratorRuntime.mark((function e(t,r){var n,o,a,u,s,i,c,l,d,f;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,o=r.name,a=r.email,u=r.password,s=r.photoProfile,e.prev=2,e.next=5,v.post(":signUp",{email:a,password:u,returnSecureToken:!0});case 5:return i=e.sent,c=i.data,l=c.idToken,d=c.refreshToken,e.next=10,v.post(":update",{displayName:o,idToken:l,photoUrl:s});case 10:return console.log(c),delete r.password,n("loginUser",{user:r,idToken:l,refreshToken:d}),e.abrupt("return",{ok:!0});case 16:return e.prev=16,e.t0=e["catch"](2),f=e.t0.response.data.error.errors[0].message,e.abrupt("return",{ok:!1,message:f});case 20:case"end":return e.stop()}}),e,null,[[2,16]])})));return function(t,r){return e.apply(this,arguments)}}()),N=function(){var e=Object(m["a"])(regeneratorRuntime.mark((function e(t,r){var n,o,a,u,s,i,c,l,d;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,o=r.email,a=r.password,e.prev=2,e.next=5,v.post(":signInWithPassword",{email:o,password:a,returnSecureToken:!0});case 5:return u=e.sent,s=u.data,i=s.displayName,c=s.idToken,l=s.refreshToken,r.name=i,console.log(s),delete r.password,n("loginUser",{user:r,idToken:c,refreshToken:l}),e.abrupt("return",{ok:!0});case 15:return e.prev=15,e.t0=e["catch"](2),d=e.t0.response.data.error.errors[0].message,e.abrupt("return",{ok:!1,message:d});case 19:case"end":return e.stop()}}),e,null,[[2,15]])})));return function(t,r){return e.apply(this,arguments)}}(),A=function(){var e=Object(m["a"])(regeneratorRuntime.mark((function e(t){var r,n,o,a,u,s,i,c,l,d,f;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(r=t.commit,n=localStorage.getItem("idToken"),o=localStorage.getItem("refreshToken"),n){e.next=6;break}return r("logout"),e.abrupt("return",{ok:!1,message:"No hay token"});case 6:return e.prev=6,e.next=9,v.post(":lookup",{idToken:n});case 9:return a=e.sent,u=a.data,console.log(u.users[0]),s=u.users[0],i=s.displayName,c=s.email,l=s.photoUrl,d={name:i,email:c,photoProfile:l},r("loginUser",{user:d,idToken:n,refreshToken:o}),e.abrupt("return",{ok:!0});case 18:return e.prev=18,e.t0=e["catch"](6),f=e.t0.response.data.error.errors.message,r("logout"),e.abrupt("return",{ok:!1,message:f});case 23:case"end":return e.stop()}}),e,null,[[6,18]])})));return function(t){return e.apply(this,arguments)}}(),U=function(e){return e.status},_=function(e){return e.user},E=function(e,t){var r=t.user,n=t.idToken,o=t.refreshToken;n&&(localStorage.setItem("idToken",n),e.idToken=n),o&&(localStorage.setItem("refreshToken",o),e.idToken=o),e.user=r,e.status="authenticated"},J=function(e){e.idToken=null,e.refreshToken=null,e.status="not-authenticated",console.log("legó a la mutación"),localStorage.removeItem("idToken"),localStorage.removeItem("refreshToken")},L={namespaced:!0,actions:a,getters:u,mutations:s,state:R},C=L,M=Object(c["a"])({modules:{todo:P,auth:C}}),B=M,H={key:0};function q(e,t,r,n,o,a){var u=Object(i["z"])("router-view");return"authenticating"===e.currentState?(Object(i["s"])(),Object(i["f"])("h1",H,Object(i["B"])(e.currentState),1)):(Object(i["s"])(),Object(i["d"])(u,{key:1}))}var z=r("5530"),D={data:function(){return{}},methods:Object(z["a"])(Object(z["a"])({},Object(c["b"])("auth",["checkAuth"])),{},{checkAuthStatus:function(){var e=this;return Object(m["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.checkAuth();case 2:return r=t.sent,console.log(r),t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})))()}}),computed:Object(z["a"])({},Object(c["c"])("auth",["currentState"]))},F=(r("d874"),r("6b0d")),K=r.n(F);const W=K()(D,[["render",q]]);var Y=W,Z=r("6c02"),G=(r("d3b7"),r("3ca3"),r("ddb0"),{name:"authlayout",component:function(){return r.e("todolayout").then(r.bind(null,"698a"))},children:[{path:"",name:"Home",component:function(){return r.e("home").then(r.bind(null,"92d7"))}},{path:"/registration",name:"registration",component:function(){return Promise.all([r.e("login~registration"),r.e("registration")]).then(r.bind(null,"1a8e"))}},{path:"/login",name:"login",component:function(){return Promise.all([r.e("login~registration"),r.e("login")]).then(r.bind(null,"8f17"))}},{path:"/forgetPassword",name:"forgetPassword",component:function(){return r.e("forgetpassword").then(r.bind(null,"d7b0"))}}]}),Q={name:"todorouter",component:function(){return r.e("todorouter").then(r.bind(null,"d087"))},children:[{path:"",name:"todolayaout",component:function(){return r.e("home").then(r.bind(null,"d087"))}}]},V=function(){var e=Object(m["a"])(regeneratorRuntime.mark((function e(t,r,n){var o,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,B.dispatch("auth/checkAuth");case 2:o=e.sent,a=o.ok,a?n():n({name:"login"});case 5:case"end":return e.stop()}}),e)})));return function(t,r,n){return e.apply(this,arguments)}}(),X=V,$=[Object(z["a"])({path:"/"},G),Object(z["a"])({path:"/todo",beforeEnter:[X]},Q)],ee=Object(Z["a"])({history:Object(Z["b"])(),routes:$}),te=ee;r("90c2");Object(i["c"])(Y).use(B).use(te).mount("#app")},"723e":function(e,t){},"90c2":function(e,t,r){},d874:function(e,t,r){"use strict";r("e5e4")},e5e4:function(e,t,r){}});
//# sourceMappingURL=app.ce11ac32.js.map