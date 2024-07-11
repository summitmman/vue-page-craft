<template>
  <Layout>
    <template v-slot:demo>
      <PageCrafter
        v-if="page"
        :page="page"
        :widgetMap="widgetMap"
        :eventMap="eventMap"
        :reactiveVariableMap="reactiveVariableMap"
      />
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
const name = ref('Sumit');
const <b>reactiveVariableMap</b> = {
  name,
  nameHint: computed(() => `You have entered: ${name.value}`),
};
        </code>
      </pre>
    </template>
    <template v-slot:events>
      <pre>
        <code>
const <b>eventMap:</b> EventMap = (reactiveVariables: GenericObject &lt; Ref | ComputedRef &gt; ): GenericObject &lt; Function &gt; => ({
  sayHi: () => {
    alert(`Hi ${reactiveVariables.name?.value}!!!. This click also adds a dummy benefit "New Benefit"`);
    reactiveVariables.benefits?.value.push({
      title: 'New Benefit',
      subtitle: 'Get rewards for new benefit',
      icon: `${import.meta.env.BASE_URL}/img/diamond.png`
    });
  }
});
        </code>
      </pre>
    </template>
    <template v-slot:component-map>
      <pre>
        <code>
const <b>widgetMap</b> = {
  'v-container': components.VContainer,
  'v-row': components.VRow,
  'v-col': components.VCol,
  'v-card': components.VCard,
  'v-card-item': components.VCardItem,
  'v-card-title': components.VCardTitle,
  'v-card-subtitle': components.VCardSubtitle,
  'v-card-text': components.VCardText,
  'v-text-field': components.VTextField,
  'v-select': components.VSelect,
  'v-radio-group': components.VRadioGroup,
  'v-radio': components.VRadio,
  'v-btn': components.VBtn,
  'v-card-actions': components.VCardActions,
  'v-list': components.VList,
  'v-list-item': components.VListItem
};
        </code>
      </pre>
    </template>
  </Layout>
</template>

<script setup lang="ts">
import { ref, Ref, ComputedRef, computed } from 'vue';
import PageCrafter from '../pageCrafter/PageCrafter.vue';
import { IPage, GenericObject, EventMap } from '../pageCrafter/shared/interfaces';

import * as components from 'vuetify/components';

const jsonData = ref(null);

// Define here or globally
const widgetMap = {
  'v-container': components.VContainer,
  'v-row': components.VRow,
  'v-col': components.VCol,
  'v-card': components.VCard,
  'v-card-item': components.VCardItem,
  'v-card-title': components.VCardTitle,
  'v-card-subtitle': components.VCardSubtitle,
  'v-card-text': components.VCardText,
  'v-text-field': components.VTextField,
  'v-select': components.VSelect,
  'v-radio-group': components.VRadioGroup,
  'v-radio': components.VRadio,
  'v-btn': components.VBtn,
  'v-card-actions': components.VCardActions,
  'v-list': components.VList,
  'v-list-item': components.VListItem
};

const eventMap: EventMap = (reactiveVariables: GenericObject<Ref | ComputedRef>, store: GenericObject<Ref>): GenericObject<Function> => ({
  sayHi: () => {
    alert(`Hi ${reactiveVariables.name?.value}!!!. This click also adds a dummy benefit "New Benefit"`);
    console.log('Value of store is', store.userId?.value);
    reactiveVariables.benefits?.value.push({
      title: 'New Benefit',
      subtitle: 'Get rewards for new benefit',
      icon: `${import.meta.env.BASE_URL}/img/diamond.png`
    });
  }
});

const name = ref('Sumit');
const reactiveVariableMap = {
  name,
  nameHint: computed(() => `You have entered: ${name.value}`),
};

const page: Ref<IPage | null> = ref(null);
fetch(`${import.meta.env.BASE_URL}/mocks/vuetify.json`).then(response => response.json()).then(response => {
  jsonData.value = JSON.parse(JSON.stringify(response));
  page.value = response;
});
</script>

<style scoped>
.main-body {
  padding: 20px;
}
</style>
