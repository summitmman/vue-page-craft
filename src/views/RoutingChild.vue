<template>
    <Layout>
      <template v-slot:demo>
        <div class="p-15">
          <PageCrafter
            v-model:page="page"
            :events="events"
            :data="data"
            :routing="routing"
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
const <b>data</b> = {};
          </code>
        </pre>
      </template>
      <template v-slot:events>
        <pre>
          <code>
type reactiveVariablesType = typeof data & GenericObject&lt;Ref&gt;;
const <b>events</b>: EventMap&lt;reactiveVariablesType&gt; = (state: reactiveVariablesType, store: GenericObject&lt;Ref&gt;): GenericObject&lt;Function&gt; => ({
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
          </code>
        </pre>
      </template>
      <template v-slot:component-map>
        <pre>
          <code>
  const <b>widgets</b> = {};
          </code>
        </pre>
      </template>
    </Layout>
  </template>
    
  <script setup lang="ts">
    import { ref, Ref, computed, ComputedRef } from 'vue';
    import PageCrafter from '../pageCrafter/PageCrafter.vue';
    import { IPage, GenericObject, EventMap, IRouteConfig } from '../pageCrafter/shared/interfaces';
    import { useRouter, useRoute } from 'vue-router';
    
    // props, which will receive business logic events through the router where it is imported
    const props = defineProps({
      eventsByRoute: {
        type: Function,
        required: false,
        default: () => ({})
      },
    });
    
    // utils
    const route = useRoute();
    const router = useRouter();
    // api to fetch schema
    const getSchemaFor = (pageName: string) => {
      return fetch(`${import.meta.env.BASE_URL}/mocks/${pageName}.json`).then(response => response.json());
    };

    // schema and data
    const jsonData = ref(null);
    const page: Ref<IPage | undefined> = ref();
    const data = {};

    // events
    type reactiveVariablesType = typeof data & GenericObject<Ref>;
    // events is computed because we need to recalculate the function to add page level functions
    const events: ComputedRef<EventMap<reactiveVariablesType>> = computed(() => {
      // console.log('SUMIT LOG', 'events calculated', Object.keys(props.eventsByRoute ?? {}));
      return (state: reactiveVariablesType, store: GenericObject<Ref>): GenericObject<Function> => ({
      
        // business logic page functions
        ...((props.eventsByRoute && props.eventsByRoute({getSchemaFor, jsonData, page, store, state, router})) ?? {}),
        
        // routeToPage2: async () => {
        //     const response = await getSchemaFor('page2');
        //     jsonData.value = JSON.parse(JSON.stringify(response));
        //     page.value = response;
        // },
        // changeStateStore: () => {
        //     if (store.userId) {
        //         store.userId.value = 9898989898;
        //     }
        //     if (state.name) {
        //         state.name.value = 'Vinita Koyilot';
        //     }
        //     console.log('store', store);
        // },
        // routeToPage3: () => {
        //     router.push('/routing/page3');
        // },
      
        // default functions
        routeBack: () => {
          router.back();
        },
      })
    });
    
    // routes which will be handled by page builder
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
          console.log(err);
          return Promise.resolve({
            id: 'error-page',
            schema: [
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

    const routing = {
      route,
      router,
      routes
    };
    
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
    