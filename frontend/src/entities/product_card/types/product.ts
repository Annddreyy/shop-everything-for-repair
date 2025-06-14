type Status = 'хит' | 'новинка' | 'распродажа';

export interface ProductCard {
    id: number;
    title: string;
    img: string;
    price: number;
    article: string;
    statuses: Status[];
    promotionPercent?: number;
}
