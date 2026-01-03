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

    @Expose()
    @IsString()
    patronymic: string | null = null;

    @Expose()
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
