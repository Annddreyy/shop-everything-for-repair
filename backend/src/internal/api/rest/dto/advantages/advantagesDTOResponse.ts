import { Expose } from 'class-transformer';
import { IsArray } from 'class-validator';
import type { Advantage } from '@/internal/domain/advantage';

export class AdvantagesDTOResponse {
    @Expose()
    @IsArray()
    advantages: Advantage[] = [];
}
