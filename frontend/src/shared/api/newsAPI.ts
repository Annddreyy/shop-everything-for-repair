import type { NewsCard } from '@/entities/news_card/types/news.types';
import { instance } from '../config/api/api.config';

export type GetNewsResponse = {
    news: NewsCard[];
    pagesCount: number;
};

export const newsAPI = {
    async getNews(page: number, pageSize: number) {
        const response = await instance.get<{
            news: NewsCard[];
            pagesCount: number;
        }>(`/news_cards?page=${page}&size=${pageSize}`);
        return response.data;
    },
};
