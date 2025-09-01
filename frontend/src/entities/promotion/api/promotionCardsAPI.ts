import type { PromotionCard } from '../types';
import { instance } from '../../../shared/api/api';

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
