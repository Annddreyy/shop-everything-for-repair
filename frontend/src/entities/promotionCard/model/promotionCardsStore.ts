import { defineStore } from 'pinia';
import { promotionsAPI } from '@/shared/api/promotionsAPI';
import { DEFAULT_API_RESPONSE_PAGE_VALUE } from '@/constants';
import type { PromotionCard } from '../types';

type PromotionCardsStoreType = {
    promotionCards: PromotionCard[];
    currentPage: number;
    pageSize: number;
    pagesCount: number;
};

export const usePromotionCardsStore = defineStore<
    'promotionCards',
    PromotionCardsStoreType
>('promotionCards', {
    state: () => ({
        promotionCards: [] as PromotionCard[],
        pageSize: DEFAULT_API_RESPONSE_PAGE_VALUE,
        pagesCount: 0,
        currentPage: 1,
    }),

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
