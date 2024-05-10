function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/WidgetsRenderer-DBO2oZ9d.js","assets/PageCrafter.vue_vue_type_script_setup_true_lang-DAWBmiHY.js","assets/index-DUXUg2Vn.js","assets/index-WdrtKxrc.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{d as r,aR as i,o,e as d,a1 as p,f as c,h as l,_ as s}from"./index-DUXUg2Vn.js";const v=r({__name:"VIf",props:{condition:{type:[String,Number,Boolean,Object,Function],required:!0},vElseChildren:{type:Array,default:()=>[]},widgetMap:{type:Object,default:()=>{}},eventMap:{type:Object,default:()=>{}},reactiveVariableMap:{type:Object,default:()=>{}}},setup(t){const a=l(()=>s(()=>import("./WidgetsRenderer-DBO2oZ9d.js"),__vite__mapDeps([0,1,2,3]))),e=t;return(n,u)=>(typeof e.condition=="function"?e.condition():e.condition)?i(n.$slots,"default",{key:0}):e.vElseChildren.length?(o(),d(p(a),{key:1,widgets:e.vElseChildren,widgetMap:e.widgetMap,eventMap:e.eventMap,reactiveVariableMap:e.reactiveVariableMap},null,8,["widgets","widgetMap","eventMap","reactiveVariableMap"])):c("",!0)}});export{v as default};
