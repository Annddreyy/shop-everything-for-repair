import { instance } from '@/shared/api/api';
import type { FAQ } from '../types';

type GetFAQResponse = {
    faq: FAQ[];
};

export const faqAPI = {
    async getFAQ() {
        const response = await instance.get<GetFAQResponse>('/faq');
        const { faq } = response.data;
        return faq;
    },
};
