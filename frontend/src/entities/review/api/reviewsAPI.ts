import type { Review } from '../types';
import { instance } from '@/shared/api/api';

export type GetReviewsResponse = {
    reviews: Review[];
    pagesCount: number;
};

export const reviewsAPI = {
    async getReviews(page: number, size: number) {
        const response = await instance.get<GetReviewsResponse>(
            `/reviews?page=${page}&size=${size}`,
        );
        return response.data;
    },
};
