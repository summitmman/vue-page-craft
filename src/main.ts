// Packages
import { createApp } from 'vue';
// Component
import App from './App.vue';
// Router
import { router } from './router';
// Vuetify
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg';
import { createVuetify } from 'vuetify';
// JSON Viewer
import JsonViewer from 'vue3-json-viewer';
import "vue3-json-viewer/dist/index.css";
// styles
import './style.css';

// Create App
const app = createApp(App);

// Use
// Router
app.use(router);
//Vuetify
const vuetify = createVuetify({
    icons: {
        defaultSet: 'mdi',
        aliases,
        sets: {
            mdi,
        },
    },
})
app.use(vuetify);
app.use(JsonViewer);

// Mount
app.mount('#app');
