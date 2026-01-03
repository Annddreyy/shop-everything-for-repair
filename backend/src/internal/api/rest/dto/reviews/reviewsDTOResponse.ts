import { Expose } from 'class-transformer';
import { IsArray, IsInt } from 'class-validator';
import type { Review } from '@/internal/domain/reviews';

export class ReviewsDTOResponse {
    @IsArray()
    @Expose()
    reviews: Review[] = [];

    @IsInt()
    @Expose()
    pagesCount: number = 1;
}
