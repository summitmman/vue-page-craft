const s=({getSchemaFor:o,jsonData:t,page:r,store:e,state:a})=>({routeToPage2:async()=>{const n=await o("page2");t.value=JSON.parse(JSON.stringify(n)),r.value=n},changeStateStore:()=>{e.userId&&(e.userId.value=9898989898),a.name&&(a.name.value="Vinita Koyilot"),console.log("store",e)}});export{s as events};
