import{d as R,r as g,c as j,o as v,a as m,w as s,aU as k,aV as w,b as h,e as n,f as B,$ as x,g as O,p as C,i as F,j as t,k as I}from"./index-Yq-Oag8F.js";import{_ as J}from"./PageCrafter.vue_vue_type_script_setup_true_lang-B7Dwt3xw.js";const l=a=>(C("data-v-2b4549f7"),a=a(),F(),a),T={class:"p-15"},P=l(()=>n("pre",null,[t("          "),n("code",null,[t(`
const `),n("b",null,"data"),t(` = {};
          `)]),t(`
        `)],-1)),$=l(()=>n("pre",null,[t("          "),n("code",null,[t(`
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
        `)],-1)),D=l(()=>n("pre",null,[t("          "),n("code",null,[t(`
  const `),n("b",null,"widgets"),t(` = {};
          `)]),t(`
        `)],-1)),G=R({__name:"RoutingChild",props:{eventsByRoute:{type:Function,required:!1,default:()=>({})}},setup(a){const i=a,c=k(),u=w(),d=e=>fetch(`/vue-page-craft/mocks/${e}.json`).then(o=>o.json()),r=g(null),p=g(),f={},_=j(()=>(e,o)=>({...(i.eventsByRoute&&i.eventsByRoute({getSchemaFor:d,jsonData:r,page:p,store:o,state:e,router:u}))??{},routeBack:()=>{u.back()}})),y=[{path:new RegExp(/\/routing\/*.*/gm),schemaFetch:()=>{let e=c.path.replace("/routing","").replace("/","");return e||(e="page1"),d(e)},afterNavigate:e=>{r.value=JSON.parse(JSON.stringify(e))}},{path:"error",schemaFetch:e=>(console.log(e),Promise.resolve({id:"error-page",schema:[{type:"h1",children:["Page not found"]}]}))}],b={route:c,router:u,routes:y};return(e,o)=>{const S=h("JsonViewer"),V=h("Layout");return v(),m(V,null,{demo:s(()=>[n("div",T,[B(J,{page:p.value,"onUpdate:page":o[0]||(o[0]=N=>p.value=N),events:_.value,data:f,routing:b},null,8,["page","events"])])]),schema:s(()=>[r.value?(v(),m(S,{key:x(c).path,value:r.value,expandDepth:3,theme:"jv-light"},null,8,["value"])):O("",!0)]),state:s(()=>[P]),events:s(()=>[$]),"component-map":s(()=>[D]),_:1})}}}),U=I(G,[["__scopeId","data-v-2b4549f7"]]);export{U as default};
