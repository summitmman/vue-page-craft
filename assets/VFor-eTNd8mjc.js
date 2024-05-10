function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/WidgetsRenderer-DBO2oZ9d.js","assets/PageCrafter.vue_vue_type_script_setup_true_lang-DAWBmiHY.js","assets/index-DUXUg2Vn.js","assets/index-WdrtKxrc.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{d as p,o as a,a as d,aV as l,e as s,a1 as c,Z as u,h as _,_ as g}from"./index-DUXUg2Vn.js";const v=p({__name:"VFor",props:{id:{type:String,required:!0},loopOn:{type:[String,Number,Boolean,Object,Function],required:!0},loopChildren:{type:Array,default:()=>[]},widgetMap:{type:Object,default:()=>{}},eventMap:{type:Object,default:()=>{}},reactiveVariableMap:{type:Object,default:()=>{}}},setup(r){const n=_(()=>g(()=>import("./WidgetsRenderer-DBO2oZ9d.js"),__vite__mapDeps([0,1,2,3]))),e=r,i=()=>JSON.parse(JSON.stringify(e.loopChildren));return(m,M)=>(a(!0),d(u,null,l(e.loopOn,(o,t)=>(a(),s(c(n),{key:e.id+"item"+t,widgets:i(),widgetMap:e.widgetMap,eventMap:e.eventMap,reactiveVariableMap:{...e.reactiveVariableMap,[e.id+"Item"]:o,[e.id+"Index"]:t}},null,8,["widgets","widgetMap","eventMap","reactiveVariableMap"]))),128))}});export{v as default};
