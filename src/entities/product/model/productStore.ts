import { defineStore } from 'pinia';
import type { Product } from '../types/product';
import { productsAPI } from '@/shared/api/products';

export const useProductStore = defineStore('products', {
    state: () => ({
        products: [] as Product[],
        favoriteProducts: [] as Product[],
        compareProducts: [] as Product[],
    }),

    getters: {},

    actions: {
        async setProducts() {
            this.products = await productsAPI.getProducts();
        },
    },
});
