import { Expose } from 'class-transformer';
import { IsString } from 'class-validator';

export class UserDTORequest {
    @Expose()
    @IsString()
    surname: string = '';

    @Expose()
    @IsString()
    name: string = '';

    @Expose()
    @IsString()
    email: string = '';

    @Expose()
    @IsString()
    password: string = '';

    @IsString()
    patronymic: string | null = null;

    @IsString()
    phone: string | null = null;
}

export class UserLoginDTORequest {
    @Expose()
    @IsString()
    email: string = '';

    @Expose()
    @IsString()
    password: string = '';
}

export class ConfirmEmailDTORequest {
    @Expose()
    @IsString()
    code: string = '';

    @Expose()
    @IsString()
    email: string = '';
}
