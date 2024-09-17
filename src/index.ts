import PageCrafter from './pageCrafter/PageCrafter.vue';

export type { IPage, GenericObject, EventMap, IPageData } from './pageCrafter/shared/interfaces';
export default {
    install: (app: any) => {
        app.component("PageCrafter", PageCrafter);
    }
};
