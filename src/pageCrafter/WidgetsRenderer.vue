<template>
    <template
        v-for="(widget, index) in massagedWidgets"
        :key="(typeof widget === 'string' ? widget : widget.id + widget.type) + index"
    >
        <DynamicString v-if="typeof widget === 'string'" :str="widget" :reactiveVariableMap="props.reactiveVariableMap" />
        <WidgetRenderer v-else :widget="widget" :widgetMap="localWidgetMap" :eventMap="props.eventMap" :reactiveVariableMap="props.reactiveVariableMap" />
    </template>
</template>
<script setup lang="ts">
import { ComputedRef, Ref, computed, defineAsyncComponent, isRef } from 'vue';
import _get from 'lodash.get';
import { Widgets, GenericObject, DynamicStringSplit } from './shared/interfaces';
import { regex } from './shared/constants';
import WidgetRenderer from './WidgetRenderer.vue';
import { splitDynamicStr } from './shared/utils';

const DynamicString = defineAsyncComponent(() => import(/* webpackChunkName: "DynamicString" */ './DynamicString.vue'));
const VIf = defineAsyncComponent(() => import(/* webpackChunkName: "VIf" */ './components/VIf.vue'));
const VFor = defineAsyncComponent(() => import(/* webpackChunkName: "VFor" */ './components/VFor.vue'));

const props = defineProps({
    widgets: {
        type: Array as () => Widgets<string | Function>,
        default: () => [],
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
});

const localWidgetMap = computed(() => ({
    ...props.widgetMap,
    'v-if': VIf,
    'v-for': VFor,
}));

// Handle all string to mapped object conversions here; of only current level
const massagedWidgets: ComputedRef<Widgets<string | Function>> = computed(() => props.widgets.map(widget => {
    if (typeof widget === 'string') {
        return widget;
    }

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
        widget.props.widgetMap = localWidgetMap.value;
        widget.props.eventMap = props.eventMap;
        widget.props.reactiveVariableMap = props.reactiveVariableMap;
    }
    // v-for
    if (widget.type === 'v-for') {
        if (!widget.props) {
            widget.props = {};
        }
        widget.props.loopChildren = widget.children;
        widget.props.widgetMap = localWidgetMap.value;
        widget.props.eventMap = props.eventMap;
        widget.props.reactiveVariableMap = props.reactiveVariableMap;
    }

    return widget;
}));

</script>