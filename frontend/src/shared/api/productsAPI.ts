import type { ProductCard } from '@/entities/product_card/types/product';
import { instance } from '../config/api/api';

export type GetProductsResponse = {
    products: ProductCard[];
    pagesCount: number;
};

export const productsAPI = {
    async getProducts(page: number, size: number) {
        const response = await instance.get<GetProductsResponse>(
            `/products?page=${page}&size=${size}`,
        );
        return response.data;
    },
};
