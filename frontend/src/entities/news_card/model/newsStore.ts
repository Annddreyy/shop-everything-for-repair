import { defineStore } from 'pinia';
import type { NewsCard } from '../types/news';
import { newsAPI } from '@/shared/api/newsAPI';

export const useNewsStore = defineStore('news', {
    state: () => ({
        news: [] as NewsCard[],
        currentPage: 1,
        pageSize: 12,
        pagesCount: 0,
    }),

    getters: {
        getNewsCards: (state) => state.news,
        getCurrentPage: (state) => state.currentPage,
        getPageSize: (state) => state.pageSize,
        getPagesCount: (state) => state.pagesCount,
    },

    actions: {
        async setNews(page = 1, pageSize = 4) {
            const response = await newsAPI.getNews(page, pageSize);
            const { news, pagesCount } = response;

            this.news = news.map((n) => ({
                ...n,
                date: new Date(n.date),
            }));

            console.log(this.news);

            this.pagesCount = pagesCount;
        },

        setCurrentPage(page: number) {
            this.currentPage = page;
        },

        setPageSize(pageSize: number) {
            this.pageSize = pageSize;
        },
    },
});
