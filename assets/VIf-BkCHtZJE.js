function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/WidgetsRenderer-C7J10kWA.js","assets/PageCrafter.vue_vue_type_script_setup_true_lang-B7Dwt3xw.js","assets/index-Yq-Oag8F.js","assets/index-uwfnpMVq.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{d as o,aP as a,o as r,a as d,$ as i,g as c,h as l,_ as p}from"./index-Yq-Oag8F.js";const _=o({__name:"VIf",props:{condition:{type:[String,Number,Boolean,Object,Function],required:!1},vElseChildren:{type:Array,default:()=>[]},widgets:{type:Object,default:()=>{}},events:{type:Object,default:()=>{}},state:{type:Object,default:()=>{}},store:{type:Object,default:()=>{}}},setup(t){const n=l(()=>p(()=>import("./WidgetsRenderer-C7J10kWA.js"),__vite__mapDeps([0,1,2,3]))),e=t;return(s,u)=>(typeof e.condition=="function"?e.condition():e.condition)?a(s.$slots,"default",{key:0}):e.vElseChildren.length?(r(),d(i(n),{key:1,schema:e.vElseChildren,widgets:e.widgets,events:e.events,state:e.state,store:e.store},null,8,["schema","widgets","events","state","store"])):c("",!0)}});export{_ as default};
