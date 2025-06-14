import { PromotionCard } from "../../db/db";

export interface PromotionCardsGetResponseModel {
    promotions: PromotionCard[];
    pagesCount: number
}