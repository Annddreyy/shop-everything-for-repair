import { defineStore } from 'pinia';
import { DEFAULT_API_RESPONSE_PAGE_VALUE } from '@/constants';
import { productCardsAPI } from '../api';
import type { ProductCard } from '../types';

export const useProductCardsStore = defineStore('productCards', {
    state: () => ({
        products: [] as ProductCard[],
        favoriteProducts: [] as ProductCard[],
        compareProducts: [] as ProductCard[],
        pageSize: DEFAULT_API_RESPONSE_PAGE_VALUE,
        pagesCount: 0,
        currentPage: 1,
    }),

    actions: {
        async setProducts(page: number, size: number) {
            const response = await productCardsAPI.getProductCards(page, size);
            const { products, pagesCount } = response;

            this.products = products;
            this.pagesCount = pagesCount;
        },

        setCurrentPage(page: number) {
            this.currentPage = page;
        },

        setPageSize(pageSize: number) {
            this.pageSize = pageSize;
        },
    },
});
