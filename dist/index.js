"use strict";var i=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(u){throw (r=0, u)}};};var a=i(function(m,t){
var n=require('@stdlib/error-tools-fmtprodmsg/dist'),s=require('@stdlib/constants-int8-min/dist'),c=require('@stdlib/constants-int16-min/dist'),o=require('@stdlib/constants-int32-min/dist'),v=require('@stdlib/constants-float16-ninf/dist'),q=require('@stdlib/constants-float32-ninf/dist'),T=require('@stdlib/constants-float64-ninf/dist');function f(e){switch(e){case"float64":return T;case"int32":return o;case"float32":return q;case"int8":return s;case"int16":return c;case"float16":return v;case"uint32":case"uint16":case"uint8":case"uint8c":return 0;default:throw new TypeError(n('1XzBn',e))}}t.exports=f
});var l=a();module.exports=l;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
