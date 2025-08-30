import { DEFAULT_API_RESPONSE_PAGE_VALUE } from '@/constants';
import type { Review } from '@/pages/Reviews/types';
import { defineStore } from 'pinia';

export const useReviewsStore = defineStore('reviews', {
    state: () => ({
        rewiews: [] as Review[],
        pageSize: DEFAULT_API_RESPONSE_PAGE_VALUE,
        pagesCount: 0,
        currentPage: 1,
    }),

    actions: {
        async getReviews() {},
    },
});
