import { Expose } from 'class-transformer';
import { IsArray } from 'class-validator';
import type { Brand } from '@/internal/domain/brand';

export class BrandsDTOResponse {
    @Expose()
    @IsArray()
    brands: Brand[] = [];
}
