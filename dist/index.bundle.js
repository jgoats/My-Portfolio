(()=>{var e={559:(e,t,n)=>{e.exports=n(335)},786:(e,t,n)=>{"use strict";var r=n(266),o=n(608),a=n(159),i=n(568),s=n(943),c=n(201),l=n(745),u=n(979);e.exports=function(e){return new Promise((function(t,n){var d=e.data,p=e.headers;r.isFormData(d)&&delete p["Content-Type"];var f=new XMLHttpRequest;if(e.auth){var m=e.auth.username||"",h=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";p.Authorization="Basic "+btoa(m+":"+h)}var g=s(e.baseURL,e.url);if(f.open(e.method.toUpperCase(),i(g,e.params,e.paramsSerializer),!0),f.timeout=e.timeout,f.onreadystatechange=function(){if(f&&4===f.readyState&&(0!==f.status||f.responseURL&&0===f.responseURL.indexOf("file:"))){var r="getAllResponseHeaders"in f?c(f.getAllResponseHeaders()):null,a={data:e.responseType&&"text"!==e.responseType?f.response:f.responseText,status:f.status,statusText:f.statusText,headers:r,config:e,request:f};o(t,n,a),f=null}},f.onabort=function(){f&&(n(u("Request aborted",e,"ECONNABORTED",f)),f=null)},f.onerror=function(){n(u("Network Error",e,null,f)),f=null},f.ontimeout=function(){var t="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(u(t,e,"ECONNABORTED",f)),f=null},r.isStandardBrowserEnv()){var b=(e.withCredentials||l(g))&&e.xsrfCookieName?a.read(e.xsrfCookieName):void 0;b&&(p[e.xsrfHeaderName]=b)}if("setRequestHeader"in f&&r.forEach(p,(function(e,t){void 0===d&&"content-type"===t.toLowerCase()?delete p[t]:f.setRequestHeader(t,e)})),r.isUndefined(e.withCredentials)||(f.withCredentials=!!e.withCredentials),e.responseType)try{f.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&f.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&f.upload&&f.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){f&&(f.abort(),n(e),f=null)})),d||(d=null),f.send(d)}))}},335:(e,t,n)=>{"use strict";var r=n(266),o=n(345),a=n(929),i=n(650);function s(e){var t=new a(e),n=o(a.prototype.request,t);return r.extend(n,a.prototype,t),r.extend(n,t),n}var c=s(n(46));c.Axios=a,c.create=function(e){return s(i(c.defaults,e))},c.Cancel=n(760),c.CancelToken=n(510),c.isCancel=n(825),c.all=function(e){return Promise.all(e)},c.spread=n(346),c.isAxiosError=n(276),e.exports=c,e.exports.default=c},760:e=>{"use strict";function t(e){this.message=e}t.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},t.prototype.__CANCEL__=!0,e.exports=t},510:(e,t,n)=>{"use strict";var r=n(760);function o(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var n=this;e((function(e){n.reason||(n.reason=new r(e),t(n.reason))}))}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.source=function(){var e;return{token:new o((function(t){e=t})),cancel:e}},e.exports=o},825:e=>{"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},929:(e,t,n)=>{"use strict";var r=n(266),o=n(568),a=n(252),i=n(29),s=n(650);function c(e){this.defaults=e,this.interceptors={request:new a,response:new a}}c.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=s(this.defaults,e)).method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=[i,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach((function(e){t.unshift(e.fulfilled,e.rejected)})),this.interceptors.response.forEach((function(e){t.push(e.fulfilled,e.rejected)}));t.length;)n=n.then(t.shift(),t.shift());return n},c.prototype.getUri=function(e){return e=s(this.defaults,e),o(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},r.forEach(["delete","get","head","options"],(function(e){c.prototype[e]=function(t,n){return this.request(s(n||{},{method:e,url:t,data:(n||{}).data}))}})),r.forEach(["post","put","patch"],(function(e){c.prototype[e]=function(t,n,r){return this.request(s(r||{},{method:e,url:t,data:n}))}})),e.exports=c},252:(e,t,n)=>{"use strict";var r=n(266);function o(){this.handlers=[]}o.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},o.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},o.prototype.forEach=function(e){r.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=o},943:(e,t,n)=>{"use strict";var r=n(406),o=n(27);e.exports=function(e,t){return e&&!r(t)?o(e,t):t}},979:(e,t,n)=>{"use strict";var r=n(50);e.exports=function(e,t,n,o,a){var i=new Error(e);return r(i,t,n,o,a)}},29:(e,t,n)=>{"use strict";var r=n(266),o=n(661),a=n(825),i=n(46);function s(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){return s(e),e.headers=e.headers||{},e.data=o(e.data,e.headers,e.transformRequest),e.headers=r.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),r.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||i.adapter)(e).then((function(t){return s(e),t.data=o(t.data,t.headers,e.transformResponse),t}),(function(t){return a(t)||(s(e),t&&t.response&&(t.response.data=o(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}},50:e=>{"use strict";e.exports=function(e,t,n,r,o){return e.config=t,n&&(e.code=n),e.request=r,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}},650:(e,t,n)=>{"use strict";var r=n(266);e.exports=function(e,t){t=t||{};var n={},o=["url","method","data"],a=["headers","auth","proxy","params"],i=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],s=["validateStatus"];function c(e,t){return r.isPlainObject(e)&&r.isPlainObject(t)?r.merge(e,t):r.isPlainObject(t)?r.merge({},t):r.isArray(t)?t.slice():t}function l(o){r.isUndefined(t[o])?r.isUndefined(e[o])||(n[o]=c(void 0,e[o])):n[o]=c(e[o],t[o])}r.forEach(o,(function(e){r.isUndefined(t[e])||(n[e]=c(void 0,t[e]))})),r.forEach(a,l),r.forEach(i,(function(o){r.isUndefined(t[o])?r.isUndefined(e[o])||(n[o]=c(void 0,e[o])):n[o]=c(void 0,t[o])})),r.forEach(s,(function(r){r in t?n[r]=c(e[r],t[r]):r in e&&(n[r]=c(void 0,e[r]))}));var u=o.concat(a).concat(i).concat(s),d=Object.keys(e).concat(Object.keys(t)).filter((function(e){return-1===u.indexOf(e)}));return r.forEach(d,l),n}},608:(e,t,n)=>{"use strict";var r=n(979);e.exports=function(e,t,n){var o=n.config.validateStatus;n.status&&o&&!o(n.status)?t(r("Request failed with status code "+n.status,n.config,null,n.request,n)):e(n)}},661:(e,t,n)=>{"use strict";var r=n(266);e.exports=function(e,t,n){return r.forEach(n,(function(n){e=n(e,t)})),e}},46:(e,t,n)=>{"use strict";var r=n(266),o=n(490),a={"Content-Type":"application/x-www-form-urlencoded"};function i(e,t){!r.isUndefined(e)&&r.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var s,c={adapter:(("undefined"!=typeof XMLHttpRequest||"undefined"!=typeof process&&"[object process]"===Object.prototype.toString.call(process))&&(s=n(786)),s),transformRequest:[function(e,t){return o(t,"Accept"),o(t,"Content-Type"),r.isFormData(e)||r.isArrayBuffer(e)||r.isBuffer(e)||r.isStream(e)||r.isFile(e)||r.isBlob(e)?e:r.isArrayBufferView(e)?e.buffer:r.isURLSearchParams(e)?(i(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):r.isObject(e)?(i(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};r.forEach(["delete","get","head"],(function(e){c.headers[e]={}})),r.forEach(["post","put","patch"],(function(e){c.headers[e]=r.merge(a)})),e.exports=c},345:e=>{"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},568:(e,t,n)=>{"use strict";var r=n(266);function o(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,n){if(!t)return e;var a;if(n)a=n(t);else if(r.isURLSearchParams(t))a=t.toString();else{var i=[];r.forEach(t,(function(e,t){null!=e&&(r.isArray(e)?t+="[]":e=[e],r.forEach(e,(function(e){r.isDate(e)?e=e.toISOString():r.isObject(e)&&(e=JSON.stringify(e)),i.push(o(t)+"="+o(e))})))})),a=i.join("&")}if(a){var s=e.indexOf("#");-1!==s&&(e=e.slice(0,s)),e+=(-1===e.indexOf("?")?"?":"&")+a}return e}},27:e=>{"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},159:(e,t,n)=>{"use strict";var r=n(266);e.exports=r.isStandardBrowserEnv()?{write:function(e,t,n,o,a,i){var s=[];s.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),r.isString(o)&&s.push("path="+o),r.isString(a)&&s.push("domain="+a),!0===i&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},406:e=>{"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},276:e=>{"use strict";e.exports=function(e){return"object"==typeof e&&!0===e.isAxiosError}},745:(e,t,n)=>{"use strict";var r=n(266);e.exports=r.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function o(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=o(window.location.href),function(t){var n=r.isString(t)?o(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return!0}},490:(e,t,n)=>{"use strict";var r=n(266);e.exports=function(e,t){r.forEach(e,(function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])}))}},201:(e,t,n)=>{"use strict";var r=n(266),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,a,i={};return e?(r.forEach(e.split("\n"),(function(e){if(a=e.indexOf(":"),t=r.trim(e.substr(0,a)).toLowerCase(),n=r.trim(e.substr(a+1)),t){if(i[t]&&o.indexOf(t)>=0)return;i[t]="set-cookie"===t?(i[t]?i[t]:[]).concat([n]):i[t]?i[t]+", "+n:n}})),i):i}},346:e=>{"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},266:(e,t,n)=>{"use strict";var r=n(345),o=Object.prototype.toString;function a(e){return"[object Array]"===o.call(e)}function i(e){return void 0===e}function s(e){return null!==e&&"object"==typeof e}function c(e){if("[object Object]"!==o.call(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}function l(e){return"[object Function]"===o.call(e)}function u(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),a(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}e.exports={isArray:a,isArrayBuffer:function(e){return"[object ArrayBuffer]"===o.call(e)},isBuffer:function(e){return null!==e&&!i(e)&&null!==e.constructor&&!i(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:s,isPlainObject:c,isUndefined:i,isDate:function(e){return"[object Date]"===o.call(e)},isFile:function(e){return"[object File]"===o.call(e)},isBlob:function(e){return"[object Blob]"===o.call(e)},isFunction:l,isStream:function(e){return s(e)&&l(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&"undefined"!=typeof window&&"undefined"!=typeof document},forEach:u,merge:function e(){var t={};function n(n,r){c(t[r])&&c(n)?t[r]=e(t[r],n):c(n)?t[r]=e({},n):a(n)?t[r]=n.slice():t[r]=n}for(var r=0,o=arguments.length;r<o;r++)u(arguments[r],n);return t},extend:function(e,t,n){return u(t,(function(t,o){e[o]=n&&"function"==typeof t?r(t,n):t})),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}}},705:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);r&&o[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},800:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(705),o=n.n(r)()((function(e){return e[1]}));o.push([e.id,"*{padding:0px;margin:0px;box-sizing:border-box}body{font-family:'Oxygen', sans-serif;-webkit-user-select:none;-ms-user-select:none;user-select:none}.hamburger-container{display:none}.hamburger-content{display:none}.burger-item{display:none}.nav-container{display:flex;width:60vw;position:absolute;z-index:2;left:50%;box-shadow:80px 40px 100px, 0 0 2px, 0 0 20em #94f182, 0 0 0.5em #29d4e0, 0 0 0.1em #94f182, 0px 0px 100px #87e4dc;background-color:#1f241e;transform:translateX(-50%);border-radius:5px;top:8%;padding:5px;align-items:center;justify-content:space-around}.nav-container a{color:#fff;text-decoration:none}.nav-container a:active{color:white;text-decoration:none}.nav-container a[tabindex]:focus{color:white;outline:none}.nav-container .nav-item{display:flex;color:white;font-family:'Space Mono', monospace;font-style:none}.nav-container .nav-item:hover{cursor:pointer;text-decoration:underline}.nav-buttons{position:absolute;display:flex;align-items:center;justify-content:center;z-index:2;left:10vw;transform:translateX(-50%);top:8%}.scroll-bar{padding:10px 10px;overflow-y:scroll;overflow-x:hidden;opacity:0.9;width:100vw;display:block;height:100vh;position:absolute;z-index:1}.scroll-bar .about-me-heading{color:white;text-align:center;margin-top:20px;margin-top:20vh}.scroll-bar .about-me-container{text-align:center;color:white;line-height:2rem;margin-top:60px;display:block;margin-left:auto;margin-right:auto;width:80%}.scroll-bar .skills-heading{color:white;text-align:center;margin-top:20px}.scroll-bar .skills-container{text-align:left;margin-top:60px}.scroll-bar .project-heading{color:white;text-align:center;margin-top:20px}.scroll-bar .project-container{margin-top:60px;display:flex;flex-direction:row;flex-wrap:wrap;justify-content:center}.scroll-bar .contact-heading{color:white;text-align:center;margin-top:30px;margin-bottom:60px}.scroll-bar .contact-container{display:block;min-width:500px;width:50%;max-width:1000px;position:relative;left:50%;transform:translateX(-50%);align-items:center;justify-content:center;flex-direction:column;background-color:#000;margin-bottom:20px;border-radius:20px;box-shadow:0px 0px 5px white}.scroll-bar .contact-container form{color:white;width:100%;padding:20px}.scroll-bar .contact-container form .form-element{padding:10px;color:white}.scroll-bar .contact-container form .form-element input{display:block;border-top-style:hidden;border-right-style:hidden;border-left-style:hidden;border-bottom-style:solid;width:100%;color:white;margin-left:auto;margin-right:auto;margin-top:10px;padding:10px;font-size:20px;background-color:black}.scroll-bar .contact-container form .form-element textarea{display:block;box-shadow:0px 0px 5px 0px #afebeb;width:100%;color:white;margin-left:auto;margin-right:auto;margin-top:10px;padding:10px;font-size:20px;background-color:black}.scroll-bar .contact-container form .form-element input,.scroll-bar .contact-container form textarea:focus{outline:none}.scroll-bar .contact-container form .form-element label{font-size:20px;text-align:left}.scroll-bar .contact-container form .form-element{text-align:left}.scroll-bar .contact-container form .form-element #spinner{display:block;width:50px;left:50%;position:relative;transform:translateX(-50%);height:50px;margin:0px 0px 15px 0px}.scroll-bar .contact-container form .form-element #spinner .c1{opacity:0;position:absolute}.scroll-bar .contact-container form .form-element #spinner .c2{opacity:0;position:absolute}.scroll-bar .contact-container form .form-element #spinner .c3{opacity:0;position:absolute}.scroll-bar .contact-container form .form-element #spinner .c4{opacity:0;position:absolute}.scroll-bar .contact-container form .form-element #spinner .c5{opacity:0;position:absolute}.scroll-bar .contact-container form .form-element #spinner .c6{opacity:0;position:absolute}.scroll-bar .contact-container form .form-element #spinner .c7{opacity:0;position:absolute}.scroll-bar .contact-container form .form-element #spinner .c8{opacity:0;position:absolute}.scroll-bar .contact-container form .form-element #spinner .c9{opacity:0;position:absolute}.scroll-bar .contact-container form textarea{resize:vertical}.scroll-bar .contact-container form button{width:100%;padding:10px;text-align:center;outline:none;background-color:#afebeb;border:none;font-size:24px}.scroll-bar .contact-container form button:hover{cursor:pointer;background-color:#90f087}.scroll-bar .contact-container form #status{text-align:center;font-size:24px}.scroll-bar .contact-container form .success{color:#90f087;animation:status 4s ease-in}.scroll-bar .contact-container form .error{color:pink;opacity:1;animation:status 4s ease-out}@keyframes status{0%{opacity:1}90%{opacity:1}100%{opacity:0}}.scroll-bar .socal-media-icons{display:block;text-align:center}.scroll-bar .footer-message{text-align:center;color:white}.scroll-bar #github{width:50px;height:50px;text-align:center;margin:10px}.scroll-bar #github:hover{cursor:pointer}.scroll-bar #linkedin{width:50px;height:50px;text-align:center;margin:10px}.scroll-bar #linkedin:hover{cursor:pointer}.scroll-bar .project-card{box-shadow:0px 0px 5px 2px white;height:252px}.scroll-bar .project-card a{text-decoration:none}.scroll-bar .project-card .video{width:200px;height:200px;object-fit:fill;padding:0px;margin:0px}.scroll-bar .card-name{text-decoration:none;color:white;text-align:center}.scroll-bar .card-image{width:250px;height:200px}#img{width:30px;height:30px;text-align:center;margin:0px 10px;display:block}#img:hover{cursor:pointer}::-webkit-scrollbar{width:10px}::-webkit-scrollbar-track{background:black;border-radius:5px}::-webkit-scrollbar-thumb{background:#90f087;border-radius:5px}::-webkit-scrollbar-thumb:hover{background:#afebeb}.softprogress *:not([code-softprogress]){margin:5px 0;font-size:16px}.softprogress{width:80%;max-width:500px;padding:15px;box-sizing:border-box;display:block;margin-right:auto;margin-left:auto}.softprogress p{color:white}.softprogress [code-softprogress]{height:25px;box-shadow:0 0 1px 1px rgba(0,20,0,0.35) inset;border-radius:15px;margin:5px 0 10px 0;overflow:hidden;background-color:#ddd}[code-softprogress]::after{content:\"\";display:flex;justify-content:flex-end;align-items:center;background-image:linear-gradient(to bottom right, #289bcc, #90f087);width:0;height:100%;box-sizing:border-box;font-size:16px;color:#fff;border-radius:15px;padding:0 3px;transition:3s}[code-softprogress].run-softprogress::after{content:attr(code-softprogress) \"% \";width:var(--run-softprogress);color:black;font-weight:bold;font-size:20px}@media screen and (max-width: 800px){.nav-buttons{position:absolute;display:flex;align-items:center;justify-content:center;z-index:2;left:5vw;top:2%;transform:translateY(0%);background-color:black;padding:10px;box-shadow:0px 0px 2px white}.nav-container{display:none}.hamburger-content{margin:0px;display:none;position:absolute;width:80vw;margin-left:10%;margin-right:auto;z-index:2;transform:translateY(0%);top:25%;box-shadow:0px 0px 4px #9cb99c;flex-direction:column;justify-content:center;align-items:center;background-color:black;opacity:0.9}.hamburger-content .burger-item{display:block;color:white;text-decoration:none;list-style:none;position:relative;padding:10px;font-size:30px;font-family:'Oxygen', sans-serif}.hamburger-content .burger-item .link{color:white;text-decoration:none}.hamburger-content .burger-item :hover{cursor:pointer;text-decoration:underline}.hamburger-container{margin:0px 10px;display:block;width:30px;height:30px;position:static;padding:0px}.hamburger-container .nav-ele{height:2px;background-color:white;margin:7px 0px}.hamburger-container:hover{cursor:pointer}#img{width:30px;height:30px}.scroll-bar{width:100vw}.scroll-bar .contact-container{min-width:300px;width:90%;max-width:400px}.softprogress{width:100%}::-webkit-scrollbar{width:20px}::-webkit-scrollbar-track{background:black;border-radius:20px}::-webkit-scrollbar-thumb{background:#90f087;border-radius:20px}}\n",""]);const a=o},379:(e,t,n)=>{"use strict";var r,o=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function i(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function s(e,t){for(var n={},r=[],o=0;o<e.length;o++){var s=e[o],c=t.base?s[0]+t.base:s[0],l=n[c]||0,u="".concat(c," ").concat(l);n[c]=l+1;var d=i(u),p={css:s[1],media:s[2],sourceMap:s[3]};-1!==d?(a[d].references++,a[d].updater(p)):a.push({identifier:u,updater:h(p,t),references:1}),r.push(u)}return r}function c(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var a=n.nc;a&&(r.nonce=a)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var i=o(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var l,u=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function d(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=u(t,o);else{var a=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}function p(e,t,n){var r=n.css,o=n.media,a=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var f=null,m=0;function h(e,t){var n,r,o;if(t.singleton){var a=m++;n=f||(f=c(t)),r=d.bind(null,n,a,!1),o=d.bind(null,n,a,!0)}else n=c(t),r=p.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var n=s(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=i(n[r]);a[o].references--}for(var c=s(e,t),l=0;l<n.length;l++){var u=i(n[l]);0===a[u].references&&(a[u].updater(),a.splice(u,1))}n=c}}}},327:e=>{e.exports="data:image/svg+xml,%3csvg id='Bold' enable-background='new 0 0 32 32' height='512' viewBox='0 0 32 32' width='512' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='m26 32h-20c-3.314 0-6-2.686-6-6v-20c0-3.314 2.686-6 6-6h20c3.314 0 6 2.686 6 6v20c0 3.314-2.686 6-6 6z' fill='%23e3f8fa'/%3e%3cpath d='m16 8.333c-4.42 0-8 3.52-8 7.861 0 3.474 2.292 6.42 5.47 7.458.4.074.547-.169.547-.378 0-.187-.007-.681-.01-1.336-2.225.474-2.695-1.055-2.695-1.055-.364-.907-.89-1.15-.89-1.15-.725-.487.056-.478.056-.478.803.055 1.225.81 1.225.81.713 1.202 1.873.855 2.33.654.072-.508.278-.855.507-1.051-1.777-.197-3.644-.873-3.644-3.885 0-.858.31-1.559.823-2.109-.09-.198-.36-.998.07-2.081 0 0 .67-.211 2.2.806.64-.175 1.32-.261 2-.265.68.004 1.36.09 2 .265 1.52-1.017 2.19-.806 2.19-.806.43 1.083.16 1.882.08 2.081.51.55.82 1.251.82 2.109 0 3.02-1.87 3.685-3.65 3.878.28.236.54.718.54 1.454 0 1.052-.01 1.897-.01 2.153 0 .206.14.452.55.373 3.201-1.03 5.491-3.978 5.491-7.446 0-4.342-3.582-7.862-8-7.862z' fill='%2326c6da'/%3e%3c/svg%3e"},644:e=>{e.exports="data:image/svg+xml,%3csvg height='512' viewBox='0 0 152 152' width='512' xmlns='http://www.w3.org/2000/svg'%3e%3cg id='Layer_2' data-name='Layer 2'%3e%3cg id='Color_Icon' data-name='Color Icon'%3e%3cg id='_07.Linkedin' data-name='07.Linkedin'%3e%3crect id='Background' fill='%234875b4' height='152' rx='12' width='152'/%3e%3cg id='Icon' fill='%23fff'%3e%3cpath d='m116 116v-29.34c0-14.36-3.09-25.41-19.87-25.41-8.07 0-13.48 4.42-15.69 8.62h-.23v-7.28h-15.91v53.41h16.56v-26.45c0-7 1.32-13.7 10-13.7s8.62 8 8.62 14.15v26z'/%3e%3cpath d='m37.32 62.59h16.58v53.41h-16.58z'/%3e%3cpath d='m45.6 36a9.65 9.65 0 1 0 9.61 9.6 9.6 9.6 0 0 0 -9.61-9.6z'/%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/svg%3e"},622:e=>{e.exports="data:image/svg+xml,%3csvg id='Layer_1' enable-background='new 0 0 512 512' height='512' viewBox='0 0 512 512' width='512' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3clinearGradient id='SVGID_1_' gradientUnits='userSpaceOnUse' x1='256.002' x2='256.002' y1='.001' y2='512'%3e%3cstop offset='0' stop-color='%2301f1fe'/%3e%3cstop offset='1' stop-color='%234fadfe'/%3e%3c/linearGradient%3e%3cpath d='m155.501 205.202 87.986 50.798-87.985 50.798v-101.596zm356.5 50.8c0 141.158-114.839 255.998-255.997 255.998-141.16 0-256.002-114.84-256.002-255.998 0-141.16 114.842-256.001 256.002-256.001 141.158 0 255.997 114.842 255.997 256.001zm-232.514-.002c0-4.287-2.287-8.249-6-10.393l-123.985-71.583c-3.713-2.144-8.287-2.144-12 0s-6 6.105-6 10.393v143.166c0 4.287 2.287 8.249 6 10.393 1.856 1.072 3.928 1.607 6 1.607s4.144-.536 6-1.607l123.985-71.583c3.713-2.144 6-6.105 6-10.393zm42.548-71.583c0-6.627-5.373-12-12-12s-12 5.373-12 12v143.166c0 6.627 5.373 12 12 12s12-5.373 12-12zm58.466 0c0-6.627-5.373-12-12-12s-12 5.373-12 12v143.166c0 6.627 5.373 12 12 12s12-5.373 12-12z' fill='url(%23SVGID_1_)'/%3e%3c/svg%3e"}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),(()=>{"use strict";var e=n(559),t=n.n(e),r=n(379),o=n.n(r),a=n(800);o()(a.Z,{insert:"head",singleton:!1}),a.Z.locals;const i=n.p+"12c2d0372b7d7c36ec44f4ce1cb458a8.mp3",s=n.p+"41c813a6f748eea4ac12e0a102ac222e.png";var c=n(622),l=n.n(c);const u=n.p+"f3d3516ad626def9203bdc9dd598b83d.jpg",d=n.p+"840e54b97ff26200bdded302d8be02db.jpg",p=n.p+"3995c1b1bfdfc4c077503ae951d4ea4e.jpg",f=n.p+"05bf88af6ce99fef0cebdfaa84c9bdac.jpg",m=n.p+"00e79a1eabdbbce2ff8a2da94eeb7ff6.jpg",h=n.p+"48141deef5f1c99f3e19c26e5edfe17b.mp4";var g=n(327),b=n.n(g),x=n(644),w=n.n(x);!function(){var e=document.getElementsByClassName("hamburger-content")[0],n=document.getElementsByClassName("hamburger-container")[0],r=document.getElementsByClassName("nav-ele"),o=0;function a(){r[0].style.transform="translateY(9px) rotate(135deg)",r[1].style.transform="scale(0)",r[2].style.transform="translateY(-9px) rotate(-135deg)";for(var t=0;t<r.length;t++)r[t].style.transition="0.2s",r[t].style.backgroundColor="pink";e.style.display="flex",e.style.top="calc(20vh - 1%)",o=1}function c(){for(var t=0;t<r.length;t++)r[t].style.transform="none",r[t].style.backgroundColor="white";e.style.display="none",o=0}function g(e){var t=e.getBoundingClientRect().top-.2*window.innerHeight,n=t%30,r=t-n;console.log(n);var o=0;if(1==Math.sign(t))var a=setInterval((function(){document.getElementsByClassName("scroll-bar")[0].scrollBy(0,30),o>=r?window.clearInterval(a):o+=30}),15);if(-1==Math.sign(t))var i=setInterval((function(){document.getElementsByClassName("scroll-bar")[0].scrollBy(0,-30),o<=r?window.clearInterval(i):o+=-30}),15)}document.getElementById("linkedin").src=w(),document.getElementById("github").src=b(),n.addEventListener("click",(function(){0==o?a.call(window):c.call(window)}),!1);for(var x=document.getElementsByClassName("burger-item"),y=0;y<x.length;y++)x[y].addEventListener("click",(function(e){var t=e.target.id.slice(1),n=document.getElementById("".concat(t));c.call(window),g(n)}),!1);for(var v=document.getElementsByClassName("nav-item"),E=0;E<v.length;E++)v[E].addEventListener("click",(function(e){var t=e.target.id.slice(1),n=document.getElementById("".concat(t));c.call(window),g(n)}),!1);var k=new Audio(i);document.getElementById("img").src=s,document.getElementById("asteroidkiller").src=h,document.getElementById("img").addEventListener("click",(function(){k.paused?(document.getElementById("img").src=l(),k.play()):(document.getElementById("img").src=s,k.pause())}),!1),document.getElementById("contact-button").addEventListener("click",(function(){}),!1);var T,B,R,C=1;function L(){if(C<=9){for(var e=1;e<=9;e++)C===e?document.getElementsByClassName("c".concat(C))[0].style.opacity="1.0":C-1===e?document.getElementsByClassName("c".concat(C-1))[0].style.opacity="0.5":C-2===e?document.getElementsByClassName("c".concat(C-2))[0].style.opacity="0.3":C-3===e?document.getElementsByClassName("c".concat(C-3))[0].style.opacity="0.1":document.getElementsByClassName("c".concat(e))[0].style.opacity="0";9===C?C=1:C++}}function M(){for(var e=1;e<=9;e++)document.getElementsByClassName("c".concat(e))[0].style.opacity="0"}document.getElementById("contact-button").addEventListener("click",(function(e){e.preventDefault();var n=document.getElementById("firstname").value,r=document.getElementById("lastname").value,o=document.getElementById("email").value,a=document.getElementById("message").value,i=document.getElementById("status"),s={firstname:n,lastname:r,email:o,message:a};if(""==s.firstname)i.classList.add("error"),i.innerHTML="please fill out firstname",setTimeout((function(){i.classList.remove("error"),i.innerHTML=""}),4e3);else if(""==s.lastname)i.classList.add("error"),i.innerHTML="please fill out lastname",setTimeout((function(){i.classList.remove("error"),i.innerHTML=""}),4e3);else if(""==s.email||-1==s.email.indexOf("@"))""==s.email?(i.classList.add("error"),i.innerHTML="please fill out email",setTimeout((function(){i.classList.remove("error"),i.innerHTML=""}),4e3)):-1==s.email.indexOf("@")&&(i.classList.add("error"),i.innerHTML="please fill out valid email",setTimeout((function(){i.classList.remove("error"),i.innerHTML=""}),4e3));else if(""==s.message)i.classList.add("error"),i.innerHTML="please fill out message",setTimeout((function(){i.classList.remove("error"),i.innerHTML=""}),4e3);else{var c=window.setInterval(L,75);t()({method:"post",url:"https://contact-form-backend-234.herokuapp.com/send",data:s,headers:{"content-type":"application/json"}}).then((function(e){window.clearInterval(c),console.log(e),M.call(window),e.data.emailSent&&(i.classList.add("success"),i.innerHTML="email was successfully sent",setTimeout((function(){i.classList.remove("success"),i.innerHTML=""}),4e3),document.getElementById("contact-form").reset())})).catch((function(e){e&&(i.classList.add("error"),i.innerHTML="email wasn't sent, please try again",setTimeout((function(){i.classList.remove("error"),i.innerHTML=""}),4e3))}))}}),!1);var S=[];T=new THREE.Scene,(B=new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,1,1e3)).position.z=0,B.position.x=500,B.position.y=500,(R=new THREE.WebGLRenderer({alpha:!0})).setSize(window.innerWidth,window.innerHeight),R.domElement.style.width="100vw",R.domElement.style.height="100vh",R.domElement.style.position="absolute",R.domElement.style.backgroundColor="black",R.domElement.style.overflow="hidden",document.body.appendChild(R.domElement);var j=(new THREE.TextureLoader).load(u),H=new THREE.MeshBasicMaterial({map:j}),N=new THREE.SphereGeometry(50,32,32),A=new THREE.Mesh(N,H);A.position.z=-100,A.position.x=200,A.position.y=350,T.add(A);var O=(new THREE.TextureLoader).load(d),z=new THREE.MeshBasicMaterial({map:O}),I=new THREE.SphereGeometry(50,32,16),U=new THREE.Mesh(I,z);U.position.z=100,U.position.x=400,U.position.y=600,T.add(U);var q=(new THREE.TextureLoader).load(p),P=new THREE.MeshBasicMaterial({map:q}),D=new THREE.SphereGeometry(25,100,100),F=new THREE.Mesh(D,P);F.position.z=0,F.position.x=0,F.position.y=700,T.add(F);var _=(new THREE.TextureLoader).load(f),G=new THREE.MeshBasicMaterial({map:_}),X=new THREE.SphereGeometry(400,100,100),$=new THREE.Mesh(X,G);$.position.z=200,$.position.x=1500,$.position.y=1350,T.add($);var V,J=(new THREE.TextureLoader).load(m),Y=new THREE.MeshBasicMaterial({map:J}),W=new THREE.SphereGeometry(50,100,100),Z=new THREE.Mesh(W,Y);function K(){return Math.floor(2e3*Math.random())+1}function Q(){return Math.floor(2*Math.random())+1<=1?Math.floor(500*Math.random())+500:Math.floor(-500*Math.random())+1}function ee(){return Math.floor(2e3*Math.random())+1}Z.position.z=-200,Z.position.x=1100,Z.position.y=300,T.add(Z),requestAnimationFrame((function e(){var t=Math.floor(3*Math.random())+1;if(1==t){var n=new THREE.SphereGeometry(.5,10,10),r=new THREE.MeshBasicMaterial({color:"white",wireframe:!0}),o=new THREE.Mesh(n,r);o.position.z=Q(),o.position.x=K(),o.position.y=ee(),T.add(o),S.push(o)}else if(2==t){var a=new THREE.SphereGeometry(.5,10,10),i=new THREE.MeshBasicMaterial({color:"lightsteelblue",wireframe:!0}),s=new THREE.Mesh(a,i);s.position.z=Q(),s.position.x=K(),s.position.y=ee(),T.add(s),S.push(s)}else{var c=new THREE.SphereGeometry(.5,10,10),l=new THREE.MeshBasicMaterial({color:"yellow",wireframe:!0}),u=new THREE.Mesh(c,l);u.position.z=Q(),u.position.x=K(),u.position.y=ee(),T.add(u),S.push(u)}V=window.requestAnimationFrame(e),S.length>1e3&&cancelAnimationFrame(V)})),window.requestAnimationFrame((function e(){A.rotation.y+=.01,B.rotation.y+=.001,R.render(T,B),window.requestAnimationFrame(e)}));var te=document.getElementsByClassName("softprogress")[0];function ne(){document.querySelectorAll(".softprogress").length>0&&document.querySelectorAll(".softprogress [code-softprogress]").length>0&&document.querySelectorAll(".softprogress [code-softprogress]").forEach((function(e){return(t=e).className="run-softprogress",void t.setAttribute("style","--run-softprogress:".concat(t.getAttribute("code-softprogress"),"%;"));var t}))}new IntersectionObserver((function(e){e.forEach((function(e){e.isIntersecting&&ne.call(window)}))}),{root:null,threshold:.35}).observe(te)}()})()})();