<template>
    <WidgetsRenderer
        v-for="(item, index) in props.loopOn"
        :key="props.id + 'item' + index"
        :widgets="getNewLoopChildren()"
        :widgetMap="props.widgetMap"
        :eventMap="props.eventMap"
        :reactiveVariableMap="{ ...props.reactiveVariableMap, [props.id + 'Item']: item, [props.id + 'Index']: index }"
    />
</template>
<script setup lang="ts">
import { Ref, ComputedRef, defineAsyncComponent } from 'vue';
import { Widgets, GenericObject } from '../shared/interfaces';

const WidgetsRenderer = defineAsyncComponent(() => import(/* webpackChunkName: "WidgetsRenderer" */ '../WidgetsRenderer.vue'));

const props = defineProps({
    id: {
        type: String,
        required: true
    },
    loopOn: {
        type: [String, Number, Boolean, Object, Function],
        required: true
    },
    loopChildren: {
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

const getNewLoopChildren = () => JSON.parse(JSON.stringify(props.loopChildren));
</script>