(this["webpackJsonpryan-portfolio"]=this["webpackJsonpryan-portfolio"]||[]).push([[0],[,,,function(e,t,n){e.exports={header:"Header_header__38LnB",nav:"Header_nav__-tz4q",nav__menu:"Header_nav__menu__2XQOZ",nav__item:"Header_nav__item__2K7FZ",nav__link:"Header_nav__link__33kV_",nav__logo:"Header_nav__logo__2cja7",nav__toggle:"Header_nav__toggle__3G9MS",active:"Header_active__2qiru",show:"Header_show__qF-2E",nav__list:"Header_nav__list__2P8yO"}},,,,,,,function(e,t,n){e.exports={home:"Home_home__3pboy",home__title:"Home_home__title__xEGWv","home__title-color":"Home_home__title-color__20KBh",home__social:"Home_home__social__3HZXN","home__social-icon":"Home_home__social-icon__vkHae",home__detail:"Home_home__detail__2HA85",home__img:"Home_home__img__1aiz6"}},function(e,t,n){e.exports={abar__data:"AbilityBar_abar__data__NDGTP",abar__icon:"AbilityBar_abar__icon__1hK03",abar__names:"AbilityBar_abar__names__1ij_y",abar__bar:"AbilityBar_abar__bar__2T6Hp"}},function(e,t,n){e.exports={footer:"Footer_footer__a5-GL",footer__title:"Footer_footer__title__6ABow",footer__social:"Footer_footer__social__17ltl",footer__icon:"Footer_footer__icon__37D-A"}},function(e,t,n){e.exports={"timeline-item__content":"TimelineItem_timeline-item__content__GzrNC","timeline-item__time":"TimelineItem_timeline-item__time__2o5mg","timeline-item__project":"TimelineItem_timeline-item__project__1yRtb","timeline-item__project-title":"TimelineItem_timeline-item__project-title__H2nIr"}},function(e,t,n){e.exports={skills__container:"Skills_skills__container__26s9h",skills__data:"Skills_skills__data__1a7gQ"}},function(e,t,n){e.exports={education:"Education_education__30hdT",education__container:"Education_education__container__xnmLs",award__container:"Education_award__container__1lCuN",award__item:"Education_award__item__10N1j"}},,function(e,t,n){e.exports={about__container:"About_about__container__3BJax",about__img:"About_about__img__1ws5B"}},function(e,t,n){e.exports={timeline:"Timeline_timeline__10BkE",timeline__container:"Timeline_timeline__container__3X-Gg",timeline__container__item:"Timeline_timeline__container__item__35oQV"}},,,,,function(e,t,n){e.exports={card__container:"Card_card__container__2qXZ1",image__container:"Card_image__container__3DI0o"}},function(e,t,n){e.exports={work__container:"Work_work__container__3-ExT"}},,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var i=n(0),a=n(1),c=n(16),o=n.n(c),r=n(7),s=(n(38),n(39),n(2)),l=n(5),_=n(6),d=n(9),u=n(8),j=n(4),b="portfolio/home/load",m={load:function(){return{type:b}}},h=function(e){return e.home},p={profilePic:"/images/profile.png",profileName:"Ryan",social:[{icon:"fas fa-envelope",content:"hitxcl@gmail.com"},{icon:"fas fa-phone",content:"21-08752367"},{icon:"fab fa-linkedin-in",content:"Ryan Xu",url:"https://www.linkedin.com/in/ryan-xu-978b29104/"},{icon:"fab fa-github",content:"OnineBX",url:"https://github.com/OnineBX"}]};var O=n(10),f=n.n(O),x=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(_.a)(n,[{key:"render",value:function(){var e=this.props.home;return console.log(this.props),Object(i.jsxs)("section",{className:"".concat(f.a.home," bd-grid"),id:"home",children:[Object(i.jsx)("div",{className:f.a.home__data,children:Object(i.jsxs)("h1",{className:f.a.home__title,children:["Hi,",Object(i.jsx)("br",{}),"I'am ",Object(i.jsx)("span",{className:f.a["home__title-color"],children:e.profileName}),Object(i.jsx)("br",{})," Software Engineer"]})}),Object(i.jsxs)("div",{className:f.a.home__detail,children:[Object(i.jsx)("div",{className:f.a.home__social,children:e.social.map((function(e,t){return Object(i.jsxs)("a",{href:e.url,className:f.a["home__social-icon"],children:[Object(i.jsx)("i",{className:e.icon}),Object(i.jsx)("span",{children:e.content})]},t)}))}),Object(i.jsx)("div",{className:f.a.home__img,children:Object(i.jsx)("img",{src:"/portfolio"+e.profilePic,alt:""})})]})]})}}]),n}(a.Component),v=Object(r.b)((function(e,t){return{home:h(e)}}),(function(e){return Object(s.a)({},Object(j.a)(m,e))}))(x),g="portfolio/header/open",k="portfolio/header/close",y="portfolio/header/select",N={openMenu:function(){return{type:g}},closeMenu:function(){return{type:k}},selectItem:function(e){return{type:y,currentIndex:e}}},w=function(e){return e.header.isOpen},C=function(e){return e.header.selectedIndex},I={isOpen:!1,selectedIndex:"#home"};var S=n(3),H=n.n(S),E=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var i=arguments.length,a=new Array(i),c=0;c<i;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).handleToggle=function(){!0===e.props.isOpen?e.props.closeMenu():e.props.openMenu()},e.handleClick=function(t){var n=t.currentTarget.getAttribute("href");e.props.selectItem(n)},e}return Object(_.a)(n,[{key:"render",value:function(){return Object(i.jsx)("header",{className:H.a.header,children:Object(i.jsxs)("nav",{className:"".concat(H.a.nav," bd-grid"),children:[Object(i.jsx)("div",{children:Object(i.jsx)("a",{className:H.a.nav__logo,children:"Ryan"})}),Object(i.jsx)("div",{className:"".concat(H.a.nav__menu," ").concat(this.props.isOpen?H.a.show:""),children:Object(i.jsxs)("ul",{className:H.a.nav__list,children:[Object(i.jsx)("li",{index:"home",className:H.a.nav__item,children:Object(i.jsx)("a",{href:"#home",onClick:this.handleClick,className:"".concat(H.a.nav__link," ").concat("#home"===this.props.selectedIndex?H.a.active:""),children:"Home"})}),Object(i.jsx)("li",{index:"about",className:H.a.nav__item,children:Object(i.jsx)("a",{href:"#about",onClick:this.handleClick,className:"".concat(H.a.nav__link," ").concat("#about"===this.props.selectedIndex?H.a.active:""),children:"About"})}),Object(i.jsx)("li",{index:"skills",className:H.a.nav__item,children:Object(i.jsx)("a",{href:"#skills",onClick:this.handleClick,className:"".concat(H.a.nav__link," ").concat("#skills"===this.props.selectedIndex?H.a.active:""),children:"Skills"})}),Object(i.jsx)("li",{index:"work",className:H.a.nav__item,children:Object(i.jsx)("a",{href:"#work",onClick:this.handleClick,className:"".concat(H.a.nav__link," ").concat("#work"===this.props.selectedIndex?H.a.active:""),children:"Work"})}),Object(i.jsx)("li",{index:"education",className:H.a.nav__item,children:Object(i.jsx)("a",{href:"#education",onClick:this.handleClick,className:"".concat(H.a.nav__link," ").concat("#education"===this.props.selectedIndex?H.a.active:""),children:"Education"})})]})}),Object(i.jsx)("div",{className:H.a.nav__toggle,onClick:this.handleToggle,children:Object(i.jsx)("i",{className:"fas fa-bars"})})]})})}}]),n}(a.Component),T=Object(r.b)((function(e,t){return{isOpen:w(e),selectedIndex:C(e)}}),(function(e){return Object(s.a)({},Object(j.a)(N,e))}))(E),A="portfolio/about/load",B={load:function(){return{type:A}}},M=function(e){return e.about},L={};var D=n(17),F=n.n(D),P=n.p+"static/media/about.5979f6e9.jpg",q=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(_.a)(n,[{key:"componentDidMount",value:function(){this.props.load()}},{key:"render",value:function(){return Object(i.jsxs)("section",{className:"".concat(F.a.about," section"),id:"about",children:[Object(i.jsx)("h2",{className:"section-title",children:"About"}),Object(i.jsxs)("div",{className:"".concat(F.a.about__container," bd-grid"),children:[Object(i.jsx)("div",{className:F.a.about__img,children:Object(i.jsx)("img",{src:P,alt:""})}),Object(i.jsxs)("div",{children:[Object(i.jsx)("h2",{className:"subtitle",children:this.props.about.subtitle}),Object(i.jsx)("p",{className:"about__text",children:this.props.about.content})]})]})]})}}]),n}(a.Component),G=Object(r.b)((function(e,t){return{about:M(e)}}),(function(e){return Object(s.a)({},Object(j.a)(B,e))}))(q),X=n(26),J=n.n(X),R=(n(40),"portfolio/skills/load"),V={load:function(){return{type:R}}},W=function(e){return e.skills},Z=[{title:"Professional Skills",content:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit optio id vero amet, alias architecto consectetur error eum eaque sit.",radar:{title:"Full Stack Ability",captions:{android:"Android",backEnd:"Back End",iOS:"iOS",uiue:"UI/UE",devops:"DevOps",frontEnd:"Front End"},details:[{data:{android:.9,backEnd:.7,iOS:.3,uiue:.3,devops:.6,frontEnd:.7},meta:{color:"blue"}}],options:{scales:5}},bar:{title:"Programing Language",details:[{title:"Java",icon:"fab fa-java",percent:"90%"},{title:"C#",icon:"fab fa-microsoft",percent:"70%"}]}},{title:"English Skills",content:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit optio id vero amet, alias architecto consectetur error eum eaque sit.",radar:{title:"Communicative Skills",captions:{gv:"grammar/vocabulary",speaking:"speaking",listening:"listening",reading:"reading",writing:"writing"},details:[{data:{gv:.82,speaking:.45,listening:.59,reading:.62,writing:.8},meta:{color:"blue"}}],options:{scales:5}},bar:{title:"Enabling Skills",details:[{title:"ral fluency",icon:"far fa-circle",percent:"46%"},{title:"rononciation",icon:"fab fa-pinterest-p",percent:"18%"},{title:"pelling",icon:"fab fa-stripe-s",percent:"78%"}]}}];var z=n(14),K=n.n(z),Q=n(11),U=n.n(Q),Y=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(_.a)(n,[{key:"render",value:function(){var e=this.props,t=e.name,n=e.icon,a=e.percentage;return Object(i.jsxs)("div",{className:U.a.abar__data,children:[Object(i.jsxs)("div",{className:U.a.abar__names,children:[Object(i.jsx)("i",{className:"bx ".concat(n," ").concat(U.a.abar__icon)}),Object(i.jsx)("span",{className:U.a.abar__name,children:t})]}),Object(i.jsx)("div",{className:U.a.abar__bar,style:{width:a}}),Object(i.jsx)("div",{children:Object(i.jsx)("span",{className:U.a.abar__percentage,children:a})})]})}}]),n}(a.Component),$=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(_.a)(n,[{key:"render",value:function(){var e=this.props.skills;return Object(i.jsxs)("section",{className:"".concat(K.a.skills," section"),id:"skills",children:[Object(i.jsx)("h2",{className:"section-title",children:"Skills"}),Object(i.jsx)("div",{className:"".concat(K.a.skills__container," bd-grid"),children:e.map((function(e,t){return Object(i.jsxs)("div",{children:[Object(i.jsx)("h2",{className:"subtitle",children:e.title}),Object(i.jsx)("p",{className:K.a.skills__text,children:e.content}),Object(i.jsxs)("div",{className:K.a.skills__data,children:[Object(i.jsxs)("div",{children:[Object(i.jsx)("h4",{children:e.radar.title}),Object(i.jsx)("div",{children:Object(i.jsx)(J.a,{captions:e.radar.captions,data:e.radar.details,options:e.radar.options})})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("h4",{children:e.bar.title}),Object(i.jsx)("div",{children:e.bar.details.map((function(e,t){return Object(i.jsx)(Y,{name:e.title,icon:e.icon,percentage:e.percent},t)}))})]})]})]},t)}))})]})}}]),n}(a.Component),ee=Object(r.b)((function(e,t){return{skills:W(e)}}),(function(e){return Object(s.a)({},Object(j.a)(V,e))}))($),te=n(23),ne=n.n(te);function ie(e){var t=e.data;return Object(i.jsxs)("div",{className:ne.a.card__container,children:[Object(i.jsx)("div",{className:ne.a.image__container,children:Object(i.jsx)("img",{src:"/portfolio"+t.icon})}),Object(i.jsx)("p",{style:{whiteSpace:"pre-wrap"},children:t.text})]})}var ae="portfolio/education/load",ce={load:function(){return{type:ae}}},oe=function(e){return e.education},re={history:[{title:"Harbin Institute of Technology",text:"1998 ~ 2002\n\nBachelor of Mechanical Engineering\n\n2002 ~ 2005\n\nMaster of Computer Science and Technology",icon:"/images/logo_hit.png"},{title:"Southern Institute of Technology",text:"2019\n\nEnglish course\n\n2020\n\nGraduate Diploma in Information Technology",icon:"/images/logo_sit.png"}],award:[{title:"Jensen Tech Award - Top Network Student",image:"/images/jensen-tech.jpg",link:""},{title:"Microsoft Certified Professional Developer",image:"/images/mcpd.jpg"}]};var se=n(15),le=n.n(se),_e=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(_.a)(n,[{key:"componentDidMount",value:function(){this.props.load()}},{key:"render",value:function(){var e=this.props.education,t=e.history,n=e.award;return Object(i.jsxs)("section",{className:"".concat(le.a.education," section"),id:"education",children:[Object(i.jsx)("h2",{className:"section-title",children:"Education"}),Object(i.jsxs)("div",{className:"bd-grid",children:[Object(i.jsx)("h2",{className:"subtitle",children:"History"}),Object(i.jsx)("div",{className:le.a.education__container,children:t.map((function(e,t){return Object(i.jsx)(ie,{data:e},t)}))}),Object(i.jsx)("h2",{className:"subtitle",children:"Award"}),Object(i.jsx)("div",{className:le.a.award__container,children:n.map((function(e,t){return Object(i.jsxs)("div",{className:le.a.award__item,children:[Object(i.jsx)("img",{src:"/portfolio"+e.image}),Object(i.jsx)("h4",{children:e.title})]})}))})]})]})}}]),n}(a.Component),de=Object(r.b)((function(e,t){return{education:oe(e)}}),(function(e){return Object(s.a)({},Object(j.a)(ce,e))}))(_e),ue="portfolio/work/load",je={load:function(){return{type:ue}}},be=function(e){return e.work},me={data:[{title:"Volunteer",company:"Aurora College",time:"2020",text:"Assist in Code Dojo course for teenagers"},{title:"Junior Developer",company:"Some Startup Companies",time:"2010",icon:"/images/logo_hit.png",text:"C# ASP.NET SqlServer Linq Sharepoint, Android",projects:[{icon:"bx bxl-github",title:"Material MIS",link:"www.github.com"},{title:"Ordering System",link:"www.github.com"}]},{title:"Senior Developer",company:"CYOU",time:"2013",icon:"/images/logo_hit.png",text:"1998 ~ 2002\n\nBachelor of Mechanical Engineering\n\n2002 ~ 2005\n\nMaster of Computer Science and Technology",projects:[{icon:"bx bxl-play-store",title:"C-Launcher",link:"www.baidu.com"}]}]};var he=n(13),pe=n.n(he);function Oe(e){var t=e.data;return Object(i.jsxs)("div",{className:pe.a["timeline-item"],children:[Object(i.jsx)("h4",{className:pe.a["timeline-item__time"],children:t.time}),Object(i.jsxs)("div",{className:pe.a["timeline-item__content"],children:[Object(i.jsx)("h3",{children:t.company}),Object(i.jsx)("h4",{children:Object(i.jsx)("i",{children:t.title})}),Object(i.jsx)("p",{children:t.text}),t.projects&&Object(i.jsxs)("div",{children:[Object(i.jsx)("div",{className:pe.a["timeline-item__project-title"],children:"Projects:"}),Object(i.jsx)("ul",{children:t.projects.map((function(e,t){return Object(i.jsx)("li",{className:pe.a["timeline-item__project"],children:Object(i.jsxs)("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",children:[e.title,Object(i.jsx)("i",{className:e.icon})]})})}))})]})]})]})}var fe=n(18),xe=n.n(fe);function ve(e){var t=e.data;return Object(i.jsx)("div",{className:xe.a.timeline,children:Object(i.jsx)("ul",{className:xe.a.timeline__container,children:t.map((function(e,t){return Object(i.jsx)("li",{className:xe.a.timeline__container__item,children:Object(i.jsx)(Oe,{data:e},t)})}))})})}var ge=n(24),ke=n.n(ge),ye=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(_.a)(n,[{key:"componentDidMount",value:function(){this.props.load()}},{key:"render",value:function(){var e=this.props.work;return console.log(this.props),Object(i.jsxs)("section",{className:"".concat(ke.a.work," section"),id:"work",children:[Object(i.jsx)("h2",{className:"section-title",children:"Work"}),Object(i.jsx)("div",{className:"".concat(ke.a.work__container," bd-grid"),children:Object(i.jsx)(ve,{data:e.data})})]})}}]),n}(a.Component),Ne=Object(r.b)((function(e,t){return{work:be(e)}}),(function(e){return Object(s.a)({},Object(j.a)(je,e))}))(ye),we=n(12),Ce=n.n(we);function Ie(){return Object(i.jsxs)("footer",{class:Ce.a.footer,children:[Object(i.jsx)("p",{class:Ce.a.footer__title,children:"Ryan"}),Object(i.jsxs)("div",{class:Ce.a.footer__social,children:[Object(i.jsx)("a",{href:"#",class:Ce.a.footer__icon,children:Object(i.jsx)("i",{class:"bx bxl-facebook"})}),Object(i.jsx)("a",{href:"#",class:Ce.a.footer__icon,children:Object(i.jsx)("i",{class:"bx bxl-instagram"})}),Object(i.jsx)("a",{href:"#",class:Ce.a.footer__icon,children:Object(i.jsx)("i",{class:"bx bxl-twitter"})})]}),Object(i.jsx)("p",{children:"\xa9 2020 copyright all right reserved"})]})}var Se=function(){return Object(i.jsxs)("div",{children:[Object(i.jsx)(T,{}),Object(i.jsx)(v,{}),Object(i.jsx)(G,{}),Object(i.jsx)(ee,{}),Object(i.jsx)(de,{}),Object(i.jsx)(Ne,{}),Object(i.jsx)(Ie,{})]})},He=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,42)).then((function(t){var n=t.getCLS,i=t.getFID,a=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),i(e),a(e),c(e),o(e)}))},Ee=Object(j.b)({home:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case b:return Object(s.a)({},e);default:return e}},about:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case A:return Object.assign({},e,{subtitle:"I'm Ryan",content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."});default:return e}},header:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case g:return Object(s.a)(Object(s.a)({},e),{},{isOpen:!0});case k:return Object(s.a)(Object(s.a)({},e),{},{isOpen:!1});case y:return Object(s.a)(Object(s.a)({},e),{},{selectedIndex:t.currentIndex,isOpen:!1});default:return e}},education:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case ae:return Object(s.a)({},e);default:return e}},work:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case ue:return Object(s.a)({},e);default:return e}},skills:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case R:return Object(s.a)({},e);default:return e}}}),Te=Object(j.c)(Ee);o.a.render(Object(i.jsx)(r.a,{store:Te,children:Object(i.jsx)(Se,{})}),document.getElementById("root")),He()}],[[41,1,2]]]);
//# sourceMappingURL=main.034bdc18.chunk.js.map