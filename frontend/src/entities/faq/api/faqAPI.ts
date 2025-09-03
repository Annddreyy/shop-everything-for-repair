import { instance } from '@/shared/api/api';
import type { FAQ } from '../types';
import { toast } from 'vue3-toastify';

type GetFAQResponse = {
    faq: FAQ[];
};

export const faqAPI = {
    async getFAQ() {
        try {
            const response = await instance.get<GetFAQResponse>('/faq');
            const { faq } = response.data;
            return faq;
        } catch {
            toast('При получении FAQ произошла ошибка', { type: 'error' });
            return [];
        }
    },
};
