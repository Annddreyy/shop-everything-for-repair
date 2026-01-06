import { Expose } from 'class-transformer';
import { IsString } from 'class-validator';

export class PromocodeDTOResponse {
    @Expose()
    @IsString()
    discount: number = 0;
}
