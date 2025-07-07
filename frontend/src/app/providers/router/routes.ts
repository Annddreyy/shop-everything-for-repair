import ContactsPage from '@/pages/Contacts/ContactsPage.vue';
import MainPage from '@/pages/Main/MainPage.vue';
import ReviewsPage from '@/pages/Reviews/ReviewsPage.vue';
import { createRouter, createWebHistory } from 'vue-router';

export const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        { path: '/', component: MainPage, name: 'main' },
        { path: '/page', component: MainPage, name: 'page' },
        { path: '/reviews', component: ReviewsPage, name: 'reviews' },
        { path: '/contacts', component: ContactsPage, name: 'contacts' }
    ],
});
