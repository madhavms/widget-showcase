"use strict";(self.webpackChunkremote=self.webpackChunkremote||[]).push([[298],{7298:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});var r=n(885),i=n(5558),o=n.n(i);n(2162);const a=function(e){var t=(0,i.useState)([]),n=(0,r.Z)(t,2),a=n[0],c=n[1],s=e.setWidgetStyle;e.widgetStyle,(0,i.useEffect)((function(){window["widget-style"]&&"function"==typeof s&&s(window["widget-style"])}),[]);var l=[{id:1,title:"Stock Market Hits All-Time High",description:"The stock market reached a new record high today as investors cheered strong earnings reports and positive economic data.",url:"/stock-market-update"},{id:2,title:"Fed Keeps Interest Rates Steady",description:"The Federal Reserve announced that it will keep interest rates unchanged at its latest meeting, citing steady economic growth and low inflation.",url:"/fed-interest-rates"}];return(0,i.useEffect)((function(){var e=function(){var e=Math.floor(Math.random()*l.length);c([l[e]])},t=setInterval(e,5e3);return e(),function(){return clearInterval(t)}}),[]),o().createElement("div",{className:"dynamic-financial-news-widget"},o().createElement("div",{className:"news-item",style:{width:"300px"}},a.map((function(e){return o().createElement(o().Fragment,{key:e.id},o().createElement("h3",{className:"news-item-title"},e.title),o().createElement("p",{className:"news-item-description"},e.description),o().createElement("a",{className:"news-item-link"},"Read More"))}))))}},4466:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(8081),i=n.n(r),o=n(3645),a=n.n(o)()(i());a.push([e.id,".dynamic-financial-news-widget {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n}\n\n.news-item {\n  width: calc(50% - 10px);\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);\n  border-radius: 5px;\n  overflow: hidden;\n}\n\n.news-item.light-mode {\n  background-color: rgb(206, 205, 205);\n}\n\n.news-item.dark-mode {\n  background-color: #252424;\n}\n\n.news-item-title {\n  font-size: 18px;\n  font-weight: 600;\n  margin: 10px;\n}\n\n.news-item-title.dark-mode {\n  color: white;\n}\n\n.news-item-title.light-mode {\n  color: black;\n}\n\n.news-item-description {\n  font-size: 14px;\n  margin: 10px;\n}\n\n.news-item-description.dark-mode {\n  color:white;\n}\n\n.news-item-description.light-mode {\n  color:dark;\n}\n\n.news-item-link {\n  display: block;\n  font-size: 14px;\n  font-weight: 600;\n  color: #337ab7;\n  text-align: right;\n  margin: 10px;\n}\n\n.news-item-link:hover {\n  text-decoration: underline;\n}\n",""]);const c=a},3645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,i,o){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var l=0;l<e.length;l++){var u=[].concat(e[l]);r&&a[u[0]]||(void 0!==o&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=o),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),i&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=i):u[4]="".concat(i)),t.push(u))}},t}},8081:e=>{e.exports=function(e){return e[1]}},2162:(e,t,n)=>{var r=n(3379),i=n.n(r),o=n(7795),a=n.n(o),c=n(3565),s=n.n(c),l=n(9216),u=n.n(l),d=n(4589),f=n.n(d),p=n(4466),m={};m.styleTagTransform=f(),m.setAttributes=s(),m.insert=e=>{window["widget-style"]=e,(m.target||document.head).appendChild(e)},m.domAPI=a(),m.insertStyleElement=u(),i()(p.Z,m),p.Z&&p.Z.locals&&p.Z.locals},3379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var o={},a=[],c=0;c<e.length;c++){var s=e[c],l=r.base?s[0]+r.base:s[0],u=o[l]||0,d="".concat(l," ").concat(u);o[l]=u+1;var f=n(d),p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==f)t[f].references++,t[f].updater(p);else{var m=i(p,r);r.byIndex=c,t.splice(c,0,{identifier:d,updater:m,references:1})}a.push(d)}return a}function i(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,i){var o=r(e=e||[],i=i||{});return function(e){e=e||[];for(var a=0;a<o.length;a++){var c=n(o[a]);t[c].references--}for(var s=r(e,i),l=0;l<o.length;l++){var u=n(o[l]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}o=s}}},9216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},3565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},7795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var i=void 0!==n.layer;i&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,i&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},4589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},907:(e,t,n)=>{function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}n.d(t,{Z:()=>r})},885:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(181);function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,o,a,c=[],s=!0,l=!1;try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;s=!1}else for(;!(s=(r=o.call(n)).done)&&(c.push(r.value),c.length!==t);s=!0);}catch(e){l=!0,i=e}finally{try{if(!s&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw i}}return c}}(e,t)||(0,r.Z)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},181:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(907);function i(e,t){if(e){if("string"==typeof e)return(0,r.Z)(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?(0,r.Z)(e,t):void 0}}}}]);