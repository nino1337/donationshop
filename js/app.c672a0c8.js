(function(t){function e(e){for(var n,o,c=e[0],r=e[1],u=e[2],d=0,h=[];d<c.length;d++)o=c[d],s[o]&&h.push(s[o][0]),s[o]=0;for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n]);l&&l(e);while(h.length)h.shift()();return i.push.apply(i,u||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,c=1;c<a.length;c++){var r=a[c];0!==s[r]&&(n=!1)}n&&(i.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},s={app:0},i=[];function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/donationshop/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],r=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var l=r;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0553":function(t,e,a){},"1aee":function(t,e,a){},2856:function(t,e,a){},"2d26":function(t,e,a){},"37e9":function(t,e,a){"use strict";(function(t,e){a("8449"),a("6b54");var n=a("6bde");
/*!
 * smooth-scroll v14.2.1: Animate scrolling to anchor links
 * (c) 2018 Chris Ferdinandi
 * MIT License
 * http://github.com/cferdinandi/smooth-scroll
 */
window.Element&&!Element.prototype.closest&&(Element.prototype.closest=function(t){var e,a=(this.document||this.ownerDocument).querySelectorAll(t),n=this;do{e=a.length;while(--e>=0&&a.item(e)!==n);}while(e<0&&(n=n.parentElement));return n}),function(){if("function"===typeof window.CustomEvent)return!1;function t(t,e){e=e||{bubbles:!1,cancelable:!1,detail:void 0};var a=document.createEvent("CustomEvent");return a.initCustomEvent(t,e.bubbles,e.cancelable,e.detail),a}t.prototype=window.Event.prototype,window.CustomEvent=t}(),
/**
 * requestAnimationFrame() polyfill
 * By Erik Möller. Fixes from Paul Irish and Tino Zijdel.
 * @link http://paulirish.com/2011/requestanimationframe-for-smart-animating/
 * @link http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
 * @license MIT
 */
function(){for(var t=0,e=["ms","moz","webkit","o"],a=0;a<e.length&&!window.requestAnimationFrame;++a)window.requestAnimationFrame=window[e[a]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[e[a]+"CancelAnimationFrame"]||window[e[a]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(e,a){var n=(new Date).getTime(),s=Math.max(0,16-(n-t)),i=window.setTimeout(function(){e(n+s)},s);return t=n+s,i}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(t){clearTimeout(t)})}(),function(t,s){"function"===typeof define&&a("3c35")?define([],function(){return s(t)}):"object"===("undefined"===typeof exports?"undefined":Object(n["a"])(exports))?e.exports=s(t):t.SmoothScroll=s(t)}("undefined"!==typeof t?t:"undefined"!==typeof window?window:void 0,function(t){var e={ignore:"[data-scroll-ignore]",header:null,topOnEmptyHash:!0,speed:500,clip:!0,offset:0,easing:"easeInOutCubic",customEasing:null,updateURL:!0,popstate:!0,emitEvents:!0},a=function(){return"querySelector"in document&&"addEventListener"in t&&"requestAnimationFrame"in t&&"closest"in t.Element.prototype},n=function(){for(var t={},e=function(e){for(var a in e)e.hasOwnProperty(a)&&(t[a]=e[a])},a=0;a<arguments.length;a++)e(arguments[a]);return t},s=function(e){return!!("matchMedia"in t&&t.matchMedia("(prefers-reduced-motion)").matches)},i=function(e){return parseInt(t.getComputedStyle(e).height,10)},o=function(t){var e;try{e=decodeURIComponent(t)}catch(a){e=t}return e},c=function(t){"#"===t.charAt(0)&&(t=t.substr(1));var e,a,n=String(t),s=n.length,i=-1,o="",c=n.charCodeAt(0);while(++i<s){if(e=n.charCodeAt(i),0===e)throw new InvalidCharacterError("Invalid character: the input contains U+0000.");e>=1&&e<=31||127==e||0===i&&e>=48&&e<=57||1===i&&e>=48&&e<=57&&45===c?o+="\\"+e.toString(16)+" ":o+=e>=128||45===e||95===e||e>=48&&e<=57||e>=65&&e<=90||e>=97&&e<=122?n.charAt(i):"\\"+n.charAt(i)}try{a=decodeURIComponent("#"+o)}catch(t){a="#"+o}return a},r=function(t,e){var a;return"easeInQuad"===t.easing&&(a=e*e),"easeOutQuad"===t.easing&&(a=e*(2-e)),"easeInOutQuad"===t.easing&&(a=e<.5?2*e*e:(4-2*e)*e-1),"easeInCubic"===t.easing&&(a=e*e*e),"easeOutCubic"===t.easing&&(a=--e*e*e+1),"easeInOutCubic"===t.easing&&(a=e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1),"easeInQuart"===t.easing&&(a=e*e*e*e),"easeOutQuart"===t.easing&&(a=1- --e*e*e*e),"easeInOutQuart"===t.easing&&(a=e<.5?8*e*e*e*e:1-8*--e*e*e*e),"easeInQuint"===t.easing&&(a=e*e*e*e*e),"easeOutQuint"===t.easing&&(a=1+--e*e*e*e*e),"easeInOutQuint"===t.easing&&(a=e<.5?16*e*e*e*e*e:1+16*--e*e*e*e*e),t.customEasing&&(a=t.customEasing(e)),a||e},u=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},l=function(e,a,n,s){var i=0;if(e.offsetParent)do{i+=e.offsetTop,e=e.offsetParent}while(e);return i=Math.max(i-a-n,0),s&&(i=Math.min(i,u()-t.innerHeight)),i},d=function(t){return t?i(t)+t.offsetTop:0},h=function(t,e,a){e||history.pushState&&a.updateURL&&history.pushState({smoothScroll:JSON.stringify(a),anchor:t.id},document.title,t===document.documentElement?"#top":"#"+t.id)},p=function(e,a,n){0===e&&document.body.focus(),n||(e.focus(),document.activeElement!==e&&(e.setAttribute("tabindex","-1"),e.focus(),e.style.outline="none"),t.scrollTo(0,a))},v=function(e,a,n,s){if(a.emitEvents&&"function"===typeof t.CustomEvent){var i=new CustomEvent(e,{bubbles:!0,detail:{anchor:n,toggle:s}});document.dispatchEvent(i)}},m=function(i,m){var f,b,_,k,g,w,C={};C.cancelScroll=function(t){cancelAnimationFrame(w),w=null,t||v("scrollCancel",f)},C.animateScroll=function(a,s,i){var o=n(f||e,i||{}),c="[object Number]"===Object.prototype.toString.call(a),m=c||!a.tagName?null:a;if(c||m){var b=t.pageYOffset;o.header&&!_&&(_=document.querySelector(o.header)),k||(k=d(_));var g,S,y,O=c?a:l(m,k,parseInt("function"===typeof o.offset?o.offset(a,s):o.offset,10),o.clip),I=O-b,x=u(),E=0,A=function(e,n){var i=t.pageYOffset;if(e==n||i==n||(b<n&&t.innerHeight+i)>=x)return C.cancelScroll(!0),p(a,n,c),v("scrollStop",o,a,s),g=null,w=null,!0},B=function e(a){g||(g=a),E+=a-g,S=E/parseInt(o.speed,10),S=S>1?1:S,y=b+I*r(o,S),t.scrollTo(0,Math.floor(y)),A(y,O)||(w=t.requestAnimationFrame(e),g=a)};0===t.pageYOffset&&t.scrollTo(0,0),h(a,c,o),v("scrollStart",o,a,s),C.cancelScroll(!0),t.requestAnimationFrame(B)}};var S=function(e){if(!s(f)&&0===e.button&&!e.metaKey&&!e.ctrlKey&&"closest"in e.target&&(b=e.target.closest(i),b&&"a"===b.tagName.toLowerCase()&&!e.target.closest(f.ignore)&&b.hostname===t.location.hostname&&b.pathname===t.location.pathname&&/#/.test(b.href))){var a=c(o(b.hash)),n=f.topOnEmptyHash&&"#"===a?document.documentElement:document.querySelector(a);n=n||"#top"!==a?n:document.documentElement,n&&(e.preventDefault(),C.animateScroll(n,b))}},y=function(t){if(null!==history.state&&history.state.smoothScroll&&history.state.smoothScroll===JSON.stringify(f)&&history.state.anchor){var e=document.querySelector(c(o(history.state.anchor)));e&&C.animateScroll(e,null,{updateURL:!1})}},O=function(t){g||(g=setTimeout(function(){g=null,k=d(_)},66))};return C.destroy=function(){f&&(document.removeEventListener("click",S,!1),t.removeEventListener("resize",O,!1),t.removeEventListener("popstate",y,!1),C.cancelScroll(),f=null,null,b=null,_=null,k=null,g=null,w=null)},C.init=function(s){if(!a())throw"Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.";C.destroy(),f=n(e,s||{}),_=f.header?document.querySelector(f.header):null,k=d(_),document.addEventListener("click",S,!1),_&&t.addEventListener("resize",O,!1),f.updateURL&&f.popstate&&t.addEventListener("popstate",y,!1)},C.init(m),C};return m})}).call(this,a("c8ba"),a("dd40")(t))},"3c4b":function(t,e,a){"use strict";var n=a("2d26"),s=a.n(n);s.a},4276:function(t,e,a){},5145:function(t,e,a){},"55e6":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("097d");var n=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"donate-shop"},[a("div",{directives:[{name:"show",rawName:"v-show",value:!t.isFinished,expression:"!isFinished"}]},[a("div",{staticClass:"donate-shop__steps donate-shop__content"},[a("Step",{attrs:{step:"Geschenk wählen",active:1===t.currentStep},nativeOn:{click:function(e){t.prevStep(!1)}}}),a("Step",{attrs:{step:"Grusskarte wählen",active:2===t.currentStep}})],1),a("div",{staticClass:"donate-shop__basket"},[a("Basket",{attrs:{step:t.currentStep,"is-plain":!1},on:{"basket-btn-clicked":t.stepHandler,itemRemoved:t.prevStep}})],1),a("div",{staticClass:"donate-shop__journey"},[a("transition",{attrs:{name:"step-1"}},[a("section",{directives:[{name:"show",rawName:"v-show",value:1===t.currentStep,expression:"currentStep === 1"}]},[a("div",{staticClass:"donate-shop__cards"},t._l(t.donateShopData.cards,function(e){return a("Card",{key:e.id,attrs:{id:e.id,uid:e.uid,image:e.image,title:e.title,isSpecial:e.isSpecial,value:e.value,moreInfo:e.moreInfo,occasionImages:e.occasionImages,currUrl:t.currUrl}})}))])]),a("transition",{attrs:{name:"step-2"}},[a("section",{directives:[{name:"show",rawName:"v-show",value:2===t.currentStep,expression:"currentStep === 2"}]},[a("div",{staticClass:"donate-shop__content"},[a("h2",[t._v(t._s(t.donateShopData.content.title))]),a("p",[t._v(t._s(t.donateShopData.content.text))])]),a("div",{staticClass:"donate-shop__occasions"},t._l(t.donateShopData.occasions,function(e,n){return a("Occasion",{key:e.id,attrs:{id:e.id,uid:e.uid,title:e.title,index:n,currUrl:t.currUrl}})}))])])],1)]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.isFinished,expression:"isFinished"}]},[a("Basket",{attrs:{"is-plain":!0},on:{"basket-btn-clicked":t.stepHandler,basketHeaderClicked:t.navBack}}),a("div",{staticClass:"donate-shop__content"},[a("span",{staticClass:"donate-shop__nav-back",on:{click:t.navBack}},[t._v("Zurück zum Spendenshop")])])],1)])},i=[],o=(a("456d"),a("ac6a"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"step",class:{"is-active":t.active}},[t._v("\n  "+t._s(t.step)+"\n")])}),c=[],r={name:"Step",props:["step","active"]},u=r,l=(a("6ccf"),a("2877")),d=Object(l["a"])(u,o,c,!1,null,"41935ab2",null);d.options.__file="Step.vue";var h=d.exports,p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card",class:{"is-first":t.isSpecial}},[a("div",{staticClass:"card__head"},[a("img",{attrs:{src:t.image}})]),a("div",{staticClass:"card__body"},[a("div",{staticClass:"card__headline"},[t._v("\n      "+t._s(t.title)+"\n      "),t.isSpecial?a("span",{staticClass:"card__special"},[t._v("beliebt")]):t._e()]),a("div",{staticClass:"card__input"},[a("Input",{attrs:{value:t.value,amount:1},on:{amountChanged:t.setAmount}})],1),a("a",{staticClass:"card__basket",attrs:{href:t.currUrl+"#basket"},on:{click:t.addToBasket}},[t._v("in den Geschenkkorb")]),a("div",{staticClass:"card__more-info-btn",on:{click:function(e){t.showMore=!t.showMore}}},[t._v("\n      So hilft Ihr Geschenk\n      "),t.showMore?a("span",[a("img",{staticClass:"icon-minus",attrs:{src:t.baseUrl+"icons/minus.svg"}})]):a("span",[a("img",{staticClass:"icon-plus",attrs:{src:t.baseUrl+"icons/plus.svg"}})])]),a("div",{staticClass:"card__more-info",class:{"is-active":t.showMore}},[t._v(t._s(t.moreInfo))])])])},v=[],m=(a("c5f6"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"input"},[a("div",{staticClass:"input__dropdown-wrapper"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.selected,expression:"selected"}],staticClass:"input__dropdown",on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.selected=e.target.multiple?a:a[0]},function(e){t.$emit("amountChanged",e.target)}]}},[a("option",{attrs:{value:"1"}},[t._v("1")]),a("option",{attrs:{value:"2"}},[t._v("2")]),a("option",{attrs:{value:"3"}},[t._v("3")]),a("option",{attrs:{value:"4"}},[t._v("4")]),a("option",{attrs:{value:"5"}},[t._v("5")]),a("option",{attrs:{value:"6"}},[t._v("6")]),a("option",{attrs:{value:"7"}},[t._v("7")]),a("option",{attrs:{value:"8"}},[t._v("8")]),a("option",{attrs:{value:"9"}},[t._v("9")]),a("option",{attrs:{value:"10"}},[t._v("10")])])]),a("div",{staticClass:"input__text"},[t._v("für je")]),a("div",{staticClass:"input__value"},[t._v(t._s(t.value)+"€")])])}),f=[],b={name:"Input",props:["value","amount"],data:function(){return{selected:"",baseUrl:"/donationshop/"}},created:function(){this.selected=this.amount},watch:{amount:function(){this.selected=this.amount}}},_=b,k=(a("a5cf"),Object(l["a"])(_,m,f,!1,null,null,null));k.options.__file="Input.vue";var g=k.exports,w={cards:[],occasion:{},accumulatedValue:0,itemCount:0,basketOpen:!0},C={name:"Card",components:{Input:g},props:{id:Number,uid:Number,image:String,title:String,isSpecial:Boolean,value:Number,moreInfo:String,occasionImages:Array,currUrl:String},data:function(){return{baseUrl:"/donationshop/",showMore:!1,basket:w,amount:1,valueOld:0,valueNew:0,countUp:!1}},created:function(){this.$parent.$on("next-step",this.hideMoreInfo)},watch:{valueNew:function(){var t=this,e=setInterval(function(){if(t.countUp){if(t.valueOld===t.valueNew)return t.basket.accumulatedValue=t.valueNew,t.resetAnimationValues(),void clearInterval(e);t.valueOld>t.valueNew?t.basket.accumulatedValue=t.valueOld--:t.basket.accumulatedValue=t.valueOld++}else clearInterval(e)},1)}},methods:{addToBasket:function(){var t=this.basket.cards.slice();this.isInBasket()?this.changeAmount():(t.push({id:this.id,uid:this.uid,title:this.title,value:this.value,amount:this.amount,occasionImages:this.occasionImages}),this.basket.cards=t,this.accumulateValue(),this.openBasket())},isInBasket:function(){var t=this,e=!1;return this.basket.cards.forEach(function(a){a.id===t.id&&(e=!0)}),e},accumulateValue:function(){var t=0,e=0;this.basket.cards.forEach(function(a){t+=a.value*a.amount,e+=a.amount}),this.setAnimationValues(t),this.basket.itemCount=e},setAmount:function(t){this.amount=parseInt(t.value,10)},changeAmount:function(){var t=this,e=this.basket.cards,a=e.filter(function(e){return e.id===t.id});a[0].amount=this.amount,this.accumulateValue()},hideMoreInfo:function(){this.showMore=!1},setAnimationValues:function(t){this.countUp=!0,this.valueOld=this.basket.accumulatedValue,this.valueNew=t},resetAnimationValues:function(){this.countUp=!1,this.valueNew=0,this.valueOld=0},openBasket:function(){this.basket.basketOpen=!0}}},S=C,y=(a("daf2"),Object(l["a"])(S,p,v,!1,null,"e3140032",null));y.options.__file="Card.vue";var O=y.exports,I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"occasion"},[t.basket.cards.length?a("div",{staticClass:"occasion__head",class:{"lightbox-open":t.showLightbox},on:{click:t.toggleLightbox}},[a("img",{staticClass:"occasion__image",attrs:{src:t.getOccasionImg()}}),a("img",{staticClass:"occasion__zoom",attrs:{src:t.baseUrl+"icons/zoom.svg"}}),a("transition",{attrs:{name:"opacity"}},[a("Lightbox",{directives:[{name:"show",rawName:"v-show",value:t.showLightbox,expression:"showLightbox"}],attrs:{src:t.getOccasionImg()}})],1),a("transition",{attrs:{name:"scale"}},[t.isInBasket()?a("div",{staticClass:"occasion__deactivated"},[t._v("Um die Karte im Geschenkkorb zu ändern, einfach eine andere Grusskarte auswählen")]):t._e()])],1):t._e(),a("div",{staticClass:"occasion__body"},[a("div",{staticClass:"occasion__headline"},[t._v(t._s(t.title))]),a("a",{staticClass:"occasion__basket",attrs:{href:t.currUrl+"#basket"},on:{click:t.addToBasket}},[t._v("Auswählen")])])])},x=[],E=(a("f751"),{name:"Occasion",props:{id:Number,uid:Number,title:String,index:Number,occasions:Array,currUrl:String},data:function(){return{baseUrl:"/donationshop/",basket:w,showLightbox:!1}},computed:{occasion:function(){return this.basket.occasion}},methods:{addToBasket:function(){var t=Object.assign({},this.basket.occasion);this.isInBasket()&&this.clearOccasion(),t={id:this.id,uid:this.uid,title:this.title},this.basket.occasion=t,this.openBasket()},clearOccasion:function(){this.basket.occasion={}},isInBasket:function(){return Object.keys(this.basket.occasion).length},toggleLightbox:function(){this.showLightbox=!this.showLightbox},getOccasionImg:function(){var t=this;if(this.basket.cards.length){var e=this.basket.cards[0].occasionImages.filter(function(e,a){return e.occationUid===t.uid});return e[0].image}},openBasket:function(){this.basket.basketOpen=!0}}}),A=E,B=(a("c01c"),Object(l["a"])(A,I,x,!1,null,null,null));B.options.__file="Occasion.vue";var U=B.exports,F=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"basket util-bg-bisquit",class:{"is-open":t.basket.basketOpen,"is-visible":t.cards.length>0||t.isOccasionInBasket()},attrs:{id:"basket"}},[t.isPlain?a("div",{staticClass:"donate-shop__content"},[a("div",{staticClass:"basket__show-more",on:{click:function(e){t.$emit("basketHeaderClicked")}}},[t._v("\n      Geschenkkorb\n      "),a("span",{staticClass:"basket__icon",attrs:{"data-count":t.itemCount}},[a("img",{attrs:{src:t.baseUrl+"icons/shopping-cart.svg"}})])]),a("div",{staticClass:"basket__content"},[a("transition-group",{staticClass:"basket__package-wrapper",attrs:{name:"packages",tag:"div"}},t._l(t.cards,function(e,n){return a("div",{key:n,staticClass:"basket__package"},[a("div",{staticClass:"basket__package-title"},[t._v(t._s(e.title))]),a("span",{staticClass:"basket__package-values"},[t._v(t._s(e.amount)+"x")]),a("span",{staticClass:"basket__value-text"},[t._v("im Wert von")]),a("span",{staticClass:"basket__package-values"},[t._v(t._s(e.value)+"€")])])})),a("div",{ref:"basketOccasion",staticClass:"basket__download"},[a("div",{staticClass:"basket__occasion-title"},[t._v('Grusskarte "'+t._s(t.occasion.title)+'"')]),a("span",[t._v("PDFs zum Herunterladen")])])],1),a("div",{staticClass:"basket__sum"},[t._v("\n      Gesamtsumme\n      "),a("span",{staticClass:"input__value"},[t._v(t._s(t.accumulatedValue)+"€")])])]):a("div",{staticClass:"donate-shop__content"},[a("div",{staticClass:"basket__show-more",on:{click:function(e){t.basket.basketOpen=!t.basket.basketOpen}}},[a("span",[t._v("Geschenkkorb")]),a("span",{staticClass:"basket__icon",attrs:{"data-count":t.itemCount}},[a("img",{attrs:{src:t.baseUrl+"icons/shopping-cart.svg"}})]),a("span",{staticClass:"basket__chevron"},[a("img",{attrs:{src:t.baseUrl+"icons/chevron.svg"}})])]),a("div",{staticClass:"basket__content"},[a("transition-group",{staticClass:"basket__package-wrapper",attrs:{name:"packages",tag:"div"}},t._l(t.cards,function(e,n){return a("div",{key:n,staticClass:"basket__package"},[a("div",{staticClass:"basket__package-title"},[t._v("\n            "+t._s(e.title)+"\n            "),a("span",{staticClass:"basket__remove",on:{click:function(e){t.removeItem(n)}}},[a("img",{attrs:{src:t.baseUrl+"icons/close.svg"}})])]),a("Input",{attrs:{value:e.value,amount:e.amount},on:{amountChanged:function(a){var n=arguments.length,s=Array(n);while(n--)s[n]=arguments[n];t.setAmount.apply(void 0,[e.id].concat(s))}}})],1)})),t.isOccasionInBasket()?a("div",{ref:"basketOccasion",staticClass:"basket__download"},[a("div",{staticClass:"basket__occasion-title"},[t._v('Grusskarte "'+t._s(t.occasion.title)+'"')]),a("span",[t._v("PDFs zum Herunterladen")]),a("img",{staticClass:"basket__remove",attrs:{src:t.baseUrl+"icons/close.svg"},on:{click:function(e){t.removeOccasion()}}})]):t._e()],1),a("div",{staticClass:"basket__sum"},[t._v("\n      Gesamtsumme\n      "),a("span",{staticClass:"input__value"},[t._v(t._s(t.accumulatedValue)+"€")])]),a("div",{staticClass:"basket__cta"},[1===t.step?a("Button",{attrs:{text:"Weiter",isDisabled:0===t.cards.length},nativeOn:{click:function(e){e.preventDefault(),t.$emit("basket-btn-clicked"),t.closeBasket()}}}):a("Button",{attrs:{text:"Bezahlen",isDisabled:0===t.cards.length||!t.isOccasionInBasket()},nativeOn:{click:function(e){e.preventDefault(),t.$emit("basket-btn-clicked"),t.cacheBasket()}}})],1)])])},N=[],j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"btn btn--primary",attrs:{disabled:t.isDisabled}},[t._v("\n  "+t._s(t.text)+" \n  "),a("span",{staticClass:"button__chevron"},[a("img",{attrs:{src:t.baseUrl+"icons/button-chevron.svg"}})])])},L=[],V={name:"Button",props:["text","isDisabled"],data:function(){return{baseUrl:"/donationshop/"}}},D=V,M=(a("3c4b"),Object(l["a"])(D,j,L,!1,null,"62d59629",null));M.options.__file="Button.vue";var H=M.exports,T={name:"Basket",components:{Input:g,Button:H},props:["step","is-plain"],data:function(){return{baseUrl:"/donationshop/",basket:w,amount:0,valueOld:0,valueNew:0,packageHeight:0}},computed:{occasion:function(){return this.basket.occasion},accumulatedValue:function(){return this.basket.accumulatedValue},cards:function(){return this.basket.cards},itemCount:function(){return this.basket.itemCount}},watch:{valueNew:function(){var t=this,e=setInterval(function(){t.valueOld===t.valueNew&&clearInterval(e),t.valueOld>t.valueNew?t.basket.accumulatedValue=t.valueOld--:t.basket.accumulatedValue=t.valueOld++},1)}},methods:{changeAmount:function(t){var e=this.basket.cards,a=e.filter(function(e){return e.id===t});a[0].amount=this.amount,this.accumulateValue()},setAmount:function(t,e){this.amount=parseInt(e.value,10),this.changeAmount(t)},accumulateValue:function(){var t=0,e=0;this.basket.cards.forEach(function(a){t+=a.value*a.amount,e+=a.amount}),this.setAnimationValues(t),this.basket.itemCount=e},removeItem:function(t){var e=this.basket.cards.slice();e.splice(t,1),this.basket.cards=e,this.accumulateValue(),this.$emit("itemRemoved",!0)},removeOccasion:function(){this.basket.occasion={}},isOccasionInBasket:function(){return Object.keys(this.basket.occasion).length},setAnimationValues:function(t){this.valueOld=this.basket.accumulatedValue,this.valueNew=t},closeBasket:function(){var t=this;setTimeout(function(){t.basket.basketOpen=!1},500)},cacheBasket:function(){var t=this;null!==sessionStorage.getItem("basket")&&sessionStorage.clear(),sessionStorage.setItem("basket",JSON.stringify(t.basket))},refreshPage:function(){window.location.reload()}}},q=T,$=(a("ffd1"),Object(l["a"])(q,F,N,!1,null,null,null));$.options.__file="Basket.vue";var P=$.exports,G={name:"app",components:{Step:h,Card:O,Basket:P,Occasion:U},data:function(){return{donateShopData:{},activeStep:1,basket:w,isFinished:!1,firstFinish:!0,currUrl:""}},created:function(){var t=this;this.donateShopData=donateShopData,this.currUrl=window.location.href,window.onpopstate=function(e){var a=e.state;a?2===t.activeStep&&t.navBack():t.activeStep=1}},computed:{currentStep:function(){return this.activeStep}},methods:{stepHandler:function(){history.pushState({step:this.activeStep},"",window.location.pathname),1===this.activeStep?this.nextStep():this.basketFilled()&&(this.isFinished=!0,this.showDonationForm())},nextStep:function(){this.activeStep++,this.$emit("next-step")},prevStep:function(t){if(t){if(0===this.basket.cards.length&&2===this.activeStep)return void this.activeStep--}else 2===this.activeStep&&this.activeStep--},showDonationForm:function(){var t=this;this.provideAmount(),this.provideBasketInfo();var e=new CustomEvent("donateShopFinished",{detail:{firstFinish:t.firstFinish}});document.dispatchEvent(e),this.firstFinish=!1},navBack:function(t){var e=document.getElementById("shop-iframe");e.style.display="none",t&&history.back(),this.isFinished=!1},provideAmount:function(){donateShopData.amount=this.basket.accumulatedValue},provideBasketInfo:function(){var t="o-"+this.basket.occasion.uid,e="";this.basket.cards.forEach(function(t){e+="_p-"+t.uid}),donateShopData.basket=t+e},basketFilled:function(){return this.basket.cards.length&&Object.keys(this.basket.occasion).length}}},R=G,z=(a("5c0b"),Object(l["a"])(R,s,i,!1,null,null,null));z.options.__file="App.vue";var Q=z.exports,J=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"lightbox"},[a("div",{staticClass:"lightbox__wrapper"},[a("img",{staticClass:"lightbox__image",attrs:{src:t.src}})])])},K=[],Y={name:"Lightbox",props:["src"],data:function(){return{baseUrl:"/donationshop/"}}},W=Y,Z=(a("b78f"),Object(l["a"])(W,J,K,!1,null,"458ee66b",null));Z.options.__file="Lightbox.vue";var X=Z.exports;a("ac74"),a("143a"),a("37e9"),new SmoothScroll('a[href*="#"]',{header:".header",speed:1e3,offset:80,updateURL:!1,popstate:!1});n["a"].component("Lightbox",X),n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(Q)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var n=a("2856"),s=a.n(n);s.a},"6ccf":function(t,e,a){"use strict";var n=a("4276"),s=a.n(n);s.a},"6e17":function(t,e,a){},a5cf:function(t,e,a){"use strict";var n=a("55e6"),s=a.n(n);s.a},ac74:function(t,e){(function(){function t(t,e){e=e||{bubbles:!1,cancelable:!1,detail:void 0};var a=document.createEvent("CustomEvent");return a.initCustomEvent(t,e.bubbles,e.cancelable,e.detail),a}t.prototype=window.Event.prototype,window.CustomEvent=t})()},b78f:function(t,e,a){"use strict";var n=a("1aee"),s=a.n(n);s.a},c01c:function(t,e,a){"use strict";var n=a("0553"),s=a.n(n);s.a},daf2:function(t,e,a){"use strict";var n=a("6e17"),s=a.n(n);s.a},ffd1:function(t,e,a){"use strict";var n=a("5145"),s=a.n(n);s.a}});
//# sourceMappingURL=app.c672a0c8.js.map