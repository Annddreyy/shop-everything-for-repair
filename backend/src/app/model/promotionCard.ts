import { PromotionCard } from '../services/promotion_cards/types';

export interface PromotionCardsGetRequestModel {
    page: number;
    size: number;
}

export interface PromotionCardsGetResponseModel {
    promotions: PromotionCard[];
    pagesCount: number;
}
