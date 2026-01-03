import { Expose } from 'class-transformer';
import { IsBoolean, IsString } from 'class-validator';

export class ConfirmEmailDTOResponse {
    @IsBoolean()
    @Expose()
    isConfirmed: boolean = false;
}

export class UserLoginDTOResponse {
    @IsString()
    @Expose()
    token: string = '';
}
