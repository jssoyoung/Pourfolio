(this["webpackJsonpmern-client"]=this["webpackJsonpmern-client"]||[]).push([[0],{75:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),a=c(57),i=c.n(a),o=c(12),s=c(35),j=c(4),u=c(65),l=c(84),O=c(85),b=c(87),d=c(64),h=c(10),v=c(66),p=c(14),f=function(e,t){switch(t.type){case"UPDATE_PRODUCTS":return Object(o.a)(Object(o.a)({},e),{},{products:Object(p.a)(t.products)});case"ADD_TO_CART":return Object(o.a)(Object(o.a)({},e),{},{cartOpen:!0,cart:[].concat(Object(p.a)(e.cart),[t.product])});case"ADD_MULTIPLE_TO_CART":return Object(o.a)(Object(o.a)({},e),{},{cart:[].concat(Object(p.a)(e.cart),Object(p.a)(t.products))});case"UPDATE_CART_QUANTITY":return Object(o.a)(Object(o.a)({},e),{},{cartOpen:!0,cart:e.cart.map((function(e){return t._id===e._id&&(e.purchaseQuantity=t.purchaseQuantity),e}))});case"REMOVE_FROM_CART":var c=e.cart.filter((function(e){return e._id!==t._id}));return Object(o.a)(Object(o.a)({},e),{},{cartOpen:c.length>0,cart:c});case"CLEAR_CART":return Object(o.a)(Object(o.a)({},e),{},{cartOpen:!1,cart:[]});case"TOGGLE_CART":return Object(o.a)(Object(o.a)({},e),{},{cartOpen:!e.cartOpen});case"UPDATE_CATEGORIES":return Object(o.a)(Object(o.a)({},e),{},{categories:Object(p.a)(t.categories)});case"UPDATE_CURRENT_CATEGORY":return Object(o.a)(Object(o.a)({},e),{},{currentCategory:t.currentCategory});default:return e}};var x=c(5),g=["value"],w=Object(n.createContext)(),T=w.Provider,A=function(e){e.value;var t,c=Object(v.a)(e,g),r=(t={products:[],cart:[],cartOpen:!1,categories:[],currentCategory:""},Object(n.useReducer)(f,t)),a=Object(h.a)(r,2),i=a[0],s=a[1];return Object(x.jsx)(T,Object(o.a)({value:[i,s]},c))};var m=function(){return Object(x.jsx)("div",{children:"Home"})};var _=function(){return Object(x.jsx)("div",{children:"Cellar"})};var C=function(){return Object(x.jsx)("div",{children:"Signup"})};var R=function(){return Object(x.jsx)("div",{children:"Settings"})};var E,k=function(){return Object(x.jsx)("div",{children:"Search"})},y=c(58),S=c(59).a.div(E||(E=Object(y.a)(["\n  background-color: blue;\n"])));var U=function(){return Object(x.jsx)(S,{children:"Logo"})};var D=function(){return Object(x.jsxs)("div",{children:[Object(x.jsx)("input",{type:"checkbox"}),";"]})};var P=function(){return Object(x.jsxs)("div",{children:[Object(x.jsx)(D,{}),Object(x.jsx)(U,{}),Object(x.jsx)(s.b,{to:"/signup",children:"Sign Up"})]})};var W=function(){return Object(x.jsxs)("div",{children:[Object(x.jsx)(P,{}),Object(x.jsx)(j.b,{})]})},L=Object(u.a)({uri:"/graphql"}),I=Object(d.a)((function(e,t){var c=t.headers,n=localStorage.getItem("id_token");return{headers:Object(o.a)(Object(o.a)({},c),{},{authorization:n?"Bearer ".concat(n):""})}})),G=new l.a({link:I.concat(L),cache:new O.a});var M=function(){return Object(x.jsx)(b.a,{client:G,children:Object(x.jsx)(s.a,{children:Object(x.jsx)("div",{children:Object(x.jsx)(A,{children:Object(x.jsx)(j.e,{children:Object(x.jsxs)(j.c,{element:Object(x.jsx)(W,{}),children:[Object(x.jsx)(j.c,{index:!0,element:Object(x.jsx)(j.a,{replace:!0,to:"/"})}),Object(x.jsx)(j.c,{path:"/",element:Object(x.jsx)(m,{})}),Object(x.jsx)(j.c,{path:"/signup",element:Object(x.jsx)(C,{})}),Object(x.jsx)(j.c,{path:"/setting",element:Object(x.jsx)(R,{})}),Object(x.jsx)(j.c,{path:"/search",element:Object(x.jsx)(k,{})}),Object(x.jsx)(j.c,{path:"/cellar",element:Object(x.jsx)(_,{})})]})})})})})})},N=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function B(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var c=e.installing;null!=c&&(c.onstatechange=function(){"installed"===c.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(Object(x.jsx)(r.a.StrictMode,{children:Object(x.jsx)(M,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");N?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(c){var n=c.headers.get("content-type");404===c.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):B(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):B(t,e)}))}}()}},[[75,1,2]]]);
//# sourceMappingURL=main.ea61441a.chunk.js.map