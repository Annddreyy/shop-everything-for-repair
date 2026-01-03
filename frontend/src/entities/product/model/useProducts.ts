import { defineStore } from 'pinia';
import { DEFAULT_API_RESPONSE_PAGE_VALUE } from '@/constants';
import { productsAPI } from '../api/products';

type Status = 'хит' | 'новинка' | 'распродажа';

export interface Product {
    id: string;
    title: string;
    mainImg: string;
    price: number;
    article: string;
    statuses: Status[];
    promotionPercent?: number;
}

export const useProductsStore = defineStore('productCards', {
    state: () => ({
        products: [] as Product[],

        pageSize: DEFAULT_API_RESPONSE_PAGE_VALUE,
        pagesCount: 0,
        currentPage: 1,

        isLoading: false,
        errorMessage: '',
    }),

    actions: {
        async getProducts(page = 1, size = 4) {
            this.isLoading = true;
            this.errorMessage = '';

            const response = await productsAPI.getProduct(page, size);

            if (response.status === 'success') {
                const { products, pagesCount } = response.data;

                this.products = products;
                this.pagesCount = pagesCount;
            } else {
                this.errorMessage = response.error;
            }

            this.isLoading = false;
        },
    },
});
