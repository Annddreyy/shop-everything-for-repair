import { defineStore } from 'pinia';
import { productsAPI } from '@/shared/api/productsAPI';
import type { ProductCard } from '../types';

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
        currentPage: 1,
        pageSize: 12,
        pagesCount: 0,
    }),

    actions: {
        async setProducts(page: number, size: number) {
            const response = await productsAPI.getProducts(page, size);
            const { products, pagesCount } = response;

            debugger;

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
