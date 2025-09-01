import type { Review } from '@/entities/review/types';
import { instance } from '../config/api/api';

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
