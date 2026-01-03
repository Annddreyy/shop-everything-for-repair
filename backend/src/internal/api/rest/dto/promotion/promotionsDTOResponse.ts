import { Expose } from 'class-transformer';
import { IsArray, IsInt } from 'class-validator';
import type { Promotion } from '@/internal/domain/promotion';

export class PromotionsDTOResponse {
    @IsArray()
    @Expose()
    promotions: Promotion[] = [];

    @IsInt()
    @Expose()
    pagesCount: number = 1;
}

export class PromotionDTOResponse {
    @Expose()
    promotion: Promotion = {
        id: '1',
        title: '',
        promotionPercent: 0,
        img: '',
    };
}
