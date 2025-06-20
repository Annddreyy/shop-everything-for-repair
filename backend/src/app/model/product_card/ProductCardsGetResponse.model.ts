import { IProductCardView } from '../../../routes/productCards.routes';

export interface ProductCardsGetResponseModel {
    products: IProductCardView[];
    pagesCount: number;
}
