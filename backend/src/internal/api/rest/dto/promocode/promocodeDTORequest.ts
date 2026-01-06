import { Expose } from 'class-transformer';
import { IsString } from 'class-validator';

export class PromocodeDTORequest {
    @Expose()
    @IsString()
    code: string = '';
}
