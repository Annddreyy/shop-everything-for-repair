import { defineStore } from 'pinia';
import { DEFAULT_API_RESPONSE_PAGE_VALUE } from '@/constants';
import { promotionCardsAPI } from '../api';
import type { PromotionCard } from '../types';

export const usePromotionCardsStore = defineStore('promotionCards', {
    state: () => ({
        promotionCards: [] as PromotionCard[],
        pageSize: DEFAULT_API_RESPONSE_PAGE_VALUE,
        pagesCount: 0,
        currentPage: 1,
    }),

    actions: {
        async setPromotions(page = 1, pageSize = 4) {
            const response = await promotionCardsAPI.getPromotionCards(
                page,
                pageSize,
            );
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
