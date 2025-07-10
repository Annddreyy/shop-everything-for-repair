type Status = 'хит' | 'новинка' | 'распродажа';

export interface IProductCard {
    id: string;
    title: string;
    img: string;
    price: number;
    article: string;
    statuses: Status[];
    promotionPercent?: number;
}
