import { defineStore } from 'pinia';
import { faqAPI } from '../api/faq';

export interface FAQ {
    id: string;
    question: string;
    answer: string;
}

export const useFAQStore = defineStore('faq', {
    state: () => ({
        faq: [] as FAQ[],
        errorMessage: '',
        isLoading: false,
    }),

    actions: {
        async getFAQ() {
            this.isLoading = true;
            this.errorMessage = '';

            const response = await faqAPI.getFAQ();
            console.log(response);

            if (response.status === 'success') {
                console.log(response.data);
                this.faq = response.data.faqs;
            } else {
                this.errorMessage = response.error;
            }

            this.isLoading = false;
        },
    },
});
