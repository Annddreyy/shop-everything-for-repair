import { NewsCard } from '../../app/services/news_cards/types';

export interface NewsCardsGetRequestModel {
    page: number;
    size: number;
}

export interface NewsCardsGetResponseModel {
    newsCards: NewsCard[];
    pagesCount: number;
}
