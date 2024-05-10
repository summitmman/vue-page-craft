<template>
    <template v-if="typeof props.condition === 'function' ? props.condition() : props.condition">
        <slot></slot>
    </template>
    <WidgetsRenderer
        v-else-if="props.vElseChildren.length"
        :widgets="props.vElseChildren"
        :widgetMap="props.widgetMap"
        :eventMap="props.eventMap"
        :reactiveVariableMap="props.reactiveVariableMap"
    />
</template>
<script setup lang="ts">
import { Ref, ComputedRef, defineAsyncComponent } from 'vue';
import { Widgets, GenericObject } from '../shared/interfaces';

const WidgetsRenderer = defineAsyncComponent(() => import(/* webpackChunkName: "WidgetsRenderer" */ '../WidgetsRenderer.vue'));

const props = defineProps({
    condition: {
        type: [String, Number, Boolean, Object, Function],
        required: true
    },
    vElseChildren: {
        type: Array as () => Widgets<string | Function>,
        default: () => []
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
</script>