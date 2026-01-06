import { defineStore } from 'pinia';
import { advantagesAPI } from '../api/advantages';

export interface Advantage {
    id: string;
    img: string;
    description: string;
    fullDescription?: string;
}

export const useAdvantagesStore = defineStore('advantages', {
    state: () => ({
        advantages: [] as Advantage[],
        errorMessage: '',
        isLoading: false,
    }),

    actions: {
        async getAdvantages() {
            this.isLoading = true;
            this.errorMessage = '';

            const response = await advantagesAPI.getAdvantages();
            if (response.status === 'success') {
                this.advantages = response.data.advantages;
            } else {
                this.errorMessage = response.error;
            }

            this.isLoading = false;
        },
    },
});
