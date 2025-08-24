import { Expose } from 'class-transformer';
import { PromotionCard } from '@/app/services/promotion_cards/types';

export class PromotionCardDTORequest {
    @Expose()
    page!: number;

    @Expose()
    size!: number;
}

export class PromotionCardDTOResponse {
    @Expose()
    promotions!: PromotionCard[];

    @Expose()
    pagesCount!: number;
}
