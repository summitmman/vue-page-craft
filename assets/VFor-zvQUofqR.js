function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/WidgetsRenderer-CvQp1hP1.js","assets/PageCrafter.vue_vue_type_script_setup_true_lang-Cz92CpmY.js","assets/index-C0OJXrI_.js","assets/index-C8V-3xEC.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{d as p,o as a,aU as d,aW as l,a as s,a1 as c,Z as u,i as _,_ as g}from"./index-C0OJXrI_.js";const v=p({__name:"VFor",props:{id:{type:String,required:!0},loopOn:{type:[String,Number,Boolean,Object,Function],required:!0},loopChildren:{type:Array,default:()=>[]},widgetMap:{type:Object,default:()=>{}},eventMap:{type:Object,default:()=>{}},reactiveVariableMap:{type:Object,default:()=>{}}},setup(r){const n=_(()=>g(()=>import("./WidgetsRenderer-CvQp1hP1.js"),__vite__mapDeps([0,1,2,3]))),e=r,i=()=>JSON.parse(JSON.stringify(e.loopChildren));return(m,M)=>(a(!0),d(u,null,l(e.loopOn,(o,t)=>(a(),s(c(n),{key:e.id+"item"+t,widgets:i(),widgetMap:e.widgetMap,eventMap:e.eventMap,reactiveVariableMap:{...e.reactiveVariableMap,[e.id+"Item"]:o,[e.id+"Index"]:t}},null,8,["widgets","widgetMap","eventMap","reactiveVariableMap"]))),128))}});export{v as default};
