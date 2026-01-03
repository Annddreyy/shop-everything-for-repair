import { defineStore } from 'pinia';
import { DEFAULT_API_RESPONSE_PAGE_VALUE } from '@/constants';
import { newsAPI } from '../api/news';

export type NewsType = 'news' | 'tips' | 'article' | 'review';

export interface News {
    id: string;
    img: string;
    title: string;
    description: string;
    dateOfCreation: Date;
    type: NewsType;
    htmlContent: string;
    author: string;
}

export const useNewsStore = defineStore('news', {
    state: () => ({
        news: [] as News[],

        pageSize: DEFAULT_API_RESPONSE_PAGE_VALUE,
        pagesCount: 0,
        currentPage: 1,

        countOfTypes: {
            news: 0,
            tips: 0,
            article: 0,
            review: 0,
        },

        isLoading: false,
        errorMessage: '',
    }),

    actions: {
        async getNews(page = 1, pageSize = 4, type?: NewsType) {
            this.isLoading = true;
            this.errorMessage = '';

            const response = await newsAPI.getNews(page, pageSize, type);

            if (response.status === 'success') {
                const { news, pagesCount } = response.data;
                this.news = news.map((currentNews) => ({
                    ...currentNews,
                    dateOfCreation: new Date(currentNews.dateOfCreation),
                }));
                this.pagesCount = pagesCount;
            } else {
                this.errorMessage = response.error;
            }

            this.isLoading = false;
        },

        async getCountOfTypes() {
            this.isLoading = true;
            this.errorMessage = '';

            const response = await newsAPI.getNewsCountOfTypes();

            if (response.status === 'success') {
                this.countOfTypes = response.data;
            } else {
                this.errorMessage = response.error;
            }

            this.isLoading = false;
        },
    },
});
