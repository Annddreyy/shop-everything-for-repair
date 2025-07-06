import type { IPromotion } from '@/entities/promotion_card/types/promotion';
import { instance } from '../config/api/api';

export type GetPromotionsResponse = {
    promotions: IPromotion[];
    pagesCount: number;
};

export const promotionsAPI = {
    async getPromotions(page: number, pageSize: number) {
        const response = await instance.get<GetPromotionsResponse>(
            `/promotion_cards?page=${page}&size=${pageSize}`,
        );
        return response.data;
    },
};
