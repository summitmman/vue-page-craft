import{_ as V}from"./PageCrafter.vue_vue_type_script_setup_true_lang-DfELXjmy.js";import{d as k,r as g,c as j,o as v,a as h,w as s,aW as w,aX as B,b as m,e as n,f as x,a1 as O,i as C,p as F,k as I,h as t,l as J}from"./index-Be-jZZGx.js";const l=o=>(F("data-v-daf5797f"),o=o(),I(),o),T={class:"p-15"},P=l(()=>n("pre",null,[t("          "),n("code",null,[t(`
const `),n("b",null,"data"),t(` = {};
          `)]),t(`
        `)],-1)),D=l(()=>n("pre",null,[t("          "),n("code",null,[t(`
type reactiveVariablesType = typeof data & GenericObject<Ref>;
const `),n("b",null,"events"),t(`: EventMap<reactiveVariablesType> = (state: reactiveVariablesType, store: GenericObject<Ref>): GenericObject<Function> => ({
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
        `)],-1)),G=l(()=>n("pre",null,[t("          "),n("code",null,[t(`
  const `),n("b",null,"widgets"),t(` = {};
          `)]),t(`
        `)],-1)),$=k({__name:"RoutingChild",props:{eventsByRoute:{type:Function,required:!1,default:()=>({})}},setup(o){const i=o,c=w(),u=B(),d=e=>fetch(`/vue-page-craft/mocks/${e}.json`).then(a=>a.json()),r=g(null),p=g(),f={},_=j(()=>(e,a)=>({...(i.eventsByRoute&&i.eventsByRoute({getSchemaFor:d,jsonData:r,page:p,store:a,state:e,router:u}))??{},routeBack:()=>{u.back()}})),y=[{path:new RegExp(/\/routing\/*.*/gm),schemaFetch:()=>{let e=c.path.replace("/routing","").replace("/","");return e||(e="page1"),d(e)},afterNavigate:e=>{r.value=JSON.parse(JSON.stringify(e))}},{path:"error",schemaFetch:e=>(console.log(e),Promise.resolve({id:"error-page",schema:[{type:"h1",children:["Page not found"]}]}))}],b={route:c,router:u,routes:y};return(e,a)=>{const S=m("JsonViewer"),N=m("Layout");return v(),h(N,null,{demo:s(()=>[n("div",T,[x(V,{page:p.value,"onUpdate:page":a[0]||(a[0]=R=>p.value=R),events:_.value,data:f,routing:b},null,8,["page","events"])])]),schema:s(()=>[r.value?(v(),h(S,{key:O(c).path,value:r.value,expandDepth:3,theme:"jv-light"},null,8,["value"])):C("",!0)]),state:s(()=>[P]),events:s(()=>[D]),"component-map":s(()=>[G]),_:1})}}}),q=J($,[["__scopeId","data-v-daf5797f"]]);export{q as default};
