(self.webpackChunkangelxehg_github_io=self.webpackChunkangelxehg_github_io||[]).push([[878],{7757:function(e,t,r){e.exports=r(5666)},2380:function(e,t,r){"use strict";var n=r(7294),a=r(3497),o=r(2685),i=r(2236),c={CreateLink:i.cR,CreateBadge:i.G_};t.Z=function(e){return n.createElement(o.z,null,n.createElement(a.MDXProvider,{components:c},e.children))}},768:function(e,t,r){"use strict";var n=r(7294),a=r(2236),o={title:"v2.0.5",href:"https://github.com/angelxehg/angelxehg.github.io/tree/v2.0.5"},i={title:"Issues",href:"https://github.com/angelxehg/angelxehg.github.io/issues"};t.Z=function(){return n.createElement("footer",{className:"navbar"},n.createElement("div",{className:"container-lg ps-sm-4 pe-sm-4",style:{display:"block"}},n.createElement("p",{className:"navbar-text m-0"},"© ",(new Date).getFullYear(),", Angel Hurtado @"," ",n.createElement(a.cR,{from:"GitHub",extend:o}),". Portafolio profesional creado con ",n.createElement(a.cR,{from:"GatsbyJS"})," y"," ",n.createElement(a.cR,{from:"Bootstrap"}),". Reporta problemas o envía tus sugerencias a la página ",n.createElement(a.cR,{from:"GitHub",extend:i})),n.createElement("p",{className:"navbar-text m-0"},"Las marcas y logotipos presentados en este sitio web pertenecen a sus respectivos dueños. Iconos de ",n.createElement(a.cR,{from:"FontAwesome"}))))}},111:function(e,t,r){"use strict";var n=r(7294),a=r(1597),o=r(2685),i=r(9167),c=r(5799),l=r(7311);t.Z=function(){var e=(0,o.F)(),t=e.theme,r=e.toggle,s=(0,n.useState)(!0),u=s[0],m=s[1];return n.createElement("nav",{className:"navbar sticky-top navbar-expand-md"},n.createElement("div",{className:"container-lg ps-sm-4 pe-sm-4"},n.createElement(a.Link,{to:"/",className:"navbar-brand"},"Angel Hurtado"),n.createElement("button",{"aria-label":"Toggle Theme",onClick:r,style:{border:"none",background:"none"}},"dark"===t&&n.createElement(c,{className:"btn-indigo"}),"light"===t&&n.createElement(i,{className:"btn-orange"})),n.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#defaultNavbar","aria-controls":"defaultNavbar","aria-expanded":"false","aria-label":"Toggle navigation",onClick:function(){return m(!u)}},n.createElement(l,{style:{height:"1.8rem",width:"1.8rem"}})),n.createElement("div",{className:u?"collapse navbar-collapse":"navbar-collapse",id:"defaultNavbar"},n.createElement("ul",{className:"navbar-nav me-auto"}),n.createElement("ul",{className:"navbar-nav"},n.createElement("li",{className:"nav-item"},n.createElement(a.Link,{to:"/#about",className:"nav-link text-reset"},"Acerca de")),n.createElement("li",{className:"nav-item"},n.createElement(a.Link,{to:"/#skills",className:"nav-link text-reset"},"Habilidades")),n.createElement("li",{className:"nav-item"},n.createElement(a.Link,{to:"/projects",className:"nav-link text-reset"},"Proyectos")),n.createElement("li",{className:"nav-item"},n.createElement(a.Link,{to:"/posts",className:"nav-link text-reset"},"Blog"))))))}},2268:function(e,t,r){"use strict";function n(e,t,r,n,a,o,i){try{var c=e[o](i),l=c.value}catch(s){return void r(s)}c.done?t(l):Promise.resolve(l).then(n,a)}r.r(t),r.d(t,{PostsSection:function(){return v},default:function(){return d}});var a=r(7757),o=r.n(a),i=r(7294),c=r(1597),l=r(2380),s=r(768),u=r(7569),m=r(2236),h=r(111),f=function(){var e,t=(e=o().mark((function e(){var t,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://dev.to/api/articles?username=angelxehg");case 2:if(200===(t=e.sent).status){e.next=5;break}throw new Error("Couldn't fetch from dev.to");case 5:return e.next=7,t.json();case 7:return r=e.sent,e.abrupt("return",r);case 9:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(a,o){var i=e.apply(t,r);function c(e){n(i,a,o,c,l,"next",e)}function l(e){n(i,a,o,c,l,"throw",e)}c(void 0)}))});return function(){return t.apply(this,arguments)}}(),p=function(e){var t=e.item,r=t.title,n=t.description,a=t.canonical_url,o=t.social_image,c=t.tags;return i.createElement("article",{className:"card",style:{height:"100%"}},i.createElement("img",{src:o,alt:n,className:"card-img-top"}),i.createElement("div",{className:"card-body"},"h2"===e.titleAs&&i.createElement("h2",{className:"card-title h5"},i.createElement(m.cR,{from:"Dev.to",extend:{title:r,href:a},noIcon:!0})),"h3"===e.titleAs&&i.createElement("h3",{className:"card-title h5"},i.createElement(m.cR,{from:"Dev.to",extend:{title:r,href:a},noIcon:!0})),i.createElement("p",{className:"card-text m-0"},n),i.createElement("p",{className:"card-text m-0"},c.split(", ").map((function(e){return i.createElement(m.G_,{key:e,from:e,extend:{title:e.charAt(0).toUpperCase()+e.slice(1),href:"https://dev.to/t/"+e}})})))))},v=function(){var e=(0,i.useState)([]),t=e[0],r=e[1];return(0,i.useEffect)((function(){f().then((function(e){return r(e.slice(0,4))}))}),[]),i.createElement("section",{id:"posts"},i.createElement("h2",null,"Últimas"," ",i.createElement(m.cR,{from:"Dev.to",iconProps:{size:"1.325rem"},extend:{title:"entradas",href:"/posts"}}),":"),i.createElement("div",{className:"row"},t.map((function(e){return i.createElement("div",{key:e.id,className:"col-lg-6 p-sm-1 pb-3"},i.createElement(p,{item:e,titleAs:"h3"}))}))),i.createElement(m.cR,{from:"Dev.to",extend:{title:"Ver todas las entradas >",href:"/posts"}}))},d=function(){var e=(0,i.useState)([]),t=e[0],r=e[1];return(0,i.useEffect)((function(){f().then((function(e){return r(e.slice(0,4))}))}),[]),i.createElement(l.Z,null,i.createElement(u.Z,{title:"Entradas",lang:"es"}),i.createElement(h.Z,null),i.createElement("div",{className:"hero"},i.createElement("div",{className:"container-lg ps-sm-4 pe-sm-4 pt-3 pb-3"},i.createElement(c.Link,{to:"/"},"< ","Volver a Portafolio"),i.createElement("header",{className:"mt-1"},i.createElement("h1",null,"Todas mis entradas"),i.createElement("p",{className:"m-0"},"Estas son las entradas que he publicado en"," ",i.createElement(m.cR,{from:"Dev.to"}))))),i.createElement("main",{className:"container-lg ps-sm-4 pe-sm-4 pt-3 pb-3"},i.createElement("div",{className:"row"},t.map((function(e){return i.createElement("div",{key:e.id,className:"col-lg-6 p-sm-1 pb-3"},i.createElement(p,{titleAs:"h2",item:e}))})))),i.createElement(s.Z,null))}},5666:function(e){var t=function(e){"use strict";var t,r=Object.prototype,n=r.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(O){l=function(e,t,r){return e[t]=r}}function s(e,t,r,n){var a=t&&t.prototype instanceof d?t:d,o=Object.create(a.prototype),i=new R(n||[]);return o._invoke=function(e,t,r){var n=m;return function(a,o){if(n===f)throw new Error("Generator is already running");if(n===p){if("throw"===a)throw o;return G()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=k(i,r);if(c){if(c===v)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===m)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=f;var l=u(e,t,r);if("normal"===l.type){if(n=r.done?p:h,l.arg===v)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n=p,r.method="throw",r.arg=l.arg)}}}(e,r,i),o}function u(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(O){return{type:"throw",arg:O}}}e.wrap=s;var m="suspendedStart",h="suspendedYield",f="executing",p="completed",v={};function d(){}function g(){}function y(){}var E={};E[o]=function(){return this};var b=Object.getPrototypeOf,w=b&&b(b(j([])));w&&w!==r&&n.call(w,o)&&(E=w);var x=y.prototype=d.prototype=Object.create(E);function N(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function L(e,t){function r(a,o,i,c){var l=u(e[a],e,o);if("throw"!==l.type){var s=l.arg,m=s.value;return m&&"object"==typeof m&&n.call(m,"__await")?t.resolve(m.__await).then((function(e){r("next",e,i,c)}),(function(e){r("throw",e,i,c)})):t.resolve(m).then((function(e){s.value=e,i(s)}),(function(e){return r("throw",e,i,c)}))}c(l.arg)}var a;this._invoke=function(e,n){function o(){return new t((function(t,a){r(e,n,t,a)}))}return a=a?a.then(o,o):o()}}function k(e,r){var n=e.iterator[r.method];if(n===t){if(r.delegate=null,"throw"===r.method){if(e.iterator.return&&(r.method="return",r.arg=t,k(e,r),"throw"===r.method))return v;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var a=u(n,e.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,v;var o=a.arg;return o?o.done?(r[e.resultName]=o.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,v):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function _(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function P(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function R(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(_,this),this.reset(!0)}function j(e){if(e){var r=e[o];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var a=-1,i=function r(){for(;++a<e.length;)if(n.call(e,a))return r.value=e[a],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}return{next:G}}function G(){return{value:t,done:!0}}return g.prototype=x.constructor=y,y.constructor=g,g.displayName=l(y,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===g||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,l(e,c,"GeneratorFunction")),e.prototype=Object.create(x),e},e.awrap=function(e){return{__await:e}},N(L.prototype),L.prototype[i]=function(){return this},e.AsyncIterator=L,e.async=function(t,r,n,a,o){void 0===o&&(o=Promise);var i=new L(s(t,r,n,a),o);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},N(x),l(x,c,"Generator"),x[o]=function(){return this},x.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=j,R.prototype={constructor:R,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(P),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function a(n,a){return c.type="throw",c.arg=e,r.next=n,a&&(r.method="next",r.arg=t),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return a("end");if(i.tryLoc<=this.prev){var l=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(l&&s){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return a(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),P(r),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;P(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:j(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),v}},e}(e.exports);try{regeneratorRuntime=t}catch(r){Function("r","regeneratorRuntime = r")(t)}}}]);
//# sourceMappingURL=24527fd91f09a965b3de7675dd3d25f3404ee39d-5064a5591ef01070ed64.js.map