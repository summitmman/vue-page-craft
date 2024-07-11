import { Ref, ComputedRef } from 'vue';
import { NavigationType } from './enums';

export type GenericObject<T=any> = {[key: string]: T};
export type Widgets<T = Function> = Array<IWidget<T> | string>;
export type EventMap<T = GenericObject<Ref | ComputedRef>> = (state: T, store: GenericObject<Ref | ComputedRef>, extra?: GenericObject) => GenericObject<Function>;

export interface IWidget<T = Function> {
    id?: string;
    type: string;
    props?: GenericObject;
    events?: GenericObject<T>;
    children?: Widgets<T>;
    slots?: GenericObject<Widgets<T>>;
}

export interface IPageRoute {
    path: string;
    navigationType?: NavigationType;
}

export interface IPage {
    id: string;
    route?: IPageRoute;
    dataz?: {
        state?: GenericObject;
        store?: GenericObject;
        extra?: GenericObject;
    };
    children: Widgets<string>;
}

export interface IVariableParts {
    variablePart: string;
    theRest: string;
}

export type DynamicStringSplit = Array<string | { rVar: Ref | ComputedRef, theRest: string} | Function>;

export interface IRouteConfig {
    path: RegExp | string;
    schemaFetch: (error?: any) => Promise<IPage>;
    beforeNavigate?: Function;
    afterNavigate?: Function;
}
