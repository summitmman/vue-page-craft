function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/WidgetsRenderer-C7J10kWA.js","assets/PageCrafter.vue_vue_type_script_setup_true_lang-B7Dwt3xw.js","assets/index-Yq-Oag8F.js","assets/index-uwfnpMVq.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{d,o as r,aS as i,a_ as p,a as l,$ as c,X as u,h as _,_ as m}from"./index-Yq-Oag8F.js";const O=d({__name:"VFor",props:{id:{type:String,required:!0},loopOn:{type:[String,Number,Boolean,Object,Function],required:!0},loopChildren:{type:Array,default:()=>[]},widgets:{type:Object,default:()=>{}},events:{type:Object,default:()=>{}},state:{type:Object,default:()=>{}},store:{type:Object,default:()=>{}}},setup(s){const n=_(()=>m(()=>import("./WidgetsRenderer-C7J10kWA.js"),__vite__mapDeps([0,1,2,3]))),e=s,o=()=>JSON.parse(JSON.stringify(e.loopChildren));return(f,y)=>(r(!0),i(u,null,p(e.loopOn,(a,t)=>(r(),l(c(n),{key:e.id+"item"+t,schema:o(),widgets:e.widgets,events:e.events,state:{...e.state,[e.id+"Item"]:a,[e.id+"Index"]:t},store:e.store},null,8,["schema","widgets","events","state","store"]))),128))}});export{O as default};
