!function(){var t={3099:function(t){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},9670:function(t,e,n){var r=n(111);t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},1318:function(t,e,n){var r=n(5656),o=n(7466),i=n(1400),a=function(t){return function(e,n,a){var c,s=r(e),u=o(s.length),f=i(a,u);if(t&&n!=n){for(;u>f;)if((c=s[f++])!=c)return!0}else for(;u>f;f++)if((t||f in s)&&s[f]===n)return t||f||0;return!t&&-1}};t.exports={includes:a(!0),indexOf:a(!1)}},4326:function(t){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},9920:function(t,e,n){var r=n(6656),o=n(3887),i=n(1236),a=n(3070);t.exports=function(t,e){for(var n=o(e),c=a.f,s=i.f,u=0;u<n.length;u++){var f=n[u];r(t,f)||c(t,f,s(e,f))}}},8880:function(t,e,n){var r=n(9781),o=n(3070),i=n(9114);t.exports=r?function(t,e,n){return o.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},9114:function(t){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},9781:function(t,e,n){var r=n(7293);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},317:function(t,e,n){var r=n(7854),o=n(111),i=r.document,a=o(i)&&o(i.createElement);t.exports=function(t){return a?i.createElement(t):{}}},8113:function(t,e,n){var r=n(5005);t.exports=r("navigator","userAgent")||""},748:function(t){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2109:function(t,e,n){var r=n(7854),o=n(1236).f,i=n(8880),a=n(1320),c=n(3505),s=n(9920),u=n(4705);t.exports=function(t,e){var n,f,l,p,h,d=t.target,v=t.global,y=t.stat;if(n=v?r:y?r[d]||c(d,{}):(r[d]||{}).prototype)for(f in e){if(p=e[f],l=t.noTargetGet?(h=o(n,f))&&h.value:n[f],!u(v?f:d+(y?".":"#")+f,t.forced)&&void 0!==l){if(typeof p==typeof l)continue;s(p,l)}(t.sham||l&&l.sham)&&i(p,"sham",!0),a(n,f,p,t)}}},7293:function(t){t.exports=function(t){try{return!!t()}catch(t){return!0}}},7065:function(t,e,n){"use strict";var r=n(3099),o=n(111),i=[].slice,a={},c=function(t,e,n){if(!(e in a)){for(var r=[],o=0;o<e;o++)r[o]="a["+o+"]";a[e]=Function("C,a","return new C("+r.join(",")+")")}return a[e](t,n)};t.exports=Function.bind||function(t){var e=r(this),n=i.call(arguments,1),a=function(){var r=n.concat(i.call(arguments));return this instanceof a?c(e,r.length,r):e.apply(t,r)};return o(e.prototype)&&(a.prototype=e.prototype),a}},5005:function(t,e,n){var r=n(857),o=n(7854),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,e){return arguments.length<2?i(r[t])||i(o[t]):r[t]&&r[t][e]||o[t]&&o[t][e]}},7854:function(t,e,n){var r=function(t){return t&&t.Math==Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||function(){return this}()||Function("return this")()},6656:function(t,e,n){var r=n(7908),o={}.hasOwnProperty;t.exports=function(t,e){return o.call(r(t),e)}},3501:function(t){t.exports={}},4664:function(t,e,n){var r=n(9781),o=n(7293),i=n(317);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},8361:function(t,e,n){var r=n(7293),o=n(4326),i="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},2788:function(t,e,n){var r=n(5465),o=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(t){return o.call(t)}),t.exports=r.inspectSource},9909:function(t,e,n){var r,o,i,a=n(8536),c=n(7854),s=n(111),u=n(8880),f=n(6656),l=n(5465),p=n(6200),h=n(3501),d="Object already initialized",v=c.WeakMap;if(a||l.state){var y=l.state||(l.state=new v),b=y.get,g=y.has,m=y.set;r=function(t,e){if(g.call(y,t))throw new TypeError(d);return e.facade=t,m.call(y,t,e),e},o=function(t){return b.call(y,t)||{}},i=function(t){return g.call(y,t)}}else{var x=p("state");h[x]=!0,r=function(t,e){if(f(t,x))throw new TypeError(d);return e.facade=t,u(t,x,e),e},o=function(t){return f(t,x)?t[x]:{}},i=function(t){return f(t,x)}}t.exports={set:r,get:o,has:i,enforce:function(t){return i(t)?o(t):r(t,{})},getterFor:function(t){return function(e){var n;if(!s(e)||(n=o(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}}}},4705:function(t,e,n){var r=n(7293),o=/#|\.prototype\./,i=function(t,e){var n=c[a(t)];return n==u||n!=s&&("function"==typeof e?r(e):!!e)},a=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},c=i.data={},s=i.NATIVE="N",u=i.POLYFILL="P";t.exports=i},111:function(t){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},1913:function(t){t.exports=!1},8536:function(t,e,n){var r=n(7854),o=n(2788),i=r.WeakMap;t.exports="function"==typeof i&&/native code/.test(o(i))},3070:function(t,e,n){var r=n(9781),o=n(4664),i=n(9670),a=n(7593),c=Object.defineProperty;e.f=r?c:function(t,e,n){if(i(t),e=a(e,!0),i(n),o)try{return c(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},1236:function(t,e,n){var r=n(9781),o=n(5296),i=n(9114),a=n(5656),c=n(7593),s=n(6656),u=n(4664),f=Object.getOwnPropertyDescriptor;e.f=r?f:function(t,e){if(t=a(t),e=c(e,!0),u)try{return f(t,e)}catch(t){}if(s(t,e))return i(!o.f.call(t,e),t[e])}},8006:function(t,e,n){var r=n(6324),o=n(748).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},5181:function(t,e){e.f=Object.getOwnPropertySymbols},6324:function(t,e,n){var r=n(6656),o=n(5656),i=n(1318).indexOf,a=n(3501);t.exports=function(t,e){var n,c=o(t),s=0,u=[];for(n in c)!r(a,n)&&r(c,n)&&u.push(n);for(;e.length>s;)r(c,n=e[s++])&&(~i(u,n)||u.push(n));return u}},5296:function(t,e){"use strict";var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,o=r&&!n.call({1:2},1);e.f=o?function(t){var e=r(this,t);return!!e&&e.enumerable}:n},3887:function(t,e,n){var r=n(5005),o=n(8006),i=n(5181),a=n(9670);t.exports=r("Reflect","ownKeys")||function(t){var e=o.f(a(t)),n=i.f;return n?e.concat(n(t)):e}},857:function(t,e,n){var r=n(7854);t.exports=r},1320:function(t,e,n){var r=n(7854),o=n(8880),i=n(6656),a=n(3505),c=n(2788),s=n(9909),u=s.get,f=s.enforce,l=String(String).split("String");(t.exports=function(t,e,n,c){var s,u=!!c&&!!c.unsafe,p=!!c&&!!c.enumerable,h=!!c&&!!c.noTargetGet;"function"==typeof n&&("string"!=typeof e||i(n,"name")||o(n,"name",e),(s=f(n)).source||(s.source=l.join("string"==typeof e?e:""))),t!==r?(u?!h&&t[e]&&(p=!0):delete t[e],p?t[e]=n:o(t,e,n)):p?t[e]=n:a(e,n)})(Function.prototype,"toString",(function(){return"function"==typeof this&&u(this).source||c(this)}))},4488:function(t){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},3505:function(t,e,n){var r=n(7854),o=n(8880);t.exports=function(t,e){try{o(r,t,e)}catch(n){r[t]=e}return e}},6200:function(t,e,n){var r=n(2309),o=n(9711),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},5465:function(t,e,n){var r=n(7854),o=n(3505),i="__core-js_shared__",a=r[i]||o(i,{});t.exports=a},2309:function(t,e,n){var r=n(1913),o=n(5465);(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.12.1",mode:r?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},1400:function(t,e,n){var r=n(9958),o=Math.max,i=Math.min;t.exports=function(t,e){var n=r(t);return n<0?o(n+e,0):i(n,e)}},5656:function(t,e,n){var r=n(8361),o=n(4488);t.exports=function(t){return r(o(t))}},9958:function(t){var e=Math.ceil,n=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?n:e)(t)}},7466:function(t,e,n){var r=n(9958),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},7908:function(t,e,n){var r=n(4488);t.exports=function(t){return Object(r(t))}},7593:function(t,e,n){var r=n(111);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},9711:function(t){var e=0,n=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++e+n).toString(36)}},4812:function(t,e,n){n(2109)({target:"Function",proto:!0},{bind:n(7065)})},9070:function(t,e,n){var r=n(2109),o=n(9781);r({target:"Object",stat:!0,forced:!o,sham:!o},{defineProperty:n(3070).f})},2564:function(t,e,n){var r=n(2109),o=n(7854),i=n(8113),a=[].slice,c=function(t){return function(e,n){var r=arguments.length>2,o=r?a.call(arguments,2):void 0;return t(r?function(){("function"==typeof e?e:Function(e)).apply(this,o)}:e,n)}};r({global:!0,bind:!0,forced:/MSIE .\./.test(i)},{setTimeout:c(o.setTimeout),setInterval:c(o.setInterval)})},6726:function(t,e,n){"use strict";var r=n(3645),o=n.n(r)()((function(t){return t[1]}));o.push([t.id,"* {\n  margin: 0;\n  padding: 0;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\nbody {\n  font: bold 20px 'Courier';\n}\n#main {\n  width: 360px;\n  height: 420px;\n  background-color: #b7d4a8;\n  margin: 100px auto;\n  border: 10px solid black;\n  border-radius: 25px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: column;\n          flex-flow: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  -webkit-transition: all 0.5s;\n  transition: all 0.5s;\n}\n#main #stage {\n  width: 304px;\n  height: 304px;\n  border: 2px solid black;\n  position: relative;\n  -webkit-transition: all 0.5s;\n  transition: all 0.5s;\n}\n#main #stage #snake > div:first-child {\n  background-color: red;\n}\n#main #stage #snake > div {\n  width: 10px;\n  height: 10px;\n  background-color: black;\n  border: 1px solid #b7d4a8;\n  position: absolute;\n}\n#main #stage #food {\n  width: 10px;\n  height: 10px;\n  position: absolute;\n  left: 40px;\n  top: 100px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: row wrap;\n          flex-flow: row wrap;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -ms-flex-line-pack: justify;\n      align-content: space-between;\n}\n#main #stage #food > div {\n  width: 4px;\n  height: 4px;\n  background-color: black;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n}\n#main #score-panel {\n  width: 300px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n",""]),e.Z=o},3645:function(t){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=t(e);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,r){"string"==typeof t&&(t=[[null,t,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<t.length;c++){var s=[].concat(t[c]);r&&o[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),e.push(s))}},e}},3379:function(t,e,n){"use strict";var r,o=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}(),i=[];function a(t){for(var e=-1,n=0;n<i.length;n++)if(i[n].identifier===t){e=n;break}return e}function c(t,e){for(var n={},r=[],o=0;o<t.length;o++){var c=t[o],s=e.base?c[0]+e.base:c[0],u=n[s]||0,f="".concat(s," ").concat(u);n[s]=u+1;var l=a(f),p={css:c[1],media:c[2],sourceMap:c[3]};-1!==l?(i[l].references++,i[l].updater(p)):i.push({identifier:f,updater:v(p,e),references:1}),r.push(f)}return r}function s(t){var e=document.createElement("style"),r=t.attributes||{};if(void 0===r.nonce){var i=n.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(t){e.setAttribute(t,r[t])})),"function"==typeof t.insert)t.insert(e);else{var a=o(t.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var u,f=(u=[],function(t,e){return u[t]=e,u.filter(Boolean).join("\n")});function l(t,e,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(t.styleSheet)t.styleSheet.cssText=f(e,o);else{var i=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}function p(t,e,n){var r=n.css,o=n.media,i=n.sourceMap;if(o?t.setAttribute("media",o):t.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}var h=null,d=0;function v(t,e){var n,r,o;if(e.singleton){var i=d++;n=h||(h=s(e)),r=l.bind(null,n,i,!1),o=l.bind(null,n,i,!0)}else n=s(e),r=p.bind(null,n,e),o=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var n=c(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var r=0;r<n.length;r++){var o=a(n[r]);i[o].references--}for(var s=c(t,e),u=0;u<n.length;u++){var f=a(n[u]);0===i[f].references&&(i[f].updater(),i.splice(f,1))}n=s}}}}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return t[r](i,i.exports,n),i.exports}n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,{a:e}),e},n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},function(){"use strict";var t=n(3379),e=n.n(t),r=n(6726);function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}e()(r.Z,{insert:"head",singleton:!1}),r.Z.locals,n(4812),n(2564),n(9070);var i=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.element=document.getElementById("snake"),this.head=document.querySelector("#snake > div"),this.bodies=this.element.getElementsByTagName("div")}var e,n;return e=t,(n=[{key:"X",get:function(){return this.head.offsetLeft},set:function(t){if(this.X!==t){if(t<0||t>290)throw new Error("撞到墙了噢~");this.bodies[1]&&this.bodies[1].offsetLeft===t&&(t=t>this.X?this.X-10:this.X+10),this.moveBody(),this.head.style.left=t+"px",this.checkHeadBody()}}},{key:"Y",get:function(){return this.head.offsetTop},set:function(t){if(this.Y!==t){if(t<0||t>290)throw new Error("撞到墙了噢~");this.bodies[1]&&this.bodies[1].offsetTop===t&&(t=t>this.Y?this.Y-10:this.Y+10),this.moveBody(),this.head.style.top=t+"px",this.checkHeadBody()}}},{key:"addBody",value:function(){this.element.insertAdjacentHTML("beforeend","<div></div>")}},{key:"moveBody",value:function(){for(var t=this.bodies.length-1;t>0;t--){var e=this.bodies[t-1].offsetLeft,n=this.bodies[t-1].offsetTop;this.bodies[t].style.left=e+"px",this.bodies[t].style.top=n+"px",this.element.style.transition="all .5s"}}},{key:"checkHeadBody",value:function(){for(var t=1;t<this.bodies.length;t++){var e=this.bodies[t];if(this.X===e.offsetLeft&&this.Y===e.offsetTop)throw new Error("吃到自己了噢~")}}}])&&o(e.prototype,n),t}();function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var c=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.element=document.getElementById("food")}var e,n;return e=t,(n=[{key:"X",get:function(){return this.element.offsetLeft}},{key:"Y",get:function(){return this.element.offsetTop}},{key:"change",value:function(t){for(var e=10*Math.floor(30*Math.random()),n=10*Math.floor(30*Math.random()),r=!1,o=0;o<t.length;o++){var i=t[o];e===i.offsetLeft&&n===i.offsetTop&&(r=!0)}r?this.change(t):(this.element.style.left=e+"px",this.element.style.top=n+"px",this.element.style.transition="all .5s")}}])&&a(e.prototype,n),t}();function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function u(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var f=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;s(this,t),this.maxLevel=e,this.upScore=n,this.score=0,this.level=1,this.scoreEle=document.getElementById("score"),this.levelEle=document.getElementById("level")}var e,n;return e=t,(n=[{key:"addScore",value:function(){this.scoreEle.innerHTML=++this.score+"",this.score%this.upScore==0&&this.levelUp()}},{key:"levelUp",value:function(){this.level<this.maxLevel?this.levelEle.innerHTML=++this.level+"":this.levelEle.innerHTML=this.level+"Max"}}])&&u(e.prototype,n),t}();function l(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}new(function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.direction="",this.isLive=!0,this.snake=new i,this.food=new c,this.scorePanel=new f(10,1),this.init()}var e,n;return e=t,(n=[{key:"init",value:function(){document.addEventListener("keydown",this.keydownHandler.bind(this)),this.run()}},{key:"keydownHandler",value:function(t){this.direction=t.key}},{key:"run",value:function(){var t=this.snake.X,e=this.snake.Y;switch(this.direction){case"ArrowUp":case"Up":e-=10;break;case"ArrowDown":case"Down":e+=10;break;case"ArrowLeft":case"Left":t-=10;break;case"ArrowRight":case"Right":t+=10}this.checkEat(t,e);try{this.snake.X=t,this.snake.Y=e}catch(t){alert(t.message+"GAME OVER!"),this.isLive=!1}this.isLive&&setTimeout(this.run.bind(this),150-5*(this.scorePanel.level-1))}},{key:"checkEat",value:function(t,e){t===this.food.X&&e===this.food.Y&&(this.food.change(this.snake.bodies),this.scorePanel.addScore(),this.snake.addBody())}}])&&l(e.prototype,n),t}())}()}();