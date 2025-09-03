import { instance } from '@/shared/api/api';
import type { Review } from '../types';

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
