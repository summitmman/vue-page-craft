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
import { ref, Ref, ComputedRef, isRef, computed, watch, onMounted, onUnmounted, ShallowRef, shallowRef } from 'vue';
import { IPage, GenericObject, EventMap, IRouteRecord } from './shared/interfaces';
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

// All flags required for route support
let localRoute: IRouteRecord | null = null;
let localRouter: Array<IRouteRecord> = [];
let historyPointer: number = -1;
let isBackClicked = false;
let isForwardClicked = false;


// Need to do this if props.page is a ref variable.
// Ref page would cause page to recursively update itself
// possible reason is that props.page.initialData is linked, maybe
const localPage: ShallowRef<IPage> = shallowRef(JSON.parse(JSON.stringify(page.value)));
const schemaRoute = (schema: IPage) => {
    // Then check if routing is needed
    // not needed if route and router objects were not passed or if schema does not demand routing
    if (
        !schema.route?.path
        || !props.route
        || !props.router
    ) {
        return;
    }
    
    // if routing is possible and requested then set current route
    localRoute = {
        path: schema.route.path,
        schema: schema
    };

    // if we are already coming from a routing navigation event, then do not handling routing further
    // and reset the flags if this was the case
    if (
        isBackClicked
        || isForwardClicked
    ) {
        isBackClicked = false;
        isForwardClicked = false;
        return;
    }

    // replace or push
    // TODO: handle replaceIfFirst
    if (schema.route.navigationType === NavigationType.Replace) {
        // if its the first request and its a replace, then we need to create the current state
        if (!localRouter.length && historyPointer === -1) {
            localRouter.push(localRoute);
            historyPointer++;
        } else {
            // else replace navigation state whichever position you are on the navigation history
            localRouter[historyPointer] = localRoute;
        }
        
        // actual browser replace call
        props.router.replace(schema.route.path);
    } else {
        // remove any forward navigation history before pushing new route
        if (historyPointer === -1 && localRouter.length) {
            localRouter = [];
        } else if (historyPointer > -1 && historyPointer < localRouter.length - 1) {
            localRouter.splice(historyPointer + 1);
        }
        // now add new route to the navigation history
        localRouter.push(localRoute);
        historyPointer++;

        // actual browser push call, creating browser entry
        props.router.push(schema.route.path);
    }
};
const loadSchema = (schema: IPage) => {
    // First load latest schema in shallowRef to update ui
    localPage.value = JSON.parse(JSON.stringify(schema));
    // route if the schema demands it
    schemaRoute(schema);
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

// Schema handling for browser back and forward events
const browserNavigationListener = (event: any) => {
    // if current path is part of the forward state then user has clicked on back
    isBackClicked = event?.state?.forward && localRoute?.path && event.state.forward === localRoute.path;
    // if current path is part of the back state then user has clicked on forward
    isForwardClicked = event?.state?.back && localRoute?.path && event.state.back === localRoute?.path;

    if (isBackClicked) {
        // if historyPointer is already at minimum then do nothing, because there is nothing to go back to
        if (historyPointer <= -1) {
            return;
        }

        // get previous path and schema from routing history
        const prevPage = localRouter[historyPointer - 1];
        if (prevPage) {
            // let minimum value of historyPointer be -1
            historyPointer = historyPointer < 0 ? -1 : historyPointer - 1;
            // set previous schema
            page.value = prevPage.schema;
            // set previous state as current
            localRoute = prevPage;
        }
    } else if (isForwardClicked) {
        // if historyPointer has exceeded the navigation history then do nothing, because there is nothing to go forward to
        if (historyPointer >= localRouter.length - 1) {
            return;
        }

        // get the forward state from routing history
        const nextPage = localRouter[historyPointer + 1];
        if (nextPage) {
            historyPointer += 1;
            // set forward schema
            page.value = nextPage.schema;
            // set forward state as current
            localRoute = nextPage;
        }
    }
};
onMounted(() => {
    if (props.route && props.router)
        window.addEventListener('popstate', browserNavigationListener);
});
onUnmounted(() => {
    window.removeEventListener('popstate', browserNavigationListener);
});

</script>