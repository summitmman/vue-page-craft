var h=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function A(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var G="Expected a function",E="__lodash_hash_undefined__",I=1/0,M="[object Function]",V="[object GeneratorFunction]",K="[object Symbol]",L=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,z=/^\w*$/,U=/^\./,q=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,J=/[\\^$.*+?()[\]{}|]/g,X=/\\(\\)?/g,Y=/^\[object .+?Constructor\]$/,B=typeof h=="object"&&h&&h.Object===Object&&h,Q=typeof self=="object"&&self&&self.Object===Object&&self,b=B||Q||Function("return this")();function W(t,e){return t==null?void 0:t[e]}function Z(t){var e=!1;if(t!=null&&typeof t.toString!="function")try{e=!!(t+"")}catch{}return e}var k=Array.prototype,tt=Function.prototype,D=Object.prototype,y=b["__core-js_shared__"],O=function(){var t=/[^.]+$/.exec(y&&y.keys&&y.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),R=tt.toString,m=D.hasOwnProperty,$=D.toString,et=RegExp("^"+R.call(m).replace(J,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),P=b.Symbol,rt=k.splice,nt=F(b,"Map"),p=F(Object,"create"),j=P?P.prototype:void 0,T=j?j.toString:void 0;function s(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function at(){this.__data__=p?p(null):{}}function ot(t){return this.has(t)&&delete this.__data__[t]}function it(t){var e=this.__data__;if(p){var r=e[t];return r===E?void 0:r}return m.call(e,t)?e[t]:void 0}function st(t){var e=this.__data__;return p?e[t]!==void 0:m.call(e,t)}function ct(t,e){var r=this.__data__;return r[t]=p&&e===void 0?E:e,this}s.prototype.clear=at;s.prototype.delete=ot;s.prototype.get=it;s.prototype.has=st;s.prototype.set=ct;function l(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function ut(){this.__data__=[]}function lt(t){var e=this.__data__,r=d(e,t);if(r<0)return!1;var n=e.length-1;return r==n?e.pop():rt.call(e,r,1),!0}function ft(t){var e=this.__data__,r=d(e,t);return r<0?void 0:e[r][1]}function pt(t){return d(this.__data__,t)>-1}function ht(t,e){var r=this.__data__,n=d(r,t);return n<0?r.push([t,e]):r[n][1]=e,this}l.prototype.clear=ut;l.prototype.delete=lt;l.prototype.get=ft;l.prototype.has=pt;l.prototype.set=ht;function c(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function dt(){this.__data__={hash:new s,map:new(nt||l),string:new s}}function _t(t){return _(this,t).delete(t)}function gt(t){return _(this,t).get(t)}function yt(t){return _(this,t).has(t)}function bt(t,e){return _(this,t).set(t,e),this}c.prototype.clear=dt;c.prototype.delete=_t;c.prototype.get=gt;c.prototype.has=yt;c.prototype.set=bt;function d(t,e){for(var r=t.length;r--;)if(Et(t[r][0],e))return r;return-1}function mt(t,e){e=wt(e,t)?[e]:Ct(e);for(var r=0,n=e.length;t!=null&&r<n;)t=t[jt(e[r++])];return r&&r==n?t:void 0}function vt(t){if(!H(t)||Ot(t))return!1;var e=It(t)||Z(t)?et:Y;return e.test(Tt(t))}function St(t){if(typeof t=="string")return t;if(S(t))return T?T.call(t):"";var e=t+"";return e=="0"&&1/t==-I?"-0":e}function Ct(t){return N(t)?t:Pt(t)}function _(t,e){var r=t.__data__;return xt(e)?r[typeof e=="string"?"string":"hash"]:r.map}function F(t,e){var r=W(t,e);return vt(r)?r:void 0}function wt(t,e){if(N(t))return!1;var r=typeof t;return r=="number"||r=="symbol"||r=="boolean"||t==null||S(t)?!0:z.test(t)||!L.test(t)||e!=null&&t in Object(e)}function xt(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null}function Ot(t){return!!O&&O in t}var Pt=v(function(t){t=Rt(t);var e=[];return U.test(t)&&e.push(""),t.replace(q,function(r,n,a,o){e.push(a?o.replace(X,"$1"):n||r)}),e});function jt(t){if(typeof t=="string"||S(t))return t;var e=t+"";return e=="0"&&1/t==-I?"-0":e}function Tt(t){if(t!=null){try{return R.call(t)}catch{}try{return t+""}catch{}}return""}function v(t,e){if(typeof t!="function"||e&&typeof e!="function")throw new TypeError(G);var r=function(){var n=arguments,a=e?e.apply(this,n):n[0],o=r.cache;if(o.has(a))return o.get(a);var i=t.apply(this,n);return r.cache=o.set(a,i),i};return r.cache=new(v.Cache||c),r}v.Cache=c;function Et(t,e){return t===e||t!==t&&e!==e}var N=Array.isArray;function It(t){var e=H(t)?$.call(t):"";return e==M||e==V}function H(t){var e=typeof t;return!!t&&(e=="object"||e=="function")}function Dt(t){return!!t&&typeof t=="object"}function S(t){return typeof t=="symbol"||Dt(t)&&$.call(t)==K}function Rt(t){return t==null?"":St(t)}function $t(t,e,r){var n=t==null?void 0:mt(t,e);return n===void 0?r:n}var Ft=$t;const At=A(Ft),Nt=new RegExp(/(\{\{)[^{}]+(\}\})/),Ht=t=>{var i;const e=t.replace("{{","").replace("}}","").trim(),n=((i=new RegExp(/[\.\[\?]/).exec(e))==null?void 0:i.index)??-1;let a=e,o="";return n>-1&&(a=e.substring(0,n),o=e.substring(n+1)),{variablePart:a,theRest:o}},Gt=(t,e,r={},n={})=>{let a=t;const o=[];for(;a;){const i=Nt.exec(a);if(i==null){o.push(a),a="";continue}let f=i[0];const g=i.index,C=g+f.length;let w=!1;g>0&&o.push(a.substring(0,g)),f.includes("store.")&&(f=f.replace("store.",""),w=!0);const{variablePart:u,theRest:x}=Ht(f);w&&r[u]!=null?o.push({rVar:r[u],theRest:x}):e[u]!=null?o.push({rVar:e[u],theRest:x}):n[u]!=null?o.push(n[u]):o.push(i[0]),C>=a.length?a="":a=a.substring(C)}return o};export{At as _,Nt as r,Gt as s};
