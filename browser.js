// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";function e(e){return"number"==typeof e}function r(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function t(e,t,i){var n=!1,a=t-e.length;return a<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=i?e+r(a):r(a)+e,n&&(e="-"+e)),e}var i=String.prototype.toLowerCase,n=String.prototype.toUpperCase;function a(r){var a,o,c;switch(r.specifier){case"b":a=2;break;case"o":a=8;break;case"x":case"X":a=16;break;default:a=10}if(o=r.arg,c=parseInt(o,10),!isFinite(c)){if(!e(o))throw new Error("invalid integer. Value: "+o);c=0}return c<0&&("u"===r.specifier||10!==a)&&(c=4294967295+c+1),c<0?(o=(-c).toString(a),r.precision&&(o=t(o,r.precision,r.padRight)),o="-"+o):(o=c.toString(a),c||r.precision?r.precision&&(o=t(o,r.precision,r.padRight)):o="",r.sign&&(o=r.sign+o)),16===a&&(r.alternate&&(o="0x"+o),o=r.specifier===n.call(r.specifier)?n.call(o):i.call(o)),8===a&&r.alternate&&"0"!==o.charAt(0)&&(o="0"+o),o}function o(e){return"string"==typeof e}var c=Math.abs,s=String.prototype.toLowerCase,p=String.prototype.toUpperCase,l=String.prototype.replace,f=/e\+(\d)$/,u=/e-(\d)$/,g=/^(\d+)$/,d=/^(\d+)e/,h=/\.0$/,y=/\.0*e/,w=/(\..*[^0])0*e/;function b(r){var t,i,n=parseFloat(r.arg);if(!isFinite(n)){if(!e(r.arg))throw new Error("invalid floating-point number. Value: "+i);n=r.arg}switch(r.specifier){case"e":case"E":i=n.toExponential(r.precision);break;case"f":case"F":i=n.toFixed(r.precision);break;case"g":case"G":c(n)<1e-4?((t=r.precision)>0&&(t-=1),i=n.toExponential(t)):i=n.toPrecision(r.precision),r.alternate||(i=l.call(i,w,"$1e"),i=l.call(i,y,"e"),i=l.call(i,h,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return i=l.call(i,f,"e+0$1"),i=l.call(i,u,"e-0$1"),r.alternate&&(i=l.call(i,g,"$1."),i=l.call(i,d,"$1.e")),n>=0&&r.sign&&(i=r.sign+i),i=r.specifier===p.call(r.specifier)?p.call(i):s.call(i)}function m(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function v(e,r,t){var i=r-e.length;return i<0?e:e=t?e+m(i):m(i)+e}var E=String.fromCharCode,A=isNaN,I=Array.isArray;function x(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function F(e){var r,i,n,c,s,p,l,f,u;if(!I(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(p="",l=1,f=0;f<e.length;f++)if(o(n=e[f]))p+=n;else{if(r=void 0!==n.precision,!(n=x(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+n+"`.");for(n.mapping&&(l=n.mapping),i=n.flags,u=0;u<i.length;u++)switch(c=i.charAt(u)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=i.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+c)}if("*"===n.width){if(n.width=parseInt(arguments[l],10),l+=1,A(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[l],10),l+=1,A(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=a(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!A(n.arg)){if((s=parseInt(n.arg,10))<0||s>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=A(s)?String(n.arg):E(s)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=b(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=t(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=v(n.arg,n.width,n.padRight)),p+=n.arg||"",l+=1}return p}var S=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function T(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function k(e){var r,t,i,n;for(t=[],n=0,i=S.exec(e);i;)(r=e.slice(n,S.lastIndex-i[0].length)).length&&t.push(r),t.push(T(i)),n=S.lastIndex,i=S.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function V(e){return"string"==typeof e}function N(e){var r,t,i;if(!V(e))throw new TypeError(N("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=k(e),(t=new Array(arguments.length))[0]=r,i=1;i<t.length;i++)t[i]=arguments[i];return F.apply(null,t)}var $,U=Number,C=U.NEGATIVE_INFINITY,R="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),j=Object.prototype.toString,O=Object.prototype.hasOwnProperty,Z="function"==typeof Symbol?Symbol:void 0,G="function"==typeof Z?Z.toStringTag:"";$=R&&"symbol"==typeof Symbol.toStringTag?function(e){var r,t,i,n,a;if(null==e)return j.call(e);t=e[G],a=G,r=null!=(n=e)&&O.call(n,a);try{e[G]=void 0}catch(r){return j.call(e)}return i=j.call(e),r?e[G]=t:delete e[G],i}:function(e){return j.call(e)};var W=$,L="function"==typeof Float32Array,P=Number.POSITIVE_INFINITY,Y="function"==typeof Float32Array?Float32Array:null,_="function"==typeof Float32Array?Float32Array:void 0,z=function(){var e,r,t;if("function"!=typeof Y)return!1;try{r=new Y([1,3.14,-3.14,5e40]),t=r,e=(L&&t instanceof Float32Array||"[object Float32Array]"===W(t))&&1===r[0]&&3.140000104904175===r[1]&&-3.140000104904175===r[2]&&r[3]===P}catch(r){e=!1}return e}()?_:function(){throw new Error("not implemented")},M="function"==typeof Uint32Array,X="function"==typeof Uint32Array?Uint32Array:null,q="function"==typeof Uint32Array?Uint32Array:void 0,B=function(){var e,r,t;if("function"!=typeof X)return!1;try{r=new X(r=[1,3.14,-3.14,4294967296,4294967297]),t=r,e=(M&&t instanceof Uint32Array||"[object Uint32Array]"===W(t))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?q:function(){throw new Error("not implemented")},D=new z(1);new B(D.buffer)[0]=4286578688;var H=D[0],J=U.NEGATIVE_INFINITY;return function(e){switch(e){case"float64":return J;case"int32":return-2147483648;case"float32":return H;case"int8":return-128;case"int16":return-32768;case"float16":return C;case"uint32":case"uint16":case"uint8":case"uint8c":return 0;default:throw new TypeError(N("invalid argument. Must provide a recognized type. Value: `%s`.",e))}}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).typemin=r();
//# sourceMappingURL=browser.js.map
