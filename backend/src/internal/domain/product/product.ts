type ProductStatus = 'хит' | 'новинка' | 'распродажа';

export interface Product {
    id: string;

    title: string;
    category: string;
    description: string;
    statuses: ProductStatus[];
    characteristics: Record<string, string>;

    count: number;
    price: number;
    promotionPercent?: number;

    images: string[];
    mainImg: string;

    about: string;
}

export type ProductCategory = {
    title: string;
    img: string;
    link: `/${string}`;
};
