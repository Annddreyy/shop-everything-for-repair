import type { Product } from '@/entities/product/types/product';
import { instance } from '../config/api/api';

export const productsAPI = {
    async getProducts(page = 1, size = 1) {
        const response = await instance.get<Product[]>(
            `/products?page=${page}&size=${size}`,
        );
        return response.data;
    },
};
