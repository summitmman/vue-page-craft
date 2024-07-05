import{_ as S}from"./PageCrafter.vue_vue_type_script_setup_true_lang-Cw_nDuWj.js";import{d as N,r as _,o as g,a as m,w as n,aW as T,aX as j,b as v,e as a,F as C,a1 as l,f as M,p as w,j as x,h as e,k as R}from"./index-C02-qjtf.js";const i=r=>(w("data-v-6c6db181"),r=r(),x(),r),B={class:"p-15"},F=i(()=>a("pre",null,[e("          "),a("code",null,[e(`
  const `),a("b",null,"reactiveVariableMap"),e(` = {};
          `)]),e(`
        `)],-1)),I=i(()=>a("pre",null,[e("          "),a("code",null,[e(`
  type reactiveVariablesType = typeof reactiveVariableMap & GenericObject < Ref | ComputedRef > ;
  const `),a("b",null,"eventMap:"),e(` EventMap < reactiveVariablesType > = (reactiveVariables: reactiveVariablesType): GenericObject < Function > => ({
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
          `)]),e(`
        `)],-1)),J=i(()=>a("pre",null,[e("          "),a("code",null,[e(`
  const `),a("b",null,"widgetMap"),e(` = {};
          `)]),e(`
        `)],-1)),O=N({__name:"RoutingChild",setup(r){const s=T(),c=j(),u=_(null),h={},b=()=>({routeToPage2:()=>{d("page2")},routeToPage3:()=>{c.push("/routing/page3")},routeBack:()=>{c.back()}}),p=_(null),d=o=>{fetch(`/vue-page-craft/mocks/${o}.json`).then(t=>t.json()).then(t=>{u.value=JSON.parse(JSON.stringify(t)),p.value=t})},f=()=>{let o=s.path.replace("/routing","").replace("/","");o||(o="page1"),d(o)};return(o,t)=>{const V=v("JsonViewer"),k=v("Layout");return g(),m(k,null,{demo:n(()=>[a("div",B,[C(S,{page:p.value,"onUpdate:page":t[0]||(t[0]=y=>p.value=y),eventMap:b,reactiveVariableMap:h,route:l(s),router:l(c),onNoSchema:f},null,8,["page","route","router"])])]),schema:n(()=>[u.value?(g(),m(V,{key:l(s).path,value:u.value,expandDepth:3,theme:"jv-light"},null,8,["value"])):M("",!0)]),state:n(()=>[F]),events:n(()=>[I]),"component-map":n(()=>[J]),_:1})}}}),D=R(O,[["__scopeId","data-v-6c6db181"]]);export{D as default};
