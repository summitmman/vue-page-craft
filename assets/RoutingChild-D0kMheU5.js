import{_ as V}from"./PageCrafter.vue_vue_type_script_setup_true_lang-gc-Xhyo4.js";import{d as k,r as d,o as h,a as m,w as o,aW as w,aX as O,b as v,e as a,f as j,a1 as I,i as J,p as T,k as x,h as t,l as R}from"./index-RRfiePJe.js";const i=s=>(T("data-v-6cacfe1e"),s=s(),x(),s),C={class:"p-15"},P=i(()=>a("pre",null,[t("          "),a("code",null,[t(`
const `),a("b",null,"data"),t(` = {};
          `)]),t(`
        `)],-1)),B=i(()=>a("pre",null,[t("          "),a("code",null,[t(`
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
        `)],-1)),F=i(()=>a("pre",null,[t("          "),a("code",null,[t(`
  const `),a("b",null,"widgets"),t(` = {};
          `)]),t(`
        `)],-1)),D=k({__name:"RoutingChild",setup(s){const u=w(),l=O(),r=d(null),p=d(null),g=e=>fetch(`/vue-page-craft/mocks/${e}.json`).then(n=>n.json()),f={},_=(e,n)=>({routeToPage2:async()=>{const c=await g("page2");r.value=JSON.parse(JSON.stringify(c)),p.value=c},routeToPage3:()=>{l.push("/routing/page3")},routeBack:()=>{l.back()},changeStateStore:()=>{n.userId&&(n.userId.value=9898989898),e.name&&(e.name.value="Vinita Koyilot"),console.log("store",n)}}),y=[{path:new RegExp(/\/routing\/*.*/gm),schemaFetch:()=>{let e=u.path.replace("/routing","").replace("/","");return e||(e="page1"),g(e)},afterNavigate:e=>{r.value=JSON.parse(JSON.stringify(e))}},{path:"error",schemaFetch:e=>(console.log(e),Promise.resolve({id:"error-page",schema:[{type:"h1",children:["Page not found"]}]}))}],S={route:u,router:l,routes:y};return(e,n)=>{const c=v("JsonViewer"),b=v("Layout");return h(),m(b,null,{demo:o(()=>[a("div",C,[j(V,{page:p.value,"onUpdate:page":n[0]||(n[0]=N=>p.value=N),events:_,data:f,routing:S},null,8,["page"])])]),schema:o(()=>[r.value?(h(),m(c,{key:I(u).path,value:r.value,expandDepth:3,theme:"jv-light"},null,8,["value"])):J("",!0)]),state:o(()=>[P]),events:o(()=>[B]),"component-map":o(()=>[F]),_:1})}}}),E=R(D,[["__scopeId","data-v-6cacfe1e"]]);export{E as default};
