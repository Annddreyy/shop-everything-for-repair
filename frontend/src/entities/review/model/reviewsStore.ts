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

        loading: false,
        error: null as string | null,
    }),

    actions: {
        async getReviews(page = 1, size = 10) {
            this.loading = true;

            const response = await reviewsAPI.getReviews(page, size);

            if (response.status === 'success') {
                const { reviews, pagesCount } = response.data;
                this.reviews = reviews;
                this.pagesCount = pagesCount;
            } else {
                this.error = response.error;
            }

            this.loading = false;
        },
    },
});
