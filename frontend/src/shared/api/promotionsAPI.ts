import type { Promotion } from '@/entities/promotion_card/types/promotion';
import { instance } from '../config/api/api';

export type GetPromotionsResponse = {
    promotions: Promotion[];
    pagesCount: number;
};

export const promotionsAPI = {
    async getPromotions(page: number, pageSize: number) {
        const response = await instance.get<GetPromotionsResponse>(
            `/promotions?page=${page}&size=${pageSize}`,
        );
        return response.data;
    },
};
