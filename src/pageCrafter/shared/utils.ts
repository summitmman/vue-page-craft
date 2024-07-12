import { ComputedRef, Ref } from 'vue';
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
        const match = regex.exec(tempStr);
        if (match == null) {
            splitStrArr.push(tempStr);
            tempStr = '';
            continue;
        }

        let variableStr = match[0];
        const start = match.index;
        const end = start + variableStr.length;
        let isStoreVariable = false;

        if (start > 0) {
            splitStrArr.push(tempStr.substring(0, start));
        }
        if (variableStr.includes('store.')) {
            variableStr = variableStr.replace('store.','');
            isStoreVariable = true;
        }
        const { variablePart, theRest } = getVariableAndParts(variableStr);
        if (isStoreVariable && store[variablePart] != null) {
            splitStrArr.push({
                rVar: store[variablePart],
                theRest
            });
        } else if (state[variablePart] != null) {
            splitStrArr.push({
                rVar: state[variablePart],
                theRest
            });
        } else if (events[variablePart] != null) {
            splitStrArr.push(events[variablePart]);
        } else {
            splitStrArr.push(match[0]);
        }

        if (end >= tempStr.length) {
            tempStr = '';
        } else {
            tempStr = tempStr.substring(end);
        }
    }
    return splitStrArr;
};