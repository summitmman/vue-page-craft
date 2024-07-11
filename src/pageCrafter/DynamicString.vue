<template>
    <template v-for="(item, index) in splitStrArr" :key="(item.value ?? item) + index">
        <DynamicStringRenderer :str="item" />
    </template>
</template>
<script setup lang="ts">
import { ComputedRef, Ref, computed, isRef } from 'vue';
import _get from 'lodash.get';
import { GenericObject } from './shared/interfaces';
import DynamicStringRenderer from './DynamicStringRenderer.vue';
import { splitDynamicStr } from './shared/utils';

const props = defineProps({
    str: {
        type: String,
        default: ''
    },
    reactiveVariableMap: {
        type: Object as () => GenericObject<Ref | ComputedRef>,
        default: () => {}
    },
    storeReactiveVariableMap: {
        type: Object as () => GenericObject<Ref | ComputedRef>,
        default: () => {}
    }
});

const splitStrArr: ComputedRef<Array<string | Ref | ComputedRef>> = computed(() => {
    const splitStrArrLocal = splitDynamicStr(props.str, props.reactiveVariableMap, props.storeReactiveVariableMap);
    return splitStrArrLocal.map(item => {
        if (typeof item === 'string') {
            return item;
        }

        if (typeof item === 'function') {
            return '';
        }

        const { rVar, theRest } = item;
        if (theRest) {
            if (isRef(rVar)) {
                return computed(() => _get(rVar.value, theRest));
            }
            return computed(() => _get(rVar, theRest));
        }
        else
            return rVar;
    });
});
</script>