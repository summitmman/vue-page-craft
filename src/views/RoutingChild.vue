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
            @no-schema="requestSchema"
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
    import { IPage, GenericObject, EventMap } from '../pageCrafter/shared/interfaces';
    import { useRouter, useRoute } from 'vue-router';
    
    const route = useRoute();
    const router = useRouter();

    const jsonData = ref(null);
    const reactiveVariableMap = {};
    type reactiveVariablesType = typeof reactiveVariableMap & GenericObject<Ref | ComputedRef>;
    const eventMap: EventMap<reactiveVariablesType> = (): GenericObject<Function> => ({
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
    
    const page: Ref<IPage | null> = ref(null);
    const getSchemaFor = (pageName: string) => {
        fetch(`${import.meta.env.BASE_URL}/mocks/${pageName}.json`).then(response => response.json()).then(response => {
            jsonData.value = JSON.parse(JSON.stringify(response));
            page.value = response;
        });
    };
    const requestSchema = () => {
        let pageName = route.path.replace('/routing', '').replace('/', '');
        if (!pageName) {
            pageName = 'page1';
        }
        getSchemaFor(pageName);
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
    