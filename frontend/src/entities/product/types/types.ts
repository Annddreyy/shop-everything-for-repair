export type Characteristic = {
    title: string;
    value: string;
};

export interface Product {
    id: number;
    title: string;
    article: string;
    images: string[];
    price: number;
    promotionPercent: number;
    category: string;
    count: number;
    characteristics: Characteristic[];
    about: string;
}
