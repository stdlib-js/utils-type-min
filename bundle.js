// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).typemin=e()}(this,(function(){"use strict";function r(r){if(r.__esModule)return r;var e=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(r).forEach((function(t){var n=Object.getOwnPropertyDescriptor(r,t);Object.defineProperty(e,t,n.get?n:{enumerable:!0,get:function(){return r[t]}})})),e}var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=function(){try{return e({},"x",{}),!0}catch(r){return!1}},n=Object.defineProperty,i=Object.prototype,a=i.toString,o=i.__defineGetter__,u=i.__defineSetter__,c=i.__lookupGetter__,f=i.__lookupSetter__;var s=function(r,e,t){var n,s,l,p;if("object"!=typeof r||null===r||"[object Array]"===a.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===a.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((s="value"in t)&&(c.call(r,e)||f.call(r,e)?(n=r.__proto__,r.__proto__=i,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),l="get"in t,p="set"in t,s&&(l||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return l&&o&&o.call(r,e,t.get),p&&u&&u.call(r,e,t.set),r},l=n,p=s,v=t()?l:p;var g=function(r,e,t){v(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})},d=g;var h=function(r){return"string"==typeof r};var m=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var y=function(){return m&&"symbol"==typeof Symbol.toStringTag},b=Object.prototype.toString,w=b;var E=function(r){return w.call(r)},j=Object.prototype.hasOwnProperty;var P=function(r,e){return null!=r&&j.call(r,e)},_="function"==typeof Symbol?Symbol.toStringTag:"",T=P,O=_,x=b;var A=function(r){var e,t,n;if(null==r)return x.call(r);t=r[O],e=T(r,O);try{r[O]=void 0}catch(e){return x.call(r)}return n=x.call(r),e?r[O]=t:delete r[O],n},V=E,S=A,I=y()?S:V,k=String.prototype.valueOf;var F=I,R=function(r){try{return k.call(r),!0}catch(r){return!1}},$=y();var M=function(r){return"object"==typeof r&&(r instanceof String||($?R(r):"[object String]"===F(r)))},N=h,C=M;var U=d,G=function(r){return N(r)||C(r)},B=M;U(G,"isPrimitive",h),U(G,"isObject",B);var L=G,Z=Math.floor;var W=function(r){return Z(r)===r},X=W;var z=function(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&X(r.length)&&r.length>=0&&r.length<=9007199254740991};var Y=function(r){return"number"==typeof r},D=Number,q=D.prototype.toString;var H=I,J=D,K=function(r){try{return q.call(r),!0}catch(r){return!1}},Q=y();var rr=function(r){return"object"==typeof r&&(r instanceof J||(Q?K(r):"[object Number]"===H(r)))},er=Y,tr=rr;var nr=d,ir=function(r){return er(r)||tr(r)},ar=rr;nr(ir,"isPrimitive",Y),nr(ir,"isObject",ar);var or=ir,ur=Number.POSITIVE_INFINITY,cr=D.NEGATIVE_INFINITY,fr=ur,sr=cr,lr=W;var pr=function(r){return r<fr&&r>sr&&lr(r)},vr=or.isPrimitive,gr=pr;var dr=function(r){return vr(r)&&gr(r)},hr=or.isObject,mr=pr;var yr=function(r){return hr(r)&&mr(r.valueOf())},br=dr,wr=yr;var Er=d,jr=function(r){return br(r)||wr(r)},Pr=yr;Er(jr,"isPrimitive",dr),Er(jr,"isObject",Pr);var _r=jr;var Tr=function(r){return r!=r},Or=or.isPrimitive,xr=Tr;var Ar=function(r){return Or(r)&&xr(r)},Vr=or.isObject,Sr=Tr;var Ir=function(r){return Vr(r)&&Sr(r.valueOf())},kr=Ar,Fr=Ir;var Rr=d,$r=function(r){return kr(r)||Fr(r)},Mr=Ir;Rr($r,"isPrimitive",Ar),Rr($r,"isObject",Mr);var Nr=z,Cr=_r.isPrimitive,Ur=L.isPrimitive,Gr=$r.isPrimitive;var Br=function(r,e,t){var n,i,a;if(!Nr(r)&&!Ur(r))throw new TypeError("invalid argument. First argument must be array-like. Value: `"+r+"`.");if(arguments.length<2)throw new Error("insufficient input arguments. Must provide a search value.");if(arguments.length>2){if(!Cr(t))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+t+"`.");(i=t)<0&&(i=0)}else i=0;if(Ur(r)){if(!Ur(e))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+e+"`.");return-1!==r.indexOf(e,i)}if(n=r.length,Gr(e)){for(a=i;a<n;a++)if(Gr(r[a]))return!0;return!1}for(a=i;a<n;a++)if(r[a]===e)return!0;return!1},Lr=Br,Zr=L.isPrimitive;var Wr=function(r){if(!Zr(r))throw new TypeError("invalid argument. Must provide a primitive string. Value: `"+r+"`.");return r.toLowerCase()},Xr=L.isPrimitive;var zr=function(r){if(!Xr(r))throw new TypeError("invalid argument. Must provide a primitive string. Value: `"+r+"`.");return r.toUpperCase()},Yr=Wr,Dr=zr,qr=L.isPrimitive;var Hr=function(r){return qr(r)&&r===Dr(r)&&r!==Yr(r)},Jr=ur,Kr=cr;var Qr=function(r){return r==r&&r>Kr&&r<Jr},re=_r.isPrimitive;var ee=function(r){return re(r)&&r>=0},te=_r.isObject;var ne=function(r){return te(r)&&r.valueOf()>=0},ie=ee,ae=ne;var oe=d,ue=function(r){return ie(r)||ae(r)},ce=ne;oe(ue,"isPrimitive",ee),oe(ue,"isObject",ce);var fe=ue.isPrimitive,se=L.isPrimitive;var le=function(r,e){var t,n;if(!se(r))throw new TypeError("invalid argument. First argument must be a string. Value: `"+r+"`.");if(!fe(e))throw new TypeError("invalid argument. Second argument must be a nonnegative integer. Value: `"+e+"`.");if(0===r.length||0===e)return"";if(r.length*e>9007199254740991)throw new RangeError("invalid argument. Output string length exceeds maximum allowed string length.");for(t="",n=e;1==(1&n)&&(t+=r),0!==(n>>>=1);)r+=r;return t},pe=_r.isPrimitive,ve=L.isPrimitive;var ge=function(r,e,t){var n,i;if(!ve(r))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+r+"`.");if(!ve(e))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+e+"`.");if(arguments.length>2){if(!pe(t))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+t+"`.");n=t<0?r.length+t:t}else n=0;if(0===e.length)return!0;if(n<0||n+e.length>r.length)return!1;for(i=0;i<e.length;i++)if(r.charCodeAt(n+i)!==e.charCodeAt(i))return!1;return!0},de=le,he=ge;var me=function(r,e,t){var n=!1,i=e-r.length;return i<0||(he(r,"-")&&(n=!0,r=r.substr(1)),r=t?r+de("0",i):de("0",i)+r,n&&(r="-"+r)),r},ye=Hr,be=zr,we=Wr,Ee=Qr,je=or.isPrimitive,Pe=me;var _e=function(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!Ee(n)){if(!je(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=Pe(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=Pe(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=ye(r.specifier)?be(t):we(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t},Te=L.isPrimitive,Oe=/[-\/\\^$*+?.()|[\]{}]/g;var xe=function(r){var e,t;if(!Te(r))throw new TypeError("invalid argument. Must provide a regular expression string. Value: `"+r+"`.");if("/"===r[0])for(t=r.length-1;t>=0&&"/"!==r[t];t--);return void 0===t||t<=0?r.replace(Oe,"\\$&"):(e=(e=r.substring(1,t)).replace(Oe,"\\$&"),r=r[0]+e+r.substring(t))},Ae=/./;var Ve=function(r){return"boolean"==typeof r},Se=Boolean.prototype.toString;var Ie=I,ke=function(r){try{return Se.call(r),!0}catch(r){return!1}},Fe=y();var Re=function(r){return"object"==typeof r&&(r instanceof Boolean||(Fe?ke(r):"[object Boolean]"===Ie(r)))},$e=Ve,Me=Re;var Ne=d,Ce=function(r){return $e(r)||Me(r)},Ue=Re;Ne(Ce,"isPrimitive",Ve),Ne(Ce,"isObject",Ue);var Ge=Ce;var Be=function(){return new Function("return this;")()},Le="object"==typeof self?self:null,Ze="object"==typeof window?window:null,We="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},Xe="object"==typeof We?We:null;module.exports=Xe;var ze=Ge.isPrimitive,Ye=Be,De=Le,qe=Ze,He=r(Object.freeze({__proto__:null}));var Je=function(r){if(arguments.length){if(!ze(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return Ye()}if(De)return De;if(qe)return qe;if(He)return He;throw new Error("unexpected error. Unable to resolve global object.")},Ke=Je(),Qe=Ke.document&&Ke.document.childNodes,rt=Int8Array,et=Ae,tt=Qe,nt=rt;var it=function(){return"function"==typeof et||"object"==typeof nt||"function"==typeof tt};var at=function(){return/^\s*function\s*([^(]*)/i},ot=at;d(ot,"REGEXP",at());var ut=ot,ct=I;var ft=Array.isArray?Array.isArray:function(r){return"[object Array]"===ct(r)};var st=function(r){return null!==r&&"object"==typeof r};d(st,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(e){var t,n;if(!ft(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(st));var lt=st;var pt=I,vt=ut.REGEXP,gt=function(r){return lt(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))};var dt=function(r){var e,t,n;if(("Object"===(t=pt(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=vt.exec(n.toString()))return e[1]}return gt(r)?"Buffer":t},ht=dt;var mt=function(r){var e;return null===r?"null":"object"===(e=typeof r)?ht(r).toLowerCase():e},yt=dt;var bt=function(r){return yt(r).toLowerCase()},wt=mt,Et=bt,jt=it()?Et:wt;var Pt=function(r){return"function"===jt(r)},_t=RegExp.prototype.exec;var Tt=I,Ot=function(r){try{return _t.call(r),!0}catch(r){return!1}},xt=y();var At=xe,Vt=Pt,St=L.isPrimitive,It=function(r){return"object"==typeof r&&(r instanceof RegExp||(xt?Ot(r):"[object RegExp]"===Tt(r)))};var kt=Hr,Ft=zr,Rt=Wr,$t=function(r,e,t){if(!St(r))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+r+"`.");if(St(e))e=At(e),e=new RegExp(e,"g");else if(!It(e))throw new TypeError("invalid argument. Second argument must be a string primitive or regular expression. Value: `"+e+"`.");if(!St(t)&&!Vt(t))throw new TypeError("invalid argument. Third argument must be a string primitive or replacement function. Value: `"+t+"`.");return r.replace(e,t)},Mt=Qr,Nt=or.isPrimitive,Ct=function(r){return Math.abs(r)},Ut=/e\+(\d)$/,Gt=/e-(\d)$/,Bt=/^(\d+)$/,Lt=/^(\d+)e/,Zt=/\.0$/,Wt=/\.0*e/,Xt=/(\..*[^0])0*e/;var zt=function(r){var e,t,n=parseFloat(r.arg);if(!Mt(n)){if(!Nt(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":Ct(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=$t(t,Xt,"$1e"),t=$t(t,Wt,"e"),t=$t(t,Zt,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=$t(t,Ut,"e+0$1"),t=$t(t,Gt,"e-0$1"),r.alternate&&(t=$t(t,Bt,"$1."),t=$t(t,Lt,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=kt(r.specifier)?Ft(t):Rt(t)},Yt=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;var Dt=le;var qt=L.isPrimitive,Ht=Lr,Jt=Tr,Kt=_e,Qt=zt,rn=function(r){var e,t,n,i,a;for(e=0,n=[],a=Yt.exec(r);a;)(t=r.slice(e,Yt.lastIndex-a[0].length)).length&&n.push(t),(i=o(a,n.length))&&n.push(i),e=Yt.lastIndex,a=Yt.exec(r);return(t=r.slice(e)).length&&n.push(t),n;function o(r){return{mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],hasPeriod:"."===r[4],precision:r[5],specifier:r[6]}}},en=function(r,e,t){var n=e-r.length;return n<0?r:r=t?r+Dt(" ",n):Dt(" ",n)+r},tn=me,nn=String.fromCharCode;var an=function(r){var e,t,n,i,a,o,u,c,f;if(!qt(r))throw new TypeError("invalid argument. Must provide a string. Value: `"+r+"`.");for(e=rn(r),o="",u=1,c=0;c<e.length;c++)if(n=e[c],qt(n))o+=n;else{for(n.mapping&&(u=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(i=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=!Ht(t,"-");break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,Jt(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if("*"===n.precision&&n.hasPeriod){if(n.precision=parseInt(arguments[u],10),u+=1,Jt(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,n.hasPeriod=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n.hasPeriod&&(n.padZeros=!1),n.arg=Kt(n);break;case"s":n.maxWidth=n.hasPeriod?n.precision:-1;break;case"c":if(!Jt(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=Jt(a)?String(n.arg):nn(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":n.hasPeriod||(n.precision=6),n.arg=Qt(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=tn(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=en(n.arg,n.width,n.padRight)),o+=n.arg||"",u+=1}return o},on=an,un=D.NEGATIVE_INFINITY,cn=I,fn="function"==typeof Float32Array;var sn="function"==typeof Float32Array?Float32Array:null,ln=function(r){return fn&&r instanceof Float32Array||"[object Float32Array]"===cn(r)},pn=ur,vn=sn;var gn="function"==typeof Float32Array?Float32Array:void 0,dn=function(){throw new Error("not implemented")},hn=function(){var r,e;if("function"!=typeof vn)return!1;try{e=new vn([1,3.14,-3.14,5e40]),r=ln(e)&&1===e[0]&&3.140000104904175===e[1]&&-3.140000104904175===e[2]&&e[3]===pn}catch(e){r=!1}return r}()?gn:dn,mn=I,yn="function"==typeof Uint32Array;var bn="function"==typeof Uint32Array?Uint32Array:null,wn=function(r){return yn&&r instanceof Uint32Array||"[object Uint32Array]"===mn(r)},En=bn;var jn,Pn="function"==typeof Uint32Array?Uint32Array:void 0,_n=function(){throw new Error("not implemented")},Tn=function(){var r,e;if("function"!=typeof En)return!1;try{e=new En(e=[1,3.14,-3.14,4294967296,4294967297]),r=wn(e)&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Pn:_n,On=new hn(1);new Tn(On.buffer)[0]=4286578688,jn=On[0];var xn=on,An=un,Vn=jn,Sn=cr;return function(r){switch(r){case"float64":return Sn;case"int32":return-2147483648;case"float32":return Vn;case"int8":return-128;case"int16":return-32768;case"float16":return An;case"uint32":case"uint16":case"uint8":case"uint8c":return 0;default:throw new TypeError(xn("invalid argument. Must provide a recognized type. Value: `%s`.",r))}}}));
//# sourceMappingURL=bundle.js.map
