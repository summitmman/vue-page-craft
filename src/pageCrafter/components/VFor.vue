<template>
    <WidgetsRenderer
        v-for="(item, index) in props.loopOn"
        :key="props.id + 'item' + index"
        :schema="getNewLoopChildren()"
        :widgets="props.widgets"
        :events="props.events"
        :state="{ ...props.state, [props.id + 'Item']: item, [props.id + 'Index']: index }"
        :store="props.store"
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

const getNewLoopChildren = () => JSON.parse(JSON.stringify(props.loopChildren));
</script>