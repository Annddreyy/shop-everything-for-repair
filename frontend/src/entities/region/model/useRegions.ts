import { defineStore } from 'pinia';
import { regionsAPI } from '../api/regions';

export interface Region {
    id: string;
    city: string;
    phone: string;
    email: string;
}

export const useRegionsStore = defineStore('regions', {
    state: () => ({
        regions: [] as Region[],
        errorMessage: '',
        isLoading: false,
    }),

    actions: {
        async getRegions() {
            this.isLoading = true;
            this.errorMessage = '';

            const response = await regionsAPI.getRegions();

            if (response.status === 'success') {
                this.regions = response.data;
            } else {
                this.errorMessage = response.error;
            }

            this.isLoading = false;
        },
    },
});
