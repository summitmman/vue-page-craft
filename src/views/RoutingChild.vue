<template>
    <Layout>
      <template v-slot:demo>
        <div class="p-15">
          <PageCrafter
            v-model:page="page"
            :eventMap="eventMap"
            :reactiveVariableMap="reactiveVariableMap"
            :route="route"
            :router="router"
            :routes="routes"
          />
        </div>
      </template>
      <template v-slot:schema>
        <JsonViewer
          v-if="jsonData"
          :key="route.path"
          :value="jsonData"
          :expandDepth="3"
          theme="jv-light"
        />
      </template>
      <template v-slot:state>
        <pre>
          <code>
  const <b>reactiveVariableMap</b> = {};
          </code>
        </pre>
      </template>
      <template v-slot:events>
        <pre>
          <code>
  type reactiveVariablesType = typeof reactiveVariableMap & GenericObject &lt; Ref | ComputedRef &gt; ;
  const <b>eventMap:</b> EventMap &lt; reactiveVariablesType &gt; = (reactiveVariables: reactiveVariablesType): GenericObject &lt; Function &gt; => ({
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
          </code>
        </pre>
      </template>
      <template v-slot:component-map>
        <pre>
          <code>
  const <b>widgetMap</b> = {};
          </code>
        </pre>
      </template>
    </Layout>
  </template>
    
  <script setup lang="ts">
    import { ref, Ref, ComputedRef } from 'vue';
    import PageCrafter from '../pageCrafter/PageCrafter.vue';
    import { IPage, GenericObject, EventMap, IRouteConfig } from '../pageCrafter/shared/interfaces';
    import { useRouter, useRoute } from 'vue-router';
    
    const route = useRoute();
    const router = useRouter();

    const jsonData = ref(null);
    const page: Ref<IPage | null> = ref(null);
    
    // api to fetch schema
    const getSchemaFor = (pageName: string) => {
      return fetch(`${import.meta.env.BASE_URL}/mocks/${pageName}.json`).then(response => response.json());
    };

    const reactiveVariableMap = {};
    type reactiveVariablesType = typeof reactiveVariableMap & GenericObject<Ref | ComputedRef>;
    
    const eventMap: EventMap<reactiveVariablesType> = (): GenericObject<Function> => ({
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
      }
    });
    
    const routes: Array<IRouteConfig> = [
      {
        path: new RegExp(/\/routing\/*.*/gm),
        schemaFetch: () => {
          let pageName = route.path.replace('/routing', '').replace('/', '');
          if (!pageName) {
            pageName = 'page1';
          }
          return getSchemaFor(pageName);
        },
        afterNavigate: (response: any) => {
          jsonData.value = JSON.parse(JSON.stringify(response));
        }
      },
      {
        path: 'error',
        schemaFetch: (err: any) => {
          return Promise.resolve({
            id: 'error-page',
            children: [
              {
                type: 'h1',
                children: [
                  'Page not found'
                ]
              }
            ]
          } as IPage);
        }
      }
    ];
    
  </script>
    
  <style scoped>
    .my-div {
      border: 1px solid #aaa;
      padding: 10px;
    }
    .random-native-input {
      border-style: solid;
    }
  </style>
    