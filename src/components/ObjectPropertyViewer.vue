<template>
    <div v-if="props.data == null" class="object-property-padding">
        <span v-if="props.keyName">"{{ props.keyName }}":</span> {{ String(props.data) }}{{ isLast ? '' : ',' }}
    </div>
    <div v-else-if="isFunction" class="object-property-padding">
        <span v-if="props.keyName">"{{ props.keyName }}":</span>
        <pre>
            <code>
                {{ String(props.data) }}
            </code>
        </pre>{{ isLast ? '' : ',' }}
    </div>
    <div v-else-if="!isObject" class="object-property-padding">
        <span v-if="props.keyName">"{{ props.keyName }}":</span> {{ isString ? '"' : '' }}<span :class="markClass">{{ props.data }}</span>{{ isString ? '"' : '' }}{{ isLast ? '' : ',' }}
    </div>
    <div v-else>
        <ObjectViewer
            :keyName="props.keyName"
            :object="(props.data as any)"
            :parentKey="props.parentKey + props.keyName"
            :isLast="props.isLast"
            :stateKeys="props.stateKeys"
            :eventKeys="props.eventKeys"
            :componentKeys="props.componentKeys"
        />
    </div>
</template>
<script setup lang="ts">
import { computed, defineAsyncComponent } from 'vue';

const ObjectViewer = defineAsyncComponent(() => import('./ObjectViewer.vue'));
const props = defineProps({
    keyName: {
        type: String,
        required: false,
        default: ''
    },
    data: {
        type: [Number, String, Boolean, Array, Object],
        required: false
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
const isFunction = computed(() => typeof props.data === 'function');
const isObject = computed(() => typeof props.data === 'object');
const isString = computed(() => typeof props.data === 'string');
const markClass = computed(() => {
    if (typeof props.data === 'string') {
        if (props.stateKeys.includes(String(props.data).replace('{{', '').replace('}}', '').trim())) {
            return 'state-txt';
        } else if (props.eventKeys.includes(String(props.data).replace('{{', '').replace('}}', '').trim())) {
            return 'event-txt';
        } else if (props.componentKeys.includes(String(props.data).replace('{{', '').replace('}}', '').trim())) {
            return 'component-map-txt';
        }
    }
    return '';
});
</script>