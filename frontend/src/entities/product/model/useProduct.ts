import { defineStore } from 'pinia';
import { productAPI } from '../api/product';

export type Characteristic = [string, string];

export interface Product {
    id: number;
    title: string;
    article: string;
    images: string[];
    price: number;
    promotionPercent: number;
    category: string;
    count: number;
    characteristics: Characteristic[];
    about: string;
}

export const useProductStore = defineStore('product', {
    state: () => ({
        product: {
            id: 0,
            title: '',
            article: '',
            images: [] as string[],
            price: 0,
            promotionPercent: 0,
            category: '',
            count: 25,
            characteristics: [] as Characteristic[],
            about: '',
        },
        errorMessage: '',
        isLoading: false,
    }),

    actions: {
        async getProductInformation(id: string) {
            this.isLoading = true;
            this.errorMessage = '';

            const response = await productAPI.getProductInformation(id);

            if (response.status === 'success') {
                this.product = response.data[0];
            } else {
                this.errorMessage = response.error;
            }

            this.isLoading = false;
        },
    },
});
