import { defineStore } from 'pinia';
import { DEFAULT_API_RESPONSE_PAGE_VALUE } from '@/constants';
import { newsCardsAPI } from '../api';
import type { NewsCard } from '../types';

export const useNewsCardsStore = defineStore('newsCards', {
    state: () => ({
        newsCards: [] as NewsCard[],
        pageSize: DEFAULT_API_RESPONSE_PAGE_VALUE,
        pagesCount: 0,
        currentPage: 1,
        loading: false,
        error: null as string | null,
    }),

    actions: {
        async setNews(page = 1, pageSize = 4) {
            this.loading = true;

            const response = await newsCardsAPI.getNewsCards(page, pageSize);

            if (response.status === 'success') {
                const { newsCards, pagesCount } = response.data;
                this.newsCards = newsCards.map((n) => ({
                    ...n,
                    date: new Date(n.date),
                }));
                this.pagesCount = pagesCount;
            } else {
                this.error = response.error;
            }

            this.loading = false;
        },

        setCurrentPage(page: number) {
            this.currentPage = page;
        },

        setPageSize(pageSize: number) {
            this.pageSize = pageSize;
        },
    },
});
