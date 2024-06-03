<template>
    <div>
        <img src="/vue-page-craft/img/arrow-head.svg" class="expand-arrow" :class="{'is-expanded': isExpanded}" @click="isExpanded = !isExpanded" />
        <span>{{ props.keyName ? `"${props.keyName}": ` : ' '}}{{ isObjectArray ? '[' : '{' }}</span>
        <div v-show="isExpanded" class="object-content">
            <div v-for="(item, index) in keyItems" :key="props.parentKey + (isObjectArray ? index : item)">
                <ObjectPropertyViewer
                    :keyName="isObjectArray ? '' : String(item)"
                    :data="isObjectArray ? item : (props.object as any)[String(item)]"
                    :isLast="index >= keyItemsLastIndex"
                />
            </div>
        </div>
        <span v-show="!isExpanded" class="collapsed-dots" @click="isExpanded = true">...</span>
        <span :class="{ 'object-close-padding': isExpanded }">{{ isObjectArray ? ']' : '}' }}{{ isLast ? '' : ',' }}</span>
    </div>
</template>
<script setup lang="ts">
import { ComputedRef, computed, defineAsyncComponent, ref } from 'vue';

const ObjectPropertyViewer = defineAsyncComponent(() => import('./ObjectPropertyViewer.vue'));
const props = defineProps({
    keyName: {
        type: String,
        required: false,
        default: ''
    },
    object: {
        type: [Object, Array],
        required: true
    },
    parentKey: {
        type: String,
        required: false,
        default: ''
    },
    isLast: {
        type: Boolean,
        default: true
    },
    stateKeys: {
        type: Array<String>,
        default: () => []
    },
    eventKeys: {
        type: Array<String>,
        default: () => []
    },
    componentKeys: {
        type: Array<String>,
        default: () => []
    }
});
const isObjectArray = computed(() => Array.isArray(props.object));
const keyItems: ComputedRef<Array<any>> = computed(() => {
    return (isObjectArray.value ? props.object : Object.keys(props.object)) as any;
});
const keyItemsLastIndex: ComputedRef<number> = computed(() => {
    const length = keyItems.value.length;
    return length ? length - 1 : length;
});
const isExpanded = ref(true);
</script>
<style scoped>
.expand-arrow {
    width: 14px;
    cursor: pointer;
    transition: transform 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
}
.collapsed-dots {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 3px;
    margin-left: 2px;
    margin-right: 2px;
    padding-left: 2px;
    padding-right: 2px;
}
.is-expanded {
    transform: rotate(90deg);
}
</style>