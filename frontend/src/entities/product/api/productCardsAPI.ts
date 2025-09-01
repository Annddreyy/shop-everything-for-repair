import type { ProductCard } from '../types';
import { instance } from '@/shared/api/api';

export type GetProductCardsResponse = {
    products: ProductCard[];
    pagesCount: number;
};

export const productCardsAPI = {
    async getProductCards(page: number, size: number) {
        const response = await instance.get<GetProductCardsResponse>(
            `/product_cards?page=${page}&size=${size}`,
        );
        return response.data;
    },
};
