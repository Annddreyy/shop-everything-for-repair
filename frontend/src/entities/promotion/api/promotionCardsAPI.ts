import { instance } from '@/shared/api/api';
import type { PromotionCard } from '../types';
import { toast } from 'vue3-toastify';

export type GetPromotionsResponse = {
    promotions: PromotionCard[];
    pagesCount: number;
};

export const promotionCardsAPI = {
    async getPromotionCards(
        page: number,
        pageSize: number,
    ): Promise<GetPromotionsResponse> {
        try {
            const response = await instance.get<GetPromotionsResponse>(
                `/promotion_cards?page=${page}&size=${pageSize}`,
            );
            return response.data;
        } catch {
            debugger;
            toast('Ошибка при получении списка акций', { type: 'error' });
            return {
                promotions: [],
                pagesCount: 0,
            };
        }
    },
};
