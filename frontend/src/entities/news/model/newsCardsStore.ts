import { defineStore } from 'pinia';

import { newsAPI } from '@/shared/api/models/newsAPI';
import { DEFAULT_API_RESPONSE_PAGE_VALUE } from '@/constants';

import type { NewsCard } from '../types/types';

type NewsCardsStoreType = {
    newsCards: NewsCard[];
    pageSize: number;
    pagesCount: number;
    currentPage: number;
};

export const useNewsCardsStore = defineStore<'newsCards', NewsCardsStoreType>(
    'newsCards',
    {
        state: () => ({
            newsCards: [] as NewsCard[],
            pageSize: DEFAULT_API_RESPONSE_PAGE_VALUE,
            pagesCount: 0,
            currentPage: 1,
        }),

        actions: {
            async setNews(page = 1, pageSize = 4) {
                const response = await newsAPI.getNews(page, pageSize);
                const { newsCards, pagesCount } = response;

                console.log(newsCards);
                this.newsCards = newsCards.map((n) => ({
                    ...n,
                    date: new Date(n.date),
                }));

                this.pagesCount = pagesCount;
            },

            setCurrentPage(page: number) {
                this.currentPage = page;
            },

            setPageSize(pageSize: number) {
                this.pageSize = pageSize;
            },
        },
    },
);
