import { defineStore } from 'pinia';
import type { Promotion } from '../types/promotion';
import { promotionsAPI } from '@/shared/api/promotionsAPI';

export const usePromotionCardsStore = defineStore('promotionCards', {
    state: () => ({
        promotionCards: [] as Promotion[],
        currentPage: 1,
        pageSize: 12,
        pagesCount: 0,
    }),

    getters: {
        getPromotions: (state) => state.promotionCards,
        getCurrentPage: (state) => state.currentPage,
        getPageSize: (state) => state.pageSize,
        getPagesCount: (state) => state.pagesCount,
    },

    actions: {
        async setPromotions(page = 1, pageSize = 4) {
            const response = await promotionsAPI.getPromotions(page, pageSize);
            const { promotions, pagesCount } = response;

            this.promotionCards = promotions;
            this.pagesCount = pagesCount;
        },

        setCurrentPage(page: number) {
            this.currentPage = page;
        },

        setPageSize(pageSize: number) {
            this.pageSize = pageSize;
        },
    },
});
