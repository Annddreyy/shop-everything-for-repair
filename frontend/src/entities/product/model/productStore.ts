import { defineStore } from 'pinia';
import type { Product } from '../types/product';
import { productsAPI } from '@/shared/api/productsAPI';

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
