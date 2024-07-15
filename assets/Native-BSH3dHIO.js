function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Button-WgSuuUH_.js","assets/index-CDv07YQ4.js","assets/index-CHJscWOQ.css","assets/Button-DZR_S_CH.css","assets/Name-3negRATB.js","assets/Name-DqmKcQt8.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{d as C,r,c as I,o as v,a as _,w as i,b as g,e,f as k,g as L,v as V,h as n,t as w,i as B,j as h,p as x,k as O,_ as N,l as S}from"./index-CDv07YQ4.js";import{_ as T}from"./PageCrafter.vue_vue_type_script_setup_true_lang-D_x_eO_8.js";const u=c=>(x("data-v-9c888433"),c=c(),O(),c),j={class:"p-15"},A={class:"boundary"},D=u(()=>e("h2",null,"This section is outside page crafter",-1)),G=u(()=>e("p",null,"We will try to enter/change the Single Name/Pet Name",-1)),M=u(()=>e("pre",null,[n("        "),e("code",null,[n(`
const singleName = ref('Beta');
const `),e("b",null,"data"),n(`: IPageData = {
  state: {
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
  }
};
        `)]),n(`
      `)],-1)),P=u(()=>e("pre",null,[n("        "),e("code",null,[n(`
type reactiveVariablesType = typeof data & GenericObject<Ref | ComputedRef>;
const `),e("b",null,"events"),n(`: EventMap<reactiveVariablesType> = (state: reactiveVariablesType, store: GenericObject<Ref>, extra: GenericObject): GenericObject<Function> => ({
  handleAppCustomClick: () => {
    alert(\`Hello \${ state.name?.value }\`);
  },
  handleChange: (val: string) => {
    console.log('SUMIT LOG', val, state.surname?.value, store, extra);
    if (store.userId)
      store.userId.value = 98989898;
  },
  singleNameLengthFn: () => {
    return state.singleNameLength.value;
  }
});
        `)]),n(`
      `)],-1)),E=u(()=>e("pre",null,[n("        "),e("code",null,[n(`
const `),e("b",null,"widgets"),n(` = {
  Button: defineAsyncComponent(() => import(/* webpackChunkName: "Button" */ '../components/Button.vue')),
  Name: defineAsyncComponent(() => import(/* webpackChunkName: "Name" */ '../components/Name.vue'))
};
        `)]),n(`
      `)],-1)),R=C({__name:"Native",setup(c){const f={Button:h(()=>N(()=>import("./Button-WgSuuUH_.js"),__vite__mapDeps([0,1,2,3]))),Name:h(()=>N(()=>import("./Name-3negRATB.js"),__vite__mapDeps([4,1,2,5])))},l=r("Beta"),b={state:{singleName:l,singleNameLength:I(()=>l.value.length),cities:r([{name:"Mumbai"},{name:"Bengaluru"}])}},y=(t,a,d)=>({handleAppCustomClick:()=>{var s;alert(`Hello ${(s=t.name)==null?void 0:s.value}`)},handleChange:s=>{var o;console.log("SUMIT LOG",s,(o=t.surname)==null?void 0:o.value,a,d),a.userId&&(a.userId.value=98989898)},singleNameLengthFn:()=>t.singleNameLength.value}),p=r(null),m=r(null);return fetch("/vue-page-craft/mocks/native.json").then(t=>t.json()).then(t=>{m.value=JSON.parse(JSON.stringify(t)),p.value=t}),(t,a)=>{const d=g("JsonViewer"),s=g("Layout");return v(),_(s,null,{demo:i(()=>[e("div",j,[k(T,{page:p.value,"onUpdate:page":a[0]||(a[0]=o=>p.value=o),widgets:f,events:y,data:b},null,8,["page"]),e("div",A,[D,G,L(e("input",{type:"text",class:"native-input block","onUpdate:modelValue":a[1]||(a[1]=o=>l.value=o)},null,512),[[V,l.value]]),n(' Your Single Name/Pet Name is "'+w(l.value)+'" ',1)])])]),schema:i(()=>[m.value?(v(),_(d,{key:0,value:m.value,expandDepth:3,theme:"jv-light"},null,8,["value"])):B("",!0)]),state:i(()=>[M]),events:i(()=>[P]),"component-map":i(()=>[E]),_:1})}}}),$=S(R,[["__scopeId","data-v-9c888433"]]);export{$ as default};
