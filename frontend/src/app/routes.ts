import { createRouter, createWebHistory } from 'vue-router';
import {
    AboutCompany,
    Contacts,
    FAQPage,
    Main,
    News,
    Page404,
    PrivacyPolicy,
    Product,
    Promotions,
    Reviews,
} from '@/pages';

export const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        { path: '/', component: Main, name: 'main' },
        { path: '/reviews', component: Reviews, name: 'reviews' },
        { path: '/product/:id', component: Product, name: 'product' },
        { path: '/contacts', component: Contacts, name: 'contacts' },
        { path: '/faq', component: FAQPage, name: 'faq' },
        { path: '/news', component: News, name: 'news' },
        { path: '/promotions', component: Promotions, name: 'promotions' },
        {
            path: '/privacy-policy',
            component: PrivacyPolicy,
            name: 'privacy-policy',
        },
        {
            path: '/about-company',
            component: AboutCompany,
            name: 'about-company',
        },
        { path: '/:pathMatch(.*)*', component: Page404, name: '404' },
    ],
});
