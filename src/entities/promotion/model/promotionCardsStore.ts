import { defineStore } from 'pinia';
import type { Promotion } from '../types/promotion';
import { promotionsAPI } from '@/shared/api/promotionsAPI';

export const usePromotionCardsStore = defineStore('promotionCards', {
    state: () => ({
        promotionCards: [] as Promotion[],
        currentPage: 1,
        pageSize: 12,
    }),

    getters: {
        getPromotions: (state) => state.promotionCards,
        getCurrentPage: (state) => state.currentPage,
        getPageSize: (state) => state.pageSize,
    },

    actions: {
        async setPromotions(page = 1, pageSize = 4) {
            const promotions = await promotionsAPI.getPromotions(
                page,
                pageSize,
            );
            this.promotionCards = promotions;
        },

        setCurrentPage(page: number) {
            this.currentPage = page;
        },

        setPageSize(pageSize: number) {
            this.pageSize = pageSize;
        },
    },
});
