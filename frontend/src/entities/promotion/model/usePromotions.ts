import { defineStore } from 'pinia';
import { DEFAULT_API_RESPONSE_PAGE_VALUE } from '@/constants';
import { promotionsAPI } from '../api/promotion';

export interface Promotion {
    id: string;
    title: string;
    description?: string;
    promotionPercent: number;
    img: string;
    isSliderPromotion?: boolean;
}

export const usePromotionsStore = defineStore('promotion', {
    state: () => ({
        promotions: [] as Promotion[],
        sliderPromotions: [] as Promotion[],

        pageSize: DEFAULT_API_RESPONSE_PAGE_VALUE,
        pagesCount: 0,
        currentPage: 1,

        isLoading: false,
        errorMessage: null as string | null,
    }),

    actions: {
        async getPromotions(page = 1, pageSize = 4) {
            this.isLoading = true;
            this.errorMessage = '';

            const response = await promotionsAPI.getPromotions(page, pageSize);

            if (response.status === 'success') {
                const { promotions, pagesCount } = response.data;
                this.promotions = promotions;
                this.pagesCount = pagesCount;
            } else {
                this.errorMessage = response.error;
            }

            this.isLoading = false;
        },
    },
});
