import { DEFAULT_API_RESPONSE_PAGE_VALUE } from '@/constants';
import type { Review } from '@/pages/Reviews/types';
import { reviewsAPI } from '@/shared/api/models/reviewsAPI';
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
            console.log(reviewsDB);
            this.reviews = reviewsDB;
            this.pagesCount = pagesCount;
        },
    },
});
