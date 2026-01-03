import { defineStore } from 'pinia';
import { DEFAULT_API_RESPONSE_PAGE_VALUE } from '@/constants';
import { reviewsAPI } from '../api/reviews';

export interface Review {
    id: string;
    author: string;
    date: Date;
    text: string;
    images?: string[];
}

export const useReviewsStore = defineStore('reviews', {
    state: () => ({
        reviews: [] as Review[],

        pageSize: DEFAULT_API_RESPONSE_PAGE_VALUE,
        pagesCount: 0,
        currentPage: 1,

        errorMessage: '',
        isLoading: false,
    }),

    actions: {
        async getReviews(page = 1, size = DEFAULT_API_RESPONSE_PAGE_VALUE) {
            this.isLoading = true;
            this.errorMessage = '';

            const response = await reviewsAPI.getReviews(page, size);

            if (response.status === 'success') {
                const { reviews, pagesCount } = response.data;
                this.reviews = reviews;
                this.pagesCount = pagesCount;
            } else {
                this.errorMessage = response.error;
            }

            this.isLoading = false;
        },
    },
});
