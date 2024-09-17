<template>
    <span class="dynamic-str" ref="dynamicStrRef"></span>
</template>
<script setup lang="ts">
import { ref, watch, Ref, ComputedRef, createApp, compile, onMounted } from 'vue';
import { GenericObject } from './shared/interfaces';

const props = defineProps({
    str: {
        type: String,
        default: ''
    },
    state: {
        type: Object as () => GenericObject<Ref | ComputedRef>,
        default: () => {}
    },
    store: {
        type: Object as () => GenericObject<Ref | ComputedRef>,
        default: () => {}
    },
    events: {
        type: Object as () => GenericObject<Function>,
        default: () => {}
    },
});

const dynamicStrRef = ref<any>(null);
let dynamicStrVueInstance: any = null;
const renderStr = () => {
    if (dynamicStrVueInstance && dynamicStrVueInstance.unmount) {
        dynamicStrVueInstance.unmount();
    }

    dynamicStrVueInstance = createApp({
        render: compile(props.str),
        setup() {
            return {
                ...props.state,
                ...props.store,
                ...props.events
            };
        }
    });
    dynamicStrVueInstance.mount(dynamicStrRef.value);
};
watch(
    () => ([props.str, props.state, props.store]),
    renderStr,
);
onMounted(renderStr);

</script>