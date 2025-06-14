import MainPage from '@/pages/Main/MainPage.vue';
import { createRouter, createWebHistory } from 'vue-router';

export const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        { path: '/', component: MainPage, name: 'main' },
        { path: '/page', component: MainPage, name: 'page' },
    ],
});
