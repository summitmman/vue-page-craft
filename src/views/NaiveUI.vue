<template>
  <Layout>
    <template v-slot:demo>
      <PageCrafter
        v-model:page="page"
        :widgets="widgets"
        :events="events"
        :data="data"
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
const <b>data</b>: IPageData = {
  state: {
    name,
    nameHint: computed(() => `You have entered: ${name.value}`)
  }
};
        </code>
      </pre>
    </template>
    <template v-slot:events>
      <pre>
        <code>
const <b>events:</b> EventMap = (state: GenericObject &lt;Ref | ComputedRef&gt;): GenericObject &lt;Function&gt; => ({
  sayHi: () => {
    alert(`Hi ${state.name?.value}!!!. This click also adds a dummy benefit "New Benefit"`);
    state.benefits?.value.push({
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
const <b>widgets</b> = {
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
        </code>
      </pre>
    </template>
  </Layout>
</template>

<script setup lang="ts">
import { ref, Ref, ComputedRef, computed } from 'vue';
import PageCrafter from '../pageCrafter/PageCrafter.vue';
import { IPage, GenericObject, EventMap, IPageData } from '../pageCrafter/shared/interfaces';
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
const widgets = {
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

const events: EventMap = (state: GenericObject<Ref | ComputedRef>): GenericObject<Function> => ({
  sayHi: () => {
    alert(`Hi ${state.name?.value}!!!. This click also adds a dummy benefit "New Benefit"`);
    state.benefits?.value.push({
      title: 'New Benefit',
      subtitle: 'Get rewards for new benefit',
      icon: `${import.meta.env.BASE_URL}/img/diamond.png`
    });
  }
});

const name = ref('Sumit');
const data: IPageData = {
  state: {
    name,
    nameHint: computed(() => `You have entered: ${name.value}`)
  }
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
