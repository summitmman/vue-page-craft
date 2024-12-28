function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Button-DOtt42tD.js","assets/index-Yq-Oag8F.js","assets/index-uwfnpMVq.css","assets/Button-BzaL-xx4.css","assets/Name-BMlmLJAH.js","assets/Name-CnzCduxT.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{d as I,r as c,c as y,o as v,a as _,w as s,b as g,e as a,f as L,g as k,h,p as B,i as V,j as e,_ as f,k as O}from"./index-Yq-Oag8F.js";import{_ as j}from"./PageCrafter.vue_vue_type_script_setup_true_lang-B7Dwt3xw.js";const p=l=>(B("data-v-8a466f90"),l=l(),V(),l),w={class:"p-15"},x=p(()=>a("pre",null,[e("        "),a("code",null,[e(`
const singleName = ref('Beta');
const `),a("b",null,"data"),e(`: IPageData = {
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
        `)]),e(`
      `)],-1)),T=p(()=>a("pre",null,[e("        "),a("code",null,[e(`
type reactiveVariablesType = typeof data & GenericObject<Ref | ComputedRef>;
const `),a("b",null,"events"),e(`: EventMap<reactiveVariablesType> = (state: reactiveVariablesType, store: GenericObject<Ref>, extra: GenericObject): GenericObject<Function> => ({
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
        `)]),e(`
      `)],-1)),A=p(()=>a("pre",null,[e("        "),a("code",null,[e(`
const `),a("b",null,"widgets"),e(` = {
  Button: defineAsyncComponent(() => import(/* webpackChunkName: "Button" */ '../components/Button.vue')),
  Name: defineAsyncComponent(() => import(/* webpackChunkName: "Name" */ '../components/Name.vue'))
};
        `)]),e(`
      `)],-1)),S=I({__name:"Native",setup(l){const N={Button:h(()=>f(()=>import("./Button-DOtt42tD.js"),__vite__mapDeps([0,1,2,3]))),Name:h(()=>f(()=>import("./Name-BMlmLJAH.js"),__vite__mapDeps([4,1,2,5])))},d=c("Beta"),C={state:{singleName:d,singleNameLength:y(()=>d.value.length),cities:c([{name:"Mumbai"},{name:"Bengaluru"}])}},b=(n,o,m)=>({handleAppCustomClick:()=>{var t;alert(`Hello ${(t=n.name)==null?void 0:t.value}`)},handleNameChange:t=>{n.name&&(n.name.value=t.target.value)},handleChange:t=>{var u;console.log("SUMIT LOG",t,(u=n.surname)==null?void 0:u.value,o,m),o.userId&&(o.userId.value=98989898)},singleNameLengthFn:()=>n.singleNameLength.value}),i=c(null),r=c(null);return fetch("/vue-page-craft/mocks/native.json").then(n=>n.json()).then(n=>{r.value=JSON.parse(JSON.stringify(n)),i.value=n}),(n,o)=>{const m=g("JsonViewer"),t=g("Layout");return v(),_(t,null,{demo:s(()=>[a("div",w,[L(j,{page:i.value,"onUpdate:page":o[0]||(o[0]=u=>i.value=u),widgets:N,events:b,data:C},null,8,["page"])])]),schema:s(()=>[r.value?(v(),_(m,{key:0,value:r.value,expandDepth:3,theme:"jv-light"},null,8,["value"])):k("",!0)]),state:s(()=>[x]),events:s(()=>[T]),"component-map":s(()=>[A]),_:1})}}}),E=O(S,[["__scopeId","data-v-8a466f90"]]);export{E as default};
