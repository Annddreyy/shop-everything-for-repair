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

        loading: false,
        error: null as string | null,
    }),

    actions: {
        async setPromotions(page = 1, pageSize = 4) {
            this.loading = true;

            const response = await promotionCardsAPI.getPromotionCards(
                page,
                pageSize,
            );

            if (response.status === 'success') {
                const { promotions, pagesCount } = response.data;

                this.promotionCards = promotions;
                this.pagesCount = pagesCount;
            } else {
                this.error = response.error;
            }

            this.loading = false;
        },

        setCurrentPage(page: number) {
            this.currentPage = page;
        },

        setPageSize(pageSize: number) {
            this.pageSize = pageSize;
        },
    },
});
