import { defineStore } from 'pinia';
import { brandsAPI } from '../api/brands';

export interface Brand {
    id: string;
    img: string;
    title: string;
}

export const useBrandsStore = defineStore('bran', {
    state: () => ({
        brands: [] as Brand[],
        errorMessage: '',
        isLoading: false,
    }),

    actions: {
        async getBrands() {
            this.isLoading = true;
            this.errorMessage = '';

            const response = await brandsAPI.getBrands();

            if (response.status === 'success') {
                this.brands = response.data.brands;
            } else {
                this.errorMessage = response.error;
            }

            this.isLoading = false;
        },
    },
});
