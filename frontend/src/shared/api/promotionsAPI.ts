import type { PromotionCard } from '@/entities/promotion_card/types/promotion.types';
import { instance } from '../config/api/api.config';

export type GetPromotionsResponse = {
    promotions: PromotionCard[];
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
