"use strict";(self.webpackChunkremote=self.webpackChunkremote||[]).push([[939,160],{3473:(e,t,n)=>{n.r(t),n.d(t,{default:()=>u});var r=n(885),a=n(5558),o=n.n(a),i=n(6992),c=n(4465),s=n(6752);const u=function(e){var t=e.uuid,n=e.symbol,u=e.mode,d=(0,a.useState)(""),l=(0,r.Z)(d,2),f=l[0],m=l[1],p=(0,i.$8)(f),v=p.riskData,y=p.isLoading,g=p.error,h=function(e){e.data.data.message&&e.data.data.message.symbol&&e.data.data.uuid===t&&m(e.data.data.message.symbol)};if((0,a.useEffect)((function(){return(0,c.Ld)(h),function(){(0,c.r1)(h)}}),[]),(0,a.useEffect)((function(){n&&m(n)}),[n]),y)return o().createElement(s.Z,{mode:u});if(g)return o().createElement("div",null,"Error: ",g.message);if(!v||!f)return o().createElement("div",null,"Enter a symbol to see the risk data");var E="dark"===u?"dark-mode":"light-mode";return o().createElement("div",{className:"risk-container ".concat(E)},o().createElement("div",{className:"risk-symbol  ".concat(E)},v.id),o().createElement("div",{className:"risk-risk  ".concat(E)},"Risk: ",v.risk),o().createElement("div",{className:"risk-description  ".concat(E)},v.description))}},2360:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c});var r=n(5558),a=n.n(r),o=n(3755),i=n(3473);const c=function(e){var t=e.setWidgetStyle,n=(e.widgetStyle,e.uuid),c=e.mode;return(0,r.useEffect)((function(){window["widget-style"]&&"function"==typeof t&&t(window["widget-style"])}),[]),a().createElement("div",{style:{display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center"}},a().createElement("div",{style:{flexGrow:0}},a().createElement(o.default,{symbol:"AAPL",uuid:n,mode:c})),a().createElement("div",{style:{flexGrow:0}},a().createElement(i.default,{symbol:"AAPL",uuid:n,mode:c})),a().createElement("style",null,"\n          @media screen and (max-width: 768px) {\n            div {\n              flex-direction: column;\n            }\n          }\n        "))}},3755:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});var r=n(5558),a=n.n(r),o=(n(4343),n(7654));n(6313);const i=function(e){var t=e.setWidgetStyle,n=e.symbol,i=void 0===n?"AAPL":n,c=e.uuid;return(0,r.useEffect)((function(){window["widget-style"]&&"function"==typeof t&&t(window["widget-style"])}),[]),i&&a().createElement(o.Z,{props:e,uuid:c})}},6752:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(5558),a=n.n(r);const o=function(e){var t="dark"===e.mode?"dark-mode":"light-mode";return a().createElement("div",{className:"risk-container ".concat(t)},a().createElement("div",{className:"risk-symbol ".concat(t)}),a().createElement("div",{className:"risk-risk ".concat(t)},"Risk:"),a().createElement("div",{className:"risk-description ".concat(t)}))}},3645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var u=0;u<e.length;u++){var d=[].concat(e[u]);r&&i[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),t.push(d))}},t}},8081:e=>{e.exports=function(e){return e[1]}},3379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var o={},i=[],c=0;c<e.length;c++){var s=e[c],u=r.base?s[0]+r.base:s[0],d=o[u]||0,l="".concat(u," ").concat(d);o[u]=d+1;var f=n(l),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==f)t[f].references++,t[f].updater(m);else{var p=a(m,r);r.byIndex=c,t.splice(c,0,{identifier:l,updater:p,references:1})}i.push(l)}return i}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var c=n(o[i]);t[c].references--}for(var s=r(e,a),u=0;u<o.length;u++){var d=n(o[u]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}o=s}}},9216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},3565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},7795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},4589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}}]);