// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,n;t=this,n=function(){"use strict";var t,n=Number,r=n.NEGATIVE_INFINITY,e="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),o=Object.prototype.toString,a=Object.prototype.hasOwnProperty,i="function"==typeof Symbol?Symbol.toStringTag:"";t=e&&"symbol"==typeof Symbol.toStringTag?function(t){var n,r,e,f,u;if(null==t)return o.call(t);r=t[i],u=i,n=null!=(f=t)&&a.call(f,u);try{t[i]=void 0}catch(n){return o.call(t)}return e=o.call(t),n?t[i]=r:delete t[i],e}:function(t){return o.call(t)};var f=t,u="function"==typeof Float32Array,c=Number.POSITIVE_INFINITY,l="function"==typeof Float32Array?Float32Array:null,y="function"==typeof Float32Array?Float32Array:void 0,p=function(){var t,n,r;if("function"!=typeof l)return!1;try{n=new l([1,3.14,-3.14,5e40]),r=n,t=(u&&r instanceof Float32Array||"[object Float32Array]"===f(r))&&1===n[0]&&3.140000104904175===n[1]&&-3.140000104904175===n[2]&&n[3]===c}catch(n){t=!1}return t}()?y:function(){throw new Error("not implemented")},s="function"==typeof Uint32Array,d="function"==typeof Uint32Array?Uint32Array:null,b="function"==typeof Uint32Array?Uint32Array:void 0,m=function(){var t,n,r;if("function"!=typeof d)return!1;try{n=new d(n=[1,3.14,-3.14,4294967296,4294967297]),r=n,t=(s&&r instanceof Uint32Array||"[object Uint32Array]"===f(r))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?b:function(){throw new Error("not implemented")},A=new p(1);new m(A.buffer)[0]=4286578688;var I=A[0],h=n.NEGATIVE_INFINITY;return function(t){switch(t){case"float64":return h;case"int32":return-2147483648;case"float32":return I;case"int8":return-128;case"int16":return-32768;case"float16":return r;case"uint32":case"uint16":case"uint8":case"uint8c":return 0;default:throw new TypeError(function(){var t,n=arguments,r="https://stdlib.io/e/"+n[0]+"?";for(t=1;t<n.length;t++)r+="&arg[]="+encodeURIComponent(n[t]);return r}("0lqCd",t))}}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t="undefined"!=typeof globalThis?globalThis:t||self).typemin=n();
//# sourceMappingURL=index.js.map
