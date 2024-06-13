<template>
  <Layout>
    <template v-slot:demo>
      <div class="p-15">
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
      </div>
    </template>
    <template v-slot:schema>
      <!-- <ObjectViewer
        v-if="jsonData"
        :object="jsonData"
        :stateKeys="Object.keys(reactiveVariableMap)"
        :eventKeys="Object.keys(eventMap)"
        :componentKeys="Object.keys(widgetMap)"
      /> -->
      <JsonViewer
        v-if="jsonData"
        :value="jsonData"
        expandDepth="3"
        theme="jv-light"
      />
    </template>
    <template v-slot:state>
      <pre>
        <code>
const singleName = ref('Beta');
const <b>reactiveVariableMap</b> = {
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
        </code>
      </pre>
    </template>
    <template v-slot:events>
      <pre>
        <code>
type reactiveVariablesType = typeof reactiveVariableMap & GenericObject &lt; Ref | ComputedRef &gt; ;
const <b>eventMap:</b> EventMap &lt; reactiveVariablesType &gt; = (reactiveVariables: GenericObject &lt; Ref | ComputedRef &gt; ): GenericObject &lt; Function &gt; => ({
  handleAppCustomClick: () => {
    alert(`Hello ${ reactiveVariables.name?.value }`);
  },
  handleChange: (val: any) => {
    console.log('SUMIT LOG', val, reactiveVariables.surname?.value);
  },
  singleNameLengthFn: () => {
    return reactiveVariables.singleNameLength.value;
  }
});
        </code>
      </pre>
    </template>
    <template v-slot:component-map>
      <pre>
        <code>
const <b>widgetMap</b> = {
  Button: defineAsyncComponent(() => import(/* webpackChunkName: "Button" */ '../components/Button.vue')),
  Name: defineAsyncComponent(() => import(/* webpackChunkName: "Name" */ '../components/Name.vue'))
};
        </code>
      </pre>
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
  type reactiveVariablesType = typeof reactiveVariableMap & GenericObject<Ref | ComputedRef>;
  const eventMap: EventMap<reactiveVariablesType> = (reactiveVariables: reactiveVariablesType): GenericObject<Function> => ({
    handleAppCustomClick: () => {
      alert(`Hello ${ reactiveVariables.name?.value }`);
    },
    handleChange: (val: any) => {
      console.log('SUMIT LOG', val, reactiveVariables.surname?.value);
    },
    singleNameLengthFn: () => {
      return reactiveVariables.singleNameLength.value;
    }
  });
  
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
  