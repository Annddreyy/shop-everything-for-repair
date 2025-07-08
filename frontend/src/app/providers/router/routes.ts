import Page404Page from '@/pages/404/Page404Page.vue';
import ContactsPage from '@/pages/Contacts/ContactsPage.vue';
import FAQPage from '@/pages/FAQ/FAQPage.vue';
import MainPage from '@/pages/Main/MainPage.vue';
import ReviewsPage from '@/pages/Reviews/ReviewsPage.vue';
import { createRouter, createWebHistory } from 'vue-router';

export const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        { path: '/', component: MainPage, name: 'main' },
        { path: '/page', component: MainPage, name: 'page' },
        { path: '/reviews', component: ReviewsPage, name: 'reviews' },
        { path: '/contacts', component: ContactsPage, name: 'contacts' },
        { path: '/faq', component: FAQPage, name: 'faq' },
        // 
        { path: '/:pathMatch(.*)*', component: Page404Page, name: '404' },
    ],
});
