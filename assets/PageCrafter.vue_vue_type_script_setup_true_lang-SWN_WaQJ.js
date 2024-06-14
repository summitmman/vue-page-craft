function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/WidgetsRenderer-DShSO8Fi.js","assets/index-DpJWzRM7.js","assets/index-Bi55jKNN.css","assets/DynamicString-8LTobLYY.js","assets/VIf-CVlis7sV.js","assets/VFor-BtgRA_Em.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{d as D,i as V,_ as C,k as te,b as re,o as v,a as m,aX as ae,aY as B,w as F,F as ne,f as oe,G as se,aZ as ie,aj as pe,c as M,aU as A,Z as x,a1 as ce,L as W,a_ as le,a$ as ue,V as fe,B as k,r as de}from"./index-DpJWzRM7.js";var S=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function he(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ve="Expected a function",N="__lodash_hash_undefined__",U=1/0,ye="[object Function]",ge="[object GeneratorFunction]",_e="[object Symbol]",be=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Me=/^\w*$/,me=/^\./,Oe=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Se=/[\\^$.*+?()[\]{}|]/g,Ve=/\\(\\)?/g,Ce=/^\[object .+?Constructor\]$/,je=typeof S=="object"&&S&&S.Object===Object&&S,Pe=typeof self=="object"&&self&&self.Object===Object&&self,I=je||Pe||Function("return this")();function Re(e,t){return e==null?void 0:e[t]}function Ee(e){var t=!1;if(e!=null&&typeof e.toString!="function")try{t=!!(e+"")}catch{}return t}var De=Array.prototype,Ie=Function.prototype,q=Object.prototype,R=I["__core-js_shared__"],H=function(){var e=/[^.]+$/.exec(R&&R.keys&&R.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),K=Ie.toString,w=q.hasOwnProperty,z=q.toString,we=RegExp("^"+K.call(w).replace(Se,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),J=I.Symbol,$e=De.splice,Te=X(I,"Map"),O=X(Object,"create"),L=J?J.prototype:void 0,G=L?L.toString:void 0;function y(e){var t=-1,r=e?e.length:0;for(this.clear();++t<r;){var a=e[t];this.set(a[0],a[1])}}function Fe(){this.__data__=O?O(null):{}}function Ae(e){return this.has(e)&&delete this.__data__[e]}function xe(e){var t=this.__data__;if(O){var r=t[e];return r===N?void 0:r}return w.call(t,e)?t[e]:void 0}function ke(e){var t=this.__data__;return O?t[e]!==void 0:w.call(t,e)}function He(e,t){var r=this.__data__;return r[e]=O&&t===void 0?N:t,this}y.prototype.clear=Fe;y.prototype.delete=Ae;y.prototype.get=xe;y.prototype.has=ke;y.prototype.set=He;function b(e){var t=-1,r=e?e.length:0;for(this.clear();++t<r;){var a=e[t];this.set(a[0],a[1])}}function Je(){this.__data__=[]}function Le(e){var t=this.__data__,r=j(t,e);if(r<0)return!1;var a=t.length-1;return r==a?t.pop():$e.call(t,r,1),!0}function Ge(e){var t=this.__data__,r=j(t,e);return r<0?void 0:t[r][1]}function Be(e){return j(this.__data__,e)>-1}function We(e,t){var r=this.__data__,a=j(r,e);return a<0?r.push([e,t]):r[a][1]=t,this}b.prototype.clear=Je;b.prototype.delete=Le;b.prototype.get=Ge;b.prototype.has=Be;b.prototype.set=We;function g(e){var t=-1,r=e?e.length:0;for(this.clear();++t<r;){var a=e[t];this.set(a[0],a[1])}}function Ne(){this.__data__={hash:new y,map:new(Te||b),string:new y}}function Ue(e){return P(this,e).delete(e)}function qe(e){return P(this,e).get(e)}function Ke(e){return P(this,e).has(e)}function ze(e,t){return P(this,e).set(e,t),this}g.prototype.clear=Ne;g.prototype.delete=Ue;g.prototype.get=qe;g.prototype.has=Ke;g.prototype.set=ze;function j(e,t){for(var r=e.length;r--;)if(st(e[r][0],t))return r;return-1}function Xe(e,t){t=et(t,e)?[t]:Qe(t);for(var r=0,a=t.length;e!=null&&r<a;)e=e[nt(t[r++])];return r&&r==a?e:void 0}function Ye(e){if(!Z(e)||rt(e))return!1;var t=it(e)||Ee(e)?we:Ce;return t.test(ot(e))}function Ze(e){if(typeof e=="string")return e;if(T(e))return G?G.call(e):"";var t=e+"";return t=="0"&&1/e==-U?"-0":t}function Qe(e){return Y(e)?e:at(e)}function P(e,t){var r=e.__data__;return tt(t)?r[typeof t=="string"?"string":"hash"]:r.map}function X(e,t){var r=Re(e,t);return Ye(r)?r:void 0}function et(e,t){if(Y(e))return!1;var r=typeof e;return r=="number"||r=="symbol"||r=="boolean"||e==null||T(e)?!0:Me.test(e)||!be.test(e)||t!=null&&e in Object(t)}function tt(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function rt(e){return!!H&&H in e}var at=$(function(e){e=ct(e);var t=[];return me.test(e)&&t.push(""),e.replace(Oe,function(r,a,o,i){t.push(o?i.replace(Ve,"$1"):a||r)}),t});function nt(e){if(typeof e=="string"||T(e))return e;var t=e+"";return t=="0"&&1/e==-U?"-0":t}function ot(e){if(e!=null){try{return K.call(e)}catch{}try{return e+""}catch{}}return""}function $(e,t){if(typeof e!="function"||t&&typeof t!="function")throw new TypeError(ve);var r=function(){var a=arguments,o=t?t.apply(this,a):a[0],i=r.cache;if(i.has(o))return i.get(o);var u=e.apply(this,a);return r.cache=i.set(o,u),u};return r.cache=new($.Cache||g),r}$.Cache=g;function st(e,t){return e===t||e!==e&&t!==t}var Y=Array.isArray;function it(e){var t=Z(e)?z.call(e):"";return t==ye||t==ge}function Z(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}function pt(e){return!!e&&typeof e=="object"}function T(e){return typeof e=="symbol"||pt(e)&&z.call(e)==_e}function ct(e){return e==null?"":Ze(e)}function lt(e,t,r){var a=e==null?void 0:Xe(e,t);return a===void 0?r:a}var ut=lt;const E=he(ut),Q=new RegExp(/(\{\{)[^{}]+(\}\})/),ft=D({props:{widget:{type:Object,default:()=>{}},widgetMap:{type:Object,default:()=>{}},eventMap:{type:Object,default:()=>{}},reactiveVariableMap:{type:Object,default:()=>{}}},components:{WidgetsRenderer:V(()=>C(()=>import("./WidgetsRenderer-DShSO8Fi.js"),__vite__mapDeps([0,1,2])))},setup(e){return{props:e,...e.widget.props,get propsBindings(){const t={};return Object.keys(this).forEach(r=>{r!=="propsBindings"&&r!=="props"&&(t[r]=this[r])}),t}}}});function dt(e,t,r,a,o,i){const u=re("WidgetsRenderer");return v(),m(pe(e.props.widgetMap[e.props.widget.type??""]??e.props.widget.type),se(e.propsBindings,ie(e.props.widget.events??{})),ae({default:F(()=>[e.props.widget.children?(v(),m(u,{key:0,widgets:e.props.widget.children,widgetMap:e.props.widgetMap,eventMap:e.props.eventMap,reactiveVariableMap:e.props.reactiveVariableMap},null,8,["widgets","widgetMap","eventMap","reactiveVariableMap"])):oe("",!0)]),_:2},[B(Object.keys(e.props.widget.slots??{}),(n,c)=>({name:n,fn:F(p=>{var d;return[ne(u,{widgets:JSON.parse(JSON.stringify((e.props.widget.slots??{})[n])),widgetMap:e.props.widgetMap,eventMap:e.props.eventMap,reactiveVariableMap:{...e.props.reactiveVariableMap,[((d=e.props.widget.props)==null?void 0:d.id)??""+n+"SlotProps"]:p}},null,8,["widgets","widgetMap","eventMap","reactiveVariableMap"])]})}))]),1040)}const ht=te(ft,[["render",dt]]),vt=e=>{var u;const t=e.replace("{{","").replace("}}","").trim(),a=((u=new RegExp(/[\.\[\?]/).exec(t))==null?void 0:u.index)??-1;let o=t,i="";return a>-1&&(o=t.substring(0,a),i=t.substring(a+1)),{variablePart:o,theRest:i}},yt=(e,t,r={})=>{let a=e;const o=[];for(;a;){const i=Q.exec(a);if(i==null){o.push(a),a="";continue}const u=i[0],n=i.index,c=n+u.length;n>0&&o.push(a.substring(0,n));const{variablePart:p,theRest:d}=vt(u);t[p]!=null?o.push({rVar:t[p],theRest:d}):r[p]!=null?o.push(r[p]):o.push(u),c>=a.length?a="":a=a.substring(c)}return o},gt=D({__name:"WidgetsRenderer",props:{widgets:{type:Array,default:()=>[]},widgetMap:{type:Object,default:()=>{}},eventMap:{type:Object,default:()=>{}},reactiveVariableMap:{type:Object,default:()=>{}}},setup(e){const t=V(()=>C(()=>import("./DynamicString-8LTobLYY.js"),__vite__mapDeps([3,1,2]))),r=V(()=>C(()=>import("./VIf-CVlis7sV.js"),__vite__mapDeps([4,1,2]))),a=V(()=>C(()=>import("./VFor-BtgRA_Em.js"),__vite__mapDeps([5,1,2]))),o=e,i=M(()=>({...o.widgetMap,"v-if":r,"v-for":a})),u=M(()=>o.widgets.map(n=>(typeof n=="string"||(n.events&&Object.keys(n.events).forEach(c=>{if(!n.events)return;const p=n.events&&n.events[c];typeof p!="function"&&(p&&o.eventMap[p]?n.events[c]=o.eventMap[p]:n.events[c]=()=>{console.error(`Event ${p} not found`)})}),n.props&&Object.keys(n.props).forEach(c=>{if(n.props){if(n.props[c]){const p=n.props[c];if(typeof p=="string"&&Q.exec(p)){const s=yt(p,o.reactiveVariableMap);if(s.length===1){const l=s[0];if(typeof l!="string"&&typeof l!="function"){const{rVar:f,theRest:h}=l;h?W(f)?n.props[c]=E(f.value,h):n.props[c]=E(f,h):n.props[c]=f}else n.props[c]=l}else n.props[c]=M(()=>s.reduce((l,f)=>{if(typeof f=="function")return l;if(typeof f=="string")return l+f;const{rVar:h,theRest:_}=f;return _?l+=E(h.value,_):l+=h.value,l},""))}}if(c.includes("v-model")){const d=c.split(":")[1]??"modelValue";n.props[d]=n.props[c],n.events||(n.events={}),n.events[`update:${d}`]=s=>{n.props&&(n.props[c].value=s)}}}}),n.type==="v-if"&&(n.props||(n.props={}),n.props.widgetMap=i.value,n.props.eventMap=o.eventMap,n.props.reactiveVariableMap=o.reactiveVariableMap),n.type==="v-for"&&(n.props||(n.props={}),n.props.loopChildren=n.children,n.props.widgetMap=i.value,n.props.eventMap=o.eventMap,n.props.reactiveVariableMap=o.reactiveVariableMap)),n)));return(n,c)=>(v(!0),A(x,null,B(u.value,(p,d)=>(v(),A(x,{key:(typeof p=="string"?p:p.id+p.type)+d},[typeof p=="string"?(v(),m(ce(t),{key:0,str:p,reactiveVariableMap:o.reactiveVariableMap},null,8,["str","reactiveVariableMap"])):(v(),m(ht,{key:1,widget:p,widgetMap:i.value,eventMap:o.eventMap,reactiveVariableMap:o.reactiveVariableMap},null,8,["widget","widgetMap","eventMap","reactiveVariableMap"]))],64))),128))}});var ee=(e=>(e.Push="push",e.Replace="replace",e.ReplaceIfFirst="replaceIfFirst",e))(ee||{});const bt=D({__name:"PageCrafter",props:le({widgetMap:{type:Object,default:()=>{}},eventMap:{type:Function,default:()=>{}},reactiveVariableMap:{type:Object,default:()=>{}},router:{type:Object,required:!1},route:{type:Object,required:!1}},{page:{type:Object,required:!0},pageModifiers:{}}),emits:["update:page"],setup(e,{expose:t}){const r=ue(e,"page"),a=e,o={},i=fe(JSON.parse(JSON.stringify(r.value))),u=s=>{var l;if(!(!((l=s.route)!=null&&l.path)||!a.route||!a.router)){try{sessionStorage.setItem(s.route.path,JSON.stringify(s))}catch(f){console.error("Some error in setting item in sessionStorage (probably data is too large or sessionStorage is full)",f),console.log("Using fallback cache"),o[s.route.path]=s}s.route.navigationType===ee.Replace?a.router.replace(s.route.path):a.router.push(s.route.path)}},n=s=>{i.value=JSON.parse(JSON.stringify(s)),u(s)};n(r.value),k(r,()=>{n(r.value)}),k(()=>{var s;return(s=a.route)==null?void 0:s.fullPath},()=>{var h;if(!a.route||!a.router)return;const s=((h=a.route)==null?void 0:h.fullPath)??"";if(!s)return;const l=sessionStorage.getItem(s);if(l){try{const _=JSON.parse(l);r.value=_}catch(_){console.error("Unable to parse cached schema",_),sessionStorage.removeItem(s)}return}const f=o[s];f&&(r.value=f)});const c=M(()=>i.value.initialData?(Object.keys(i.value.initialData).forEach(s=>{i.value.initialData&&(W(i.value.initialData[s])||(i.value.initialData[s]=de(i.value.initialData[s])))}),{...i.value.initialData,...a.reactiveVariableMap}):a.reactiveVariableMap),p=M(()=>a.eventMap(c.value));return t({clearRoutingCache:()=>{Object.keys(o).forEach(s=>{delete o[s]}),sessionStorage.clear()}}),(s,l)=>(v(),m(gt,{key:i.value.id,widgets:i.value.children,widgetMap:a.widgetMap,eventMap:p.value,reactiveVariableMap:c.value},null,8,["widgets","widgetMap","eventMap","reactiveVariableMap"]))}});export{ee as N,bt as _,E as a,gt as b,yt as s};
