(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{22:function(e,a,t){e.exports=t(41)},27:function(e,a,t){},28:function(e,a,t){},41:function(e,a,t){"use strict";t.r(a);var l=t(1),n=t.n(l),c=t(9),r=t.n(c),s=(t(27),t(28),t(4)),m=t(20),o=t(5),i="sukhman2807@gmail.com",d=t(6),b=t(21);function g(){var e=Object(l.useState)(!1),a=Object(s.a)(e,2),t=a[0],c=a[1],r=Object(l.useState)(!1),g=Object(s.a)(r,2),h=g[0],u=g[1];return Object(l.useEffect)((function(){c(!0),setTimeout((function(){u(!0)}),1300)}),[]),n.a.createElement("div",{className:"banner"},n.a.createElement(m.a,null),n.a.createElement("div",{className:"background"}),n.a.createElement("div",{className:"container-fluid banner-content"},n.a.createElement("div",{className:"name-wrapper"},n.a.createElement("h1",{className:"name fade-left-sm ".concat(t?"show":"")},"Sukhmandeep Kaur".toUpperCase()),n.a.createElement("p",{className:"section-description fade-right-sm ".concat(t?"show":"")},"Developer")),n.a.createElement("div",{className:"delay-sm ".concat(h?"show":"")},n.a.createElement("a",{className:"btn btn-dark btn-main d-none d-sm-block",href:"/sukhman-kaur.github.io/Sukhman-Resume.docx",download:!0}," Download Resume"),n.a.createElement(o.Link,{className:"btn btn-secondary d-none d-sm-block",to:"projects",smooth:!0,duration:300},"View Projects"),n.a.createElement("div",{className:"social-media-buttons-group"},n.a.createElement("a",{href:"https://github.com/Sukhman-Kaur",target:"_blank",rel:"noopener noreferrer",className:"svg-link",title:"Github","data-tip":"Github"},n.a.createElement(b.a,{style:E.link})),n.a.createElement("a",{href:"https://www.linkedin.com/in/sukhmandeep-kaur/",target:"_blank",rel:"noopener noreferrer",className:"svg-link",title:"LinkedIn","data-tip":"LinkedIn"},n.a.createElement(d.c,{style:E.link})),n.a.createElement("a",{href:"mailto:"+i,className:"svg-link",title:"Email","data-tip":"Email"},n.a.createElement(d.a,{style:E.link})),n.a.createElement("a",{href:"https://twitter.com/Sukhman2807",target:"_blank",rel:"noopener noreferrer",className:"svg-link",title:"Twitter","data-tip":"Twitter"},n.a.createElement(d.d,{style:E.link}))))))}var E={link:{color:"whitesmoke"}};function h(){return n.a.createElement("div",null,n.a.createElement("div",{className:"line"}),n.a.createElement("div",{className:"footer"},"\xa9 ",(new Date).getFullYear()," Built with ",n.a.createElement(d.b,{style:{color:"red"}})," by Sukhman"))}var u=t(3),p=t.n(u);function k(){return n.a.createElement("div",{className:"contact container-fluid section",name:"contact"},n.a.createElement(p.a,{bottom:!0},n.a.createElement("h2",{className:"section-header"},"Let's Talk!")),n.a.createElement(p.a,{bottom:!0},n.a.createElement("br",null),"Work inquiries, questions or something else?",n.a.createElement("br",null),n.a.createElement("p",null,"Hit me up at ",n.a.createElement("a",{href:"mailto:"+i,className:"card-link"},i))))}function N(){var e=Object(l.useState)([]),a=Object(s.a)(e,2),t=a[0],c=a[1];return Object(l.useEffect)((function(){fetch("https://api.github.com/users/Sukhman-Kaur/repos").then((function(e){return e.json()})).then(c)}),[]),n.a.createElement("div",{className:"projects container-fluid section",name:"projects"},n.a.createElement(p.a,{bottom:!0},n.a.createElement("h2",{className:"section-header"},"PROJECTS")),n.a.createElement("div",{className:"section-body section-width top-bot-border-sm"},t.map((function(e,a){return n.a.createElement(p.a,{bottom:!0,key:a},n.a.createElement("div",{target:"_blank",rel:"noopener noreferrer",className:"card-wrapper"},n.a.createElement("div",{className:"card text-white background-dark-lg mb-3"},n.a.createElement("img",{alt:"",className:"card-img-top object-top d-none d-md-block",src:"https://raw.githubusercontent.com/".concat("Sukhman-Kaur","/").concat(e.name,"/").concat(e.default_branch,"/").concat(e.name,".png")}),n.a.createElement("div",{className:"card-body"},n.a.createElement("div",null,n.a.createElement("h5",{className:"card-title"},e.name),n.a.createElement("p",{className:"card-text remarks"},e.description)),n.a.createElement("div",{className:"label-wrapper"},e.topics.map((function(e,a){return n.a.createElement("span",{key:a,className:"label"}," ",e)}))),n.a.createElement("a",{href:e.html_url,target:"_blank",rel:"noopener noreferrer",className:"card-link ".concat(e.html_url?"":"disabled")},"Code")))))}))))}function f(){var e=Object(l.useState)(!0),a=Object(s.a)(e,2),t=a[0],c=a[1],r=function(){window.scrollY>0&&t?c(!1):window.scrollY<=0&&c(!0)};return Object(l.useLayoutEffect)((function(){window.innerWidth>=576&&window.addEventListener("scroll",r)})),n.a.createElement("div",{className:"nav d-flex ".concat(t?"":"opaque")},n.a.createElement("div",{className:"d-none d-sm-block logo ".concat(t?"":"show")},"SUKHMAN"),n.a.createElement("a",{className:"card-link d-sm-none",href:"/Sukhman-Resume.docx",download:!0},"Resume"),n.a.createElement(o.Link,{to:"projects",smooth:!0,duration:300,className:"card-link",offset:-120},"Projects"),n.a.createElement(o.Link,{to:"skills",smooth:!0,duration:300,className:"card-link",offset:-80},"Skills"),n.a.createElement(o.Link,{to:"work",smooth:!0,duration:300,className:"card-link",offset:-40},"Work"),n.a.createElement(o.Link,{to:"contact",smooth:!0,duration:300,className:"card-link"},"Contact"))}function v(){return n.a.createElement("div",{className:"skills container-fluid section",name:"skills"},n.a.createElement(p.a,{bottom:!0},n.a.createElement("h2",{className:"section-header"},"SKILLS")),n.a.createElement("div",{className:"section-body section-width"},n.a.createElement("span",{className:"badge badge-pill badge-light skill"},"Java"),n.a.createElement("span",{className:"badge badge-pill badge-light skill"},"Python"),n.a.createElement("span",{className:"badge badge-pill badge-light skill"},"C++"),n.a.createElement("span",{className:"badge badge-pill badge-light skill"},"HTML"),n.a.createElement("span",{className:"badge badge-pill badge-light skill"},"CSS"),n.a.createElement("span",{className:"badge badge-pill badge-light skill"},"Bootstrap"),n.a.createElement("span",{className:"badge badge-pill badge-light skill"},"PHP"),n.a.createElement("span",{className:"badge badge-pill badge-light skill"},"Javascript"),n.a.createElement("span",{className:"badge badge-pill badge-light skill"},"Laravel"),n.a.createElement("span",{className:"badge badge-pill badge-light skill"},"MySQL"),n.a.createElement("span",{className:"badge badge-pill badge-light skill"},"SQL"),n.a.createElement("span",{className:"badge badge-pill badge-light skill"},"SQLite"),n.a.createElement("span",{className:"badge badge-pill badge-light skill"},"MySQL"),n.a.createElement("span",{className:"badge badge-pill badge-light skill"},"SQL"),n.a.createElement("span",{className:"badge badge-pill badge-light skill"},"Git")))}function w(){return n.a.createElement("div",{className:"work container-fluid section",name:"work"},n.a.createElement(p.a,{bottom:!0},n.a.createElement("h2",{className:"section-header"},"WORK EXPERIENCE")),n.a.createElement("div",{className:"section-body section-width top-bot-border-xs"},n.a.createElement(p.a,{bottom:!0},n.a.createElement("a",{href:"https://library.rrc.ca/tutoring/peer_tutoring",target:"_blank",rel:"noopener noreferrer",className:"long-card"},n.a.createElement("div",{className:"long-card-body"},n.a.createElement("h5",{className:"title"},"Peer Tutor - Red River College Polytechnic"),n.a.createElement("p",{className:"remarks"},"July 2021 - Present"),n.a.createElement("span",{className:"badge badge-light tech"},"Programming"),n.a.createElement("span",{className:"badge badge-light tech"},"Statistics"),n.a.createElement("span",{className:"badge badge-light tech"},"Python"))))),n.a.createElement("div",{className:"section-body section-width top-bot-border-xs"},n.a.createElement(p.a,{bottom:!0},n.a.createElement("a",{href:"https://drive.google.com/file/d/1j1DNI3cz62S5fNF2F4_cFQM_ha8EYAK3/view?usp=sharing",target:"_blank",rel:"noopener noreferrer",className:"long-card"},n.a.createElement("div",{className:"long-card-body"},n.a.createElement("h5",{className:"title"},"Back-end developer - Internship"),n.a.createElement("p",{className:"remarks"},"Aug 2020- Oct 2020"),n.a.createElement("span",{className:"badge badge-light tech"},"Laravel"),n.a.createElement("span",{className:"badge badge-light tech"},"PWA"),n.a.createElement("span",{className:"badge badge-light tech"},"Mail integration"))))),n.a.createElement("div",{className:"section-body section-width top-bot-border-xs"},n.a.createElement(p.a,{bottom:!0},n.a.createElement("a",{href:"https://drive.google.com/file/d/1zZBbQdJZkW2ld2RrBiag3xsJO8mtF6Xd/view?usp=sharing",target:"_blank",rel:"noopener noreferrer",className:"long-card"},n.a.createElement("div",{className:"long-card-body"},n.a.createElement("h5",{className:"title"},"Ecommerce back-end developer"),n.a.createElement("p",{className:"remarks"},"Aug 2020- Dec 2020"),n.a.createElement("span",{className:"badge badge-light tech"},"Laravel"),n.a.createElement("span",{className:"badge badge-light tech"},"Bagisto"),n.a.createElement("span",{className:"badge badge-light tech"},"Rest API"))))))}var y=function(){return n.a.createElement("div",{className:"App body"},n.a.createElement(g,null),n.a.createElement(N,null),n.a.createElement(v,null),n.a.createElement(w,null),n.a.createElement(k,null),n.a.createElement(h,null),n.a.createElement(f,null))};t(40);r.a.render(n.a.createElement(n.a.Fragment,null,n.a.createElement(y,null)),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.cf08b133.chunk.js.map