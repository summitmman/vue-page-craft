import { ComputedRef, ref, Ref } from 'vue';
import { DynamicStringSplit, GenericObject, IVariableParts } from './interfaces';
import { regex } from './constants';

export const getVariableAndParts = (variableStr: string): IVariableParts => {
    const variable = variableStr.replace('{{', '').replace('}}', '').trim();
    const reg = new RegExp(/[\.\[\?]/);
    const specialIndex = reg.exec(variable)?.index ?? -1;
    let variablePart = variable;
    let theRest = '';
    if (specialIndex > -1) {
        variablePart = variable.substring(0, specialIndex);
        theRest = variable.substring(specialIndex + 1);
    }
    return {
        variablePart,
        theRest
    };
};

export const splitDynamicStr = (
    value: string,
    state: GenericObject<Ref | ComputedRef>,
    store: GenericObject<Ref | ComputedRef> = {},
    events: GenericObject<Function> = {}
): DynamicStringSplit => {
    let tempStr = value;
    const splitStrArr: DynamicStringSplit = [];
    while (tempStr) {
        // check if string contains regex matching {{ abc }}
        const match = regex.exec(tempStr);
        // if it does not then push the string as is and end the loop
        if (match == null) {
            splitStrArr.push(tempStr);
            tempStr = '';
            continue;
        }

        // if match exists then find static and dynamic parts
        let variableStr = match[0];
        const start = match.index;
        const end = start + variableStr.length;
        let isStoreVariable = false;

        // save static string first
        if (start > 0) {
            splitStrArr.push(tempStr.substring(0, start));
        }
        // now process for dynamic part; extract variable and its nested properties
        // for that first handle store vs state
        if (variableStr.includes('store.')) {
            variableStr = variableStr.replace('store.','');
            isStoreVariable = true;
        }
        // get variables root name and the nested property
        const { variablePart, theRest } = getVariableAndParts(variableStr);
        // now its time to save dynamic ref and its nesting
        // first check if this was part of store
        if (isStoreVariable && store[variablePart] != null) {
            splitStrArr.push({
                rVar: store[variablePart],
                theRest
            });
        } else if (state[variablePart] != null) {
            // next we can check for state
            splitStrArr.push({
                rVar: state[variablePart],
                theRest
            });
        } else if (events[variablePart] != null) {
            // then we can check for events
            splitStrArr.push(events[variablePart]);
        } else {
            // if we do not find any of it, the variable does not exist, so we should create a ref with value undefined and assign it
            const undefinedRef = ref(undefined);
            if (isStoreVariable) {
                store[variablePart] = undefinedRef;
            } else {
                state[variablePart] = undefinedRef;
            }
            splitStrArr.push({
                rVar: undefinedRef,
                theRest: ''
            });
        }

        if (end >= tempStr.length) {
            tempStr = '';
        } else {
            tempStr = tempStr.substring(end);
        }
    }
    return splitStrArr;
};