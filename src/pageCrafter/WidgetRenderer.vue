<template>
    <component
        :is="props.widgets[props.schema.type ?? ''] ?? props.schema.type"
        v-bind="propsBindings"
        v-on="props.schema.events ?? {}"
    >
        <template v-for="(slotName, index) in Object.keys(props.schema.slots ?? {})" :key="slotName + index" #[slotName]="slotProps">
            <WidgetsRenderer
                :schema="JSON.parse(JSON.stringify((props.schema.slots ?? {})[slotName]))"
                :widgets="props.widgets"
                :events="props.events"
                :state="{ ...props.state, [props.schema.props?.id ?? '' + slotName.replace(/[^(a-z)(A-Z)(0-9)_$]/gm, '') + 'SlotProps']: slotProps }"
                :store="props.store"
            />
        </template>
        <WidgetsRenderer
            v-if="props.schema.children"
            :schema="props.schema.children"
            :widgets="props.widgets"
            :events="props.events"
            :state="props.state"
            :store="props.store"
        />
    </component>
</template>
<script lang="ts">
import {
    Ref,
    ComputedRef,
    defineComponent,
    isRef,
    computed
} from 'vue';
import _get from 'lodash.get';
import { IWidget, GenericObject, DynamicStringSplit } from './shared/interfaces';
import { regex } from './shared/constants';
import { splitDynamicStr } from './shared/utils';
import WidgetsRenderer from './WidgetsRenderer.vue';

// Could not use setup sugar here because we need to spread the widget.props when exposing to template
// as only then can the refs be opened
export default defineComponent({
    props: {
        schema: {
            type: Object as () => IWidget<Function | string>,
            default: () => {},
        },
        widgets: {
            type: Object as () => GenericObject,
            default: () => {}
        },
        events: {
            type: Object as () => GenericObject<Function>,
            default: () => {}
        },
        state: {
            type: Object as () => GenericObject<Ref | ComputedRef>,
            default: () => {}
        },
        store: {
            type: Object as () => GenericObject<Ref | ComputedRef>,
            default: () => {}
        }
    },
    components: {
        WidgetsRenderer
    },
    setup(props) {
        /**
         * Initialize and massage widget props and events
         */
        const initializePropsEvents = () => {
            const { schema } = props;
            
            // Prepare events; replace string with actual function
            if (schema.events) {
                Object.keys(schema.events).forEach(eventName => {
                    if (!schema.events) {
                        return;
                    }

                    // check if event is already a function instead of a string key
                    const eventValue = schema.events && schema.events[eventName];
                    if (typeof eventValue === 'function') {
                        return;
                    }
                    let localEventValue = eventValue.replace('{{', '').replace('}}', '').trim();
                    // check if event name has a mapped function
                    if (localEventValue && props.events[localEventValue]) {
                        schema.events[eventName] = props.events[localEventValue];
                    } else {
                        schema.events[eventName] = () => {
                            console.error(`Event ${localEventValue} not found`);
                        };
                    }
                });
            }

            // Prepare props; replace reactive string with variable and prepare v-models
            // NOTE: v-model will only work on custom Vue components not native html components
            if (schema.props) {
                Object.keys(schema.props).forEach(propName => {
                    if (!schema.props) {
                        return;
                    }

                    // provide dynamic values
                    if (schema.props[propName] != null) {
                        const value = schema.props[propName];
                        // if the value of the prop is string then check if it is supposed to be reactive
                        if (typeof value === 'string') {
                            // check if string is of reactive format {{ abc }} or contains it
                            const match = regex.exec(value);
                            if (match) {
                                // We need to split the string to replace reactive format with the actual reactive variable
                                const splitStrArr: DynamicStringSplit = splitDynamicStr(value, props.state, props.store);
                                // if the split only has reactive variable then simply use its .value eg: "{{ name.firstName }}"
                                if (splitStrArr.length === 1) {
                                    const item = splitStrArr[0];
                                    // reactive variables will be of type { rVar: Ref | ComputedRef, theRest: string}, string and functions are untouched here
                                    if (typeof item !== 'string' && typeof item !== 'function') {
                                        // reactive variables might have a nested property eg: name.firstName
                                        const { rVar, theRest } = item;
                                        // if the variable has a nested property, then just extract that and pass in props
                                        if (theRest) {
                                            if (isRef(rVar)) {
                                                schema.props[propName] = _get(rVar.value, theRest);
                                            } else {
                                                schema.props[propName] = _get(rVar, theRest);
                                            }
                                        }
                                        else // else pass in the reactive variable directly
                                            schema.props[propName] = rVar;
                                    } else {
                                        // if string or function, pass it as is; props can also be functions
                                        schema.props[propName] = item;
                                    }
                                } else {
                                    // if the split contains a sentence then convert it to a computed property to keep it reactive. eg: "My name is {{ name.firstName }}"
                                    schema.props[propName] = computed(() => {
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

                    // handle v-model separately after the above massaging
                    if (propName.includes('v-model')) {
                        // support for multiple v-models
                        const vModelComponents = propName.split(':');
                        const vModelName = vModelComponents[1] ?? 'modelValue';

                        // v-model translates to modelValue prop and update:modelValue event
                        // we will have to do this manually
                        
                        // add prop for v-model
                        schema.props[vModelName] = schema.props[propName];

                        // add event for v-model
                        if (!schema.events) {
                            schema.events = {};
                        }
                        schema.events[`update:${vModelName}`] = (value: any): void => {
                            if (schema.props)
                                schema.props[propName].value = value;
                        };
                    }
                });
            }

            // Provide default props for internal components provided by PageCraft
            // v-if
            if (schema.type === 'v-if') {
                if (!schema.props) {
                    schema.props = {};
                }
                schema.props.widgets = props.widgets;
                schema.props.events = props.events;
                schema.props.state = props.state;
                schema.props.store = props.store;
            }
            // v-for
            if (schema.type === 'v-for') {
                if (!schema.props) {
                    schema.props = {};
                }
                schema.props.loopChildren = schema.children;
                schema.props.widgets = props.widgets;
                schema.props.events = props.events;
                schema.props.state = props.state;
                schema.props.store = props.store;
            }
        };
        initializePropsEvents();
        
        return {
            props,
            ...props.schema.props,
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