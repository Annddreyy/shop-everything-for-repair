import { Expose } from 'class-transformer';
import { IsInt, IsString, Max } from 'class-validator';
import { BASE_RESPONSE_PAGE_SIZE } from '@/constants';
import type { NewsType } from '@/internal/domain/news';

export class NewsDTORequest {
    @IsInt()
    @Max(100)
    @Expose()
    page: number = 1;

    @IsInt()
    @Max(100)
    @Expose()
    size: number = BASE_RESPONSE_PAGE_SIZE;

    @IsString()
    type?: NewsType;
}

export class NewsCreateDTORequest {
    @Expose()
    @IsString()
    img: string = '';

    @Expose()
    @IsString()
    title: string = '';

    @Expose()
    @IsString()
    description: string = '';

    @Expose()
    @IsInt()
    dateOfCreation: number = 0;

    @Expose()
    @IsString()
    author: string = '';

    @Expose()
    @IsString()
    type: NewsType = 'article';

    @Expose()
    @IsString()
    htmlContent: string = '';
}
