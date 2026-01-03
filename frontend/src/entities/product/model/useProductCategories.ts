import { defineStore } from 'pinia';
import { productCategoriesAPI } from '../api/productCategories';

export type ProductCategory = {
    title: string;
    img: string;
    link: `/${string}`;
};

export const useProductCategoriesStore = defineStore('productCategories', {
    state: () => ({
        productCategories: [] as ProductCategory[],
        errorMessage: '',
        isLoading: false,
    }),

    actions: {
        async getCategories() {
            this.isLoading = true;
            this.errorMessage = '';

            const response = await productCategoriesAPI.getProductCategories();

            if (response.status === 'success') {
                this.productCategories = response.data;
            } else {
                this.errorMessage = response.error;
            }

            this.isLoading = false;
        },
    },
});
