import{_ as V}from"./PageCrafter.vue_vue_type_script_setup_true_lang-xeYfmrFF.js";import{d as k,r as d,c as w,o as v,a as h,w as o,aW as O,aX as j,b as m,e as a,f as I,a1 as J,i as R,p as T,k as x,h as t,l as B}from"./index-DH415847.js";const i=s=>(T("data-v-6a63fcb9"),s=s(),x(),s),C={class:"p-15"},F=i(()=>a("pre",null,[t("          "),a("code",null,[t(`
const `),a("b",null,"data"),t(` = {};
          `)]),t(`
        `)],-1)),P=i(()=>a("pre",null,[t("          "),a("code",null,[t(`
type reactiveVariablesType = typeof data & GenericObject<Ref>;
const `),a("b",null,"events"),t(`: EventMap<reactiveVariablesType> = (state: reactiveVariablesType, store: GenericObject<Ref>): GenericObject<Function> => ({
  routeToPage2: async () => {
    const response = await getSchemaFor('page2');
    jsonData.value = JSON.parse(JSON.stringify(response));
    page.value = response;
  },
  routeToPage3: () => {
    router.push('/routing/page3');
  },
  routeBack: () => {
    router.back();
  },
  changeStateStore: () => {
    if (store.userId) {
      store.userId.value = 9898989898;
    }
    if (state.name) {
      state.name.value = 'Vinita Koyilot';
    }
    console.log('store', store);
  }
});
          `)]),t(`
        `)],-1)),D=i(()=>a("pre",null,[t("          "),a("code",null,[t(`
  const `),a("b",null,"widgets"),t(` = {};
          `)]),t(`
        `)],-1)),G=k({__name:"RoutingChild",props:{eventsByRoute:{type:Function,required:!1}},setup(s){const u=O(),p=j(),g=e=>fetch(`/vue-page-craft/mocks/${e}.json`).then(n=>n.json()),r=d(null),l=d(),f={},_=w(()=>(e,n)=>({routeToPage2:async()=>{const c=await g("page2");r.value=JSON.parse(JSON.stringify(c)),l.value=c},changeStateStore:()=>{n.userId&&(n.userId.value=9898989898),e.name&&(e.name.value="Vinita Koyilot"),console.log("store",n)},routeToPage3:()=>{p.push("/routing/page3")},routeBack:()=>{p.back()}})),y=[{path:new RegExp(/\/routing\/*.*/gm),schemaFetch:()=>{let e=u.path.replace("/routing","").replace("/","");return e||(e="page1"),g(e)},afterNavigate:e=>{r.value=JSON.parse(JSON.stringify(e))}},{path:"error",schemaFetch:e=>(console.log(e),Promise.resolve({id:"error-page",schema:[{type:"h1",children:["Page not found"]}]}))}],S={route:u,router:p,routes:y};return(e,n)=>{const c=m("JsonViewer"),b=m("Layout");return v(),h(b,null,{demo:o(()=>[a("div",C,[I(V,{page:l.value,"onUpdate:page":n[0]||(n[0]=N=>l.value=N),events:_.value,data:f,routing:S},null,8,["page","events"])])]),schema:o(()=>[r.value?(v(),h(c,{key:J(u).path,value:r.value,expandDepth:3,theme:"jv-light"},null,8,["value"])):R("",!0)]),state:o(()=>[F]),events:o(()=>[P]),"component-map":o(()=>[D]),_:1})}}}),K=B(G,[["__scopeId","data-v-6a63fcb9"]]);export{K as default};
