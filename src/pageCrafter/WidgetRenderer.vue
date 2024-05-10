<template>
    <component
        :is="props.widgetMap[props.widget.type ?? ''] ?? props.widget.type"
        v-bind="propsBindings"
        v-on="props.widget.events ?? {}"
    >
        <template v-for="(slotName, index) in Object.keys(props.widget.slots ?? {})" :key="slotName + index" #[slotName]="slotProps">
            <WidgetsRenderer
                :widgets="JSON.parse(JSON.stringify((props.widget.slots ?? {})[slotName]))"
                :widgetMap="props.widgetMap"
                :eventMap="props.eventMap"
                :reactiveVariableMap="{ ...props.reactiveVariableMap, [props.widget.props?.id ?? '' + slotName + 'SlotProps']: slotProps }"
            />
        </template>
        <WidgetsRenderer
            v-if="props.widget.children"
            :widgets="props.widget.children"
            :widgetMap="props.widgetMap"
            :eventMap="props.eventMap"
            :reactiveVariableMap="props.reactiveVariableMap"
        />
    </component>
</template>
<script lang="ts">
import { Ref, ComputedRef, defineAsyncComponent, defineComponent } from 'vue';
import { IWidget, GenericObject } from './shared/interfaces';

// Could not use setup sugar here because we need to spread the widget.props when exposing to template
// as only then can the refs be opened
export default defineComponent({
    props: {
        widget: {
            type: Object as () => IWidget<Function | string>,
            default: () => {},
        },
        widgetMap: {
            type: Object as () => GenericObject,
            default: () => {}
        },
        eventMap: {
            type: Object as () => GenericObject<Function>,
            default: () => {}
        },
        reactiveVariableMap: {
            type: Object as () => GenericObject<Ref | ComputedRef>,
            default: () => {}
        }
    },
    components: {
        WidgetsRenderer: defineAsyncComponent(() => import(/* webpackChunkName: "WidgetsRenderer" */ './WidgetsRenderer.vue'))
    },
    setup(props) {
        return {
            props,
            ...props.widget.props,
            // After spreading the props, now we need to prepare the opened ref ready variables for v-bind
            // we know we need to use everything except props and the getter itself
            get propsBindings(): GenericObject {
                const output: GenericObject = {};
                // this refers to the returned object
                Object.keys(this).forEach(key => {
                    if (key !== 'propsBindings' && key !== 'props') {
                        output[key] = (this as any)[key];
                    }
                });
                return output;
            }
        };
    }
});
</script>