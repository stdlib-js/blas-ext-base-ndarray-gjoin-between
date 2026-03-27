"use strict";var o=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var f=o(function(l,q){
var u=require('@stdlib/ndarray-base-ndarraylike2scalar/dist'),d=require('@stdlib/ndarray-base-numel-dimension/dist'),n=require('@stdlib/ndarray-base-stride/dist'),v=require('@stdlib/ndarray-base-offset/dist'),s=require('@stdlib/ndarray-base-data-buffer/dist'),x=require('@stdlib/blas-ext-base-gjoin-between/dist').ndarray;function c(e){var r,t,a,i;return i=e[0],t=u(e[1]),a=u(e[2]),r=e[3],x(d(i,0),t,a,s(i),n(i,0),v(i),s(r),n(r,0),v(r))}q.exports=c
});var g=f();module.exports=g;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
