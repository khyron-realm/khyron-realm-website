"use strict";(self.webpackChunkkhyron_realm_website=self.webpackChunkkhyron_realm_website||[]).push([[8843],{4137:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return c}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var m=r.createContext({}),s=function(t){var e=r.useContext(m),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=s(t.components);return r.createElement(m.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,m=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),d=s(n),c=a,k=d["".concat(m,".").concat(c)]||d[c]||u[c]||l;return n?r.createElement(k,i(i({ref:e},p),{},{components:n})):r.createElement(k,i({ref:e},p))}));function c(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var m in e)hasOwnProperty.call(e,m)&&(o[m]=e[m]);o.originalType=t,o.mdxType="string"==typeof t?t:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1665:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return o},contentTitle:function(){return m},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var r=n(3117),a=n(102),l=(n(7294),n(4137)),i=["components"],o={sidebar_position:5},m="Mines",s={unversionedId:"gameplay/mines",id:"gameplay/mines",title:"Mines",description:"Mines are randomly generated with different sizes and resources distributions.",source:"@site/docs/gameplay/mines.md",sourceDirName:"gameplay",slug:"/gameplay/mines",permalink:"/docs/gameplay/mines",editUrl:"https://github.com/target-software/game-website/wiki/docs/gameplay/mines.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Jobs",permalink:"/docs/gameplay/mothership/jobs"},next:{title:"Robots",permalink:"/docs/gameplay/robots"}},p=[{value:"Mine classes",id:"mine-classes",children:[],level:4},{value:"Mine types",id:"mine-types",children:[],level:4},{value:"Resource distribution",id:"resource-distribution",children:[],level:4},{value:"Mine blocks",id:"mine-blocks",children:[],level:4},{value:"Environment",id:"environment",children:[],level:4},{value:"Power-ups",id:"power-ups",children:[],level:4},{value:"Assigned mine",id:"assigned-mine",children:[],level:4}],u={toc:p};function d(t){var e=t.components,o=(0,a.Z)(t,i);return(0,l.kt)("wrapper",(0,r.Z)({},u,o,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"mines"},"Mines"),(0,l.kt)("p",null,"Mines are randomly generated with different sizes and resources distributions."),(0,l.kt)("p",null,"Due to Khyron seismic activity, robots are forced to excavate a certain time inside the mine, before they get destroyed by the environment."),(0,l.kt)("p",null,"The mining time is usually between 3 and 5 minutes."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Mine",src:n(7398).Z})),(0,l.kt)("h4",{id:"mine-classes"},"Mine classes"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Class"),(0,l.kt)("th",{parentName:"tr",align:null},"A"),(0,l.kt)("th",{parentName:"tr",align:null},"B"),(0,l.kt)("th",{parentName:"tr",align:null},"C"),(0,l.kt)("th",{parentName:"tr",align:null},"D"),(0,l.kt)("th",{parentName:"tr",align:null},"E"),(0,l.kt)("th",{parentName:"tr",align:null},"F"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Size"),(0,l.kt)("td",{parentName:"tr",align:null},"5 x 4"),(0,l.kt)("td",{parentName:"tr",align:null},"6 x 5"),(0,l.kt)("td",{parentName:"tr",align:null},"7 x 5"),(0,l.kt)("td",{parentName:"tr",align:null},"8 x 6"),(0,l.kt)("td",{parentName:"tr",align:null},"9 x 6"),(0,l.kt)("td",{parentName:"tr",align:null},"10 x 7")))),(0,l.kt)("h4",{id:"mine-types"},"Mine types"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Composition"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"S"),(0,l.kt)("td",{parentName:"tr",align:null},"80% Silicon")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"L"),(0,l.kt)("td",{parentName:"tr",align:null},"80% Lithium")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"T"),(0,l.kt)("td",{parentName:"tr",align:null},"80% Titanium")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"N"),(0,l.kt)("td",{parentName:"tr",align:null},"33% lithium, 33% silicon, 33% titanium")))),(0,l.kt)("h4",{id:"resource-distribution"},"Resource distribution"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Rarity"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"rare"),(0,l.kt)("td",{parentName:"tr",align:null},"There are a few resources")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"scattered"),(0,l.kt)("td",{parentName:"tr",align:null},"There is a balanced number of resources")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"common"),(0,l.kt)("td",{parentName:"tr",align:null},"There are a lot of resources")))),(0,l.kt)("h4",{id:"mine-blocks"},"Mine blocks"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null},"Soft block"),(0,l.kt)("th",{parentName:"tr",align:null},"Hard block"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Surface"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{src:"/img/resources/soft_block.png",width:"300px"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{src:"/img/resources/hard_block.png",width:"300px"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Silicon"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{src:"/img/resources/silicon_soft.png",width:"300px"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{src:"/img/resources/silicon_hard.png",width:"300px"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Lithium"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{src:"/img/resources/lithium_soft.png",width:"300px"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{src:"/img/resources/lithium_hard.png",width:"300px"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Titanium"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{src:"/img/resources/titanium_soft.png",width:"300px"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{src:"/img/resources/titanium_hard.png",width:"300px"}))))),(0,l.kt)("h4",{id:"environment"},"Environment"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Element"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Holes"),(0,l.kt)("td",{parentName:"tr",align:null},"There are big empty holes in the mine")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Explosives"),(0,l.kt)("td",{parentName:"tr",align:null},"Some blocks have materials that are causing explosions when mines and damages surrounding robots")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Lava"),(0,l.kt)("td",{parentName:"tr",align:null},"Lava can be found on some blocks and damage the mining robots")))),(0,l.kt)("h4",{id:"power-ups"},"Power-ups"),(0,l.kt)("p",null,"Hidden chests in the mine are located behind the blocks and the user has to double-tap to collect them."),(0,l.kt)("h4",{id:"assigned-mine"},"Assigned mine"),(0,l.kt)("p",null,"Have a default assigned mine that generates a few resources every 24h."),(0,l.kt)("hr",null),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Last updated: 14 DEC 2021")))}d.isMDXComponent=!0},7398:function(t,e,n){e.Z=n.p+"assets/images/mine_blocks-70cfa8411ecd10322d18535eb79f0467.png"}}]);