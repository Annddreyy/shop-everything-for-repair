import './../assets/scss/index.scss';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import { router } from './providers/router/routes';

const app = createApp(App);

app.use(router);
app.use(createPinia());

app.mount('#app');
