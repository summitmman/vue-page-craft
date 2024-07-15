<template>
    <template v-if="typeof props.condition === 'function' ? props.condition() : props.condition">
        <slot></slot>
    </template>
    <WidgetsRenderer
        v-else-if="props.vElseChildren.length"
        :schema="props.vElseChildren"
        :widgets="props.widgets"
        :events="props.events"
        :state="props.state"
        :store="props.store"
    />
</template>
<script setup lang="ts">
import { Ref, ComputedRef, defineAsyncComponent } from 'vue';
import { Widgets, GenericObject } from '../shared/interfaces';

const WidgetsRenderer = defineAsyncComponent(() => import(/* webpackChunkName: "WidgetsRenderer" */ '../WidgetsRenderer.vue'));

const props = defineProps({
    condition: {
        type: [String, Number, Boolean, Object, Function],
        required: false
    },
    vElseChildren: {
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
</script>