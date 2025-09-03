import { instance } from '@/shared/api/api';
import type { NewsCard } from '../types';
import { toast } from 'vue3-toastify';

export type GetNewsCardsResponse = {
    newsCards: NewsCard[];
    pagesCount: number;
};

export const newsCardsAPI = {
    async getNewsCards(
        page: number,
        pageSize: number,
    ): Promise<GetNewsCardsResponse> {
        try {
            const response = await instance.get<GetNewsCardsResponse>(
                `/news_cards?page=${page}&size=${pageSize}`,
            );
            return response.data;
        } catch {
            debugger;
            toast('Ошибка при получении списка новостей', { type: 'error' });
            return {
                newsCards: [],
                pagesCount: 0,
            };
        }
    },
};
