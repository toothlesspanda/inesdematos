(this.webpackJsonpinesmatos=this.webpackJsonpinesmatos||[]).push([[0],{55:function(e,t,n){},56:function(e,t,n){},63:function(e,t,n){"use strict";n.r(t);var s=n(0),c=n.n(s),a=n(17),r=n.n(a),i=(n(55),n(49)),o=n(4),j=(n(56),n(5)),l=n(14),b=n(12),d=n(6),h=n(27),p=n(66),u=n(67),x=n(68),O=n(73),m=n(74),f=n(69),g=n(70),v=n(71),y=n(72),k=n(1),w=function(e){var t=e.title,n=e.children;return Object(k.jsxs)("div",{className:"",children:[Object(k.jsx)(p.a,{style:{width:"100%",margin:"0 auto"},children:Object(k.jsxs)(u.a,{tyle:{width:"100%"},children:[Object(k.jsx)(x.a,{children:Object(k.jsx)("div",{style:{fontWeight:700,color:"white",padding:"16px 0"},children:"In\xeas de Matos".toUpperCase()})}),Object(k.jsx)(x.a,{children:Object(k.jsx)(O.a,{bg:"dark",variant:"dark",style:{justifyContent:"center"},children:Object(k.jsxs)(m.a,{children:[Object(k.jsx)(m.a.Link,{className:"Home"===t?"active":"",href:"/",children:"Home"}),Object(k.jsx)(m.a.Link,{className:"About"===t?"active":"",href:"/about",children:"About me"})]})})})]})}),Object(k.jsx)("div",{className:"",children:Object(k.jsxs)("div",{className:"",children:[" ",n," "]})}),Object(k.jsx)("div",{style:{width:"100%",position:"absolute",bottom:"0%",display:"contents"},children:Object(k.jsx)(p.a,{style:{justifyContent:"center",background:"rgba(33,37,41)",textAlign:"center"},children:Object(k.jsxs)(u.a,{xs:1,md:4,children:[Object(k.jsx)(x.a,{children:Object(k.jsxs)("a",{target:"__blank",className:"h6",href:"https://www.linkedin.com/in/inesdematos/",children:[Object(k.jsx)(f.a,{className:"h4 me-3"}),Object(k.jsx)("span",{children:"@inesdematos"})]})}),Object(k.jsx)(x.a,{children:Object(k.jsxs)("a",{target:"__blank",className:"h6",href:"https://inesdematos.medium.com/",children:[Object(k.jsx)(g.a,{className:"h4 me-3"}),Object(k.jsx)("span",{children:"@inesdematos"})]})}),Object(k.jsx)(x.a,{children:Object(k.jsxs)("a",{target:"__blank",className:"h6",href:"https://github.com/toothlesspanda",children:[Object(k.jsx)(v.a,{className:"h4 me-3"}),Object(k.jsx)("span",{children:"@toothlesspanda"})]})}),Object(k.jsx)(x.a,{children:Object(k.jsxs)("a",{target:"__blank",className:"h6",href:"https://www.instagram.com/nenas.phot/",children:[Object(k.jsx)(y.a,{className:"h4 me-3"}),Object(k.jsx)("span",{children:"@nenas.phot"})]})})]})})})]})},S=function(){var e=Object(b.a)(Object(j.a)().mark((function e(){var t;return Object(j.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.rss2json.com/v1/api.json?"+new URLSearchParams({rss_url:"https://medium.com/feed/@inesdematos",api_key:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).API_RSS_API_KEY})).catch((function(e){return console.log("ERRO: ",e)})).then(function(){var e=Object(b.a)(Object(j.a)().mark((function e(t){var n;return Object(j.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.json();case 2:return n=e.sent,e.abrupt("return",n.items);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 3:return t=e.sent,e.abrupt("return",t);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:return e.abrupt("return");case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),_=function(){var e=Object(b.a)(Object(j.a)().mark((function e(){var t,n;return Object(j.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://rss.app/feeds/v1.1/WJhKM8fDWIsTJEkE.json");case 3:return t=e.sent,e.next=6,t.json();case 6:return n=e.sent.items,e.abrupt("return",n);case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:return e.abrupt("return");case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),I=function(e){Object(h.a)(e);var t=Object(s.useState)([]),n=Object(d.a)(t,2),c=n[0],a=n[1],r=Object(s.useState)([]),i=Object(d.a)(r,2),o=i[0],u=i[1],x=Object(s.useState)(!1),O=Object(d.a)(x,2),m=(O[0],O[1],Object.freeze({MEDIUM:{name:"Medium",icon:""},INSTA:{name:"Instagram",icon:""}}));return Object(s.useEffect)((function(){function e(){return(e=Object(b.a)(Object(j.a)().mark((function e(){var t,n,s,r,i,b,d;return Object(j.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("4. Fetching medium data "),e.next=3,S();case 3:t=e.sent,n=[],s=Object(j.a)().mark((function e(){var s;return Object(j.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s={title:t[r].title,image:t[r].thumbnail,type:m.MEDIUM,link:t[r].link,date:t[r].pubDate},e.next=3,c.find((function(e){return e.link===s.link}));case 3:if(e.sent){e.next=5;break}n.push(s);case 5:case"end":return e.stop()}}),e)})),e.t0=Object(j.a)().keys(t);case 7:if((e.t1=e.t0()).done){e.next=12;break}return r=e.t1.value,e.delegateYield(s(),"t2",10);case 10:e.next=7;break;case 12:return e.next=14,_();case 14:i=e.sent,b=Object(j.a)().mark((function e(){var t;return Object(j.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t={title:i[d].title.split("\n.\n.")[0],image:i[d].image,type:m.INSTA,link:i[d].url,date:i[d].date_published},c.find((function(e){return e.link===t.link}))||n.push(t);case 2:case"end":return e.stop()}}),e)})),e.t3=Object(j.a)().keys(i);case 17:if((e.t4=e.t3()).done){e.next=22;break}return d=e.t4.value,e.delegateYield(b(),"t5",20);case 20:e.next=17;break;case 22:n.length>0&&a([].concat(Object(l.a)(c),n)),u([].concat(Object(l.a)(o),["insta"])),n.sort((function(e,t){return new Date(t.date)-new Date(e.date)})),a(n);case 26:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(k.jsx)(w,{title:"Home",children:Object(k.jsx)(p.a,{style:{height:"600px",maxWidth:"100%",background:"rgba(0, 0, 0, 0.3)",padding:"22px",marginTop:"50px",paddingTop:"50px",marginBottom:"50px"},children:Object(k.jsx)("iframe",{title:"rss_Feed",style:{width:"100%",height:"100%"},src:"https://rss.app/embed/v1/wall/_6HMi8tUjLnL16WW1",frameborder:"0"})})})},C=n(75),N=function(e){return Object(h.a)(e),Object(k.jsx)(w,{title:"About",children:Object(k.jsx)(p.a,{style:{height:"87%",top:"7%",color:"white",maxWidth:"100%",padding:"20px",marginTop:"25px"},children:Object(k.jsxs)(u.a,{style:{height:"100%"},children:[Object(k.jsx)(x.a,{lg:3,className:"my-auto mx-auto",children:Object(k.jsxs)(C.a,{style:{position:"relative"},children:[Object(k.jsx)(C.a.Image,{style:{border:"2px solid rgba(250,208,55,1)",position:"relative"},roundedCircle:!0,src:"profile.jpeg"}),Object(k.jsx)("div",{style:{borderRadius:"50%",zIndex:2,position:"absolute",top:0,left:0,right:0,bottom:"7px",background:"linear-gradient(rgba(0, 0, 0, 0) 18%, rgb(0, 0, 0) 67.81%, rgb(0, 0, 0) 63%)",opacity:"0.6"}})]})}),Object(k.jsxs)(x.a,{style:{background:"rgba(0,0,0,0.3)",padding:"50px"},lg:8,className:"my-auto",children:[Object(k.jsx)(u.a,{children:Object(k.jsxs)(x.a,{children:[Object(k.jsx)("h3",{children:"Hi!"}),Object(k.jsxs)("p",{children:["I am a portuguese gal passionate about her work. I love topics around backend, good practices, developer experience, leadership and people's behaviour.",Object(k.jsx)("br",{}),Object(k.jsx)("br",{}),"I am a foodie and a sleeper. For hobbies I like to photograph, write, draw and explore new sports.",Object(k.jsx)("br",{}),Object(k.jsx)("br",{}),"For tv shows I am obssessed with sci-fi content and I love to listen EDM and Indie Rock music."]})]})}),Object(k.jsx)("div",{style:{width:"100%",height:"1px",margin:"25px 0",background:"#FAD02C"}}),Object(k.jsxs)(u.a,{children:[Object(k.jsxs)(x.a,{children:[Object(k.jsx)("h2",{children:"Experience"}),Object(k.jsxs)("span",{children:[Object(k.jsx)("span",{style:{color:"#FAD02C"},children:"\u2022"})," Software Developer @ Web Summit"," "]}),Object(k.jsx)("br",{}),Object(k.jsxs)("span",{children:[Object(k.jsx)("span",{style:{color:"#FAD02C"},children:"\u2022"})," Collaborator @ As Raparigas do C\xf3digo"]})," ",Object(k.jsx)("br",{}),Object(k.jsxs)("span",{children:[Object(k.jsx)("span",{style:{color:"grey"},children:"\u2022"})," Software Developer @ Talkdesk"]}),Object(k.jsx)("br",{}),Object(k.jsxs)("span",{children:[Object(k.jsx)("span",{style:{color:"grey"},children:"\u2022"})," Consultant @ everis"]}),Object(k.jsx)("br",{}),Object(k.jsxs)("span",{children:[Object(k.jsx)("span",{style:{color:"grey"},children:"\u2022"})," Junior Researcher @ Lasige - FCUL"]}),Object(k.jsx)("div",{style:{width:"100%",height:"1px",margin:"25px 0",background:"#FAD02C"}}),Object(k.jsx)("h2",{children:"Education"}),Object(k.jsxs)("span",{children:[Object(k.jsx)("span",{style:{color:"grey"},children:"\u2022"})," Masters in Information @ FCUL, Portugal"]}),Object(k.jsx)("br",{}),Object(k.jsxs)("span",{children:[Object(k.jsx)("span",{style:{color:"grey"},children:"\u2022"})," BSc in Information Technology @ FCUL, Portugal"]})]}),Object(k.jsxs)(x.a,{children:[Object(k.jsx)("h2",{children:"Publications"}),Object(k.jsxs)("p",{children:[Object(k.jsx)("a",{href:"https://repositorio.ul.pt/handle/10451/30934",children:"Semantic content analysis supporting web accessibility evaluation"}),Object(k.jsx)("br",{}),"2018 - 15th International Web for All Conference (paper winner)"]}),Object(k.jsxs)("p",{children:[Object(k.jsx)("a",{href:"https://repositorio.ul.pt/handle/10451/30934",children:"Screw-semantic content analysis for repair and evaluation of web accessibility"}),Object(k.jsx)("br",{}),"2017 - MSc Thesis"]}),Object(k.jsxs)("p",{children:[Object(k.jsx)("a",{href:"https://repositorio.ul.pt/handle/10451/30934",children:"Development technologies impact in web accessibility"}),Object(k.jsx)("br",{}),"2016 - 13th International Web for All Conference"]})]})]})]})]})})})},D=function(e){return Object(h.a)(e),Object(k.jsx)(w,{title:"Ooppsss!"})};var E=function(){return Object(k.jsx)(i.a,{children:Object(k.jsxs)(o.c,{children:[Object(k.jsx)(o.a,{path:"/",element:Object(k.jsx)(I,{})}),Object(k.jsx)(o.a,{path:"about",element:Object(k.jsx)(N,{})}),Object(k.jsx)(o.a,{path:"*",element:Object(k.jsx)(D,{})})]})})};r.a.render(Object(k.jsx)(c.a.StrictMode,{children:Object(k.jsx)(E,{})}),document.getElementById("root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.59fc4989.chunk.js.map