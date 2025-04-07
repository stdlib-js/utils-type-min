// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t=Number,r=t.NEGATIVE_INFINITY;var n="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var o=Object.prototype.toString;var e=Object.prototype.hasOwnProperty;var a,i="function"==typeof Symbol?Symbol:void 0,c="function"==typeof i?i.toStringTag:"";a=n&&"symbol"==typeof Symbol.toStringTag?function(t){var r,n,a,i,u;if(null==t)return o.call(t);n=t[c],u=c,r=null!=(i=t)&&e.call(i,u);try{t[c]=void 0}catch(r){return o.call(t)}return a=o.call(t),r?t[c]=n:delete t[c],a}:function(t){return o.call(t)};var u=a,f="function"==typeof Float32Array;var l=Number.POSITIVE_INFINITY,y="function"==typeof Float32Array?Float32Array:null;var p="function"==typeof Float32Array?Float32Array:void 0;var v=function(){var t,r,n;if("function"!=typeof y)return!1;try{r=new y([1,3.14,-3.14,5e40]),n=r,t=(f&&n instanceof Float32Array||"[object Float32Array]"===u(n))&&1===r[0]&&3.140000104904175===r[1]&&-3.140000104904175===r[2]&&r[3]===l}catch(r){t=!1}return t}()?p:function(){throw new Error("not implemented")},s="function"==typeof Uint32Array;var A="function"==typeof Uint32Array?Uint32Array:null;var b="function"==typeof Uint32Array?Uint32Array:void 0;var m=function(){var t,r,n;if("function"!=typeof A)return!1;try{r=new A(r=[1,3.14,-3.14,4294967296,4294967297]),n=r,t=(s&&n instanceof Uint32Array||"[object Uint32Array]"===u(n))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?b:function(){throw new Error("not implemented")},I=new v(1);new m(I.buffer)[0]=4286578688;var w=I[0],d=t.NEGATIVE_INFINITY;function h(t){switch(t){case"float64":return d;case"int32":return-2147483648;case"float32":return w;case"int8":return-128;case"int16":return-32768;case"float16":return r;case"uint32":case"uint16":case"uint8":case"uint8c":return 0;default:throw new TypeError(function(){var t,r=arguments,n="https://stdlib.io/e/"+r[0]+"?";for(t=1;t<r.length;t++)n+="&arg[]="+encodeURIComponent(r[t]);return n}("1XzBn",t))}}export{h as default};
//# sourceMappingURL=mod.js.map
