<template>
    <template
        v-for="(widget, index) in props.widgets"
        :key="(typeof widget === 'string' ? widget : widget.id + widget.type) + index"
    >
        <DynamicString v-if="typeof widget === 'string'" :str="widget" :reactiveVariableMap="props.reactiveVariableMap" />
        <WidgetRenderer v-else :widget="widget" :widgetMap="localWidgetMap" :eventMap="props.eventMap" :reactiveVariableMap="props.reactiveVariableMap" />
    </template>
</template>
<script setup lang="ts">
import { ComputedRef, Ref, computed, defineAsyncComponent, isRef } from 'vue';
import { Widgets, GenericObject } from './shared/interfaces';
import WidgetRenderer from './WidgetRenderer.vue';

const DynamicString = defineAsyncComponent(() => import(/* webpackChunkName: "DynamicString" */ './DynamicString.vue'));
const VIf = defineAsyncComponent(() => import(/* webpackChunkName: "VIf" */ './components/VIf.vue'));
const VFor = defineAsyncComponent(() => import(/* webpackChunkName: "VFor" */ './components/VFor.vue'));

const props = defineProps({
    widgets: {
        type: Array as () => Widgets<string | Function>,
        default: () => [],
    },
    widgetMap: {
        type: Object as () => GenericObject,
        default: () => {}
    },
    eventMap: {
        type: Object as () => GenericObject<Function>,
        default: () => {}
    },
    reactiveVariableMap: {
        type: Object as () => GenericObject<Ref | ComputedRef>,
        default: () => {}
    }
});

const localWidgetMap = computed(() => ({
    ...props.widgetMap,
    'v-if': VIf,
    'v-for': VFor,
}));

</script>