import { Expose } from 'class-transformer';
import { NewsCard } from '@/app/services/news_cards/types';

export class NewsCardDTORequest {
    @Expose()
    page!: number;

    @Expose()
    size!: number;
}

export class NewsCardDTOResponse {
    @Expose()
    newsCards!: NewsCard[];

    @Expose()
    pagesCount!: number;
}
