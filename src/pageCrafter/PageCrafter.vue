<template>
    <WidgetsRenderer
        v-if="localPage"
        :key="localPage.id"
        :widgets="localPage.children"
        :widgetMap="props.widgetMap"
        :eventMap="newEventMap"
        :reactiveVariableMap="newReactiveVariableMap"
    />
</template>
<script setup lang="ts">
import { ref, Ref, ComputedRef, isRef, computed, watch, ShallowRef, shallowRef } from 'vue';
import { IPage, GenericObject, EventMap, IRouteConfig } from './shared/interfaces';
import WidgetsRenderer from './WidgetsRenderer.vue';
import { NavigationType } from './shared/enums';

const page = defineModel('page', { type: Object as () => IPage, required: false });
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
    },
    routes: {
        type: Array as () => Array<IRouteConfig>,
        required: false
    }
});

const fallbackCache: GenericObject<IPage> = {};
// flag which tells that route was changed cause schema triggered it
// so do not handle route but only reset flag
let isRouteChangeFromSchema = false;
// flag which tells that schema was changed cause route changed and triggered it
// so do not handle schema new schema which was set in v-model but only reset flag
let isSchemaChangeFromRoute = false;

// Need to do this if props.page is a ref variable.
// Ref page would cause page to recursively update itself
// possible reason is that props.page.initialData is linked, maybe
const localPage: ShallowRef<IPage | null> = shallowRef(JSON.parse(JSON.stringify(null)));
const schemaRouting = (schema: IPage) => {
    if (isSchemaChangeFromRoute) {
        isSchemaChangeFromRoute = false;
        return;
    }
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
        console.log('Using fallback cache');
        fallbackCache[schema.route.path] = schema;
    }

    // do not do anything if you are already on the required path
    if (props.route.fullPath === schema.route.path) {
        return;
    }
    
    isRouteChangeFromSchema = true;
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
// if no-schema event was emitted and we are expecting parent to set a new page schema
// no-schema is emitted when route changes and a schema does not exist
const onNoSchemaFound = async () => {
    if (props.routes?.length && props.route?.fullPath) {
        // find route config which matches path
        const targetRoute = props.routes.find(item => {
            if (typeof item.path === 'string') {
                return props.route?.fullPath === item.path;
            }
            return (props.route?.fullPath ?? '').match(item.path)?.length;
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
                const errorRoute = props.routes.find(item => item.path === 'error');
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
            const errorRoute = props.routes.find(item => item.path === 'error');
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
    () => props.route?.fullPath,
    () => {
        if (isRouteChangeFromSchema) {
            isRouteChangeFromSchema = false;
            return;
        }

        if (
            !props.route
            || !props.router
        ) {
            return;
        };

        const key = props.route?.fullPath ?? '';
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

const newReactiveVariableMap = computed(() => {
    if (localPage.value && localPage.value.initialData) {
        Object.keys(localPage.value.initialData).forEach((key) => {
            if (!localPage.value?.initialData) {
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
    return props.eventMap(newReactiveVariableMap.value, page.value?.data);
});

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