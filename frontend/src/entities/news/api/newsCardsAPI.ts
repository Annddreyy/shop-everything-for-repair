import type { NewsCard } from '../types';
import { instance } from '@/shared/api/api';

export type GetNewsCardsResponse = {
    newsCards: NewsCard[];
    pagesCount: number;
};

export const newsCardsAPI = {
    async getNewsCards(page: number, pageSize: number) {
        const response = await instance.get<GetNewsCardsResponse>(
            `/news_cards?page=${page}&size=${pageSize}`,
        );
        return response.data;
    },
};
