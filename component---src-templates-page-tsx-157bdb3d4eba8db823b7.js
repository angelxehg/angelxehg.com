(self.webpackChunkangelxehg_github_io=self.webpackChunkangelxehg_github_io||[]).push([[895],{7228:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r},e.exports.__esModule=!0,e.exports.default=e.exports},3646:function(e,t,a){var r=a(7228);e.exports=function(e){if(Array.isArray(e))return r(e)},e.exports.__esModule=!0,e.exports.default=e.exports},9100:function(e,t,a){var r=a(9489),n=a(7067);function l(t,a,o){return n()?(e.exports=l=Reflect.construct,e.exports.__esModule=!0,e.exports.default=e.exports):(e.exports=l=function(e,t,a){var n=[null];n.push.apply(n,t);var l=new(Function.bind.apply(e,n));return a&&r(l,a.prototype),l},e.exports.__esModule=!0,e.exports.default=e.exports),l.apply(null,arguments)}e.exports=l,e.exports.__esModule=!0,e.exports.default=e.exports},7067:function(e){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.__esModule=!0,e.exports.default=e.exports},6860:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},319:function(e,t,a){var r=a(3646),n=a(6860),l=a(379),o=a(8206);e.exports=function(e){return r(e)||n(e)||l(e)||o()},e.exports.__esModule=!0,e.exports.default=e.exports},379:function(e,t,a){var r=a(7228);e.exports=function(e,t){if(e){if("string"==typeof e)return r(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?r(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports},8125:function(e,t,a){var r=a(6899);e.exports={MDXRenderer:r}},6899:function(e,t,a){var r=a(9100),n=a(319),l=a(9713),o=a(7316),s=["scope","children"];function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var u=a(7294),m=a(3497).mdx,p=a(5862).useMDXScope;e.exports=function(e){var t=e.scope,a=e.children,l=o(e,s),c=p(t),f=u.useMemo((function(){if(!a)return null;var e=i({React:u,mdx:m},c),t=Object.keys(e),l=t.map((function(t){return e[t]}));return r(Function,["_fn"].concat(n(t),[""+a])).apply(void 0,[{}].concat(n(l)))}),[a,t]);return u.createElement(f,i({},l))}},2380:function(e,t,a){"use strict";var r=a(7294),n=a(3497),l=a(2685);t.Z=function(e){return r.createElement(l.z,null,r.createElement(n.MDXProvider,null,e.children))}},768:function(e,t,a){"use strict";var r=a(7294);t.Z=function(){return r.createElement("footer",{className:"navbar"},r.createElement("div",{className:"container-lg ps-sm-4 pe-sm-4",style:{display:"block"}},r.createElement("p",{className:"navbar-text m-0"},"Angel Hurtado © ",(new Date).getFullYear(),", Portafolio v2.0.7 | Creado con"," ",r.createElement("a",{href:"https://www.gatsbyjs.com/",rel:"external",title:"Gatsby"},"Gatsby")," ","y"," ",r.createElement("a",{href:"https://getbootstrap.com/docs/",rel:"external",title:"Bootstrap"},"Bootstrap")," ",". Reporta problemas o envía tus sugerencias a la página"," ",r.createElement("a",{href:"https://github.com/angelxehg/angelxehg.github.io/issues",rel:"external",title:"Issues"},"Issues"),". Las marcas y logotipos presentados en este sitio web pertenecen a sus respectivos dueños")))}},111:function(e,t,a){"use strict";var r=a(7294),n=a(1597),l=a(2685),o=a(9167),s=a(5799),c=a(7311);t.Z=function(){var e=(0,l.F)(),t=e.theme,a=e.toggle,i=(0,r.useState)(!0),u=i[0],m=i[1];return r.createElement("nav",{className:"navbar sticky-top navbar-expand-md"},r.createElement("div",{className:"container-lg ps-sm-4 pe-sm-4"},r.createElement(n.Link,{to:"/",className:"navbar-brand"},"Angel Hurtado"),r.createElement("button",{"aria-label":"Toggle Theme",onClick:a,style:{border:"none",background:"none"}},"dark"===t&&r.createElement(s,{className:"btn-indigo"}),"light"===t&&r.createElement(o,{className:"btn-orange"})),r.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#defaultNavbar","aria-controls":"defaultNavbar","aria-expanded":"false","aria-label":"Toggle navigation",onClick:function(){return m(!u)}},r.createElement(c,{style:{height:"1.8rem",width:"1.8rem"}})),r.createElement("div",{className:u?"collapse navbar-collapse":"navbar-collapse",id:"defaultNavbar"},r.createElement("ul",{className:"navbar-nav me-auto"}),r.createElement("ul",{className:"navbar-nav"},r.createElement("li",{className:"nav-item"},r.createElement(n.Link,{to:"/#about",className:"nav-link text-reset"},"Acerca de")),r.createElement("li",{className:"nav-item"},r.createElement(n.Link,{to:"/#skills",className:"nav-link text-reset"},"Habilidades")),r.createElement("li",{className:"nav-item"},r.createElement(n.Link,{to:"/projects",className:"nav-link text-reset"},"Proyectos")),r.createElement("li",{className:"nav-item"},r.createElement(n.Link,{to:"/posts",className:"nav-link text-reset"},"Blog"))))))}},4401:function(e,t,a){"use strict";a.r(t);var r=a(7294),n=a(1597),l=a(8125),o=a(396),s=a(768),c=a(7569),i=a(2380),u=a(111);t.default=function(e){var t,a=e.data.mdx,m=a.frontmatter,p=a.body,f=m.title,d=m.image,v=m.caption,b=m.stack;return r.createElement(i.Z,null,r.createElement(c.Z,{title:f,lang:"es",image:(null===(t=d.childImageSharp.gatsbyImageData.images.fallback)||void 0===t?void 0:t.src)||""}),r.createElement(u.Z,null),r.createElement("div",{className:"hero"},r.createElement("div",{className:"container-lg ps-sm-4 pe-sm-4 pt-3 pb-3"},r.createElement("div",{className:"row"},r.createElement("div",{className:"col-lg-8 col-md-6"},r.createElement(n.Link,{to:"/projects"},"< ","Volver a Proyectos"),r.createElement("header",{className:"mt-1"},r.createElement("h1",null,f),r.createElement("p",{className:"m-0"},v)),r.createElement("p",null,b.map((function(e){return r.createElement("span",{key:e,className:"badge rounded-pill mt-1 me-1"},e)})))),r.createElement("div",{className:"col-lg-4 col-md-6"},r.createElement(o.G,{image:d.childImageSharp.gatsbyImageData,className:"rounded",alt:v}))))),r.createElement("main",{className:"container-lg ps-sm-4 pe-sm-4 pt-3"},r.createElement(l.MDXRenderer,null,p)),r.createElement(s.Z,null))}},7311:function(e,t,a){var r=a(7294);function n(e){return r.createElement("svg",e,r.createElement("path",{fillRule:"evenodd",d:"M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"}))}n.defaultProps={width:"16",height:"16",fill:"currentColor",className:"bi bi-list",viewBox:"0 0 16 16"},e.exports=n,n.default=n},5799:function(e,t,a){var r=a(7294);function n(e){return r.createElement("svg",e,r.createElement("path",{d:"M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"}))}n.defaultProps={width:"16",height:"16",fill:"currentColor",className:"bi bi-moon-fill",viewBox:"0 0 16 16"},e.exports=n,n.default=n},9167:function(e,t,a){var r=a(7294);function n(e){return r.createElement("svg",e,r.createElement("path",{d:"M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"}))}n.defaultProps={width:"16",height:"16",fill:"currentColor",className:"bi bi-brightness-high-fill",viewBox:"0 0 16 16"},e.exports=n,n.default=n}}]);
//# sourceMappingURL=component---src-templates-page-tsx-157bdb3d4eba8db823b7.js.map