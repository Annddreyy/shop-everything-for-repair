type Status = 'хит' | 'новинка' | 'распродажа';

export interface ProductCard {
    id: string;
    title: string;
    img: string;
    price: number;
    article: string;
    statuses: Status[];
    promotionPercent?: number;
}
