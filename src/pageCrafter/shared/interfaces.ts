import { Ref, ComputedRef } from 'vue';
import { NavigationType } from './enums';

export type GenericObject<T=any> = {[key: string]: T};
export type Widgets<T = Function> = Array<IWidget<T> | string>;
export type EventMap<
    T = GenericObject<Ref | ComputedRef>,
    S = GenericObject<Ref | ComputedRef>,
    E = GenericObject
> = (
    state: T,
    store: S,
    extra: E
) => GenericObject<Function>;

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

export interface IPageData {
    state?: GenericObject<Ref | ComputedRef | any>;
    store?: GenericObject<Ref | ComputedRef | any>;
    extra?: GenericObject;
}

export interface IPage {
    id: string;
    route?: IPageRoute;
    data?: IPageData;
    schema: Widgets<string>;
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
export interface IPageRouting {
    route: {
        fullPath: string
    };
    router: {
        push: Function;
        replace: Function;
    };
    routes: Array<IRouteConfig>;
}
