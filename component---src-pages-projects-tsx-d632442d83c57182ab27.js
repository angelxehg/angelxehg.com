(self.webpackChunkangelxehg_github_io=self.webpackChunkangelxehg_github_io||[]).push([[317],{2380:function(e,t,a){"use strict";var l=a(7294),n=a(3497),r=a(2685);t.Z=function(e){return l.createElement(r.z,null,l.createElement(n.MDXProvider,null,e.children))}},768:function(e,t,a){"use strict";var l=a(7294);t.Z=function(){return l.createElement("footer",{className:"navbar"},l.createElement("div",{className:"container-lg ps-sm-4 pe-sm-4",style:{display:"block"}},l.createElement("p",{className:"navbar-text m-0"},"Angel Hurtado © ",(new Date).getFullYear(),", Portafolio v2.0.7 | Creado con"," ",l.createElement("a",{href:"https://www.gatsbyjs.com/",rel:"external",title:"Gatsby"},"Gatsby")," ","y"," ",l.createElement("a",{href:"https://getbootstrap.com/docs/",rel:"external",title:"Bootstrap"},"Bootstrap")," ",". Reporta problemas o envía tus sugerencias a la página"," ",l.createElement("a",{href:"https://github.com/angelxehg/angelxehg.github.io/issues",rel:"external",title:"Issues"},"Issues"),". Las marcas y logotipos presentados en este sitio web pertenecen a sus respectivos dueños")))}},111:function(e,t,a){"use strict";var l=a(7294),n=a(1597),r=a(7311);t.Z=function(){var e=(0,l.useState)(!0),t=e[0],a=e[1];return l.createElement("nav",{className:"navbar sticky-top navbar-expand-md"},l.createElement("div",{className:"container-lg ps-sm-4 pe-sm-4"},l.createElement(n.Link,{to:"/",className:"navbar-brand"},"Angel Hurtado"),l.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#defaultNavbar","aria-controls":"defaultNavbar","aria-expanded":"false","aria-label":"Toggle navigation",onClick:function(){return a(!t)}},l.createElement(r,{style:{height:"1.8rem",width:"1.8rem"}})),l.createElement("div",{className:t?"collapse navbar-collapse":"navbar-collapse",id:"defaultNavbar"},l.createElement("ul",{className:"navbar-nav me-auto"}),l.createElement("ul",{className:"navbar-nav"},l.createElement("li",{className:"nav-item"},l.createElement(n.Link,{to:"/#about",className:"nav-link text-reset"},"Acerca de")),l.createElement("li",{className:"nav-item"},l.createElement(n.Link,{to:"/#skills",className:"nav-link text-reset"},"Habilidades")),l.createElement("li",{className:"nav-item"},l.createElement(n.Link,{to:"/projects",className:"nav-link text-reset"},"Proyectos")),l.createElement("li",{className:"nav-item"},l.createElement(n.Link,{to:"/posts",className:"nav-link text-reset"},"Blog"))))))}},9e3:function(e,t,a){"use strict";a.r(t),a.d(t,{ProjectsSection:function(){return E},default:function(){return v}});var l=a(7294),n=a(1597),r=a(396),s=a(2380),c=a(768),i=a(7569),m=function(e){var t=e.id,a=e.slug,l=e.excerpt,n=e.frontmatter;return{id:t,slug:a,date:n.date,title:n.title,excerpt:l,caption:n.caption,stack:n.stack,published:n.published,image:e.frontmatter.image.childImageSharp.gatsbyImageData}},o=function(e,t){return e.date<t.date?1:e.date>t.date?-1:0},u=function(){return(0,n.useStaticQuery)("263364375").allMdx.nodes.map(m).sort(o).filter((function(e){return!0===e.published}))},d=a(111),p=function(e){var t=e.item,a=t.slug,s=t.title,c=t.image,i=t.caption,m=t.stack;return l.createElement(n.Link,{to:"/"+a,style:{textDecoration:"none"}},l.createElement("article",{className:"card",style:{height:"100%"}},l.createElement(r.G,{image:c,alt:i,className:"card-img-top"}),l.createElement("div",{className:"card-body"},"h2"===e.titleAs&&l.createElement("h2",{className:"card-title h5"},s),"h3"===e.titleAs&&l.createElement("h3",{className:"card-title h5"},s),l.createElement("p",{className:"card-text m-0"},i),l.createElement("p",{className:"card-text m-0"},m.map((function(e){return l.createElement("span",{key:e,className:"badge rounded-pill mt-1 me-1"},e)}))))))},E=function(){var e=u().slice(0,4);return l.createElement("section",{id:"projects"},l.createElement("h2",null,"Mis Proyectos"),l.createElement("div",{className:"row"},e.map((function(e){return l.createElement("div",{key:e.id,className:"col-lg-6 p-sm-1 pb-3"},l.createElement(p,{item:e,titleAs:"h3"}))}))),l.createElement(n.Link,{to:"/projects"},"Ver todos los proyectos"))},v=function(){var e=u();return l.createElement(s.Z,null,l.createElement(i.Z,{title:"Proyectos",lang:"es"}),l.createElement(d.Z,null),l.createElement("div",{className:"hero"},l.createElement("div",{className:"container-lg ps-sm-4 pe-sm-4 pt-3 pb-3"},l.createElement(n.Link,{to:"/"},"< ","Volver a Portafolio"),l.createElement("header",{className:"mt-1"},l.createElement("h1",null,"Todos mis proyectos"),l.createElement("p",{className:"m-0"},"Estos son todos mis proyectos públicos")))),l.createElement("main",{className:"container-lg ps-sm-4 pe-sm-4 pt-3 pb-3"},l.createElement("div",{className:"row"},e.map((function(e){return l.createElement("div",{key:e.id,className:"col-lg-6 p-sm-1 pb-3"},l.createElement(p,{titleAs:"h2",item:e}))})))),l.createElement(c.Z,null))}},7311:function(e,t,a){var l=a(7294);function n(e){return l.createElement("svg",e,l.createElement("path",{fillRule:"evenodd",d:"M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"}))}n.defaultProps={width:"16",height:"16",fill:"currentColor",className:"bi bi-list",viewBox:"0 0 16 16"},e.exports=n,n.default=n}}]);
//# sourceMappingURL=component---src-pages-projects-tsx-d632442d83c57182ab27.js.map