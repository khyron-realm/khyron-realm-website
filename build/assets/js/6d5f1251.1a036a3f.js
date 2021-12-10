"use strict";(self.webpackChunkkhyron_realm_website=self.webpackChunkkhyron_realm_website||[]).push([[843],{4137:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return c}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=p(n),c=a,k=d["".concat(u,".").concat(c)]||d[c]||s[c]||i;return n?r.createElement(k,l(l({ref:t},m),{},{components:n})):r.createElement(k,l({ref:t},m))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1665:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return m},default:function(){return d}});var r=n(7462),a=n(3366),i=(n(7294),n(4137)),l=["components"],o={sidebar_position:5},u="Mines",p={unversionedId:"gameplay/mines",id:"gameplay/mines",isDocsHomePage:!1,title:"Mines",description:"Mines are randomly generated with different sizes and resources distributions.",source:"@site/docs/gameplay/mines.md",sourceDirName:"gameplay",slug:"/gameplay/mines",permalink:"/docs/gameplay/mines",editUrl:"https://github.com/target-software/game-website/wiki/docs/gameplay/mines.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Mothership",permalink:"/docs/gameplay/mothership"},next:{title:"Roadmap",permalink:"/docs/roadmap"}},m=[{value:"Environment:",id:"environment",children:[],level:4},{value:"Mine classes:",id:"mine-classes",children:[],level:4},{value:"Mine types:",id:"mine-types",children:[],level:4},{value:"Rarity:",id:"rarity",children:[],level:4},{value:"Power-ups:",id:"power-ups",children:[],level:4},{value:"Default mine:",id:"default-mine",children:[],level:4}],s={toc:m};function d(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"mines"},"Mines"),(0,i.kt)("p",null,"Mines are randomly generated with different sizes and resources distributions."),(0,i.kt)("p",null,"Due to Khyron seismic activity, robots are forced to excavate a certain time inside the mine, before they get destroyed by the environment."),(0,i.kt)("p",null,"The mining time is usually between 3 and 5 minutes."),(0,i.kt)("h4",{id:"environment"},"Environment:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Big empty holes"),(0,i.kt)("li",{parentName:"ul"},"Explosive blocks"),(0,i.kt)("li",{parentName:"ul"},"Hidden Lava in blocks")),(0,i.kt)("h4",{id:"mine-classes"},"Mine classes:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Class"),(0,i.kt)("th",{parentName:"tr",align:null},"Size"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"A"),(0,i.kt)("td",{parentName:"tr",align:null},"5 x 4")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"B"),(0,i.kt)("td",{parentName:"tr",align:null},"6 x 5")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"C"),(0,i.kt)("td",{parentName:"tr",align:null},"7 x 5")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"D"),(0,i.kt)("td",{parentName:"tr",align:null},"8 x 6")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"E"),(0,i.kt)("td",{parentName:"tr",align:null},"9 x 6")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"F"),(0,i.kt)("td",{parentName:"tr",align:null},"10 x 7")))),(0,i.kt)("h4",{id:"mine-types"},"Mine types:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Composition"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"S"),(0,i.kt)("td",{parentName:"tr",align:null},"80% Silicon")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"L"),(0,i.kt)("td",{parentName:"tr",align:null},"80% Lithium")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"T"),(0,i.kt)("td",{parentName:"tr",align:null},"80% Titanium")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"N"),(0,i.kt)("td",{parentName:"tr",align:null},"33% lithium, 33% silicon, 33% titanium")))),(0,i.kt)("h4",{id:"rarity"},"Rarity:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"low"),(0,i.kt)("li",{parentName:"ul"},"medium"),(0,i.kt)("li",{parentName:"ul"},"high")),(0,i.kt)("h4",{id:"power-ups"},"Power-ups:"),(0,i.kt)("p",null,"Hidden chests in the mine are located behind the blocks and the user has to double-tap to collect them."),(0,i.kt)("h4",{id:"default-mine"},"Default mine:"),(0,i.kt)("p",null,"Have a default mine that generates a few resources every 24h."))}d.isMDXComponent=!0}}]);