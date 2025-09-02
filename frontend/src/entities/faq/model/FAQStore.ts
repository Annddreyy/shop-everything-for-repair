import { defineStore } from 'pinia';
import type { FAQ } from '../types';
import { faqAPI } from '../api';

export const useFAQStore = defineStore('faq', {
    state: () => ({
        faq: [] as FAQ[],
    }),

    actions: {
        async getFAQ() {
            const faq = await faqAPI.getFAQ();
            this.faq = faq;
        },
    },
});
