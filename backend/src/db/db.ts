type Status = 'хит' | 'новинка' | 'распродажа';

export interface ProductCard {
    id: string;
    title: string;
    price: number;
    promotionPercent: number;
    img: string;
    article: string;
    statuses: Status[];
}

export interface NewsCard {
    id: string;
    img: string;
    title: string;
    description: string;
    date: Date;
}

export interface PromotionCard {
    id: string;
    title: string;
    promotionPercent: number;
    backgroundImg: string;
}
