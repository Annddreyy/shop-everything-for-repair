import { IPromotionCard } from '../../services/promotionCards.service';

export interface PromotionCardsGetResponseModel {
    promotions: IPromotionCard[];
    pagesCount: number;
}
