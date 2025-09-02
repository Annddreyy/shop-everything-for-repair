import { DEFAULT_API_RESPONSE_PAGE_VALUE } from '@/constants';
import type { Review } from '../types';
import { reviewsAPI } from '../api';
import { defineStore } from 'pinia';

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
