function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/WidgetsRenderer-DeAO6Yij.js","assets/index-C6Z6eO7O.js","assets/index-Bi55jKNN.css","assets/DynamicString-C4ZW6bNX.js","assets/VIf-Dj5d9cos.js","assets/VFor-BlI1ITx8.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{d as $,i as R,_ as P,k as pe,b as le,o as y,a as S,aX as ce,aY as z,w as J,F as ue,f as X,G as fe,aZ as he,aj as de,c as m,aU as L,Z as G,a1 as ve,L as Y,a_ as B,a$ as ge,V as ye,B as N,r as _e}from"./index-C6Z6eO7O.js";var j=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function be(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Me="Expected a function",Z="__lodash_hash_undefined__",Q=1/0,me="[object Function]",Se="[object GeneratorFunction]",Oe="[object Symbol]",Ve=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Ce=/^\w*$/,je=/^\./,Re=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Pe=/[\\^$.*+?()[\]{}|]/g,Ee=/\\(\\)?/g,De=/^\[object .+?Constructor\]$/,Ie=typeof j=="object"&&j&&j.Object===Object&&j,we=typeof self=="object"&&self&&self.Object===Object&&self,T=Ie||we||Function("return this")();function Fe(e,t){return e==null?void 0:e[t]}function $e(e){var t=!1;if(e!=null&&typeof e.toString!="function")try{t=!!(e+"")}catch{}return t}var Te=Array.prototype,Ae=Function.prototype,ee=Object.prototype,w=T["__core-js_shared__"],W=function(){var e=/[^.]+$/.exec(w&&w.keys&&w.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),te=Ae.toString,A=ee.hasOwnProperty,re=ee.toString,xe=RegExp("^"+te.call(A).replace(Pe,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),U=T.Symbol,ke=Te.splice,He=ae(T,"Map"),O=ae(Object,"create"),q=U?U.prototype:void 0,K=q?q.toString:void 0;function _(e){var t=-1,r=e?e.length:0;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function Je(){this.__data__=O?O(null):{}}function Le(e){return this.has(e)&&delete this.__data__[e]}function Ge(e){var t=this.__data__;if(O){var r=t[e];return r===Z?void 0:r}return A.call(t,e)?t[e]:void 0}function Be(e){var t=this.__data__;return O?t[e]!==void 0:A.call(t,e)}function Ne(e,t){var r=this.__data__;return r[e]=O&&t===void 0?Z:t,this}_.prototype.clear=Je;_.prototype.delete=Le;_.prototype.get=Ge;_.prototype.has=Be;_.prototype.set=Ne;function M(e){var t=-1,r=e?e.length:0;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function We(){this.__data__=[]}function Ue(e){var t=this.__data__,r=E(t,e);if(r<0)return!1;var n=t.length-1;return r==n?t.pop():ke.call(t,r,1),!0}function qe(e){var t=this.__data__,r=E(t,e);return r<0?void 0:t[r][1]}function Ke(e){return E(this.__data__,e)>-1}function ze(e,t){var r=this.__data__,n=E(r,e);return n<0?r.push([e,t]):r[n][1]=t,this}M.prototype.clear=We;M.prototype.delete=Ue;M.prototype.get=qe;M.prototype.has=Ke;M.prototype.set=ze;function b(e){var t=-1,r=e?e.length:0;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function Xe(){this.__data__={hash:new _,map:new(He||M),string:new _}}function Ye(e){return D(this,e).delete(e)}function Ze(e){return D(this,e).get(e)}function Qe(e){return D(this,e).has(e)}function et(e,t){return D(this,e).set(e,t),this}b.prototype.clear=Xe;b.prototype.delete=Ye;b.prototype.get=Ze;b.prototype.has=Qe;b.prototype.set=et;function E(e,t){for(var r=e.length;r--;)if(ut(e[r][0],t))return r;return-1}function tt(e,t){t=ot(t,e)?[t]:nt(t);for(var r=0,n=t.length;e!=null&&r<n;)e=e[lt(t[r++])];return r&&r==n?e:void 0}function rt(e){if(!oe(e)||it(e))return!1;var t=ft(e)||$e(e)?xe:De;return t.test(ct(e))}function at(e){if(typeof e=="string")return e;if(k(e))return K?K.call(e):"";var t=e+"";return t=="0"&&1/e==-Q?"-0":t}function nt(e){return ne(e)?e:pt(e)}function D(e,t){var r=e.__data__;return st(t)?r[typeof t=="string"?"string":"hash"]:r.map}function ae(e,t){var r=Fe(e,t);return rt(r)?r:void 0}function ot(e,t){if(ne(e))return!1;var r=typeof e;return r=="number"||r=="symbol"||r=="boolean"||e==null||k(e)?!0:Ce.test(e)||!Ve.test(e)||t!=null&&e in Object(t)}function st(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function it(e){return!!W&&W in e}var pt=x(function(e){e=dt(e);var t=[];return je.test(e)&&t.push(""),e.replace(Re,function(r,n,o,c){t.push(o?c.replace(Ee,"$1"):n||r)}),t});function lt(e){if(typeof e=="string"||k(e))return e;var t=e+"";return t=="0"&&1/e==-Q?"-0":t}function ct(e){if(e!=null){try{return te.call(e)}catch{}try{return e+""}catch{}}return""}function x(e,t){if(typeof e!="function"||t&&typeof t!="function")throw new TypeError(Me);var r=function(){var n=arguments,o=t?t.apply(this,n):n[0],c=r.cache;if(c.has(o))return c.get(o);var u=e.apply(this,n);return r.cache=c.set(o,u),u};return r.cache=new(x.Cache||b),r}x.Cache=b;function ut(e,t){return e===t||e!==e&&t!==t}var ne=Array.isArray;function ft(e){var t=oe(e)?re.call(e):"";return t==me||t==Se}function oe(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}function ht(e){return!!e&&typeof e=="object"}function k(e){return typeof e=="symbol"||ht(e)&&re.call(e)==Oe}function dt(e){return e==null?"":at(e)}function vt(e,t,r){var n=e==null?void 0:tt(e,t);return n===void 0?r:n}var gt=vt;const F=be(gt),se=new RegExp(/(\{\{)[^{}]+(\}\})/),yt=$({props:{widget:{type:Object,default:()=>{}},widgetMap:{type:Object,default:()=>{}},eventMap:{type:Object,default:()=>{}},reactiveVariableMap:{type:Object,default:()=>{}}},components:{WidgetsRenderer:R(()=>P(()=>import("./WidgetsRenderer-DeAO6Yij.js"),__vite__mapDeps([0,1,2])))},setup(e){return{props:e,...e.widget.props,get propsBindings(){const t={};return Object.keys(this).forEach(r=>{r!=="propsBindings"&&r!=="props"&&(t[r]=this[r])}),t}}}});function _t(e,t,r,n,o,c){const u=le("WidgetsRenderer");return y(),S(de(e.props.widgetMap[e.props.widget.type??""]??e.props.widget.type),fe(e.propsBindings,he(e.props.widget.events??{})),ce({default:J(()=>[e.props.widget.children?(y(),S(u,{key:0,widgets:e.props.widget.children,widgetMap:e.props.widgetMap,eventMap:e.props.eventMap,reactiveVariableMap:e.props.reactiveVariableMap},null,8,["widgets","widgetMap","eventMap","reactiveVariableMap"])):X("",!0)]),_:2},[z(Object.keys(e.props.widget.slots??{}),(a,i)=>({name:a,fn:J(s=>{var l;return[ue(u,{widgets:JSON.parse(JSON.stringify((e.props.widget.slots??{})[a])),widgetMap:e.props.widgetMap,eventMap:e.props.eventMap,reactiveVariableMap:{...e.props.reactiveVariableMap,[((l=e.props.widget.props)==null?void 0:l.id)??""+a+"SlotProps"]:s}},null,8,["widgets","widgetMap","eventMap","reactiveVariableMap"])]})}))]),1040)}const bt=pe(yt,[["render",_t]]),Mt=e=>{var u;const t=e.replace("{{","").replace("}}","").trim(),n=((u=new RegExp(/[\.\[\?]/).exec(t))==null?void 0:u.index)??-1;let o=t,c="";return n>-1&&(o=t.substring(0,n),c=t.substring(n+1)),{variablePart:o,theRest:c}},mt=(e,t,r={})=>{let n=e;const o=[];for(;n;){const c=se.exec(n);if(c==null){o.push(n),n="";continue}const u=c[0],a=c.index,i=a+u.length;a>0&&o.push(n.substring(0,a));const{variablePart:s,theRest:l}=Mt(u);t[s]!=null?o.push({rVar:t[s],theRest:l}):r[s]!=null?o.push(r[s]):o.push(u),i>=n.length?n="":n=n.substring(i)}return o},St=$({__name:"WidgetsRenderer",props:{widgets:{type:Array,default:()=>[]},widgetMap:{type:Object,default:()=>{}},eventMap:{type:Object,default:()=>{}},reactiveVariableMap:{type:Object,default:()=>{}}},setup(e){const t=R(()=>P(()=>import("./DynamicString-C4ZW6bNX.js"),__vite__mapDeps([3,1,2]))),r=R(()=>P(()=>import("./VIf-Dj5d9cos.js"),__vite__mapDeps([4,1,2]))),n=R(()=>P(()=>import("./VFor-BlI1ITx8.js"),__vite__mapDeps([5,1,2]))),o=e,c=m(()=>({...o.widgetMap,"v-if":r,"v-for":n})),u=m(()=>o.widgets.map(a=>(typeof a=="string"||(a.events&&Object.keys(a.events).forEach(i=>{if(!a.events)return;const s=a.events&&a.events[i];typeof s!="function"&&(s&&o.eventMap[s]?a.events[i]=o.eventMap[s]:a.events[i]=()=>{console.error(`Event ${s} not found`)})}),a.props&&Object.keys(a.props).forEach(i=>{if(a.props){if(a.props[i]){const s=a.props[i];if(typeof s=="string"&&se.exec(s)){const g=mt(s,o.reactiveVariableMap);if(g.length===1){const f=g[0];if(typeof f!="string"&&typeof f!="function"){const{rVar:h,theRest:d}=f;d?Y(h)?a.props[i]=F(h.value,d):a.props[i]=F(h,d):a.props[i]=h}else a.props[i]=f}else a.props[i]=m(()=>g.reduce((f,h)=>{if(typeof h=="function")return f;if(typeof h=="string")return f+h;const{rVar:d,theRest:V}=h;return V?f+=F(d.value,V):f+=d.value,f},""))}}if(i.includes("v-model")){const l=i.split(":")[1]??"modelValue";a.props[l]=a.props[i],a.events||(a.events={}),a.events[`update:${l}`]=g=>{a.props&&(a.props[i].value=g)}}}}),a.type==="v-if"&&(a.props||(a.props={}),a.props.widgetMap=c.value,a.props.eventMap=o.eventMap,a.props.reactiveVariableMap=o.reactiveVariableMap),a.type==="v-for"&&(a.props||(a.props={}),a.props.loopChildren=a.children,a.props.widgetMap=c.value,a.props.eventMap=o.eventMap,a.props.reactiveVariableMap=o.reactiveVariableMap)),a)));return(a,i)=>(y(!0),L(G,null,z(u.value,(s,l)=>(y(),L(G,{key:(typeof s=="string"?s:s.id+s.type)+l},[typeof s=="string"?(y(),S(ve(t),{key:0,str:s,reactiveVariableMap:o.reactiveVariableMap},null,8,["str","reactiveVariableMap"])):(y(),S(bt,{key:1,widget:s,widgetMap:c.value,eventMap:o.eventMap,reactiveVariableMap:o.reactiveVariableMap},null,8,["widget","widgetMap","eventMap","reactiveVariableMap"]))],64))),128))}});var ie=(e=>(e.Push="push",e.Replace="replace",e.ReplaceIfFirst="replaceIfFirst",e))(ie||{});const Ct=$({__name:"PageCrafter",props:B({widgetMap:{type:Object,default:()=>{}},eventMap:{type:Function,default:()=>{}},reactiveVariableMap:{type:Object,default:()=>{}},router:{type:Object,required:!1},route:{type:Object,required:!1}},{page:{type:Object,required:!1},pageModifiers:{}}),emits:B(["no-schema"],["update:page"]),setup(e,{expose:t,emit:r}){const n=ge(e,"page"),o=e,c=r,u={};let a=!1,i=!1,s=!1;const l=ye(JSON.parse(JSON.stringify(null))),g=p=>{var v;if(i){i=!1;return}if(!(!((v=p.route)!=null&&v.path)||!o.route||!o.router)){try{sessionStorage.setItem(p.route.path,JSON.stringify(p))}catch(C){console.error("Some error in setting item in sessionStorage (probably data is too large or sessionStorage is full)",C),console.log("Using fallback cache"),u[p.route.path]=p}if(s){s=!1;return}a=!0,p.route.navigationType===ie.Replace?o.router.replace(p.route.path):o.router.push(p.route.path)}},f=p=>{l.value=JSON.parse(JSON.stringify(p)),g(p)},h=()=>{c("no-schema"),s=!0,a=!1,i=!1};n.value?f(n.value):h(),N(n,()=>{n.value&&f(n.value)}),N(()=>{var p;return(p=o.route)==null?void 0:p.fullPath},()=>{var H;if(a){a=!1;return}if(!o.route||!o.router)return;const p=((H=o.route)==null?void 0:H.fullPath)??"";if(!p)return;const v=sessionStorage.getItem(p);if(v){try{const I=JSON.parse(v);n.value=I,i=!0}catch(I){console.error("Unable to parse cached schema",I),sessionStorage.removeItem(p)}return}const C=u[p];if(C){n.value=C,i=!0;return}h()});const d=m(()=>l.value&&l.value.initialData?(Object.keys(l.value.initialData).forEach(p=>{var v;(v=l.value)!=null&&v.initialData&&(Y(l.value.initialData[p])||(l.value.initialData[p]=_e(l.value.initialData[p])))}),{...l.value.initialData,...o.reactiveVariableMap}):o.reactiveVariableMap),V=m(()=>o.eventMap(d.value));return t({clearRoutingCache:()=>{Object.keys(u).forEach(p=>{delete u[p]}),sessionStorage.clear()}}),(p,v)=>l.value?(y(),S(St,{key:l.value.id,widgets:l.value.children,widgetMap:o.widgetMap,eventMap:V.value,reactiveVariableMap:d.value},null,8,["widgets","widgetMap","eventMap","reactiveVariableMap"])):X("",!0)}});export{ie as N,Ct as _,F as a,St as b,mt as s};
