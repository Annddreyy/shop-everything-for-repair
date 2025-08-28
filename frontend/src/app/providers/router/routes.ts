import {
    AboutCompanyPage,
    ContactsPage,
    FAQPage,
    MainPage,
    Page404Page,
    PrivacyPolicy,
    ProductPage,
    ReviewsPage,
} from '@/pages';
import { createRouter, createWebHistory } from 'vue-router';

export const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        { path: '/p', component: MainPage, name: 'main' },
        { path: '/reviews', component: ReviewsPage, name: 'reviews' },
        { path: '/product/:id', component: ProductPage, name: 'product' },
        { path: '/contacts', component: ContactsPage, name: 'contacts' },
        { path: '/faq', component: FAQPage, name: 'faq' },
        {
            path: '/privacy-policy',
            component: PrivacyPolicy,
            name: 'privacy-policy',
        },
        {
            path: '/about-company',
            component: AboutCompanyPage,
            name: 'about-company',
        },
        { path: '/:pathMatch(.*)*', component: Page404Page, name: '404' },
    ],
});
