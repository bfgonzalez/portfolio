(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{193:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(203),i=a(201);t.default=function(){return r.a.createElement(c.a,null,r.a.createElement(i.a,{title:"Blog"}),r.a.createElement("div",{className:"columns is-centered is-vcentered full-height"},r.a.createElement("div",{className:"has-text-centered column is-8 is-10-mobile mt-6"},r.a.createElement("h1",{className:"title mb-4 is-size-4-mobile"},"Coming Soon!"))))}},196:function(e,t,a){var n;e.exports=(n=a(197))&&n.default||n},197:function(e,t,a){"use strict";a.r(t);a(23);var n=a(0),r=a.n(n),c=a(95);t.default=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json)):null}},198:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAG4SURBVHgB7ZnNbYNAEIXfQOxDcnEJlOC/AkgHKcGH2MrRqSChAvsYJZFMCU4FTu4WogO7BAqwdrNrX3KAZYmQmJH8JC7MrLQfw7AzA3BVtyJvz+FThDaVvx3RgvwA7OZDdUD7ys11hNZfyD5S/ENdA/yVBUmaggTgowhEG0wXqyaLOAFcpLHEZL7xdecHcBbNMF4sfTyZAsBm5wrDWVTnxhfAKuzX5gNvACA2URi4HLgDDBCGscuBO4D5KoWRy8wfADpyWQUAUOGyCgCAcIBA5U4zeKvA/vPb5cAcgLZ1HjfgKm3Ka0VJnRvjCJjewKNr4wlA8G5seAFoXZjNP2P//uq7hFMOFFDhCFmzZp9TBEzhpnYYz2dNFnHLgUtfPFkcfJoZK65fITMF6e+kd2ReENxLCQPRc04oJJTTMaaPcZVVQjltzgd6qTLJALBRqGjuhQAYBb2H0tsQIxIeAXtSl0gSQGlvLCgHyntjOQCnk2QA8wsqTwW/QqTXVSYJpUTqGq3wnUpYeUwm+EbgvPngvm4ywRPAc/NWHKcSCdTtyPdPfrc5YJ802ROWcmj1A3W3RbYucJUg/QIcr3WPh2+WDwAAAABJRU5ErkJggg=="},201:function(e,t,a){"use strict";var n=a(202),r=a(0),c=a.n(r),i=a(205),l=a.n(i);function s(e){var t=e.description,a=e.lang,r=e.meta,i=e.title,s=(e.url,n.data.site),o=t||s.siteMetadata.description;return c.a.createElement(l.a,{htmlAttributes:{lang:a},title:s.siteMetadata.title,meta:[{name:"description",content:o},{property:"og:title",content:i},{property:"og:description",content:o},{property:"og:image",content:s.siteMetadata.image},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:o}].concat(r)})}s.defaultProps={lang:"en",meta:[],description:""},t.a=s},202:function(e){e.exports={data:{site:{siteMetadata:{title:"Bianca Gonzalez",description:"Hi there, I'm Bianca! I'm a self-taught Web Developer and User Interface Designer.",author:"@bfgonzalez",url:"https://bfgonzalez.netlify.app"}}}}},203:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=(a(38),a(66)),i=a.n(c);a(196),a(9).default.enqueue,r.a.createContext({});var l=a(204),s=a.n(l),o=a(198),m=a.n(o),A=function(){var e=Object(n.useState)(!1),t=e[0],a=e[1],c=Object(n.useState)(""),l=c[0],o=c[1],A=["#work","#about","/blog"];return Object(n.useEffect)(function(){switch(window.location.href.split("/").pop()){case"#work":o("WORK");break;case"#about":o("ABOUT");break;case"blog":o("BLOG");break;default:o("")}},[l]),r.a.createElement("nav",{className:"navbar is-fixed-top is-transparent is-spaced",role:"navigation"},r.a.createElement("div",{className:"navbar-brand"},r.a.createElement(i.a,{className:"navbar-item has-text-weight-bold is-size-4 has-text-primary",to:"/"},r.a.createElement("img",{src:m.a})),r.a.createElement("div",{className:"navbar-burger",onClick:function(){return a(!t)}},r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null))),r.a.createElement("div",{className:s()("navbar-menu",!0===t&&"is-active"),"data-target":"navbar"},r.a.createElement("div",{id:"navbar",className:"navbar-end is-size-5 has-text-centered"},["WORK","ABOUT","BLOG"].map(function(e,t){return r.a.createElement(i.a,{key:t,className:s()("navbar-item has-text-primary",l===e&&"has-text-weight-bold"),to:A[t],onClick:function(){return o(e)}},e)}))))},u=a(199),d=a(200),g=function(){return r.a.createElement("footer",{id:"footer",className:"footer columns is-centered"},r.a.createElement("div",{className:"column has-text-centered has-text-primary"},r.a.createElement("div",{className:"is-size-3"},r.a.createElement("a",{href:"https://github.com/bfgonzalez",target:"_blank",rel:"noopener noreferrer",className:"mr-2"},r.a.createElement(u.a,{icon:d.b,width:"32"})),r.a.createElement("a",{href:"https://dev.to/bfgonzalez",target:"_blank",rel:"noopener noreferrer",className:"mr-2"},r.a.createElement(u.a,{icon:d.a,width:"32"})),r.a.createElement("a",{href:"https://www.linkedin.com/in/bfgonzalez/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(u.a,{icon:d.c,width:"32"}))),r.a.createElement("p",{className:"is-size-6"},r.a.createElement("a",{href:"https://bfgonzalez.netlify.app/",target:"_blank",rel:"noopener noreferrer"},"Bianca Gonzalez © ",(new Date).getFullYear()))))};t.a=function(e){var t=e.children,a=e.hasFooter;return r.a.createElement(r.a.Fragment,null,r.a.createElement(A,null),r.a.createElement("div",{className:"has-navbar-fixed-top"},r.a.createElement("main",null,t)),!0===a&&r.a.createElement(g,null))}}}]);
//# sourceMappingURL=component---src-pages-blog-js-59efab3a97df092eb367.js.map