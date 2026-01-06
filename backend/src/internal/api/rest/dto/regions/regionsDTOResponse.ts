import { Expose } from 'class-transformer';
import { IsArray } from 'class-validator';
import { Region } from '@/internal/domain/region';

export class RegionsDTOResponse {
    @Expose()
    @IsArray()
    regions: Region[] = [];
}
