import{d as r,r as v,o,c as n,a as t,u as l,b as m,e as p,_ as d,t as g,n as h,f as i,F as b}from"./index-Pahe3q8c.js";const f="/usmev-web/assets/logo-B9YY2hnH.png",C={class:"header"},k={class:"logo-container"},N=["src"],$={key:0,class:"menu"},P=r({__name:"Header",setup(_){const e=v(!1),a=()=>{e.value=!e.value};return(s,c)=>(o(),n("header",C,[t("div",k,[t("img",{src:l(f),alt:"Logo",class:"logo"},null,8,N)]),t("button",{class:"menu-btn",onClick:a},"☰"),e.value?(o(),n("nav",$,c[0]||(c[0]=[m('<ul data-v-a4081351><li data-v-a4081351><a href="#" data-v-a4081351>ÚVOD</a></li><li data-v-a4081351><a href="#" data-v-a4081351>PRO PACIENTY</a></li><li data-v-a4081351><a href="#" data-v-a4081351>PRO DÁRCE</a></li><li data-v-a4081351><a href="#" data-v-a4081351>O NÁS</a></li><li data-v-a4081351><a href="#" data-v-a4081351>KONTAKT</a></li></ul>',1)]))):p("",!0)]))}}),V=d(P,[["__scopeId","data-v-a4081351"]]),y={key:0,class:"btn__icon"},B=["src"],H={class:"btn__label"},I=r({__name:"Button",props:{variant:{},label:{},icon:{}},emits:["click"],setup(_,{emit:e}){return(a,s)=>(o(),n("button",{class:h(`btn btn--${a.variant}`),onClick:s[0]||(s[0]=c=>a.$emit("click"))},[a.icon?(o(),n("span",y,[t("img",{src:a.icon,alt:"","aria-hidden":"true"},null,8,B)])):p("",!0),t("span",H,g(a.label),1)],2))}}),u=d(I,[["__scopeId","data-v-dd4cdaae"]]),O="/usmev-web/assets/potrebuji_pomoc_icon-D0ERsydu.png",w="/usmev-web/assets/chci_darovat_icon-HQj_pHCr.png",D={class:"main"},j=r({__name:"LandingPageView",setup(_){const e=()=>{console.log('Navigate to the "Potřebuji pomoc" page')},a=()=>{console.log('Navigate to the "Chci darovat" page')};return(s,c)=>(o(),n(b,null,[i(V),t("main",D,[i(u,{variant:"primary",label:"Potřebuji pomoc",icon:l(O),onClick:e},null,8,["icon"]),i(u,{variant:"secondary",label:"Chci darovat",icon:l(w),onClick:a},null,8,["icon"])])],64))}}),R=d(j,[["__scopeId","data-v-78dc703b"]]);export{R as default};