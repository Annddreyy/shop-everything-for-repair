import { ProductCardView } from '../../routes/productCards';

export interface ProductCardsGetRequestModel {
    page: number;
    size: number;
    title: string;
    price_min: number;
    price_max: number;
}

export interface ProductCardsGetResponseModel {
    products: ProductCardView[];
    pagesCount: number;
}
