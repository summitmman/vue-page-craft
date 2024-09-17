import{d as V,r as g,c as k,o as v,a as h,w as s,aW as j,aX as w,b as m,e as n,f as B,a1 as x,i as O,p as C,k as F,h as t,l as I}from"./index-BCaH7Z-I.js";import{_ as J}from"./PageCrafter.vue_vue_type_script_setup_true_lang-D5bbMPvx.js";const l=o=>(C("data-v-88a0bfbb"),o=o(),F(),o),T={class:"p-15"},P=l(()=>n("pre",null,[t("          "),n("code",null,[t(`
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
        `)],-1)),$=V({__name:"RoutingChild",props:{eventsByRoute:{type:Function,required:!1,default:()=>({})}},setup(o){const i=o,c=j(),u=w(),d=e=>fetch(`/vue-page-craft/mocks/${e}.json`).then(a=>a.json()),r=g(null),p=g(),f={},_=k(()=>(e,a)=>({...(i.eventsByRoute&&i.eventsByRoute({getSchemaFor:d,jsonData:r,page:p,store:a,state:e,router:u}))??{},routeBack:()=>{u.back()}})),b=[{path:new RegExp(/\/routing\/*.*/gm),schemaFetch:()=>{let e=c.path.replace("/routing","").replace("/","");return e||(e="page1"),d(e)},afterNavigate:e=>{r.value=JSON.parse(JSON.stringify(e))}},{path:"error",schemaFetch:e=>(console.log(e),Promise.resolve({id:"error-page",schema:[{type:"h1",children:["Page not found"]}]}))}],y={route:c,router:u,routes:b};return(e,a)=>{const S=m("JsonViewer"),N=m("Layout");return v(),h(N,null,{demo:s(()=>[n("div",T,[B(J,{page:p.value,"onUpdate:page":a[0]||(a[0]=R=>p.value=R),events:_.value,data:f,routing:y},null,8,["page","events"])])]),schema:s(()=>[r.value?(v(),h(S,{key:x(c).path,value:r.value,expandDepth:3,theme:"jv-light"},null,8,["value"])):O("",!0)]),state:s(()=>[P]),events:s(()=>[D]),"component-map":s(()=>[G]),_:1})}}}),q=I($,[["__scopeId","data-v-88a0bfbb"]]);export{q as default};
