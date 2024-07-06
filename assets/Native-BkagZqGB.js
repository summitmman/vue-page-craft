function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Button-D2DghPNY.js","assets/index-WB8KOmOZ.js","assets/index-CHJscWOQ.css","assets/Button-DZR_S_CH.css","assets/Name-DIKzzMX1.js","assets/Name-DqmKcQt8.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{d as V,r,c as k,o as d,a as v,w as l,b as _,e,f as h,g as M,v as L,h as n,t as w,i as g,p as B,j as S,_ as N,k as O}from"./index-WB8KOmOZ.js";import{_ as T}from"./PageCrafter.vue_vue_type_script_setup_true_lang-CMVNrBZR.js";const s=i=>(B("data-v-f79536dc"),i=i(),S(),i),j={class:"p-15"},x={class:"boundary"},I=s(()=>e("h2",null,"This section is outside page crafter",-1)),A=s(()=>e("p",null,"We will try to enter/change the Single Name/Pet Name",-1)),D=s(()=>e("pre",null,[n("        "),e("code",null,[n(`
const singleName = ref('Beta');
const `),e("b",null,"reactiveVariableMap"),n(` = {
  singleName,
  singleNameLength: computed(() => singleName.value.length),
  cities: ref([
    {
      name: 'Mumbai',
    },
    {
      name: 'Bengaluru'
    }
  ])
};
        `)]),n(`
      `)],-1)),R=s(()=>e("pre",null,[n("        "),e("code",null,[n(`
type reactiveVariablesType = typeof reactiveVariableMap & GenericObject < Ref | ComputedRef > ;
const `),e("b",null,"eventMap:"),n(` EventMap < reactiveVariablesType > = (reactiveVariables: GenericObject < Ref | ComputedRef > ): GenericObject < Function > => ({
  handleAppCustomClick: () => {
    alert(\`Hello \${ reactiveVariables.name?.value }\`);
  },
  handleChange: (val: any) => {
    console.log('SUMIT LOG', val, reactiveVariables.surname?.value);
  },
  singleNameLengthFn: () => {
    return reactiveVariables.singleNameLength.value;
  }
});
        `)]),n(`
      `)],-1)),E=s(()=>e("pre",null,[n("        "),e("code",null,[n(`
const `),e("b",null,"widgetMap"),n(` = {
  Button: defineAsyncComponent(() => import(/* webpackChunkName: "Button" */ '../components/Button.vue')),
  Name: defineAsyncComponent(() => import(/* webpackChunkName: "Name" */ '../components/Name.vue'))
};
        `)]),n(`
      `)],-1)),G=V({__name:"Native",setup(i){const p=r(null),o=r("Beta"),f={Button:g(()=>N(()=>import("./Button-D2DghPNY.js"),__vite__mapDeps([0,1,2,3]))),Name:g(()=>N(()=>import("./Name-DIKzzMX1.js"),__vite__mapDeps([4,1,2,5])))},b={singleName:o,singleNameLength:k(()=>o.value.length),cities:r([{name:"Mumbai"},{name:"Bengaluru"}])},y=(a,c)=>({handleAppCustomClick:()=>{var t;alert(`Hello ${(t=a.name)==null?void 0:t.value}`)},handleChange:t=>{var u;console.log("SUMIT LOG",t,(u=a.surname)==null?void 0:u.value,c)},singleNameLengthFn:()=>a.singleNameLength.value}),m=r(null);return fetch("/vue-page-craft/mocks/native.json").then(a=>a.json()).then(a=>{p.value=JSON.parse(JSON.stringify(a)),m.value=a}),(a,c)=>{const t=_("JsonViewer"),u=_("Layout");return d(),v(u,null,{demo:l(()=>[e("div",j,[m.value?(d(),v(T,{key:0,page:m.value??{id:"",children:[]},widgetMap:f,eventMap:y,reactiveVariableMap:b},null,8,["page"])):h("",!0),e("div",x,[I,A,M(e("input",{type:"text",class:"native-input block","onUpdate:modelValue":c[0]||(c[0]=C=>o.value=C)},null,512),[[L,o.value]]),n(' Your Single Name/Pet Name is "'+w(o.value)+'" ',1)])])]),schema:l(()=>[p.value?(d(),v(t,{key:0,value:p.value,expandDepth:3,theme:"jv-light"},null,8,["value"])):h("",!0)]),state:l(()=>[D]),events:l(()=>[R]),"component-map":l(()=>[E]),_:1})}}}),$=O(G,[["__scopeId","data-v-f79536dc"]]);export{$ as default};
