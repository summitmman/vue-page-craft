<template>
    <template
        v-for="(schemaItem, index) in props.schema"
        :key="(typeof schemaItem === 'string' ? schemaItem : schemaItem.id + schemaItem.type) + index"
    >
        <DynamicString v-if="typeof schemaItem === 'string'" :str="schemaItem" :events="props.events" :state="props.state" :store="props.store" />
        <WidgetRenderer v-else :schema="schemaItem" :widgets="localWidgetMap" :events="props.events" :state="props.state" :store="props.store" />
    </template>
</template>
<script setup lang="ts">
import { ComputedRef, Ref, computed, defineAsyncComponent } from 'vue';
import { Widgets, GenericObject } from './shared/interfaces';

const WidgetRenderer = defineAsyncComponent(() => import(/* webpackChunkName: "VFor" */ './WidgetRenderer.vue'));
const DynamicString = defineAsyncComponent(() => import(/* webpackChunkName: "DynamicString" */ './DynamicString.vue'));
const VIf = defineAsyncComponent(() => import(/* webpackChunkName: "VIf" */ './components/VIf.vue'));
const VFor = defineAsyncComponent(() => import(/* webpackChunkName: "VFor" */ './components/VFor.vue'));

const props = defineProps({
    schema: {
        type: Array as () => Widgets<string | Function>,
        default: () => [],
    },
    widgets: {
        type: Object as () => GenericObject,
        default: () => {}
    },
    events: {
        type: Object as () => GenericObject<Function>,
        default: () => {}
    },
    state: {
        type: Object as () => GenericObject<Ref | ComputedRef>,
        default: () => {}
    },
    store: {
        type: Object as () => GenericObject<Ref | ComputedRef>,
        default: () => {}
    }
});

const localWidgetMap = computed(() => ({
    ...props.widgets,
    'v-if': VIf,
    'v-for': VFor,
}));

</script>