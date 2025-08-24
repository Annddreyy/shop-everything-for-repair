export interface PromotionCard {
    title: string;
    promotionPercent: number;
    backgroundImg: string;
}

export type PromotionCardDBWithoutID = Omit<PromotionCard, 'id'>;
