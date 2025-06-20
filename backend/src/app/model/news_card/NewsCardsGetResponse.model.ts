import { INewsCard } from '../../services/newsCards.service';

export interface NewsCardsGetResponseModel {
    newsCards: INewsCard[];
    pagesCount: number;
}
