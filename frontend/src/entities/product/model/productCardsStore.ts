import { defineStore } from 'pinia';
import { productsAPI } from '@/shared/api/models/productsAPI';
import type { ProductCard } from '../types';
import { DEFAULT_API_RESPONSE_PAGE_VALUE } from '@/constants';

type ProductCardsStoreType = {
    products: ProductCard[];
    favoriteProducts: ProductCard[];
    compareProducts: ProductCard[];
    currentPage: number;
    pageSize: number;
    pagesCount: number;
};

export const useProductCardsStore = defineStore<
    'productCards',
    ProductCardsStoreType
>('productCards', {
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
            const response = await productsAPI.getProducts(page, size);
            const { products, pagesCount } = response;

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
