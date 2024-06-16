function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Button-qB_ehgb_.js","assets/index-DLozcEEb.js","assets/index-Bi55jKNN.css","assets/Button-DZR_S_CH.css","assets/Name-B1KHfznk.js","assets/Name-DqmKcQt8.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{d as V,r as u,c as k,o as m,a as d,w as l,b as v,e,f as _,g as M,v as L,h as n,t as w,i as h,p as B,j as S,_ as g,k as O}from"./index-DLozcEEb.js";import{_ as T}from"./PageCrafter.vue_vue_type_script_setup_true_lang-CyjdKzMU.js";const s=i=>(B("data-v-8c1d4347"),i=i(),S(),i),j={class:"p-15"},x={class:"boundary"},I=s(()=>e("h2",null,"This section is outside page crafter",-1)),A=s(()=>e("p",null,"We will try to enter/change the Single Name/Pet Name",-1)),D=s(()=>e("pre",null,[n("        "),e("code",null,[n(`
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
      `)],-1)),G=V({__name:"Native",setup(i){const r=u(null),o=u("Beta"),N={Button:h(()=>g(()=>import("./Button-qB_ehgb_.js"),__vite__mapDeps([0,1,2,3]))),Name:h(()=>g(()=>import("./Name-B1KHfznk.js"),__vite__mapDeps([4,1,2,5])))},f={singleName:o,singleNameLength:k(()=>o.value.length),cities:u([{name:"Mumbai"},{name:"Bengaluru"}])},b=a=>({handleAppCustomClick:()=>{var t;alert(`Hello ${(t=a.name)==null?void 0:t.value}`)},handleChange:t=>{var c;console.log("SUMIT LOG",t,(c=a.surname)==null?void 0:c.value)},singleNameLengthFn:()=>a.singleNameLength.value}),p=u(null);return fetch("/vue-page-craft/mocks/native.json").then(a=>a.json()).then(a=>{r.value=JSON.parse(JSON.stringify(a)),p.value=a}),(a,t)=>{const c=v("JsonViewer"),y=v("Layout");return m(),d(y,null,{demo:l(()=>[e("div",j,[p.value?(m(),d(T,{key:0,page:p.value??{id:"",children:[]},widgetMap:N,eventMap:b,reactiveVariableMap:f},null,8,["page"])):_("",!0),e("div",x,[I,A,M(e("input",{type:"text",class:"native-input block","onUpdate:modelValue":t[0]||(t[0]=C=>o.value=C)},null,512),[[L,o.value]]),n(' Your Single Name/Pet Name is "'+w(o.value)+'" ',1)])])]),schema:l(()=>[r.value?(m(),d(c,{key:0,value:r.value,expandDepth:3,theme:"jv-light"},null,8,["value"])):_("",!0)]),state:l(()=>[D]),events:l(()=>[R]),"component-map":l(()=>[E]),_:1})}}}),$=O(G,[["__scopeId","data-v-8c1d4347"]]);export{$ as default};
