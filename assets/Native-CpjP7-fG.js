function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Button-D_gUXvUd.js","assets/index-BGrK4jw0.js","assets/index-Bi55jKNN.css","assets/Button-DZR_S_CH.css","assets/Name-DoLy0yGJ.js","assets/Name-DqmKcQt8.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{d as y,r as u,c as L,o as p,a as d,w as l,b as v,e,f as _,g as M,v as V,h as n,t as w,i as h,p as B,j as S,_ as g,k as x}from"./index-BGrK4jw0.js";import{_ as I}from"./PageCrafter.vue_vue_type_script_setup_true_lang-Dp5Y9RSt.js";const s=i=>(B("data-v-381be568"),i=i(),S(),i),O={class:"p-15"},j={class:"boundary"},A=s(()=>e("h2",null,"This section is outside page crafter",-1)),T=s(()=>e("p",null,"We will try to enter/change the Single Name/Pet Name",-1)),D=s(()=>e("pre",null,[n("        "),e("code",null,[n(`
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
      `)],-1)),E=s(()=>e("pre",null,[n("        "),e("code",null,[n(`
const `),e("b",null,"eventMap:"),n(` EventMap = (reactiveVariables: GenericObject < Ref | ComputedRef > ): GenericObject < Function > => ({
  handleAppCustomClick: () => {
    alert(\`Hello \${ reactiveVariables.name?.value }\`);
  },
  handleChange: (val: any) => {
    console.log('SUMIT LOG', val, reactiveVariables.surname?.value);
  },
  singleNameLengthFn: () => {
    return reactiveVariables.singleNameLength?.value;
  }
});
        `)]),n(`
      `)],-1)),P=s(()=>e("pre",null,[n("        "),e("code",null,[n(`
const `),e("b",null,"widgetMap"),n(` = {
  Button: defineAsyncComponent(() => import(/* webpackChunkName: "Button" */ '../components/Button.vue')),
  Name: defineAsyncComponent(() => import(/* webpackChunkName: "Name" */ '../components/Name.vue'))
};
        `)]),n(`
      `)],-1)),G=y({__name:"Native",setup(i){const r=u(null),o=u("Beta"),N={Button:h(()=>g(()=>import("./Button-D_gUXvUd.js"),__vite__mapDeps([0,1,2,3]))),Name:h(()=>g(()=>import("./Name-DoLy0yGJ.js"),__vite__mapDeps([4,1,2,5])))},f=a=>({handleAppCustomClick:()=>{var t;alert(`Hello ${(t=a.name)==null?void 0:t.value}`)},handleChange:t=>{var c;console.log("SUMIT LOG",t,(c=a.surname)==null?void 0:c.value)},singleNameLengthFn:()=>{var t;return(t=a.singleNameLength)==null?void 0:t.value}}),b={singleName:o,singleNameLength:L(()=>o.value.length),cities:u([{name:"Mumbai"},{name:"Bengaluru"}])},m=u(null);return fetch("/vue-page-craft/mocks/native.json").then(a=>a.json()).then(a=>{r.value=JSON.parse(JSON.stringify(a)),m.value=a}),(a,t)=>{const c=v("JsonViewer"),C=v("Layout");return p(),d(C,null,{demo:l(()=>[e("div",O,[m.value?(p(),d(I,{key:0,page:m.value??{id:"",children:[]},widgetMap:N,eventMap:f,reactiveVariableMap:b},null,8,["page"])):_("",!0),e("div",j,[A,T,M(e("input",{type:"text",class:"native-input block","onUpdate:modelValue":t[0]||(t[0]=k=>o.value=k)},null,512),[[V,o.value]]),n(' Your Single Name/Pet Name is "'+w(o.value)+'" ',1)])])]),schema:l(()=>[r.value?(p(),d(c,{key:0,value:r.value,expandDepth:"3",theme:"jv-light"},null,8,["value"])):_("",!0)]),state:l(()=>[D]),events:l(()=>[E]),"component-map":l(()=>[P]),_:1})}}}),$=x(G,[["__scopeId","data-v-381be568"]]);export{$ as default};
