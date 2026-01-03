import { Expose } from 'class-transformer';
import { IsArray, IsInt } from 'class-validator';
import type { News } from 'src/internal/domain/news/news';

export class NewsDTOResponse {
    @IsArray()
    @Expose()
    news: News[] = [];

    @IsInt()
    @Expose()
    pagesCount: number = 1;
}

export class OneNewsDTOResponse {
    @Expose()
    news: News = {
        id: '0',
        title: '',
        description: '',
        author: '',
        dateOfCreation: Date.now(),
        img: '',
        htmlContent: '',
        type: 'article',
    };
}

export class NewsTypesCountDTOResponse {
    @IsInt()
    @Expose()
    news: number = 0;

    @IsInt()
    @Expose()
    tips: number = 0;

    @IsInt()
    @Expose()
    review: number = 0;

    @IsInt()
    @Expose()
    article: number = 0;
}

export class UpdateNewsDTOReponse {
    @Expose()
    news: News = {
        id: '0',
        title: '',
        description: '',
        author: '',
        dateOfCreation: Date.now(),
        img: '',
        htmlContent: '',
        type: 'article',
    };
}
