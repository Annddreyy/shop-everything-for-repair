import { defineStore } from 'pinia';
import { faqAPI } from '../api';
import type { FAQ } from '../types';

export const useFAQStore = defineStore('faq', {
    state: () => ({
        faq: [] as FAQ[],
    }),

    actions: {
        async getFAQ() {
            this.faq = await faqAPI.getFAQ();
        },
    },
});
