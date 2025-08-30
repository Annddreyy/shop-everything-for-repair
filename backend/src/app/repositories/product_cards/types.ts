import { ProductCardStatus } from '../../../app/services/product_cards/types';

export interface ProductCardDB {
    _id: ObjectId;
    title: string;
    price: number;
    promotionPercent?: number;
    img: string;
    article: string;
    statuses: ProductCardStatus[];
}

export type ProductCardWithoutId = WithoutId<ProductCardDB>;

export type FindProductCardsType = {
    page: number;
    size: number;
    title?: string;
    price_min?: number;
    price_max?: number;
};
