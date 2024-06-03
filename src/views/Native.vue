<template>
  <Layout>
    <template v-slot:demo>
      <PageCrafter
        v-if="page"
        :page="page ?? {id: '', children: []}"
        :widgetMap="widgetMap"
        :eventMap="eventMap"
        :reactiveVariableMap="reactiveVariableMap"
      />
      <div class="boundary">
        <h2>This section is outside page crafter</h2>
        <p>We will try to enter/change the Single Name/Pet Name</p>
        <input type="text" class="native-input block" v-model="singleName" />
        Your Single Name/Pet Name is "{{ singleName }}"
      </div>
    </template>
    <template v-slot:schema>
      <ObjectViewer
        v-if="jsonData"
        :object="jsonData"
        :stateKeys="Object.keys(reactiveVariableMap)"
        :eventKeys="Object.keys(eventMap)"
        :componentKeys="Object.keys(widgetMap)"
      />
      <!-- <JsonViewer
        v-if="jsonData"
        :value="jsonData"
        expandDepth="10"
        theme="jv-light"
      /> -->
    </template>
    <template v-slot:state>
        const singleName = ref('{{ singleName }}');<br />
        const <b>reactiveVariableMap</b> = {<br />
          &emsp;singleName,<br />
          &emsp;singleNameLength: computed(() => singleName.value.length),<br />
          &emsp;cities: ref([<br />
            &emsp;&emsp;{<br />
              &emsp;&emsp;&emsp;name: 'Mumbai',<br />
            &emsp;&emsp;},<br />
            &emsp;&emsp;{<br />
              &emsp;&emsp;&emsp;name: 'Bengaluru'<br />
            &emsp;&emsp;}<br />
          &emsp;])<br />
        };
    </template>
    <template v-slot:events>
      <p>
        const <b>eventMap</b>: EventMap = (reactiveVariables: GenericObject): GenericObject => ({<br />
          &emsp;handleAppCustomClick: () => {<br />
            &emsp;&emsp;alert(`Hello ${ reactiveVariables.name?.value }`);<br />
          &emsp;},<br />
          &emsp;handleChange: (val: any) => {<br />
            &emsp;&emsp;console.log('SUMIT LOG', val, reactiveVariables.surname?.value);<br />
          &emsp;},<br />
          &emsp;singleNameLengthFn: () => {<br />
            &emsp;&emsp;return reactiveVariables.singleNameLength?.value;<br />
          &emsp;}<br />
        });
      </p>
    </template>
    <template v-slot:component-map>
      const <b>widgetMap</b> = {<br />
        &emsp;Button: defineAsyncComponent(() => import(/* webpackChunkName: "Button" */ '../components/Button.vue')),<br />
        &emsp;Name: defineAsyncComponent(() => import(/* webpackChunkName: "Name" */ '../components/Name.vue'))<br />
      };
    </template>
  </Layout>
</template>
  
<script setup lang="ts">
  import { defineAsyncComponent, ref, Ref, ComputedRef, computed } from 'vue';
  import PageCrafter from '../pageCrafter/PageCrafter.vue';
  import ObjectViewer from '../components/ObjectViewer.vue';
  import { IPage, GenericObject, EventMap } from '../pageCrafter/shared/interfaces';
  
  const jsonData = ref(null);
  const singleName = ref('Beta');
  const widgetMap = {
    Button: defineAsyncComponent(() => import(/* webpackChunkName: "Button" */ '../components/Button.vue')),
    Name: defineAsyncComponent(() => import(/* webpackChunkName: "Name" */ '../components/Name.vue'))
  };
  const eventMap: EventMap = (reactiveVariables: GenericObject<Ref | ComputedRef>): GenericObject<Function> => ({
    handleAppCustomClick: () => {
      alert(`Hello ${ reactiveVariables.name?.value }`);
    },
    handleChange: (val: any) => {
      console.log('SUMIT LOG', val, reactiveVariables.surname?.value);
    },
    singleNameLengthFn: () => {
      return reactiveVariables.singleNameLength?.value;
    }
  });
  const reactiveVariableMap = {
    singleName,
    singleNameLength: computed(() => singleName.value.length),
    cities: ref([
      {
        name: 'Mumbai',
      },
      {
        name: 'Bengaluru'
      }
    ])
  };
  
  const page: Ref<IPage | null> = ref(null);
  fetch(`${import.meta.env.BASE_URL}/mocks/native.json`).then(response => response.json()).then(response => {
    jsonData.value = JSON.parse(JSON.stringify(response));
    page.value = response;
  });
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
  