import {
    instance,
    type AxiosBaseResponse,
    type BaseResponse,
} from '@/shared/api/api';
import type { Review } from '../types';

type AxiosGetReviewsResponse = AxiosBaseResponse<{
    reviews: Review[];
    pagesCount: number;
}>;

type GetReviewsResponse = BaseResponse<{
    reviews: Review[];
    pagesCount: number;
}>;

export const reviewsAPI = {
    async getReviews(page: number, size: number): Promise<GetReviewsResponse> {
        try {
            const response = await instance.get<AxiosGetReviewsResponse>(
                `/reviews?page=${page}&size=${size}`,
            );
            return {
                status: 'success',
                data: response.data.data,
            };
        } catch (error: unknown) {
            if (error instanceof Error) {
                return {
                    status: 'error',
                    error: error.message,
                };
            }
            return {
                status: 'error',
                error: String(error),
            };
        }
    },
};
