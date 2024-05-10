import { Ref, ComputedRef } from 'vue';

export type GenericObject<T=any> = {[key: string]: T};
export type Widgets<T = Function> = Array<IWidget<T> | string>;
export type EventMap = (reactiveVariables: GenericObject<Ref | ComputedRef>) => GenericObject<Function>

export interface IWidget<T = Function> {
    id?: string;
    type: string;
    props?: GenericObject;
    events?: GenericObject<T>;
    children?: Widgets<T>;
    slots?: GenericObject<Widgets<T>>;
}

export interface IPage {
    id: string;
    initialData?: GenericObject;
    children: Widgets<string>;
}

export interface IVariableParts {
    variablePart: string;
    theRest: string;
}

export type DynamicStringSplit = Array<string | { rVar: Ref | ComputedRef, theRest: string} | Function>;