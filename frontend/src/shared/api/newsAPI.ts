import type { NewsCard } from '@/entities/newsCard/types/types';
import { instance } from '../config/api/api';

export type GetNewsResponse = {
    news: NewsCard[];
    pagesCount: number;
};

export const newsAPI = {
    async getNews(page: number, pageSize: number) {
        const response = await instance.get<GetNewsResponse>(
            `/news_cards?page=${page}&size=${pageSize}`,
        );
        return response.data;
    },
};
