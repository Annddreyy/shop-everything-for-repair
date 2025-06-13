import type { Promotion } from '@/entities/promotion/types/promotion';
import { instance } from '../config/api/api';

export const promotionsAPI = {
    async getPromotions(page: number, pageSize: number) {
        const response = await instance.get<Promotion[]>(
            `/promotions?page=${page}&size=${pageSize}`,
        );
        return response.data;
    },
};
