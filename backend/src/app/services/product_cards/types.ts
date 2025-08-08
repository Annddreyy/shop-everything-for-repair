export type ProductCardStatus = 'хит' | 'новинка' | 'распродажа';

export interface ProductCard {
    title: string;
    price: number;
    promotionPercent?: number;
    img: string;
    article: string;
    statuses: ProductCardStatus[];
}
