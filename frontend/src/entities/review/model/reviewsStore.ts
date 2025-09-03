import { defineStore } from 'pinia';
import { DEFAULT_API_RESPONSE_PAGE_VALUE } from '@/constants';
import { reviewsAPI } from '../api';
import type { Review } from '../types';

export const useReviewsStore = defineStore('reviews', {
    state: () => ({
        reviews: [] as Review[],
        pageSize: DEFAULT_API_RESPONSE_PAGE_VALUE,
        pagesCount: 0,
        currentPage: 1,
    }),

    actions: {
        async getReviews(page = 1, size = 10) {
            const { reviewsDB, pagesCount } = await reviewsAPI.getReviews(
                page,
                size,
            );
            this.reviews = reviewsDB;
            this.pagesCount = pagesCount;
        },
    },
});
