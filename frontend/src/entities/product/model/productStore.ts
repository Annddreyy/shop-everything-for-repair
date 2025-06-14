import { defineStore } from 'pinia';
import type { Product } from '../types/product';
import { productsAPI } from '@/shared/api/productsAPI';

export const useProductStore = defineStore('products', {
    state: () => ({
        products: [] as Product[],
        favoriteProducts: [] as Product[],
        compareProducts: [] as Product[],
    }),

    getters: {
        getProducts: (state) => state.products,
    },

    actions: {
        async setProducts(page: number, size: number) {
            this.products = (await productsAPI.getProducts(page, size)).products;
        },
    },
});
