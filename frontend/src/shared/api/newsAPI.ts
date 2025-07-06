import type { INewsCard } from '@/entities/news_card/types/news';
import { instance } from '../config/api/api';

export type GetNewsResponse = {
    news: INewsCard[];
    pagesCount: number;
}

export const newsAPI = {
    async getNews(page: number, pageSize: number) {
        const response = await instance.get<{ news: INewsCard[]; pagesCount: number }>(
            `/news_cards?page=${page}&size=${pageSize}`,
        );
        return response.data;
    },
};
