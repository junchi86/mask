(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{28:function(e,t,n){},45:function(e,t,n){e.exports=n(82)},50:function(e,t,n){},80:function(e,t,n){},82:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),l=n(38),c=n.n(l);n(50),n(28);var o=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"header"},"Is there any Mask for me?"))};var u=function(){return r.a.createElement("h1",{className:"footer"},"Made by JH Kim")},i=n(14),s=n(23),m=n.n(s),g=n(39),f=n(40),p=n.n(f),d=n(16);n(80);function v(e){var t=e.latLng,n=Object(a.useState)([]),l=Object(i.a)(n,2),c=l[0],o=l[1],u=Object(a.useState)(t),s=Object(i.a)(u,2),f=s[0],v=s[1],E=function(){var e=Object(g.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.get("https://8oi9s0nnth.apigw.ntruss.com/corona19-masks/v1/storesByGeo/json?lat=".concat(f.lat,"&lng=").concat(f.lng,"&m=1000"));case 3:return t=e.sent,e.abrupt("return",o(t.data.stores));case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)(E,[]);var h=function(e){return"few"===e.remain_stat?"red":"some"===e.remain_stat?"yellow":"plenty"===e.remain_stat?"green":"gray"};return r.a.createElement(d.b,{mapDivId:"maps-getting-started-uncontrolled",style:{margin:"auto",width:"100%",height:"80vh",position:"relative"},defaultZoom:17,center:f,onCenterChanged:function(e){return v({lat:e._lat,lng:e._lng})},onDragend:function(){return E()}},c?c.map((function(e){return r.a.createElement(d.a,{key:e.code,center:{lat:e.lat,lng:e.lng},radius:10,fillOpacity:.5,fillColor:h(e),strokeColor:"black",clickable:!0,onClick:function(){return function(e){switch(e.remain_stat){case"empty":return alert("".concat(e.name,"\uc5d0\ub294 \ub9c8\uc2a4\ud06c\uac00 \uc5c6\uc5b4\uc694"));case"few":return alert("".concat(e.name,"\uc5d0\ub294 \ub9c8\uc2a4\ud06c\uac00 \uc870\uae08 \uc788\uc5b4\uc694(30\uac1c \ubbf8\ub9cc)"));case"some":return alert("".concat(e.name,"\uc5d0\ub294 \ub9c8\uc2a4\ud06c\uac00 \uc5b4\ub290 \uc815\ub3c4 \uc788\uc5b4\uc694(100\uac1c \ubbf8\ub9cc)"));case"plenty":return alert("".concat(e.name,"\uc5d0\ub294 \ub9c8\uc2a4\ud06c\uac00 \uaf64 \uc788\uc5b4\uc694(100\uac1c \ubbf8\ub9cc)"))}}(e)}})})):null,r.a.createElement("div",{className:"mapover"},r.a.createElement("ul",null,r.a.createElement("li",null,"100\uac1c \uc774\uc0c1"),r.a.createElement("li",null,"30\uac1c \uc774\uc0c1"),r.a.createElement("li",null,"30\uac1c \ubbf8\ub9cc"),r.a.createElement("li",null,"0\uac1c"))))}var E=function(e){var t=e.latLng;return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.c,{ncpClientId:"1gzg5f9gv9",error:r.a.createElement("p",null,"Maps Load Error"),loading:r.a.createElement("p",null,"Maps Loading...")},r.a.createElement(v,{latLng:t})))};var h=function(){var e=Object(a.useState)({lat:null,lng:null}),t=Object(i.a)(e,2),n=t[0],l=t[1];return Object(a.useEffect)((function(){navigator.geolocation.getCurrentPosition((function(e){var t=e.coords.latitude,n=e.coords.longitude;l({lat:t,lng:n})}),(function(){console.error("\uc704\uce58 \uc815\ubcf4\ub97c \ud68d\ub4dd \uc2e4\ud328!")}))}),[]),console.log(n),r.a.createElement(r.a.Fragment,null,r.a.createElement(E,{latLng:n}))};var b=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(o,null),r.a.createElement(h,null),r.a.createElement(u,null))},w=n(44),y=n(9);var k=function(){return r.a.createElement(w.a,null,r.a.createElement(y.a,{exact:!0,path:"/",component:b}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[45,1,2]]]);
//# sourceMappingURL=main.6da4777c.chunk.js.map