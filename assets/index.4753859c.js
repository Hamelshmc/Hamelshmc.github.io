import{r as s,c as a,a as e,b as l,d as i,o as c,h as n,e as t}from"./vendor.71832224.js";var o="/assets/perfil.5863b7fd.jpg";const r={setup(){const a=s(null),e=()=>{document.body.classList.remove("scale-cv")},l={margin:0,filename:"hamiltonmercadocuellarCV.pdf",pagebreak:{mode:["css","legacy"]},enableLinks:!0,image:{type:"jpeg",quality:.98},html2canvas:{scale:2},jsPDF:{unit:"mm",format:"a4",orientation:"portrait"}};return{exportToPDF:async()=>{document.body.classList.add("scale-cv"),n(a.value,l),setTimeout(e,5e3)},pdfArea:a,changeTheme:()=>{document.body.classList.toggle("dark-theme")}}}},_={id:"content"},d=l('<header id="header" class="l-header"><nav class="nav bd-container"><a href="#" class="nav__logo">Hamilton </a><div id="nav-menu" class="nav__menu"><ul class="nav__list"><li class="nav__item"><a href="#home" class="nav__link"><i class="bx bx-home nav__icon"></i>INICIO </a></li><li class="nav__item"><a href="#profile" class="nav__link"><i class="bx bx-user nav__icon"></i>PERFIL </a></li><li class="nav__item"><a href="#education" class="nav__link"><i class="bx bx-book nav__icon"></i>EDUCACIÓN </a></li><li class="nav__item"><a href="#skills" class="nav__link"><i class="bx bx-receipt nav__icon"></i>SKILLS </a></li><li class="nav__item"><a href="#experience" class="nav__link"><i class="bx bx-briefcase-alt nav__icon"></i>EXPERIENCIA </a></li><li class="nav__item"><a href="#certificates" class="nav__link"><i class="bx bx-award nav__icon"></i>CURSOS </a></li></ul></div><div id="nav-toggle" class="nav__toggle"><i class="bx bx-grid-alt"></i></div></nav></header>',1),g={class:"l-main bd-container"},m={id:"area-cv",ref:"pdfArea",class:"resume"},u={class:"resume__left"},p={id:"home",class:"home"},v=e("div",{class:"home__container section bd-grid"},[e("div",{class:"home__data"},[e("picture",null,[e("source",{type:"image/wp2",srcset:"/assets/perfil.5863b7fd.jpg"}),e("source",{type:"image/webp",srcset:"/assets/perfil.5863b7fd.jpg"}),e("img",{src:o,loading:"lazy",alt:"perfil",class:"home__img"})]),e("h1",{class:"home__title"},"HAMILTON MERCADO CUELLAR"),e("h3",{class:"home__profession"},"Developer"),e("div",null,[e("a",{download:"",href:"assets/pdf/hamiltonmercadocuellarCV.pdf",class:"home__button-movil"},"Descargar")])])],-1),h=e("div",{class:"home__address bd-grid"},[e("span",{class:"home__information"},[e("i",{class:"bx bx-map home__icon"}),i("A Coruña - España ")]),e("span",{class:"home__information"},[e("a",{href:"mailto:hamiltonmercadocuellar@gmail.com",class:"home__link"},[e("i",{class:"bx bx-envelope home__icon"}),i(" hamiltonmercadocuellar@gmail.com ")])])],-1),b=l('<section class="social section"><h2 class="section-title">SOCIAL</h2><div class="social__container bd-grid"><a href="https://www.linkedin.com/in/hamelhmc/" target="_blank" rel="noopener noreferrer" class="social__link"><i class="bx bxl-linkedin-square social__icon"></i>@hamelhmc </a><a href="https://github.com/Hamelshmc" target="_blank" rel="noopener noreferrer" class="social__link"><i class="bx bxl-github social__icon"></i>@hamelshmc </a></div></section><section id="profile" class="profile section"><h2 class="section-title">PERFIL</h2><p class="profile__description"> Hola, soy Hamilton, desarrollador. Aprendiendo cada día algo nuevo e intentado dar lo mejor de mí. </p></section><section id="education" class="education section"><h2 class="section-title">EDUCACIÓN</h2><div class="education__container bg-grid"><div class="education__content"><div class="education__time"><span class="education__rounder"></span><span class="education__line"></span></div><div class="education__data bd-grid"><h3 class="education__title">FP DUAL Desarrollo de Aplicaciones WEB</h3><span class="education__studies">IES Fernando Wirtz Suárez </span><span class="education__year">2018 - 2020</span></div></div><div class="education__content"><div class="education__time"><span class="education__rounder"></span></div><div class="education__data bd-grid"><h3 class="education__title">FP Sistemas Microinformáticos y Redes</h3><span class="education__studies">IES Fernando Wirtz Suárez</span><span class="education__year">2016 - 2018</span></div></div></div></section><section id="skills" class="skills section"><h2 class="section-title">Soft skills</h2><div class="skills_content bd-grid"><ul class="skills_data"><li class="skills__name"> Desarrollo centrado en implementar la experiencia de usuario UX/ UI </li><li class="skills__name"><span class="skills__circle"></span> Desarrollo siguiendo metodologías Ágiles </li></ul><ul class="skills_data"><li class="skills__name"><span class="skills__circle"></span> Aprendizaje continuo </li><li class="skills__name"><span class="skills__circle"></span> Clean Code</li><li class="skills__name"><span class="skills__circle"></span>Compromiso</li><li class="skills__name"><span class="skills__circle"></span>Trabajo en equipo</li><li class="skills__name"><span class="skills__circle"></span> Pair Programming</li></ul></div></section>',4),f=e("div",{class:"resume__right"},[e("section",{id:"experience",class:"experience section"},[e("h2",{class:"section-title"},"EXPERIENCIA"),e("div",{class:"experience__container bd-grid"},[e("div",{class:"experience__content"},[e("div",{class:"experience__time"},[e("span",{class:"experience__rounder"}),e("span",{class:"experience__line"})]),e("div",{class:"experience__data bd-grid"},[e("h3",{class:"experience__title"},"Desarrollador/a de aplicaciones web Junior"),e("span",{class:"experience__company"},"03-2020 a 09-2020 | Indra Sistemas S.A "),e("span",{class:"experience__description"}," Angular - REST APIs con .NET / C# - Metodología ágil SCRUM - GitLab - Visual Studio Code - Visual code community - SQL Management Studio - Chrome DevTools - Microsoft Teams - SASS ")])]),e("div",{class:"experience__content"},[e("div",{class:"experience__time"},[e("span",{class:"experience__rounder"})]),e("div",{class:"experience__data bd-grid"},[e("h3",{class:"experience__title"},"Desarrollador/a de aplicaciones web Junior"),e("span",{class:"experience__company"},"03-2019 a 09-2019 | Indra Sistemas S.A ")])])])]),e("section",{id:"certificates",class:"certificate section"},[e("h2",{class:"section-title"},"CURSOS"),e("div",{class:"certificate__container bd-grid"},[e("div",{class:"certificate__content"},[e("h3",{class:"certificate__title"},"BOOTCAMP HACKABOSS"),e("p",{class:"certificate__description"}," Curso Intensivo de Programación Full Stack. Conocimientos adquiridos: Javascript (ES6) - SQL - HTML - CSS - GIT - Node.js - Pair programming - Metodologias Ágiles - GIT introducción y avanzado - Marca Personal ")])])]),e("section",{class:"languages section"},[e("h2",{class:"section-title"},"Hard skills"),e("div",{class:"languages_content bd-grid"},[e("ul",{class:"languages_data"},[e("li",{class:"languages__name"},[e("img",{alt:"javascript",loading:"lazy",src:"/assets/javascript.3691c274.svg",class:"languages__circle"}),i("JavaScript ")]),e("li",{class:"languages__name"},[e("img",{alt:"html",loading:"lazy",src:"/assets/html-5.d4dc8538.svg",class:"languages__circle"}),i(" HTML ")]),e("li",{class:"languages__name"},[e("img",{alt:"css",loading:"lazy",src:"/assets/css-3.1d9e56c8.svg",class:"languages__circle"}),i(" CSS ")])]),e("ul",{class:"languages_data"},[e("li",{class:"languages__name"},[e("img",{alt:"angular",loading:"lazy",src:"/assets/angular-icon.5ca504e3.svg",class:"languages__circle"}),i("Angular ")]),e("li",{class:"languages__name"},[e("img",{alt:"reactjs",loading:"lazy",src:"/assets/react.5e92e61d.svg",class:"languages__circle"}),i("ReactJS ")]),e("li",{class:"languages__name"},[e("img",{alt:"springboot",loading:"lazy",src:"/assets/spring-icon.ad7fd54e.svg",class:"languages__circle"}),i("Spring Boot ")])]),e("ul",{class:"languages_data"},[e("li",{class:"languages__name"},[e("img",{alt:".NET",loading:"lazy",src:"/assets/dotnet.70727047.svg",class:"languages__circle"}),i(" .NET | C# ")]),e("li",{class:"languages__name"},[e("img",{alt:"nodejs",loading:"lazy",src:"/assets/nodejs-icon.e3af091e.svg",class:"languages__circle"}),i(" NodeJS ")]),e("li",{class:"languages__name"},[e("img",{alt:"Java",loading:"lazy",src:"/assets/java.36ebe401.svg",class:"languages__circle"}),i(" Java ")])]),e("ul",{class:"languages_data"},[e("li",{class:"languages__name"},[e("img",{alt:"Angular",loading:"lazy",src:"/assets/mysql.4498ab27.svg",class:"languages__circle"}),i(" SQL ")]),e("li",{class:"languages__name"},[e("img",{alt:"Angular",loading:"lazy",src:"/assets/mongodb.ef34064c.svg",class:"languages__circle"}),i(" Mongo DB ")])])])]),e("section",{class:"languages section"},[e("h2",{class:"section-title"},"Tools"),e("div",{class:"languages_content bd-grid"},[e("ul",{class:"languages_data"},[e("li",{class:"languages__name"},[e("img",{alt:"VisualStudioCode",loading:"lazy",src:"/assets/visual-studio-code.522c3864.svg",class:"languages__circle"}),i("Visual Studio Code ")]),e("li",{class:"languages__name"},[e("img",{alt:"Visual Studio",loading:"lazy",src:"/assets/visual-studio.0a28bcc0.svg",class:"languages__circle"}),i(" Visual Studio ")]),e("li",{class:"languages__name"},[e("img",{alt:"git",loading:"lazy",src:"/assets/git-icon.d59a2cfd.svg",class:"languages__circle"}),i(" GIT ")])]),e("ul",{class:"languages_data"},[e("li",{class:"languages__name"},[e("img",{alt:"GITHUB",loading:"lazy",src:"/assets/github-icon.df940d40.svg",class:"languages__circle"}),i("GITHUB ")]),e("li",{class:"languages__name"},[e("img",{alt:"GITLAB",loading:"lazy",src:"/assets/gitlab.56608f81.svg",class:"languages__circle"}),i("GITLAB ")]),e("li",{class:"languages__name"},[e("img",{alt:"TERMINAL",loading:"lazy",src:"/assets/terminal.b30647c6.svg",class:"languages__circle"}),i("TERMINAL ")])])])]),e("section",{class:"interests section"},[e("h2",{class:"section-title"},"Hobbies"),e("div",{class:"interests__container bd-grid"},[e("div",{class:"interests__content"},[e("i",{class:"bx bx-headphone interests__icon"}),e("span",{class:"interests__name"},"Musica")]),e("div",{class:"interests__content"},[e("i",{class:"bx bxs-plane interests__icon"}),e("span",{class:"interests__name"},"Viajar")]),e("div",{class:"interests__content"},[e("i",{class:"bx bx-dumbbell interests__icon"}),e("span",{class:"interests__name"},"GYM")])])])],-1),x=e("a",{id:"scroll-top",href:"#",class:"scrolltop"},[e("i",{class:"bx bx-up-arrow-alt interests__icon"})],-1);r.render=function(s,l,i,n,t,o){return c(),a("section",_,[d,e("main",g,[e("div",m,[e("div",u,[e("section",p,[v,h,e("i",{id:"theme-button",class:"bx bx-moon change-theme",tittle:"Theme",onClick:l[1]||(l[1]=(...s)=>n.changeTheme&&n.changeTheme(...s))}),e("i",{id:"resume-button",class:"bx bx-download generate-pdf",tittle:"Generate PDF",onClick:l[2]||(l[2]=(...s)=>n.exportToPDF&&n.exportToPDF(...s))})]),b]),f],512)]),x])};t(r).mount("#app");
