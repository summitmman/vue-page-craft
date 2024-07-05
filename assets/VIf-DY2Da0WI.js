function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/WidgetsRenderer-wiYAksfd.js","assets/PageCrafter.vue_vue_type_script_setup_true_lang-Cw_nDuWj.js","assets/index-C02-qjtf.js","assets/index-CHJscWOQ.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{d as i,aR as r,o,a as d,a1 as p,f as c,i as l,_ as s}from"./index-C02-qjtf.js";const v=i({__name:"VIf",props:{condition:{type:[String,Number,Boolean,Object,Function],required:!0},vElseChildren:{type:Array,default:()=>[]},widgetMap:{type:Object,default:()=>{}},eventMap:{type:Object,default:()=>{}},reactiveVariableMap:{type:Object,default:()=>{}}},setup(t){const a=l(()=>s(()=>import("./WidgetsRenderer-wiYAksfd.js"),__vite__mapDeps([0,1,2,3]))),e=t;return(n,u)=>(typeof e.condition=="function"?e.condition():e.condition)?r(n.$slots,"default",{key:0}):e.vElseChildren.length?(o(),d(p(a),{key:1,widgets:e.vElseChildren,widgetMap:e.widgetMap,eventMap:e.eventMap,reactiveVariableMap:e.reactiveVariableMap},null,8,["widgets","widgetMap","eventMap","reactiveVariableMap"])):c("",!0)}});export{v as default};
