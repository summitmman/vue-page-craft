function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/WidgetsRenderer-hLm_tXOg.js","assets/PageCrafter.vue_vue_type_script_setup_true_lang-gc-Xhyo4.js","assets/index-RRfiePJe.js","assets/index-CHJscWOQ.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{d as o,aR as r,o as a,a as d,a1 as i,i as c,j as l,_ as u}from"./index-RRfiePJe.js";const _=o({__name:"VIf",props:{condition:{type:[String,Number,Boolean,Object,Function],required:!0},vElseChildren:{type:Array,default:()=>[]},widgets:{type:Object,default:()=>{}},events:{type:Object,default:()=>{}},state:{type:Object,default:()=>{}},store:{type:Object,default:()=>{}}},setup(t){const n=l(()=>u(()=>import("./WidgetsRenderer-hLm_tXOg.js"),__vite__mapDeps([0,1,2,3]))),e=t;return(s,p)=>(typeof e.condition=="function"?e.condition():e.condition)?r(s.$slots,"default",{key:0}):e.vElseChildren.length?(a(),d(i(n),{key:1,schema:e.vElseChildren,widgets:e.widgets,events:e.events,state:e.state,store:e.store},null,8,["schema","widgets","events","state","store"])):c("",!0)}});export{_ as default};
