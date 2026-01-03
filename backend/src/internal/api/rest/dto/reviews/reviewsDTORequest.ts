import { Expose } from 'class-transformer';
import { IsInt, IsString } from 'class-validator';
import { BASE_RESPONSE_PAGE_SIZE } from '@/constants';

export class ReviewsDTORequest {
    @IsInt()
    @Expose()
    page: number = 1;

    @IsInt()
    @Expose()
    size: number = BASE_RESPONSE_PAGE_SIZE;

    @IsString()
    sortBy: string = '';
}
