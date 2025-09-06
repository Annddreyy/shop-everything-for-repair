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

        loading: false,
        error: null as string | null,
    }),

    actions: {
        async setProducts(page: number, size: number) {
            this.loading = true;

            const response = await productCardsAPI.getProductCards(page, size);

            if (response.status === 'success') {
                const { products, pagesCount } = response.data;

                this.products = products;
                this.pagesCount = pagesCount;
            } else {
                this.error = response.error;
            }

            this.loading = false;
        },

        setCurrentPage(page: number) {
            this.currentPage = page;
        },

        setPageSize(pageSize: number) {
            this.pageSize = pageSize;
        },
    },
});
