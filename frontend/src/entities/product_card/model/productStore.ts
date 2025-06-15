import { defineStore } from 'pinia';
import type { ProductCard } from '../types/product';
import { productsAPI } from '@/shared/api/productsAPI';

export const useProductStore = defineStore('products', {
    state: () => ({
        products: [] as ProductCard[],
        favoriteProducts: [] as ProductCard[],
        compareProducts: [] as ProductCard[],
        currentPage: 1,
        pageSize: 12,
        pagesCount: 0,
    }),

    getters: {
        getProducts: (state) => state.products,
        getFavoriteProducts: (state) => state.favoriteProducts,
        getCompareProducts: (state) => state.compareProducts,
        getCurrentPage: (state) => state.currentPage,
        getPageSize: (state) => state.pageSize,
        getPagesCount: (state) => state.pagesCount,
    },

    actions: {
        async setProducts(page: number, size: number) {
            const response = await productsAPI.getProducts(page, size);
            const { products, pagesCount } = response;
            console.log(products);

            this.products = products;
            this.pagesCount = pagesCount;
        },

        // TODO: Добавить метод получения списка избранных товаров
        // TODO: Добавить метод получения списка сравниваемых товаров

        setCurrentPage(page: number) {
            this.currentPage = page;
        },

        setPageSize(pageSize: number) {
            this.pageSize = pageSize;
        },
    },
});
