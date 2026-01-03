import { instance } from '@/shared/api';
import { createApiError } from '@/shared/libs/api';
import type { Review } from '../model/reviewsStore';

type ReviewsDTO = BaseResponse<{
    reviews: Review[];
    pagesCount: number;
}>;

export const reviewsAPI = {
    async getReviews(page: number, size: number) {
        let response: ReviewsDTO;

        try {
            response = (
                await instance.get<ReviewsDTO>(
                    `/reviews?page=${page}&size=${size}`,
                )
            ).data;
        } catch (err: unknown) {
            return createApiError(err);
        }

        return response;
    },
};
