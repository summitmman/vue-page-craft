<template>
    <WidgetsRenderer
        :key="localPage.id"
        :widgets="localPage.children"
        :widgetMap="props.widgetMap"
        :eventMap="newEventMap"
        :reactiveVariableMap="newReactiveVariableMap"
    />
</template>
<script setup lang="ts">
import { ref, Ref, ComputedRef, isRef, computed, watch, ShallowRef, shallowRef } from 'vue';
import { IPage, GenericObject, EventMap } from './shared/interfaces';
import WidgetsRenderer from './WidgetsRenderer.vue';
import { NavigationType } from './shared/enums';

const page = defineModel('page', { type: Object as () => IPage, required: true });
const props = defineProps({
    widgetMap: {
        type: Object as () => GenericObject,
        default: () => {}
    },
    eventMap: {
        type: Function as unknown as () => EventMap<any>,
        default: () => {}
    },
    reactiveVariableMap: {
        type: Object as () => GenericObject<Ref | ComputedRef>,
        default: () => {}
    },
    router: {
        type: Object as () => ({ push: Function; replace: Function; }),
        required: false
    },
    route: {
        type: Object as () => ({ fullPath: string }),
        required: false
    }
});

// Need to do this if props.page is a ref variable.
// Ref page would cause page to recursively update itself
// possible reason is that props.page.initialData is linked, maybe
const localPage: ShallowRef<IPage> = shallowRef(JSON.parse(JSON.stringify(page.value)));
const schemaRouting = (schema: IPage) => {
    // Then check if routing is needed
    // not needed if route and router objects were not passed or if schema does not demand routing
    if (
        !schema.route?.path
        || !props.route
        || !props.router
    ) {
        return;
    }

    try {
        sessionStorage.setItem(schema.route.path, JSON.stringify(schema));
    } catch (err) {
        console.error('Some error in setting item in sessionStorage (probably data is too large or sessionStorage is full)', err);
        sessionStorage.clear();
    }
    // replace or push
    // TODO: handle replaceIfFirst
    if (schema.route.navigationType === NavigationType.Replace) {
        // actual browser replace call
        props.router.replace(schema.route.path);
    } else {
        // actual browser push call, creating browser entry
        props.router.push(schema.route.path);
    }
};
const loadSchema = (schema: IPage) => {
    // First load latest schema in shallowRef to update ui
    localPage.value = JSON.parse(JSON.stringify(schema));
    // route if the schema demands it
    schemaRouting(schema);
};

// loadSchema is initially done to handle first time routing
loadSchema(page.value);
// update schema if it changes from outside
watch(
    page,
    () => {
        loadSchema(page.value);
    }
);
// watch route changes, if schema is cached then load it
watch(
    () => props.route?.fullPath,
    () => {
        const key = props.route?.fullPath ?? '';
        if (!key)
            return;
        const schemaStr = sessionStorage.getItem(key);
        if (!schemaStr)
            return;
        try{
            const schema = JSON.parse(schemaStr);
            page.value = schema;
        } catch(err) {
            console.error('Unable to parse cached schema', err);
            sessionStorage.removeItem(key);
        }
    }
);

const newReactiveVariableMap = computed(() => {
    if (localPage.value.initialData) {
        Object.keys(localPage.value.initialData).forEach((key) => {
            if (!localPage.value.initialData) {
                return;
            }
            if (!isRef(localPage.value.initialData[key])) {
                localPage.value.initialData[key] = ref(localPage.value.initialData[key]);
            }
        });
        return {
            ...localPage.value.initialData,
            ...props.reactiveVariableMap
        };
    }
    return props.reactiveVariableMap;
});
const newEventMap = computed(() => {
    return props.eventMap(newReactiveVariableMap.value);
});
</script>