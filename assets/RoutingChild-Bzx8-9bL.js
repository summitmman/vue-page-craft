import{_ as k}from"./PageCrafter.vue_vue_type_script_setup_true_lang-CMVNrBZR.js";import{d as S,r as d,o as h,a as v,w as o,aW as w,aX as T,b as m,e as a,F as j,a1 as l,f as x,p as C,j as M,h as t,k as R}from"./index-WB8KOmOZ.js";const i=n=>(C("data-v-3756e911"),n=n(),M(),n),F={class:"p-15"},J=i(()=>a("pre",null,[t("          "),a("code",null,[t(`
  const `),a("b",null,"reactiveVariableMap"),t(` = {};
          `)]),t(`
        `)],-1)),O=i(()=>a("pre",null,[t("          "),a("code",null,[t(`
  type reactiveVariablesType = typeof reactiveVariableMap & GenericObject < Ref | ComputedRef > ;
  const `),a("b",null,"eventMap:"),t(` EventMap < reactiveVariablesType > = (reactiveVariables: reactiveVariablesType): GenericObject < Function > => ({
    routeToPage2: () => {
      getSchemaFor('page2');
    },
    routeToPage3: () => {
      router.push('/routing/page3');
    },
    routeBack: () => {
      router.back();
    }
  });
          `)]),t(`
        `)],-1)),P=i(()=>a("pre",null,[t("          "),a("code",null,[t(`
  const `),a("b",null,"widgetMap"),t(` = {};
          `)]),t(`
        `)],-1)),B=S({__name:"RoutingChild",setup(n){const c=w(),p=T(),r=d(null),u=d(null),g=e=>fetch(`/vue-page-craft/mocks/${e}.json`).then(s=>s.json()),_={},f=()=>({routeToPage2:async()=>{const e=await g("page2");r.value=JSON.parse(JSON.stringify(e)),u.value=e},routeToPage3:()=>{p.push("/routing/page3")},routeBack:()=>{p.back()}}),b=[{path:new RegExp(/\/routing\/*.*/gm),schemaFetch:()=>{let e=c.path.replace("/routing","").replace("/","");return e||(e="page1"),g(e)},afterNavigate:e=>{r.value=JSON.parse(JSON.stringify(e))}},{path:"error",schemaFetch:e=>(console.log(e),Promise.resolve({id:"error-page",children:[{type:"h1",children:["Page not found"]}]}))}];return(e,s)=>{const V=m("JsonViewer"),y=m("Layout");return h(),v(y,null,{demo:o(()=>[a("div",F,[j(k,{page:u.value,"onUpdate:page":s[0]||(s[0]=N=>u.value=N),eventMap:f,reactiveVariableMap:_,route:l(c),router:l(p),routes:b},null,8,["page","route","router"])])]),schema:o(()=>[r.value?(h(),v(V,{key:l(c).path,value:r.value,expandDepth:3,theme:"jv-light"},null,8,["value"])):x("",!0)]),state:o(()=>[J]),events:o(()=>[O]),"component-map":o(()=>[P]),_:1})}}}),D=R(B,[["__scopeId","data-v-3756e911"]]);export{D as default};
