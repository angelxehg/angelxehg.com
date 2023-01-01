(self.webpackChunkangelxehg_github_io=self.webpackChunkangelxehg_github_io||[]).push([[691,317],{5191:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return w}});var l=a(7294),r=a(4229),n=a(2380),c=function(e){return l.createElement("div",{className:"hero"},l.createElement("div",{className:"hero-content container-lg ps-sm-4 pe-sm-4 pt-4 pb-4"},e.children))},i=a(4353),m=a(9996),s=a(2766),o=a(8868),d=a(6357),u=a(234),h=a(8807),E=a(2681),f=a(5515),k=a(8199),p=a(8362),C=function(){return l.createElement("a",{href:"mailto:angelxehg@proton.me",rel:"external",title:"Send email to Angel",style:{textDecoration:"none"}},l.createElement(E,{style:{marginRight:"4px"}}),"angelxehg@proton.me")},y=function(){return l.createElement("a",{href:"https://www.linkedin.com/in/angelxehg",rel:"external",title:"LinkedIn (/in/angelxehg)",style:{textDecoration:"none"}},l.createElement(k,{style:{marginRight:"4px"}}),"LinkedIn (/in/angelxehg)")},g=function(){return l.createElement("a",{href:"https://github.com/angelxehg",rel:"external",title:"GitHub (@angelxehg)",style:{textDecoration:"none"}},l.createElement(f,{style:{marginRight:"4px"}}),"GitHub (@angelxehg)")},x=function(){return l.createElement("a",{href:"https://www.twitter.com/angelxehg",rel:"external",title:"Twitter (@angelxehg)",style:{textDecoration:"none"}},l.createElement(p,{style:{marginRight:"4px"}}),"Twitter (@angelxehg)")},v=function(){return l.createElement("nav",null,l.createElement("ul",{className:"p-0 m-0",style:{listStyleType:"none"}},l.createElement("li",{style:{marginBottom:"4px"}},l.createElement(C,null)),l.createElement("li",{style:{marginBottom:"4px"}},l.createElement(y,null)),l.createElement("li",{style:{marginBottom:"4px"}},l.createElement(g,null)),l.createElement("li",{style:{marginBottom:"4px"}},l.createElement(x,null))))},w=function(){return l.createElement(n.Z,null,l.createElement(r.Z,{title:"Portafolio",lang:"es"}),l.createElement(m.Z,null),l.createElement(c,null,l.createElement(h,{className:"rounded-circle fluid align-self-center",alt:"Avatar de Angel",style:{height:"120px",width:"120px",background:"blueviolet"}}),l.createElement("header",{className:"mt-2"},l.createElement("h1",null,"Angel Hurtado"),l.createElement("p",null,"Frontend Developer")),l.createElement(v,null)),l.createElement("main",{className:"container-lg ps-sm-4 pe-sm-4 pb-3"},l.createElement(s.AboutSection,null),l.createElement(o.SkillsSection,null),l.createElement(d.ProjectsSection,null),l.createElement(u.PostsSection,null)),l.createElement(i.Z,null))}},6357:function(e,t,a){"use strict";a.r(t),a.d(t,{ProjectsSection:function(){return E},default:function(){return f}});var l=a(7294),r=a(1597),n=a(6296),c=a(2380),i=a(4353),m=a(4229),s=function(e){var t=e.id,a=e.fields,l=e.excerpt,r=e.frontmatter,n=r.date,c=r.title,i=r.caption,m=r.stack,s=r.published;return{id:t,slug:a.slug,date:n,title:c,excerpt:l,caption:i,stack:m,published:s,image:e.frontmatter.image.childImageSharp.gatsbyImageData}},o=function(e,t){return e.date<t.date?1:e.date>t.date?-1:0},d=function(){return(0,r.useStaticQuery)("1783266993").allMdx.nodes.map(s).sort(o).filter((function(e){return!0===e.published}))},u=a(9996),h=function(e){var t=e.item,a=t.slug,c=t.title,i=t.image,m=t.caption,s=t.stack;return l.createElement(r.Link,{to:a,style:{textDecoration:"none"}},l.createElement("article",{className:"card",style:{height:"100%"}},l.createElement(n.G,{image:i,alt:m,className:"card-img-top"}),l.createElement("div",{className:"card-body"},"h2"===e.titleAs&&l.createElement("h2",{className:"card-title h5"},c),"h3"===e.titleAs&&l.createElement("h3",{className:"card-title h5"},c),l.createElement("p",{className:"card-text m-0"},m),l.createElement("p",{className:"card-text m-0"},s.map((function(e){return l.createElement("span",{key:e,className:"badge rounded-pill mt-1 me-1"},e)}))))))},E=function(){var e=d().slice(0,4);return l.createElement("section",{id:"projects"},l.createElement("h2",null,"Mis Proyectos"),l.createElement("div",{className:"row"},e.map((function(e){return l.createElement("div",{key:e.id,className:"col-lg-6 p-sm-1 pb-3"},l.createElement(h,{item:e,titleAs:"h3"}))}))),l.createElement(r.Link,{to:"/projects"},"Ver todos los proyectos"))},f=function(){var e=d();return l.createElement(c.Z,null,l.createElement(m.Z,{title:"Proyectos",lang:"es"}),l.createElement(u.Z,null),l.createElement("div",{className:"hero"},l.createElement("div",{className:"container-lg ps-sm-4 pe-sm-4 pt-3 pb-3"},l.createElement(r.Link,{to:"/"},"< ","Volver a Portafolio"),l.createElement("header",{className:"mt-1"},l.createElement("h1",null,"Todos mis proyectos"),l.createElement("p",{className:"m-0"},"Estos son todos mis proyectos públicos")))),l.createElement("main",{className:"container-lg ps-sm-4 pe-sm-4 pt-3 pb-3"},l.createElement("div",{className:"row"},e.map((function(e){return l.createElement("div",{key:e.id,className:"col-lg-6 p-sm-1 pb-3"},l.createElement(h,{titleAs:"h2",item:e}))})))),l.createElement(i.Z,null))}},8868:function(e,t,a){"use strict";a.r(t),a.d(t,{SkillsSection:function(){return i},default:function(){return m}});var l=a(7294),r=[{title:"Mis herramientas favoritas:",tools:["React","Firebase","GatsbyJS","Ubuntu","VSCode","Netlify","GitHub"]},{title:"Estoy aprendiendo:",tools:["Dart","Flutter","GraphQL","Angular","Ionic","Capacitor"]},{title:"También trabajo con:",tools:["HTML5","JavaScript","TypeScript","Python","Django","Markdown","NPM","Git"]},{title:"Otras herramientas:",tools:["Cordova","Heroku","Bootstrap","GitLab","DigitalOcean","NodeJS","AWS"]}],n=a(9393),c=function(e){return l.createElement("div",{className:"card",style:{height:"100%"}},l.createElement("div",{className:"card-body"},l.createElement("h3",{className:"card-title h5"},e.title),l.createElement("p",{className:"card-text"},e.tools.map((function(e){return l.createElement("span",{key:e,className:"badge rounded-pill mt-1 me-1"},e)})))))},i=function(){return l.createElement("section",{id:"skills"},l.createElement("h2",null,"Habilidades"),l.createElement("div",{className:"row"},r.map((function(e,t){var a=e.title,r=e.tools;return l.createElement("div",{key:t,className:"col-lg-6 p-sm-1 pb-3"},l.createElement(c,{title:a,tools:r}))}))))},m=function(){return l.createElement(n.Z,{title:"Skills",url:"/#skills"})}},2681:function(e,t,a){var l=a(7294);function r(e){return l.createElement("svg",e,l.createElement("path",{d:"M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"}))}r.defaultProps={width:"16",height:"16",fill:"currentColor",className:"bi bi-envelope-fill",viewBox:"0 0 16 16"},e.exports=r,r.default=r},5515:function(e,t,a){var l=a(7294);function r(e){return l.createElement("svg",e,l.createElement("path",{d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"}))}r.defaultProps={width:"16",height:"16",fill:"currentColor",className:"bi bi-github",viewBox:"0 0 16 16"},e.exports=r,r.default=r},8199:function(e,t,a){var l=a(7294);function r(e){return l.createElement("svg",e,l.createElement("path",{d:"M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"}))}r.defaultProps={width:"16",height:"16",fill:"currentColor",className:"bi bi-linkedin",viewBox:"0 0 16 16"},e.exports=r,r.default=r},8362:function(e,t,a){var l=a(7294);function r(e){return l.createElement("svg",e,l.createElement("path",{d:"M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"}))}r.defaultProps={width:"16",height:"16",fill:"currentColor",className:"bi bi-twitter",viewBox:"0 0 16 16"},e.exports=r,r.default=r},8807:function(e,t,a){var l=a(7294);function r(e){return l.createElement("svg",e,[l.createElement("desc",{key:0},"Created with getavataaars.com"),l.createElement("defs",{key:1},[l.createElement("circle",{id:"react-path-1",cx:"120",cy:"120",r:"120",key:0}),l.createElement("path",{d:"M12,160 C12,226.27417 65.72583,280 132,280 C198.27417,280 252,226.27417 252,160 L264,160 L264,-1.42108547e-14 L-3.19744231e-14,-1.42108547e-14 L-3.19744231e-14,160 L12,160 Z",id:"react-path-2",key:1}),l.createElement("path",{d:"M124,144.610951 L124,163 L128,163 L128,163 C167.764502,163 200,195.235498 200,235 L200,244 L0,244 L0,235 C-4.86974701e-15,195.235498 32.235498,163 72,163 L72,163 L76,163 L76,144.610951 C58.7626345,136.422372 46.3722246,119.687011 44.3051388,99.8812385 C38.4803105,99.0577866 34,94.0521096 34,88 L34,74 C34,68.0540074 38.3245733,63.1180731 44,62.1659169 L44,56 L44,56 C44,25.072054 69.072054,5.68137151e-15 100,0 L100,0 L100,0 C130.927946,-5.68137151e-15 156,25.072054 156,56 L156,62.1659169 C161.675427,63.1180731 166,68.0540074 166,74 L166,88 C166,94.0521096 161.51969,99.0577866 155.694861,99.8812385 C153.627775,119.687011 141.237365,136.422372 124,144.610951 Z",id:"react-path-3",key:2})]),l.createElement("g",{id:"Avataaar",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",key:2},l.createElement("g",{transform:"translate(-825.000000, -1100.000000)",id:"Avataaar/Circle"},l.createElement("g",{transform:"translate(825.000000, 1100.000000)"},[l.createElement("g",{id:"Mask",key:0}),l.createElement("g",{id:"Avataaar",strokeWidth:"1",fillRule:"evenodd",mask:"url(#react-mask-5)",key:1},[l.createElement("g",{id:"Body",transform:"translate(32.000000, 36.000000)",key:0},[l.createElement("mask",{id:"react-mask-6",fill:"white",key:0},l.createElement("use",{xlinkHref:"#react-path-3"})),l.createElement("use",{fill:"#D0C6AC",xlinkHref:"#react-path-3",key:1}),l.createElement("g",{id:"Skin/👶🏽-03-Brown",mask:"url(#react-mask-6)",fill:"#FFDBB4",key:2},l.createElement("g",{transform:"translate(0.000000, 0.000000)",id:"Color"},l.createElement("rect",{x:"0",y:"0",width:"264",height:"280"}))),l.createElement("path",{d:"M156,79 L156,102 C156,132.927946 130.927946,158 100,158 C69.072054,158 44,132.927946 44,102 L44,79 L44,94 C44,124.927946 69.072054,150 100,150 C130.927946,150 156,124.927946 156,94 L156,79 Z",id:"Neck-Shadow",fillOpacity:"0.100000001",fill:"#000000",mask:"url(#react-mask-6)",key:3})]),l.createElement("g",{id:"Clothing/Hoodie",transform:"translate(0.000000, 170.000000)",key:1},[l.createElement("defs",{key:0},l.createElement("path",{d:"M108,13.0708856 C90.0813006,15.075938 76.2798424,20.5518341 76.004203,34.6449676 C50.1464329,45.5680933 32,71.1646257 32,100.999485 L32,100.999485 L32,110 L232,110 L232,100.999485 C232,71.1646257 213.853567,45.5680933 187.995797,34.6449832 C187.720158,20.5518341 173.918699,15.075938 156,13.0708856 L156,32 L156,32 C156,45.254834 145.254834,56 132,56 L132,56 C118.745166,56 108,45.254834 108,32 L108,13.0708856 Z",id:"react-path-7"})),l.createElement("mask",{id:"react-mask-8",fill:"white",key:1},l.createElement("use",{xlinkHref:"#react-path-7"})),l.createElement("use",{id:"Hoodie",fill:"#B7C1DB",fillRule:"evenodd",xlinkHref:"#react-path-7",key:2}),l.createElement("g",{id:"Color/Palette/Gray-01",mask:"url(#react-mask-8)",fillRule:"evenodd",fill:"#5199E4",key:3},l.createElement("rect",{id:"🖍Color",x:"0",y:"0",width:"264",height:"110"})),l.createElement("path",{d:"M102,61.7390531 L102,110 L95,110 L95,58.1502625 C97.2037542,59.4600576 99.5467694,60.6607878 102,61.7390531 Z M169,58.1502625 L169,98.5 C169,100.432997 167.432997,102 165.5,102 C163.567003,102 162,100.432997 162,98.5 L162,61.7390531 C164.453231,60.6607878 166.796246,59.4600576 169,58.1502625 Z",id:"Straps",fill:"#F4F4F4",fillRule:"evenodd",mask:"url(#react-mask-8)",key:4}),l.createElement("path",{d:"M90.9601329,12.7243537 C75.9093095,15.5711782 65.5,21.2428847 65.5,32.3076923 C65.5,52.0200095 98.5376807,68 132,68 C165.462319,68 198.5,52.0200095 198.5,32.3076923 C198.5,21.2428847 188.09069,15.5711782 173.039867,12.7243537 C182.124921,16.0744598 188,21.7060546 188,31.0769231 C188,51.4689754 160.178795,68 132,68 C103.821205,68 76,51.4689754 76,31.0769231 C76,21.7060546 81.8750795,16.0744598 90.9601329,12.7243537 Z",id:"Shadow",fillOpacity:"0.16",fill:"#000000",fillRule:"evenodd",mask:"url(#react-mask-8)",key:5})]),l.createElement("g",{id:"Face",transform:"translate(76.000000, 82.000000)",fill:"#000000",key:2},[l.createElement("g",{id:"Mouth/Smile",transform:"translate(2.000000, 52.000000)",key:0},[l.createElement("defs",{key:0},l.createElement("path",{d:"M35.117844,15.1280772 C36.1757121,24.6198025 44.2259873,32 54,32 C63.8042055,32 71.8740075,24.574136 72.8917593,15.0400546 C72.9736685,14.272746 72.1167429,13 71.042767,13 C56.1487536,13 44.7379213,13 37.0868244,13 C36.0066168,13 35.0120058,14.1784435 35.117844,15.1280772 Z",id:"react-path-47"})),l.createElement("mask",{id:"react-mask-48",fill:"white",key:1},l.createElement("use",{xlinkHref:"#react-path-47"})),l.createElement("use",{id:"Mouth",fillOpacity:"0.699999988",fill:"#000000",fillRule:"evenodd",xlinkHref:"#react-path-47",key:2}),l.createElement("rect",{id:"Teeth",fill:"#FFFFFF",fillRule:"evenodd",mask:"url(#react-mask-48)",x:"39",y:"2",width:"31",height:"16",rx:"5",key:3}),l.createElement("g",{id:"Tongue",strokeWidth:"1",fillRule:"evenodd",mask:"url(#react-mask-48)",fill:"#FF4F6D",key:4},l.createElement("g",{transform:"translate(38.000000, 24.000000)"},[l.createElement("circle",{cx:"11",cy:"11",r:"11",key:0}),l.createElement("circle",{cx:"21",cy:"11",r:"11",key:1})]))]),l.createElement("g",{id:"Nose/Default",transform:"translate(28.000000, 40.000000)",fillOpacity:"0.16",key:1},l.createElement("path",{d:"M16,8 C16,12.418278 21.372583,16 28,16 L28,16 C34.627417,16 40,12.418278 40,8",id:"Nose"})),l.createElement("g",{id:"Eyes/Squint-😊",transform:"translate(0.000000, 8.000000)",key:2},[l.createElement("defs",{key:0},[l.createElement("path",{d:"M14,14.0481187 C23.6099827,14.0481187 28,18.4994466 28,11.5617716 C28,4.62409673 21.7319865,0 14,0 C6.2680135,0 0,4.62409673 0,11.5617716 C0,18.4994466 4.39001726,14.0481187 14,14.0481187 Z",id:"react-path-9",key:0}),l.createElement("path",{d:"M14,14.0481187 C23.6099827,14.0481187 28,18.4994466 28,11.5617716 C28,4.62409673 21.7319865,0 14,0 C6.2680135,0 0,4.62409673 0,11.5617716 C0,18.4994466 4.39001726,14.0481187 14,14.0481187 Z",id:"react-path-10",key:1})]),l.createElement("g",{id:"Eye",transform:"translate(16.000000, 13.000000)",key:1},[l.createElement("mask",{id:"react-mask-11",fill:"white",key:0},l.createElement("use",{xlinkHref:"#react-path-9"})),l.createElement("use",{id:"The-white-stuff",fill:"#FFFFFF",xlinkHref:"#react-path-9",key:1}),l.createElement("circle",{fillOpacity:"0.699999988",fill:"#000000",mask:"url(#react-mask-11)",cx:"14",cy:"10",r:"6",key:2})]),l.createElement("g",{id:"Eye",transform:"translate(68.000000, 13.000000)",key:2},[l.createElement("mask",{id:"react-mask-12",fill:"white",key:0},l.createElement("use",{xlinkHref:"#react-path-10"})),l.createElement("use",{id:"Eyeball-Mask",fill:"#FFFFFF",xlinkHref:"#react-path-10",key:1}),l.createElement("circle",{fillOpacity:"0.699999988",fill:"#000000",mask:"url(#react-mask-12)",cx:"14",cy:"10",r:"6",key:2})])]),l.createElement("g",{id:"Eyebrow/Natural/Default-Natural",fillOpacity:"0.599999964",key:3},[l.createElement("path",{d:"M26.0390934,6.21012364 C20.2775554,6.98346216 11.2929313,12.0052479 12.04426,17.8178111 C12.0689481,18.0080543 12.3567302,18.0673468 12.4809077,17.9084937 C14.9674041,14.7203351 34.1927973,10.0365481 41.1942673,11.0147151 C41.8350523,11.1044465 42.2580662,10.4430343 41.8210501,10.0302067 C38.0765663,6.49485426 31.2003792,5.51224825 26.0390934,6.21012364",id:"Eyebrow",transform:"translate(27.000000, 12.000000) rotate(5.000000) translate(-27.000000, -12.000000) ",key:0}),l.createElement("path",{d:"M85.0390934,6.21012364 C79.2775554,6.98346216 70.2929313,12.0052479 71.04426,17.8178111 C71.0689481,18.0080543 71.3567302,18.0673468 71.4809077,17.9084937 C73.9674041,14.7203351 93.1927973,10.0365481 100.194267,11.0147151 C100.835052,11.1044465 101.258066,10.4430343 100.82105,10.0302067 C97.0765663,6.49485426 90.2003792,5.51224825 85.0390934,6.21012364",id:"Eyebrow",transform:"translate(86.000000, 12.000000) scale(-1, 1) rotate(5.000000) translate(-86.000000, -12.000000) ",key:1})])]),l.createElement("g",{id:"Top",strokeWidth:"1",fillRule:"evenodd",key:3},[l.createElement("defs",{key:0},[l.createElement("rect",{id:"react-path-17",x:"0",y:"0",width:"264",height:"280",key:0}),l.createElement("path",{d:"M94.2519269,52.0221149 C94.3749353,51.9677149 94.0696712,51.9468149 93.3361345,51.9595149 C94.2276637,51.9577149 94.5329279,51.9785149 94.2519269,52.0221149 M86.1169775,36.3015924 C86.1148422,36.2819924 86.1337548,36.4526924 86.1169775,36.3015924 M193.765056,70.7656665 C193.500946,67.448734 193.03295,64.1518864 192.246676,60.9110823 C191.622233,58.3353492 190.769007,55.8775343 189.760006,53.4200433 C189.150703,51.9353766 187.727538,49.8961062 187.560324,48.2944933 C187.395466,46.7168527 188.626521,44.969138 188.889285,43.1323368 C189.144311,41.3447761 189.100909,39.4652134 188.734183,37.6938503 C187.901144,33.6710288 185.140271,29.9300447 180.877167,28.8814158 C179.925362,28.6471994 177.913417,28.9358396 177.240862,28.3815597 C176.469729,27.7459682 175.932761,25.5806808 175.234637,24.7121687 C173.244224,22.2362125 170.13984,20.6417265 166.865887,21.1976261 C164.454917,21.606776 165.839391,22.1053363 164.032005,20.6864317 C163.027041,19.8976114 162.276095,18.6931622 161.300066,17.8392279 C159.832826,16.5563826 158.149588,15.4581893 156.408146,14.556958 C151.851325,12.19892 146.654249,10.4848961 141.564162,9.64942693 C132.278934,8.12523827 122.368926,9.45408458 113.368668,11.8688141 C108.890239,13.0703477 104.381531,14.5951842 100.222053,16.6117782 C98.4385542,17.4764029 97.4090304,18.1936301 95.5494951,18.4200717 C92.6207355,18.7767416 90.1404579,18.7589243 87.3661268,20.0009517 C78.8298269,23.8229236 74.9849256,32.6897818 78.3066539,41.1750259 C78.974835,42.8815988 79.8795374,44.3801954 81.1267416,45.7586062 C82.6474761,47.4392631 83.1975648,47.1085093 81.8877817,49.0411999 C79.9289949,51.9311653 78.2777195,55.0129095 76.9332826,58.2128958 C73.4043038,66.6145606 72.8138416,76.0771643 73.043634,85.0373203 C73.1240445,88.1741362 73.2586228,91.3495022 73.753198,94.4561907 C73.966841,95.8009106 74.0267283,98.3293468 75.0353925,99.3271154 C75.5471264,99.8331265 76.2762042,100.115288 77.0035997,99.9137903 C78.7130802,99.4401742 78.1253096,98.1787097 78.1650102,97.0076274 C78.364859,91.1240324 78.0950295,85.9191145 79.4943071,80.1064647 C80.5278683,75.8118486 82.2504702,71.9114806 84.4827873,68.0713675 C87.3213795,63.1871608 90.3857268,58.8977279 94.2895061,54.7155226 C95.2073299,53.7320079 95.4078515,53.3150832 96.6385698,53.243814 C97.5705244,53.1900382 98.9338023,53.8282213 99.8398505,54.0491558 C101.837665,54.5360539 103.83918,55.0174448 105.873331,55.3452831 C109.613261,55.9481556 113.316519,55.9886494 117.090094,55.8704074 C124.516459,55.6381346 131.974787,55.1172217 139.175061,53.2470535 C143.956964,52.00535 148.196516,49.7762443 152.776887,48.1422364 C152.858644,48.1130808 154.006596,47.2951049 154.207791,47.3284719 C154.488723,47.3747968 156.184746,49.1542588 156.471061,49.3784327 C158.696649,51.1238798 161.137899,51.8566566 163.541467,53.2081794 C166.504881,54.8745825 163.634999,52.4899804 165.269452,54.5668292 C165.745859,55.1716454 165.989782,56.2931632 166.371984,56.9783192 C167.587899,59.1610999 169.279548,61.0795367 171.302932,62.6017816 C173.258018,64.0725184 176.196198,64.7829426 177.193087,66.697168 C177.961865,68.1740599 178.220929,70.1812592 178.841334,71.7579279 C180.468722,75.8931602 182.617937,79.7494709 184.767152,83.6443317 C186.498502,86.7830913 188.392354,89.5250111 188.584801,93.1117947 C188.651754,94.3603012 187.463764,101.849397 190.357534,99.5716982 C190.786502,99.2341415 191.711391,95.415733 191.901483,94.7678314 C192.672616,92.135083 192.94682,89.3866841 193.29605,86.6816947 C193.990474,81.3021672 194.218584,76.1837441 193.765056,70.7656665",id:"react-path-16",key:1}),l.createElement("filter",{x:"-0.8%",y:"-2.0%",width:"101.5%",height:"108.0%",filterUnits:"objectBoundingBox",id:"react-filter-13",key:2},[l.createElement("feOffset",{dx:"0",dy:"2",in:"SourceAlpha",result:"shadowOffsetOuter1",key:0}),l.createElement("feColorMatrix",{values:"0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.16 0",type:"matrix",in:"shadowOffsetOuter1",result:"shadowMatrixOuter1",key:1}),l.createElement("feMerge",{key:2},[l.createElement("feMergeNode",{in:"shadowMatrixOuter1",key:0}),l.createElement("feMergeNode",{in:"SourceGraphic",key:1})])])]),l.createElement("mask",{id:"react-mask-15",fill:"white",key:1},l.createElement("use",{xlinkHref:"#react-path-17"})),l.createElement("g",{id:"Mask",key:2}),l.createElement("g",{id:"Top/Short-Hair/Short-Curly",mask:"url(#react-mask-15)",key:3},l.createElement("g",{transform:"translate(-1.000000, 0.000000)"},[l.createElement("mask",{id:"react-mask-14",fill:"white",key:0},l.createElement("use",{xlinkHref:"#react-path-16"})),l.createElement("use",{id:"Short-Hair",stroke:"none",fill:"#28354B",fillRule:"evenodd",xlinkHref:"#react-path-16",key:1}),l.createElement("g",{id:"Skin/👶🏽-03-Brown",mask:"url(#react-mask-14)",fill:"#4A312C",key:2},l.createElement("g",{transform:"translate(0.000000, 0.000000) ",id:"Color"},l.createElement("rect",{x:"0",y:"0",width:"264",height:"280"})))]))])])])))])}r.defaultProps={width:"264px",height:"280px",viewBox:"0 0 264 280",version:"1.1"},e.exports=r,r.default=r}}]);
//# sourceMappingURL=component---src-pages-index-tsx-8c4e96e78dedb308d7a7.js.map