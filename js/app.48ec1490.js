(function(t){function e(e){for(var s,a,l=e[0],r=e[1],c=e[2],u=0,d=[];u<l.length;u++)a=l[u],Object.prototype.hasOwnProperty.call(n,a)&&n[a]&&d.push(n[a][0]),n[a]=0;for(s in r)Object.prototype.hasOwnProperty.call(r,s)&&(t[s]=r[s]);m&&m(e);while(d.length)d.shift()();return o.push.apply(o,c||[]),i()}function i(){for(var t,e=0;e<o.length;e++){for(var i=o[e],s=!0,a=1;a<i.length;a++){var l=i[a];0!==n[l]&&(s=!1)}s&&(o.splice(e--,1),t=r(r.s=i[0]))}return t}var s={},a={app:0},n={app:0},o=[];function l(t){return r.p+"js/"+({}[t]||t)+"."+{"chunk-10491880":"ca3f8af1","chunk-3822f49a":"44b55300","chunk-efdc2408":"e7c155f8","chunk-f309733c":"d504c429"}[t]+".js"}function r(e){if(s[e])return s[e].exports;var i=s[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.e=function(t){var e=[],i={"chunk-10491880":1,"chunk-3822f49a":1,"chunk-efdc2408":1,"chunk-f309733c":1};a[t]?e.push(a[t]):0!==a[t]&&i[t]&&e.push(a[t]=new Promise((function(e,i){for(var s="css/"+({}[t]||t)+"."+{"chunk-10491880":"cb505cbc","chunk-3822f49a":"07680a9d","chunk-efdc2408":"b87c2515","chunk-f309733c":"f7798896"}[t]+".css",n=r.p+s,o=document.getElementsByTagName("link"),l=0;l<o.length;l++){var c=o[l],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===s||u===n))return e()}var d=document.getElementsByTagName("style");for(l=0;l<d.length;l++){c=d[l],u=c.getAttribute("data-href");if(u===s||u===n)return e()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=e,m.onerror=function(e){var s=e&&e.target&&e.target.src||n,o=new Error("Loading CSS chunk "+t+" failed.\n("+s+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=s,delete a[t],m.parentNode.removeChild(m),i(o)},m.href=n;var v=document.getElementsByTagName("head")[0];v.appendChild(m)})).then((function(){a[t]=0})));var s=n[t];if(0!==s)if(s)e.push(s[2]);else{var o=new Promise((function(e,i){s=n[t]=[e,i]}));e.push(s[2]=o);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,r.nc&&u.setAttribute("nonce",r.nc),u.src=l(t);var d=new Error;c=function(e){u.onerror=u.onload=null,clearTimeout(m);var i=n[t];if(0!==i){if(i){var s=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+s+": "+a+")",d.name="ChunkLoadError",d.type=s,d.request=a,i[1](d)}n[t]=void 0}};var m=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(e)},r.m=t,r.c=s,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(i,s,function(e){return t[e]}.bind(null,s));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/",r.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var m=u;o.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var s=i("2b0e"),a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("header",{staticClass:"main-header"},[i("div",{attrs:{id:"header-container"}},[i("div",{attrs:{id:"nav"}},[t._m(0),i("div",{staticClass:"router-nav"},[i("router-link",{staticClass:"menu-item",attrs:{to:"/"}},[t._v("Home")]),i("router-link",{staticClass:"menu-item",attrs:{to:"/series"}},[t._v("Séries")]),i("router-link",{staticClass:"menu-item",attrs:{to:"/filmes"}},[t._v("Filmes")]),i("router-link",{staticClass:"menu-item",attrs:{to:"/animes"}},[t._v("Animes")]),i("router-link",{staticClass:"menu-item",attrs:{to:"/games"}},[t._v("Games")])],1),t._m(1)])])]),i("router-view")],1)},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"logo"},[s("img",{attrs:{src:i("d280"),alt:"Logo Naped"}})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"btn"},[i("button",{staticClass:"btn-nav"},[t._v("Minha conta")])])}],o=(i("5c0b"),i("2877")),l={},r=Object(o["a"])(l,a,n,!1,null,null,null),c=r.exports,u=i("9483");Object(u["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});i("d3b7"),i("3ca3"),i("ddb0");var d=i("8c4f"),m=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"home"},[i("Main"),i("Article"),i("Aside"),i("Footer")],1)},v=[],p=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},C=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("main",{staticClass:"main"},[i("div",{attrs:{id:"main-container"}},[i("div",{attrs:{id:"main-background1"}},[i("section",{attrs:{id:"intro-section-1"}},[i("h1",[t._v("Mundo nerd? Naped!")]),i("p",[t._v(" O Naped pode ser sua fonte de informações sobre o mundo nerd e outros assuntos relacionados. ")])])]),i("div",{attrs:{id:"main-background-2"}},[i("section",{staticClass:"intro-section-2"},[i("div",{attrs:{id:"img-main-plus"}},[i("button",{attrs:{id:"btn-lorem"}},[t._v("Lorem")]),i("p",[t._v(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor. ")])]),i("div",{staticClass:"imgs-pq"},[i("div",{attrs:{id:"imgs-main-1"}},[i("button",{attrs:{id:"btn-imgs-1"}},[t._v("Lorem")]),i("p",[t._v(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor. ")])]),i("div",{attrs:{id:"imgs-main-2"}},[i("button",{attrs:{id:"btn-imgs-2"}},[t._v("Lorem")]),i("p",[t._v(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor. ")])])])])])])])}],f={},b=f,g=(i("67fb"),Object(o["a"])(b,p,C,!1,null,"3344200b",null)),h=g.exports,_=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},L=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("article",{staticClass:"main-article"},[i("div",{staticClass:"article-container"},[i("section",{staticClass:"article-section"},[i("div",{staticClass:"article-geral"},[i("div",{staticClass:"pain"},[i("div",{staticClass:"pain-img"}),i("div",{staticClass:"description"},[i("h4",[t._v(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor. ")]),i("p",[t._v(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor... ")]),i("span",[t._v("00/00/0000")]),i("button",{staticClass:"btn-description"},[t._v("Ler notícias")])])]),i("div",{staticClass:"deed-pool"},[i("div",{staticClass:"deedpool-img"}),i("div",{staticClass:"description"},[i("h4",[t._v(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor. ")]),i("p",[t._v(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor... ")]),i("span",[t._v("00/00/0000")]),i("button",{staticClass:"btn-description"},[t._v("Ler notícias")])])]),i("div",{staticClass:"minecraft"},[i("div",{staticClass:"minecraft-img"}),i("div",{staticClass:"description"},[i("h4",[t._v(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor. ")]),i("p",[t._v(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor... ")]),i("span",[t._v("00/00/0000")]),i("button",{staticClass:"btn-description"},[t._v("Ler notícias")])])]),i("div",{staticClass:"harry-potter"},[i("div",{staticClass:"harry-img"}),i("div",{staticClass:"description"},[i("h4",[t._v(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor. ")]),i("p",[t._v(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor... ")]),i("span",[t._v("00/00/0000")]),i("button",{staticClass:"btn-description"},[t._v("Ler notícias")])])]),i("div",{staticClass:"super-natural"},[i("div",{staticClass:"supernatural-img"}),i("div",{staticClass:"description"},[i("h4",[t._v(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor. ")]),i("p",[t._v(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor... ")]),i("span",[t._v("00/00/0000")]),i("button",{staticClass:"btn-description"},[t._v("Ler notícias")])])]),i("div",{staticClass:"dragon-ball"},[i("div",{staticClass:"dragon-ball-img"}),i("div",{staticClass:"description"},[i("h4",[t._v(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor. ")]),i("p",[t._v(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor... ")]),i("span",[t._v("00/00/0000")]),i("button",{staticClass:"btn-description"},[t._v("Ler notícias")])])]),i("div",{staticClass:"one-piece"},[i("div",{staticClass:"one-piece-img"}),i("div",{staticClass:"description"},[i("h4",[t._v(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor. ")]),i("p",[t._v(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor... ")]),i("span",[t._v("00/00/0000")]),i("button",{staticClass:"btn-description"},[t._v("Ler notícias")])])]),i("div",{staticClass:"revisions"},[i("div",{staticClass:"revisions-img"}),i("div",{staticClass:"description"},[i("h4",[t._v(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor. ")]),i("p",[t._v(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor... ")]),i("span",[t._v("00/00/0000")]),i("button",{staticClass:"btn-description"},[t._v("Ler notícias")])])])]),i("div",{staticClass:"article-geral-1"},[i("h2",[t._v("Lorem ipsum dolor")]),i("hr"),i("div",{staticClass:"chihiro-img"},[i("button",{attrs:{id:"btn-chihiro"}},[t._v("Lorem")]),i("p",[t._v(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor. ")])]),i("div",{staticClass:"rede-social-img"},[i("button",{attrs:{id:"btn-rede"}},[t._v("Lorem")]),i("p",[t._v(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor. ")])]),i("div",{staticClass:"kratos-img"},[i("button",{attrs:{id:"btn-kratos"}},[t._v("Lorem")]),i("p",[t._v(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor. ")])])])])])])}],k={},N=k,y=(i("78d2"),Object(o["a"])(N,_,L,!1,null,"29c2d66d",null)),w=y.exports,E=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},O=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("aside",{staticClass:"main-aside"},[i("div",{staticClass:"aside-container"},[i("section",{staticClass:"aside-intro"},[i("h2",[t._v("Notícias mais recentes")]),i("hr"),i("div",{staticClass:"aside-image"},[i("div",{staticClass:"img-geral"},[i("div",{staticClass:"naoko-img"},[i("button",{attrs:{id:"btn-naoko"}},[t._v("Lorem")]),i("p",[t._v(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor. ")])]),i("div",{staticClass:"gta-img"},[i("button",{attrs:{id:"btn-gta"}},[t._v("Lorem")]),i("p",[t._v(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor. ")])]),i("div",{staticClass:"vikings-img"},[i("button",{attrs:{id:"btn-vikings"}},[t._v("Lorem")]),i("p",[t._v(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor. ")])]),i("div",{staticClass:"soul-img"},[i("button",{attrs:{id:"btn-soul"}},[t._v("Lorem")]),i("p",[t._v(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor. ")])]),i("div",{staticClass:"your-img"},[i("button",{attrs:{id:"btn-your"}},[t._v("Lorem")]),i("p",[t._v(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor. ")])]),i("div",{staticClass:"key-img"},[i("button",{attrs:{id:"btn-key"}},[t._v("Lorem")]),i("p",[t._v(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor. ")])])])])])])])}],j={},H=j,M=(i("5e43"),Object(o["a"])(H,E,O,!1,null,"0c066c42",null)),x=M.exports,A=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"footer"},[i("div",{staticClass:"logo-footer"},[i("svg",{attrs:{width:"76",height:"24",viewBox:"0 0 76 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[i("path",{attrs:{d:"M12.4552 1.2H15.0472V18H12.6712L2.90319 5.184C2.99919 6.16 3.08719 7.136 3.16719 8.112C3.26319 9.072 3.31119 10.04 3.31119 11.016V18H0.719188V1.2H3.04719L12.8152 14.28C12.6712 13.112 12.5752 11.856 12.5272 10.512C12.4792 9.152 12.4552 7.888 12.4552 6.72V1.2ZM30.8624 5.4V18H28.3664V16.056C27.9824 16.584 27.4144 17.08 26.6624 17.544C25.9104 18.008 25.0384 18.24 24.0464 18.24C22.9904 18.24 22.0224 17.96 21.1424 17.4C20.2784 16.84 19.5904 16.064 19.0784 15.072C18.5664 14.08 18.3104 12.944 18.3104 11.664C18.3104 10.384 18.5744 9.256 19.1024 8.28C19.6304 7.288 20.3584 6.52 21.2864 5.976C22.2144 5.416 23.2704 5.136 24.4544 5.136C25.3344 5.136 26.1024 5.328 26.7584 5.712C27.4304 6.096 27.9664 6.544 28.3664 7.056V5.4H30.8624ZM24.6224 15.96C25.3904 15.96 26.0624 15.776 26.6384 15.408C27.2144 15.024 27.6624 14.512 27.9824 13.872C28.3024 13.216 28.4624 12.48 28.4624 11.664C28.4624 10.864 28.3024 10.144 27.9824 9.504C27.6624 8.864 27.2144 8.36 26.6384 7.992C26.0624 7.608 25.3904 7.416 24.6224 7.416C23.8864 7.416 23.2304 7.6 22.6544 7.968C22.0784 8.336 21.6304 8.84 21.3104 9.48C20.9904 10.12 20.8304 10.848 20.8304 11.664C20.8304 12.48 20.9904 13.216 21.3104 13.872C21.6304 14.512 22.0784 15.024 22.6544 15.408C23.2304 15.776 23.8864 15.96 24.6224 15.96ZM40.8899 5.184C42.0099 5.184 43.0099 5.464 43.8899 6.024C44.7859 6.568 45.4899 7.328 46.0019 8.304C46.5139 9.28 46.7699 10.408 46.7699 11.688C46.7699 12.952 46.5139 14.08 46.0019 15.072C45.4899 16.048 44.7939 16.816 43.9139 17.376C43.0339 17.936 42.0499 18.216 40.9619 18.216C40.0659 18.216 39.2499 18.024 38.5139 17.64C37.7939 17.256 37.2259 16.816 36.8099 16.32V23.28H34.3139V5.376H36.8099V7.224C37.1779 6.696 37.7299 6.224 38.4659 5.808C39.2019 5.392 40.0099 5.184 40.8899 5.184ZM40.5539 7.464C39.8019 7.464 39.1299 7.648 38.5379 8.016C37.9619 8.384 37.5059 8.888 37.1699 9.528C36.8499 10.152 36.6899 10.872 36.6899 11.688C36.6899 12.488 36.8499 13.208 37.1699 13.848C37.5059 14.488 37.9619 15 38.5379 15.384C39.1299 15.752 39.8019 15.936 40.5539 15.936C41.3059 15.936 41.9699 15.752 42.5459 15.384C43.1219 15 43.5699 14.488 43.8899 13.848C44.2259 13.208 44.3939 12.488 44.3939 11.688C44.3939 10.872 44.2259 10.152 43.8899 9.528C43.5699 8.888 43.1219 8.384 42.5459 8.016C41.9699 7.648 41.3059 7.464 40.5539 7.464ZM60.2786 16.344H60.2546C59.7426 16.84 59.0386 17.28 58.1426 17.664C57.2466 18.048 56.3106 18.24 55.3346 18.24C54.0226 18.24 52.8626 17.968 51.8546 17.424C50.8626 16.864 50.0866 16.104 49.5266 15.144C48.9666 14.168 48.6866 13.064 48.6866 11.832C48.6866 10.424 48.9826 9.224 49.5746 8.232C50.1666 7.224 50.9506 6.456 51.9266 5.928C52.9026 5.384 53.9666 5.112 55.1186 5.112C56.1746 5.112 57.1346 5.376 57.9986 5.904C58.8626 6.416 59.5506 7.128 60.0626 8.04C60.5746 8.952 60.8306 10.016 60.8306 11.232L60.8066 12.288H51.1586C51.3026 13.424 51.7666 14.328 52.5506 15C53.3506 15.656 54.3586 15.984 55.5746 15.984C56.4546 15.984 57.1666 15.824 57.7106 15.504C58.2546 15.168 58.7026 14.848 59.0546 14.544L60.2786 16.344ZM55.1186 7.392C54.1746 7.392 53.3506 7.616 52.6466 8.064C51.9426 8.496 51.4786 9.248 51.2546 10.32H58.3106V10.152C58.2626 9.608 58.0786 9.128 57.7586 8.712C57.4546 8.296 57.0706 7.976 56.6066 7.752C56.1426 7.512 55.6466 7.392 55.1186 7.392ZM75.3251 0.24V18H72.8531V16.224C72.4851 16.72 71.9411 17.184 71.2211 17.616C70.5011 18.032 69.6851 18.24 68.7731 18.24C67.6371 18.24 66.6131 17.96 65.7011 17.4C64.7891 16.84 64.0691 16.064 63.5411 15.072C63.0131 14.08 62.7491 12.952 62.7491 11.688C62.7491 10.408 63.0131 9.28 63.5411 8.304C64.0691 7.312 64.7811 6.536 65.6771 5.976C66.5731 5.416 67.5811 5.136 68.7011 5.136C69.5971 5.136 70.4051 5.32 71.1251 5.688C71.8611 6.056 72.4371 6.488 72.8531 6.984V0.24H75.3251ZM69.1091 16.104C69.8771 16.104 70.5491 15.912 71.1251 15.528C71.7011 15.144 72.1491 14.616 72.4691 13.944C72.7891 13.272 72.9491 12.52 72.9491 11.688C72.9491 10.84 72.7891 10.088 72.4691 9.432C72.1491 8.76 71.7011 8.232 71.1251 7.848C70.5491 7.464 69.8771 7.272 69.1091 7.272C68.3571 7.272 67.6931 7.464 67.1171 7.848C66.5411 8.232 66.0851 8.76 65.7491 9.432C65.4291 10.088 65.2691 10.84 65.2691 11.688C65.2691 12.52 65.4291 13.272 65.7491 13.944C66.0851 14.616 66.5411 15.144 67.1171 15.528C67.6931 15.912 68.3571 16.104 69.1091 16.104Z",fill:"#8257E6"}})]),i("p",{attrs:{id:"p-footer"}},[t._v(" Todas as imagens de filmes, séries e etc são marcas registradas dos seus respectivos proprietários. ")])])])},V=[],S={},$=S,P=(i("d80e"),Object(o["a"])($,A,V,!1,null,"2dc05248",null)),T=P.exports,Z={name:"Home",components:{Main:h,Article:w,Aside:x,Footer:T}},F=Z,B=Object(o["a"])(F,m,v,!1,null,null,null),q=B.exports;s["a"].use(d["a"]);var D=[{path:"/",name:"Home",component:q},{path:"/series",name:"Series",component:function(){return i.e("chunk-efdc2408").then(i.bind(null,"f431"))}},{path:"/filmes",name:"Filmes",component:function(){return i.e("chunk-3822f49a").then(i.bind(null,"467a"))}},{path:"/animes",name:"Animes",component:function(){return i.e("chunk-10491880").then(i.bind(null,"58d4"))}},{path:"/games",name:"Games",component:function(){return i.e("chunk-f309733c").then(i.bind(null,"a2e9"))}}],G=new d["a"]({routes:D}),J=G,I=i("2f62");s["a"].use(I["a"]);var K=new I["a"].Store({state:{},mutations:{},actions:{},modules:{}});s["a"].config.productionTip=!1,new s["a"]({router:J,store:K,render:function(t){return t(c)}}).$mount("#app")},"5c0b":function(t,e,i){"use strict";i("9c0c")},"5e43":function(t,e,i){"use strict";i("e3c3")},"67fb":function(t,e,i){"use strict";i("8005")},"6cdd":function(t,e,i){},"78d2":function(t,e,i){"use strict";i("6cdd")},8005:function(t,e,i){},"9c0c":function(t,e,i){},d280:function(t,e,i){t.exports=i.p+"img/Naped.51afb25a.svg"},d80e:function(t,e,i){"use strict";i("df4d")},df4d:function(t,e,i){},e3c3:function(t,e,i){}});
//# sourceMappingURL=app.48ec1490.js.map