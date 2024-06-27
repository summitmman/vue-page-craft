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
import {
    Ref,
    ComputedRef,
    defineAsyncComponent,
    defineComponent,
    isRef,
    computed
} from 'vue';
import _get from 'lodash.get';
import { IWidget, GenericObject, DynamicStringSplit } from './shared/interfaces';
import { regex } from './shared/constants';
import { splitDynamicStr } from './shared/utils';

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
        /**
         * Initialize and massage widget props and events
         */
        const initializePropsEvents = () => {
            const { widget } = props;
            // prepare events
            if (widget.events) {
                Object.keys(widget.events).forEach(eventName => {
                    if (!widget.events) {
                        return;
                    }

                    const eventValue = widget.events && widget.events[eventName];
                    if (typeof eventValue === 'function') {
                        return;
                    }
                    if (eventValue && props.eventMap[eventValue]) {
                        widget.events[eventName] = props.eventMap[eventValue];
                    } else {
                        widget.events[eventName] = () => {
                            console.error(`Event ${eventValue} not found`);
                        };
                    }
                });
            }

            // prepare props for v-model
            // NOTE: v-model will only work on custom Vue components not native html components
            if (widget.props) {
                Object.keys(widget.props).forEach(propName => {
                    if (!widget.props) {
                        return;
                    }
                    // provide dynamic values
                    if (widget.props[propName]) {
                        const value = widget.props[propName];
                        if (typeof value === 'string') {
                            const match = regex.exec(value);
                            if (match) {
                                const splitStrArr: DynamicStringSplit = splitDynamicStr(value, props.reactiveVariableMap);
                                if (splitStrArr.length === 1) {
                                    const item = splitStrArr[0];
                                    if (typeof item !== 'string' && typeof item !== 'function') {
                                        const { rVar, theRest } = item;
                                        if (theRest) {
                                            if (isRef(rVar)) {
                                                widget.props[propName] = _get(rVar.value, theRest);
                                            } else {
                                                widget.props[propName] = _get(rVar, theRest);
                                            }
                                        }
                                        else
                                            widget.props[propName] = rVar;
                                    } else {
                                        widget.props[propName] = item;
                                    }
                                } else {
                                    widget.props[propName] = computed(() => {
                                        return splitStrArr.reduce((str, item) => {
                                            if (typeof item === 'function') {
                                                return str;
                                            }

                                            if (typeof item === 'string') {
                                                return str + item;
                                            }

                                            const { rVar, theRest } = item;
                                            if (theRest) {
                                                str += _get(rVar.value, theRest);
                                            } else {
                                                str += rVar.value;
                                            }
                                            return str;
                                        }, '');
                                    });
                                }
                            }
                        }
                    }
                    // handle v-model separately
                    if (propName.includes('v-model')) {
                        const vModelComponents = propName.split(':');
                        const vModelName = vModelComponents[1] ?? 'modelValue';
                        
                        // add prop for v-model
                        widget.props[vModelName] = widget.props[propName];

                        // add event for v-model
                        if (!widget.events) {
                            widget.events = {};
                        }
                        widget.events[`update:${vModelName}`] = (value: any): void => {
                            if (widget.props)
                                widget.props[propName].value = value;
                        };
                    }
                });
            }

            // Provide default props for internal components
            // v-if
            if (widget.type === 'v-if') {
                if (!widget.props) {
                    widget.props = {};
                }
                widget.props.widgetMap = props.widgetMap.value;
                widget.props.eventMap = props.eventMap;
                widget.props.reactiveVariableMap = props.reactiveVariableMap;
            }
            // v-for
            if (widget.type === 'v-for') {
                if (!widget.props) {
                    widget.props = {};
                }
                widget.props.loopChildren = widget.children;
                widget.props.widgetMap = props.widgetMap.value;
                widget.props.eventMap = props.eventMap;
                widget.props.reactiveVariableMap = props.reactiveVariableMap;
            }
        };
        initializePropsEvents();
        
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