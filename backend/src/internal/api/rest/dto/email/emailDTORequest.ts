import { Expose } from "class-transformer";
import { IsString } from "class-validator";

export class EmailDTORequest {
    @Expose()
    @IsString()
    to: string = '';

    @Expose()
    @IsString()
    subject: string = '';

    @Expose()
    @IsString()
    html: string = '';
}
