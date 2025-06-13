import { defineStore } from 'pinia';
import type { NewsCard } from '../types/news';
import { newsAPI } from '@/shared/api/newsAPI';

export const useNewsStore = defineStore('news', {
    state: () => ({
        news: [] as NewsCard[],
    }),

    getters: {
        getNewsCards: (state) => state.news,
    },

    actions: {
        async setNews(page = 1, pageSize = 4) {
            const response = await newsAPI.getNews(page, pageSize);
            this.news = response.map((n) => ({
                ...n,
                date: new Date(n.date),
            }));
        },
    },
});
