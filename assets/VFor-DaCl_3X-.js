function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/WidgetsRenderer-CCWe58WA.js","assets/PageCrafter.vue_vue_type_script_setup_true_lang-D5bbMPvx.js","assets/index-BCaH7Z-I.js","assets/index-CHJscWOQ.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{d,o as r,aU as i,a_ as p,a as l,a1 as c,Z as u,j as _,_ as m}from"./index-BCaH7Z-I.js";const O=d({__name:"VFor",props:{id:{type:String,required:!0},loopOn:{type:[String,Number,Boolean,Object,Function],required:!0},loopChildren:{type:Array,default:()=>[]},widgets:{type:Object,default:()=>{}},events:{type:Object,default:()=>{}},state:{type:Object,default:()=>{}},store:{type:Object,default:()=>{}}},setup(s){const n=_(()=>m(()=>import("./WidgetsRenderer-CCWe58WA.js"),__vite__mapDeps([0,1,2,3]))),e=s,o=()=>JSON.parse(JSON.stringify(e.loopChildren));return(f,y)=>(r(!0),i(u,null,p(e.loopOn,(a,t)=>(r(),l(c(n),{key:e.id+"item"+t,schema:o(),widgets:e.widgets,events:e.events,state:{...e.state,[e.id+"Item"]:a,[e.id+"Index"]:t},store:e.store},null,8,["schema","widgets","events","state","store"]))),128))}});export{O as default};