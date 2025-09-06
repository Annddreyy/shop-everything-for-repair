import {
    instance,
    type AxiosBaseResponse,
    type BaseResponse,
} from '@/shared/api/api';
import type { PromotionCard } from '../types';

type AxiosGetPromotionsResponse = AxiosBaseResponse<{
    promotions: PromotionCard[];
    pagesCount: number;
}>;

type GetPromotionsResponse = BaseResponse<{
    promotions: PromotionCard[];
    pagesCount: number;
}>;

export const promotionCardsAPI = {
    async getPromotionCards(
        page: number,
        pageSize: number,
    ): Promise<GetPromotionsResponse> {
        try {
            const response = await instance.get<AxiosGetPromotionsResponse>(
                `/promotion_cards?page=${page}&size=${pageSize}`,
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
