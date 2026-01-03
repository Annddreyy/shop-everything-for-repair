import { createApp } from 'vue';
import { createPinia } from 'pinia';
import Vue3Toastify from 'vue3-toastify';

import './styles/index.scss';
import 'vue3-toastify/dist/index.css';
import 'vue-skeletor/dist/vue-skeletor.css';

import App from './App.vue';
import { router } from './routes';

const app = createApp(App);

app.use(Vue3Toastify, {
    autoClose: 5000,
    theme: 'colored',
    style: {
        color: 'white',
    },
    error: {
        style: {
            color: 'white',
        },
    },
});
app.use(router);
app.use(createPinia());

app.mount('#app');
