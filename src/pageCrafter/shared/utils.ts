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
    reactiveVariableMap: GenericObject<Ref | ComputedRef>,
    eventMap: GenericObject<Function> = {}
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

        const variableStr = match[0];
        const start = match.index;
        const end = start + variableStr.length;

        if (start > 0) {
            splitStrArr.push(tempStr.substring(0, start));
        }
        const { variablePart, theRest } = getVariableAndParts(variableStr);
        if (reactiveVariableMap[variablePart] != null) {
            splitStrArr.push({
                rVar: reactiveVariableMap[variablePart],
                theRest
            });
        } else if (eventMap[variablePart] != null) {
            splitStrArr.push(eventMap[variablePart]);
        } else {
            splitStrArr.push(variableStr);
        }

        if (end >= tempStr.length) {
            tempStr = '';
        } else {
            tempStr = tempStr.substring(end);
        }
    }
    return splitStrArr;
};