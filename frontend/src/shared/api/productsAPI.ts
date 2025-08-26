import type { ProductCard } from '@/entities/productCard/types/types';
import { instance } from '../config/api/api';

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
