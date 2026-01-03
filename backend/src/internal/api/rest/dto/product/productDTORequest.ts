import { Expose } from 'class-transformer';
import { IsInt, IsString } from 'class-validator';
import { BASE_RESPONSE_PAGE_SIZE } from '@/constants';

export class ProductsDTORequest {
    @IsInt()
    @Expose()
    page: number = 1;

    @IsInt()
    @Expose()
    size: number = BASE_RESPONSE_PAGE_SIZE;

    @IsString()
    @Expose()
    title: string = '';

    @IsInt()
    @Expose()
    priceMin: number = -Infinity;

    @IsInt()
    @Expose()
    priceMax: number = Infinity;
}
