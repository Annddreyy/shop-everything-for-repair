import { Expose } from 'class-transformer';
import { IsString } from 'class-validator';

export class EmailDTOResponse {
    @Expose()
    @IsString()
    status = 'ok' as const;
}
