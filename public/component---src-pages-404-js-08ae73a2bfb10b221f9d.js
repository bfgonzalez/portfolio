(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{192:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(203),l=a(201);t.default=function(){return r.a.createElement(c.a,null,r.a.createElement(l.a,{title:"404: Not found"}),r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},196:function(e,t,a){var n;e.exports=(n=a(197))&&n.default||n},197:function(e,t,a){"use strict";a.r(t);a(23);var n=a(0),r=a.n(n),c=a(95);t.default=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json)):null}},198:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAG4SURBVHgB7ZnNbYNAEIXfQOxDcnEJlOC/AkgHKcGH2MrRqSChAvsYJZFMCU4FTu4WogO7BAqwdrNrX3KAZYmQmJH8JC7MrLQfw7AzA3BVtyJvz+FThDaVvx3RgvwA7OZDdUD7ys11hNZfyD5S/ENdA/yVBUmaggTgowhEG0wXqyaLOAFcpLHEZL7xdecHcBbNMF4sfTyZAsBm5wrDWVTnxhfAKuzX5gNvACA2URi4HLgDDBCGscuBO4D5KoWRy8wfADpyWQUAUOGyCgCAcIBA5U4zeKvA/vPb5cAcgLZ1HjfgKm3Ka0VJnRvjCJjewKNr4wlA8G5seAFoXZjNP2P//uq7hFMOFFDhCFmzZp9TBEzhpnYYz2dNFnHLgUtfPFkcfJoZK65fITMF6e+kd2ReENxLCQPRc04oJJTTMaaPcZVVQjltzgd6qTLJALBRqGjuhQAYBb2H0tsQIxIeAXtSl0gSQGlvLCgHyntjOQCnk2QA8wsqTwW/QqTXVSYJpUTqGq3wnUpYeUwm+EbgvPngvm4ywRPAc/NWHKcSCdTtyPdPfrc5YJ802ROWcmj1A3W3RbYucJUg/QIcr3WPh2+WDwAAAABJRU5ErkJggg=="},201:function(e,t,a){"use strict";var n=a(202),r=a(0),c=a.n(r),l=a(205),o=a.n(l);function s(e){var t=e.description,a=e.lang,r=e.meta,l=e.title,s=(e.url,n.data.site),i=t||s.siteMetadata.description;return c.a.createElement(o.a,{htmlAttributes:{lang:a},title:s.siteMetadata.title,meta:[{name:"description",content:i},{property:"og:title",content:l},{property:"og:description",content:i},{property:"og:image",content:s.siteMetadata.image},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:i}].concat(r)})}s.defaultProps={lang:"en",meta:[],description:""},t.a=s},202:function(e){e.exports={data:{site:{siteMetadata:{title:"Bianca Gonzalez",description:"Hi there, I'm Bianca! I'm a self-taught Web Developer and User Interface Designer.",author:"@bfgonzalez",url:"https://bfgonzalez.netlify.app"}}}}},203:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=(a(38),a(66)),l=a.n(c);a(196),a(9).default.enqueue,r.a.createContext({});var o=a(204),s=a.n(o),i=a(198),m=a.n(i),u=function(){var e=Object(n.useState)(!1),t=e[0],a=e[1],c=Object(n.useState)(""),o=c[0],i=c[1],u=["#work","#about","/blog"];return Object(n.useEffect)(function(){switch(window.location.href.split("/").pop()){case"#work":i("WORK");break;case"#about":i("ABOUT");break;case"blog":i("BLOG");break;default:i("")}},[o]),r.a.createElement("nav",{className:"navbar is-fixed-top is-transparent is-spaced",role:"navigation"},r.a.createElement("div",{className:"navbar-brand"},r.a.createElement(l.a,{className:"navbar-item has-text-weight-bold is-size-4 has-text-primary",to:"/"},r.a.createElement("img",{src:m.a})),r.a.createElement("div",{className:"navbar-burger",onClick:function(){return a(!t)}},r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null))),r.a.createElement("div",{className:s()("navbar-menu",!0===t&&"is-active"),"data-target":"navbar"},r.a.createElement("div",{id:"navbar",className:"navbar-end is-size-5 has-text-centered"},["WORK","ABOUT","BLOG"].map(function(e,t){return r.a.createElement(l.a,{key:t,className:s()("navbar-item has-text-primary",o===e&&"has-text-weight-bold"),to:u[t],onClick:function(){return i(e)}},e)}))))},A=a(199),p=a(200),d=function(){return r.a.createElement("footer",{id:"footer",className:"footer columns is-centered"},r.a.createElement("div",{className:"column has-text-centered has-text-primary"},r.a.createElement("div",{className:"is-size-3"},r.a.createElement("a",{href:"https://github.com/bfgonzalez",target:"_blank",rel:"noopener noreferrer",className:"mr-2"},r.a.createElement(A.a,{icon:p.b,width:"32"})),r.a.createElement("a",{href:"https://dev.to/bfgonzalez",target:"_blank",rel:"noopener noreferrer",className:"mr-2"},r.a.createElement(A.a,{icon:p.a,width:"32"})),r.a.createElement("a",{href:"https://www.linkedin.com/in/bfgonzalez/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(A.a,{icon:p.c,width:"32"}))),r.a.createElement("p",{className:"is-size-6"},r.a.createElement("a",{href:"https://bfgonzalez.netlify.app/",target:"_blank",rel:"noopener noreferrer"},"Bianca Gonzalez © ",(new Date).getFullYear()))))};t.a=function(e){var t=e.children,a=e.hasFooter;return r.a.createElement(r.a.Fragment,null,r.a.createElement(u,null),r.a.createElement("div",{className:"has-navbar-fixed-top"},r.a.createElement("main",null,t)),!0===a&&r.a.createElement(d,null))}}}]);
//# sourceMappingURL=component---src-pages-404-js-08ae73a2bfb10b221f9d.js.map