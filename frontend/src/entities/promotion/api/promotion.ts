import { instance } from '@/shared/api';
import type { Promotion } from '../model/usePromotions';
import { createApiError } from '@/shared/libs/api';

type PromotionsDTO = BaseResponse<{
    promotions: Promotion[];
    pagesCount: number;
}>;

export const promotionsAPI = {
    async getPromotions(page = 1, pageSize = 10) {
        let response: PromotionsDTO;

        try {
            response = (
                await instance.get<PromotionsDTO>(
                    `/promotions?page=${page}&size=${pageSize}`,
                )
            ).data;
        } catch (err: unknown) {
            return createApiError(err);
        }

        return response;
    },
};
