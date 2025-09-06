import { defineStore } from 'pinia';
import { faqAPI } from '../api';
import type { FAQ } from '../types';

export const useFAQStore = defineStore('faq', {
    state: () => ({
        faq: [] as FAQ[],
        loading: false,
        error: null as string | null,
    }),

    actions: {
        async getFAQ() {
            this.loading = true;
            this.error = null;

            try {
                const response = await faqAPI.getFAQ();
                if (response.status === 'success') {
                    this.faq = response.faq;
                } else {
                    throw new Error(response.error);
                }
            } catch (error: unknown) {
                if (error instanceof Error) {
                    this.error = error.message;
                } else {
                    this.error = String(error);
                }
            } finally {
                this.loading = false;
            }
        },
    },
});
