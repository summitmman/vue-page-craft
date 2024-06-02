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
        expandDepth="3"
        theme="jv-light"
      />
    </template>
  </Layout>
</template>

<script setup lang="ts">
import { ref, Ref, ComputedRef, computed } from 'vue';
import PageCrafter from '../pageCrafter/PageCrafter.vue';
import { IPage, GenericObject, EventMap } from '../pageCrafter/shared/interfaces';
import {
  NButton,
  NCard,
  NCollapse,
  NCollapseItem,
  NAvatar,
  NInput,
  NSelect,
  NRadio,
  NRadioGroup,
  NSpace
} from 'naive-ui';

const jsonData = ref(null);

// Define here or globally
const widgetMap = {
  NButton,
  NCard,
  NCollapse,
  NCollapseItem,
  NAvatar,
  NInput,
  NSelect,
  NRadio,
  NRadioGroup,
  NSpace
};

const eventMap: EventMap = (reactiveVariables: GenericObject<Ref | ComputedRef>): GenericObject<Function> => ({
  sayHi: () => {
    alert(`Hi ${reactiveVariables.name?.value}!!!. This click also adds a dummy benefit "New Benefit"`);
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
  nameHint: computed(() => `You have entered: ${name.value}`)
};
const page: Ref<IPage | null> = ref(null);
fetch(`${import.meta.env.BASE_URL}/mocks/naiveui.json`).then(response => response.json()).then(response => {
  jsonData.value = JSON.parse(JSON.stringify(response));
  page.value = response;
});
</script>

<style scoped>
.main-body {
  padding: 20px;
}
</style>
