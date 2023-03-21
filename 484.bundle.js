"use strict";(self.webpackChunkremote=self.webpackChunkremote||[]).push([[484],{1254:(e,t,n)=>{n.r(t);var a=n(5558),i=n.n(a),r=n(1120),s=n(8568),l=n(8358),o=n(2318),c=(0,r.Z)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1,textAlign:"center",color:"white"},appBar:{backgroundColor:"#3f51b5"}}}));function d(){var e=c();return i().createElement("div",{className:e.root},i().createElement(s.Z,{position:"static",className:e.appBar},i().createElement(l.Z,null,i().createElement(o.Z,{variant:"h6",className:e.title},"Widget Showcase"))),i().createElement("style",null,"\n          @media only screen and (max-width: 600px) {\n            .MuiToolbar-root {\n              flex-direction: column;\n              align-items: center;\n            }\n          }\n        "))}var m=n(885),u=n(6992),g=n(4465);const w=function(){return i().createElement("div",{className:"risk-container"},i().createElement("div",{className:"risk-symbol"}),i().createElement("div",{className:"risk-risk"},"Risk:"),i().createElement("div",{className:"risk-description"}))},h=function(e){var t=e.uuid,n=e.symbol,r=e.mode,s=(0,a.useState)(""),l=(0,m.Z)(s,2),o=l[0],c=l[1],d=(0,u.$8)(o),h=d.riskData,f=d.isLoading,p=d.error,k=function(e){e.data.data.message&&e.data.data.message.symbol&&e.data.data.uuid===t&&c(e.data.data.message.symbol)};if((0,a.useEffect)((function(){return(0,g.Ld)(k),function(){(0,g.r1)(k)}}),[]),(0,a.useEffect)((function(){n&&c(n)}),[n]),f)return i().createElement(w,null);if(p)return i().createElement("div",null,"Error: ",p.message);if(!h||!o)return i().createElement("div",null,"Enter a symbol to see the risk data");var E="dark"===r?"dark-mode":"light-mode";return i().createElement("div",{className:"risk-container ".concat(E)},i().createElement("div",{className:"risk-symbol  ".concat(E)},h.id),i().createElement("div",{className:"risk-risk  ".concat(E)},"Risk: ",h.risk),i().createElement("div",{className:"risk-description  ".concat(E)},h.description))};var f=n(3379),p=n.n(f),k=n(7795),E=n.n(k),v=n(3565),y=n.n(v),b=n(9216),x=n.n(b),N=n(4589),S=n.n(N),A=n(4466),Z={};Z.styleTagTransform=S(),Z.setAttributes=y(),Z.insert=e=>{window["widget-style"]=e,(Z.target||document.head).appendChild(e)},Z.domAPI=E(),Z.insertStyleElement=x(),p()(A.Z,Z),A.Z&&A.Z.locals&&A.Z.locals;const R=function(e){var t=(0,a.useState)([]),n=(0,m.Z)(t,2),r=n[0],s=n[1],l=e.setWidgetStyle,o=(e.widgetStyle,e.mode);(0,a.useEffect)((function(){window["widget-style"]&&"function"==typeof l&&l(window["widget-style"])}),[]);var c=[{id:1,title:"Stock Market Hits All-Time High",description:"The stock market reached a new record high today as investors cheered strong earnings reports and positive economic data.",url:"/stock-market-update"},{id:2,title:"Fed Keeps Interest Rates Steady",description:"The Federal Reserve announced that it will keep interest rates unchanged at its latest meeting, citing steady economic growth and low inflation.",url:"/fed-interest-rates"}];(0,a.useEffect)((function(){var e=function(){var e=Math.floor(Math.random()*c.length);s([c[e]])},t=setInterval(e,5e3);return e(),function(){return clearInterval(t)}}),[]);var d="dark"===o?"dark-mode":"light-mode";return i().createElement("div",{className:"dynamic-financial-news-widget ".concat(d)},i().createElement("div",{className:"news-item ".concat(d),style:{width:"300px"}},r.map((function(e){return i().createElement(i().Fragment,{key:e.id},i().createElement("h3",{className:"news-item-title ".concat(d)},e.title),i().createElement("p",{className:"news-item-description ".concat(d)},e.description),i().createElement("a",{className:"news-item-link"},"Read More"))}))))};n(4343);var T=n(7654);n(6313);const F=function(e){var t=e.setWidgetStyle,n=(e.widgetStyle,e.handleClose),r=e.symbol,s=void 0===r?"AAPL":r,l=e.uuid;return(0,a.useEffect)((function(){window["widget-style"]&&"function"==typeof t&&t(window["widget-style"])}),[]),s&&i().createElement(T.Z,{props:e,handleDelete:n,uuid:l})},I=function(e){return i().createElement("div",null,i().createElement(i().Suspense,{fallback:i().createElement("div",null,"Loading...")},i().createElement(d,null),i().createElement("div",{className:"remote-container"},i().createElement("div",{class:"widget-remote"},i().createElement("h2",null,"Stock Widget"),i().createElement(F,{symbol:"AAPL"})),i().createElement("div",{class:"widget-remote"},i().createElement("h2",null,"Financial News Widget"),i().createElement(R,{news:[{id:1,title:"Stock Market Hits All-Time High",description:"The stock market reached a new record high today as investors cheered strong earnings reports and positive economic data.",url:"/stock-market-update"},{id:2,title:"Fed Keeps Interest Rates Steady",description:"The Federal Reserve announced that it will keep interest rates unchanged at its latest meeting, citing steady economic growth and low inflation.",url:"/fed-interest-rates"}]})),i().createElement("div",{class:"widget-remote"},i().createElement("h2",null,"Risk Analysis Widget"),i().createElement(h,{symbol:"AAPL"})))))};var L=n(2169),M=n.n(L),W=document.getElementById("root");M().render(i().createElement(I,null),W)},4466:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(8081),i=n.n(a),r=n(3645),s=n.n(r)()(i());s.push([e.id,".dynamic-financial-news-widget {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n}\n\n.news-item {\n  width: calc(50% - 10px);\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);\n  border-radius: 5px;\n  overflow: hidden;\n}\n\n.news-item.light-mode {\n  background-color: rgb(206, 205, 205);\n}\n\n.news-item.dark-mode {\n  background-color: #252424;\n}\n\n.news-item-title {\n  font-size: 18px;\n  font-weight: 600;\n  margin: 10px;\n}\n\n.news-item-title.dark-mode {\n  color: white;\n}\n\n.news-item-title.light-mode {\n  color: black;\n}\n\n.news-item-description {\n  font-size: 14px;\n  margin: 10px;\n}\n\n.news-item-description.dark-mode {\n  color:white;\n}\n\n.news-item-description.light-mode {\n  color:dark;\n}\n\n.news-item-link {\n  display: block;\n  font-size: 14px;\n  font-weight: 600;\n  color: #337ab7;\n  text-align: right;\n  margin: 10px;\n}\n\n.news-item-link:hover {\n  text-decoration: underline;\n}\n",""]);const l=s}}]);