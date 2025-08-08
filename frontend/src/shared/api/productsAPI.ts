import type { ProductCard } from '@/entities/product_card/types/product.types';
import { instance } from '../config/api/api.config';

export type GetProductsResponse = {
    products: ProductCard[];
    pagesCount: number;
};

export const productsAPI = {
    async getProducts(page: number, size: number) {
        const response = await instance.get<GetProductsResponse>(
            `/product_cards?page=${page}&size=${size}`,
        );
        return response.data;
    },
};
