<template>
    <WidgetsRenderer
        v-if="localPage"
        :key="localPage.id"
        :schema="localPage.schema"
        :widgets="props.widgets"
        :events="newEventMap"
        :state="newReactiveVariableMap"
        :store="storeReactiveVariableMap"
    />
</template>
<script setup lang="ts">
import { ref, isRef, computed, watch, ShallowRef, shallowRef } from 'vue';
import { IPage, GenericObject, EventMap, IPageData, IPageRouting } from './shared/interfaces';
import WidgetsRenderer from './WidgetsRenderer.vue';
import { NavigationType } from './shared/enums';

const page = defineModel('page', { type: Object as () => IPage, required: false });
const props = defineProps({
    widgets: {
        type: Object as () => GenericObject,
        default: () => {}
    },
    events: {
        type: Function as unknown as () => EventMap<any>,
        default: () => {}
    },
    data: {
        type: Object as () => IPageData,
        default: () => ({ state: {}, store: {}, extra: {} })
    },
    routing: {
        type: Object as () => IPageRouting,
        required: false
    }
});


// Need to do this if props.page is a ref variable.
// Ref page would cause page to recursively update itself
// possible reason is that props.page.initialData is linked, maybe
const localPage: ShallowRef<IPage | null> = shallowRef(JSON.parse(JSON.stringify(null)));

// Prepare state reactive variables
// Convert values to refs and merge props data.state with schema state
// updates when props state or page changes
const newReactiveVariableMap = computed(() => {
    if (localPage.value?.data?.state) {
        Object.keys(localPage.value.data.state).forEach((key) => {
            if (!localPage.value?.data?.state) {
                return;
            }
            if (!isRef(localPage.value.data.state[key])) {
                localPage.value.data.state[key] = ref(localPage.value.data.state[key]);
            }
        });
        return {
            ...localPage.value.data.state,
            ...(props.data.state ?? {})
        };
    }
    return (props.data.state ?? {});
});

// Prepare store reactive variables and persist them
// Convert values to refs and merge props data.store with schema store
// updates when props store and page changes and persist in the object storeVariableMap
const storeReactiveVariableMap: GenericObject = {};
watch(
    () => [localPage.value, props.data.store],
    () => {
        // Add props.data.store to the persistent object
        if (props.data.store) {
            Object.keys(props.data.store).forEach((key) => {
                if (!props.data.store) {
                    return;
                }
                storeReactiveVariableMap[key] = props.data.store[key];
            });
        }
        // Convert schema store values to ref
        if (localPage.value?.data?.store) {
            Object.keys(localPage.value.data.store).forEach((key) => {
                if (!localPage.value?.data?.store) {
                    return;
                }
                if (!isRef(localPage.value.data.store[key])) {
                    localPage.value.data.store[key] = ref(localPage.value.data.store[key]);
                }
                storeReactiveVariableMap[key] = localPage.value.data.store[key];
            });
        }
    }
);

// Initialize events with data
const newEventMap = computed(() => {
    return props.events(newReactiveVariableMap.value, storeReactiveVariableMap, page.value?.data?.extra ?? {});
});

// ROUTING
const fallbackCache: GenericObject<IPage> = {};
// flag which tells that route was changed cause schema triggered it
// so do not handle route but only reset flag
let isRouteChangeFromSchema = false;
// flag which tells that schema was changed cause route changed and triggered it
// so do not handle schema new schema which was set in v-model but only reset flag
let isSchemaChangeFromRoute = false;

const schemaRouting = (schema: IPage) => {
    if (isSchemaChangeFromRoute) {
        isSchemaChangeFromRoute = false;
        return;
    }
    // Then check if routing is needed
    // not needed if route and router objects were not passed or if schema does not demand routing
    if (
        !schema.route?.path
        || !props.routing
    ) {
        return;
    }

    try {
        sessionStorage.setItem(schema.route.path, JSON.stringify(schema));
    } catch (err) {
        console.error('Some error in setting item in sessionStorage (probably data is too large or sessionStorage is full)', err);
        console.log('Using fallback cache');
        fallbackCache[schema.route.path] = schema;
    }

    // do not do anything if you are already on the required path
    if (props.routing.route.fullPath === schema.route.path) {
        return;
    }
    
    isRouteChangeFromSchema = true;
    // replace or push
    // TODO: handle replaceIfFirst
    if (schema.route.navigationType === NavigationType.Replace) {
        // actual browser replace call
        props.routing.router.replace(schema.route.path);
    } else {
        // actual browser push call, creating browser entry
        props.routing.router.push(schema.route.path);
    }
};
const loadSchema = (schema: IPage) => {
    // First load latest schema in shallowRef to update ui
    localPage.value = JSON.parse(JSON.stringify(schema));
    // route if the schema demands it
    schemaRouting(schema);
};
// if no-schema event was emitted and we are expecting parent to set a new page schema
// no-schema is emitted when route changes and a schema does not exist
const onNoSchemaFound = async () => {
    if (props.routing?.routes?.length && props.routing?.route?.fullPath) {
        // find route config which matches path
        const targetRoute = props.routing.routes.find(item => {
            if (typeof item.path === 'string') {
                return props.routing?.route?.fullPath === item.path;
            }
            return (props.routing?.route?.fullPath ?? '').match(item.path)?.length;
        });
        if (targetRoute) {
            targetRoute.beforeNavigate && targetRoute.beforeNavigate();
            try {
                // call function to fetch required schema
                const schema = await targetRoute.schemaFetch();
                if (schema) {
                    page.value = schema;
                    targetRoute.afterNavigate && targetRoute.afterNavigate(schema);
                }
            } catch(error) {
                // if there is any issue with fetching schema, find the error route config and run it
                const errorRoute = props.routing.routes.find(item => item.path === 'error');
                if (errorRoute) {
                    const errorSchema = await errorRoute.schemaFetch({ code: 'ERROR_IN_FETCH', message: 'There was an issue fetching the required route', error });
                    if (errorSchema) {
                        page.value = errorSchema;
                        errorRoute.afterNavigate && errorRoute.afterNavigate(errorSchema);
                    }
                }
            }
        } else {
            // if no routes match, find the error route config and run it
            const errorRoute = props.routing.routes.find(item => item.path === 'error');
            if (errorRoute) {
                const errorSchema = await errorRoute.schemaFetch({ code: 'ROUTE_NOT_FOUND', message: 'Route not found' });
                if (errorSchema) {
                    page.value = errorSchema;
                    errorRoute.afterNavigate && errorRoute.afterNavigate(errorSchema);
                }
            }
        }
    }
    // reset flags
    isRouteChangeFromSchema = false;
    isSchemaChangeFromRoute = false;
};

// update schema if it changes from outside
watch(
    page,
    () => {
        if (page.value)
            loadSchema(page.value);
    }
);
// watch route changes, if schema is cached then load it
watch(
    () => props.routing?.route?.fullPath,
    () => {
        if (isRouteChangeFromSchema) {
            isRouteChangeFromSchema = false;
            return;
        }

        if (
            !props.routing?.route
            || !props.routing?.router
        ) {
            return;
        };

        const key = props.routing?.route?.fullPath ?? '';
        if (!key)
            return;
        const schemaStr = sessionStorage.getItem(key);
        if (schemaStr) {
            try{
                const schema = JSON.parse(schemaStr);
                page.value = schema;
                isSchemaChangeFromRoute = true;
            } catch(err) {
                console.error('Unable to parse cached schema', err);
                sessionStorage.removeItem(key);
            }
            return;
        }
        const fallbackSchema = fallbackCache[key];
        if (fallbackSchema) {
            page.value = fallbackSchema;
            isSchemaChangeFromRoute = true;
            return;
        }
        onNoSchemaFound();
    }
);

// init code
// loadSchema is initially done to handle first time routing
if (page.value) {
    loadSchema(page.value);
} else {
    onNoSchemaFound();
}

// expose clearing temp cache and sessionstorage
const clearRoutingCache = () => {
    Object.keys(fallbackCache).forEach((key: string) => {
        delete fallbackCache[key];
    });
    sessionStorage.clear();
};
defineExpose({
    clearRoutingCache
})
</script>