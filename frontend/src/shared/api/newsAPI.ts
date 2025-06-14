import type { NewsCard } from '@/entities/news/types/news';
import { instance } from '../config/api/api';

export const newsAPI = {
    async getNews(page: number, pageSize: number) {
        const response = await instance.get<{ news: NewsCard[]; pagesCount: number }>(
            `/news?page=${page}&size=${pageSize}`,
        );
        return response.data;
    },
};
