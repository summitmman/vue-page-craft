function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/WidgetRenderer-DS64aLtO.js","assets/index-BCaH7Z-I.js","assets/index-CHJscWOQ.css","assets/DynamicString-SDANRouU.js","assets/VIf-CN0Be1BB.js","assets/VFor-DaCl_3X-.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{d as x,c as b,o as _,aU as C,a_ as J,Z as V,a as S,a1 as k,j as m,_ as y,a$ as L,b0 as I,V as U,C as R,i as q,L as M,r as T}from"./index-BCaH7Z-I.js";const B=x({__name:"WidgetsRenderer",props:{schema:{type:Array,default:()=>[]},widgets:{type:Object,default:()=>{}},events:{type:Object,default:()=>{}},state:{type:Object,default:()=>{}},store:{type:Object,default:()=>{}}},setup(g){const O=m(()=>y(()=>import("./WidgetRenderer-DS64aLtO.js"),__vite__mapDeps([0,1,2]))),i=m(()=>y(()=>import("./DynamicString-SDANRouU.js"),__vite__mapDeps([3,1,2]))),t=m(()=>y(()=>import("./VIf-CN0Be1BB.js"),__vite__mapDeps([4,1,2]))),a=m(()=>y(()=>import("./VFor-DaCl_3X-.js"),__vite__mapDeps([5,1,2]))),f=g,v=b(()=>({...f.widgets,"v-if":t,"v-for":a}));return(N,h)=>(_(!0),C(V,null,J(f.schema,(l,p)=>(_(),C(V,{key:(typeof l=="string"?l:l.id+l.type)+p},[typeof l=="string"?(_(),S(k(i),{key:0,str:l,events:f.events,state:f.state,store:f.store},null,8,["str","events","state","store"])):(_(),S(k(O),{key:1,schema:l,widgets:v.value,events:f.events,state:f.state,store:f.store},null,8,["schema","widgets","events","state","store"]))],64))),128))}});var A=(g=>(g.Push="push",g.Replace="replace",g.ReplaceIfFirst="replaceIfFirst",g))(A||{});const H=x({__name:"PageCrafter",props:L({widgets:{type:Object,default:()=>{}},events:{type:Function,default:()=>{}},data:{type:Object,default:()=>({state:{},store:{},extra:{}})},routing:{type:Object,required:!1}},{page:{type:Object,required:!1},pageModifiers:{}}),emits:["update:page"],setup(g,{expose:O}){const i=I(g,"page"),t=g,a=U(JSON.parse(JSON.stringify(null))),f=b(()=>{var e,r;return(r=(e=a.value)==null?void 0:e.data)!=null&&r.state?(Object.keys(a.value.data.state).forEach(s=>{var d,n;(n=(d=a.value)==null?void 0:d.data)!=null&&n.state&&(M(a.value.data.state[s])||(a.value.data.state[s]=T(a.value.data.state[s])))}),{...a.value.data.state,...t.data.state??{}}):t.data.state??{}}),v={};R(()=>[a.value,t.data.store],()=>{var e,r;t.data.store&&Object.keys(t.data.store).forEach(s=>{t.data.store&&(v[s]=t.data.store[s])}),(r=(e=a.value)==null?void 0:e.data)!=null&&r.store&&Object.keys(a.value.data.store).forEach(s=>{var d,n;(n=(d=a.value)==null?void 0:d.data)!=null&&n.store&&(M(a.value.data.store[s])||(a.value.data.store[s]=T(a.value.data.store[s])),v[s]=a.value.data.store[s])})});const N=b(()=>{var e,r;return t.events(f.value,v,((r=(e=i.value)==null?void 0:e.data)==null?void 0:r.extra)??{})}),h={};let l=!1,p=!1;const D=e=>{var r;if(p){p=!1;return}if(!(!((r=e.route)!=null&&r.path)||!t.routing)){try{sessionStorage.setItem(e.route.path,JSON.stringify(e))}catch(s){console.error("Some error in setting item in sessionStorage (probably data is too large or sessionStorage is full)",s),console.log("Using fallback cache"),h[e.route.path]=e}t.routing.route.fullPath!==e.route.path&&(l=!0,e.route.navigationType===A.Replace?t.routing.router.replace(e.route.path):t.routing.router.push(e.route.path))}},E=e=>{a.value=JSON.parse(JSON.stringify(e)),D(e)},w=async()=>{var e,r,s,d;if((r=(e=t.routing)==null?void 0:e.routes)!=null&&r.length&&((d=(s=t.routing)==null?void 0:s.route)!=null&&d.fullPath)){const n=t.routing.routes.find(o=>{var u,c,P,j,F;return typeof o.path=="string"?((c=(u=t.routing)==null?void 0:u.route)==null?void 0:c.fullPath)===o.path:(F=(((j=(P=t.routing)==null?void 0:P.route)==null?void 0:j.fullPath)??"").match(o.path))==null?void 0:F.length});if(n){n.beforeNavigate&&n.beforeNavigate();try{const o=await n.schemaFetch();o&&(i.value=o,n.afterNavigate&&n.afterNavigate(o))}catch(o){const u=t.routing.routes.find(c=>c.path==="error");if(u){const c=await u.schemaFetch({code:"ERROR_IN_FETCH",message:"There was an issue fetching the required route",error:o});c&&(i.value=c,u.afterNavigate&&u.afterNavigate(c))}}}else{const o=t.routing.routes.find(u=>u.path==="error");if(o){const u=await o.schemaFetch({code:"ROUTE_NOT_FOUND",message:"Route not found"});u&&(i.value=u,o.afterNavigate&&o.afterNavigate(u))}}}l=!1,p=!1};return R(i,()=>{i.value&&E(i.value)}),R(()=>{var e,r;return(r=(e=t.routing)==null?void 0:e.route)==null?void 0:r.fullPath},()=>{var d,n,o,u;if(l){l=!1;return}if(!((d=t.routing)!=null&&d.route)||!((n=t.routing)!=null&&n.router))return;const e=((u=(o=t.routing)==null?void 0:o.route)==null?void 0:u.fullPath)??"";if(!e)return;const r=sessionStorage.getItem(e);if(r){try{const c=JSON.parse(r);i.value=c,p=!0}catch(c){console.error("Unable to parse cached schema",c),sessionStorage.removeItem(e)}return}const s=h[e];if(s){i.value=s,p=!0;return}w()}),i.value?E(i.value):w(),O({clearRoutingCache:()=>{Object.keys(h).forEach(e=>{delete h[e]}),sessionStorage.clear()}}),(e,r)=>a.value?(_(),S(B,{key:a.value.id,schema:a.value.schema,widgets:t.widgets,events:N.value,state:f.value,store:v},null,8,["schema","widgets","events","state"])):q("",!0)}});export{A as N,H as _,B as a};
