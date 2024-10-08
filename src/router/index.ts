import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'native',
        component: () => import('../views/Native.vue')
    },
    {
        path: '/vuetify',
        name: 'vuetify',
        component: () => import('../views/Vuetify.vue')
    },
    {
        path: '/naiveui',
        name: 'naiveui',
        component: () => import('../views/NaiveUI.vue')
    },
    {
        path: '/routing',
        component: () => import('../views/Routing.vue'),
        children: [
            {
                path: '',
                name: 'routing',
                component: () => import('../views/RoutingChild.vue'),
            },
            // separate business logic events for specific routes
            // NOTE: These are custom implementation and has no standard way. You may implement your own logic
            {
                path: '/routing/page1',
                // prop will be passed through beforeEnter
                props: (route: any) => { console.log('SUMIT LOG', 'set props through route', Object.keys(route.meta.eventsByRoute)); return { eventsByRoute: route.meta.eventsByRoute }},
                // before entering the route, fetch the business logic layer
                beforeEnter: (to: any, _from: any, next: any) => {
                    import('../bl/page1Events').then(data => {
                        console.log('SUMIT LOG', 'events fetched', Object.keys(data), Object.keys(data.events));
                        to.meta.eventsByRoute = data.events;
                        next();
                    });
                },
                component: () => import('../views/RoutingChild.vue')
            },
            {
                path: '/routing/page2',
                // prop will be passed through beforeEnter
                props: (route: any) => ({ eventsByRoute: route.meta.eventsByRoute }),
                // before entering the route, fetch the business logic layer
                beforeEnter: (to: any, _from: any, next: any) => {
                    import('../bl/page2Events').then(data => {
                        to.meta.eventsByRoute = data.events;
                        next();
                    });
                },
                component: () => import('../views/RoutingChild.vue')
            },
            // default route
            {
                path: '/routing/:pathMatch(.*)',
                component: () => import('../views/RoutingChild.vue'),
            }
        ]
    },
    {
        path: '/test',
        name: 'test',
        component: () => import('../views/Test.vue')
    },
    {
        path: '/:pathMatch(.*)',
        component: () => import('../views/Test.vue')
    }
]

export const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
})