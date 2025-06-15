import { ProductCard } from '../../db/db';

export interface ProductCardsGetResponseModel {
    products: ProductCard[];
    pagesCount: number;
}
