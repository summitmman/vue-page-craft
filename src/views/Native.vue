<template>
  <Layout>
    <template v-slot:demo>
      <div class="p-15">
        <PageCrafter
          v-model:page="page"
          :widgets="widgets"
          :events="events"
          :data="data"
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
      <JsonViewer
        v-if="jsonData"
        :value="jsonData"
        :expandDepth="3"
        theme="jv-light"
      />
    </template>
    <template v-slot:state>
      <pre>
        <code>
const singleName = ref('Beta');
const <b>data</b>: IPageData = {
  state: {
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
  }
};
        </code>
      </pre>
    </template>
    <template v-slot:events>
      <pre>
        <code>
type reactiveVariablesType = typeof data & GenericObject&lt;Ref | ComputedRef&gt;;
const <b>events</b>: EventMap&lt;reactiveVariablesType&gt; = (state: reactiveVariablesType, store: GenericObject&lt;Ref&gt;, extra: GenericObject): GenericObject&lt;Function&gt; => ({
  handleAppCustomClick: () => {
    alert(`Hello ${ state.name?.value }`);
  },
  handleChange: (val: string) => {
    console.log('SUMIT LOG', val, state.surname?.value, store, extra);
    if (store.userId)
      store.userId.value = 98989898;
  },
  singleNameLengthFn: () => {
    return state.singleNameLength.value;
  }
});
        </code>
      </pre>
    </template>
    <template v-slot:component-map>
      <pre>
        <code>
const <b>widgets</b> = {
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
  import { IPage, GenericObject, EventMap, IPageData } from '../pageCrafter/shared/interfaces';
  
  const widgets = {
    Button: defineAsyncComponent(() => import(/* webpackChunkName: "Button" */ '../components/Button.vue')),
    Name: defineAsyncComponent(() => import(/* webpackChunkName: "Name" */ '../components/Name.vue'))
  };
  
  const singleName = ref('Beta');
  const data: IPageData = {
    state: {
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
    }
  };
  type reactiveVariablesType = typeof data & GenericObject<Ref | ComputedRef>;
  const events: EventMap<reactiveVariablesType> = (state: reactiveVariablesType, store: GenericObject<Ref>, extra: GenericObject): GenericObject<Function> => ({
    handleAppCustomClick: () => {
      alert(`Hello ${ state.name?.value }`);
    },
    handleChange: (val: string) => {
      console.log('SUMIT LOG', val, state.surname?.value, store, extra);
      if (store.userId)
        store.userId.value = 98989898;
    },
    singleNameLengthFn: () => {
      return state.singleNameLength.value;
    }
  });
  
  const page: Ref<IPage | null> = ref(null);
  const jsonData = ref(null);
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
  