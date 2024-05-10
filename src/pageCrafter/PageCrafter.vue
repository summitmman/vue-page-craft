<template>
    <WidgetsRenderer
        :widgets="localPage.children"
        :widgetMap="props.widgetMap"
        :eventMap="newEventMap"
        :reactiveVariableMap="newReactiveVariableMap"
    />
</template>
<script setup lang="ts">
import { ref, Ref, ComputedRef, isRef, computed, unref } from 'vue';
import { IPage, GenericObject, EventMap } from './shared/interfaces';
import WidgetsRenderer from './WidgetsRenderer.vue';

const props = defineProps({
    page: {
        type: Object as () => IPage,
        required: true,
    },
    widgetMap: {
        type: Object as () => GenericObject,
        default: () => {}
    },
    eventMap: {
        type: Function as unknown as () => EventMap,
        default: () => {}
    },
    reactiveVariableMap: {
        type: Object as () => GenericObject<Ref | ComputedRef>,
        default: () => {}
    }
});

// Need to do this if props.page is a ref variable.
// Ref page would cause page to recursively update itself
// possible reason is that props.page.initialData is linked, maybe
const localPage = JSON.parse(JSON.stringify(props.page));

const newReactiveVariableMap = computed(() => {
    if (localPage.initialData) {
        Object.keys(localPage.initialData).forEach((key) => {
            if (!localPage.initialData) {
                return;
            }
            if (!isRef(localPage.initialData[key])) {
                localPage.initialData[key] = ref(localPage.initialData[key]);
            }
        });
        return {
            ...localPage.initialData,
            ...props.reactiveVariableMap
        };
    }
    return props.reactiveVariableMap;
});
const newEventMap = computed(() => {
    return props.eventMap(newReactiveVariableMap.value);
});

</script>