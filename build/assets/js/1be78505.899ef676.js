"use strict";(self.webpackChunkkhyron_realm_website=self.webpackChunkkhyron_realm_website||[]).push([[9514,8177],{1556:function(e,t,a){a.r(t),a.d(t,{default:function(){return $}});var n=a(7294),o=a(4137),r=a(7401),l=a(6445),c=a(6010),i=a(1627),s=a(3301),d=a(2827),m=a(7462),u=function(e){return n.createElement("svg",(0,m.Z)({width:"20",height:"20","aria-hidden":"true"},e),n.createElement("g",{fill:"#7a7a7a"},n.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),n.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))},p=a(7325),b=a(3366),h=a(3699),f=a(2735),v=a(8654),E="menuLinkText_1J2g",k=["items"],g=["item"],_=["item","onItemClick","activePath","level"],C=["item","onItemClick","activePath","level"],Z=function e(t,a){return"link"===t.type?(0,i.Mg)(t.href,a):"category"===t.type&&t.items.some((function(t){return e(t,a)}))},N=(0,n.memo)((function(e){var t=e.items,a=(0,b.Z)(e,k);return n.createElement(n.Fragment,null,t.map((function(e,t){return n.createElement(S,(0,m.Z)({key:t,item:e},a))})))}));function S(e){var t=e.item,a=(0,b.Z)(e,g);switch(t.type){case"category":return 0===t.items.length?null:n.createElement(I,(0,m.Z)({item:t},a));case"link":default:return n.createElement(T,(0,m.Z)({item:t},a))}}function I(e){var t,a=e.item,o=e.onItemClick,r=e.activePath,l=e.level,s=(0,b.Z)(e,_),d=a.items,u=a.label,p=a.collapsible,h=a.className,f=Z(a,r),v=(0,i.uR)({initialState:function(){return!!p&&(!f&&a.collapsed)}}),k=v.collapsed,g=v.setCollapsed,C=v.toggleCollapsed;return function(e){var t=e.isActive,a=e.collapsed,o=e.setCollapsed,r=(0,i.D9)(t);(0,n.useEffect)((function(){t&&!r&&a&&o(!1)}),[t,r,a,o])}({isActive:f,collapsed:k,setCollapsed:g}),n.createElement("li",{className:(0,c.Z)(i.kM.docs.docSidebarItemCategory,i.kM.docs.docSidebarItemCategoryLevel(l),"menu__list-item",{"menu__list-item--collapsed":k},h)},n.createElement("a",(0,m.Z)({className:(0,c.Z)("menu__link",(t={"menu__link--sublist":p,"menu__link--active":p&&f},t[E]=!p,t)),onClick:p?function(e){e.preventDefault(),C()}:void 0,href:p?"#":void 0},s),u),n.createElement(i.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:k},n.createElement(N,{items:d,tabIndex:k?-1:0,onItemClick:o,activePath:r,level:l+1})))}function T(e){var t=e.item,a=e.onItemClick,o=e.activePath,r=e.level,l=(0,b.Z)(e,C),s=t.href,d=t.label,u=t.className,p=Z(t,o);return n.createElement("li",{className:(0,c.Z)(i.kM.docs.docSidebarItemLink,i.kM.docs.docSidebarItemLinkLevel(r),"menu__list-item",u),key:d},n.createElement(h.Z,(0,m.Z)({className:(0,c.Z)("menu__link",{"menu__link--active":p}),"aria-current":p?"page":void 0,to:s},(0,f.Z)(s)&&{onClick:a},l),(0,f.Z)(s)?d:n.createElement("span",null,d,n.createElement(v.Z,null))))}var M="sidebar_15mo",y="sidebarWithHideableNavbar_267A",w="sidebarHidden_2kNb",A="sidebarLogo_3h0W",B="menu_Bmed",L="menuWithAnnouncementBar_2WvA",F="collapseSidebarButton_1CGd",P="collapseSidebarButtonIcon_3E-R";function x(e){var t=e.onClick;return n.createElement("button",{type:"button",title:(0,p.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,p.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,c.Z)("button button--secondary button--outline",F),onClick:t},n.createElement(u,{className:P}))}function R(e){var t,a,o=e.path,r=e.sidebar,l=e.onCollapse,s=e.isHidden,m=function(){var e=(0,i.nT)().isActive,t=(0,n.useState)(e),a=t[0],o=t[1];return(0,i.RF)((function(t){var a=t.scrollY;e&&o(0===a)}),[e]),e&&a}(),u=(0,i.LU)(),p=u.navbar.hideOnScroll,b=u.hideableSidebar;return n.createElement("div",{className:(0,c.Z)(M,(t={},t[y]=p,t[w]=s,t))},p&&n.createElement(d.Z,{tabIndex:-1,className:A}),n.createElement("nav",{className:(0,c.Z)("menu thin-scrollbar",B,(a={},a[L]=m,a))},n.createElement("ul",{className:(0,c.Z)(i.kM.docs.docSidebarMenu,"menu__list")},n.createElement(N,{items:r,activePath:o,level:1}))),b&&n.createElement(x,{onClick:l}))}var H=function(e){var t=e.toggleSidebar,a=e.sidebar,o=e.path;return n.createElement("ul",{className:(0,c.Z)(i.kM.docs.docSidebarMenu,"menu__list")},n.createElement(N,{items:a,activePath:o,onItemClick:function(){return t()},level:1}))};function D(e){return n.createElement(i.Cv,{component:H,props:e})}var W=n.memo(R),z=n.memo(D);function Y(e){var t=(0,s.Z)(),a="desktop"===t||"ssr"===t,o="mobile"===t;return n.createElement(n.Fragment,null,a&&n.createElement(W,e),o&&n.createElement(z,e))}var J=a(3002),K=a(8177),U="backToTopButton_35hR",q="backToTopButtonShow_18ls";function G(){var e=(0,n.useRef)(null);return{smoothScrollTop:function(){var t;e.current=(t=null,function e(){var a=document.documentElement.scrollTop;a>0&&(t=requestAnimationFrame(e),window.scrollTo(0,Math.floor(.85*a)))}(),function(){return t&&cancelAnimationFrame(t)})},cancelScrollToTop:function(){return null==e.current?void 0:e.current()}}}var O=function(){var e,t=(0,n.useState)(!1),a=t[0],o=t[1],r=(0,n.useRef)(!1),l=G(),s=l.smoothScrollTop,d=l.cancelScrollToTop;return(0,i.RF)((function(e,t){var a=e.scrollY,n=null==t?void 0:t.scrollY;if(n)if(r.current)r.current=!1;else{var l=a<n;if(l||d(),a<300)o(!1);else if(l){var c=document.documentElement.scrollHeight;a+window.innerHeight<c&&o(!0)}else o(!1)}})),(0,i.SL)((function(e){e.location.hash&&(r.current=!0,o(!1))})),n.createElement("button",{"aria-label":(0,p.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,c.Z)("clean-btn",i.kM.common.backToTopButton,U,(e={},e[q]=a,e)),type:"button",onClick:function(){return s()}})},Q=a(6775),X={docPage:"docPage_31aa",docMainContainer:"docMainContainer_3ufF",docSidebarContainer:"docSidebarContainer_3Kbt",docMainContainerEnhanced:"docMainContainerEnhanced_3NYZ",docSidebarContainerHidden:"docSidebarContainerHidden_3pA8",collapsedDocSidebar:"collapsedDocSidebar_2JMH",expandSidebarButtonIcon:"expandSidebarButtonIcon_1naQ",docItemWrapperEnhanced:"docItemWrapperEnhanced_2vyJ"},j=a(4384);function V(e){var t,a,r,s=e.currentDocRoute,d=e.versionMetadata,m=e.children,b=d.pluginId,h=d.version,f=s.sidebar,v=f?d.docsSidebars[f]:void 0,E=(0,n.useState)(!1),k=E[0],g=E[1],_=(0,n.useState)(!1),C=_[0],Z=_[1],N=(0,n.useCallback)((function(){C&&Z(!1),g((function(e){return!e}))}),[C]);return n.createElement(l.Z,{wrapperClassName:i.kM.wrapper.docsPages,pageClassName:i.kM.page.docsDocPage,searchMetadatas:{version:h,tag:(0,i.os)(b,h)}},n.createElement("div",{className:X.docPage},n.createElement(O,null),v&&n.createElement("aside",{className:(0,c.Z)(X.docSidebarContainer,(t={},t[X.docSidebarContainerHidden]=k,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(X.docSidebarContainer)&&k&&Z(!0)}},n.createElement(Y,{key:f,sidebar:v,path:s.path,onCollapse:N,isHidden:C}),C&&n.createElement("div",{className:X.collapsedDocSidebar,title:(0,p.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,p.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:N,onClick:N},n.createElement(u,{className:X.expandSidebarButtonIcon}))),n.createElement("main",{className:(0,c.Z)(X.docMainContainer,(a={},a[X.docMainContainerEnhanced]=k||!v,a))},n.createElement("div",{className:(0,c.Z)("container padding-top--md padding-bottom--lg",X.docItemWrapper,(r={},r[X.docItemWrapperEnhanced]=k,r))},n.createElement(o.Zo,{components:J.Z},m)))))}var $=function(e){var t=e.route.routes,a=e.versionMetadata,o=e.location,l=t.find((function(e){return(0,Q.LX)(o.pathname,e)}));return l?n.createElement(n.Fragment,null,n.createElement(j.Z,null,n.createElement("html",{className:a.className})),n.createElement(V,{currentDocRoute:l,versionMetadata:a},(0,r.Z)(t,{versionMetadata:a}))):n.createElement(K.default,null)}},8177:function(e,t,a){a.r(t);var n=a(7294),o=a(6445),r=a(7325);t.default=function(){return n.createElement(o.Z,{title:(0,r.I)({id:"theme.NotFound.title",message:"Page Not Found"})},n.createElement("main",{className:"container margin-vert--xl"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col col--6 col--offset-3"},n.createElement("h1",{className:"hero__title"},n.createElement(r.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),n.createElement("p",null,n.createElement(r.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),n.createElement("p",null,n.createElement(r.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}}}]);