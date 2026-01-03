import { Expose } from 'class-transformer';
import { IsInt } from 'class-validator';
import { BASE_RESPONSE_PAGE_SIZE } from '@/constants';

export class PromotionsDTORequest {
    @IsInt()
    @Expose()
    page: number = 1;

    @IsInt()
    @Expose()
    size: number = BASE_RESPONSE_PAGE_SIZE;
}
