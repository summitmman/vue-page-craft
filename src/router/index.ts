import { createRouter, createWebHistory } from 'vue-router';

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
        path: '/test',
        name: 'test',
        component: () => import('../views/Test.vue')
    },
]

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})