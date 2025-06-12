type Status = 'хит' | 'новинка' | 'распродажа';

export interface Product {
    id: number;
    title: string;
    img: string;
    price: number;
    article: string;
    statuses: Status[];
    promotionPercent?: number;
    isFavorite: boolean;
    isComparable: boolean,
    isInCart: boolean,
};
